import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.page.html',
  styleUrls: ['./edit-todo.page.scss'],
})
export class EditTodoPage implements OnInit {
  todo!: any
  constructor(private services: DataService) { }

  ngOnInit() {
    this.getParams()
  }

  getParams() {
    this.todo = this.services.getParams()
  }

}
