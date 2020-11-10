import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDatamodalComponent } from './show-datamodal.component';

describe('ShowDatamodalComponent', () => {
  let component: ShowDatamodalComponent;
  let fixture: ComponentFixture<ShowDatamodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDatamodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDatamodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
