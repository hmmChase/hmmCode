import { render, prettyDOM, fireEvent } from '@testing-library/react';
import CheckboxWithLabel from '../../components/CheckboxWithLabel';

describe('CheckboxWithLabel', () => {
  it('matches snapshot', () => {
    const mockProps = {};

    const utils = render(<CheckboxWithLabel {...mockProps} />);

    const container = utils.container.firstChild;

    expect(container).toMatchSnapshot();
  });

  it('changes text after click', () => {
    const mockProps = {};
    const onChange = jest.fn();

    const utils = render(
      <CheckboxWithLabel {...mockProps} onChange={onChange} />
    );

    const input1 = utils.queryByLabelText('false');

    expect(input1).toBeTruthy();
    expect(input1).toBeInTheDocument();
    expect(input1).toHaveAttribute('type', 'checkbox');
    expect(input1).not.toBeChecked();

    const label1 = utils.getByText('false');

    fireEvent.click(label1);

    const input2 = utils.queryByLabelText('true');

    expect(input2).toBeChecked();
  });
});
