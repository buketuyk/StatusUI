import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusAddComponent } from './status-add.component';

describe('StatusAddComponent', () => {
  let component: StatusAddComponent;
  let fixture: ComponentFixture<StatusAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatusAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatusAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
