import { render, prettyDOM, fireEvent } from '@testing-library/react';
import ClickCounter from '../../components/ClickCounter';

describe('ClickCounter', () => {
  it('matches snapshot', () => {
    const mockProps = {};

    const utils = render(<ClickCounter {...mockProps} />);

    const container = utils.container;

    expect(container).toMatchSnapshot();
  });

  it('increments number', () => {
    const mockProps = {};

    const utils = render(<ClickCounter {...mockProps} />);

    const button1 = utils.getByText('Click me');

    const span1 = utils.getByText('You clicked 0 times');

    expect(button1).toBeInTheDocument();
    expect(span1).toBeInTheDocument();

    fireEvent.click(button1);

    const span2 = utils.getByText('You clicked 1 times');

    expect(span2).toBeInTheDocument();
  });
});
