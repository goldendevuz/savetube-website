import { Routes, Route } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound'

import { PrivacyPolicy } from '@/pages/PrivacyPolicy'
import { ExtensionPrivacy } from '@/pages/ExtensionPrivacy'
import { DMCA } from '@/pages/DMCA'
import { About } from '@/pages/About'
import { HowItWorks } from '@/pages/HowItWorks'
import { Download } from '@/pages/Download'
import { ScrollToTop } from '@/components/ScrollToTop'

function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/extension-privacy" element={<ExtensionPrivacy />} />
                <Route path="/dmca" element={<DMCA />} />
                <Route path="/about" element={<About />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/download" element={<Download />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App
