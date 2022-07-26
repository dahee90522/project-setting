/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csspositionsticky-setclasses-shiv-cssclassprefix:mod_ !*/
!(function (e, t, n) {
  function a(e, t) {
    return typeof e === t;
  }
  function o() {
    var e, t, n, o, r, i, l;
    for (var u in c)
      if (c.hasOwnProperty(u)) {
        if (
          ((e = []),
          (t = c[u]),
          t.name &&
            (e.push(t.name.toLowerCase()),
            t.options && t.options.aliases && t.options.aliases.length))
        )
          for (n = 0; n < t.options.aliases.length; n++)
            e.push(t.options.aliases[n].toLowerCase());
        for (o = a(t.fn, 'function') ? t.fn() : t.fn, r = 0; r < e.length; r++)
          (i = e[r]),
            (l = i.split('.')),
            1 === l.length
              ? (Modernizr[l[0]] = o)
              : (!Modernizr[l[0]] ||
                  Modernizr[l[0]] instanceof Boolean ||
                  (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])),
                (Modernizr[l[0]][l[1]] = o)),
            s.push((o ? '' : 'no-') + l.join('-'));
      }
  }
  function r(e) {
    var t = u.className,
      n = Modernizr._config.classPrefix || '';
    if ((f && (t = t.baseVal), Modernizr._config.enableJSClass)) {
      var a = new RegExp('(^|\\s)' + n + 'no-js(\\s|$)');
      t = t.replace(a, '$1' + n + 'js$2');
    }
    Modernizr._config.enableClasses &&
      ((t += ' ' + n + e.join(' ' + n)),
      f ? (u.className.baseVal = t) : (u.className = t));
  }
  function i() {
    return 'function' != typeof t.createElement
      ? t.createElement(arguments[0])
      : f
      ? t.createElementNS.call(t, 'http://www.w3.org/2000/svg', arguments[0])
      : t.createElement.apply(t, arguments);
  }
  var s = [],
    c = [],
    l = {
      _version: '3.6.0',
      _config: {
        classPrefix: 'mod_',
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, t) {
        var n = this;
        setTimeout(function () {
          t(n[e]);
        }, 0);
      },
      addTest: function (e, t, n) {
        c.push({ name: e, fn: t, options: n });
      },
      addAsyncTest: function (e) {
        c.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = l), (Modernizr = new Modernizr());
  var u = t.documentElement,
    f = 'svg' === u.nodeName.toLowerCase();
  f ||
    !(function (e, t) {
      function n(e, t) {
        var n = e.createElement('p'),
          a = e.getElementsByTagName('head')[0] || e.documentElement;
        return (
          (n.innerHTML = 'x<style>' + t + '</style>'),
          a.insertBefore(n.lastChild, a.firstChild)
        );
      }
      function a() {
        var e = E.elements;
        return 'string' == typeof e ? e.split(' ') : e;
      }
      function o(e, t) {
        var n = E.elements;
        'string' != typeof n && (n = n.join(' ')),
          'string' != typeof e && (e = e.join(' ')),
          (E.elements = n + ' ' + e),
          l(t);
      }
      function r(e) {
        var t = y[e[g]];
        return t || ((t = {}), v++, (e[g] = v), (y[v] = t)), t;
      }
      function i(e, n, a) {
        if ((n || (n = t), f)) return n.createElement(e);
        a || (a = r(n));
        var o;
        return (
          (o = a.cache[e]
            ? a.cache[e].cloneNode()
            : h.test(e)
            ? (a.cache[e] = a.createElem(e)).cloneNode()
            : a.createElem(e)),
          !o.canHaveChildren || p.test(e) || o.tagUrn
            ? o
            : a.frag.appendChild(o)
        );
      }
      function s(e, n) {
        if ((e || (e = t), f)) return e.createDocumentFragment();
        n = n || r(e);
        for (
          var o = n.frag.cloneNode(), i = 0, s = a(), c = s.length;
          c > i;
          i++
        )
          o.createElement(s[i]);
        return o;
      }
      function c(e, t) {
        t.cache ||
          ((t.cache = {}),
          (t.createElem = e.createElement),
          (t.createFrag = e.createDocumentFragment),
          (t.frag = t.createFrag())),
          (e.createElement = function (n) {
            return E.shivMethods ? i(n, e, t) : t.createElem(n);
          }),
          (e.createDocumentFragment = Function(
            'h,f',
            'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' +
              a()
                .join()
                .replace(/[\w\-:]+/g, function (e) {
                  return (
                    t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                  );
                }) +
              ');return n}',
          )(E, t.frag));
      }
      function l(e) {
        e || (e = t);
        var a = r(e);
        return (
          !E.shivCSS ||
            u ||
            a.hasCSS ||
            (a.hasCSS = !!n(
              e,
              'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}',
            )),
          f || c(e, a),
          e
        );
      }
      var u,
        f,
        m = '3.7.3',
        d = e.html5 || {},
        p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        g = '_html5shiv',
        v = 0,
        y = {};
      !(function () {
        try {
          var e = t.createElement('a');
          (e.innerHTML = '<xyz></xyz>'),
            (u = 'hidden' in e),
            (f =
              1 == e.childNodes.length ||
              (function () {
                t.createElement('a');
                var e = t.createDocumentFragment();
                return (
                  'undefined' == typeof e.cloneNode ||
                  'undefined' == typeof e.createDocumentFragment ||
                  'undefined' == typeof e.createElement
                );
              })());
        } catch (n) {
          (u = !0), (f = !0);
        }
      })();
      var E = {
        elements:
          d.elements ||
          'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video',
        version: m,
        shivCSS: d.shivCSS !== !1,
        supportsUnknownElements: f,
        shivMethods: d.shivMethods !== !1,
        type: 'default',
        shivDocument: l,
        createElement: i,
        createDocumentFragment: s,
        addElements: o,
      };
      (e.html5 = E),
        l(t),
        'object' == typeof module && module.exports && (module.exports = E);
    })('undefined' != typeof e ? e : this, t);
  var m = l._config.usePrefixes
    ? ' -webkit- -moz- -o- -ms- '.split(' ')
    : ['', ''];
  (l._prefixes = m),
    Modernizr.addTest('csspositionsticky', function () {
      var e = 'position:',
        t = 'sticky',
        n = i('a'),
        a = n.style;
      return (
        (a.cssText = e + m.join(t + ';' + e).slice(0, -e.length)),
        -1 !== a.position.indexOf(t)
      );
    }),
    o(),
    r(s),
    delete l.addTest,
    delete l.addAsyncTest;
  for (var d = 0; d < Modernizr._q.length; d++) Modernizr._q[d]();
  e.Modernizr = Modernizr;
})(window, document);
