import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedElement]'
})
export class RedElementDirective {

  element!:ElementRef
  constructor(el : ElementRef) { 
    el.nativeElement.style.color = "red"
    // el.nativeElement.innerText = "this is element selector !"
    this.element = el;   
  }

ngOnInit(){
   this.element.nativeElement.innerText = "this is element selector !" 
}
}
