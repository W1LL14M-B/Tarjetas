import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-tarjeta',
  templateUrl: './form-tarjeta.component.html',
  styleUrls: ['./form-tarjeta.component.css']
})


export class FormTarjetaComponent implements OnInit {

  cardForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.cardForm = this.fb.group({
      cardNumber: [
        '',
        [Validators.required, Validators.pattern(/^\d{16}$/)]
      ],
      holderName: [
        '',
        [Validators.required, Validators.pattern(/^[A-Za-z]+\s[A-Za-z]+$/)]
      ],
      expiryDate: [
        '',
        [Validators.required, this.expiryDateValidator]
      ],
      currency: ['USD', Validators.required],
      cardType: ['CREDIT', Validators.required]
    });
  }

  expiryDateValidator(control: any): { [key: string]: boolean } | null {
    const value = control.value;
    if (!value) return null;

    const [month, year] = value.split('/').map((v: string) => parseInt(v, 10));
    const today = new Date();
    const expiryDate = new Date(today.getFullYear() + 3, today.getMonth(), 1);

    const inputDate = new Date(year, month - 1, 1);

    return inputDate >= expiryDate ? null : { invalidExpiryDate: true };
  }

  onSubmit(): void {
    if (this.cardForm.valid) {
      console.log('Tarjeta creada:', this.cardForm.value);
      // Lógica para enviar datos al backend
    }
  }
}