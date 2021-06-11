import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  about: any[] = [];
  constructor(public infoPaginaService:InfoPaginaService) {
    this.getAbout();
   }

   getAbout()
   {
    this.infoPaginaService.getAbout()
        .subscribe((data: any) =>{
          this.about = data;       
          console.log(this.about);
        });      
   }
  ngOnInit(): void {
  }

}
