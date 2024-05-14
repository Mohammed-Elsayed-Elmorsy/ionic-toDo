import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data/data.service';
import { Todo } from 'src/app/shared/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
})
export class AddTodoPage implements OnInit {
  form!: FormGroup
  todo!: Todo
  constructor(
    private formBuilder: FormBuilder,
    private navControl: NavController,
    private services: DataService
  ) {
    this.createForm()
  }

  ngOnInit() {
    this.todo = this.services.getParams()
    this.patchForm()
  }
  createForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

  patchForm() {
    if (this.todo) {
      this.form.patchValue({
        title: this.todo.title,
        description: this.todo.description
      })
    }
  }


  addToDo() {
    let form = this.form.value
    if (this.todo) {
      this.todo.title = form.title
      this.todo.description = form.description
      this.todo.date = new Date()
    }
    this.navControl.pop()
  }
}
