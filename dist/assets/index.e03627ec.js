import {
	S as e,
	i as t,
	s as n,
	e as s,
	t as r,
	a as o,
	b as c,
	c as l,
	d as a,
	f as i,
	g as $,
	h as u,
	n as f,
	j as d,
	w as p,
	D as m,
	C as g,
	k as h,
	m as v,
	l as x,
	o as y,
	p as w,
	q as b,
	r as C,
	u as E,
	v as S,
	x as k,
	y as A,
	z as N,
	A as M,
	B as j,
	E as D,
	H as z,
	F as _,
	G as T,
	I as F,
	J as L,
	K as I,
	L as J,
	M as H,
	N as R,
	O as B,
	P as U,
	Q as P,
	R as O,
	T as q,
	U as Y,
	V as K,
	W as Z,
	X as G,
	Y as W,
	Z as V,
	_ as X,
	$ as Q,
	a0 as ee,
	a1 as te,
	a2 as ne,
	a3 as se,
	a4 as re,
	a5 as oe,
	a6 as ce,
	a7 as le,
	a8 as ae,
	a9 as ie,
} from './vendor.ba71da13.js'
!(function () {
	const e = document.createElement('link').relList
	if (!(e && e.supports && e.supports('modulepreload'))) {
		for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
			t(e)
		new MutationObserver((e) => {
			for (const n of e)
				if ('childList' === n.type)
					for (const e of n.addedNodes)
						'LINK' === e.tagName &&
							'modulepreload' === e.rel &&
							t(e)
		}).observe(document, { childList: !0, subtree: !0 })
	}
	function t(e) {
		if (e.ep) return
		e.ep = !0
		const t = (function (e) {
			const t = {}
			return (
				e.integrity && (t.integrity = e.integrity),
				e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
				'use-credentials' === e.crossorigin
					? (t.credentials = 'include')
					: 'anonymous' === e.crossorigin
					? (t.credentials = 'omit')
					: (t.credentials = 'same-origin'),
				t
			)
		})(e)
		fetch(e.href, t)
	}
})()
function $e(e, t, n) {
	const s = e.slice()
	return (s[2] = t[n]), s
}
function ue(e) {
	let t,
		n,
		f,
		d,
		p = e[2].label + ''
	return {
		c() {
			;(t = s('li')),
				(n = s('a')),
				(f = r(p)),
				(d = o()),
				c(n, 'href', '#'),
				c(n, 'class', 'svelte-1x7hdh2'),
				c(t, 'class', 'tag svelte-1x7hdh2'),
				l(t, '--color', e[2].color)
		},
		m(e, s) {
			a(e, t, s), i(t, n), i(n, f), i(t, d)
		},
		p(e, n) {
			1 & n && p !== (p = e[2].label + '') && $(f, p),
				1 & n && l(t, '--color', e[2].color)
		},
		d(e) {
			e && u(t)
		},
	}
}
function fe(e) {
	let t,
		n = e[0],
		r = []
	for (let s = 0; s < n.length; s += 1) r[s] = ue($e(e, n, s))
	return {
		c() {
			t = s('ul')
			for (let e = 0; e < r.length; e += 1) r[e].c()
			c(t, 'class', 'tags svelte-1x7hdh2')
		},
		m(e, n) {
			a(e, t, n)
			for (let s = 0; s < r.length; s += 1) r[s].m(t, null)
		},
		p(e, [s]) {
			if (1 & s) {
				let o
				for (n = e[0], o = 0; o < n.length; o += 1) {
					const c = $e(e, n, o)
					r[o]
						? r[o].p(c, s)
						: ((r[o] = ue(c)), r[o].c(), r[o].m(t, null))
				}
				for (; o < r.length; o += 1) r[o].d(1)
				r.length = n.length
			}
		},
		i: f,
		o: f,
		d(e) {
			e && u(t), d(r, e)
		},
	}
}
function de(e, t, n) {
	const s = (e) => {
		switch (e) {
			case 'JavaScript':
				return '#f1e05a'
			case 'Python':
				return '#3572A5'
			case 'Java':
				return '#b07219'
			case 'C++':
			case 'C':
				return '#f34b7d'
			case 'Ruby':
				return '#701516'
			case 'PHP':
				return '#4F5D95'
			case 'Swift':
				return '#ffac45'
			case 'Go':
				return '#6aac0f'
			case 'Kotlin':
				return '#f18e33'
			case 'Objective-C':
				return '#438eff'
			case 'Svelte':
				return '#ff5500'
			case 'TypeScript':
				return '#2b7489'
			case 'Rust':
				return '#dea584'
			case 'HTML':
				return '#e34c26'
			case 'CSS':
				return '#563d7c'
			case 'NodeJS':
			case 'Flask':
				return '#339933'
			default:
				return '#aaa'
		}
	}
	let { tags: r = [] } = t
	return (
		(r = r.map((e) => ({ label: e, color: s(e) }))),
		(e.$$set = (e) => {
			'tags' in e && n(0, (r = e.tags))
		}),
		[r]
	)
}
class pe extends e {
	constructor(e) {
		super(), t(this, e, de, fe, n, { tags: 0 })
	}
}
const me =
		'Senior Student at TanenbaumCHAT, Software Developer & Co-founder of Habit Cash, , Coding Tutor',
	ge =
		'I am a senior high school student, and I am very passionate about computer science and technology. Specific interests of mine include Machine Learning/Artificial Intelligence and Natural Language Processing, Web Development, Modern Physics, and Mathematics. Aside from being in school, I recently co-founded a startup and I currently work there as a software developer. On the topic of software development, I am also a coding tutor and developer bootcamp instructor for School Simplified. Other hobbies of mine include playing guitar and listening to podcasts.',
	he = [
		{
			title: 'FragmentQR',
			description:
				'Browser extension that allows for the generation of QR codes linking to arbitrary text on a page.',
			tech: ['JavaScript', 'Chrome APIs', 'Chrome extension'],
			url: 'https://bit.ly/FQRInstall',
			imageUrl:
				'https://lh3.googleusercontent.com/RunMp0HF3eMndmo8M6fFxiwGRH7yEmafekBuxkStSdxZqSAmp4FVZ9wu4_XoyojJvTJM6VgEy9_Y9lzUKgAXdZJ3eA=w640-h400-e365-rj-sc0x00ffffff',
		},
		{
			title: 'Dystopian Literature Blog',
			description:
				'Blog on various dystopian texts for the final summative task in my grade 11 English class',
			tech: [
				'JavaScript',
				'Svelte',
				'TailwindCSS',
				'Daisy UI',
				'GraphCMS',
			],
			url: 'https://yonahs-fst.vercel.app',
			imageUrl:
				'https://lh3.googleusercontent.com/RunMp0HF3eMndmo8M6fFxiwGRH7yEmafekBuxkStSdxZqSAmp4FVZ9wu4_XoyojJvTJM6VgEy9_Y9lzUKgAXdZJ3eA=w640-h400-e365-rj-sc0x00ffffff',
		},
	],
	ve = [
		'Python',
		'JavaScript',
		'Svelte',
		'NodeJS',
		'Java',
		'Flask',
		'TypeScript',
	]
var xe = {
	name: 'Yonah Aviv',
	headline: me,
	summary: ge,
	projects: he,
	skills: ve,
}
const ye = p(
	Object.freeze({
		__proto__: null,
		[Symbol.toStringTag]: 'Module',
		name: 'Yonah Aviv',
		headline: me,
		summary: ge,
		projects: he,
		skills: ve,
		default: xe,
	})
)
function we(e) {
	let t
	return {
		c() {
			t = r(e[0])
		},
		m(e, n) {
			a(e, t, n)
		},
		p(e, n) {
			1 & n && $(t, e[0])
		},
		d(e) {
			e && u(t)
		},
	}
}
function be(e) {
	let t, n, r, l, $, f, d, p
	return (
		($ = new m({ props: { text: 'Summary' } })),
		(d = new g({
			props: {
				class: 'scroll__',
				$$slots: { default: [we] },
				$$scope: { ctx: e },
			},
		})),
		{
			c() {
				;(t = s('section')),
					(n = s('div')),
					(r = s('div')),
					(l = s('b')),
					h($.$$.fragment),
					(f = o()),
					h(d.$$.fragment),
					c(r, 'class', 'summary svelte-1szwuv6'),
					c(t, 'class', 'svelte-1szwuv6')
			},
			m(e, s) {
				a(e, t, s),
					i(t, n),
					i(n, r),
					i(r, l),
					v($, l, null),
					i(r, f),
					v(d, r, null),
					(p = !0)
			},
			p(e, [t]) {
				const n = {}
				3 & t && (n.$$scope = { dirty: t, ctx: e }), d.$set(n)
			},
			i(e) {
				p || (x($.$$.fragment, e), x(d.$$.fragment, e), (p = !0))
			},
			o(e) {
				y($.$$.fragment, e), y(d.$$.fragment, e), (p = !1)
			},
			d(e) {
				e && u(t), w($), w(d)
			},
		}
	)
}
function Ce(e, t, n) {
	let s
	return (
		ye.subscribe((e) => {
			n(0, (s = e.summary))
		}),
		[s]
	)
}
class Ee extends e {
	constructor(e) {
		super(), t(this, e, Ce, be, n, {})
	}
}
function Se(e) {
	let t, n
	const r = e[8].default,
		o = b(r, e, e[7], null)
	return {
		c() {
			;(t = s('div')),
				o && o.c(),
				l(
					t,
					'--cursor-color',
					'string' == typeof e[0] ? e[0] : '#ff3e00'
				),
				c(t, 'class', 'svelte-1ecftl5'),
				C(t, 'cursor', e[0])
		},
		m(s, r) {
			a(s, t, r), o && o.m(t, null), e[9](t), (n = !0)
		},
		p(e, [s]) {
			o &&
				o.p &&
				(!n || 128 & s) &&
				E(o, r, e, e[7], n ? k(r, e[7], s, null) : S(e[7]), null),
				(!n || 1 & s) &&
					l(
						t,
						'--cursor-color',
						'string' == typeof e[0] ? e[0] : '#ff3e00'
					),
				1 & s && C(t, 'cursor', e[0])
		},
		i(e) {
			n || (x(o, e), (n = !0))
		},
		o(e) {
			y(o, e), (n = !1)
		},
		d(n) {
			n && u(t), o && o.d(n), e[9](null)
		},
	}
}
function ke(e, t, n) {
	let s,
		{ $$slots: r = {}, $$scope: o } = t,
		{ interval: c = 30 } = t,
		{ cascade: l = !1 } = t,
		{ loop: a = !1 } = t,
		{ scramble: i = !1 } = t,
		{ cursor: $ = !0 } = t,
		{ delay: u = 0 } = t,
		f = []
	const d = A(),
		p = (e) => new Promise((t) => setTimeout(t, e)),
		m = (e) => 1 === e.childNodes.length && 3 === e.childNodes[0].nodeType,
		g = async () => {
			return p(
				c[
					((e = 0),
					(t = c.length),
					Math.floor(Math.random() * (t - e) + e))
				] || c
			)
			var e, t
		},
		h = (e, t) =>
			[...Array(e.length).keys()]
				.map((n) => {
					const s = t.includes(n) || ' ' == e[n],
						r = String.fromCharCode(
							65 + Math.round(50 * Math.random())
						)
					return s ? e[n] : r
				})
				.join(''),
		v = async ({ currentNode: e, text: t }) => {
			;(e.textContent = ''), e.classList.add('typing')
			for (const n of t) {
				e.textContent += n
				if (a && e.textContent === t.join('')) {
					for (
						d('done'), await p('number' == typeof a ? a : 1500);
						'' !== e.textContent;

					)
						(e.textContent = e.textContent.slice(0, -1)), await g()
					return
				}
				await g()
			}
			;(null === e.nextSibling && l) ||
				(1 == e.classList.length
					? e.removeAttribute('class')
					: e.classList.remove('typing'))
		}
	return (
		N(() => {
			;((e) => {
				const t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT)
				let r = t.nextNode()
				for (; r; ) {
					const e = r.textContent.split('')
					m(r) && f.push({ currentNode: r, text: e }),
						(r = t.nextNode())
				}
				if (m(s)) {
					const e = s.textContent.split('')
					n(1, (s.textContent = ''), s)
					const t = document.createElement('p')
					s.appendChild(t), f.push({ currentNode: t, text: e })
				}
			})(s),
				!i && f.forEach(({ currentNode: e }) => (e.textContent = '')),
				setTimeout(() => {
					a
						? (async () => {
								for (; a; )
									for (const {
										currentNode: e,
										text: t,
									} of f) {
										const n = document.createElement(
											e.tagName
										)
										;(n.textContent = t.join('')),
											s.childNodes.forEach((e) =>
												e.remove()
											),
											s.appendChild(n),
											await v({
												currentNode: n,
												text: t,
											}),
											s.childNodes.forEach((e) =>
												e.remove()
											)
									}
						  })()
						: i
						? f.forEach(async (e) => {
								const { currentNode: t, text: n } = e,
									s = [],
									r =
										'number' == typeof i
											? (1e3 * i) / c
											: 100
								let o = 0
								do {
									t.textContent = h(t.textContent, s)
									for (let e = 0; e < n.length; e++) {
										const r = t.textContent
										s.includes(e) ||
											n[e] !== r[e] ||
											s.push(e)
									}
									;(o += 1), await p(c)
								} while (t.textContent != n.join('') && o < r)
								d('done'), (t.textContent = n.join(''))
						  })
						: (async () => {
								l &&
									f.forEach(
										({ currentNode: e }) =>
											(e.textContent = '')
									)
								for (const n of f) l ? await v(n) : v(n)
								if (l) return d('done')
								const e = new MutationObserver((e) => {
										e.forEach((e) => {
											'attributes' === e.type &&
												!e.target.classList.contains(
													'typing'
												) &&
												d('done')
										})
									}),
									t = f.sort((e, t) => t.length - e.length)[0]
										.currentNode
								e.observe(t, {
									attributes: !0,
									childList: !0,
									subtree: !0,
								})
						  })()
				}, u)
		}),
		M(() => n(2, (a = !1))),
		(e.$$set = (e) => {
			'interval' in e && n(3, (c = e.interval)),
				'cascade' in e && n(4, (l = e.cascade)),
				'loop' in e && n(2, (a = e.loop)),
				'scramble' in e && n(5, (i = e.scramble)),
				'cursor' in e && n(0, ($ = e.cursor)),
				'delay' in e && n(6, (u = e.delay)),
				'$$scope' in e && n(7, (o = e.$$scope))
		}),
		[
			$,
			s,
			a,
			c,
			l,
			i,
			u,
			o,
			r,
			function (e) {
				j[e ? 'unshift' : 'push'](() => {
					;(s = e), n(1, s)
				})
			},
		]
	)
}
class Ae extends e {
	constructor(e) {
		super(),
			t(this, e, ke, Se, n, {
				interval: 3,
				cascade: 4,
				loop: 2,
				scramble: 5,
				cursor: 0,
				delay: 6,
			})
	}
}
function Ne(e) {
	let t
	return {
		c() {
			t = r(e[0])
		},
		m(e, n) {
			a(e, t, n)
		},
		p(e, n) {
			1 & n && $(t, e[0])
		},
		d(e) {
			e && u(t)
		},
	}
}
function Me(e) {
	let t, n
	return (
		(t = new z({
			props: { $$slots: { default: [Ne] }, $$scope: { ctx: e } },
		})),
		{
			c() {
				h(t.$$.fragment)
			},
			m(e, s) {
				v(t, e, s), (n = !0)
			},
			p(e, n) {
				const s = {}
				5 & n && (s.$$scope = { dirty: n, ctx: e }), t.$set(s)
			},
			i(e) {
				n || (x(t.$$.fragment, e), (n = !0))
			},
			o(e) {
				y(t.$$.fragment, e), (n = !1)
			},
			d(e) {
				w(t, e)
			},
		}
	)
}
function je(e) {
	let t
	return {
		c() {
			t = r(e[1])
		},
		m(e, n) {
			a(e, t, n)
		},
		p(e, n) {
			2 & n && $(t, e[1])
		},
		d(e) {
			e && u(t)
		},
	}
}
function De(e) {
	let t, n, r, l, $, f, d, p, m, g, b, C, E, S, k, A, N, M, j, z, _, T, F
	return (
		(S = new Ae({
			props: {
				interval: 100,
				cursor: '$main',
				$$slots: { default: [Me] },
				$$scope: { ctx: e },
			},
		})),
		(A = new D({
			props: { $$slots: { default: [je] }, $$scope: { ctx: e } },
		})),
		{
			c() {
				;(t = s('section')),
					(n = s('br')),
					(r = o()),
					(l = s('br')),
					($ = o()),
					(f = s('br')),
					(d = o()),
					(p = s('br')),
					(m = o()),
					(g = s('br')),
					(b = o()),
					(C = s('br')),
					(E = o()),
					h(S.$$.fragment),
					(k = o()),
					h(A.$$.fragment),
					(N = o()),
					(M = s('br')),
					(j = o()),
					(z = s('br')),
					(_ = o()),
					(T = s('br')),
					c(t, 'class', 'hero svelte-ge8lqy')
			},
			m(e, s) {
				a(e, t, s),
					i(t, n),
					i(t, r),
					i(t, l),
					i(t, $),
					i(t, f),
					i(t, d),
					i(t, p),
					i(t, m),
					i(t, g),
					i(t, b),
					i(t, C),
					i(t, E),
					v(S, t, null),
					i(t, k),
					v(A, t, null),
					i(t, N),
					i(t, M),
					i(t, j),
					i(t, z),
					i(t, _),
					i(t, T),
					(F = !0)
			},
			p(e, [t]) {
				const n = {}
				5 & t && (n.$$scope = { dirty: t, ctx: e }), S.$set(n)
				const s = {}
				6 & t && (s.$$scope = { dirty: t, ctx: e }), A.$set(s)
			},
			i(e) {
				F || (x(S.$$.fragment, e), x(A.$$.fragment, e), (F = !0))
			},
			o(e) {
				y(S.$$.fragment, e), y(A.$$.fragment, e), (F = !1)
			},
			d(e) {
				e && u(t), w(S), w(A)
			},
		}
	)
}
function ze(e, t, n) {
	let s, r
	return (
		ye.subscribe((e) => {
			n(0, (s = e.name)), n(1, (r = e.headline))
		}),
		[s, r]
	)
}
class _e extends e {
	constructor(e) {
		super(), t(this, e, ze, De, n, {})
	}
}
function Te(e) {
	let t, n, r, l, $, d, p, m
	return (
		(n = new _e({})),
		(l = new Ee({})),
		(p = new pe({ props: { tags: e[0] } })),
		{
			c() {
				;(t = s('container')),
					h(n.$$.fragment),
					(r = o()),
					h(l.$$.fragment),
					($ = o()),
					(d = s('section')),
					h(p.$$.fragment),
					c(d, 'class', 'row svelte-105nggw')
			},
			m(e, s) {
				a(e, t, s),
					v(n, t, null),
					i(t, r),
					v(l, t, null),
					i(t, $),
					i(t, d),
					v(p, d, null),
					(m = !0)
			},
			p: f,
			i(e) {
				m ||
					(x(n.$$.fragment, e),
					x(l.$$.fragment, e),
					x(p.$$.fragment, e),
					(m = !0))
			},
			o(e) {
				y(n.$$.fragment, e),
					y(l.$$.fragment, e),
					y(p.$$.fragment, e),
					(m = !1)
			},
			d(e) {
				e && u(t), w(n), w(l), w(p)
			},
		}
	)
}
function Fe(e) {
	return (
		ye.subscribe((e) => {
			e.skills
		}),
		[undefined]
	)
}
class Le extends e {
	constructor(e) {
		super(), t(this, e, Fe, Te, n, {})
	}
}
function Ie(e) {
	let t, n
	const r = e[1].default,
		o = b(r, e, e[0], null)
	return {
		c() {
			;(t = s('div')), o && o.c(), c(t, 'class', 'grid svelte-1wemj4f')
		},
		m(e, s) {
			a(e, t, s), o && o.m(t, null), (n = !0)
		},
		p(e, [t]) {
			o &&
				o.p &&
				(!n || 1 & t) &&
				E(o, r, e, e[0], n ? k(r, e[0], t, null) : S(e[0]), null)
		},
		i(e) {
			n || (x(o, e), (n = !0))
		},
		o(e) {
			y(o, e), (n = !1)
		},
		d(e) {
			e && u(t), o && o.d(e)
		},
	}
}
function Je(e, t, n) {
	let { $$slots: s = {}, $$scope: r } = t
	return (
		(e.$$set = (e) => {
			'$$scope' in e && n(0, (r = e.$$scope))
		}),
		[r, s]
	)
}
class He extends e {
	constructor(e) {
		super(), t(this, e, Je, Ie, n, {})
	}
}
function Re(e) {
	let t, n, r, $, f, d, p, m, g, b, C, E, S, k, A, N, M
	return (
		(n = new Ae({
			props: {
				interval: 100,
				$$slots: { default: [Be] },
				$$scope: { ctx: e },
			},
		})),
		(f = new Ae({
			props: {
				interval: 1,
				delay: 3e3,
				$$slots: { default: [Ue] },
				$$scope: { ctx: e },
			},
		})),
		(S = new pe({ props: { tags: e[0].technologies } })),
		{
			c() {
				;(t = s('div')),
					h(n.$$.fragment),
					(r = o()),
					($ = s('div')),
					h(f.$$.fragment),
					(d = o()),
					(p = s('img')),
					(C = o()),
					(E = s('div')),
					h(S.$$.fragment),
					_(p.src, (m = e[0].imageUrl)) || c(p, 'src', m),
					c(p, 'alt', (g = 'A screenshot of ' + e[0].title)),
					c(p, 'class', 'svelte-16z3x0w'),
					c($, 'class', 'description svelte-16z3x0w'),
					c(E, 'class', 'technologies svelte-16z3x0w'),
					l(
						t,
						'box-shadow',
						6 * e[2] +
							'px ' +
							3 * e[2] +
							'px #ff3e00, ' +
							10 * e[2] +
							'px ' +
							5 * e[2] +
							'px rgba(255, 85, 0, 0.55), ' +
							14 * e[2] +
							'px ' +
							7 * e[2] +
							'px rgba(255, 100, 0.6, 0.22)'
					),
					c(t, 'class', 'site dark-mode scroll__ card svelte-16z3x0w')
			},
			m(s, o) {
				a(s, t, o),
					v(n, t, null),
					i(t, r),
					i(t, $),
					v(f, $, null),
					i($, d),
					i($, p),
					i(t, C),
					i(t, E),
					v(S, E, null),
					(A = !0),
					N ||
						((M = [
							T(t, 'click', e[4]),
							T(t, 'mouseenter', e[5]),
							T(t, 'touchstart', e[5], { passive: !0 }),
							T(t, 'mouseleave', e[6]),
							T(t, 'touchend', e[6], { passive: !0 }),
						]),
						(N = !0))
			},
			p(s, r) {
				e = s
				const o = {}
				513 & r && (o.$$scope = { dirty: r, ctx: e }), n.$set(o)
				const a = {}
				513 & r && (a.$$scope = { dirty: r, ctx: e }),
					f.$set(a),
					(!A || (1 & r && !_(p.src, (m = e[0].imageUrl)))) &&
						c(p, 'src', m),
					(!A ||
						(1 & r &&
							g !== (g = 'A screenshot of ' + e[0].title))) &&
						c(p, 'alt', g)
				const i = {}
				1 & r && (i.tags = e[0].technologies),
					S.$set(i),
					(!A || 4 & r) &&
						l(
							t,
							'box-shadow',
							6 * e[2] +
								'px ' +
								3 * e[2] +
								'px #ff3e00, ' +
								10 * e[2] +
								'px ' +
								5 * e[2] +
								'px rgba(255, 85, 0, 0.55), ' +
								14 * e[2] +
								'px ' +
								7 * e[2] +
								'px rgba(255, 100, 0.6, 0.22)'
						)
			},
			i(s) {
				A ||
					(x(n.$$.fragment, s),
					x(f.$$.fragment, s),
					F(() => {
						b || (b = L($, I, { delay: e[7](250, 1e3) }, !0)),
							b.run(1)
					}),
					x(S.$$.fragment, s),
					F(() => {
						k || (k = L(t, J, { delay: e[7](200, 500) }, !0)),
							k.run(1)
					}),
					(A = !0))
			},
			o(s) {
				y(n.$$.fragment, s),
					y(f.$$.fragment, s),
					b || (b = L($, I, { delay: e[7](250, 1e3) }, !1)),
					b.run(0),
					y(S.$$.fragment, s),
					k || (k = L(t, J, { delay: e[7](200, 500) }, !1)),
					k.run(0),
					(A = !1)
			},
			d(e) {
				e && u(t),
					w(n),
					w(f),
					e && b && b.end(),
					w(S),
					e && k && k.end(),
					(N = !1),
					H(M)
			},
		}
	)
}
function Be(e) {
	let t,
		n,
		o,
		l,
		f = e[0].title + ''
	return {
		c() {
			;(t = s('h2')), (n = r(f)), c(t, 'class', 'title svelte-16z3x0w')
		},
		m(e, s) {
			a(e, t, s), i(t, n), (l = !0)
		},
		p(t, s) {
			;(e = t), (!l || 1 & s) && f !== (f = e[0].title + '') && $(n, f)
		},
		i(n) {
			l ||
				(F(() => {
					o || (o = L(t, I, { delay: e[7](250, 500) }, !0)), o.run(1)
				}),
				(l = !0))
		},
		o(n) {
			o || (o = L(t, I, { delay: e[7](250, 500) }, !1)),
				o.run(0),
				(l = !1)
		},
		d(e) {
			e && u(t), e && o && o.end()
		},
	}
}
function Ue(e) {
	let t,
		n = e[0].description + ''
	return {
		c() {
			t = r(n)
		},
		m(e, n) {
			a(e, t, n)
		},
		p(e, s) {
			1 & s && n !== (n = e[0].description + '') && $(t, n)
		},
		d(e) {
			e && u(t)
		},
	}
}
function Pe(e) {
	let t,
		n,
		s = e[1] && Re(e)
	return {
		c() {
			s && s.c(), (t = R())
		},
		m(e, r) {
			s && s.m(e, r), a(e, t, r), (n = !0)
		},
		p(e, [n]) {
			e[1]
				? s
					? (s.p(e, n), 2 & n && x(s, 1))
					: ((s = Re(e)), s.c(), x(s, 1), s.m(t.parentNode, t))
				: s &&
				  (B(),
				  y(s, 1, 1, () => {
						s = null
				  }),
				  U())
		},
		i(e) {
			n || (x(s), (n = !0))
		},
		o(e) {
			y(s), (n = !1)
		},
		d(e) {
			s && s.d(e), e && u(t)
		},
	}
}
function Oe(e, t, n) {
	let s,
		{
			project: r = {
				title: '',
				description: '',
				tech: [],
				url: '#',
				imageUrl: '#',
			},
		} = t
	const o = O(0, { duration: 500, easing: q })
	P(e, o, (e) => n(2, (s = e)))
	let c = !1
	return (
		N(() => n(1, (c = !0))),
		(e.$$set = (e) => {
			'project' in e && n(0, (r = e.project))
		}),
		[
			r,
			c,
			s,
			o,
			() => {
				window.location = r.link
			},
			() => {
				o.set(1)
			},
			() => {
				o.set(0)
			},
			(e, t) => (
				(e = Math.ceil(e)),
				(t = Math.floor(t)),
				Math.floor(Math.random() * (t - e) + e)
			),
		]
	)
}
class qe extends e {
	constructor(e) {
		super(), t(this, e, Oe, Pe, n, { project: 0 })
	}
}
function Ye(e, t, n) {
	const s = e.slice()
	return (s[1] = t[n]), s
}
function Ke(e) {
	let t
	return {
		c() {
			t = r('Projects')
		},
		m(e, n) {
			a(e, t, n)
		},
		d(e) {
			e && u(t)
		},
	}
}
function Ze(e) {
	let t, n
	return (
		(t = new Y({
			props: { $$slots: { default: [Ke] }, $$scope: { ctx: e } },
		})),
		{
			c() {
				h(t.$$.fragment)
			},
			m(e, s) {
				v(t, e, s), (n = !0)
			},
			p(e, n) {
				const s = {}
				16 & n && (s.$$scope = { dirty: n, ctx: e }), t.$set(s)
			},
			i(e) {
				n || (x(t.$$.fragment, e), (n = !0))
			},
			o(e) {
				y(t.$$.fragment, e), (n = !1)
			},
			d(e) {
				w(t, e)
			},
		}
	)
}
function Ge(e) {
	let t, n
	return (
		(t = new qe({
			props: {
				project: {
					title: e[1].title,
					description: e[1].description,
					tech: e[1].tech,
					url: e[1].url,
					imageUrl: e[1].imageUrl,
				},
				class: 'module',
			},
		})),
		{
			c() {
				h(t.$$.fragment)
			},
			m(e, s) {
				v(t, e, s), (n = !0)
			},
			p(e, n) {
				const s = {}
				1 & n &&
					(s.project = {
						title: e[1].title,
						description: e[1].description,
						tech: e[1].tech,
						url: e[1].url,
						imageUrl: e[1].imageUrl,
					}),
					t.$set(s)
			},
			i(e) {
				n || (x(t.$$.fragment, e), (n = !0))
			},
			o(e) {
				y(t.$$.fragment, e), (n = !1)
			},
			d(e) {
				w(t, e)
			},
		}
	)
}
function We(e) {
	let t,
		n,
		s = e[0],
		r = []
	for (let c = 0; c < s.length; c += 1) r[c] = Ge(Ye(e, s, c))
	const o = (e) =>
		y(r[e], 1, 1, () => {
			r[e] = null
		})
	return {
		c() {
			for (let e = 0; e < r.length; e += 1) r[e].c()
			t = R()
		},
		m(e, s) {
			for (let t = 0; t < r.length; t += 1) r[t].m(e, s)
			a(e, t, s), (n = !0)
		},
		p(e, n) {
			if (1 & n) {
				let c
				for (s = e[0], c = 0; c < s.length; c += 1) {
					const o = Ye(e, s, c)
					r[c]
						? (r[c].p(o, n), x(r[c], 1))
						: ((r[c] = Ge(o)),
						  r[c].c(),
						  x(r[c], 1),
						  r[c].m(t.parentNode, t))
				}
				for (B(), c = s.length; c < r.length; c += 1) o(c)
				U()
			}
		},
		i(e) {
			if (!n) {
				for (let e = 0; e < s.length; e += 1) x(r[e])
				n = !0
			}
		},
		o(e) {
			r = r.filter(Boolean)
			for (let t = 0; t < r.length; t += 1) y(r[t])
			n = !1
		},
		d(e) {
			d(r, e), e && u(t)
		},
	}
}
function Ve(e) {
	let t, n, r, c, l
	return (
		(t = new Ae({
			props: {
				interval: 100,
				cursor: '#ff3e00',
				$$slots: { default: [Ze] },
				$$scope: { ctx: e },
			},
		})),
		(c = new He({
			props: { $$slots: { default: [We] }, $$scope: { ctx: e } },
		})),
		{
			c() {
				h(t.$$.fragment),
					(n = o()),
					(r = s('section')),
					h(c.$$.fragment)
			},
			m(e, s) {
				v(t, e, s), a(e, n, s), a(e, r, s), v(c, r, null), (l = !0)
			},
			p(e, [n]) {
				const s = {}
				16 & n && (s.$$scope = { dirty: n, ctx: e }), t.$set(s)
				const r = {}
				17 & n && (r.$$scope = { dirty: n, ctx: e }), c.$set(r)
			},
			i(e) {
				l || (x(t.$$.fragment, e), x(c.$$.fragment, e), (l = !0))
			},
			o(e) {
				y(t.$$.fragment, e), y(c.$$.fragment, e), (l = !1)
			},
			d(e) {
				w(t, e), e && u(n), e && u(r), w(c)
			},
		}
	)
}
function Xe(e, t, n) {
	let s
	return (
		ye.subscribe((e) => {
			n(0, (s = e.projects))
		}),
		[s]
	)
}
class Qe extends e {
	constructor(e) {
		super(), t(this, e, Xe, Ve, n, {})
	}
}
function et(e) {
	let t
	return {
		c() {
			t = r('Resume')
		},
		m(e, n) {
			a(e, t, n)
		},
		d(e) {
			e && u(t)
		},
	}
}
function tt(e) {
	let t, n
	return (
		(t = new z({
			props: { $$slots: { default: [et] }, $$scope: { ctx: e } },
		})),
		{
			c() {
				h(t.$$.fragment)
			},
			m(e, s) {
				v(t, e, s), (n = !0)
			},
			p(e, n) {
				const s = {}
				1 & n && (s.$$scope = { dirty: n, ctx: e }), t.$set(s)
			},
			i(e) {
				n || (x(t.$$.fragment, e), (n = !0))
			},
			o(e) {
				y(t.$$.fragment, e), (n = !1)
			},
			d(e) {
				w(t, e)
			},
		}
	)
}
function nt(e) {
	let t
	return {
		c() {
			;(t = s('em')), (t.textContent = 'Drag corners to resize')
		},
		m(e, n) {
			a(e, t, n)
		},
		d(e) {
			e && u(t)
		},
	}
}
function st(e) {
	let t, n, r, l, $, f, d, p
	return (
		(t = new Ae({
			props: {
				interval: 100,
				cursor: '#ff3e00',
				$$slots: { default: [tt] },
				$$scope: { ctx: e },
			},
		})),
		(l = new D({
			props: { $$slots: { default: [nt] }, $$scope: { ctx: e } },
		})),
		{
			c() {
				h(t.$$.fragment),
					(n = o()),
					(r = s('section')),
					h(l.$$.fragment),
					($ = o()),
					(f = s('iframe')),
					_(
						f.src,
						(d =
							'https://onedrive.live.com/embed?cid=D1BCEE1A2FD48DEE&resid=D1BCEE1A2FD48DEE%213115&authkey=AOaKHaMR46vCr84&em=2')
					) ||
						c(
							f,
							'src',
							'https://onedrive.live.com/embed?cid=D1BCEE1A2FD48DEE&resid=D1BCEE1A2FD48DEE%213115&authkey=AOaKHaMR46vCr84&em=2'
						),
					c(f, 'height', '800'),
					c(f, 'frameborder', '0'),
					c(f, 'width', '800'),
					c(f, 'scrolling', 'no'),
					c(r, 'class', 'svelte-bab9mt')
			},
			m(e, s) {
				v(t, e, s),
					a(e, n, s),
					a(e, r, s),
					v(l, r, null),
					i(r, $),
					i(r, f),
					(p = !0)
			},
			p(e, [n]) {
				const s = {}
				1 & n && (s.$$scope = { dirty: n, ctx: e }), t.$set(s)
				const r = {}
				1 & n && (r.$$scope = { dirty: n, ctx: e }), l.$set(r)
			},
			i(e) {
				p || (x(t.$$.fragment, e), x(l.$$.fragment, e), (p = !0))
			},
			o(e) {
				y(t.$$.fragment, e), y(l.$$.fragment, e), (p = !1)
			},
			d(e) {
				w(t, e), e && u(n), e && u(r), w(l)
			},
		}
	)
}
class rt extends e {
	constructor(e) {
		super(), t(this, e, null, st, n, {})
	}
}
function ot(e) {
	let t, n, r, o
	const c = e[1].default,
		l = b(c, e, e[0], null)
	return {
		c() {
			;(t = s('div')), l && l.c()
		},
		m(e, n) {
			a(e, t, n), l && l.m(t, null), (o = !0)
		},
		p(e, [t]) {
			l &&
				l.p &&
				(!o || 1 & t) &&
				E(l, c, e, e[0], o ? k(c, e[0], t, null) : S(e[0]), null)
		},
		i(e) {
			o ||
				(x(l, e),
				F(() => {
					r && r.end(1),
						(n = K(t, G, { x: -500, duration: 250, delay: 0 })),
						n.start()
				}),
				(o = !0))
		},
		o(e) {
			y(l, e),
				n && n.invalidate(),
				(r = Z(t, G, { x: -500, duration: 250 })),
				(o = !1)
		},
		d(e) {
			e && u(t), l && l.d(e), e && r && r.end()
		},
	}
}
function ct(e, t, n) {
	let { $$slots: s = {}, $$scope: r } = t
	return (
		(e.$$set = (e) => {
			'$$scope' in e && n(0, (r = e.$$scope))
		}),
		[r, s]
	)
}
class lt extends e {
	constructor(e) {
		super(), t(this, e, ct, ot, n, {})
	}
}
function at(e) {
	let t
	return {
		c() {
			t = r('@')
		},
		m(e, n) {
			a(e, t, n)
		},
		d(e) {
			e && u(t)
		},
	}
}
function it(e) {
	let t, n
	return (
		(t = new Q({ props: { strokeWidth: '2' } })),
		{
			c() {
				h(t.$$.fragment)
			},
			m(e, s) {
				v(t, e, s), (n = !0)
			},
			p: f,
			i(e) {
				n || (x(t.$$.fragment, e), (n = !0))
			},
			o(e) {
				y(t.$$.fragment, e), (n = !1)
			},
			d(e) {
				w(t, e)
			},
		}
	)
}
function $t(e) {
	let t, n
	return (
		(t = new ee({ props: { strokeWidth: '1.8' } })),
		{
			c() {
				h(t.$$.fragment)
			},
			m(e, s) {
				v(t, e, s), (n = !0)
			},
			p: f,
			i(e) {
				n || (x(t.$$.fragment, e), (n = !0))
			},
			o(e) {
				y(t.$$.fragment, e), (n = !1)
			},
			d(e) {
				w(t, e)
			},
		}
	)
}
function ut(e) {
	let t
	return {
		c() {
			t = r('Contact me')
		},
		m(e, n) {
			a(e, t, n)
		},
		d(e) {
			e && u(t)
		},
	}
}
function ft(e) {
	let t, n, s
	function r(t) {
		e[3](t)
	}
	let o = {
		$$slots: {
			default: [
				gt,
				({ closeCallback: e }) => ({ 4: e }),
				({ closeCallback: e }) => (e ? 16 : 0),
			],
		},
		$$scope: { ctx: e },
	}
	return (
		void 0 !== e[0].show && (o.open = e[0].show),
		(t = new te({ props: o })),
		j.push(() => ne(t, 'open', r)),
		{
			c() {
				h(t.$$.fragment)
			},
			m(e, n) {
				v(t, e, n), (s = !0)
			},
			p(e, s) {
				const r = {}
				49 & s && (r.$$scope = { dirty: s, ctx: e }),
					!n &&
						1 & s &&
						((n = !0), (r.open = e[0].show), X(() => (n = !1))),
					t.$set(r)
			},
			i(e) {
				s || (x(t.$$.fragment, e), (s = !0))
			},
			o(e) {
				y(t.$$.fragment, e), (s = !1)
			},
			d(e) {
				w(t, e)
			},
		}
	)
}
function dt(e) {
	let t, n
	return (
		(t = new oe({})),
		{
			c() {
				h(t.$$.fragment)
			},
			m(e, s) {
				v(t, e, s), (n = !0)
			},
			i(e) {
				n || (x(t.$$.fragment, e), (n = !0))
			},
			o(e) {
				y(t.$$.fragment, e), (n = !1)
			},
			d(e) {
				w(t, e)
			},
		}
	)
}
function pt(e) {
	let t, n, s
	function r(t) {
		e[2](t)
	}
	let o = {}
	return (
		void 0 !== e[0].sendEmails && (o.value = e[0].sendEmails),
		(t = new ce({ props: o })),
		j.push(() => ne(t, 'value', r)),
		{
			c() {
				h(t.$$.fragment)
			},
			m(e, n) {
				v(t, e, n), (s = !0)
			},
			p(e, s) {
				const r = {}
				!n &&
					1 & s &&
					((n = !0), (r.value = e[0].sendEmails), X(() => (n = !1))),
					t.$set(r)
			},
			i(e) {
				s || (x(t.$$.fragment, e), (s = !0))
			},
			o(e) {
				y(t.$$.fragment, e), (s = !1)
			},
			d(e) {
				w(t, e)
			},
		}
	)
}
function mt(e) {
	let t, n, s, r
	return (
		(t = new re({
			props: {
				name: 'Email',
				help: 'i.e. example@gmail.com',
				required: !0,
				$$slots: { default: [dt] },
				$$scope: { ctx: e },
			},
		})),
		(s = new re({
			props: {
				name: 'Send user emails?',
				errors: [e[0].sendEmails && 'Do not send emails'],
				$$slots: { default: [pt] },
				$$scope: { ctx: e },
			},
		})),
		{
			c() {
				h(t.$$.fragment), (n = o()), h(s.$$.fragment)
			},
			m(e, o) {
				v(t, e, o), a(e, n, o), v(s, e, o), (r = !0)
			},
			p(e, n) {
				const r = {}
				32 & n && (r.$$scope = { dirty: n, ctx: e }), t.$set(r)
				const o = {}
				1 & n && (o.errors = [e[0].sendEmails && 'Do not send emails']),
					33 & n && (o.$$scope = { dirty: n, ctx: e }),
					s.$set(o)
			},
			i(e) {
				r || (x(t.$$.fragment, e), x(s.$$.fragment, e), (r = !0))
			},
			o(e) {
				y(t.$$.fragment, e), y(s.$$.fragment, e), (r = !1)
			},
			d(e) {
				w(t, e), e && u(n), w(s, e)
			},
		}
	)
}
function gt(e) {
	let t, n
	return (
		(t = new se({
			props: {
				title: 'Are you sure you want to exit?',
				closeCallback: e[4],
				$$slots: { default: [mt] },
				$$scope: { ctx: e },
			},
		})),
		{
			c() {
				h(t.$$.fragment)
			},
			m(e, s) {
				v(t, e, s), (n = !0)
			},
			p(e, n) {
				const s = {}
				16 & n && (s.closeCallback = e[4]),
					33 & n && (s.$$scope = { dirty: n, ctx: e }),
					t.$set(s)
			},
			i(e) {
				n || (x(t.$$.fragment, e), (n = !0))
			},
			o(e) {
				y(t.$$.fragment, e), (n = !1)
			},
			d(e) {
				w(t, e)
			},
		}
	)
}
function ht(e) {
	let t, n, r, l, $, f, d, p, m, g, b
	;(n = new W({
		props: { $$slots: { default: [at] }, $$scope: { ctx: e } },
	})),
		(l = new V({
			props: {
				href: 'https://github.com/y330',
				title: 'Yonah Aviv on GitHub',
				neutral: !0,
				round: !0,
				class: 'github',
				$$slots: { default: [it] },
				$$scope: { ctx: e },
			},
		})),
		(f = new V({
			props: {
				href: 'https://linkedin.com/in/yonahaviv',
				round: !0,
				class: 'linkedin',
				title: 'Yonah Aviv on Linkedin',
				neutral: !0,
				$$slots: { default: [$t] },
				$$scope: { ctx: e },
			},
		})),
		(p = new V({
			props: { $$slots: { default: [ut] }, $$scope: { ctx: e } },
		})),
		p.$on('click', e[1])
	let C = e[0].show && ft(e)
	return {
		c() {
			;(t = s('div')),
				h(n.$$.fragment),
				(r = o()),
				h(l.$$.fragment),
				($ = o()),
				h(f.$$.fragment),
				(d = o()),
				h(p.$$.fragment),
				(m = o()),
				C && C.c(),
				(g = R()),
				c(t, 'class', 'row svelte-1g9eo21')
		},
		m(e, s) {
			a(e, t, s),
				v(n, t, null),
				i(t, r),
				v(l, t, null),
				i(t, $),
				v(f, t, null),
				i(t, d),
				v(p, t, null),
				a(e, m, s),
				C && C.m(e, s),
				a(e, g, s),
				(b = !0)
		},
		p(e, [t]) {
			const s = {}
			32 & t && (s.$$scope = { dirty: t, ctx: e }), n.$set(s)
			const r = {}
			32 & t && (r.$$scope = { dirty: t, ctx: e }), l.$set(r)
			const o = {}
			32 & t && (o.$$scope = { dirty: t, ctx: e }), f.$set(o)
			const c = {}
			32 & t && (c.$$scope = { dirty: t, ctx: e }),
				p.$set(c),
				e[0].show
					? C
						? (C.p(e, t), 1 & t && x(C, 1))
						: ((C = ft(e)), C.c(), x(C, 1), C.m(g.parentNode, g))
					: C &&
					  (B(),
					  y(C, 1, 1, () => {
							C = null
					  }),
					  U())
		},
		i(e) {
			b ||
				(x(n.$$.fragment, e),
				x(l.$$.fragment, e),
				x(f.$$.fragment, e),
				x(p.$$.fragment, e),
				x(C),
				(b = !0))
		},
		o(e) {
			y(n.$$.fragment, e),
				y(l.$$.fragment, e),
				y(f.$$.fragment, e),
				y(p.$$.fragment, e),
				y(C),
				(b = !1)
		},
		d(e) {
			e && u(t), w(n), w(l), w(f), w(p), e && u(m), C && C.d(e), e && u(g)
		},
	}
}
function vt(e, t, n) {
	let s = { show: !1, sendEmails: !0, email: '', name: '' }
	return [
		s,
		() => {
			n(0, (s.show = !s.show), s)
		},
		function (t) {
			e.$$.not_equal(s.sendEmails, t) && ((s.sendEmails = t), n(0, s))
		},
		function (t) {
			e.$$.not_equal(s.show, t) && ((s.show = t), n(0, s))
		},
	]
}
class xt extends e {
	constructor(e) {
		super(), t(this, e, vt, ht, n, {})
	}
}
function yt(e, t, n) {
	const s = e.slice()
	return (s[3] = t[n]), s
}
function wt(e, t, n) {
	const s = e.slice()
	return (s[3] = t[n]), s
}
function bt(e) {
	let t,
		n,
		l,
		f,
		d,
		p,
		m,
		g = e[3].label + ''
	return {
		c() {
			;(t = s('li')),
				(n = s('span')),
				(l = r(g)),
				(f = o()),
				c(n, 'class', 'svelte-1evszyo'),
				c(
					t,
					'class',
					(d =
						le(e[0] === e[3].value ? 'active' : '') +
						' svelte-1evszyo')
				)
		},
		m(s, r) {
			a(s, t, r),
				i(t, n),
				i(n, l),
				i(t, f),
				p ||
					((m = T(n, 'click', function () {
						ae(e[2](e[3].value)) &&
							e[2](e[3].value).apply(this, arguments)
					})),
					(p = !0))
		},
		p(n, s) {
			;(e = n),
				2 & s && g !== (g = e[3].label + '') && $(l, g),
				3 & s &&
					d !==
						(d =
							le(e[0] === e[3].value ? 'active' : '') +
							' svelte-1evszyo') &&
					c(t, 'class', d)
		},
		d(e) {
			e && u(t), (p = !1), m()
		},
	}
}
function Ct(e) {
	let t, n
	return (
		(t = new lt({
			props: { $$slots: { default: [Et] }, $$scope: { ctx: e } },
		})),
		{
			c() {
				h(t.$$.fragment)
			},
			m(e, s) {
				v(t, e, s), (n = !0)
			},
			p(e, n) {
				const s = {}
				258 & n && (s.$$scope = { dirty: n, ctx: e }), t.$set(s)
			},
			i(e) {
				n || (x(t.$$.fragment, e), (n = !0))
			},
			o(e) {
				y(t.$$.fragment, e), (n = !1)
			},
			d(e) {
				w(t, e)
			},
		}
	)
}
function Et(e) {
	let t, n, r, l
	var i = e[3].component
	return (
		i && (n = new i({})),
		{
			c() {
				;(t = s('div')),
					n && h(n.$$.fragment),
					(r = o()),
					c(t, 'class', 'box svelte-1evszyo')
			},
			m(e, s) {
				a(e, t, s), n && v(n, t, null), a(e, r, s), (l = !0)
			},
			p(e, s) {
				if (i !== (i = e[3].component)) {
					if (n) {
						B()
						const e = n
						y(e.$$.fragment, 1, 0, () => {
							w(e, 1)
						}),
							U()
					}
					i
						? ((n = new i({})),
						  h(n.$$.fragment),
						  x(n.$$.fragment, 1),
						  v(n, t, null))
						: (n = null)
				}
			},
			i(e) {
				l || (n && x(n.$$.fragment, e), (l = !0))
			},
			o(e) {
				n && y(n.$$.fragment, e), (l = !1)
			},
			d(e) {
				e && u(t), n && w(n), e && u(r)
			},
		}
	)
}
function St(e) {
	let t,
		n,
		s = e[0] == e[3].value && Ct(e)
	return {
		c() {
			s && s.c(), (t = R())
		},
		m(e, r) {
			s && s.m(e, r), a(e, t, r), (n = !0)
		},
		p(e, n) {
			e[0] == e[3].value
				? s
					? (s.p(e, n), 3 & n && x(s, 1))
					: ((s = Ct(e)), s.c(), x(s, 1), s.m(t.parentNode, t))
				: s &&
				  (B(),
				  y(s, 1, 1, () => {
						s = null
				  }),
				  U())
		},
		i(e) {
			n || (x(s), (n = !0))
		},
		o(e) {
			y(s), (n = !1)
		},
		d(e) {
			s && s.d(e), e && u(t)
		},
	}
}
function kt(e) {
	let t,
		n,
		r,
		l,
		$,
		f,
		p,
		m,
		g,
		b,
		C = e[1],
		E = []
	for (let s = 0; s < C.length; s += 1) E[s] = bt(wt(e, C, s))
	p = new xt({})
	let S = e[1],
		k = []
	for (let s = 0; s < S.length; s += 1) k[s] = St(yt(e, S, s))
	const A = (e) =>
		y(k[e], 1, 1, () => {
			k[e] = null
		})
	return {
		c() {
			;(t = s('header')), (n = s('img')), (l = o()), ($ = s('ul'))
			for (let e = 0; e < E.length; e += 1) E[e].c()
			;(f = o()), h(p.$$.fragment), (m = o())
			for (let e = 0; e < k.length; e += 1) k[e].c()
			;(g = R()),
				_(n.src, (r = 'avatar.png')) || c(n, 'src', 'avatar.png'),
				c(n, 'alt', 'Icon'),
				c(n, 'class', 'svelte-1evszyo'),
				c($, 'class', 'svelte-1evszyo'),
				c(t, 'class', 'svelte-1evszyo')
		},
		m(e, s) {
			a(e, t, s), i(t, n), i(t, l), i(t, $)
			for (let t = 0; t < E.length; t += 1) E[t].m($, null)
			i(t, f), v(p, t, null), a(e, m, s)
			for (let t = 0; t < k.length; t += 1) k[t].m(e, s)
			a(e, g, s), (b = !0)
		},
		p(e, [t]) {
			if (7 & t) {
				let n
				for (C = e[1], n = 0; n < C.length; n += 1) {
					const s = wt(e, C, n)
					E[n]
						? E[n].p(s, t)
						: ((E[n] = bt(s)), E[n].c(), E[n].m($, null))
				}
				for (; n < E.length; n += 1) E[n].d(1)
				E.length = C.length
			}
			if (3 & t) {
				let n
				for (S = e[1], n = 0; n < S.length; n += 1) {
					const s = yt(e, S, n)
					k[n]
						? (k[n].p(s, t), x(k[n], 1))
						: ((k[n] = St(s)),
						  k[n].c(),
						  x(k[n], 1),
						  k[n].m(g.parentNode, g))
				}
				for (B(), n = S.length; n < k.length; n += 1) A(n)
				U()
			}
		},
		i(e) {
			if (!b) {
				x(p.$$.fragment, e)
				for (let e = 0; e < S.length; e += 1) x(k[e])
				b = !0
			}
		},
		o(e) {
			y(p.$$.fragment, e), (k = k.filter(Boolean))
			for (let t = 0; t < k.length; t += 1) y(k[t])
			b = !1
		},
		d(e) {
			e && u(t), d(E, e), w(p), e && u(m), d(k, e), e && u(g)
		},
	}
}
function At(e, t, n) {
	let { items: s = [] } = t,
		{ selected: r = 1 } = t
	return (
		(e.$$set = (e) => {
			'items' in e && n(1, (s = e.items)),
				'selected' in e && n(0, (r = e.selected))
		}),
		[r, s, (e) => () => n(0, (r = e))]
	)
}
class Nt extends e {
	constructor(e) {
		super(), t(this, e, At, kt, n, { items: 1, selected: 0 })
	}
}
function Mt(e) {
	let t
	return {
		c() {
			;(t = s('div')),
				(t.innerHTML =
					'<em class="svelte-1okn36p">This site is a work in progress. Expect several bugs and glitches to\n\t\toccur while viewing.</em> \n\n\t<br/> \n\n\t<b><p color="white" class="svelte-1okn36p">Copyright © 2021 Yonah Aviv. All rights reserved.</p></b>'),
				c(t, 'class', 'svelte-1okn36p')
		},
		m(e, n) {
			a(e, t, n)
		},
		p: f,
		i: f,
		o: f,
		d(e) {
			e && u(t)
		},
	}
}
class jt extends e {
	constructor(e) {
		super(), t(this, e, null, Mt, n, {})
	}
}
function Dt(e) {
	let t, n
	return (
		(t = new ie({
			props: {
				$$slots: {
					default: [
						zt,
						({ showSnackbar: e }) => ({ 1: e }),
						({ showSnackbar: e }) => (e ? 2 : 0),
					],
				},
				$$scope: { ctx: e },
			},
		})),
		{
			c() {
				h(t.$$.fragment)
			},
			m(e, s) {
				v(t, e, s), (n = !0)
			},
			p(e, n) {
				const s = {}
				6 & n && (s.$$scope = { dirty: n, ctx: e }), t.$set(s)
			},
			i(e) {
				n || (x(t.$$.fragment, e), (n = !0))
			},
			o(e) {
				y(t.$$.fragment, e), (n = !1)
			},
			d(e) {
				w(t, e)
			},
		}
	)
}
function zt(e) {
	let t, n, r
	return {
		c() {
			;(t = s('div')), l(t, 'z-index', '2')
		},
		m(s, o) {
			a(s, t, o),
				n ||
					((r = T(t, 'load', function () {
						ae(
							e[1]({
								props: { text: 'Site is under contruction!' },
							})
						) &&
							e[1]({
								props: { text: 'Site is under contruction!' },
							}).apply(this, arguments)
					})),
					(n = !0))
		},
		p(t, n) {
			e = t
		},
		d(e) {
			e && u(t), (n = !1), r()
		},
	}
}
function _t(e) {
	let t,
		n,
		s = e[0] && Dt(e)
	return {
		c() {
			s && s.c(), (t = R())
		},
		m(e, r) {
			s && s.m(e, r), a(e, t, r), (n = !0)
		},
		p(e, [n]) {
			e[0]
				? s
					? (s.p(e, n), 1 & n && x(s, 1))
					: ((s = Dt(e)), s.c(), x(s, 1), s.m(t.parentNode, t))
				: s &&
				  (B(),
				  y(s, 1, 1, () => {
						s = null
				  }),
				  U())
		},
		i(e) {
			n || (x(s), (n = !0))
		},
		o(e) {
			y(s), (n = !1)
		},
		d(e) {
			s && s.d(e), e && u(t)
		},
	}
}
function Tt(e, t, n) {
	let s = !1
	return (
		N(() => {
			const e = setInterval(() => {
				n(0, (s = !s))
			}, 3e3)
			return () => clearInterval(e)
		}),
		[s]
	)
}
class Ft extends e {
	constructor(e) {
		super(), t(this, e, Tt, _t, n, {})
	}
}
function Lt(e) {
	let t, n, r, l, $, d, p, m, g
	return (
		(r = new Ft({})),
		(d = new Nt({ props: { items: e[0] } })),
		(m = new jt({})),
		{
			c() {
				;(t = s('link')),
					(n = o()),
					h(r.$$.fragment),
					(l = o()),
					($ = s('main')),
					h(d.$$.fragment),
					(p = o()),
					h(m.$$.fragment),
					c(t, 'href', '/static/css/_reset.scss'),
					c(t, 'rel', 'stylesheet'),
					c($, 'class', 'scroll__')
			},
			m(e, s) {
				i(document.head, t),
					a(e, n, s),
					v(r, e, s),
					a(e, l, s),
					a(e, $, s),
					v(d, $, null),
					i($, p),
					v(m, $, null),
					(g = !0)
			},
			p: f,
			i(e) {
				g ||
					(x(r.$$.fragment, e),
					x(d.$$.fragment, e),
					x(m.$$.fragment, e),
					(g = !0))
			},
			o(e) {
				y(r.$$.fragment, e),
					y(d.$$.fragment, e),
					y(m.$$.fragment, e),
					(g = !1)
			},
			d(e) {
				u(t), e && u(n), w(r, e), e && u(l), e && u($), w(d), w(m)
			},
		}
	)
}
function It(e) {
	return [
		[
			{ label: 'About', value: 1, component: Le },
			{ label: 'Projects', value: 2, component: Qe },
			{ label: 'Resume', value: 3, component: rt },
		],
	]
}
new (class extends e {
	constructor(e) {
		super(), t(this, e, It, Lt, n, {})
	}
})({ target: document.getElementById('app') })
