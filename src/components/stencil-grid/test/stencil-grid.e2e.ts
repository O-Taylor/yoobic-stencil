import { newE2EPage } from '@stencil/core/testing';

describe('stencil-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-grid></stencil-grid>');

    const element = await page.find('stencil-grid');
    expect(element).toHaveClass('hydrated');
  });
});
