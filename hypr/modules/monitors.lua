hl.monitor({
    mode     = "preferred",
    scale    = "auto",
    output   = "",
    position = "auto"
})

hl.monitor({
	cm            = "wide",
    mode          = "2560x1440@240",
    scale         = 1,
    output        = "DP-2",
    position      = "1080x285",
    bitdepth      = 10
})

hl.monitor({
    mode      = "1920x1080@100",
    scale     = 1,
    output    = "HDMI-A-1",
    position  = "0x0",
    transform = 1
})

hl.monitor({
	mode         = "3840x2160@120",
	scale        = 2,
	output       = "HDMI-A-2",
	supports_hdr = -1
})
