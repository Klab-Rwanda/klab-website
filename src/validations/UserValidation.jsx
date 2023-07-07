import * as yup from "yup";

export const userSchema = yup.object().shape({
    username: yup.string().required("Required"),
    email: yup.string().email("Please enter a valid email").required(),
    phone: yup.number().required("Required"),
    password: yup.string().min(6).max(12).required("Required"),
    role: yup.string().required("Required")
});