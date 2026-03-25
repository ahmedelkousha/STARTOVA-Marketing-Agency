import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const PARTNERS = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
  { name: "HubSpot", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" },
  { name: "Shopify", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" },
  { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
  { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
  { name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
  { name: "Zoom", logo: "https://upload.wikimedia.org/wikipedia/commons/1/11/Zoom_Logo_2022.svg" },
];

export function PartnerMarquee() {
  return (
    <div className="mb-4 sm:mb-6 relative">
      {/* Left shadow */}
      <div
        className="absolute left-0 top-0 h-full w-16 sm:w-24 md:w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #000000 0%, transparent 100%)" }}
      />

      {/* Right shadow */}
      <div
        className="absolute right-0 top-0 h-full w-16 sm:w-24 md:w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #000000 0%, transparent 100%)" }}
      />
      
      <Swiper
        dir="ltr"
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={24}
        loop={true}
        speed={2400}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          480: { slidesPerView: 3, spaceBetween: 28 },
          768: { slidesPerView: 4, spaceBetween: 32 },
          1024: { slidesPerView: 5, spaceBetween: 40 },
        }}>
        {PARTNERS.map((partner, i) => (
          <SwiperSlide key={`row1-${i}`}>
            <div className="bg-white flex items-center justify-center h-14 sm:h-16 md:h-20 px-4 sm:px-6 rounded-xl sm:rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-6 sm:max-h-7 md:max-h-8 max-w-20 sm:max-w-25 md:max-w-30 object-contain filter opacity-100 group-hover:opacity-80 transition-opacity duration-300"
                draggable={false}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
