export class UserSelection {

  title: string;
  subtitle: string;

  start_date: string;
  end_date: string;

  start_time: string;
  end_time: string;

  minutes_interval: number;

  agent: any; // AgentSelection[];
  break: any; // BreakSelection[];
  campaign: any; // CampaignSelection[];
  client: any; // ClientSelection[];
  queue: any; // QueueSelection[];
  scale: any; // ScaleSelection[];
  schedule: any; // ScheduleSelection;
  service: any; // ServiceSelection[];
  supervisor: any; // SupervisorSelection;

  group: string;
  order: string;
  limit: string;

constructor(
  // seleccion_title,
  // selection_subtitle,

  // start_date,
  // end_date,

  // start_time,
  // end_time,

  // minutes_interval,

  // agent,
  // agentBreak,
  // campaign,
  // client,
  // queue,
  // scale,
  // schedule,
  // service,
  // supervisor,
  // team,
  // project,
  ){

    this.agent = []; //new AgentSelection;
  }
}

export class AgentSelection {
  inv_agent_id: number;
  inv_agent_name: string;

  toSqlFilterString(){
    return `inv_agent_id = ${this.inv_agent_id}`
  }
}

export class BreakSelection {
  inv_break_id: number;
  inv_break_name: string;

  toSqlFilterString(){
    return `inv_break_id = ${this.inv_break_id}`
  }
}

export class CampaignSelection {
  inv_campaign_id: number;
  inv_campaign_name: string;

  toSqlFilterString(){
    return `inv_campaign_id = ${this.inv_campaign_id}`
  }

}

export class ClientSelection {
  inv_client_id: number;
  inv_client_name: string;
  toSqlFilterString(){
    return `inv_client_id = ${this.inv_client_id}`
  }
}

export class QueueSelection {
  inv_queue_id: number;
  inv_queue_name: string;
    toSqlFilterString(){
    return `inv_queue_id = ${this.inv_queue_id}`
  }

}

export class ScaleSelection {
  inv_scale_id: number;
  inv_scale_name: string;
    toSqlFilterString(){
    return `inv_scale_id = ${this.inv_scale_id}`
  }
}

export class ScheduleSelection {
  inv_schedule_id: number;
  inv_schedule_name: string;
    toSqlFilterString(){
    return `inv_schedule_id = ${this.inv_schedule_id}`
  }
}

export class ServiceSelection {
  inv_supervisor_id: number;
  inv_service_name: string;
    toSqlFilterString(){
    return `inv_supervisor_id = ${this.inv_supervisor_id}`
  }
}

export class SupervisorSelection {
  inv_supervisor_id: number;
  inv_supervisor_name: string;
    toSqlFilterString(){
    return `inv_supervisor_id = ${this.inv_supervisor_id}`
  }
}


