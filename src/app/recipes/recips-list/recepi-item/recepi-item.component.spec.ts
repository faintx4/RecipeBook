import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepiItemComponent } from './recepi-item.component';

describe('RecepiItemComponent', () => {
  let component: RecepiItemComponent;
  let fixture: ComponentFixture<RecepiItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepiItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
