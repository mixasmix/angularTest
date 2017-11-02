import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacketBlockComponent } from './backet-block.component';

describe('BacketBlockComponent', () => {
  let component: BacketBlockComponent;
  let fixture: ComponentFixture<BacketBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacketBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacketBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
