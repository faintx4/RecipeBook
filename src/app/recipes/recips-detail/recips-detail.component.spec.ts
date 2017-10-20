import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipsDetailComponent } from './recips-detail.component';

describe('RecipsDetailComponent', () => {
  let component: RecipsDetailComponent;
  let fixture: ComponentFixture<RecipsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
