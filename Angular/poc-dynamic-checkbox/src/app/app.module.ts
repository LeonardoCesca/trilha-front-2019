import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MultiCheckboxExampleComponentComponent } from './multi-checkbox-example-component/multi-checkbox-example-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiCheckboxExampleComponentComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
