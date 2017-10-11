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
      solidpink: 'red',
      red: 'black',
      solidred: 'black'
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
        self.solidpink = 'red';
        self.red = 'black';
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
        self.solidred = 'red';
        self.pink = 'black';
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwicGVyc29uIiwibGlrZSIsImZpbmlzaCIsImNhbWVyYSIsInJpbmciLCJsaXBzdHJpY2siLCJmbG93ZXIiLCJlbGRlciIsIndhbGxldCIsIndpZmUiLCJzaXN0ZXIiLCJtb3RoZXIiLCJwaW5rIiwic29saWRwaW5rIiwicmVkIiwic29saWRyZWQiLCJtZXRob2RzIiwic2hlIiwic2VsZiIsImhlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxjQUFRLGdCQUZIO0FBR0xDLFlBQU0saUJBSEQ7QUFJTEMsY0FBUSxpQkFKSDtBQUtMQyxjQUFRLGlCQUxIO0FBTUxDLFlBQU0sb0JBTkQ7QUFPTEMsaUJBQVcsaUJBUE47QUFRTEMsY0FBUSxtQkFSSDtBQVNMQyxhQUFPLGlCQVRGO0FBVUxDLGNBQVEsaUJBVkg7QUFXTEMsWUFBTSxPQVhEO0FBWUxDLGNBQVEsT0FaSDtBQWFMQyxjQUFRLElBYkg7QUFjTEMsWUFBTSxNQWREO0FBZUxDLGlCQUFXLEtBZk47QUFnQkxDLFdBQUssT0FoQkE7QUFpQkxDLGdCQUFVO0FBakJMLEssUUFtQlBDLE8sR0FBVTtBQUNSQyxTQURRLGlCQUNGO0FBQ0osWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtmLE1BQUwsR0FBYyxpQkFBZDtBQUNBZSxhQUFLZCxJQUFMLEdBQVksb0JBQVo7QUFDQWMsYUFBS2IsU0FBTCxHQUFpQixpQkFBakI7QUFDQWEsYUFBS1osTUFBTCxHQUFjLG1CQUFkO0FBQ0FZLGFBQUtYLEtBQUwsR0FBYSxpQkFBYjtBQUNBVyxhQUFLVixNQUFMLEdBQWMsaUJBQWQ7QUFDQVUsYUFBS1IsTUFBTCxHQUFjLE9BQWQ7QUFDQVEsYUFBS1QsSUFBTCxHQUFZLE9BQVo7QUFDQVMsYUFBS1AsTUFBTCxHQUFjLElBQWQ7QUFDQU8sYUFBS04sSUFBTCxHQUFZLE1BQVo7QUFDQU0sYUFBS0wsU0FBTCxHQUFpQixLQUFqQjtBQUNBSyxhQUFLSixHQUFMLEdBQVcsT0FBWDtBQUNELE9BZk87QUFnQlJLLFFBaEJRLGdCQWdCSDtBQUNILFlBQUlELE9BQU8sSUFBWDtBQUNBQSxhQUFLZixNQUFMLEdBQWMsaUJBQWQ7QUFDQWUsYUFBS2QsSUFBTCxHQUFZLG9CQUFaO0FBQ0FjLGFBQUtULElBQUwsR0FBWSxPQUFaO0FBQ0FTLGFBQUtiLFNBQUwsR0FBaUIsaUJBQWpCO0FBQ0FhLGFBQUtSLE1BQUwsR0FBYyxPQUFkO0FBQ0FRLGFBQUtaLE1BQUwsR0FBYyxpQkFBZDtBQUNBWSxhQUFLUCxNQUFMLEdBQWMsSUFBZDtBQUNBTyxhQUFLWCxLQUFMLEdBQWEsaUJBQWI7QUFDQVcsYUFBS1YsTUFBTCxHQUFjLGlCQUFkO0FBQ0FVLGFBQUtKLEdBQUwsR0FBVyxLQUFYO0FBQ0FJLGFBQUtILFFBQUwsR0FBZ0IsS0FBaEI7QUFDQUcsYUFBS04sSUFBTCxHQUFZLE9BQVo7QUFDRDtBQTlCTyxLOzs7Ozs2QkFnQ0QsQ0FBRzs7OztFQXZEcUIsZUFBS1EsSTs7a0JBQW5CekIsSyIsImZpbGUiOiJmcmllbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnpLznianor7QnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzcmM6ICcnLFxuICAgIHBlcnNvbjogJy4uL2ltYWdlL+S6ui5wbmcnLFxuICAgIGxpa2U6ICcuLi9pbWFnZS/npLzniakucG5nJyxcbiAgICBmaW5pc2g6ICcuLi9pbWFnZS/lr7nli74ucG5nJyxcbiAgICBjYW1lcmE6ICcuLi9pbWFnZS/nm7jmnLoucG5nJyxcbiAgICByaW5nOiAnLi4vaW1hZ2UvMDVf6ZK75oiSLnBuZycsXG4gICAgbGlwc3RyaWNrOiAnLi4vaW1hZ2Uv5Y+j57qiLnBuZycsXG4gICAgZmxvd2VyOiAnLi4vaW1hZ2Uv57uP5YW46Iqx5p2fLnBuZycsXG4gICAgZWxkZXI6ICcuLi9pbWFnZS/ooazooaMucG5nJyxcbiAgICB3YWxsZXQ6ICcuLi9pbWFnZS/pkrHljIUucG5nJyxcbiAgICB3aWZlOiAn6ICB5amGL+Wls+elqCcsXG4gICAgc2lzdGVyOiAn5aeQ5aa5L+mXuuicnCcsXG4gICAgbW90aGVyOiAn5aaI5aaIJyxcbiAgICBwaW5rOiAncGluaycsXG4gICAgc29saWRwaW5rOiAncmVkJyxcbiAgICByZWQ6ICdibGFjaycsXG4gICAgc29saWRyZWQ6ICdibGFjaydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHNoZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jYW1lcmEgPSAnLi4vaW1hZ2Uv55u45py6LnBuZydcbiAgICAgIHNlbGYucmluZyA9ICcuLi9pbWFnZS8wNV/pkrvmiJIucG5nJ1xuICAgICAgc2VsZi5saXBzdHJpY2sgPSAnLi4vaW1hZ2Uv5Y+j57qiLnBuZydcbiAgICAgIHNlbGYuZmxvd2VyID0gJy4uL2ltYWdlL+e7j+WFuOiKseadny5wbmcnXG4gICAgICBzZWxmLmVsZGVyID0gJy4uL2ltYWdlL+ihrOihoy5wbmcnXG4gICAgICBzZWxmLndhbGxldCA9ICcuLi9pbWFnZS/pkrHljIUucG5nJ1xuICAgICAgc2VsZi5zaXN0ZXIgPSAn5aeQ5aa5L+mXuuicnCdcbiAgICAgIHNlbGYud2lmZSA9ICfogIHlqYYv5aWz56WoJ1xuICAgICAgc2VsZi5tb3RoZXIgPSAn5aaI5aaIJ1xuICAgICAgc2VsZi5waW5rID0gJ3BpbmsnXG4gICAgICBzZWxmLnNvbGlkcGluayA9ICdyZWQnXG4gICAgICBzZWxmLnJlZCA9ICdibGFjaydcbiAgICB9LFxuICAgIGhlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNhbWVyYSA9ICcuLi9pbWFnZS/nm7jmnLoucG5nJ1xuICAgICAgc2VsZi5yaW5nID0gJy4uL2ltYWdlLzA1X+mSu+aIki5wbmcnXG4gICAgICBzZWxmLndpZmUgPSAn6ICB5YWsL+eUt+elqCdcbiAgICAgIHNlbGYubGlwc3RyaWNrID0gJy4uL2ltYWdlL+aJi+ihqC5wbmcnXG4gICAgICBzZWxmLnNpc3RlciA9ICflhYTlvJ8v5Z+65Y+LJ1xuICAgICAgc2VsZi5mbG93ZXIgPSAnLi4vaW1hZ2Uv55y86ZWcLnBuZydcbiAgICAgIHNlbGYubW90aGVyID0gJ+eIuOeIuCdcbiAgICAgIHNlbGYuZWxkZXIgPSAnLi4vaW1hZ2Uv6KGs6KGjLnBuZydcbiAgICAgIHNlbGYud2FsbGV0ID0gJy4uL2ltYWdlL+mSseWMhS5wbmcnXG4gICAgICBzZWxmLnJlZCA9ICdyZWQnXG4gICAgICBzZWxmLnNvbGlkcmVkID0gJ3JlZCdcbiAgICAgIHNlbGYucGluayA9ICdibGFjaydcbiAgICB9XG4gIH1cbiAgb25sb2FkKCkgeyB9XG59XG4iXX0=