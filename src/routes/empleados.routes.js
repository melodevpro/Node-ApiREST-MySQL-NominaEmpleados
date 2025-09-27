
import { Router } from 'express';
import { getEmpleados, postEmpleados, putEmpleados, deleteEmpleados } from '../controllers/empleados.controller.js';

const router = Router()

router.get('/empleados', getEmpleados)

router.post('/empleados', postEmpleados)

router.put('/empleados', putEmpleados)

router.delete('/empleados', deleteEmpleados)

export default router