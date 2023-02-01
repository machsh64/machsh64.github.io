parcelRequire = function(e, r, t, n) {
	var i, o = &quot;function&quot; == typeof parcelRequire &amp;&amp; parcelRequire,
		u = &quot;function&quot; == typeof require &amp;&amp; require;

	function f(t, n) {
		if (!r[t]) {
			if (!e[t]) {
				var i = &quot;function&quot; == typeof parcelRequire &amp;&amp; parcelRequire;
				if (!n &amp;&amp; i) return i(t, !0);
				if (o) return o(t, !0);
				if (u &amp;&amp; &quot;string&quot; == typeof t) return u(t);
				var c = new Error(&quot;Cannot find module &apos;&quot; + t + &quot;&apos;&quot;);
				throw c.code = &quot;MODULE_NOT_FOUND&quot;, c
			}
			p.resolve = function(r) {
				return e[t][1][r] || r
			}, p.cache = {};
			var l = r[t] = new f.Module(t);
			e[t][0].call(l.exports, p, l, l.exports, this)
		}
		return r[t].exports;

		function p(e) {
			return f(p.resolve(e))
		}
	}
	f.isParcelRequire = !0, f.Module = function(e) {
		this.id = e, this.bundle = f, this.exports = {}
	}, f.modules = e, f.cache = r, f.parent = o, f.register = function(r, t) {
		e[r] = [function(e, r) {
			r.exports = t
		}, {}]
	};
	for (var c = 0; c &lt; t.length; c++) try {
		f(t[c])
	} catch (e) {
		i || (i = e)
	}
	if (t.length) {
		var l = f(t[t.length - 1]);
		&quot;object&quot; == typeof exports &amp;&amp; &quot;undefined&quot; != typeof module ? module.exports = l : &quot;function&quot; == typeof define &amp;&amp; define.amd ? define(function() {
			return l
		}) : n &amp;&amp; (this[n] = l)
	}
	if (parcelRequire = f, i) throw i;
	return f
}({
	&quot;XR92&quot;: [function(require, module, exports) {
		var define;
		var global = arguments[3];
		var t, e = arguments[3];
		!
		function(e, n) {
			&quot;function&quot; == typeof t &amp;&amp; t.amd ? t(function() {
				return n(e)
			}) : n(e)
		}(this, function(t) {
			var e, n = function() {
					var e, n, r, i, o, a, s = [],
						u = s.concat,
						c = s.filter,
						l = s.slice,
						f = t.document,
						h = {},
						p = {},
						d = {
							&quot;column-count&quot;: 1,
							columns: 1,
							&quot;font-weight&quot;: 1,
							&quot;line-height&quot;: 1,
							opacity: 1,
							&quot;z-index&quot;: 1,
							zoom: 1
						},
						m = /^\s*<(\w+|!)[^>]*&gt;/,
						v = /^<(\w+)\s*\ ?>(?:<\ \1>|)$/,
						g = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/&gt;/gi,
						y = /^(?:body|html)$/i,
						x = /([A-Z])/g,
						b = [&quot;val&quot;, &quot;css&quot;, &quot;html&quot;, &quot;text&quot;, &quot;data&quot;, &quot;width&quot;, &quot;height&quot;, &quot;offset&quot;],
						E = f.createElement(&quot;table&quot;),
						j = f.createElement(&quot;tr&quot;),
						T = {
							tr: f.createElement(&quot;tbody&quot;),
							tbody: E,
							thead: E,
							tfoot: E,
							td: j,
							th: j,
							&quot;*&quot;: f.createElement(&quot;div&quot;)
						},
						w = /complete|loaded|interactive/,
						S = /^[\w-]*$/,
						C = {},
						N = C.toString,
						O = {},
						P = f.createElement(&quot;div&quot;),
						A = {
							tabindex: &quot;tabIndex&quot;,
							readonly: &quot;readOnly&quot;,
							for :&quot;htmlFor&quot;,
							class: &quot;className&quot;,
							maxlength: &quot;maxLength&quot;,
							cellspacing: &quot;cellSpacing&quot;,
							cellpadding: &quot;cellPadding&quot;,
							rowspan: &quot;rowSpan&quot;,
							colspan: &quot;colSpan&quot;,
							usemap: &quot;useMap&quot;,
							frameborder: &quot;frameBorder&quot;,
							contenteditable: &quot;contentEditable&quot;
						},
						D = Array.isArray ||
					function(t) {
						return t instanceof Array
					};

					function L(t) {
						return null == t ? String(t) : C[N.call(t)] || &quot;object&quot;
					}
					function $(t) {
						return &quot;function&quot; == L(t)
					}
					function F(t) {
						return null != t &amp;&amp; t == t.window
					}
					function k(t) {
						return null != t &amp;&amp; t.nodeType == t.DOCUMENT_NODE
					}
					function M(t) {
						return &quot;object&quot; == L(t)
					}
					function R(t) {
						return M(t) &amp;&amp; !F(t) &amp;&amp; Object.getPrototypeOf(t) == Object.prototype
					}
					function Z(t) {
						var e = !! t &amp;&amp; &quot;length&quot; in t &amp;&amp; t.length,
							n = r.type(t);
						return &quot;function&quot; != n &amp;&amp; !F(t) &amp;&amp; (&quot;array&quot; == n || 0 === e || &quot;number&quot; == typeof e &amp;&amp; e &gt; 0 &amp;&amp; e - 1 in t)
					}
					function z(t) {
						return t.replace(/::/g, &quot;/&quot;).replace(/([A-Z]+)([A-Z][a-z])/g, &quot;$1_$2&quot;).replace(/([a-z\d])([A-Z])/g, &quot;$1_$2&quot;).replace(/_/g, &quot;-&quot;).toLowerCase()
					}
					function q(t) {
						return t in p ? p[t] : p[t] = new RegExp(&quot;(^|\\s)&quot; + t + &quot;(\\s|$)&quot;)
					}
					function H(t, e) {
						return &quot;number&quot; != typeof e || d[z(t)] ? e : e + &quot;px&quot;
					}
					function I(t) {
						return &quot;children&quot; in t ? l.call(t.children) : r.map(t.childNodes, function(t) {
							if (1 == t.nodeType) return t
						})
					}
					function V(t, e) {
						var n, r = t ? t.length : 0;
						for (n = 0; n &lt; r; n++) this[n] = t[n];
						this.length = r, this.selector = e || &quot;&quot;
					}
					function _(t, e) {
						return null == e ? r(t) : r(t).filter(e)
					}
					function B(t, e, n, r) {
						return $(e) ? e.call(t, n, r) : e
					}
					function U(t, e, n) {
						null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
					}
					function X(t, n) {
						var r = t.className || &quot;&quot;,
							i = r &amp;&amp; r.baseVal !== e;
						if (n === e) return i ? r.baseVal : r;
						i ? r.baseVal = n : t.className = n
					}
					function J(t) {
						try {
							return t ? &quot;true&quot; == t || &quot;false&quot; != t &amp;&amp; (&quot;null&quot; == t ? null : +t + &quot;&quot; == t ? +t : /^[\[\{]/.test(t) ? r.parseJSON(t) : t) : t
						} catch (e) {
							return t
						}
					}
					return O.matches = function(t, e) {
						if (!e || !t || 1 !== t.nodeType) return !1;
						var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
						if (n) return n.call(t, e);
						var r, i = t.parentNode,
							o = !i;
						return o &amp;&amp; (i = P).appendChild(t), r = ~O.qsa(i, e).indexOf(t), o &amp;&amp; P.removeChild(t), r
					}, o = function(t) {
						return t.replace(/-+(.)?/g, function(t, e) {
							return e ? e.toUpperCase() : &quot;&quot;
						})
					}, a = function(t) {
						return c.call(t, function(e, n) {
							return t.indexOf(e) == n
						})
					}, O.fragment = function(t, n, i) {
						var o, a, s;
						return v.test(t) &amp;&amp; (o = r(f.createElement(RegExp.$1))), o || (t.replace &amp;&amp; (t = t.replace(g, &quot;<$1>&quot;)), n === e &amp;&amp; (n = m.test(t) &amp;&amp; RegExp.$1), n in T || (n = &quot;*&quot;), (s = T[n]).innerHTML = &quot;&quot; + t, o = r.each(l.call(s.childNodes), function() {
							s.removeChild(this)
						})), R(i) &amp;&amp; (a = r(o), r.each(i, function(t, e) {
							b.indexOf(t) &gt; -1 ? a[t](e) : a.attr(t, e)
						})), o
					}, O.Z = function(t, e) {
						return new V(t, e)
					}, O.isZ = function(t) {
						return t instanceof O.Z
					}, O.init = function(t, n) {
						var i, o;
						if (!t) return O.Z();
						if (&quot;string&quot; == typeof t) if (&quot;<" 1 9 11 =="(t" t.trim())[0] && m.test(t)) i="O.fragment(t," regexp.$1, n), t="null;" else { if (n !="=" e) return r(n).find(t); t) } ($(t)) r(f).ready(t); (o.isz(t)) t; (d(t)) o="t," function(t) null }); (m(t)) (m.test(t)) o.z(i, }, (r="function(t," o.init(t, }).extend="function(t)" var r, 1); "boolean"="=" typeof i.foreach(function(i) function t(r, i, o) for in i) (r(i[n]) || d(i[n])) ? !r(r[n]) (r[n]="{})," d(i[n]) !d(r[n]) t(r[n], i[n], o)) : i[n] e }(t, r) }), o.qsa="function(t," n, r="#" "."="=" e[0], e.slice(1) e, a="S.test(o);" t.getelementbyid [n] [] t.nodetype l.call(a !r t.getelementsbyclassname t.getelementsbyclassname(o) t.getelementsbytagname(e) t.queryselectorall(e)) r.contains="f.documentElement.contains" function(t, t.contains(e) (; (e="e.parentNode);)" !0; !1 r.type="L," r.isfunction="$," r.iswindow="F," r.isarray="D," r.isplainobject="R," r.isemptyobject="function(t)" e; !1; !0 r.isnumeric="function(t)" n="typeof" ("string" t.length) !isnan(e) isfinite(e) r.inarray="function(t," n) s.indexof.call(e, t, r.camelcase="o," r.trim="function(t)" "" string.prototype.trim.call(t) r.uuid="0," r.support="{}," r.expr="{}," r.noop="function()" {}, r.map="function(t," o, a, s="[];" (z(t)) (i="0;" < t.length; i++) e(t[i], i)) s.push(n); (o e(t[o], (a="s).length"> 0 ? r.fn.concat.apply([], a) : a
					}, r.each = function(t, e) {
						var n, r;
						if (Z(t)) {
							for (n = 0; n &lt; t.length; n++) if (!1 === e.call(t[n], n, t[n])) return t
						} else for (r in t) if (!1 === e.call(t[r], r, t[r])) return t;
						return t
					}, r.grep = function(t, e) {
						return c.call(t, e)
					}, t.JSON &amp;&amp; (r.parseJSON = JSON.parse), r.each(&quot;Boolean Number String Function Array Date RegExp Object Error&quot;.split(&quot; &quot;), function(t, e) {
						C[&quot;[object &quot; + e + &quot;]&quot;] = e.toLowerCase()
					}), r.fn = {
						constructor: O.Z,
						length: 0,
						forEach: s.forEach,
						reduce: s.reduce,
						push: s.push,
						sort: s.sort,
						splice: s.splice,
						indexOf: s.indexOf,
						concat: function() {
							var t, e, n = [];
							for (t = 0; t &lt; arguments.length; t++) e = arguments[t], n[t] = O.isZ(e) ? e.toArray() : e;
							return u.apply(O.isZ(this) ? this.toArray() : this, n)
						},
						map: function(t) {
							return r(r.map(this, function(e, n) {
								return t.call(e, n, e)
							}))
						},
						slice: function() {
							return r(l.apply(this, arguments))
						},
						ready: function(t) {
							return w.test(f.readyState) &amp;&amp; f.body ? t(r) : f.addEventListener(&quot;DOMContentLoaded&quot;, function() {
								t(r)
							}, !1), this
						},
						get: function(t) {
							return t === e ? l.call(this) : this[t &gt;= 0 ? t : t + this.length]
						},
						toArray: function() {
							return this.get()
						},
						size: function() {
							return this.length
						},
						remove: function() {
							return this.each(function() {
								null != this.parentNode &amp;&amp; this.parentNode.removeChild(this)
							})
						},
						each: function(t) {
							return s.every.call(this, function(e, n) {
								return !1 !== t.call(e, n, e)
							}), this
						},
						filter: function(t) {
							return $(t) ? this.not(this.not(t)) : r(c.call(this, function(e) {
								return O.matches(e, t)
							}))
						},
						add: function(t, e) {
							return r(a(this.concat(r(t, e))))
						},
						is: function(t) {
							return this.length &gt; 0 &amp;&amp; O.matches(this[0], t)
						},
						not: function(t) {
							var n = [];
							if ($(t) &amp;&amp; t.call !== e) this.each(function(e) {
								t.call(this, e) || n.push(this)
							});
							else {
								var i = &quot;string&quot; == typeof t ? this.filter(t) : Z(t) &amp;&amp; $(t.item) ? l.call(t) : r(t);
								this.forEach(function(t) {
									i.indexOf(t) &lt; 0 &amp;&amp; n.push(t)
								})
							}
							return r(n)
						},
						has: function(t) {
							return this.filter(function() {
								return M(t) ? r.contains(this, t) : r(this).find(t).size()
							})
						},
						eq: function(t) {
							return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
						},
						first: function() {
							var t = this[0];
							return t &amp;&amp; !M(t) ? t : r(t)
						},
						last: function() {
							var t = this[this.length - 1];
							return t &amp;&amp; !M(t) ? t : r(t)
						},
						find: function(t) {
							var e = this;
							return t ? &quot;object&quot; == typeof t ? r(t).filter(function() {
								var t = this;
								return s.some.call(e, function(e) {
									return r.contains(e, t)
								})
							}) : 1 == this.length ? r(O.qsa(this[0], t)) : this.map(function() {
								return O.qsa(this, t)
							}) : r()
						},
						closest: function(t, e) {
							var n = [],
								i = &quot;object&quot; == typeof t &amp;&amp; r(t);
							return this.each(function(r, o) {
								for (; o &amp;&amp; !(i ? i.indexOf(o) &gt;= 0 : O.matches(o, t));) o = o !== e &amp;&amp; !k(o) &amp;&amp; o.parentNode;
								o &amp;&amp; n.indexOf(o) &lt; 0 &amp;&amp; n.push(o)
							}), r(n)
						},
						parents: function(t) {
							for (var e = [], n = this; n.length &gt; 0;) n = r.map(n, function(t) {
								if ((t = t.parentNode) &amp;&amp; !k(t) &amp;&amp; e.indexOf(t) &lt; 0) return e.push(t), t
							});
							return _(e, t)
						},
						parent: function(t) {
							return _(a(this.pluck(&quot;parentNode&quot;)), t)
						},
						children: function(t) {
							return _(this.map(function() {
								return I(this)
							}), t)
						},
						contents: function() {
							return this.map(function() {
								return this.contentDocument || l.call(this.childNodes)
							})
						},
						siblings: function(t) {
							return _(this.map(function(t, e) {
								return c.call(I(e.parentNode), function(t) {
									return t !== e
								})
							}), t)
						},
						empty: function() {
							return this.each(function() {
								this.innerHTML = &quot;&quot;
							})
						},
						pluck: function(t) {
							return r.map(this, function(e) {
								return e[t]
							})
						},
						show: function() {
							return this.each(function() {
								var t, e, n;
								&quot;none&quot; == this.style.display &amp;&amp; (this.style.display = &quot;&quot;), &quot;none&quot; == getComputedStyle(this, &quot;&quot;).getPropertyValue(&quot;display&quot;) &amp;&amp; (this.style.display = (t = this.nodeName, h[t] || (e = f.createElement(t), f.body.appendChild(e), n = getComputedStyle(e, &quot;&quot;).getPropertyValue(&quot;display&quot;), e.parentNode.removeChild(e), &quot;none&quot; == n &amp;&amp; (n = &quot;block&quot;), h[t] = n), h[t]))
							})
						},
						replaceWith: function(t) {
							return this.before(t).remove()
						},
						wrap: function(t) {
							var e = $(t);
							if (this[0] &amp;&amp; !e) var n = r(t).get(0),
								i = n.parentNode || this.length &gt; 1;
							return this.each(function(o) {
								r(this).wrapAll(e ? t.call(this, o) : i ? n.cloneNode(!0) : n)
							})
						},
						wrapAll: function(t) {
							if (this[0]) {
								var e;
								for (r(this[0]).before(t = r(t));
								(e = t.children()).length;) t = e.first();
								r(t).append(this)
							}
							return this
						},
						wrapInner: function(t) {
							var e = $(t);
							return this.each(function(n) {
								var i = r(this),
									o = i.contents(),
									a = e ? t.call(this, n) : t;
								o.length ? o.wrapAll(a) : i.append(a)
							})
						},
						unwrap: function() {
							return this.parent().each(function() {
								r(this).replaceWith(r(this).children())
							}), this
						},
						clone: function() {
							return this.map(function() {
								return this.cloneNode(!0)
							})
						},
						hide: function() {
							return this.css(&quot;display&quot;, &quot;none&quot;)
						},
						toggle: function(t) {
							return this.each(function() {
								var n = r(this);
								(t === e ? &quot;none&quot; == n.css(&quot;display&quot;) : t) ? n.show() : n.hide()
							})
						},
						prev: function(t) {
							return r(this.pluck(&quot;previousElementSibling&quot;)).filter(t || &quot;*&quot;)
						},
						next: function(t) {
							return r(this.pluck(&quot;nextElementSibling&quot;)).filter(t || &quot;*&quot;)
						},
						html: function(t) {
							return 0 in arguments ? this.each(function(e) {
								var n = this.innerHTML;
								r(this).empty().append(B(this, t, e, n))
							}) : 0 in this ? this[0].innerHTML : null
						},
						text: function(t) {
							return 0 in arguments ? this.each(function(e) {
								var n = B(this, t, e, this.textContent);
								this.textContent = null == n ? &quot;&quot; : &quot;&quot; + n
							}) : 0 in this ? this.pluck(&quot;textContent&quot;).join(&quot;&quot;) : null
						},
						attr: function(t, r) {
							var i;
							return &quot;string&quot; != typeof t || 1 in arguments ? this.each(function(e) {
								if (1 === this.nodeType) if (M(t)) for (n in t) U(this, n, t[n]);
								else U(this, t, B(this, r, e, this.getAttribute(t)))
							}) : 0 in this &amp;&amp; 1 == this[0].nodeType &amp;&amp; null != (i = this[0].getAttribute(t)) ? i : e
						},
						removeAttr: function(t) {
							return this.each(function() {
								1 === this.nodeType &amp;&amp; t.split(&quot; &quot;).forEach(function(t) {
									U(this, t)
								}, this)
							})
						},
						prop: function(t, e) {
							return t = A[t] || t, 1 in arguments ? this.each(function(n) {
								this[t] = B(this, e, n, this[t])
							}) : this[0] &amp;&amp; this[0][t]
						},
						removeProp: function(t) {
							return t = A[t] || t, this.each(function() {
								delete this[t]
							})
						},
						data: function(t, n) {
							var r = &quot;data-&quot; + t.replace(x, &quot;-$1&quot;).toLowerCase(),
								i = 1 in arguments ? this.attr(r, n) : this.attr(r);
							return null !== i ? J(i) : e
						},
						val: function(t) {
							return 0 in arguments ? (null == t &amp;&amp; (t = &quot;&quot;), this.each(function(e) {
								this.value = B(this, t, e, this.value)
							})) : this[0] &amp;&amp; (this[0].multiple ? r(this[0]).find(&quot;option&quot;).filter(function() {
								return this.selected
							}).pluck(&quot;value&quot;) : this[0].value)
						},
						offset: function(e) {
							if (e) return this.each(function(t) {
								var n = r(this),
									i = B(this, e, t, n.offset()),
									o = n.offsetParent().offset(),
									a = {
										top: i.top - o.top,
										left: i.left - o.left
									};
								&quot;static&quot; == n.css(&quot;position&quot;) &amp;&amp; (a.position = &quot;relative&quot;), n.css(a)
							});
							if (!this.length) return null;
							if (f.documentElement !== this[0] &amp;&amp; !r.contains(f.documentElement, this[0])) return {
								top: 0,
								left: 0
							};
							var n = this[0].getBoundingClientRect();
							return {
								left: n.left + t.pageXOffset,
								top: n.top + t.pageYOffset,
								width: Math.round(n.width),
								height: Math.round(n.height)
							}
						},
						css: function(t, e) {
							if (arguments.length &lt; 2) {
								var i = this[0];
								if (&quot;string&quot; == typeof t) {
									if (!i) return;
									return i.style[o(t)] || getComputedStyle(i, &quot;&quot;).getPropertyValue(t)
								}
								if (D(t)) {
									if (!i) return;
									var a = {},
										s = getComputedStyle(i, &quot;&quot;);
									return r.each(t, function(t, e) {
										a[e] = i.style[o(e)] || s.getPropertyValue(e)
									}), a
								}
							}
							var u = &quot;&quot;;
							if (&quot;string&quot; == L(t)) e || 0 === e ? u = z(t) + &quot;:&quot; + H(t, e) : this.each(function() {
								this.style.removeProperty(z(t))
							});
							else for (n in t) t[n] || 0 === t[n] ? u += z(n) + &quot;:&quot; + H(n, t[n]) + &quot;;&quot; : this.each(function() {
								this.style.removeProperty(z(n))
							});
							return this.each(function() {
								this.style.cssText += &quot;;&quot; + u
							})
						},
						index: function(t) {
							return t ? this.indexOf(r(t)[0]) : this.parent().children().indexOf(this[0])
						},
						hasClass: function(t) {
							return !!t &amp;&amp; s.some.call(this, function(t) {
								return this.test(X(t))
							}, q(t))
						},
						addClass: function(t) {
							return t ? this.each(function(e) {
								if (&quot;className&quot; in this) {
									i = [];
									var n = X(this);
									B(this, t, e, n).split(/\s+/g).forEach(function(t) {
										r(this).hasClass(t) || i.push(t)
									}, this), i.length &amp;&amp; X(this, n + (n ? &quot; &quot; : &quot;&quot;) + i.join(&quot; &quot;))
								}
							}) : this
						},
						removeClass: function(t) {
							return this.each(function(n) {
								if (&quot;className&quot; in this) {
									if (t === e) return X(this, &quot;&quot;);
									i = X(this), B(this, t, n, i).split(/\s+/g).forEach(function(t) {
										i = i.replace(q(t), &quot; &quot;)
									}), X(this, i.trim())
								}
							})
						},
						toggleClass: function(t, n) {
							return t ? this.each(function(i) {
								var o = r(this);
								B(this, t, i, X(this)).split(/\s+/g).forEach(function(t) {
									(n === e ? !o.hasClass(t) : n) ? o.addClass(t) : o.removeClass(t)
								})
							}) : this
						},
						scrollTop: function(t) {
							if (this.length) {
								var n = &quot;scrollTop&quot; in this[0];
								return t === e ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ?
								function() {
									this.scrollTop = t
								} : function() {
									this.scrollTo(this.scrollX, t)
								})
							}
						},
						scrollLeft: function(t) {
							if (this.length) {
								var n = &quot;scrollLeft&quot; in this[0];
								return t === e ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ?
								function() {
									this.scrollLeft = t
								} : function() {
									this.scrollTo(t, this.scrollY)
								})
							}
						},
						position: function() {
							if (this.length) {
								var t = this[0],
									e = this.offsetParent(),
									n = this.offset(),
									i = y.test(e[0].nodeName) ? {
										top: 0,
										left: 0
									} : e.offset();
								return n.top -= parseFloat(r(t).css(&quot;margin-top&quot;)) || 0, n.left -= parseFloat(r(t).css(&quot;margin-left&quot;)) || 0, i.top += parseFloat(r(e[0]).css(&quot;border-top-width&quot;)) || 0, i.left += parseFloat(r(e[0]).css(&quot;border-left-width&quot;)) || 0, {
									top: n.top - i.top,
									left: n.left - i.left
								}
							}
						},
						offsetParent: function() {
							return this.map(function() {
								for (var t = this.offsetParent || f.body; t &amp;&amp; !y.test(t.nodeName) &amp;&amp; &quot;static&quot; == r(t).css(&quot;position&quot;);) t = t.offsetParent;
								return t
							})
						}
					}, r.fn.detach = r.fn.remove, [&quot;width&quot;, &quot;height&quot;].forEach(function(t) {
						var n = t.replace(/./, function(t) {
							return t[0].toUpperCase()
						});
						r.fn[t] = function(i) {
							var o, a = this[0];
							return i === e ? F(a) ? a[&quot;inner&quot; + n] : k(a) ? a.documentElement[&quot;scroll&quot; + n] : (o = this.offset()) &amp;&amp; o[t] : this.each(function(e) {
								(a = r(this)).css(t, B(this, i, e, a[t]()))
							})
						}
					}), [&quot;after&quot;, &quot;prepend&quot;, &quot;before&quot;, &quot;append&quot;].forEach(function(n, i) {
						var o = i % 2;
						r.fn[n] = function() {
							var n, a, s = r.map(arguments, function(t) {
								var i = [];
								return &quot;array&quot; == (n = L(t)) ? (t.forEach(function(t) {
									return t.nodeType !== e ? i.push(t) : r.zepto.isZ(t) ? i = i.concat(t.get()) : void(i = i.concat(O.fragment(t)))
								}), i) : &quot;object&quot; == n || null == t ? t : O.fragment(t)
							}),
								u = this.length &gt; 1;
							return s.length &lt; 1 ? this : this.each(function(e, n) {
								a = o ? n : n.parentNode, n = 0 == i ? n.nextSibling : 1 == i ? n.firstChild : 2 == i ? n : null;
								var c = r.contains(f.documentElement, a);
								s.forEach(function(e) {
									if (u) e = e.cloneNode(!0);
									else if (!a) return r(e).remove();
									a.insertBefore(e, n), c &amp;&amp;
									function t(e, n) {
										n(e);
										for (var r = 0, i = e.childNodes.length; r &lt; i; r++) t(e.childNodes[r], n)
									}(e, function(e) {
										if (!(null == e.nodeName || &quot;SCRIPT&quot; !== e.nodeName.toUpperCase() || e.type &amp;&amp; &quot;text/javascript&quot; !== e.type || e.src)) {
											var n = e.ownerDocument ? e.ownerDocument.defaultView : t;
											n.eval.call(n, e.innerHTML)
										}
									})
								})
							})
						}, r.fn[o ? n + &quot;To&quot; : &quot;insert&quot; + (i ? &quot;Before&quot; : &quot;After&quot;)] = function(t) {
							return r(t)[n](this), this
						}
					}), O.Z.prototype = V.prototype = r.fn, O.uniq = a, O.deserializeValue = J, r.zepto = O, r
				}();
			return t.Zepto = n, void 0 === t.$ &amp;&amp; (t.$ = n), function(e) {
				var n, r = 1,
					i = Array.prototype.slice,
					o = e.isFunction,
					a = function(t) {
						return &quot;string&quot; == typeof t
					},
					s = {},
					u = {},
					c = &quot;onfocusin&quot; in t,
					l = {
						focus: &quot;focusin&quot;,
						blur: &quot;focusout&quot;
					},
					f = {
						mouseenter: &quot;mouseover&quot;,
						mouseleave: &quot;mouseout&quot;
					};

				function h(t) {
					return t._zid || (t._zid = r++)
				}
				function p(t, e, n, r) {
					if ((e = d(e)).ns) var i = (o = e.ns, new RegExp(&quot;(?:^| )&quot; + o.replace(&quot; &quot;, &quot; .* ?&quot;) + &quot;(?: |$)&quot;));
					var o;
					return (s[h(t)] || []).filter(function(t) {
						return t &amp;&amp; (!e.e || t.e == e.e) &amp;&amp; (!e.ns || i.test(t.ns)) &amp;&amp; (!n || h(t.fn) === h(n)) &amp;&amp; (!r || t.sel == r)
					})
				}
				function d(t) {
					var e = (&quot;&quot; + t).split(&quot;.&quot;);
					return {
						e: e[0],
						ns: e.slice(1).sort().join(&quot; &quot;)
					}
				}
				function m(t, e) {
					return t.del &amp;&amp; !c &amp;&amp; t.e in l || !! e
				}
				function v(t) {
					return f[t] || c &amp;&amp; l[t] || t
				}
				function g(t, r, i, o, a, u, c) {
					var l = h(t),
						p = s[l] || (s[l] = []);
					r.split(/\s/).forEach(function(r) {
						if (&quot;ready&quot; == r) return e(document).ready(i);
						var s = d(r);
						s.fn = i, s.sel = a, s.e in f &amp;&amp; (i = function(t) {
							var n = t.relatedTarget;
							if (!n || n !== this &amp;&amp; !e.contains(this, n)) return s.fn.apply(this, arguments)
						}), s.del = u;
						var l = u || i;
						s.proxy = function(e) {
							if (!(e = T(e)).isImmediatePropagationStopped()) {
								e.data = o;
								var r = l.apply(t, e._args == n ? [e] : [e].concat(e._args));
								return !1 === r &amp;&amp; (e.preventDefault(), e.stopPropagation()), r
							}
						}, s.i = p.length, p.push(s), &quot;addEventListener&quot; in t &amp;&amp; t.addEventListener(v(s.e), s.proxy, m(s, c))
					})
				}
				function y(t, e, n, r, i) {
					var o = h(t);
					(e || &quot;&quot;).split(/\s/).forEach(function(e) {
						p(t, e, n, r).forEach(function(e) {
							delete s[o][e.i], &quot;removeEventListener&quot; in t &amp;&amp; t.removeEventListener(v(e.e), e.proxy, m(e, i))
						})
					})
				}
				u.click = u.mousedown = u.mouseup = u.mousemove = &quot;MouseEvents&quot;, e.event = {
					add: g,
					remove: y
				}, e.proxy = function(t, n) {
					var r = 2 in arguments &amp;&amp; i.call(arguments, 2);
					if (o(t)) {
						var s = function() {
								return t.apply(n, r ? r.concat(i.call(arguments)) : arguments)
							};
						return s._zid = h(t), s
					}
					if (a(n)) return r ? (r.unshift(t[n], t), e.proxy.apply(null, r)) : e.proxy(t[n], t);
					throw new TypeError(&quot;expected function&quot;)
				}, e.fn.bind = function(t, e, n) {
					return this.on(t, e, n)
				}, e.fn.unbind = function(t, e) {
					return this.off(t, e)
				}, e.fn.one = function(t, e, n, r) {
					return this.on(t, e, n, r, 1)
				};
				var x = function() {
						return !0
					},
					b = function() {
						return !1
					},
					E = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
					j = {
						preventDefault: &quot;isDefaultPrevented&quot;,
						stopImmediatePropagation: &quot;isImmediatePropagationStopped&quot;,
						stopPropagation: &quot;isPropagationStopped&quot;
					};

				function T(t, r) {
					return !r &amp;&amp; t.isDefaultPrevented || (r || (r = t), e.each(j, function(e, n) {
						var i = r[e];
						t[e] = function() {
							return this[n] = x, i &amp;&amp; i.apply(r, arguments)
						}, t[n] = b
					}), t.timeStamp || (t.timeStamp = Date.now()), (r.defaultPrevented !== n ? r.defaultPrevented : &quot;returnValue&quot; in r ? !1 === r.returnValue : r.getPreventDefault &amp;&amp; r.getPreventDefault()) &amp;&amp; (t.isDefaultPrevented = x)), t
				}
				function w(t) {
					var e, r = {
						originalEvent: t
					};
					for (e in t) E.test(e) || t[e] === n || (r[e] = t[e]);
					return T(r, t)
				}
				e.fn.delegate = function(t, e, n) {
					return this.on(e, t, n)
				}, e.fn.undelegate = function(t, e, n) {
					return this.off(e, t, n)
				}, e.fn.live = function(t, n) {
					return e(document.body).delegate(this.selector, t, n), this
				}, e.fn.die = function(t, n) {
					return e(document.body).undelegate(this.selector, t, n), this
				}, e.fn.on = function(t, r, s, u, c) {
					var l, f, h = this;
					return t &amp;&amp; !a(t) ? (e.each(t, function(t, e) {
						h.on(t, r, s, e, c)
					}), h) : (a(r) || o(u) || !1 === u || (u = s, s = r, r = n), u !== n &amp;&amp; !1 !== s || (u = s, s = n), !1 === u &amp;&amp; (u = b), h.each(function(n, o) {
						c &amp;&amp; (l = function(t) {
							return y(o, t.type, u), u.apply(this, arguments)
						}), r &amp;&amp; (f = function(t) {
							var n, a = e(t.target).closest(r, o).get(0);
							if (a &amp;&amp; a !== o) return n = e.extend(w(t), {
								currentTarget: a,
								liveFired: o
							}), (l || u).apply(a, [n].concat(i.call(arguments, 1)))
						}), g(o, t, u, s, r, f || l)
					}))
				}, e.fn.off = function(t, r, i) {
					var s = this;
					return t &amp;&amp; !a(t) ? (e.each(t, function(t, e) {
						s.off(t, r, e)
					}), s) : (a(r) || o(i) || !1 === i || (i = r, r = n), !1 === i &amp;&amp; (i = b), s.each(function() {
						y(this, t, i, r)
					}))
				}, e.fn.trigger = function(t, n) {
					return (t = a(t) || e.isPlainObject(t) ? e.Event(t) : T(t))._args = n, this.each(function() {
						t.type in l &amp;&amp; &quot;function&quot; == typeof this[t.type] ? this[t.type]() : &quot;dispatchEvent&quot; in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n)
					})
				}, e.fn.triggerHandler = function(t, n) {
					var r, i;
					return this.each(function(o, s) {
						(r = w(a(t) ? e.Event(t) : t))._args = n, r.target = s, e.each(p(s, t.type || t), function(t, e) {
							if (i = e.proxy(r), r.isImmediatePropagationStopped()) return !1
						})
					}), i
				}, &quot;focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error&quot;.split(&quot; &quot;).forEach(function(t) {
					e.fn[t] = function(e) {
						return 0 in arguments ? this.bind(t, e) : this.trigger(t)
					}
				}), e.Event = function(t, e) {
					a(t) || (t = (e = t).type);
					var n = document.createEvent(u[t] || &quot;Events&quot;),
						r = !0;
					if (e) for (var i in e)&quot;bubbles&quot; == i ? r = !! e[i] : n[i] = e[i];
					return n.initEvent(t, r, !0), T(n)
				}
			}(n), function(e) {
				var n, r, i = +new Date,
					o = t.document,
					a = /<script\b[^<]*(?:(?!<\ script>)<[^<]*)*<\ script>/gi,
					s = /^(?:text|application)\/javascript/i,
					u = /^(?:text|application)\/xml/i,
					c = &quot;application/json&quot;,
					l = &quot;text/html&quot;,
					f = /^\s*$/,
					h = o.createElement(&quot;a&quot;);

				function p(t, n, r, i) {
					if (t.global) return function(t, n, r) {
						var i = e.Event(n);
						return e(t).trigger(i, r), !i.isDefaultPrevented()
					}(n || o, r, i)
				}
				function d(t, e) {
					var n = e.context;
					if (!1 === e.beforeSend.call(n, t, e) || !1 === p(e, n, &quot;ajaxBeforeSend&quot;, [t, e])) return !1;
					p(e, n, &quot;ajaxSend&quot;, [t, e])
				}
				function m(t, e, n, r) {
					var i = n.context;
					n.success.call(i, t, &quot;success&quot;, e), r &amp;&amp; r.resolveWith(i, [t, &quot;success&quot;, e]), p(n, i, &quot;ajaxSuccess&quot;, [e, n, t]), g(&quot;success&quot;, e, n)
				}
				function v(t, e, n, r, i) {
					var o = r.context;
					r.error.call(o, n, e, t), i &amp;&amp; i.rejectWith(o, [n, e, t]), p(r, o, &quot;ajaxError&quot;, [n, r, t || e]), g(e, n, r)
				}
				function g(t, n, r) {
					var i = r.context;
					r.complete.call(i, n, t), p(r, i, &quot;ajaxComplete&quot;, [n, r]), function(t) {
						t.global &amp;&amp; !--e.active &amp;&amp; p(t, null, &quot;ajaxStop&quot;)
					}(r)
				}
				function y() {}
				function x(t, e) {
					return &quot;&quot; == e ? t : (t + &quot;&amp;&quot; + e).replace(/[&amp;?]{1,2}/, &quot;?&quot;)
				}
				function b(t, n, r, i) {
					return e.isFunction(n) &amp;&amp; (i = r, r = n, n = void 0), e.isFunction(r) || (i = r, r = void 0), {
						url: t,
						data: n,
						success: r,
						dataType: i
					}
				}
				h.href = t.location.href, e.active = 0, e.ajaxJSONP = function(n, r) {
					if (!(&quot;type&quot; in n)) return e.ajax(n);
					var a, s, u = n.jsonpCallback,
						c = (e.isFunction(u) ? u() : u) || &quot;Zepto&quot; + i++,
						l = o.createElement(&quot;script&quot;),
						f = t[c],
						h = function(t) {
							e(l).triggerHandler(&quot;error&quot;, t || &quot;abort&quot;)
						},
						p = {
							abort: h
						};
					return r &amp;&amp; r.promise(p), e(l).on(&quot;load error&quot;, function(i, o) {
						clearTimeout(s), e(l).off().remove(), &quot;error&quot; != i.type &amp;&amp; a ? m(a[0], p, n, r) : v(null, o || &quot;error&quot;, p, n, r), t[c] = f, a &amp;&amp; e.isFunction(f) &amp;&amp; f(a[0]), f = a = void 0
					}), !1 === d(p, n) ? (h(&quot;abort&quot;), p) : (t[c] = function() {
						a = arguments
					}, l.src = n.url.replace(/\?(.+)=\?/, &quot;?$1=&quot; + c), o.head.appendChild(l), n.timeout &gt; 0 &amp;&amp; (s = setTimeout(function() {
						h(&quot;timeout&quot;)
					}, n.timeout)), p)
				}, e.ajaxSettings = {
					type: &quot;GET&quot;,
					beforeSend: y,
					success: y,
					error: y,
					complete: y,
					context: null,
					global: !0,
					xhr: function() {
						return new t.XMLHttpRequest
					},
					accepts: {
						script: &quot;text/javascript, application/javascript, application/x-javascript&quot;,
						json: c,
						xml: &quot;application/xml, text/xml&quot;,
						html: l,
						text: &quot;text/plain&quot;
					},
					crossDomain: !1,
					timeout: 0,
					processData: !0,
					cache: !0,
					dataFilter: y
				}, e.ajax = function(i) {
					var a, g, b = e.extend({}, i || {}),
						E = e.Deferred &amp;&amp; e.Deferred();
					for (n in e.ajaxSettings) void 0 === b[n] &amp;&amp; (b[n] = e.ajaxSettings[n]);
					!
					function(t) {
						t.global &amp;&amp; 0 == e.active++ &amp;&amp; p(t, null, &quot;ajaxStart&quot;)
					}(b), b.crossDomain || ((a = o.createElement(&quot;a&quot;)).href = b.url, a.href = a.href, b.crossDomain = h.protocol + &quot;//&quot; + h.host != a.protocol + &quot;//&quot; + a.host), b.url || (b.url = t.location.toString()), (g = b.url.indexOf(&quot;#&quot;)) &gt; -1 &amp;&amp; (b.url = b.url.slice(0, g)), function(t) {
						t.processData &amp;&amp; t.data &amp;&amp; &quot;string&quot; != e.type(t.data) &amp;&amp; (t.data = e.param(t.data, t.traditional)), !t.data || t.type &amp;&amp; &quot;GET&quot; != t.type.toUpperCase() &amp;&amp; &quot;jsonp&quot; != t.dataType || (t.url = x(t.url, t.data), t.data = void 0)
					}(b);
					var j = b.dataType,
						T = /\?.+=\?/.test(b.url);
					if (T &amp;&amp; (j = &quot;jsonp&quot;), !1 !== b.cache &amp;&amp; (i &amp;&amp; !0 === i.cache || &quot;script&quot; != j &amp;&amp; &quot;jsonp&quot; != j) || (b.url = x(b.url, &quot;_=&quot; + Date.now())), &quot;jsonp&quot; == j) return T || (b.url = x(b.url, b.jsonp ? b.jsonp + &quot;=?&quot; : !1 === b.jsonp ? &quot;&quot; : &quot;callback=?&quot;)), e.ajaxJSONP(b, E);
					var w, S = b.accepts[j],
						C = {},
						N = function(t, e) {
							C[t.toLowerCase()] = [t, e]
						},
						O = /^([\w-]+:)\/\//.test(b.url) ? RegExp.$1 : t.location.protocol,
						P = b.xhr(),
						A = P.setRequestHeader;
					if (E &amp;&amp; E.promise(P), b.crossDomain || N(&quot;X-Requested-With&quot;, &quot;XMLHttpRequest&quot;), N(&quot;Accept&quot;, S || &quot;*/*&quot;), (S = b.mimeType || S) &amp;&amp; (S.indexOf(&quot;,&quot;) &gt; -1 &amp;&amp; (S = S.split(&quot;,&quot;, 2)[0]), P.overrideMimeType &amp;&amp; P.overrideMimeType(S)), (b.contentType || !1 !== b.contentType &amp;&amp; b.data &amp;&amp; &quot;GET&quot; != b.type.toUpperCase()) &amp;&amp; N(&quot;Content-Type&quot;, b.contentType || &quot;application/x-www-form-urlencoded&quot;), b.headers) for (r in b.headers) N(r, b.headers[r]);
					if (P.setRequestHeader = N, P.onreadystatechange = function() {
						if (4 == P.readyState) {
							P.onreadystatechange = y, clearTimeout(w);
							var t, n = !1;
							if (P.status &gt;= 200 &amp;&amp; P.status &lt; 300 || 304 == P.status || 0 == P.status &amp;&amp; &quot;file:&quot; == O) {
								if (j = j || ((r = b.mimeType || P.getResponseHeader(&quot;content-type&quot;)) &amp;&amp; (r = r.split(&quot;;&quot;, 2)[0]), r &amp;&amp; (r == l ? &quot;html&quot; : r == c ? &quot;json&quot; : s.test(r) ? &quot;script&quot; : u.test(r) &amp;&amp; &quot;xml&quot;) || &quot;text&quot;), &quot;arraybuffer&quot; == P.responseType || &quot;blob&quot; == P.responseType) t = P.response;
								else {
									t = P.responseText;
									try {
										t = function(t, e, n) {
											if (n.dataFilter == y) return t;
											var r = n.context;
											return n.dataFilter.call(r, t, e)
										}(t, j, b), &quot;script&quot; == j ? (0, eval)(t) : &quot;xml&quot; == j ? t = P.responseXML : &quot;json&quot; == j &amp;&amp; (t = f.test(t) ? null : e.parseJSON(t))
									} catch (i) {
										n = i
									}
									if (n) return v(n, &quot;parsererror&quot;, P, b, E)
								}
								m(t, P, b, E)
							} else v(P.statusText || null, P.status ? &quot;error&quot; : &quot;abort&quot;, P, b, E)
						}
						var r
					}, !1 === d(P, b)) return P.abort(), v(null, &quot;abort&quot;, P, b, E), P;
					var D = !(&quot;async&quot; in b) || b.async;
					if (P.open(b.type, b.url, D, b.username, b.password), b.xhrFields) for (r in b.xhrFields) P[r] = b.xhrFields[r];
					for (r in C) A.apply(P, C[r]);
					return b.timeout &gt; 0 &amp;&amp; (w = setTimeout(function() {
						P.onreadystatechange = y, P.abort(), v(null, &quot;timeout&quot;, P, b, E)
					}, b.timeout)), P.send(b.data ? b.data : null), P
				}, e.get = function() {
					return e.ajax(b.apply(null, arguments))
				}, e.post = function() {
					var t = b.apply(null, arguments);
					return t.type = &quot;POST&quot;, e.ajax(t)
				}, e.getJSON = function() {
					var t = b.apply(null, arguments);
					return t.dataType = &quot;json&quot;, e.ajax(t)
				}, e.fn.load = function(t, n, r) {
					if (!this.length) return this;
					var i, o = this,
						s = t.split(/\s/),
						u = b(t, n, r),
						c = u.success;
					return s.length &gt; 1 &amp;&amp; (u.url = s[0], i = s[1]), u.success = function(t) {
						o.html(i ? e(&quot;<div>&quot;).html(t.replace(a, &quot;&quot;)).find(i) : t), c &amp;&amp; c.apply(o, arguments)
					}, e.ajax(u), this
				};
				var E = encodeURIComponent;
				e.param = function(t, n) {
					var r = [];
					return r.add = function(t, n) {
						e.isFunction(n) &amp;&amp; (n = n()), null == n &amp;&amp; (n = &quot;&quot;), this.push(E(t) + &quot;=&quot; + E(n))
					}, function t(n, r, i, o) {
						var a, s = e.isArray(r),
							u = e.isPlainObject(r);
						e.each(r, function(r, c) {
							a = e.type(c), o &amp;&amp; (r = i ? o : o + &quot;[&quot; + (u || &quot;object&quot; == a || &quot;array&quot; == a ? r : &quot;&quot;) + &quot;]&quot;), !o &amp;&amp; s ? n.add(c.name, c.value) : &quot;array&quot; == a || !i &amp;&amp; &quot;object&quot; == a ? t(n, c, i, r) : n.add(r, c)
						})
					}(r, t, n), r.join(&quot;&amp;&quot;).replace(/%20/g, &quot;+&quot;)
				}
			}(n), (e = n).fn.serializeArray = function() {
				var t, n, r = [],
					i = function(e) {
						if (e.forEach) return e.forEach(i);
						r.push({
							name: t,
							value: e
						})
					};
				return this[0] &amp;&amp; e.each(this[0].elements, function(r, o) {
					n = o.type, (t = o.name) &amp;&amp; &quot;fieldset&quot; != o.nodeName.toLowerCase() &amp;&amp; !o.disabled &amp;&amp; &quot;submit&quot; != n &amp;&amp; &quot;reset&quot; != n &amp;&amp; &quot;button&quot; != n &amp;&amp; &quot;file&quot; != n &amp;&amp; (&quot;radio&quot; != n &amp;&amp; &quot;checkbox&quot; != n || o.checked) &amp;&amp; i(e(o).val())
				}), r
			}, e.fn.serialize = function() {
				var t = [];
				return this.serializeArray().forEach(function(e) {
					t.push(encodeURIComponent(e.name) + &quot;=&quot; + encodeURIComponent(e.value))
				}), t.join(&quot;&amp;&quot;)
			}, e.fn.submit = function(t) {
				if (0 in arguments) this.bind(&quot;submit&quot;, t);
				else if (this.length) {
					var n = e.Event(&quot;submit&quot;);
					this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
				}
				return this
			}, function() {
				try {
					getComputedStyle(void 0)
				} catch (n) {
					var e = getComputedStyle;
					t.getComputedStyle = function(t, r) {
						try {
							return e(t, r)
						} catch (n) {
							return null
						}
					}
				}
			}(), n
		});
	}, {}],
	&quot;Bb20&quot;: [function(require, module, exports) {
		Object.prototype.document = window.document, Object.prototype.location = window.location;
		var t = require(&quot;zepto&quot;).$;

		function e() {
			var e = [&quot;&#x5BD2;&#x8749;&#x9ECE;&#x660E;&#x4E4B;&#x65F6;&#xFF0C;&#x4FBF;&#x662F;&#x91CD;&#x751F;&#x4E4B;&#x65E5;&#x3002;&quot;, &quot;&#x7ED9;&#x65F6;&#x5149;&#x4EE5;&#x751F;&#x547D;<br>&#x7ED9;&#x5C81;&#x6708;&#x4EE5;&#x6587;&#x660E;&quot;, &quot;&#x4E16;&#x754C;&#x662F;&#x7F8E;&#x4E3D;&#x7684;<br>&#x5C31;&#x7B97;&#x5145;&#x6EE1;&#x60B2;&#x4F24;&#x548C;&#x6CEA;&#x6C34;<br>&#x4E5F;&#x8BF7;&#x7741;&#x5F00;&#x4F60;&#x7684;&#x53CC;&#x773C;<br>&#x53BB;&#x505A;&#x4F60;&#x60F3;&#x8981;&#x505A;&#x7684;&#x4E8B;<br>&#x53BB;&#x6210;&#x4E3A;&#x4F60;&#x60F3;&#x8981;&#x6210;&#x4E3A;&#x7684;&#x4EBA;&quot;, &quot;&#x5F53;&#x4F60;&#x5728;&#x51DD;&#x89C6;&#x7740;&#x7F51;&#x9875;&#x7684;&#x65F6;&#x5019;<br>&#x7F51;&#x9875;&#x4E5F;&#x6B63;&#x5728;&#x51DD;&#x89C6;&#x7740;&#x4F60;&quot;, &quot;&#x6B63;&#x56E0;&#x4E3A;&#x4E0D;&#x4F1A;&#x53D1;&#x751F;&#xFF0C;&#x6240;&#x4EE5;&#x624D;&#x53EB;&#x5947;&#x8FF9;&#x3002;&quot;, &quot;&#x6BCF;&#x4E2A;&#x4EBA;<br>&#x90FD;&#x6709;&#x4E00;&#x4E2A;&#x4E16;&#x754C;<br>&#x5B89;&#x9759;&#x800C;&#x5B64;&#x72EC;&quot;, &quot;&#x8FDE;&#x63A5;&#x9065;&#x8FDC;&#x7684;&#x8FC7;&#x53BB;&#x4E0E;&#x672A;&#x6765;,<br>&#x6211;&#x4EEC;&#x4E3A;&#x6B64;&#x800C;&#x5B58;&#x5728;&#x2026;&#x2026;&quot;],
				i = o(0, e.length - 1);
			t(&quot;#slogan&quot;).html(e[i])
		}
		function o(t, e) {
			var o = e - t,
				i = Math.random();
			return t + Math.round(i * o)
		}
		delete Object.prototype.document, delete Object.prototype.location, window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		function(t) {
			window.setTimeout(t, 1e3 / 60)
		}, t(function() {
			var t, e, o = document.createElement(&quot;canvas&quot;),
				i = document.getElementById(&quot;startrack&quot;);
			i.width = o.width = t = i.offsetWidth, i.height = o.height = e = i.offsetHeight;
			var n = Math.max(t, e);
			o.width = 2.6 * n, o.height = 2.6 * n;
			var a = i.getContext(&quot;2d&quot;),
				r = o.getContext(&quot;2d&quot;),
				l = t,
				d = [],
				c = 0;

			function h(t, e) {
				var o = e - t,
					i = Math.random();
				return t + Math.round(i * o)
			}
			function u() {
				a.drawImage(o, -o.width / 2, -o.height / 2)
			}
			function w() {
				u(), ++c &gt; 150 &amp;&amp; c % 8 == 0 &amp;&amp; (a.fillStyle = &quot;rgba(0,0,0,.04)&quot;, a.fillRect(-3 * n, -3 * n, 6 * n, 6 * n)), f(.025)
			}
			function f(t) {
				a.rotate(t * Math.PI / 180)
			}
			a.fillStyle = &quot;rgba(21,21,21,1)&quot;, a.fillRect(0, 0, t, e), a.lineCap = &quot;round&quot;;
			for (var m, s, g, b, v = 2e4; v--;) m = void 0, s = void 0, g = void 0, b = void 0, d.push({
				x: h(-o.width, o.width),
				y: h(-o.height, o.height),
				size: 1.2,
				color: (m = h(120, 255), s = h(120, 255), g = h(120, 255), b = h(30, 100) / 100, &quot;rgba(&quot; + m + &quot;,&quot; + s + &quot;,&quot; + g + &quot;,&quot; + b + &quot;)&quot;)
			});
			!
			function() {
				for (var t = d.length; t--;) {
					var e = d[t];
					r.beginPath(), r.arc(e.x, e.y, e.size, 0, 2 * Math.PI, !0), r.fillStyle = e.color, r.closePath(), r.fill()
				}
			}();
			var p = l;
			a.translate(p, 0), function t() {
				requestAnimFrame(t), w()
			}(), window.onresize = function() {
				i.width = t = i.offsetWidth, i.height = e = i.offsetHeight, a.fillStyle = &quot;rgba(21,21,21,1)&quot;, a.fillRect(0, 0, t, e)
			}
		}), window.onscroll = function() {
			t(window).scrollTop() &gt; .6 * t(window).height() ? t(&quot;.background&quot;).addClass(&quot;fixed&quot;) : t(&quot;.background&quot;).removeClass(&quot;fixed&quot;)
		}, t(function() {
			e(), console.log(&quot;Nekotora&apos;s Flag.Moe Homepage&quot;)
		});
	}, {
		&quot;zepto&quot;: &quot;XR92&quot;
	}]
}, {}, [&quot;Bb20&quot;], null)
//# sourceMappingURL=/page.3a0791a3.js.map</div></[^<]*)*<\></script\b[^<]*(?:(?!<\></"></$1></(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^></\></(\w+)\s*\></(\w+|!)[^>