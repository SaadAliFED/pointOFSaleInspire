// import { Injectable } from '@angular/core';
// // import { ActivatedRouteSnapshot, CanActivate, NavigationEnd, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable, filter } from 'rxjs';
// import { LoadingServiceService } from './loading-service.service';
// import {
//   CanActivate,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   UrlTree,
//   Router,
//   NavigationEnd,
//   NavigationStart,
// } from '@angular/router';
// @Injectable({
//   providedIn: 'root'
// })
// export class LoadingGuard implements CanActivate {
//   constructor(private loadingService: LoadingServiceService, private router: Router) {}

//   canActivate1(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     this.loadingService.showLoader();

//     // To deactivate the loader when navigation is complete
//     this.router.events.subscribe((event) => {
//       if (event instanceof NavigationEnd) {
//       //  return false;
//       // set
//         this.loadingService.hideLoader();
//       }
//       // return true; 
//     });

//     return true;
//   }
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     this.loadingService.showLoader();
  
//     const subscription = this.router.events.pipe(
//       filter(event => event instanceof NavigationEnd)
//     ).subscribe(() => {
//       this.loadingService.hideLoader();
//       subscription.unsubscribe(); // Unsubscribe to avoid memory leaks
//     });
  
//     return true;
//   }
//   // canActivate(
//   //   route: ActivatedRouteSnapshot,
//   //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//   //   return true;
//   // }
  
// }
