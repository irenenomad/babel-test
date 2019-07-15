'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(f);

function f() {
  return _regenerator2.default.wrap(function f$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('执行了！');

        case 1:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

var generator = f();

setTimeout(function () {
  generator.next();
}, 2000);