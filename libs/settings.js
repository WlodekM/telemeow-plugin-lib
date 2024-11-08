await libs.use("mixins")

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
        settingsPage = window.mixins.mixin(settingsPage, function (stg) {
            stg()
            for (pageid in this.settingsPages) {
                const pageData = this.settingsPages[pageid];
                // oh no way we now have a variable for the page content!
                content.innerHTML += `
            <div class="menu-button" onclick="window.settingsPages.${pageid}.func()" aria-label="${pageid}"><span>${pageData.displayName.replaceAll("<", "&lt;")}</span>${icon.arrow}</div>`
            }
        });
    }
}