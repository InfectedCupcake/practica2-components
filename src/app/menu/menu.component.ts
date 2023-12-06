import { Component, Output, EventEmitter, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { MenuItem } from '../mi-componente/models/menu-item.model';
import { activeMenuItem } from '../mi-componente/models/active-menu-item.model';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],

})


export class MenuComponent implements OnInit, OnChanges {
    menuItems: MenuItem[] = [];

    @Input() activeIndex: number = 1;

    @Output("onMenuItemActiveChange") emitter: EventEmitter<activeMenuItem>; 

    constructor() {
        // let item1: MenuItem = {item: '', active: false};
        // this.menuItems.push(item1);
        this.menuItems.push( {item: 'Nueva tarea', active: false} );
        this.menuItems.push( {item: 'Mis tareas', active: true} );

        this.emitter = new EventEmitter();
    }

    ngOnInit(): void {
        this.setMenuItemAsActive(this.activeIndex)
    }

    ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
      let fisrtChande: boolean = changes['activeIndex'].firstChange;
      if (fisrtChande) {
        return;
      }
      let currentValue: number = changes['activeIndex'].currentValue;
      this.setMenuItemAsActive(currentValue);
    }

    public setMenuItemAsActive(item: number): void {
        for (let x = 0; x<this.menuItems.length; x++){

          if (x == item){
            this.menuItems[x].active = true;
            this.activeIndex = x;
            this.emitter.emit({
              activeIndex: this.activeIndex,
              menuItem: this.menuItems[x]
            });
            continue;
          }
          
          this.menuItems[x].active = false;
        }


      }

}