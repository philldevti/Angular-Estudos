import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../../../model/usuario';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  public form = new Usuario(1, 'Agenor Pereira', 75, 'agenor@gmail.com');
  public userForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      'nome': new FormControl(this.form.nome, [Validators.required]),
      'idade': new FormControl(this.form.idade, [Validators.required, Validators.minLength(2)]),
      'email': new FormControl(this.form.email, [Validators.required, Validators.email])
    });
  }

}
