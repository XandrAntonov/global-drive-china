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
        className="flex items-center justify-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-smooth font-medium shadow-button"
      >
        <Send size={20} />
        <span>Написать в Telegram</span>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=79254765528"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center space-x-2 bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-smooth font-medium shadow-button"
      >
        <MessageCircle size={20} />
        <span>Написать в WhatsApp</span>
      </a>
    </div>
  );
};

export default ContactButtons;