import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class LoadingServiceService {
  // private apiCount = 0;
  // private isLoadingSubject = new BehaviorSubject<boolean>(false);
  // isLoading$ = this.isLoadingSubject.asObservable();

  // constructor() { }

  // showLoader() {
  //   if (this.apiCount === 0) {
  //     this.isLoadingSubject.next(true);
  //   }
  //   this.apiCount++;
  // }

  // hideLoader() {
  //   this.apiCount--;
  //   if (this.apiCount === 0) {
  //     this.isLoadingSubject.next(false);
  //   }
  // }
  public isLoadingSubject = new BehaviorSubject<boolean>(false);
  // isLoading$ = this.isLoadingSubject.asObservable();
  // isLoading: BehaviorSubject<boolean>;

  constructor() { }

  showLoader() {
      this.isLoadingSubject.next(true);

  }

  hideLoader() {

      this.isLoadingSubject.next(false);
    
  }
}
 
