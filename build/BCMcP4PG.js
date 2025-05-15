import {S as t, a as s} from "./BqfrOJGl.js";
const a = t("settings", {
    state: () => ({
        settings: {}
    }),
    actions: {
        async fetchSettings() {
            try {
                const t = await s.get("/api/settings");
                this.settings = t.data
            } catch (t) {}
        },
        getSetting(t) {
            return this.settings[t]
        }
    }
});
export {a as u};