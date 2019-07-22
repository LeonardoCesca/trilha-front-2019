import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCheckboxExampleComponentComponent } from './multi-checkbox-example-component.component';

describe('MultiCheckboxExampleComponentComponent', () => {
  let component: MultiCheckboxExampleComponentComponent;
  let fixture: ComponentFixture<MultiCheckboxExampleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiCheckboxExampleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiCheckboxExampleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
