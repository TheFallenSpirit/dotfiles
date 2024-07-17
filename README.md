# Hyprland Config (dotfiles)
My personal Hyprland config using Waybar, Rofi, AGS, and a few other utilities.

## Installation:

### Required Dependencies:
The following dependencies are required for my config to work, please make sure they are all installed and added to path.

- [Hyprland](https://hyprland.org): The star of the show, Hyprland itself.
- [Waybar](https://github.com/Alexays/Waybar): The key to having a beautiful and functional top bar, read the installation docs [here](https://github.com/Alexays/Waybar?tab=readme-ov-file#installation).
- [Rofi](https://github.com/davatorium/rofi): A very useful application launcher, and dmenu replacement. It powers my media controls menu and power menu, read the installation docs [here](https://github.com/davatorium/rofi/blob/next/INSTALL.md).
- [AGS](https://aylur.github.io/ags-docs/): Aylur's GTK Shell, an extremely customisable GTK shell library for building Wayland widgets, read the installation docs [here](https://aylur.github.io/ags-docs/config/installation/).

### Optional Dependencies:
The following dependencies are optional, and are not required for my config to work. If you install them please make sure they are added to path.
- [Hyprshot](https://github.com/Gustash/hyprshot): A simple and functional utility for taking screenshots, read the installation docs [here](https://github.com/Gustash/hyprshot?tab=readme-ov-file#installation).
- [Bluetuith](https://github.com/darkhz/bluetuith): A simple and functional CLI-based utility for managing and connecting to bluetooth devices, read the installation docs [here](https://darkhz.github.io/bluetuith/Installation.html).

### Downloading & Moving Files:
You'll need to move all the folders from this repository to your home ".config" directory.
<br/>
You can use the commands below to do this automatically.

```bash
git clone https://github.com/TheFallenSpirit/dotfiles
cp -r dotfiles/ags ~/.config/
cp -r dotfiles/hypr ~/.config/
cp -r dotfiles/rofi ~/.config/
cp -r dotfiles/waybar ~/.config/
```

### After installing all dependencies and moving the files, restart your computer.
After restart, you should see my waybar configuration loaded and ready.

## Default Keybinds:
```txt
Open Launcher: SUPER + R
Close Application: SUPER + Q
Open Control Center: SUPER + C
Take Screenshot (Hyprshot): ALT + SHIFT + S
Fullscreen Powermenu (Rofi): CTRL + ALT + DELETE

Force Reload Waybar: ALT + R
Force Reload AGS: SUPER + SHIFT + R
```

## Issues & Suggestions:
If you want to report a problem or have a suggestion, feel free to open an issue on this repository. Pull requests are also welcome for bug fixes or improvements.