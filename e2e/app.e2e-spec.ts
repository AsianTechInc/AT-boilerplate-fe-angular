import { BoilerplatePage } from './app.po';

describe('boilerplate App', () => {
  let page: BoilerplatePage;

  beforeEach(() => {
    page = new BoilerplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
