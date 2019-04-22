import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

// import { AuthService } from '../../shared/services/pages/auth.service';
import { AlertService } from 'src/app/shared/services/alert.service';

import { InvClientService } from 'src/app/shared/services/configuration/inv-client.service';
import { InvClient } from 'src/app/shared/models/configuration/InvClient';

import { Router } from '@angular/router';
import { AlertModel } from 'src/app/shared/models/Alert';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {

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

      inv_client_id: [this.selected.inv_client_id, Validators.required],
      inv_client_status: [this.selected.inv_client_status, Validators.required],
      inv_client_chk: [this.selected.inv_client_chk, Validators.required],
      inv_client_name: [this.selected.inv_client_name, Validators.required],
      inv_client_shortname: [this.selected.inv_client_shortname, Validators.required],
      inv_client_type: [this.selected.inv_client_type, Validators.required],
      inv_client_legal_id: [this.selected.inv_client_legal_id, Validators.required],
      inv_client_internal_id: [this.selected.inv_client_legal_id, Validators.required],
      inv_client_schedule_id: [this.selected.inv_client_schedule_id, Validators.required],
      inv_client_schedule_name: [this.selected.inv_client_schedule_name, Validators.required],

    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
  }

}

