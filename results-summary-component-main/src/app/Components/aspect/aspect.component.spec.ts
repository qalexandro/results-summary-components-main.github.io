import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectComponent } from './aspect.component';

describe('AspectComponent', () => {
  let component: AspectComponent;
  let fixture: ComponentFixture<AspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AspectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
