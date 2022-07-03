import CharCard from "../charCard/CharCard";

const CharList = ({ data }) => {
  return data.map(({ id, image, name, gender, status }) => (
    <CharCard
      key={id}
      id={id}
      image={image}
      name={name}
      gender={gender}
      status={status}
    />
  ));
};

export default CharList;
