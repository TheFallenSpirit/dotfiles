const NotificationIcon = (notification) => {
    if (notification.image) return Widget.Box({
        css: `background-image: url('${notification.image}')`,
        vpack: 'start', classNames: ['notif-icon', 'notif-image']
    });

    let icon = 'tabler-bell';
    if (Utils.lookUpIcon(notification.app_icon)) icon = app_icon;
    if (notification.app_entry && Utils.lookUpIcon(notification.app_entry)) icon = app_entry;
    return Widget.Icon({ className: 'notif-icon', icon });
};

export default (notif) => {
    const Title = Widget.Label({
        vpack: 'start', hpack: 'start', hexpand: true, useMarkup: true, truncate: 'end',
        maxWidthChars: 30, label: notif.summary, className: 'notif-title'
    });

    const Close = Widget.Button({
        vpack: 'start', hpack: 'end', className: 'notif-close',
        onClicked: () => notif.close(), child: Widget.Icon({ icon: 'tabler-x' })
    });

    return Widget.EventBox({ attribute: { id: notif.id }, onPrimaryClick: () => notif.actions.length > 0 ? notif.invoke(notif.actions[0].id) : null,
        child: Widget.Box({ spacing: 10, vertical: true, attribute: { id: notif.id }, className: 'notification', children: [
            Widget.Box({ spacing: 6, children: [NotificationIcon(notif), Title, Close] }),
            Widget.Label({ wrap: true, expand: true, hpack: 'start', useMarkup: true, truncate: 'end', label: notif.body, className: 'notif-body' })
        ]})
    });
};
