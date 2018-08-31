global.webpackJsonp([4],{

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(47);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  // 这个字段走 app.json
  config: {
    onReachBottomDistance: 50
  }
});

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_33b37240_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(50);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(48)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-33b37240"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_33b37240_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-33b37240", Component.options)
  } else {
    hotAPI.reload("data-v-33b37240", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 48:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      imgUrls: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'],
      news: [{
        img: '//z6.sinaimg.cn/auto/resize?img=https%3A%2F%2Fn.sinaimg.cn%2Ftranslate%2F746%2Fw960h586%2F20180807%2FWySh-hhkusks8851274.jpg&size=200_134',
        title: '日外相会晤昂山素季 承诺扩大对缅甸基础设施援助',
        desc: '描述'
      }, {
        img: '//z0.sinaimg.cn/auto/resize?img=https%3A%2F%2Fn.sinaimg.cn%2Fdefault%2Ftransform%2F116%2Fw550h366%2F20180517%2Fq7Vh-harvfhu4569176.png&size=200_134',
        title: '印尼地震细节披露:游客爆料想登救生艇被索要费用',
        desc: '描述'
      }, {
        img: '//z9.sinaimg.cn/auto/resize?img=https%3A%2F%2Fn.sinaimg.cn%2Fdefault%2Ftransform%2F266%2Fw640h426%2F20180807%2FrSrR-hhkusks9302556.jpg&size=200_134',
        title: '台当局改口以中华台北之名参加奥运 被赞知错能改',
        desc: '描述'
      }, {
        img: '//z7.sinaimg.cn/auto/resize?img=https%3A%2F%2Fn.sinaimg.cn%2Fsinacn17%2F40%2Fw480h360%2F20180804%2F13e7-hhhczfa4232205.jpg&size=200_134',
        title: '美国称赞“白头盔”英雄，却因这举动露馅，外媒：这下没话说了！',
        desc: '描述'
      }, {
        img: '//z3.sinaimg.cn/auto/resize?img=https%3A%2F%2Fn.sinaimg.cn%2Fsinacn12%2F766%2Fw1002h564%2F20180806%2F0109-hhhczfc3651492.jpg&size=200_134',
        title: '司机遇查龟速逃跑，交警一路陪跑300米：要不歇会',
        desc: '描述'
      }],
      list: [{
        name: '早餐'
      }, {
        name: '蔬菜'
      }, {
        name: '禽蛋'
      }, {
        name: '肉制品'
      }, {
        name: '水产'
      }, {
        name: '瓜果'
      }, {
        name: '面豆制品'
      }, {
        name: '调味品'
      }, {
        name: '干货'
      }, {
        name: '杂货'
      }]
    };
  },


  components: {},

  methods: {
    toGoods: function toGoods() {
      wx.navigateTo({
        // url: '/pages/ewords/main?id=' + id
        url: '/pages/goods/main'
      });
    }
  },

  created: function created() {},
  onReachBottom: function onReachBottom() {
    var _news;

    var item = [{
      img: '//z8.sinaimg.cn/auto/resize?img=https%3A%2F%2Fn.sinaimg.cn%2Ffront%2F38%2Fw419h419%2F20180806%2FEGTz-fzrwica0254999.jpg&size=200_134',
      title: '富士康缩减美国威斯康辛项目规模 工厂降级',
      desc: '描述'
    }, {
      img: '//z7.sinaimg.cn/auto/resize?img=https%3A%2F%2Fn.sinaimg.cn%2Ffront%2F200%2Fw640h360%2F20180806%2FnB5Y-hhhczfc7069804.jpg&size=200_134',
      title: '北大教授批抗日神剧：无视民族苦难 宣扬阿Q精神',
      desc: '描述'
    }, {
      img: '//z7.sinaimg.cn/auto/resize?img=https%3A%2F%2Fn.sinaimg.cn%2Ftranslate%2F333%2Fw690h443%2F20180807%2FRJGx-hhkusks8325514.jpg&size=200_134',
      title: '这个地方借债10亿 用大学学费住宿费伙食费作抵押',
      desc: '描述'
    }, {
      img: '//z4.sinaimg.cn/auto/resize?img=https%3A%2F%2Fn.sinaimg.cn%2Fsinacn17%2F750%2Fw480h270%2F20180806%2Fc4f5-hhhczfc6039768.png&size=200_134',
      title: '越南网吧一群小学生打游戏，老板在17秒的监控画面发现亮点',
      desc: '描述'
    }, {
      img: '//z6.sinaimg.cn/auto/resize?img=https%3A%2F%2Fn.sinaimg.cn%2Ffront%2F58%2Fw549h309%2F20180802%2FK8in-fzrwica0039322.jpg&size=200_134',
      title: '联合国突然下狠手！日本损失惨重 中国这次赢了不少',
      desc: '描述'
    }];
    (_news = this.news).push.apply(_news, item);
    console.log(this.news);
  }
});

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "list-wrapper"
  }, [_c('div', {
    staticClass: "team"
  }, _vm._l((_vm.list), function(item, index) {
    return (index < 5) ? _c('div', {
      key: index,
      staticClass: "item",
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": _vm.toGoods
      }
    }, [_c('div', {
      staticClass: "iconfont icon-dan img"
    }), _vm._v(" "), _c('div', {
      staticClass: "font"
    }, [_vm._v(_vm._s(item.name))])]) : _vm._e()
  })), _vm._v(" "), _c('div', {
    staticClass: "team"
  }, _vm._l((_vm.list), function(item, index) {
    return (index > 4) ? _c('div', {
      key: index,
      staticClass: "item",
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "click": _vm.toGoods
      }
    }, [_c('div', {
      staticClass: "iconfont icon-dan img"
    }), _vm._v(" "), _c('div', {
      staticClass: "font"
    }, [_vm._v(_vm._s(item.name))])]) : _vm._e()
  }))]), _vm._v(" "), _c('div', {
    staticClass: "swiper-wrapper"
  }, [_c('swiper', {
    staticClass: "swiper",
    attrs: {
      "indicator-dots": "true",
      "autoplay": "true",
      "interval": "5000",
      "duration": "1000"
    }
  }, _vm._l((_vm.imgUrls), function(item, index) {
    return _c('block', {
      key: _vm.key,
      attrs: {
        "index": index
      }
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0-' + index
      }
    }, [_c('image', {
      staticClass: "slide-image",
      attrs: {
        "src": item,
        "mode": "aspectFill"
      }
    })])], 1)
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "news-wrapper"
  }, _vm._l((_vm.news), function(item, index) {
    return _c('div', {
      key: _vm.key,
      staticClass: "item"
    }, [_c('img', {
      staticClass: "img",
      attrs: {
        "src": item.img
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "content"
    }, [_c('div', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.title))])])])
  }))])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "top-wrapper"
  }, [_c('div', {
    staticClass: "location"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "iconfont icon-locationfill"
  }), _vm._v(" "), _c('div', {
    staticClass: "font"
  }, [_vm._v("德丰大楼")])]), _vm._v(" "), _c('div', {
    staticClass: "button"
  }, [_vm._v("商")])]), _vm._v(" "), _c('div', {
    staticClass: "seach"
  }, [_c('div', {
    staticClass: "iconfont icon-search"
  }), _vm._v(" "), _c('div', {
    staticClass: "font"
  }, [_vm._v("搜索商品")])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-33b37240", esExports)
  }
}

/***/ })

},[46]);
//# sourceMappingURL=main.js.map