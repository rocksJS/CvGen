import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadSelectedEmployee } from 'src/app/ngrx/actions/employee.actions';
import { selectedEmployeeSelector } from 'src/app/ngrx/selectors/employee.selectors';

@Component({
  selector: 'cvg-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeProfileComponent implements OnInit {
  selectedEmployeeId = this.route.snapshot.params['employeeId'];

  selectedByIdEmployee: any;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.dispatch(loadSelectedEmployee({ employeeId: this.selectedEmployeeId }));
    this.selectedByIdEmployee = this.store.select(selectedEmployeeSelector);
  }
}
