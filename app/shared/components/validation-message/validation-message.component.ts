import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'validation-message',
    templateUrl: 'validation-message.component.html',
    styleUrls: ['validation-message.component.css']
})

export class ValidationMessageComponent {
    @Input() message: any;
}
