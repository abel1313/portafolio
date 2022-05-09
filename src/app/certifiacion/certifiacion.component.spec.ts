import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifiacionComponent } from './certifiacion.component';

describe('CertifiacionComponent', () => {
  let component: CertifiacionComponent;
  let fixture: ComponentFixture<CertifiacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertifiacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifiacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
