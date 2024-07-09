#!/usr/bin/env bash

## Author  : Aditya Shakya (adi1090x)
## Github  : @adi1090x

# Modified by Liam Labell (thefallenspirit@outlook.com)

# Get status, metadata, and define function to retrieve metadata
status=$(playerctl status)
metadata=$(playerctl metadata)
get_metadata() { echo "$metadata" | grep -m 1 "$1" | awk -F'  +' '{print $2}'; }

# Set menu prompt and message
if [ "$status" == 'No players found' ]; then
	prompt='Offline'
	mesg="No Active Players"
else
	prompt="$status"
	mesg="$(get_metadata 'title') - $(get_metadata 'artist') ($(get_metadata 'album')) [$(get_metadata 'duration')]"
fi

active=''
urgent=''

stop=''
next=''
repeat=''
shuffle=''
previous=''
if [ "$status" == 'Playing' ]; then toggle=''; else toggle=''; fi

# Set repeat status
if [ $(get_metadata 'repeat') == 'on' ]; then active="-a 4"; else urgent="-u 4"; fi

# Set shuffle status
if [ $(get_metadata 'shuffle') == 'true' ]; then [ -n "$active" ] && active+=',1' || active='-a 1';
else [ -n "$urgent" ] && urgent+=',1' || urgent='-u 1'; fi

# Determine x offset
x_offset=$(( $(wlr-randr | grep 'current' | grep -oP '\b\d+(?=x)') - 390))

# Launch Rofi MPRIS menu
chosen=$(
	echo -e "$previous\n$shuffle\n$toggle\n$stop\n$repeat\n$next" | rofi -dmenu -markup-rows -theme controls.rasi \
	-location 1 -yoffset 33 -xoffset $x_offset -p "$prompt" -mesg "$mesg" $active $urgent -theme-str 'textbox-prompt-colon { str: ""; }'
)

# Execute chosen option from menu
case ${chosen} in
	$stop) playerctl stop;;
	$next) playerctl next;;
    $toggle) playerctl play-pause;;
	$repeat) playerctl loop Track;;
	$previous) playerctl previous;;
	$shuffle) playerctl shuffle Toggle;;
esac
