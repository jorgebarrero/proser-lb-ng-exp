import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

// import { AuthService } from '../../shared/services/pages/auth.service';
import { AlertService } from 'src/app/shared/services/alert.service';

import { InvScheduleService } from 'src/app/shared/services/configuration/inv-schedule.service';
import { InvSchedule } from 'src/app/shared/models/configuration/InvSchedule';

import { Router } from '@angular/router';
import { AlertModel } from 'src/app/shared/models/Alert';

@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.scss']
})
export class ScheduleEditComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    // private authService: AuthService,
    private alertService: AlertService,
    private modalService: NgbModal,
    private router: Router,
    private invScheduleService: InvScheduleService,

  ) { }

  registerForm: FormGroup;
  submitted = false;
  alertMessage = new AlertModel;

  @Input() selected;

  editedRecord;

  ngOnInit() {

    this.selected = JSON.parse(localStorage.getItem("Schedule"))

    console.log('alertMessage', this.alertMessage);

    this.registerForm = this.formBuilder.group({

      inv_schedule_id: [this.selected.inv_schedule_id, Validators.required],
      inv_schedule_status: [this.selected.inv_schedule_status, Validators.required],
      inv_schedule_chk: [this.selected.inv_schedule_chk, Validators.required],
      inv_schedule_name: [this.selected.inv_schedule_name, Validators.required],
      inv_schedule_shortname: [this.selected.inv_schedule_shortname, Validators.required],
      inv_schedule_type: [this.selected.inv_schedule_type, Validators.required],
      inv_schedule_legal_id: [this.selected.inv_schedule_legal_id, Validators.required],
      inv_schedule_internal_id: [this.selected.inv_schedule_legal_id, Validators.required],
      inv_schedule_schedule_id: [this.selected.inv_schedule_schedule_id, Validators.required],
      inv_schedule_schedule_name: [this.selected.inv_schedule_schedule_name, Validators.required],

    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }


  put_Records(query?) {
    // this.selected = [];
    console.log('QUERY TO INSERT', query);

    this.invScheduleService.putSelectedRecords(query)
    .subscribe( data => {
      console.log('data', data);
              this.editedRecord = data;
          }
        );
        localStorage.setItem("Schedule", '')
        this.router.navigate(['/configuration/schedule/list']);
  }

  onSubmit() {
    this.submitted = true;
  }

}
