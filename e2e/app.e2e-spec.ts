import { PaintitPage } from './app.po';

describe('paintit App', function() {
  let page: PaintitPage;

  beforeEach(() => {
    page = new PaintitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
