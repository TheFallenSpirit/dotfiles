# Hyprland Config
My personal Hyprland config using Waybar, Rofi and a few other utilities.

## Installation:

### Dependencies & Requirements:
The following dependencies are required for my config to work, please make sure they are all installed and added to path.

- [Hyprland](https://hyprland.org): The star of the show, Hyprland itself.
- [Waybar](https://github.com/Alexays/Waybar): The key to having a beautiful and functional top bar, read the installation docs [here](https://github.com/Alexays/Waybar?tab=readme-ov-file#installation).
- [Hyprshot](https://github.com/Gustash/hyprshot): A simple and functional utility for taking screenshots, read the installation docs [here](https://github.com/Gustash/hyprshot?tab=readme-ov-file#installation). 
- [Rofi](https://github.com/davatorium/rofi): A very useful application launcher, and dmenu replacement. It powers my media controls menu and power menu, read the installation docs [here](https://github.com/davatorium/rofi/blob/next/INSTALL.md).
- [PlayerCTL](https://github.com/altdesktop/playerctl): A CLI-based MPRIS control utility that I use for my MPRIS media control menu, read the installation docs [here](https://github.com/altdesktop/playerctl?tab=readme-ov-file#installing).
- [Wttrbar](https://github.com/bjesus/wttrbar): A lightweight weather module for Waybar, read the installation docs [here](https://github.com/bjesus/wttrbar?tab=readme-ov-file#installation).

### Downloading & Moving Files:
You'll need to move all the folders from this repository to your home ".config" directory.
<br/>
You can use the commands below to do this automatically.

```bash
git clone https://github.com/TheFallenSpirit/hypr-config
cp -r hypr-config/hypr ~/.config/
cp -r hypr-config/rofi ~/.config/
cp -r hypr-config/waybar ~/.config/
```

### After installing all dependencies and moving the files, restart your computer.
After restart, you should see my waybar configuration loaded and ready.

## Default Keybinds:
```txt
Open Launcher: SUPER + R
Close Application: SUPER + Q
Take Screenshot (Hyprshot): ALT + SHIFT + S
Fullscreen Powermenu (Rofi): CTRL + ALT + DELETE

Force Reload Waybar: ALT + R
```
