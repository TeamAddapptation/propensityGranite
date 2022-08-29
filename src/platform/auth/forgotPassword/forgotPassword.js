import graniteForm from "../../../granite/form/graniteForm";
import "./forgotPassword.css";
/*------------------------
Login Form
-------------------------*/
const forgotPasswordForm = {
  id: "form__forgot-password",
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
    submit_label: "Send Email",
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
      id: "email",
      name: "email",
      title: "",
      g_type: "text",
      required: true,
      options: "",
      value: "",
      placeholder: "Email address",
      classes: "g__auth-field",
    },
  ],
};
graniteForm(forgotPasswordForm);
