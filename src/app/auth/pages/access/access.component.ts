import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-access',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './access.component.html',
  styleUrl: './access.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessComponent { }
