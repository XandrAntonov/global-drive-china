import { Send, MessageCircle } from "lucide-react";

interface ContactButtonsProps {
  className?: string;
}

const ContactButtons = ({ className = "" }: ContactButtonsProps) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <a
        href="https://t.me/manager_gm_bot"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center space-x-3 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-smooth shadow-button"
      >
        <Send size={20} />
        <span className="font-medium">Telegram @manager_gm_bot</span>
      </a>
      <a
        href="https://wa.me/79254765528"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center space-x-3 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-smooth shadow-button"
      >
        <MessageCircle size={20} />
        <span className="font-medium">WhatsApp +7 925 476-55-28</span>
      </a>
    </div>
  );
};

export default ContactButtons;