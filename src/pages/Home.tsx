import { useState, useEffect } from "react";
import Layout from "@/components/Layout/Layout";
import ContactButtons from "@/components/UI/ContactButtons";
import heroCarImage from "@/assets/hero-car.jpg";
import suvCarImage from "@/assets/suv-car.jpg";
import sedanCarImage from "@/assets/sedan-car.jpg";
import carCollectionImage from "@/assets/car-collection.jpg";
import bmwCarImage from "@/assets/bmw-showroom.jpg";
import hyundaiCarImage from "@/assets/hyundai-showroom-wide.jpg";
import lixiangCarImage from "@/assets/lixiang-car.jpg";

const Home = () => {
  const [currentRate] = useState(12.13);

  const carPrices = [
    { model: "Lixiang L6 Pro", price: "4 428 000" },
    { model: "Lixiang L7 Ultra", price: "6 187 000" },
    { model: "Lixiang L8 Ultra", price: "6 531 000" },
    { model: "Lixiang L9 Ultra", price: "7 531 000" },
    { model: "Zeekr 001 You", price: "5 749 000" },
    { model: "Denza Z9 Ultra", price: "7 081 000" },
    { model: "Denza Z9 GT Ultra", price: "7 013 000" },
    { model: "Voyah Free 318 4WD", price: "4 474 000" },
    { model: "Avatr 07 Ultra", price: "5 062 000" },
    { model: "Lynkco 09 EM-P Ultra", price: "5 550 000" },
    { model: "Leopard 8 Flagship", price: "6 578 000" },
    { model: "Leopard 5 Flagship", price: "5 112 000" },
  ];

  const advantages = [
    { icon: "✔️", text: "Цены ниже рыночных на 20–25%" },
    { icon: "✔️", text: "Экономия до 800 000 ₽" },
    { icon: "✔️", text: "Срок доставки — от 25 до 45 дней" },
    { icon: "✔️", text: "Юридическая защита с двух сторон (2 договора)" },
    { icon: "✔️", text: "Отчётность и прозрачность на каждом этапе" },
    { icon: "✔️", text: "Компенсация убытков при форс-мажоре" },
  ];

  const carBrands = [
    {
      category: "Топовые китайские бренды",
      brands: ["Lixiang", "ZEEKR", "Voyah", "Avatr"],
      image: "/lovable-uploads/bc529fec-87f2-4b9f-9ac5-25fe981f0473.png",
    },
    {
      category: "Европейские марки из Китая",
      brands: ["BMW", "Mercedes"],
      image: bmwCarImage,
    },
    {
      category: "Корейские и японские авто",
      brands: ["Hyundai", "Kia", "Toyota", "Honda", "Lexus", "Nissan"],
      image: hyundaiCarImage,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-gm-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Экономим{" "}
                <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  600-800 тысяч ₽
                </span>{" "}
                на покупке авто
              </h1>
              <p className="text-xl text-gm-silver leading-relaxed">
                Global Motors — прямой поставщик авто из Китая, который помогает вам сэкономить 
                сотни тысяч рублей и получить автомобиль в 2 раза быстрее, чем у большинства на рынке.
              </p>
              <p className="text-lg text-gm-silver">
                Мы — не перекупы и не посредники. Мы контролируем весь путь машины — от завода в Китае 
                до вашего двора. Вы всегда на связи с менеджером, а все этапы доставки фиксируются и прозрачны.
              </p>
              <ContactButtons />
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/bc529fec-87f2-4b9f-9ac5-25fe981f0473.png"
                alt="Китайский автомобиль серебристого цвета"
                className="w-full h-auto rounded-2xl shadow-hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Yuan Rate Section */}
      <section className="py-16 bg-gm-gray-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
              <h2 className="text-3xl font-bold text-gm-black mb-4">
                <span className="text-4xl text-red-600">{currentRate}</span> — курс юаня на сегодня 🔥
              </h2>
              <p className="text-lg text-gm-gray-dark mb-6">
                Ловите момент🙌 В прошлый понедельник курс был 12.61, что будет еще через неделю — неизвестно.
              </p>
              <p className="text-gm-gray-dark">
                Даже наши клиенты ни раз говорили, как важно не ждать подходящего момента, а покупать 
                здесь и сейчас, когда курс хороший.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/lovable-uploads/77a53502-7ffc-4391-890a-4251f45e3184.png"
                alt="График изменения курса юаня - было 12,61 ₽, стало 12,13 ₽"
                className="w-full max-w-md h-auto rounded-2xl shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gm-black mb-6">Почему выбирают нас</h2>
            <p className="text-xl text-gm-gray-dark">Главные преимущества работы с Global Motors</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="bg-gradient-card p-6 rounded-xl shadow-card hover:shadow-hero transition-smooth"
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl text-green-600">{advantage.icon}</span>
                    <p className="text-lg text-gm-black font-medium">{advantage.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <img
                src={lixiangCarImage}
                alt="Lixiang - один из топовых китайских брендов"
                className="w-full h-auto rounded-2xl shadow-hero"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                <p className="font-medium">Lixiang L9</p>
                <p className="text-sm text-gray-300">Премиум электро-SUV</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Car Brands Section */}
      <section className="py-20 bg-gm-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gm-black mb-6">Какие автомобили мы привозим</h2>
            <p className="text-xl text-gm-gray-dark">Широкий выбор брендов и моделей</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {carBrands.map((category, index) => (
              <div key={index} className="bg-gm-white rounded-2xl overflow-hidden shadow-card">
                <div className="h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.category}
                    className="w-full h-full object-cover hover:scale-105 transition-smooth duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gm-black mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.brands.map((brand, brandIndex) => (
                      <span
                        key={brandIndex}
                        className="bg-gm-gray-light text-gm-black px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-gradient-card p-8 rounded-2xl shadow-card">
            <h3 className="text-2xl font-bold text-gm-black mb-4">Б/у авто под заказ</h3>
            <p className="text-lg text-gm-gray-dark mb-4">
              Экономия от 500 000 ₽ — мы также привозим подержанные автомобили под заказ
            </p>
            <ContactButtons className="justify-center" />
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 bg-gm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gm-black mb-6">Примеры цен сегодня</h2>
            <p className="text-xl text-gm-gray-dark">Актуальные цены при текущем курсе юаня</p>
          </div>
          <div className="bg-gradient-card rounded-2xl p-8 shadow-card overflow-x-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {carPrices.map((car, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-gm-white rounded-lg border border-gm-gray-light"
                >
                  <span className="font-medium text-gm-black">{car.model}</span>
                  <span className="font-bold text-xl text-gm-black">{car.price} ₽</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
            <div className="text-center mb-6">
              <span className="text-2xl">🐝</span>
              <p className="text-lg text-yellow-800 font-medium">
                Наши менеджеры работают как пчёлки, заявок очень много. 
                Просим отнестись с пониманием, если ответ чуть задерживается.
              </p>
            </div>
            <div className="space-y-2 text-sm text-yellow-700">
              <p>• Стоимость указана до РФ без учёта логистики до города</p>
              <p>• Расчёты по ВТБ, а не по ЦБ</p>
              <p>• Мы не занижаем инвойсы и считаем по реальному курсу банка</p>
              <p className="font-semibold">❗️ Мы также привозим б/у автомобили под заказ</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-gm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            👉 Напишите нам, чтобы получить актуальный расчёт ДО вашего города!
          </h2>
          <p className="text-xl text-gm-silver mb-8">
            Получите персональное предложение и узнайте точную стоимость доставки
          </p>
          <ContactButtons className="justify-center" />
        </div>
      </section>
    </Layout>
  );
};

export default Home;