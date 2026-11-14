import { LegalPage, type LegalSection } from '@/components/layout/LegalPage'

const link = (href: string, label: string) => (
    <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
)

const sections: LegalSection[] = [
    {
        id: 'windows',
        title: 'Windows',
        content: (
            <>
                <p>Download the <strong>SaveTube</strong> installer (<code>SaveTube_…_x64-setup.exe</code>) from {link('https://github.com/goldendevuz/flow-desktop/releases/latest', 'the latest release')} and run it.</p>
                <p>The installer is not code-signed yet, so Windows SmartScreen may say it doesn't recognise the app. Choose <strong>More info</strong>, then <strong>Run anyway</strong>. If Smart App Control blocks it, the app can't be installed on that PC until Smart App Control is turned off.</p>
                <p>New versions install over the old one and keep your data.</p>
            </>
        ),
    },
    {
        id: 'android',
        title: 'Android',
        content: (
            <>
                <p>Download the APK for your phone from {link('https://github.com/goldendevuz/savetube-android/releases/latest', 'the latest release')}. Most phones need <code>arm64-v8a</code>. Open the file and allow installs from your browser or file manager when Android asks.</p>
                <p>SaveTube installs next to the original Flow app and doesn't replace it. Every build is signed with the same key, so a new APK installs over the last one and keeps your data.</p>
            </>
        ),
    },
    {
        id: 'extension',
        title: 'Browser extension',
        content: (
            <>
                <p>The extension adds a "Watch in SaveTube" button to YouTube. It needs the SaveTube desktop app running or installed. Get the zip for your browser from {link('https://github.com/goldendevuz/savetube-extension/releases/latest', 'the latest release')}.</p>
                <p>Chrome, Edge, Brave: open <code>chrome://extensions</code>, turn on Developer mode, choose Load unpacked and pick the unzipped folder. Firefox: open <code>about:debugging</code>, choose This Firefox, then Load Temporary Add-on and pick <code>manifest.json</code>.</p>
            </>
        ),
    },
    {
        id: 'sync',
        title: 'Keeping devices in sync',
        content: (
            <p>Open <strong>Sync</strong> in the desktop app or the phone app. Linked devices keeps your history, likes, playlists, subscriptions and settings the same on every device, through a WebDAV folder you own. Everything is end-to-end encrypted.</p>
        ),
    },
    {
        id: 'cost',
        title: 'Cost',
        content: (
            <p>SaveTube is free and open source (GPL-3.0). There is no paid version.</p>
        ),
    },
]

export function Download() {
    return (
        <LegalPage
            kicker="Download"
            title="Get SaveTube"
            accent="on every device."
            updated="14 November 2026"
            intro={<p>SaveTube runs on Windows and Android, with a browser extension that sends YouTube videos to the desktop app.</p>}
            sections={sections}
        />
    )
}

export default Download
