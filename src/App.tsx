import React, { useState } from 'react'
import { Home, Info, Settings, Menu, X } from 'lucide-react'
import { TabButton } from './components/TabButton'
import { StartContent } from './components/StartContent'
import { AboutContent } from './components/AboutContent'
import { SettingsContent } from './components/SettingsContent'
import { useTheme } from './hooks/useTheme'

function App() {
  const [activeTab, setActiveTab] = useState('start')
  const [lang, setLang] = useState('en')
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const { isDark, setIsDark } = useTheme()

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'de' : 'en')
  }

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors flex">
      {/* Sidebar for larger screens */}
      <div className="hidden md:flex flex-col w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-8">MyApp</h1>
          <nav className="space-y-2">
            <TabButton
              active={activeTab === 'start'}
              icon={Home}
              label={lang === 'en' ? 'Start' : 'Start'}
              onClick={() => setActiveTab('start')}
              fullWidth
            />
            <TabButton
              active={activeTab === 'about'}
              icon={Info}
              label={lang === 'en' ? 'About' : 'Über'}
              onClick={() => setActiveTab('about')}
              fullWidth
            />
            <TabButton
              active={activeTab === 'settings'}
              icon={Settings}
              label={lang === 'en' ? 'Settings' : 'Einstellungen'}
              onClick={() => setActiveTab('settings')}
              fullWidth
            />
          </nav>
        </div>
      </div>

      {/* Mobile sidebar */}
      <div className={`md:hidden fixed inset-0 z-50 ${isSidebarOpen ? '' : 'pointer-events-none'}`}>
        <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-50' : 'opacity-0'
        }`} onClick={() => setSidebarOpen(false)} />
        
        <div className={`absolute left-0 top-0 bottom-0 w-64 bg-white dark:bg-gray-800 transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="p-4">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">MyApp</h1>
              <button onClick={() => setSidebarOpen(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="space-y-2">
              <TabButton
                active={activeTab === 'start'}
                icon={Home}
                label={lang === 'en' ? 'Start' : 'Start'}
                onClick={() => {
                  setActiveTab('start')
                  setSidebarOpen(false)
                }}
                fullWidth
              />
              <TabButton
                active={activeTab === 'about'}
                icon={Info}
                label={lang === 'en' ? 'About' : 'Über'}
                onClick={() => {
                  setActiveTab('about')
                  setSidebarOpen(false)
                }}
                fullWidth
              />
              <TabButton
                active={activeTab === 'settings'}
                icon={Settings}
                label={lang === 'en' ? 'Settings' : 'Einstellungen'}
                onClick={() => {
                  setActiveTab('settings')
                  setSidebarOpen(false)
                }}
                fullWidth
              />
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex justify-between items-center">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="md:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 transition-colors">
            {activeTab === 'start' ? (
              <StartContent lang={lang} />
            ) : activeTab === 'about' ? (
              <AboutContent lang={lang} />
            ) : (
              <SettingsContent 
                lang={lang}
                isDark={isDark}
                onLanguageChange={toggleLanguage}
                onThemeChange={toggleTheme}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App