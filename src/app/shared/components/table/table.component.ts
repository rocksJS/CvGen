import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { Observable } from 'rxjs';
import { IEmployee } from '../../interfaces/employee.interface';
import { IFieldName } from '../../interfaces/fieldnames.interface';

@Component({
  selector: 'cvg-table',
  standalone: true,
  imports: [CommonModule, NzTableModule, NzDividerModule, NzButtonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() public listOfData: any;

  @Input() public fieldNames: IFieldName[];

  @Output() public idEmitter = new EventEmitter<number>();

  public emitCellId(id: number) {
    this.idEmitter.emit(id);
  }
}
