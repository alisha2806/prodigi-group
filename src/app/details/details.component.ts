import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app.service';
import { ProductsComponent } from '../products/products.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public listdata;
  public id;
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];  
    });
    this.getMoreProducts();
  }
  public getMoreProducts() {
    this.apiService.getMoreProducts(this.id).subscribe(res => {
      this.listdata = res;
      console.log(this.listdata);
    });
  }
}
