import * as Yup from 'yup';

export const SignUpSchema = Yup.object({
    fname: Yup.string().min(2).max(25).required("Please Enter your first name"),
    lname: Yup.string().min(2).max(25).required("please Enter you last name Minium 2 character"),
    country: Yup.string().required("Please select one of the City"),
    subject: Yup.string().min(10).max(500).required("please enter subject 8 to 500")
});