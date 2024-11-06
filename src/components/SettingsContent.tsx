import React from 'react'
import { translations } from '../i18n/translations'
import { LanguageSwitch } from './LanguageSwitch'
import { ThemeSwitch } from './ThemeSwitch'

type SettingsContentProps = {
  lang: string
  isDark: boolean
  onLanguageChange: () => void
  onThemeChange: () => void
}

export function SettingsContent({ lang, isDark, onLanguageChange, onThemeChange }: SettingsContentProps) {
  const t = translations[lang]

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.settings}</h2>
      
      <div className="space-y-6">
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t.language}</h3>
          <div className="flex items-center justify-between">
            <p className="text-gray-600 dark:text-gray-300">{t.languageDescription}</p>
            <LanguageSwitch currentLang={lang} onSwitch={onLanguageChange} />
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t.appearance}</h3>
          <div className="flex items-center justify-between">
            <p className="text-gray-600 dark:text-gray-300">{t.themeDescription}</p>
            <ThemeSwitch isDark={isDark} onSwitch={onThemeChange} />
          </div>
        </div>
      </div>
    </div>
  )
}