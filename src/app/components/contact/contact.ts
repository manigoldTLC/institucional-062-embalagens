import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { config } from '../../../configs/config';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  contactForm: FormGroup;
  formspreeEndpoint = config.formspreeEndpoint;

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      contactInfo: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.http.post(this.formspreeEndpoint, this.contactForm.value, { headers: { 'Accept': 'application/json' } })
        .subscribe({
          next: (response) => {
            alert('Mensagem enviada com sucesso! Agradecemos o contato.');
            this.contactForm.reset();
          },
          error: (error) => {
            alert('Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.');
          }
        });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}