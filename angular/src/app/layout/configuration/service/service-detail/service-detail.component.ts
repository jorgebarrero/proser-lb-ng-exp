import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

// import { AuthService } from '../../shared/services/pages/auth.service';
import { AlertService } from 'src/app/shared/services/alert.service';

import { InvServiceService } from 'src/app/shared/services/configuration/inv-service.service';
import { InvService } from 'src/app/shared/models/configuration/InvService';

import { Router } from '@angular/router';
import { AlertModel } from 'src/app/shared/models/Alert';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {

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

      inv_service_id: [this.selected.inv_service_id, Validators.required],
      inv_service_status: [this.selected.inv_service_status, Validators.required],
      inv_service_chk: [this.selected.inv_service_chk, Validators.required],
      inv_service_name: [this.selected.inv_service_name, Validators.required],
      inv_service_shortname: [this.selected.inv_service_shortname, Validators.required],
      inv_service_type: [this.selected.inv_service_type, Validators.required],
      inv_service_legal_id: [this.selected.inv_service_legal_id, Validators.required],
      inv_service_internal_id: [this.selected.inv_service_legal_id, Validators.required],
      inv_service_schedule_id: [this.selected.inv_service_schedule_id, Validators.required],
      inv_service_schedule_name: [this.selected.inv_service_schedule_name, Validators.required],

    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
  }

}
