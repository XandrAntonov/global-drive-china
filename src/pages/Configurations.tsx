import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import avatrImage from "@/assets/avatr-07-car.jpg";

interface CarColor {
  name: string;
  value: string;
  filter: string;
}

interface CarModel {
  id: string;
  name: string;
  image: string;
  colors: CarColor[];
}

const carModels: CarModel[] = [
  {
    id: "lixiang-l7",
    name: "LiXiang L7",
    image: "/lovable-uploads/bc529fec-87f2-4b9f-9ac5-25fe981f0473.png",
    colors: [
      { name: "Черный", value: "#000000", filter: "brightness(0.3)" },
      { name: "Белый", value: "#FFFFFF", filter: "brightness(1.2) contrast(1.1)" },
      { name: "Серебристый", value: "#C0C0C0", filter: "hue-rotate(0deg) saturate(0.3)" },
      { name: "Красный", value: "#DC2626", filter: "hue-rotate(0deg) saturate(1.5) brightness(0.8)" },
      { name: "Синий", value: "#2563EB", filter: "hue-rotate(200deg) saturate(1.3) brightness(0.7)" }
    ]
  },
  {
    id: "zeekr-001",
    name: "Zeekr 001",
    image: "/lovable-uploads/df0a6e86-a028-4709-86a2-3f8a45242428.png",
    colors: [
      { name: "Черный", value: "#000000", filter: "brightness(0.3)" },
      { name: "Белый", value: "#FFFFFF", filter: "brightness(1.2) contrast(1.1)" },
      { name: "Серебристый", value: "#C0C0C0", filter: "hue-rotate(0deg) saturate(0.3)" },
      { name: "Зеленый", value: "#059669", filter: "hue-rotate(120deg) saturate(1.2) brightness(0.8)" },
      { name: "Золотой", value: "#D97706", filter: "hue-rotate(45deg) saturate(1.1) brightness(0.9)" }
    ]
  },
  {
    id: "geely-galaxy",
    name: "Geely Galaxy Starship 7",
    image: "/lovable-uploads/c313e781-6d89-4877-bb9e-fc2a9dc5d8ee.png",
    colors: [
      { name: "Черный", value: "#000000", filter: "brightness(0.3)" },
      { name: "Белый", value: "#FFFFFF", filter: "brightness(1.2) contrast(1.1)" },
      { name: "Серебристый", value: "#C0C0C0", filter: "hue-rotate(0deg) saturate(0.3)" },
      { name: "Фиолетовый", value: "#7C3AED", filter: "hue-rotate(270deg) saturate(1.4) brightness(0.7)" },
      { name: "Бирюзовый", value: "#0891B2", filter: "hue-rotate(180deg) saturate(1.3) brightness(0.8)" }
    ]
  },
  {
    id: "voyah-free",
    name: "Voyah Free+",
    image: "/lovable-uploads/e81e5db8-a557-49c3-9afe-aae256531d7d.png",
    colors: [
      { name: "Черный", value: "#000000", filter: "brightness(0.3)" },
      { name: "Белый", value: "#FFFFFF", filter: "brightness(1.2) contrast(1.1)" },
      { name: "Серебристый", value: "#C0C0C0", filter: "hue-rotate(0deg) saturate(0.3)" },
      { name: "Бордовый", value: "#991B1B", filter: "hue-rotate(350deg) saturate(1.2) brightness(0.6)" },
      { name: "Коричневый", value: "#92400E", filter: "hue-rotate(30deg) saturate(0.8) brightness(0.7)" }
    ]
  },
  {
    id: "avatr-07",
    name: "Avatr 07",
    image: avatrImage,
    colors: [
      { name: "Черный", value: "#000000", filter: "brightness(0.3)" },
      { name: "Белый", value: "#FFFFFF", filter: "brightness(1.2) contrast(1.1)" },
      { name: "Серебристый", value: "#C0C0C0", filter: "hue-rotate(0deg) saturate(0.3)" },
      { name: "Розовый", value: "#EC4899", filter: "hue-rotate(320deg) saturate(1.3) brightness(0.8)" },
      { name: "Оранжевый", value: "#EA580C", filter: "hue-rotate(20deg) saturate(1.2) brightness(0.9)" }
    ]
  }
];

const CarConfigurationCard = ({ car }: { car: CarModel }) => {
  const [selectedColor, setSelectedColor] = useState(car.colors[0]);

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-center">{car.name}</h3>
        
        {/* Car Image with Color Filter */}
        <div className="relative mb-6 bg-gradient-to-br from-background to-muted rounded-lg p-8 flex items-center justify-center min-h-[200px]">
          <img
            src={car.image}
            alt={car.name}
            className="max-w-full max-h-[180px] object-contain transition-all duration-300"
            style={{
              filter: selectedColor.filter
            }}
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