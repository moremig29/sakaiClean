import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent { }
