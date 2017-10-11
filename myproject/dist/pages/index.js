'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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
      items: [{ name: 'USA', value: '美国' }, { name: 'CHN', value: '中国', checked: 'true' }, { name: 'BRA', value: '巴西' }, { name: 'JPN', value: '日本' }, { name: 'ENG', value: '英国' }, { name: 'TUR', value: '法国' }],
      focus: false,
      inputValue: ''
    }, _this.mothods = {
      onTap: function onTap() {
        var self = this;
        self.age++;
      },
      checkboxChange: function checkboxChange(e) {
        console.log('checkbox发生change事件，携带value值为：', e.detail.value);
      },
      formSubmit: function formSubmit(e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
      },
      formReset: function formReset() {
        console.log('form发生了reset事件');
      },
      bindButtonTap: function bindButtonTap() {
        var that = this;
        _wepy2.default.chooseVideo({
          sourceType: ['album', 'camera'],
          maxDuration: 60,
          camera: 'back',
          success: function success(res) {
            that.setData({
              src: res.tempFilePath
            });
          }
        });
        this.setData({
          focus: true
        });
        _wepy2.default.saveVideoToPhotosAlbum({
          success: function success(res) {}
        });
      },
      bindKeyInput: function bindKeyInput(e) {
        this.setData({
          inputValue: e.detail.value
        });
      },
      bindReplaceInput: function bindReplaceInput(e) {
        var value = e.detail.value;
        var pos = e.detail.cursor;
        if (pos !== -1) {
          // 光标在中间
          var left = e.detail.value.slice(0, pos);
          // 计算光标的位置
          pos = left.replace(/11/g, '2').length;
        }
        return {
          value: value.replace(/11/g, '2'),
          cursor: pos
          // 或者直接返回字符串,光标在最后边
          // return value.replace(/11/g,'2')
        };
      },
      image: function image() {
        var self = this;
        _wepy2.default.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function success(res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            self.src = res.tempFilePaths[0];
            self.setData({
              src: res.tempFilePaths[0]
            });
          }
        });
      },

      bindPickerChange: function bindPickerChange(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value);
        this.setData({
          index: e.detail.value
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onload',
    value: function onload() {}
  }]);

  return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJhZ2UiLCJuYW1lIiwiaXRlbXMiLCJ2YWx1ZSIsImNoZWNrZWQiLCJmb2N1cyIsImlucHV0VmFsdWUiLCJtb3Rob2RzIiwib25UYXAiLCJzZWxmIiwiY2hlY2tib3hDaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsImZvcm1TdWJtaXQiLCJmb3JtUmVzZXQiLCJiaW5kQnV0dG9uVGFwIiwidGhhdCIsImNob29zZVZpZGVvIiwic291cmNlVHlwZSIsIm1heER1cmF0aW9uIiwiY2FtZXJhIiwic3VjY2VzcyIsInJlcyIsInNldERhdGEiLCJzcmMiLCJ0ZW1wRmlsZVBhdGgiLCJzYXZlVmlkZW9Ub1Bob3Rvc0FsYnVtIiwiYmluZEtleUlucHV0IiwiYmluZFJlcGxhY2VJbnB1dCIsInBvcyIsImN1cnNvciIsImxlZnQiLCJzbGljZSIsInJlcGxhY2UiLCJsZW5ndGgiLCJpbWFnZSIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInRlbXBGaWxlUGF0aHMiLCJiaW5kUGlja2VyQ2hhbmdlIiwiaW5kZXgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLFlBQU0sS0FGRDtBQUdMQyxhQUFPLENBQ0wsRUFBRUQsTUFBTSxLQUFSLEVBQWVFLE9BQU8sSUFBdEIsRUFESyxFQUVMLEVBQUVGLE1BQU0sS0FBUixFQUFlRSxPQUFPLElBQXRCLEVBQTRCQyxTQUFTLE1BQXJDLEVBRkssRUFHTCxFQUFFSCxNQUFNLEtBQVIsRUFBZUUsT0FBTyxJQUF0QixFQUhLLEVBSUwsRUFBRUYsTUFBTSxLQUFSLEVBQWVFLE9BQU8s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U1gsS0FBMUM7QUFDQSxhQUFLc0IsT0FBTCxDQUFhO0FBQ1hrQixpQkFBT2hDLEVBQUVHLE1BQUYsQ0FBU1g7QUFETCxTQUFiO0FBR0Q7QUE1RU8sSzs7Ozs7NkJBOEVELENBQUc7Ozs7RUFoR3FCLGVBQUt5QyxJOztrQkFBbkJoRCxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5qGj5qGIJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgYWdlOiAyMCxcbiAgICBuYW1lOiAnMTIzJyxcbiAgICBpdGVtczogW1xuICAgICAgeyBuYW1lOiAnVVNBJywgdmFsdWU6ICfnvo7lm70nIH0sXG4gICAgICB7IG5hbWU6ICdDSE4nLCB2YWx1ZTogJ+S4reWbvScsIGNoZWNrZWQ6ICd0cnVlJyB9LFxuICAgICAgeyBuYW1lOiAnQlJBJywgdmFsdWU6ICflt7Topb8nIH0sXG4gICAgICB7IG5hbWU6ICdKUE4nLCB2YWx1ZTogJ+aXpeacrCcgfSxcbiAgICAgIHsgbmFtZTogJ0VORycsIHZhbHVlOiAn6Iux5Zu9JyB9LFxuICAgICAgeyBuYW1lOiAnVFVSJywgdmFsdWU6ICfms5Xlm70nIH1cbiAgICBdLFxuICAgIGZvY3VzOiBmYWxzZSxcbiAgICBpbnB1dFZhbHVlOiAnJ1xuICB9XG4gIG1vdGhvZHMgPSB7XG4gICAgb25UYXAoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuYWdlKytcbiAgICB9LFxuICAgIGNoZWNrYm94Q2hhbmdlKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdjaGVja2JveOWPkeeUn2NoYW5nZeS6i+S7tu+8jOaQuuW4pnZhbHVl5YC85Li677yaJywgZS5kZXRhaWwudmFsdWUpXG4gICAgfSxcblxuICAgIGZvcm1TdWJtaXQoZSkge1xuICAgICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZzdWJtaXTkuovku7bvvIzmkLrluKbmlbDmja7kuLrvvJonLCBlLmRldGFpbC52YWx1ZSlcbiAgICB9LFxuICAgIGZvcm1SZXNldCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdmb3Jt5Y+R55Sf5LqGcmVzZXTkuovku7YnKVxuICAgIH0sXG4gICAgYmluZEJ1dHRvblRhcCgpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpc1xuICAgICAgd2VweS5jaG9vc2VWaWRlbyh7XG4gICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXG4gICAgICAgIG1heER1cmF0aW9uOiA2MCxcbiAgICAgICAgY2FtZXJhOiAnYmFjaycsXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgdGhhdC5zZXREYXRhKHtcbiAgICAgICAgICAgIHNyYzogcmVzLnRlbXBGaWxlUGF0aFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBmb2N1czogdHJ1ZVxuICAgICAgfSlcbiAgICAgIHdlcHkuc2F2ZVZpZGVvVG9QaG90b3NBbGJ1bSh7XG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBiaW5kS2V5SW5wdXQoZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaW5wdXRWYWx1ZTogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgfSxcbiAgICBiaW5kUmVwbGFjZUlucHV0KGUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB2YXIgcG9zID0gZS5kZXRhaWwuY3Vyc29yXG4gICAgICBpZiAocG9zICE9PSAtMSkge1xuICAgICAgICAvLyDlhYnmoIflnKjkuK3pl7RcbiAgICAgICAgdmFyIGxlZnQgPSBlLmRldGFpbC52YWx1ZS5zbGljZSgwLCBwb3MpXG4gICAgICAgIC8vIOiuoeeul+WFieagh+eahOS9jee9rlxuICAgICAgICBwb3MgPSBsZWZ0LnJlcGxhY2UoLzExL2csICcyJykubGVuZ3RoXG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdmFsdWUucmVwbGFjZSgvMTEvZywgJzInKSxcbiAgICAgICAgY3Vyc29yOiBwb3NcbiAgICAgIH1cbiAgICAgIC8vIOaIluiAheebtOaOpei/lOWbnuWtl+espuS4sizlhYnmoIflnKjmnIDlkI7ovrlcbiAgICAgIC8vIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8xMS9nLCcyJylcbiAgICB9LFxuICAgIGltYWdlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgY291bnQ6IDEsIC8vIOm7mOiupDlcbiAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLCAvLyDlj6/ku6XmjIflrprmmK/ljp/lm77ov5jmmK/ljovnvKnlm77vvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSwgLy8g5Y+v5Lul5oyH5a6a5p2l5rqQ5piv55u45YaM6L+Y5piv55u45py677yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIC8vIOi/lOWbnumAieWumueFp+eJh+eahOacrOWcsOaWh+S7tui3r+W+hOWIl+ihqO+8jHRlbXBGaWxlUGF0aOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJh1xuICAgICAgICAgIHNlbGYuc3JjID0gcmVzLnRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgc3JjOiByZXMudGVtcEZpbGVQYXRoc1swXVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBiaW5kUGlja2VyQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgICBjb25zb2xlLmxvZygncGlja2Vy5Y+R6YCB6YCJ5oup5pS55Y+Y77yM5pC65bim5YC85Li6JywgZS5kZXRhaWwudmFsdWUpXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpbmRleDogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9ubG9hZCgpIHsgfVxufVxuIl19