import { useState } from 'react';

const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetFields = () => {
    setValues(initialValue);
  };

  const onSubmitHandler = (event, dispatch, action) => {
    event.preventDefault();
    console.log(values);
    dispatch(action(values));
    resetFields();
  };

  return { values, handleChange, onSubmitHandler };
};

export default useForm;
