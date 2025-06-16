
import React from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Авангард</h3>
            <p className="text-gray-400 mb-4">
              Профессиональный автосервис с многолетним опытом работы. 
              Качественный ремонт и обслуживание автомобилей.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services" className="hover:text-white transition-colors">Диагностика</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Ремонт двигателя</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Замена масла</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Шиномонтаж</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+996(777)77-55-40</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>sulajmankulovakbar@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>г. Кара-Балта, ул. Кожомбердиева, 24а</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>Пн-Пт: 8:00 - 20:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>Сб: 9:00 - 18:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>Вс: 10:00 - 16:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Автосервис Авангард. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
