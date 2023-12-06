import { TareaStatus } from "src/app/enum/tarea-status.enum";

export interface Tarea {
    titulo: string,
    descripcion: string,
    status: TareaStatus
}