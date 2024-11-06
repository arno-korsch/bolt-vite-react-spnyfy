import React from 'react'
import { Languages } from 'lucide-react'

type LanguageSwitchProps = {
  currentLang: string
  onSwitch: () => void
}

export function LanguageSwitch({ currentLang, onSwitch }: LanguageSwitchProps) {
  return (
    <button
      onClick={onSwitch}
      className="flex items-center px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-all"
      aria-label="Switch language"
    >
      <Languages className="w-4 h-4 mr-2" />
      <span className="font-medium">{currentLang.toUpperCase()}</span>
    </button>
  )
}