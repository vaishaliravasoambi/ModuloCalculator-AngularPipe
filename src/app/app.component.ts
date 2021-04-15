import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `
  <div class="hole">
      <h1>Modulo Calculator</h1>
      <input [(ngModel)]="firstNum" /> <br/><br/>
      <input [(ngModel)]="secondNum" /><br/><br/>
     
      <h3>Result</h3>
      <h2>{{firstNum}} mod {{secondNum}}  =  {{firstNum | custom: secondNum}}</h2>
      
  </div> `
   
  
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstApp';
  firstNum=1;
  secondNum=1;
}
