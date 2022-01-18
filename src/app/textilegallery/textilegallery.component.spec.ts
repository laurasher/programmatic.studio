import { ComponentFixture, TestBed } from '@angular/core/testing';

import { textilegalleryComponent } from './textilegallery.component';

describe('textilegalleryComponent', () => {
  let component: textilegalleryComponent;
  let fixture: ComponentFixture<textilegalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ textilegalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(textilegalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
