import { useState } from 'react';

const useForm = (initialValues = {}) => {
  const [stateForm, setStateForm] = useState(initialValues);

  const resetInput = () => {
    setStateForm(initialValues);
  };

  const handleChangeInput = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setStateForm({
      ...stateForm,
      [name]: value,
    });
  };

  return [stateForm, handleChangeInput, resetInput];
};

export default useForm;
