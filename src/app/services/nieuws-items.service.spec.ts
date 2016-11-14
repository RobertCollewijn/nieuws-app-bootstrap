/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NieuwsItemsService } from './nieuws-items.service';

describe('Service: NieuwsItems', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NieuwsItemsService]
    });
  });

  it('should ...', inject([NieuwsItemsService], (service: NieuwsItemsService) => {
    expect(service).toBeTruthy();
  }));
});
