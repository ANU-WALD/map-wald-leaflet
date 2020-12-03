import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class LegendComponent implements OnInit {
    colours: Array<string>;
    labels: Array<string>;
    imageURL: string;
    title: string;
    mapUnits: string;
    helpText: string;
    tooltipPlacement: string;
    attribution: string;
    attributionLink: string;
    generatedLabels: string[];
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<LegendComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<LegendComponent, "legend", never, { "colours": "colours"; "labels": "labels"; "imageURL": "imageURL"; "title": "title"; "mapUnits": "mapUnits"; "helpText": "helpText"; "tooltipPlacement": "tooltipPlacement"; "attribution": "attribution"; "attributionLink": "attributionLink"; }, {}, never, never>;
}
export declare function makeColour(r: number, g: number, b: number, a?: number): string;
