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
    console.log(this.column.ticketList);
  }

  onDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      const columnList = this.columnService.columnList;
      for (const column of columnList) {
        if (column.columnProperties._id === event.container.data[0].associatedColumn) {
          const tempColumn = column.ticketList[event.previousIndex];
          column.ticketList[event.previousIndex] = column.ticketList[event.currentIndex];
          column.ticketList[event.currentIndex] = tempColumn;
        }
      }
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
}

// Drag and drop ()
// Edition des tickets
