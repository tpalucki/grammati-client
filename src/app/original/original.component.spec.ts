import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {OriginalComponent} from './original.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        OriginalComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(OriginalComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'grammati-client'`, () => {
    const fixture = TestBed.createComponent(OriginalComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('grammati-client');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(OriginalComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('grammati-client app is running!');
  });
});
