import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ADD_PATH } from '../../consts/routing-paths.consts';
import { IFieldName } from '../../interfaces/fieldnames.interface';
import { ExtractListNamesPipe } from '../../pipes/extract-list-names.pipe';

@Component({
  selector: 'cvg-table',
  standalone: true,
  imports: [CommonModule, NzTableModule, NzDividerModule, NzButtonModule, ExtractListNamesPipe, RouterModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  public addPath = ADD_PATH.path;

  @Input() public addButtonContext: string;

  @Input() public listOfData: any;

  @Input() public fieldNames: IFieldName[];

  @Output() public idEmitter = new EventEmitter<number>();

  public emitRowId(id: number) {
    this.idEmitter.emit(id);
  }
}
