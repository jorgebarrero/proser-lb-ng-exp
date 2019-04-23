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
  selector: 'app-agent-detail',
  templateUrl: './agent-detail.component.html',
  styleUrls: ['./agent-detail.component.scss']
})
export class AgentDetailComponent implements OnInit {

constructor(
  private formBuilder: FormBuilder,
  // private authService: AuthService,
  private alertService: AlertService,
  private modalService: NgbModal,
  private router: Router
) { }

registerForm: FormGroup;
submitted = false;
alertMessage = new AlertModel;

@Input() selected;

ngOnInit() {

  console.log('alertMessage', this.alertMessage);

  this.registerForm = this.formBuilder.group({

    inv_agent_id: [this.selected.inv_agent_id, Validators.required],
    inv_agent_status: [this.selected.inv_agent_status, Validators.required],
    inv_agent_chk: [this.selected.inv_agent_chk, Validators.required],
    inv_agent_name: [this.selected.inv_agent_name, Validators.required],
    inv_agent_shortname: [this.selected.inv_agent_shortname, Validators.required],
    inv_agent_type: [this.selected.inv_agent_type, Validators.required],
    inv_agent_legal_id: [this.selected.inv_agent_legal_id, Validators.required],
    inv_agent_internal_id: [this.selected.inv_agent_legal_id, Validators.required],
    inv_agent_schedule_id: [this.selected.inv_agent_schedule_id, Validators.required],
    inv_agent_schedule_name: [this.selected.inv_agent_schedule_name, Validators.required],

  });

}

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

onSubmit() {
  this.submitted = true;
}

}

