import React from "react";
//type rafce shorcut to get boiler plate
const Tabs = ({ tabProp }) => {
  const [content, setContent] = React.useState("");
  return (
    <div>
      <ul>
        {tabProp.map((item) => {
          return <li onClick={() => setContent(item.content)}>{item.title}</li>;
        })}
      </ul>
      <p>{content}</p>
    </div>
  );
};

export default Tabs;
