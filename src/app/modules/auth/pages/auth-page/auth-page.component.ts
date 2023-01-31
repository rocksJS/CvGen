import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthApiService } from 'src/app/shared/services/api/auth.api.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent implements OnInit {
  public authForm: FormGroup;

  public isRemember = true;

  constructor(private fb: FormBuilder, private cdR: ChangeDetectorRef, private authApiService: AuthApiService) {}

  ngOnInit(): void {
    this.authForm = this.fb.group({
      identifier: new FormControl('', [Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public onSubmit() {
    if (this.authForm.valid) {
      localStorage.clear();

      const authFormValue = this.authForm.getRawValue();

      this.authApiService.login(authFormValue).subscribe();
    }
  }
}
