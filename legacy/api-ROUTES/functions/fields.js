import dates from './dates';


function fieldMultipleFilter( object, sql_field, object_field ) {

    let resultado = [];

    if( object ){
        let sqlClientes = object
        .map( x => {
          return `${sql_field} = ` + x.id;
        })
        let temp = sqlClientes.join(" OR ");
        resultado.push(`(${temp})`);
      }

      let resultado_filtrado = resultado
      .filter( x => {
        return x !== `()`;
      });


      let temp = resultado_filtrado.join(" AND ");
      if (temp === '') {
        temp = '1'
      }

      let resultado_string = 'AND ' + temp;

      return resultado_string;
}

function fieldMultipleFilterQuotes( object, sql_field, object_field ) {

  let resultado = [];

  if( object ){
      let sqlClientes = object
      .map( x => {
        return `${sql_field} = '${x.id}'` ;
      })
      let temp = sqlClientes.join(" OR ");
      resultado.push(`(${temp})`);
    }

    let resultado_filtrado = resultado
    .filter( x => {
      return x !== `()`;
    });


    let temp = resultado_filtrado.join(" AND ");
    if (temp === '') {
      temp = '1'
    }

    let resultado_string = 'AND ' + temp;

    return resultado_string;
}


function fieldMultipleFilterLike( object, sql_field, object_field ) {

  let resultado = [];

  if( object ){
      let sqlClientes = object
      .map( x => {
        return `${sql_field} REGEXP ` + `'[[:<:]]${x.id}[[:>:]]'`;
      })
      let temp = sqlClientes.join(" OR ");
      resultado.push(`(${temp})`);
    }

    let resultado_filtrado = resultado
    .filter( x => {
      return x !== `()`;
    });

    let temp = resultado_filtrado.join(" AND ");
    if (temp === '') {
      temp = '1'
    }

    let resultado_string = 'AND ' + temp;

    return resultado_string;
}



function fieldOneFilter( sql_field, operator, object_field ) {

  let resultado = '';

  if( sql_field ){
    resultado =  `AND ${sql_field} ${operator} '${object_field}' `  ;
  } else {
    resultado = 'AND 1'
  }

  return resultado;
}



function tableCdrFilter ( myDate ) {
  let resultado = '';

  let thisDate = myDate;
  let todayDate =new Date();

// console.log('fechas tableCdrFilter ', thisDate, todayDate );


  let today = dates.dateToText(todayDate);
  let inputDate = dates.datePickerToText(thisDate);

  // console.log('fechas', today, inputDate);


    if ( inputDate === today ) {
      resultado = 'a_clasif_cdr';

    } else {
      resultado = 'a_clasif_cdr_hist';
    }

    return resultado;
}

function tableAuditFilter ( myDate ) {
  let resultado = '';
  let todayDate =new Date();

  let today = dates.dateToText(todayDate);
  let inputDate = dates.datePickerToText(myDate);


    if ( inputDate === today ) {
      resultado = 'a_clasif_audit';

    } else {
      resultado = 'a_clasif_audit_hist';
    }

    return resultado;

}

function tablePersonasFilter ( date ) {
  let resultado = '';
  let todayDate =new Date();

  let today = dates.dateToText(todayDate);
  let inputDate = dates.datePickerToText(myDate);

    if ( inputDate === today ) {
      resultado = 'a_personas_cdr';

    } else {
      resultado = 'a_clasif_personas_hist';
    }

    return resultado;

}


function filterFechasFilter ( date_object ) {
  let resultado = '';
  let today = new Date()

    if ( date === today ) {
      resultado = 'a_personas_cdr';

    } else {
      resultado = 'a_clasif_personas_hist';
    }

    return resultado;

}


module.exports = {

  fieldMultipleFilter,
  fieldMultipleFilterQuotes,
  fieldMultipleFilterLike,
  fieldOneFilter,
  tableCdrFilter,
  tableAuditFilter,
  tablePersonasFilter,
  filterFechasFilter,

}