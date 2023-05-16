import {pool} from '../db.js' 

export const getEmployees = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM employee')
        res.send(rows)
    } catch (error) {
        res.status(500).json({ message: "Ooops, something went wrong" })
    }

}

export const getEmployee = async (req, res) => {
    try {
        const employeeId = req.params.id
        const [rows] = await pool.query('SELECT * FROM employee WHERE id=?', employeeId)
        
        if (rows.length <= 0) res.status(404).json({ message: "Employee not found" })
        else res.send(rows[0])
    } catch (error) {
        res.status(500).json({ message: "Ooops, something went wrong" })
    }
}

export const createEmployee = async (req, res) => {
    try {
        const {name, salary} = req.body
        const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?,?)', [name,salary])
        res.send({
            id: rows.insertId,
            name,
            salary,
    })} catch (error) {
        res.status(500).json({ message: "Ooops, something went wrong" })
    }
}

export const updateEmployee = async (req, res) => {
    try {
        const employeeId = req.params.id
        const { name, salary } = req.body 

        const [result] = await pool.query('UPDATE employee SET name=IFNULL(?,name), salary=IFNULL(?,salary) WHERE id=?', [name, salary, employeeId])

        
        if (result.affectedRows == 0) res.status(404).json({ message: "Employee not found"})
        else {
            const [result] = await pool.query('SELECT * FROM employee where id=?',[employeeId])
            res.json(result[0])
        }
    } catch (error) {
        res.status(500).json({ message: "Ooops, something went wrong" })
    }
}

export const deleteEmployee = async (req, res) => {
    try {
        const employeeId = req.params.id
        const [rows] = await pool.query('DELETE FROM employee where id=?', employeeId)
        if (rows.affectedRows <= 0) res.status(404).json({ message: "Employee not found"})
        else res.send("Employee deleted")
    } catch (error) {
        res.status(500).json({ message: "Ooops, something went wrong" })
    }
} 