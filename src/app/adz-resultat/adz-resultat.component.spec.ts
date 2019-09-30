import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdzResultatComponent } from './adz-resultat.component';

describe('AdzResultatComponent', () => {
  let component: AdzResultatComponent;
  let fixture: ComponentFixture<AdzResultatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdzResultatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdzResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
