import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchTerm) {
      return items;
    }

    let searchInput = searchTerm.toLowerCase();

    return items.filter(item => {
      return item.title.toLowerCase().includes(searchInput);
    });
  }
}
