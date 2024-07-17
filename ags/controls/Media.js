const mpris = await Service.import('mpris');
const players = mpris.bind('players');

const lengthToStr = (length) => {
    if (length < 1) return '0:00';
    const sec = Math.floor(length % 60);
    return `${Math.floor(length / 60)}:${sec < 10 ? '0' : ''}${sec}`
};

const Player = (player) => {
    if (player.identity === null) player = null;

    const Artwork = Widget.Box({
        vpack: 'start', className: 'media-artwork',
        css: player?.bind('cover-path').transform(p => `background-image: url('${p}');`) || ``,
    });

    const Title = Widget.Label({
        wrap: true, hpack: 'start',
        cursor: 'text', truncate: 'end',
        className: 'media-title', label: player?.bind('track-title') || 'No Media Playing',
    });

    const Artists = Widget.Label({
        wrap: true, hpack: 'start',
        cursor: 'text', truncate: 'end', className: 'media-artists',
        label: player?.bind('track-artists').transform(a => a.join(', ')) || 'No Media Playing',
    });

    const Next = Widget.Button({
        className: 'media-button',
        onClicked: () => player.next(),
        child: Widget.Icon({ icon: 'tabler-next' })
    });

    const Previous = Widget.Button({
        className: 'media-button',
        onClicked: () => player.previous(),
        child: Widget.Icon({ icon: 'tabler-previous' })
    });

    const Shuffle = Widget.Button({
        onClicked: () => player.shuffle(),
        child: Widget.Icon({ icon: 'tabler-shuffle' }),
        className: player?.bind('shuffle-status').transform(s => s ? 'media-btn-active' : 'media-button') || 'media-button'
    });

    const Repeat = Widget.Button({
        onClicked: () => player.loop(),
        className: player?.bind('loop-status').transform(s => ![null, 'None'].includes(s) ? 'media-btn-active' : 'media-button') || 'media-button',
        child: Widget.Icon({ icon: player?.bind('loop-status').transform(s => s === 'Track' ? 'tabler-repeat-one' : 'tabler-repeat') || 'tabler-repeat' }),
    });
    
    const Toggle = Widget.Button({
        className: 'media-btn-primary',
        onClicked: () => player.playPause(),
        child: Widget.Icon({ icon: player?.bind('play-back-status').transform(p => p === 'Playing' ? 'tabler-pause' : 'tabler-play') || 'tabler-play' }),
    });

    let Position = Widget.Label({ label: '0:00', hpack: 'start', className: 'media-position' })
    if (player !== null) Position = Widget.Label({ hpack: 'start', className: 'media-position' }).hook(player, self => {
        self.label = lengthToStr(player?.position || 0);
        self.poll(1000, () => self.label = lengthToStr(player?.position || 0));
    });

    const Controls = Widget.CenterBox({
        spacing: 6, vpack: 'end', expand: true, className: 'media-controls', startWidget: Position,
        endWidget: Widget.Label({ hpack: 'end', className: 'media-position', label: player?.bind('length').transform(lengthToStr) || '0:00' }),
        centerWidget: Widget.Box({ spacing: 4, children: [Shuffle, Previous, Toggle, Next, Repeat] })
    });

    const Media = Widget.CenterBox({
        vertical: true,
        endWidget: Controls,
        className: 'media-primary',
        startWidget: Widget.Box({ vertical: true, children: [Title, Artists] }),
    });

    return Widget.Box({ children: [Artwork, Media] });
};

export default () => Widget.Box({ className: 'media', children: players.transform(p => p.slice(0, 1).map((p) => Player(p))) });
