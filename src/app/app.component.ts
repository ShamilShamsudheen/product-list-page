import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NumberOnlyDirective } from './number-only.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductListComponent,NumberOnlyDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'product-list-page';
}
