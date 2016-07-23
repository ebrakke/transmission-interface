/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TorrentListComponent } from './torrent-list.component';

describe('Component: TorrentList', () => {
  it('should create an instance', () => {
    let component = new TorrentListComponent();
    expect(component).toBeTruthy();
  });
});
