import { CameraService } from './camera.service';

import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'camera',
    templateUrl: 'camera.component.html',
    styleUrls: ['camera.component.css']
})

export class CameraComponent implements OnInit{
    cameras: any;
    camera: any;
    @Output() change = new EventEmitter()

    constructor(private cameraService: CameraService){
        
    }
    ngOnInit() {
        this.loadCameraItems()
    }

    loadCameraItems() {
        this.cameraService.getCameras().subscribe(data => {
        this.cameras = data;
        //console.log(data)
        })

    }

    onClick(camera){
        //console.log(camera)
        this.change.emit(camera)
    }

}