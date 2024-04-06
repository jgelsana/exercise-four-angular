import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrl: './command-bar.component.scss'
})
export class CommandBarComponent {

  dynamicLink: string = '';

  @Output() actionEmitter = new EventEmitter<Object>();

  constructor(private route: ActivatedRoute, private router: Router) { }

getFormRoute(): string {
  const currentRoute = this.router.url;
  if(currentRoute.includes('blog')) {
    return '/blog/form';
  } else if(currentRoute.includes('book')) {
    return '/book/form'
  }
  return '/blog'
}

  emitAction(action: string): void {
    this.actionEmitter.emit(action);
  }
}
