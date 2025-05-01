import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeSectionComponent } from '../home-section/home-section.component';
import { BookSectionComponent } from '../book-section/book-section.component';


@Component({
  selector: 'app-home',
  imports: [NavBarComponent, FooterComponent, HomeSectionComponent, BookSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
