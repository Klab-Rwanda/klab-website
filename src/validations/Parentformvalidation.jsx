import * as yup from "yup";

export const kidApplicationSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  kidfullname: yup.string().required("Required"),
  parentfullname: yup.string().required("Required"),
  phonenumber: yup.number().required("Required"),
  district: yup.string().required("Required"),
  sector: yup.string().required("Required"),
  cell: yup.string().required("Required"),
  school: yup.string().required("Required"),
  class: yup.string().required("Required"),
  textarea: yup.string().required("Required"),
  gender: yup.string().required("Required"),
  age: yup.string().required("Required"),
  date: yup.string().required("Required"),
  other: yup.string().required("Required"),
  
});