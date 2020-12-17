import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Contacts } from './contacts';


@Injectable({
  providedIn: 'root'
})
export class MahasiswaService {
  private dbPath = '/contacts';
  mahasiswaRef: AngularFireList<Contacts> = null;

  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase
  ) 
  {
    this.mahasiswaRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Contacts>
  {
    
    return this.mahasiswaRef;
  }

  create(contacts:Contacts, coordinate:string):any
  {
    contacts.location = coordinate;
    return this.mahasiswaRef.push(contacts);
  }

  update(key:string,value:any):Promise<void>
  {
    return this.mahasiswaRef.update(key,value);
  }

  delete(key:string):Promise<void>
  {
    return this.mahasiswaRef.remove(key);
  }

  deleteAll():Promise<void>
  {
    return this.mahasiswaRef.remove();
  }

}
