import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-authorprofile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './authorprofile.component.html',
  styleUrl: './authorprofile.component.scss'
})
export class AuthorprofileComponent {
  public author : any[] = [
    { "Firstname": "Anushree", "Lastname": "Das","Place": "Malappuram","Hobby": "Drawing", }, 
    ];
}
