import { Link } from 'react-router-dom'
import { ArrowRight, Github, Heart } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { AFFILIATION_NOTICE } from '@/components/layout/LegalPage'

interface FooterLink {
    label: string
    href: string
    external?: boolean
}

const columns: { title: string; links: FooterLink[] }[] = [
    {
        title: 'Get SaveTube',
        links: [
            { label: 'Download', href: '/download' },
            { label: 'GitHub Releases', href: '/download#github-releases' },
            { label: 'IzzyOnDroid', href: '/download#izzyondroid' },
            { label: 'Browser Extension', href: '/download#browser-extension' },
            { label: 'Nightly Builds', href: '/download#nightly' },
        ],
    },
    {
        title: 'Learn',
        links: [
            { label: 'Features', href: '/#features' },
            { label: 'How it Works', href: '/how-it-works' },
            { label: 'Every Screen', href: '/#showcase' },
        ],
    },
    {
        title: 'Get Help',
        links: [
            { label: 'Report an Issue', href: 'https://github.com/goldendevuz/savetube-android/issues', external: true },
            { label: 'Verify Your APK', href: 'https://github.com/goldendevuz/savetube-android#cert', external: true },
            { label: 'Security', href: 'https://github.com/goldendevuz/savetube-android/security/policy', external: true },
        ],
    },
]

const aboutLinks: FooterLink[] = [
    { label: 'About SaveTube', href: '/about' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'DMCA', href: '/dmca' },
]

const socials = [
    { label: 'GitHub', href: 'https://github.com/goldendevuz/savetube-android', icon: Github },
]

const RING_CENTER = { x: 560, y: 420 }
const LOGO_HALF = { w: 40, h: 30.5, r: 12 }
const RING_OFFSETS = [56, 128, 200, 272]

function FooterRings() {
    return (
        <svg
            viewBox="0 0 640 480"
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 w-[min(92vw,420px)] md:w-[min(52vw,720px)] opacity-[0.14] xl:opacity-100 text-text-primary"
        >
            {RING_OFFSETS.map(d => (
                <rect
                    key={d}
                    x={RING_CENTER.x - LOGO_HALF.w - d}
                    y={RING_CENTER.y - LOGO_HALF.h - d}
                    width={(LOGO_HALF.w + d) * 2}
                    height={(LOGO_HALF.h + d) * 2}
                    rx={LOGO_HALF.r + d}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={36}
                />
            ))}
            <g transform={`translate(${RING_CENTER.x - 12 * 4} ${RING_CENTER.y - 12.38 * 4}) scale(4)`}>
                <path d="M21.58 7.16C21.33 6.22 20.59 5.48 19.65 5.23C17.96 4.77 12 4.77 12 4.77C12 4.77 6.04 4.77 4.35 5.23C3.41 5.48 2.67 6.22 2.42 7.16C1.96 8.85 1.96 12.38 1.96 12.38C1.96 12.38 1.96 15.91 2.42 17.6C2.67 18.54 3.41 19.28 4.35 19.53C6.04 19.99 12 19.99 12 19.99C12 19.99 17.96 19.99 19.65 19.53C20.59 19.28 21.33 18.54 21.58 17.6C22.04 15.91 22.04 12.38 22.04 12.38C22.04 12.38 22.04 8.85 21.58 7.16Z" fill="#FF0000" />
                <path d="M10 7L18 7L17.2 9.5H12.8L12.2 11.5H16L15.2 14H11.5L10.5 17H7.5L10 7Z" fill="#FFFFFF" />
            </g>
        </svg>
    )
}

function FooterLinkItem({ link }: { link: FooterLink }) {
    const className = 'text-[15px] text-text-secondary hover:text-text-primary transition-colors'
    if (link.external) {
        return <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>{link.label}</a>
    }
    const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (link.href.startsWith('/#') && window.location.pathname === '/') {
            e.preventDefault()
            document.querySelector(link.href.replace('/#', '#'))?.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return <Link to={link.href} onClick={onClick} className={className}>{link.label}</Link>
}

export function Footer() {
    return (
        <footer className="bg-bg-primary px-2 pb-2 md:px-3 md:pb-3">
            <div className="tone-inverse relative overflow-hidden rounded-[24px] md:rounded-[32px]">
                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-12 md:pt-24 md:pb-16">
                    <h2 className="text-6xl md:text-8xl font-semibold tracking-[-0.04em] leading-[0.95] text-text-primary mb-5">
                        SaveTube
                    </h2>
                    <p className="max-w-md text-base md:text-lg font-medium leading-relaxed text-text-primary">
                        A private, open-source YouTube and YouTube Music client. No ads, no account, no tracking.
                        Your feed learns on your phone and nowhere else.
                    </p>

                    <Button
                        to="/download"
                        variant="primary"
                        size="md"
                        className="mt-8"
                        icon={<ArrowRight className="w-4 h-4" />}
                    >
                        Download
                    </Button>

                    <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 max-w-2xl">
                        <div>
                            <h3 className="font-sans text-[15px] font-semibold text-text-primary mb-4">Follow SaveTube</h3>
                            <ul className="flex items-center gap-4">
                                {socials.map(social => (
                                    <li key={social.label}>
                                        <a
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className="block text-text-secondary hover:text-text-primary transition-colors"
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <h3 className="font-sans text-[15px] font-semibold text-text-primary mt-10 mb-4">About</h3>
                            <ul className="space-y-3">
                                {aboutLinks.map(link => <li key={link.label}><FooterLinkItem link={link} /></li>)}
                            </ul>
                        </div>

                        {columns.map(column => (
                            <div key={column.title}>
                                <h3 className="font-sans text-[15px] font-semibold text-text-primary mb-4">{column.title}</h3>
                                <ul className="space-y-3">
                                    {column.links.map(link => <li key={link.label}><FooterLinkItem link={link} /></li>)}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 md:mt-20 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 max-w-2xl">
                        <p className="text-base font-medium text-text-primary flex flex-wrap items-center gap-x-1.5">
                            Made with <Heart className="w-4 h-4 text-accent-primary fill-accent-primary" aria-label="love" /> from
                            <a
                                href="https://github.com/Flow-Tube/Flow"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent-primary underline decoration-[1.5px] underline-offset-4 hover:text-accent-hover"
                            >
                                Flow by A-EDev
                            </a>
                        </p>
                        <p className="kicker">
                            <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">GPL-3.0</a>
                            {' '}&middot; &copy; {new Date().getFullYear()} SaveTube
                        </p>
                    </div>

                    <p className="mt-4 text-sm text-text-muted max-w-2xl">
                        Parts of this website's design were inspired by{' '}
                        <a
                            href="https://zen-browser.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-text-muted underline-offset-4 hover:text-text-primary hover:decoration-text-primary transition-colors"
                        >
                            Zen Browser's website
                        </a>
                        .
                    </p>
                    <p className="mt-2 text-sm text-text-muted max-w-2xl">{AFFILIATION_NOTICE}</p>
                </div>

                <FooterRings />
            </div>
        </footer>
    )
}

export default Footer
