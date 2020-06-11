import { render, prettyDOM, fireEvent } from '@testing-library/react';
import Button from '../../components/Button';

describe('Button', () => {
  it('matches snapshot', () => {
    // Arrange
    const mockProps = {
      variant: 'primary',
      children: 'click me',
      onClick: jest.fn()
    };

    // Act
    const utils = render(<Button {...mockProps} />);

    const container = utils.container.firstChild;

    // Assert
    expect(container).toMatchSnapshot();
  });

  it('displays children', () => {
    const mockProps = {
      variant: 'secondary',
      children: 'click me',
      onClick: jest.fn()
    };

    const utils = render(<Button {...mockProps} />);

    // console.log('baseElement: ', prettyDOM(utils.container.firstChild));

    const button = utils.container.firstChild;

    // console.log('button: ', prettyDOM(button));

    expect(button).toHaveTextContent('click me');
  });

  it('has correct class', () => {
    const mockProps = {
      variant: 'primary',
      children: 'click me',
      onClick: jest.fn()
    };

    const utils = render(<Button {...mockProps} />);

    const button = utils.getByText('click me');

    expect(button).toHaveClass('button-primary');
  });

  it('calls click handler', () => {
    const mockProps = {
      variant: 'primary',
      children: 'click me',
      onClick: jest.fn()
    };

    const utils = render(<Button {...mockProps} />);

    const button = utils.getByText('click me');

    fireEvent.click(button);

    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });
});
