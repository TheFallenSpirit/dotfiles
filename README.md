# Hyprland Config (dotfiles)
My personal Hyprland config with Noctalia.

## Issues & Suggestions
If you want to report a problem or have a suggestion, feel free to open an issue on this repository. Pull requests are also welcome for bug fixes or improvements.

### Install Essentials (Arch/CachyOS)
```fish
sudo pacman -S --needed git base-devel && git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
yay -S discord equicord-installer-bin kitty vicinae
systemctl --user enable vicinae --now
```
Crate shortcut "SUPER + SPACE" running `vicinae toggle`

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

### Essential Config (Arch/CachyOS)
Install and configure Gnome Keyring w/ Greetd. Add to bottom of respective sections in `/etc/pam.d/greetd`
```txt
auth        optional      pam_gnome_keyring.so
session     optional      pam_gnome_keyring.so      auto_start
```

Install custom screenshare picker (**Hyprland only**)
```fish
yay -S hyprland-preview-share-picker-git
```


### ASUS Laptop Exclusive Stuff
```fish
yay -S asusctl rog-control-center vulkan-radeon nvidia-utils vulkan-icd-loader
sudo systemctl disable --now power-profiles-daemon.service
sudo systemctl mask power-profiles-daemon.service
sudo systemctl enable nvidia-suspend.service nvidia-hibernate.service nvidia-resume.service
sudo systemctl enable --now nvidia-powerd
```


### Secure Boot (Arch/CachyOS)
```fish
sudo sbctl status
sudo sbctl create-keys
sudo sbctl enroll-keys --microsoft
sudo sbctl status
```

> [!IMPORTANT]
> If setup mode is enabled, reboot before continuing.

Update `/etc/default/limine` (as root) with:
```txt
ENABLE_ENROLL_LIMINE_CONFIG=yes
```

Run the following command:
```fish
sudo b2sum /boot/limine-splash.png
```

Update `/boot/limine/conf`  (as root) with:
```txt
wallpaper: boot():/limine-splash.png#<hash-here>
```

Run the following commands:
```fish
sudo limine-enroll-config
sudo limine-update
```

> [!IMPORTANT]
> Reboot after completion and re-enable secure boot if required.

### Setup Easy Anti Cheat v2 compatibility
```fish
yay -S cachyos-settings
sudo eac-setup
```

### GNOME-specific tweaks
```fish
gsettings set org.gnome.shell always-show-log-out true
gsettings set org.gnome.mutter center-new-windows true
```

### LUKS Encryption Stuff
Enroll TPM2 with a PIN instead of full passphrase
```fish
sudo systemd-cryptenroll <active-partition-path> --tpm2-device=auto --tpm2-pcrs=0+7 --tpm2-with-pin=yes
```

Re-enroll TPM2 pin after firmware reset or update
```fish
sudo systemd-cryptenroll <active-partition-path> --wipe-slot=tpm2 --tpm2-device=auto --tpm2-pcrs=0+7 --tpm2-with-pin=yes
```
