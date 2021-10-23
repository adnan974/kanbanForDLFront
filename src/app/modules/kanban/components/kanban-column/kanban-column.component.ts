import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TicketModel } from 'src/app/shared/models/ticket.model';
import { ColumnService } from 'src/app/core/services/column.service';

@Component({
  selector: 'app-kanban-column',
  templateUrl: './kanban-column.component.html',
  styleUrls: ['./kanban-column.component.scss']
})
export class KanbanColumnComponent {

  @Input() column: any = {};
  @Input() ticketsData!: TicketModel[];

  constructor(
    private columnService: ColumnService
  ) {}

  onDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      const ticketList = [...event.container.data];
      const columnId = event.container.data[0].associatedColumn;
      const newColumn = { ...this.column };
      newColumn.ticketList = ticketList;
      this.columnService.updateColumn(columnId, newColumn).subscribe(res => {
      });
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  changeTitleState(state:boolean, id:string){
   this.column.columnProperties.isTitleEditable = state;
  }

  updateTitle(id:string,title:string){

    this.columnService.updateColumn(id,{title:title})
    .subscribe(res => {
      this.column.columnProperties.title = title;
    });
  }

}

// Drag and drop ()
// Edition des tickets
