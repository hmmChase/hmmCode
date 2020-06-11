import { render, fireEvent } from '@testing-library/react';
import { Child, Parent1, Parent2 } from '../../components/TestingRTLExample';

// In this example we see that just testing Child
// would not encompass the logic and behavior desired for Parent1 or Parent2
// If we test just Parent1 or Parent2 then we aren't capturing all of the behavior in tests
// If we test all the behavior of both Parent1 and Parent2 in their respective test files, we are double testing
// Or we are forced to understand which behavior Parent1 has tested and Parent2 has tested and we have to go out
// of our way to ensure we aren't duplicating tests:

describe('Parent1', () => {
  it("should render the person's name when he or she is age 18 or over", () => {
    const person = {
      name: 'Mishkin',
      age: 33
    };
    const { queryByText } = render(<Parent1 person={person} />);

    expect(queryByText('Mishkin')).toBeInTheDocument();
  });

  it("should not render the person's name when he or she is under the age of 18", () => {
    const person = {
      name: 'Timmy',
      age: 3
    };
    const { queryByText } = render(<Parent1 person={person} />);

    expect(queryByText('Timmy')).not.toBeInTheDocument();
  });

  it("should not render the person's age", () => {
    // test
  });
});

describe('Parent2', () => {
  it("should render the person's name when he or she is age 18 or over", () => {
    const person = {
      name: 'Mishkin',
      age: 33
    };
    const { queryByText } = render(<Parent2 person={person} />);

    expect(queryByText('Mishkin')).toBeInTheDocument();
  });

  it("should not render the person's name when he or she is under the age of 18", () => {
    const person = {
      name: 'Timmy',
      age: 3
    };
    const { queryByText } = render(<Parent2 person={person} />);

    expect(queryByText('Timmy')).not.toBeInTheDocument();
  });

  it("should render the person's age", () => {
    // test
  });
});

// **** POSSIBLE IDEAS / SOLUTIONS **** to not have the trade off between double testing and sifting through components
// to see if all your logic and behaviors are tested?

// Possible shared behaviors?

const shouldDisplayNamesOfAdults = MyComponent => {
  it("should render the person's name when he or she is age 18 or over", () => {
    const person = {
      name: 'Mishkin',
      age: 33
    };
    const { queryByText } = render(<MyComponent person={person} />);

    expect(queryByText('Mishkin')).toBeInTheDocument();
  });

  it("should not render the person's name when he or she is under the age of 18", () => {
    const person = {
      name: 'Timmy',
      age: 3
    };
    const { queryByText } = render(<MyComponent person={person} />);

    expect(queryByText('Timmy')).not.toBeInTheDocument();
  });
};

describe('Parent1', () => {
  shouldDisplayNamesOfAdults(Parent1);

  it("should not render the person's age ever", () => {
    // test
  });
});

describe('Parent2', () => {
  shouldDisplayNamesOfAdults(Parent2);

  it("should render the person's age always", () => {
    // test
  });
});
