import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Column, ColumnService } from 'src/app/core/services/column.service';
import { Ticket, TicketService } from 'src/app/core/services/ticket.service';

@Component({
  selector: 'app-kanban-column',
  templateUrl: './kanban-column.component.html',
  styleUrls: ['./kanban-column.component.scss']
})
export class KanbanColumnComponent implements OnInit {
  @Input() column!: Column;
  public ticketList: Array<Ticket> = [];

  constructor(
    private columnService: ColumnService,
    private ticketService: TicketService
  ) {
    // this.ticketList = [];
  }

  ngOnInit() {
    console.log('ticketList', this.ticketService.ticketList);
    const _ticketList: Ticket[] = [];
    for (const ticketId of this.column.ticketList) {
      const ticket: Ticket | undefined = this.ticketService.ticketList.find(
        (_ticket: Ticket) => _ticket._id === ticketId
      );

      console.log('ticket', ticket);

      if (ticket) _ticketList.push(ticket);
    }

    this.ticketList = _ticketList; 
    console.log(_ticketList, 'column');
  }

  onDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      // const ticketList = [...event.container.data];
      // const columnId = event.container.data[0].associatedColumn;
      // const newColumn = { ...this.column };
      // newColumn.ticketList = ticketList;
      // this.columnService.updateColumn(columnId, newColumn).subscribe(res => {
      // });
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
    this.column.isTitleEditable = state;
  }

  updateTitle(id:string,title:string){

    this.columnService.updateColumn(id,{title:title})
    .subscribe(res => {
      this.column.title = title;
    });
  }

}

// Drag and drop ()
// Edition des tickets
