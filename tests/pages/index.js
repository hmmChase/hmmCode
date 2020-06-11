import Button from '../components/Button';
import CheckboxWithLabel from '../components/CheckboxWithLabel';
import ClickCouter from '../components/ClickCounter';
import FAIcon from '../components/FAIcon';

const IndexPage = () => {
  const handleClick = () => alert('hi');

  return (
    <>
      <h1>Hello World</h1>

      <div>
        <Button variant='secondary' onClick={handleClick}>
          Click me
        </Button>
      </div>

      <div>
        <CheckboxWithLabel />
      </div>

      <div>
        <ClickCouter />
      </div>

      <div>
        <FAIcon />
      </div>
    </>
  );
};

export default IndexPage;
