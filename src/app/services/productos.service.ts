import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  productos: Producto[] = [];
  productosFiltrados: Producto[] =[];

  constructor(private http:HttpClient) {
    this.cargarProductos();  
   }

  private cargarProductos()
  {
    return new Promise( (resovle, reject): any  => {

      this.http.get('https://angular-html-ab87e-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( (resp: any) => {
        this.productos = resp;
        this.cargando = false;
        resovle;
      });


    });
  }

  getProducto(id:string)
  {
    return this.http.get(`https://angular-html-ab87e-default-rtdb.firebaseio.com/productos/${id}.json`);        
  }
  buscarProducto(termino:string)
  {
    if(this.productos.length === 0)
    {
      // cargar productos
      this.cargarProductos().then(()=>{
        // ejecutar despues de terner los productos
        // aplicar filtros
        this.filtrarProductos(termino);
      });
    }
    else
    {
      // aplicar filtros
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino:string)
  {

    this.productosFiltrados = [];
    termino = termino.toLocaleLowerCase();

    this.productos.forEach(prod=>{

      const tituloLower = prod.titulo?.toLocaleLowerCase();
      const categoriaLower = prod.categoria?.toLocaleLowerCase();

      if( categoriaLower.indexOf(termino) >=0 || tituloLower.indexOf(termino) >=0)
      {
        this.productosFiltrados.push(prod);        
      }
    })

  }
}
