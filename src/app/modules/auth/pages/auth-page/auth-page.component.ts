import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from 'src/app/ngrx/actions/auth.actions';
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

  constructor(private fb: FormBuilder, private authApiService: AuthApiService, private store: Store) {}

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

      this.store.dispatch(login({ credentials: authFormValue }));
      // this.authApiService.login(authFormValue).subscribe();
    }
  }
}
