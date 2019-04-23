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
  selector: 'app-scale-add',
  templateUrl: './scale-add.component.html',
  styleUrls: ['./scale-add.component.scss']
})
export class ScaleAddComponent implements OnInit {

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

  // selected = new InvScale;

  editedRecord;

  ngOnInit() {

    console.log('alertMessage', this.alertMessage);

    this.registerForm = this.formBuilder.group({

      inv_scale_id: ['0', Validators.required],
      inv_scale_status: ['', Validators.required],
      inv_scale_chk: ['', Validators.required],
      inv_scale_name: ['', Validators.required],
      inv_scale_shortname: ['', Validators.required],
      inv_scale_type: ['', Validators.required],
      inv_scale_legal_id: ['', Validators.required],
      inv_scale_internal_id: ['', Validators.required],
      inv_scale_schedule_id: ['', Validators.required],
      inv_scale_schedule_name: ['', Validators.required],

    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }


  post_Records(query?) {
    // this.selected = [];
    console.log('QUERY TO INSERT', query);

    this.invScaleService.postSelectedRecords(query)
    .subscribe( data => {
      console.log('data', data);
              this.editedRecord = data;
          }
        );

        
  }


  onRegister(register) {
    console.log("registro", register)
    this.post_Records(register)

   this.router.navigate(['/configuration/scale/list']);
  }



  onSubmit() {
    this.submitted = true;
  }

}
