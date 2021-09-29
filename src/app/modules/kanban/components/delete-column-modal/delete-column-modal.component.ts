import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { ColumnService } from 'src/app/core/services/column.service';

@Component({
  selector: 'app-delete-column-modal',
  templateUrl: './delete-column-modal.component.html',
  styleUrls: ['./delete-column-modal.component.scss']
})
export class DeleteColumnModalComponent {
  public deleteColumn: FormGroup = new FormGroup({
    columnList: new FormControl(),
    checkedOption: new FormControl({ value: true })
  });

  constructor(
    private modalService: NgbModal,
    public columnService: ColumnService
  ) { }


  public openModal(content: any) {
    this.modalService.open(content)
  }

  public onSubmit() {
    const columnToDelete = this.deleteColumn.get('columnList')?.value;
    const newField = this.columnService.columnList.find(column => column.title === columnToDelete[0]);

    this.columnService.deleteColumn(newField._id).subscribe(_success => {
      console.log(newField)
      if (_success) this.columnService.columnList = this.columnService.columnList.filter(column => column.title !== columnToDelete[0])
    });
  }

}
