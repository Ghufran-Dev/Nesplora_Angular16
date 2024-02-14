import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDocumentsComponent } from './edit-documents.component';

describe('EditDocumentsComponent', () => {
  let component: EditDocumentsComponent;
  let fixture: ComponentFixture<EditDocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDocumentsComponent]
    });
    fixture = TestBed.createComponent(EditDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
