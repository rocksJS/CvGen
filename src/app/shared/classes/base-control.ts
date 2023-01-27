import { ChangeDetectorRef, Directive, DoCheck, Input, OnInit, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Directive()
export class BaseControl implements ControlValueAccessor, OnInit, DoCheck {
  @Input() label = '';

  @Input() placeholder = '';

  public baseControl = new FormControl();

  constructor(@Self() private readonly ngControl: NgControl, private readonly cdR: ChangeDetectorRef) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit(): void {
    this.baseControl.valueChanges.subscribe((value) => this.onChange(value));
  }
  ngDoCheck(): void {
    if (this.ngControl.errors !== this.baseControl.errors) {
      this.baseControl.setErrors(this.ngControl.errors);
    }

    if (this.ngControl.dirty) {
      this.baseControl.markAsDirty();
      this.cdR.markForCheck();
    } else {
      this.baseControl.markAsPristine();
    }
  }

  public writeValue(value: string | null): void {
    this.baseControl.setValue(value);
  }
  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public onChange = (value: any): any => value;

  public onTouched = (): void => undefined;
}
