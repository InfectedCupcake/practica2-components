import { Component, OnInit } from '@angular/core';
import { Tarea } from './models/tarea.model';
import { MenuItem } from './models/menu-item.model';
import { TareaCardItem } from './models/tarea-card-item.model';
import { activeMenuItem } from './models/active-menu-item.model';
import { TareaStatus } from "../enum/tarea-status.enum";

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {
  // public menuItems: {item:string, active:boolean}[] = [];
  // Opciones para el menú
  activeMenuItem: MenuItem = {item: 'Mis tareas', active: false};
  activeMenuIndex: number = 1;
  // public tareas: {titulo:string, descripcion:string, status:string}[] = [];
  // Lista de tareas guardadas
  tareas: Tarea[] = [];
  // Objeto para agregar tareas
  newTarea: Tarea = {
    titulo: 'l,askdjaslkdhnaskjd', 
    descripcion: '',
    status: TareaStatus.Pendiente,
  };

  constructor() {
  }

  ngOnInit(): void {
    const tareasJson = localStorage.getItem("tareas");
    if (tareasJson != null) {
      this.tareas = JSON.parse(tareasJson);
    }
  }

  public catchMenuItem(item: activeMenuItem): void {
    this.activeMenuItem = item.menuItem;
    this.activeMenuIndex = item.activeIndex;
  }



  private almacenarDatos(): void {
    localStorage.setItem("tareas", JSON.stringify(this.tareas));
  }

  catchOnStatusChange(inf: TareaCardItem){
    let {indice, tarea} = inf;
    this.tareas[indice] = tarea;
    this.almacenarDatos();
  }

  catchOnAddTarea(tarea: Tarea){
    this.tareas.push(tarea);
    //Navega a la tarea cuando se registre
    this.activeMenuIndex = 1;
    //Almacenar los datos
    this.almacenarDatos();
  }

}
