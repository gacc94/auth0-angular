import { Component } from '@angular/core';
import {SpinnerService} from "../../service/spinner.service";

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

    isLoading$ = this.spinnerSvc.isLoading$;
    constructor(
        private readonly spinnerSvc: SpinnerService
    ) {
        console.log(this.isLoading$)
    }
}
