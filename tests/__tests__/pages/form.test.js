import { render, prettyDOM, fireEvent } from '@testing-library/react';
import FormPage from '../../pages/form';

describe('FormPage', () => {
  it('matches snapshot', () => {
    const mockProps = {};

    const utils = render(<FormPage {...mockProps} />);

    const container = utils.container.firstChild;

    expect(container).toMatchSnapshot();
  });
});
