export function calcularEscalaGrafico( valor ) {
  console.log('valor' , valor);


    let result = 1;


    if ( valor > 0 && valor <= 10 ) {
      result = 1;
    }
    if ( valor > 11 && valor <= 20 ) {
      result = 2;
    }
    if ( valor > 21 && valor <= 50 ) {
      result = 5;
    }
    if ( valor > 51 && valor <= 100 ) {
      result = 10;
    }
    if ( valor > 101 && valor <= 500  ) {
      result = 50;
    }
    if ( valor > 501 && valor <= 1000  ) {
      result = 100;
    }
    if ( valor > 1001 && valor <= 5000  ) {
      result = 1000;
    }
    if ( valor > 5001 && valor <= 10000  ) {
      result = 2000;
    }
    if ( valor > 10001 && valor <= 50000  ) {
      result = 5000;
    }
    if ( valor > 50001 && valor <= 100000  ) {
      result = 10000;
    }
    if (valor > 100001   ) {
      result = 20000;
    }

    return result;
  }


  /*
      switch (valor) {
      case ( valor > 0 && valor <= 10 ):
          this.result = 1;
          break;
      case ( valor > 11 && valor <= 20 ):
          this.result = 2;
          break;
      default:
        this.result = 1;
  }

  */
 