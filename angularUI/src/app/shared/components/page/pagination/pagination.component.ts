import { Component, EventEmitter, Output } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgxPaginationModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  onPageChange(currentPage: number): void {
    this.pageChange.emit(currentPage);
  }
}
