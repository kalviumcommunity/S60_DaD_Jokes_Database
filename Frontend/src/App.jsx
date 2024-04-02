import dummydata from "./Components/dummyData.json";
function App() {
  return (
    <div className="data">
      {dummydata.map((data) => {
        return (
          <div key={data.id}>
            {data.Joke}
            <p>{data.Tag}</p>
            {data.rating.map((item) => {
              return <div key={item.id}>{item.star}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
