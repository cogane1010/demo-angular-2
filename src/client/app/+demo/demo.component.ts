import { Component,OnInit } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  moduleId: module.id,
  selector: 'sd-demo',
  template: `
  <h4> demo component </h4>
  <ul>
    <li *ngFor="let name of names">{{name}}</li>
  </ul>
  `,
  
})
 

export class DemoComponent implements OnInit { 
  newName: string = '';
  errorMessage: string;
  names: any[] = [];

constructor( public demoService: DemoService) {}

  ngOnInit() {
   this.getNames();  
   
  }

getNames() {
     this.demoService.get()
                     .subscribe(
                       names => this.names = names,
                       error =>  this.errorMessage = <any>error
                       );
  }
}

