#!/usr/bin/env bash

## Made by Liam Labell (thefallenspirit@outlook.com)

# Options
shutdown=''
reboot=''
lock=''
suspend=''
logout=''
firmware=''

# Calculate offset for popup power menu
x_location=$(( $(wlr-randr | grep 'current' | grep -oP '\b\d+(?=x)') - 390))

# Fetch the system uptime and set the menu icon
uptime=$(uptime -p | sed -e 's/up //g')
menu_icon="-theme-str 'textbox-prompt-colon { str: \"\"; }'"

# Check the launch arguments for fullscreen to determine mode
rofi_options="-theme controls.rasi -location 1 -xoffset $x_location -yoffset 33 -p \"Uptime: $uptime\""
if [ "$1" == "--fullscreen" ]; then rofi_options="-theme power/fullscreen.rasi -p \"Goodbye ${USER}\" -mesg \"Uptime: $uptime\""; fi

# Run Rofi power menu in fullscreen or dropdown mode
chosen="$(echo -e "$lock\n$suspend\n$logout\n$reboot\n$shutdown\n$firmware" | eval rofi -dmenu $rofi_options $menu_icon)"

# Execute based on chosen value
case ${chosen} in
    $shutdown) systemctl poweroff;;
    $reboot) systemctl reboot;;
    $lock) echo "to do";;
    $suspend) systemctl suspend;;
    $logout) hyprctl dispatch exit;;
esac
