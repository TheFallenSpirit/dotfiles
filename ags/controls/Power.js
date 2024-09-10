const options = [
    { label: 'Power Off', icon: 'shutdown', cmd: 'systemctl poweroff' },
    { label: 'Reboot', icon: 'reboot', cmd: 'systemctl reboot',  },
    // { label: 'Logout', icon: 'logout', cmd: '' },
    { label: 'Sleep', icon: 'sleep', cmd: '' },
    { label: 'Lock', icon: 'lock', cmd: '' },
    { label: 'UEFI Firmware Settings', icon: 'server-cog', cmd: 'systemctl reboot --firmware-setup' }
];

const children = () => options.map((opt) => Widget.Button({
    hexpand: true, hpack: 'center', cursor: 'pointer', tooltipText: opt.label, className: 'power-control',
    onClicked: () => Utils.exec(opt.cmd), child: Widget.Icon({ icon: `tabler-${opt.icon}-symbolic` })
}));

export default () => Widget.Box({ className: 'power', children: children() });
