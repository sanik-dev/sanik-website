const background = document.querySelector('#background');
const lines = [
  'SANIK',
  'Shaping the Future, One Pixel at a Time',
  'Sanchit Sharma',
  'Nikith Kaluwitharana',
  'Executing: build_future.py',
  'Compiling... 100%',
  'Deploying to production...',
  'New feature: teleportation API',
  'Bug fixed: coffee machine',
  'Commit: "Refactored time travel algorithm"',
  'Test: All tests passed. Including Turing test.',
  'Warning: Low coffee level',
  'Info: Time Travel API is deprecated',
  'Debug: Found a bug... Squashed it.',
  'Uploading to the cloud...',
  'Algorithm complete: Cure for Monday blues',
  'Remember to git commit or you will git regret it',
  'Why don\'t programmers like nature? It has too many bugs.',
  'Error: Too many jokes in the code.',
  'Starting SANIK OS...',
  'Command: brew coffee',
  'Command: play_music()',
  'Fetching from database: WorldPeaceSolution',
  'SANIK AI says: "Hello, world!"',
  'Caution: Developers at work.'
];

let index = 0;

function typeLine(descriptionElement, descriptionText) {
    const pre = document.createElement('pre');
    pre.textContent = '> ';
    descriptionElement.appendChild(pre);
    let charIndex = 0;
    const intervalId = setInterval(() => {
        if (charIndex < descriptionText.length) {
            pre.textContent += descriptionText[charIndex++];
        } else {
            clearInterval(intervalId);
        }
    }, 50);
}

function splitIntoLines(text, wordsPerLine) {
    const words = text.split(' ');
    let result = '';
    for (let i = 0; i < words.length; i += wordsPerLine) {
        result += words.slice(i, i + wordsPerLine).join(' ') + '\n';
    }
    return result.trim();
}

document.querySelectorAll('.project-title').forEach(title => {
    title.addEventListener('mouseover', () => {
        const descriptionElement = title.nextElementSibling;
        let descriptionText = title.getAttribute('data-description');
        descriptionText = splitIntoLines(descriptionText, 20);
        if (descriptionElement.innerHTML.trim() === '') {
            descriptionElement.style.display = 'block';
            typeLine(descriptionElement, descriptionText);
        }
    });
});

function typeBackgroundLine() {
    const line = lines[index % lines.length];
    const pre = document.createElement('pre');
    pre.textContent = '> ';
    background.appendChild(pre);
    let charIndex = 0;
    const intervalId = setInterval(() => {
        if (charIndex < line.length) {
            pre.textContent += line[charIndex++];
        } else {
            clearInterval(intervalId);
            setTimeout(() => background.removeChild(pre), 10000);
            setTimeout(typeBackgroundLine, 100);
        }
    }, 100);
    index++;
}

typeBackgroundLine();
