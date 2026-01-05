import { CategoryList } from "@/constants/Category";
import CategoryCard from "@/components/ui/CategoryCard";

const Category = () => {
  return (
    <div className="flex gap-2 flex-wrap">
      {CategoryList.map((cat) => (
        <CategoryCard key={cat.id} name={cat.name} image={cat.image} />
      ))}
    </div>
  );
};

export default Category;
