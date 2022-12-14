function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var styles = {"body":"_2mo3X"};

var SdkComponent = function SdkComponent(_ref) {
  var id = _ref.id,
      isButtonVisible = _ref.isButtonVisible;

  var _useState = React.useState([]),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = React.useState(false),
      showHelp = _useState2[0],
      setShowHelp = _useState2[1];

  React.useEffect(function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/products", true);

    xhr.onload = function () {
      var _JSON$parse;

      console.log(xhr.responseText);
      setData((_JSON$parse = JSON.parse(xhr.responseText)) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.data);
    };

    xhr.send();
  }, []);
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles.body
  }, showHelp && /*#__PURE__*/React__default.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: "white"
    }
  }, /*#__PURE__*/React__default.createElement("iframe", {
    frameborder: "0",
    marginheight: "0",
    marginwidth: "0",
    width: "100%",
    height: "100%",
    scrolling: "auto",
    src: "https://chatbot-demo-95e31.web.app"
  }), /*#__PURE__*/React__default.createElement("div", {
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
  }, "close")), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("h1", null, "React SDK App"), /*#__PURE__*/React__default.createElement("ul", null, data === null || data === void 0 ? void 0 : data.map(function (val, index) {
    return /*#__PURE__*/React__default.createElement("li", {
      key: index
    }, val.name);
  })), /*#__PURE__*/React__default.createElement("div", null, "Id from props: ", id)), isButtonVisible && /*#__PURE__*/React__default.createElement("div", {
    style: {
      paddingTop: 30
    }
  }, /*#__PURE__*/React__default.createElement("button", {
    onClick: function onClick() {
      return setShowHelp(true);
    }
  }, "show help")));
};

exports.SdkComponent = SdkComponent;
//# sourceMappingURL=index.js.map
