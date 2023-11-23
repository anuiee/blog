import { Directive, ElementRef, OnInit } from '@angular/core';


@Directive({
  selector: '[appHeadingColor]',
  standalone: true
})
export class HeadingColorDirective   {

  constructor(private el1: ElementRef) {
         console.log(this.el1);
         this.el1.nativeElement.style.color ="#5EC4FF";
        
         
   }
 
  

}
