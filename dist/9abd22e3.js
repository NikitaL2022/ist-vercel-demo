await import("./aae2d9d4.js").then((()=>{fetch("/api/comments?op=GET").then((e=>e.json())).then((e=>{document.querySelector("lrnsys-comment-list").comments=e}))}));
