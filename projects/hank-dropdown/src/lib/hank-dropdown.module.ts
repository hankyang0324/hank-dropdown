import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HankDropdownComponent } from './hank-dropdown.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [HankDropdownComponent, FilterPipe],
  imports: [CommonModule,BrowserAnimationsModule,ReactiveFormsModule ],
  exports: [HankDropdownComponent]
})
export class HankDropdownModule { }
