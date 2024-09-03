import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ETAT, Task } from '../model/task';

@Directive({
  selector: '[appTaskColor]'
})
export class TaskColorDirective implements OnInit{
  @Input() appTaskColor!:Task;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { 
  }
  ngOnInit(): void {
    switch (this.appTaskColor.etat) {
      case ETAT.EN_COURS:
        this.renderer.setStyle(this.elRef.nativeElement, "color", "blue");
        break;
      case ETAT.A_FAIRE:
        this.renderer.setStyle(this.elRef.nativeElement, "color", "red");
        break;
      case ETAT.TERMINEE:
        this.renderer.setStyle(this.elRef.nativeElement, "color", "green");
        break;
      default:
    }
  }

}
