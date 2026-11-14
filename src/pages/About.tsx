import { LegalPage, type LegalSection } from '@/components/layout/LegalPage'

const link = (href: string, label: string) => (
    <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
)

const sections: LegalSection[] = [
    {
        id: 'what',
        title: 'What SaveTube is',
        content: (
            <p>SaveTube is an open-source YouTube and YouTube Music client for Windows and Android. It has no ads and no tracking, and the feed is built on your own device from what you watch, skip and search.</p>
        ),
    },
    {
        id: 'based-on-flow',
        title: 'Based on Flow',
        content: (
            <>
                <p>SaveTube is a fork of {link('https://github.com/Flow-Tube/Flow', 'Flow for Android')} and {link('https://github.com/Flow-Tube/Flow-Desktop', 'Flow Desktop')} by A-EDev, and of the Flow browser extension. The original authors wrote the apps and their recommendation engine, and SaveTube would not exist without them.</p>
                <p>Both projects are licensed under GPL-3.0, and so is SaveTube. Anyone may read, change and share the code under the same terms.</p>
            </>
        ),
    },
    {
        id: 'what-changed',
        title: 'What SaveTube changes',
        content: (
            <ul>
                <li>Home filters: hide videos below a number of views, hide channels below a number of subscribers, hide music videos, and choose whether fresh uploads from your subscriptions are pinned.</li>
                <li>Uzbekistan and "Automatic" as regions that send no country limit, and Uzbek view and subscriber counts read correctly.</li>
                <li>More ways to sort subscriptions: by subscribers, video count and when you subscribed.</li>
                <li>The same settings on desktop and phone, kept in sync through your own WebDAV folder.</li>
            </ul>
        ),
    },
    {
        id: 'for-whom',
        title: 'Who it is for',
        content: (
            <p>SaveTube is built for personal use. It is not a company product and has no paid version. It uses YouTube's public data without an official API, so it can stop working when YouTube changes something.</p>
        ),
    },
    {
        id: 'source',
        title: 'Source code',
        content: (
            <ul>
                <li>{link('https://github.com/goldendevuz/savetube-android', 'Android app')}</li>
                <li>{link('https://github.com/goldendevuz/savetube-desktop', 'Windows app')}</li>
                <li>{link('https://github.com/goldendevuz/savetube-extension', 'Browser extension')}</li>
                <li>{link('https://github.com/goldendevuz/savetube-website', 'This website')}</li>
            </ul>
        ),
    },
]

export function About() {
    return (
        <LegalPage
            kicker="About"
            title="An open fork,"
            accent="made for personal use."
            updated="14 November 2026"
            intro={<p>Who SaveTube comes from, what it changes and where the code lives.</p>}
            sections={sections}
        />
    )
}

export default About
