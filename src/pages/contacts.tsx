
import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Car,
  MessageCircle
} from "lucide-react";

export default function Contacts() {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Телефон",
      content: "+996(777)77-55-40",
      description: "Звоните с 8:00 до 20:00"
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      content: "sulajmankulovakbar@gmail.com",
      description: "Ответим в течение часа"
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "Адрес",
      content: "г. Кара-Балта, ул. Кожомбердиева, 24а",
      description: "Напротив шлагбаума"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Режим работы",
      content: "Пн-Пт: 8:00-20:00, Сб: 9:00-18:00",
      description: "Вс: 10:00-16:00"
    }
  ];

  const services = [
    "Экстренный ремонт",
    "Плановое ТО",
    "Диагностика",
    "Консультация"
  ];

  return (
    <Layout 
      title="Контакты - Автосервис Авангард"
      description="Свяжитесь с нами для записи на ремонт или консультации. Телефон, адрес, режим работы автосервиса Авангард"
    >
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Контакты
            </h1>
            <p className="text-xl text-blue-100">
              Свяжитесь с нами удобным способом
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                <p className="text-gray-900 font-medium mb-1">{info.content}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                  <span>Оставить заявку</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Ваше имя
                    </label>
                    <Input placeholder="Введите ваше имя" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Телефон
                    </label>
                    <Input placeholder="+996 (___) __-__-__" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Марка и модель автомобиля
                    </label>
                    <Input placeholder="Например: Toyota Camry" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Тип услуги
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Выберите услугу</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Описание проблемы
                    </label>
                    <Textarea 
                      placeholder="Опишите проблему с автомобилем или желаемую услугу"
                      rows={4}
                    />
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    <span>Как нас найти</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-gray-600">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p>Интерактивная карта</p>
                      <p className="text-sm">г. Кара-Балта, ул. Кожомбердиева, 24а</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      <strong>Ориентиры:</strong> Наш автосервис расположен в центральном районе города
                    </p>
                    <p className="text-gray-700">
                      <strong>Парковка:</strong> Бесплатная парковка для клиентов
                    </p>
                    <p className="text-gray-700">
                      <strong>Проезд:</strong> На автомобиле или общественном транспорте
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Car className="w-6 h-6 text-blue-600" />
                    <span>Экстренная помощь</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Если ваш автомобиль сломался в дороге, мы можем организовать 
                    эвакуацию и экстренный ремонт.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-red-600">
                      Экстренная линия: +996(777)77-55-40
                    </p>
                    <p className="text-gray-600 text-sm">
                      Работает круглосуточно
                    </p>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Вызвать эвакуатор
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Нужна ли предварительная запись?</h3>
              <p className="text-gray-600">
                Да, рекомендуем записываться заранее для гарантированного времени обслуживания.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Какие способы оплаты принимаете?</h3>
              <p className="text-gray-600">
                Наличные, банковские карты, безналичный расчет для юридических лиц.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Предоставляете ли гарантию?</h3>
              <p className="text-gray-600">
                Да, на все работы предоставляется гарантия от 6 месяцев до 2 лет.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Работаете с автомобилями всех марок?</h3>
              <p className="text-gray-600">
                Да, мы обслуживаем автомобили всех марок и моделей.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
