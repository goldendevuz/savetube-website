import { LegalPage, type LegalSection, AFFILIATION_NOTICE } from '@/components/layout/LegalPage'
import { t } from '@/i18n'
import { Rich } from '@/components/ui/Rich'

const sections: LegalSection[] = [
    {
        id: 'what-savetube-is',
        title: t("What SaveTube is"),
        content: (
            <p>{t("SaveTube is a free, open-source app, licensed under GPL-3.0, that plays YouTube's public catalog. It doesn't host, upload, store or redistribute any videos or music. Everything you watch or hear in SaveTube is streamed directly from YouTube.")}</p>
        ),
    },
    {
        id: 'content-on-youtube',
        title: t("Content on YouTube"),
        content: (
            <>
                <p><Rich text={t("If a video or song infringes your copyright, the place to act is YouTube, which hosts it. Use <l0>YouTube's copyright removal process</l0>.")} links={['https://support.google.com/youtube/answer/2807622']} /></p>
                <p>{t("Once YouTube removes something, it's gone from SaveTube too. Removing SaveTube from app stores wouldn't take the content down.")}</p>
            </>
        ),
    },
    {
        id: 'this-website',
        title: t("This website"),
        content: (
            <p>{t("The screenshots on this site show the app in use, so they include video thumbnails, channel art and album covers that belong to others, shown incidentally. If one of them includes your work and you'd like it replaced, tell us and we'll swap the screenshot.")}</p>
        ),
    },
    {
        id: 'source-code',
        title: t("SaveTube's source code"),
        content: (
            <p><Rich text={t("SaveTube's code is public on <l0>GitHub</l0> under GPL-3.0. If you believe any part of it infringes your rights, open an issue there and we'll look into it.")} links={['https://github.com/goldendevuz/savetube-android']} /></p>
        ),
    },
    {
        id: 'trademarks',
        title: t("Trademarks"),
        content: (
            <p>{AFFILIATION_NOTICE} {t("Other product names mentioned on this site belong to their owners.")}</p>
        ),
    },
    {
        id: 'contact',
        title: t("Contact"),
        content: (
            <p><Rich text={t("Open an issue on <l0>GitHub</l0>.")} links={['https://github.com/goldendevuz/savetube-android/issues']} /></p>
        ),
    },
]

export function DMCA() {
    return (
        <LegalPage
            kicker="Copyright & DMCA"
            title={t("Nothing hosted,")}
            accent="nothing to take down."
            updated="27 September 2026"
            intro={<p>{t("SaveTube is a client app. It plays videos that live on YouTube and doesn't store any of them. Here's where to go if you believe something infringes your copyright.")}</p>}
            sections={sections}
        />
    )
}

export default DMCA
