import { Directive, Input, TemplateRef, ViewContainerRef, OnDestroy } from '@angular/core';
import { ScreenService } from '../services/screen.service';
import { Subscription } from "rxjs/Subscription";

@Directive({selector: '[screenSmall]'})
export class ScreenSmall implements OnDestroy {
  private hasView = false;
  private screenSubscription: Subscription;

  constructor( private viewContainer: ViewContainerRef, private template: TemplateRef<Object>,  private screenService: ScreenService) {
     this.screenSubscription = screenService.resize$.subscribe(() => this.onResize());
  }     

  @Input()
  set screenSmall(condition) {
 
     condition = this.screenService.screenWidth < this.screenService.largeBreakpoint;

     if (condition && !this.hasView) {
        this.hasView = true;
        this.viewContainer.createEmbeddedView(this.template);
     } else if (!condition && this.hasView) {
        this.hasView = false;
        this.viewContainer.clear();
     }
  }

  ngOnDestroy() {
    this.screenSubscription.unsubscribe();
  }

  onResize() {
    this.screenSmall = false;
  }

}