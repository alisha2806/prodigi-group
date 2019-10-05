import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public listitem;
  public iditem;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }
  public getProducts() {
    this.apiService.getProducts().subscribe(res => {
      this.listitem = res;
      console.log('res', this.listitem);
    });
  }

  public openData(id: string) {
    this.iditem = id;
    console.log("iditem", this.iditem);
    this.router.navigate(['details', { id: this.iditem}]);
  }
}
