import { Router } from "express";
import { CursoRoutes } from "./Modules/Curso";
import { UserRoutes } from "./Modules/User";

const mainRoute = Router()

mainRoute.use('/users',UserRoutes)
mainRoute.use('/cursos',CursoRoutes)


export default mainRoute