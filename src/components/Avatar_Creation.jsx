import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Avatar_Creation = ({ item, index }) => {
  const { src, alt } = item;

  return (
    <Avatar
      className={`
        w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 
        border-2 border-star_color_1 
        ${index !== 0 ? "-ml-2 md:-ml-1 " : ""}
     
        transition-all duration-300 hover:z-30 hover:scale-110
      `}
    >
      <AvatarImage src={src} alt={alt} className="object-cover object-center" />
      <AvatarFallback className="text-xs md:text-sm">{alt}</AvatarFallback>
    </Avatar>
  );
};

export default Avatar_Creation;
