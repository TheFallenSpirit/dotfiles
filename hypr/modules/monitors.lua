hl.monitor({
    mode     = "preferred",
    scale    = "auto",
    output   = "",
    position = "auto"
})

hl.monitor({
    output   = "DP-2",
    mode     = "2560x1440@165",
    position = "1080x285",
    scale    = 1,
    bitdepth = 10,
})

hl.monitor({
    output   = "HDMI-A-1",
    mode     = "1920x1080@100",
    position = "0x0",
    scale    = 1,
    transform = 1,
})

hl.monitor({
	output = "HDMI-A-2",
	mode = "3840x2160@120",
	scale = 2,
	supports_hdr = -1
})
