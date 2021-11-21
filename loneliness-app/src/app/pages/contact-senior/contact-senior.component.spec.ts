import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSeniorComponent } from './contact-senior.component';

describe('ContactSeniorComponent', () => {
  let component: ContactSeniorComponent;
  let fixture: ComponentFixture<ContactSeniorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactSeniorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSeniorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
