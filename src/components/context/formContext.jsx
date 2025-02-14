import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const FormContext = createContext();

export function FormProvider({ children }) {
  const storedData = localStorage.getItem('formData');
  const initialData = storedData
    ? JSON.parse(storedData)
    : {
        selectedTicket: '',
        quantity: 1,
        userName: '',
        email: '',
        avatar: '',
        specialRequest: '',
      };

  const [formData, setFormData] = useState(initialData);

  // const [formData, setFormData] = useState({
  //   selectedTicket: '',
  //   quantity: 1,
  //   userName: '',
  //   email: '',
  //   avatar: '',
  //   specialRequest: '',
  // });

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
}

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useForm() {
  return useContext(FormContext);
}
