import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {

  constructor() { }
  cameraModel: any
  ledArray: any

    onCameraChange(camera) {
      console.log(camera)
      this.cameraModel = camera
      this.ledArray = this.cameraModel.led
    }

}
