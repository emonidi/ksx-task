import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../task.service';
import { UserService } from '../user.service';




@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent {

    @Output() onCreate = new EventEmitter();
  
    private userService: UserService;
    protected error:string = "";
    protected task:Task;

    private taskTemplate: Task = {
      message: '',
      done: false, 
    }

    constructor(userService:UserService){
     
      this.userService = userService;
      this.task = {...this.taskTemplate};
      this.task.userID = userService.user?.id as number;
    }

    onInputChange(ev:any){
      this.error = "";
      this.task = {
        ...this.task,
        message:ev.target.value
      }

      console.log(this.task);
    }

    onTaskSubmit(){
      if(this.task.message === ''){
        this.error = "Task message can not be empty";
      }else{
        this.error = "";
        this.onCreate.emit(this.task);
        this.task = {...this.taskTemplate}
      }
    }
}
