import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title = 'test title'
  
  constructor() { }

  ngOnInit(): void {
    console.log('test')
  }

  getInfo() {
    return 'Test Info'
  }

}
