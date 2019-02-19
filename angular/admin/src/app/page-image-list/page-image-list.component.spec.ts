import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageImageListComponent } from './page-image-list.component';

describe('PageImageListComponent', () => {
  let component: PageImageListComponent;
  let fixture: ComponentFixture<PageImageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageImageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageImageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
