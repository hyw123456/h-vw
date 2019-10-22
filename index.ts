export default function init (initWidth: number) {
  var curWidth:number = window.screen.width;
  var scale: number = curWidth/initWidth;
  var meta: HTMLMetaElement = document.createElement("meta");
  meta.name = "viewport";
  meta.content = 'initial-scale='+scale+',minimum-scale='+scale+',maximum-scale='+scale+''+ ',user-scalable=no';
  document.head.appendChild(meta);
}
init(375);
