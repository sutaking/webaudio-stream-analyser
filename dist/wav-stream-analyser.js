!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";e.a=class{constructor(){console.log("----------construct-------------"),this.context=new AudioContext,this.analyser=this.context.createAnalyser(),this.audioStack=[],this._hasCanceled=!1,this._timeoutId=null,this._1st=!0,this.numberOfChannels=0,this.sampleRate=0}concatBuffer(t,e){const n=new Uint8Array(t.byteLength+e.byteLength);return n.set(new Uint8Array(t),0),n.set(new Uint8Array(e),t.byteLength),n.buffer}wavHead(t,e,n){const i=new ArrayBuffer(44);let r=new DataView(i);return r.setUint8(0,"R".charCodeAt(0)),r.setUint8(1,"I".charCodeAt(0)),r.setUint8(2,"F".charCodeAt(0)),r.setUint8(3,"F".charCodeAt(0)),r.setUint32(4,t.byteLength/2+44,!0),r.setUint8(8,"W".charCodeAt(0)),r.setUint8(9,"A".charCodeAt(0)),r.setUint8(10,"V".charCodeAt(0)),r.setUint8(11,"E".charCodeAt(0)),r.setUint8(12,"f".charCodeAt(0)),r.setUint8(13,"m".charCodeAt(0)),r.setUint8(14,"t".charCodeAt(0)),r.setUint8(15," ".charCodeAt(0)),r.setUint32(16,16,!0),r.setUint16(20,1,!0),r.setUint16(22,n,!0),r.setUint32(24,e,!0),r.setUint32(28,1*e*2,!0),r.setUint16(32,2*n,!0),r.setUint16(34,16,!0),r.setUint8(36,"d".charCodeAt(0)),r.setUint8(37,"a".charCodeAt(0)),r.setUint8(38,"t".charCodeAt(0)),r.setUint8(39,"a".charCodeAt(0)),r.setUint32(40,t.byteLength,!0),this.concatBuffer(i,t)}_schuledBuf(){if(0===this.audioStack.length)return clearTimeout(this._timeoutId),void(this._timeoutId=null);const t=this.context.createBufferSource(),e=this.audioStack.shift();t.buffer=e.buf;let n=t.buffer.duration;t.connect(this.analyser),this.analyser.connect(this.context.destination),console.log(`This segment duration: ${n}`),t.start(),this._timeoutId=setTimeout(()=>this._schuledBuf(),1e3*n)}feed(t){if(0===t.byteLength||this._hasCanceled)return;let e,n={};if(this._1st){e=t.buffer;const n=new DataView(e);this.numberOfChannels=n.getUint16(22,!0),this.sampleRate=n.getUint32(24,!0),e=e.slice(44),console.log(`numberOfChannels: ${this.numberOfChannels}, sampleRate: ${this.sampleRate}`),this._1st=!1}else e=t.buffer;this.context.decodeAudioData(this.wavHead(e,this.sampleRate,this.numberOfChannels)).then(t=>{n.buf=t,n.duration=t.duration,this.audioStack.push(n),null===this._timeoutId&&(console.log("start _schuledBuf"),this._schuledBuf())})}stop(){this._hasCanceled=!0,clearTimeout(this._timeoutId),this.audioStack=[],this._timeoutId=null,this.context&&this.context.close()}getAudioInfo(){return{channels:this.numberOfChannels,sampleRate:this.sampleRate}}getAnalyzser(){return this.analyser}}},function(t,e,n){"use strict";n.r(e),function(t){var i=n(0);e.default=i.a,t.exports=i.a}.call(this,n(2)(t))},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}}]);