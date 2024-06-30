import { client } from '../../../backend/db';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
    const { regNo, task, isComplete, date } = req.body;
    const id= uuidv4();
    try {
      await client.query(
        'INSERT INTO tasks (id, regNo, task, isComplete, ) VALUES ($1, $2, $3, $4)',
        [id, regNo, task, isComplete]
      );
      res.status(200).json({ message: 'Task added successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Database error' });
    } 
  }