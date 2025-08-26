import Layout from "@/components/Layout/Layout";

const Cookies = () => {
  return (
    <Layout>
      <div className="bg-gm-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gm-black mb-8">Политика использования Cookie</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-card p-6 rounded-xl shadow-card mb-8">
              <p className="text-gm-gray-dark mb-0">
                Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gm-black mb-4">1. Что такое Cookie</h2>
              <p className="text-gm-gray-dark mb-4">
                Cookie (куки) — это небольшие текстовые файлы, которые сохраняются в вашем браузере 
                при посещении веб-сайтов. Они помогают сайтам запоминать информацию о вашем визите.
              </p>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                <p className="text-blue-800 mb-0">
                  <strong>Важно:</strong> Cookie не содержат вирусов и не могут получить доступ 
                  к информации на вашем компьютере. Они используются исключительно для улучшения 
                  работы сайта.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gm-black mb-4">2. Какие Cookie мы используем</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-card p-6 rounded-xl shadow-card">
                  <h3 className="text-xl font-bold text-gm-black mb-3 flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Необходимые Cookie
                  </h3>
                  <p className="text-gm-gray-dark mb-3">
                    Обеспечивают базовую функциональность сайта. Без них сайт не может работать правильно.
                  </p>
                  <ul className="list-disc list-inside text-gm-gray-dark space-y-1">
                    <li>Сохранение настроек сайта</li>
                    <li>Управление сессиями пользователей</li>
                    <li>Обеспечение безопасности</li>
                  </ul>
                </div>

                <div className="bg-gradient-card p-6 rounded-xl shadow-card">
                  <h3 className="text-xl font-bold text-gm-black mb-3 flex items-center">
                    <span className="text-blue-600 mr-2">📊</span>
                    Аналитические Cookie
                  </h3>
                  <p className="text-gm-gray-dark mb-3">
                    Помогают понять, как посетители используют сайт, чтобы улучшить его работу.
                  </p>
                  <ul className="list-disc list-inside text-gm-gray-dark space-y-1">
                    <li>Статистика посещений</li>
                    <li>Анализ поведения пользователей</li>
                    <li>Отслеживание эффективности страниц</li>
                  </ul>
                </div>

                <div className="bg-gradient-card p-6 rounded-xl shadow-card">
                  <h3 className="text-xl font-bold text-gm-black mb-3 flex items-center">
                    <span className="text-purple-600 mr-2">🎯</span>
                    Функциональные Cookie
                  </h3>
                  <p className="text-gm-gray-dark mb-3">
                    Запоминают ваши предпочтения для более удобного использования сайта.
                  </p>
                  <ul className="list-disc list-inside text-gm-gray-dark space-y-1">
                    <li>Сохранение языковых настроек</li>
                    <li>Запоминание выборов пользователя</li>
                    <li>Персонализация контента</li>
                  </ul>
                </div>

                <div className="bg-gradient-card p-6 rounded-xl shadow-card">
                  <h3 className="text-xl font-bold text-gm-black mb-3 flex items-center">
                    <span className="text-orange-600 mr-2">📢</span>
                    Маркетинговые Cookie
                  </h3>
                  <p className="text-gm-gray-dark mb-3">
                    Используются для показа релевантной рекламы и оценки эффективности рекламных кампаний.
                  </p>
                  <ul className="list-disc list-inside text-gm-gray-dark space-y-1">
                    <li>Отслеживание рекламных кампаний</li>
                    <li>Персонализированная реклама</li>
                    <li>Ретаргетинг</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gm-black mb-4">3. Третьи стороны</h2>
              <p className="text-gm-gray-dark mb-4">
                Некоторые Cookie устанавливаются третьими сторонами для предоставления 
                дополнительных функций:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gm-black mb-3">Google Analytics</h3>
                  <p className="text-gm-gray-dark text-sm mb-2">
                    Анализ трафика и поведения пользователей
                  </p>
                  <a 
                    href="https://policies.google.com/privacy" 
                    className="text-blue-600 hover:underline text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Политика конфиденциальности Google
                  </a>
                </div>

                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gm-black mb-3">Виджеты соцсетей</h3>
                  <p className="text-gm-gray-dark text-sm mb-2">
                    Кнопки социальных сетей и встроенный контент
                  </p>
                  <p className="text-gm-gray-dark text-sm">
                    Telegram, WhatsApp и другие мессенджеры
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gm-black mb-4">4. Управление Cookie</h2>
              
              <div className="space-y-6">
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-yellow-800 mb-3">Настройки браузера</h3>
                  <p className="text-yellow-700 mb-3">
                    Вы можете управлять Cookie через настройки своего браузера:
                  </p>
                  <ul className="list-disc list-inside text-yellow-700 space-y-1">
                    <li>Блокировать все Cookie</li>
                    <li>Удалить существующие Cookie</li>
                    <li>Настроить исключения для определённых сайтов</li>
                    <li>Получать уведомления перед установкой Cookie</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-gm-black mb-3">Chrome</h3>
                    <p className="text-gm-gray-dark text-sm">
                      Настройки → Конфиденциальность и безопасность → Файлы cookie
                    </p>
                  </div>

                  <div className="border border-gray-200 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-gm-black mb-3">Firefox</h3>
                    <p className="text-gm-gray-dark text-sm">
                      Настройки → Приватность и защита → Куки и данные сайтов
                    </p>
                  </div>

                  <div className="border border-gray-200 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-gm-black mb-3">Safari</h3>
                    <p className="text-gm-gray-dark text-sm">
                      Настройки → Конфиденциальность → Файлы cookie
                    </p>
                  </div>

                  <div className="border border-gray-200 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-gm-black mb-3">Edge</h3>
                    <p className="text-gm-gray-dark text-sm">
                      Настройки → Конфиденциальность → Файлы cookie
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gm-black mb-4">5. Влияние на функциональность</h2>
              <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-red-800 mb-3">Важное предупреждение</h3>
                <p className="text-red-700 mb-3">
                  Отключение Cookie может повлиять на работу сайта:
                </p>
                <ul className="list-disc list-inside text-red-700 space-y-1">
                  <li>Некоторые функции могут стать недоступными</li>
                  <li>Настройки не будут сохраняться</li>
                  <li>Возможны проблемы с авторизацией</li>
                  <li>Персонализация контента будет ограничена</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gm-black mb-4">6. Согласие на использование</h2>
              <p className="text-gm-gray-dark mb-4">
                Продолжая использовать наш сайт, вы соглашаетесь с использованием Cookie 
                в соответствии с настоящей политикой.
              </p>
              <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                <p className="text-green-800">
                  <strong>Согласие:</strong> При первом посещении сайта вы увидите уведомление 
                  о использовании Cookie. Нажимая «Принять» или продолжая пользоваться сайтом, 
                  вы даёте согласие на их использование.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gm-black mb-4">7. Обновления политики</h2>
              <p className="text-gm-gray-dark mb-4">
                Мы можем периодически обновлять настоящую Политику использования Cookie. 
                Все изменения будут опубликованы на этой странице.
              </p>
              <p className="text-gm-gray-dark">
                Рекомендуем регулярно проверять эту страницу для получения актуальной информации.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gm-black mb-4">8. Контакты</h2>
              <div className="bg-gradient-card p-6 rounded-xl shadow-card">
                <p className="text-gm-gray-dark mb-4">
                  Если у вас есть вопросы о нашей Политике использования Cookie, обращайтесь:
                </p>
                <div className="space-y-2 text-gm-black">
                  <p><strong>Email:</strong> info@globalmotors.ru</p>
                  <p><strong>Телефон:</strong> +7 925 476-55-28</p>
                  <p><strong>Telegram:</strong> @manager_gm_bot</p>
                  <p><strong>Адрес:</strong> Москва, Электродная 2, стр. 34</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cookies;