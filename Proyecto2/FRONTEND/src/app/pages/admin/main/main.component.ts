import { Component } from '@angular/core';

import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html',
})
export class MainComponent {
  
  libraries:any;
  constructor(private adminServices:AdminService) {
    this.libraries=[
      {
        code: "ABCDEF",
        name: "Pancho Library",
        country : "Costa Rica",
        location: "Cartago",
        number: 3331324354,
        schedule: "L-V"

      },
    ]
  }

  editLibrary(code){

  }
  deleteLibrary(code){

  }
}
