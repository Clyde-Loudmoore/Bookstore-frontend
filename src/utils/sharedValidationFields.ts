import * as yup from 'yup';

const fullName = yup.string().max(25).nullable();

const requiredEmail = yup.string().email('Invalid email address').required('Enter email');
const requiredPassword = yup.string().min(4, 'The minimum password length is 4 characters').max(16, 'The maximum password length is 16 characters').required('Enter password');
const requiredConfPassword = yup.string().oneOf([yup.ref('password'), null], 'Passwords don`t match').min(4, 'The minimum password length is 4 characters').max(16, 'The maximum password length is 16 characters')
  .required('Enter password');
const requiredConfNewPassword = yup.string().oneOf([yup.ref('newPassword'), null], 'Passwords don`t match').min(4, 'The minimum password length is 4 characters').max(16, 'The maximum password length is 16 characters')
  .required('Enter password');
const requiredParamsId = yup.number().integer().min(1).required();

const sharedValidationFields = {
  fullName,
  requiredParamsId,
  requiredEmail,
  requiredPassword,
  requiredConfPassword,
  requiredConfNewPassword,
};

export default sharedValidationFields;
