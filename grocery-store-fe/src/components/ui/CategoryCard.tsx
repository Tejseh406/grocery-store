type CategoryCardProps = {
  name: string;
  image: string;
};
const CategoryCard = ({ name, image }: CategoryCardProps) => {
  return (
    <div className="flex flex-col cursor-pointer items-center px-1 py-3  border rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
      <img
        className="py-2"
        src={`src/assets/images/category/${image}`}
        loading="lazy"
        alt={name}
      />
      <h2 className="font-medium py-2">{name}</h2>
    </div>
  );
};

export default CategoryCard;
