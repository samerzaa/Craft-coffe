import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from '@/data/translations';

export interface Language {
  code: string;
  flag: string;
  name: string;
}

interface LanguageContextType {
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
  languages: Language[];
  getCurrentLanguage: () => Language;
  t: (key: string) => string;
}

const languages: Language[] = [
  { code: "en", flag: "🇬🇧", name: "English" },
  { code: "ar", flag: "🇸🇦", name: "العربية" },
  { code: "fr", flag: "🇫🇷", name: "Français" }
];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === selectedLanguage) || languages[0];
  };

  const t = (key: string): string => {
    return translations[selectedLanguage as keyof typeof translations]?.[key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{
      selectedLanguage,
      setSelectedLanguage,
      languages,
      getCurrentLanguage,
      t
    }}>
      {children}
    </LanguageContext.Provider>
  );
};