import express from 'express';
import { db } from './db.js';
import empleadosRoutes from './routes/empleados.routes.js';

const app = express();

app.use(empleadosRoutes);

app.listen(3000)
console.log('Server running on port 3000');
