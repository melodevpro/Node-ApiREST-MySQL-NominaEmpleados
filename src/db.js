
import { createPool } from "mysql2/promise";

export const db =createPool({
    host: 'localhost',
    user: 'admin',
    password: 'admin1969',
    port: 3306,
    database: 'companydb'   
})

/*
db.query('SELECT + FROM empleados', (err, result) => {

})
*/