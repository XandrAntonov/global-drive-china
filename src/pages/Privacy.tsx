import Layout from "@/components/Layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <div className="bg-gm-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gm-black mb-8">Политика конфиденциальности</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-card p-6 rounded-xl shadow-card mb-8">
              <p className="text-gm-gray-dark mb-0">
                Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gm-black mb-4">1. Общие положения</h2>
              <p className="text-gm-gray-dark mb-4">
                Настоящая Политика конфиденциальности определяет порядок обработки персональных данных 
                компанией Global Motors (далее — «Компания»).
              </p>
              <p className="text-gm-gray-dark">
                Используя наш сайт и услуги, вы соглашаетесь с условиями настоящей Политики.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gm-black mb-4">2. Какие данные мы собираем</h2>
              <div className="bg-gm-gray-light p-6 rounded-xl mb-4">
                <h3 className="text-xl font-bold text-gm-black mb-3">Персональные данные:</h3>
                <ul className="list-disc list-inside text-gm-gray-dark space-y-2">
                  <li>Имя и фамилия</li>
                  <li>Номер телефона</li>
                  <li>Адрес электронной почты</li>
                  <li>Адрес доставки</li>
                  <li>Данные документов (при заключении договора)</li>
                </ul>
              </div>
              <div className="bg-gm-gray-light p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gm-black mb-3">Технические данные:</h3>
                <ul className="list-disc list-inside text-gm-gray-dark space-y-2">
                  <li>IP-адрес</li>
                  <li>Информация о браузере</li>
                  <li>Данные о посещённых страницах</li>
                  <li>Время пребывания на сайте</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gm-black mb-4">3. Цели обработки данных</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-card p-6 rounded-xl shadow-card">
                  <h3 className="text-lg font-bold text-gm-black mb-3">Основные цели:</h3>
                  <ul className="list-disc list-inside text-gm-gray-dark space-y-2">
                    <li>Предоставление услуг</li>
                    <li>Связь с клиентами</li>
                    <li>Исполнение договоров</li>
                    <li>Техническая поддержка</li>
                  </ul>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl shadow-card">
                  <h3 className="text-lg font-bold text-gm-black mb-3">Дополнительные цели:</h3>
                  <ul className="list-disc list-inside text-gm-gray-dark space-y-2">
                    <li>Улучшение сервиса</li>
                    <li>Аналитика посещений</li>
                    <li>Маркетинговые активности</li>
                    <li>Соблюдение законов</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gm-black mb-4">4. Правовые основания обработки</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-gm-gray-dark">
                    <strong>Согласие субъекта данных</strong> — при подписке на рассылку, 
                    заполнении форм обратной связи
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-gm-gray-dark">
                    <strong>Исполнение договора</strong> — при оказании услуг по доставке автомобилей
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="text-gm-gray-dark">
                    <strong>Законные интересы</strong> — для обеспечения безопасности, 
                    предотвращения мошенничества
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gm-black mb-4">5. Передача данных третьим лицам</h2>
              <p className="text-gm-gray-dark mb-4">
                Мы не продаём и не передаём ваши персональные данные третьим лицам, 
                за исключением следующих случаев:
              </p>
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
                <ul className="list-disc list-inside text-yellow-800 space-y-2">
                  <li>При наличии вашего явного согласия</li>
                  <li>Для исполнения договоров (партнёры в Китае, логистические компании)</li>
                  <li>По требованию государственных органов</li>
                  <li>Для защиты наших законных интересов</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gm-black mb-4">6. Ваши права</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-card p-6 rounded-xl shadow-card">
                  <h3 className="text-lg font-bold text-gm-black mb-3">Вы имеете право:</h3>
                  <ul className="list-disc list-inside text-gm-gray-dark space-y-2">
                    <li>Знать о обработке ваших данных</li>
                    <li>Получить копию ваших данных</li>
                    <li>Исправить неточные данные</li>
                    <li>Удалить ваши данные</li>
                  </ul>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl shadow-card">
                  <h3 className="text-lg font-bold text-gm-black mb-3">А также:</h3>
                  <ul className="list-disc list-inside text-gm-gray-dark space-y-2">
                    <li>Ограничить обработку</li>
                    <li>Отозвать согласие</li>
                    <li>Подать жалобу в Роскомнадзор</li>
                    <li>Получить данные в структурированном виде</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gm-black mb-4">7. Безопасность данных</h2>
              <p className="text-gm-gray-dark mb-4">
                Мы применяем организационные и технические меры для защиты персональных данных:
              </p>
              <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                <ul className="list-disc list-inside text-green-800 space-y-2">
                  <li>Шифрование данных при передаче (SSL/TLS)</li>
                  <li>Ограничение доступа к данным</li>
                  <li>Регулярное обновление систем безопасности</li>
                  <li>Обучение сотрудников правилам обработки данных</li>
                  <li>Контроль действий с персональными данными</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gm-black mb-4">8. Cookies и аналитика</h2>
              <p className="text-gm-gray-dark mb-4">
                Наш сайт использует файлы cookie для улучшения функциональности и анализа трафика. 
                Подробнее в нашей <a href="/cookies" className="text-blue-600 hover:underline">Политике использования Cookie</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gm-black mb-4">9. Контактная информация</h2>
              <div className="bg-gradient-card p-6 rounded-xl shadow-card">
                <p className="text-gm-gray-dark mb-4">
                  По вопросам обработки персональных данных обращайтесь:
                </p>
                <div className="space-y-2 text-gm-black">
                  <p><strong>Email:</strong> info@globalmotors.ru</p>
                  <p><strong>Телефон:</strong> +7 925 476-55-28</p>
                  <p><strong>Адрес:</strong> Москва, Электродная 2, стр. 34</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gm-black mb-4">10. Изменения в политике</h2>
              <p className="text-gm-gray-dark">
                Мы оставляем за собой право изменять настоящую Политику. 
                Все изменения публикуются на данной странице. 
                Рекомендуем периодически проверять эту страницу для получения актуальной информации.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;