import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElderServicesComponent } from './elder-services.component';

describe('ElderServicesComponent', () => {
  let component: ElderServicesComponent;
  let fixture: ComponentFixture<ElderServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElderServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElderServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
