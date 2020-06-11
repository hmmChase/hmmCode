import { render, prettyDOM, fireEvent } from '@testing-library/react';
import IndexPage from '../../pages/index';

describe('IndexPage', () => {
  it('matches snapshot', () => {
    const mockProps = {};

    const utils = render(<IndexPage {...mockProps} />);

    const container = utils.container;

    expect(container).toMatchSnapshot();
  });
});
