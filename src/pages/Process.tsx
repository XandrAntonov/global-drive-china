import Layout from "@/components/Layout/Layout";
import ContactButtons from "@/components/UI/ContactButtons";

const Process = () => {
  const processSteps = [
    {
      title: "Этап 1 — Заключение договора",
      icon: "🤝",
      steps: [
        { icon: "🚗", title: "Выбор автомобиля", description: "Определитесь с моделью и комплектацией" },
        { icon: "📄", title: "Агентский договор", description: "Фиксируем все условия и гарантии" },
        { icon: "💵", title: "Оплата брони", description: "100 000 ₽ (учитывается в общей стоимости)" },
      ]
    },
    {
      title: "Этап 2 — Оплата инвойса и экспорта",
      icon: "💰",
      steps: [
        { icon: "📑", title: "Получение инвойса", description: "Официальный счёт-фактура" },
        { icon: "👛", title: "Способ оплаты", description: "В Китай: перевод в юанях через банки РФ\nВ Москве: оплата наличными рублями или долларами" },
        { icon: "💬", title: "Значение платежа", description: "Подтверждение покупки, запуск подготовки авто" },
      ]
    },
    {
      title: "Этап 3 — Процессы в Китае",
      icon: "🏭",
      steps: [
        { icon: "⚙️", title: "Авто под заказ", description: "Производство 1–4 недели, логистика до Хоргоса 7–10 дней" },
        { icon: "📦", title: "Авто из наличия", description: "Доставка 7–10 дней" },
        { icon: "➡️", title: "После готовности", description: "Оплачивается экспорт (документы, логистика по Китаю, подготовка к границе)" },
      ]
    },
    {
      title: "Этап 4 — Процессы на границе",
      icon: "🛂",
      steps: [
        { icon: "📑➡️", title: "Оформление экспортных документов", description: "Китай" },
        { icon: "🚙🔧", title: "Детейлинг", description: "Предпродажная подготовка" },
        { icon: "💰", title: "Оплата документов по РФ", description: "120 000 ₽ (оформление полного пакета документов)" },
      ]
    },
    {
      title: "Этап 5 — Таможня в РФ",
      icon: "🇷🇺",
      steps: [
        { icon: "🚛", title: "Логистика Хоргос → Москва", description: "Около 14 дней, стоимость зависит от города" },
        { icon: "📦", title: "Растаможка автомобиля", description: "Декларация, досмотр, платежи" },
        { icon: "💰", title: "Заключительный этап оплаты", description: "Пошлина, НДС, утилизационный и таможенный сбор" },
        { icon: "✅", title: "Результат", description: "Автомобиль растаможен и готов к выдаче" },
      ]
    }
  ];

  const deliveryTable = [
    {
      type: "Авто под заказ",
      production: "1–4 недели",
      logistics: "7–10 дней",
      total: "35–45 дней"
    },
    {
      type: "Авто из наличия",
      production: "—",
      logistics: "7–10 дней",
      total: "25–35 дней"
    }
  ];

  return (
    <Layout>
      <div className="bg-gm-white">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-gm-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Как, сколько, когда?
            </h1>
            <p className="text-xl text-gm-silver">
              Подробный процесс доставки автомобиля из Китая — прозрачно и понятно
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {processSteps.map((stage, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center mb-8">
                    <div className="bg-gradient-accent text-gm-white p-4 rounded-full mr-6">
                      <span className="text-2xl">{stage.icon}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gm-black">{stage.title}</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stage.steps.map((step, stepIndex) => (
                      <div
                        key={stepIndex}
                        className="bg-gradient-card p-6 rounded-xl shadow-card hover:shadow-hero transition-smooth"
                      >
                        <div className="flex items-start space-x-4">
                          <span className="text-2xl flex-shrink-0">{step.icon}</span>
                          <div>
                            <h3 className="text-lg font-bold text-gm-black mb-2">{step.title}</h3>
                            <p className="text-gm-gray-dark whitespace-pre-line">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timing Table */}
        <section className="py-20 bg-gm-gray-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gm-black mb-4">Сроки доставки</h2>
              <p className="text-xl text-gm-gray-dark">
                Зависят от наличия автомобиля на складе или необходимости производства
              </p>
            </div>
            
            <div className="bg-gm-white rounded-2xl shadow-card overflow-hidden">
              <div className="bg-gradient-accent text-gm-white p-6">
                <div className="grid grid-cols-4 gap-4 font-bold text-center">
                  <div>Тип заказа</div>
                  <div>Производство</div>
                  <div>Логистика до Хоргоса</div>
                  <div>Общий срок*</div>
                </div>
              </div>
              {deliveryTable.map((row, index) => (
                <div key={index} className="p-6 border-b border-gm-gray-light last:border-b-0">
                  <div className="grid grid-cols-4 gap-4 text-center">
                    <div className="font-medium text-gm-black">{row.type}</div>
                    <div className="text-gm-gray-dark">{row.production}</div>
                    <div className="text-gm-gray-dark">{row.logistics}</div>
                    <div className="font-bold text-gm-black">{row.total}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gm-gray-dark">
                * Указаны сроки до границы РФ. Доставка по России занимает дополнительно 10-14 дней
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-gm-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Остались вопросы о процессе?
            </h2>
            <p className="text-xl text-gm-silver mb-8">
              Наши менеджеры подробно расскажут обо всех этапах и ответят на ваши вопросы
            </p>
            <ContactButtons className="justify-center" />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Process;