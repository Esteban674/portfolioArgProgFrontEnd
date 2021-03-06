import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contacto } from '../interfaces/interfaces';
import { baseUrl } from '../shared/ruta';

@Injectable({
  providedIn: 'root'
})
export class EmailSenderService {

  private apiUrlL: string = baseUrl;

  constructor(private http: HttpClient, private router: Router) { }


  sendEmail(contacto:Contacto): Observable<Contacto>{
    return this.http.post<Contacto>(`${this.apiUrlL}/contacto/getdetails`, contacto)
  }

}
