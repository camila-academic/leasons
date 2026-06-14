let languages = [ 'pt', 'en' ];
let lang_index = 0;
let narrator_mode = false;

function main() {
    narrator_mode = sessionStorage.getItem("narrator-mode") === "true";

    setLocalization('pt');
    setNarrator(!narrator_mode);
}

function setLocalization(language) {
    document.documentElement.dataset.lang = language;
}
function setNarrator(mode) {
    document.documentElement.dataset.narrator = mode ? 'on' : 'off';
}

function toggleLang() {
    lang_index = (lang_index + 1) % languages.length;
    setLocalization(languages[lang_index])
}
function toggleNarr() {
    narrator_mode = !narrator_mode;
    setNarrator(narrator_mode);
}

loadWikipedia("https://pt.wikipedia.org/wiki/World_Wide_Web", 'embed_wikipedia_br_world_wide_web');
loadWikipedia("https://pt.wikipedia.org/wiki/JavaScript", 'embed_wikipedia_br_js');
loadWikipedia("https://en.wikipedia.org/wiki/JavaScript", 'embed_wikipedia_en_js');
loadWikipedia("https://pt.wikipedia.org/wiki/Brendan_Eich", 'embed_wikipedia_pt_brendan_eich');
loadWikipedia("https://en.wikipedia.org/wiki/Browser_wars", 'embed_wikipedia_en_browser_wars');
loadPreview("https://developer.mozilla.org/pt-BR/docs/Web/JavaScript", 'embed_mozila_br_js');

main();
