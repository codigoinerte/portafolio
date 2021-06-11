import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  public info: InfoPagina;
  public about : any[] = [];
  public cargada : boolean = true;
  constructor(private http:HttpClient) {
    this.info = {};
    this.getInfo();
    this.getAbout();
   }

  private getInfo()
  {
    return this.http.get('assets/data/data-pagina.json')
    .subscribe((data: InfoPagina) =>{
        this.info = data; 
        this.cargada = false;      
      });
  }
  public getAbout()
  {
    return this.http.get('https://angular-html-ab87e-default-rtdb.firebaseio.com/equipo.json');       
  }
}
