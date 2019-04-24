export class Selection {

    selected_year: any;
    selected_month:  any;
    selected_date:  any;

    selected_year_optional: any;
    selected_month_optional:  any;
    selected_date_optional:  any;

    selected_interval: any;
    selected_time_from: any;
    selected_time_to: any;

    selected_agent:  any;
    selected_supervisor:  any;
    selected_queue:  any;
    selected_client:  any;
    selected_campaign:  any;
    selected_service:  any;
    selected_sql_query: any;
    selected_titles: any;


    constructor(
      selected_year = '',
      selected_month = '',
      selected_date = '',

      selected_year_optional = '',
      selected_month_optional = '',
      selected_date_optional = '',

      selected_interval = '',
      selected_time_from = '',
      selected_time_to = '',
      selected_agent = '',
      selected_supervisor = '',
      selected_queue = '',
      selected_client = '',
      selected_campaign = '',
      selected_service = '',
      selected_sql_query = '',
      selected_titles = '',


    ) {
      this.selected_year = selected_year;
      this.selected_month = selected_month;
      this.selected_date = selected_date;

      this.selected_year_optional = selected_year_optional;
      this.selected_date_optional = selected_date_optional;
      this.selected_date_optional = selected_date_optional;

      this.selected_interval = selected_interval;
      this.selected_time_from = selected_time_from;
      this.selected_time_to = selected_time_to;

      this.selected_agent = selected_agent;
      this.selected_supervisor = selected_supervisor;
      this.selected_queue = selected_queue;
      this.selected_client = selected_client;
      this.selected_campaign = selected_campaign;
      this.selected_service = selected_service;
      this.selected_sql_query = selected_sql_query;
      this.selected_titles = selected_titles;

    }

}

export class Months {
  months: Month[];

  constructor(
    months = [
      {month_number: 1, month_name: 'enero'},
      {month_number: 2, month_name: 'febrero'},
      {month_number: 3, month_name: 'marzo'},
      {month_number: 4, month_name: 'abril'},
      {month_number: 5, month_name: 'mayo'},
      {month_number: 6, month_name: 'junio'},
      {month_number: 7, month_name: 'julio'},
      {month_number: 8, month_name: 'agosto'},
      {month_number: 9, month_name: 'septiembre'},
      {month_number: 10, month_name: 'octubre'},
      {month_number: 11, month_name: 'noviembre'},
      {month_number: 12, month_name: 'diciembre'},
    ]

  ) {
    this.months = months;
  }
}


  export class Month {
  month_number;
  month_name;

}

/*

export class Selection {

    selected_year: SelectedYear;
    selected_month:  SelectedMonth;
    selected_date:  SelectedDate;
    selected_agent:  string;
    selected_supervisor:  string;
    selected_queue:  string;
    selected_client:  string;
    selected_campaign:  string;
    selected_service:  string;
    selected_titles: string;
    selected_sql_query: string;

    constructor(
      selected_year = new SelectedYear,
      selected_month = new SelectedMonth,
      selected_date = new SelectedDate,
      selected_agent = '',
      selected_supervisor = '',
      selected_queue = '',
      selected_client = '',
      selected_campaign = '',
      selected_service = '',
      selected_titles = '',
      selected_sql_query = '',

    ) {
      this.selected_year = selected_year;
      this.selected_month = selected_month;
      this.selected_date = selected_date;
      this.selected_agent = selected_agent;
      this.selected_supervisor = selected_supervisor;
      this.selected_queue = selected_queue;
      this.selected_client = selected_client;
      this.selected_campaign = selected_campaign;
      this.selected_service = selected_service;
      this.selected_titles = selected_titles;
      this.selected_sql_query = selected_sql_query;
    }

}

export class SelectedYear {
  year: string;
}

export class SelectedMonth {
  month_number: number;
  month_name: string;
  year: string;
}

export class SelectedDate {
  dates: string;
  month_number: number;
  month_name: string;
  year: string;

}

export class Months {
  months: Month[];

  constructor(
    months = [
      {month_number: 1, month_name: 'enero'},
      {month_number: 2, month_name: 'febrero'},
      {month_number: 3, month_name: 'marzo'},
      {month_number: 4, month_name: 'abril'},
      {month_number: 5, month_name: 'mayo'},
      {month_number: 6, month_name: 'junio'},
      {month_number: 7, month_name: 'julio'},
      {month_number: 8, month_name: 'agosto'},
      {month_number: 9, month_name: 'septiembre'},
      {month_number: 10, month_name: 'octubre'},
      {month_number: 11, month_name: 'noviembre'},
      {month_number: 12, month_name: 'diciembre'},
    ]

  ) {
    this.months = months;
  }
}

export class Month {
  month_number;
  month_name;

}


*/
