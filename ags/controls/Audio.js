const audio = await Service.import('audio');

const Slider = (type) => Widget.Slider({
    hexpand: true, drawValue: false,
    className: 'slider', value: audio[type].bind('volume'),
    onChange: ({ value }) => audio[type].volume = value
});

const Microphone = () => {
    const Label = Widget.Button({
        onClicked: () => audio.microphone.is_muted = !audio.microphone.is_muted,
        child: Widget.Icon().hook(audio.microphone, self => {
            const volume = audio.microphone.volume * 100;
            self.tooltipText = `Microphone ${Math.floor(volume)}%`;
            self.toggleClassName('muted', audio.microphone.is_muted),
            self.icon = audio.microphone.is_muted ? 'tabler-microphone-mute-symbolic' : 'tabler-microphone-symbolic'
        })
    });

    return Widget.Box({ children: [Label, Slider('microphone')] })
};

const Speaker = () => {
    const dropdownVisible = Variable(false);
    const outputs = Utils.merge([audio.bind('speaker'), audio.bind('speakers')], (speaker, speakers) => speakers.filter((s) => s.id !== speaker.id));

    const DropdownButton = Widget.Button({
        className: 'dropdown-icon',
        onClicked: () => dropdownVisible.value = !dropdownVisible.value,
        child: Widget.Icon().hook(dropdownVisible, self => self.icon = dropdownVisible.value ? 'tabler-chevron-up' : 'tabler-chevron-down')
    });

    const Output = (speaker) => Widget.Button({
        className: 'output',
        onClicked: () => { audio.speaker = speaker; dropdownVisible.value = false; },
        child: Widget.Box({ spacing: 3, children: [
            Widget.Icon().hook(speaker, self => {
                self.icon = speaker.is_muted ? 'tabler-volume-mute-symbolic' : 'tabler-volume-high-symbolic';
                self.tooltipText = `Volume ${Math.floor(speaker.volume * 100)}%`;
            }),
            Widget.Label({ truncate: 'end', maxWidthChars: 36, label: speaker.description })
        ] 
    })});

    const Label = Widget.Button({
        onClicked: () => audio['speaker'].is_muted = !audio['speaker'].is_muted,
        child: Widget.Icon().hook(audio.speaker, self => {
            const volume = audio.speaker.volume * 100;
            self.tooltipText = `Volume ${Math.floor(volume)}%`;
            self.toggleClassName('muted', audio.speaker.is_muted);

            if (audio.speaker.is_muted) return self.icon = 'tabler-volume-mute-symbolic';
            self.icon = `tabler-volume-${[[51, 'high'], [1, 'low'], [0, 'mute']].find(([t]) => t <= volume)?.[1]}-symbolic`;
        })
    });

    const Dropdown = Widget.Revealer({
        revealChild: dropdownVisible.bind(),
        child: Widget.Box({ vertical: true, children: outputs.as((s) => s.map(Output)) })
    });

    return Widget.Box({ vertical: true, children: [ Widget.Box({ children: [Label, Slider('speaker'), DropdownButton] }), Dropdown ] });
};

export default () => Widget.Box({ vertical: true, className: 'audio', children: [Speaker(), Microphone()] });
