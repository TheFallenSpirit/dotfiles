const notifications = await Service.import("notifications");
import Notification from '../structures/Notification.js';

notifications.popupTimeout = 6000;
export default () => Widget.Box({ children: notifications.bind('popups').transform((n) => n.slice(0, 1).map(Notification)) });
