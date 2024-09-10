import ControlsWindow from './windows/ControlsWindow.js';
import NotificationsWindow from './windows/NotificationsWindow.js';
import TopBarWindow from './windows/TopBarWindow.js';

const css = `/tmp/ags-styles.css`;
Utils.exec(`sassc ${App.configDir}/styles.scss ${css}`);

App.config({
    style: css,
    icons: './icons',
    windows: () => [
        Widget.Window({
            name: 'bar', margins: [5], visible: true, child: TopBarWindow(), monitor: 0,
            className: 'window', exclusivity: 'exclusive', anchor: ['top', 'left', 'right']
        }),
        Widget.Window({
            margins: [10], visible: false, name: 'controls', className: 'window',
            child: ControlsWindow(), anchor: ['top', 'right'],
        }),
        // Widget.Window({
            // margins: [10],
            // className: 'window',
            // name: 'notifications',
            // anchor: ['top', 'right'],
            // child: NotificationsWindow(),
        // }).hook(App, self => self.visible = !App.windows.find((w) => w.name === 'controls').visible)
    ]
});

// Utils.notify('Test Notification', 'This is an example test notification with the tabler power icon.', 'tabler-power-symbolic')
