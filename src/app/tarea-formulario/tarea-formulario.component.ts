import { Component, EventEmitter, Output } from "@angular/core";
import { Tarea } from "../mi-componente/models/tarea.model";
import { TareaStatus } from "../enum/tarea-status.enum";

@Component({
    selector: 'app-tarea-formulario',
    templateUrl: './tarea-formulario.component.html'
})

export class TareaFormularioComponent{

    @Output("onAddTarea") emitter: EventEmitter<Tarea>

    constructor(){
        this.emitter = new EventEmitter();
    }
    
    emitirTarea(titulo: string, descripcion: string): void {
        const tarea: Tarea = {
            titulo, //Toma el valor automaticamente 
            descripcion, //no se ocupa declarar el llave valor 
            status: TareaStatus.Pendiente, //Asi como aqui
        }
        this.emitter.emit(tarea)
    }
}