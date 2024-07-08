#!/usr/bin/env bash

## Author : Aditya Shakya (adi1090x)
## Github : @adi1090x

## Modified by Liam Labell (thefallenspirit@outlook.com)

# Options
shutdown=''
reboot=''
lock=''
suspend=''
logout=''

# Check launch arguments for display mode, fullscreen or dropdown
rofi_options="-theme power/dropdown.rasi -location 1 -xoffset $(( $(hyprctl cursorpos -j | jq .x) - 30 )) -yoffset 33"
if [ "$1" == "--fullscreen" ]; then rofi_options="-theme power/fullscreen.rasi -p \"Goodbye ${USER}\" -mesg \"Uptime: $(uptime -p | sed -e 's/up //g')\""; fi

# Run Rofi power menu in fullscreen or dropdown mode
chosen="$(echo -e "$lock\n$suspend\n$logout\n$reboot\n$shutdown" | eval rofi -dmenu $rofi_options)"

# Execute based on chosen value
case ${chosen} in
    $shutdown) systemctl poweroff;;
    $reboot) systemctl reboot;;
    $lock) echo "to do";;
    $suspend) systemctl suspend;;
    $logout) hyprctl dispatch exit;;
esac
