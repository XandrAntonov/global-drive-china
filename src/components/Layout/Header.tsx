import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Send, MessageCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Главная", href: "/" },
    { name: "Как, сколько, когда?", href: "/process" },
    { name: "Почему мы", href: "/why-us" },
    { name: "О компании", href: "/about" },
    { name: "Контакты", href: "/contacts" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-gm-white shadow-card sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/6287943d-7958-4b61-b322-3bec08b63472.png" 
              alt="Global Motors - Авто из Китая" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-smooth hover:text-gm-black ${
                  isActive(item.href)
                    ? "text-gm-black border-b-2 border-gm-black pb-1"
                    : "text-gm-gray-dark"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://t.me/manager_gm_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition-smooth"
            >
              <Send size={16} />
              <span className="text-sm">Telegram</span>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=79254765528"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-emerald-500 text-white px-3 py-2 rounded-lg hover:bg-emerald-600 transition-smooth"
            >
              <MessageCircle size={16} />
              <span className="text-sm">WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gm-gray-light"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gm-gray-light">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-smooth ${
                    isActive(item.href) ? "text-gm-black" : "text-gm-gray-dark"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <a
                  href="https://t.me/manager_gm_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition-smooth"
                >
                  <Send size={16} />
                  <span className="text-sm">Telegram</span>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=79254765528"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-emerald-500 text-white px-3 py-2 rounded-lg hover:bg-emerald-600 transition-smooth"
                >
                  <MessageCircle size={16} />
                  <span className="text-sm">WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;