const Movie = ({ name, price }) => {
  return (
    <div>
      <h3>movie title: {name}</h3>
      <p>movie price: {price}</p>
    </div>
  );
};

export default Movie;
