import { AngularHomeworkNgmodelPage } from './app.po';

describe('angular-homework-ngmodel App', () => {
  let page: AngularHomeworkNgmodelPage;

  beforeEach(() => {
    page = new AngularHomeworkNgmodelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
