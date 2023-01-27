import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent implements OnInit {
  public authForm: FormGroup;

  public isRemember = true;

  constructor(private fb: FormBuilder, private cdR: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.authForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public onSubmit() {
    const userData = this.authForm.getRawValue();
    userData.isRemember = this.isRemember;

    console.log(userData);
  }
}
