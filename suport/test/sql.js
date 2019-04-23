const filter = {
    "id": 1,
    "filter":[
        "inv_agent_status = 'A'"
    ],
    "group":[
        "inv_agent_supervisor_name DESC"
    ],
    "order":[
        "inv_agent_supervisor_name"
    ],
    "limit":[
        3
    ]
}


let resp = [
    {
      "inv_report_field": "inv_agent_id",
      "inv_report_table": "InvAgent"
    }
  ]



filter.field = [resp[0].inv_report_field]
filter.table = [resp[0].inv_report_table]

console.log(filter)