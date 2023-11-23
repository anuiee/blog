import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorprofileComponent } from './authorprofile.component';

describe('AuthorprofileComponent', () => {
  let component: AuthorprofileComponent;
  let fixture: ComponentFixture<AuthorprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthorprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
