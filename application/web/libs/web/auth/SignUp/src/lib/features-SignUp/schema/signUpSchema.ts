import { object, string, ref } from "yup";

export const formSchema = object().shape({
    username: string()
        .required("Username is required")
        .matches(/^[a-zA-Z]+$/ , 'Is not in correct format')
        .min(3, "Username length should be at least 3 characters"),
    password: string()
      .required("Password is required")
      .min(4, "Password length should be at least 4 characters")
      .max(12, "Password cannot exceed more than 12 characters"),
    confirmPassword: string()
      .required("Confirm Password is required")
      .min(4, "Password length should be at least 4 characters")
      .max(12, "Password cannot exceed more than 12 characters")
      .oneOf([ref("password")], "Passwords do not match")
  });

