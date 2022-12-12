import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
import { ApiService } from 'src/app/shared/api/api.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { Comment } from 'src/app/shared/types/comment';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Story } from 'src/app/shared/types/story';

@Component({
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @ViewChild('tree') tree: any;

  treeControl = new NestedTreeControl<Comment>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Comment>();
  private loading = new BehaviorSubject(true);
  loading$ = this.loading.asObservable();
  storySubcription!: Subscription;

  story$: Observable<Story> = this.api
    .getStoryById(this.route.snapshot.params['id'])
    .pipe(
      tap(_ => this.loading.next(false))
    );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.storySubcription = this.story$.subscribe(story => {
      this.dataSource.data = story.children!;
      this.treeControl.dataNodes = story.children!;
      this.treeControl.expandAll();
    });
  }

  ngOnDestroy() {
    this.storySubcription.unsubscribe();
  }

  hasChild = (_: number, node: Comment) => !!node.children && node.children.length > 0;

  goBack() {
    this.router.navigateByUrl('/');
  }
}
