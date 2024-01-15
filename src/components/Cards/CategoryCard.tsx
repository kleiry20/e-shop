import "./CategoryCard.css";

type CategoryCard = {
  isCategoryCardSmall?: boolean;
  isCategoryCardMedium?: boolean;
  smallCardData?: any;
  mediumCardData?: any;
};

export const CategoryCardSmall = (props: any) => {
  return (
    <>
      <div
        className="category-card--small card-hover"
        style={{ backgroundImage: `url("${props.image}")` }}
      >
        <button className="btn-white">{props.title}</button>
      </div>
    </>
  );
};

export const CategoryCardMedium = (props: any) => {
  return (
    <div
      className="category-card--medium card-hover"
      style={{ backgroundImage: `url("${props.image}")` }}
    >
      <button className="btn-white">{props.title}</button>
    </div>
  );
};

const CategoryCard = ({ smallCardData, mediumCardData }: CategoryCard) => {
  return (
    <div>
      <CategoryCardSmall smallCardData={smallCardData} />
      <CategoryCardMedium mediumCardData={mediumCardData} />
    </div>
  );
};

export default CategoryCard;
