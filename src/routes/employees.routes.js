import { Router } from "express"; //importamos solo la funcionalidad Router de express, sirve para definir las funcionalidades de las rutas
import { getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee } from "../controllers/employees.controller.js";

const router = Router()

router.get('/employees', getEmployees)
router.get('/employees/:id', getEmployee)  

router.post('/employees', createEmployee)

router.patch('/employees/:id', updateEmployee)

router.delete('/employees/:id', deleteEmployee)

export default router //con esto ya tenemos todas las rutas agrupadas y las podemos agrupar para utilizarlas en otros sitios