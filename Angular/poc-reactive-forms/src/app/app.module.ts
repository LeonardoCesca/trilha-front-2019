import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
