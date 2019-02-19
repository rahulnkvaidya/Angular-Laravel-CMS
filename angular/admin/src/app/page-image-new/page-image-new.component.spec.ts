import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageImageNewComponent } from './page-image-new.component';

describe('PageImageNewComponent', () => {
  let component: PageImageNewComponent;
  let fixture: ComponentFixture<PageImageNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageImageNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageImageNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
