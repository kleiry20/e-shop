import "./ProductListing.css";
import Navbar from "../Navbar/Navbar";
import { CategoryCardMedium, CategoryCardSmall } from "../Cards/CategoryCard";
import { useEffect, useState } from "react";
// assets - products
import Walnuts from "../../assets/breakfast/walnuts.jpg";
import OatsSm from "../../assets/breakfast/oats-sm.jpg";
import CashewsSm from "../../assets/breakfast/cashews-sm.jpg";
import Blueberry from "../../assets/fruits/blueberry.jpg";
import Rice from "../../assets/grains/rice.jpg";
import MilkSm from "../../assets/breakfast/milk-sm.jpg";
import Raisins from "../../assets/breakfast/raisins.jpg";
import Strawberry from "../../assets/fruits/strawberry.jpg";
import StarAnise from "../../assets/spice/star-anise.jpg";
import Onions from "../../assets/veggies/onions.jpg";
import Mushrooms from "../../assets/veggies/mushrooms2.jpg";
import Coriander from "../../assets/veggies/coriander.jpg";

// const products = [
//   {
//     name: "Walnuts",
//     image: Walnuts,
//   },
//   {
//     name: "Milk",
//     image: MilkSm,
//   },
//   {
//     name: "Raisins",
//     image: Raisins,
//   },
//   {
//     name: "Star Anise",
//     image: StarAnise,
//   },
//   {
//     name: "Strawberry",
//     image: Strawberry,
//   },
//   {
//     name: "Oats",
//     image: OatsSm,
//   },
//   {
//     name: "Walnuts",
//     image: Walnuts,
//   },
//   {
//     name: "Milk",
//     image: MilkSm,
//   },
//   {
//     name: "Raisins",
//     image: Raisins,
//   },
//   {
//     name: "Star Anise",
//     image: StarAnise,
//   },
//   {
//     name: "Strawberry",
//     image: Strawberry,
//   },
//   {
//     name: "Oats",
//     image: OatsSm,
//   },
// ];

const ProductListing = () => {
  const [apiData, setApiData] = useState([]);
  const [filteredItems, setItems] = useState([]);
  // const [searchProducts, setSearchProducts] = useState(products1);

  useEffect(() => {
    fetch("https://api.kalpav.com/api/v1/product/category/retail")
      .then((response) => response.json())
      .then((data) => {
        // setApiData(data.message);
        setApiData(data.response);
        setItems(data.response);
        console.log("data", apiData);
      });
  }, []);

  const filterItems = (term: string) => {
    const filteredItems = apiData.filter((item: any) =>
      item.productCategory.productCategoryName
        .toLowerCase()
        .includes(term.toLowerCase())
    );

    // const filteredProducts = products1.filter((item: any) =>
    //   item.name.toLowerCase().includes(term.toLowerCase())
    // );

    // setSearchProducts(filteredProducts);
    setItems(filteredItems);
  };

  return (
    <>
      <Navbar filterItems={filterItems} />

      {/* <input
        type="text"
        placeholder="search"
        onChange={(e) => filterItems(e.target.value)}
      /> */}

      <div style={{ padding: "2rem 0 6rem 0" }}>
        <section className="category-listing">
          <h3 className="h3-style">Categories</h3>

          <div className="category-row">
            {filteredItems &&
              filteredItems.map((item: any) => {
                return (
                  <div className="category-row--child card-hover" key={item.id}>
                    <p>{item.productCategory.productCategoryName}</p>
                    <div
                      style={{
                        backgroundImage: `${item.productCategory.productCategoryImage}`,
                      }}
                    ></div>
                    <img
                      src={item.productCategory.productCategoryImage}
                      alt=""
                    />
                  </div>
                );
              })}
          </div>
        </section>
        <br />
        <br />

        <section className="listing">
          <h3 className="h3-style">Products</h3>

          <div className="category-wrapper">
            <div className="category-wrapper--child">
              <div>
                <CategoryCardMedium image={MilkSm} title="Milk" />
              </div>
              <div>
                <CategoryCardSmall
                  image={Raisins}
                  title="Raisins"
                ></CategoryCardSmall>
              </div>
            </div>
            <div className="category-wrapper--child">
              <div>
                <CategoryCardSmall image={StarAnise} title="Star Anise" />
              </div>
              <div>
                <CategoryCardMedium image={Walnuts} title="Walnuts" />
              </div>
            </div>
            <div className="category-wrapper--child">
              <div>
                <CategoryCardMedium image={Strawberry} title="Strawberry" />
              </div>
              <div>
                <CategoryCardSmall image={OatsSm} title="Oats" />
              </div>
            </div>
          </div>

          <br />
          <br />

          <div className="category-wrapper">
            <div className="category-wrapper--child">
              <div>
                <CategoryCardMedium image={Mushrooms} title="Mushrooms" />
              </div>
              <div>
                <CategoryCardSmall image={Coriander} title="Coriander" />
              </div>
            </div>
            <div className="category-wrapper--child">
              <div>
                <CategoryCardSmall image={CashewsSm} title="Cashews" />
              </div>
              <div>
                <CategoryCardMedium image={Onions} title="Onions" />
              </div>
            </div>
            <div className="category-wrapper--child">
              <div>
                <CategoryCardMedium image={Blueberry} title="Blueberry" />
              </div>
              <div>
                <CategoryCardSmall
                  image={Rice}
                  title="Rice"
                ></CategoryCardSmall>
              </div>
            </div>
          </div>

          <br />
          <br />
        </section>
      </div>
    </>
  );
};

export default ProductListing;

// const CardLayout = (props: any) => {
//   return (
//     <div className="category-wrapper">
//       <div className="category-wrapper--child">
//         <div>
//           <CategoryCardMedium
//             image={props.searchProducts.list1[0].image}
//             title={props.searchProducts.list1[0].name}
//           />
//         </div>
//         <div>
//           <CategoryCardSmall
//             image={props.searchProducts.list1[1].image}
//             title={props.searchProducts.list1[1].name}
//           ></CategoryCardSmall>
//         </div>
//       </div>
//       <div className="category-wrapper--child">
//         <div>
//           <CategoryCardSmall
//             image={props.searchProducts.list1[2].image}
//             title={props.searchProducts.list1[2].name}
//           />
//         </div>
//         <div>
//           <CategoryCardMedium
//             image={props.searchProducts.list1[3].image}
//             title={props.searchProducts.list1[3].name}
//           />
//         </div>
//       </div>
//       <div className="category-wrapper--child">
//         <div>
//           <CategoryCardMedium
//             image={props.searchProducts.list1[4].image}
//             title={props.searchProducts.list1[4].name}
//           />
//         </div>
//         <div>
//           <CategoryCardSmall
//             image={props.searchProducts.list1[5].image}
//             title={props.searchProducts.list1[5].name}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
