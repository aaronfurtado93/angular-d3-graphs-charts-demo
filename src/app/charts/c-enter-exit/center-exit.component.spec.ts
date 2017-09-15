import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CEnterExitComponent } from './center-exit.component';

describe('CEnterExitComponent', () => {
  let component: CEnterExitComponent;
  let fixture: ComponentFixture<CEnterExitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CEnterExitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CEnterExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
