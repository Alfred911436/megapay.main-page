const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["Dv-b8R6N.js", "BqfrOJGl.js", "BEx_7U2Z.js", "DSk48mG-.js", "BCo6x5W8.js", "Cfdup10g.css", "CDLTuGj7.js", "DX55ZGg8.css", "C8YWNSEW.js", "DGghamYR.js"]))) => i.map(i => d[i]);
import {_ as s} from "./BkQVvFjk.js";
import {u as a} from "./BCMcP4PG.js";
import e from "./DNJGya0K.js";
import {Q as t, C as l, o as n, q as r, e as i, t as c, d as o, w as d, u, p as v, S as m, m as _, n as p, a5 as g, B as h, I as f, a6 as w, a8 as y} from "./BqfrOJGl.js";
import {_ as b} from "./BCo6x5W8.js";
/* empty css        */
const $ = {
    class: "hero-section"
}
  , k = {
    class: "container"
}
  , U = {
    class: "row"
}
  , j = {
    class: "col-lg-6 col-12"
}
  , q = {
    class: "hero-title-wrapper"
}
  , E = {
    style: {
        "font-size": "2.5rem"
    }
}
  , S = {
    class: "hero-intro-t"
}
  , I = {
    class: "hero-intro-t"
}
  , N = {
    class: "hero-cta-wrapper"
}
  , O = {
    class: "col-lg-6 col-12"
}
  , x = {
    class: "hero-images-container"
}
  , C = {
    class: "hero-image-l"
}
  , D = ["src"]
  , A = ["src"]
  , P = {
    class: "hero-image-r"
}
  , T = ["src"]
  , L = ["src"]
  , R = {
    __name: "HeroSection",
    props: {
        assetUrl: {
            type: String,
            required: !0
        }
    },
    setup(s) {
        const a = t()
          , e = l(( () => a.props.currency))
          , m = l(( () => a.props.settings))
          , _ = s => (new Intl.NumberFormat).format(s);
        return (a, t) => (n(),
        r("section", $, [i("div", k, [i("div", U, [i("div", j, [i("div", q, [i("h1", E, [i("span", null, c(a.$t("hero.earn_daily", {
            currencySymbol: e.value.symbol,
            possibleDailyEarnings: _(m.value.possible_daily_earnings),
            siteName: m.value.site_name
        })), 1)])]), i("p", S, c(a.$t("hero.start_earning", {
            currencySymbol: e.value.symbol,
            possibleDailyEarnings: _(m.value.possible_daily_earnings),
            siteName: m.value.site_name
        })), 1), t[2] || (t[2] = i("br", null, null, -1)), i("p", I, c(a.$t("hero.sign_up_now", {
            siteName: m.value.site_name || "Our Site"
        })), 1), i("div", N, [a.$page.props.auth.user ? (n(),
        o(u(v), {
            key: 1,
            class: "hero-btn c-btn",
            href: a.route("dashboard")
        }, {
            default: d(( () => [i("span", null, c(a.$t("hero.go_to_dashboard")), 1), t[1] || (t[1] = i("span", {
                class: "material-symbols-outlined"
            }, "chevron_right", -1))])),
            _: 1
        }, 8, ["href"])) : (n(),
        o(u(v), {
            key: 0,
            class: "hero-btn c-btn",
            href: a.route("register")
        }, {
            default: d(( () => [i("span", null, c(a.$t("hero.sign_up")), 1), t[0] || (t[0] = i("span", {
                class: "material-symbols-outlined"
            }, "chevron_right", -1))])),
            _: 1
        }, 8, ["href"]))])]), i("div", O, [i("div", x, [i("div", C, [i("img", {
            src: `${s.assetUrl}metapay.site/assets/user/hero-img-l.png`,
            class: "hero-img-l",
            alt: ""
        }, null, 8, D), i("img", {
            src: `${s.assetUrl}metapay.site/assets/user/hero-char-l.png`,
            class: "hero-char-l an-l",
            alt: ""
        }, null, 8, A)]), i("div", P, [i("img", {
            src: `${s.assetUrl}metapay.site/assets/user/hero-img-r.png`,
            class: "hero-img-r",
            alt: ""
        }, null, 8, T), i("img", {
            src: `${s.assetUrl}\metapay.site/assets/user/hero-char-r.png`,
            class: "hero-char-l an-r",
            alt: ""
        }, null, 8, L)])])])])])]))
    }
}
  , V = m("country", {
    state: () => ({
        countryCode: null
    }),
    actions: {
        setCountryCode(s) {
            this.countryCode = s
        }
    },
    getters: {
        getCountryCode: s => s.countryCode || "US"
    }
})
  , H = {
    class: "star-now-section content-section s-bg-secondary"
}
  , B = {
    class: "container"
}
  , F = {
    class: "section-title-wrapper"
}
  , z = {
    class: "section-title text-center"
}
  , M = {
    class: "row row-dm"
}
  , G = {
    class: "col-lg-4 col-12 col-dp col-m-mb"
}
  , J = {
    class: "start-now-col"
}
  , K = {
    class: "snc-icon-w"
}
  , Q = {
    class: "snc-icon-w-i"
}
  , W = ["src"]
  , X = {
    class: "snc-title"
}
  , Y = {
    class: "snc-text"
}
  , Z = {
    class: "snc-cta"
}
  , ss = {
    class: "col-lg-4 col-12 col-dp col-m-mb"
}
  , as = {
    class: "start-now-col"
}
  , es = {
    class: "snc-icon-w"
}
  , ts = {
    class: "snc-icon-w-i"
}
  , ls = ["src"]
  , ns = {
    class: "snc-title"
}
  , rs = {
    class: "snc-text"
}
  , is = {
    class: "snc-cta"
}
  , cs = {
    class: "col-lg-4 col-12 col-dp"
}
  , os = {
    class: "start-now-col"
}
  , ds = {
    class: "snc-icon-w"
}
  , us = {
    class: "snc-icon-w-i"
}
  , vs = ["src"]
  , ms = {
    class: "snc-title"
}
  , _s = {
    class: "snc-text"
}
  , ps = {
    class: "snc-cta"
}
  , gs = {
    class: "col-lg-4 col-12 col-dp"
}
  , hs = {
    class: "start-now-col"
}
  , fs = {
    class: "snc-icon-w"
}
  , ws = {
    class: "snc-icon-w-i"
}
  , ys = ["src"]
  , bs = {
    class: "snc-title"
}
  , $s = {
    class: "snc-text"
}
  , ks = {
    class: "snc-cta"
}
  , Us = {
    __name: "StartNowSection",
    props: {
        assetUrl: {
            type: String,
            required: !0
        }
    },
    setup(s) {
        const a = t();
        V();
        const e = l(( () => a.props.currency))
          , o = l(( () => a.props.settings))
          , m = l(( () => {
            var s, a;
            return (null == (a = null == (s = e.value) ? void 0 : s.country) ? void 0 : a.code) || "US"
        }
        ))
          , g = l(( () => {
            var s, e, t;
            const l = null == (e = null == (s = a.props.countries) ? void 0 : s.find((s => s.code === m.value))) ? void 0 : e.withdrawal_methods;
            return l && l.length > 0 ? l : (null == (t = o.value.payment_methods) ? void 0 : t.split(", ")) || []
        }
        ))
          , h = () => {
            const s = g.value;
            if (!s.length)
                return o.value.payment_methods || "";
            if ("string" == typeof s)
                return s;
            if (1 === s.length)
                return s[0];
            if (2 === s.length)
                return `${s[0]} and ${s[1]}`;
            const a = s[s.length - 1];
            return `${s.slice(0, -1).join(", ")}, and ${a}`
        }
          , f = s => (new Intl.NumberFormat).format(s);
        return (a, t) => (n(),
        r("section", H, [i("div", B, [i("div", F, [i("h2", z, c(a.$t("start_now.start_earning")), 1)]), i("div", M, [i("div", G, [_(u(v), {
            href: a.route("register"),
            class: "snc-link"
        }, {
            default: d(( () => [i("div", J, [i("div", K, [i("div", Q, [i("img", {
                src: `${s.assetUrl}/assets/user/images/snc-icon-1.png`,
                class: "img-fluid snc-icon",
                alt: ""
            }, null, 8, W)])]), i("h4", X, c(a.$t("start_now.join", {
                siteName: o.value.site_name
            })), 1), i("p", Y, c(a.$t("start_now.join_description", {
                siteName: o.value.site_name,
                currencySymbol: e.value.symbol,
                signUpBonus: f(o.value.sign_up_bonus)
            })), 1), i("div", Z, [p(c(a.$t("start_now.join_now")) + " ", 1), t[0] || (t[0] = i("span", {
                class: "material-symbols-outlined"
            }, "chevron_right", -1))])])])),
            _: 1
        }, 8, ["href"])]), i("div", ss, [_(u(v), {
            href: a.route("register"),
            class: "snc-link"
        }, {
            default: d(( () => [i("div", as, [i("div", es, [i("div", ts, [i("img", {
                src: `${s.assetUrl}/assets/user/images/snc-icon-2.png`,
                class: "img-fluid snc-icon",
                alt: ""
            }, null, 8, ls)])]), i("h4", ns, c(a.$t("start_now.browse_tasks")), 1), i("p", rs, c(a.$t("start_now.browse_tasks_description")), 1), i("div", is, [p(c(a.$t("start_now.join_now")) + " ", 1), t[1] || (t[1] = i("span", {
                class: "material-symbols-outlined"
            }, "chevron_right", -1))])])])),
            _: 1
        }, 8, ["href"])]), i("div", cs, [_(u(v), {
            href: a.route("register"),
            class: "snc-link"
        }, {
            default: d(( () => [i("div", os, [i("div", ds, [i("div", us, [i("img", {
                src: `${s.assetUrl}/assets/user/images/snc-icon-3.png`,
                class: "img-fluid snc-icon",
                alt: ""
            }, null, 8, vs)])]), i("h4", ms, c(a.$t("start_now.share_interact")), 1), i("p", _s, c(a.$t("start_now.share_interact_description", {
                currencySymbol: e.value.symbol,
                perInviteAmount: f(o.value.per_invite_amount),
                siteName: o.value.site_name
            })), 1), i("div", ps, [p(c(a.$t("start_now.join_now")) + " ", 1), t[2] || (t[2] = i("span", {
                class: "material-symbols-outlined"
            }, "chevron_right", -1))])])])),
            _: 1
        }, 8, ["href"])]), i("div", gs, [_(u(v), {
            href: a.route("register"),
            class: "snc-link"
        }, {
            default: d(( () => [i("div", hs, [i("div", fs, [i("div", ws, [i("img", {
                src: `${s.assetUrl}/assets/user/images/snc-icon-3.png`,
                class: "img-fluid snc-icon",
                alt: ""
            }, null, 8, ys)])]), i("h4", bs, c(a.$t("start_now.get_paid")), 1), i("p", $s, c(a.$t("start_now.get_paid_description", {
                siteName: o.value.site_name,
                paymentMethods: h()
            })), 1), i("div", ks, [p(c(a.$t("start_now.join_now")) + " ", 1), t[3] || (t[3] = i("span", {
                class: "material-symbols-outlined"
            }, "chevron_right", -1))])])])),
            _: 1
        }, 8, ["href"])])])])]))
    }
}
  , js = {
    class: "skeleton-loader"
};
const qs = b({}, [["render", function(s, a) {
    return n(),
    r("div", js, a[0] || (a[0] = [g('<div class="skeleton-hero" data-v-9f44a3c5></div><div class="skeleton-section" data-v-9f44a3c5><div class="skeleton-card user-info-card" data-v-9f44a3c5></div></div><div class="skeleton-section" data-v-9f44a3c5><div class="skeleton-card stats-card" data-v-9f44a3c5></div><div class="skeleton-card stats-card" data-v-9f44a3c5></div><div class="skeleton-card stats-card" data-v-9f44a3c5></div><div class="skeleton-card stats-card" data-v-9f44a3c5></div></div><div class="skeleton-section" data-v-9f44a3c5><div class="skeleton-card referral-card" data-v-9f44a3c5></div></div><div class="skeleton-section" data-v-9f44a3c5><div class="skeleton-card daily-challenge-card" data-v-9f44a3c5></div></div><div class="skeleton-section" data-v-9f44a3c5><div class="skeleton-card recent-earnings-card" data-v-9f44a3c5></div><div class="skeleton-card leaderboard-card" data-v-9f44a3c5></div></div>', 6)]))
}
], ["__scopeId", "data-v-9f44a3c5"]])
  , Es = {
    key: 0
}
  , Ss = {
    key: 1
}
  , Is = {
    __name: "Home",
    setup(i) {
        const c = y(( () => s(( () => import("./Dv-b8R6N.js")), __vite__mapDeps([0, 1]))))
          , v = y(( () => s(( () => import("./BEx_7U2Z.js")), __vite__mapDeps([2, 1]))))
          , m = y(( () => s(( () => import("./DSk48mG-.js")), __vite__mapDeps([3, 1, 4, 5]))))
          , p = y(( () => s(( () => import("./CDLTuGj7.js")), __vite__mapDeps([6, 1, 4, 7]))))
          , g = y(( () => s(( () => import("./C8YWNSEW.js")), __vite__mapDeps([8, 1]))))
          , b = y(( () => s(( () => import("./DGghamYR.js")), __vite__mapDeps([9, 1]))));
        a();
        const $ = h("")
          , k = h(!0);
        t().props;
        const U = h([{
            question: "home.faqs.question1",
            answer: "home.faqs.answer1",
            isOpen: !1,
            answerHeight: "0px"
        }, {
            question: "home.faqs.question2",
            answer: "home.faqs.answer2",
            isOpen: !1,
            answerHeight: "0px"
        }, {
            question: "home.faqs.question3",
            answer: "home.faqs.answer3",
            isOpen: !1,
            answerHeight: "0px"
        }])
          , j = l(( () => U.value.map((s => ({
            ...s,
            question: w(s.question),
            answer: w(s.answer)
        })))));
        return f((async () => {
            await new Promise((s => setTimeout(s, 1e3))),
            k.value = !1
        }
        )),
        (s, a) => (n(),
        o(e, null, {
            default: d(( () => [k.value ? (n(),
            r("div", Es, [_(qs)])) : (n(),
            r("div", Ss, [_(R, {
                assetUrl: $.value
            }, null, 8, ["assetUrl"]), _(Us, {
                assetUrl: $.value
            }, null, 8, ["assetUrl"]), _(u(c), {
                assetUrl: $.value
            }, null, 8, ["assetUrl"]), _(u(v), {
                assetUrl: $.value
            }, null, 8, ["assetUrl"]), _(u(m)), _(u(p), {
                faqs: j.value
            }, null, 8, ["faqs"]), _(u(g), {
                assetUrl: $.value
            }, null, 8, ["assetUrl"]), _(u(b), {
                assetUrl: $.value
            }, null, 8, ["assetUrl"])]))])),
            _: 1
        }))
    }
};
export {Is as default};
