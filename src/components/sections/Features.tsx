import { useRef, useState } from 'react'
import { Section } from '@/components/layout/Section'
import { FadeIn } from '@/components/ui/TextReveal'
import { cn } from '@/lib/utils'
import { t } from '@/i18n'
import { Rich } from '@/components/ui/Rich'

interface FeatureGroup {
    id: string
    label: string
    lead: string
    screen: { src: string; alt: string; caption: string; width: number; height: number; desktop?: boolean }
    items: { title: string; description: string }[]
}

const groups: FeatureGroup[] = [
    {
        id: 'watch',
        label: t("Watch"),
        lead: t("Playback without the parts you skip anyway."),
        screen: { src: `${import.meta.env.BASE_URL}screenshots/VideoPlayer.webp`, alt: t("The SaveTube video player"), caption: t("Video player"), width: 575, height: 1280 },
        items: [
            { title: t("SponsorBlock & DeArrow"), description: t("Skips sponsors, intros and outros, and swaps clickbait titles and thumbnails for community ones.") },
            { title: t("Return YouTube Dislike"), description: t("See the real rating, with community-sourced dislike counts.") },
            { title: t("Background Play & PiP"), description: t("Keep listening with the screen off, or float the video over other apps.") },
            { title: t("Floating Mini Player"), description: t("Shrink the video into a floating window and keep browsing SaveTube.") },
            { title: t("Downloads"), description: t("Save videos for offline viewing, including VP9 and AV1.") },
            { title: t("Chapters & Speed"), description: t("Jump between chapters, and play anywhere from 0.25× to 2×.") },
            { title: t("Casting"), description: t("Send what you're watching to a Chromecast or a DLNA TV.") },
            { title: t("Subtitles"), description: t("Change their size, color and background.") },
            { title: t("Gesture Controls"), description: t("Swipe for volume, brightness and seeking.") },
            { title: t("Ambient Mode"), description: t("A soft glow of the video's own colors around the player.") },
            { title: t("Comment Threads"), description: t("Read comments with full replies and nested threads.") },
            { title: t("Shorts"), description: t("A vertical Shorts feed with its own recommendations, kept apart from your main feed.") },
            { title: t("Resume Playback"), description: t("Pick up exactly where you left off.") },
        ],
    },
    {
        id: 'listen',
        label: t("Listen"),
        lead: t("A music app that happens to live inside a video app."),
        screen: { src: `${import.meta.env.BASE_URL}screenshots/MusicPlayer.webp`, alt: t("The SaveTube music player"), caption: t("Music player"), width: 575, height: 1280 },
        items: [
            { title: t("Music Player"), description: t("Album art, a queue you can reorder, shuffle and repeat.") },
            { title: t("Synchronized Lyrics"), description: t("Lyrics that scroll with the song as it plays.") },
            { title: t("High-Quality Audio"), description: t("High-bitrate streams straight from YouTube Music.") },
            { title: t("Persistent Mini Player"), description: t("Keep the music playing while you browse the rest of the app.") },
            { title: t("Parametric Equalizer"), description: t("Shape the sound band by band, with frequency, gain and Q.") },
            { title: t("Song Recognition"), description: t("Identify a song playing nearby and keep a searchable history.") },
            { title: t("Local Media Library"), description: t("Play the music and videos already on your phone.") },
            { title: t("Sleep Timer"), description: t("Stop playback after 5 to 120 minutes, or a time you set.") },
            { title: t("Discord Rich Presence"), description: t("Show what you're playing on your Discord profile.") },
        ],
    },
    {
        id: 'yours',
        label: t("Yours"),
        lead: t("No account, no tracking, and it looks the way you want."),
        screen: { src: `${import.meta.env.BASE_URL}screenshots/Library.webp`, alt: t("The SaveTube library"), caption: t("Library"), width: 575, height: 1280 },
        items: [
            { title: t("No Account, No Tracking"), description: t("No Google sign-in, no ads, no analytics. Your data stays on your phone.") },
            { title: t("Import & Export"), description: t("Bring subscriptions and history from NewPipe, and export everything anytime.") },
            { title: t("27 Themes"), description: t("Catppuccin, Dracula, Tokyo Night and more, plus Material You colors from your wallpaper.") },
            { title: t("Custom Themes"), description: t("Build your own palette when none of the 27 fits.") },
            { title: t("SaveTube Recap"), description: t("Your time per day and month, top channels and artists, told as a story.") },
            { title: t("Verify Every Build"), description: t("Check the APK's signing fingerprint with AppVerifier before you install.") },
        ],
    },
    {
        id: 'everywhere',
        label: t("Everywhere"),
        lead: t("The same SaveTube on your TV, your home screen, your computer and your browser."),
        screen: { src: `${import.meta.env.BASE_URL}screenshots/desktop/Home.webp`, alt: t("The SaveTube desktop app"), caption: t("Desktop beta"), width: 1915, height: 1020, desktop: true },
        items: [
            { title: t("Android TV"), description: t("A TV interface built for the remote, with the same private feed.") },
            { title: t("Device Sync"), description: t("Move your library, history and profile between your devices over local Wi-Fi, paired with a QR code.") },
            { title: t("Home-Screen Widgets"), description: t("Now Playing controls, and quick actions for search, downloads, history and recognition.") },
            { title: t("Desktop Beta"), description: t("Windows, macOS and Linux, written in Rust on Tauri 2. Syncs with SaveTube on your phone.") },
            { title: t("Browser Extension"), description: t("Watch in SaveTube and Download buttons on YouTube and YouTube Music, in Chromium browsers and Firefox.") },
        ],
    },
]

export function Features() {
    const [active, setActive] = useState(0)
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

    const onTabKeyDown = (e: React.KeyboardEvent, index: number) => {
        const keys: Record<string, number> = {
            ArrowRight: (index + 1) % groups.length,
            ArrowLeft: (index - 1 + groups.length) % groups.length,
            Home: 0,
            End: groups.length - 1,
        }
        if (!(e.key in keys)) return
        e.preventDefault()
        setActive(keys[e.key])
        tabRefs.current[keys[e.key]]?.focus()
    }

    return (
        <Section id="features" fullHeight={false} className="bg-bg-primary border-b border-border-subtle py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <FadeIn>
                    <div className="mb-12 md:mb-16 max-w-3xl">
                        <p className="kicker mb-4">{t("02 · Features")}</p>
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.035em] leading-[1.02] text-text-primary mb-6">
                            {t("Everything on your terms.")}</h2>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            {t("Watching, listening, discovering: every part of SaveTube is built around privacy, control, and playback that stays out of your way.")}</p>
                    </div>
                </FadeIn>

                <FadeIn delay={0.05}>
                    <div role="tablist" aria-label={t("Feature groups")} className="flex flex-wrap gap-x-2 border-b border-border-subtle">
                        {groups.map((group, i) => (
                            <button
                                key={group.id}
                                ref={el => { tabRefs.current[i] = el }}
                                id={`features-tab-${group.id}`}
                                type="button"
                                role="tab"
                                aria-selected={active === i}
                                aria-controls={`features-panel-${group.id}`}
                                tabIndex={active === i ? 0 : -1}
                                onClick={() => setActive(i)}
                                onKeyDown={e => onTabKeyDown(e, i)}
                                className={cn(
                                    '-mb-px flex items-baseline gap-2 border-b-2 px-3 md:px-4 pt-2 pb-3.5 font-display text-xl md:text-2xl font-semibold tracking-[-0.02em] transition-colors',
                                    active === i ? 'border-text-primary text-text-primary' : 'border-transparent text-text-muted hover:text-text-secondary'
                                )}
                            >
                                {group.label}
                                <span className="font-mono text-[11px] font-medium tracking-[0.1em] text-text-muted">{group.items.length}</span>
                            </button>
                        ))}
                    </div>
                </FadeIn>

                {groups.map((group, i) => (
                    <div
                        key={group.id}
                        id={`features-panel-${group.id}`}
                        role="tabpanel"
                        aria-labelledby={`features-tab-${group.id}`}
                        hidden={active !== i}
                        className={cn('grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-10 md:pt-14', active !== i && 'hidden')}
                    >
                        <div className="lg:col-span-7">
                            <p className="font-display text-2xl md:text-[1.75rem] font-semibold tracking-[-0.02em] leading-tight text-text-primary mb-8 max-w-md">
                                {group.lead}
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7">
                                {group.items.map(item => (
                                    <li key={item.title}>
                                        <h3 className="font-sans text-base font-semibold text-text-primary mb-1.5">{item.title}</h3>
                                        <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <figure className={cn('lg:col-span-5 justify-self-center w-full', group.screen.desktop ? 'max-w-2xl lg:self-center' : 'max-w-[270px]')}>
                            <div
                                className={cn(
                                    'bg-[#1a1716] border border-border-subtle shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)]',
                                    group.screen.desktop ? 'rounded-2xl p-1.5' : 'rounded-[36px] p-[7px]'
                                )}
                            >
                                <img
                                    src={group.screen.src}
                                    alt={group.screen.alt}
                                    width={group.screen.width}
                                    height={group.screen.height}
                                    loading="lazy"
                                    className={cn('block w-full h-auto', group.screen.desktop ? 'rounded-xl' : 'rounded-[29px]')}
                                />
                            </div>
                            <figcaption className="kicker mt-4 text-center">{group.screen.caption}</figcaption>
                        </figure>
                    </div>
                ))}

                <p className="mt-14 md:mt-16 pt-6 border-t border-border-subtle text-sm text-text-secondary">
                    <Rich text={t("Recommendations have their own section <l0>below</l0>, and a full <l1>How it works</l1> page.")} links={['#neuro-engine', { to: '/how-it-works' }]} linkClassName="font-semibold text-text-primary underline underline-offset-4 decoration-text-muted hover:decoration-text-primary" /></p>
            </div>
        </Section>
    )
}

export default Features
