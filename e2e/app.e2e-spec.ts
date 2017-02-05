import { ProjektiPage } from './app.po';

describe('projekti App', function() {
  let page: ProjektiPage;

  beforeEach(() => {
    page = new ProjektiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
