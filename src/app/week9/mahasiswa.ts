import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MahasiswaService {

  constructor(
    private http: HttpClient
  ) { }

  getAllStudents()
  {
    
    return this.http.get('http://localhost:8080/select.php');
  }

  insertMhs(newMhs: any)
  {
    const mhs = 
    {
      nama: newMhs.nama,
      phone: newMhs.phone,
      email: newMhs.email
    };
    const data = JSON.stringify(mhs);
    return this.http.post<any>('http://localhost:8080/insert.php',data);
  }

  editMhs(newMhs: any)
  {
    const mhs = 
    {
      id: newMhs.id,
      nama: newMhs.nama,
      phone: newMhs.phone,
      email: newMhs.email
    };
    const data = JSON.stringify(mhs);
    return this.http.post<any>('http://localhost:8080/edit.php',data);
  }

  deleteMhs(nim: string)
  {
    const data = JSON.stringify({id:nim});
    return this.http.post<any>('http://localhost:8080/delete.php',data);
  }


}
