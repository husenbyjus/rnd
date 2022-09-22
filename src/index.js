import React, { useState, useEffect } from "react";
import styles from "./style.css";

export const SdkComponent = ({ id }) => {
  const [data, setData] = useState([]);
  const data1 = ["List 1", "List 2", "List 3"];
  useEffect(() => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/products", true);
    xhr.onload = function () {
      console.log(xhr.responseText);
      setData(JSON.parse(xhr.responseText)?.data);
    };
    xhr.send();
  }, []);
  return (
    <div className={styles.body}>
      <h1>React SDK App</h1>
      <ul>
        {data?.map((val) => (
          <li>{val.name}</li>
        ))}
      </ul>
      <div>Id from props: {id}</div>
    </div>
  );
};
