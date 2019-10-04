import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HighlightDirective} from './directives/highlight.directive';
import {PostDatePipe} from './pipes/post-date.pipe';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

@NgModule({
  declarations: [
    HighlightDirective,
    PostDatePipe,
    ErrorMessageComponent
  ],
  exports: [
    HighlightDirective,
    PostDatePipe,
    ErrorMessageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
