import { db } from '../db.js';

//Como agregar empleados
export const getEmpleados = async (req, res) => {
    const [rows] = await db.query('SELECT * FROM empleados')
    res.json(rows)
}

// Como actualizar empleado por ID
export const getEmpleado = async (req, res) => {
    const [rows] = await db.query('SELECT * FROM empleados WHERE id = ?', [req.params.id])

    if(rows.length <= 0) return res.status(404).json ({message: 'Empleado no encontrado'})
    res.json(rows[0]);
}

// Como agregar empleados
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

// Como actualizar empleados
export const putEmpleados = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, email, telefono, salario } = req.body;

    const [result] = await db.query(
      'UPDATE empleados SET nombre = ?, apellido = ?, email = ?, telefono = ?, salario = ? WHERE id = ?',
      [nombre, apellido, email, telefono, salario, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }

    // ✅ Aquí sí dentro de la función
    res.json({ message: 'Empleado actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar empleado', error });
  }
};

// Como eliminar empleados
export const deleteEmpleados = async (req, res) => {
    const [result] = await db.query('DELETE FROM empleados WHERE id = ?', [req.params.id])
    if(result.affectedRows <= 0) return res.status(404).json({ message: 'Empleado no encontrado' })
    res.sendStatus(204);
}