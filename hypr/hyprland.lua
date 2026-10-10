require("variables")
require("modules/monitors")
require("modules/startup")
require("modules/keybinds")
require("modules/gestures")
require("modules/animations")
require("modules/window_rules")

hl.workspace_rule({
    default = true,
    workspace = "name:gaming"
})

hl.config({
    misc = {
        vrr = 1,
        swallow_regex = "(kitty|ghostty|[Kk]onsole|Alacritty|gnome-terminal|xfce[0-9]?-terminal)",
        enable_swallow = true,
        focus_on_activate = true,
        disable_hyprland_logo = true,
        disable_splash_rendering = true
    },
    input = {
        kb_layout = "us",
        accel_profile = "flat"
    },
    master = {
        mfact = 0.5
    },
    render = {
        direct_scanout = 2
    },
    general = {
        layout = "dwindle",
        gaps_in = 0,
        gaps_out = 0,
        border_size = 0,
        resize_on_border = true,
        extend_border_grab_area = 10
    },
    dwindle = {
        preserve_split = true
    },
    animations = {
        enabled = true
    },
    decoration = {
        blur = {
            size = 5,
            passes = 4,
            special = true
        },
        rounding = 12,
        active_opacity = 1.0,
        inactive_opacity = 0.90,
        shadow = {
            range = 30,
            color = "rgba(00000070)",
            offset = "0 5",
            enabled = true,
            render_power = 5
        },
    },
})
