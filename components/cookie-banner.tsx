"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card/95 backdrop-blur-sm border-t border-border shadow-2xl animate-in slide-in-from-bottom duration-500">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-pretty">
          This website uses cookies to improve your experience. By continuing, you consent to the use of cookies.
        </p>
        <Button
          onClick={handleAccept}
          className="bg-primary hover:bg-[#FDDC8E] hover:text-foreground text-primary-foreground rounded-full px-6 transition-all duration-500 whitespace-nowrap"
        >
          Accept
        </Button>
      </div>
    </div>
  )
}
