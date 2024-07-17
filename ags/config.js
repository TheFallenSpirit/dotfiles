import Audio from './controls/Audio.js';
import Media from './controls/Media.js';
import Power from './controls/Power.js';
import QuickSettings from './controls/QuickSettings.js';
import NotificationPopup from './windows/NotificationPopup.js';
import NotificationContainer from './structures/NotificationContainer.js';

const PowerContainer = () => Widget.Box({ className: 'container', children: [Power()] });
const MediaContainer = () => Widget.Box({ className: 'container', children: [Media()] });
const QuickSettingsContainer = () => Widget.Box({ spacing: 8, vertical: true, className: 'container', children: [QuickSettings(), Audio()] });

const css = `/tmp/ags-styles.css`;
Utils.exec(`sassc ${App.configDir}/styles.scss ${css}`);

App.config({
    style: css,
    icons: './icons',
    windows: () => [
        Widget.Window({
            margins: [10],
            visible: false,
            name: 'controls',
            className: 'controls',
            anchor: ['top', 'right'],
            child: Widget.Box({
                vertical: true,
                children: [QuickSettingsContainer(), MediaContainer(), PowerContainer(), NotificationContainer()]
            })
        }),
        Widget.Window({
            margins: [10],
            visible: true,
            name: 'notifications',
            anchor: ['top', 'right'],
            className: 'notifications',
            child: NotificationPopup()
        }).hook(App, self => {
            const controls = App.windows.find((w) => w.name === 'controls');
            self.visible = !controls.visible
        })
    ]
});
