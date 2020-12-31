import { Component } from '@angular/core';
import { FrontEndAPIService } from './front-end-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: Array<any> = new Array<any>();
  constructor(private ServicioInyectado: FrontEndAPIService){

  }

  ngOnInit() {
    this.ServicioInyectado.obtenerDatadeBD().subscribe((dataDesdeApi) => {
      this.data = dataDesdeApi;
    });
  }

  strData = JSON.stringify(this.data)
  
  intervaloActivo:number = 15;
  companyID:number = -1;
  userID:number = -1;
  minDate:Date = new Date("2017-02-23T19:41:21");
  maxDate:Date = new Date("2018-10-24T23:25:46");
  fechaInicio = new Date();
  fechaTermino = new Date();

  obtenerData(){
    const diff = new Date(this.fechaTermino).getTime() - new Date(this.fechaInicio).getTime();
    const filtros = {
      intervaloActivo : this.intervaloActivo,
      companyID : this.companyID >= 0 ? this.companyID : null,
      userID : this.userID >= 0 ? this.userID : null,
      fechaInicio : diff > 0 ? this.fechaInicio : null,
      fechaTermino : diff > 0 ? this.fechaTermino : null
    }
     
    console.log(diff)
    console.log(filtros)
  }
}