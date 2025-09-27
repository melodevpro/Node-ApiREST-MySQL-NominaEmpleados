
import { Router } from 'express';
import { getEmpleados, getEmpleado, postEmpleados, putEmpleados, deleteEmpleados } from '../controllers/empleados.controller.js';

const router = Router()

router.get('/empleados', getEmpleados)

router.get('/empleados/:id', getEmpleado)

router.post('/empleados', postEmpleados)

router.put('/empleados/:id', putEmpleados)

router.delete('/empleados/:id', deleteEmpleados)

export default router