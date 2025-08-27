export interface BettingSite {
  reviews: number
  id: string
  name: string
  logo: string
  score: number
  bonus: string
  features: string[]
  paymentMethods: string[]
  link: string
}

export const bettingSites: BettingSite[] = [
  {
    id: "boomerang-bet",
    name: "Boomerang Bet",
    logo: "/boomerang-2.png",
    score: 9.8,
    bonus: "BÓNUS DE PRIMEIRO DEPÓSITO 100%",
    features: ["Streaming ao Vivo", "Estatísticas", "Cash Out"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://qualityboost.top/PYCdLSJK",
    reviews: 9245,
  },
  {
    id: "lamabet",
    name: "Lamabet",
    logo: "/lamabet.svg",
    score: 9.7,
    bonus: "APOSTA GRÁTIS 10%",
    features: ["Odds Competitivas", "Cash Out", "Bet Builder"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Transferência Bancária"],
    link: "https://qualityboost.top/2sLKjNqT",
    reviews: 8934,
  },
  {
    id: "winrolla",
    name: "Winrolla",
    logo: "/win-rolla.webp",
    score: 9.6,
    bonus: "BÓNUS DE PRIMEIRO DEPÓSITO 100%",
    features: ["Interface Moderna", "Suporte VIP", "Levantamentos Rápidos"],
    paymentMethods: ["Visa/Mastercard", "Skrill", "Neteller"],
    link: "https://qualityboost.top/rJDZBWnD",
    reviews: 7156,
  },
  {
    id: "billybets",
    name: "BillyBets",
    logo: "/billybets.webp",
    score: 9.5,
    bonus: "BÓNUS DE PRIMEIRO DEPÓSITO 100%",
    features: ["App Móvel", "Apostas ao Vivo", "Suporte Local"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://qualityboost.top/PYCdLSJK",
    reviews: 5789,
  },
  {
    id: "betibet",
    name: "BetiBet",
    logo: "/betibet.png",
    score: 9.4,
    bonus: "BÓNUS DE PRIMEIRO DEPÓSITO 100%",
    features: ["Levantamentos Rápidos", "Melhores Odds", "Interface Simples"],
    paymentMethods: ["Visa/Mastercard", "Skrill", "Transferência Bancária"],
    link: "https://qualityboost.top/2sLKjNqT",
    reviews: 4567,
  },
]
