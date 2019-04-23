import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

// import { AuthService } from '../../shared/services/pages/auth.service';
import { AlertService } from 'src/app/shared/services/alert.service';

import { InvScaleService } from 'src/app/shared/services/configuration/inv-scale.service';
import { InvScale } from 'src/app/shared/models/configuration/InvScale';

import { Router } from '@angular/router';
import { AlertModel } from 'src/app/shared/models/Alert';

@Component({
  selector: 'app-scale-edit',
  templateUrl: './scale-edit.component.html',
  styleUrls: ['./scale-edit.component.scss']
})
export class ScaleEditComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    // private authService: AuthService,
    private alertService: AlertService,
    private modalService: NgbModal,
    private router: Router,
    private invScaleService: InvScaleService,

  ) { }

  registerForm: FormGroup;
  submitted = false;
  alertMessage = new AlertModel;

  @Input() selected;

  editedRecord;

  ngOnInit() {

    this.selected = JSON.parse(localStorage.getItem("Scale"))

    console.log('alertMessage', this.alertMessage);

    this.registerForm = this.formBuilder.group({

      inv_scale_id: [this.selected.inv_scale_id, Validators.required],
      inv_scale_status: [this.selected.inv_scale_status, Validators.required],
      inv_scale_chk: [this.selected.inv_scale_chk, Validators.required],
      inv_scale_name: [this.selected.inv_scale_name, Validators.required],
      inv_scale_shortname: [this.selected.inv_scale_shortname, Validators.required],
      inv_scale_type: [this.selected.inv_scale_type, Validators.required],
      inv_scale_legal_id: [this.selected.inv_scale_legal_id, Validators.required],
      inv_scale_internal_id: [this.selected.inv_scale_legal_id, Validators.required],
      inv_scale_schedule_id: [this.selected.inv_scale_schedule_id, Validators.required],
      inv_scale_schedule_name: [this.selected.inv_scale_schedule_name, Validators.required],

    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }


  put_Records(query?) {
    // this.selected = [];
    console.log('QUERY TO INSERT', query);

    this.invScaleService.putSelectedRecords(query)
    .subscribe( data => {
      console.log('data', data);
              this.editedRecord = data;
          }
        );
        localStorage.setItem("Scale", '')
        this.router.navigate(['/configuration/scale/list']);
  }

  onSubmit() {
    this.submitted = true;
  }

}
