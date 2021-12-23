export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((named) => {
    return {
      params: { id: named.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { named: data },
  };
};

const Details = ({named}) => {
  return (
    <div>
          <h1>{named.name}</h1>
          <p>{named.email}</p>
          <p>{named.website}</p>
          <p>{named.address.city}</p>
    </div>
  );
};

export default Details;
