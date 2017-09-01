import { CssGridPage } from './app.po';

describe('css-grid App', () => {
  let page: CssGridPage;

  beforeEach(() => {
    page = new CssGridPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
