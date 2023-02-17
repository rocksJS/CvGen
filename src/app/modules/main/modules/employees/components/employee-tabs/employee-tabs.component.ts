import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, take } from 'rxjs';
import { IRequestData } from 'src/app/shared/interfaces/shared/data.interface';

@Component({
  selector: 'cvg-employee-tabs',
  templateUrl: './employee-tabs.component.html',
  styleUrls: ['./employee-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeTabsComponent implements OnChanges {
  @Input() isEdit: boolean;

  @Input() selectedEmployee: IRequestData | null;

  public infoForm = new FormControl();

  // public cvForm = new FormControl();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.selectedEmployee);

    // есть парснутый юзер с бека нужно пропихнуть это в форму да и только
  }
}
