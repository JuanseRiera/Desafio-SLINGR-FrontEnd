import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CalculosService } from '../../services/calculos.service';
import { DialogsService } from '../../services/dialogs.service';

@Component({
  selector: 'app-calculadora-de-expresiones',
  templateUrl: './calculadora-de-expresiones.component.html',
  styleUrls: ['./calculadora-de-expresiones.component.css'],
})
export class CalculadoraDeExpresionesComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    expression: new FormControl('', [Validators.required]),
    precision: new FormControl(2, [Validators.min(0), Validators.max(15)]),
  });
  listaPrecisiones: Array<number> = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ];

  cargando: boolean = false;

  @Output() calculoFinalizado = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private calculosService: CalculosService,
    private dialogsService: DialogsService
  ) { }

  ngOnInit(): void { }

  calcular() {
    if (this.form.invalid) {
      return;
    }
    this.cargando = true;
    let promiseGET = this.calculosService
      .calcularConGET(
        this.form.getRawValue().expression,
        this.form.getRawValue().precision
      );

    let promisePOST = this.calculosService
      .calcularConPOST(
        this.form.getRawValue().expression,
        this.form.getRawValue().precision
      );

    Promise.all([promiseGET, promisePOST])
      .then(([respuestaGet, respuestaPost]) => {
        this.cargando = false;
        this.calculoFinalizado.emit({
          respuestaGet: respuestaGet.msg,
          respuestaPost: respuestaPost.msg
        })
      })
      .catch(error => {
        this.cargando = false;
        this.dialogsService.showError(error.error.msg)
      })
  }
}
