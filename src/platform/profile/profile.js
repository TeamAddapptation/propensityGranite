import graniteForm from "../../granite/form/graniteForm";
import "../../granite/form/graniteForm.css";
import graniteTabs from "../../granite/tabs/graniteTabs";

import graniteFileUpload from "../../granite/plugins/form/fileUpload/graniteFileUpload";
import "../../granite/plugins/form/fileUpload/graniteFileUpload.css";

import "./profile.css";
const accountProfile = {
  id: "form__my-profile",
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
    cancel_btn: true,
    default_picklists: true,
    submit_label: "Save",
    submit_classes: "g__btn g__btn-primary",
    cancel_label: "Cancel",
    cancel_classes: "g__btn g__btn-text",
    width: "500px",
    max_width: "600px",
  },
  records: [
    {
      type: "custom",
      label: "fname",
      title: "",
      id: "fname",
      name: "fname",
      required: true,
      value: "",
      placeholder: "",
      classes: "",
      custom_function: graniteFileUpload(true),
    },
    {
      type: "text",
      label: "fname",
      title: "First Name",
      id: "fname",
      name: "fname",
      required: true,
      value: "",
      placeholder: "",
      classes: "",
    },
    {
      type: "text",
      label: "lname",
      title: "Last Name",
      id: "lname",
      name: "lname",
      required: true,
      options: "",
      value: "",
      placeholder: "",
      classes: "",
    },
    {
      type: "email",
      label: "email",
      title: "Email",
      id: "email",
      name: "email",
      required: true,
      options: "",
      value: "",
      placeholder: "",
      classes: "",
    },
  ],
};
graniteForm(accountProfile);

const theme = {
  mode: "standard",
};

const tabs = {
  id: "tabs__account-settings",
  options: {
    g_style: "line", // step, line, block
    g_align_tabs: "left",
    g_font_size: "14",
    g_font_color: "#5d5d5d",
    g_font_hover_color: "#a4a4a4",
    g_icon_size: "",
    g_step_number_color: "",
    g_title_size: "16",
    g_title_color: "",
    g_description_size: "12px",
    g_description_color: "",
    g_highlight_color: "#5D50E6",
    g_background_color: "#ffffff",
    g_background_active_color: "#F7F6FE",
    g_background_hover_color: "#F7F6FE",
    g_align: "left",
    g_align_icon: "flex-start",
    g_direction: false,
    g_padding: "10px 40px",
    g_margin: "0",
    g_border_width: "",
    g_border_color: "red",
    g_border_radius: "",
    g_full_width: true,
    padding_top: "0",
    padding_bottom: "0",
    margin_top: "0",
    margin_bottom: "0",
    g_classes: "",
    g_cursor_disabled: false,
    g_action: "hash_builder",
    container_top_padding: "0",
    container_bottom_padding: "0",
  },
  records: [
    {
      name: "My Profile",
      desc: "",
      icon: "",
      href: "/Profile.html",
    },
    {
      name: "Password Reset",
      desc: "",
      href: "/passwordReset.html",
    },
    {
      name: "Email Preferences",
      desc: "",
      href: "/email_preferences.html",
    },
  ],
};
graniteTabs(tabs, theme);
