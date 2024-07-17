const notifications = await Service.import("notifications");
import Notification from './Notification.js';

export default () => {
    const bind = notifications.bind('notifications');
    const notifs = bind.transform((n) => n.map(Notification));

    return Widget.Box({
        expand: true, vertical: true, children: notifs, spacing: 8,
        className: 'notifications', visible: bind.transform(n => n.length > 0)
    });
};
