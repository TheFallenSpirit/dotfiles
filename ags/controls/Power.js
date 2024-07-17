const options = [
    { label: 'Power Off', icon: 'tabler-shutdown', cmd: 'systemctl poweroff' },
    { label: 'Reboot', icon: 'tabler-reboot', cmd: 'systemctl reboot' },
    { label: 'Logout', icon: 'tabler-logout', cmd: '' },
    { label: 'Sleep', icon: 'tabler-sleep', cmd: '' },
    { label: 'Lock', icon: 'tabler-lock', cmd: '' },
    { label: 'Firmware Settings', icon: 'tabler-server-cog', cmd: 'systemctl reboot --firmware-setup' }
];

const children = () => options.map((opt) => Widget.Button({
    hexpand: true, hpack: 'center', cursor: 'pointer', tooltipText: opt.label, className: 'power-control',
    onClicked: () => Utils.exec(opt.cmd), child: Widget.Icon({ icon: opt.icon })
}));

export default () => Widget.Box({ className: 'power', children: children() });
