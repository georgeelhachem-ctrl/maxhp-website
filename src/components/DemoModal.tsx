import { useEffect, useRef } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function DemoModal({ isOpen, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null)

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // ESC key closes modal
  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4 border-[#004ac6] flex flex-col my-auto">

        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-6 pb-0 shrink-0">
          <div>
            <h2
              className="text-2xl font-black text-gray-900"
              style={{ fontFamily: 'Manrope' }}
            >
              Book Your MAX HP Demo
            </h2>
            <p className="text-sm text-gray-500 mt-1" style={{ fontFamily: 'Inter' }}>
              Pick a time and we'll send you a confirmation.
            </p>
          </div>
          <button
            onClick={onClose}
            className="ml-4 mt-1 p-1.5 rounded-lg text-slate-400 hover:text-gray-900 hover:bg-slate-100 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Calendly inline iframe — negative margin clips the Calendly header */}
        <div style={{ overflow: 'hidden', height: '650px' }}>
          <iframe
            src="https://calendly.com/george-elhachem-maxhp/30min?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=004ac6&embed_type=Inline"
            width="100%"
            height="750px"
            frameBorder={0}
            title="Book a MAX HP Demo"
            style={{ border: 'none', display: 'block', marginTop: '-70px' }}
          />
        </div>

      </div>
    </div>
  )
}
