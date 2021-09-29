import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { ColumnService } from 'src/app/core/services/column.service';

@Component({
  selector: 'app-create-column-modal',
  templateUrl: './create-column-modal.component.html',
  styleUrls: ['./create-column-modal.component.scss']
})
export class CreateColumnModalComponent {
  public createColumn: FormGroup = new FormGroup({
    title: new FormControl()
  });

  constructor(
    private modalService: NgbModal,
    private columnService: ColumnService
  ) { }


  public openModal(content: any) {
    this.modalService.open(content)
  }

  public onSubmit() {
    const title = this.createColumn.get('title')?.value;
    this.columnService.postColumn({ title }).subscribe(column => {      
      if (column.success) this.columnService.columnList.push(column.result)
    });
  }
}
