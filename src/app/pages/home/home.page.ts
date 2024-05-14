import { Todo } from './../../shared/todo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  todos: Todo[] = []
  loading: boolean = true
  constructor(
    private navControl: NavController,
    private alertControl: AlertController,
    private services: DataService,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.todos = this.services.getData()
      this.loading = false
    }, 2000)
  }
  addToDo() {
    this.services.setParams(null)
    this.navControl.navigateForward('add-todo')
  }
  async deleteTodo(id: any) {
    let alert = await this.alertControl.create({
      header: 'Delete To Do Item',
      message: 'Are You Sure For Delete',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => {
            console.log(id);
            this.todos.splice(id, 1)
          }
        }
      ]
    })
    await alert.present()
  }
  editToDo(index: any) {
    const body = {
      title: this.todos[index].title,
      description: this.todos[index].description
    }
    this.services.setParams(body)
    this.navControl.navigateForward('add-todo')
  }

  handleRefresh(ev: any) {
    setTimeout(() => {
      this.todos = this.services.getData()
      ev.target.complete()
      console.log('refreshed');

    }, 3000)
  }
  onIonInfinite(ev: any) {
    setTimeout(() => {
      this.todos = this.services.getData().concat(this.todos)
      ev.target.complete()
      console.log('data has been fetched');
    }, 3000)
  }
}
