import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  musicForm: FormGroup;
  musicPreferences = [
    { id: 1, genre: 'Pop' },
    { id: 2, genre: 'Rock' },
    { id: 3, genre: 'Techno' },
    { id: 4, genre: 'Hiphop' }
  ];

  constructor(private fb: FormBuilder) {
    const formControls = this.musicPreferences.map(control => new FormControl(false));

    this.musicForm = this.fb.group({
      musicPreferences: new FormArray(formControls)
    });
  }

  submit() {

  }
}
