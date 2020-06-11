import { useState } from 'react';

const CheckboxWithLabel = () => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => setIsChecked(!isChecked);

  return (
    <label>
      <input type='checkbox' checked={isChecked} onChange={onChange} />

      {isChecked ? 'true' : 'false'}
    </label>
  );
};

export default CheckboxWithLabel;
