import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductModalComponent,
    ProductListComponent,
    DeleteConfirmationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})


export class AppModule { }
