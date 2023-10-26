import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  imports: [CommonModule, MatProgressSpinnerModule],
  selector: 'app-spinner',
  standalone: true,
  styleUrls: ['./spinner.component.css'],
  templateUrl: './spinner.component.html',
})
export class SpinnerComponent {}
