import { CesAboutPage } from './app.po';

describe('ces-about App', () => {
  let page: CesAboutPage;

  beforeEach(() => {
    page = new CesAboutPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
