import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShoesComponent } from './update-shoes.component';

describe('UpdateShoesComponent', () => {
  let component: UpdateShoesComponent;
  let fixture: ComponentFixture<UpdateShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateShoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
