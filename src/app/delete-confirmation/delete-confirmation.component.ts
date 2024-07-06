import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  template: `
    <div>
      <p>Are you sure you want to delete this product?</p>
      <button (click)="confirm()">Yes</button>
      <button (click)="cancel()">No</button>
    </div>
  `,
  styles: [`
    div {
      background: white;
      border: 1px solid #ccc;
      padding: 20px;
      text-align: center;
    }
    button {
      margin: 5px;
    }
  `]
})
export class DeleteConfirmationComponent {
  @Output() confirmDelete = new EventEmitter<void>();
  @Output() cancelDelete = new EventEmitter<void>();

  confirm() {
    this.confirmDelete.emit();
  }

  cancel() {
    this.cancelDelete.emit();
  }
}
