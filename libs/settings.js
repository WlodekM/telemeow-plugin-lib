libs.use("mixins")

// code mostly stolen from wl plugins (rip)

export default new class {
    settingsPages = {}
    /**
     * Adds a new settings page
     * @param {string} name the page name (different from the display name)
     * @param {{
     *     displayName: string,
     *     func: ()=>void
     * }} page The page data
     */
    addSettingsPage(name, page) {
        this.settingsPages[name] = page
    }
    onload() {
        window.settingsPages = this.settingsPages
    
        // logCategory("API", "#9400D3", "Doing mixin for settings pages")
        loadstgs = mixins.mixin(loadstgs, function (stg) {
            stg()
            navc = document.querySelector(".nav-top");
            for (pageid in this.settingsPages) {
                const pageData = this.settingsPages[pageid];
                navc.innerHTML += `
            <input type='button' class='settings-button button' id='submit' value='${pageData.displayName.replaceAll("'", "&apos;")}' onclick='window.settingsPages.${pageid}.func()' aria-label="${pageid}">`
            }
        });
    }
}