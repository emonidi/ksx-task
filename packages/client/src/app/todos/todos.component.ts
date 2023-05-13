import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import {inject} from '@angular/core'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  protected taskService: TaskService;
  constructor(){
    this.taskService = inject(TaskService)
    
    this.taskService.fetchTasks();
    
  }
  onTaskChange(change:any){
    this.taskService.setTask(change)
  }

  onTaskDelete(change:any){
    this.taskService.deleteTask(change)
  }

  onTaskCreate(task:any){
    this.taskService.createTask(task);
  }
}
