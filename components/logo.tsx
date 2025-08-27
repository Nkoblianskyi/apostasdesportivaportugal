import { Trophy } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const iconSize = size === "sm" ? "h-5 w-5" : size === "lg" ? "h-8 w-8" : "h-6 w-6"
  const textSize = size === "sm" ? "text-lg" : size === "lg" ? "text-sm" : "text-lg"
  const trophySize = size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"

  return (
    <Link
      href="/"
      className={`flex items-center gap-2 font-bold text-white hover:opacity-90 transition-opacity ${className}`}
    >
      <div className="relative">
        <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
      </div>
      <div className="flex items-center">
        <span className={`${textSize} leading-tight text-portugal-green font-bold`}>Apostas</span>
        <span className={`${textSize} leading-tight text-white font-bold`}>Desportiva</span>
        <span className={`${textSize} leading-tight text-portugal-red font-bold`}>Portugal</span>
      </div>
    </Link>
  )
}
