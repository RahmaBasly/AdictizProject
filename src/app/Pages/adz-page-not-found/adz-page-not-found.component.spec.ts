import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdzPageNotFoundComponent } from './adz-page-not-found.component';

describe('AdzPageNotFoundComponent', () => {
  let component: AdzPageNotFoundComponent;
  let fixture: ComponentFixture<AdzPageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdzPageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdzPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
