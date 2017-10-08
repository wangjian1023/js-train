'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '档案'
    }, _this.data = {
      age: 20,
      name: '123',
      items: [{ name: 'USA', value: '美国' }, { name: 'CHN', value: '中国', checked: 'true' }, { name: 'BRA', value: '巴西' }, { name: 'JPN', value: '日本' }, { name: 'ENG', value: '英国' }, { name: 'TUR', value: '法国' }]
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onTap',
    value: function onTap() {
      var self = this;
      self.age++;
    }
  }, {
    key: 'checkboxChange',
    value: function checkboxChange(e) {
      console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    }
  }, {
    key: 'formSubmit',
    value: function formSubmit(e) {
      console.log('form发生了submit事件，携带数据为：', e.detail.value);
    }
  }, {
    key: 'formReset',
    value: function formReset() {
      console.log('form发生了reset事件');
    }
  }, {
    key: 'onload',
    value: function onload() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJhZ2UiLCJuYW1lIiwiaXRlbXMiLCJ2YWx1ZSIsImNoZWNrZWQiLCJzZWxmIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLFlBQU0sS0FGRDtBQUdMQyxhQUFPLENBQ1AsRUFBQ0QsTUFBTSxLQUFQLEVBQWNFLE9BQU8sSUFBckIsRUFETyxFQUVQLEVBQUNGLE1BQU0sS0FBUCxFQUFjRSxPQUFPLElBQXJCLEVBQTJCQyxTQUFTLE1BQXBDLEVBRk8sRUFHUCxFQUFDSCxNQUFNLEtBQVAsRUFBY0UsT0FBTyxJQUFyQixFQUhPLEVBSVAsRUFBQ0YsTUFBTSxLQUFQLEVBQWNFLE9BQU8sSUFBckIsRUFKTyxFQUtQLEVBQUNGLE1BQU0sS0FBUCxFQUFjRSxPQUFPLElBQXJCLEVBTE8sRUFNUCxFQUFDRixNQUFNLEtBQVAsRUFBY0UsT0FBTyxJQUFyQixFQU5PO0FBSEYsSzs7Ozs7NEJBWUM7QUFDTixVQUFJRSxPQUFPLElBQVg7QUFDQUEsV0FBS0wsR0FBTDtBQUNEOzs7bUNBQ2NNLEMsRUFBRztBQUNoQkMsY0FBUUMsR0FBUixDQUFZLCtCQUFaLEVBQTZDRixFQUFFRyxNQUFGLENBQVNOLEtBQXREO0FBQ0Q7OzsrQkFFVUcsQyxFQUFHO0FBQ1pDLGNBQVFDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQ0YsRUFBRUcsTUFBRixDQUFTTixLQUEvQztBQUNEOzs7Z0NBQ1c7QUFDVkksY0FBUUMsR0FBUixDQUFZLGdCQUFaO0FBQ0Q7Ozs2QkFFUSxDQUFFOzs7O0VBL0JzQixlQUFLRSxJOztrQkFBbkJkLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5qGj5qGIJ1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgYWdlOiAyMCxcbiAgICAgIG5hbWU6ICcxMjMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgIHtuYW1lOiAnVVNBJywgdmFsdWU6ICfnvo7lm70nfSxcbiAgICAgIHtuYW1lOiAnQ0hOJywgdmFsdWU6ICfkuK3lm70nLCBjaGVja2VkOiAndHJ1ZSd9LFxuICAgICAge25hbWU6ICdCUkEnLCB2YWx1ZTogJ+W3tOilvyd9LFxuICAgICAge25hbWU6ICdKUE4nLCB2YWx1ZTogJ+aXpeacrCd9LFxuICAgICAge25hbWU6ICdFTkcnLCB2YWx1ZTogJ+iLseWbvSd9LFxuICAgICAge25hbWU6ICdUVVInLCB2YWx1ZTogJ+azleWbvSd9XG4gICAgICBdXG4gICAgfVxuICAgIG9uVGFwKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmFnZSsrXG4gICAgfVxuICAgIGNoZWNrYm94Q2hhbmdlKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdjaGVja2JveOWPkeeUn2NoYW5nZeS6i+S7tu+8jOaQuuW4pnZhbHVl5YC85Li677yaJywgZS5kZXRhaWwudmFsdWUpXG4gICAgfVxuXG4gICAgZm9ybVN1Ym1pdChlKSB7XG4gICAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnN1Ym1pdOS6i+S7tu+8jOaQuuW4puaVsOaNruS4uu+8micsIGUuZGV0YWlsLnZhbHVlKVxuICAgIH1cbiAgICBmb3JtUmVzZXQoKSB7XG4gICAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnJlc2V05LqL5Lu2JylcbiAgICB9XG5cbiAgICBvbmxvYWQoKSB7fVxuICB9XG4iXX0=