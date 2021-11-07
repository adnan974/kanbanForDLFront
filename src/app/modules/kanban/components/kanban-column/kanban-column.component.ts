import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem, transferArrayItem } from '@angular/cdk/drag-drop';
import { Column, ColumnService } from 'src/app/core/services/column.service';
import { Ticket, TicketService } from 'src/app/core/services/ticket.service';

@Component({
  selector: 'app-kanban-column',
  templateUrl: './kanban-column.component.html',
  styleUrls: ['./kanban-column.component.scss']
})
export class KanbanColumnComponent implements OnChanges {
  @Input() column!: Column;
  @Input() allTickets: Ticket[];
  
  public ticketList: Array<Ticket>;

  constructor(
    private columnService: ColumnService,
    private ticketService: TicketService
  ) {
    this.ticketList = [];
    this.allTickets = []
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.column.ticketList)
    const _ticketList: Ticket[] = [];
    for (const ticketId of this.column.ticketList) {
      const ticket: Ticket | undefined = this.allTickets.find(
        (_ticket: Ticket) => _ticket._id === ticketId
      );

      if (ticket) {
        _ticketList.push(ticket);
      } else {
        _ticketList.push();
      }
    }

    this.ticketList = _ticketList;
  }

  onDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      const newTicketList: Ticket[] = event.container.data;
      const ticketListId: string[] = newTicketList.map(ticket => ticket._id);
      const column: Column = this.columnService.columnList.filter(
          (column) => column._id === newTicketList[0].associatedColumn
      )[0];

      column.ticketList = ticketListId;      
      this.columnService.updateColumn(newTicketList[0].associatedColumn, column).subscribe();
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      const currentTicket: Ticket = event.container.data[event.currentIndex];
      const currentColumnIndex: string = this.column._id;
      const previousColumnIndex: string = currentTicket.associatedColumn;

      const previousTicketListID: string[] = event.previousContainer.data.map(
        (ticket: Ticket) => ticket._id
      );
      const currentTicketListID: string[] = event.container.data.map(
        (ticket: Ticket) => ticket._id
      );

      currentTicket.associatedColumn = this.column._id
      this.ticketService.updateTicket(currentTicket._id, currentTicket).subscribe(
        () => {
          for (const _ticket of this.ticketService.ticketList) {
            if (_ticket._id === currentTicket._id) {
              _ticket.associatedColumn = this.column._id;
            }
          }
        }
      );

      for (const _column of this.columnService.columnList) {
        if (_column._id === currentColumnIndex) {
          _column.ticketList = currentTicketListID;
          this.columnService.updateColumn(currentColumnIndex, _column).subscribe();
        }

        if (_column._id === previousColumnIndex) {
          _column.ticketList = previousTicketListID;
          this.columnService.updateColumn(previousColumnIndex, _column).subscribe();
        }
      }
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
