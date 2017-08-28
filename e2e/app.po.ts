import { browser, by, element } from 'protractor';

export class NgPage {
  navigateTo() {
    return browser.get('/');
  }

  getCheckbox(): any {
    return element(by.id('checkbox1'));
  }

  toggleCheck(): any {
    return this.getCheckbox().click();
  }

  getButton(): any {
    return element(by.id('button1'));
  }
}
