import time from './time';


function datePickerToDate(date) {
  // convierte de objeto {year: 2018, month: 10, day: 3} a texto en formato aaaa-mm-dd
  // console.log(date);

  let resultado = new Date();


  function pad(num, size) {
    let s = num + '';
    while (s.length < size) {
      s = '0' + s;
    }
    return s;
  }

  if (date) {
    resultado = new Date(`${date.year}-${pad(date.month, 2)}-${pad(date.day, 2)}`);
  }

  return resultado
}



function dateToText(date) {
  
  let resultado = '';
  let now = new Date(date);
  
  function pad(num, size) {
    let s = num + '';
    while (s.length < size) {
      s = '0' + s;
    }
    return s;
  }


  if (now) {
    let date = {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate()
    };
  
      resultado = `${date.year}-${pad(date.month, 2)}-${pad(date.day, 2)}`;
  
  }
  
  
  
  return resultado
}



function datePickerToText(date) {
  // convierte de objeto {year: 2018, month: 10, day: 3} a texto en formato aaaa-mm-dd
  // console.log(date);

  //  let mydate = {year: 2018, month: 10, day: 3}

  function pad(num, size) {
    let s = num + '';
    while (s.length < size) {
      s = '0' + s;
    }
    return s;
  }

  return `${date.year}-${pad(date.month, 2)}-${pad(date.day, 2)}`;

}


// function returnDateFilter(objeto_incio, objeto_final) {

//   let result;

//   if (objeto_incio, objeto_final) {
//     let fecha_inicio_text = datePickerToText(objeto_incio);
//     let fecha_final_text = datePickerToText(objeto_final);

//     let fecha_inicio = new Date(fecha_inicio_text);
//     let fecha_final = new Date(fecha_final_text);

//     let dateFilter = {
//       start: '',
//       end: ''
//     };

//     let fecha = 'calldate';


//     // console.log('fechas returnDateFilter ', fecha_inicio, fecha_final );



//     if (fecha_inicio_text === fecha_final_text || fecha_inicio < fecha_final) {


//       dateFilter.start = `AND ${fecha} = '${fecha_inicio_text}'`;
//       dateFilter.end = ``;


//     } else {

//       dateFilter.start = `AND ${fecha}  >= '${fecha_inicio_text}'`;
//       dateFilter.end = `AND ${fecha}  <= '${fecha_final_text}'`;

//     }

//     result = dateFilter;
//   }

//   return result;

// }



function returnDateFilter(objeto_incio, objeto_final) {

  let result;

  if (objeto_incio, objeto_final) {
    let fecha_inicio_text = datePickerToText(objeto_incio);
    let fecha_final_text = datePickerToText(objeto_final);

    let fecha_inicio = new Date(fecha_inicio_text);
    let fecha_final = new Date(fecha_final_text);

    let dateFilter = {
      start: '',
      end: ''
    };


    // console.log('fechas returnDateFilter ', fecha_inicio, fecha_final );



    if (fecha_inicio_text === fecha_final_text || fecha_inicio > fecha_final) {


      dateFilter.start = `AND fecha = '${fecha_inicio_text}'`;
      dateFilter.end = ``;


    } else {

      dateFilter.start = `AND fecha >= '${fecha_inicio_text}'`;
      dateFilter.end = `AND fecha <= '${fecha_final_text}'`;

    }

    result = dateFilter;
  }

  return result;

}


function createDateIntervals(date_start, date_end) {

  let resultado = [];

  if (date_start, date_end) {

    let start = new Date(date_start);
    let end = new Date(date_end);

    let num_start = 1;
    let num_end = dateDiffInDays(start, end);

    let series = ['TOTAL'];
    
    let date;

    for (var i = num_start; i < num_end + 2 ; i++) {
      
      let date = new Date(date_start);
      
      date.setDate(date.getDate() + i);
      console.log('DATE', i, date);
      
      series.push( dateToText(date))

    }

    //  return series;
    return resultado = series
      .map((x, index) => {
        return {
          id: index + 1,
          date: x
        }
      });

  } else {
    return resultado;
  }


}



function dateDiffInDays(a, b) {

  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.

  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  
  console.log('UTC', utc1, utc2);

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}


module.exports = {
  datePickerToDate,
  dateToText,
  datePickerToText,
  createDateIntervals,
  returnDateFilter
}