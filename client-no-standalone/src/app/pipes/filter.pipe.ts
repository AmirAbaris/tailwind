import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../components/task-management/models/task.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Task[], searchTerm: string): Task[] {
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
