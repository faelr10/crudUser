import { Router } from "express";
import CursoRepositoryClass from "./CursoRepository";
import CursoServiceClass from "./CursoService";
import CursoControllerClass from "./CursoController";

export const CursoRepository = new CursoRepositoryClass()
export const CursoService = new CursoServiceClass(CursoRepository)
export const CursoController = new CursoControllerClass(CursoService)

export const CursoRoutes = Router()

CursoRoutes.post('/',(req,res)=>CursoController.create(req,res))
CursoRoutes.get('/',(req,res)=>CursoController.find(req,res))