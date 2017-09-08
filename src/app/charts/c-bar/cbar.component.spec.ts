import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBarComponent } from './cbar.component';

describe('CBarComponent', () => {
  let component: CBarComponent;
  let fixture: ComponentFixture<CBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
