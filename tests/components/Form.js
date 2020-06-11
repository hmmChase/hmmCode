import { useState } from 'react';

const Form = () => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    const {
      target: { value }
    } = event;

    setValue(value);
  };

  const handleKeyPress = event => {
    if (event.which === 13) {
      event.preventDefault();

      setValue('keyPress ' + event.which);
    }
  };

  return (
    <form>
      <label htmlFor='input-text'>Label :</label>

      <input
        id='input-text'
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        type='text'
      />
    </form>
  );
};

export default Form;
