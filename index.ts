export default function init(initWidth: number = 375) {
  clear();
  let curWidth: number = window.screen.width;
  let scale: number = curWidth / initWidth;
  let meta: HTMLMetaElement = document.createElement("meta");
  meta.name = "viewport";
  meta.content = `width=${initWidth},initial-scale=${scale},minimum-scale=${scale},maximum-scale=${scale},user-scalable=no`;
  document.head.appendChild(meta);
}

function clear() {
  let meta = document.querySelectorAll('meta[name="viewport"]'), length = meta.length;
  for (let i = length - 1; i >= 0; i--) {
    document.head.removeChild(meta[i])
  }
}

init();
