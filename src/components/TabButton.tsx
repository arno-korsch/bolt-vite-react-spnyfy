import React from 'react'

type TabButtonProps = {
  active: boolean
  icon: React.ElementType
  label: string
  onClick: () => void
  fullWidth?: boolean
}

export function TabButton({ active, icon: Icon, label, onClick, fullWidth }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-4 py-3 rounded-lg transition-all ${
        fullWidth ? 'w-full' : ''
      } ${
        active 
          ? 'bg-indigo-600 text-white' 
          : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
      }`}
    >
      <Icon className="w-5 h-5 mr-3" />
      <span className="font-medium">{label}</span>
    </button>
  )
}