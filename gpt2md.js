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

    


    const html = Array.from(body.getElementsByTagName('main').item(0).children).filter(child => !child.innerHTML.includes('PROMPT:')).map(child => child.outerHTML).join('');

    // Convert to markdown
    const md = html2md(html);

    // Download
    const a = document.createElement('a');
    a.download = `${document.title}.md`;
    a.href = URL.createObjectURL(new Blob([md]));
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
};
document.body.appendChild(script);
