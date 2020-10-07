import { useState } from 'react';

const useForm = (initialValues = {}) => {
  const [stateForm, setStateForm] = useState(initialValues);

  const handleChangeInput = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setStateForm({
      ...stateForm,
      [name]: value,
      errors: stateForm.errors.filter((error) => error.target !== name),
    });
  };

  const validInput = (input) => {
    setStateForm({
      ...stateForm,
      errors: input,
    });
  };

  return [stateForm, handleChangeInput, validInput];
};

export default useForm;
