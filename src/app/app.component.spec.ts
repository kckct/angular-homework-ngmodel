import { TestBed, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  let target: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule
      ],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    target = new AppComponent();
    fixture.detectChanges();
  });

  describe(`NgModel`, () => {
    describe(`Integration Test`, () => {
      it(`should have 'checkboxFlag' field on ngModel directive`, () => {
        debugElement.query(By.css('#checkbox1')).triggerEventHandler('click', null);
        expect(component.checkboxFlag).toBe(false);
      });

      it(`should use 'checkboxFlag' field`, () => {
        component.checkboxFlag = true;
        fixture.detectChanges();

        htmlElement = debugElement.query(By.css('#button1')).nativeElement.disabled;
        expect(htmlElement).toBe(false);
      });
    });

    describe(`Unit Test`, () => {
      it(`should have 'checkboxFlag' field with 'false'`, () => {
        expect(target.checkboxFlag).toBe(false);
      });
    });
  });
});
