import * as yup from "yup";

export const applicationSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  fullname: yup.string().required("Required"),
  phone: yup.number().typeError("Required").required("Required"),
  gender: yup.string().required("Required"),
  dob: yup
    .date("this is a required field")
    .typeError("Required")
    .required("Required"),
  agerange: yup.string().required("Required"),
  country: yup.string().required("Required"),
  province: yup.string().required("Required"),
  district: yup.string().required("Required"),
  areyougraduate: yup.string().required("Required"),
  educationlevel: yup.string().required("Required"),
  schoolfrom: yup.string().required("Required"),
  yearstudy: yup.string().required("Required"),
  fieldofstudy: yup.string().required("Required"),
  categoryfitin: yup.string().required("Required"),
  skilldesc: yup.string().required("Required"),
  areyoudev: yup.string().required("Required"),
  gitlink: yup
    .string().url().when("categoryfitin", {
      is: 'ent',
      then: yup.string().notRequired(),
      otherwise: yup.string().required("Required"),
    }),
  linkedinlink: yup.string().url("Please enter a valid url").required("Required"),
  entInnovationdesc: yup.string().required("Required"),
  shareInnovationModel: yup.string().required("Required"),
  skillyouwantjoin: yup.string().required("Required"),
});