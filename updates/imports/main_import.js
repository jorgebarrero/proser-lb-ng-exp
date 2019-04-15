import { importHcaAgent } from './cc_reports/import_agent_hist';
import { importHcaQueue } from './cc_reports/import_queue_hist';

import { importAgent } from './cc_reports/import_agent';
import { importBreak } from './cc_reports/import_break';
import { importCampaign } from './cc_reports/import_campaign';
import { importClient } from './cc_reports/import_client';
import { importQueue } from './cc_reports/import_queue';
import { importSchedule } from './cc_reports/import_schedule';
import { importService } from './cc_reports/import_service';
import { importSupervisor } from './cc_reports/import_supervisor';


const time = process.env.CDR_TIME_INTERVAL;

async function repeatImportUpdate( ) {

  setInterval(
    function() {
      console.clear();
      // eslint-disable-next-line quotes
      console.log('/*************/ MAIN IMPORT /*************/ ');

      importHcaAgent();
      importHcaQueue();

      importAgent();
      importBreak();
      importCampaign();
      importClient();
      importQueue();
      importSchedule();
      importService();
      importSupervisor();
    }, 5000
  );
}

// importAgentMain();
repeatImportUpdate();
