// let input = {
//     field:[
//         "inv_agent_id"
//     ],
//     table:[
//         "InvAgent"
//     ],
//     filter:[
//         "inv_agent_status = 'A'"
//     ],
//     group:[
//         "inv_agent_supervisor_name DESC"
//     ],
//     order:[
//         "inv_agent_supervisor_name"
//     ],
//     limit:[
//         "3"
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

    let querySQL = 
    `SELECT ${field} FROM ${table}
    ${filterBy} ${filter} ${groupBy} ${group}
    ${orderBy} ${order} ${limitBy} ${limit}`;

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

module.exports = { mainQuery }