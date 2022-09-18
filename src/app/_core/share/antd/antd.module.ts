import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';




@NgModule({
  declarations: [
  ],
  imports: [
  ],
  exports: [
    NzButtonModule,
    NzTableModule,
    NzDividerModule,
    NzInputModule,
    NzIconModule
  ]
})
export class AntdModule { }
