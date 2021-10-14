import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TicketService } from 'src/app/core/services/ticket.service';
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

  public tickets:any=["a","b"];

  constructor(
    private columnService:ColumnService
) { 
    
  }

  ngOnInit(): void {
    console.log(this.column.ticketList);
    console.log("column: ")
    console.log(this.column);
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  changeTitleState(state:boolean,id:string){
   this.column.columnProperties.isTitleEditable = state;
  }

  updateTitle(id:string,title:string){

    this.columnService.updateColumn(id,{title:title})
    .subscribe(res=>{
      this.column.columnProperties.title = title;
    });
  }

}
