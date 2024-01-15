import "../../App.css";

export default function Searchbar(props: any) {
  return (
    <input
      className="searchbar"
      type="text"
      placeholder="Search categories"
      onChange={(e) => {
        props.filterItems(e.target.value);
      }}
    />
  );
}
