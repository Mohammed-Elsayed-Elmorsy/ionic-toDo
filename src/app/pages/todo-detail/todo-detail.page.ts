import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { Todo } from 'src/app/shared/todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.page.html',
  styleUrls: ['./todo-detail.page.scss'],
})
export class TodoDetailPage implements OnInit {
  todo!: Todo;
  constructor(private route: ActivatedRoute, private services: DataService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.todo = this.services.getSpecificTodo(id)
    }
  }

}
