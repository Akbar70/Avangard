
import React from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Camera,
  Car,
  Wrench,
  Settings
} from "lucide-react";

export default function Gallery() {
  const galleryCategories = [
    {
      title: "Наш автосервис",
      description: "Современное оборудование и комфортные условия",
      images: [
        { title: "Диагностическое оборудование", category: "equipment" },
        { title: "Рабочие места мастеров", category: "workspace" },
        { title: "Зона ожидания клиентов", category: "waiting" },
        { title: "Склад запчастей", category: "storage" }
      ]
    },
    {
      title: "Выполненные работы",
      description: "Примеры качественного ремонта автомобилей",
      images: [
        { title: "Ремонт двигателя BMW", category: "engine" },
        { title: "Замена подвески Mercedes", category: "suspension" },
        { title: "Диагностика Audi", category: "diagnostic" },
        { title: "Ремонт тормозной системы", category: "brakes" }
      ]
    },
    {
      title: "Команда мастеров",
      description: "Профессионалы за работой",
      images: [
        { title: "Главный механик за работой", category: "team" },
        { title: "Диагностика автомобиля", category: "team" },
        { title: "Консультация клиента", category: "team" },
        { title: "Командная работа", category: "team" }
      ]
    }
  ];

  return (
    <Layout 
      title="Галерея - Автосервис Авангард"
      description="Фотографии нашего автосервиса, выполненных работ и команды профессионалов"
    >
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Галерея
            </h1>
            <p className="text-xl text-blue-100">
              Посмотрите на наш автосервис и выполненные работы
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Sections */}
      {galleryCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-16 ${categoryIndex % 2 === 1 ? 'bg-gray-50' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <p className="text-lg text-gray-600">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.images.map((image, imageIndex) => (
                <Card key={imageIndex} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      {image.category === 'equipment' && <Settings className="w-12 h-12 mx-auto mb-2" />}
                      {image.category === 'workspace' && <Wrench className="w-12 h-12 mx-auto mb-2" />}
                      {image.category === 'waiting' && <Car className="w-12 h-12 mx-auto mb-2" />}
                      {image.category === 'storage' && <Settings className="w-12 h-12 mx-auto mb-2" />}
                      {image.category === 'engine' && <Wrench className="w-12 h-12 mx-auto mb-2" />}
                      {image.category === 'suspension' && <Car className="w-12 h-12 mx-auto mb-2" />}
                      {image.category === 'diagnostic' && <Settings className="w-12 h-12 mx-auto mb-2" />}
                      {image.category === 'brakes' && <Wrench className="w-12 h-12 mx-auto mb-2" />}
                      {image.category === 'team' && <Camera className="w-12 h-12 mx-auto mb-2" />}
                      <p className="text-sm">{image.title}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-center">{image.title}</h3>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Хотите увидеть наш автосервис лично?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Приезжайте к нам на экскурсию или записывайтесь на обслуживание
          </p>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
            Записаться на визит
          </Button>
        </div>
      </section>
    </Layout>
  );
}
