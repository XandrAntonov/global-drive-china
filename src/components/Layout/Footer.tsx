import { Link } from "react-router-dom";
import { Send, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gm-black text-gm-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-accent p-2 rounded-lg">
                <span className="text-gm-white font-bold text-xl">GM</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Global Motors</h3>
                <p className="text-gm-gray-medium">Прямой поставщик авто из Китая</p>
              </div>
            </div>
            <p className="text-gm-silver mb-6">
              Экономим от 600 000 до 800 000 ₽ на покупке авто и доставляем машину быстрее всех в России.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span>🏢</span>
                <span className="text-gm-silver">Москва, Электродная 2, стр. 34</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <a href="mailto:info@globalmotors.ru" className="text-gm-silver hover:text-gm-white transition-smooth">
                  info@globalmotors.ru
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gm-silver hover:text-gm-white transition-smooth">
                Главная
              </Link>
              <Link to="/process" className="text-gm-silver hover:text-gm-white transition-smooth">
                Процесс доставки
              </Link>
              <Link to="/why-us" className="text-gm-silver hover:text-gm-white transition-smooth">
                Почему мы
              </Link>
              <Link to="/about" className="text-gm-silver hover:text-gm-white transition-smooth">
                О компании
              </Link>
              <Link to="/contacts" className="text-gm-silver hover:text-gm-white transition-smooth">
                Контакты
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Связь с нами</h4>
            <div className="space-y-3">
              <a
                href="https://t.me/manager_gm_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-smooth"
              >
                <Send size={18} />
                <span>@manager_gm_bot</span>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=79254765528"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-smooth"
              >
                <MessageCircle size={18} />
                <span>+7 925 476-55-28</span>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gm-gray-dark my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link to="/privacy" className="text-gm-silver hover:text-gm-white transition-smooth text-sm">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-gm-silver hover:text-gm-white transition-smooth text-sm">
              Условия использования
            </Link>
            <Link to="/cookies" className="text-gm-silver hover:text-gm-white transition-smooth text-sm">
              Политика Cookies
            </Link>
          </div>
          <p className="text-gm-silver text-sm">
            © 2024 Global Motors. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;