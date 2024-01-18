import { Component, inject } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  readonly #searchService = inject(SearchService);

  searchTerm: string | null = '';

  search(): void {
    this.#searchService.setSearchTerm(this.searchTerm);
  }
}
