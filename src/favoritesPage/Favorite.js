import { useQuery } from "@apollo/client";
import { FAV_CHARS } from "../servises/getChars";

//import "./Home.css";
import CharList from "../charList/CharList";

const Favorite = () => {
  const { loading, error, data } = useQuery(FAV_CHARS);

  if (loading) return <h1>is loading...</h1>;
  if (error) {
    console.log({ error });
    return <h1>Error..</h1>;
  }

  return (
    <div className="page-container">
      <CharList data={data.charactersByIds} />
    </div>
  );
};

export default Favorite;
