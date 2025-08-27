"use client"
import { Logo } from "./logo"

export function Header() {
  return (
    <header className="bg-black/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-12 md:h-16">
          <Logo size="sm" className="md:text-base lg:text-lg" />
        </div>
      </div>
    </header>
  )
}
