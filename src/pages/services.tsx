
import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  Settings, 
  Zap, 
  Car, 
  Gauge, 
  Shield, 
  Cog, 
  Fuel,
  Thermometer,
  Battery
} from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      title: "Диагностика",
      icon: <Gauge className="w-8 h-8 text-blue-600" />,
      services: [
        { name: "Компьютерная диагностика", price: "от 1 500 сом" },
        { name: "Диагностика двигателя", price: "от 2 000 сом" },
        { name: "Диагностика подвески", price: "от 1 800 сом" },
        { name: "Диагностика тормозной системы", price: "от 1 200 сом" }
      ]
    },
    {
      title: "Ремонт двигателя",
      icon: <Cog className="w-8 h-8 text-red-600" />,
      services: [
        { name: "Капитальный ремонт двигателя", price: "от 80 000 сом" },
        { name: "Замена поршневых колец", price: "от 25 000 сом" },
        { name: "Ремонт головки блока цилиндров", price: "от 15 000 сом" },
        { name: "Замена прокладки ГБЦ", price: "от 8 000 сом" }
      ]
    },
    {
      title: "Техническое обслуживание",
      icon: <Settings className="w-8 h-8 text-green-600" />,
      services: [
        { name: "Замена масла и фильтров", price: "от 2 500 сом" },
        { name: "ТО-1 (15 000 км)", price: "от 5 000 сом" },
        { name: "ТО-2 (30 000 км)", price: "от 8 000 сом" },
        { name: "Предпродажная подготовка", price: "от 10 000 сом" }
      ]
    },
    {
      title: "Электрика",
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      services: [
        { name: "Ремонт генератора", price: "от 3 500 сом" },
        { name: "Замена стартера", price: "от 4 000 сом" },
        { name: "Ремонт проводки", price: "от 2 000 сом" },
        { name: "Установка сигнализации", price: "от 8 000 сом" }
      ]
    },
    {
      title: "Подвеска и рулевое",
      icon: <Car className="w-8 h-8 text-purple-600" />,
      services: [
        { name: "Замена амортизаторов", price: "от 6 000 сом" },
        { name: "Ремонт рулевой рейки", price: "от 12 000 сом" },
        { name: "Замена шаровых опор", price: "от 3 000 сом" },
        { name: "Развал-схождение", price: "от 2 000 сом" }
      ]
    },
    {
      title: "Тормозная система",
      icon: <Shield className="w-8 h-8 text-red-500" />,
      services: [
        { name: "Замена тормозных колодок", price: "от 2 500 сом" },
        { name: "Замена тормозных дисков", price: "от 4 000 сом" },
        { name: "Прокачка тормозов", price: "от 1 500 сом" },
        { name: "Ремонт тормозного цилиндра", price: "от 3 500 сом" }
      ]
    }
  ];

  return (
    <Layout 
      title="Услуги - Автосервис Авангард"
      description="Полный спектр услуг автосервиса: диагностика, ремонт двигателя, ТО, электрика, подвеска, тормозная система"
    >
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Наши услуги
            </h1>
            <p className="text-xl text-blue-100">
              Профессиональный ремонт и обслуживание автомобилей
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {category.icon}
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="text-gray-700 text-sm">{service.name}</span>
                        <span className="text-blue-600 font-semibold text-sm">{service.price}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Дополнительные услуги
            </h2>
            <p className="text-lg text-gray-600">
              Мы также предоставляем дополнительные услуги для вашего удобства
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <Fuel className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Шиномонтаж</h3>
              <p className="text-gray-600 text-sm">Замена и балансировка колес</p>
            </Card>
            
            <Card className="text-center p-6">
              <Thermometer className="w-8 h-8 text-red-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Заправка кондиционера</h3>
              <p className="text-gray-600 text-sm">Обслуживание климат-системы</p>
            </Card>
            
            <Card className="text-center p-6">
              <Battery className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Замена аккумулятора</h3>
              <p className="text-gray-600 text-sm">Подбор и установка АКБ</p>
            </Card>
            
            <Card className="text-center p-6">
              <Wrench className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Мойка двигателя</h3>
              <p className="text-gray-600 text-sm">Профессиональная мойка</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Нужна консультация?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Наши специалисты помогут подобрать необходимые услуги
          </p>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
            Получить консультацию
          </Button>
        </div>
      </section>
    </Layout>
  );
}
