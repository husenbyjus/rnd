import React, { useState, useEffect } from 'react';

var styles = {"body":"_2mo3X"};

var SdkComponent = function SdkComponent(_ref) {
  var id = _ref.id,
      _ref$isButtonVisible = _ref.isButtonVisible,
      isButtonVisible = _ref$isButtonVisible === void 0 ? false : _ref$isButtonVisible;

  var _useState = useState([]),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = useState(isButtonVisible ? isButtonVisible : false),
      showHelp = _useState2[0],
      setShowHelp = _useState2[1];
  useEffect(function () {
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
  }, /*#__PURE__*/React.createElement("h1", null, "React SDK App"), /*#__PURE__*/React.createElement("ul", null, data === null || data === void 0 ? void 0 : data.map(function (val) {
    return /*#__PURE__*/React.createElement("li", null, val.name);
  })), /*#__PURE__*/React.createElement("div", null, "Id from props: ", id), showHelp && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    frameborder: "0",
    marginheight: "0",
    marginwidth: "0",
    width: "100%",
    height: "100%",
    scrolling: "auto",
    src: "https://chatbot-demo-95e31.web.app"
  }), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setShowHelp(false);
    },
    style: {
      position: "absolute",
      top: 30,
      right: 30,
      zIndex: 2,
      cursor: "pointer",
      width: 100,
      height: 50
    }
  }, "close")));
};

export { SdkComponent };
//# sourceMappingURL=index.modern.js.map
