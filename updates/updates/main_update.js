import { updateMainCdr } from './cdr/update_cdr_main';
import { updateMainAudit } from './audit/update_audit_main';
import { updateMainAuditEmpty } from './audit/update_audit_main_empty';

// import { updateAsyncCdrDates } from './cdr/update_cdr_dates';
// import { updateAsyncCdrQlog } from './cdr/update_cdr_qlog';
// import { updateAsyncCdrType } from './cdr/update_cdr_type';
// import { updateAsyncCdrCall } from './cdr/update_cdr_call';

import { updateAgent } from './inv/update_agent';
import { updateBreak } from './inv/update_break';
import { updateCampaign } from './inv/update_campaign';
import { updateQueue } from './inv/update_queue';

import { asyncCall } from './inv/test'



const time = process.env.CDR_TIME_INTERVAL;


async function repeatCdrUpdate( ) {

  let num;

  setInterval(

    function() {
      console.clear();
      num = num + 1;
      console.log(`/*************/ MAIN UPDATE /*************/ `);
      console.log('num', num);


      // updateMainCdr();
      // updateMainAudit();
      // updateMainAuditEmpty();

      // updateAgent();
      // updateBreak();
      // updateCampaign();
      // updateQueue();


      // updateAsyncCdrDates();
      // updateAsyncCdrQlog();
      // updateAsyncCdrType();
      // updateAsyncCdrCall();
    }, 5000
  );
}


asyncCall().then(x => {
  console.log('resolved');
});
