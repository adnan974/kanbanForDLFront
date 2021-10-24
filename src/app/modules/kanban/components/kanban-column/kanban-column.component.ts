import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Column, ColumnService } from 'src/app/core/services/column.service';
import { Ticket } from 'src/app/core/services/ticket.service';

@Component({
  selector: 'app-kanban-column',
  templateUrl: './kanban-column.component.html',
  styleUrls: ['./kanban-column.component.scss']
})
export class KanbanColumnComponent implements OnInit, OnChanges {
  @Input() column!: Column;
  @Input() allTickets: Ticket[];
  
  public ticketList: Array<Ticket>;

  constructor(
    private columnService: ColumnService,
  ) {
    this.ticketList = [];
    this.allTickets = []
  }

  ngOnInit() {
    const _ticketList: Ticket[] = [];
    for (const ticketId of this.column.ticketList) {
      const ticket: Ticket | undefined = this.allTickets.find(
        (_ticket: Ticket) => _ticket._id === ticketId
      );

      if (ticket) _ticketList.push(ticket);
    }

    this.ticketList = _ticketList; 
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
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

      const newTicketListOne: Ticket[] = event.previousContainer.data;
      const ticketListIdOne: string[] = newTicketListOne.map(ticket => ticket._id);
      const columnOne: Column = this.columnService.columnList.filter(
          (column) => column._id === newTicketListOne[0].associatedColumn
      )[0];

      const newTicketListTwo: Ticket[] = event.container.data;
      const ticketListIdTwo: string[] = newTicketListTwo.map(ticket => ticket._id);
      const columnTwo: Column = this.columnService.columnList.filter(
          (column) => column._id === newTicketListTwo[0].associatedColumn
      )[0];

      columnOne.ticketList = ticketListIdOne;
      columnTwo.ticketList = ticketListIdTwo;
      
console.log(columnOne, columnTwo);

      this.columnService.updateColumn(newTicketListOne[0].associatedColumn, columnOne).subscribe();
      this.columnService.updateColumn(newTicketListTwo[0].associatedColumn, columnTwo).subscribe();
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
