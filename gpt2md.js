const TurndownService = require('turndown');
const tables = require('turndown-plugin-gfm').tables;
const ts = new TurndownService({
    'hr': '___________',
    'preformattedCode': true,
    'headingStyle': 'setext',
    'codeBlockStyle': 'fenced'
 });
ts.use(tables);

// Clone to not modify the actual `document.body` in the code that follows
const body = document.body.cloneNode(true);

// Remove code box headers
body.querySelectorAll('pre .text-xs').forEach(n => n.parentNode?.removeChild(n));

// Remove prompt/response numbers
body.querySelectorAll('div .text-xs.gap-1').forEach(n => n.parentNode?.removeChild(n));

// Remove footer
body.querySelector('#thread-bottom-container').remove()

// properly format code blocks
body.querySelectorAll('.text-message pre').forEach((n) => {
  n.innerHTML = n.querySelector('code').outerHTML;
});

// Iterate through main text containers and create text to export
let text = `# ${document.title}\n\n`;
body.querySelectorAll('.text-message').forEach((n, i) => {
    const num = Math.trunc(i / 2) + 1;
    const prose = n.querySelector('.prose');
    if (prose) {
        // Only convert response markup to markdown
        text += `## RESPONSE ${num}\n\n${ts.turndown(prose.innerHTML)}\n\n`;
    } else {
        // Keep prompt text as it was entered
        text += `## PROMPT ${num}\n\n${n.querySelector('div').innerText}\n\n`;
    }
});

// Download
const a = document.createElement('a');
a.download = `${document.title}.md`;
a.href = URL.createObjectURL(new Blob([text]));
a.style.display = 'none';
document.body.appendChild(a);
a.click();
