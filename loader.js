// load the lib manager

async function main() {
    'use strict';
    window.libman = true // i am... libman
    const libs = window.libs = {
        libs: new Map(),
        async use(name, url="https://github.com/WlodekM/telemeow-plugin-lib/raw/refs/heads/main/libs/"+name+".js") { // TODO: host on cf
            if(libs.libs.has(name)) return libs.libs.get(name); // libs.libs.libs.lib[lib](lib).getLib(lib).lib
            const lib = (await import(url)).default;
            libs.libs.set(name, lib)
            window[name] = lib;
            if(lib.onload) lib.onload()
            return lib
        }
    }
}

/**
 * utility function to get text
 * @param {string} url the url
 * @returns {string}
 */
async function getText(url) {
    return await (await fetch(url)).text()
}

if (!window.libman) main()