
import { createPool } from "mysql2/promise";

export const db =createPool({
    host: 'localhost',
    user: 'admin',
    password: 'admin1969',
    port: 3306,
    database: 'companydb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0 
})

/*
db.query('SELECT + FROM empleados', (err, result) => {

})
*/