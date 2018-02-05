import { Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'camera-section',
    templateUrl: 'camera-section.component.html',
    styleUrls: ['camera-section.component.css']
})

export class CameraSectionComponent {
    @Output() cameraClick = new EventEmitter()

    onCameraClick(camera) {
        //console.log(camera);
        this.cameraClick.emit(camera)
    }

}