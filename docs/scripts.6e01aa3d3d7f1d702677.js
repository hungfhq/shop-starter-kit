!(function(e, t) {
  'use strict';
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function(e) {
            if (!e.document) throw new Error('jQuery requires a window with a document');
            return t(e);
          })
    : t(e);
})('undefined' != typeof window ? window : this, function(e, t) {
  'use strict';
  var n = [],
    i = e.document,
    r = Object.getPrototypeOf,
    o = n.slice,
    s = n.concat,
    a = n.push,
    l = n.indexOf,
    u = {},
    c = u.toString,
    f = u.hasOwnProperty,
    h = f.toString,
    d = h.call(Object),
    p = {},
    g = function(e) {
      return 'function' == typeof e && 'number' != typeof e.nodeType;
    },
    m = function(e) {
      return null != e && e === e.window;
    },
    v = { type: !0, src: !0, noModule: !0 };
  function y(e, t, n) {
    var r,
      o = (t = t || i).createElement('script');
    if (((o.text = e), n)) for (r in v) n[r] && (o[r] = n[r]);
    t.head.appendChild(o).parentNode.removeChild(o);
  }
  function _(e) {
    return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? u[c.call(e)] || 'object' : typeof e;
  }
  var b = function(e, t) {
      return new b.fn.init(e, t);
    },
    w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function T(e) {
    var t = !!e && 'length' in e && e.length,
      n = _(e);
    return !g(e) && !m(e) && ('array' === n || 0 === t || ('number' == typeof t && t > 0 && t - 1 in e));
  }
  (b.fn = b.prototype = {
    jquery: '3.3.1',
    constructor: b,
    length: 0,
    toArray: function() {
      return o.call(this);
    },
    get: function(e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function(e) {
      var t = b.merge(this.constructor(), e);
      return (t.prevObject = this), t;
    },
    each: function(e) {
      return b.each(this, e);
    },
    map: function(e) {
      return this.pushStack(
        b.map(this, function(t, n) {
          return e.call(t, n, t);
        })
      );
    },
    slice: function() {
      return this.pushStack(o.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    eq: function(e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    },
    push: a,
    sort: n.sort,
    splice: n.splice
  }),
    (b.extend = b.fn.extend = function() {
      var e,
        t,
        n,
        i,
        r,
        o,
        s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        u = !1;
      for (
        'boolean' == typeof s && ((u = s), (s = arguments[a] || {}), a++),
          'object' == typeof s || g(s) || (s = {}),
          a === l && ((s = this), a--);
        a < l;
        a++
      )
        if (null != (e = arguments[a]))
          for (t in e)
            (n = s[t]),
              s !== (i = e[t]) &&
                (u && i && (b.isPlainObject(i) || (r = Array.isArray(i)))
                  ? (r ? ((r = !1), (o = n && Array.isArray(n) ? n : [])) : (o = n && b.isPlainObject(n) ? n : {}),
                    (s[t] = b.extend(u, o, i)))
                  : void 0 !== i && (s[t] = i));
      return s;
    }),
    b.extend({
      expando: 'jQuery' + ('3.3.1' + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function(e) {
        throw new Error(e);
      },
      noop: function() {},
      isPlainObject: function(e) {
        var t, n;
        return !(
          !e ||
          '[object Object]' !== c.call(e) ||
          ((t = r(e)) && ('function' != typeof (n = f.call(t, 'constructor') && t.constructor) || h.call(n) !== d))
        );
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function(e) {
        y(e);
      },
      each: function(e, t) {
        var n,
          i = 0;
        if (T(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      trim: function(e) {
        return null == e ? '' : (e + '').replace(w, '');
      },
      makeArray: function(e, t) {
        var n = t || [];
        return null != e && (T(Object(e)) ? b.merge(n, 'string' == typeof e ? [e] : e) : a.call(n, e)), n;
      },
      inArray: function(e, t, n) {
        return null == t ? -1 : l.call(t, e, n);
      },
      merge: function(e, t) {
        for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
        return (e.length = r), e;
      },
      grep: function(e, t, n) {
        for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
        return i;
      },
      map: function(e, t, n) {
        var i,
          r,
          o = 0,
          a = [];
        if (T(e)) for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && a.push(r);
        else for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
        return s.apply([], a);
      },
      guid: 1,
      support: p
    }),
    'function' == typeof Symbol && (b.fn[Symbol.iterator] = n[Symbol.iterator]),
    b.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function(e, t) {
      u['[object ' + t + ']'] = t.toLowerCase();
    });
  var E = (function(e) {
    var t,
      n,
      i,
      r,
      o,
      s,
      a,
      l,
      u,
      c,
      f,
      h,
      d,
      p,
      g,
      m,
      v,
      y,
      _,
      b = 'sizzle' + 1 * new Date(),
      w = e.document,
      T = 0,
      E = 0,
      x = se(),
      C = se(),
      S = se(),
      A = function(e, t) {
        return e === t && (f = !0), 0;
      },
      D = {}.hasOwnProperty,
      N = [],
      k = N.pop,
      I = N.push,
      j = N.push,
      O = N.slice,
      L = function(e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      },
      q =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      P = '[\\x20\\t\\r\\n\\f]',
      R = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
      H =
        '\\[' +
        P +
        '*(' +
        R +
        ')(?:' +
        P +
        '*([*^$|!~]?=)' +
        P +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        R +
        '))|)' +
        P +
        '*\\]',
      M =
        ':(' +
        R +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        H +
        ')*)|.*)\\)|)',
      F = new RegExp(P + '+', 'g'),
      B = new RegExp('^' + P + '+|((?:^|[^\\\\])(?:\\\\.)*)' + P + '+$', 'g'),
      W = new RegExp('^' + P + '*,' + P + '*'),
      U = new RegExp('^' + P + '*([>+~]|' + P + ')' + P + '*'),
      V = new RegExp('=' + P + '*([^\\]\'"]*?)' + P + '*\\]', 'g'),
      $ = new RegExp(M),
      Q = new RegExp('^' + R + '$'),
      z = {
        ID: new RegExp('^#(' + R + ')'),
        CLASS: new RegExp('^\\.(' + R + ')'),
        TAG: new RegExp('^(' + R + '|[*])'),
        ATTR: new RegExp('^' + H),
        PSEUDO: new RegExp('^' + M),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            P +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            P +
            '*(?:([+-]|)' +
            P +
            '*(\\d+)|))' +
            P +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + q + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            P +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            P +
            '*((?:-\\d)?\\d*)' +
            P +
            '*\\)|)(?=[^-]|$)',
          'i'
        )
      },
      X = /^(?:input|select|textarea|button)$/i,
      G = /^h\d$/i,
      Y = /^[^{]+\{\s*\[native \w/,
      K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      J = /[+~]/,
      Z = new RegExp('\\\\([\\da-f]{1,6}' + P + '?|(' + P + ')|.)', 'ig'),
      ee = function(e, t, n) {
        var i = '0x' + t - 65536;
        return i != i || n
          ? t
          : i < 0
          ? String.fromCharCode(i + 65536)
          : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      },
      te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ne = function(e, t) {
        return t
          ? '\0' === e
            ? '\ufffd'
            : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' '
          : '\\' + e;
      },
      ie = function() {
        h();
      },
      re = ye(
        function(e) {
          return !0 === e.disabled && ('form' in e || 'label' in e);
        },
        { dir: 'parentNode', next: 'legend' }
      );
    try {
      j.apply((N = O.call(w.childNodes)), w.childNodes);
    } catch (Ee) {
      j = {
        apply: N.length
          ? function(e, t) {
              I.apply(e, O.call(t));
            }
          : function(e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            }
      };
    }
    function oe(e, t, i, r) {
      var o,
        a,
        u,
        c,
        f,
        p,
        v,
        y = t && t.ownerDocument,
        T = t ? t.nodeType : 9;
      if (((i = i || []), 'string' != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))) return i;
      if (!r && ((t ? t.ownerDocument || t : w) !== d && h(t), (t = t || d), g)) {
        if (11 !== T && (f = K.exec(e)))
          if ((o = f[1])) {
            if (9 === T) {
              if (!(u = t.getElementById(o))) return i;
              if (u.id === o) return i.push(u), i;
            } else if (y && (u = y.getElementById(o)) && _(t, u) && u.id === o) return i.push(u), i;
          } else {
            if (f[2]) return j.apply(i, t.getElementsByTagName(e)), i;
            if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
              return j.apply(i, t.getElementsByClassName(o)), i;
          }
        if (n.qsa && !S[e + ' '] && (!m || !m.test(e))) {
          if (1 !== T) (y = t), (v = e);
          else if ('object' !== t.nodeName.toLowerCase()) {
            for (
              (c = t.getAttribute('id')) ? (c = c.replace(te, ne)) : t.setAttribute('id', (c = b)),
                a = (p = s(e)).length;
              a--;

            )
              p[a] = '#' + c + ' ' + ve(p[a]);
            (v = p.join(',')), (y = (J.test(e) && ge(t.parentNode)) || t);
          }
          if (v)
            try {
              return j.apply(i, y.querySelectorAll(v)), i;
            } catch (E) {
            } finally {
              c === b && t.removeAttribute('id');
            }
        }
      }
      return l(e.replace(B, '$1'), t, i, r);
    }
    function se() {
      var e = [];
      return function t(n, r) {
        return e.push(n + ' ') > i.cacheLength && delete t[e.shift()], (t[n + ' '] = r);
      };
    }
    function ae(e) {
      return (e[b] = !0), e;
    }
    function le(e) {
      var t = d.createElement('fieldset');
      try {
        return !!e(t);
      } catch (Ee) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function ue(e, t) {
      for (var n = e.split('|'), r = n.length; r--; ) i.attrHandle[n[r]] = t;
    }
    function ce(e, t) {
      var n = t && e,
        i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function fe(e) {
      return function(t) {
        return 'input' === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function he(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return ('input' === n || 'button' === n) && t.type === e;
      };
    }
    function de(e) {
      return function(t) {
        return 'form' in t
          ? t.parentNode && !1 === t.disabled
            ? 'label' in t
              ? 'label' in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && re(t) === e)
            : t.disabled === e
          : 'label' in t && t.disabled === e;
      };
    }
    function pe(e) {
      return ae(function(t) {
        return (
          (t = +t),
          ae(function(n, i) {
            for (var r, o = e([], n.length, t), s = o.length; s--; ) n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
          })
        );
      });
    }
    function ge(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (t in ((n = oe.support = {}),
    (o = oe.isXML = function(e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && 'HTML' !== t.nodeName;
    }),
    (h = oe.setDocument = function(e) {
      var t,
        r,
        s = e ? e.ownerDocument || e : w;
      return s !== d && 9 === s.nodeType && s.documentElement
        ? ((p = (d = s).documentElement),
          (g = !o(d)),
          w !== d &&
            (r = d.defaultView) &&
            r.top !== r &&
            (r.addEventListener
              ? r.addEventListener('unload', ie, !1)
              : r.attachEvent && r.attachEvent('onunload', ie)),
          (n.attributes = le(function(e) {
            return (e.className = 'i'), !e.getAttribute('className');
          })),
          (n.getElementsByTagName = le(function(e) {
            return e.appendChild(d.createComment('')), !e.getElementsByTagName('*').length;
          })),
          (n.getElementsByClassName = Y.test(d.getElementsByClassName)),
          (n.getById = le(function(e) {
            return (p.appendChild(e).id = b), !d.getElementsByName || !d.getElementsByName(b).length;
          })),
          n.getById
            ? ((i.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                  return e.getAttribute('id') === t;
                };
              }),
              (i.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }))
            : ((i.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                  var n = void 0 !== e.getAttributeNode && e.getAttributeNode('id');
                  return n && n.value === t;
                };
              }),
              (i.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                  var n,
                    i,
                    r,
                    o = t.getElementById(e);
                  if (o) {
                    if ((n = o.getAttributeNode('id')) && n.value === e) return [o];
                    for (r = t.getElementsByName(e), i = 0; (o = r[i++]); )
                      if ((n = o.getAttributeNode('id')) && n.value === e) return [o];
                  }
                  return [];
                }
              })),
          (i.find.TAG = n.getElementsByTagName
            ? function(e, t) {
                return void 0 !== t.getElementsByTagName
                  ? t.getElementsByTagName(e)
                  : n.qsa
                  ? t.querySelectorAll(e)
                  : void 0;
              }
            : function(e, t) {
                var n,
                  i = [],
                  r = 0,
                  o = t.getElementsByTagName(e);
                if ('*' === e) {
                  for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                  return i;
                }
                return o;
              }),
          (i.find.CLASS =
            n.getElementsByClassName &&
            function(e, t) {
              if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
            }),
          (v = []),
          (m = []),
          (n.qsa = Y.test(d.querySelectorAll)) &&
            (le(function(e) {
              (p.appendChild(e).innerHTML =
                "<a id='" +
                b +
                "'></a><select id='" +
                b +
                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                e.querySelectorAll("[msallowcapture^='']").length && m.push('[*^$]=' + P + '*(?:\'\'|"")'),
                e.querySelectorAll('[selected]').length || m.push('\\[' + P + '*(?:value|' + q + ')'),
                e.querySelectorAll('[id~=' + b + '-]').length || m.push('~='),
                e.querySelectorAll(':checked').length || m.push(':checked'),
                e.querySelectorAll('a#' + b + '+*').length || m.push('.#.+[+~]');
            }),
            le(function(e) {
              e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t = d.createElement('input');
              t.setAttribute('type', 'hidden'),
                e.appendChild(t).setAttribute('name', 'D'),
                e.querySelectorAll('[name=d]').length && m.push('name' + P + '*[*^$|!~]?='),
                2 !== e.querySelectorAll(':enabled').length && m.push(':enabled', ':disabled'),
                (p.appendChild(e).disabled = !0),
                2 !== e.querySelectorAll(':disabled').length && m.push(':enabled', ':disabled'),
                e.querySelectorAll('*,:x'),
                m.push(',.*:');
            })),
          (n.matchesSelector = Y.test(
            (y =
              p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)
          )) &&
            le(function(e) {
              (n.disconnectedMatch = y.call(e, '*')), y.call(e, "[s!='']:x"), v.push('!=', M);
            }),
          (m = m.length && new RegExp(m.join('|'))),
          (v = v.length && new RegExp(v.join('|'))),
          (t = Y.test(p.compareDocumentPosition)),
          (_ =
            t || Y.test(p.contains)
              ? function(e, t) {
                  var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                  return (
                    e === i ||
                    !(
                      !i ||
                      1 !== i.nodeType ||
                      !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i))
                    )
                  );
                }
              : function(e, t) {
                  if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                  return !1;
                }),
          (A = t
            ? function(e, t) {
                if (e === t) return (f = !0), 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return (
                  i ||
                  (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) ||
                  (!n.sortDetached && t.compareDocumentPosition(e) === i)
                    ? e === d || (e.ownerDocument === w && _(w, e))
                      ? -1
                      : t === d || (t.ownerDocument === w && _(w, t))
                      ? 1
                      : c
                      ? L(c, e) - L(c, t)
                      : 0
                    : 4 & i
                    ? -1
                    : 1)
                );
              }
            : function(e, t) {
                if (e === t) return (f = !0), 0;
                var n,
                  i = 0,
                  r = e.parentNode,
                  o = t.parentNode,
                  s = [e],
                  a = [t];
                if (!r || !o) return e === d ? -1 : t === d ? 1 : r ? -1 : o ? 1 : c ? L(c, e) - L(c, t) : 0;
                if (r === o) return ce(e, t);
                for (n = e; (n = n.parentNode); ) s.unshift(n);
                for (n = t; (n = n.parentNode); ) a.unshift(n);
                for (; s[i] === a[i]; ) i++;
                return i ? ce(s[i], a[i]) : s[i] === w ? -1 : a[i] === w ? 1 : 0;
              }),
          d)
        : d;
    }),
    (oe.matches = function(e, t) {
      return oe(e, null, null, t);
    }),
    (oe.matchesSelector = function(e, t) {
      if (
        ((e.ownerDocument || e) !== d && h(e),
        (t = t.replace(V, "='$1']")),
        n.matchesSelector && g && !S[t + ' '] && (!v || !v.test(t)) && (!m || !m.test(t)))
      )
        try {
          var i = y.call(e, t);
          if (i || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return i;
        } catch (Ee) {}
      return oe(t, d, null, [e]).length > 0;
    }),
    (oe.contains = function(e, t) {
      return (e.ownerDocument || e) !== d && h(e), _(e, t);
    }),
    (oe.attr = function(e, t) {
      (e.ownerDocument || e) !== d && h(e);
      var r = i.attrHandle[t.toLowerCase()],
        o = r && D.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
      return void 0 !== o
        ? o
        : n.attributes || !g
        ? e.getAttribute(t)
        : (o = e.getAttributeNode(t)) && o.specified
        ? o.value
        : null;
    }),
    (oe.escape = function(e) {
      return (e + '').replace(te, ne);
    }),
    (oe.error = function(e) {
      throw new Error('Syntax error, unrecognized expression: ' + e);
    }),
    (oe.uniqueSort = function(e) {
      var t,
        i = [],
        r = 0,
        o = 0;
      if (((f = !n.detectDuplicates), (c = !n.sortStable && e.slice(0)), e.sort(A), f)) {
        for (; (t = e[o++]); ) t === e[o] && (r = i.push(o));
        for (; r--; ) e.splice(i[r], 1);
      }
      return (c = null), e;
    }),
    (r = oe.getText = function(e) {
      var t,
        n = '',
        i = 0,
        o = e.nodeType;
      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ('string' == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else for (; (t = e[i++]); ) n += r(t);
      return n;
    }),
    ((i = oe.selectors = {
      cacheLength: 50,
      createPseudo: ae,
      match: z,
      attrHandle: {},
      find: {},
      relative: {
        '>': { dir: 'parentNode', first: !0 },
        ' ': { dir: 'parentNode' },
        '+': { dir: 'previousSibling', first: !0 },
        '~': { dir: 'previousSibling' }
      },
      preFilter: {
        ATTR: function(e) {
          return (
            (e[1] = e[1].replace(Z, ee)),
            (e[3] = (e[3] || e[4] || e[5] || '').replace(Z, ee)),
            '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
            e.slice(0, 4)
          );
        },
        CHILD: function(e) {
          return (
            (e[1] = e[1].toLowerCase()),
            'nth' === e[1].slice(0, 3)
              ? (e[3] || oe.error(e[0]),
                (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3]))),
                (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
              : e[3] && oe.error(e[0]),
            e
          );
        },
        PSEUDO: function(e) {
          var t,
            n = !e[6] && e[2];
          return z.CHILD.test(e[0])
            ? null
            : (e[3]
                ? (e[2] = e[4] || e[5] || '')
                : n &&
                  $.test(n) &&
                  (t = s(n, !0)) &&
                  (t = n.indexOf(')', n.length - t) - n.length) &&
                  ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
              e.slice(0, 3));
        }
      },
      filter: {
        TAG: function(e) {
          var t = e.replace(Z, ee).toLowerCase();
          return '*' === e
            ? function() {
                return !0;
              }
            : function(e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
        },
        CLASS: function(e) {
          var t = x[e + ' '];
          return (
            t ||
            ((t = new RegExp('(^|' + P + ')' + e + '(' + P + '|$)')) &&
              x(e, function(e) {
                return t.test(
                  ('string' == typeof e.className && e.className) ||
                    (void 0 !== e.getAttribute && e.getAttribute('class')) ||
                    ''
                );
              }))
          );
        },
        ATTR: function(e, t, n) {
          return function(i) {
            var r = oe.attr(i, e);
            return null == r
              ? '!=' === t
              : !t ||
                  ((r += ''),
                  '=' === t
                    ? r === n
                    : '!=' === t
                    ? r !== n
                    : '^=' === t
                    ? n && 0 === r.indexOf(n)
                    : '*=' === t
                    ? n && r.indexOf(n) > -1
                    : '$=' === t
                    ? n && r.slice(-n.length) === n
                    : '~=' === t
                    ? (' ' + r.replace(F, ' ') + ' ').indexOf(n) > -1
                    : '|=' === t && (r === n || r.slice(0, n.length + 1) === n + '-'));
          };
        },
        CHILD: function(e, t, n, i, r) {
          var o = 'nth' !== e.slice(0, 3),
            s = 'last' !== e.slice(-4),
            a = 'of-type' === t;
          return 1 === i && 0 === r
            ? function(e) {
                return !!e.parentNode;
              }
            : function(t, n, l) {
                var u,
                  c,
                  f,
                  h,
                  d,
                  p,
                  g = o !== s ? 'nextSibling' : 'previousSibling',
                  m = t.parentNode,
                  v = a && t.nodeName.toLowerCase(),
                  y = !l && !a,
                  _ = !1;
                if (m) {
                  if (o) {
                    for (; g; ) {
                      for (h = t; (h = h[g]); ) if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                      p = g = 'only' === e && !p && 'nextSibling';
                    }
                    return !0;
                  }
                  if (((p = [s ? m.firstChild : m.lastChild]), s && y)) {
                    for (
                      _ =
                        (d =
                          (u =
                            (c = (f = (h = m)[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] ===
                            T && u[1]) && u[2],
                        h = d && m.childNodes[d];
                      (h = (++d && h && h[g]) || (_ = d = 0) || p.pop());

                    )
                      if (1 === h.nodeType && ++_ && h === t) {
                        c[e] = [T, d, _];
                        break;
                      }
                  } else if (
                    (y &&
                      (_ = d =
                        (u = (c = (f = (h = t)[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] ===
                          T && u[1]),
                    !1 === _)
                  )
                    for (
                      ;
                      (h = (++d && h && h[g]) || (_ = d = 0) || p.pop()) &&
                      ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) ||
                        !++_ ||
                        (y && ((c = (f = h[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] = [T, _]),
                        h !== t));

                    );
                  return (_ -= r) === i || (_ % i == 0 && _ / i >= 0);
                }
              };
        },
        PSEUDO: function(e, t) {
          var n,
            r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || oe.error('unsupported pseudo: ' + e);
          return r[b]
            ? r(t)
            : r.length > 1
            ? ((n = [e, e, '', t]),
              i.setFilters.hasOwnProperty(e.toLowerCase())
                ? ae(function(e, n) {
                    for (var i, o = r(e, t), s = o.length; s--; ) e[(i = L(e, o[s]))] = !(n[i] = o[s]);
                  })
                : function(e) {
                    return r(e, 0, n);
                  })
            : r;
        }
      },
      pseudos: {
        not: ae(function(e) {
          var t = [],
            n = [],
            i = a(e.replace(B, '$1'));
          return i[b]
            ? ae(function(e, t, n, r) {
                for (var o, s = i(e, null, r, []), a = e.length; a--; ) (o = s[a]) && (e[a] = !(t[a] = o));
              })
            : function(e, r, o) {
                return (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop();
              };
        }),
        has: ae(function(e) {
          return function(t) {
            return oe(e, t).length > 0;
          };
        }),
        contains: ae(function(e) {
          return (
            (e = e.replace(Z, ee)),
            function(t) {
              return (t.textContent || t.innerText || r(t)).indexOf(e) > -1;
            }
          );
        }),
        lang: ae(function(e) {
          return (
            Q.test(e || '') || oe.error('unsupported lang: ' + e),
            (e = e.replace(Z, ee).toLowerCase()),
            function(t) {
              var n;
              do {
                if ((n = g ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang')))
                  return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-');
              } while ((t = t.parentNode) && 1 === t.nodeType);
              return !1;
            }
          );
        }),
        target: function(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function(e) {
          return e === p;
        },
        focus: function(e) {
          return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: de(!1),
        disabled: de(!0),
        checked: function(e) {
          var t = e.nodeName.toLowerCase();
          return ('input' === t && !!e.checked) || ('option' === t && !!e.selected);
        },
        selected: function(e) {
          return !0 === e.selected;
        },
        empty: function(e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function(e) {
          return !i.pseudos.empty(e);
        },
        header: function(e) {
          return G.test(e.nodeName);
        },
        input: function(e) {
          return X.test(e.nodeName);
        },
        button: function(e) {
          var t = e.nodeName.toLowerCase();
          return ('input' === t && 'button' === e.type) || 'button' === t;
        },
        text: function(e) {
          var t;
          return (
            'input' === e.nodeName.toLowerCase() &&
            'text' === e.type &&
            (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase())
          );
        },
        first: pe(function() {
          return [0];
        }),
        last: pe(function(e, t) {
          return [t - 1];
        }),
        eq: pe(function(e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: pe(function(e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: pe(function(e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: pe(function(e, t, n) {
          for (var i = n < 0 ? n + t : n; --i >= 0; ) e.push(i);
          return e;
        }),
        gt: pe(function(e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
          return e;
        })
      }
    }).pseudos.nth = i.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      i.pseudos[t] = fe(t);
    for (t in { submit: !0, reset: !0 }) i.pseudos[t] = he(t);
    function me() {}
    function ve(e) {
      for (var t = 0, n = e.length, i = ''; t < n; t++) i += e[t].value;
      return i;
    }
    function ye(e, t, n) {
      var i = t.dir,
        r = t.next,
        o = r || i,
        s = n && 'parentNode' === o,
        a = E++;
      return t.first
        ? function(t, n, r) {
            for (; (t = t[i]); ) if (1 === t.nodeType || s) return e(t, n, r);
            return !1;
          }
        : function(t, n, l) {
            var u,
              c,
              f,
              h = [T, a];
            if (l) {
              for (; (t = t[i]); ) if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
            } else
              for (; (t = t[i]); )
                if (1 === t.nodeType || s)
                  if (
                    ((c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {})),
                    r && r === t.nodeName.toLowerCase())
                  )
                    t = t[i] || t;
                  else {
                    if ((u = c[o]) && u[0] === T && u[1] === a) return (h[2] = u[2]);
                    if (((c[o] = h), (h[2] = e(t, n, l)))) return !0;
                  }
            return !1;
          };
    }
    function _e(e) {
      return e.length > 1
        ? function(t, n, i) {
            for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
            return !0;
          }
        : e[0];
    }
    function be(e, t, n, i, r) {
      for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)
        (o = e[a]) && ((n && !n(o, i, r)) || (s.push(o), u && t.push(a)));
      return s;
    }
    function we(e, t, n, i, r, o) {
      return (
        i && !i[b] && (i = we(i)),
        r && !r[b] && (r = we(r, o)),
        ae(function(o, s, a, l) {
          var u,
            c,
            f,
            h = [],
            d = [],
            p = s.length,
            g =
              o ||
              (function(e, t, n) {
                for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
                return n;
              })(t || '*', a.nodeType ? [a] : a, []),
            m = !e || (!o && t) ? g : be(g, h, e, a, l),
            v = n ? (r || (o ? e : p || i) ? [] : s) : m;
          if ((n && n(m, v, a, l), i))
            for (u = be(v, d), i(u, [], a, l), c = u.length; c--; ) (f = u[c]) && (v[d[c]] = !(m[d[c]] = f));
          if (o) {
            if (r || e) {
              if (r) {
                for (u = [], c = v.length; c--; ) (f = v[c]) && u.push((m[c] = f));
                r(null, (v = []), u, l);
              }
              for (c = v.length; c--; ) (f = v[c]) && (u = r ? L(o, f) : h[c]) > -1 && (o[u] = !(s[u] = f));
            }
          } else (v = be(v === s ? v.splice(p, v.length) : v)), r ? r(null, s, v, l) : j.apply(s, v);
        })
      );
    }
    function Te(e) {
      for (
        var t,
          n,
          r,
          o = e.length,
          s = i.relative[e[0].type],
          a = s || i.relative[' '],
          l = s ? 1 : 0,
          c = ye(
            function(e) {
              return e === t;
            },
            a,
            !0
          ),
          f = ye(
            function(e) {
              return L(t, e) > -1;
            },
            a,
            !0
          ),
          h = [
            function(e, n, i) {
              var r = (!s && (i || n !== u)) || ((t = n).nodeType ? c(e, n, i) : f(e, n, i));
              return (t = null), r;
            }
          ];
        l < o;
        l++
      )
        if ((n = i.relative[e[l].type])) h = [ye(_e(h), n)];
        else {
          if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
            for (r = ++l; r < o && !i.relative[e[r].type]; r++);
            return we(
              l > 1 && _e(h),
              l > 1 && ve(e.slice(0, l - 1).concat({ value: ' ' === e[l - 2].type ? '*' : '' })).replace(B, '$1'),
              n,
              l < r && Te(e.slice(l, r)),
              r < o && Te((e = e.slice(r))),
              r < o && ve(e)
            );
          }
          h.push(n);
        }
      return _e(h);
    }
    return (
      (me.prototype = i.filters = i.pseudos),
      (i.setFilters = new me()),
      (s = oe.tokenize = function(e, t) {
        var n,
          r,
          o,
          s,
          a,
          l,
          u,
          c = C[e + ' '];
        if (c) return t ? 0 : c.slice(0);
        for (a = e, l = [], u = i.preFilter; a; ) {
          for (s in ((n && !(r = W.exec(a))) || (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
          (n = !1),
          (r = U.exec(a)) &&
            ((n = r.shift()), o.push({ value: n, type: r[0].replace(B, ' ') }), (a = a.slice(n.length))),
          i.filter))
            !(r = z[s].exec(a)) ||
              (u[s] && !(r = u[s](r))) ||
              ((n = r.shift()), o.push({ value: n, type: s, matches: r }), (a = a.slice(n.length)));
          if (!n) break;
        }
        return t ? a.length : a ? oe.error(e) : C(e, l).slice(0);
      }),
      (a = oe.compile = function(e, t) {
        var n,
          r = [],
          o = [],
          a = S[e + ' '];
        if (!a) {
          for (t || (t = s(e)), n = t.length; n--; ) (a = Te(t[n]))[b] ? r.push(a) : o.push(a);
          (a = S(
            e,
            (function(e, t) {
              var n = t.length > 0,
                r = e.length > 0,
                o = function(o, s, a, l, c) {
                  var f,
                    p,
                    m,
                    v = 0,
                    y = '0',
                    _ = o && [],
                    b = [],
                    w = u,
                    E = o || (r && i.find.TAG('*', c)),
                    x = (T += null == w ? 1 : Math.random() || 0.1),
                    C = E.length;
                  for (c && (u = s === d || s || c); y !== C && null != (f = E[y]); y++) {
                    if (r && f) {
                      for (p = 0, s || f.ownerDocument === d || (h(f), (a = !g)); (m = e[p++]); )
                        if (m(f, s || d, a)) {
                          l.push(f);
                          break;
                        }
                      c && (T = x);
                    }
                    n && ((f = !m && f) && v--, o && _.push(f));
                  }
                  if (((v += y), n && y !== v)) {
                    for (p = 0; (m = t[p++]); ) m(_, b, s, a);
                    if (o) {
                      if (v > 0) for (; y--; ) _[y] || b[y] || (b[y] = k.call(l));
                      b = be(b);
                    }
                    j.apply(l, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(l);
                  }
                  return c && ((T = x), (u = w)), _;
                };
              return n ? ae(o) : o;
            })(o, r)
          )).selector = e;
        }
        return a;
      }),
      (l = oe.select = function(e, t, n, r) {
        var o,
          l,
          u,
          c,
          f,
          h = 'function' == typeof e && e,
          d = !r && s((e = h.selector || e));
        if (((n = n || []), 1 === d.length)) {
          if (
            (l = d[0] = d[0].slice(0)).length > 2 &&
            'ID' === (u = l[0]).type &&
            9 === t.nodeType &&
            g &&
            i.relative[l[1].type]
          ) {
            if (!(t = (i.find.ID(u.matches[0].replace(Z, ee), t) || [])[0])) return n;
            h && (t = t.parentNode), (e = e.slice(l.shift().value.length));
          }
          for (o = z.needsContext.test(e) ? 0 : l.length; o-- && !i.relative[(c = (u = l[o]).type)]; )
            if ((f = i.find[c]) && (r = f(u.matches[0].replace(Z, ee), (J.test(l[0].type) && ge(t.parentNode)) || t))) {
              if ((l.splice(o, 1), !(e = r.length && ve(l)))) return j.apply(n, r), n;
              break;
            }
        }
        return (h || a(e, d))(r, t, !g, n, !t || (J.test(e) && ge(t.parentNode)) || t), n;
      }),
      (n.sortStable =
        b
          .split('')
          .sort(A)
          .join('') === b),
      (n.detectDuplicates = !!f),
      h(),
      (n.sortDetached = le(function(e) {
        return 1 & e.compareDocumentPosition(d.createElement('fieldset'));
      })),
      le(function(e) {
        return (e.innerHTML = "<a href='#'></a>"), '#' === e.firstChild.getAttribute('href');
      }) ||
        ue('type|href|height|width', function(e, t, n) {
          if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        le(function(e) {
          return (
            (e.innerHTML = '<input/>'),
            e.firstChild.setAttribute('value', ''),
            '' === e.firstChild.getAttribute('value')
          );
        })) ||
        ue('value', function(e, t, n) {
          if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      le(function(e) {
        return null == e.getAttribute('disabled');
      }) ||
        ue(q, function(e, t, n) {
          var i;
          if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }),
      oe
    );
  })(e);
  (b.find = E),
    (b.expr = E.selectors),
    (b.expr[':'] = b.expr.pseudos),
    (b.uniqueSort = b.unique = E.uniqueSort),
    (b.text = E.getText),
    (b.isXMLDoc = E.isXML),
    (b.contains = E.contains),
    (b.escapeSelector = E.escape);
  var x = function(e, t, n) {
      for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (r && b(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    C = function(e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    S = b.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function N(e, t, n) {
    return g(t)
      ? b.grep(e, function(e, i) {
          return !!t.call(e, i, e) !== n;
        })
      : t.nodeType
      ? b.grep(e, function(e) {
          return (e === t) !== n;
        })
      : 'string' != typeof t
      ? b.grep(e, function(e) {
          return l.call(t, e) > -1 !== n;
        })
      : b.filter(t, e, n);
  }
  (b.filter = function(e, t, n) {
    var i = t[0];
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === i.nodeType
        ? b.find.matchesSelector(i, e)
          ? [i]
          : []
        : b.find.matches(
            e,
            b.grep(t, function(e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    b.fn.extend({
      find: function(e) {
        var t,
          n,
          i = this.length,
          r = this;
        if ('string' != typeof e)
          return this.pushStack(
            b(e).filter(function() {
              for (t = 0; t < i; t++) if (b.contains(r[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) b.find(e, r[t], n);
        return i > 1 ? b.uniqueSort(n) : n;
      },
      filter: function(e) {
        return this.pushStack(N(this, e || [], !1));
      },
      not: function(e) {
        return this.pushStack(N(this, e || [], !0));
      },
      is: function(e) {
        return !!N(this, 'string' == typeof e && S.test(e) ? b(e) : e || [], !1).length;
      }
    });
  var k,
    I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((b.fn.init = function(e, t, n) {
    var r, o;
    if (!e) return this;
    if (((n = n || k), 'string' == typeof e)) {
      if (!(r = '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3 ? [null, e, null] : I.exec(e)) || (!r[1] && t))
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          (b.merge(
            this,
            b.parseHTML(r[1], (t = t instanceof b ? t[0] : t) && t.nodeType ? t.ownerDocument || t : i, !0)
          ),
          D.test(r[1]) && b.isPlainObject(t))
        )
          for (r in t) g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (o = i.getElementById(r[2])) && ((this[0] = o), (this.length = 1)), this;
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : g(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(b)
      : b.makeArray(e, this);
  }).prototype = b.fn),
    (k = b(i));
  var j = /^(?:parents|prev(?:Until|All))/,
    O = { children: !0, contents: !0, next: !0, prev: !0 };
  function L(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  b.fn.extend({
    has: function(e) {
      var t = b(e, this),
        n = t.length;
      return this.filter(function() {
        for (var e = 0; e < n; e++) if (b.contains(this, t[e])) return !0;
      });
    },
    closest: function(e, t) {
      var n,
        i = 0,
        r = this.length,
        o = [],
        s = 'string' != typeof e && b(e);
      if (!S.test(e))
        for (; i < r; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && b.find.matchesSelector(n, e))) {
              o.push(n);
              break;
            }
      return this.pushStack(o.length > 1 ? b.uniqueSort(o) : o);
    },
    index: function(e) {
      return e
        ? 'string' == typeof e
          ? l.call(b(e), this[0])
          : l.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function(e, t) {
      return this.pushStack(b.uniqueSort(b.merge(this.get(), b(e, t))));
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }),
    b.each(
      {
        parent: function(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
          return x(e, 'parentNode');
        },
        parentsUntil: function(e, t, n) {
          return x(e, 'parentNode', n);
        },
        next: function(e) {
          return L(e, 'nextSibling');
        },
        prev: function(e) {
          return L(e, 'previousSibling');
        },
        nextAll: function(e) {
          return x(e, 'nextSibling');
        },
        prevAll: function(e) {
          return x(e, 'previousSibling');
        },
        nextUntil: function(e, t, n) {
          return x(e, 'nextSibling', n);
        },
        prevUntil: function(e, t, n) {
          return x(e, 'previousSibling', n);
        },
        siblings: function(e) {
          return C((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
          return C(e.firstChild);
        },
        contents: function(e) {
          return A(e, 'iframe')
            ? e.contentDocument
            : (A(e, 'template') && (e = e.content || e), b.merge([], e.childNodes));
        }
      },
      function(e, t) {
        b.fn[e] = function(n, i) {
          var r = b.map(this, t, n);
          return (
            'Until' !== e.slice(-5) && (i = n),
            i && 'string' == typeof i && (r = b.filter(i, r)),
            this.length > 1 && (O[e] || b.uniqueSort(r), j.test(e) && r.reverse()),
            this.pushStack(r)
          );
        };
      }
    );
  var q = /[^\x20\t\r\n\f]+/g;
  function P(e) {
    return e;
  }
  function R(e) {
    throw e;
  }
  function H(e, t, n, i) {
    var r;
    try {
      e && g((r = e.promise))
        ? r
            .call(e)
            .done(t)
            .fail(n)
        : e && g((r = e.then))
        ? r.call(e, t, n)
        : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (b.Callbacks = function(e) {
    e =
      'string' == typeof e
        ? (function(e) {
            var t = {};
            return (
              b.each(e.match(q) || [], function(e, n) {
                t[n] = !0;
              }),
              t
            );
          })(e)
        : b.extend({}, e);
    var t,
      n,
      i,
      r,
      o = [],
      s = [],
      a = -1,
      l = function() {
        for (r = r || e.once, i = t = !0; s.length; a = -1)
          for (n = s.shift(); ++a < o.length; )
            !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && ((a = o.length), (n = !1));
        e.memory || (n = !1), (t = !1), r && (o = n ? [] : '');
      },
      u = {
        add: function() {
          return (
            o &&
              (n && !t && ((a = o.length - 1), s.push(n)),
              (function t(n) {
                b.each(n, function(n, i) {
                  g(i) ? (e.unique && u.has(i)) || o.push(i) : i && i.length && 'string' !== _(i) && t(i);
                });
              })(arguments),
              n && !t && l()),
            this
          );
        },
        remove: function() {
          return (
            b.each(arguments, function(e, t) {
              for (var n; (n = b.inArray(t, o, n)) > -1; ) o.splice(n, 1), n <= a && a--;
            }),
            this
          );
        },
        has: function(e) {
          return e ? b.inArray(e, o) > -1 : o.length > 0;
        },
        empty: function() {
          return o && (o = []), this;
        },
        disable: function() {
          return (r = s = []), (o = n = ''), this;
        },
        disabled: function() {
          return !o;
        },
        lock: function() {
          return (r = s = []), n || t || (o = n = ''), this;
        },
        locked: function() {
          return !!r;
        },
        fireWith: function(e, n) {
          return r || ((n = [e, (n = n || []).slice ? n.slice() : n]), s.push(n), t || l()), this;
        },
        fire: function() {
          return u.fireWith(this, arguments), this;
        },
        fired: function() {
          return !!i;
        }
      };
    return u;
  }),
    b.extend({
      Deferred: function(t) {
        var n = [
            ['notify', 'progress', b.Callbacks('memory'), b.Callbacks('memory'), 2],
            ['resolve', 'done', b.Callbacks('once memory'), b.Callbacks('once memory'), 0, 'resolved'],
            ['reject', 'fail', b.Callbacks('once memory'), b.Callbacks('once memory'), 1, 'rejected']
          ],
          i = 'pending',
          r = {
            state: function() {
              return i;
            },
            always: function() {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function(e) {
              return r.then(null, e);
            },
            pipe: function() {
              var e = arguments;
              return b
                .Deferred(function(t) {
                  b.each(n, function(n, i) {
                    var r = g(e[i[4]]) && e[i[4]];
                    o[i[1]](function() {
                      var e = r && r.apply(this, arguments);
                      e && g(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[i[0] + 'With'](this, r ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function(t, i, r) {
              var o = 0;
              function s(t, n, i, r) {
                return function() {
                  var a = this,
                    l = arguments,
                    u = function() {
                      var e, u;
                      if (!(t < o)) {
                        if ((e = i.apply(a, l)) === n.promise()) throw new TypeError('Thenable self-resolution');
                        g((u = e && ('object' == typeof e || 'function' == typeof e) && e.then))
                          ? r
                            ? u.call(e, s(o, n, P, r), s(o, n, R, r))
                            : u.call(e, s(++o, n, P, r), s(o, n, R, r), s(o, n, P, n.notifyWith))
                          : (i !== P && ((a = void 0), (l = [e])), (r || n.resolveWith)(a, l));
                      }
                    },
                    c = r
                      ? u
                      : function() {
                          try {
                            u();
                          } catch (e) {
                            b.Deferred.exceptionHook && b.Deferred.exceptionHook(e, c.stackTrace),
                              t + 1 >= o && (i !== R && ((a = void 0), (l = [e])), n.rejectWith(a, l));
                          }
                        };
                  t ? c() : (b.Deferred.getStackHook && (c.stackTrace = b.Deferred.getStackHook()), e.setTimeout(c));
                };
              }
              return b
                .Deferred(function(e) {
                  n[0][3].add(s(0, e, g(r) ? r : P, e.notifyWith)),
                    n[1][3].add(s(0, e, g(t) ? t : P)),
                    n[2][3].add(s(0, e, g(i) ? i : R));
                })
                .promise();
            },
            promise: function(e) {
              return null != e ? b.extend(e, r) : r;
            }
          },
          o = {};
        return (
          b.each(n, function(e, t) {
            var s = t[2],
              a = t[5];
            (r[t[1]] = s.add),
              a &&
                s.add(
                  function() {
                    i = a;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              s.add(t[3].fire),
              (o[t[0]] = function() {
                return o[t[0] + 'With'](this === o ? void 0 : this, arguments), this;
              }),
              (o[t[0] + 'With'] = s.fireWith);
          }),
          r.promise(o),
          t && t.call(o, o),
          o
        );
      },
      when: function(e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          r = o.call(arguments),
          s = b.Deferred(),
          a = function(e) {
            return function(n) {
              (i[e] = this), (r[e] = arguments.length > 1 ? o.call(arguments) : n), --t || s.resolveWith(i, r);
            };
          };
        if (t <= 1 && (H(e, s.done(a(n)).resolve, s.reject, !t), 'pending' === s.state() || g(r[n] && r[n].then)))
          return s.then();
        for (; n--; ) H(r[n], a(n), s.reject);
        return s.promise();
      }
    });
  var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (b.Deferred.exceptionHook = function(t, n) {
    e.console &&
      e.console.warn &&
      t &&
      M.test(t.name) &&
      e.console.warn('jQuery.Deferred exception: ' + t.message, t.stack, n);
  }),
    (b.readyException = function(t) {
      e.setTimeout(function() {
        throw t;
      });
    });
  var F = b.Deferred();
  function B() {
    i.removeEventListener('DOMContentLoaded', B), e.removeEventListener('load', B), b.ready();
  }
  (b.fn.ready = function(e) {
    return (
      F.then(e).catch(function(e) {
        b.readyException(e);
      }),
      this
    );
  }),
    b.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(e) {
        (!0 === e ? --b.readyWait : b.isReady) ||
          ((b.isReady = !0), (!0 !== e && --b.readyWait > 0) || F.resolveWith(i, [b]));
      }
    }),
    (b.ready.then = F.then),
    'complete' === i.readyState || ('loading' !== i.readyState && !i.documentElement.doScroll)
      ? e.setTimeout(b.ready)
      : (i.addEventListener('DOMContentLoaded', B), e.addEventListener('load', B));
  var W = function(e, t, n, i, r, o, s) {
      var a = 0,
        l = e.length,
        u = null == n;
      if ('object' === _(n)) for (a in ((r = !0), n)) W(e, t, a, n[a], !0, o, s);
      else if (
        void 0 !== i &&
        ((r = !0),
        g(i) || (s = !0),
        u &&
          (s
            ? (t.call(e, i), (t = null))
            : ((u = t),
              (t = function(e, t, n) {
                return u.call(b(e), n);
              }))),
        t)
      )
        for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
      return r ? e : u ? t.call(e) : l ? t(e[0], n) : o;
    },
    U = /^-ms-/,
    V = /-([a-z])/g;
  function $(e, t) {
    return t.toUpperCase();
  }
  function Q(e) {
    return e.replace(U, 'ms-').replace(V, $);
  }
  var z = function(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function X() {
    this.expando = b.expando + X.uid++;
  }
  (X.uid = 1),
    (X.prototype = {
      cache: function(e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            z(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))),
          t
        );
      },
      set: function(e, t, n) {
        var i,
          r = this.cache(e);
        if ('string' == typeof t) r[Q(t)] = n;
        else for (i in t) r[Q(i)] = t[i];
        return r;
      },
      get: function(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Q(t)];
      },
      access: function(e, t, n) {
        return void 0 === t || (t && 'string' == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function(e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(Q) : (t = Q(t)) in i ? [t] : t.match(q) || []).length;
            for (; n--; ) delete i[t[n]];
          }
          (void 0 === t || b.isEmptyObject(i)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function(e) {
        var t = e[this.expando];
        return void 0 !== t && !b.isEmptyObject(t);
      }
    });
  var G = new X(),
    Y = new X(),
    K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    J = /[A-Z]/g;
  function Z(e, t, n) {
    var i;
    if (void 0 === n && 1 === e.nodeType)
      if (((i = 'data-' + t.replace(J, '-$&').toLowerCase()), 'string' == typeof (n = e.getAttribute(i)))) {
        try {
          n = (function(e) {
            return (
              'true' === e ||
              ('false' !== e && ('null' === e ? null : e === +e + '' ? +e : K.test(e) ? JSON.parse(e) : e))
            );
          })(n);
        } catch (r) {}
        Y.set(e, t, n);
      } else n = void 0;
    return n;
  }
  b.extend({
    hasData: function(e) {
      return Y.hasData(e) || G.hasData(e);
    },
    data: function(e, t, n) {
      return Y.access(e, t, n);
    },
    removeData: function(e, t) {
      Y.remove(e, t);
    },
    _data: function(e, t, n) {
      return G.access(e, t, n);
    },
    _removeData: function(e, t) {
      G.remove(e, t);
    }
  }),
    b.fn.extend({
      data: function(e, t) {
        var n,
          i,
          r,
          o = this[0],
          s = o && o.attributes;
        if (void 0 === e) {
          if (this.length && ((r = Y.get(o)), 1 === o.nodeType && !G.get(o, 'hasDataAttrs'))) {
            for (n = s.length; n--; )
              s[n] && 0 === (i = s[n].name).indexOf('data-') && ((i = Q(i.slice(5))), Z(o, i, r[i]));
            G.set(o, 'hasDataAttrs', !0);
          }
          return r;
        }
        return 'object' == typeof e
          ? this.each(function() {
              Y.set(this, e);
            })
          : W(
              this,
              function(t) {
                var n;
                if (o && void 0 === t) return void 0 !== (n = Y.get(o, e)) ? n : void 0 !== (n = Z(o, e)) ? n : void 0;
                this.each(function() {
                  Y.set(this, e, t);
                });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function(e) {
        return this.each(function() {
          Y.remove(this, e);
        });
      }
    }),
    b.extend({
      queue: function(e, t, n) {
        var i;
        if (e)
          return (
            (i = G.get(e, (t = (t || 'fx') + 'queue'))),
            n && (!i || Array.isArray(n) ? (i = G.access(e, t, b.makeArray(n))) : i.push(n)),
            i || []
          );
      },
      dequeue: function(e, t) {
        var n = b.queue(e, (t = t || 'fx')),
          i = n.length,
          r = n.shift(),
          o = b._queueHooks(e, t);
        'inprogress' === r && ((r = n.shift()), i--),
          r &&
            ('fx' === t && n.unshift('inprogress'),
            delete o.stop,
            r.call(
              e,
              function() {
                b.dequeue(e, t);
              },
              o
            )),
          !i && o && o.empty.fire();
      },
      _queueHooks: function(e, t) {
        var n = t + 'queueHooks';
        return (
          G.get(e, n) ||
          G.access(e, n, {
            empty: b.Callbacks('once memory').add(function() {
              G.remove(e, [t + 'queue', n]);
            })
          })
        );
      }
    }),
    b.fn.extend({
      queue: function(e, t) {
        var n = 2;
        return (
          'string' != typeof e && ((t = e), (e = 'fx'), n--),
          arguments.length < n
            ? b.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function() {
                var n = b.queue(this, e, t);
                b._queueHooks(this, e), 'fx' === e && 'inprogress' !== n[0] && b.dequeue(this, e);
              })
        );
      },
      dequeue: function(e) {
        return this.each(function() {
          b.dequeue(this, e);
        });
      },
      clearQueue: function(e) {
        return this.queue(e || 'fx', []);
      },
      promise: function(e, t) {
        var n,
          i = 1,
          r = b.Deferred(),
          o = this,
          s = this.length,
          a = function() {
            --i || r.resolveWith(o, [o]);
          };
        for ('string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx'; s--; )
          (n = G.get(o[s], e + 'queueHooks')) && n.empty && (i++, n.empty.add(a));
        return a(), r.promise(t);
      }
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp('^(?:([+-])=|)(' + ee + ')([a-z%]*)$', 'i'),
    ne = ['Top', 'Right', 'Bottom', 'Left'],
    ie = function(e, t) {
      return (
        'none' === (e = t || e).style.display ||
        ('' === e.style.display && b.contains(e.ownerDocument, e) && 'none' === b.css(e, 'display'))
      );
    },
    re = function(e, t, n, i) {
      var r,
        o,
        s = {};
      for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
      for (o in ((r = n.apply(e, i || [])), t)) e.style[o] = s[o];
      return r;
    };
  function oe(e, t, n, i) {
    var r,
      o,
      s = 20,
      a = i
        ? function() {
            return i.cur();
          }
        : function() {
            return b.css(e, t, '');
          },
      l = a(),
      u = (n && n[3]) || (b.cssNumber[t] ? '' : 'px'),
      c = (b.cssNumber[t] || ('px' !== u && +l)) && te.exec(b.css(e, t));
    if (c && c[3] !== u) {
      for (u = u || c[3], c = +(l /= 2) || 1; s--; )
        b.style(e, t, c + u), (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0), (c /= o);
      b.style(e, t, (c *= 2) + u), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +l || 0),
        (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = u), (i.start = c), (i.end = r))),
      r
    );
  }
  var se = {};
  function ae(e) {
    var t,
      n = e.ownerDocument,
      i = e.nodeName,
      r = se[i];
    return (
      r ||
      ((t = n.body.appendChild(n.createElement(i))),
      (r = b.css(t, 'display')),
      t.parentNode.removeChild(t),
      'none' === r && (r = 'block'),
      (se[i] = r),
      r)
    );
  }
  function le(e, t) {
    for (var n, i, r = [], o = 0, s = e.length; o < s; o++)
      (i = e[o]).style &&
        ((n = i.style.display),
        t
          ? ('none' === n && ((r[o] = G.get(i, 'display') || null), r[o] || (i.style.display = '')),
            '' === i.style.display && ie(i) && (r[o] = ae(i)))
          : 'none' !== n && ((r[o] = 'none'), G.set(i, 'display', n)));
    for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
    return e;
  }
  b.fn.extend({
    show: function() {
      return le(this, !0);
    },
    hide: function() {
      return le(this);
    },
    toggle: function(e) {
      return 'boolean' == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function() {
            ie(this) ? b(this).show() : b(this).hide();
          });
    }
  });
  var ue = /^(?:checkbox|radio)$/i,
    ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    fe = /^$|^module$|\/(?:java|ecma)script/i,
    he = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      thead: [1, '<table>', '</table>'],
      col: [2, '<table><colgroup>', '</colgroup></table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: [0, '', '']
    };
  function de(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || '*')
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || '*')
          : []),
      void 0 === t || (t && A(e, t)) ? b.merge([e], n) : n
    );
  }
  function pe(e, t) {
    for (var n = 0, i = e.length; n < i; n++) G.set(e[n], 'globalEval', !t || G.get(t[n], 'globalEval'));
  }
  (he.optgroup = he.option), (he.tbody = he.tfoot = he.colgroup = he.caption = he.thead), (he.th = he.td);
  var ge,
    me,
    ve = /<|&#?\w+;/;
  function ye(e, t, n, i, r) {
    for (var o, s, a, l, u, c, f = t.createDocumentFragment(), h = [], d = 0, p = e.length; d < p; d++)
      if ((o = e[d]) || 0 === o)
        if ('object' === _(o)) b.merge(h, o.nodeType ? [o] : o);
        else if (ve.test(o)) {
          for (
            s = s || f.appendChild(t.createElement('div')),
              a = (ce.exec(o) || ['', ''])[1].toLowerCase(),
              s.innerHTML = (l = he[a] || he._default)[1] + b.htmlPrefilter(o) + l[2],
              c = l[0];
            c--;

          )
            s = s.lastChild;
          b.merge(h, s.childNodes), ((s = f.firstChild).textContent = '');
        } else h.push(t.createTextNode(o));
    for (f.textContent = '', d = 0; (o = h[d++]); )
      if (i && b.inArray(o, i) > -1) r && r.push(o);
      else if (((u = b.contains(o.ownerDocument, o)), (s = de(f.appendChild(o), 'script')), u && pe(s), n))
        for (c = 0; (o = s[c++]); ) fe.test(o.type || '') && n.push(o);
    return f;
  }
  (ge = i.createDocumentFragment().appendChild(i.createElement('div'))),
    (me = i.createElement('input')).setAttribute('type', 'radio'),
    me.setAttribute('checked', 'checked'),
    me.setAttribute('name', 't'),
    ge.appendChild(me),
    (p.checkClone = ge.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ge.innerHTML = '<textarea>x</textarea>'),
    (p.noCloneChecked = !!ge.cloneNode(!0).lastChild.defaultValue);
  var _e = i.documentElement,
    be = /^key/,
    we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Te = /^([^.]*)(?:\.(.+)|)/;
  function Ee() {
    return !0;
  }
  function xe() {
    return !1;
  }
  function Ce() {
    try {
      return i.activeElement;
    } catch (e) {}
  }
  function Se(e, t, n, i, r, o) {
    var s, a;
    if ('object' == typeof t) {
      for (a in ('string' != typeof n && ((i = i || n), (n = void 0)), t)) Se(e, a, n, i, t[a], o);
      return e;
    }
    if (
      (null == i && null == r
        ? ((r = n), (i = n = void 0))
        : null == r && ('string' == typeof n ? ((r = i), (i = void 0)) : ((r = i), (i = n), (n = void 0))),
      !1 === r)
    )
      r = xe;
    else if (!r) return e;
    return (
      1 === o &&
        ((s = r),
        ((r = function(e) {
          return b().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = b.guid++))),
      e.each(function() {
        b.event.add(this, t, r, i, n);
      })
    );
  }
  (b.event = {
    global: {},
    add: function(e, t, n, i, r) {
      var o,
        s,
        a,
        l,
        u,
        c,
        f,
        h,
        d,
        p,
        g,
        m = G.get(e);
      if (m)
        for (
          n.handler && ((n = (o = n).handler), (r = o.selector)),
            r && b.find.matchesSelector(_e, r),
            n.guid || (n.guid = b.guid++),
            (l = m.events) || (l = m.events = {}),
            (s = m.handle) ||
              (s = m.handle = function(t) {
                return void 0 !== b && b.event.triggered !== t.type ? b.event.dispatch.apply(e, arguments) : void 0;
              }),
            u = (t = (t || '').match(q) || ['']).length;
          u--;

        )
          (d = g = (a = Te.exec(t[u]) || [])[1]),
            (p = (a[2] || '').split('.').sort()),
            d &&
              ((f = b.event.special[d] || {}),
              (f = b.event.special[(d = (r ? f.delegateType : f.bindType) || d)] || {}),
              (c = b.extend(
                {
                  type: d,
                  origType: g,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: r,
                  needsContext: r && b.expr.match.needsContext.test(r),
                  namespace: p.join('.')
                },
                o
              )),
              (h = l[d]) ||
                (((h = l[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, i, p, s)) || (e.addEventListener && e.addEventListener(d, s))),
              f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              r ? h.splice(h.delegateCount++, 0, c) : h.push(c),
              (b.event.global[d] = !0));
    },
    remove: function(e, t, n, i, r) {
      var o,
        s,
        a,
        l,
        u,
        c,
        f,
        h,
        d,
        p,
        g,
        m = G.hasData(e) && G.get(e);
      if (m && (l = m.events)) {
        for (u = (t = (t || '').match(q) || ['']).length; u--; )
          if (((d = g = (a = Te.exec(t[u]) || [])[1]), (p = (a[2] || '').split('.').sort()), d)) {
            for (
              f = b.event.special[d] || {},
                h = l[(d = (i ? f.delegateType : f.bindType) || d)] || [],
                a = a[2] && new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                s = o = h.length;
              o--;

            )
              (c = h[o]),
                (!r && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (a && !a.test(c.namespace)) ||
                  (i && i !== c.selector && ('**' !== i || !c.selector)) ||
                  (h.splice(o, 1), c.selector && h.delegateCount--, f.remove && f.remove.call(e, c));
            s &&
              !h.length &&
              ((f.teardown && !1 !== f.teardown.call(e, p, m.handle)) || b.removeEvent(e, d, m.handle), delete l[d]);
          } else for (d in l) b.event.remove(e, d + t[u], n, i, !0);
        b.isEmptyObject(l) && G.remove(e, 'handle events');
      }
    },
    dispatch: function(e) {
      var t,
        n,
        i,
        r,
        o,
        s,
        a = b.event.fix(e),
        l = new Array(arguments.length),
        u = (G.get(this, 'events') || {})[a.type] || [],
        c = b.event.special[a.type] || {};
      for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
      if (((a.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, a))) {
        for (s = b.event.handlers.call(this, a, u), t = 0; (r = s[t++]) && !a.isPropagationStopped(); )
          for (a.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped(); )
            (a.rnamespace && !a.rnamespace.test(o.namespace)) ||
              ((a.handleObj = o),
              (a.data = o.data),
              void 0 !== (i = ((b.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) &&
                !1 === (a.result = i) &&
                (a.preventDefault(), a.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function(e, t) {
      var n,
        i,
        r,
        o,
        s,
        a = [],
        l = t.delegateCount,
        u = e.target;
      if (l && u.nodeType && !('click' === e.type && e.button >= 1))
        for (; u !== this; u = u.parentNode || this)
          if (1 === u.nodeType && ('click' !== e.type || !0 !== u.disabled)) {
            for (o = [], s = {}, n = 0; n < l; n++)
              void 0 === s[(r = (i = t[n]).selector + ' ')] &&
                (s[r] = i.needsContext ? b(r, this).index(u) > -1 : b.find(r, this, null, [u]).length),
                s[r] && o.push(i);
            o.length && a.push({ elem: u, handlers: o });
          }
      return (u = this), l < t.length && a.push({ elem: u, handlers: t.slice(l) }), a;
    },
    addProp: function(e, t) {
      Object.defineProperty(b.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: g(t)
          ? function() {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function() {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function(t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        }
      });
    },
    fix: function(e) {
      return e[b.expando] ? e : new b.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function() {
          if (this !== Ce() && this.focus) return this.focus(), !1;
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function() {
          if (this === Ce() && this.blur) return this.blur(), !1;
        },
        delegateType: 'focusout'
      },
      click: {
        trigger: function() {
          if ('checkbox' === this.type && this.click && A(this, 'input')) return this.click(), !1;
        },
        _default: function(e) {
          return A(e.target, 'a');
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }),
    (b.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (b.Event = function(e, t) {
      if (!(this instanceof b.Event)) return new b.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Ee : xe),
          (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && b.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[b.expando] = !0);
    }),
    (b.Event.prototype = {
      constructor: b.Event,
      isDefaultPrevented: xe,
      isPropagationStopped: xe,
      isImmediatePropagationStopped: xe,
      isSimulated: !1,
      preventDefault: function() {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ee), e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ee), e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ee),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      }
    }),
    b.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
          var t = e.button;
          return null == e.which && be.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && we.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        }
      },
      b.event.addProp
    ),
    b.each(
      { mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout' },
      function(e, t) {
        b.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function(e) {
            var n,
              i = e.relatedTarget,
              r = e.handleObj;
            return (
              (i && (i === this || b.contains(this, i))) ||
                ((e.type = r.origType), (n = r.handler.apply(this, arguments)), (e.type = t)),
              n
            );
          }
        };
      }
    ),
    b.fn.extend({
      on: function(e, t, n, i) {
        return Se(this, e, t, n, i);
      },
      one: function(e, t, n, i) {
        return Se(this, e, t, n, i, 1);
      },
      off: function(e, t, n) {
        var i, r;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            b(e.delegateTarget).off(i.namespace ? i.origType + '.' + i.namespace : i.origType, i.selector, i.handler),
            this
          );
        if ('object' == typeof e) {
          for (r in e) this.off(r, t, e[r]);
          return this;
        }
        return (
          (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = xe),
          this.each(function() {
            b.event.remove(this, e, n, t);
          })
        );
      }
    });
  var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    De = /<script|<style|<link/i,
    Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Ie(e, t) {
    return (A(e, 'table') && A(11 !== t.nodeType ? t : t.firstChild, 'tr') && b(e).children('tbody')[0]) || e;
  }
  function je(e) {
    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
  }
  function Oe(e) {
    return 'true/' === (e.type || '').slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute('type'), e;
  }
  function Le(e, t) {
    var n, i, r, o, s, a, l, u;
    if (1 === t.nodeType) {
      if (G.hasData(e) && ((o = G.access(e)), (s = G.set(t, o)), (u = o.events)))
        for (r in (delete s.handle, (s.events = {}), u))
          for (n = 0, i = u[r].length; n < i; n++) b.event.add(t, r, u[r][n]);
      Y.hasData(e) && ((a = Y.access(e)), (l = b.extend({}, a)), Y.set(t, l));
    }
  }
  function qe(e, t, n, i) {
    t = s.apply([], t);
    var r,
      o,
      a,
      l,
      u,
      c,
      f = 0,
      h = e.length,
      d = h - 1,
      m = t[0],
      v = g(m);
    if (v || (h > 1 && 'string' == typeof m && !p.checkClone && Ne.test(m)))
      return e.each(function(r) {
        var o = e.eq(r);
        v && (t[0] = m.call(this, r, o.html())), qe(o, t, n, i);
      });
    if (
      h &&
      ((o = (r = ye(t, e[0].ownerDocument, !1, e, i)).firstChild), 1 === r.childNodes.length && (r = o), o || i)
    ) {
      for (l = (a = b.map(de(r, 'script'), je)).length; f < h; f++)
        (u = r), f !== d && ((u = b.clone(u, !0, !0)), l && b.merge(a, de(u, 'script'))), n.call(e[f], u, f);
      if (l)
        for (c = a[a.length - 1].ownerDocument, b.map(a, Oe), f = 0; f < l; f++)
          fe.test((u = a[f]).type || '') &&
            !G.access(u, 'globalEval') &&
            b.contains(c, u) &&
            (u.src && 'module' !== (u.type || '').toLowerCase()
              ? b._evalUrl && b._evalUrl(u.src)
              : y(u.textContent.replace(ke, ''), c, u));
    }
    return e;
  }
  function Pe(e, t, n) {
    for (var i, r = t ? b.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
      n || 1 !== i.nodeType || b.cleanData(de(i)),
        i.parentNode && (n && b.contains(i.ownerDocument, i) && pe(de(i, 'script')), i.parentNode.removeChild(i));
    return e;
  }
  b.extend({
    htmlPrefilter: function(e) {
      return e.replace(Ae, '<$1></$2>');
    },
    clone: function(e, t, n) {
      var i,
        r,
        o,
        s,
        a,
        l,
        u,
        c = e.cloneNode(!0),
        f = b.contains(e.ownerDocument, e);
      if (!(p.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || b.isXMLDoc(e)))
        for (s = de(c), i = 0, r = (o = de(e)).length; i < r; i++)
          (a = o[i]),
            'input' === (u = (l = s[i]).nodeName.toLowerCase()) && ue.test(a.type)
              ? (l.checked = a.checked)
              : ('input' !== u && 'textarea' !== u) || (l.defaultValue = a.defaultValue);
      if (t)
        if (n) for (o = o || de(e), s = s || de(c), i = 0, r = o.length; i < r; i++) Le(o[i], s[i]);
        else Le(e, c);
      return (s = de(c, 'script')).length > 0 && pe(s, !f && de(e, 'script')), c;
    },
    cleanData: function(e) {
      for (var t, n, i, r = b.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (z(n)) {
          if ((t = n[G.expando])) {
            if (t.events) for (i in t.events) r[i] ? b.event.remove(n, i) : b.removeEvent(n, i, t.handle);
            n[G.expando] = void 0;
          }
          n[Y.expando] && (n[Y.expando] = void 0);
        }
    }
  }),
    b.fn.extend({
      detach: function(e) {
        return Pe(this, e, !0);
      },
      remove: function(e) {
        return Pe(this, e);
      },
      text: function(e) {
        return W(
          this,
          function(e) {
            return void 0 === e
              ? b.text(this)
              : this.empty().each(function() {
                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function() {
        return qe(this, arguments, function(e) {
          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Ie(this, e).appendChild(e);
        });
      },
      prepend: function() {
        return qe(this, arguments, function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = Ie(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function() {
        return qe(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function() {
        return qe(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (b.cleanData(de(e, !1)), (e.textContent = ''));
        return this;
      },
      clone: function(e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function() {
            return b.clone(this, e, t);
          })
        );
      },
      html: function(e) {
        return W(
          this,
          function(e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if ('string' == typeof e && !De.test(e) && !he[(ce.exec(e) || ['', ''])[1].toLowerCase()]) {
              e = b.htmlPrefilter(e);
              try {
                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (b.cleanData(de(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (r) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function() {
        var e = [];
        return qe(
          this,
          arguments,
          function(t) {
            var n = this.parentNode;
            b.inArray(this, e) < 0 && (b.cleanData(de(this)), n && n.replaceChild(t, this));
          },
          e
        );
      }
    }),
    b.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith'
      },
      function(e, t) {
        b.fn[e] = function(e) {
          for (var n, i = [], r = b(e), o = r.length - 1, s = 0; s <= o; s++)
            (n = s === o ? this : this.clone(!0)), b(r[s])[t](n), a.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var Re = new RegExp('^(' + ee + ')(?!px)[a-z%]+$', 'i'),
    He = function(t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Me = new RegExp(ne.join('|'), 'i');
  function Fe(e, t, n) {
    var i,
      r,
      o,
      s,
      a = e.style;
    return (
      (n = n || He(e)) &&
        ('' !== (s = n.getPropertyValue(t) || n[t]) || b.contains(e.ownerDocument, e) || (s = b.style(e, t)),
        !p.pixelBoxStyles() &&
          Re.test(s) &&
          Me.test(t) &&
          ((i = a.width),
          (r = a.minWidth),
          (o = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = s),
          (s = n.width),
          (a.width = i),
          (a.minWidth = r),
          (a.maxWidth = o))),
      void 0 !== s ? s + '' : s
    );
  }
  function Be(e, t) {
    return {
      get: function() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }
  !(function() {
    function t() {
      if (c) {
        (u.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
          (c.style.cssText =
            'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
          _e.appendChild(u).appendChild(c);
        var t = e.getComputedStyle(c);
        (r = '1%' !== t.top),
          (l = 12 === n(t.marginLeft)),
          (c.style.right = '60%'),
          (a = 36 === n(t.right)),
          (o = 36 === n(t.width)),
          (c.style.position = 'absolute'),
          (s = 36 === c.offsetWidth || 'absolute'),
          _e.removeChild(u),
          (c = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var r,
      o,
      s,
      a,
      l,
      u = i.createElement('div'),
      c = i.createElement('div');
    c.style &&
      ((c.style.backgroundClip = 'content-box'),
      (c.cloneNode(!0).style.backgroundClip = ''),
      (p.clearCloneStyle = 'content-box' === c.style.backgroundClip),
      b.extend(p, {
        boxSizingReliable: function() {
          return t(), o;
        },
        pixelBoxStyles: function() {
          return t(), a;
        },
        pixelPosition: function() {
          return t(), r;
        },
        reliableMarginLeft: function() {
          return t(), l;
        },
        scrollboxSize: function() {
          return t(), s;
        }
      }));
  })();
  var We = /^(none|table(?!-c[ea]).+)/,
    Ue = /^--/,
    Ve = { position: 'absolute', visibility: 'hidden', display: 'block' },
    $e = { letterSpacing: '0', fontWeight: '400' },
    Qe = ['Webkit', 'Moz', 'ms'],
    ze = i.createElement('div').style;
  function Xe(e) {
    var t = b.cssProps[e];
    return (
      t ||
        (t = b.cssProps[e] =
          (function(e) {
            if (e in ze) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Qe.length; n--; ) if ((e = Qe[n] + t) in ze) return e;
          })(e) || e),
      t
    );
  }
  function Ge(e, t, n) {
    var i = te.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || 'px') : t;
  }
  function Ye(e, t, n, i, r, o) {
    var s = 'width' === t ? 1 : 0,
      a = 0,
      l = 0;
    if (n === (i ? 'border' : 'content')) return 0;
    for (; s < 4; s += 2)
      'margin' === n && (l += b.css(e, n + ne[s], !0, r)),
        i
          ? ('content' === n && (l -= b.css(e, 'padding' + ne[s], !0, r)),
            'margin' !== n && (l -= b.css(e, 'border' + ne[s] + 'Width', !0, r)))
          : ((l += b.css(e, 'padding' + ne[s], !0, r)),
            'padding' !== n
              ? (l += b.css(e, 'border' + ne[s] + 'Width', !0, r))
              : (a += b.css(e, 'border' + ne[s] + 'Width', !0, r)));
    return (
      !i && o >= 0 && (l += Math.max(0, Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - o - l - a - 0.5))), l
    );
  }
  function Ke(e, t, n) {
    var i = He(e),
      r = Fe(e, t, i),
      o = 'border-box' === b.css(e, 'boxSizing', !1, i),
      s = o;
    if (Re.test(r)) {
      if (!n) return r;
      r = 'auto';
    }
    return (
      (s = s && (p.boxSizingReliable() || r === e.style[t])),
      ('auto' === r || (!parseFloat(r) && 'inline' === b.css(e, 'display', !1, i))) &&
        ((r = e['offset' + t[0].toUpperCase() + t.slice(1)]), (s = !0)),
      (r = parseFloat(r) || 0) + Ye(e, t, n || (o ? 'border' : 'content'), s, i, r) + 'px'
    );
  }
  function Je(e, t, n, i, r) {
    return new Je.prototype.init(e, t, n, i, r);
  }
  b.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = Fe(e, 'opacity');
            return '' === n ? '1' : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function(e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
          o,
          s,
          a = Q(t),
          l = Ue.test(t),
          u = e.style;
        if ((l || (t = Xe(a)), (s = b.cssHooks[t] || b.cssHooks[a]), void 0 === n))
          return s && 'get' in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t];
        'string' == (o = typeof n) && (r = te.exec(n)) && r[1] && ((n = oe(e, t, r)), (o = 'number')),
          null != n &&
            n == n &&
            ('number' === o && (n += (r && r[3]) || (b.cssNumber[a] ? '' : 'px')),
            p.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (u[t] = 'inherit'),
            (s && 'set' in s && void 0 === (n = s.set(e, n, i))) || (l ? u.setProperty(t, n) : (u[t] = n)));
      }
    },
    css: function(e, t, n, i) {
      var r,
        o,
        s,
        a = Q(t);
      return (
        Ue.test(t) || (t = Xe(a)),
        (s = b.cssHooks[t] || b.cssHooks[a]) && 'get' in s && (r = s.get(e, !0, n)),
        void 0 === r && (r = Fe(e, t, i)),
        'normal' === r && t in $e && (r = $e[t]),
        '' === n || n ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r) : r
      );
    }
  }),
    b.each(['height', 'width'], function(e, t) {
      b.cssHooks[t] = {
        get: function(e, n, i) {
          if (n)
            return !We.test(b.css(e, 'display')) || (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ke(e, t, i)
              : re(e, Ve, function() {
                  return Ke(e, t, i);
                });
        },
        set: function(e, n, i) {
          var r,
            o = He(e),
            s = 'border-box' === b.css(e, 'boxSizing', !1, o),
            a = i && Ye(e, t, i, s, o);
          return (
            s &&
              p.scrollboxSize() === o.position &&
              (a -= Math.ceil(
                e['offset' + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ye(e, t, 'border', !1, o) - 0.5
              )),
            a && (r = te.exec(n)) && 'px' !== (r[3] || 'px') && ((e.style[t] = n), (n = b.css(e, t))),
            Ge(0, n, a)
          );
        }
      };
    }),
    (b.cssHooks.marginLeft = Be(p.reliableMarginLeft, function(e, t) {
      if (t)
        return (
          (parseFloat(Fe(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              re(e, { marginLeft: 0 }, function() {
                return e.getBoundingClientRect().left;
              })) + 'px'
        );
    })),
    b.each({ margin: '', padding: '', border: 'Width' }, function(e, t) {
      (b.cssHooks[e + t] = {
        expand: function(n) {
          for (var i = 0, r = {}, o = 'string' == typeof n ? n.split(' ') : [n]; i < 4; i++)
            r[e + ne[i] + t] = o[i] || o[i - 2] || o[0];
          return r;
        }
      }),
        'margin' !== e && (b.cssHooks[e + t].set = Ge);
    }),
    b.fn.extend({
      css: function(e, t) {
        return W(
          this,
          function(e, t, n) {
            var i,
              r,
              o = {},
              s = 0;
            if (Array.isArray(t)) {
              for (i = He(e), r = t.length; s < r; s++) o[t[s]] = b.css(e, t[s], !1, i);
              return o;
            }
            return void 0 !== n ? b.style(e, t, n) : b.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      }
    }),
    (b.Tween = Je),
    ((Je.prototype = {
      constructor: Je,
      init: function(e, t, n, i, r, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = r || b.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = o || (b.cssNumber[n] ? '' : 'px'));
      },
      cur: function() {
        var e = Je.propHooks[this.prop];
        return e && e.get ? e.get(this) : Je.propHooks._default.get(this);
      },
      run: function(e) {
        var t,
          n = Je.propHooks[this.prop];
        return (
          (this.pos = t = this.options.duration
            ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)
            : e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step && this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Je.propHooks._default.set(this),
          this
        );
      }
    }).init.prototype = Je.prototype),
    ((Je.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = b.css(e.elem, e.prop, '')) && 'auto' !== t
            ? t
            : 0;
        },
        set: function(e) {
          b.fx.step[e.prop]
            ? b.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType || (null == e.elem.style[b.cssProps[e.prop]] && !b.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : b.style(e.elem, e.prop, e.now + e.unit);
        }
      }
    }).scrollTop = Je.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      }
    }),
    (b.easing = {
      linear: function(e) {
        return e;
      },
      swing: function(e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: 'swing'
    }),
    (b.fx = Je.prototype.init),
    (b.fx.step = {});
  var Ze,
    et,
    tt = /^(?:toggle|show|hide)$/,
    nt = /queueHooks$/;
  function it() {
    et &&
      (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(it) : e.setTimeout(it, b.fx.interval),
      b.fx.tick());
  }
  function rt() {
    return (
      e.setTimeout(function() {
        Ze = void 0;
      }),
      (Ze = Date.now())
    );
  }
  function ot(e, t) {
    var n,
      i = 0,
      r = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t) r['margin' + (n = ne[i])] = r['padding' + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  function st(e, t, n) {
    for (var i, r = (at.tweeners[t] || []).concat(at.tweeners['*']), o = 0, s = r.length; o < s; o++)
      if ((i = r[o].call(n, t, e))) return i;
  }
  function at(e, t, n) {
    var i,
      r,
      o = 0,
      s = at.prefilters.length,
      a = b.Deferred().always(function() {
        delete l.elem;
      }),
      l = function() {
        if (r) return !1;
        for (
          var t = Ze || rt(),
            n = Math.max(0, u.startTime + u.duration - t),
            i = 1 - (n / u.duration || 0),
            o = 0,
            s = u.tweens.length;
          o < s;
          o++
        )
          u.tweens[o].run(i);
        return (
          a.notifyWith(e, [u, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
        );
      },
      u = a.promise({
        elem: e,
        props: b.extend({}, t),
        opts: b.extend(!0, { specialEasing: {}, easing: b.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Ze || rt(),
        duration: n.duration,
        tweens: [],
        createTween: function(t, n) {
          var i = b.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
          return u.tweens.push(i), i;
        },
        stop: function(t) {
          var n = 0,
            i = t ? u.tweens.length : 0;
          if (r) return this;
          for (r = !0; n < i; n++) u.tweens[n].run(1);
          return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this;
        }
      }),
      c = u.props;
    for (
      (function(e, t) {
        var n, i, r, o, s;
        for (n in e)
          if (
            ((r = t[(i = Q(n))]),
            (o = e[n]),
            Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
            n !== i && ((e[i] = o), delete e[n]),
            (s = b.cssHooks[i]) && ('expand' in s))
          )
            for (n in ((o = s.expand(o)), delete e[i], o)) (n in e) || ((e[n] = o[n]), (t[n] = r));
          else t[i] = r;
      })(c, u.opts.specialEasing);
      o < s;
      o++
    )
      if ((i = at.prefilters[o].call(u, e, c, u.opts)))
        return g(i.stop) && (b._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
    return (
      b.map(c, st, u),
      g(u.opts.start) && u.opts.start.call(e, u),
      u
        .progress(u.opts.progress)
        .done(u.opts.done, u.opts.complete)
        .fail(u.opts.fail)
        .always(u.opts.always),
      b.fx.timer(b.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
      u
    );
  }
  (b.Animation = b.extend(at, {
    tweeners: {
      '*': [
        function(e, t) {
          var n = this.createTween(e, t);
          return oe(n.elem, e, te.exec(t), n), n;
        }
      ]
    },
    tweener: function(e, t) {
      g(e) ? ((t = e), (e = ['*'])) : (e = e.match(q));
      for (var n, i = 0, r = e.length; i < r; i++) (at.tweeners[(n = e[i])] = at.tweeners[n] || []).unshift(t);
    },
    prefilters: [
      function(e, t, n) {
        var i,
          r,
          o,
          s,
          a,
          l,
          u,
          c,
          f = 'width' in t || 'height' in t,
          h = this,
          d = {},
          p = e.style,
          g = e.nodeType && ie(e),
          m = G.get(e, 'fxshow');
        for (i in (n.queue ||
          (null == (s = b._queueHooks(e, 'fx')).unqueued &&
            ((s.unqueued = 0),
            (a = s.empty.fire),
            (s.empty.fire = function() {
              s.unqueued || a();
            })),
          s.unqueued++,
          h.always(function() {
            h.always(function() {
              s.unqueued--, b.queue(e, 'fx').length || s.empty.fire();
            });
          })),
        t))
          if (tt.test((r = t[i]))) {
            if ((delete t[i], (o = o || 'toggle' === r), r === (g ? 'hide' : 'show'))) {
              if ('show' !== r || !m || void 0 === m[i]) continue;
              g = !0;
            }
            d[i] = (m && m[i]) || b.style(e, i);
          }
        if ((l = !b.isEmptyObject(t)) || !b.isEmptyObject(d))
          for (i in (f &&
            1 === e.nodeType &&
            ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
            null == (u = m && m.display) && (u = G.get(e, 'display')),
            'none' === (c = b.css(e, 'display')) &&
              (u ? (c = u) : (le([e], !0), (u = e.style.display || u), (c = b.css(e, 'display')), le([e]))),
            ('inline' === c || ('inline-block' === c && null != u)) &&
              'none' === b.css(e, 'float') &&
              (l ||
                (h.done(function() {
                  p.display = u;
                }),
                null == u && (u = 'none' === (c = p.display) ? '' : c)),
              (p.display = 'inline-block'))),
          n.overflow &&
            ((p.overflow = 'hidden'),
            h.always(function() {
              (p.overflow = n.overflow[0]), (p.overflowX = n.overflow[1]), (p.overflowY = n.overflow[2]);
            })),
          (l = !1),
          d))
            l ||
              (m ? 'hidden' in m && (g = m.hidden) : (m = G.access(e, 'fxshow', { display: u })),
              o && (m.hidden = !g),
              g && le([e], !0),
              h.done(function() {
                for (i in (g || le([e]), G.remove(e, 'fxshow'), d)) b.style(e, i, d[i]);
              })),
              (l = st(g ? m[i] : 0, i, h)),
              i in m || ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
      }
    ],
    prefilter: function(e, t) {
      t ? at.prefilters.unshift(e) : at.prefilters.push(e);
    }
  })),
    (b.speed = function(e, t, n) {
      var i =
        e && 'object' == typeof e
          ? b.extend({}, e)
          : { complete: n || (!n && t) || (g(e) && e), duration: e, easing: (n && t) || (t && !g(t) && t) };
      return (
        b.fx.off
          ? (i.duration = 0)
          : 'number' != typeof i.duration &&
            (i.duration = i.duration in b.fx.speeds ? b.fx.speeds[i.duration] : b.fx.speeds._default),
        (null != i.queue && !0 !== i.queue) || (i.queue = 'fx'),
        (i.old = i.complete),
        (i.complete = function() {
          g(i.old) && i.old.call(this), i.queue && b.dequeue(this, i.queue);
        }),
        i
      );
    }),
    b.fn.extend({
      fadeTo: function(e, t, n, i) {
        return this.filter(ie)
          .css('opacity', 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function(e, t, n, i) {
        var r = b.isEmptyObject(e),
          o = b.speed(t, n, i),
          s = function() {
            var t = at(this, b.extend({}, e), o);
            (r || G.get(this, 'finish')) && t.stop(!0);
          };
        return (s.finish = s), r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
      },
      stop: function(e, t, n) {
        var i = function(e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          'string' != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || 'fx', []),
          this.each(function() {
            var t = !0,
              r = null != e && e + 'queueHooks',
              o = b.timers,
              s = G.get(this);
            if (r) s[r] && s[r].stop && i(s[r]);
            else for (r in s) s[r] && s[r].stop && nt.test(r) && i(s[r]);
            for (r = o.length; r--; )
              o[r].elem !== this || (null != e && o[r].queue !== e) || (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
            (!t && n) || b.dequeue(this, e);
          })
        );
      },
      finish: function(e) {
        return (
          !1 !== e && (e = e || 'fx'),
          this.each(function() {
            var t,
              n = G.get(this),
              i = n[e + 'queue'],
              r = n[e + 'queueHooks'],
              o = b.timers,
              s = i ? i.length : 0;
            for (n.finish = !0, b.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--; )
              o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      }
    }),
    b.each(['toggle', 'show', 'hide'], function(e, t) {
      var n = b.fn[t];
      b.fn[t] = function(e, i, r) {
        return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(ot(t, !0), e, i, r);
      };
    }),
    b.each(
      {
        slideDown: ot('show'),
        slideUp: ot('hide'),
        slideToggle: ot('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' }
      },
      function(e, t) {
        b.fn[e] = function(e, n, i) {
          return this.animate(t, e, n, i);
        };
      }
    ),
    (b.timers = []),
    (b.fx.tick = function() {
      var e,
        t = 0,
        n = b.timers;
      for (Ze = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || b.fx.stop(), (Ze = void 0);
    }),
    (b.fx.timer = function(e) {
      b.timers.push(e), b.fx.start();
    }),
    (b.fx.interval = 13),
    (b.fx.start = function() {
      et || ((et = !0), it());
    }),
    (b.fx.stop = function() {
      et = null;
    }),
    (b.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (b.fn.delay = function(t, n) {
      return (
        (t = (b.fx && b.fx.speeds[t]) || t),
        this.queue((n = n || 'fx'), function(n, i) {
          var r = e.setTimeout(n, t);
          i.stop = function() {
            e.clearTimeout(r);
          };
        })
      );
    }),
    (function() {
      var e = i.createElement('input'),
        t = i.createElement('select').appendChild(i.createElement('option'));
      (e.type = 'checkbox'),
        (p.checkOn = '' !== e.value),
        (p.optSelected = t.selected),
        ((e = i.createElement('input')).value = 't'),
        (e.type = 'radio'),
        (p.radioValue = 't' === e.value);
    })();
  var lt,
    ut = b.expr.attrHandle;
  b.fn.extend({
    attr: function(e, t) {
      return W(this, b.attr, e, t, arguments.length > 1);
    },
    removeAttr: function(e) {
      return this.each(function() {
        b.removeAttr(this, e);
      });
    }
  }),
    b.extend({
      attr: function(e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? b.prop(e, t, n)
            : ((1 === o && b.isXMLDoc(e)) ||
                (r = b.attrHooks[t.toLowerCase()] || (b.expr.match.bool.test(t) ? lt : void 0)),
              void 0 !== n
                ? null === n
                  ? void b.removeAttr(e, t)
                  : r && 'set' in r && void 0 !== (i = r.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ''), n)
                : r && 'get' in r && null !== (i = r.get(e, t))
                ? i
                : null == (i = b.find.attr(e, t))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (!p.radioValue && 'radio' === t && A(e, 'input')) {
              var n = e.value;
              return e.setAttribute('type', t), n && (e.value = n), t;
            }
          }
        }
      },
      removeAttr: function(e, t) {
        var n,
          i = 0,
          r = t && t.match(q);
        if (r && 1 === e.nodeType) for (; (n = r[i++]); ) e.removeAttribute(n);
      }
    }),
    (lt = {
      set: function(e, t, n) {
        return !1 === t ? b.removeAttr(e, n) : e.setAttribute(n, n), n;
      }
    }),
    b.each(b.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var n = ut[t] || b.find.attr;
      ut[t] = function(e, t, i) {
        var r,
          o,
          s = t.toLowerCase();
        return i || ((o = ut[s]), (ut[s] = r), (r = null != n(e, t, i) ? s : null), (ut[s] = o)), r;
      };
    });
  var ct = /^(?:input|select|textarea|button)$/i,
    ft = /^(?:a|area)$/i;
  function ht(e) {
    return (e.match(q) || []).join(' ');
  }
  function dt(e) {
    return (e.getAttribute && e.getAttribute('class')) || '';
  }
  function pt(e) {
    return Array.isArray(e) ? e : ('string' == typeof e && e.match(q)) || [];
  }
  b.fn.extend({
    prop: function(e, t) {
      return W(this, b.prop, e, t, arguments.length > 1);
    },
    removeProp: function(e) {
      return this.each(function() {
        delete this[b.propFix[e] || e];
      });
    }
  }),
    b.extend({
      prop: function(e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && b.isXMLDoc(e)) || (r = b.propHooks[(t = b.propFix[t] || t)]),
            void 0 !== n
              ? r && 'set' in r && void 0 !== (i = r.set(e, n, t))
                ? i
                : (e[t] = n)
              : r && 'get' in r && null !== (i = r.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = b.find.attr(e, 'tabindex');
            return t ? parseInt(t, 10) : ct.test(e.nodeName) || (ft.test(e.nodeName) && e.href) ? 0 : -1;
          }
        }
      },
      propFix: { for: 'htmlFor', class: 'className' }
    }),
    p.optSelected ||
      (b.propHooks.selected = {
        get: function(e) {
          return null;
        },
        set: function(e) {}
      }),
    b.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable'
      ],
      function() {
        b.propFix[this.toLowerCase()] = this;
      }
    ),
    b.fn.extend({
      addClass: function(e) {
        var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l = 0;
        if (g(e))
          return this.each(function(t) {
            b(this).addClass(e.call(this, t, dt(this)));
          });
        if ((t = pt(e)).length)
          for (; (n = this[l++]); )
            if (((r = dt(n)), (i = 1 === n.nodeType && ' ' + ht(r) + ' '))) {
              for (s = 0; (o = t[s++]); ) i.indexOf(' ' + o + ' ') < 0 && (i += o + ' ');
              r !== (a = ht(i)) && n.setAttribute('class', a);
            }
        return this;
      },
      removeClass: function(e) {
        var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l = 0;
        if (g(e))
          return this.each(function(t) {
            b(this).removeClass(e.call(this, t, dt(this)));
          });
        if (!arguments.length) return this.attr('class', '');
        if ((t = pt(e)).length)
          for (; (n = this[l++]); )
            if (((r = dt(n)), (i = 1 === n.nodeType && ' ' + ht(r) + ' '))) {
              for (s = 0; (o = t[s++]); ) for (; i.indexOf(' ' + o + ' ') > -1; ) i = i.replace(' ' + o + ' ', ' ');
              r !== (a = ht(i)) && n.setAttribute('class', a);
            }
        return this;
      },
      toggleClass: function(e, t) {
        var n = typeof e,
          i = 'string' === n || Array.isArray(e);
        return 'boolean' == typeof t && i
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : g(e)
          ? this.each(function(n) {
              b(this).toggleClass(e.call(this, n, dt(this), t), t);
            })
          : this.each(function() {
              var t, r, o, s;
              if (i)
                for (r = 0, o = b(this), s = pt(e); (t = s[r++]); ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
              else
                (void 0 !== e && 'boolean' !== n) ||
                  ((t = dt(this)) && G.set(this, '__className__', t),
                  this.setAttribute &&
                    this.setAttribute('class', t || !1 === e ? '' : G.get(this, '__className__') || ''));
            });
      },
      hasClass: function(e) {
        var t,
          n,
          i = 0;
        for (t = ' ' + e + ' '; (n = this[i++]); )
          if (1 === n.nodeType && (' ' + ht(dt(n)) + ' ').indexOf(t) > -1) return !0;
        return !1;
      }
    });
  var gt = /\r/g;
  b.fn.extend({
    val: function(e) {
      var t,
        n,
        i,
        r = this[0];
      return arguments.length
        ? ((i = g(e)),
          this.each(function(n) {
            var r;
            1 === this.nodeType &&
              (null == (r = i ? e.call(this, n, b(this).val()) : e)
                ? (r = '')
                : 'number' == typeof r
                ? (r += '')
                : Array.isArray(r) &&
                  (r = b.map(r, function(e) {
                    return null == e ? '' : e + '';
                  })),
              ((t = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()]) &&
                'set' in t &&
                void 0 !== t.set(this, r, 'value')) ||
                (this.value = r));
          }))
        : r
        ? (t = b.valHooks[r.type] || b.valHooks[r.nodeName.toLowerCase()]) &&
          'get' in t &&
          void 0 !== (n = t.get(r, 'value'))
          ? n
          : 'string' == typeof (n = r.value)
          ? n.replace(gt, '')
          : null == n
          ? ''
          : n
        : void 0;
    }
  }),
    b.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = b.find.attr(e, 'value');
            return null != t ? t : ht(b.text(e));
          }
        },
        select: {
          get: function(e) {
            var t,
              n,
              i,
              r = e.options,
              o = e.selectedIndex,
              s = 'select-one' === e.type,
              a = s ? null : [],
              l = s ? o + 1 : r.length;
            for (i = o < 0 ? l : s ? o : 0; i < l; i++)
              if (
                ((n = r[i]).selected || i === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, 'optgroup'))
              ) {
                if (((t = b(n).val()), s)) return t;
                a.push(t);
              }
            return a;
          },
          set: function(e, t) {
            for (var n, i, r = e.options, o = b.makeArray(t), s = r.length; s--; )
              ((i = r[s]).selected = b.inArray(b.valHooks.option.get(i), o) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          }
        }
      }
    }),
    b.each(['radio', 'checkbox'], function() {
      (b.valHooks[this] = {
        set: function(e, t) {
          if (Array.isArray(t)) return (e.checked = b.inArray(b(e).val(), t) > -1);
        }
      }),
        p.checkOn ||
          (b.valHooks[this].get = function(e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
          });
    }),
    (p.focusin = 'onfocusin' in e);
  var mt = /^(?:focusinfocus|focusoutblur)$/,
    vt = function(e) {
      e.stopPropagation();
    };
  b.extend(b.event, {
    trigger: function(t, n, r, o) {
      var s,
        a,
        l,
        u,
        c,
        h,
        d,
        p,
        v = [r || i],
        y = f.call(t, 'type') ? t.type : t,
        _ = f.call(t, 'namespace') ? t.namespace.split('.') : [];
      if (
        ((a = p = l = r = r || i),
        3 !== r.nodeType &&
          8 !== r.nodeType &&
          !mt.test(y + b.event.triggered) &&
          (y.indexOf('.') > -1 && ((_ = y.split('.')), (y = _.shift()), _.sort()),
          (c = y.indexOf(':') < 0 && 'on' + y),
          ((t = t[b.expando] ? t : new b.Event(y, 'object' == typeof t && t)).isTrigger = o ? 2 : 3),
          (t.namespace = _.join('.')),
          (t.rnamespace = t.namespace ? new RegExp('(^|\\.)' + _.join('\\.(?:.*\\.|)') + '(\\.|$)') : null),
          (t.result = void 0),
          t.target || (t.target = r),
          (n = null == n ? [t] : b.makeArray(n, [t])),
          (d = b.event.special[y] || {}),
          o || !d.trigger || !1 !== d.trigger.apply(r, n)))
      ) {
        if (!o && !d.noBubble && !m(r)) {
          for (mt.test((u = d.delegateType || y) + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), (l = a);
          l === (r.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e);
        }
        for (s = 0; (a = v[s++]) && !t.isPropagationStopped(); )
          (p = a),
            (t.type = s > 1 ? u : d.bindType || y),
            (h = (G.get(a, 'events') || {})[t.type] && G.get(a, 'handle')) && h.apply(a, n),
            (h = c && a[c]) && h.apply && z(a) && ((t.result = h.apply(a, n)), !1 === t.result && t.preventDefault());
        return (
          (t.type = y),
          o ||
            t.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(v.pop(), n)) ||
            !z(r) ||
            (c &&
              g(r[y]) &&
              !m(r) &&
              ((l = r[c]) && (r[c] = null),
              (b.event.triggered = y),
              t.isPropagationStopped() && p.addEventListener(y, vt),
              r[y](),
              t.isPropagationStopped() && p.removeEventListener(y, vt),
              (b.event.triggered = void 0),
              l && (r[c] = l))),
          t.result
        );
      }
    },
    simulate: function(e, t, n) {
      var i = b.extend(new b.Event(), n, { type: e, isSimulated: !0 });
      b.event.trigger(i, null, t);
    }
  }),
    b.fn.extend({
      trigger: function(e, t) {
        return this.each(function() {
          b.event.trigger(e, t, this);
        });
      },
      triggerHandler: function(e, t) {
        var n = this[0];
        if (n) return b.event.trigger(e, t, n, !0);
      }
    }),
    p.focusin ||
      b.each({ focus: 'focusin', blur: 'focusout' }, function(e, t) {
        var n = function(e) {
          b.event.simulate(t, e.target, b.event.fix(e));
        };
        b.event.special[t] = {
          setup: function() {
            var i = this.ownerDocument || this,
              r = G.access(i, t);
            r || i.addEventListener(e, n, !0), G.access(i, t, (r || 0) + 1);
          },
          teardown: function() {
            var i = this.ownerDocument || this,
              r = G.access(i, t) - 1;
            r ? G.access(i, t, r) : (i.removeEventListener(e, n, !0), G.remove(i, t));
          }
        };
      });
  var yt = e.location,
    _t = Date.now(),
    bt = /\?/;
  b.parseXML = function(t) {
    var n;
    if (!t || 'string' != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, 'text/xml');
    } catch (i) {
      n = void 0;
    }
    return (n && !n.getElementsByTagName('parsererror').length) || b.error('Invalid XML: ' + t), n;
  };
  var wt = /\[\]$/,
    Tt = /\r?\n/g,
    Et = /^(?:submit|button|image|reset|file)$/i,
    xt = /^(?:input|select|textarea|keygen)/i;
  function Ct(e, t, n, i) {
    var r;
    if (Array.isArray(t))
      b.each(t, function(t, r) {
        n || wt.test(e) ? i(e, r) : Ct(e + '[' + ('object' == typeof r && null != r ? t : '') + ']', r, n, i);
      });
    else if (n || 'object' !== _(t)) i(e, t);
    else for (r in t) Ct(e + '[' + r + ']', t[r], n, i);
  }
  (b.param = function(e, t) {
    var n,
      i = [],
      r = function(e, t) {
        var n = g(t) ? t() : t;
        i[i.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
      };
    if (Array.isArray(e) || (e.jquery && !b.isPlainObject(e)))
      b.each(e, function() {
        r(this.name, this.value);
      });
    else for (n in e) Ct(n, e[n], t, r);
    return i.join('&');
  }),
    b.fn.extend({
      serialize: function() {
        return b.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          var e = b.prop(this, 'elements');
          return e ? b.makeArray(e) : this;
        })
          .filter(function() {
            var e = this.type;
            return (
              this.name &&
              !b(this).is(':disabled') &&
              xt.test(this.nodeName) &&
              !Et.test(e) &&
              (this.checked || !ue.test(e))
            );
          })
          .map(function(e, t) {
            var n = b(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? b.map(n, function(e) {
                  return { name: t.name, value: e.replace(Tt, '\r\n') };
                })
              : { name: t.name, value: n.replace(Tt, '\r\n') };
          })
          .get();
      }
    });
  var St = /%20/g,
    At = /#.*$/,
    Dt = /([?&])_=[^&]*/,
    Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    kt = /^(?:GET|HEAD)$/,
    It = /^\/\//,
    jt = {},
    Ot = {},
    Lt = '*/'.concat('*'),
    qt = i.createElement('a');
  function Pt(e) {
    return function(t, n) {
      'string' != typeof t && ((n = t), (t = '*'));
      var i,
        r = 0,
        o = t.toLowerCase().match(q) || [];
      if (g(n))
        for (; (i = o[r++]); )
          '+' === i[0] ? ((i = i.slice(1) || '*'), (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
    };
  }
  function Rt(e, t, n, i) {
    var r = {},
      o = e === Ot;
    function s(a) {
      var l;
      return (
        (r[a] = !0),
        b.each(e[a] || [], function(e, a) {
          var u = a(t, n, i);
          return 'string' != typeof u || o || r[u] ? (o ? !(l = u) : void 0) : (t.dataTypes.unshift(u), s(u), !1);
        }),
        l
      );
    }
    return s(t.dataTypes[0]) || (!r['*'] && s('*'));
  }
  function Ht(e, t) {
    var n,
      i,
      r = b.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    return i && b.extend(!0, e, i), e;
  }
  (qt.href = yt.href),
    b.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: yt.href,
        type: 'GET',
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': Lt,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript'
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
        converters: { '* text': String, 'text html': !0, 'text json': JSON.parse, 'text xml': b.parseXML },
        flatOptions: { url: !0, context: !0 }
      },
      ajaxSetup: function(e, t) {
        return t ? Ht(Ht(e, b.ajaxSettings), t) : Ht(b.ajaxSettings, e);
      },
      ajaxPrefilter: Pt(jt),
      ajaxTransport: Pt(Ot),
      ajax: function(t, n) {
        'object' == typeof t && ((n = t), (t = void 0));
        var r,
          o,
          s,
          a,
          l,
          u,
          c,
          f,
          h,
          d,
          p = b.ajaxSetup({}, (n = n || {})),
          g = p.context || p,
          m = p.context && (g.nodeType || g.jquery) ? b(g) : b.event,
          v = b.Deferred(),
          y = b.Callbacks('once memory'),
          _ = p.statusCode || {},
          w = {},
          T = {},
          E = 'canceled',
          x = {
            readyState: 0,
            getResponseHeader: function(e) {
              var t;
              if (c) {
                if (!a) for (a = {}; (t = Nt.exec(s)); ) a[t[1].toLowerCase()] = t[2];
                t = a[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function() {
              return c ? s : null;
            },
            setRequestHeader: function(e, t) {
              return null == c && ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e), (w[e] = t)), this;
            },
            overrideMimeType: function(e) {
              return null == c && (p.mimeType = e), this;
            },
            statusCode: function(e) {
              var t;
              if (e)
                if (c) x.always(e[x.status]);
                else for (t in e) _[t] = [_[t], e[t]];
              return this;
            },
            abort: function(e) {
              var t = e || E;
              return r && r.abort(t), C(0, t), this;
            }
          };
        if (
          (v.promise(x),
          (p.url = ((t || p.url || yt.href) + '').replace(It, yt.protocol + '//')),
          (p.type = n.method || n.type || p.method || p.type),
          (p.dataTypes = (p.dataType || '*').toLowerCase().match(q) || ['']),
          null == p.crossDomain)
        ) {
          u = i.createElement('a');
          try {
            (u.href = p.url),
              (u.href = u.href),
              (p.crossDomain = qt.protocol + '//' + qt.host != u.protocol + '//' + u.host);
          } catch (S) {
            p.crossDomain = !0;
          }
        }
        if (
          (p.data && p.processData && 'string' != typeof p.data && (p.data = b.param(p.data, p.traditional)),
          Rt(jt, p, n, x),
          c)
        )
          return x;
        for (h in ((f = b.event && p.global) && 0 == b.active++ && b.event.trigger('ajaxStart'),
        (p.type = p.type.toUpperCase()),
        (p.hasContent = !kt.test(p.type)),
        (o = p.url.replace(At, '')),
        p.hasContent
          ? p.data &&
            p.processData &&
            0 === (p.contentType || '').indexOf('application/x-www-form-urlencoded') &&
            (p.data = p.data.replace(St, '+'))
          : ((d = p.url.slice(o.length)),
            p.data &&
              (p.processData || 'string' == typeof p.data) &&
              ((o += (bt.test(o) ? '&' : '?') + p.data), delete p.data),
            !1 === p.cache && ((o = o.replace(Dt, '$1')), (d = (bt.test(o) ? '&' : '?') + '_=' + _t++ + d)),
            (p.url = o + d)),
        p.ifModified &&
          (b.lastModified[o] && x.setRequestHeader('If-Modified-Since', b.lastModified[o]),
          b.etag[o] && x.setRequestHeader('If-None-Match', b.etag[o])),
        ((p.data && p.hasContent && !1 !== p.contentType) || n.contentType) &&
          x.setRequestHeader('Content-Type', p.contentType),
        x.setRequestHeader(
          'Accept',
          p.dataTypes[0] && p.accepts[p.dataTypes[0]]
            ? p.accepts[p.dataTypes[0]] + ('*' !== p.dataTypes[0] ? ', ' + Lt + '; q=0.01' : '')
            : p.accepts['*']
        ),
        p.headers))
          x.setRequestHeader(h, p.headers[h]);
        if (p.beforeSend && (!1 === p.beforeSend.call(g, x, p) || c)) return x.abort();
        if (((E = 'abort'), y.add(p.complete), x.done(p.success), x.fail(p.error), (r = Rt(Ot, p, n, x)))) {
          if (((x.readyState = 1), f && m.trigger('ajaxSend', [x, p]), c)) return x;
          p.async &&
            p.timeout > 0 &&
            (l = e.setTimeout(function() {
              x.abort('timeout');
            }, p.timeout));
          try {
            (c = !1), r.send(w, C);
          } catch (S) {
            if (c) throw S;
            C(-1, S);
          }
        } else C(-1, 'No Transport');
        function C(t, n, i, a) {
          var u,
            h,
            d,
            w,
            T,
            E = n;
          c ||
            ((c = !0),
            l && e.clearTimeout(l),
            (r = void 0),
            (s = a || ''),
            (x.readyState = t > 0 ? 4 : 0),
            (u = (t >= 200 && t < 300) || 304 === t),
            i &&
              (w = (function(e, t, n) {
                for (var i, r, o, s, a = e.contents, l = e.dataTypes; '*' === l[0]; )
                  l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader('Content-Type'));
                if (i)
                  for (r in a)
                    if (a[r] && a[r].test(i)) {
                      l.unshift(r);
                      break;
                    }
                if (l[0] in n) o = l[0];
                else {
                  for (r in n) {
                    if (!l[0] || e.converters[r + ' ' + l[0]]) {
                      o = r;
                      break;
                    }
                    s || (s = r);
                  }
                  o = o || s;
                }
                if (o) return o !== l[0] && l.unshift(o), n[o];
              })(p, x, i)),
            (w = (function(e, t, n, i) {
              var r,
                o,
                s,
                a,
                l,
                u = {},
                c = e.dataTypes.slice();
              if (c[1]) for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
              for (o = c.shift(); o; )
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = o),
                  (o = c.shift()))
                )
                  if ('*' === o) o = l;
                  else if ('*' !== l && l !== o) {
                    if (!(s = u[l + ' ' + o] || u['* ' + o]))
                      for (r in u)
                        if ((a = r.split(' '))[1] === o && (s = u[l + ' ' + a[0]] || u['* ' + a[0]])) {
                          !0 === s ? (s = u[r]) : !0 !== u[r] && ((o = a[0]), c.unshift(a[1]));
                          break;
                        }
                    if (!0 !== s)
                      if (s && e.throws) t = s(t);
                      else
                        try {
                          t = s(t);
                        } catch (S) {
                          return { state: 'parsererror', error: s ? S : 'No conversion from ' + l + ' to ' + o };
                        }
                  }
              return { state: 'success', data: t };
            })(p, w, x, u)),
            u
              ? (p.ifModified &&
                  ((T = x.getResponseHeader('Last-Modified')) && (b.lastModified[o] = T),
                  (T = x.getResponseHeader('etag')) && (b.etag[o] = T)),
                204 === t || 'HEAD' === p.type
                  ? (E = 'nocontent')
                  : 304 === t
                  ? (E = 'notmodified')
                  : ((E = w.state), (h = w.data), (u = !(d = w.error))))
              : ((d = E), (!t && E) || ((E = 'error'), t < 0 && (t = 0))),
            (x.status = t),
            (x.statusText = (n || E) + ''),
            u ? v.resolveWith(g, [h, E, x]) : v.rejectWith(g, [x, E, d]),
            x.statusCode(_),
            (_ = void 0),
            f && m.trigger(u ? 'ajaxSuccess' : 'ajaxError', [x, p, u ? h : d]),
            y.fireWith(g, [x, E]),
            f && (m.trigger('ajaxComplete', [x, p]), --b.active || b.event.trigger('ajaxStop')));
        }
        return x;
      },
      getJSON: function(e, t, n) {
        return b.get(e, t, n, 'json');
      },
      getScript: function(e, t) {
        return b.get(e, void 0, t, 'script');
      }
    }),
    b.each(['get', 'post'], function(e, t) {
      b[t] = function(e, n, i, r) {
        return (
          g(n) && ((r = r || i), (i = n), (n = void 0)),
          b.ajax(b.extend({ url: e, type: t, dataType: r, data: n, success: i }, b.isPlainObject(e) && e))
        );
      };
    }),
    (b._evalUrl = function(e) {
      return b.ajax({ url: e, type: 'GET', dataType: 'script', cache: !0, async: !1, global: !1, throws: !0 });
    }),
    b.fn.extend({
      wrapAll: function(e) {
        var t;
        return (
          this[0] &&
            (g(e) && (e = e.call(this[0])),
            (t = b(e, this[0].ownerDocument)
              .eq(0)
              .clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function() {
                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function(e) {
        return g(e)
          ? this.each(function(t) {
              b(this).wrapInner(e.call(this, t));
            })
          : this.each(function() {
              var t = b(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function(e) {
        var t = g(e);
        return this.each(function(n) {
          b(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function(e) {
        return (
          this.parent(e)
            .not('body')
            .each(function() {
              b(this).replaceWith(this.childNodes);
            }),
          this
        );
      }
    }),
    (b.expr.pseudos.hidden = function(e) {
      return !b.expr.pseudos.visible(e);
    }),
    (b.expr.pseudos.visible = function(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (b.ajaxSettings.xhr = function() {
      try {
        return new e.XMLHttpRequest();
      } catch (t) {}
    });
  var Mt = { 0: 200, 1223: 204 },
    Ft = b.ajaxSettings.xhr();
  (p.cors = !!Ft && 'withCredentials' in Ft),
    (p.ajax = Ft = !!Ft),
    b.ajaxTransport(function(t) {
      var n, i;
      if (p.cors || (Ft && !t.crossDomain))
        return {
          send: function(r, o) {
            var s,
              a = t.xhr();
            if ((a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields))
              for (s in t.xhrFields) a[s] = t.xhrFields[s];
            for (s in (t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
            t.crossDomain || r['X-Requested-With'] || (r['X-Requested-With'] = 'XMLHttpRequest'),
            r))
              a.setRequestHeader(s, r[s]);
            (n = function(e) {
              return function() {
                n &&
                  ((n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                  'abort' === e
                    ? a.abort()
                    : 'error' === e
                    ? 'number' != typeof a.status
                      ? o(0, 'error')
                      : o(a.status, a.statusText)
                    : o(
                        Mt[a.status] || a.status,
                        a.statusText,
                        'text' !== (a.responseType || 'text') || 'string' != typeof a.responseText
                          ? { binary: a.response }
                          : { text: a.responseText },
                        a.getAllResponseHeaders()
                      ));
              };
            }),
              (a.onload = n()),
              (i = a.onerror = a.ontimeout = n('error')),
              void 0 !== a.onabort
                ? (a.onabort = i)
                : (a.onreadystatechange = function() {
                    4 === a.readyState &&
                      e.setTimeout(function() {
                        n && i();
                      });
                  }),
              (n = n('abort'));
            try {
              a.send((t.hasContent && t.data) || null);
            } catch (l) {
              if (n) throw l;
            }
          },
          abort: function() {
            n && n();
          }
        };
    }),
    b.ajaxPrefilter(function(e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    b.ajaxSetup({
      accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function(e) {
          return b.globalEval(e), e;
        }
      }
    }),
    b.ajaxPrefilter('script', function(e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
    }),
    b.ajaxTransport('script', function(e) {
      var t, n;
      if (e.crossDomain)
        return {
          send: function(r, o) {
            (t = b('<script>')
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                'load error',
                (n = function(e) {
                  t.remove(), (n = null), e && o('error' === e.type ? 404 : 200, e.type);
                })
              )),
              i.head.appendChild(t[0]);
          },
          abort: function() {
            n && n();
          }
        };
    });
  var Bt,
    Wt = [],
    Ut = /(=)\?(?=&|$)|\?\?/;
  b.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function() {
      var e = Wt.pop() || b.expando + '_' + _t++;
      return (this[e] = !0), e;
    }
  }),
    b.ajaxPrefilter('json jsonp', function(t, n, i) {
      var r,
        o,
        s,
        a =
          !1 !== t.jsonp &&
          (Ut.test(t.url)
            ? 'url'
            : 'string' == typeof t.data &&
              0 === (t.contentType || '').indexOf('application/x-www-form-urlencoded') &&
              Ut.test(t.data) &&
              'data');
      if (a || 'jsonp' === t.dataTypes[0])
        return (
          (r = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          a
            ? (t[a] = t[a].replace(Ut, '$1' + r))
            : !1 !== t.jsonp && (t.url += (bt.test(t.url) ? '&' : '?') + t.jsonp + '=' + r),
          (t.converters['script json'] = function() {
            return s || b.error(r + ' was not called'), s[0];
          }),
          (t.dataTypes[0] = 'json'),
          (o = e[r]),
          (e[r] = function() {
            s = arguments;
          }),
          i.always(function() {
            void 0 === o ? b(e).removeProp(r) : (e[r] = o),
              t[r] && ((t.jsonpCallback = n.jsonpCallback), Wt.push(r)),
              s && g(o) && o(s[0]),
              (s = o = void 0);
          }),
          'script'
        );
    }),
    (p.createHTMLDocument = (((Bt = i.implementation.createHTMLDocument('').body).innerHTML =
      '<form></form><form></form>'),
    2 === Bt.childNodes.length)),
    (b.parseHTML = function(e, t, n) {
      return 'string' != typeof e
        ? []
        : ('boolean' == typeof t && ((n = t), (t = !1)),
          t ||
            (p.createHTMLDocument
              ? (((r = (t = i.implementation.createHTMLDocument('')).createElement('base')).href = i.location.href),
                t.head.appendChild(r))
              : (t = i)),
          (s = !n && []),
          (o = D.exec(e))
            ? [t.createElement(o[1])]
            : ((o = ye([e], t, s)), s && s.length && b(s).remove(), b.merge([], o.childNodes)));
      var r, o, s;
    }),
    (b.fn.load = function(e, t, n) {
      var i,
        r,
        o,
        s = this,
        a = e.indexOf(' ');
      return (
        a > -1 && ((i = ht(e.slice(a))), (e = e.slice(0, a))),
        g(t) ? ((n = t), (t = void 0)) : t && 'object' == typeof t && (r = 'POST'),
        s.length > 0 &&
          b
            .ajax({ url: e, type: r || 'GET', dataType: 'html', data: t })
            .done(function(e) {
              (o = arguments),
                s.html(
                  i
                    ? b('<div>')
                        .append(b.parseHTML(e))
                        .find(i)
                    : e
                );
            })
            .always(
              n &&
                function(e, t) {
                  s.each(function() {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    b.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function(e, t) {
      b.fn[t] = function(e) {
        return this.on(t, e);
      };
    }),
    (b.expr.pseudos.animated = function(e) {
      return b.grep(b.timers, function(t) {
        return e === t.elem;
      }).length;
    }),
    (b.offset = {
      setOffset: function(e, t, n) {
        var i,
          r,
          o,
          s,
          a,
          l,
          u = b.css(e, 'position'),
          c = b(e),
          f = {};
        'static' === u && (e.style.position = 'relative'),
          (a = c.offset()),
          (o = b.css(e, 'top')),
          (l = b.css(e, 'left')),
          ('absolute' === u || 'fixed' === u) && (o + l).indexOf('auto') > -1
            ? ((s = (i = c.position()).top), (r = i.left))
            : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
          g(t) && (t = t.call(e, n, b.extend({}, a))),
          null != t.top && (f.top = t.top - a.top + s),
          null != t.left && (f.left = t.left - a.left + r),
          'using' in t ? t.using.call(e, f) : c.css(f);
      }
    }),
    b.fn.extend({
      offset: function(e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function(t) {
                b.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i = this[0];
        return i
          ? i.getClientRects().length
            ? {
                top: (t = i.getBoundingClientRect()).top + (n = i.ownerDocument.defaultView).pageYOffset,
                left: t.left + n.pageXOffset
              }
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function() {
        if (this[0]) {
          var e,
            t,
            n,
            i = this[0],
            r = { top: 0, left: 0 };
          if ('fixed' === b.css(i, 'position')) t = i.getBoundingClientRect();
          else {
            for (
              t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement;
              e && (e === n.body || e === n.documentElement) && 'static' === b.css(e, 'position');

            )
              e = e.parentNode;
            e &&
              e !== i &&
              1 === e.nodeType &&
              (((r = b(e).offset()).top += b.css(e, 'borderTopWidth', !0)),
              (r.left += b.css(e, 'borderLeftWidth', !0)));
          }
          return { top: t.top - r.top - b.css(i, 'marginTop', !0), left: t.left - r.left - b.css(i, 'marginLeft', !0) };
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var e = this.offsetParent; e && 'static' === b.css(e, 'position'); ) e = e.offsetParent;
          return e || _e;
        });
      }
    }),
    b.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function(e, t) {
      var n = 'pageYOffset' === t;
      b.fn[e] = function(i) {
        return W(
          this,
          function(e, i, r) {
            var o;
            if ((m(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === r)) return o ? o[t] : e[i];
            o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : (e[i] = r);
          },
          e,
          i,
          arguments.length
        );
      };
    }),
    b.each(['top', 'left'], function(e, t) {
      b.cssHooks[t] = Be(p.pixelPosition, function(e, n) {
        if (n) return (n = Fe(e, t)), Re.test(n) ? b(e).position()[t] + 'px' : n;
      });
    }),
    b.each({ Height: 'height', Width: 'width' }, function(e, t) {
      b.each({ padding: 'inner' + e, content: t, '': 'outer' + e }, function(n, i) {
        b.fn[i] = function(r, o) {
          var s = arguments.length && (n || 'boolean' != typeof r),
            a = n || (!0 === r || !0 === o ? 'margin' : 'border');
          return W(
            this,
            function(t, n, r) {
              var o;
              return m(t)
                ? 0 === i.indexOf('outer')
                  ? t['inner' + e]
                  : t.document.documentElement['client' + e]
                : 9 === t.nodeType
                ? ((o = t.documentElement),
                  Math.max(
                    t.body['scroll' + e],
                    o['scroll' + e],
                    t.body['offset' + e],
                    o['offset' + e],
                    o['client' + e]
                  ))
                : void 0 === r
                ? b.css(t, n, a)
                : b.style(t, n, r, a);
            },
            t,
            s ? r : void 0,
            s
          );
        };
      });
    }),
    b.each(
      'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
        ' '
      ),
      function(e, t) {
        b.fn[t] = function(e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
      }
    ),
    b.fn.extend({
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      }
    }),
    b.fn.extend({
      bind: function(e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function(e, t) {
        return this.off(e, null, t);
      },
      delegate: function(e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function(e, t, n) {
        return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
      }
    }),
    (b.proxy = function(e, t) {
      var n, i, r;
      if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
        return (
          (i = o.call(arguments, 2)),
          ((r = function() {
            return e.apply(t || this, i.concat(o.call(arguments)));
          }).guid = e.guid = e.guid || b.guid++),
          r
        );
    }),
    (b.holdReady = function(e) {
      e ? b.readyWait++ : b.ready(!0);
    }),
    (b.isArray = Array.isArray),
    (b.parseJSON = JSON.parse),
    (b.nodeName = A),
    (b.isFunction = g),
    (b.isWindow = m),
    (b.camelCase = Q),
    (b.type = _),
    (b.now = Date.now),
    (b.isNumeric = function(e) {
      var t = b.type(e);
      return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
    }),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function() {
        return b;
      });
  var Vt = e.jQuery,
    $t = e.$;
  return (
    (b.noConflict = function(t) {
      return e.$ === b && (e.$ = $t), t && e.jQuery === b && (e.jQuery = Vt), b;
    }),
    t || (e.jQuery = e.$ = b),
    b
  );
}),
  (function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module
      ? t(exports, require('jquery'), require('popper.js'))
      : 'function' == typeof define && define.amd
      ? define(['exports', 'jquery', 'popper.js'], t)
      : t(((e = e || self).bootstrap = {}), e.jQuery, e.Popper);
  })(this, function(e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function r(e, t, n) {
      return t && i(e.prototype, t), n && i(e, n), e;
    }
    function o(e, t, n) {
      return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
      );
    }
    function s(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
          (i = i.concat(
            Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })
          )),
          i.forEach(function(t) {
            o(e, t, n[t]);
          });
      }
      return e;
    }
    (t = t && t.hasOwnProperty('default') ? t.default : t), (n = n && n.hasOwnProperty('default') ? n.default : n);
    var a = {
      TRANSITION_END: 'bsTransitionEnd',
      getUID: function(e) {
        do {
          e += ~~(1e6 * Math.random());
        } while (document.getElementById(e));
        return e;
      },
      getSelectorFromElement: function(e) {
        var t = e.getAttribute('data-target');
        if (!t || '#' === t) {
          var n = e.getAttribute('href');
          t = n && '#' !== n ? n.trim() : '';
        }
        try {
          return document.querySelector(t) ? t : null;
        } catch (i) {
          return null;
        }
      },
      getTransitionDurationFromElement: function(e) {
        if (!e) return 0;
        var n = t(e).css('transition-duration'),
          i = t(e).css('transition-delay'),
          r = parseFloat(n),
          o = parseFloat(i);
        return r || o ? ((n = n.split(',')[0]), (i = i.split(',')[0]), 1e3 * (parseFloat(n) + parseFloat(i))) : 0;
      },
      reflow: function(e) {
        return e.offsetHeight;
      },
      triggerTransitionEnd: function(e) {
        t(e).trigger('transitionend');
      },
      supportsTransitionEnd: function() {
        return Boolean('transitionend');
      },
      isElement: function(e) {
        return (e[0] || e).nodeType;
      },
      typeCheckConfig: function(e, t, n) {
        for (var i in n)
          if (Object.prototype.hasOwnProperty.call(n, i)) {
            var r = n[i],
              o = t[i],
              s =
                o && a.isElement(o)
                  ? 'element'
                  : {}.toString
                      .call(o)
                      .match(/\s([a-z]+)/i)[1]
                      .toLowerCase();
            if (!new RegExp(r).test(s))
              throw new Error(
                e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".'
              );
          }
      },
      findShadowRoot: function(e) {
        if (!document.documentElement.attachShadow) return null;
        if ('function' == typeof e.getRootNode) {
          var t = e.getRootNode();
          return t instanceof ShadowRoot ? t : null;
        }
        return e instanceof ShadowRoot ? e : e.parentNode ? a.findShadowRoot(e.parentNode) : null;
      }
    };
    (t.fn.emulateTransitionEnd = function(e) {
      var n = this,
        i = !1;
      return (
        t(this).one(a.TRANSITION_END, function() {
          i = !0;
        }),
        setTimeout(function() {
          i || a.triggerTransitionEnd(n);
        }, e),
        this
      );
    }),
      (t.event.special[a.TRANSITION_END] = {
        bindType: 'transitionend',
        delegateType: 'transitionend',
        handle: function(e) {
          if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
        }
      });
    var l = t.fn.alert,
      u = (function() {
        function e(e) {
          this._element = e;
        }
        var n = e.prototype;
        return (
          (n.close = function(e) {
            var t = this._element;
            e && (t = this._getRootElement(e)),
              this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
          }),
          (n.dispose = function() {
            t.removeData(this._element, 'bs.alert'), (this._element = null);
          }),
          (n._getRootElement = function(e) {
            var n = a.getSelectorFromElement(e),
              i = !1;
            return n && (i = document.querySelector(n)), i || (i = t(e).closest('.alert')[0]), i;
          }),
          (n._triggerCloseEvent = function(e) {
            var n = t.Event('close.bs.alert');
            return t(e).trigger(n), n;
          }),
          (n._removeElement = function(e) {
            var n = this;
            if ((t(e).removeClass('show'), t(e).hasClass('fade'))) {
              var i = a.getTransitionDurationFromElement(e);
              t(e)
                .one(a.TRANSITION_END, function(t) {
                  return n._destroyElement(e, t);
                })
                .emulateTransitionEnd(i);
            } else this._destroyElement(e);
          }),
          (n._destroyElement = function(e) {
            t(e)
              .detach()
              .trigger('closed.bs.alert')
              .remove();
          }),
          (e._jQueryInterface = function(n) {
            return this.each(function() {
              var i = t(this),
                r = i.data('bs.alert');
              r || ((r = new e(this)), i.data('bs.alert', r)), 'close' === n && r[n](this);
            });
          }),
          (e._handleDismiss = function(e) {
            return function(t) {
              t && t.preventDefault(), e.close(this);
            };
          }),
          r(e, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.3.1';
              }
            }
          ]),
          e
        );
      })();
    t(document).on('click.bs.alert.data-api', '[data-dismiss="alert"]', u._handleDismiss(new u())),
      (t.fn.alert = u._jQueryInterface),
      (t.fn.alert.Constructor = u),
      (t.fn.alert.noConflict = function() {
        return (t.fn.alert = l), u._jQueryInterface;
      });
    var c = t.fn.button,
      f = (function() {
        function e(e) {
          this._element = e;
        }
        var n = e.prototype;
        return (
          (n.toggle = function() {
            var e = !0,
              n = !0,
              i = t(this._element).closest('[data-toggle="buttons"]')[0];
            if (i) {
              var r = this._element.querySelector('input:not([type="hidden"])');
              if (r) {
                if ('radio' === r.type)
                  if (r.checked && this._element.classList.contains('active')) e = !1;
                  else {
                    var o = i.querySelector('.active');
                    o && t(o).removeClass('active');
                  }
                if (e) {
                  if (
                    r.hasAttribute('disabled') ||
                    i.hasAttribute('disabled') ||
                    r.classList.contains('disabled') ||
                    i.classList.contains('disabled')
                  )
                    return;
                  (r.checked = !this._element.classList.contains('active')), t(r).trigger('change');
                }
                r.focus(), (n = !1);
              }
            }
            n && this._element.setAttribute('aria-pressed', !this._element.classList.contains('active')),
              e && t(this._element).toggleClass('active');
          }),
          (n.dispose = function() {
            t.removeData(this._element, 'bs.button'), (this._element = null);
          }),
          (e._jQueryInterface = function(n) {
            return this.each(function() {
              var i = t(this).data('bs.button');
              i || ((i = new e(this)), t(this).data('bs.button', i)), 'toggle' === n && i[n]();
            });
          }),
          r(e, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.3.1';
              }
            }
          ]),
          e
        );
      })();
    t(document)
      .on('click.bs.button.data-api', '[data-toggle^="button"]', function(e) {
        e.preventDefault();
        var n = e.target;
        t(n).hasClass('btn') || (n = t(n).closest('.btn')), f._jQueryInterface.call(t(n), 'toggle');
      })
      .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function(e) {
        var n = t(e.target).closest('.btn')[0];
        t(n).toggleClass('focus', /^focus(in)?$/.test(e.type));
      }),
      (t.fn.button = f._jQueryInterface),
      (t.fn.button.Constructor = f),
      (t.fn.button.noConflict = function() {
        return (t.fn.button = c), f._jQueryInterface;
      });
    var h = 'carousel',
      d = t.fn[h],
      p = { interval: 5e3, keyboard: !0, slide: !1, pause: 'hover', wrap: !0, touch: !0 },
      g = {
        interval: '(number|boolean)',
        keyboard: 'boolean',
        slide: '(boolean|string)',
        pause: '(string|boolean)',
        wrap: 'boolean',
        touch: 'boolean'
      },
      m = {
        ACTIVE: '.active',
        ACTIVE_ITEM: '.active.carousel-item',
        ITEM: '.carousel-item',
        ITEM_IMG: '.carousel-item img',
        NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
        INDICATORS: '.carousel-indicators',
        DATA_SLIDE: '[data-slide], [data-slide-to]',
        DATA_RIDE: '[data-ride="carousel"]'
      },
      v = { TOUCH: 'touch', PEN: 'pen' },
      y = (function() {
        function e(e, t) {
          (this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this.touchStartX = 0),
            (this.touchDeltaX = 0),
            (this._config = this._getConfig(t)),
            (this._element = e),
            (this._indicatorsElement = this._element.querySelector(m.INDICATORS)),
            (this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0),
            (this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent)),
            this._addEventListeners();
        }
        var n = e.prototype;
        return (
          (n.next = function() {
            this._isSliding || this._slide('next');
          }),
          (n.nextWhenVisible = function() {
            !document.hidden &&
              t(this._element).is(':visible') &&
              'hidden' !== t(this._element).css('visibility') &&
              this.next();
          }),
          (n.prev = function() {
            this._isSliding || this._slide('prev');
          }),
          (n.pause = function(e) {
            e || (this._isPaused = !0),
              this._element.querySelector(m.NEXT_PREV) && (a.triggerTransitionEnd(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }),
          (n.cycle = function(e) {
            e || (this._isPaused = !1),
              this._interval && (clearInterval(this._interval), (this._interval = null)),
              this._config.interval &&
                !this._isPaused &&
                (this._interval = setInterval(
                  (document.visibilityState ? this.nextWhenVisible : this.next).bind(this),
                  this._config.interval
                ));
          }),
          (n.to = function(e) {
            var n = this;
            this._activeElement = this._element.querySelector(m.ACTIVE_ITEM);
            var i = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0))
              if (this._isSliding)
                t(this._element).one('slid.bs.carousel', function() {
                  return n.to(e);
                });
              else {
                if (i === e) return this.pause(), void this.cycle();
                this._slide(e > i ? 'next' : 'prev', this._items[e]);
              }
          }),
          (n.dispose = function() {
            t(this._element).off('.bs.carousel'),
              t.removeData(this._element, 'bs.carousel'),
              (this._items = null),
              (this._config = null),
              (this._element = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null);
          }),
          (n._getConfig = function(e) {
            return (e = s({}, p, e)), a.typeCheckConfig(h, e, g), e;
          }),
          (n._handleSwipe = function() {
            var e = Math.abs(this.touchDeltaX);
            if (!(e <= 40)) {
              var t = e / this.touchDeltaX;
              t > 0 && this.prev(), t < 0 && this.next();
            }
          }),
          (n._addEventListeners = function() {
            var e = this;
            this._config.keyboard &&
              t(this._element).on('keydown.bs.carousel', function(t) {
                return e._keydown(t);
              }),
              'hover' === this._config.pause &&
                t(this._element)
                  .on('mouseenter.bs.carousel', function(t) {
                    return e.pause(t);
                  })
                  .on('mouseleave.bs.carousel', function(t) {
                    return e.cycle(t);
                  }),
              this._config.touch && this._addTouchEventListeners();
          }),
          (n._addTouchEventListeners = function() {
            var e = this;
            if (this._touchSupported) {
              var n = function(t) {
                  e._pointerEvent && v[t.originalEvent.pointerType.toUpperCase()]
                    ? (e.touchStartX = t.originalEvent.clientX)
                    : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX);
                },
                i = function(t) {
                  e._pointerEvent &&
                    v[t.originalEvent.pointerType.toUpperCase()] &&
                    (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX),
                    e._handleSwipe(),
                    'hover' === e._config.pause &&
                      (e.pause(),
                      e.touchTimeout && clearTimeout(e.touchTimeout),
                      (e.touchTimeout = setTimeout(function(t) {
                        return e.cycle(t);
                      }, 500 + e._config.interval)));
                };
              t(this._element.querySelectorAll(m.ITEM_IMG)).on('dragstart.bs.carousel', function(e) {
                return e.preventDefault();
              }),
                this._pointerEvent
                  ? (t(this._element).on('pointerdown.bs.carousel', function(e) {
                      return n(e);
                    }),
                    t(this._element).on('pointerup.bs.carousel', function(e) {
                      return i(e);
                    }),
                    this._element.classList.add('pointer-event'))
                  : (t(this._element).on('touchstart.bs.carousel', function(e) {
                      return n(e);
                    }),
                    t(this._element).on('touchmove.bs.carousel', function(t) {
                      return (function(t) {
                        e.touchDeltaX =
                          t.originalEvent.touches && t.originalEvent.touches.length > 1
                            ? 0
                            : t.originalEvent.touches[0].clientX - e.touchStartX;
                      })(t);
                    }),
                    t(this._element).on('touchend.bs.carousel', function(e) {
                      return i(e);
                    }));
            }
          }),
          (n._keydown = function(e) {
            if (!/input|textarea/i.test(e.target.tagName))
              switch (e.which) {
                case 37:
                  e.preventDefault(), this.prev();
                  break;
                case 39:
                  e.preventDefault(), this.next();
              }
          }),
          (n._getItemIndex = function(e) {
            return (
              (this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(m.ITEM)) : []),
              this._items.indexOf(e)
            );
          }),
          (n._getItemByDirection = function(e, t) {
            var n = 'next' === e,
              i = 'prev' === e,
              r = this._getItemIndex(t);
            if (((i && 0 === r) || (n && r === this._items.length - 1)) && !this._config.wrap) return t;
            var o = (r + ('prev' === e ? -1 : 1)) % this._items.length;
            return -1 === o ? this._items[this._items.length - 1] : this._items[o];
          }),
          (n._triggerSlideEvent = function(e, n) {
            var i = this._getItemIndex(e),
              r = this._getItemIndex(this._element.querySelector(m.ACTIVE_ITEM)),
              o = t.Event('slide.bs.carousel', { relatedTarget: e, direction: n, from: r, to: i });
            return t(this._element).trigger(o), o;
          }),
          (n._setActiveIndicatorElement = function(e) {
            if (this._indicatorsElement) {
              var n = [].slice.call(this._indicatorsElement.querySelectorAll(m.ACTIVE));
              t(n).removeClass('active');
              var i = this._indicatorsElement.children[this._getItemIndex(e)];
              i && t(i).addClass('active');
            }
          }),
          (n._slide = function(e, n) {
            var i,
              r,
              o,
              s = this,
              l = this._element.querySelector(m.ACTIVE_ITEM),
              u = this._getItemIndex(l),
              c = n || (l && this._getItemByDirection(e, l)),
              f = this._getItemIndex(c),
              h = Boolean(this._interval);
            if (
              ('next' === e
                ? ((i = 'carousel-item-left'), (r = 'carousel-item-next'), (o = 'left'))
                : ((i = 'carousel-item-right'), (r = 'carousel-item-prev'), (o = 'right')),
              c && t(c).hasClass('active'))
            )
              this._isSliding = !1;
            else if (!this._triggerSlideEvent(c, o).isDefaultPrevented() && l && c) {
              (this._isSliding = !0), h && this.pause(), this._setActiveIndicatorElement(c);
              var d = t.Event('slid.bs.carousel', { relatedTarget: c, direction: o, from: u, to: f });
              if (t(this._element).hasClass('slide')) {
                t(c).addClass(r), a.reflow(c), t(l).addClass(i), t(c).addClass(i);
                var p = parseInt(c.getAttribute('data-interval'), 10);
                p
                  ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval),
                    (this._config.interval = p))
                  : (this._config.interval = this._config.defaultInterval || this._config.interval);
                var g = a.getTransitionDurationFromElement(l);
                t(l)
                  .one(a.TRANSITION_END, function() {
                    t(c)
                      .removeClass(i + ' ' + r)
                      .addClass('active'),
                      t(l).removeClass('active ' + r + ' ' + i),
                      (s._isSliding = !1),
                      setTimeout(function() {
                        return t(s._element).trigger(d);
                      }, 0);
                  })
                  .emulateTransitionEnd(g);
              } else
                t(l).removeClass('active'),
                  t(c).addClass('active'),
                  (this._isSliding = !1),
                  t(this._element).trigger(d);
              h && this.cycle();
            }
          }),
          (e._jQueryInterface = function(n) {
            return this.each(function() {
              var i = t(this).data('bs.carousel'),
                r = s({}, p, t(this).data());
              'object' == typeof n && (r = s({}, r, n));
              var o = 'string' == typeof n ? n : r.slide;
              if ((i || ((i = new e(this, r)), t(this).data('bs.carousel', i)), 'number' == typeof n)) i.to(n);
              else if ('string' == typeof o) {
                if (void 0 === i[o]) throw new TypeError('No method named "' + o + '"');
                i[o]();
              } else r.interval && r.ride && (i.pause(), i.cycle());
            });
          }),
          (e._dataApiClickHandler = function(n) {
            var i = a.getSelectorFromElement(this);
            if (i) {
              var r = t(i)[0];
              if (r && t(r).hasClass('carousel')) {
                var o = s({}, t(r).data(), t(this).data()),
                  l = this.getAttribute('data-slide-to');
                l && (o.interval = !1),
                  e._jQueryInterface.call(t(r), o),
                  l &&
                    t(r)
                      .data('bs.carousel')
                      .to(l),
                  n.preventDefault();
              }
            }
          }),
          r(e, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.3.1';
              }
            },
            {
              key: 'Default',
              get: function() {
                return p;
              }
            }
          ]),
          e
        );
      })();
    t(document).on('click.bs.carousel.data-api', m.DATA_SLIDE, y._dataApiClickHandler),
      t(window).on('load.bs.carousel.data-api', function() {
        for (var e = [].slice.call(document.querySelectorAll(m.DATA_RIDE)), n = 0, i = e.length; n < i; n++) {
          var r = t(e[n]);
          y._jQueryInterface.call(r, r.data());
        }
      }),
      (t.fn[h] = y._jQueryInterface),
      (t.fn[h].Constructor = y),
      (t.fn[h].noConflict = function() {
        return (t.fn[h] = d), y._jQueryInterface;
      });
    var _ = 'collapse',
      b = t.fn[_],
      w = { toggle: !0, parent: '' },
      T = { toggle: 'boolean', parent: '(string|element)' },
      E = { ACTIVES: '.show, .collapsing', DATA_TOGGLE: '[data-toggle="collapse"]' },
      x = (function() {
        function e(e, t) {
          (this._isTransitioning = !1),
            (this._element = e),
            (this._config = this._getConfig(t)),
            (this._triggerArray = [].slice.call(
              document.querySelectorAll(
                '[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'
              )
            ));
          for (var n = [].slice.call(document.querySelectorAll(E.DATA_TOGGLE)), i = 0, r = n.length; i < r; i++) {
            var o = n[i],
              s = a.getSelectorFromElement(o),
              l = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                return t === e;
              });
            null !== s && l.length > 0 && ((this._selector = s), this._triggerArray.push(o));
          }
          (this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle();
        }
        var n = e.prototype;
        return (
          (n.toggle = function() {
            t(this._element).hasClass('show') ? this.hide() : this.show();
          }),
          (n.show = function() {
            var n,
              i,
              r = this;
            if (
              !(
                this._isTransitioning ||
                t(this._element).hasClass('show') ||
                (this._parent &&
                  0 ===
                    (n = [].slice.call(this._parent.querySelectorAll(E.ACTIVES)).filter(function(e) {
                      return 'string' == typeof r._config.parent
                        ? e.getAttribute('data-parent') === r._config.parent
                        : e.classList.contains('collapse');
                    })).length &&
                  (n = null),
                n &&
                  (i = t(n)
                    .not(this._selector)
                    .data('bs.collapse')) &&
                  i._isTransitioning)
              )
            ) {
              var o = t.Event('show.bs.collapse');
              if ((t(this._element).trigger(o), !o.isDefaultPrevented())) {
                n && (e._jQueryInterface.call(t(n).not(this._selector), 'hide'), i || t(n).data('bs.collapse', null));
                var s = this._getDimension();
                t(this._element)
                  .removeClass('collapse')
                  .addClass('collapsing'),
                  (this._element.style[s] = 0),
                  this._triggerArray.length &&
                    t(this._triggerArray)
                      .removeClass('collapsed')
                      .attr('aria-expanded', !0),
                  this.setTransitioning(!0);
                var l = 'scroll' + (s[0].toUpperCase() + s.slice(1)),
                  u = a.getTransitionDurationFromElement(this._element);
                t(this._element)
                  .one(a.TRANSITION_END, function() {
                    t(r._element)
                      .removeClass('collapsing')
                      .addClass('collapse')
                      .addClass('show'),
                      (r._element.style[s] = ''),
                      r.setTransitioning(!1),
                      t(r._element).trigger('shown.bs.collapse');
                  })
                  .emulateTransitionEnd(u),
                  (this._element.style[s] = this._element[l] + 'px');
              }
            }
          }),
          (n.hide = function() {
            var e = this;
            if (!this._isTransitioning && t(this._element).hasClass('show')) {
              var n = t.Event('hide.bs.collapse');
              if ((t(this._element).trigger(n), !n.isDefaultPrevented())) {
                var i = this._getDimension();
                (this._element.style[i] = this._element.getBoundingClientRect()[i] + 'px'),
                  a.reflow(this._element),
                  t(this._element)
                    .addClass('collapsing')
                    .removeClass('collapse')
                    .removeClass('show');
                var r = this._triggerArray.length;
                if (r > 0)
                  for (var o = 0; o < r; o++) {
                    var s = this._triggerArray[o],
                      l = a.getSelectorFromElement(s);
                    null !== l &&
                      (t([].slice.call(document.querySelectorAll(l))).hasClass('show') ||
                        t(s)
                          .addClass('collapsed')
                          .attr('aria-expanded', !1));
                  }
                this.setTransitioning(!0), (this._element.style[i] = '');
                var u = a.getTransitionDurationFromElement(this._element);
                t(this._element)
                  .one(a.TRANSITION_END, function() {
                    e.setTransitioning(!1),
                      t(e._element)
                        .removeClass('collapsing')
                        .addClass('collapse')
                        .trigger('hidden.bs.collapse');
                  })
                  .emulateTransitionEnd(u);
              }
            }
          }),
          (n.setTransitioning = function(e) {
            this._isTransitioning = e;
          }),
          (n.dispose = function() {
            t.removeData(this._element, 'bs.collapse'),
              (this._config = null),
              (this._parent = null),
              (this._element = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (n._getConfig = function(e) {
            return ((e = s({}, w, e)).toggle = Boolean(e.toggle)), a.typeCheckConfig(_, e, T), e;
          }),
          (n._getDimension = function() {
            return t(this._element).hasClass('width') ? 'width' : 'height';
          }),
          (n._getParent = function() {
            var n,
              i = this;
            a.isElement(this._config.parent)
              ? ((n = this._config.parent), void 0 !== this._config.parent.jquery && (n = this._config.parent[0]))
              : (n = document.querySelector(this._config.parent));
            var r = [].slice.call(
              n.querySelectorAll('[data-toggle="collapse"][data-parent="' + this._config.parent + '"]')
            );
            return (
              t(r).each(function(t, n) {
                i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n]);
              }),
              n
            );
          }),
          (n._addAriaAndCollapsedClass = function(e, n) {
            var i = t(e).hasClass('show');
            n.length &&
              t(n)
                .toggleClass('collapsed', !i)
                .attr('aria-expanded', i);
          }),
          (e._getTargetFromElement = function(e) {
            var t = a.getSelectorFromElement(e);
            return t ? document.querySelector(t) : null;
          }),
          (e._jQueryInterface = function(n) {
            return this.each(function() {
              var i = t(this),
                r = i.data('bs.collapse'),
                o = s({}, w, i.data(), 'object' == typeof n && n ? n : {});
              if (
                (!r && o.toggle && /show|hide/.test(n) && (o.toggle = !1),
                r || ((r = new e(this, o)), i.data('bs.collapse', r)),
                'string' == typeof n)
              ) {
                if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                r[n]();
              }
            });
          }),
          r(e, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.3.1';
              }
            },
            {
              key: 'Default',
              get: function() {
                return w;
              }
            }
          ]),
          e
        );
      })();
    t(document).on('click.bs.collapse.data-api', E.DATA_TOGGLE, function(e) {
      'A' === e.currentTarget.tagName && e.preventDefault();
      var n = t(this),
        i = a.getSelectorFromElement(this),
        r = [].slice.call(document.querySelectorAll(i));
      t(r).each(function() {
        var e = t(this),
          i = e.data('bs.collapse') ? 'toggle' : n.data();
        x._jQueryInterface.call(e, i);
      });
    }),
      (t.fn[_] = x._jQueryInterface),
      (t.fn[_].Constructor = x),
      (t.fn[_].noConflict = function() {
        return (t.fn[_] = b), x._jQueryInterface;
      });
    var C = 'dropdown',
      S = t.fn[C],
      A = new RegExp('38|40|27'),
      D = { offset: 0, flip: !0, boundary: 'scrollParent', reference: 'toggle', display: 'dynamic' },
      N = {
        offset: '(number|string|function)',
        flip: 'boolean',
        boundary: '(string|element)',
        reference: '(string|element)',
        display: 'string'
      },
      k = (function() {
        function e(e, t) {
          (this._element = e),
            (this._popper = null),
            (this._config = this._getConfig(t)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        var i = e.prototype;
        return (
          (i.toggle = function() {
            if (!this._element.disabled && !t(this._element).hasClass('disabled')) {
              var i = e._getParentFromElement(this._element),
                r = t(this._menu).hasClass('show');
              if ((e._clearMenus(), !r)) {
                var o = { relatedTarget: this._element },
                  s = t.Event('show.bs.dropdown', o);
                if ((t(i).trigger(s), !s.isDefaultPrevented())) {
                  if (!this._inNavbar) {
                    if (void 0 === n)
                      throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                    var l = this._element;
                    'parent' === this._config.reference
                      ? (l = i)
                      : a.isElement(this._config.reference) &&
                        ((l = this._config.reference),
                        void 0 !== this._config.reference.jquery && (l = this._config.reference[0])),
                      'scrollParent' !== this._config.boundary && t(i).addClass('position-static'),
                      (this._popper = new n(l, this._menu, this._getPopperConfig()));
                  }
                  'ontouchstart' in document.documentElement &&
                    0 === t(i).closest('.navbar-nav').length &&
                    t(document.body)
                      .children()
                      .on('mouseover', null, t.noop),
                    this._element.focus(),
                    this._element.setAttribute('aria-expanded', !0),
                    t(this._menu).toggleClass('show'),
                    t(i)
                      .toggleClass('show')
                      .trigger(t.Event('shown.bs.dropdown', o));
                }
              }
            }
          }),
          (i.show = function() {
            if (!(this._element.disabled || t(this._element).hasClass('disabled') || t(this._menu).hasClass('show'))) {
              var n = { relatedTarget: this._element },
                i = t.Event('show.bs.dropdown', n),
                r = e._getParentFromElement(this._element);
              t(r).trigger(i),
                i.isDefaultPrevented() ||
                  (t(this._menu).toggleClass('show'),
                  t(r)
                    .toggleClass('show')
                    .trigger(t.Event('shown.bs.dropdown', n)));
            }
          }),
          (i.hide = function() {
            if (!this._element.disabled && !t(this._element).hasClass('disabled') && t(this._menu).hasClass('show')) {
              var n = { relatedTarget: this._element },
                i = t.Event('hide.bs.dropdown', n),
                r = e._getParentFromElement(this._element);
              t(r).trigger(i),
                i.isDefaultPrevented() ||
                  (t(this._menu).toggleClass('show'),
                  t(r)
                    .toggleClass('show')
                    .trigger(t.Event('hidden.bs.dropdown', n)));
            }
          }),
          (i.dispose = function() {
            t.removeData(this._element, 'bs.dropdown'),
              t(this._element).off('.bs.dropdown'),
              (this._element = null),
              (this._menu = null),
              null !== this._popper && (this._popper.destroy(), (this._popper = null));
          }),
          (i.update = function() {
            (this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate();
          }),
          (i._addEventListeners = function() {
            var e = this;
            t(this._element).on('click.bs.dropdown', function(t) {
              t.preventDefault(), t.stopPropagation(), e.toggle();
            });
          }),
          (i._getConfig = function(e) {
            return (
              (e = s({}, this.constructor.Default, t(this._element).data(), e)),
              a.typeCheckConfig(C, e, this.constructor.DefaultType),
              e
            );
          }),
          (i._getMenuElement = function() {
            if (!this._menu) {
              var t = e._getParentFromElement(this._element);
              t && (this._menu = t.querySelector('.dropdown-menu'));
            }
            return this._menu;
          }),
          (i._getPlacement = function() {
            var e = t(this._element.parentNode),
              n = 'bottom-start';
            return (
              e.hasClass('dropup')
                ? ((n = 'top-start'), t(this._menu).hasClass('dropdown-menu-right') && (n = 'top-end'))
                : e.hasClass('dropright')
                ? (n = 'right-start')
                : e.hasClass('dropleft')
                ? (n = 'left-start')
                : t(this._menu).hasClass('dropdown-menu-right') && (n = 'bottom-end'),
              n
            );
          }),
          (i._detectNavbar = function() {
            return t(this._element).closest('.navbar').length > 0;
          }),
          (i._getOffset = function() {
            var e = this,
              t = {};
            return (
              'function' == typeof this._config.offset
                ? (t.fn = function(t) {
                    return (t.offsets = s({}, t.offsets, e._config.offset(t.offsets, e._element) || {})), t;
                  })
                : (t.offset = this._config.offset),
              t
            );
          }),
          (i._getPopperConfig = function() {
            var e = {
              placement: this._getPlacement(),
              modifiers: {
                offset: this._getOffset(),
                flip: { enabled: this._config.flip },
                preventOverflow: { boundariesElement: this._config.boundary }
              }
            };
            return 'static' === this._config.display && (e.modifiers.applyStyle = { enabled: !1 }), e;
          }),
          (e._jQueryInterface = function(n) {
            return this.each(function() {
              var i = t(this).data('bs.dropdown');
              if (
                (i || ((i = new e(this, 'object' == typeof n ? n : null)), t(this).data('bs.dropdown', i)),
                'string' == typeof n)
              ) {
                if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                i[n]();
              }
            });
          }),
          (e._clearMenus = function(n) {
            if (!n || (3 !== n.which && ('keyup' !== n.type || 9 === n.which)))
              for (
                var i = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), r = 0, o = i.length;
                r < o;
                r++
              ) {
                var s = e._getParentFromElement(i[r]),
                  a = t(i[r]).data('bs.dropdown'),
                  l = { relatedTarget: i[r] };
                if ((n && 'click' === n.type && (l.clickEvent = n), a)) {
                  var u = a._menu;
                  if (
                    t(s).hasClass('show') &&
                    !(
                      n &&
                      (('click' === n.type && /input|textarea/i.test(n.target.tagName)) ||
                        ('keyup' === n.type && 9 === n.which)) &&
                      t.contains(s, n.target)
                    )
                  ) {
                    var c = t.Event('hide.bs.dropdown', l);
                    t(s).trigger(c),
                      c.isDefaultPrevented() ||
                        ('ontouchstart' in document.documentElement &&
                          t(document.body)
                            .children()
                            .off('mouseover', null, t.noop),
                        i[r].setAttribute('aria-expanded', 'false'),
                        t(u).removeClass('show'),
                        t(s)
                          .removeClass('show')
                          .trigger(t.Event('hidden.bs.dropdown', l)));
                  }
                }
              }
          }),
          (e._getParentFromElement = function(e) {
            var t,
              n = a.getSelectorFromElement(e);
            return n && (t = document.querySelector(n)), t || e.parentNode;
          }),
          (e._dataApiKeydownHandler = function(n) {
            if (
              (/input|textarea/i.test(n.target.tagName)
                ? !(
                    32 === n.which ||
                    (27 !== n.which &&
                      ((40 !== n.which && 38 !== n.which) || t(n.target).closest('.dropdown-menu').length))
                  )
                : A.test(n.which)) &&
              (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass('disabled'))
            ) {
              var i = e._getParentFromElement(this),
                r = t(i).hasClass('show');
              if (r && (!r || (27 !== n.which && 32 !== n.which))) {
                var o = [].slice.call(
                  i.querySelectorAll('.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)')
                );
                if (0 !== o.length) {
                  var s = o.indexOf(n.target);
                  38 === n.which && s > 0 && s--,
                    40 === n.which && s < o.length - 1 && s++,
                    s < 0 && (s = 0),
                    o[s].focus();
                }
              } else {
                if (27 === n.which) {
                  var a = i.querySelector('[data-toggle="dropdown"]');
                  t(a).trigger('focus');
                }
                t(this).trigger('click');
              }
            }
          }),
          r(e, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.3.1';
              }
            },
            {
              key: 'Default',
              get: function() {
                return D;
              }
            },
            {
              key: 'DefaultType',
              get: function() {
                return N;
              }
            }
          ]),
          e
        );
      })();
    t(document)
      .on('keydown.bs.dropdown.data-api', '[data-toggle="dropdown"]', k._dataApiKeydownHandler)
      .on('keydown.bs.dropdown.data-api', '.dropdown-menu', k._dataApiKeydownHandler)
      .on('click.bs.dropdown.data-api keyup.bs.dropdown.data-api', k._clearMenus)
      .on('click.bs.dropdown.data-api', '[data-toggle="dropdown"]', function(e) {
        e.preventDefault(), e.stopPropagation(), k._jQueryInterface.call(t(this), 'toggle');
      })
      .on('click.bs.dropdown.data-api', '.dropdown form', function(e) {
        e.stopPropagation();
      }),
      (t.fn[C] = k._jQueryInterface),
      (t.fn[C].Constructor = k),
      (t.fn[C].noConflict = function() {
        return (t.fn[C] = S), k._jQueryInterface;
      });
    var I = t.fn.modal,
      j = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
      O = { backdrop: '(boolean|string)', keyboard: 'boolean', focus: 'boolean', show: 'boolean' },
      L = {
        DIALOG: '.modal-dialog',
        MODAL_BODY: '.modal-body',
        DATA_TOGGLE: '[data-toggle="modal"]',
        DATA_DISMISS: '[data-dismiss="modal"]',
        FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
        STICKY_CONTENT: '.sticky-top'
      },
      q = (function() {
        function e(e, t) {
          (this._config = this._getConfig(t)),
            (this._element = e),
            (this._dialog = e.querySelector(L.DIALOG)),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._isTransitioning = !1),
            (this._scrollbarWidth = 0);
        }
        var n = e.prototype;
        return (
          (n.toggle = function(e) {
            return this._isShown ? this.hide() : this.show(e);
          }),
          (n.show = function(e) {
            var n = this;
            if (!this._isShown && !this._isTransitioning) {
              t(this._element).hasClass('fade') && (this._isTransitioning = !0);
              var i = t.Event('show.bs.modal', { relatedTarget: e });
              t(this._element).trigger(i),
                this._isShown ||
                  i.isDefaultPrevented() ||
                  ((this._isShown = !0),
                  this._checkScrollbar(),
                  this._setScrollbar(),
                  this._adjustDialog(),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  t(this._element).on('click.dismiss.bs.modal', L.DATA_DISMISS, function(e) {
                    return n.hide(e);
                  }),
                  t(this._dialog).on('mousedown.dismiss.bs.modal', function() {
                    t(n._element).one('mouseup.dismiss.bs.modal', function(e) {
                      t(e.target).is(n._element) && (n._ignoreBackdropClick = !0);
                    });
                  }),
                  this._showBackdrop(function() {
                    return n._showElement(e);
                  }));
            }
          }),
          (n.hide = function(e) {
            var n = this;
            if ((e && e.preventDefault(), this._isShown && !this._isTransitioning)) {
              var i = t.Event('hide.bs.modal');
              if ((t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented())) {
                this._isShown = !1;
                var r = t(this._element).hasClass('fade');
                if (
                  (r && (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  t(document).off('focusin.bs.modal'),
                  t(this._element).removeClass('show'),
                  t(this._element).off('click.dismiss.bs.modal'),
                  t(this._dialog).off('mousedown.dismiss.bs.modal'),
                  r)
                ) {
                  var o = a.getTransitionDurationFromElement(this._element);
                  t(this._element)
                    .one(a.TRANSITION_END, function(e) {
                      return n._hideModal(e);
                    })
                    .emulateTransitionEnd(o);
                } else this._hideModal();
              }
            }
          }),
          (n.dispose = function() {
            [window, this._element, this._dialog].forEach(function(e) {
              return t(e).off('.bs.modal');
            }),
              t(document).off('focusin.bs.modal'),
              t.removeData(this._element, 'bs.modal'),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._isTransitioning = null),
              (this._scrollbarWidth = null);
          }),
          (n.handleUpdate = function() {
            this._adjustDialog();
          }),
          (n._getConfig = function(e) {
            return (e = s({}, j, e)), a.typeCheckConfig('modal', e, O), e;
          }),
          (n._showElement = function(e) {
            var n = this,
              i = t(this._element).hasClass('fade');
            (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = 'block'),
              this._element.removeAttribute('aria-hidden'),
              this._element.setAttribute('aria-modal', !0),
              t(this._dialog).hasClass('modal-dialog-scrollable')
                ? (this._dialog.querySelector(L.MODAL_BODY).scrollTop = 0)
                : (this._element.scrollTop = 0),
              i && a.reflow(this._element),
              t(this._element).addClass('show'),
              this._config.focus && this._enforceFocus();
            var r = t.Event('shown.bs.modal', { relatedTarget: e }),
              o = function() {
                n._config.focus && n._element.focus(), (n._isTransitioning = !1), t(n._element).trigger(r);
              };
            if (i) {
              var s = a.getTransitionDurationFromElement(this._dialog);
              t(this._dialog)
                .one(a.TRANSITION_END, o)
                .emulateTransitionEnd(s);
            } else o();
          }),
          (n._enforceFocus = function() {
            var e = this;
            t(document)
              .off('focusin.bs.modal')
              .on('focusin.bs.modal', function(n) {
                document !== n.target &&
                  e._element !== n.target &&
                  0 === t(e._element).has(n.target).length &&
                  e._element.focus();
              });
          }),
          (n._setEscapeEvent = function() {
            var e = this;
            this._isShown && this._config.keyboard
              ? t(this._element).on('keydown.dismiss.bs.modal', function(t) {
                  27 === t.which && (t.preventDefault(), e.hide());
                })
              : this._isShown || t(this._element).off('keydown.dismiss.bs.modal');
          }),
          (n._setResizeEvent = function() {
            var e = this;
            this._isShown
              ? t(window).on('resize.bs.modal', function(t) {
                  return e.handleUpdate(t);
                })
              : t(window).off('resize.bs.modal');
          }),
          (n._hideModal = function() {
            var e = this;
            (this._element.style.display = 'none'),
              this._element.setAttribute('aria-hidden', !0),
              this._element.removeAttribute('aria-modal'),
              (this._isTransitioning = !1),
              this._showBackdrop(function() {
                t(document.body).removeClass('modal-open'),
                  e._resetAdjustments(),
                  e._resetScrollbar(),
                  t(e._element).trigger('hidden.bs.modal');
              });
          }),
          (n._removeBackdrop = function() {
            this._backdrop && (t(this._backdrop).remove(), (this._backdrop = null));
          }),
          (n._showBackdrop = function(e) {
            var n = this,
              i = t(this._element).hasClass('fade') ? 'fade' : '';
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement('div')),
                (this._backdrop.className = 'modal-backdrop'),
                i && this._backdrop.classList.add(i),
                t(this._backdrop).appendTo(document.body),
                t(this._element).on('click.dismiss.bs.modal', function(e) {
                  n._ignoreBackdropClick
                    ? (n._ignoreBackdropClick = !1)
                    : e.target === e.currentTarget && ('static' === n._config.backdrop ? n._element.focus() : n.hide());
                }),
                i && a.reflow(this._backdrop),
                t(this._backdrop).addClass('show'),
                !e)
              )
                return;
              if (!i) return void e();
              var r = a.getTransitionDurationFromElement(this._backdrop);
              t(this._backdrop)
                .one(a.TRANSITION_END, e)
                .emulateTransitionEnd(r);
            } else if (!this._isShown && this._backdrop) {
              t(this._backdrop).removeClass('show');
              var o = function() {
                n._removeBackdrop(), e && e();
              };
              if (t(this._element).hasClass('fade')) {
                var s = a.getTransitionDurationFromElement(this._backdrop);
                t(this._backdrop)
                  .one(a.TRANSITION_END, o)
                  .emulateTransitionEnd(s);
              } else o();
            } else e && e();
          }),
          (n._adjustDialog = function() {
            var e = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + 'px'),
              this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + 'px');
          }),
          (n._resetAdjustments = function() {
            (this._element.style.paddingLeft = ''), (this._element.style.paddingRight = '');
          }),
          (n._checkScrollbar = function() {
            var e = document.body.getBoundingClientRect();
            (this._isBodyOverflowing = e.left + e.right < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (n._setScrollbar = function() {
            var e = this;
            if (this._isBodyOverflowing) {
              var n = [].slice.call(document.querySelectorAll(L.FIXED_CONTENT)),
                i = [].slice.call(document.querySelectorAll(L.STICKY_CONTENT));
              t(n).each(function(n, i) {
                var r = i.style.paddingRight,
                  o = t(i).css('padding-right');
                t(i)
                  .data('padding-right', r)
                  .css('padding-right', parseFloat(o) + e._scrollbarWidth + 'px');
              }),
                t(i).each(function(n, i) {
                  var r = i.style.marginRight,
                    o = t(i).css('margin-right');
                  t(i)
                    .data('margin-right', r)
                    .css('margin-right', parseFloat(o) - e._scrollbarWidth + 'px');
                });
              var r = document.body.style.paddingRight,
                o = t(document.body).css('padding-right');
              t(document.body)
                .data('padding-right', r)
                .css('padding-right', parseFloat(o) + this._scrollbarWidth + 'px');
            }
            t(document.body).addClass('modal-open');
          }),
          (n._resetScrollbar = function() {
            var e = [].slice.call(document.querySelectorAll(L.FIXED_CONTENT));
            t(e).each(function(e, n) {
              var i = t(n).data('padding-right');
              t(n).removeData('padding-right'), (n.style.paddingRight = i || '');
            });
            var n = [].slice.call(document.querySelectorAll('' + L.STICKY_CONTENT));
            t(n).each(function(e, n) {
              var i = t(n).data('margin-right');
              void 0 !== i &&
                t(n)
                  .css('margin-right', i)
                  .removeData('margin-right');
            });
            var i = t(document.body).data('padding-right');
            t(document.body).removeData('padding-right'), (document.body.style.paddingRight = i || '');
          }),
          (n._getScrollbarWidth = function() {
            var e = document.createElement('div');
            (e.className = 'modal-scrollbar-measure'), document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e), t;
          }),
          (e._jQueryInterface = function(n, i) {
            return this.each(function() {
              var r = t(this).data('bs.modal'),
                o = s({}, j, t(this).data(), 'object' == typeof n && n ? n : {});
              if ((r || ((r = new e(this, o)), t(this).data('bs.modal', r)), 'string' == typeof n)) {
                if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                r[n](i);
              } else o.show && r.show(i);
            });
          }),
          r(e, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.3.1';
              }
            },
            {
              key: 'Default',
              get: function() {
                return j;
              }
            }
          ]),
          e
        );
      })();
    t(document).on('click.bs.modal.data-api', L.DATA_TOGGLE, function(e) {
      var n,
        i = this,
        r = a.getSelectorFromElement(this);
      r && (n = document.querySelector(r));
      var o = t(n).data('bs.modal') ? 'toggle' : s({}, t(n).data(), t(this).data());
      ('A' !== this.tagName && 'AREA' !== this.tagName) || e.preventDefault();
      var l = t(n).one('show.bs.modal', function(e) {
        e.isDefaultPrevented() ||
          l.one('hidden.bs.modal', function() {
            t(i).is(':visible') && i.focus();
          });
      });
      q._jQueryInterface.call(t(n), o, this);
    }),
      (t.fn.modal = q._jQueryInterface),
      (t.fn.modal.Constructor = q),
      (t.fn.modal.noConflict = function() {
        return (t.fn.modal = I), q._jQueryInterface;
      });
    var P = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'],
      R = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
      H = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
    function M(e, t, n) {
      if (0 === e.length) return e;
      if (n && 'function' == typeof n) return n(e);
      for (
        var i = new window.DOMParser().parseFromString(e, 'text/html'),
          r = Object.keys(t),
          o = [].slice.call(i.body.querySelectorAll('*')),
          s = function(e, n) {
            var i = o[e],
              s = i.nodeName.toLowerCase();
            if (-1 === r.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), 'continue';
            var a = [].slice.call(i.attributes),
              l = [].concat(t['*'] || [], t[s] || []);
            a.forEach(function(e) {
              (function(e, t) {
                var n = e.nodeName.toLowerCase();
                if (-1 !== t.indexOf(n))
                  return -1 === P.indexOf(n) || Boolean(e.nodeValue.match(R) || e.nodeValue.match(H));
                for (
                  var i = t.filter(function(e) {
                      return e instanceof RegExp;
                    }),
                    r = 0,
                    o = i.length;
                  r < o;
                  r++
                )
                  if (n.match(i[r])) return !0;
                return !1;
              })(e, l) || i.removeAttribute(e.nodeName);
            });
          },
          a = 0,
          l = o.length;
        a < l;
        a++
      )
        s(a);
      return i.body.innerHTML;
    }
    var F = t.fn.tooltip,
      B = new RegExp('(^|\\s)bs-tooltip\\S+', 'g'),
      W = ['sanitize', 'whiteList', 'sanitizeFn'],
      U = {
        animation: 'boolean',
        template: 'string',
        title: '(string|element|function)',
        trigger: 'string',
        delay: '(number|object)',
        html: 'boolean',
        selector: '(string|boolean)',
        placement: '(string|function)',
        offset: '(number|string|function)',
        container: '(string|element|boolean)',
        fallbackPlacement: '(string|array)',
        boundary: '(string|element)',
        sanitize: 'boolean',
        sanitizeFn: '(null|function)',
        whiteList: 'object'
      },
      V = { AUTO: 'auto', TOP: 'top', RIGHT: 'right', BOTTOM: 'bottom', LEFT: 'left' },
      $ = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: !1,
        selector: !1,
        placement: 'top',
        offset: 0,
        container: !1,
        fallbackPlacement: 'flip',
        boundary: 'scrollParent',
        sanitize: !0,
        sanitizeFn: null,
        whiteList: {
          '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
          a: ['target', 'href', 'title', 'rel'],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ['src', 'alt', 'title', 'width', 'height'],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: []
        }
      },
      Q = {
        HIDE: 'hide.bs.tooltip',
        HIDDEN: 'hidden.bs.tooltip',
        SHOW: 'show.bs.tooltip',
        SHOWN: 'shown.bs.tooltip',
        INSERTED: 'inserted.bs.tooltip',
        CLICK: 'click.bs.tooltip',
        FOCUSIN: 'focusin.bs.tooltip',
        FOCUSOUT: 'focusout.bs.tooltip',
        MOUSEENTER: 'mouseenter.bs.tooltip',
        MOUSELEAVE: 'mouseleave.bs.tooltip'
      },
      z = (function() {
        function e(e, t) {
          if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
          (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ''),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.element = e),
            (this.config = this._getConfig(t)),
            (this.tip = null),
            this._setListeners();
        }
        var i = e.prototype;
        return (
          (i.enable = function() {
            this._isEnabled = !0;
          }),
          (i.disable = function() {
            this._isEnabled = !1;
          }),
          (i.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled;
          }),
          (i.toggle = function(e) {
            if (this._isEnabled)
              if (e) {
                var n = this.constructor.DATA_KEY,
                  i = t(e.currentTarget).data(n);
                i ||
                  ((i = new this.constructor(e.currentTarget, this._getDelegateConfig())),
                  t(e.currentTarget).data(n, i)),
                  (i._activeTrigger.click = !i._activeTrigger.click),
                  i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
              } else {
                if (t(this.getTipElement()).hasClass('show')) return void this._leave(null, this);
                this._enter(null, this);
              }
          }),
          (i.dispose = function() {
            clearTimeout(this._timeout),
              t.removeData(this.element, this.constructor.DATA_KEY),
              t(this.element).off(this.constructor.EVENT_KEY),
              t(this.element)
                .closest('.modal')
                .off('hide.bs.modal'),
              this.tip && t(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null),
              null !== this._popper && this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null);
          }),
          (i.show = function() {
            var e = this;
            if ('none' === t(this.element).css('display')) throw new Error('Please use show on visible elements');
            var i = t.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              t(this.element).trigger(i);
              var r = a.findShadowRoot(this.element),
                o = t.contains(null !== r ? r : this.element.ownerDocument.documentElement, this.element);
              if (i.isDefaultPrevented() || !o) return;
              var s = this.getTipElement(),
                l = a.getUID(this.constructor.NAME);
              s.setAttribute('id', l),
                this.element.setAttribute('aria-describedby', l),
                this.setContent(),
                this.config.animation && t(s).addClass('fade');
              var u =
                  'function' == typeof this.config.placement
                    ? this.config.placement.call(this, s, this.element)
                    : this.config.placement,
                c = this._getAttachment(u);
              this.addAttachmentClass(c);
              var f = this._getContainer();
              t(s).data(this.constructor.DATA_KEY, this),
                t.contains(this.element.ownerDocument.documentElement, this.tip) || t(s).appendTo(f),
                t(this.element).trigger(this.constructor.Event.INSERTED),
                (this._popper = new n(this.element, s, {
                  placement: c,
                  modifiers: {
                    offset: this._getOffset(),
                    flip: { behavior: this.config.fallbackPlacement },
                    arrow: { element: '.arrow' },
                    preventOverflow: { boundariesElement: this.config.boundary }
                  },
                  onCreate: function(t) {
                    t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
                  },
                  onUpdate: function(t) {
                    return e._handlePopperPlacementChange(t);
                  }
                })),
                t(s).addClass('show'),
                'ontouchstart' in document.documentElement &&
                  t(document.body)
                    .children()
                    .on('mouseover', null, t.noop);
              var h = function() {
                e.config.animation && e._fixTransition();
                var n = e._hoverState;
                (e._hoverState = null),
                  t(e.element).trigger(e.constructor.Event.SHOWN),
                  'out' === n && e._leave(null, e);
              };
              if (t(this.tip).hasClass('fade')) {
                var d = a.getTransitionDurationFromElement(this.tip);
                t(this.tip)
                  .one(a.TRANSITION_END, h)
                  .emulateTransitionEnd(d);
              } else h();
            }
          }),
          (i.hide = function(e) {
            var n = this,
              i = this.getTipElement(),
              r = t.Event(this.constructor.Event.HIDE),
              o = function() {
                'show' !== n._hoverState && i.parentNode && i.parentNode.removeChild(i),
                  n._cleanTipClass(),
                  n.element.removeAttribute('aria-describedby'),
                  t(n.element).trigger(n.constructor.Event.HIDDEN),
                  null !== n._popper && n._popper.destroy(),
                  e && e();
              };
            if ((t(this.element).trigger(r), !r.isDefaultPrevented())) {
              if (
                (t(i).removeClass('show'),
                'ontouchstart' in document.documentElement &&
                  t(document.body)
                    .children()
                    .off('mouseover', null, t.noop),
                (this._activeTrigger.click = !1),
                (this._activeTrigger.focus = !1),
                (this._activeTrigger.hover = !1),
                t(this.tip).hasClass('fade'))
              ) {
                var s = a.getTransitionDurationFromElement(i);
                t(i)
                  .one(a.TRANSITION_END, o)
                  .emulateTransitionEnd(s);
              } else o();
              this._hoverState = '';
            }
          }),
          (i.update = function() {
            null !== this._popper && this._popper.scheduleUpdate();
          }),
          (i.isWithContent = function() {
            return Boolean(this.getTitle());
          }),
          (i.addAttachmentClass = function(e) {
            t(this.getTipElement()).addClass('bs-tooltip-' + e);
          }),
          (i.getTipElement = function() {
            return (this.tip = this.tip || t(this.config.template)[0]), this.tip;
          }),
          (i.setContent = function() {
            var e = this.getTipElement();
            this.setElementContent(t(e.querySelectorAll('.tooltip-inner')), this.getTitle()),
              t(e).removeClass('fade show');
          }),
          (i.setElementContent = function(e, n) {
            'object' != typeof n || (!n.nodeType && !n.jquery)
              ? this.config.html
                ? (this.config.sanitize && (n = M(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n))
                : e.text(n)
              : this.config.html
              ? t(n)
                  .parent()
                  .is(e) || e.empty().append(n)
              : e.text(t(n).text());
          }),
          (i.getTitle = function() {
            var e = this.element.getAttribute('data-original-title');
            return (
              e ||
                (e = 'function' == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
              e
            );
          }),
          (i._getOffset = function() {
            var e = this,
              t = {};
            return (
              'function' == typeof this.config.offset
                ? (t.fn = function(t) {
                    return (t.offsets = s({}, t.offsets, e.config.offset(t.offsets, e.element) || {})), t;
                  })
                : (t.offset = this.config.offset),
              t
            );
          }),
          (i._getContainer = function() {
            return !1 === this.config.container
              ? document.body
              : a.isElement(this.config.container)
              ? t(this.config.container)
              : t(document).find(this.config.container);
          }),
          (i._getAttachment = function(e) {
            return V[e.toUpperCase()];
          }),
          (i._setListeners = function() {
            var e = this;
            this.config.trigger.split(' ').forEach(function(n) {
              if ('click' === n)
                t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                  return e.toggle(t);
                });
              else if ('manual' !== n) {
                var i = 'hover' === n ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                  r = 'hover' === n ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                t(e.element)
                  .on(i, e.config.selector, function(t) {
                    return e._enter(t);
                  })
                  .on(r, e.config.selector, function(t) {
                    return e._leave(t);
                  });
              }
            }),
              t(this.element)
                .closest('.modal')
                .on('hide.bs.modal', function() {
                  e.element && e.hide();
                }),
              this.config.selector
                ? (this.config = s({}, this.config, { trigger: 'manual', selector: '' }))
                : this._fixTitle();
          }),
          (i._fixTitle = function() {
            var e = typeof this.element.getAttribute('data-original-title');
            (this.element.getAttribute('title') || 'string' !== e) &&
              (this.element.setAttribute('data-original-title', this.element.getAttribute('title') || ''),
              this.element.setAttribute('title', ''));
          }),
          (i._enter = function(e, n) {
            var i = this.constructor.DATA_KEY;
            (n = n || t(e.currentTarget).data(i)) ||
              ((n = new this.constructor(e.currentTarget, this._getDelegateConfig())), t(e.currentTarget).data(i, n)),
              e && (n._activeTrigger['focusin' === e.type ? 'focus' : 'hover'] = !0),
              t(n.getTipElement()).hasClass('show') || 'show' === n._hoverState
                ? (n._hoverState = 'show')
                : (clearTimeout(n._timeout),
                  (n._hoverState = 'show'),
                  n.config.delay && n.config.delay.show
                    ? (n._timeout = setTimeout(function() {
                        'show' === n._hoverState && n.show();
                      }, n.config.delay.show))
                    : n.show());
          }),
          (i._leave = function(e, n) {
            var i = this.constructor.DATA_KEY;
            (n = n || t(e.currentTarget).data(i)) ||
              ((n = new this.constructor(e.currentTarget, this._getDelegateConfig())), t(e.currentTarget).data(i, n)),
              e && (n._activeTrigger['focusout' === e.type ? 'focus' : 'hover'] = !1),
              n._isWithActiveTrigger() ||
                (clearTimeout(n._timeout),
                (n._hoverState = 'out'),
                n.config.delay && n.config.delay.hide
                  ? (n._timeout = setTimeout(function() {
                      'out' === n._hoverState && n.hide();
                    }, n.config.delay.hide))
                  : n.hide());
          }),
          (i._isWithActiveTrigger = function() {
            for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
            return !1;
          }),
          (i._getConfig = function(e) {
            var n = t(this.element).data();
            return (
              Object.keys(n).forEach(function(e) {
                -1 !== W.indexOf(e) && delete n[e];
              }),
              'number' == typeof (e = s({}, this.constructor.Default, n, 'object' == typeof e && e ? e : {})).delay &&
                (e.delay = { show: e.delay, hide: e.delay }),
              'number' == typeof e.title && (e.title = e.title.toString()),
              'number' == typeof e.content && (e.content = e.content.toString()),
              a.typeCheckConfig('tooltip', e, this.constructor.DefaultType),
              e.sanitize && (e.template = M(e.template, e.whiteList, e.sanitizeFn)),
              e
            );
          }),
          (i._getDelegateConfig = function() {
            var e = {};
            if (this.config)
              for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
            return e;
          }),
          (i._cleanTipClass = function() {
            var e = t(this.getTipElement()),
              n = e.attr('class').match(B);
            null !== n && n.length && e.removeClass(n.join(''));
          }),
          (i._handlePopperPlacementChange = function(e) {
            (this.tip = e.instance.popper),
              this._cleanTipClass(),
              this.addAttachmentClass(this._getAttachment(e.placement));
          }),
          (i._fixTransition = function() {
            var e = this.getTipElement(),
              n = this.config.animation;
            null === e.getAttribute('x-placement') &&
              (t(e).removeClass('fade'),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = n));
          }),
          (e._jQueryInterface = function(n) {
            return this.each(function() {
              var i = t(this).data('bs.tooltip'),
                r = 'object' == typeof n && n;
              if (
                (i || !/dispose|hide/.test(n)) &&
                (i || ((i = new e(this, r)), t(this).data('bs.tooltip', i)), 'string' == typeof n)
              ) {
                if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                i[n]();
              }
            });
          }),
          r(e, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.3.1';
              }
            },
            {
              key: 'Default',
              get: function() {
                return $;
              }
            },
            {
              key: 'NAME',
              get: function() {
                return 'tooltip';
              }
            },
            {
              key: 'DATA_KEY',
              get: function() {
                return 'bs.tooltip';
              }
            },
            {
              key: 'Event',
              get: function() {
                return Q;
              }
            },
            {
              key: 'EVENT_KEY',
              get: function() {
                return '.bs.tooltip';
              }
            },
            {
              key: 'DefaultType',
              get: function() {
                return U;
              }
            }
          ]),
          e
        );
      })();
    (t.fn.tooltip = z._jQueryInterface),
      (t.fn.tooltip.Constructor = z),
      (t.fn.tooltip.noConflict = function() {
        return (t.fn.tooltip = F), z._jQueryInterface;
      });
    var X = t.fn.popover,
      G = new RegExp('(^|\\s)bs-popover\\S+', 'g'),
      Y = s({}, z.Default, {
        placement: 'right',
        trigger: 'click',
        content: '',
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
      }),
      K = s({}, z.DefaultType, { content: '(string|element|function)' }),
      J = {
        HIDE: 'hide.bs.popover',
        HIDDEN: 'hidden.bs.popover',
        SHOW: 'show.bs.popover',
        SHOWN: 'shown.bs.popover',
        INSERTED: 'inserted.bs.popover',
        CLICK: 'click.bs.popover',
        FOCUSIN: 'focusin.bs.popover',
        FOCUSOUT: 'focusout.bs.popover',
        MOUSEENTER: 'mouseenter.bs.popover',
        MOUSELEAVE: 'mouseleave.bs.popover'
      },
      Z = (function(e) {
        var n, i;
        function o() {
          return e.apply(this, arguments) || this;
        }
        (i = e), ((n = o).prototype = Object.create(i.prototype)), (n.prototype.constructor = n), (n.__proto__ = i);
        var s = o.prototype;
        return (
          (s.isWithContent = function() {
            return this.getTitle() || this._getContent();
          }),
          (s.addAttachmentClass = function(e) {
            t(this.getTipElement()).addClass('bs-popover-' + e);
          }),
          (s.getTipElement = function() {
            return (this.tip = this.tip || t(this.config.template)[0]), this.tip;
          }),
          (s.setContent = function() {
            var e = t(this.getTipElement());
            this.setElementContent(e.find('.popover-header'), this.getTitle());
            var n = this._getContent();
            'function' == typeof n && (n = n.call(this.element)),
              this.setElementContent(e.find('.popover-body'), n),
              e.removeClass('fade show');
          }),
          (s._getContent = function() {
            return this.element.getAttribute('data-content') || this.config.content;
          }),
          (s._cleanTipClass = function() {
            var e = t(this.getTipElement()),
              n = e.attr('class').match(G);
            null !== n && n.length > 0 && e.removeClass(n.join(''));
          }),
          (o._jQueryInterface = function(e) {
            return this.each(function() {
              var n = t(this).data('bs.popover'),
                i = 'object' == typeof e ? e : null;
              if (
                (n || !/dispose|hide/.test(e)) &&
                (n || ((n = new o(this, i)), t(this).data('bs.popover', n)), 'string' == typeof e)
              ) {
                if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                n[e]();
              }
            });
          }),
          r(o, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.3.1';
              }
            },
            {
              key: 'Default',
              get: function() {
                return Y;
              }
            },
            {
              key: 'NAME',
              get: function() {
                return 'popover';
              }
            },
            {
              key: 'DATA_KEY',
              get: function() {
                return 'bs.popover';
              }
            },
            {
              key: 'Event',
              get: function() {
                return J;
              }
            },
            {
              key: 'EVENT_KEY',
              get: function() {
                return '.bs.popover';
              }
            },
            {
              key: 'DefaultType',
              get: function() {
                return K;
              }
            }
          ]),
          o
        );
      })(z);
    (t.fn.popover = Z._jQueryInterface),
      (t.fn.popover.Constructor = Z),
      (t.fn.popover.noConflict = function() {
        return (t.fn.popover = X), Z._jQueryInterface;
      });
    var ee = 'scrollspy',
      te = t.fn[ee],
      ne = { offset: 10, method: 'auto', target: '' },
      ie = { offset: 'number', method: 'string', target: '(string|element)' },
      re = {
        ACTIVATE: 'activate.bs.scrollspy',
        SCROLL: 'scroll.bs.scrollspy',
        LOAD_DATA_API: 'load.bs.scrollspy.data-api'
      },
      oe = {
        DATA_SPY: '[data-spy="scroll"]',
        ACTIVE: '.active',
        NAV_LIST_GROUP: '.nav, .list-group',
        NAV_LINKS: '.nav-link',
        NAV_ITEMS: '.nav-item',
        LIST_ITEMS: '.list-group-item',
        DROPDOWN: '.dropdown',
        DROPDOWN_ITEMS: '.dropdown-item',
        DROPDOWN_TOGGLE: '.dropdown-toggle'
      },
      se = (function() {
        function e(e, n) {
          var i = this;
          (this._element = e),
            (this._scrollElement = 'BODY' === e.tagName ? window : e),
            (this._config = this._getConfig(n)),
            (this._selector =
              this._config.target +
              ' ' +
              oe.NAV_LINKS +
              ',' +
              this._config.target +
              ' ' +
              oe.LIST_ITEMS +
              ',' +
              this._config.target +
              ' ' +
              oe.DROPDOWN_ITEMS),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            t(this._scrollElement).on(re.SCROLL, function(e) {
              return i._process(e);
            }),
            this.refresh(),
            this._process();
        }
        var n = e.prototype;
        return (
          (n.refresh = function() {
            var e = this,
              n =
                'auto' === this._config.method
                  ? this._scrollElement === this._scrollElement.window
                    ? 'offset'
                    : 'position'
                  : this._config.method,
              i = 'position' === n ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              [].slice
                .call(document.querySelectorAll(this._selector))
                .map(function(e) {
                  var r,
                    o = a.getSelectorFromElement(e);
                  if ((o && (r = document.querySelector(o)), r)) {
                    var s = r.getBoundingClientRect();
                    if (s.width || s.height) return [t(r)[n]().top + i, o];
                  }
                  return null;
                })
                .filter(function(e) {
                  return e;
                })
                .sort(function(e, t) {
                  return e[0] - t[0];
                })
                .forEach(function(t) {
                  e._offsets.push(t[0]), e._targets.push(t[1]);
                });
          }),
          (n.dispose = function() {
            t.removeData(this._element, 'bs.scrollspy'),
              t(this._scrollElement).off('.bs.scrollspy'),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (n._getConfig = function(e) {
            if ('string' != typeof (e = s({}, ne, 'object' == typeof e && e ? e : {})).target) {
              var n = t(e.target).attr('id');
              n || ((n = a.getUID(ee)), t(e.target).attr('id', n)), (e.target = '#' + n);
            }
            return a.typeCheckConfig(ee, e, ie), e;
          }),
          (n._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
          }),
          (n._getScrollHeight = function() {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            );
          }),
          (n._getOffsetHeight = function() {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (n._process = function() {
            var e = this._getScrollTop() + this._config.offset,
              t = this._getScrollHeight(),
              n = this._config.offset + t - this._getOffsetHeight();
            if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
              var i = this._targets[this._targets.length - 1];
              this._activeTarget !== i && this._activate(i);
            } else {
              if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0)
                return (this._activeTarget = null), void this._clear();
              for (var r = this._offsets.length; r--; )
                this._activeTarget !== this._targets[r] &&
                  e >= this._offsets[r] &&
                  (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) &&
                  this._activate(this._targets[r]);
            }
          }),
          (n._activate = function(e) {
            (this._activeTarget = e), this._clear();
            var n = this._selector.split(',').map(function(t) {
                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
              }),
              i = t([].slice.call(document.querySelectorAll(n.join(','))));
            i.hasClass('dropdown-item')
              ? (i
                  .closest(oe.DROPDOWN)
                  .find(oe.DROPDOWN_TOGGLE)
                  .addClass('active'),
                i.addClass('active'))
              : (i.addClass('active'),
                i
                  .parents(oe.NAV_LIST_GROUP)
                  .prev(oe.NAV_LINKS + ', ' + oe.LIST_ITEMS)
                  .addClass('active'),
                i
                  .parents(oe.NAV_LIST_GROUP)
                  .prev(oe.NAV_ITEMS)
                  .children(oe.NAV_LINKS)
                  .addClass('active')),
              t(this._scrollElement).trigger(re.ACTIVATE, { relatedTarget: e });
          }),
          (n._clear = function() {
            [].slice
              .call(document.querySelectorAll(this._selector))
              .filter(function(e) {
                return e.classList.contains('active');
              })
              .forEach(function(e) {
                return e.classList.remove('active');
              });
          }),
          (e._jQueryInterface = function(n) {
            return this.each(function() {
              var i = t(this).data('bs.scrollspy');
              if (
                (i || ((i = new e(this, 'object' == typeof n && n)), t(this).data('bs.scrollspy', i)),
                'string' == typeof n)
              ) {
                if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                i[n]();
              }
            });
          }),
          r(e, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.3.1';
              }
            },
            {
              key: 'Default',
              get: function() {
                return ne;
              }
            }
          ]),
          e
        );
      })();
    t(window).on(re.LOAD_DATA_API, function() {
      for (var e = [].slice.call(document.querySelectorAll(oe.DATA_SPY)), n = e.length; n--; ) {
        var i = t(e[n]);
        se._jQueryInterface.call(i, i.data());
      }
    }),
      (t.fn[ee] = se._jQueryInterface),
      (t.fn[ee].Constructor = se),
      (t.fn[ee].noConflict = function() {
        return (t.fn[ee] = te), se._jQueryInterface;
      });
    var ae = t.fn.tab,
      le = (function() {
        function e(e) {
          this._element = e;
        }
        var n = e.prototype;
        return (
          (n.show = function() {
            var e = this;
            if (
              !(
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                  t(this._element).hasClass('active')) ||
                t(this._element).hasClass('disabled')
              )
            ) {
              var n,
                i,
                r = t(this._element).closest('.nav, .list-group')[0],
                o = a.getSelectorFromElement(this._element);
              if (r) {
                var s = 'UL' === r.nodeName || 'OL' === r.nodeName ? '> li > .active' : '.active';
                i = (i = t.makeArray(t(r).find(s)))[i.length - 1];
              }
              var l = t.Event('hide.bs.tab', { relatedTarget: this._element }),
                u = t.Event('show.bs.tab', { relatedTarget: i });
              if (
                (i && t(i).trigger(l), t(this._element).trigger(u), !u.isDefaultPrevented() && !l.isDefaultPrevented())
              ) {
                o && (n = document.querySelector(o)), this._activate(this._element, r);
                var c = function() {
                  var n = t.Event('hidden.bs.tab', { relatedTarget: e._element }),
                    r = t.Event('shown.bs.tab', { relatedTarget: i });
                  t(i).trigger(n), t(e._element).trigger(r);
                };
                n ? this._activate(n, n.parentNode, c) : c();
              }
            }
          }),
          (n.dispose = function() {
            t.removeData(this._element, 'bs.tab'), (this._element = null);
          }),
          (n._activate = function(e, n, i) {
            var r = this,
              o = (!n || ('UL' !== n.nodeName && 'OL' !== n.nodeName)
                ? t(n).children('.active')
                : t(n).find('> li > .active'))[0],
              s = i && o && t(o).hasClass('fade'),
              l = function() {
                return r._transitionComplete(e, o, i);
              };
            if (o && s) {
              var u = a.getTransitionDurationFromElement(o);
              t(o)
                .removeClass('show')
                .one(a.TRANSITION_END, l)
                .emulateTransitionEnd(u);
            } else l();
          }),
          (n._transitionComplete = function(e, n, i) {
            if (n) {
              t(n).removeClass('active');
              var r = t(n.parentNode).find('> .dropdown-menu .active')[0];
              r && t(r).removeClass('active'), 'tab' === n.getAttribute('role') && n.setAttribute('aria-selected', !1);
            }
            if (
              (t(e).addClass('active'),
              'tab' === e.getAttribute('role') && e.setAttribute('aria-selected', !0),
              a.reflow(e),
              e.classList.contains('fade') && e.classList.add('show'),
              e.parentNode && t(e.parentNode).hasClass('dropdown-menu'))
            ) {
              var o = t(e).closest('.dropdown')[0];
              if (o) {
                var s = [].slice.call(o.querySelectorAll('.dropdown-toggle'));
                t(s).addClass('active');
              }
              e.setAttribute('aria-expanded', !0);
            }
            i && i();
          }),
          (e._jQueryInterface = function(n) {
            return this.each(function() {
              var i = t(this),
                r = i.data('bs.tab');
              if ((r || ((r = new e(this)), i.data('bs.tab', r)), 'string' == typeof n)) {
                if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                r[n]();
              }
            });
          }),
          r(e, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.3.1';
              }
            }
          ]),
          e
        );
      })();
    t(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(
      e
    ) {
      e.preventDefault(), le._jQueryInterface.call(t(this), 'show');
    }),
      (t.fn.tab = le._jQueryInterface),
      (t.fn.tab.Constructor = le),
      (t.fn.tab.noConflict = function() {
        return (t.fn.tab = ae), le._jQueryInterface;
      });
    var ue = t.fn.toast,
      ce = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
      fe = { animation: !0, autohide: !0, delay: 500 },
      he = (function() {
        function e(e, t) {
          (this._element = e), (this._config = this._getConfig(t)), (this._timeout = null), this._setListeners();
        }
        var n = e.prototype;
        return (
          (n.show = function() {
            var e = this;
            t(this._element).trigger('show.bs.toast'), this._config.animation && this._element.classList.add('fade');
            var n = function() {
              e._element.classList.remove('showing'),
                e._element.classList.add('show'),
                t(e._element).trigger('shown.bs.toast'),
                e._config.autohide && e.hide();
            };
            if (
              (this._element.classList.remove('hide'), this._element.classList.add('showing'), this._config.animation)
            ) {
              var i = a.getTransitionDurationFromElement(this._element);
              t(this._element)
                .one(a.TRANSITION_END, n)
                .emulateTransitionEnd(i);
            } else n();
          }),
          (n.hide = function(e) {
            var n = this;
            this._element.classList.contains('show') &&
              (t(this._element).trigger('hide.bs.toast'),
              e
                ? this._close()
                : (this._timeout = setTimeout(function() {
                    n._close();
                  }, this._config.delay)));
          }),
          (n.dispose = function() {
            clearTimeout(this._timeout),
              (this._timeout = null),
              this._element.classList.contains('show') && this._element.classList.remove('show'),
              t(this._element).off('click.dismiss.bs.toast'),
              t.removeData(this._element, 'bs.toast'),
              (this._element = null),
              (this._config = null);
          }),
          (n._getConfig = function(e) {
            return (
              (e = s({}, fe, t(this._element).data(), 'object' == typeof e && e ? e : {})),
              a.typeCheckConfig('toast', e, this.constructor.DefaultType),
              e
            );
          }),
          (n._setListeners = function() {
            var e = this;
            t(this._element).on('click.dismiss.bs.toast', '[data-dismiss="toast"]', function() {
              return e.hide(!0);
            });
          }),
          (n._close = function() {
            var e = this,
              n = function() {
                e._element.classList.add('hide'), t(e._element).trigger('hidden.bs.toast');
              };
            if ((this._element.classList.remove('show'), this._config.animation)) {
              var i = a.getTransitionDurationFromElement(this._element);
              t(this._element)
                .one(a.TRANSITION_END, n)
                .emulateTransitionEnd(i);
            } else n();
          }),
          (e._jQueryInterface = function(n) {
            return this.each(function() {
              var i = t(this),
                r = i.data('bs.toast');
              if ((r || ((r = new e(this, 'object' == typeof n && n)), i.data('bs.toast', r)), 'string' == typeof n)) {
                if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                r[n](this);
              }
            });
          }),
          r(e, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.3.1';
              }
            },
            {
              key: 'DefaultType',
              get: function() {
                return ce;
              }
            },
            {
              key: 'Default',
              get: function() {
                return fe;
              }
            }
          ]),
          e
        );
      })();
    (t.fn.toast = he._jQueryInterface),
      (t.fn.toast.Constructor = he),
      (t.fn.toast.noConflict = function() {
        return (t.fn.toast = ue), he._jQueryInterface;
      }),
      (function() {
        if (void 0 === t)
          throw new TypeError(
            "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
          );
        var e = t.fn.jquery.split(' ')[0].split('.');
        if ((e[0] < 2 && e[1] < 9) || (1 === e[0] && 9 === e[1] && e[2] < 1) || e[0] >= 4)
          throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
      })(),
      (e.Util = a),
      (e.Alert = u),
      (e.Button = f),
      (e.Carousel = y),
      (e.Collapse = x),
      (e.Dropdown = k),
      (e.Modal = q),
      (e.Popover = Z),
      (e.Scrollspy = se),
      (e.Tab = le),
      (e.Toast = he),
      (e.Tooltip = z),
      Object.defineProperty(e, '__esModule', { value: !0 });
  });
