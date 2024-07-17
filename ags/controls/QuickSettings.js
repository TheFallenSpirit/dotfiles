const network = await Service.import('network');
const bluetooth = await Service.import('bluetooth');

const Network = () => Widget.Button({
    cursor: 'pointer',
    className: 'connection',
    onClicked: () => Utils.exec(`nmcli networking ${network.connectivity === 'none' ? 'on' : 'off'}`),

    child: Widget.Box({ spacing: 5, children: [
        Widget.Icon({ className: 'connection-icon' }).hook(network, self => {
            const primary = network.primary || 'wired';
            if (network.connectivity === 'none' || network[primary].internet === 'disconnected')
                self.icon = `tabler-${primary}-off`; else self.icon = `tabler-${primary}`;
        }),
        Widget.Label({ xalign: 0, truncate: 'end', maxWidthChars: 15, className: 'connection-label' }).hook(network, self => {
            const primary = network.primary || 'wired';
            if (network.connectivity === 'none' || network[primary].internet === 'disconnected') return self.label = 'Disconnected';
            if (network[primary].internet === 'connecting') return self.label = 'Connecting...';
            network.primary === 'wifi' ? self.label = network.wifi.ssid : self.label = 'Wired / Ethernet';
        })
    ]
})});

const Bluetooth = () => Widget.Button({
    cursor: 'pointer',
    className: 'connection',
    onPrimaryClick: () => bluetooth.enabled = !bluetooth.enabled,
    onSecondaryClick: () => Utils.exec('kitty -- bluetuith'),

    child: Widget.Box({ spacing: 5, children: [
        Widget.Icon({ className: 'connection-icon' }).hook(bluetooth, self => {
            self.icon = bluetooth.enabled ? 'tabler-bluetooth' : 'tabler-bluetooth-off';
            if (bluetooth.connected_devices[0]) self.icon = 'tabler-bluetooth-connected';
        }),
        Widget.Label({ xalign: 0, truncate: 'end', maxWidthChars: 15, className: 'connection-label' }).hook(bluetooth, self => {
            self.label = bluetooth.enabled ?  'Enabled' : 'Disabled';
            if (bluetooth.connected_devices[0]) self.label = bluetooth.connected_devices[0].name;
        })
    ]
})});

export default () => Widget.Box({ spacing: 8, className: 'connections', children: [Network(), Bluetooth()] });
