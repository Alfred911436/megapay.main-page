const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["DJJg0o1t.js", "BqfrOJGl.js", "DYYs1Lqa.js", "BCo6x5W8.js", "BB0CHjmT.css", "B-YV3yVb.js", "BCMcP4PG.js", "BXCLKySj.css", "C5a3QnRa.js"]))) => i.map(i => d[i]);
import {_ as t} from "./BkQVvFjk.js";
import {u as e} from "./BCMcP4PG.js";
import {B as a, C as i, E as l, I as o, o as n, q as s, m as r, u as c, e as d, M as u, a8 as m} from "./BqfrOJGl.js";
/* empty css        */
const g = {
    class: "page"
}
  , p = {
    class: "page-main"
}
  , _ = {
    class: "wrapper"
}
  , w = {
    __name: "PublicLayout",
    props: {
        title: {
            type: String,
            default: ""
        },
        metaTags: {
            type: Object,
            default: () => ({})
        },
        currency: {
            type: Object,
            default: () => ({})
        }
    },
    setup(w) {
        const y = m(( () => t(( () => import("./DJJg0o1t.js")), __vite__mapDeps([0, 1]))))
          , v = m(( () => t(( () => import("./DYYs1Lqa.js")), __vite__mapDeps([2, 3, 1, 4]))))
          , h = m(( () => t(( () => import("./B-YV3yVb.js")), __vite__mapDeps([5, 1, 6, 3, 7]))))
          , f = m(( () => t(( () => import("./C5a3QnRa.js")), __vite__mapDeps([8, 1, 6]))))
          , b = e()
          , T = a("")
          , x = i(( () => b.getSetting("google_analytics_id") || "UA-XXXXXXXXX-X"));
        l(x, (t => {
            t && "UA-XXXXXXXXX-X" !== t && (t => {
                if ("undefined" != typeof window) {
                    let e = function() {
                        window.dataLayer.push(arguments)
                    };
                    const a = document.createElement("script");
                    a.async = !0,
                    a.src = `https://www.googletagmanager.com/gtag/js?id=${t}`,
                    document.head.appendChild(a),
                    window.dataLayer = window.dataLayer || [],
                    e("js", new Date),
                    e("config", t)
                }
            }
            )(t)
        }
        ), {
            immediate: !0
        });
        const j = w
          , X = i(( () => {
            var t, e, a, i, l, o, n, s, r, c, d, u, m, g, p, _, w, y, v, h, f, T, x, X, E, k, I;
            const C = b.settings
              , S = (null == (t = j.currency) ? void 0 : t.country) || {}
              , L = (null == (e = j.currency) ? void 0 : e.symbol) || "$"
              , U = t => {
                var e;
                return Number(t * ((null == (e = j.currency) ? void 0 : e.rate) || 1)).toFixed(2)
            }
              , q = t => t ? t.replace(/{site_name}/g, (null == S ? void 0 : S.site_name) || (null == C ? void 0 : C.site_name) || "").replace(/{currency_symbol}/g, L).replace(/{country}/g, (null == S ? void 0 : S.name) || "").replace(/{possible_daily_earnings}/g, U((null == C ? void 0 : C.possible_daily_earnings) || 100)).replace(/{sign_up_bonus}/g, U((null == C ? void 0 : C.sign_up_bonus) || 5)).replace(/{minimum_withdrawal}/g, U((null == C ? void 0 : C.minimum_withdrawal) || 20)) : "";
            return {
                title: q((null == (a = j.metaTags) ? void 0 : a.title) || (null == S ? void 0 : S.meta_title) || (null == C ? void 0 : C.meta_tags_title) || ""),
                description: q((null == (i = j.metaTags) ? void 0 : i.description) || (null == S ? void 0 : S.meta_description) || (null == C ? void 0 : C.meta_tags_description) || ""),
                keywords: q((null == (l = j.metaTags) ? void 0 : l.keywords) || (null == S ? void 0 : S.meta_keywords) || (null == C ? void 0 : C.meta_tags_keywords) || ""),
                ogType: (null == (o = j.metaTags) ? void 0 : o.ogType) || "website",
                ogUrl: (null == (n = j.metaTags) ? void 0 : n.ogUrl) || window.location.href,
                ogImage: (null == (s = j.metaTags) ? void 0 : s.ogImage) || "",
                ogImageWidth: (null == (r = j.metaTags) ? void 0 : r.ogImageWidth) || "1200",
                ogImageHeight: (null == (c = j.metaTags) ? void 0 : c.ogImageHeight) || "630",
                ogLocale: (null == (d = j.metaTags) ? void 0 : d.ogLocale) || (null == (u = j.currency) ? void 0 : u.locale) || "en_US",
                ogSiteName: (null == (m = j.metaTags) ? void 0 : m.ogSiteName) || (null == C ? void 0 : C.site_name) || "",
                twitterCard: (null == (g = j.metaTags) ? void 0 : g.twitterCard) || "summary_large_image",
                twitterSite: (null == (p = j.metaTags) ? void 0 : p.twitterSite) || (null == C ? void 0 : C.twitter_site) || "",
                twitterCreator: (null == (_ = j.metaTags) ? void 0 : _.twitterCreator) || (null == C ? void 0 : C.twitter_creator) || "",
                twitterTitle: q((null == (w = j.metaTags) ? void 0 : w.twitterTitle) || (null == (y = j.metaTags) ? void 0 : y.title) || ""),
                twitterDescription: q((null == (v = j.metaTags) ? void 0 : v.twitterDescription) || (null == (h = j.metaTags) ? void 0 : h.description) || ""),
                twitterImage: (null == (f = j.metaTags) ? void 0 : f.twitterImage) || (null == (T = j.metaTags) ? void 0 : T.ogImage) || "",
                robots: (null == (x = j.metaTags) ? void 0 : x.robots) || (null == S ? void 0 : S.meta_robots) || "index, follow",
                viewport: (null == (X = j.metaTags) ? void 0 : X.viewport) || "width=device-width, initial-scale=1.0",
                charset: "UTF-8",
                language: (null == (E = j.metaTags) ? void 0 : E.language) || (null == (k = j.currency) ? void 0 : k.language) || "en",
                type: (null == (I = j.metaTags) ? void 0 : I.type) || "website"
            }
        }
        ));
        return o((async () => {
            await b.fetchSettings(),
            document.querySelectorAll('link[rel="stylesheet"]').forEach((t => {
                t.href.includes("main.css") && t.remove()
            }
            ));
            ["https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css", "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&icon_names=account_circle,android,calendar_today,cancel,check,check_circle,chevron_right,close,expand_more,forward_to_inbox,google,group,home,info,ios,lightbulb,list_alt,lock,menu,monetization_on,open_in_new,payments,play_arrow,public,school,smartphone,task_alt,thumb_down,thumb_up,timer,video_library&display=block", "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Rubik:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap", `${T.value}/assets/user/css/public.css`].forEach((t => {
                const e = document.createElement("link");
                e.rel = "stylesheet",
                e.href = t,
                document.head.appendChild(e)
            }
            ));
            const t = t => new Promise(( (e, a) => {
                const i = document.createElement("script");
                i.src = t,
                i.onload = e,
                i.onerror = a,
                document.body.appendChild(i)
            }
            ));
            try {
                await t("https://code.jquery.com/jquery-3.7.1.min.js"),
                await t("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"),
                await t(`${T.value}/assets/user/js/public.js`);
                const e = document.createElement("script");
                e.id = "_wauhqn";
                const a = b.getSetting("wau_analytics_id") || "xxxxxxxx";
                e.textContent = `var _wau = _wau || []; _wau.push(["dynamic", "${a}", "hqn", "c4302bffffff", "small"]);`,
                document.head.appendChild(e);
                const i = document.createElement("script");
                i.async = !0,
                i.src = "//waust.at/d.js",
                document.head.appendChild(i);
                const l = b.getSetting("clarity_analytics_id") || "xxxxxxxx";
                if (l) {
                    const t = document.createElement("script");
                    t.type = "text/javascript",
                    t.textContent = `\n                (function(c,l,a,r,i,t,y){\n                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};\n                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;\n                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);\n                })(window, document, "clarity", "script", "${l}");\n            `,
                    document.head.appendChild(t)
                }
            } catch (e) {}
        }
        )),
        (t, e) => (n(),
        s("div", null, [r(c(y), {
            metaTags: X.value
        }, null, 8, ["metaTags"]), d("div", g, [r(c(v)), d("div", p, [r(c(h), {
            assetUrl: T.value
        }, null, 8, ["assetUrl"]), d("div", _, [d("main", null, [u(t.$slots, "default")])]), r(c(f), {
            assetUrl: T.value
        }, null, 8, ["assetUrl"])])])]))
    }
};
export {w as default};
