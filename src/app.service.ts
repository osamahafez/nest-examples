import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Response } from 'express';

@Injectable()
export class AppService {

  constructor(private httpService: HttpService) {}
  
  getHello(): string {
    return 'Hello World!';
  }

  getUsers() {
    return this.httpService.get('https://jsonplaceholder.typicode.com/users').pipe(map(res => {

      const users = res.data;
      console.log(users[1].name, users[2].name);
      return users;
    }));

  }

}
