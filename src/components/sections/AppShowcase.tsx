import { FadeIn } from '@/components/ui/TextReveal'
import { t, tf } from '@/i18n'

const mobileScreens = [
    { src: `${import.meta.env.BASE_URL}screenshots/Shorts.webp`, label: t("Shorts") },
    { src: `${import.meta.env.BASE_URL}screenshots/Music.webp`, label: t("Music") },
    { src: `${import.meta.env.BASE_URL}screenshots/YourTaste.webp`, label: t("Your Taste") },
    { src: `${import.meta.env.BASE_URL}screenshots/Library.webp`, label: t("Library") },
    { src: `${import.meta.env.BASE_URL}screenshots/Playlist.webp`, label: t("Playlist") },
    { src: `${import.meta.env.BASE_URL}screenshots/Artist.webp`, label: t("Artist") },
    { src: `${import.meta.env.BASE_URL}screenshots/Album.webp`, label: t("Album") },
    { src: `${import.meta.env.BASE_URL}screenshots/Channel.webp`, label: t("Channel") },
    { src: `${import.meta.env.BASE_URL}screenshots/Subscriptions.webp`, label: t("Subscriptions") },
    { src: `${import.meta.env.BASE_URL}screenshots/Home.webp`, label: t("Home Feed") },
    { src: `${import.meta.env.BASE_URL}screenshots/VideoPlayer.webp`, label: t("Video Player") },
    { src: `${import.meta.env.BASE_URL}screenshots/MusicPlayer.webp`, label: t("Music Player") },
    { src: `${import.meta.env.BASE_URL}screenshots/Lyrics.webp`, label: t("Lyrics") },
]

const desktopScreens = [
    { src: `${import.meta.env.BASE_URL}screenshots/desktop/Home.webp`, label: t("Home") },
    { src: `${import.meta.env.BASE_URL}screenshots/desktop/Watch.webp`, label: t("Video Player") },
    { src: `${import.meta.env.BASE_URL}screenshots/desktop/Music.webp`, label: t("Music") },
    { src: `${import.meta.env.BASE_URL}screenshots/desktop/MusicPlayer.webp`, label: t("Music Player") },
    { src: `${import.meta.env.BASE_URL}screenshots/desktop/Library.webp`, label: t("Library") },
    { src: `${import.meta.env.BASE_URL}screenshots/desktop/Playlist.webp`, label: t("Playlist") },
    { src: `${import.meta.env.BASE_URL}screenshots/desktop/Artist.webp`, label: t("Artist") },
    { src: `${import.meta.env.BASE_URL}screenshots/desktop/Album.webp`, label: t("Album") },
    { src: `${import.meta.env.BASE_URL}screenshots/desktop/Channel.webp`, label: t("Channel") },
    { src: `${import.meta.env.BASE_URL}screenshots/desktop/Search.webp`, label: t("Search") },
    { src: `${import.meta.env.BASE_URL}screenshots/desktop/Shorts.webp`, label: t("Shorts") },
    { src: `${import.meta.env.BASE_URL}screenshots/desktop/ControlCenter.webp`, label: t("Control Center") },
    { src: `${import.meta.env.BASE_URL}screenshots/desktop/Subs.webp`, label: t("Subscriptions") },
]

function StripLabel({ title, note }: { title: string; note: string }) {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-baseline justify-between gap-4 mb-6">
            <span className="kicker text-text-secondary">{title}</span>
            <span className="kicker">{note}</span>
        </div>
    )
}

export function AppShowcase() {
    return (
        <section id="showcase" className="bg-bg-secondary border-b border-border-subtle py-20 md:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-16">
                <FadeIn>
                    <p className="kicker mb-4">{t("01 · Every Screen")}</p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
                        {t("From pocket to desktop.")}</h2>
                    <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
                        {t("The same engine, native everywhere. SaveTube runs on Android and Android TV today, and the desktop app for Windows, Linux, and macOS, written in Rust on Tauri 2, is in beta.")}</p>
                </FadeIn>
            </div>

            <StripLabel title={t("Android")} note="Available Now" />
            <div className="marquee w-full mb-14 md:mb-16">
                <div className="marquee-track flex w-max gap-6 md:gap-8">
                    {[...mobileScreens, ...mobileScreens].map((screen, i) => (
                        <figure key={i} className="shrink-0 w-[170px] md:w-[210px]">
                            <div className="aspect-[1/2.16] rounded-2xl border border-border-subtle bg-bg-primary overflow-hidden">
                                <img
                                    src={screen.src}
                                    alt={tf(t("SaveTube on Android: %s"), screen.label)}
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <figcaption className="kicker mt-3 text-center">{screen.label}</figcaption>
                        </figure>
                    ))}
                </div>
            </div>

            <StripLabel title={t("Windows &middot; Linux &middot; macOS")} note="Rust + Tauri 2 &middot; Beta" />
            <div className="marquee w-full">
                <div className="marquee-track marquee-track-reverse flex w-max gap-6 md:gap-8" style={{ animationDuration: '70s' }}>
                    {[...desktopScreens, ...desktopScreens].map((screen, i) => (
                        <figure key={i} className="shrink-0 w-[340px] md:w-[440px]">
                            <div className="relative aspect-[16/10] rounded-xl border border-border-subtle bg-bg-primary overflow-hidden">
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                                    <img src={`${import.meta.env.BASE_URL}savetube-icon.svg`} alt="" className="w-8 h-8 opacity-40" />
                                    <span className="kicker">{screen.label}</span>
                                </div>
                                <img
                                    src={screen.src}
                                    alt={tf(t("SaveTube on desktop: %s"), screen.label)}
                                    loading="lazy"
                                    className="relative w-full h-full object-cover"
                                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                                />
                            </div>
                            <figcaption className="kicker mt-3 text-center">{screen.label}</figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AppShowcase
