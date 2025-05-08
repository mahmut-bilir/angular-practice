import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //Provides automatic DI
})
export class LoggerService {

  log(message: string) {
    console.log("LOG : ", message);
  }
}
