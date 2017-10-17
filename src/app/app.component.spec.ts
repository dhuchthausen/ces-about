import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  //let de: DebugElement;
  //let el: HTMLElement;
  let menuentries: DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NgbModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;

    //de = fixture.debugElement.query(By.css('ul'));
   // el = de.nativeElement;
    menuentries = fixture.debugElement.queryAll(By.css('li'));
  }));

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'About Cloudogu'`, async(() => {
    fixture.detectChanges();
    expect(comp.title).toEqual('About Cloudogu');
  }));

  it(`should contain 'About Cloudogu' in menu`, async(() => {
   fixture.detectChanges();
   expect(menuentries[0].nativeElement.textContent).toBe('About Cloudogu');
  }));

  it(`should contain 'Licenses' in menu`, async(() => {
    fixture.detectChanges();
    expect(menuentries[1].nativeElement.textContent).toBe('Licenses');
   }));

   it(`should contain 'Privacy Policy' in menu`, async(() => {
    fixture.detectChanges();
    expect(menuentries[2].nativeElement.textContent).toBe('Privacy Policy');
   }));

   it(`should contain 'Terms and Conditions' in menu`, async(() => {
    fixture.detectChanges();
    expect(menuentries[3].nativeElement.textContent).toBe('Terms and Conditions');
   }));

   it(`should contain 'Imprint' in menu`, async(() => {
    fixture.detectChanges();
    expect(menuentries[4].nativeElement.textContent).toBe('Imprint');
   }));

});