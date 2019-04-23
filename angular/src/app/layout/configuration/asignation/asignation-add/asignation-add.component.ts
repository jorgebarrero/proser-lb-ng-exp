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
//   selector: 'app-asignation-add',
//   templateUrl: './asignation-add.component.html',
//   styleUrls: ['./asignation-add.component.scss']
// })
// export class AsignationAddComponent implements OnInit {

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

//   // selected = new InvAsignation;

//   editedRecord;

//   ngOnInit() {

//     console.log('alertMessage', this.alertMessage);

//     this.registerForm = this.formBuilder.group({

//       inv_asignation_id: ['0', Validators.required],
//       inv_asignation_status: ['', Validators.required],
//       inv_asignation_chk: ['', Validators.required],
//       inv_asignation_name: ['', Validators.required],
//       inv_asignation_shortname: ['', Validators.required],
//       inv_asignation_type: ['', Validators.required],
//       inv_asignation_legal_id: ['', Validators.required],
//       inv_asignation_internal_id: ['', Validators.required],
//       inv_asignation_schedule_id: ['', Validators.required],
//       inv_asignation_schedule_name: ['', Validators.required],

//     });

//   }

//   // convenience getter for easy access to form fields
//   get f() { return this.registerForm.controls; }


//   post_Records(query?) {
//     // this.selected = [];
//     console.log('QUERY TO INSERT', query);

//     this.invAsignationService.postSelectedRecords(query)
//     .subscribe( data => {
//       console.log('data', data);
//               this.editedRecord = data;
//           }
//         );

        
//   }


//   onRegister(register) {
//     console.log("registro", register)
//     this.post_Records(register)

//    this.router.navigate(['/configuration/asignation/list']);
//   }



//   onSubmit() {
//     this.submitted = true;
//   }

// }
