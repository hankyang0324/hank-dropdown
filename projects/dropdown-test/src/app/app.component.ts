import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dropdown-test';
  nameOptions:string[] = ['yang han','han yang','hank yang','ding ning','ning ding','daisy ding','yang','han','hank','ding','daisy','ning'];
  groupOptions:string[] = ['01 0','02 3','03 5','04 8','05 00','06 33','07 11','08 22','09 44','10 55',];
  colorOptions:string[] = ['red','orange','yellow','green','blue','purple','black','white'];
  selected = {};
  dropDownForm: FormGroup = this.fb.group({
    name:[null],
    group:[null],
    color:[null],
    multi:[null]
  });

  constructor(private fb: FormBuilder){}

  showSelected(data:{id:string,value:string}){
    this.selected[data.id] = data.value;
  }

  onSubmit() {
    console.log(this.dropDownForm.value);
    this.dropDownForm.reset();
  }

}
