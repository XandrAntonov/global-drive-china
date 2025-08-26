import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import ContactButtons from "@/components/UI/ContactButtons";
import { CheckCircle } from "lucide-react";

const ThankYou = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const nextSteps = [
    {
      step: "1",
      title: "Ожидайте звонка",
      description: "Наш менеджер свяжется с вами в течение 15 минут"
    },
    {
      step: "2", 
      title: "Консультация",
      description: "Обсудим ваши требования и подберём идеальный автомобиль"
    },
    {
      step: "3",
      title: "Расчёт стоимости",
      description: "Предоставим точный расчёт с доставкой до вашего города"
    }
  ];

  return (
    <Layout>
      <div className="bg-gm-white">
        {/* Success Message */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-green-100 text-green-800 p-4 rounded-full w-24 h-24 mx-auto mb-8 flex items-center justify-center">
              <CheckCircle size={48} />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gm-black mb-6">
              Спасибо за обращение!
            </h1>
            
            <p className="text-xl text-gm-gray-dark mb-8">
              Ваша заявка успешно отправлена. Мы получили ваши данные и уже начали работу.
            </p>

            <div className="bg-gradient-card p-8 rounded-2xl shadow-card mb-12">
              <h2 className="text-2xl font-bold text-gm-black mb-4">✅ Что дальше?</h2>
              <p className="text-lg text-gm-gray-dark">
                Наш менеджер свяжется с вами в ближайшее время для уточнения деталей 
                и предоставления персонального предложения.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-20 bg-gm-gray-light">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gm-black mb-6">Следующие шаги</h2>
              <p className="text-xl text-gm-gray-dark">
                Вот что произойдёт в ближайшее время
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {nextSteps.map((item, index) => (
                <div key={index} className="bg-gm-white p-8 rounded-2xl shadow-card text-center">
                  <div className="bg-gradient-accent text-gm-white p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gm-black mb-4">{item.title}</h3>
                  <p className="text-gm-gray-dark">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-card p-8 rounded-2xl shadow-card text-center">
              <h2 className="text-3xl font-bold text-gm-black mb-6">
                Хотите связаться с нами прямо сейчас?
              </h2>
              <p className="text-lg text-gm-gray-dark mb-8">
                Не хотите ждать звонка? Напишите нам в мессенджер — ответим моментально!
              </p>
              <ContactButtons className="justify-center" />
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-20 bg-gm-gray-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gm-black mb-6">Полезная информация</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gm-white p-6 rounded-xl shadow-card">
                <h3 className="text-xl font-bold text-gm-black mb-4">📋 Подготовьте документы</h3>
                <ul className="space-y-2 text-gm-gray-dark">
                  <li>• Паспорт гражданина РФ</li>
                  <li>• Водительское удостоверение</li>
                  <li>• Справка о доходах (при необходимости)</li>
                </ul>
              </div>

              <div className="bg-gm-white p-6 rounded-xl shadow-card">
                <h3 className="text-xl font-bold text-gm-black mb-4">💰 Подумайте о бюджете</h3>
                <ul className="space-y-2 text-gm-gray-dark">
                  <li>• Стоимость автомобиля</li>
                  <li>• Логистика до вашего города</li>
                  <li>• Дополнительные опции</li>
                </ul>
              </div>

              <div className="bg-gm-white p-6 rounded-xl shadow-card">
                <h3 className="text-xl font-bold text-gm-black mb-4">🚗 Выбор модели</h3>
                <ul className="space-y-2 text-gm-gray-dark">
                  <li>• Определитесь с брендом</li>
                  <li>• Выберите комплектацию</li>
                  <li>• Уточните цвет и опции</li>
                </ul>
              </div>

              <div className="bg-gm-white p-6 rounded-xl shadow-card">
                <h3 className="text-xl font-bold text-gm-black mb-4">⏱️ Планируйте время</h3>
                <ul className="space-y-2 text-gm-gray-dark">
                  <li>• Срок доставки: 25-45 дней</li>
                  <li>• Оформление документов: 3-5 дней</li>
                  <li>• Получение автомобиля: 1 день</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gm-black mb-8">
              Пока ждёте звонка, изучите наш сайт
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                to="/process"
                className="bg-gradient-card p-6 rounded-xl shadow-card hover:shadow-hero transition-smooth text-center"
              >
                <div className="text-3xl mb-4">🔄</div>
                <h3 className="text-lg font-bold text-gm-black mb-2">Процесс доставки</h3>
                <p className="text-gm-gray-dark text-sm">Узнайте, как мы доставляем авто</p>
              </Link>

              <Link
                to="/why-us"
                className="bg-gradient-card p-6 rounded-xl shadow-card hover:shadow-hero transition-smooth text-center"
              >
                <div className="text-3xl mb-4">⭐</div>
                <h3 className="text-lg font-bold text-gm-black mb-2">Почему мы</h3>
                <p className="text-gm-gray-dark text-sm">Наши преимущества</p>
              </Link>

              <Link
                to="/about"
                className="bg-gradient-card p-6 rounded-xl shadow-card hover:shadow-hero transition-smooth text-center"
              >
                <div className="text-3xl mb-4">🏢</div>
                <h3 className="text-lg font-bold text-gm-black mb-2">О компании</h3>
                <p className="text-gm-gray-dark text-sm">Узнайте больше о нас</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ThankYou;