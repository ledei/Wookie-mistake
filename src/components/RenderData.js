export function RenderData(props) {
  const data = props.results;
  const title = props.title;

  return (
    <div>
      <h1>{title}</h1>
      {data.map((result, i) => {
        return <h4 key={i}>{result.name}</h4>;
      })}
    </div>
  );
}
