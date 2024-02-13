import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  constructor(private testService:TestService){}
  test(){
   this.testService.getTest().subscribe(
    (response) => {
      console.log(response)
     },
     (error) => {
       console.log(error)
   })
  }
}
