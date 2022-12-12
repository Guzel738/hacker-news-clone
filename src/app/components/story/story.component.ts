import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Story } from 'src/app/shared/types/story';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoryComponent implements OnInit {
  @Input() story!: Story;
  @Input() id!: number;

  constructor() { }

  ngOnInit(): void {
  }
}
