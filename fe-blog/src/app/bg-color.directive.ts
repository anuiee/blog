import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBgColor]',
  standalone: true
})
export class BgColorDirective {

  constructor(private el: ElementRef) {
    console.log(this.el);
    
   
    
}
@HostListener('mouseenter') onMouseEnter(){
  this.bgcol('#C6CCCC');
  
 }
 @HostListener('mouseleave') onMouseLeave(){
  this.bgcol('');
  
 }
 private bgcol(col: any){
  this.el.nativeElement.style.backgroundColor = col
  
 }
}
