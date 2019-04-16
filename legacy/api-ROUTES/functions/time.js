function createIntervals ( min_start, min_end, min_interval ) {
    
    // console.log('data createIntervals', min_start, min_end, min_interval);
    
    
    let resultado = [];
    let series = [];
    
    
    if ( min_start, min_end, min_interval ) {
        
        let series = ['TOTAL'];
        
        for (var i = min_start; i < min_end + 1; i++ ) {
            
            if ( i % min_interval === 0){
                series.push(i)
            }
         }
         
        //  return series;
         return resultado = series
         .map( x => {
             return { id: x, minutes: numToRoundMinutes(x), to: numToRoundMinutes(x + min_interval) }
         });
         
    } else {
        return resultado;
    }
     

}





function numToRoundMinutes(num) {

    if ( isNaN(num)) {
        return num;
    } else {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    const seconds = 0;
    

    function pad(num, size) {
    let s = num + '';
    while (s.length < size) {s = '0' + s; }
    return s;
}

    return `${pad(hours, 2)}:${pad(minutes, 2)}:${pad(seconds, 2)}`;

}

}



function secToTime( sec ) {

    let result = '';
    
    if (sec === 0 ) {
        result = '00:00:00';
    }
    
    if (sec) {
    var sec_num = parseInt(sec, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time =  hours+':'+minutes+':'+seconds;
    
    result = time
    
    }
    return result
    
    }
    

module.exports = {
    createIntervals,
    numToRoundMinutes,
    secToTime,
}
