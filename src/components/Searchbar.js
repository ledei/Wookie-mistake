export function Search(props) {
  const data = props.data;
  const search = props.search;
  const setContent = props.setContent;
  const setTogglePopUp = props.setTogglePopUp;
  const setHomeWorld = props.setHomeWorld;

  async function fetchHomeWorld(url) {
    fetch(url).then((resp) =>
      resp.json().then((result) => {
        setHomeWorld(result);
      })
    );
  }

  function togglePopUp(content) {
    setContent(content);
    setTogglePopUp("pop-up");
    fetchHomeWorld(content.homeworld);
  }

  return (
    <>
      {data
        .filter((content) => {
          return search.toLowerCase() === ""
            ? content
            : content.name.toLowerCase().includes(search);
        })
        .map((content, i) => {
          return (
            <h4 onClick={() => togglePopUp(content)} key={i}>
              {content.name}
            </h4>
          );
        })}
    </>
  );
}
