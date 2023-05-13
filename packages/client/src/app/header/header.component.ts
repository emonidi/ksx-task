import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    protected userService:UserService
    private router:Router

    constructor(userService:UserService,router:Router){
      this.userService = userService;
      this.router = router;
    }

    async logout(){
      this.userService.logout();
      await this.router.navigateByUrl('/login')
    }
}
