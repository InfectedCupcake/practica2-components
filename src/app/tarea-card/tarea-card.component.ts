import { Tarea } from './../mi-componente/models/tarea.model';
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { TareaCardItem } from "../mi-componente/models/tarea-card-item.model";
import { TareaStatus } from "../enum/tarea-status.enum";

@Component({
    selector: 'app-tarea-card',
    templateUrl: './tarea-card.component.html'

})

export class TareaCardComponent {
    @Input()
    tarea!: Tarea;
    @Input()
    indice: number = -1;

    @Output("onStatusChange") emitter: EventEmitter<TareaCardItem>; 

    constructor(){
        this.emitter = new EventEmitter<TareaCardItem>;
    }

    status = {
        Completado: TareaStatus.Completado,
        Retrasado: TareaStatus.Retrasado,
        Pendiente: TareaStatus.Pendiente,

    }

    cambiarStatus(status: TareaStatus): void {
        this.tarea.status = status;
        
        this.emitter.emit({
            indice: this.indice,
            tarea: this.tarea
        })
    }
    
}