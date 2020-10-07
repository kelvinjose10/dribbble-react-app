export const validateFields = (state, data) => {
  if (state.nameForm.trim().length === 0) {
    data = [
      ...data,
      { target: 'nameForm', value: state.nameForm, error: 'Name is requerid' },
    ];
  }

  if (state.uernameForm.trim().length === 0) {
    data = [
      ...data,
      {
        target: 'uernameForm',
        value: state.uernameForm,
        error: 'uernameForm is requerid',
      },
    ];
  }

  if (state.emailForm.trim().length === 0) {
    data = [
      ...data,
      {
        target: 'emailForm',
        value: state.emailForm,
        error: 'emailForm is requerid',
      },
    ];
  }
  if (state.passForm.trim().length === 0) {
    data = [
      ...data,
      {
        target: 'passForm',
        value: state.passForm,
        error: 'passForm is requerid',
      },
    ];
  }

  return data;
};
