import { ru } from './ru'
import { uz } from './uz'

export type Lang = 'en' | 'ru' | 'uz'

/** The languages the site is written in, each named in its own language. */
export const LANGUAGES: { code: Lang; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Русский' },
    { code: 'uz', label: 'Oʻzbekcha' },
]

const TABLES: Record<Exclude<Lang, 'en'>, Record<string, string>> = { ru, uz }
const STORAGE_KEY = 'savetube-lang'

function isLang(value: string | null | undefined): value is Lang {
    return value === 'en' || value === 'ru' || value === 'uz'
}

/** The saved choice, else the browser's language, else English. */
function detect(): Lang {
    try {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (isLang(saved)) return saved
    } catch { /* storage unavailable */ }
    for (const tag of navigator.languages ?? [navigator.language]) {
        const base = tag.toLowerCase().split('-')[0]
        if (isLang(base)) return base
    }
    return 'en'
}

/** The language the page is shown in. It is fixed per page load: choosing another reloads the page. */
export const lang: Lang = detect()

const PAGE_TITLE = 'SaveTube - A YouTube Client That Learns With You'
const PAGE_DESCRIPTION = 'SaveTube is a modern, privacy-first YouTube client for Windows and Android with an on-device recommendation engine. No ads, no tracking, just personalized content discovery.'

if (typeof document !== 'undefined') {
    document.documentElement.lang = lang
    if (lang !== 'en') {
        document.title = t(PAGE_TITLE)
        document.querySelector('meta[name="description"]')?.setAttribute('content', t(PAGE_DESCRIPTION))
    }
}

/** The text in the page's language. The English text is the key; text with no translation stays English. */
export function t(text: string): string {
    return lang === 'en' ? text : (TABLES[lang][text] ?? text)
}

/** Like [t], for text with `%s` where a value goes: `tf("After %s other videos", 12)`. */
export function tf(text: string, ...values: (string | number)[]): string {
    let next = 0
    return t(text).replace(/%s/g, () => String(values[next++] ?? ''))
}

/** Saves the language and reloads, so every text (including the ones built at load) is read again. */
export function setLang(next: Lang): void {
    try { localStorage.setItem(STORAGE_KEY, next) } catch { /* storage unavailable */ }
    window.location.reload()
}
