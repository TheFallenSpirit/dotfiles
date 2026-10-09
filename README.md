# Hyprland Config (dotfiles)
My personal Hyprland config with Noctalia.

## Issues & Suggestions
If you want to report a problem or have a suggestion, feel free to open an issue on this repository. Pull requests are also welcome for bug fixes or improvements.

### Personal Installation Scripts

Install Yay
```fish
sudo pacman -S --needed git base-devel && git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

Install Portals
```fish
sudo pacman -S --needed xdg-desktop-portal-gtk xdg-desktop-portal-gnome xdg-desktop-portal-hyprland
```

Install ADW GTK3 Theme
```fish
sudo pacman -S adw-gtk-theme
gsettings set org.gnome.desktop.interface color-scheme 'prefer-dark'
gsettings set org.gnome.desktop.interface gtk-theme 'adw-gtk3-dark'

flatpak install org.gtk.Gtk3theme.adw-gtk3 org.gtk.Gtk3theme.adw-gtk3-dark
sudo flatpak override --filesystem=xdg-data/themes
sudo flatpak mask org.gtk.Gtk3theme.adw-gtk3
sudo flatpak mask org.gtk.Gtk3theme.adw-gtk3-dark
```

Install and configure Gnome Keyring w/ Greetd. Add to bottom of respective sections in `/etc/pam.d/greetd`
```txt
auth        optional      pam_gnome_keyring.so
session     optional      pam_gnome_keyring.so      auto_start
```
