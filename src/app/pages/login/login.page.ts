import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder, private NavControl: NavController) {
    this.createForm()
  }

  ngOnInit() {
    console.log();
  }


  createForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators['required']],
      password: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }
  submit() {
    console.log(this.form.value);
    console.log('Logging in ..... ');
    setTimeout(() => {
      this.NavControl.navigateForward('')
    }, 2000)
  }
}
