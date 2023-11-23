import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImageHover]',
  standalone: true
})
export class ImageHoverDirective {

  constructor(private el:ElementRef) {
    console.log(this.el);
    
   }

  //  @HostListener('mouseenter') onMouseEnter(){
  //   this.highlight('blue');
    
  //  }
  //  @HostListener('mouseleave') onMouseLeave(){
  //   this.highlight('');
    
  //  }
  //  private highlight(color : string){
  //   this.el.nativeElement.style.backgroundColor = color
    
  //  }
  @HostListener('mouseenter') onMouseEnter(){
    this.opacity(0.5,'gray');
    
   }
   @HostListener('mouseleave') onMouseLeave(){
    this.opacity(1,'');
    
   }
   private opacity(op : any,col: any){
    this.el.nativeElement.style.opacity = op
    this.el.nativeElement.style.backgroundColor = col
    
   }

}
