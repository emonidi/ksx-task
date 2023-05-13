import { CanActivateFn } from '@angular/router';
import {inject} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
export const authGuard: CanActivateFn = (_route, _state) => {
  const userService = inject(UserService);
  const router = inject(Router);
  return userService.isLoggedIn() ? true : router.parseUrl("/login")
};
