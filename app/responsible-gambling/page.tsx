import { PolicyPageLayout } from "@/components/policy-page-layout"
import { PolicySection, PolicyParagraph, PolicyList } from "@/components/policy-content"
import { SafeGambling } from "@/components/safe-gambling"
import { AlertTriangle, Clock, Ban, Wallet, Brain, Phone } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"

export default function ResponsibleGamblingPage() {
  return (
    <PolicyPageLayout
      title="Responsible Gambling"
      heroImage="/responsible-gambling-bg.png"
      heroAlt="Responsible gambling concept"
    >
      <div className="mb-8">
        <FadeIn>
          <p className="text-lg md:text-xl text-emerald-400 mb-6 leading-relaxed">
            At BestieBettingSites.com, we believe that gambling should always be a fun and entertaining activity, not a
            way to make money or solve financial problems. We are committed to promoting responsible gambling and
            providing resources to help our users stay in control.
          </p>
        </FadeIn>
      </div>

      <PolicySection title="Signs of Problem Gambling">
        <PolicyParagraph>
          It's important to recognize the warning signs of problem gambling. If you or someone you know is experiencing
          any of these signs, it may be time to seek help:
        </PolicyParagraph>
        <PolicyList
          items={[
            "Spending more time or money on gambling than you can afford",
            "Finding it difficult to stop or control your gambling",
            "Lying to friends or family about your gambling habits",
            "Gambling to escape problems or to cope with feelings of anxiety or depression",
            "Borrowing money or selling possessions to fund gambling",
            "Neglecting work, education, or family commitments due to gambling",
            "Feeling irritable or restless when trying to cut down on gambling",
          ]}
        />
      </PolicySection>

      <PolicySection title="Tips for Responsible Gambling" delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-gray-700/50 p-4 rounded-lg flex gap-4">
            <div className="flex-shrink-0">
              <Clock className="h-8 w-8 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Set Time Limits</h3>
              <p className="text-sm text-gray-300">
                Decide how much time you want to spend gambling and stick to it. Set an alarm to remind you when your
                time is up.
              </p>
            </div>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg flex gap-4">
            <div className="flex-shrink-0">
              <Wallet className="h-8 w-8 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Set a Budget</h3>
              <p className="text-sm text-gray-300">
                Only gamble with money you can afford to lose. Set a daily, weekly, or monthly spending limit and stick
                to it.
              </p>
            </div>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg flex gap-4">
            <div className="flex-shrink-0">
              <Ban className="h-8 w-8 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Take Regular Breaks</h3>
              <p className="text-sm text-gray-300">
                Gambling continuously can lead to poor decision-making. Take regular breaks to clear your mind and
                reassess your gambling activity.
              </p>
            </div>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg flex gap-4">
            <div className="flex-shrink-0">
              <Brain className="h-8 w-8 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Stay Informed</h3>
              <p className="text-sm text-gray-300">
                Understand the odds and rules of the games you play. Remember that gambling outcomes are random and not
                influenced by past results.
              </p>
            </div>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg flex gap-4">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-8 w-8 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Don't Chase Losses</h3>
              <p className="text-sm text-gray-300">
                Trying to win back money you've lost often leads to bigger losses. Accept that losing is part of
                gambling and walk away when you've reached your limit.
              </p>
            </div>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg flex gap-4">
            <div className="flex-shrink-0">
              <Phone className="h-8 w-8 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Seek Help</h3>
              <p className="text-sm text-gray-300">
                If you're concerned about your gambling habits, don't hesitate to seek help. There are many
                organizations that offer free and confidential support.
              </p>
            </div>
          </div>
        </div>
      </PolicySection>

      <PolicySection title="Self-Exclusion Options" delay={200}>
        <PolicyParagraph>
          Most betting sites offer self-exclusion options that allow you to block access to your account for a specified
          period. This can be a helpful tool if you feel you need a break from gambling. Additionally, there are
          software tools and apps that can block access to gambling websites and apps across all your devices.
        </PolicyParagraph>
      </PolicySection>

      <div className="mt-12">
        <SafeGambling />
      </div>
    </PolicyPageLayout>
  )
}
