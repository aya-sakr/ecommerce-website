import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from './Services/userAuth.service';

export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> |boolean | UrlTree =>
 {
const authgard= inject(UserAuthService).isUserLogged
const router = inject(Router)
if(authgard){

  return true

} else{
  router.navigate(['/login']);
  alert('You must login first...')

 return false
}

};
