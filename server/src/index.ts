// Initial server file to verify setup
import express from 'express';
import type { Request, Response } from 'express';

const app = express();
const PORT = 5001;

app.get('/', (req: Request, res: Response) => {
  res.send('API is running');
});

console.log(`Server starting on port ${PORT}`);
