//fichero de conexión a la base de datos
//usamos el modulo mysql2 para conectarnos a la db

import { createPool } from 'mysql2/promise'; //importamos el objeto createPool (sirve para crear la conexion con la db)
import { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_DATABASE} from './config.js'

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
})

//hemos exportado la variable pool, a partir de esta podemos invocar pool.query desde
//cualquier otro programa de la carpeta para poder hacer query's a la db
