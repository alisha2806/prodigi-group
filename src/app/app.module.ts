import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './app.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from '../pipes/filter-pipe.pipe';
import { DirectiveSortDirective } from '../directive/directive-sort.directive';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DetailsComponent,
    FilterPipePipe,
    DirectiveSortDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
