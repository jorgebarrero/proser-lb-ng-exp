import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

// import { AuthService } from '../../shared/services/pages/auth.service';
import { AlertService } from 'src/app/shared/services/alert.service';

import { InvQueueService } from 'src/app/shared/services/configuration/inv-queue.service';
import { InvQueue } from 'src/app/shared/models/configuration/InvQueue';

import { Router } from '@angular/router';
import { AlertModel } from 'src/app/shared/models/Alert';

@Component({
  selector: 'app-queue-edit',
  templateUrl: './queue-edit.component.html',
  styleUrls: ['./queue-edit.component.scss']
})
export class QueueEditComponent implements OnInit {

 
  constructor(
    private formBuilder: FormBuilder,
    // private authService: AuthService,
    private alertService: AlertService,
    private modalService: NgbModal,
    private router: Router,
    private invQueueService: InvQueueService,

  ) { }

  registerForm: FormGroup;
  submitted = false;
  alertMessage = new AlertModel;

  @Input() selected;

  editedRecord;

  ngOnInit() {

    this.selected = JSON.parse(localStorage.getItem("Queue"))

    console.log('alertMessage', this.alertMessage);

    this.registerForm = this.formBuilder.group({

      inv_queue_id: [this.selected.inv_queue_id, Validators.required],
      inv_queue_status: [this.selected.inv_queue_status, Validators.required],
      inv_queue_chk: [this.selected.inv_queue_chk, Validators.required],
      inv_queue_name: [this.selected.inv_queue_name, Validators.required],
      inv_queue_shortname: [this.selected.inv_queue_shortname, Validators.required],
      inv_queue_type: [this.selected.inv_queue_type, Validators.required],
      inv_queue_legal_id: [this.selected.inv_queue_legal_id, Validators.required],
      inv_queue_internal_id: [this.selected.inv_queue_legal_id, Validators.required],
      inv_queue_schedule_id: [this.selected.inv_queue_schedule_id, Validators.required],
      inv_queue_schedule_name: [this.selected.inv_queue_schedule_name, Validators.required],

    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }


  put_Records(query?) {
    // this.selected = [];
    console.log('QUERY TO INSERT', query);

    this.invQueueService.putSelectedRecords(query)
    .subscribe( data => {
      console.log('data', data);
              this.editedRecord = data;
          }
        );
        localStorage.setItem("Queue", '')
        this.router.navigate(['/configuration/queue/list']);
  }

  onSubmit() {
    this.submitted = true;
  }

}
