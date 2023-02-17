import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadSelectedEmployee } from 'src/app/ngrx/actions/employee.actions';
import { selectedEmployeeSelector } from 'src/app/ngrx/selectors/employee.selectors';
import { EMPLOYEES_PATH } from 'src/app/shared/consts/routing-paths.consts';
import { IRequestData } from 'src/app/shared/interfaces/shared/data.interface';
import { EmployeeTabsComponent } from '../../components/employee-tabs/employee-tabs.component';

@Component({
  selector: 'cvg-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeProfileComponent implements OnInit {
  @ViewChild(EmployeeTabsComponent, { static: false })
  private employeeTabsComponent: EmployeeTabsComponent;

  selectedEmployeeId = this.route.snapshot.params['employeeId'];

  selectedEmployee: Observable<IRequestData> | null;

  public employeePath = EMPLOYEES_PATH.fullPath;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.dispatch(loadSelectedEmployee({ employeeId: this.selectedEmployeeId }));
    this.selectedEmployee = this.store.select(selectedEmployeeSelector);
  }

  public saveEmployee() {
    console.log(this.employeeTabsComponent.infoForm.getRawValue());
  }
}
