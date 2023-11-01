import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvideoGameComponent } from './add-videoGame.component';

describe('AddVideoGameComponent', () => {
  let component: AddvideoGameComponent;
  let fixture: ComponentFixture<AddvideoGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddvideoGameComponent]
    });
    fixture = TestBed.createComponent(AddvideoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
