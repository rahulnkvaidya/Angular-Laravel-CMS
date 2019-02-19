import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageImageEditComponent } from './page-image-edit.component';

describe('PageImageEditComponent', () => {
  let component: PageImageEditComponent;
  let fixture: ComponentFixture<PageImageEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageImageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageImageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
