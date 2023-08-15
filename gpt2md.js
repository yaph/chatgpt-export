const script = document.createElement('script');
script.src = 'https://unpkg.com/html-to-md@0.8';
script.onload = function () {
    // Clone to not modify the actual `document.body` in the code that follows
    const body = document.body.cloneNode(true);

    // Remove code box headers
    body.querySelectorAll('pre .text-xs').forEach(n => n.parentNode?.removeChild(n));

    // Remove prompt/response numbers
    body.querySelectorAll('div .text-xs.gap-1').forEach(n => n.parentNode?.removeChild(n));

    // Remove footer
    body.querySelector('.absolute.bottom-0').remove()

    // Iterate through main text containers and create text to export
    let text = `# ${document.title}\n\n`;
    body.querySelectorAll('.text-base').forEach((n, i) => {
        const num = Math.trunc(i / 2) + 1;
        if (n.querySelector('img[alt="User"]')) {
            // Keep prompt text as it was entered
            text += `## PROMPT ${num}\n\n${n.querySelector('.empty\\:hidden').innerHTML}\n\n`;
        } else {
            // Only convert response markup to markdown
            text += `## RESPONSE ${num}\n\n${html2md(n.querySelector('.prose').innerHTML)}\n\n`;
        }
    });

    // Download
    const a = document.createElement('a');
    a.download = `${document.title}.md`;
    a.href = URL.createObjectURL(new Blob([text]));
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
};
document.body.appendChild(script);
