import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColumnService } from 'src/app/core/services/column.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-column-modal',
  templateUrl: './manage-column-modal.component.html',
  styleUrls: ['./manage-column-modal.component.scss']
})

export class ManageColumnModalComponent {


  public newColumn: Partial<any> = {
    title: "",
  }

  public deleteColumnFormData = {
    selectedItem: "",
    checkBoxFirstAgreement: false,
  }
  // public deleteColumn: FormGroup = new FormGroup({
  //   columnList: new FormControl(),
  //   checkedOption: new FormControl({ value: true })
  // });

  constructor(
    private modalService: NgbModal,
    public columnService: ColumnService,
    private route: ActivatedRoute
  ) { }


  public openModal(content: any) {
    this.modalService.open(content)
  }

  public addColumn() {
    this.columnService.postColumn(this.newColumn).subscribe((res) => {
      console.log(res);
      this.columnService.columnList.push(res.result);
    });
  }

  public _deleteColumn() {

    let columnId: string = this.deleteColumnFormData.selectedItem[0];
    console.log(columnId);
    this.columnService.deleteColumn(columnId).subscribe((res) => {
      console.log(res);
      this.columnService.columnList = this.columnService.columnList.filter((element) => {
        return element._id != columnId;
      });
      console.log(this.columnService.columnList)

    });


  }

  public onMoveDown() {
  }
}
