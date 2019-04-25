export function createLlamadaFilter(filtro) {

  console.log('filtro.llamada_clasificacion', filtro);
  

  let resultado = [];


  if (filtro) {
    let data = filtro.llamada_clasificacion
      .map(x => {
        return `llamada_clasificacion = '${x.name}'`
      })

    let temp = data.join(" OR ");
    resultado.push(`(${temp})`);
  }

  if (resultado[0] === '()') { resultado = [(1)]}

  let resultado_string = 'AND ' + resultado;

  console.log('RESULTADO STRING', resultado_string);

  return resultado_string;
}