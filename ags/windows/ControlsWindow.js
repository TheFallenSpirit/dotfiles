import Audio from '../controls/Audio.js';
import Media from '../controls/Media.js';
import Power from '../controls/Power.js';
import QuickSettings from '../controls/QuickSettings.js';
import NotificationContainer from '../structures/NotificationContainer.js';

const PowerContainer = () => Widget.Box({ className: 'container', children: [Power()] });
const MediaContainer = () => Widget.Box({ className: 'container', children: [Media()] });
const QuickSettingsContainer = () => Widget.Box({ spacing: 8, vertical: true, className: 'container', children: [QuickSettings(), Audio()] });

export default () => Widget.Box({ vertical: true, children: [QuickSettingsContainer(), MediaContainer(), PowerContainer(), NotificationContainer()] });
