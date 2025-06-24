
import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Wrench, Clock, Users, Star, Phone } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "Диагностика автомобиля",
      description: "Комплексная компьютерная диагностика всех систем автомобиля"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Ремонт двигателя",
      description: "Профессиональный ремонт двигателей любой сложности"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Техническое обслуживание",
      description: "Регулярное ТО для продления срока службы автомобиля"
    }
  ];

  const advantages = [
    "Опытные мастера с сертификатами",
    "Современное диагностическое оборудование",
    "Гарантия на все виды работ",
    "Оригинальные запчасти",
    "Прозрачное ценообразование",
    "Быстрые сроки выполнения"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-cover bg-center bg-no-repeat text-white py-20 from-blue-600 to-blue-800 text-white py-20" style={{
    backgroundImage: 'url("/image/Supra.jpg")'
  }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Автосервис <span className="text-yellow-400">Авангард</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Профессиональный ремонт и обслуживание автомобилей в Кара-Балте
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://wa.me/+996777775540"> {/* ← путь куда перейти */}
  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
    Записаться на ремонт
  </Button>
</Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Узнать цены
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-gray-600">
              Полный спектр услуг по ремонту и обслуживанию автомобилей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-400 mb-6">
                Почему выбирают нас?
              </h2>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Довольных клиентов</div>
              </Card>
              <Card className="text-center p-6">
                <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">4.9</div>
                <div className="text-gray-600">Рейтинг сервиса</div>
              </Card>
              <Card className="text-center p-6">
                <Clock className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">5</div>
                <div className="text-gray-600">Лет опыта</div>
              </Card>
              <Card className="text-center p-6">
                <Wrench className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-gray-600">Гарантия качества</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Нужен ремонт автомобиля?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Запишитесь на диагностику прямо сейчас и получите скидку 10%
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Позвонить сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Оставить заявку
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
