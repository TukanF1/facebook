import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomePageComponent} from './home-page.component';
import {PostListComponent} from '../../../posts/components/post-list/post-list.component';
import {RouterTestingModule} from '@angular/router/testing';
import {SharedModule} from '../../../shared/shared.module';
import {PostListItemComponent} from '../../../posts/components/post-list-item/post-list-item.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let $component = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageComponent, PostListComponent, PostListItemComponent],
      imports: [RouterTestingModule, SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    $component = fixture.nativeElement;
    fixture.detectChanges();
  });
  afterEach(() => {
    $component.remove();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
