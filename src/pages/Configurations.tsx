import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

// Import more accurate car images
import lixiangRealBlack from "@/assets/lixiang-l7-real-black.jpg";
import zeekrRealBlack from "@/assets/zeekr-001-real-black.jpg";
import geelyRealBlack from "@/assets/geely-starship-real-black.jpg";
import voyahRealBlack from "@/assets/voyah-free-real-black.jpg";
import avatrRealBlack from "@/assets/avatr-07-real-black.jpg";

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
      { name: "Черный", value: "#000000", image: lixiangRealBlack },
      { name: "Белый", value: "#FFFFFF", image: lixiangRealBlack },
      { name: "Серебристый", value: "#C0C0C0", image: lixiangRealBlack },
      { name: "Красный", value: "#DC2626", image: lixiangRealBlack },
      { name: "Синий", value: "#2563EB", image: lixiangRealBlack }
    ]
  },
  {
    id: "zeekr-001",
    name: "Zeekr 001",
    colors: [
      { name: "Черный", value: "#000000", image: zeekrRealBlack },
      { name: "Белый", value: "#FFFFFF", image: zeekrRealBlack },
      { name: "Серебристый", value: "#C0C0C0", image: zeekrRealBlack },
      { name: "Зеленый", value: "#059669", image: zeekrRealBlack },
      { name: "Золотой", value: "#D97706", image: zeekrRealBlack }
    ]
  },
  {
    id: "geely-galaxy",
    name: "Geely Galaxy Starship 7",
    colors: [
      { name: "Черный", value: "#000000", image: geelyRealBlack },
      { name: "Белый", value: "#FFFFFF", image: geelyRealBlack },
      { name: "Серебристый", value: "#C0C0C0", image: geelyRealBlack },
      { name: "Фиолетовый", value: "#7C3AED", image: geelyRealBlack },
      { name: "Бирюзовый", value: "#0891B2", image: geelyRealBlack }
    ]
  },
  {
    id: "voyah-free",
    name: "Voyah Free+",
    colors: [
      { name: "Черный", value: "#000000", image: voyahRealBlack },
      { name: "Белый", value: "#FFFFFF", image: voyahRealBlack },
      { name: "Серебристый", value: "#C0C0C0", image: voyahRealBlack },
      { name: "Бордовый", value: "#991B1B", image: voyahRealBlack },
      { name: "Коричневый", value: "#92400E", image: voyahRealBlack }
    ]
  },
  {
    id: "avatr-07",
    name: "Avatr 07",
    colors: [
      { name: "Черный", value: "#000000", image: avatrRealBlack },
      { name: "Белый", value: "#FFFFFF", image: avatrRealBlack },
      { name: "Серебристый", value: "#C0C0C0", image: avatrRealBlack },
      { name: "Розовый", value: "#EC4899", image: avatrRealBlack },
      { name: "Оранжевый", value: "#EA580C", image: avatrRealBlack }
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