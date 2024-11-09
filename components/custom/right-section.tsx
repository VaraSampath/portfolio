import ProfileSlide from "./profile-slide";
import ServicesSlide from "./services-slide";
import PortfolioSlide from "./portfolio-slide";
import ExperienceSlide from "./experience-slide";
import ContactSlide from "./contact-slide";

const RightSection = ({ slide }: { slide: number }) => {
  const getSlide = () => {
    switch (slide) {
      case 0:
        return <ProfileSlide />;
      case 1:
        return <ServicesSlide />;
      case 2:
        return <PortfolioSlide />;
      case 3:
        return <ExperienceSlide />;

      default:
        return <ContactSlide />;
    }
  };

  return (
    <div className="flex-1 text-sm hidden gap-8 items-center max-lg:min-h-screen  lg:flex">
      <div className="flex-1 relative z-[6]  bg-content-bg h-full bg-cover  rounded-2xl   max-w-[1100px] p-6 lg:px-16">
        {getSlide()}
      </div>
    </div>
  );
};

export default RightSection;
