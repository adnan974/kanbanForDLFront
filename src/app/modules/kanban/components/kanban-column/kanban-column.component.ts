import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TicketModel } from 'src/app/shared/models/ticket.model';
import { ColumnService } from 'src/app/core/services/column.service';

@Component({
  selector: 'app-kanban-column',
  templateUrl: './kanban-column.component.html',
  styleUrls: ['./kanban-column.component.scss']
})
export class KanbanColumnComponent implements OnInit {

  @Input() column: any = {};
  @Input() ticketsData!: TicketModel[];

  constructor(
    private columnService: ColumnService
  ) {}

  ngOnInit(): void {
    console.log(this.column);
  }

  onDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      const ticketsId = event.container.data.map(ticket => ticket._id);
      const columnId = event.container.data[0].associatedColumn;
      console.log(ticketsId, 'columnId');
      this.columnService.updateColumnList(columnId, ticketsId).subscribe(res => {
        console.log(res);
      });
      // const columnList = this.columnService.columnList.map(ticket => ticket.columnProperties);
      // console.log(columnList.map(column => column.ticketList));
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log('Transfert Item', event);
    }
  }

  changeTitleState(state:boolean,id:string){
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
