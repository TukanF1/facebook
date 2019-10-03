import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HighlightDirective} from './directives/highlight.directive';
import {PostDatePipe} from './pipes/post-date.pipe';

@NgModule({
  declarations: [
    HighlightDirective,
    PostDatePipe
  ],
  exports: [
    HighlightDirective,
    PostDatePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
