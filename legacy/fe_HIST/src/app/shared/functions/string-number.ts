export function textoANumeroFlotante(text) {
    let result = null;
    if (text) {
        // tslint:disable-next-line:radix
        result = parseFloat(text);
    }
    return result;
  }
