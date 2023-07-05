import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private readonly KEY = 'isLoggedIn';

  constructor() { }

  save(isLoggedIn: boolean): void {
    localStorage.setItem(this.KEY, JSON.stringify({ isLoggedIn, timestamp: new Date().getTime() }));
  }

  checkLogin(): boolean {
    const storedValue = localStorage.getItem(this.KEY);
    if (storedValue) {
      const { isLoggedIn, timestamp } = JSON.parse(storedValue);
      const currentTime = new Date().getTime();
      const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

      if (currentTime - timestamp >= twentyFourHours) {
        localStorage.removeItem(this.KEY);
        return false;
      }

      return isLoggedIn;
    }

    return false;
  }

  clearLogin(): void {
    localStorage.removeItem(this.KEY);
  }
}
