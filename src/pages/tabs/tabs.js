import graniteTabs from "../../granite/tabs/graniteTabs";

const theme = {
  mode: "standard",
};

const tabs = {
  id: "tabs__demo",
  options: {
    g_style: "block", // step, line, block
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
      name: "Profile",
      desc: "",
      icon: "",
      href: "/profile.html",
    },
    {
      name: "Permissions",
      desc: "",
      href: "/permissions.html",
    },
    {
      name: "Billing",
      desc: "",
      href: "/billing.html",
    },
    {
      name: "Data connections",
      desc: "",
      href: "/dataConnections.html",
    },
    {
      name: "Privacy",
      desc: "",
      href: "/privacy.html",
    },
  ],
};
graniteTabs(tabs, theme);
