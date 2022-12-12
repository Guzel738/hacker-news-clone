import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryComponent } from './story.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StoryComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [StoryComponent]
})
export class StoryModule { }
