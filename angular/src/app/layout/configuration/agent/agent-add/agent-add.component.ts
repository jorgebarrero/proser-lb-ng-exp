import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

// import { AuthService } from '../../shared/services/pages/auth.service';
import { AlertService } from 'src/app/shared/services/alert.service';


import { InvAgentService } from 'src/app/shared/services/configuration/inv-agent.service';
import { InvAgent } from 'src/app/shared/models/configuration/InvAgent';

import { Router } from '@angular/router';
import { AlertModel } from 'src/app/shared/models/Alert';

@Component({
  selector: 'app-agent-add',
  templateUrl: './agent-add.component.html',
  styleUrls: ['./agent-add.component.scss']
})
export class AgentAddComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    // private authService: AuthService,
    private alertService: AlertService,
    private modalService: NgbModal,
    private router: Router,
    private invAgentService: InvAgentService,

  ) { }

  registerForm: FormGroup;
  submitted = false;
  alertMessage = new AlertModel;

  // selected = new InvAgent;

  editedRecord;

  ngOnInit() {

    console.log('alertMessage', this.alertMessage);

    this.registerForm = this.formBuilder.group({

      inv_agent_id: ['0', Validators.required],
      inv_agent_status: ['', Validators.required],
      inv_agent_chk: ['', Validators.required],
      inv_agent_name: ['', Validators.required],
      inv_agent_shortname: ['', Validators.required],
      inv_agent_type: ['', Validators.required],
      inv_agent_legal_id: ['', Validators.required],
      inv_agent_internal_id: ['', Validators.required],
      inv_agent_schedule_id: ['', Validators.required],
      inv_agent_schedule_name: ['', Validators.required],

    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }


  post_Records(query?) {
    // this.selected = [];
    console.log('QUERY TO INSERT', query);

    this.invAgentService.postSelectedRecords(query)
    .subscribe( data => {
      console.log('data', data);
              this.editedRecord = data;
          }
        );

        
  }


  onRegister(register) {
    console.log("registro", register)
    this.post_Records(register)

   this.router.navigate(['/configuration/agent/list']);
  }



  onSubmit() {
    this.submitted = true;
  }

}
