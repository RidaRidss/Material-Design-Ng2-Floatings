import { Angular2WorkPage } from './app.po';

describe('angular2-work App', function() { 
  let page: Angular2WorkPage; beforeEach(() => { 
    page = new Angular2WorkPage();});
     it('should display message saying app works', () => {
       page.navigateTo();
       expect(page.getParagraphText()).toEqual('Material-Design-Ng2-Floatings.');
  });
});
