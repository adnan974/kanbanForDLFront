import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStoreService } from 'src/app/core/services/userStore.service';

@Component({
  selector: 'app-kanban-page',
  templateUrl: './kanban-page.component.html',
  styleUrls: ['./kanban-page.component.scss']
})
export class KanbanPageComponent implements OnInit {

  constructor(
    private router:Router,
    private userStoreService:UserStoreService
  ) { }

  ngOnInit(): void {
    if(this.userStoreService.isLogged === false) this.router.navigate(['auth/login']);
  } 

}
