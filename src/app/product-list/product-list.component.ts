
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  selectedProduct: any = null;
  showModal: boolean = false;
  showDeleteConfirmation: boolean = true;
  productToDelete: any = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe(
      (data: any[]) => {
        this.products = data;
      },
      (error: any) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  editProduct(product: any) {
    this.selectedProduct = product;
    this.showModal = true;
  }

  deleteProduct(product: any) {
    this.productToDelete = product;
    this.showDeleteConfirmation = true;
  }

  confirmDelete() {
    if (!this.productToDelete) {
      console.error('No product to delete.');
      return;
    }

    this.productService.deleteProduct(this.productToDelete.id).subscribe(
      (response) => {
        console.log('Product deleted successfully:', response);
        this.showDeleteConfirmation = false;
        this.loadProducts(); // Reload products after deletion
      },
      (error) => {
        console.error('Error deleting product:', error);
        this.showDeleteConfirmation = false;
      }
    );
  }

  closeDeleteConfirmation() {
    this.showDeleteConfirmation = false;
  }

  closeModal(event: any) {
    this.showModal = false;
    if (event) {
      this.loadProducts(); // Reload products after modal action
    }
  }
}
