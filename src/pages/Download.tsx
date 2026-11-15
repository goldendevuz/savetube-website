import { LegalPage, type LegalSection } from '@/components/layout/LegalPage'
import { t } from '@/i18n'
import { Rich } from '@/components/ui/Rich'

const sections: LegalSection[] = [
    {
        id: 'windows',
        title: t("Windows"),
        content: (
            <>
                <p><Rich text={t("Download the <b>SaveTube</b> installer (<c>SaveTube_…_x64-setup.exe</c>) from <l0>the latest release</l0> and run it.")} links={['https://github.com/goldendevuz/savetube-desktop/releases/latest']} /></p>
                <p><Rich text={t("The installer is not code-signed yet, so Windows SmartScreen may say it doesn't recognise the app. Choose <b>More info</b>, then <b>Run anyway</b>. If Smart App Control blocks it, the app can't be installed on that PC until Smart App Control is turned off.")} /></p>
                <p>{t("New versions install over the old one and keep your data.")}</p>
            </>
        ),
    },
    {
        id: 'android',
        title: t("Android"),
        content: (
            <>
                <p><Rich text={t("Download the APK for your phone from <l0>the latest release</l0>. Most phones need <c>arm64-v8a</c>. Open the file and allow installs from your browser or file manager when Android asks.")} links={['https://github.com/goldendevuz/savetube-android/releases/latest']} /></p>
                <p>{t("SaveTube installs next to the original Flow app and doesn't replace it. Every build is signed with the same key, so a new APK installs over the last one and keeps your data.")}</p>
            </>
        ),
    },
    {
        id: 'tv',
        title: t("Android TV and Google TV"),
        content: (
            <>
                <p><Rich text={t("The Android app has a TV mode and shows up in the TV launcher. It installs without Google Play. Download <c>SaveTube-…-universal.apk</c> from <l0>the latest release</l0>; the universal file works on every TV, including the many that run 32-bit Android.")} links={['https://github.com/goldendevuz/savetube-android/releases/latest']} /></p>
                <p><Rich text={t("<b>Without a USB stick:</b> install the <b>Downloader</b> app from Google Play on the TV, allow it to install unknown apps when asked, open this page in Downloader (<c>goldendevuz.github.io/savetube-website/download</c>), pick the universal APK and press Install. Or send the file from your phone with a \"Send Files to TV\" app. From a computer you can also use <c>adb connect <TV address></c> and <c>adb install SaveTube-…-universal.apk</c> after turning on Developer options and network debugging on the TV.")} /></p>
            </>
        ),
    },
    {
        id: 'extension',
        title: t("Browser extension"),
        content: (
            <>
                <p><Rich text={t("The extension adds a \"Watch in SaveTube\" button to YouTube. It needs the SaveTube desktop app running or installed. Get the zip for your browser from <l0>the latest release</l0>.")} links={['https://github.com/goldendevuz/savetube-extension/releases/latest']} /></p>
                <p><Rich text={t("Chrome, Edge, Brave: open <c>chrome://extensions</c>, turn on Developer mode, choose Load unpacked and pick the unzipped folder. Firefox: open <c>about:debugging</c>, choose This Firefox, then Load Temporary Add-on and pick <c>manifest.json</c>.")} /></p>
            </>
        ),
    },
    {
        id: 'sync',
        title: t("Keeping devices in sync"),
        content: (
            <p><Rich text={t("Open <b>Sync</b> in the desktop app or the phone app. Linked devices keeps your history, likes, playlists, subscriptions and settings the same on every device, through a WebDAV folder you own. Everything is end-to-end encrypted.")} /></p>
        ),
    },
    {
        id: 'cost',
        title: t("Cost"),
        content: (
            <p>{t("SaveTube is free and open source (GPL-3.0). There is no paid version.")}</p>
        ),
    },
]

export function Download() {
    return (
        <LegalPage
            kicker="Download"
            title={t("Get SaveTube")}
            accent="on every device."
            updated="14 November 2026"
            intro={<p>{t("SaveTube runs on Windows and Android, with a browser extension that sends YouTube videos to the desktop app.")}</p>}
            sections={sections}
        />
    )
}

export default Download
