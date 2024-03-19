import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponenteComponent } from './footer-componente.component';

describe('FooterComponenteComponent', () => {
  let component: FooterComponenteComponent;
  let fixture: ComponentFixture<FooterComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponenteComponent]
    });
    fixture = TestBed.createComponent(FooterComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
