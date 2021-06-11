import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient ) {

    this.cargarInfo();
    this.cargarEquipo();

   }

  private cargarInfo()
  {
    this.http.get('assets/data/data-pagina.json')
    .subscribe((data: InfoPagina) =>{
        this.info = data; 
        this.cargada = false;      
      });
  }
  public cargarEquipo()
  {
    this.http.get('https://angular-html-ab87e-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (resp: any) => {

      this.equipo = resp;
      // console.log(resp);
    });      
  }
}
