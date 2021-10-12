import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { ColumnService } from 'src/app/core/services/column.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-column-modal',
  templateUrl: './manage-column-modal.component.html',
  styleUrls: ['./manage-column-modal.component.scss']
})

export class ManageColumnModalComponent {


  public newColumn:Partial<any> = {
    title:"",
    
  }

  public deleteColumn: FormGroup = new FormGroup({
    columnList: new FormControl(),
    checkedOption: new FormControl({ value: true })
  });

  constructor(
    private modalService: NgbModal,
    public columnService: ColumnService,
    private route: ActivatedRoute
  ) { }


  public openModal(content: any) {
    this.modalService.open(content)
  }

  public onSubmit() {
    const columnToDelete = this.deleteColumn.get('columnList')?.value;
    const newField = this.columnService.columnList.find(column => column.title === columnToDelete[0]);

    this.columnService.deleteColumn(newField._id).subscribe(_success => {
      if (_success) this.columnService.columnList = this.columnService.columnList.filter(column => column.title !== columnToDelete[0])
    });
  }

  public addColumn() {

    this.columnService.postColumn(this.newColumn).subscribe((res)=>{
      console.log(res);
      this.columnService.columnList.push(res.result);

      

    });

  }

  public onMoveDown() {
  }
}
