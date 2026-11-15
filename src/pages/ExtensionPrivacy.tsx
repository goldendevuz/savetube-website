import { LegalPage, type LegalSection } from '@/components/layout/LegalPage'
import { t } from '@/i18n'
import { Rich } from '@/components/ui/Rich'

const sections: LegalSection[] = [
    {
        id: 'what-it-does',
        title: t("What the extension does"),
        content: (
            <p>{t("The SaveTube browser extension adds buttons to YouTube and YouTube Music pages (under the video, on thumbnails and in the right-click menu). When you press one, it hands that video to the SaveTube app on your own computer, so you can watch or download it there.")}</p>
        ),
    },
    {
        id: 'what-it-handles',
        title: t("What it handles"),
        content: (
            <>
                <p><Rich text={t("When you press a button, the extension reads the page you are on to find the <b>video ID</b>, and, if you chose to, the <b>time</b> you were at and the <b>playlist ID</b>. It sends only these, with the action you picked (watch, download, music).")} /></p>
                <p>{t("It does not read or send your browsing history, your YouTube account, cookies, passwords, page contents or anything from other sites.")}</p>
            </>
        ),
    },
    {
        id: 'where-it-goes',
        title: t("Where the data goes"),
        content: (
            <>
                <p><Rich text={t("The video ID, time and playlist ID go only to the SaveTube app running <b>on the same computer</b>, either as a request to <c>127.0.0.1</c> (your own machine, never the internet) or through a <c>savetube://</c> link that your system opens in the app.")} /></p>
                <p>{t("The extension has no server of its own and the developer receives nothing. It contains no analytics, no advertising, no tracking and no remote code, and it never sells or shares data.")}</p>
            </>
        ),
    },
    {
        id: 'what-is-stored',
        title: t("What is stored"),
        content: (
            <p>{t("The extension stores only its own settings (for example whether thumbnail buttons are shown, and the local port numbers) in your browser's extension storage. If you use your browser's sync, the browser may copy these settings between your devices; that is done by your browser vendor under its own policy, not by SaveTube.")}</p>
        ),
    },
    {
        id: 'permissions',
        title: t("Why it asks for permissions"),
        content: (
            <ul>
                <li><Rich text={t("<b>Access to youtube.com, m.youtube.com and music.youtube.com</b>: to show the buttons and read the video ID from the page.")} /></li>
                <li><Rich text={t("<b>Context menus</b>: to add \"Watch in SaveTube\" to the right-click menu.")} /></li>
                <li><Rich text={t("<b>Storage</b>: to keep the extension's settings.")} /></li>
                <li><Rich text={t("<b>Access to 127.0.0.1 / localhost (optional)</b>: asked for only if you turn on silent mode, so the extension can reach the SaveTube app on your computer without a prompt.")} /></li>
            </ul>
        ),
    },
    {
        id: 'open-source',
        title: t("Open source"),
        content: (
            <p><Rich text={t("The extension is open source under GPL-3.0, so you can check all of this: <l0>github.com/goldendevuz/savetube-extension</l0>. It is a fork of the Flow extension by A-EDev.")} links={['https://github.com/goldendevuz/savetube-extension']} /></p>
        ),
    },
    {
        id: 'changes',
        title: t("Changes and contact"),
        content: (
            <p><Rich text={t("If this policy changes, the new version and its date will be posted here. Questions or concerns: open an issue on <l0>GitHub</l0>.")} links={['https://github.com/goldendevuz/savetube-extension/issues']} /></p>
        ),
    },
]

export function ExtensionPrivacy() {
    return (
        <LegalPage
            kicker="Privacy"
            title={t("Extension privacy,")}
            accent="in plain words."
            updated="14 November 2026"
            intro={<p>{t("The SaveTube browser extension sends a video to the SaveTube app on your computer, and nothing else leaves your browser.")}</p>}
            sections={sections}
        />
    )
}

export default ExtensionPrivacy
