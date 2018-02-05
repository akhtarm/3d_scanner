import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'settings-section',
    templateUrl: 'settings-section.component.html',
    styleUrls: ['settings-section.component.css']

})

export class SettingsSectionComponent {
    @Input('cameraModel') cameraModel: any
    @Input('ledArray') ledArray: any

    ngOnInit() {
        this.cameraModel = {
                            "id" : 1,
                            "iso" : 80,
                            "exposure" : 88
        }
        this.ledArray = [
                            {
                                "id" : 1,
                                "frequency" : 86 
                            },
                            {
                                "id" : 2,
                                "frequency" : 86 
                            },
                            {
                                "id" : 3,
                                "frequency" : 86 
                            },
                            {
                                "id" : 4,
                                "frequency" : 86 
                            }
                        ]
    }

    onSubmit(f: NgForm) {
        console.log(f)
    }

}