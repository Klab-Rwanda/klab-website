import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().min(6).max(12).required("Required"),
});