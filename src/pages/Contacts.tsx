import Layout from "@/components/Layout/Layout";
import ContactButtons from "@/components/UI/ContactButtons";
import { MapPin, Mail, Clock, Phone, Send, MessageCircle } from "lucide-react";
import customerServiceImage from "@/assets/customer-service.jpg";

const Contacts = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Адрес офиса",
      content: "Москва, Электродная 2, стр. 34",
      description: "Главный офис в России"
    },
    {
      icon: Mail,
      title: "Электронная почта",
      content: "info@globalmotors.ru",
      description: "Официальная корреспонденция"
    },
    {
      icon: Clock,
      title: "Режим работы",
      content: "Пн-Пт: 9:00-19:00, Сб: 10:00-16:00",
      description: "Московское время"
    },
    {
      icon: Phone,
      title: "Экстренная связь",
      content: "+7 925 476-55-28",
      description: "Для срочных вопросов"
    }
  ];

  const socialContacts = [
    {
      platform: "Telegram",
      handle: "@manager_gm_bot",
      description: "Основной канал связи",
      bgColor: "bg-blue-500 hover:bg-blue-600",
      icon: "Send"
    },
    {
      platform: "WhatsApp", 
      handle: "+7 925 476-55-28",
      description: "Альтернативный способ связи",
      bgColor: "bg-emerald-600 hover:bg-emerald-700",
      icon: "MessageCircle"
    }
  ];

  const offices = [
    {
      city: "Москва, Россия",
      address: "Электродная 2, стр. 34",
      role: "Главный офис",
      responsibilities: ["Работа с клиентами", "Оформление договоров", "Финальная выдача авто"]
    },
    {
      city: "Урумчи, Китай", 
      address: "Производственная зона",
      role: "Представительство",
      responsibilities: ["Закупка автомобилей", "Контроль качества", "Логистика в Китае"]
    },
    {
      city: "Хоргос, Граница",
      address: "Таможенная зона",
      role: "Логистический центр", 
      responsibilities: ["Растаможка", "Документооборот", "Подготовка к отправке"]
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
                  Контакты Global Motors
                </h1>
                <p className="text-xl text-gm-silver mb-8">
                  Мы всегда на связи — выберите удобный способ для общения
                </p>
                <ContactButtons className="justify-start" />
              </div>
              <div className="relative">
                <img
                  src={customerServiceImage}
                  alt="Служба поддержки Global Motors - мы всегда готовы ответить на ваши вопросы"
                  className="w-full h-auto rounded-2xl shadow-hero"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Contact Info */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <div key={index} className="bg-gradient-card p-6 rounded-xl shadow-card text-center">
                    <div className="bg-gradient-accent text-gm-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gm-black mb-2">{contact.title}</h3>
                    <p className="text-gm-black font-medium mb-1">{contact.content}</p>
                    <p className="text-sm text-gm-gray-dark">{contact.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Social Contacts */}
        <section className="py-20 bg-gm-gray-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gm-black mb-4">Мессенджеры</h2>
              <p className="text-xl text-gm-gray-dark">
                Самый быстрый способ получить ответ на ваши вопросы
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {socialContacts.map((social, index) => (
                <div key={index} className="bg-gm-white p-8 rounded-2xl shadow-card">
                  <div className="flex items-center mb-6">
                    <div className={`${social.bgColor} text-white p-4 rounded-full mr-4 transition-smooth flex items-center justify-center`}>
                      {social.icon === "Send" ? <Send size={24} /> : <MessageCircle size={24} />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gm-black">{social.platform}</h3>
                      <p className="text-gm-gray-dark">{social.description}</p>
                    </div>
                  </div>
                  <p className="text-lg font-mono text-gm-black mb-4">{social.handle}</p>
                  <a
                    href={social.platform === 'Telegram' ? 'https://t.me/manager_gm_bot' : 'https://api.whatsapp.com/send?phone=79254765528'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center w-full ${social.bgColor} text-white px-6 py-3 rounded-lg transition-smooth font-medium`}
                  >
                    Написать в {social.platform}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Offices */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gm-black mb-6">Наши офисы</h2>
              <p className="text-xl text-gm-gray-dark">
                Представительства в трёх точках для полного контроля процесса
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <div key={index} className="bg-gradient-card p-8 rounded-2xl shadow-card">
                  <div className="text-center mb-6">
                    <div className="bg-gradient-accent text-gm-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">🏢</span>
                    </div>
                    <h3 className="text-xl font-bold text-gm-black mb-1">{office.city}</h3>
                    <p className="text-gm-gray-dark mb-2">{office.address}</p>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {office.role}
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gm-black mb-3">Задачи офиса:</h4>
                    <ul className="space-y-2">
                      {office.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-center text-sm text-gm-gray-dark">
                          <span className="text-green-600 mr-2">✓</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gm-gray-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gm-black mb-6">Часто задаваемые вопросы</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gm-white p-6 rounded-xl shadow-card">
                <h3 className="text-lg font-bold text-gm-black mb-2">Как быстро вы отвечаете на сообщения?</h3>
                <p className="text-gm-gray-dark">
                  В рабочее время (9:00-19:00 МСК) мы отвечаем в течение 15-30 минут. 
                  В выходные — до 2 часов. Срочные вопросы решаем круглосуточно.
                </p>
              </div>

              <div className="bg-gm-white p-6 rounded-xl shadow-card">
                <h3 className="text-lg font-bold text-gm-black mb-2">Можно ли приехать в офис без записи?</h3>
                <p className="text-gm-gray-dark">
                  Рекомендуем предварительно связаться с нами для записи на встречу. 
                  Это поможет нам подготовить все документы и уделить вам максимум внимания.
                </p>
              </div>

              <div className="bg-gm-white p-6 rounded-xl shadow-card">
                <h3 className="text-lg font-bold text-gm-black mb-2">На каких языках вы общаетесь?</h3>
                <p className="text-gm-gray-dark">
                  Основное общение ведём на русском языке. При работе с китайскими 
                  поставщиками используем китайский и английский языки.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-gm-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Готовы обсудить вашу покупку?
            </h2>
            <p className="text-xl text-gm-silver mb-8">
              Свяжитесь с нами любым удобным способом — мы ответим на все вопросы
            </p>
            <ContactButtons className="justify-center" />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contacts;