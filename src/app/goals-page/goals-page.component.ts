import { Component } from '@angular/core';

@Component({
  selector: 'app-goals-page',
  templateUrl: './goals-page.component.html',
  styleUrls: ['./goals-page.component.scss']
})
export class GoalsPageComponent {
  model = {
    name: '',
    email: ''
  };

  onSubmit() {
    console.log(this.model);
  }
}
