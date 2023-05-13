import { Injectable } from '@angular/core';
import { OnTaskChangeEvent } from './task/task.component';


export interface Task {
  id?: number;
  message: string;
  done: boolean;
  userID?: number;
  username?: string;
}


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public isLoading: boolean = false;
  public error: boolean | unknown;
  public tasks: Task[] = [];

  constructor() {
    this.error = false;
  }

  async fetchTasks() {
    this.isLoading = true;
    try {
      const request = await fetch('https://dummyjson.com/todos');
      const response = await request.json();
      this.tasks = response.todos.map((task:any)=>{
          return {
            id:task.id,
            message:task.todo,
            userID:task.userId,
            done:task.completed
          } as Task
      })
    
    } catch (e) {
      this.error = e;
    }

    this.isLoading = false;
  }

  setTask(change:OnTaskChangeEvent){
      this.tasks = this.tasks.map((task:any)=>{
        if(task.id === change.id){
          task[change.property!] = change.value;
        }
        return task;
      })
  }

  deleteTask(change:OnTaskChangeEvent){
      this.tasks = this.tasks.filter((task:Task)=>task.id !== change.id);
  }

  createTask(task:Task){
    const newTask:Task = {
        ...task, 
        id:Math.random()*1000
    }
    this.tasks = [newTask,...this.tasks];
  }
}
