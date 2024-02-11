import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatToolbar } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ShellComponent } from './shell.component';

describe('NavigationComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a toolbar', () => {
    expect(fixture.debugElement.query(By.directive(MatToolbar))).toBeTruthy();
  });
});
