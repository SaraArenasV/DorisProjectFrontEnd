import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from "../pages/login/login.component";
import { ValidatingloginService } from "../validatinglogin.service";
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private authService: ValidatingloginService, private router:Router){

}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (this.authService.isAuthenticate) {
        return true;
    }

    this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
    return false;
}



  } 
  
