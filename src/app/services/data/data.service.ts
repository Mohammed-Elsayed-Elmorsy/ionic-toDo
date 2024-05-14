import { Injectable } from '@angular/core';
import { Todo } from 'src/app/shared/todo';
const todos: Todo[] = [
  { title: 'Mohammed', description: 'lab lab lab1', date: new Date() },
  { title: 'Mohammed2', description: 'lab lab lab2', date: new Date() },
  { title: 'Mohammed3', description: 'lab lab lab33', date: new Date() },
  { title: 'Mohammed4', description: 'lab lab lab4', date: new Date() },
  { title: 'Mohammed5', description: 'lab lab lab5', date: new Date() },
]
@Injectable({
  providedIn: 'root'
})
export class DataService {

  params: any = {}
  constructor() { }

  setParams(body: any) {
    this.params = body
  }

  getParams() {
    return this.params
  }

  getData() {
    return todos
  }
  getSpecificTodo(id: any) {
    return todos[id]
  }
  PsoData() { }
  putData() { }
  deleteData() { }
}
