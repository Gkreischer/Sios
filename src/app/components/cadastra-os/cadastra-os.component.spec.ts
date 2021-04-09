import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraOsComponent } from './cadastra-os.component';

describe('CadastraOsComponent', () => {
  let component: CadastraOsComponent;
  let fixture: ComponentFixture<CadastraOsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraOsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
