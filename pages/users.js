export default function UserList({ users }) {
  return (
    <>
      <h1 align="center">List of users</h1>;
      {users.map((user) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: 25,
            }}
            key={user.id}
          >
            <h6>{user.id} </h6>
            <h6>{user.email}</h6>
            <h6>{user.username} </h6>
            <h6>{user.name}</h6>
            <h6>{user.phone}</h6>
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const response = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();
  console.log(response, "This is fetch data");
  return { props: { users: response } };
}
