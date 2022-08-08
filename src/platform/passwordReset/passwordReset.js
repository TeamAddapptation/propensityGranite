import graniteForm from "../../granite/form/graniteForm";
import "../../granite/form/graniteForm.css";
import graniteTabs from "../../granite/tabs/graniteTabs";

import "./passwordReset.css";

const passwordReset = {
  id: "form__password-reset",
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
    submit_btn: false,
    cancel_btn: false,
    default_picklists: true,
    submit_label: "Save",
    submit_classes: "g__btn g__btn-primary",
    cancel_label: "Cancel",
    cancel_classes: "g__btn g__btn-text",
    custom_btn: true,
    custom_btn_id: "save_password",
    custom_btn_classes: "g__btn g__btn-primary",
    custom_btn_text: "Save",
    max_width: "600px",
  },
  records: [
    {
      type: "password",
      label: "password",
      title: "New Password",
      id: "a__new-password",
      name: "password",
      required: true,
      options: "",
      value: "",
      placeholder: "",
      classes: "",
    },
    {
      type: "password",
      label: "confirm_password",
      title: "Confirm Password",
      id: "confirm_password",
      name: "confirm_password",
      required: true,
      options: "",
      value: "",
      placeholder: "",
      classes: "g__password_container",
    },
  ],
};
graniteForm(passwordReset);

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
      name: "Billing",
      desc: "",
      href: "/billing.html",
    },
  ],
};
graniteTabs(tabs, theme);

/*------------------------
Email Strength Validation
-------------------------*/
// Build the check items
const passCont = document.querySelector(".g__password_container");
const validationCont = document.createElement("div");
validationCont.classList.add("a__email-req-list");
const lowercase = document.createElement("div");

lowercase.classList.add("a__validate-item");
lowercase.id = "a__pass-lowercase";
lowercase.innerHTML = "<i class='fas fa-circle a__circle-indicator a__lower-icon'></i> One lowercase letter";
validationCont.appendChild(lowercase);

const uppercase = document.createElement("div");
uppercase.classList.add("a__validate-item");
uppercase.id = "a__pass-uppercase";
uppercase.innerHTML = "<i class='fas fa-circle a__circle-indicator a__upper-icon'></i> One uppercase letter";
validationCont.appendChild(uppercase);

const length = document.createElement("div");
length.classList.add("a__validate-item");
length.id = "a__pass-length";
length.innerHTML = "<i class='fas fa-circle a__circle-indicator a__length-icon'></i> 8 character minimum";
validationCont.appendChild(length);

const symbols = document.createElement("div");
symbols.classList.add("a__validate-item");
symbols.id = "a__pass-symbols";
symbols.innerHTML = "<i class='fas fa-circle a__circle-indicator a__symbol-icon'></i> One symbol";
validationCont.appendChild(symbols);

const confirmPass = document.createElement("div");
confirmPass.classList.add("a__validate-item");
confirmPass.id = "a__pass-match";
confirmPass.innerHTML = "<i class='fas fa-circle a__circle-indicator a__match-icon'></i> Matching Passwords";
validationCont.appendChild(confirmPass);

passCont.after(validationCont);

// Validate each item on keyup
const userPassword = document.getElementById("a__new-password");
const confirmPassword = document.getElementById("confirm_password");
const saveBtn = document.getElementById("save_password");
const lowerIcon = document.querySelector(".a__lower-icon");
const upperIcon = document.querySelector(".a__upper-icon");
const lengthIcon = document.querySelector(".a__length-icon");
const symbolIcon = document.querySelector(".a__symbol-icon");
const matchIcon = document.querySelector(".a__match-icon");
let isvalid = [false, false, false, false, false];

saveBtn.disabled = true;

userPassword.addEventListener("keyup", () => {
  let password = userPassword.value;
  //Lowercase Check
  const lowercaseLetters = /[a-z]/g;
  if (password.match(lowercaseLetters)) {
    lowerIcon.style.color = "#65C963";
    isvalid[0] = true;
  } else {
    lowerIcon.style.color = "#BFBFBF";
    isvalid[0] = false;
  }
  //Uppercase Check
  const uppercaseLetters = /[A-Z]/g;
  if (password.match(uppercaseLetters)) {
    upperIcon.style.color = "#65C963";
    isvalid[1] = true;
  } else {
    upperIcon.style.color = "#BFBFBF";
    isvalid[1] = false;
  }
  //Length Check
  if (password.length >= 8) {
    lengthIcon.style.color = "#65C963";
    isvalid[2] = true;
  } else {
    lengthIcon.style.color = "#BFBFBF";
    isvalid[2] = false;
  }
  //Symbol Check
  const symbol = /[~!@#$%^&*()_+=><?/:;{}]/g;
  if (password.match(symbol)) {
    symbolIcon.style.color = "#65C963";
    isvalid[3] = true;
  } else {
    symbolIcon.style.color = "#BFBFBF";
    isvalid[3] = false;
  }
  submitHandler();
});

confirmPassword.addEventListener("keyup", () => {
  let fieldOne = userPassword.value;
  let fieldTwo = confirmPassword.value;
  if (fieldOne === fieldTwo) {
    matchIcon.style.color = "#65C963";
    isvalid[4] = true;
  } else {
    matchIcon.style.color = "#BFBFBF";
    isvalid[4] = false;
  }
  submitHandler();
});

function submitHandler() {
  let checker = isvalid.every((v) => v === true);
  if (checker) {
    saveBtn.disabled = false;
  } else {
    saveBtn.disabled = true;
  }
}
