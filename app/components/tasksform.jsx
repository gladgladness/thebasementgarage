'use client'
import { useState, useEffect } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getVehicleData } from '../backend/actions';


export default function TaskForm() {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filterDate, setFilterDate] = useState(null);

  useEffect(() => {
    async function FetchVehicles() {
      const data = await getVehicleData();
      
      setVehicles(data.map(vehicle => ({
        "regNo": vehicle.regNo,
        "chassis": vehicle.chassis,
        "manufacturer": vehicle.manufacturer,
        "model": vehicle.model,
        "label": `${vehicle.regNo} - ${vehicle.manufacturer} - ${vehicle.model} - ${vehicle.chassis}`
      })));
    }
    FetchVehicles();
  }, []);

  const handleAddTask = async () => {
    const task = {
        regNo: selectedVehicle.regNo,
        task: newTask,
        isComplete: false,
        date: new Date().toLocaleDateString(),
    };

  try{
    const response = await fetch('/api/route', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
      
  });

   if (!response.ok) {
      throw new Error('Network response was not ok');
  }

  const contentType = response.headers.get('content-type');
  //console.error ({ errorType: error.type });
  if (contentType && contentType.includes('application/json')) {
    
      const newTask = await response.json();
      console.log('Tasks are:', newTask)
      setTasks([...tasks, newTask]);
      
  } else {
      throw new Error('Response is not JSON', ReferenceError);
  }
} catch (error) {
  console.error('Failed to add task:', error);
}

setNewTask('');
};

  const filteredTasks = filterDate
    ? tasks.filter(task => new Date(task.date).toDateString() === filterDate.toDateString())
    : tasks;

  return (
    <div>
      <h1>To Dos on vehicles</h1>
      <label htmlFor="dropdown">Select a vehicle:</label>
      <Select
        options={vehicles}
        onChange={setSelectedVehicle}
        placeholder="Select a vehicle"
      />
      {selectedVehicle && (
        <div>
          <input className="peer block w-1/2 rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a task"
            required
          />
          <button className=" inline-flex  mt-3  rounded bg-blue-500 px-6 pb-2 pt-2.5 text-sm font-normal leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" onClick={handleAddTask}>Add Task</button>
          <DatePicker
            selected={filterDate}
            onChange={date => setFilterDate(date)}
            placeholderText="Filter by date"
          />
          <ul>
            {filteredTasks.map((task, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  checked={task.isComplete}
                  onChange={() => {
                    const updatedTasks = [...tasks];
                    updatedTasks[index].isComplete = !updatedTasks[index].isComplete;
                    setTasks(updatedTasks);
                  }}
                />
                {task.task} - {new Date(task.date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
