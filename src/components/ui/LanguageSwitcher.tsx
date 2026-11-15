import { Languages } from 'lucide-react'
import { LANGUAGES, lang, setLang, t, type Lang } from '@/i18n'

/** Picks the language of the site. The choice is saved and the page reloads in it. */
export function LanguageSwitcher({ className = '' }: { className?: string }) {
    return (
        <label className={`relative inline-flex h-10 items-center gap-1.5 rounded-xl px-2.5 text-text-secondary hover:bg-bg-elevated hover:text-text-primary transition-colors ${className}`}>
            <Languages className="w-[18px] h-[18px]" aria-hidden="true" />
            <select
                value={lang}
                onChange={(e) => setLang(e.target.value as Lang)}
                aria-label={t('Language')}
                className="cursor-pointer appearance-none bg-transparent pr-1 text-sm font-medium text-inherit outline-none"
            >
                {LANGUAGES.map(({ code, label }) => (
                    <option key={code} value={code} className="bg-bg-primary text-text-primary">
                        {label}
                    </option>
                ))}
            </select>
        </label>
    )
}
