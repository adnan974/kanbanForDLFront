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


      if (ticket) _ticketList.push(ticket);
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
