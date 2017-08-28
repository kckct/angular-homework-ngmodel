import { browser, by, element } from 'protractor';

export class AngularHomeworkNgmodelPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
