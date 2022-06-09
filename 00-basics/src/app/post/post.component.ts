import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('img') postImage = '';
  @Output() imgSelected = new EventEmitter<string>();

  constructor() {
    console.log('Constructor called', this.postImage);
  }

  ngOnInit() {
    console.log('Initializing : ngonInit called', this.postImage);
  }

  ngOnChanges() {
    console.log('ngOnChanges : Changes');
  }

  ngDoCheck() {
    console.log('ngDoCheck : Change Detection Checked');
  }

  // . Projected Content :
  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  // . components template , runs every time ngDoCheck runs:

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('noOnDestroy called');
  }
}
