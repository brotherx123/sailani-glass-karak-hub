
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I would like to place an order from Bait Al Shai Al Sailani Café. Could you please help me with the menu?"
    );
    window.open(`https://wa.me/971XXXXXXXXX?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full p-3 md:p-4 shadow-2xl transition-all duration-500 hover:scale-110 animate-slow-float"
        style={{ animationDuration: '4s' }}
      >
        {/* WhatsApp Icon */}
        <svg
          className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:rotate-12"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
        </svg>

        {/* Tooltip */}
        <div className={`absolute bottom-full right-0 mb-2 transition-all duration-500 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}>
          <div className="backdrop-blur-md bg-gray-900/90 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg shadow-lg border border-green-500/20 whitespace-nowrap font-medium text-sm md:text-base">
            Order Now on WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/90"></div>
          </div>
        </div>

        {/* Slower Pulse Rings */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-20" style={{
          animation: 'slow-ping 3s cubic-bezier(0, 0, 0.2, 1) infinite'
        }}></div>
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-10" style={{
          animation: 'slow-pulse 4s ease-in-out infinite'
        }}></div>
      </Button>

      <style>{`
        @keyframes slow-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes slow-ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @keyframes slow-pulse {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
        }
        .animate-slow-float {
          animation: slow-float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default WhatsAppButton;
