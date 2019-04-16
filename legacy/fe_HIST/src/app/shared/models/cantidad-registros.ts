export class QtyRecords {

  fecha: string;
  cantidad_registros: string;
  cantidas_validos: string;

  constructor(

  fecha= '',
  cantidad_registros= '',
  cantidas_validos = '',


  ) {
    this.fecha = fecha;
    this.cantidad_registros = cantidad_registros;
    this.cantidas_validos = cantidas_validos;
  }

}
