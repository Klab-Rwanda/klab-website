import * as yup from 'yup';
export const contactSchema = yup.object().shape({
    fullname: yup.string().required(" Enter your names"),
    email: yup.string().email("Enter Valid Email").required("Enter an Email"),
    phone: yup.number().required("Phone number is required"),
    message: yup.string().required("Please Enter a message")
});