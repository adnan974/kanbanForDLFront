import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';

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
    private modalService: NgbModal
  ) { }


  public openModal(content: any) {
    this.modalService.open(content)
  }

  public onSubmit() {
    const columnToDelete = this.deleteColumn.get('columnList')?.value;
    console.log(columnToDelete);
  }

}
