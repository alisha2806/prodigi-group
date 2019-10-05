import { Directive, Input, ElementRef, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[appDirectiveSort]'
})
export class DirectiveSortDirective implements OnInit {

  @Input() item: any[];
  @Input('sortKey') key: any;
  private toggleSort: boolean = false;
  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    this.renderer.listen(this.el.nativeElement, 'click', (event) => {
      let parentNode = this.el.nativeElement.parentNode;
      let children = parentNode.children;

      if (this.item && this.key) {
        let sortedData: any = this.sortData();
      }
      this.toggleSort = !this.toggleSort;
    })
  }

  sortData() {
    let unsortedData: Array<any> = this.item;
    unsortedData.sort((a, b) => {
      let str1: string = a[this.key].toLowerCase();
      let str2: string = b[this.key].toLowerCase();
      if (this.toggleSort) {
        return (str1 < str2 ? -1 : 1);
      }
      else {
        return (str1 > str2 ? -1 : 1);
      }
      return 0;
    });
    return unsortedData;

  }
}
