import * as yup from 'yup';

const fullName = yup.string().max(25);

const requiredEmail = yup.string().email('Invalid email address').required('Enter email');
const requiredPassword = yup.string().min(4, 'The minimum password length is 4 characters').max(16, 'The maximum password length is 16 characters').required('Enter password');
const requiredParamsId = yup.number().integer().min(1).required();

const sharedValidation = {
  fullName,
  requiredParamsId,
  requiredEmail,
  requiredPassword,
};

const singUp =
  yup.object({
    email: sharedValidation.requiredEmail,
    password: sharedValidation.requiredPassword,
    confPassword: sharedValidation.requiredPassword,
  });

const logIn =
  yup.object({
    email: sharedValidation.requiredEmail,
    password: sharedValidation.requiredPassword,
  });

const editUser =
  yup.object({
    fullName: sharedValidation.fullName,
    email: sharedValidation.requiredEmail,
    userId: sharedValidation.requiredParamsId,
  });

const editUserPass =
  yup.object({
    password: sharedValidation.requiredPassword,
    newPassword: sharedValidation.requiredPassword,
    userId: sharedValidation.requiredParamsId,
  });

export default { singUp, logIn, editUser, editUserPass };
