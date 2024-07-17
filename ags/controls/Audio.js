const audio = await Service.import('audio');

const Volume = (type) => {
    const Slider = Widget.Slider({
        hexpand: true,
        drawValue: false,
        className: 'audio-slider',
        value: audio[type].bind('volume'),
        onChange: ({ value }) => audio[type].volume = value
    });

    const Label = Widget.Button({
        className: 'audio-label',
        onClicked: () => audio[type].is_muted = !audio[type].is_muted,

        child: Widget.Icon().hook(audio[type], self => {
            const volume = audio[type].volume * 100;
            self.tooltipText = `Volume ${Math.floor(volume)}%`;

            if (type === 'speaker') {
                if (audio[type].is_muted) return self.icon = 'tabler-volume-mute';
                self.icon = `tabler-volume-${[[51, 'high'], [1, 'low'], [0, 'mute']].find(([t]) => t <= volume)?.[1]}`;
            } else self.icon = audio[type].is_muted ? 'tabler-microphone-mute' : 'tabler-microphone';
        })
    });

    return Widget.Box({ children: [Label, Slider], className: 'audio-control' });
};

export default () => Widget.Box({ vertical: true, className: 'audio', children: [Volume('speaker'), Volume('microphone')] });
