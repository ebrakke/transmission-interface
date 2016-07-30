/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { TorrentService } from './torrent.service';

describe('Torrent Service', () => {
  beforeEachProviders(() => [TorrentService]);

  it('should ...',
      inject([TorrentService], (service: TorrentService) => {
    expect(service).toBeTruthy();
  }));
});
