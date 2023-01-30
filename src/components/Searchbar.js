export function Search(props) {
  const data = props.data;
  const title = props.title;
  const search = props.search;

  function details(i) {
    console.log("hej");
  }

  return (
    <>
      <h1>{title}</h1>
      {data
        .filter((content) => {
          return search.toLowerCase() === ""
            ? content
            : content.name.toLowerCase().includes(search);
        })
        .map((content, i) => {
          return (
            <h4 onClick={() => details(i)} key={i}>
              {content.name}
            </h4>
          );
        })}
    </>
  );
}
