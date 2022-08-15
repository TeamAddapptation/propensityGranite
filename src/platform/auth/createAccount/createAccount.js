import graniteForm from "../../../granite/form/graniteForm";
import "./createAccount.css";
/*------------------------
Login Form
-------------------------*/
const singInForm = {
  id: "form__sign-in",
  options: {
    enctype: "application/x-www-form-urlencoded",
    method: "POST",
    addapptation_action: "/",
    step_form: false,
    edit_form: false,
    db_action: "",
    db_object: "",
    db_id: "g_sf2dsdsf33",
    db_redirect: "",
    position_form: "center",
    form_id: "",
    submit_btn: true,
    cancel_btn: false,
    default_picklists: true,
    submit_label: "Create Account",
    submit_classes: "g__btn g__btn-primary",
    cancel_label: "Cancel",
    cancel_classes: "g__btn g__btn-text",
    custom_btn: false,
    custom_btn_id: "save_password",
    custom_btn_classes: "g__btn g__btn-primary",
    custom_btn_text: "Save",
    max_width: "600px",
  },
  records: [
    {
      id: "full-name",
      name: "name",
      title: "",
      g_type: "text",
      required: true,
      options: "",
      value: "",
      placeholder: "Full Name",
      dependency_not_blank: false,
      dependency_values: null,
      dependency_field: null,
      length: null,
      classes: "g__auth-field",
    },
    {
      id: "email",
      name: "email",
      title: "",
      g_type: "email",
      required: true,
      options: "",
      value: "",
      placeholder: "Email",
      dependency_not_blank: false,
      dependency_values: null,
      dependency_field: null,
      length: null,
      classes: "g__auth-field",
    },
    {
      id: "password",
      name: "password",
      title: "",
      g_type: "password",
      required: true,
      pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]){8,}$",
      options: "",
      value: "",
      show_password_option: true,
      placeholder: "Password",
      radio_style: "button",
      dependency_not_blank: false,
      dependency_values: null,
      dependency_field: null,
      length: null,
      classes: "g__auth-field",
      id: "a__sign-up-password",
    },
  ],
};
graniteForm(singInForm);
