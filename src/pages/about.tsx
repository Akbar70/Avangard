import React from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  Clock, 
  Shield,
  CheckCircle,
  Star,
  Wrench,
  Target
} from "lucide-react";

export default function About() {
  const team = [
    {
      name: "Якубов Шахзод",
      position: "Главный механик",
      experience: "15 лет опыта",
      specialization: "Диагностика и ремонт двигателей"
    },
    {
      name: "Чирмашев Мирлан",
      position: "Мастер по электрике",
      experience: "12 лет опыта",
      specialization: "Электрооборудование автомобилей"
    },
    {
      name: "Абжалбеков Арлен",
      position: "Специалист по подвеске",
      experience: "10 лет опыта",
      specialization: "Ходовая часть и рулевое управление"
    }
  ];

  const achievements = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "500+ клиентов",
      description: "Довольных автовладельцев"
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Сертификаты",
      description: "Официальные дилерские сертификаты"
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: "5 лет",
      description: "Успешной работы на рынке"
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "100% гарантия",
      description: "На все выполненные работы"
    }
  ];

  const values = [
    "Честность и прозрачность в работе",
    "Использование только качественных запчастей",
    "Постоянное повышение квалификации",
    "Индивидуальный подход к каждому клиенту",
    "Соблюдение сроков выполнения работ",
    "Справедливые цены без скрытых доплат"
  ];

  return (
    <Layout 
      title="О нас - Автосервис Авангард"
      description="Узнайте больше о нашем автосервисе, команде профессионалов и принципах работы"
    >
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              О нашем автосервисе
            </h1>
            <p className="text-xl text-blue-100">
              Профессионалы с многолетним опытом работы
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Автосервис "Авангард"
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Мы работаем на рынке автомобильных услуг уже более 5 лет и за это время 
                заслужили доверие сотен клиентов. Наш автосервис специализируется на 
                качественном ремонте и обслуживании автомобилей различных марок.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                В нашей команде работают только опытные мастера с профильным образованием 
                и постоянно повышающие свою квалификацию. Мы используем современное 
                диагностическое оборудование и оригинальные запчасти.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Записаться на обслуживание
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="flex justify-center mb-3">
                    {achievement.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наша миссия
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Обеспечить каждому автовладельцу качественное и надежное обслуживание 
              автомобиля по справедливой цене, используя современные технологии и 
              профессиональный подход.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Качество</h3>
              <p className="text-gray-600">
                Высокое качество выполняемых работ и используемых материалов
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Сервис</h3>
              <p className="text-gray-600">
                Индивидуальный подход и внимательное отношение к каждому клиенту
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <Wrench className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Профессионализм</h3>
              <p className="text-gray-600">
                Команда опытных специалистов с многолетним стажем работы
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наша команда
            </h2>
            <p className="text-lg text-gray-600">
              Профессиональные мастера с большим опытом работы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm mb-2">{member.experience}</p>
                <p className="text-gray-500 text-sm">{member.specialization}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наши принципы работы
            </h2>
            <p className="text-lg text-gray-600">
              Ценности, которыми мы руководствуемся в работе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Доверьте свой автомобиль профессионалам
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Запишитесь на диагностику и убедитесь в качестве нашей работы
          </p>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
            Записаться на диагностику
          </Button>
        </div>
      </section>
    </Layout>
  );
}
