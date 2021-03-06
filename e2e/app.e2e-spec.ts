import { NgPage } from './app.po';

describe('angular-homework-ngmodel', () => {
  let page: NgPage;

  beforeEach(() => {
    page = new NgPage();
  });

  it(`should have 1 checkbox`, () => {
    page.navigateTo();
    expect(page.getCheckbox().isPresent()).toBe(true);
  });

  it(`should have 1 submit button`, () => {
    page.navigateTo();
    expect(page.getButton().isPresent()).toBe(true);
  });

  it(`should enable button when checkbox checked`, () => {
    page.navigateTo();
    page.check();
    expect(page.getButton().isEnabled()).toBe(true);
  });

  it(`should disable button when checkbox unchecked`, () => {
    page.navigateTo();
    page.check();
    page.check();
    expect(page.getButton().isEnabled()).toBe(false);
  });
});
