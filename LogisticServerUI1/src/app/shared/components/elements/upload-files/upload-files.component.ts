import { CommonModule } from '@angular/common';
import { HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-files',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-files.component.html',
  styleUrl: './upload-files.component.scss'
})
export class UploadFilesComponent{

  // selectedFiles?: FileList;
  // message: string[] = [];
  @Input() label = '';
  @Input() value: any[] = [];
  @Input() required = false;
  @Input() disabled = false;
  @Output() selectedFiles: EventEmitter<any[]> = new EventEmitter<any[]>(); 
  selectedFilesList: File[] = [];

  // selectedFiles: File[] = [];

  handleFileInput(event: any): void {
    const files: FileList = event.target.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        this.selectedFilesList.push(file); // Store selected File objects
      }
      this.emitSelectedFiles(); // Emit selected files after adding
    }
  }

  removeFile(index: number): void {
    if (index >= 0 && index < this.selectedFilesList.length) {
      this.selectedFilesList.splice(index, 1); // Remove file from selectedFilesList array
      this.emitSelectedFiles(); // Emit selected files after removal
    }
  }

  private emitSelectedFiles(): void {
    // Emit the list of selected files to the parent component
    this.selectedFiles.emit(this.selectedFilesList);
  }
}
