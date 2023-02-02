import { FormControl, FormGroup } from '@angular/forms';

export function markAllAsDirty(input: FormControl | FormGroup) {
  if (input instanceof FormControl) {
    input.markAsDirty();
  } else if (input instanceof FormGroup) {
    Object.values(input.controls).forEach((control) => {
      control.markAsDirty();
    });
  }
}
