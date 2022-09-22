import React, { useState, useEffect } from 'react';

var styles = {"body":"_styles-module__body__2mo3X"};

const SdkComponent = ({
  id
}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/products", true);

    xhr.onload = function () {
      var _JSON$parse;

      console.log(xhr.responseText);
      setData((_JSON$parse = JSON.parse(xhr.responseText)) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.data);
    };

    xhr.send();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: styles.body
  }, /*#__PURE__*/React.createElement("h1", null, "React SDK App"), /*#__PURE__*/React.createElement("ul", null, data === null || data === void 0 ? void 0 : data.map(val => /*#__PURE__*/React.createElement("li", null, val.name))), /*#__PURE__*/React.createElement("div", null, "Id from props: ", id));
};

export { SdkComponent };
//# sourceMappingURL=index.modern.js.map
