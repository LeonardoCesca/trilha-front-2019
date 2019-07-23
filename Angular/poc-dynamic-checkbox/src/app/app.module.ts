import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MultiCheckboxExampleComponent } from './multi-checkbox-example/multi-checkbox-example.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiCheckboxExampleComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
