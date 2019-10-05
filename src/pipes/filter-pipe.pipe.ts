import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(item: Array<any>, searchPattern: string): any {
    let result = "";
    if (searchPattern) {
      return item.filter(items => {
        const title = items.title.toLowerCase().includes(searchPattern.toLowerCase());
        return (title);
      })
    }
    return item;
  }
}
