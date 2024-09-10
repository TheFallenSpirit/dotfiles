# Hyprland Config (dotfiles)
My personal Hyprland config using Rofi, AGS, SDDM, and a few other utilities.

## Installation:

### Required Dependencies:
The following dependencies are required for my config to work, please make sure they are all installed and added to path.
- [SDDM](https://github.com/sddm/sddm): A simple and modern display manager.
- [Hyprland](https://hyprland.org): The star of the show, Hyprland itself.
<!-- - [Rofi](https://github.com/davatorium/rofi): A very useful application launcher, and dmenu replacement. It powers my media controls menu and power menu, read the installation docs [here](https://github.com/davatorium/rofi/blob/next/INSTALL.md). -->
- [AGS](https://aylur.github.io/ags-docs/): Aylur's GTK Shell, an extremely customisable GTK shell library for building Wayland widgets, read the installation docs [here](https://aylur.github.io/ags-docs/config/installation/).

Use the following commands to install all dependencies and sub-dependencies for my config:
```bash
yay -S aylurs-gtk-shell
sudo pacman -S sddm gnome-bluetooth-3.0 libdbusmenu-gtk3 sassc
sudo systemctl enable --now sddm
```

### Optional Dependencies:
The following dependencies are optional, and are not required for my config to work. If you install them please make sure they are added to path.
- [Hyprshot](https://github.com/Gustash/hyprshot): A simple and functional utility for taking screenshots.
- [Bluetuith](https://github.com/darkhz/bluetuith): A simple and functional CLI-based utility for managing and connecting to bluetooth devices.

### Downloading & Moving Files:
You'll need to move all the folders from this repository to your home ".config" directory.
<br/>
You can use the commands below to do this automatically.

```bash
git clone https://github.com/TheFallenSpirit/dotfiles
cp -r dotfiles/ags ~/.config/
cp -r dotfiles/hypr ~/.config/
sudo cp -r dotfiles/sddm /usr/share/sddm/themes/fallen
```

Then change modify the following lines in `/usr/lib/sddm/sddm.conf.d/default.conf`:
```txt
[Theme]
Current=fallen
```

### After installing all dependencies and moving the files, restart your computer.
After restart, you should see my AGS configuration loaded and ready.

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

Personal Installation Scripts (Use at own risk):
```bash
pacman -S nano kitty hyprland nautilus pipewire wireplumber pipewire-pulse pipewire-alsa xdg-desktop-portal-gtk discord firefox adw-gtk-theme flatpak slurp grim wl-clipboard noto-fonts noto-fonts-cjk noto-fonts-emoji wofi
gsettings set org.gnome.desktop.interface color-scheme 'prefer-dark'
gsettings set org.gnome.desktop.interface gtk-theme 'adw-gtk3-dark'
systemctl --user enable --now pipewire wireplumber pipewire-pulse pipewire-alsa
sh -c "$(curl -sS https://raw.githubusercontent.com/Vendicated/VencordInstaller/main/install.sh)"
cd ~; mkdir Downloads; cd Downloads; sudo pacman -S --needed git base-devel; git clone https://aur.archlinux.org/yay-bin.git; cd yay-bin; makepkg -si
cd ~/Downloads; git clone https://github.com/Gustash/hyprshot.git hyprshot; sudo mv hyprshot/hyprshot /usr/local/bin; rm -r hyprshot
```
