import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostIndexPage } from './post-index.page';

describe('PostIndexPage', () => {
  let component: PostIndexPage;
  let fixture: ComponentFixture<PostIndexPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
