import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot }
    from '@angular/router';

  
@Injectable()
export class AuthGuard implements CanActivate {
  
    
  
    canActivate()  {
        console.info('guard est activé');
        return true;
    }
  
   
}