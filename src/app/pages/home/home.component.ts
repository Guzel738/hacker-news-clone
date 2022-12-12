import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ApiService } from 'src/app/shared/api/api.service';
import { Story } from 'src/app/shared/types/story';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  private loading = new BehaviorSubject(true);
  loading$ = this.loading.asObservable();

  stories$: Observable<Story[]> = this.api.getStories().pipe(tap(_ => this.loading.next(false)));

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }
}
