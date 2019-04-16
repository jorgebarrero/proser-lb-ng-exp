export function createResultadoLlamadaFilter(filtro) {

    console.log('filtro.resultado_llamada', filtro);
    
  
    let resultado = [];
  
  
    if (filtro) {
      let data = filtro.resultado_llamada
        .map(x => {
          return `resultado_llamada = '${x.name}'`
        })
  
      let temp = data.join(" OR ");
      resultado.push(`(${temp})`);
    }
  
    if (resultado[0] === '()') { resultado = [(1)]}
  
    let resultado_string = 'AND ' + resultado;
  
    console.log('RESULTADO STRING', resultado_string);
  
    return resultado_string;
  }