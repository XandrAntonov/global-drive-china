import Layout from "@/components/Layout/Layout";
import ContactButtons from "@/components/UI/ContactButtons";
import sedanCarImage from "@/assets/sedan-car.jpg";

const About = () => {
  const teamMembers = [
    {
      role: "Директор по развитию",
      location: "Москва",
      responsibilities: ["Стратегическое планирование", "Развитие партнёрских отношений", "Контроль качества"]
    },
    {
      role: "Менеджер по закупкам",
      location: "Китай",
      responsibilities: ["Работа с заводами", "Контроль качества авто", "Логистика в Китае"]
    },
    {
      role: "Таможенный брокер",
      location: "Хоргос",
      responsibilities: ["Оформление документов", "Растаможка", "Контроль на границе"]
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Основание компании",
      description: "Создание Global Motors и первые поставки"
    },
    {
      year: "2021",
      title: "Открытие офиса в Китае",
      description: "Прямая работа с производителями"
    },
    {
      year: "2022", 
      title: "Расширение линейки",
      description: "Добавление европейских и японских брендов"
    },
    {
      year: "2023",
      title: "500+ довольных клиентов",
      description: "Стали лидером рынка по скорости доставки"
    },
    {
      year: "2024",
      title: "Новые возможности",
      description: "Запуск программы б/у автомобилей"
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
                  О компании Global Motors
                </h1>
                <p className="text-xl text-gm-silver mb-8">
                  Мы — команда профессионалов, которая за 4 года стала лидером в сфере 
                  прямых поставок автомобилей из Китая в Россию
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm text-gm-silver">Довольных клиентов</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold">4</div>
                    <div className="text-sm text-gm-silver">Года на рынке</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={sedanCarImage}
                  alt="О компании Global Motors"
                  className="w-full h-auto rounded-2xl shadow-hero"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gm-black mb-6">Наша миссия</h2>
            </div>
            
            <div className="bg-gradient-card p-8 rounded-2xl shadow-card">
              <p className="text-xl text-gm-black text-center leading-relaxed mb-6">
                <strong>Global Motors</strong> — это не просто поставщик автомобилей. 
                Мы создаём мост между российскими покупателями и лучшими автопроизводителями Китая.
              </p>
              <p className="text-lg text-gm-gray-dark text-center leading-relaxed">
                Наша цель — сделать покупку автомобиля из Китая максимально простой, 
                прозрачной и выгодной для каждого клиента. Мы убираем посредников, 
                снижаем риски и ускоряем процесс доставки.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-gm-gray-light">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gm-black mb-6">Наша история</h2>
              <p className="text-xl text-gm-gray-dark">
                Путь от стартапа до лидера рынка
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-accent"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-gm-white p-6 rounded-xl shadow-card">
                        <div className="text-2xl font-bold text-gm-black mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gm-black mb-2">{milestone.title}</h3>
                        <p className="text-gm-gray-dark">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-accent text-gm-white p-3 rounded-full">
                      <span className="text-lg font-bold">{milestone.year}</span>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gm-black mb-6">Наша команда</h2>
              <p className="text-xl text-gm-gray-dark">
                Профессионалы в трёх странах работают для вашего результата
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gradient-card p-8 rounded-2xl shadow-card text-center">
                  <div className="bg-gradient-accent text-gm-white p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">👨‍💼</span>
                  </div>
                  <h3 className="text-xl font-bold text-gm-black mb-2">{member.role}</h3>
                  <p className="text-gm-gray-dark mb-4 font-medium">📍 {member.location}</p>
                  <ul className="space-y-2">
                    {member.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="text-sm text-gm-black flex items-center justify-center">
                        <span className="text-green-600 mr-2">✓</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gm-gray-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gm-black mb-6">Наши ценности</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gm-white p-8 rounded-2xl shadow-card">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-gm-black mb-4">Честность</h3>
                <p className="text-gm-gray-dark">
                  Мы говорим правду о сроках, ценах и рисках. 
                  Никаких скрытых платежей и ложных обещаний.
                </p>
              </div>

              <div className="bg-gm-white p-8 rounded-2xl shadow-card">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-gm-black mb-4">Скорость</h3>
                <p className="text-gm-gray-dark">
                  Каждый день на счету. Мы оптимизировали процессы, 
                  чтобы доставлять авто быстрее конкурентов.
                </p>
              </div>

              <div className="bg-gm-white p-8 rounded-2xl shadow-card">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-2xl font-bold text-gm-black mb-4">Надёжность</h3>
                <p className="text-gm-gray-dark">
                  Двойные договоры, страхование рисков, 
                  компенсация убытков при форс-мажоре.
                </p>
              </div>

              <div className="bg-gm-white p-8 rounded-2xl shadow-card">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-gm-black mb-4">Выгода</h3>
                <p className="text-gm-gray-dark">
                  Прямые поставки без посредников позволяют 
                  экономить сотни тысяч рублей.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-gm-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Станьте частью нашей истории успеха
            </h2>
            <p className="text-xl text-gm-silver mb-8">
              Присоединяйтесь к сотням довольных клиентов Global Motors
            </p>
            <ContactButtons className="justify-center" />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;