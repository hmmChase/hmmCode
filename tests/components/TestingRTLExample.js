export const Child = ({ person, showName, showAge }) => (
  <>
    {showName && <h1>{person.name}</h1>}
    {showAge && <div>{person.age}</div>}
  </>
);

export const Parent1 = ({ person }) => (
  <Child showName={person.age >= 18} person={person} showAge={false} />
);

export const Parent2 = ({ person }) => (
  <Child showName={person.age >= 18} person={person} showAge={true} />
);
