import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  cargada = true;
  producto:ProductoDescripcion = {};
  productoID:string = '';
  constructor(private route: ActivatedRoute,
            private productoService: ProductosService) { }

  ngOnInit(): void {

    this.route.params.subscribe( parametros => {

        this.productoID = parametros['id'];
        this.productoService.getProducto(this.productoID).subscribe((resp: ProductoDescripcion) => {

            this.producto = resp;
            this.cargada =false;

        });
    });

  }

}
