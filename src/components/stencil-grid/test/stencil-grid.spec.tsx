import { newSpecPage } from '@stencil/core/testing';
import { StencilGrid } from '../stencil-grid';

describe('stencil-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StencilGrid],
      html: `<stencil-grid></stencil-grid>`,
    });
    expect(page.root).toEqualHtml(`
      <stencil-grid>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stencil-grid>
    `);
  });
});
