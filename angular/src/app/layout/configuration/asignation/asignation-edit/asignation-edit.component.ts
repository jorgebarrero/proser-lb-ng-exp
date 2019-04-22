// import { Component, OnInit, Input } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

// // import { AuthService } from '../../shared/services/pages/auth.service';
// import { AlertService } from 'src/app/shared/services/alert.service';

// import { InvAsignationService } from 'src/app/shared/services/configuration/inv-asignation.service';
// import { InvAsignation } from 'src/app/shared/models/configuration/InvAsignation';

// import { Router } from '@angular/router';
// import { AlertModel } from 'src/app/shared/models/Alert';

// @Component({
//   selector: 'app-asignation-edit',
//   templateUrl: './asignation-edit.component.html',
//   styleUrls: ['./asignation-edit.component.scss']
// })
// export class AsignationEditComponent implements OnInit {

//   constructor(
//     private formBuilder: FormBuilder,
//     // private authService: AuthService,
//     private alertService: AlertService,
//     private modalService: NgbModal,
//     private router: Router,
//     private invAsignationService: InvAsignationService,

//   ) { }

//   registerForm: FormGroup;
//   submitted = false;
//   alertMessage = new AlertModel;

//   @Input() selected;

//   editedRecord;

//   ngOnInit() {

//     this.selected = JSON.parse(localStorage.getItem("Asignation"))

//     console.log('alertMessage', this.alertMessage);

//     this.registerForm = this.formBuilder.group({

//       inv_asignation_id: [this.selected.inv_asignation_id, Validators.required],
//       inv_asignation_status: [this.selected.inv_asignation_status, Validators.required],
//       inv_asignation_chk: [this.selected.inv_asignation_chk, Validators.required],
//       inv_asignation_name: [this.selected.inv_asignation_name, Validators.required],
//       inv_asignation_shortname: [this.selected.inv_asignation_shortname, Validators.required],
//       inv_asignation_type: [this.selected.inv_asignation_type, Validators.required],
//       inv_asignation_legal_id: [this.selected.inv_asignation_legal_id, Validators.required],
//       inv_asignation_internal_id: [this.selected.inv_asignation_legal_id, Validators.required],
//       inv_asignation_schedule_id: [this.selected.inv_asignation_schedule_id, Validators.required],
//       inv_asignation_schedule_name: [this.selected.inv_asignation_schedule_name, Validators.required],

//     });

//   }

//   // convenience getter for easy access to form fields
//   get f() { return this.registerForm.controls; }


//   put_Records(query?) {
//     // this.selected = [];
//     console.log('QUERY TO INSERT', query);

//     this.invAsignationService.putSelectedRecords(query)
//     .subscribe( data => {
//       console.log('data', data);
//               this.editedRecord = data;
//           }
//         );
//         localStorage.setItem("Asignation", '')
//         this.router.navigate(['/configuration/asignation/list']);
//   }

//   onSubmit() {
//     this.submitted = true;
//   }

// }
