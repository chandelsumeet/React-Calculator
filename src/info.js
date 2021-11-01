import React from "react";

const InfoComponent = (props) => {
  const { userId, title, body } = props.info;
  const handler = (title) => {
    console.log(title);
  };
  return (
    <article>
      <h1>{userId}</h1>
      <h2>{title}</h2>
      <h3>{body}</h3>
      <button onClick={() => handler(title)}>Click Me</button>
    </article>
  );
};

export default InfoComponent;
