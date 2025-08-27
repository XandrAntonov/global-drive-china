import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

// Import all car images
import lixiangBlack from "@/assets/lixiang-l7-black.jpg";
import lixiangWhite from "@/assets/lixiang-l7-white.jpg";
import lixiangSilver from "@/assets/lixiang-l7-silver.jpg";
import lixiangRed from "@/assets/lixiang-l7-red.jpg";
import lixiangBlue from "@/assets/lixiang-l7-blue.jpg";

import zeekrBlack from "@/assets/zeekr-001-black.jpg";
import zeekrWhite from "@/assets/zeekr-001-white.jpg";
import zeekrSilver from "@/assets/zeekr-001-silver.jpg";
import zeekrGreen from "@/assets/zeekr-001-green.jpg";
import zeekrGold from "@/assets/zeekr-001-gold.jpg";

import geelyBlack from "@/assets/geely-starship-black.jpg";
import geelyWhite from "@/assets/geely-starship-white.jpg";
import geelySilver from "@/assets/geely-starship-silver.jpg";
import geelyPurple from "@/assets/geely-starship-purple.jpg";
import geelyTeal from "@/assets/geely-starship-teal.jpg";

import voyahBlack from "@/assets/voyah-free-black.jpg";
import voyahWhite from "@/assets/voyah-free-white.jpg";
import voyahSilver from "@/assets/voyah-free-silver.jpg";
import voyahBurgundy from "@/assets/voyah-free-burgundy.jpg";
import voyahBrown from "@/assets/voyah-free-brown.jpg";

import avatrBlack from "@/assets/avatr-07-black.jpg";
import avatrWhite from "@/assets/avatr-07-white.jpg";
import avatrSilver from "@/assets/avatr-07-silver.jpg";
import avatrPink from "@/assets/avatr-07-pink.jpg";
import avatrOrange from "@/assets/avatr-07-orange.jpg";

interface CarColor {
  name: string;
  value: string;
  image: string;
}

interface CarModel {
  id: string;
  name: string;
  colors: CarColor[];
}

const carModels: CarModel[] = [
  {
    id: "lixiang-l7",
    name: "LiXiang L7",
    colors: [
      { name: "Черный", value: "#000000", image: lixiangBlack },
      { name: "Белый", value: "#FFFFFF", image: lixiangWhite },
      { name: "Серебристый", value: "#C0C0C0", image: lixiangSilver },
      { name: "Красный", value: "#DC2626", image: lixiangRed },
      { name: "Синий", value: "#2563EB", image: lixiangBlue }
    ]
  },
  {
    id: "zeekr-001",
    name: "Zeekr 001",
    colors: [
      { name: "Черный", value: "#000000", image: zeekrBlack },
      { name: "Белый", value: "#FFFFFF", image: zeekrWhite },
      { name: "Серебристый", value: "#C0C0C0", image: zeekrSilver },
      { name: "Зеленый", value: "#059669", image: zeekrGreen },
      { name: "Золотой", value: "#D97706", image: zeekrGold }
    ]
  },
  {
    id: "geely-galaxy",
    name: "Geely Galaxy Starship 7",
    colors: [
      { name: "Черный", value: "#000000", image: geelyBlack },
      { name: "Белый", value: "#FFFFFF", image: geelyWhite },
      { name: "Серебристый", value: "#C0C0C0", image: geelySilver },
      { name: "Фиолетовый", value: "#7C3AED", image: geelyPurple },
      { name: "Бирюзовый", value: "#0891B2", image: geelyTeal }
    ]
  },
  {
    id: "voyah-free",
    name: "Voyah Free+",
    colors: [
      { name: "Черный", value: "#000000", image: voyahBlack },
      { name: "Белый", value: "#FFFFFF", image: voyahWhite },
      { name: "Серебристый", value: "#C0C0C0", image: voyahSilver },
      { name: "Бордовый", value: "#991B1B", image: voyahBurgundy },
      { name: "Коричневый", value: "#92400E", image: voyahBrown }
    ]
  },
  {
    id: "avatr-07",
    name: "Avatr 07",
    colors: [
      { name: "Черный", value: "#000000", image: avatrBlack },
      { name: "Белый", value: "#FFFFFF", image: avatrWhite },
      { name: "Серебристый", value: "#C0C0C0", image: avatrSilver },
      { name: "Розовый", value: "#EC4899", image: avatrPink },
      { name: "Оранжевый", value: "#EA580C", image: avatrOrange }
    ]
  }
];

const CarConfigurationCard = ({ car }: { car: CarModel }) => {
  const [selectedColor, setSelectedColor] = useState(car.colors[0]);

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-center">{car.name}</h3>
        
        {/* Car Image with Color Changes */}
        <div className="relative mb-6 bg-gradient-to-br from-background to-muted rounded-lg p-8 flex items-center justify-center min-h-[200px]">
          <img
            src={selectedColor.image}
            alt={`${car.name} - ${selectedColor.name}`}
            className="max-w-full max-h-[180px] object-contain transition-all duration-500 ease-in-out"
          />
        </div>

        {/* Color Selection */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-muted-foreground">Выберите цвет:</h4>
          <div className="flex flex-wrap gap-3 justify-center">
            {car.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                  selectedColor.value === color.value 
                    ? 'border-primary border-4 shadow-lg' 
                    : 'border-border hover:border-primary/50'
                }`}
                style={{ backgroundColor: color.value }}
                title={color.name}
              />
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-2">
            Выбранный цвет: <span className="font-medium">{selectedColor.name}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

const Configurations = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Конфигурации автомобилей</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите модель и настройте цвет автомобиля по своему вкусу. 
            Просто нажмите на цветную точку, чтобы увидеть, как будет выглядеть ваш автомобиль.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {carModels.map((car) => (
            <CarConfigurationCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Configurations;