import Layout from "@/components/Layout/Layout";
import ContactButtons from "@/components/UI/ContactButtons";
import carCollectionImage from "@/assets/car-collection.jpg";
import geelyCarImage from "@/assets/geely-car.jpg";

const WhyUs = () => {
  const advantages = [
    {
      icon: "💰",
      title: "Оплата по этапам",
      description: "Платите только за завершённые стадии. Все условия зафиксированы в договоре. Никаких скрытых платежей.",
      details: [
        "Бронь 100 000 ₽",
        "Оплата инвойса по факту",
        "Документы РФ 120 000 ₽", 
        "Таможенные платежи в конце"
      ]
    },
    {
      icon: "🎯",
      title: "Полный контроль процесса",
      description: "Офисы в РФ и Китае, персональный менеджер, трекинг на каждом этапе, фото и видео отчёты.",
      details: [
        "Офис в Москве и Китае",
        "Персональный менеджер 24/7",
        "Фото/видео отчёты",
        "Трекинг всех этапов"
      ]
    },
    {
      icon: "📉",
      title: "На 20% дешевле рынка",
      description: "Прямые поставки без посредников. Работаем напрямую с заводами и дилерами в Китае.",
      details: [
        "Без посреднических наценок",
        "Прямые договоры с заводами",
        "Оптовые цены для розницы",
        "Экономия 600-800 тысяч ₽"
      ]
    },
    {
      icon: "🛡️",
      title: "Прозрачность и безопасность",
      description: "Фиксированные сроки, гарантии качества, юридическая защита с двух сторон.",
      details: [
        "2 договора (РФ и Китай)",
        "Фиксированные сроки",
        "Компенсация при форс-мажоре",
        "Юридическая защита"
      ]
    }
  ];

  const comparisonData = [
    {
      parameter: "Срок доставки",
      competitors: "60-90 дней",
      globalMotors: "25-45 дней",
      advantage: "В 2 раза быстрее"
    },
    {
      parameter: "Стоимость",
      competitors: "Рыночная цена",
      globalMotors: "На 20-25% ниже",
      advantage: "Экономия до 800к ₽"
    },
    {
      parameter: "Прозрачность",
      competitors: "Минимальная",
      globalMotors: "Полная отчётность",
      advantage: "Контроль каждого этапа"
    },
    {
      parameter: "Гарантии",
      competitors: "Ограниченные",
      globalMotors: "2 договора",
      advantage: "Двойная защита"
    }
  ];

  return (
    <Layout>
      <div className="bg-gm-white">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-gm-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Почему Global Motors
                </h1>
                <p className="text-xl text-gm-silver mb-8">
                  Мы не просто поставщики — мы ваши надёжные партнёры в покупке автомобиля мечты
                </p>
                <div className="bg-white/10 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">✅ Ваш автомобиль ближе, чем кажется</h3>
                  <p className="text-gm-silver">
                    Прозрачный процесс, честные цены, быстрая доставка — всё что нужно для уверенной покупки
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/c313e781-6d89-4877-bb9e-fc2a9dc5d8ee.png"
                  alt="Коллекция автомобилей Global Motors"
                  className="w-full h-auto rounded-2xl shadow-hero"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Advantages */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gm-black mb-6">Наши главные преимущества</h2>
              <p className="text-xl text-gm-gray-dark">
                Что делает Global Motors лучшим выбором для покупки авто из Китая
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="bg-gradient-card p-8 rounded-2xl shadow-card hover:shadow-hero transition-smooth"
                >
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-accent text-gm-white p-4 rounded-full flex-shrink-0">
                      <span className="text-2xl">{advantage.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gm-black mb-4">{advantage.title}</h3>
                      <p className="text-gm-gray-dark mb-6 leading-relaxed">{advantage.description}</p>
                      <ul className="space-y-2">
                        {advantage.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center space-x-2">
                            <span className="text-green-600">✓</span>
                            <span className="text-gm-black">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-gm-gray-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gm-black mb-6">Global Motors vs Конкуренты</h2>
              <p className="text-xl text-gm-gray-dark">
                Сравните наши условия с предложениями других компаний
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="bg-gm-white rounded-2xl shadow-card overflow-hidden">
                <div className="bg-gradient-accent text-gm-white p-6">
                  <div className="grid grid-cols-4 gap-4 font-bold text-center">
                    <div>Параметр</div>
                    <div>Конкуренты</div>
                    <div>Global Motors</div>
                    <div>Преимущество</div>
                  </div>
                </div>
                {comparisonData.map((row, index) => (
                  <div key={index} className="p-6 border-b border-gm-gray-light last:border-b-0">
                    <div className="grid grid-cols-4 gap-4 text-center items-center">
                      <div className="font-medium text-gm-black">{row.parameter}</div>
                      <div className="text-red-600">{row.competitors}</div>
                      <div className="text-green-600 font-bold">{row.globalMotors}</div>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {row.advantage}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="relative">
                <img
                  src={geelyCarImage}
                  alt="Geely - качество по доступной цене"
                  className="w-full h-auto rounded-2xl shadow-hero"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-20 bg-gm-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gm-black mb-6">Вам можно нам доверять</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-accent text-gm-white p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-gm-black mb-2">Офисы в двух странах</h3>
                <p className="text-gm-gray-dark">Представительства в Москве и Китае для полного контроля</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-accent text-gm-white p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-bold text-gm-black mb-2">Официальные договоры</h3>
                <p className="text-gm-gray-dark">Юридическая защита в России и Китае</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-accent text-gm-white p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-bold text-gm-black mb-2">Сотни довольных клиентов</h3>
                <p className="text-gm-gray-dark">Каждый месяц доставляем десятки автомобилей</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-gm-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              ✅ Ваш автомобиль ближе, чем кажется
            </h2>
            <p className="text-xl text-gm-silver mb-8">
              Присоединяйтесь к сотням довольных клиентов Global Motors. 
              Получите персональное предложение уже сегодня!
            </p>
            <ContactButtons className="justify-center" />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WhyUs;