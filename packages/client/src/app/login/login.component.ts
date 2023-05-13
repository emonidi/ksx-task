import { Component } from '@angular/core';
import { Credentials } from '../user.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {

  protected credentials:Credentials;
  private userService:UserService;
  protected formError?: string;
  private router:Router;

  constructor(userService:UserService, router:Router){
    
    this.credentials = {
      password:'9uQFF1Lh',
      username:'atuny0'
    };
    this.userService = userService;
    this.router = router;
  }

  

  setPassword(ev:any){
    const {value} = ev.target;
    this.formError = undefined;
    this.credentials.password = value;
  }

  setUsername(ev:any){
    this.formError = undefined;
    this.credentials.username = ev.target.value;
  }

 

  async login(ev:Event){
    try{
      this.formError = undefined;
      const login = await this.userService.login(this.credentials);
    
      await this.router.navigateByUrl('/todos')
    }catch(e:any){
      this.formError = e.message;
      console.log(e)
    }
  }
}
