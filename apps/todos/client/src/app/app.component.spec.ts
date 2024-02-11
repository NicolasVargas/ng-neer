import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, AppComponent, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render h1 hello world', () => {
    expect(
      fixture.debugElement.query(By.css('h1')).nativeElement.textContent,
    ).toBe('Hello world');
  });

  it(`should have a shell component`, () => {
    expect(
      fixture.debugElement.query(By.directive(ShellComponent)),
    ).toBeTruthy();
  });
});
