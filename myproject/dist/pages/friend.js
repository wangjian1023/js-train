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
      navigationBarTitleText: '礼物说'
    }, _this.data = {
      src: '',
      person: '../image/人.png',
      like: '../image/礼物.png',
      finish: '../image/对勾.png',
      camera: '../image/相机.png',
      ring: '../image/05_钻戒.png',
      lipstrick: '../image/口红.png',
      flower: '../image/经典花束.png',
      elder: '../image/衬衣.png',
      wallet: '../image/钱包.png',
      wife: '老婆/女票',
      sister: '姐妹/闺蜜',
      mother: '妈妈',
      pink: 'pink',
      red: 'black',
      solidred: 'red',
      solidpink: 'white'
    }, _this.methods = {
      she: function she() {
        var self = this;
        self.camera = '../image/相机.png';
        self.ring = '../image/05_钻戒.png';
        self.lipstrick = '../image/口红.png';
        self.flower = '../image/经典花束.png';
        self.elder = '../image/衬衣.png';
        self.wallet = '../image/钱包.png';
        self.sister = '姐妹/闺蜜';
        self.wife = '老婆/女票';
        self.mother = '妈妈';
        self.pink = 'pink';
        self.solidred = 'red';
        self.red = 'black';
        self.solidpink = 'white';
      },
      he: function he() {
        var self = this;
        self.camera = '../image/相机.png';
        self.ring = '../image/05_钻戒.png';
        self.wife = '老公/男票';
        self.lipstrick = '../image/手表.png';
        self.sister = '兄弟/基友';
        self.flower = '../image/眼镜.png';
        self.mother = '爸爸';
        self.elder = '../image/衬衣.png';
        self.wallet = '../image/钱包.png';
        self.red = 'red';
        self.solidpink = 'red';
        self.pink = 'black';
        self.solidred = 'white';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onload',
    value: function onload() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/friend'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwicGVyc29uIiwibGlrZSIsImZpbmlzaCIsImNhbWVyYSIsInJpbmciLCJsaXBzdHJpY2siLCJmbG93ZXIiLCJlbGRlciIsIndhbGxldCIsIndpZmUiLCJzaXN0ZXIiLCJtb3RoZXIiLCJwaW5rIiwicmVkIiwic29saWRyZWQiLCJzb2xpZHBpbmsiLCJtZXRob2RzIiwic2hlIiwic2VsZiIsImhlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxjQUFRLGdCQUZIO0FBR0xDLFlBQU0saUJBSEQ7QUFJTEMsY0FBUSxpQkFKSDtBQUtMQyxjQUFRLGlCQUxIO0FBTUxDLFlBQU0sb0JBTkQ7QUFPTEMsaUJBQVcsaUJBUE47QUFRTEMsY0FBUSxtQkFSSDtBQVNMQyxhQUFPLGlCQVRGO0FBVUxDLGNBQVEsaUJBVkg7QUFXTEMsWUFBTSxPQVhEO0FBWUxDLGNBQVEsT0FaSDtBQWFMQyxjQUFRLElBYkg7QUFjTEMsWUFBTSxNQWREO0FBZUxDLFdBQUssT0FmQTtBQWdCTEMsZ0JBQVUsS0FoQkw7QUFpQkxDLGlCQUFXO0FBakJOLEssUUFtQlBDLE8sR0FBVTtBQUNSQyxTQURRLGlCQUNGO0FBQ0osWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtmLE1BQUwsR0FBYyxpQkFBZDtBQUNBZSxhQUFLZCxJQUFMLEdBQVksb0JBQVo7QUFDQWMsYUFBS2IsU0FBTCxHQUFpQixpQkFBakI7QUFDQWEsYUFBS1osTUFBTCxHQUFjLG1CQUFkO0FBQ0FZLGFBQUtYLEtBQUwsR0FBYSxpQkFBYjtBQUNBVyxhQUFLVixNQUFMLEdBQWMsaUJBQWQ7QUFDQVUsYUFBS1IsTUFBTCxHQUFjLE9BQWQ7QUFDQVEsYUFBS1QsSUFBTCxHQUFZLE9BQVo7QUFDQVMsYUFBS1AsTUFBTCxHQUFjLElBQWQ7QUFDQU8sYUFBS04sSUFBTCxHQUFZLE1BQVo7QUFDQU0sYUFBS0osUUFBTCxHQUFnQixLQUFoQjtBQUNBSSxhQUFLTCxHQUFMLEdBQVcsT0FBWDtBQUNBSyxhQUFLSCxTQUFMLEdBQWlCLE9BQWpCO0FBQ0QsT0FoQk87QUFpQlJJLFFBakJRLGdCQWlCSDtBQUNILFlBQUlELE9BQU8sSUFBWDtBQUNBQSxhQUFLZixNQUFMLEdBQWMsaUJBQWQ7QUFDQWUsYUFBS2QsSUFBTCxHQUFZLG9CQUFaO0FBQ0FjLGFBQUtULElBQUwsR0FBWSxPQUFaO0FBQ0FTLGFBQUtiLFNBQUwsR0FBaUIsaUJBQWpCO0FBQ0FhLGFBQUtSLE1BQUwsR0FBYyxPQUFkO0FBQ0FRLGFBQUtaLE1BQUwsR0FBYyxpQkFBZDtBQUNBWSxhQUFLUCxNQUFMLEdBQWMsSUFBZDtBQUNBTyxhQUFLWCxLQUFMLEdBQWEsaUJBQWI7QUFDQVcsYUFBS1YsTUFBTCxHQUFjLGlCQUFkO0FBQ0FVLGFBQUtMLEdBQUwsR0FBVyxLQUFYO0FBQ0FLLGFBQUtILFNBQUwsR0FBaUIsS0FBakI7QUFDQUcsYUFBS04sSUFBTCxHQUFZLE9BQVo7QUFDQU0sYUFBS0osUUFBTCxHQUFnQixPQUFoQjtBQUNEO0FBaENPLEs7Ozs7OzZCQWtDRCxDQUFHOzs7O0VBekRxQixlQUFLTSxJOztrQkFBbkJ6QixLIiwiZmlsZSI6ImZyaWVuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ekvOeJqeivtCdcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgcGVyc29uOiAnLi4vaW1hZ2Uv5Lq6LnBuZycsXG4gICAgbGlrZTogJy4uL2ltYWdlL+ekvOeJqS5wbmcnLFxuICAgIGZpbmlzaDogJy4uL2ltYWdlL+WvueWLvi5wbmcnLFxuICAgIGNhbWVyYTogJy4uL2ltYWdlL+ebuOacui5wbmcnLFxuICAgIHJpbmc6ICcuLi9pbWFnZS8wNV/pkrvmiJIucG5nJyxcbiAgICBsaXBzdHJpY2s6ICcuLi9pbWFnZS/lj6PnuqIucG5nJyxcbiAgICBmbG93ZXI6ICcuLi9pbWFnZS/nu4/lhbjoirHmnZ8ucG5nJyxcbiAgICBlbGRlcjogJy4uL2ltYWdlL+ihrOihoy5wbmcnLFxuICAgIHdhbGxldDogJy4uL2ltYWdlL+mSseWMhS5wbmcnLFxuICAgIHdpZmU6ICfogIHlqYYv5aWz56WoJyxcbiAgICBzaXN0ZXI6ICflp5Dlprkv6Ze66JycJyxcbiAgICBtb3RoZXI6ICflpojlpognLFxuICAgIHBpbms6ICdwaW5rJyxcbiAgICByZWQ6ICdibGFjaycsXG4gICAgc29saWRyZWQ6ICdyZWQnLFxuICAgIHNvbGlkcGluazogJ3doaXRlJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgc2hlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNhbWVyYSA9ICcuLi9pbWFnZS/nm7jmnLoucG5nJ1xuICAgICAgc2VsZi5yaW5nID0gJy4uL2ltYWdlLzA1X+mSu+aIki5wbmcnXG4gICAgICBzZWxmLmxpcHN0cmljayA9ICcuLi9pbWFnZS/lj6PnuqIucG5nJ1xuICAgICAgc2VsZi5mbG93ZXIgPSAnLi4vaW1hZ2Uv57uP5YW46Iqx5p2fLnBuZydcbiAgICAgIHNlbGYuZWxkZXIgPSAnLi4vaW1hZ2Uv6KGs6KGjLnBuZydcbiAgICAgIHNlbGYud2FsbGV0ID0gJy4uL2ltYWdlL+mSseWMhS5wbmcnXG4gICAgICBzZWxmLnNpc3RlciA9ICflp5Dlprkv6Ze66JycJ1xuICAgICAgc2VsZi53aWZlID0gJ+iAgeWphi/lpbPnpagnXG4gICAgICBzZWxmLm1vdGhlciA9ICflpojlpognXG4gICAgICBzZWxmLnBpbmsgPSAncGluaydcbiAgICAgIHNlbGYuc29saWRyZWQgPSAncmVkJ1xuICAgICAgc2VsZi5yZWQgPSAnYmxhY2snXG4gICAgICBzZWxmLnNvbGlkcGluayA9ICd3aGl0ZSdcbiAgICB9LFxuICAgIGhlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNhbWVyYSA9ICcuLi9pbWFnZS/nm7jmnLoucG5nJ1xuICAgICAgc2VsZi5yaW5nID0gJy4uL2ltYWdlLzA1X+mSu+aIki5wbmcnXG4gICAgICBzZWxmLndpZmUgPSAn6ICB5YWsL+eUt+elqCdcbiAgICAgIHNlbGYubGlwc3RyaWNrID0gJy4uL2ltYWdlL+aJi+ihqC5wbmcnXG4gICAgICBzZWxmLnNpc3RlciA9ICflhYTlvJ8v5Z+65Y+LJ1xuICAgICAgc2VsZi5mbG93ZXIgPSAnLi4vaW1hZ2Uv55y86ZWcLnBuZydcbiAgICAgIHNlbGYubW90aGVyID0gJ+eIuOeIuCdcbiAgICAgIHNlbGYuZWxkZXIgPSAnLi4vaW1hZ2Uv6KGs6KGjLnBuZydcbiAgICAgIHNlbGYud2FsbGV0ID0gJy4uL2ltYWdlL+mSseWMhS5wbmcnXG4gICAgICBzZWxmLnJlZCA9ICdyZWQnXG4gICAgICBzZWxmLnNvbGlkcGluayA9ICdyZWQnXG4gICAgICBzZWxmLnBpbmsgPSAnYmxhY2snXG4gICAgICBzZWxmLnNvbGlkcmVkID0gJ3doaXRlJ1xuICAgIH1cbiAgfVxuICBvbmxvYWQoKSB7IH1cbn1cbiJdfQ==