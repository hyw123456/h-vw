export default function init(initWidth: number = 375) {
  clear();
  if (ismobile()) {
    vw(initWidth)
  } else {
    trs(initWidth)
  }
}

function clear(): void {
  let meta: NodeListOf<HTMLMetaElement> = document.querySelectorAll('meta[name="viewport"]'),
      length: number = meta.length;
  for (let i = length - 1; i >= 0; i--) {
    document.head.removeChild(meta[i])
  }
}

init();


function ismobile(): boolean {
  let mobileArry: string[] = ["iPhone", "iPad", "Android", "Windows Phone", "BB10; Touch", "BB10; Touch", "PlayBook", "Nokia"];
  let ua = navigator.userAgent;
  let res = mobileArry.filter(function (arr) {
    return ua.indexOf(arr) > 0;
  });
  return res.length > 0;
}

function vw(initWidth: number = 375): void {
  let curWidth: number = window.screen.width;
  let scale: number = curWidth / initWidth;
  let meta: HTMLMetaElement = document.createElement("meta");
  meta.name = "viewport";
  meta.content = `width=${initWidth},initial-scale=${scale},minimum-scale=${scale},maximum-scale=${scale},user-scalable=no`;
  document.head.appendChild(meta);
}

function trs(initWidth: number = 375): void {
  let meta: HTMLMetaElement = document.createElement("meta");
  meta.name = "viewport";
  meta.content = `width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0`;
  document.head.appendChild(meta);
  let body: HTMLBodyElement = document.getElementsByTagName('body')[0]
  body.style.width = initWidth + 'px';
  let scale: number = document.documentElement.clientWidth / initWidth;
  body.style.transform = `scale(${scale})`
  body.style.transformOrigin = '0 0'
}
