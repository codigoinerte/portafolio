import { Component } from '@angular/core';
import { ProductosService } from './services/productos.service';
import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (public infoPaginaServices: InfoPaginaService,
              public productosService : ProductosService)
  {

  }

}
