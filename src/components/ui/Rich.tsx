import { Fragment, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

/** An inline link inside rich text: an outside address, or a page of the site. */
export type RichLink = string | { to: string }

/**
 * Text with a little inline markup, so a sentence is translated as one piece (word order differs between
 * languages): `<b>bold</b>`, `<c>code</c>` and `<l0>a link</l0>`, where the number picks from `links`.
 * Any other `<` stays plain text.
 */
export function Rich({ text, links = [], linkClassName }: { text: string; links?: RichLink[]; linkClassName?: string }) {
    let key = 0
    const render = (source: string): ReactNode[] => {
        const out: ReactNode[] = []
        const open = /<(b|c|l(\d+))>/
        let rest = source
        for (;;) {
            const match = open.exec(rest)
            if (!match) break
            const [tag, name, index] = match
            const close = `</${name}>`
            const end = rest.indexOf(close, match.index + tag.length)
            if (end < 0) break
            if (match.index > 0) out.push(rest.slice(0, match.index))
            const inner = render(rest.slice(match.index + tag.length, end))
            const id = key++
            if (name === 'b') out.push(<strong key={id}>{inner}</strong>)
            else if (name === 'c') out.push(<code key={id}>{inner}</code>)
            else {
                const target = links[Number(index)]
                if (typeof target === 'string' && target.startsWith('#')) out.push(<a key={id} href={target} className={linkClassName}>{inner}</a>)
                else if (typeof target === 'string') out.push(<a key={id} href={target} target="_blank" rel="noopener noreferrer" className={linkClassName}>{inner}</a>)
                else if (target) out.push(<Link key={id} to={target.to} className={linkClassName}>{inner}</Link>)
                else out.push(<Fragment key={id}>{inner}</Fragment>)
            }
            rest = rest.slice(end + close.length)
        }
        if (rest) out.push(rest)
        return out
    }
    return <>{render(text)}</>
}
