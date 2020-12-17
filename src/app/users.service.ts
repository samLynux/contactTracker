import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private dbPath = '/users';
  usersRef: AngularFireList<Users> = null;

  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase
  ) 
  {
    this.usersRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Users>
  {
    return this.usersRef;
  }

  getuser(userID:string): AngularFireList<Users>
  {
    console.log(this.usersRef);
    
    return this.usersRef;
    
    
  }
  
  create(users:Users):any
  {
    
    return this.usersRef.push(users);
  }

  update(key:string,value:any):Promise<void>
  {
    return this.usersRef.update(key,value);
  }

  delete(key:string):Promise<void>
  {
    return this.usersRef.remove(key);
  }

  deleteAll():Promise<void>
  {
    return this.usersRef.remove();
  }

}
