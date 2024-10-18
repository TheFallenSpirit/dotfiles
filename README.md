# Hyprland Config (dotfiles)
My personal Hyprland config using Rofi, AGS, SDDM, and a few other utilities.

## Installation:

### Required Dependencies:
The following dependencies are required for my config to work, please make sure they are all installed and added to path.
- [Hyprland](https://hyprland.org): The star of the show, Hyprland itself.
- [SDDM](https://github.com/sddm/sddm): A simple and modern display manager.
- [Rofi](https://github.com/lbonn/rofi): A very useful application launcher, and dmenu replacement.
- [AGS](https://aylur.github.io/ags-docs/): Aylur's GTK Shell, an extremely customisable GTK shell library for building Wayland widgets.

Use the following commands to install all dependencies and sub-dependencies for my config:

**These commands are for Arch and Arch based linux distros!**
```bash
sudo pacman -S nano kitty hyprland nautilus pipewire wireplumber pipewire-pulse pipewire-alsa
sudo pacman -S discord firefox adw-gtk-theme flatpak slurp grim wl-clipboard noto-fonts noto-fonts-cjk
sudo pacman -S xdg-desktop-portal-gtk sddm gnome-bluetooth-3.0 libdbusmenu-gtk3 sassc noto-fonts-emoji rofi-wayland

# Installing "Yay" AUR Helper
cd ~ && mkdir Downloads && cd Downloads && sudo pacman -S --needed git base-devel && git clone https://aur.archlinux.org/yay-bin.git && cd yay-bin && makepkg -si

yay -S hyprshot aylurs-gtk-shell
sudo systemctl enable --now sddm
systemctl --user enable --now pipewire wireplumber pipewire-pulse pipewire-alsa
```

### Optional Dependencies:
The following dependencies are optional, and are not required for my config to work. If you install them please make sure they are added to path.
- [Hyprshot](https://github.com/Gustash/hyprshot): A simple and functional utility for taking screenshots.
- [Bluetuith](https://github.com/darkhz/bluetuith): A simple and functional CLI-based utility for managing and connecting to bluetooth devices.

### Downloading & Moving Files:
You'll need to move all the folders from this repository to your home ".config" directory.
<br/>
You can use the commands below to do this automatically.
These commands will setup symlinks so you can update your configs from my git repo automatically.

**Make sure to store these files in a directory where they won't get deleted!**

```bash
git clone https://github.com/TheFallenSpirit/dotfiles
mkdir ~/.config/hypr && ln -s $PWD/dotfiles/ags/* ~/.config/ags
mkdir ~/.config/hypr && ln -s $PWD/dotfiles/hypr/* ~/.config/hypr
mkdir -p ~/.config/rofi/themes && ln -s $PWD/dotfiles/rofi/themes/* ~/.config/rofi/themes
sudo mkdir -p /usr/share/sddm/themes/fallen && sudo ln -s $PWD/dotfiles/sddm/* /usr/share/sddm/themes/fallen

cd ~/Downloads
git clone https://github.com/adi1090x/rofi
cp -r rofi/files/colors ~/.config/rofi/colors
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

Force Reload AGS: ALT + SHIFT + R
Take Screenshot (Hyprshot): ALT + SHIFT + S
```

## Issues & Suggestions:
If you want to report a problem or have a suggestion, feel free to open an issue on this repository. Pull requests are also welcome for bug fixes or improvements.

Personal Installation Scripts (Use at own risk):
```bash
sh -c "$(curl -sS https://raw.githubusercontent.com/Vendicated/VencordInstaller/main/install.sh)"
mkdir -p ~/.config/wireplumber/wireplumber.conf.d; ln -s /home/fallen/Projects/dotfiles/wireplumber/* /home/fallen/.config/wireplumber/wireplumber.conf.d
gsettings set org.gnome.desktop.interface color-scheme 'prefer-dark'
gsettings set org.gnome.desktop.interface gtk-theme 'adw-gtk3-dark'
```
