import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripListingComponent } from './trip-listing/trip-listing';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, TripListingComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class AppComponent {
  title = 'Travlr Getaways Admin!'
}
