import GLib from 'gi://GLib';
const audio = await Service.import('audio');
const hyprland = await Service.import('hyprland');
const systemTray = await Service.import('systemtray');

const TrayItem = (item) => Widget.Button({
    tooltipMarkup: item.bind('tooltip-markup'),
    child: Widget.Icon({ icon: item.bind('icon') }),
    onPrimaryClick: (_, event) => item.activate(event),
    onSecondaryClick: (_, event) => item.openMenu(event),
});

const LeftBox = () => {
    let weatherUrl = `https://api.openweathermap.org/data/3.0/onecall?units=metric&lat=${GLib.getenv('OPENWEATHER_LAT')}&lon=`;
    weatherUrl = weatherUrl + `${GLib.getenv('OPENWEATHER_LON')}&appid=${GLib.getenv('OPENWEATHER_KEY')}&exclude=minutely,hourly,daily`

    const Clock = Widget.Box({ spacing: 3, classNames: ['bar-item', 'clock'], children: [
        Widget.Icon({ vpack: 'center', icon: 'tabler-clock-symbolic' }),
        Widget.Label().poll(1000, self => {
            Utils.execAsync('date "+%H:%M"').then((time) => self.label = time);
            Utils.execAsync('date "+%a, %B %d, %Y"').then((date) => self.tooltipText = date);
        })
    ]});

    const Weather = Widget.Label({ className: 'bar-item' }).poll(1800000, self => {
        Utils.fetch(weatherUrl).then(res => res.json()).then(res => {
            self.label = `☀️ ${Math.round(res.current.temp)} °C`
        }).catch(print);
    });

    const SystemStats = Widget.Box({ classNames: ['bar-item', 'system-stats'], children: [
        Widget.Box({ spacing: 2, className: 'cpu', children: [
            Widget.Icon({ icon: 'tabler-cpu-symbolic' }),
            Widget.Label().poll(3000, self => {
                Utils.execAsync(['bash', '-c', 'vmstat 1 2 | tail -1 | awk \'{printf "%.0f%", 100-$15}\'']).then((usage) => self.label = usage);
            })
        ] }),
        Widget.Box({ spacing: 2, className: 'ram', children: [
            Widget.Icon({ icon: 'tabler-database-symbolic' }),
            Widget.Label().poll(3000, self => {
                Utils.execAsync(['bash', '-c', 'free -m | awk \'/Mem:/ {printf "%.1f%", ($3/$2)*100}\'']).then((usage) => self.label = usage);
                Utils.execAsync(
                    ['bash', '-c', 'free -m | awk \'/Mem:/ {printf "%.1f GiB / %.1f GiB\\n", $3/1024, $2/1024}\'']
                ).then((usage) => self.tooltipText = usage);
            })
        ] }),
        Widget.Box({ spacing: 1, className: 'temp', children: [
            Widget.Icon({ icon: 'tabler-temperature-symbolic' }),
            Widget.Label().poll(3000, self => {
                Utils.execAsync(['bash', '-c', 'sensors k10temp-pci-00c3 | awk \'/Tccd1:/ {printf "%.0f °C", $2}\'']).then((temp) => self.label = temp);
            })
        ] })
    ]});

    return Widget.Box({ hpack: 'start', spacing: 5, children: [Clock, Weather, SystemStats] });
};

const RightBox = () => {
    const openControls = () => {
        const window = App.windows.find((w) => w.name === 'controls');
        window.visible = !window.visible
    };

    const Volume = Widget.EventBox({
        onPrimaryClick: openControls,
        onScrollUp: () => audio['speaker'].volume = audio['speaker'].volume + 0.01,
        onScrollDown: () => audio['speaker'].volume = audio['speaker'].volume - 0.01,
        child: Widget.Box({ spacing: 3, className: 'bar-item', children: [
            Widget.Icon({ className: 'volume-icon' }).hook(audio['speaker'], self => {
                if (audio['speaker'].is_muted) return self.icon = 'tabler-volume-mute-symbolic';
                else self.icon = `tabler-volume-high-symbolic`;
            }),
            Widget.Label().hook(audio['speaker'], self => self.label = `${Math.floor(audio['speaker'].volume * 100)}%`)
        ]
    })});

    const Controls = Widget.EventBox({ onPrimaryClick: openControls, child: Widget.Box({
        classNames: ['bar-item', 'controls'], children: [
            Widget.Icon({ icon: 'tabler-bell-symbolic' }),
            Widget.Icon({ icon: 'tabler-shutdown-symbolic' }),
        ]
    })});

    const Tray = Widget.Box({ spacing: 2, classNames: ['bar-item', 'tray'], children: systemTray.bind('items').as(item => item.map(TrayItem)) });

    return Widget.Box({ spacing: 5, hpack: 'end', children: [Tray, Volume, Controls] });
};

const CenterBox = () => Widget.Label({
    wrap: true, hpack: 'center', truncate: 'middle', maxWidthChars: 60,
    className: 'bar-item', label: hyprland.active.client.bind('title')
});

export default () => Widget.CenterBox({ expand: true, endWidget: RightBox(), startWidget: LeftBox(), centerWidget: CenterBox() });
