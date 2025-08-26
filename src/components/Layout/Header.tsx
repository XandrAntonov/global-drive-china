import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-accent p-2 rounded-lg">
              <span className="text-gm-white font-bold text-xl">GM</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gm-black">Global Motors</h1>
              <p className="text-sm text-gm-gray-dark">Авто из Китая</p>
            </div>
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
              className="flex items-center space-x-2 bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition-smooth"
            >
              <span>📲</span>
              <span className="text-sm">Telegram</span>
            </a>
            <a
              href="https://wa.me/79254765528"
              className="flex items-center space-x-2 bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition-smooth"
            >
              <span>📞</span>
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
                  className="flex items-center space-x-2 bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition-smooth"
                >
                  <span>📲</span>
                  <span className="text-sm">Telegram</span>
                </a>
                <a
                  href="https://wa.me/79254765528"
                  className="flex items-center space-x-2 bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition-smooth"
                >
                  <span>📞</span>
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