import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'atd-shell',
  templateUrl: './shell.component.html',
  standalone: true,
  imports: [
    AsyncPipe,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {}
