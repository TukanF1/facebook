import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HighlightDirective} from './directives/highlight.directive';
import {PostDatePipe} from './pipes/post-date.pipe';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  declarations: [
    HighlightDirective,
    PostDatePipe,
    ErrorMessageComponent,
    LoadingComponent,
    PopupComponent
  ],
  exports: [
    HighlightDirective,
    PostDatePipe,
    ErrorMessageComponent,
    LoadingComponent,
    PopupComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
