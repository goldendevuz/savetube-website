import { LegalPage, type LegalSection } from '@/components/layout/LegalPage'
import { t } from '@/i18n'
import { Rich } from '@/components/ui/Rich'

const services = [
    {
        name: t("YouTube and YouTube Music"),
        gets: t("Your requests: searches, video and channel IDs, search phrases built from your interests, and your subscribed channel IDs to fetch new uploads."),
        when: t("Whenever you browse or play, and in the background if new-video alerts are on."),
    },
    {
        name: t("SponsorBlock"),
        gets: t("The ID of the video you're watching, as is. It isn't hashed."),
        when: t("When a video plays, if SponsorBlock is on. You can turn it off in the player settings."),
    },
    {
        name: t("DeArrow"),
        gets: t("The IDs of videos being shown, to fetch community titles and thumbnails."),
        when: t("When videos are listed, if DeArrow is on. You can turn it off in the player settings."),
    },
    {
        name: t("Return YouTube Dislike"),
        gets: t("The ID of the video you're watching."),
        when: t("When a video's page opens."),
    },
    {
        name: t("Lyrics providers"),
        gets: t("The song's title and artist. Providers include LRCLIB, KuGou, Paxsenix and SimpMusic."),
        when: t("Only when you open lyrics."),
    },
    {
        name: t("Shazam"),
        gets: t("An audio fingerprint of what the microphone hears."),
        when: t("Only while you use song recognition."),
    },
    {
        name: t("PipePipe decoder"),
        gets: t("Data from YouTube's video player that's needed to play videos. Nothing about you."),
        when: t("When playback needs it."),
    },
    {
        name: t("Discord"),
        gets: t("Your Discord login, and the title of what you're playing."),
        when: t("Only if you connect Discord Rich Presence. GitHub build only."),
    },
    {
        name: t("GitHub"),
        gets: t("A check for the latest release."),
        when: t("When SaveTube checks for updates. GitHub build only."),
    },
    {
        name: t("Your TV or speaker"),
        gets: t("What you cast. Chromecast uses Google's Cast service on your phone; DLNA stays on your local network."),
        when: t("Only when you cast."),
    },
]

const permissions = [
    { name: t("Microphone"), why: t("Song recognition.") },
    { name: t("Camera"), why: t("Scanning the QR code that pairs two devices for sync.") },
    { name: t("Notifications"), why: t("Playback controls, download progress and new-video alerts.") },
    { name: t("Wi-Fi and local network"), why: t("Syncing between your devices and casting over DLNA.") },
    { name: t("Storage, music and video"), why: t("Saving downloads and playing your local media library.") },
    { name: t("Display over other apps"), why: t("The floating mini player.") },
    { name: t("Ignore battery optimization"), why: t("Keeping background playback and downloads running.") },
]

function Rows({ rows }: { rows: { title: string; body: React.ReactNode; note?: string }[] }) {
    return (
        <div className="rounded-2xl border border-border-subtle bg-bg-card divide-y divide-border-subtle">
            {rows.map(row => (
                <div key={row.title} className="grid gap-1 px-5 py-4 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6">
                    <p className="font-display text-base font-semibold text-text-primary">{row.title}</p>
                    <div className="text-[15px]">
                        <p>{row.body}</p>
                        {row.note && <p className="mt-1.5 text-[13px] text-text-muted">{row.note}</p>}
                    </div>
                </div>
            ))}
        </div>
    )
}

const sections: LegalSection[] = [
    {
        id: 'on-your-device',
        title: t("On your device"),
        content: (
            <>
                <p>{t("SaveTube stores your watch and search history, subscriptions, playlists, downloads, settings, and your SaveTube Neuro video and music profiles on your phone.")}</p>
                <ul>
                    <li><Rich text={t("<b>Export it</b> from Settings, or schedule automatic backups to a folder you choose.")} /></li>
                    <li><Rich text={t("<b>Sync it</b> between your own devices over local Wi-Fi, after pairing them with a QR code and matching codes. It doesn't pass through any server.")} /></li>
                    <li><Rich text={t("<b>Delete it</b> by resetting your profiles in Settings › Your taste, clearing the app's data in Android settings, or uninstalling SaveTube.")} /></li>
                </ul>
            </>
        ),
    },
    {
        id: 'what-the-app-sends',
        title: t("What the app sends, and to whom"),
        content: (
            <>
                <p>{t("To show you videos and music, SaveTube talks directly to these services. Every request comes from your own IP address. SaveTube has no servers of its own and doesn't route anything through us, so we never see it. Each service handles your requests under its own privacy policy.")}</p>
                <Rows rows={services.map(s => ({ title: s.name, body: s.gets, note: s.when }))} />
            </>
        ),
    },
    {
        id: 'permissions',
        title: t("Permissions"),
        content: (
            <>
                <p>{t("What each Android permission SaveTube asks for is used for.")}</p>
                <Rows rows={permissions.map(p => ({ title: p.name, body: p.why }))} />
            </>
        ),
    },
    {
        id: 'telemetry',
        title: t("Analytics and crash reports"),
        content: (
            <p><Rich text={t("SaveTube contains no analytics, tracking or crash-reporting code. We have no way of knowing how you use the app or whether it crashed. If something goes wrong, you can copy the error details and <l0>report it on GitHub</l0> yourself.")} links={['https://github.com/goldendevuz/savetube-android/issues/new?template=bug_report.yml']} /></p>
        ),
    },
    {
        id: 'browser-extension',
        title: t("The browser extension"),
        content: (
            <ul>
                <li>{t("It reads the ID of the YouTube or YouTube Music video you act on, plus a timestamp or playlist if there is one.")}</li>
                <li><Rich text={t("It sends that only to the SaveTube desktop app on your own computer, through <b>127.0.0.1</b> or a <b>savetube://</b> link. It contacts no other server and has no analytics.")} /></li>
                <li>{t("It needs access to youtube.com, m.youtube.com and music.youtube.com to show its buttons, plus the right-click menu and storage for its settings. Access to 127.0.0.1 is optional and only requested if you turn on silent mode.")}</li>
            </ul>
        ),
    },
    {
        id: 'this-website',
        title: t("This website"),
        content: (
            <ul>
                <li><Rich text={t("It's hosted on <b>Cloudflare Pages</b>, so Cloudflare handles your requests and sees your IP address and the pages you request.")} /></li>
                <li>{t("Its fonts are served from this site. Nothing loads from Google.")}</li>
                <li><Rich text={t("The <l0>About</l0> page loads contributor pictures from <b>GitHub</b>, so GitHub sees your IP address when you open it.")} links={[{'to': '/about'}]} /></li>
                <li>{t("Your light or dark mode choice is saved in your browser. There are no cookies, analytics or trackers.")}</li>
            </ul>
        ),
    },
    {
        id: 'changes-and-contact',
        title: t("Changes and contact"),
        content: (
            <>
                <p>{t("When this policy changes, the date at the top changes, and the edit is visible in the website's public repository on GitHub.")}</p>
                <p><Rich text={t("Questions? Open an issue on <l0>GitHub</l0>.")} links={['https://github.com/goldendevuz/savetube-android/issues']} /></p>
            </>
        ),
    },
]

export function PrivacyPolicy() {
    return (
        <LegalPage
            kicker="Privacy Policy"
            title={t("Your data")}
            accent="stays yours."
            updated="7 November 2026"
            intro={<p>{t("SaveTube has no accounts, no servers of its own and no analytics. What you do in the app stays on your phone. To show you videos and music, the app talks directly to YouTube and a few other services, listed below with exactly what each one receives.")}</p>}
            sections={sections}
        />
    )
}

export default PrivacyPolicy
