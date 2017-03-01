import { AngularGeocoderPage } from './app.po';

describe('angular-geocoder App', function() {
  let page: AngularGeocoderPage;

  beforeEach(() => {
    page = new AngularGeocoderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
