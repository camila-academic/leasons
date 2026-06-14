require.config({
    paths: {
        vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.2/min/vs'
    }
});

require(['vs/editor/editor.main'], function () {

    const editors = [];

    document.querySelectorAll(".editor")
    .forEach((el, index) => {

        const source = document.getElementById(el.dataset.source);
        if (!source) return;

        monaco.editor.defineTheme("dracula", {
            base: "vs-dark",
            inherit: true,

            rules: [
                { token: "comment", foreground: "6272A4" },
                { token: "keyword", foreground: "FF79C6" },
                { token: "string", foreground: "F1FA8C" },
                { token: "number", foreground: "BD93F9" },
                { token: "type", foreground: "8BE9FD" },
                { token: "function", foreground: "50FA7B" }
            ],

            colors: {
                "editor.background": "#282A36",
                "editor.foreground": "#F8F8F2",

                "editorLineNumber.foreground": "#6272A4",
                "editorCursor.foreground": "#F8F8F2",

                "editor.selectionBackground": "#44475A",
                "editor.inactiveSelectionBackground": "#3A3C4E",

                "editor.lineHighlightBackground": "#2F334D",

                "editorIndentGuide.background1": "#44475A",
                "editorIndentGuide.activeBackground1": "#6272A4"
            }
        });

        const editor = monaco.editor.create(el, {
            value: source.textContent.trim(),
            language: "javascript",
            theme: "dracula",
            automaticLayout: true,
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 16,
            fontLigatures: true,
        });
    
        el.editor = editor;
        editors[index] = editor;
    });

});

function runCode(editorId, outputId) {
    const code = document.getElementById(editorId).editor.getValue();
    const out = document.getElementById(outputId);

    out.innerHTML = "";

    const consoleProxy = createConsole(out);

    try {
        const fn = new Function("console", code);
        fn(consoleProxy);
    } catch (e) {
        const p = document.createElement("p");
        p.className = "out-err";
        p.textContent = e.name + ": " + e.message;
        out.appendChild(p);
    }
}

function createConsole(out) {
    const methods = ["log", "warn", "error", "info"];

    const formatArg = (a) =>
        typeof a === "object" && a !== null
            ? JSON.stringify(a)
            : String(a);

    const c = {};

    methods.forEach((m) => {
        c[m] = (...args) => {
            const p = document.createElement("p");

            p.className =
                m === "warn" ? "out-warn" :
                m === "error" ? "out-err" :
                "out-log";

            p.textContent = args.map(formatArg).join(" ");
            p.style.whiteSpace = "pre-wrap";

            out.appendChild(p);
        };
    });

    return c;
}

function formatArg(a) {
    if (typeof a === "string") return a;

    if (a instanceof Error) return a.stack || a.message;

    if (typeof a === "object" && a !== null) {
        try {
            return JSON.stringify(a, null, 2);
        } catch {
            return String(a);
        }
    }
    return String(a);
}