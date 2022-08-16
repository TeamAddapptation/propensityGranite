import graniteForm from "../../../granite/form/graniteForm";
import "./resetPassword.css";
/*------------------------
Login Form
-------------------------*/
const singInForm = {
  id: "form__reset-password",
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
    submit_label: "Reset",
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
      id: "password",
      name: "password",
      title: "",
      g_type: "text",
      required: true,
      options: "",
      value: "",
      placeholder: "New Password",
      classes: "g__auth-field",
    },
    {
      id: "password-check",
      name: "password-check",
      title: "",
      g_type: "text",
      required: true,
      options: "",
      value: "",
      placeholder: "Confirm New Password",
      classes: "g__auth-field",
    },
  ],
};
graniteForm(singInForm);
