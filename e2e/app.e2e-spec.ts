import { ProjectProductPage } from './app.po';

describe('project-product App', () => {
  let page: ProjectProductPage;

  beforeEach(() => {
    page = new ProjectProductPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
