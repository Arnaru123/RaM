import { useQuery } from "@apollo/client";
import { CHARS_DATA } from "../servises/getChars";

import "./Home.css";
import CharList from "../charList/CharList";

const Home = () => {
  const { loading, error, data } = useQuery(CHARS_DATA);

  if (loading) return <h1>is loading...</h1>;
  if (error) {
    console.log({ error });
    return <h1>Error..</h1>;
  }

  return (
    <div className="page-container">
      <CharList data={data.characters.results} />
    </div>
  );
};

export default Home;
