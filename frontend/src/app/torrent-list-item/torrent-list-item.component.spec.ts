/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TorrentListItemComponent } from './torrent-list-item.component';

describe('Component: TorrentListItem', () => {
  it('should create an instance', () => {
    let component = new TorrentListItemComponent();
    expect(component).toBeTruthy();
  });
});
