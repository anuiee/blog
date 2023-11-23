import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { HeadingColorDirective } from '../heading-color.directive';
import { ImageHoverDirective } from '../image-hover.directive';
import { BgColorDirective } from '../bg-color.directive';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage,HeadingColorDirective,ImageHoverDirective,BgColorDirective],
 templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  public dataValue = false;
  constructor(private el:ElementRef)
  {}
  ngOnInit(): void {
    console.log(this.el.nativeElement.style);
  }
  public author : any[] = [
    { "Firstname": "Anushree", "Lastname": "Das","Place": "Malappuram","Hobby": "Drawing", }, 
    ];
    change():void{
      this.dataValue =!this.dataValue;
      console.log(this.dataValue);
      
    }
}
