import { NieuwsAppBootstrapPage } from './app.po';

describe('nieuws-app-bootstrap App', function() {
  let page: NieuwsAppBootstrapPage;

  beforeEach(() => {
    page = new NieuwsAppBootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
