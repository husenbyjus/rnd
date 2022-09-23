import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

export const SdkComponent = ({ id, isButtonVisible }) => {
  const [data, setData] = useState([]);
  // let buttonVisibility = isButtonVisible ? isButtonVisible : false;
  const [showHelp, setShowHelp] = useState(false);

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
      {showHelp && (
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "white",
          }}
        >
          <iframe
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            width="100%"
            height="100%"
            scrolling="auto"
            // style={{ width: 200, height: 200 }}
            src="https://chatbot-demo-95e31.web.app"
          ></iframe>
          <div
            onClick={() => setShowHelp(false)}
            style={{
              position: "absolute",
              top: 30,
              right: 30,
              zIndex: 2,
              cursor: "pointer",
              width: 100,
              height: 50,
            }}
          >
            close
          </div>
        </div>
      )}
      <div>
        <h1>React SDK App</h1>
        <ul>
          {data?.map((val, index) => (
            <li key={index}>{val.name}</li>
          ))}
        </ul>
        <div>Id from props: {id}</div>
      </div>
      {isButtonVisible && (
        <div style={{ paddingTop: 30 }}>
          <button onClick={() => setShowHelp(true)}>show help</button>
        </div>
      )}
    </div>
  );
};
