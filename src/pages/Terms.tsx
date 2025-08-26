import Layout from "@/components/Layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <div className="bg-gm-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gm-black mb-8">Условия использования</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-card p-6 rounded-xl shadow-card mb-8">
              <p className="text-gm-gray-dark mb-0">
                Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gm-black mb-4">1. Общие условия</h2>
              <p className="text-gm-gray-dark mb-4">
                Настоящие Условия использования регулируют использование веб-сайта и услуг 
                компании Global Motors (далее — «Компания», «мы»).
              </p>
              <p className="text-gm-gray-dark">
                Используя наш сайт и услуги, вы соглашаетесь соблюдать настоящие Условия. 
                Если вы не согласны с какими-либо условиями, не используйте наш сайт.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gm-black mb-4">2. Описание услуг</h2>
              <div className="bg-gradient-card p-6 rounded-xl shadow-card">
                <h3 className="text-xl font-bold text-gm-black mb-3">Global Motors предоставляет:</h3>
                <ul className="list-disc list-inside text-gm-gray-dark space-y-2">
                  <li>Услуги по импорту автомобилей из Китая</li>
                  <li>Консультации по выбору автомобилей</li>
                  <li>Организацию логистики и растаможки</li>
                  <li>Юридическое сопровождение сделок</li>
                  <li>Послепродажную поддержку</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gm-black mb-4">3. Права и обязанности сторон</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-green-800 mb-3">Наши обязательства:</h3>
                  <ul className="list-disc list-inside text-green-700 space-y-2">
                    <li>Предоставлять качественные услуги</li>
                    <li>Соблюдать сроки доставки</li>
                    <li>Информировать о ходе заказа</li>
                    <li>Обеспечивать юридическую чистоту сделок</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-blue-800 mb-3">Ваши обязанности:</h3>
                  <ul className="list-disc list-inside text-blue-700 space-y-2">
                    <li>Предоставлять достоверную информацию</li>
                    <li>Своевременно вносить платежи</li>
                    <li>Соблюдать условия договора</li>
                    <li>Сообщать об изменениях контактных данных</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gm-black mb-4">4. Порядок оказания услуг</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-bold text-gm-black mb-2">Этап 1: Заявка</h3>
                  <p className="text-gm-gray-dark">
                    Клиент подаёт заявку через сайт или связывается с менеджером напрямую
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-bold text-gm-black mb-2">Этап 2: Консультация</h3>
                  <p className="text-gm-gray-dark">
                    Наш специалист проводит консультацию и предоставляет коммерческое предложение
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-lg font-bold text-gm-black mb-2">Этап 3: Договор</h3>
                  <p className="text-gm-gray-dark">
                    При согласии заключается агентский договор с фиксацией всех условий
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg font-bold text-gm-black mb-2">Этап 4: Исполнение</h3>
                  <p className="text-gm-gray-dark">
                    Выполняем все этапы доставки с регулярным информированием клиента
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gm-black mb-4">5. Цены и оплата</h2>
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl mb-4">
                <h3 className="text-lg font-bold text-yellow-800 mb-3">Важная информация о ценах:</h3>
                <ul className="list-disc list-inside text-yellow-700 space-y-2">
                  <li>Цены указаны в рублях и действительны на момент публикации</li>
                  <li>Финальная стоимость фиксируется в договоре</li>
                  <li>Оплата производится поэтапно согласно договору</li>
                  <li>Курс валют может влиять на итоговую стоимость</li>
                </ul>
              </div>
              <p className="text-gm-gray-dark">
                Способы оплаты: банковский перевод в рублях, наличные (в офисе), 
                перевод в юанях через российские банки.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gm-black mb-4">6. Сроки и ответственность</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-card p-6 rounded-xl shadow-card">
                  <h3 className="text-lg font-bold text-gm-black mb-3">Стандартные сроки:</h3>
                  <ul className="list-disc list-inside text-gm-gray-dark space-y-2">
                    <li>Авто в наличии: 25-35 дней</li>
                    <li>Авто под заказ: 35-45 дней</li>
                    <li>Оформление документов: 3-5 дней</li>
                    <li>Доставка по России: 10-14 дней</li>
                  </ul>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl shadow-card">
                  <h3 className="text-lg font-bold text-gm-black mb-3">Форс-мажор:</h3>
                  <ul className="list-disc list-inside text-gm-gray-dark space-y-2">
                    <li>Изменения в законодательстве</li>
                    <li>Закрытие границ</li>
                    <li>Стихийные бедствия</li>
                    <li>Действия третьих лиц</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gm-black mb-4">7. Гарантии и ограничения</h2>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-green-800 mb-3">Наши гарантии:</h3>
                  <ul className="list-disc list-inside text-green-700 space-y-2">
                    <li>Юридическая чистота автомобиля</li>
                    <li>Соответствие заявленным характеристикам</li>
                    <li>Полное оформление документов</li>
                    <li>Компенсация при форс-мажоре согласно договору</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-red-800 mb-3">Ограничения ответственности:</h3>
                  <ul className="list-disc list-inside text-red-700 space-y-2">
                    <li>Не несём ответственность за скрытые дефекты завода-изготовителя</li>
                    <li>Не гарантируем наличие запчастей в РФ</li>
                    <li>Не отвечаем за изменения в курсах валют</li>
                    <li>Ограничения по гарантийному обслуживанию в РФ</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gm-black mb-4">8. Правила использования сайта</h2>
              <p className="text-gm-gray-dark mb-4">При использовании нашего сайта запрещается:</p>
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl">
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Использовать сайт в незаконных целях</li>
                  <li>Нарушать работу сайта или серверов</li>
                  <li>Копировать материалы без разрешения</li>
                  <li>Распространять вирусы или вредоносный код</li>
                  <li>Собирать данные других пользователей</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gm-black mb-4">9. Разрешение споров</h2>
              <p className="text-gm-gray-dark mb-4">
                Все споры и разногласия стороны стараются решить путём переговоров. 
                При невозможности достижения соглашения:
              </p>
              <div className="border-l-4 border-blue-500 pl-4">
                <ul className="list-disc list-inside text-gm-gray-dark space-y-2">
                  <li>Споры рассматриваются в суде по месту нахождения ответчика</li>
                  <li>Применяется российское законодательство</li>
                  <li>Возможно досудебное урегулирование через претензионный порядок</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gm-black mb-4">10. Контактная информация</h2>
              <div className="bg-gradient-card p-6 rounded-xl shadow-card">
                <div className="space-y-2 text-gm-black">
                  <p><strong>ООО «Global Motors»</strong></p>
                  <p><strong>Адрес:</strong> Москва, Электродная 2, стр. 34</p>
                  <p><strong>Email:</strong> info@globalmotors.ru</p>
                  <p><strong>Телефон:</strong> +7 925 476-55-28</p>
                  <p><strong>Telegram:</strong> @manager_gm_bot</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gm-black mb-4">11. Заключительные положения</h2>
              <p className="text-gm-gray-dark mb-4">
                Настоящие Условия могут быть изменены Компанией в одностороннем порядке. 
                Изменения вступают в силу с момента публикации на сайте.
              </p>
              <p className="text-gm-gray-dark">
                Если какое-либо положение настоящих Условий будет признано недействительным, 
                остальные положения сохраняют свою силу.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;