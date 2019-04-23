// let input = {
//     field:[
//         "(cdr_dates_week_day_name) AS 'Dia'", 
//         "(cdr_dates_calldate) AS 'Fecha Desde'",
//         "MIN(cdr_dates_time) AS 'Hora inicio'",
//         "MAX(cdr_dates_time) AS 'Hora final'",
//         "SUM(cdr_call_received) AS 'Llamadas recibidas'",
//         "SUM(cdr_call_abandoned) AS 'Llamadas abandonadas'",
//         "SUM(cdr_call_atended) AS 'Llamadas atendidas'",
//         "SUM(cdr_call_short) AS 'Llamadas cortas'",
//         "SUM(cdr_call_before_time) AS 'Llamadas antes de 20'",
//         "SUM(cdr_call_before_time) AS 'Llamadas colgadas'",
//         "SUM(cdr_call_before_time)/SUM(cdr_call_received) AS 'Nivel servicios'",
//         "SUM(cdr_call_atended)/SUM(cdr_call_received) AS 'Nivel atencion'",
//         "SUM(cdr_call_abandoned)/SUM(cdr_call_received) AS 'Nivel abandono'",
//         "SUM(cdr_qlog_secs_at_operation) AS 'Segundos operacion'",
//         "SEC_TO_TIME(SUM(cdr_qlog_secs_at_operation)) AS 'Tiempo operacion'",
//         "SUM(cdr_qlog_secs_at_wait) AS 'Segundos espera'"
//     ],
//     table:[
//         "MainCdr"
//     ],
//     filter:[
//         "cdr_dates_calldate='2018-11-23'"
//     ],
//     group:[
//         "cdr_dates_week_day_name"
//     ],
//     order:[
        
//     ],
//     limit:[
        
//     ]
// };

function mainQuery(arg){

    let result = null;

    let field = validateField(arg) ? arg.field : "";
    let table = validateTable(arg) ? arg.table : "";
    let filter = validateFilter(arg) ? arg.filter : "";
    let group = validateGroup(arg) ? arg.group : "";
    let order = validateOrder(arg) ? arg.order : "";
    let limit = validateLimit(arg) ? arg.limit :"";


    let filterBy = validateFilter(arg) ? "WHERE" : "";
    let groupBy = validateGroup(arg) ? "GROUP BY" : "";
    let orderBy = validateOrder(arg) ? "ORDER BY" : "";
    let limitBy = validateLimit(arg) ? "LIMIT" : "";


    if (field && table){

        let totalField = {
            total: [],
            detail: []
        };

        totalField.total = group;
        totalField.detail = [field];
        console.log("TOTAL FIELD", totalField);

    let querySQL = 
    `
    SELECT 'TOTAL', ${totalField.detail} FROM ${table}
    ${filterBy} ${filter}

    UNION

    SELECT ${totalField.total}, ${totalField.detail} FROM ${table}
    ${filterBy} ${filter} ${groupBy} ${group}
    ${orderBy} ${order} ${limitBy} ${limit}
    
    `;
    // console.log(querySQL);
    result = querySQL;
    }

    return result;

}


function validateField(arg){

    let result = false

if (arg.field){

    if (arg.field.length > 0){
        return true
    } else {
        result = false
    };
 }
    return result;
};


function validateTable(arg){

    let result = false

    if (arg.table){
    
        if (arg.table.length > 0){
            return true
        } else {
            result = false
        };
     }
        return result;
    };


function validateFilter(arg){

    let result = false

if (arg.filter){

    if (arg.filter.length > 0){
        return true
    } else {
        result = false
    };
 }
    return result;
};


function validateGroup(arg){

    let result = false

if (arg.group){

    if (arg.group.length > 0){
        return true
    } else {
        result = false
    };
 }
    return result;
};


function validateOrder(arg){

    let result = false

if (arg.order){

    if (arg.order.length > 0){
        return true
    } else {
        result = false
    };
 }
    return result;
};


function validateLimit(arg){

    let result = false

if (arg.limit){

    if (arg.limit.length > 0){
        return true
    } else {
        result = false
    };
 }
    return result;
};



// let xxx = mainQuery(input);
// console.log(xxx);
// let valid = validateField(input);
// console.log(valid);

export { mainQuery };