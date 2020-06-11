import { render, prettyDOM, fireEvent } from '@testing-library/react';
import Form from '../../components/Form';

describe(Form, () => {
  it('matches snapshot', () => {
    const mockProps = {};

    const utils = render(<Form {...mockProps} />);

    const container = utils.container.firstChild;

    expect(container).toMatchSnapshot();
  });

  it('updates value on keypress', () => {
    const mockProps = {};

    const utils = render(<Form {...mockProps} />);

    const input1 = utils.getByLabelText('Label :');

    const enterEvent = { which: 13, charCode: 13 };

    fireEvent.keyPress(input1, enterEvent);

    const input2 = utils.getByLabelText('Label :');

    expect(input2.value).toEqual('keyPress 13');
  });

  it('updates value on change', () => {
    const mockProps = {};

    const utils = render(<Form {...mockProps} />);

    const input1 = utils.getByLabelText('Label :');

    const changeEvent = { target: { value: 'test' } };

    fireEvent.change(input1, changeEvent);

    const input2 = utils.getByLabelText('Label :');

    expect(input2.value).toEqual('test');
  });
});
