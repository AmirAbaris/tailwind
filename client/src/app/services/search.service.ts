import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchTermSubject = new BehaviorSubject<string | null>(null);

  setSearchTerm(term: string | null): void {
    if (term !== null) {
      this.searchTermSubject.next(term);
    }
  }

  getSearchTerm(): BehaviorSubject<string | null> {
    return this.searchTermSubject;
  }
}
