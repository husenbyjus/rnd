function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var styles = {"body":"_styles-module__body__2mo3X"};

var SdkComponent = function SdkComponent(_ref) {
  var id = _ref.id;

  var _useState = React.useState([]),
      data = _useState[0],
      setData = _useState[1];
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
  }, /*#__PURE__*/React__default.createElement("h1", null, "React SDK App"), /*#__PURE__*/React__default.createElement("ul", null, data === null || data === void 0 ? void 0 : data.map(function (val) {
    return /*#__PURE__*/React__default.createElement("li", null, val.name);
  })), /*#__PURE__*/React__default.createElement("div", null, "Id from props: ", id));
};

exports.SdkComponent = SdkComponent;
//# sourceMappingURL=index.js.map
