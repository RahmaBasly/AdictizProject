import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdzAccueilComponent } from './adz-accueil.component';

describe('AdzAccueilComponent', () => {
  let component: AdzAccueilComponent;
  let fixture: ComponentFixture<AdzAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdzAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdzAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
