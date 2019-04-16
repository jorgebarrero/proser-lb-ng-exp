import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondsTimePipe } from './seconds-time.pipe';
import { Sec2ttimePipe } from './sec2ttime.pipe';
import { WeekDayPipe } from './week-day.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [SecondsTimePipe, Sec2ttimePipe, WeekDayPipe],
    exports: [ SecondsTimePipe, Sec2ttimePipe, WeekDayPipe ]
})
export class SharedPipesModule { }
