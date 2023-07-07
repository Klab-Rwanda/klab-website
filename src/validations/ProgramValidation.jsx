import * as yup from "yup";

export const programSchema = yup.object().shape({
  title: yup.string().required("Required"),
  details: yup.string().required("Required"),
  tags: yup.string().required("Required"),
  location: yup.string().required("Required"),
  profile: yup.mixed().test("required", "Event image is required", (value) => {
    return value && value.length;
  }),
  deadline: yup.string().required("Required"),
  startDate: yup.date().required("Required"),
  endDate: yup.date().required("Required"),
});
