import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  constructor(){
    console.log(environment.production)
  }

  title = 'my-project';
}


