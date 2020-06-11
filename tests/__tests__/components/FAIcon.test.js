import { render, prettyDOM, fireEvent } from '@testing-library/react';
import FAIcon from '../../components/FAIcon';

describe('FAIcon', () => {
  it('matches snapshot', () => {
    const mockProps = {};

    const utils = render(<FAIcon {...mockProps} />);

    const container = utils.container.firstChild;

    expect(container).toMatchSnapshot();
  });

  it('has correct class', () => {
    const mockProps = {};

    const utils = render(<FAIcon {...mockProps} />);

    const icon = utils.container.firstChild;

    expect(icon).toHaveClass('fa-thumbs-up');
  });
});
