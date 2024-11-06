import React from 'react'
import { ChevronRight } from 'lucide-react'
import { translations } from '../i18n/translations'

type StartContentProps = {
  lang: string
}

export function StartContent({ lang }: StartContentProps) {
  const t = translations[lang]

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.welcome}</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        {t.startDescription}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-900 dark:to-gray-800 rounded-xl border border-indigo-100 dark:border-indigo-800">
          <div className="flex items-center text-indigo-600 dark:text-indigo-400 mb-3">
            <ChevronRight className="w-5 h-5 mr-2" />
            <h3 className="font-semibold">{t.quickStart}</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">{t.quickStartDesc}</p>
        </div>
        <div className="p-6 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-900 dark:to-gray-800 rounded-xl border border-indigo-100 dark:border-indigo-800">
          <div className="flex items-center text-indigo-600 dark:text-indigo-400 mb-3">
            <ChevronRight className="w-5 h-5 mr-2" />
            <h3 className="font-semibold">{t.resources}</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">{t.resourcesDesc}</p>
        </div>
      </div>
    </div>
  )
}