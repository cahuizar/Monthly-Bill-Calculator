import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarygitComponent } from './summarygit.component';

describe('SummarygitComponent', () => {
  let component: SummarygitComponent;
  let fixture: ComponentFixture<SummarygitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummarygitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarygitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
