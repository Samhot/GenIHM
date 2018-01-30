import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenimhComponent } from './genimh.component';

describe('GenimhComponent', () => {
  let component: GenimhComponent;
  let fixture: ComponentFixture<GenimhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenimhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenimhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
