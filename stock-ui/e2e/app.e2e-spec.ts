import { PropBindingPage } from './app.po';

describe('prop-binding App', () => {
  let page: PropBindingPage;

  beforeEach(() => {
    page = new PropBindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
