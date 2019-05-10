import hljs from 'highlightjs/highlight.pack';
import 'highlight.js/styles/railscasts.css';
hljs.configure({   // optionally configure hljs
    languages: ['javascript', 'ruby', 'python', 'css', 'html', 'php', 'scss', '']
});
window.hljs = hljs;