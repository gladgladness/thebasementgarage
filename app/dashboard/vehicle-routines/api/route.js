import { client } from '../../../backend/db';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(request, response) {
    const { regNo, task, isComplete, date } = request.body;
    const id= uuidv4();
    try {
      await client.query(
        'INSERT INTO tasks (id, regNo, task, isComplete, ) VALUES ($1, $2, $3, $4, $5)',
        [id, regNo, task, isComplete, date]
      );
      response.status(200).json({ message: 'Task added successfully' });
    } catch (error) {
      response.status(500).json({ error: 'Database error' });
    } 
  }