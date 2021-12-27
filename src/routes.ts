import { Router } from "express";
import { UserRoutes } from "./Modules/User";

const mainRoute = Router()

mainRoute.use('/users',UserRoutes)




export default mainRoute