
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {
  @Input() product: any;
  @Output() close = new EventEmitter<boolean>();
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      price: [0, Validators.required],
      categories: [[]],
      attributes: this.fb.array([]),
      availability: this.fb.group({
        inStock: [true],
        quantity: [0, Validators.required]
      })
    });
  }

  ngOnInit() {
    if (this.product) {
      this.productForm.patchValue(this.product);
      if (this.product.attributes) {
        this.product.attributes.forEach((attribute: any) => {
          this.attributes.push(this.fb.group({
            key: [attribute.key],
            value: [attribute.value]
          }));
        });
      }
    }
  }

  get attributes() {
    return this.productForm.get('attributes') as FormArray;
  }

  addAttribute() {
    this.attributes.push(this.fb.group({ key: '', value: '' }));
  }

  removeAttribute(index: number) {
    this.attributes.removeAt(index);
  }

  onSubmit() {
    const productData = this.productForm.value;
    // console.log('Product Data:', productData);
    if (this.product && this.product.id) {
      this.productService.updateProduct(this.product.id, productData).subscribe(
        response => {
          console.log('Product updated successfully:', response);
          this.close.emit(true);
        },
        error => {
          console.error('Error updating product:', error);
          this.close.emit(false);
        }
      );
    } else {
      this.productService.createProduct(productData).subscribe(
        (        response: any)=> {
          console.log('Product created successfully:', response);
          this.close.emit(true);
        },
        (        error: any) => {
          console.error('Error creating product:', error);
          this.close.emit(false);//helobaby
        }
      );
    }
  }
}

