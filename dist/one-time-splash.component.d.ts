import { AfterViewInit, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
export declare enum SplashCloseMode {
    NotOpened = 0,
    Accepted = 1,
    Cancelled = 2
}
export declare class OneTimeSplashComponent implements AfterViewInit {
    private modalService;
    splashTemplate: any;
    application: string;
    label: string;
    hideMessage: string;
    klass: string;
    showOnLaunch: boolean;
    closed: EventEmitter<SplashCloseMode>;
    doNotShow: boolean;
    current: NgbModalRef;
    constructor(modalService: NgbModal);
    storageKey(): string;
    ngAfterViewInit(): void;
    defaultShow(): void;
    show(): void;
    close(): void;
    doNotShowClicked(): void;
    static ɵfac: i0.ɵɵFactoryDef<OneTimeSplashComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<OneTimeSplashComponent, "one-time-splash", never, { "application": "application"; "label": "label"; "hideMessage": "hideMessage"; "klass": "klass"; "showOnLaunch": "showOnLaunch"; }, { "closed": "closed"; }, never, ["*"]>;
}
