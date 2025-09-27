import { db } from '../db.js';

export const getEmpleados = async (req, res) => {
    const [rows] = await db.query('SELECT * FROM empleados', (err, result))
    res.json(rows)
}

export const postEmpleados = async (req, res) => {
    const { nombre, apellido, email, telefono, salario} = req.body
    
    const [rows] = await db.query('INSERT INTO empleados (nombre, apellido, email, telefono, salario) VALUES (?, ?, ?, ?, ?)', [nombre, apellido, email, telefono, salario])
    
    res.send(
        {
            id:rows.insertId,
            nombre,
            apellido,
            email,
            telefono,
            salario
        }
    )
}

export const putEmpleados = (req, res) => 
    res.send('actualizando empleados')

export const deleteEmpleados = (req, res) => 
    res.send('eliminando empleados')