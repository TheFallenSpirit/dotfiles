---@module 'hl'


-- Applications

hl.bind(mod .. "B", hl.dsp.exec_cmd(launch .. browser))
hl.bind(mod .. "T", hl.dsp.exec_cmd(launch .. terminal))
hl.bind(mod .. "C", hl.dsp.exec_cmd(launch .. calculator))
hl.bind(mod .. "E", hl.dsp.exec_cmd(launch .. fileManager))
hl.bind("SUPER + SHIFT + M", hl.dsp.exec_cmd("voxtype record toggle"))


-- Launcher & Vicinae Keybinds

hl.bind(mod .. "SPACE", hl.dsp.exec_cmd("vicinae toggle"))
hl.bind(mod .. "H", hl.dsp.exec_cmd("vicinae vicinae://launch/clipboard/history"))
hl.bind(mod .. "PERIOD", hl.dsp.exec_cmd("vicinae vicinae://launch/core/search-emojis"))


-- Noctalia / Shell Controls

hl.bind(mod .. "X", hl.dsp.exec_cmd(noct .. "panel-toggle control-center"))
hl.bind(mod .. "V", hl.dsp.exec_cmd(noct .. "panel-toggle control-center audio"))
hl.bind(mod .. "P", hl.dsp.exec_cmd(noct .. "panel-toggle session"))
hl.bind(mod .. "COMMA", hl.dsp.exec_cmd(noct .. "settings-open"))
hl.bind("ALT + TAB", hl.dsp.exec_cmd(noct .. "window-switcher hold"))


-- Window Management

hl.bind(mod .. "Q", hl.dsp.window.close())
hl.bind(mod .. "F", hl.dsp.window.float())
hl.bind(mod .. "J", hl.dsp.layout("togglesplit"))
hl.bind(mod .. "F", hl.dsp.window.fullscreen())

hl.bind(mod .. "mouse:272", hl.dsp.window.drag())
hl.bind(mod .. "mouse:273", hl.dsp.window.resize())

hl.bind(mod .. "UP", hl.dsp.focus({ direction = "up" }))
hl.bind(mod .. "DOWN", hl.dsp.focus({ direction = "down" }))
hl.bind(mod .. "LEFT", hl.dsp.focus({ direction = "left" }))
hl.bind(mod .. "RIGHT", hl.dsp.focus({ direction = "right" }))

hl.bind(mod .. "SHIFT + UP", hl.dsp.window.move({ direction = "up" }))
hl.bind(mod .. "SHIFT + DOWN", hl.dsp.window.move({ direction = "down" }))
hl.bind(mod .. "SHIFT + LEFT", hl.dsp.window.move({ direction = "left" }))
hl.bind(mod .. "SHIFT + RIGHT", hl.dsp.window.move({ direction = "right" }))


-- Workspace Management

for i = 1, 10 do
	local key = i % 10
	hl.bind(mod .. key, hl.dsp.focus({ workspace = i }))
	hl.bind(mod .. "SHIFT + " .. key, hl.dsp.window.move({ workspace = i }))
end


-- Screenshots

hl.bind("ALT + SHIFT + S", hl.dsp.exec_cmd(noct .. "screenshot-annotate"))
-- hl.bind("ALT + SHIFT + S", hl.dsp.exec_cmd('grim -g "$(slurp)" - | swappy -f -'))
-- hl.bind("ALT + SHIFT + A", hl.dsp.exec_cmd('grim -o "$(hyprctl monitors -j | jq -r \'.[] | select(.focused == true).name\')" - | swappy -f -'))


-- System Controls

hl.bind("XF86AudioNext", hl.dsp.exec_cmd(noct .. "media next"), { locked = true })
hl.bind("XF86AudioPrev", hl.dsp.exec_cmd(noct .. "media previous"), { locked = true })
hl.bind("XF86AudioPlay", hl.dsp.exec_cmd(noct .. "media toggle"), { locked = true })

hl.bind("XF86AudioMute", hl.dsp.exec_cmd(noct .. "volume-mute"), { locked = true })
hl.bind("XF86AudioRaiseVolume", hl.dsp.exec_cmd(noct .. "volume-up 2"), { locked = true })
hl.bind("XF86AudioLowerVolume", hl.dsp.exec_cmd(noct .. "volume-down 2"), { locked = true })

hl.bind("XF86MonBrightnessUp", hl.dsp.exec_cmd(noct .. "brightness-up"), { locked = true })
hl.bind("XF86MonBrightnessDown", hl.dsp.exec_cmd(noct .. "brightness-down"), { locked = true })

