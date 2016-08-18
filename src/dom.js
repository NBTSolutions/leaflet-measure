// dom.js
// utility functions for managing DOM elements

var selectOne = function (selector, el) {
  if (!el) {
    el = document;
  }
  return el.querySelector(selector);
};

var selectAll = function (selector, el) {
  if (!el) {
    el = document;
  }
  return Array.prototype.slice.call(el.querySelectorAll(selector));
};

var hide = function (el) {
  if (el) {
    el.setAttribute('style', 'display:none;');
    return el;
  }
};

var show = function (el) {
  if (el) {
    el.removeAttribute('style');
    return el;
  }
};

var hasClass = function (el, className) {
  if (el.classList) {
    return el.classList.contains(className);
  } else {
    return el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  }
};

var addClass = function (el, className) {
  if (el) {
    if (el.classList) {
      el.classList.add(className);
    } else if (!hasClass(el, className)) {
      el.className += ' ' + className;
    }
    return el;
  }
};

var removeClass = function (el, className) {
  if (el) {
    if (el.classList) {
      el.classList.remove(className);
    } else if (hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
      el.className=el.className.replace(reg, ' ');
    }
    return el;
  }
};

module.exports = {
  $: selectOne,  // `$('.myclass', baseElement)` - returns selected element or undefined
  $$: selectAll, // `$$('.myclass', baseElement)` - returns array of selected elements
  hide: hide,    // `hide(someElement)` - hide passed dom element
  show: show,    // `show(someElement)` - show passed dom element
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass
};
