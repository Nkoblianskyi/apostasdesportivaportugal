"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already responded to cookie consent
    const cookieConsent = localStorage.getItem("cookieConsent")

    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-4 py-3 rounded-md shadow-md z-50 max-w-lg w-full">
      <p className="text-sm mb-2">
        Usamos cookies para personalizar a sua experiência. Ao usar este site, aceita o nosso uso de cookies.
      </p>
      <div className="flex justify-end space-x-2">
        <Button onClick={handleAccept} size="sm" className="bg-portugal-green hover:bg-portugal-dark-green text-xs">
          Aceitar
        </Button>
        <Button
          onClick={handleDecline}
          variant="outline"
          size="sm"
          className="bg-gray-700 hover:bg-gray-600 text-xs border-gray-600"
        >
          Recusar
        </Button>
      </div>
    </div>
  )
}
