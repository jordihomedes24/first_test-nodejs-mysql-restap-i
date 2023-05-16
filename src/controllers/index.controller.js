import {pool} from '../db.js' 

export const ping = async (req,res) => {
    const result = await pool.query('SELECT "PONG" AS result')
    const result2 = result[0][0].result
    res.send(result2)
}