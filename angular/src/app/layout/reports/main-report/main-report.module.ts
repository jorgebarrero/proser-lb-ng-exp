import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainReportComponent } from './main-report.component';
import { HeaderReportComponent } from './header-report/header-report.component';

import { NowModule } from 'src/app/shared/modules/now/now.module';


@NgModule({
  declarations: [MainReportComponent, HeaderReportComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderReportComponent
  ]
})
export class MainReportModule { }
