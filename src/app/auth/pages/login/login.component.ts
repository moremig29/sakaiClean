import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { LayoutService } from '../../../layout/services/layout.service';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    ReactiveFormsModule,
    PasswordModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

  valCheck: string[] = ['remember'];

  authForm: FormGroup = this.fb.group({
    email: ['', [Validators.required ] ],
    password: ['', [Validators.required ] ]
  })

  constructor(
    private fb: FormBuilder ,
    public layoutService: LayoutService,
    private authService: AuthService
    ) { }

  login() {
    this.authService.login( this.authForm.value );
  }
}
