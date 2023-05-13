import { Component, Input,Output, EventEmitter } from '@angular/core';
import { Task } from '../task.service';

export interface OnTaskChangeEvent{
  property:string,
  value:string|boolean|number,
  id:number
}

export interface OnTaskDeleteEvent{
  id:number
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  
  @Input()
  task!: Task;

  @Output() onChange = new EventEmitter<OnTaskChangeEvent>();
  @Output() onDelete = new EventEmitter<OnTaskDeleteEvent>();

  toggleDone(){
    this.onChange.emit({property:'done',value:!this.task.done,id:this.task.id!})
  }
  deleteTask(){
    this.onDelete.emit({id:this.task.id!})
  }
}
