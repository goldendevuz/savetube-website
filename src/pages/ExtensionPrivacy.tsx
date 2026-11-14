import { LegalPage, type LegalSection } from '@/components/layout/LegalPage'

const link = (href: string, label: string) => (
    <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
)

const sections: LegalSection[] = [
    {
        id: 'what-it-does',
        title: 'What the extension does',
        content: (
            <p>The SaveTube browser extension adds buttons to YouTube and YouTube Music pages (under the video, on thumbnails and in the right-click menu). When you press one, it hands that video to the SaveTube app on your own computer, so you can watch or download it there.</p>
        ),
    },
    {
        id: 'what-it-handles',
        title: 'What it handles',
        content: (
            <>
                <p>When you press a button, the extension reads the page you are on to find the <strong>video ID</strong>, and, if you chose to, the <strong>time</strong> you were at and the <strong>playlist ID</strong>. It sends only these, with the action you picked (watch, download, music).</p>
                <p>It does not read or send your browsing history, your YouTube account, cookies, passwords, page contents or anything from other sites.</p>
            </>
        ),
    },
    {
        id: 'where-it-goes',
        title: 'Where the data goes',
        content: (
            <>
                <p>The video ID, time and playlist ID go only to the SaveTube app running <strong>on the same computer</strong>, either as a request to <code>127.0.0.1</code> (your own machine, never the internet) or through a <code>savetube://</code> link that your system opens in the app.</p>
                <p>The extension has no server of its own and the developer receives nothing. It contains no analytics, no advertising, no tracking and no remote code, and it never sells or shares data.</p>
            </>
        ),
    },
    {
        id: 'what-is-stored',
        title: 'What is stored',
        content: (
            <p>The extension stores only its own settings (for example whether thumbnail buttons are shown, and the local port numbers) in your browser's extension storage. If you use your browser's sync, the browser may copy these settings between your devices; that is done by your browser vendor under its own policy, not by SaveTube.</p>
        ),
    },
    {
        id: 'permissions',
        title: 'Why it asks for permissions',
        content: (
            <ul>
                <li><strong>Access to youtube.com, m.youtube.com and music.youtube.com</strong>: to show the buttons and read the video ID from the page.</li>
                <li><strong>Context menus</strong>: to add "Watch in SaveTube" to the right-click menu.</li>
                <li><strong>Storage</strong>: to keep the extension's settings.</li>
                <li><strong>Access to 127.0.0.1 / localhost (optional)</strong>: asked for only if you turn on silent mode, so the extension can reach the SaveTube app on your computer without a prompt.</li>
            </ul>
        ),
    },
    {
        id: 'open-source',
        title: 'Open source',
        content: (
            <p>The extension is open source under GPL-3.0, so you can check all of this: {link('https://github.com/goldendevuz/savetube-extension', 'github.com/goldendevuz/savetube-extension')}. It is a fork of the Flow extension by A-EDev.</p>
        ),
    },
    {
        id: 'changes',
        title: 'Changes and contact',
        content: (
            <p>If this policy changes, the new version and its date will be posted here. Questions or concerns: open an issue on {link('https://github.com/goldendevuz/savetube-extension/issues', 'GitHub')}.</p>
        ),
    },
]

export function ExtensionPrivacy() {
    return (
        <LegalPage
            kicker="Privacy"
            title="Extension privacy,"
            accent="in plain words."
            updated="14 November 2026"
            intro={<p>The SaveTube browser extension sends a video to the SaveTube app on your computer, and nothing else leaves your browser.</p>}
            sections={sections}
        />
    )
}

export default ExtensionPrivacy
