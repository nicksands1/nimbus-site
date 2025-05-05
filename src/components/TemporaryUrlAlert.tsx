'use client'

import { useState, useEffect } from 'react'

export default function TemporaryUrlAlert() {
  const [isVisible, setIsVisible] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  // Only show on client-side to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 bg-amber-500 text-black">
      <div className="flex items-center justify-between w-full max-w-6xl">
        <p className="text-sm md:text-base font-medium">
          Please note: This URL is temporary and will change within the next 48-72 hours.
        </p>
        <button 
          onClick={() => setIsVisible(false)}
          className="ml-4 p-1 hover:bg-amber-600 rounded-full"
          aria-label="Close alert"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  )
}