import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Авангард
            </Link>
            <span className="text-gray-600 text-sm">Автосервис</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Главная
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Услуги
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              О нас
            </Link>
            <Link href="/contacts" className="text-gray-700 hover:text-blue-600 transition-colors">
              Контакты
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-blue-600 transition-colors">
              Галерея
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm text-gray-600">
              <Phone size={16} />
              <span>+996(777)77-55-40</span>
            </div>
            <Button className="hidden md:block bg-blue-600 hover:bg-blue-700">
              Записаться
            </Button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Услуги
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                О нас
              </Link>
              <Link 
                href="/contacts" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </Link>
              <div className="flex items-center space-x-2 text-sm text-gray-600 pt-2">
                <Phone size={16} />
                <span>+996(777)77-55-40</span>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                Записаться
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
