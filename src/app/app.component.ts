import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resultadoGET: string | null = null;
  resultadoPOST: string | null = null;


  calculoFinalizado(resultado: any) {
    this.resultadoGET = resultado.respuestaGet;
    this.resultadoPOST = resultado.respuestaPost;
  }
}
