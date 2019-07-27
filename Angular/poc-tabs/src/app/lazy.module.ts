import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyParentComponent } from './lazy-parent/lazy-parent.component';
import { LazyChildComponent } from './lazy-child/lazy-child.component';



@NgModule({
  declarations: [LazyParentComponent, LazyChildComponent],
  imports: [
    CommonModule
  ]
})
export class LazyModule { }
