import Vue from 'vue';

Vue.directive('copy', {
  bind: function(el, { value }, vnode) {
    el.onClick = e => {
      const _el = document.createElement('textarea');
      _el.value = value;
      _el.setAttribute('readonly', '');
      _el.style.position = 'absolute';
      _el.style.left = '-9999px';
      document.body.appendChild(_el);

      const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
      _el.select();
      document.execCommand('copy');
      document.body.removeChild(_el);
      if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
      }
    };
    el.addEventListener('click', el.onClick);
  },
  unbind: function(el, { value }, vnode) {
    el.removeEventListener('click', el.onClick);
    delete el.onClick;
  },
});

Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted: function(el) {
    // Focus the element
    el.focus();
  },
});
