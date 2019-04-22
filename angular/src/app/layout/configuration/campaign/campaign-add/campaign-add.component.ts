import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

// import { AuthService } from '../../shared/services/pages/auth.service';
import { AlertService } from 'src/app/shared/services/alert.service';

import { InvCampaignService } from 'src/app/shared/services/configuration/inv-campaign.service';
import { InvCampaign } from 'src/app/shared/models/configuration/InvCampaign';

import { Router } from '@angular/router';
import { AlertModel } from 'src/app/shared/models/Alert';

@Component({
  selector: 'app-campaign-add',
  templateUrl: './campaign-add.component.html',
  styleUrls: ['./campaign-add.component.scss']
})
export class CampaignAddComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    // private authService: AuthService,
    private alertService: AlertService,
    private modalService: NgbModal,
    private router: Router,
    private invCampaignService: InvCampaignService,

  ) { }

  registerForm: FormGroup;
  submitted = false;
  alertMessage = new AlertModel;

  // selected = new InvCampaign;

  editedRecord;

  ngOnInit() {

    console.log('alertMessage', this.alertMessage);

    this.registerForm = this.formBuilder.group({

      inv_campaign_id: ['0', Validators.required],
      inv_campaign_status: ['', Validators.required],
      inv_campaign_chk: ['', Validators.required],
      inv_campaign_name: ['', Validators.required],
      inv_campaign_shortname: ['', Validators.required],
      inv_campaign_type: ['', Validators.required],
      inv_campaign_legal_id: ['', Validators.required],
      inv_campaign_internal_id: ['', Validators.required],
      inv_campaign_schedule_id: ['', Validators.required],
      inv_campaign_schedule_name: ['', Validators.required],

    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }


  post_Records(query?) {
    // this.selected = [];
    console.log('QUERY TO INSERT', query);

    this.invCampaignService.postSelectedRecords(query)
    .subscribe( data => {
      console.log('data', data);
              this.editedRecord = data;
          }
        );

        
  }


  onRegister(register) {
    console.log("registro", register)
    this.post_Records(register)

   this.router.navigate(['/configuration/campaign/list']);
  }



  onSubmit() {
    this.submitted = true;
  }

}
