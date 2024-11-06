import React from 'react'
import { translations } from '../i18n/translations'

type AboutContentProps = {
  lang: string
}

export function AboutContent({ lang }: AboutContentProps) {
  const t = translations[lang]

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.aboutUs}</h2>
      <div className="relative h-48 rounded-xl overflow-hidden mb-6">
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070"
          alt="Modern office workspace"
          className="object-cover w-full h-full"
        />
      </div>
      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        {t.aboutDescription}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {[
          { title: t.innovation, value: '10+', subtitle: t.yearsExp },
          { title: t.quality, value: '100%', subtitle: t.satisfaction },
          { title: t.support, value: '24/7', subtitle: t.available },
        ].map((stat) => (
          <div key={stat.title} className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{stat.value}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{stat.subtitle}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          MyApp <span className="font-semibold">V1.0</span>
        </p>
      </div>
    </div>
  )
}