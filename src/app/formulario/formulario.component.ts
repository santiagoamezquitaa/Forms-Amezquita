import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public formularioPrincipal: FormGroup;
  public formStudents: FormGroup;

  private ONLY_APAHABETS_NO_SPECIAL_CHARACTERS = /^[a-zA-Z\u00F1\u00D1\s]+(\s[a-zA-Z\u00F1\u00D1]+)*$/;
  private ONLY_NUMBERS = /^([0-9]\d*)?$/;

  data: any;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formStudents = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(this.ONLY_APAHABETS_NO_SPECIAL_CHARACTERS)]],
      lastName: ['', [Validators.required, Validators.pattern(this.ONLY_APAHABETS_NO_SPECIAL_CHARACTERS)]],
      birthday: ['', [Validators.required]],
      address: ['', [Validators.required]],
      educationLevel: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.email]],
      phoneNumber: ['', [Validators.maxLength(10) ,Validators.pattern(this.ONLY_NUMBERS)]], 
      termConditions: [false, [Validators.requiredTrue]],
    });
  }

  submitData(): void {
    this.submitted = true;
    if (this.formStudents.valid) {
      this.data = this.formStudents.value;     
    }
  }
}
