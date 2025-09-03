import SearchIcon from "@/app/assets/icons/search.svg";
import { useStepsTreeContext } from "@/app/contexts/StepsTreeContext";

const SearchBar = () => {
  const { currNode, filterNodeList } = useStepsTreeContext();

  return (
    <div className="flex gap-3 border-b border-neutral-n30 p-5 text-neutral-n50">
      <SearchIcon className="h-5 w-5"></SearchIcon>
      <input
        type="text"
        placeholder={`Search ${currNode.menuName}`}
        onChange={(e) => {
          filterNodeList(e.target.value);
        }}
        className="body-02 placeholder-opacity-100 text-neutral-n300 placeholder-neutral-n50 focus:outline-0 active:outline-0"
      ></input>
    </div>
  );
};

export default SearchBar;
