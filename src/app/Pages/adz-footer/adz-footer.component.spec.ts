import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdzFooterComponent } from './adz-footer.component';

describe('AdzFooterComponent', () => {
  let component: AdzFooterComponent;
  let fixture: ComponentFixture<AdzFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdzFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdzFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
