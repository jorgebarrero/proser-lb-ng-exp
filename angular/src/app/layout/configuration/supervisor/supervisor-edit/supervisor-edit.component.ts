import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

// import { AuthService } from '../../shared/services/pages/auth.service';
import { AlertService } from 'src/app/shared/services/alert.service';

import { InvSupervisorService } from 'src/app/shared/services/configuration/inv-supervisor.service';
import { InvSupervisor } from 'src/app/shared/models/configuration/InvSupervisor';

import { Router } from '@angular/router';
import { AlertModel } from 'src/app/shared/models/Alert';

@Component({
  selector: 'app-supervisor-edit',
  templateUrl: './supervisor-edit.component.html',
  styleUrls: ['./supervisor-edit.component.scss']
})
export class SupervisorEditComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
    // private authService: AuthService,
    private alertService: AlertService,
    private modalService: NgbModal,
    private router: Router,
    private invSupervisorService: InvSupervisorService,

  ) { }

  registerForm: FormGroup;
  submitted = false;
  alertMessage = new AlertModel;

  @Input() selected;

  editedRecord;

  ngOnInit() {

    this.selected = JSON.parse(localStorage.getItem("Supervisor"))

    console.log('alertMessage', this.alertMessage);

    this.registerForm = this.formBuilder.group({

      inv_supervisor_id: [this.selected.inv_supervisor_id, Validators.required],
      inv_supervisor_status: [this.selected.inv_supervisor_status, Validators.required],
      inv_supervisor_chk: [this.selected.inv_supervisor_chk, Validators.required],
      inv_supervisor_name: [this.selected.inv_supervisor_name, Validators.required],
      inv_supervisor_shortname: [this.selected.inv_supervisor_shortname, Validators.required],
      inv_supervisor_type: [this.selected.inv_supervisor_type, Validators.required],
      inv_supervisor_legal_id: [this.selected.inv_supervisor_legal_id, Validators.required],
      inv_supervisor_internal_id: [this.selected.inv_supervisor_legal_id, Validators.required],
      inv_supervisor_schedule_id: [this.selected.inv_supervisor_schedule_id, Validators.required],
      inv_supervisor_schedule_name: [this.selected.inv_supervisor_schedule_name, Validators.required],

    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }


  put_Records(query?) {
    // this.selected = [];
    console.log('QUERY TO INSERT', query);

    this.invSupervisorService.putSelectedRecords(query)
    .subscribe( data => {
      console.log('data', data);
              this.editedRecord = data;
          }
        );
        localStorage.setItem("Supervisor", '')
        this.router.navigate(['/configuration/supervisor/list']);
  }

  onSubmit() {
    this.submitted = true;
  }

}
