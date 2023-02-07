import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { BaseControl } from '../../classes/base-control';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';

@Component({
  selector: 'cvg-multi-select-control',
  standalone: true,
  imports: [CommonModule, FormsModule, NzTreeSelectModule],
  templateUrl: './multi-select-control.component.html',
  styleUrls: ['./multi-select-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiSelectControlComponent extends BaseControl {
  value: string[] = ['0-0-0'];

  nodes = [
    {
      title: 'English',
      value: '0-0',
      key: '0-0',
      children: [
        {
          title: 'Level',
          value: '0-0-0',
          key: '0-0-0',
          isLeaf: true,
          isDisableCheckbox: true,
        },
        {
          title: 'Child Node1',
          value: '0-0-1',
          key: '0-0-1',
          isLeaf: true,
        },
        {
          title: 'Child Node1',
          value: '0-0-2',
          key: '0-0-2',
          isLeaf: true,
        },
      ],
    },
    {
      title: 'Node2',
      value: '0-1',
      key: '0-1',
      children: [
        {
          title: 'Child Node3',
          value: '0-1-0',
          key: '0-1-0',
          isLeaf: true,
        },
        {
          title: 'Child Node4',
          value: '0-1-1',
          key: '0-1-1',
          isLeaf: true,
        },
        {
          title: 'Child Node5',
          value: '0-1-2',
          key: '0-1-2',
          isLeaf: true,
        },
      ],
    },
  ];

  changeValue($event: string[]): void {
    console.log($event);
  }
}
