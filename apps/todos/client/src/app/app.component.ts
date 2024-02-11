import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShellComponent } from './shell/shell.component';

@Component({
  standalone: true,
  imports: [ShellComponent, RouterModule],
  selector: 'atd-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
