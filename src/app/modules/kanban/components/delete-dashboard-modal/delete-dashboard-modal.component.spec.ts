import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDashboardModalComponent } from './delete-dashboard-modal.component';

describe('DeleteDashboardModalComponent', () => {
  let component: DeleteDashboardModalComponent;
  let fixture: ComponentFixture<DeleteDashboardModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDashboardModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDashboardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
