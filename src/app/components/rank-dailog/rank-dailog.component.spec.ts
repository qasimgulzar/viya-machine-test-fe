import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankDailogComponent } from './rank-dailog.component';

describe('RankDailogComponent', () => {
  let component: RankDailogComponent;
  let fixture: ComponentFixture<RankDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankDailogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
