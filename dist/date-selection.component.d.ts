import { AfterViewInit, EventEmitter } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { TimeUtilsService } from 'map-wald';
import * as i0 from "@angular/core";
export declare class DateSelectionComponent implements AfterViewInit {
    private timeUtils;
    date: Date;
    dateChange: EventEmitter<any>;
    timestep: string;
    minDate: Date | string;
    maxDate: Date | string;
    style: ('popup' | 'arrows');
    stepDays: number;
    referenceDate: string;
    disabled: boolean;
    step: boolean;
    need: {
        day: boolean;
        month: boolean;
        year: boolean;
    };
    minDateStruct: NgbDateStruct;
    maxDateStruct: NgbDateStruct;
    dateStruct: NgbDateStruct;
    atMax: boolean;
    atMin: boolean;
    constructor(timeUtils: TimeUtilsService);
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    dateStructChanged(): void;
    assessDateComponents(): void;
    move(n: number): void;
    onDateChanged(): void;
    checkLimits(): void;
    checkReference(): any;
    static ɵfac: i0.ɵɵFactoryDef<DateSelectionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DateSelectionComponent, "date-selection", never, { "date": "date"; "timestep": "timestep"; "minDate": "minDate"; "maxDate": "maxDate"; "style": "style"; "stepDays": "stepDays"; "referenceDate": "referenceDate"; "disabled": "disabled"; "step": "step"; }, { "dateChange": "dateChange"; }, never, never>;
}
