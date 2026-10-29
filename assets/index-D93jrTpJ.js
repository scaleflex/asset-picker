import{j as dt,k as Fe,f as ct,h as Wt,n as z,r as Ot}from"./index-DnNwsxHG.js";import{e as te}from"./class-map-jftXm1bO.js";const Oe=80,ue={src:"",variant:"classic",cropShape:"16:9",initialCrop:null,initialRotation:0,initialScale:1,customAspectRatios:[],minCropSize:20,availableShapes:["free","square","16:9","4:3","3:2","5:4","2:1","9:16","3:4","2:3","4:5","1:2"],minScale:.5,maxScale:5,theme:"light",showGrid:"interaction",showRotateSlider:!0,showZoomSlider:!0,showShapeSelector:!0,showRotateButton:!0,showFlipButton:!0,toolbarPosition:"top",showToolbar:!0,overlayColor:"rgba(0, 0, 0, 0.55)",handleSize:12,handleColor:"#ffffff",borderRadius:20,outputType:"image/png",outputQuality:.92,maxOutputWidth:0,maxOutputHeight:0,outputMode:"blob",cloudimageToken:"",cloudimageDomain:"",cloudimageBgColor:"",showBleedMargin:!1,bleedMarginSize:10,bleedMarginColor:"rgba(255, 0, 0, 0.5)",enableAnimations:!0,animationSpeed:1,keyboard:!0,pinchZoom:!0,wheelZoom:!0};function qt(t){return{...ue,...t}}function E(t,e,r){return Math.min(Math.max(t,e),r)}function st(t,e,r){return t+(e-t)*r}function gt(t){return t*Math.PI/180}function qe(t,e,r,i){const n=r-t,o=i-e;return Math.sqrt(n*n+o*o)}function Mt(t,e,r,i,n){const o=Math.round(n/90)%2!==0,h=o?e:t,c=o?t:e,s=Math.max(h/r,c/i);return{drawW:r*s,drawH:i*s}}function Nt(t,e,r,i,n,o){const h=Math.round(n/90)%2!==0;if(o===void 0){const c=h?Math.min(t,e)/Math.max(t,e):1;return{drawW:t*c,drawH:e*c}}return h===o?h?{drawW:e,drawH:t}:{drawW:t,drawH:e}:Mt(t,e,r,i,n)}function pe(t){return t.turnedBox===void 0}function de(t){if(!pe(t))return{x:.5,y:.5};const e=t.cropRect;return{x:e.x+e.width/2,y:e.y+e.height/2}}function Ne(t,e,r,i,n=!1,o=i.quarterTurns){const{x:h,y:c,w:s,h:a}=r,p=h+s/2,f=c+a/2;t.save();const g=i.rotationPivot??{x:i.cropRect.x+i.cropRect.width/2,y:i.cropRect.y+i.cropRect.height/2},d=h+g.x*s,y=c+g.y*a;if(i.rotation!==0&&(t.translate(d,y),t.rotate(gt(i.rotation)),t.translate(-d,-y)),i.flipH!==1||i.flipV!==1){const w=de(i),C=h+w.x*s,x=c+w.y*a;t.translate(C,x),t.scale(i.flipH,i.flipV),t.translate(-C,-x)}t.translate(p,f),t.scale(i.scale,i.scale),t.translate(i.panX,i.panY),i.quarterTurns!==0&&t.rotate(gt(i.quarterTurns));let l,m;if(n){const w=Mt(s,a,e.naturalWidth,e.naturalHeight,o);l=w.drawW,m=w.drawH}else{const w=Nt(s,a,e.naturalWidth,e.naturalHeight,o,i.turnedBox);l=w.drawW,m=w.drawH}t.drawImage(e,-l/2,-m/2,l,m),t.restore()}function Vt(t){const e=/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?)$/.exec(t.trim());if(!e)return null;const r=Number(e[1]),i=Number(e[2]);return!Number.isFinite(r)||!Number.isFinite(i)||r<=0||i<=0?null:r/i}function ft(t){switch(t){case"free":return null;case"rounded-rect":return null;case"square":case"circle":return 1;default:return Vt(t)}}function Ve(t,e,r,i,n,o){if(e===null)return _e(t,o,i,n);const h=i/n,c=e/h;let{x:s,y:a,width:p,height:f}=t;const g=r.includes("e")||r.includes("w"),d=r.includes("n")||r.includes("s");g&&!d?f=p/c:d&&!g?p=f*c:f=p/c;const y=t.x+t.width,l=t.y+t.height,m=t.x+t.width/2,w=t.y+t.height/2;let C;r.includes("w")?C=y:r.includes("e")?C=1-t.x:C=2*Math.min(m,1-m);let x;r.includes("n")?x=l:r.includes("s")?x=1-t.y:x=2*Math.min(w,1-w);const M=Math.min(1,C/p,x/f);M<1&&(p*=M,f*=M);const v=o/i,W=o/n;return p<v&&(p=v,f=p/c),f<W&&(f=W,p=f*c),r.includes("w")?s=y-p:r.includes("e")?s=t.x:s=m-p/2,r.includes("n")?a=l-f:r.includes("s")?a=t.y:a=w-f/2,s=E(s,0,1-p),a=E(a,0,1-f),{x:s,y:a,width:p,height:f}}function _e(t,e,r,i){const n=e/r,o=e/i;return{...t,width:Math.max(t.width,n),height:Math.max(t.height,o)}}function Ae(t,e,r,i,n,o,h){const c=t.rotation*Math.PI/180,s=Math.abs(Math.cos(c)),a=Math.abs(Math.sin(c)),p=i.width*s+i.height*a,f=i.width*a+i.height*s,g=Math.max(p/n,f/o),d=Math.min(g,h),y=E(t.scale,d,h),l=e/2-(i.x+i.width/2),m=r/2-(i.y+i.height/2),w=Math.max(0,(n*y-p)/2),C=Math.max(0,(o*y-f)/2);return{scale:y,panX:E(t.panX,(-w-l)/y,(w-l)/y),panY:E(t.panY,(-C-m)/y,(C-m)/y),minScale:d}}function fe(t,e,r){const i=t.cropRect,n=(i.x+i.width/2)*e,o=(i.y+i.height/2)*r,h=t.rotationPivot??{x:i.x+i.width/2,y:i.y+i.height/2},c=h.x*e,s=h.y*r,a=t.rotation*Math.PI/180,p=Math.cos(a),f=Math.sin(a);return{ux:c+p*(n-c)+f*(o-s),uy:s-f*(n-c)+p*(o-s)}}function Ue(t,e,r,i){const{ux:n,uy:o}=fe(t,r,i),h=r/2,c=i/2,s=t.flipH?-1:1,a=t.flipV?-1:1,p=e/t.scale,f=n-p*(n-(h+s*t.scale*t.panX)),g=o-p*(o-(c+a*t.scale*t.panY));return{panX:(f-h)/(s*e),panY:(g-c)/(a*e)}}function ee(t,e,r,i,n=e,o=r,h={}){const c=t.cropRect,s=c.width*e,a=c.height*r,p=t.rotation*Math.PI/180,f=Math.cos(p),g=Math.sin(p),{ux:d,uy:y}=fe(t,e,r),l=(s*Math.abs(f)+a*Math.abs(g))/2,m=(s*Math.abs(g)+a*Math.abs(f))/2,w=Math.round(t.quarterTurns/90)%2!==0,C=Nt(e,r,n,o,t.quarterTurns,t.turnedBox),x=(w?C.drawH:C.drawW)/2,M=(w?C.drawW:C.drawH)/2,v=e/2,W=r/2,$=t.flipH?-1:1,q=t.flipV?-1:1,N=Math.min(Math.max(l/x,m/M),i);let L=t.scale;const nt=v+$*L*t.panX,tt=W+q*L*t.panY,S=(d-nt)/L,I=(y-tt)/L,U=Math.abs(d-nt)+l<=L*x+1e-6&&Math.abs(y-tt)+m<=L*M+1e-6;let O=t.panX,j=t.panY;if(!U&&!(h.clampPanFirst&&L>=N-1e-9)){const J=(F,V,ot)=>Math.abs(V)<ot?F/(ot-Math.abs(V)):Number.POSITIVE_INFINITY,P=Math.max(L,J(l,S,x),J(m,I,M));L=Math.min(Number.isFinite(P)?P:Math.max(L,N),i),O=$*(d-L*S-v)/L,j=q*(y-L*I-W)/L}L=Math.max(L,N);const Y=Math.max(0,L*x-l),B=Math.max(0,L*M-m),_=(J,P,F)=>{const V=(J-P)/(F*L),ot=(J+P)/(F*L);return V<ot?[V,ot]:[ot,V]},[Z,Q]=_(d-v,Y,$),[et,rt]=_(y-W,B,q);return{scale:L,panX:E(O,Z,Q),panY:E(j,et,rt),minScale:N}}const ht=.8;function me(t,e,r){return!e||!r?t:t/(e/r)}function Lt(t="free",e=1,r=1){const i=ft(t);let n;if(i!==null){const o=me(i,e,r);let h,c;o>=1?(h=ht,c=h/o,c>ht&&(c=ht,h=c*o)):(c=ht,h=c*o,h>ht&&(h=ht,c=h/o)),n={x:(1-h)/2,y:(1-c)/2,width:h,height:c}}else{const o=ht;n={x:(1-o)/2,y:(1-o)/2,width:o,height:o}}return{quarterTurns:0,rotation:0,flipH:!1,flipV:!1,scale:1,panX:0,panY:0,cropRect:n,turnedBox:!1}}function Ke(t){const e=t.quarterTurns-90;return{...t,quarterTurns:e,panX:0,panY:0}}function Ze(t){const e=t.flipH!==t.flipV,r=o=>e?{x:1-o.y,y:o.x}:{x:o.y,y:1-o.x},i=t.cropRect,n=e?{x:1-i.y-i.height,y:i.x,width:i.height,height:i.width}:{x:i.y,y:1-i.x-i.width,width:i.height,height:i.width};return{...t,cropRect:n,rotationPivot:t.rotationPivot?r(t.rotationPivot):void 0}}function je(t){return{...t,flipH:!t.flipH}}function Et(t,e){const r=E(e,-45,45);let i=t.rotationPivot;if(r===0)i=void 0;else if(!i){const n=t.cropRect;i={x:n.x+n.width/2,y:n.y+n.height/2}}return{...t,rotation:r,rotationPivot:i}}function mt(t,e,r,i){return{...t,scale:E(e,r,i)}}function pt(t,e){return{...t,cropRect:{x:E(e.x,0,1-e.width),y:E(e.y,0,1-e.height),width:E(e.width,0,1),height:E(e.height,0,1)}}}function $t(t,e,r=1,i=1,n="default"){const o=ft(e);let h;if(o===null)h={...t.cropRect};else{const c=me(o,r,i),{cropRect:s}=t,a=s.x+s.width/2,p=s.y+s.height/2,f=n==="max"?1:ht;let g,d;c>=1?(g=f,d=g/c,d>f&&(d=f,g=d*c)):(d=f,g=d*c,g>f&&(g=f,d=g/c)),h={x:E(a-g/2,0,1-g),y:E(p-d/2,0,1-d),width:g,height:d}}return{...t,cropRect:h}}function re(t,e,r){return{...t,panX:t.panX+e,panY:t.panY+r}}let ut=null;function Ge(t,e){ut||(ut=document.createElement("canvas")),(ut.width!==t||ut.height!==e)&&(ut.width=t,ut.height=e);const r=ut.getContext("2d");return r.clearRect(0,0,t,e),r}function Qe(t,e,r,i,n="rect",o=20,h="rgba(0, 0, 0, 0.55)"){const c=Ge(e,r);if(c.fillStyle=h,c.fillRect(0,0,e,r),c.globalCompositeOperation="destination-out",c.fillStyle="rgba(0, 0, 0, 1)",n==="circle"){const s=i.x+i.width/2,a=i.y+i.height/2,p=i.width/2,f=i.height/2;c.beginPath(),c.ellipse(s,a,p,f,0,0,Math.PI*2),c.fill()}else if(n==="rounded-rect"){const{x:s,y:a,width:p,height:f}=i,g=Math.min(o,p/2,f/2);c.beginPath(),c.moveTo(s+g,a),c.lineTo(s+p-g,a),c.arcTo(s+p,a,s+p,a+g,g),c.lineTo(s+p,a+f-g),c.arcTo(s+p,a+f,s+p-g,a+f,g),c.lineTo(s+g,a+f),c.arcTo(s,a+f,s,a+f-g,g),c.lineTo(s,a+g),c.arcTo(s,a,s+g,a,g),c.closePath(),c.fill()}else c.fillRect(i.x,i.y,i.width,i.height);c.globalCompositeOperation="source-over",t.drawImage(ut,0,0)}const Je=12,tr=22,yt=11,Pt=9,er={frame:"#ffffff",frameShadow:"rgba(0, 0, 0, 0.3)",handleFill:"#ffffff",handleStroke:"rgba(0, 0, 0, 0.25)"};function rr(t,e,r="rect",i=20,n=er,o=!0,h,c=!0){const s=r==="circle",a=r==="rounded-rect",{x:p,y:f,width:g,height:d}=e;if(t.save(),t.strokeStyle=n.frameShadow,t.lineWidth=1,s){const v=p+g/2,W=f+d/2,$=g/2-1,q=d/2-1;t.beginPath(),t.ellipse(v,W,$,q,0,0,Math.PI*2),t.stroke()}else a?(oe(t,p+1,f+1,g-2,d-2,Math.min(i,g/2,d/2)),t.stroke()):t.strokeRect(p+1,f+1,g-2,d-2);if(t.strokeStyle=n.frame,t.lineWidth=2,s){const v=p+g/2,W=f+d/2,$=g/2,q=d/2;t.beginPath(),t.ellipse(v,W,$,q,0,0,Math.PI*2),t.stroke(),t.setLineDash([4,4]),t.strokeStyle=n.frameShadow,t.lineWidth=1,t.beginPath(),t.ellipse(v,W,$-1,q-1,0,0,Math.PI*2),t.stroke(),t.setLineDash([])}else if(a){const v=Math.min(i,g/2,d/2);oe(t,p,f,g,d,v),t.stroke()}else t.strokeRect(p,f,g,d);if(!o){t.restore();return}t.fillStyle=n.handleFill,t.strokeStyle=n.handleStroke,t.lineWidth=1;const y=Math.min(Je/2,g/6,d/6),l=y+1,m=v=>h?Math.min(Math.max(v,l),h.width-l):v,w=v=>h?Math.min(Math.max(v,l),h.height-l):v,C=[{cx:p,cy:f},{cx:p+g,cy:f},{cx:p+g,cy:f+d},{cx:p,cy:f+d}];if(!c){t.restore();return}for(const v of C)t.beginPath(),t.arc(m(v.cx),w(v.cy),y,0,Math.PI*2),t.fill(),t.stroke();const x=p-yt,M=f-yt;if(h&&(x-y<0||M-y<0)){t.restore();return}t.beginPath(),t.arc(x,M,y,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle=n.handleStroke,t.beginPath(),t.arc(x,M,Math.max(2,y*.35),0,Math.PI*2),t.fill(),t.restore()}function oe(t,e,r,i,n,o){o=Math.min(o,i/2,n/2),t.beginPath(),t.moveTo(e+o,r),t.lineTo(e+i-o,r),t.arcTo(e+i,r,e+i,r+o,o),t.lineTo(e+i,r+n-o),t.arcTo(e+i,r+n,e+i-o,r+n,o),t.lineTo(e+o,r+n),t.arcTo(e,r+n,e,r+n-o,o),t.lineTo(e,r+o),t.arcTo(e,r,e+o,r,o),t.closePath()}function or(t){const{x:e,y:r,width:i,height:n}=t,o=tr;return[{target:"move-handle",rect:{x:e-yt-Pt,y:r-yt-Pt,w:Pt*2,h:Pt*2}},{target:"handle-nw",rect:{x:e-o,y:r-o,w:o*2,h:o*2}},{target:"handle-ne",rect:{x:e+i-o,y:r-o,w:o*2,h:o*2}},{target:"handle-se",rect:{x:e+i-o,y:r+n-o,w:o*2,h:o*2}},{target:"handle-sw",rect:{x:e-o,y:r+n-o,w:o*2,h:o*2}},{target:"handle-n",rect:{x:e+o,y:r-o,w:i-o*2,h:o*2}},{target:"handle-s",rect:{x:e+o,y:r+n-o,w:i-o*2,h:o*2}},{target:"handle-e",rect:{x:e+i-o,y:r+o,w:o*2,h:n-o*2}},{target:"handle-w",rect:{x:e-o,y:r+o,w:o*2,h:n-o*2}}]}function ir(t,e,r){const{x:i,y:n,width:o,height:h}=e;t.save(),t.strokeStyle=`rgba(255, 255, 255, ${.35*r})`,t.lineWidth=.5;for(let c=1;c<=2;c++){const s=i+o*c/3;t.beginPath(),t.moveTo(s,n),t.lineTo(s,n+h),t.stroke()}for(let c=1;c<=2;c++){const s=n+h*c/3;t.beginPath(),t.moveTo(i,s),t.lineTo(i+o,s),t.stroke()}t.restore()}function ar(t,e,r,i){r*2>=e.width||r*2>=e.height||(t.save(),t.strokeStyle=i,t.lineWidth=1,t.setLineDash([6,4]),t.strokeRect(e.x+r,e.y+r,e.width-r*2,e.height-r*2),t.setLineDash([]),t.restore())}function nr(t,e,r,i=20,n=!1,o){const h=t.getContext("2d");if(!h)throw new Error("2D canvas context unavailable");const c=h;function s(){if(o)return o;if(t.parentElement)return t.parentElement;let S=t.getRootNode();for(;S&&S!==document&&S instanceof ShadowRoot;){const I=S.host;if(I instanceof HTMLElement)return I;S=I.getRootNode()}return null}let a=!0,p=null,f=null,g=!1,d=!1,y=0;const l={quarterTurns:0,rotation:0,flipH:1,flipV:1,scale:1,panX:0,panY:0,cropRect:{x:0,y:0,width:1,height:1},gridOpacity:0,interactive:!1},m={...l},w={quarterTurns:0,flipH:0,flipV:0};let C={show:!1,size:10,color:"rgba(255, 0, 0, 0.5)"},x=0,M=.5,v=5,W=!1;function $(){if(g)return;const S=s();if(!S)return;const I=window.devicePixelRatio,U=Math.min(Number.isFinite(I)&&I>0?I:1,2),O=S.getBoundingClientRect();O.width<=0||O.height<=0||(t.width=Math.max(0,Math.floor(O.width*U)),t.height=Math.max(0,Math.floor(O.height*U)),t.style.width=`${O.width}px`,t.style.height=`${O.height}px`,c.setTransform(U,0,0,U,0,0),a=!0)}function q(){const S=s();return S?{x:0,y:0,w:S.clientWidth,h:S.clientHeight}:{x:0,y:0,w:0,h:0}}function N(){const S=q(),I=l.cropRect;return{x:S.x+I.x*S.w,y:S.y+I.y*S.h,width:I.width*S.w,height:I.height*S.h}}function L(S,I){return 1-Math.pow(1-S,I*60)}function nt(S){if(n){l.quarterTurns=m.quarterTurns,l.rotation=m.rotation,l.flipH=m.flipH,l.flipV=m.flipV,l.scale=m.scale,l.panX=m.panX,l.panY=m.panY,l.cropRect={...m.cropRect},l.gridOpacity=m.gridOpacity,l.interactive=m.interactive,a=!0;return}let I=!1;if(Math.abs(l.quarterTurns-m.quarterTurns)>.01){const Y=-180*(l.quarterTurns-m.quarterTurns),B=-22*w.quarterTurns;w.quarterTurns+=(Y+B)*S,l.quarterTurns+=w.quarterTurns*S,Math.abs(l.quarterTurns-m.quarterTurns)<.01&&Math.abs(w.quarterTurns)<.01&&(l.quarterTurns=m.quarterTurns,w.quarterTurns=0),I=!0,a=!0}if(Math.abs(l.flipH-m.flipH)>.01){const Y=-400*(l.flipH-m.flipH),B=-28*w.flipH;w.flipH+=(Y+B)*S,l.flipH+=w.flipH*S,Math.abs(l.flipH-m.flipH)<.01&&Math.abs(w.flipH)<.01&&(l.flipH=m.flipH,w.flipH=0),I=!0,a=!0}if(Math.abs(l.flipV-m.flipV)>.01){const Y=-400*(l.flipV-m.flipV),B=-28*w.flipV;w.flipV+=(Y+B)*S,l.flipV+=w.flipV*S,Math.abs(l.flipV-m.flipV)<.01&&Math.abs(w.flipV)<.01&&(l.flipV=m.flipV,w.flipV=0),I=!0,a=!0}const U=L(.15,S),O=L(.12,S),j=L(.12,S);if(Math.abs(l.rotation-m.rotation)>.01&&(l.rotation=st(l.rotation,m.rotation,U),I=!0,a=!0),Math.abs(l.scale-m.scale)>.001&&(l.scale=st(l.scale,m.scale,U),I=!0,a=!0),!!m.interactive){(l.panX!==m.panX||l.panY!==m.panY)&&(l.panX=m.panX,l.panY=m.panY,a=!0);const Y=m.cropRect,B=l.cropRect;(B.x!==Y.x||B.y!==Y.y||B.width!==Y.width||B.height!==Y.height)&&(l.cropRect={...Y},a=!0)}else{Math.abs(l.panX-m.panX)>.1&&(l.panX=st(l.panX,m.panX,U),I=!0,a=!0),Math.abs(l.panY-m.panY)>.1&&(l.panY=st(l.panY,m.panY,U),I=!0,a=!0);const Y=l.cropRect,B=m.cropRect;(Math.abs(Y.x-B.x)>1e-4||Math.abs(Y.y-B.y)>1e-4||Math.abs(Y.width-B.width)>1e-4||Math.abs(Y.height-B.height)>1e-4)&&(l.cropRect={x:st(Y.x,B.x,O),y:st(Y.y,B.y,O),width:st(Y.width,B.width,O),height:st(Y.height,B.height,O)},I=!0,a=!0)}if(Math.abs(l.gridOpacity-m.gridOpacity)>.01&&(l.gridOpacity=st(l.gridOpacity,m.gridOpacity,j),I=!0,a=!0),l.scale<M){const Y=-400*(l.scale-M),B=-28*x;x+=(Y+B)*S,l.scale+=x*S,Math.abs(l.scale-M)<.001&&Math.abs(x)<.001&&(l.scale=M,x=0),I=!0,a=!0}else if(l.scale>v){const Y=-400*(l.scale-v),B=-28*x;x+=(Y+B)*S,l.scale+=x*S,Math.abs(l.scale-v)<.001&&Math.abs(x)<.001&&(l.scale=v,x=0),I=!0,a=!0}I||(l.rotation=m.rotation,l.scale=m.scale,l.panX=m.panX,l.panY=m.panY,l.cropRect={...m.cropRect},l.gridOpacity=m.gridOpacity,l.interactive=m.interactive)}function tt(S){if(g||!d){f=null;return}const I=typeof S=="number"?S:performance.now(),U=y===0?1/60:Math.min(.25,Math.max(0,(I-y)/1e3));if(y=I,f=requestAnimationFrame(tt),nt(U),!a)return;const O=s();if(!O)return;const j=O.clientWidth,Y=O.clientHeight;if(j===0||Y===0)return;a=!1,c.clearRect(0,0,j,Y);const B=q();Ne(c,e,B,l,W,m.quarterTurns);const _=N(),Z=r(),Q=s()??t,et=(rt,J)=>getComputedStyle(Q).getPropertyValue(rt).trim()||J;if(!(W&&Z==="rect")){const rt=et("--ci-crop-overlay-color","rgba(0, 0, 0, 0.55)");Qe(c,j,Y,_,Z,i,rt)}W&&Z==="rect"||rr(c,_,Z,i,{frame:et("--ci-crop-frame-color","#ffffff"),frameShadow:et("--ci-crop-frame-shadow","rgba(0, 0, 0, 0.3)"),handleFill:et("--ci-crop-handle-fill","#ffffff"),handleStroke:et("--ci-crop-handle-stroke","rgba(0, 0, 0, 0.25)")},!W,{width:j,height:Y},!p),p&&!W&&p(_),C.show&&ar(c,_,C.size,C.color),l.gridOpacity>.01&&ir(c,_,l.gridOpacity)}return $(),{markDirty(){a=!0},startLoop(){d||g||(d=!0,y=0,tt())},stopLoop(){d=!1,f!==null&&(cancelAnimationFrame(f),f=null)},setFrameListener(S){p=S,a=!0},setDisplayState(S){Object.assign(m,S),l.rotationPivot=S.rotationPivot,l.turnedBox=S.turnedBox,a=!0},getDisplayState(){return{...l}},getCanvasCropRect:N,setScaleBounds(S,I){M=S,v=I},setBleedConfig(S){C=S,a=!0},setFixedFrame(S){W=S,a=!0},resize:$,destroy(){g=!0,d=!1,f!==null&&(cancelAnimationFrame(f),f=null)}}}const sr=["nw","ne","sw","se","n","s","e","w"];function cr(t){return sr.includes(t)?t:null}function lr(t,e,r){return t>=r.x&&t<=r.x+r.w&&e>=r.y&&e<=r.y+r.h}function Xt(t,e,r){const i=or(r);for(const{target:n,rect:o}of i)if(lr(t,e,o)){if(n==="move-handle")return{type:"move-handle"};const h=cr(n.replace("handle-",""));if(h)return{type:"handle",position:h}}return t>=r.x&&t<=r.x+r.width&&e>=r.y&&e<=r.y+r.height?{type:"crop-area"}:{type:"outside"}}function ie(t,e){if(t.type==="move-handle")return"move";switch(t.type){case"crop-area":case"outside":return e?"grabbing":"grab";case"handle":switch(t.position){case"nw":case"se":return"nwse-resize";case"ne":case"sw":return"nesw-resize";case"n":case"s":return"ns-resize";case"e":case"w":return"ew-resize";default:return"default"}default:return"default"}}const ge="__ciCropHandle";function hr(t,e){const r=new Map;let i=0,n=!1;function o(d){return d==="touch"||d==="pen"?d:"mouse"}function h(d){const y=t.getBoundingClientRect();return{x:d.clientX-y.left,y:d.clientY-y.top}}function c(){return[...r.values()]}function s(d){if(d.pointerType==="mouse"&&d.button!==0)return;try{t.setPointerCapture(d.pointerId)}catch{}const y=h(d),l={id:d.pointerId,x:y.x,y:y.y,startX:y.x,startY:y.y,pressure:d.pressure,pointerType:o(d.pointerType),shiftKey:d.shiftKey,altKey:d.altKey},m=d[ge];typeof m=="string"&&(l.handle=m),r.set(d.pointerId,l),e.onPointerDown(l,c())}function a(d){const y=r.get(d.pointerId);if(!y){if(e.onHover){const w=h(d);e.onHover({id:d.pointerId,x:w.x,y:w.y,startX:w.x,startY:w.y,pressure:0,pointerType:o(d.pointerType),shiftKey:d.shiftKey,altKey:d.altKey})}return}const l=h(d);y.x=l.x,y.y=l.y,y.pressure=d.pressure,y.shiftKey=d.shiftKey,y.altKey=d.altKey;const m=c();if(e.onPointerMove(y,m),m.length===2&&e.onPinch){const[w,C]=m,x=Math.sqrt((C.x-w.x)**2+(C.y-w.y)**2);!n&&x>10&&(i=x,n=!0),n&&e.onPinch({centerX:(w.x+C.x)/2,centerY:(w.y+C.y)/2,scale:x/i,distance:x})}}function p(d){const y=r.get(d.pointerId);if(y){r.delete(d.pointerId);try{t.releasePointerCapture(d.pointerId)}catch{}c().length<2&&(n=!1,i=0),e.onPointerUp(y,c())}}function f(d){e.onWheel&&e.onWheel(d)}t.addEventListener("pointerdown",s),t.addEventListener("pointermove",a),t.addEventListener("pointerup",p),t.addEventListener("pointercancel",p),t.addEventListener("wheel",f,{passive:!1});const g=d=>d.preventDefault();return t.addEventListener("contextmenu",g),t.style.touchAction="none",{destroy(){t.removeEventListener("pointerdown",s),t.removeEventListener("pointermove",a),t.removeEventListener("pointerup",p),t.removeEventListener("pointercancel",p),t.removeEventListener("wheel",f),t.removeEventListener("contextmenu",g),t.style.touchAction="",r.clear()}}}function ur(t,e,r,i,n){const o=(e-t.startX)/i,h=(r-t.startY)/n,{startCrop:c}=t;return{x:E(c.x-o,0,1-c.width),y:E(c.y-h,0,1-c.height),width:c.width,height:c.height}}function pr(t,e,r,i){return{handle:t.startsWith("handle-")?t.slice(7):t,startCrop:{...e},startX:r,startY:i}}function dr(t,e,r,i,n,o,h,c={shiftKey:!1,altKey:!1}){const s=(e-t.startX)/i,a=(r-t.startY)/n,{startCrop:p,handle:f}=t;let g=p.x,d=p.y,y=p.width,l=p.height;const m=h/i,w=h/n;if(f.includes("w")){const M=E(g+s,0,g+y-m);y=y-(M-g),g=M}if(f.includes("e")&&(y=E(y+s,m,1-g)),f.includes("n")){const M=E(d+a,0,d+l-w);l=l-(M-d),d=M}if(f.includes("s")&&(l=E(l+a,w,1-d)),y=Math.max(y,m),l=Math.max(l,w),c.altKey){const M=p.x+p.width/2,v=p.y+p.height/2,W=y/2,$=l/2;g=E(M-W,0,1-y),d=E(v-$,0,1-l)}let C={x:g,y:d,width:y,height:l},x=ft(o);return c.shiftKey&&o==="free"&&(x=p.width/p.height),x!==null&&(C=Ve(C,x,f,i,n,h)),C}function fr(t,e){if(t.length<2)return null;const[r,i]=t,n=qe(r.x,r.y,i.x,i.y);return n<10?null:{initialDistance:n,initialScale:e,initialCenterX:(r.x+i.x)/2,initialCenterY:(r.y+i.y)/2}}function mr(t,e,r,i,n,o,h){const c=1-t*r.sensitivity*.001,s=E(e*c,r.minScale,r.maxScale);let a=0,p=0;if(i!==void 0&&o!==void 0){const f=1-s/e;a=(i-o)*f,p=(n-h)*f}return{scale:s,panDeltaX:a,panDeltaY:p}}function gr(t,e){function r(i){if(!((typeof i.composedPath=="function"?i.composedPath():[]).includes(t)||t.contains(document.activeElement)||document.activeElement===t)||i.ctrlKey||i.metaKey||i.altKey)return;const n=i.shiftKey?.01:.005;switch(i.key){case"ArrowLeft":i.preventDefault(),e.onMoveCrop(-n,0);break;case"ArrowRight":i.preventDefault(),e.onMoveCrop(n,0);break;case"ArrowUp":i.preventDefault(),e.onMoveCrop(0,-n);break;case"ArrowDown":i.preventDefault(),e.onMoveCrop(0,n);break;case"r":case"R":i.preventDefault(),e.onRotateLeft();break;case"f":case"F":i.preventDefault(),e.onFlipH();break;case"+":case"=":i.preventDefault(),e.onZoomIn();break;case"-":case"_":i.preventDefault(),e.onZoomOut();break;case"0":i.preventDefault(),e.onResetZoom();break;case"[":i.preventDefault(),e.onRotateFine(-1);break;case"]":i.preventDefault(),e.onRotateFine(1);break}}return t.addEventListener("keydown",r),{destroy(){t.removeEventListener("keydown",r)}}}function yr(t){t.setAttribute("role","application"),t.setAttribute("aria-roledescription","image crop tool"),t.setAttribute("aria-label","Image crop tool — use arrow keys to move crop, R to rotate, F to flip horizontal, +/- to zoom"),t.setAttribute("tabindex","0")}function zt(t,e,r="free"){let i=t.querySelector(".ci-crop-sr-only[aria-live]");i||(i=document.createElement("div"),i.className="ci-crop-sr-only",i.setAttribute("aria-live","polite"),t.appendChild(i));const n=e.quarterTurns+e.rotation,o=Math.round(e.scale*100),h=r,c=e.flipH?", flipped horizontal":"";i.textContent=`Crop: ${h}, rotation ${n.toFixed(1)}°${c}, zoom ${o}%`}function Yt(){return[1,0,0,1,0,0]}function A(t,e){return[t[0]*e[0]+t[2]*e[1],t[1]*e[0]+t[3]*e[1],t[0]*e[2]+t[2]*e[3],t[1]*e[2]+t[3]*e[3],t[0]*e[4]+t[2]*e[5]+t[4],t[1]*e[4]+t[3]*e[5]+t[5]]}function at(t,e){return[1,0,0,1,t,e]}function St(t,e){return[t,0,0,e,0,0]}function It(t){const e=gt(t),r=Math.cos(e),i=Math.sin(e);return[r,i,-i,r,0,0]}function wr(t,e,r,i,n,o,h,c){let s=Yt();s=A(s,at(t,e)),o!==1&&(s=A(s,St(o,o))),(h!==0||c!==0)&&(s=A(s,at(h,c)));const a=r+i;return a!==0&&(s=A(s,It(a))),n<0&&(s=A(s,St(-1,1))),s}function ae(t,e,r){return{x:t[0]*e+t[2]*r+t[4],y:t[1]*e+t[3]*r+t[5]}}function br(t){const e=t[0]*t[3]-t[1]*t[2];if(Math.abs(e)<1e-10)return Yt();const r=1/e;return[t[3]*r,-t[1]*r,-t[2]*r,t[0]*r,(t[2]*t[5]-t[3]*t[4])*r,(t[1]*t[4]-t[0]*t[5])*r]}function xr(t,e,r){const i=e.width/2,n=e.height/2,o=wr(i,n,t.quarterTurns,t.rotation,t.flipH?-1:1,t.scale,t.panX,t.panY);return new DOMMatrix([o[0],o[1],o[2],o[3],o[4],o[5]])}function vr(t,e){const r=e.transformPoint({x:t.x,y:t.y});return{x:r.x,y:r.y}}function Mr(t,e){const r=e.inverse().transformPoint({x:t.x,y:t.y});return{x:r.x,y:r.y}}function _t(t){const e=t.getContext("2d");if(!e)throw new Error("2D canvas context unavailable");return e}function Sr(t,e,r,i="classic"){const n=t.quarterTurns+t.rotation,o=Math.round(t.quarterTurns/90)%2!==0;let h;if(i==="fixed")h={x:Math.round(t.cropRect.x*e),y:Math.round(t.cropRect.y*r),width:Math.round(t.cropRect.width*e),height:Math.round(t.cropRect.height*r)};else{const c={...t,scale:1,panX:0,panY:0,rotation:0,rotationPivot:void 0};h=Bt(c,e,r,0,0,"classic").cropPx}return{rotation:n,flipH:t.flipH,flipV:t.flipV,scale:t.scale,crop:h,outputWidth:o?h.height:h.width,outputHeight:o?h.width:h.height}}function ye(t,e,r,i,n,o="classic"){const h=o==="fixed"&&i>0&&n>0;let c,s,a,p;if(h){const M=Mt(i,n,e,r,t.quarterTurns),v=Math.max(e/M.drawW,r/M.drawH);c=Math.max(1,Math.round(i*v)),s=Math.max(1,Math.round(n*v));const W=Mt(c,s,e,r,t.quarterTurns);a=W.drawW,p=W.drawH}else{c=t.turnedBox?r:e,s=t.turnedBox?e:r;const M=Nt(c,s,e,r,t.quarterTurns,t.turnedBox);a=M.drawW,p=M.drawH}const f=t.cropRect.x*c,g=t.cropRect.y*s,d=t.cropRect.width*c,y=t.cropRect.height*s,l=t.rotationPivot??{x:t.cropRect.x+t.cropRect.width/2,y:t.cropRect.y+t.cropRect.height/2},m=l.x*c,w=l.y*s,C=i>0?c/i:1;let x=Yt();if(t.rotation!==0&&(x=A(x,at(m,w)),x=A(x,It(t.rotation)),x=A(x,at(-m,-w))),t.flipH||t.flipV){const M=de(t);x=A(x,at(M.x*c,M.y*s)),x=A(x,St(t.flipH?-1:1,t.flipV?-1:1)),x=A(x,at(-M.x*c,-M.y*s))}return x=A(x,at(c/2,s/2)),x=A(x,St(t.scale,t.scale)),x=A(x,at(t.panX*C,t.panY*C)),t.quarterTurns!==0&&(x=A(x,It(t.quarterTurns))),{DW:c,DH:s,drawW:a,drawH:p,cropX:f,cropY:g,cropW:d,cropH:y,imgToDisp:x}}function we(t,e,r,i,n="free",o=20,h=0,c=0,s="classic"){const{DW:a,DH:p,drawW:f,drawH:g,cropX:d,cropY:y,cropW:l,cropH:m}=ye(e,t.naturalWidth,t.naturalHeight,h,c,s);let w=Math.max(1,Math.round(l)),C=Math.max(1,Math.round(m));r>0&&w>r&&(C=Math.max(1,Math.round(C*(r/w))),w=r),i>0&&C>i&&(w=Math.max(1,Math.round(w*(i/C))),C=i);const x=l>1e-6?w/l:1,M=document.createElement("canvas");M.width=w,M.height=C;const v=_t(M);v.save(),v.scale(x,x),v.translate(-d,-y);const W=e.rotationPivot??{x:e.cropRect.x+e.cropRect.width/2,y:e.cropRect.y+e.cropRect.height/2},$=W.x*a,q=W.y*p;e.rotation!==0&&(v.translate($,q),v.rotate(gt(e.rotation)),v.translate(-$,-q)),(e.flipH||e.flipV)&&(v.translate(a/2,p/2),v.scale(e.flipH?-1:1,e.flipV?-1:1),v.translate(-a/2,-p/2)),v.translate(a/2,p/2),v.scale(e.scale,e.scale);const N=h>0?a/h:1;return v.translate(e.panX*N,e.panY*N),e.quarterTurns!==0&&v.rotate(gt(e.quarterTurns)),v.drawImage(t,-f/2,-g/2,f,g),v.restore(),n==="circle"?kr(M):n==="rounded-rect"&&Rr(M,o),M}function Cr(t){const e=t%360,r=e<0?e+360:e;return r===0?0:r}function Bt(t,e,r,i,n,o="classic",h="auto"){if(!(e>0)||!(r>0))throw new Error("resolveServerCrop: imageWidth and imageHeight must be positive");if(!Number.isFinite(t.scale)||t.scale<=0)throw new Error("resolveServerCrop: state.scale must be a positive finite number");const{drawW:c,drawH:s,cropX:a,cropY:p,cropW:f,cropH:g,imgToDisp:d}=ye(t,e,r,i,n,o),y=br(d),l=[[a,p],[a+f,p],[a+f,p+g],[a,p+g]].map(([P,F])=>{const V=ae(y,P,F);return{x:(V.x+c/2)*(e/c),y:(V.y+s/2)*(r/s)}}),m=t.quarterTurns+t.rotation,w=t.flipH!==t.flipV?t.rotation-t.quarterTurns:m,C=Cr(-w),x=Math.abs((m%90+90)%90)>1e-6,M=Math.max(1,Math.round(f)),v=Math.max(1,Math.round(g));if(!x){const P=l.map(xt=>xt.x),F=l.map(xt=>xt.y),V=Math.min(...P),ot=Math.min(...F),Ct=Math.max(...P),wt=Math.max(...F),Rt=E(Math.round(V),0,e),kt=E(Math.round(ot),0,r),bt=E(Math.round(Ct),0,e),Ht=E(Math.round(wt),0,r);return{cropPx:{x:Rt,y:kt,width:Math.max(1,bt-Rt),height:Math.max(1,Ht-kt)},rotateCCW:C,flipH:t.flipH,flipV:t.flipV,outW:M,outH:v,tilted:!1,clamped:V<-.5||ot<-.5||Ct>e+.5||wt>r+.5}}const W=gt(w),$=Math.round(Math.abs(e*Math.cos(W))+Math.abs(r*Math.sin(W))),q=Math.round(Math.abs(e*Math.sin(W))+Math.abs(r*Math.cos(W)));let N=Yt();N=A(N,at($/2,q/2)),N=A(N,It(w)),(t.flipH||t.flipV)&&(N=A(N,St(t.flipH?-1:1,t.flipV?-1:1))),N=A(N,at(-e/2,-r/2));const L=l.map(P=>ae(N,P.x,P.y)),nt=L.map(P=>P.x),tt=L.map(P=>P.y),S=E(Math.round(Math.min(...nt)),0,$),I=E(Math.round(Math.min(...tt)),0,q),U=E(Math.round(Math.max(...nt)),0,$),O=E(Math.round(Math.max(...tt)),0,q),j=Math.round(($-e)/2),Y=Math.round((q-r)/2),B=h==="inset"?!0:h==="centered"?!1:j>=0&&Y>=0,_=B?j:0,Z=B?Y:0,Q={x:S-_,y:I-Z,width:Math.max(1,U-S),height:Math.max(1,O-I)},et=l.map(P=>P.x),rt=l.map(P=>P.y),J=Math.min(...et)<-.5||Math.min(...rt)<-.5||Math.max(...et)>e+.5||Math.max(...rt)>r+.5;return{cropPx:Q,rotateCCW:C,flipH:t.flipH,flipV:t.flipV,outW:M,outH:v,tilted:!0,clamped:J,nested:{innerRotateCCW:C,flipH:t.flipH,flipV:t.flipV,innerW:$,innerH:q,outerCrop:Q}}}function Rr(t,e){const r=_t(t),i=t.width,n=t.height,o=Math.min(e,i/2,n/2);r.globalCompositeOperation="destination-in",r.beginPath(),r.moveTo(o,0),r.lineTo(i-o,0),r.arcTo(i,0,i,o,o),r.lineTo(i,n-o),r.arcTo(i,n,i-o,n,o),r.lineTo(o,n),r.arcTo(0,n,0,n-o,o),r.lineTo(0,o),r.arcTo(0,0,o,0,o),r.closePath(),r.fill(),r.globalCompositeOperation="source-over"}function kr(t){const e=_t(t),r=t.width,i=t.height;e.globalCompositeOperation="destination-in",e.beginPath(),e.ellipse(r/2,i/2,r/2,i/2,0,0,Math.PI*2),e.fill(),e.globalCompositeOperation="source-over"}async function Hr(t,e,r){return new Promise((i,n)=>{let o=!1;try{t.toBlob(h=>{o||(o=!0,h?i(h):n(new Error("Failed to create blob (canvas may be empty or tainted)")))},e,r)}catch(h){o||(o=!0,n(h instanceof Error?h:new Error(String(h))))}})}const be="cloudimg.io",ne=["cloudimg.io","filerobot.com"];function Tr(t,e){if(!e.src)throw new Error("buildCloudimageUrl: options.src is required");const r=[],i=`${t.flipH?"h":""}${t.flipV?"v":""}`;i&&r.push(["flip",i]);const n=Yr(-t.rotation),o=Math.round(n*100)/100;o!==0&&(r.push(["r",String(o)]),o%90!==0&&e.bgColor&&r.push(["bg_color",Kt(e.bgColor)]));const h=t.crop;r.push(["tl_px",`${Math.round(h.x)},${Math.round(h.y)}`]),r.push(["br_px",`${Math.round(h.x+h.width)},${Math.round(h.y+h.height)}`]);const c=e.maxWidth??0,s=e.maxHeight??0;c>0&&r.push(["w",String(Math.round(c))]),s>0&&r.push(["h",String(Math.round(s))]),(c>0||s>0)&&(r.push(["func","bound"]),r.push(["org_if_sml","1"]));const a=Se(e.format);return a&&r.push(["force_format",a]),(a==="jpeg"||a==="webp")&&e.quality!=null&&r.push(["q",String(Math.round(Ce(e.quality)*100))]),Ut(e.src,e.token,e.domain,r)}function At(t,e){if(!e.src)throw new Error("buildCloudimageUrlFromDescriptor: target.src is required");const r=Bt(t.state,t.imageWidth,t.imageHeight,t.containerWidth,t.containerHeight,t.variant,t.serverFraming??"auto");return r.tilted?zr(r,e):Pr(r,e)}function Pr(t,e){const r=[],i=`${t.flipH?"h":""}${t.flipV?"v":""}`;i&&r.push(["flip",i]);const n=Math.round(t.rotateCCW*100)/100;return n!==0&&(r.push(["r",String(n)]),n%90!==0&&e.bgColor&&r.push(["bg_color",Kt(e.bgColor)])),r.push(["tl_px",`${t.cropPx.x},${t.cropPx.y}`]),r.push(["br_px",`${t.cropPx.x+t.cropPx.width},${t.cropPx.y+t.cropPx.height}`]),xe(r,e),Ut(e.src,e.token,e.domain,r)}function zr(t,e){const r=t.nested,i=[],n=`${r.flipH?"h":""}${r.flipV?"v":""}`;n&&i.push(["flip",n]);const o=Math.round(r.innerRotateCCW*100)/100;o!==0&&(i.push(["r",String(o)]),o%90!==0&&e.bgColor&&i.push(["bg_color",Kt(e.bgColor)]));const h=Ut(e.src,e.token,e.domain,i),c=[];return c.push(["tl_px",`${r.outerCrop.x},${r.outerCrop.y}`]),c.push(["br_px",`${r.outerCrop.x+r.outerCrop.width},${r.outerCrop.y+r.outerCrop.height}`]),xe(c,e),`${Ir(e)}/${encodeURIComponent(h)}?ci_url_encoded=1&${Me(c)}`}function xe(t,e){const r=e.maxWidth??0,i=e.maxHeight??0;r>0&&t.push(["w",String(Math.round(r))]),i>0&&t.push(["h",String(Math.round(i))]),(r>0||i>0)&&(t.push(["func","bound"]),t.push(["org_if_sml","1"]));const n=Se(e.format);n&&t.push(["force_format",n]),(n==="jpeg"||n==="webp")&&e.quality!=null&&t.push(["q",String(Math.round(Ce(e.quality)*100))])}function Ir(t){const e=t.domain||be;if(ve(t.src,e))try{return new URL(t.src).origin}catch{}if(!t.token)throw new Error("buildCloudimageUrlFromDescriptor: options.token is required when src is not already a Cloudimage URL");return`https://${t.token}.${e}`}function Ut(t,e,r,i){const n=r||be;if(ve(t,n)){const c=t.indexOf("?"),s=c===-1?t:t.slice(0,c),a=c===-1?"":t.slice(c+1);return`${se(s)}?${Wr(a,i)}`}if(!e)throw new Error("buildCloudimageUrl: options.token is required when src is not already a Cloudimage URL");const o=`${e}.${n}`,h=Me(i);return t.includes("?")?`https://${o}/${encodeURIComponent(t)}?ci_url_encoded=1&${h}`:`https://${o}/${se(t)}?${h}`}function se(t){return t.replace(/ /g,"%20").replace(/&/g,"%26").replace(/#/g,"%23")}function ve(t,e){let r;try{r=new URL(t).hostname.toLowerCase()}catch{return!1}return(e?[...ne,e.toLowerCase()]:ne).some(i=>r===i||r.endsWith(`.${i}`))}function Me(t){return t.map(([e,r])=>`${e}=${r}`).join("&")}function Wr(t,e){const r=new Set(e.map(([i])=>i));return[...t.split("&").filter(i=>i&&!r.has(i.split("=")[0])),...e.map(([i,n])=>`${i}=${n}`)].join("&")}function Se(t){if(!t)return null;const e=t.toLowerCase();return e.includes("jpeg")||e.includes("jpg")?"jpeg":e.includes("png")?"png":e.includes("webp")?"webp":null}function Yr(t){const e=t%360;return e<0?e+360:e}function Ce(t){return t<0?0:t>1?1:t}function Kt(t){return t.startsWith("#")?t.slice(1):t}async function Re(t,e,r){if(!Bt(e.state,e.imageWidth,e.imageHeight,e.containerWidth,e.containerHeight,e.variant).tilted)return"centered";const i=we(t,e.state,0,0,"free",20,e.containerWidth,e.containerHeight,e.variant),n=200,o=Math.max(1,Math.round(n*i.height/i.width));let h;try{h=ce(i,n,o)}catch{return"centered"}const c=["centered","inset"],s=await Promise.all(c.map(async a=>{const p=At({...e,serverFraming:a},r);try{const f=await Dr(p);return Br(h,ce(f,n,o))}catch{return Number.POSITIVE_INFINITY}}));return s[1]<s[0]?"inset":"centered"}function ce(t,e,r){const i=document.createElement("canvas");i.width=e,i.height=r;const n=i.getContext("2d");if(!n)throw new Error("no 2d context");return n.drawImage(t,0,0,e,r),n.getImageData(0,0,e,r).data}function Br(t,e){const r=Math.min(t.length,e.length);let i=0,n=0;for(let o=0;o<r;o+=4)i+=Math.abs(t[o]-e[o])+Math.abs(t[o+1]-e[o+1])+Math.abs(t[o+2]-e[o+2]),n+=3;return n?i/n:Number.POSITIVE_INFINITY}function Dr(t){return new Promise((e,r)=>{const i=new Image;i.crossOrigin="anonymous",i.onload=()=>e(i),i.onerror=()=>r(new Error("calibrate: failed to load "+t)),i.src=t})}function ke(t){const{canvas:e,host:r,layoutContainer:i,callbacks:n={}}=t;let o={...t.config},h=o.cropShape,c=o.cropShape,s=null,a=Lt(o.cropShape),p=null,f=null,g=null,d=null,y=null,l=!1,m=!1,w=0,C=null,x=null,M=null,v=null,W=null,$=null,q=0,N=0,L=0;o.initialCrop&&(a=pt(a,o.initialCrop)),o.initialRotation&&(a=Et(a,o.initialRotation)),o.initialScale&&o.initialScale!==1&&(a=mt(a,o.initialScale,o.minScale,o.maxScale));function nt(){return h==="circle"?"circle":h==="rounded-rect"?"rounded-rect":"rect"}function tt(){return{...a,cropRect:{...a.cropRect}}}function S(){const u=(s==null?void 0:s.naturalWidth)??1,b=(s==null?void 0:s.naturalHeight)??1;return o.variant!=="fixed"&&a.turnedBox?{w:b,h:u}:{w:u,h:b}}function I(){return o.variant!=="fixed"&&!!n.onBoxAspectChange}function U(){if(!s)return{...a.cropRect};const{w:u,h:b}=S();return{x:Math.round(a.cropRect.x*u),y:Math.round(a.cropRect.y*b),width:Math.round(a.cropRect.width*u),height:Math.round(a.cropRect.height*b)}}const O={x:0,y:0,width:1,height:1};let j=0,Y=0;function B(){const u=i.clientWidth,b=i.clientHeight;return u>0&&b>0&&(j=u,Y=b),{w:u>0?u:j,h:b>0?b:Y}}let _=null,Z=null,Q=0;function et(){if(!s||!p)return;const{w:u,h:b}=B();if(u<=0||b<=0)return;if(o.variant!=="fixed"){const K=a.rotation!==0&&!pe(a);if(!Z||a.scale!==Z.scale||a.panX!==Z.panX||a.panY!==Z.panY){const X=!!Z&&!!_&&a.scale===Z.scale;if(X&&K&&_){const it=ee(a,u,b,o.maxScale,s.naturalWidth,s.naturalHeight,{clampPanFirst:!0}),Tt=_.scale;_={scale:Tt,...Ue({...a,scale:it.scale,panX:it.panX,panY:it.panY},Tt,u,b)}}else X&&_?_={scale:_.scale,panX:a.panX,panY:a.panY}:_={scale:a.scale,panX:a.panX,panY:a.panY}}const G=_??{scale:a.scale,panX:a.panX,panY:a.panY};if(K){const X=ee({...a,...G},u,b,o.maxScale,s.naturalWidth,s.naturalHeight);a={...a,scale:X.scale,panX:X.panX,panY:X.panY},Q=Math.max(o.minScale,X.minScale),p.setScaleBounds(Q,o.maxScale)}else a={...a,...G},Q=o.minScale,p.setScaleBounds(Q,o.maxScale);Z={scale:a.scale,panX:a.panX,panY:a.panY};return}const R={x:0,y:0,width:u,height:b},T=Mt(u,b,s.naturalWidth,s.naturalHeight,a.quarterTurns),D=Ae(a,u,b,R,T.drawW,T.drawH,o.maxScale);a={...a,scale:D.scale,panX:D.panX,panY:D.panY},Q=D.minScale,p.setScaleBounds(D.minScale,o.maxScale)}function rt(){return Math.max(o.minScale,Q)}let J=!1;function P(){var u,b;if(!p)return;const R=a.scale;et(),a.scale!==R&&((u=n.onScaleSync)==null||u.call(n,a.scale));const T={quarterTurns:a.quarterTurns,rotation:a.rotation,flipH:a.flipH?-1:1,flipV:a.flipV?-1:1,scale:a.scale,panX:a.panX,panY:a.panY,cropRect:{...a.cropRect},rotationPivot:a.rotationPivot,turnedBox:a.turnedBox,gridOpacity:m||o.showGrid===!0?1:0,interactive:m};p.setDisplayState(T),!!a.turnedBox!==J&&(J=!!a.turnedBox,(b=n.onBoxAspectChange)==null||b.call(n,J))}function F(){var u;(u=n.onChange)==null||u.call(n,tt())}function V(){var u;(u=n.onCropChange)==null||u.call(n,U())}function ot(){p==null||p.resize(),P(),p==null||p.markDirty()}function Ct(){l||(y&&(clearTimeout(y),y=null),ot())}d=new ResizeObserver(()=>{l||(y&&clearTimeout(y),y=setTimeout(()=>{y=null,!l&&ot()},16))}),d.observe(i);async function wt(u){var b,R,T,D,K;if(l)return;const G=++w;(b=n.onLoadingChange)==null||b.call(n,!0,null);try{const X=new Image;if(X.crossOrigin="anonymous",await new Promise((it,Tt)=>{X.onload=()=>it(),X.onerror=()=>Tt(new Error(`Failed to load image: ${u}`)),X.src=u}),l||G!==w)return;s=X,C=null,_=null,Z=null,(R=n.onLoadingChange)==null||R.call(n,!1,null),(T=n.onImageLoad)==null||T.call(n,X),Rt()}catch(X){if(l||G!==w)return;const it=X.message;(D=n.onLoadingChange)==null||D.call(n,!1,it),(K=n.onError)==null||K.call(n,X)}}function Rt(){var u,b;if(!s)return;o.variant==="fixed"?a={...a,cropRect:{...O}}:o.initialCrop||(a=$t(a,h,s.naturalWidth,s.naturalHeight));const R=!o.enableAnimations||typeof window<"u"&&((u=window.matchMedia)==null?void 0:u.call(window,"(prefers-reduced-motion: reduce)").matches);p=nr(e,s,nt,o.borderRadius,R,i),p.setScaleBounds(o.minScale,o.maxScale),p.setFixedFrame(o.variant==="fixed");const T=n.onFrameLayout;T&&p.setFrameListener(D=>T(D)),p.setBleedConfig({show:o.showBleedMargin,size:o.bleedMarginSize,color:o.bleedMarginColor}),P(),p.startLoop(),kt(),o.keyboard&&(g=gr(r,{onRotateLeft:()=>Zt(),onFlipH:()=>jt(),onZoomIn:()=>vt(a.scale+.1),onZoomOut:()=>vt(a.scale-.1),onResetZoom:()=>vt(1),onMoveCrop:(D,K)=>{if(o.variant==="fixed")return;const G=a.cropRect;a=pt(a,{x:G.x+D,y:G.y+K,width:G.width,height:G.height}),P(),F(),V()},onRotateFine:D=>Gt(a.rotation+D)})),(b=n.onReady)==null||b.call(n)}function kt(){f=hr(e,{onPointerDown:(u,b)=>{var R;const T=Date.now(),D=T-q,K=Math.sqrt((u.x-N)**2+(u.y-L)**2);if(D<300&&K<20&&b.length===1){vt(1),q=0;return}if(q=T,N=u.x,L=u.y,b.length===2){$=fr(b,a.scale),x=null,W=null;return}const G=p.getCanvasCropRect();let X=u.handle==="move"?{type:"move-handle"}:u.handle==="nw"||u.handle==="ne"||u.handle==="se"||u.handle==="sw"?{type:"handle",position:u.handle}:Xt(u.x,u.y,G);o.variant==="fixed"&&(X.type==="handle"||X.type==="move-handle")&&(X={type:"crop-area"}),m=!0,(R=n.onInteractingChange)==null||R.call(n,!0),X.type==="move-handle"?v={startX:u.x,startY:u.y,startRect:{...a.cropRect}}:X.type==="crop-area"||X.type==="outside"?M={startX:u.x,startY:u.y,startPanX:a.panX,startPanY:a.panY}:X.type==="handle"&&X.position&&(W=pr("handle-"+X.position,a.cropRect,u.x,u.y)),P()},onPointerMove:u=>{if(!s)return;const b=p.getCanvasCropRect();if(v){const{displayW:R,displayH:T}=bt();if(R>0&&T>0){const D=(u.x-v.startX)/R,K=(u.y-v.startY)/T;a=pt(a,{x:v.startRect.x+D,y:v.startRect.y+K,width:v.startRect.width,height:v.startRect.height}),P(),F(),V()}return}if(M){const R=u.x-M.startX,T=u.y-M.startY,D=a.flipH?-1:1,K=a.flipV?-1:1;a={...a,panX:M.startPanX+D*R/a.scale,panY:M.startPanY+K*T/a.scale},P(),F();return}if(x){const{displayW:R,displayH:T}=bt(),D=ur(x,u.x,u.y,R,T);a=pt(a,D),P(),F(),V();return}if(W){const{displayW:R,displayH:T}=bt(),D=dr(W,u.x,u.y,R,T,h,o.minCropSize,{shiftKey:u.shiftKey,altKey:u.altKey});a=pt(a,D),P(),F(),V();return}if(o.variant==="fixed")e.style.cursor="grab";else{const R=Xt(u.x,u.y,b);e.style.cursor=ie(R,!1)}},onHover:u=>{if(!p)return;if(o.variant==="fixed"){e.style.cursor="grab";return}const b=p.getCanvasCropRect(),R=Xt(u.x,u.y,b);e.style.cursor=ie(R,!1)},onPointerUp:(u,b)=>{var R;b.length<2&&($=null),b.length===0&&(x=null,M=null,v=null,W=null,m&&(m=!1,(R=n.onInteractingChange)==null||R.call(n,!1)),N=0,L=0,P())},onPinch:u=>{var b;$||($={initialDistance:u.distance,initialScale:a.scale,initialCenterX:u.centerX,initialCenterY:u.centerY});const R=a.scale*(u.distance/$.initialDistance),T=u.centerX-$.initialCenterX,D=u.centerY-$.initialCenterY;a=mt(a,R,rt(),o.maxScale),a=re(a,T,D),(b=n.onScaleSync)==null||b.call(n,a.scale),P(),F()},onWheel:u=>{var b,R;if(!o.wheelZoom)return;u.preventDefault();const T=e.getBoundingClientRect(),D=u.clientX-T.left,K=u.clientY-T.top,G=T.width/2,X=T.height/2,it=mr(u.deltaY,a.scale,{minScale:rt(),maxScale:o.maxScale,sensitivity:1},D,K,G,X);a=mt(a,it.scale,rt(),o.maxScale),a=re(a,it.panDeltaX,it.panDeltaY),(b=n.onScaleSync)==null||b.call(n,a.scale),(R=n.onWheelZoomActivity)==null||R.call(n),P(),F()}})}function bt(){return{displayW:i.clientWidth,displayH:i.clientHeight}}function Ht(u){var b;if(!l&&h!==u){if(h=u,o.variant==="fixed")a={...a,cropRect:{...O}};else if(ft(u)===null){const R=Math.round(a.quarterTurns/90)%2!==0;I()&&R!==!!a.turnedBox&&(a={...a,turnedBox:R,scale:1,panX:0,panY:0,cropRect:{x:0,y:0,width:1,height:1},rotationPivot:void 0})}else{const{w:R,h:T}=S();a=$t(a,u,R,T,"max")}(b=n.onShapeSync)==null||b.call(n,u),P(),F(),V()}}function xt(u){l||(a=pt(a,u),P(),F(),V())}function Zt(){if(l)return;const u=!!a.turnedBox;if(a={...Ke(a),turnedBox:u},o.variant!=="fixed"&&!(ft(h)!==null||!I())){const b=Math.round(a.quarterTurns/90)%2!==0;a=b!==u?{...Ze(a),turnedBox:b}:{...a,turnedBox:b}}P(),zt(r,a,h),F(),V()}function jt(){l||(a=je(a),P(),zt(r,a,h),F(),V())}function Gt(u){var b;l||(a=Et(a,u),(b=n.onRotationSync)==null||b.call(n,u),P(),F())}function vt(u){var b;l||(a=mt(a,u,o.minScale,o.maxScale),(b=n.onScaleSync)==null||b.call(n,a.scale),P(),F())}function Ie(u){var b,R;if(l)return;const T=u.state,{w:D}=B(),K=u.containerWidth>0&&D>0?D/u.containerWidth:1;a={...a,quarterTurns:T.quarterTurns,rotation:T.rotation,flipH:T.flipH,flipV:T.flipV,scale:T.scale,panX:T.panX*K,panY:T.panY*K,cropRect:{...T.cropRect},rotationPivot:T.rotationPivot?{...T.rotationPivot}:void 0,turnedBox:T.turnedBox},(b=n.onRotationSync)==null||b.call(n,a.rotation),(R=n.onScaleSync)==null||R.call(n,a.scale),P(),zt(r,a,h),F(),V()}function We(){var u,b,R;l||(h=c,o={...o,cropShape:c},a=Lt(c,(s==null?void 0:s.naturalWidth)??1,(s==null?void 0:s.naturalHeight)??1),o.variant==="fixed"?a={...a,cropRect:{...O}}:o.initialCrop&&(a=pt(a,o.initialCrop)),o.initialRotation&&(a=Et(a,o.initialRotation)),o.initialScale!==void 0&&o.initialScale!==1&&(a=mt(a,o.initialScale,o.minScale,o.maxScale)),(u=n.onRotationSync)==null||u.call(n,a.rotation),(b=n.onShapeSync)==null||b.call(n,c),(R=n.onScaleSync)==null||R.call(n,a.scale),P(),zt(r,a,h),F(),V())}function Dt(){if(!s)throw new Error("No image loaded");const{w:u,h:b}=B();return we(s,a,o.maxOutputWidth,o.maxOutputHeight,h,o.borderRadius,u,b,o.variant)}async function Ye(u,b){const R=Dt();return Hr(R,u||o.outputType,b??o.outputQuality)}function Be(u,b){try{return Dt().toDataURL(u||o.outputType,b??o.outputQuality)}catch(R){const T=R instanceof Error?R:new Error(String(R));throw new Error(`Failed to export data URL: ${T.message}`)}}function De(){if(!s)throw new Error("No image loaded");return Sr(a,s.naturalWidth,s.naturalHeight,o.variant)}async function Le(){if(!s||l)return null;const{w:u,h:b}=B(),R={state:{...Lt(h),rotation:15,cropRect:{x:.35,y:.35,width:.3,height:.3}},imageWidth:s.naturalWidth,imageHeight:s.naturalHeight,containerWidth:u,containerHeight:b,variant:"classic"};try{C=await Re(s,R,{src:o.src,token:o.cloudimageToken||void 0,domain:o.cloudimageDomain||void 0})}catch{C=null}return C}function Qt(){if(!s)throw new Error("No image loaded");const{w:u,h:b}=B();return{state:tt(),imageWidth:s.naturalWidth,imageHeight:s.naturalHeight,containerWidth:u,containerHeight:b,variant:o.variant,...C?{serverFraming:C}:{}}}let Jt=!1;function Ee(u){return a.rotation!==0&&!C&&!Jt&&(Jt=!0,console.warn("[cloudimage-crop] toCloudimageURL(): tilted crop without calibration — the URL may frame the wrong region on some images. `await calibrateCloudimage()` once per image before building tilt URLs.")),At(Qt(),{src:o.src,token:o.cloudimageToken||void 0,domain:o.cloudimageDomain||void 0,bgColor:o.cloudimageBgColor||void 0,format:o.outputType,quality:o.outputQuality,maxWidth:o.maxOutputWidth,maxHeight:o.maxOutputHeight,...u})}function $e(u){if(l)return;const b=o.src,R=o.variant;if(o=qt({...o,...u}),u.cropShape!==void 0&&(c=u.cropShape,Ht(u.cropShape)),u.variant!==void 0&&u.variant!==R){if(p==null||p.setFixedFrame(o.variant==="fixed"),o.variant==="fixed")a={...a,cropRect:{...O}};else{p==null||p.setScaleBounds(o.minScale,o.maxScale),a={...a,turnedBox:I()&&Math.round(a.quarterTurns/90)%2!==0};const{w:T,h:D}=S();a=$t(a,h,T,D),a=mt({...a,panX:0,panY:0},o.initialScale??1,o.minScale,o.maxScale)}P(),F(),V()}u.src!==void 0&&u.src!==b&&wt(u.src).catch(()=>{}),(u.showBleedMargin!==void 0||u.bleedMarginSize!==void 0||u.bleedMarginColor!==void 0)&&(p==null||p.setBleedConfig({show:o.showBleedMargin,size:o.bleedMarginSize,color:o.bleedMarginColor})),u.showGrid!==void 0&&P(),p==null||p.markDirty()}function Xe(){l||(l=!0,w++,p==null||p.destroy(),f==null||f.destroy(),g==null||g.destroy(),d==null||d.disconnect(),y&&(clearTimeout(y),y=null))}return{loadImage:wt,getTransformState:tt,getCropRect:U,setCropShape:Ht,setCropRect:xt,rotateLeft:Zt,flipHorizontal:jt,setRotation:Gt,setScale:vt,restoreState:Ie,reset:We,toCanvas:Dt,toBlob:Ye,toDataURL:Be,toTransformParams:De,toCropDescriptor:Qt,toCloudimageURL:Ee,calibrateCloudimage:Le,update:$e,forceResize:Ct,destroy:Xe}}class He extends Fe{}function Jr(t,e){typeof customElements>"u"||customElements.get(t)||customElements.define(t,e)}const Lr=ct`
  :host {
    display: block;
    width: 100%;
    height: 100%;
    min-width: 0;
    min-height: 0;
    /* Single source of clipping is .ci-crop-container (overflow:hidden +
       border-radius). Don't add a second mask here: this host is sized
       by JS to the full outer rect (displayW×displayH), which is 4px
       wider than the container's content-box, so its own border-radius
       wouldn't align with the container's effective inner radius
       (radius - border-width) and you'd see two stepped curves at the
       corner. Transparent bg lets the container surface show through
       in the rounded corner sliver. */
    background: transparent;
  }

  canvas {
    display: block;
    width: 100%;
    height: 100%;
    outline: none;
    touch-action: none;
  }
`;var Er=Object.defineProperty,$r=(t,e,r,i)=>{for(var n=void 0,o=t.length-1,h;o>=0;o--)(h=t[o])&&(n=h(e,r,n)||n);return n&&Er(e,r,n),n};const Te=class extends He{render(){return dt`<canvas part="canvas"></canvas>`}};Te.styles=[Lr];let Pe=Te;$r([Wt("canvas")],Pe.prototype,"canvasEl");const le=["free","square","6:1","5:1","4:1","3:1","16:6","21:9","2:1","16:9","3:2","7:5","4:3","5:4","9:16","3:4","2:3","4:5","1:2"],Xr=["free","square","circle","rounded-rect"];function Ft(t){return typeof t!="string"?!1:Xr.includes(t)?!0:Vt(t)!==null}function Fr(t){if(t==null)return;if(Array.isArray(t))return t.filter(Ft);if(typeof t!="string")return;const e=t.trim();if(e){if(e.startsWith("["))try{const r=JSON.parse(e);if(Array.isArray(r))return r.filter(Ft)}catch{}return e.split(/[\s,]+/).filter(Boolean).filter(Ft)}}const Or=ct`
  :host {
    /* Palette — light theme (matches ui-tw :root) */
    --ci-crop-primary: oklch(0.578 0.198 268.129);
    --ci-crop-primary-hover: oklch(0.5 0.198 268.129);
    --ci-crop-primary-mid: oklch(0.62 0.198 268.129);
    --ci-crop-primary-bg: oklch(0.578 0.198 268.129 / 0.07);
    --ci-crop-primary-glow: oklch(0.578 0.198 268.129 / 0.18);

    --ci-crop-success: oklch(0.637 0.17 151.295);
    --ci-crop-error: oklch(0.577 0.215 27.325);

    --ci-crop-text: oklch(0.37 0.022 248.413);
    --ci-crop-text-secondary: oklch(53.03% 0.039 249.89);
    --ci-crop-text-muted: oklch(0.685 0.033 249.82);
    /* Fine-tilt ruler ink + halo. The ruler floats directly over the photo,
       whose brightness is unknown, so its colour can't track the theme. We
       render a bright (near-white) core wrapped in a dark halo: the white core
       reads over dark images, the dark halo reads over bright ones — the same
       trick subtitles use to stay legible over arbitrary footage. */
    --ci-crop-ruler-ink: oklch(1 0 0);
    --ci-crop-ruler-halo: oklch(0 0 0 / 0.85);

    --ci-crop-border: oklch(92.86% 0.009 247.92);
    --ci-crop-border-light: oklch(0.974 0.006 239.819);

    --ci-crop-bg: oklch(1 0 0);
    --ci-crop-surface: oklch(0.974 0.006 239.819);
    --ci-crop-canvas-bg: oklch(0.974 0.006 239.819);
    /* Dimming overlay for pixels outside the crop rect. Light theme uses a
       very soft, near-white tint so the whole surround stays bright; dark
       theme keeps the classic black dim for contrast against the photo. */
    --ci-crop-overlay-color: oklch(1 0 0 / 0.52);
    /* Crop frame + handle colors, theme-aware so the rectangle reads
       against both a washed-out light background and a dimmed dark one. */
    --ci-crop-frame-color: oklch(0.37 0.022 248.413);
    --ci-crop-frame-shadow: oklch(1 0 0 / 0.7);
    --ci-crop-handle-fill: oklch(0.37 0.022 248.413);
    --ci-crop-handle-stroke: oklch(1 0 0 / 0.95);

    --ci-crop-ring: oklch(0.578 0.198 268.129 / 0.7);
    --ci-crop-shadow: oklch(26.18% 0.024 256.43 / 0.1);

    /* Derived — kept for internal reuse */
    --ci-crop-toolbar-bg: oklch(1 0 0 / 0.85);
    --ci-crop-toolbar-color: var(--ci-crop-text);
    --ci-crop-toolbar-border: oklch(92.86% 0.009 247.92 / 0.6);
    /* shadow-sm + soft primary tint */
    --ci-crop-toolbar-shadow: 0 1px 3px 0 oklch(0 0 0 / 0.1), 0 1px 2px -1px oklch(0 0 0 / 0.1);
    --ci-crop-btn-size: 36px;
    --ci-crop-btn-radius: 6px;
    --ci-crop-btn-hover-bg: var(--ci-crop-primary-bg);
    --ci-crop-btn-active-bg: oklch(0.578 0.198 268.129 / 0.14);
    --ci-crop-separator-color: var(--ci-crop-border-light);
    --ci-crop-slider-track: var(--ci-crop-border);
    --ci-crop-slider-fill: var(--ci-crop-primary);
    --ci-crop-slider-thumb: var(--ci-crop-primary);
    /* Translucent so the dropdown picks up whatever sits behind it
       (image, overlay) when paired with backdrop-filter. */
    --ci-crop-dropdown-bg: oklch(0.974 0.006 239.819 / 0.8);
    --ci-crop-dropdown-hover: var(--ci-crop-primary-bg);
    /* shadow-md + shadow-lg blend */
    --ci-crop-dropdown-shadow: 0 10px 15px -3px oklch(0 0 0 / 0.1), 0 4px 6px -4px oklch(0 0 0 / 0.1);
    --ci-crop-zoom-bar-bg: oklch(1 0 0 / 0.85);
    --ci-crop-transition: 0.15s ease;
    --ci-crop-font: "Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

    /* Border-radius scale — mirrors ui-tw --radius-sm/md/lg/xl */
    --ci-crop-radius-sm: 4px;
    --ci-crop-radius-md: 6px;
    --ci-crop-radius-lg: 8px;
    --ci-crop-radius-xl: 12px;
    /* Outer card (when <cloudimage-crop> fills the host) */
    --ci-crop-radius: var(--ci-crop-radius-xl);
    --ci-crop-card-shadow: 0 28px 80px oklch(0 0 0 / 0.2), 0 4px 16px oklch(0 0 0 / 0.06);
  }

  /* Dark variant — mirrors ui-tw :root.dark. */
  :host([theme="dark"]) {
    --ci-crop-primary: oklch(0.6 0.2 268.129);
    --ci-crop-primary-hover: oklch(0.55 0.2 268.129);
    --ci-crop-primary-mid: oklch(0.65 0.2 268.129);
    --ci-crop-primary-bg: oklch(0.6 0.2 268.129 / 0.07);
    --ci-crop-primary-glow: oklch(0.6 0.2 268.129 / 0.22);

    --ci-crop-success: oklch(0.6 0.2 154.83);
    --ci-crop-error: oklch(0.55 0.2 27.325);

    --ci-crop-text: oklch(0.95 0.01 264.55);
    --ci-crop-text-secondary: oklch(0.9 0.01 264.55);
    --ci-crop-text-muted: oklch(0.75 0.01 249.82);
    /* Ruler keeps the white core + dark halo over the photo (see light theme);
       --ci-crop-ruler-halo is inherited from the base :host. */
    --ci-crop-ruler-ink: oklch(1 0 0);

    --ci-crop-border: oklch(0.3 0.01 247.92);
    --ci-crop-border-light: oklch(0.3 0.01 285);

    --ci-crop-bg: oklch(0.13 0.027 261.692);
    --ci-crop-surface: oklch(0.25 0.01 264.55);
    --ci-crop-canvas-bg: oklch(0.13 0.027 261.692);
    --ci-crop-overlay-color: oklch(0 0 0 / 0.35);
    --ci-crop-frame-color: oklch(0.95 0.01 264.55);
    --ci-crop-frame-shadow: oklch(0 0 0 / 0.6);
    --ci-crop-handle-fill: oklch(0.95 0.01 264.55);
    --ci-crop-handle-stroke: oklch(0 0 0 / 0.25);

    --ci-crop-ring: oklch(0.6 0.2 268.129 / 0.7);
    --ci-crop-shadow: oklch(0 0 0 / 0.2);

    --ci-crop-toolbar-bg: oklch(0.13 0.027 261.692 / 0.85);
    --ci-crop-toolbar-color: oklch(0.95 0.01 264.55);
    --ci-crop-toolbar-border: oklch(0.3 0.01 247.92 / 0.5);
    --ci-crop-toolbar-shadow: 0 4px 20px oklch(0 0 0 / 0.4);

    --ci-crop-btn-hover-bg: oklch(0.6 0.2 268.129 / 0.22);
    --ci-crop-btn-active-bg: oklch(0.6 0.2 268.129 / 0.32);

    --ci-crop-slider-track: oklch(0.3 0.01 247.92);

    --ci-crop-dropdown-bg: oklch(0.13 0.027 261.692 / 0.82);
    --ci-crop-dropdown-hover: oklch(0.6 0.2 268.129 / 0.22);
    --ci-crop-dropdown-shadow: 0 10px 15px -3px oklch(0 0 0 / 0.5), 0 4px 6px -4px oklch(0 0 0 / 0.3);
    --ci-crop-zoom-bar-bg: oklch(0.13 0.027 261.692 / 0.85);

    --ci-crop-card-shadow: 0 28px 80px oklch(0 0 0 / 0.55), 0 4px 16px oklch(0 0 0 / 0.2);
  }
`,qr=ct`
  .ci-crop-sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    :host, :host *, :host *::before, :host *::after {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
    }
  }
`,Nr=ct`
  @keyframes ci-crop-spin { to { transform: rotate(360deg); } }
`,eo=ct`
  @keyframes ci-crop-toolbar-enter {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;ct`
  @keyframes ci-crop-zoom-enter {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
`;ct`
  @keyframes ci-crop-card-in {
    from {
      opacity: 0;
      transform: translateY(10px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;ct`
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--ci-crop-slider-thumb);
    cursor: pointer;
    box-shadow: 0 1px 4px var(--ci-crop-primary-glow);
    transition: transform 150ms ease, box-shadow 150ms ease;
  }
  input[type="range"]::-webkit-slider-thumb:hover {
    transform: scale(1.15);
    box-shadow: 0 0 0 5px var(--ci-crop-primary-glow);
  }
  input[type="range"]::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--ci-crop-slider-thumb);
    border: none;
    cursor: pointer;
    box-shadow: 0 1px 4px var(--ci-crop-primary-glow);
  }
`;const Vr=ct`
  :host {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    font-family: var(--ci-crop-font);
    color: var(--ci-crop-text);
    /* Named SIZE container (both axes) so sub-elements can switch layout
       based on the editor's own WIDTH — independent of the page viewport,
       so a narrow column on a wide desktop gets the same compact UI as a
       phone — and so the shape-selector dropdown can clamp its own
       max-height to the box's real HEIGHT via cqh units (see
       cloudimage-crop-shapes.styles.ts) instead of the viewport's, which
       overflows/clips in a short, wide box (e.g. a 5:1 crop). Safe to
       size-contain: fitHostToImage() always sets an explicit pixel
       width/height on :host before layout matters here. */
    container-type: size;
    container-name: sfxcrop;
  }

  :host([hidden]) { display: none; }

  :host(:focus-visible) {
    outline: 2px solid var(--ci-crop-ring);
    outline-offset: 2px;
  }

  .ci-crop-container {
    position: relative;
    /* "clip", not "hidden": this box clips the photo to the crop frame's
     * shape but must never actually SCROLL. Popovers positioned inside it
     * (e.g. the shape-selector dropdown) are position:absolute and their
     * open height can exceed the container — overflow:hidden still lets
     * the browser silently scrollTop it into view whenever an option
     * receives focus, dragging the canvas out of frame and exposing this
     * element's own background as a blank strip underneath. "clip" clips
     * identically but makes the box non-scrollable, so scrollTop can never
     * move (programmatically or via focus) — no visual jump. */
    overflow: clip;
    width: 100%;
    height: 100%;
    background: var(--ci-crop-bg);
    border-radius: var(--ci-crop-radius);
    /* Editor card frame: shadow-only (no border). A border draws two
       visible curves at the corners (outer + inner padding edge),
       reading as a "double ring"; a slightly stronger shadow gives the
       same elevation feel with a single clean rounded silhouette. */
    /* shadow-xs ring + shadow-md elevation, sourced from ui-tw scale */
    box-shadow:
      0 0 0 1px oklch(0 0 0 / 0.05),
      0 4px 6px -1px oklch(0 0 0 / 0.1),
      0 2px 4px -2px oklch(0 0 0 / 0.1);
    font-family: var(--ci-crop-font);
    user-select: none;
    -webkit-user-select: none;
  }

  /* ====== Loading ====== */
  .ci-crop-loading {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    background: var(--ci-crop-bg);
    z-index: 10;
    transition: opacity 280ms ease;
  }
  .ci-crop-loading--hidden {
    opacity: 0;
    pointer-events: none;
  }

  .ci-crop-loading-spinner {
    width: 36px;
    height: 36px;
    border: 3px solid var(--ci-crop-border);
    border-top-color: var(--ci-crop-primary);
    border-radius: 50%;
    animation: ci-crop-spin 0.8s linear infinite;
  }

  .ci-crop-loading-text {
    font-size: 14px;
    font-weight: 500;
    color: var(--ci-crop-text-secondary);
    letter-spacing: 0.2px;
  }

  /* ====== Error ====== */
  .ci-crop-error {
    position: absolute;
    inset: 0;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 32px;
    background: var(--ci-crop-bg);
    z-index: 10;
    color: var(--ci-crop-error);
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }
  .ci-crop-error--visible { display: flex; }

  /* ====== ResizableFrame (variant:'fixed', cropShape:'free') ======
   * Drag-the-box's-own-edge handles. Siblings of .ci-crop-container (which
   * overflow:clip's the photo to the frame shape) so a handle sitting half
   * outside the box's edge isn't itself clipped away — :host is the
   * outermost un-clipped box they can anchor to.
   *
   * Visual language borrowed straight from classic's own canvas-drawn frame
   * (crop-frame.ts): small circular corner dots (--ci-crop-handle-fill/
   * -stroke, the same tokens, so it matches whatever theme is active) — NOT
   * a separate big colored square per handle. Classic doesn't draw a visible
   * mark on the edges at all, only an enlarged hit zone with a resize
   * cursor; the n/s/e/w handles here do the same — hit target only, nothing
   * painted, so the frame doesn't get visually busier than classic's. */
  .ci-crop-resize-handle {
    position: absolute;
    z-index: 20;
    touch-action: none;
  }

  .ci-crop-resize-handle--n,
  .ci-crop-resize-handle--s {
    left: 12px;
    right: 12px;
    height: 16px;
    cursor: ns-resize;
  }
  .ci-crop-resize-handle--n { top: -8px; }
  .ci-crop-resize-handle--s { bottom: -8px; }

  .ci-crop-resize-handle--e,
  .ci-crop-resize-handle--w {
    top: 12px;
    bottom: 12px;
    width: 16px;
    cursor: ew-resize;
  }
  .ci-crop-resize-handle--e { right: -8px; }
  .ci-crop-resize-handle--w { left: -8px; }

  .ci-crop-resize-handle--ne,
  .ci-crop-resize-handle--nw,
  .ci-crop-resize-handle--se,
  .ci-crop-resize-handle--sw {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--ci-crop-handle-fill);
    border: 1px solid var(--ci-crop-handle-stroke);
    box-shadow: 0 1px 2px oklch(0 0 0 / 0.2);
  }
  /* ====== Classic frame corner dots ======
   * Same look as the canvas used to paint (and as the fixed handles above), but
   * in the DOM, outside .ci-crop-container's clip: a frame flush with the photo
   * edge shows each dot centred on its corner, overhanging the edge. Placed
   * per frame by placeCornerHandles(); a press is forwarded to the canvas,
   * which hit-tests and runs the drag. */
  .ci-crop-corner,
  .ci-crop-move {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 6;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--ci-crop-handle-fill, #fff);
    border: 1px solid var(--ci-crop-handle-stroke, rgba(0, 0, 0, 0.25));
    box-sizing: border-box;
    /* Grabbable even where they overhang the canvas: the press is forwarded
       to the canvas, which hit-tests and runs the drag. */
    touch-action: none;
    will-change: transform;
  }
  .ci-crop-corner--nw,
  .ci-crop-corner--se { cursor: nwse-resize; }
  .ci-crop-corner--ne,
  .ci-crop-corner--sw { cursor: nesw-resize; }
  .ci-crop-move { cursor: move; }
  /* The move-handle's inner dot tells it apart from the resize corners. */
  .ci-crop-move::after {
    content: '';
    position: absolute;
    inset: 0;
    margin: auto;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--ci-crop-handle-stroke, rgba(0, 0, 0, 0.25));
  }
  .ci-crop-corner[hidden],
  .ci-crop-move[hidden] { display: none; }

  .ci-crop-resize-handle--ne { top: -6px; right: -6px; cursor: nesw-resize; }
  .ci-crop-resize-handle--nw { top: -6px; left: -6px; cursor: nwse-resize; }
  .ci-crop-resize-handle--se { bottom: -6px; right: -6px; cursor: nwse-resize; }
  .ci-crop-resize-handle--sw { bottom: -6px; left: -6px; cursor: nesw-resize; }
`;var _r=Object.defineProperty,H=(t,e,r,i)=>{for(var n=void 0,o=t.length-1,h;o>=0;o--)(h=t[o])&&(n=h(e,r,n)||n);return n&&_r(e,r,n),n};const he=80,Ar=["n","s","e","w","ne","nw","se","sw"],Ur=["nw","ne","se","sw"],Kr={fromAttribute(t){return t===null?"interaction":t==="true"||t===""?!0:t==="false"?!1:"interaction"},toAttribute(t){return t===!0?"true":t===!1?"false":"interaction"}},ze=class extends He{constructor(){super(...arguments),this.src="",this.cropShape="16:9",this.theme="light",this.initialRotation=0,this.initialScale=1,this.minScale=.5,this.maxScale=5,this.minCropSize=20,this.handleSize=12,this.borderRadius=20,this.outputQuality=.92,this.maxOutputWidth=0,this.maxOutputHeight=0,this.bleedMarginSize=10,this.animationSpeed=1,this.handleColor="#ffffff",this.overlayColor="rgba(0, 0, 0, 0.55)",this.bleedMarginColor="rgba(255, 0, 0, 0.5)",this.outputType="image/png",this.toolbarPosition="top",this.outputMode="blob",this.cloudimageToken="",this.cloudimageDomain="",this.cloudimageBgColor="",this.variant="classic",this.showGrid="interaction",this.showToolbar=!0,this.showRotateSlider=!0,this.showZoomSlider=!0,this.showShapeSelector=!0,this.showRotateButton=!0,this.showFlipButton=!0,this.showCancelButton=!1,this.showDoneButton=!0,this.showBleedMargin=!1,this.enableAnimations=!0,this.keyboard=!0,this.pinchZoom=!0,this.wheelZoom=!0,this.dimToolbarOnDrag=!1,this.availableShapes=[...le],this.initialCrop=null,this.icons={},this.loading=!1,this.errorMessage=null,this.isInteracting=!1,this.controller=null,this.currentImage=null,this.parentResizeObserver=null,this._manualSize=null,this._shapePicked=!1,this._resizeDrag=null,this.forwardHandlePointerDown=e=>{var r,i;const n=(r=this.canvasHost)==null?void 0:r.canvasEl;if(!n)return;e.preventDefault(),e.stopPropagation();const o=e.currentTarget,h=new PointerEvent("pointerdown",e);if(h[ge]=o.dataset.corner,n.dispatchEvent(h),(i=n.hasPointerCapture)!=null&&i.call(n,e.pointerId))return;try{o.setPointerCapture(e.pointerId)}catch{return}const c=s=>{s.pointerId===e.pointerId&&(n.dispatchEvent(new PointerEvent(s.type,s)),(s.type==="pointerup"||s.type==="pointercancel")&&(o.removeEventListener("pointermove",c),o.removeEventListener("pointerup",c),o.removeEventListener("pointercancel",c)))};o.addEventListener("pointermove",c),o.addEventListener("pointerup",c),o.addEventListener("pointercancel",c)},this.onToolbarCommand=e=>{if(!this.controller)return;const r=e.detail;switch(r.type){case"reset":this._manualSize=null,this.controller.reset(),this.fitHostToImage();break;case"rotate-left":this.rotateLeft();break;case"flip-h":this.controller.flipHorizontal();break;case"rotation":this.controller.setRotation(r.value);break;case"scale":this.controller.setScale(r.value);break;case"shape":this._shapePicked=!0,this.controller.setCropShape(r.value),this.cropShape=r.value;break;case"save":this.save();break;case"cancel":this.cancel();break}},this.onResizeHandlePointerDown=(e,r)=>{e.preventDefault(),e.stopPropagation();const i=this.getBoundingClientRect();this._resizeDrag={edge:r,startX:e.clientX,startY:e.clientY,startW:i.width,startH:i.height},this.isInteracting=!0,window.addEventListener("pointermove",this.onResizeHandlePointerMove),window.addEventListener("pointerup",this.onResizeHandlePointerUp)},this.onResizeHandlePointerMove=e=>{var r;const i=this._resizeDrag;if(!i)return;const n=e.clientX-i.startX,o=e.clientY-i.startY,{availW:h,availH:c}=this.measureAvailableBox();let s=i.startW,a=i.startH;i.edge.includes("e")&&(s=i.startW+n),i.edge.includes("w")&&(s=i.startW-n),i.edge.includes("s")&&(a=i.startH+o),i.edge.includes("n")&&(a=i.startH-o),s=Math.max(he,Math.min(s,h)),a=Math.max(he,Math.min(a,c)),s=Math.round(s),a=Math.round(a),this.style.width=`${s}px`,this.style.height=`${a}px`,this._manualSize={w:s,h:a},(r=this.controller)==null||r.forceResize()},this.onResizeHandlePointerUp=()=>{if(!this._resizeDrag)return;this._resizeDrag=null,this.isInteracting=!1,window.removeEventListener("pointermove",this.onResizeHandlePointerMove),window.removeEventListener("pointerup",this.onResizeHandlePointerUp);const e=this.getBoundingClientRect();this._manualSize={w:e.width,h:e.height}}}async firstUpdated(){if(yr(this),!(this.canvasHost instanceof Pe))throw new Error("<cloudimage-crop>: custom elements not registered. Import '@cloudimage/image-crop/define' before using the tag.");if(await this.canvasHost.updateComplete,!this.isConnected)return;const e=this.canvasHost.canvasEl,r=qt(this.buildConfig());this.controller=ke({canvas:e,host:this,layoutContainer:this.canvasHost,config:r,callbacks:{onReady:()=>this.dispatch("cloudimage-crop-ready",{element:this}),onImageLoad:n=>{this.currentImage=n,this.fitHostToImage(),this.dispatch("cloudimage-crop-image-load",{image:n})},onError:n=>this.dispatch("cloudimage-crop-error",{error:n}),onChange:n=>{this.dispatch("cloudimage-crop-change",n)},onCropChange:n=>this.dispatch("cloudimage-crop-crop-change",n),onRotationSync:n=>{var o;return(o=this.toolbarHost)==null?void 0:o.setRotationValue(n)},onShapeSync:n=>{var o;this.cropShape=n,(o=this.toolbarHost)==null||o.setShapeValue(n)},onScaleSync:()=>{},onLoadingChange:(n,o)=>{this.loading=n,this.errorMessage=o},onInteractingChange:n=>{this.isInteracting=n},onFrameLayout:n=>this.placeCornerHandles(n),onBoxAspectChange:()=>this.fitHostToImage()}});const i=this.parentElement;i&&(this.parentResizeObserver=new ResizeObserver(()=>this.fitHostToImage()),this.parentResizeObserver.observe(i)),this.src&&this.controller.loadImage(this.src)}updated(e){if(!this.controller)return;const r={};let i=!1;for(const n of Zr)n==="cropShape"&&this._shapePicked||e.has(n)&&(r[n]=this[n],i=!0);this._shapePicked=!1,i&&this.controller.update(r),(e.has("variant")||e.has("cropShape"))&&(this.variant==="fixed"&&this.cropShape==="free"||(this._manualSize=null),this.fitHostToImage())}disconnectedCallback(){var e,r;super.disconnectedCallback(),(e=this.parentResizeObserver)==null||e.disconnect(),this.parentResizeObserver=null,window.removeEventListener("pointermove",this.onResizeHandlePointerMove),window.removeEventListener("pointerup",this.onResizeHandlePointerUp),this._resizeDrag=null,(r=this.controller)==null||r.destroy(),this.controller=null}render(){return dt`
      <div class="ci-crop-container" part="container">
        <cloudimage-crop-canvas part="canvas-host"></cloudimage-crop-canvas>
        ${this.showToolbar?dt`
          <cloudimage-crop-toolbar
            part="toolbar"
            .shape=${this.cropShape}
            ?show-rotate-button=${this.showRotateButton}
            ?show-flip-button=${this.showFlipButton}
            ?show-rotate-slider=${this.showRotateSlider}
            ?show-shape-selector=${this.showShapeSelector}
            ?show-cancel-button=${this.showCancelButton}
            .showDoneButton=${this.showDoneButton}
            toolbar-position=${this.toolbarPosition}
            variant=${this.variant}
            ?interacting=${this.dimToolbarOnDrag&&this.isInteracting}
            .availableShapes=${this.availableShapes}
            .icons=${this.icons}
            @cloudimage-crop-toolbar-command=${this.onToolbarCommand}
          ></cloudimage-crop-toolbar>
        `:null}
        <div class=${te({"ci-crop-loading":!0,"ci-crop-loading--hidden":!this.loading})} part="loading">
          <div class="ci-crop-loading-spinner"></div>
          <div class="ci-crop-loading-text">Loading…</div>
        </div>
        <div class=${te({"ci-crop-error":!0,"ci-crop-error--visible":!!this.errorMessage})} part="error">
          ${this.errorMessage??"Failed to load image"}
        </div>
      </div>
      ${this.variant==="fixed"&&this.cropShape==="free"?this.renderResizeHandles():null}
      ${this.variant!=="fixed"?dt`
            ${Ur.map(e=>dt`<div
              class="ci-crop-corner ci-crop-corner--${e}"
              data-corner=${e}
              part="corner-handle"
              hidden
              @pointerdown=${this.forwardHandlePointerDown}
            ></div>`)}
            <div
              class="ci-crop-move"
              data-corner="move"
              part="move-handle"
              hidden
              @pointerdown=${this.forwardHandlePointerDown}
            ></div>
          `:null}
    `}placeCornerHandles(e){const r=this.renderRoot.querySelectorAll(".ci-crop-corner, .ci-crop-move");if(!r.length||!this.canvasHost)return;const i=this.canvasHost.parentElement,n=this.canvasHost.offsetLeft+((i==null?void 0:i.offsetLeft)??0),o=this.canvasHost.offsetTop+((i==null?void 0:i.offsetTop)??0),h={nw:[e.x,e.y],ne:[e.x+e.width,e.y],se:[e.x+e.width,e.y+e.height],sw:[e.x,e.y+e.height],move:[e.x-yt,e.y-yt]};for(const c of r){const[s,a]=h[c.dataset.corner??"nw"];c.style.transform=`translate(${n+s}px, ${o+a}px) translate(-50%, -50%)`,c.hidden=!1}}renderResizeHandles(){return dt`
      ${Ar.map(e=>dt`
        <div
          class="ci-crop-resize-handle ci-crop-resize-handle--${e}"
          part="resize-handle"
          @pointerdown=${r=>this.onResizeHandlePointerDown(r,e)}
        ></div>
      `)}
    `}loadImage(e){return this.ensure().loadImage(e)}getTransformState(){return this.ensure().getTransformState()}setCropShape(e){this.ensure(),this.cropShape=e}setCropRect(e){this.ensure().setCropRect(e)}getCropRect(){return this.ensure().getCropRect()}rotateLeft(){this.ensure().rotateLeft()}flipHorizontal(){this.ensure().flipHorizontal()}setRotation(e){this.ensure().setRotation(e)}setScale(e){this.ensure().setScale(e)}restoreState(e){this.ensure().restoreState(e)}reset(){this._manualSize=null,this.ensure().reset(),this.fitHostToImage()}toCanvas(){return this.ensure().toCanvas()}toBlob(e,r){return this.ensure().toBlob(e,r)}toDataURL(e,r){return this.ensure().toDataURL(e,r)}toTransformParams(){return this.ensure().toTransformParams()}toCloudimageURL(e){return this.ensure().toCloudimageURL(e)}toCropDescriptor(){return this.ensure().toCropDescriptor()}calibrateCloudimage(){return this.ensure().calibrateCloudimage()}async save(e,r){const i=this.toTransformParams();if(this.outputMode==="cloudimage"){let s=!1;try{s=this.toCropDescriptor().state.rotation%90!==0}catch{s=!1}if(s)try{await this.ensure().calibrateCloudimage()}catch{}}let n=null,o=null;try{o=this.toCropDescriptor()}catch{o=null}try{n=this.toCloudimageURL()}catch{n=null}if(this.outputMode==="cloudimage"){this.dispatch("cloudimage-crop-save",{blob:null,dataURL:null,params:i,url:n,descriptor:o});return}const h=await this.toBlob(e,r),c=this.toDataURL(e,r);this.dispatch("cloudimage-crop-save",{blob:h,dataURL:c,params:i,url:n,descriptor:o})}cancel(){this.dispatch("cloudimage-crop-cancel",void 0)}ensure(){if(!this.controller)throw new Error('<cloudimage-crop> not connected — wait for "cloudimage-crop-ready" or firstUpdated().');return this.controller}fitHostToImage(){var e;if(!this.currentImage||!this.isConnected||!this.canvasHost)return;const r=this.variant!=="fixed"&&!!((e=this.controller)!=null&&e.getTransformState().turnedBox),i=r?this.currentImage.naturalHeight:this.currentImage.naturalWidth,n=r?this.currentImage.naturalWidth:this.currentImage.naturalHeight,o=this.style.width,h=this.style.height;this.style.width="",this.style.height="";const c=M=>{if(!M||M==="none")return Number.POSITIVE_INFINITY;const v=lt(M);return Number.isFinite(v)&&v>0?v:Number.POSITIVE_INFINITY},s=getComputedStyle(this);let a=c(s.maxWidth),p=c(s.maxHeight);const f=this.parentElement,g=f?getComputedStyle(f):null;if(f&&g&&(g.display==="none"||f.clientWidth===0)){this.style.width=o,this.style.height=h;return}const d=(()=>{if(!f||!g)return 0;const M=f.clientWidth;return Math.max(0,M-(lt(g.paddingLeft)||0)-(lt(g.paddingRight)||0))})();d>0?a=Math.min(a,d):Number.isFinite(a)||(a=window.innerWidth),Number.isFinite(p)||(p=window.innerHeight),this.style.width=o,this.style.height=h;const y=a,l=p;if(y<=0||l<=0)return;let m,w;if(this.variant==="fixed"&&this.cropShape==="free"&&this._manualSize)m=Math.floor(Math.min(this._manualSize.w,y)),w=Math.floor(Math.min(this._manualSize.h,l));else if(this.variant==="fixed"){const M=this.fixedFrameAspect(i/n);let v=y,W=y/M;W>l&&(W=l,v=l*M),m=Math.floor(v),w=Math.floor(W)}else{const M=Math.min(y/i,l/n,1);m=Math.floor(i*M),w=Math.floor(n*M)}const C=lt(o),x=lt(h);(Number.isNaN(C)||Math.abs(C-m)>=1||Math.abs(x-w)>=1)&&(this.style.width=`${m}px`,this.style.height=`${w}px`)}measureAvailableBox(){const e=c=>{if(!c||c==="none")return Number.POSITIVE_INFINITY;const s=lt(c);return Number.isFinite(s)&&s>0?s:Number.POSITIVE_INFINITY},r=getComputedStyle(this);let i=e(r.maxWidth),n=e(r.maxHeight);const o=this.parentElement,h=o?getComputedStyle(o):null;if(o&&h){const c=o.clientWidth,s=Math.max(0,c-(lt(h.paddingLeft)||0)-(lt(h.paddingRight)||0));s>0?i=Math.min(i,s):Number.isFinite(i)||(i=window.innerWidth)}else Number.isFinite(i)||(i=window.innerWidth);return Number.isFinite(n)||(n=window.innerHeight),{availW:i,availH:n}}fixedFrameAspect(e){const r=this.cropShape;if(r==="free")return e;if(r==="rounded-rect")return 1;const i=ft(r);return i&&i>0?i:e}dispatch(e,r){this.dispatchEvent(new CustomEvent(e,{detail:r,bubbles:!0,composed:!0}))}parseInitialCrop(){const e=this.initialCrop;if(!e)return null;const r=typeof e=="object"?e:jr(e);if(!r||typeof r!="object")return null;const i=r;return typeof i.x!="number"||typeof i.y!="number"||typeof i.width!="number"||typeof i.height!="number"?null:{x:i.x,y:i.y,width:i.width,height:i.height}}buildConfig(){return{src:this.src,variant:this.variant,cropShape:this.cropShape,theme:this.theme,initialRotation:this.initialRotation,initialScale:this.initialScale,initialCrop:this.parseInitialCrop(),minScale:this.minScale,maxScale:this.maxScale,minCropSize:this.minCropSize,availableShapes:Fr(this.availableShapes)??[...le],handleSize:this.handleSize,handleColor:this.handleColor,borderRadius:this.borderRadius,outputType:this.outputType,outputQuality:this.outputQuality,maxOutputWidth:this.maxOutputWidth,maxOutputHeight:this.maxOutputHeight,outputMode:this.outputMode,cloudimageToken:this.cloudimageToken,cloudimageDomain:this.cloudimageDomain,cloudimageBgColor:this.cloudimageBgColor,overlayColor:this.overlayColor,showGrid:this.showGrid,showToolbar:this.showToolbar,showRotateSlider:this.showRotateSlider,showZoomSlider:this.showZoomSlider,showShapeSelector:this.showShapeSelector,showRotateButton:this.showRotateButton,showFlipButton:this.showFlipButton,toolbarPosition:this.toolbarPosition,showBleedMargin:this.showBleedMargin,bleedMarginSize:this.bleedMarginSize,bleedMarginColor:this.bleedMarginColor,enableAnimations:this.enableAnimations,animationSpeed:this.animationSpeed,keyboard:this.keyboard,pinchZoom:this.pinchZoom,wheelZoom:this.wheelZoom}}};ze.styles=[Or,qr,Nr,Vr];let k=ze;H([z({type:String,reflect:!0})],k.prototype,"src");H([z({type:String,attribute:"crop-shape",reflect:!0})],k.prototype,"cropShape");H([z({type:String,reflect:!0})],k.prototype,"theme");H([z({type:Number,attribute:"initial-rotation"})],k.prototype,"initialRotation");H([z({type:Number,attribute:"initial-scale"})],k.prototype,"initialScale");H([z({type:Number,attribute:"min-scale"})],k.prototype,"minScale");H([z({type:Number,attribute:"max-scale"})],k.prototype,"maxScale");H([z({type:Number,attribute:"min-crop-size"})],k.prototype,"minCropSize");H([z({type:Number,attribute:"handle-size"})],k.prototype,"handleSize");H([z({type:Number,attribute:"border-radius"})],k.prototype,"borderRadius");H([z({type:Number,attribute:"output-quality"})],k.prototype,"outputQuality");H([z({type:Number,attribute:"max-output-width"})],k.prototype,"maxOutputWidth");H([z({type:Number,attribute:"max-output-height"})],k.prototype,"maxOutputHeight");H([z({type:Number,attribute:"bleed-margin-size"})],k.prototype,"bleedMarginSize");H([z({type:Number,attribute:"animation-speed"})],k.prototype,"animationSpeed");H([z({type:String,attribute:"handle-color"})],k.prototype,"handleColor");H([z({type:String,attribute:"overlay-color"})],k.prototype,"overlayColor");H([z({type:String,attribute:"bleed-margin-color"})],k.prototype,"bleedMarginColor");H([z({type:String,attribute:"output-type"})],k.prototype,"outputType");H([z({type:String,attribute:"toolbar-position",reflect:!0})],k.prototype,"toolbarPosition");H([z({type:String,attribute:"output-mode"})],k.prototype,"outputMode");H([z({type:String,attribute:"cloudimage-token"})],k.prototype,"cloudimageToken");H([z({type:String,attribute:"cloudimage-domain"})],k.prototype,"cloudimageDomain");H([z({type:String,attribute:"cloudimage-bg-color"})],k.prototype,"cloudimageBgColor");H([z({type:String,reflect:!0})],k.prototype,"variant");H([z({attribute:"show-grid",converter:Kr})],k.prototype,"showGrid");H([z({type:Boolean,attribute:"show-toolbar"})],k.prototype,"showToolbar");H([z({type:Boolean,attribute:"show-rotate-slider"})],k.prototype,"showRotateSlider");H([z({type:Boolean,attribute:"show-zoom-slider"})],k.prototype,"showZoomSlider");H([z({type:Boolean,attribute:"show-shape-selector"})],k.prototype,"showShapeSelector");H([z({type:Boolean,attribute:"show-rotate-button"})],k.prototype,"showRotateButton");H([z({type:Boolean,attribute:"show-flip-button"})],k.prototype,"showFlipButton");H([z({type:Boolean,attribute:"show-cancel-button"})],k.prototype,"showCancelButton");H([z({type:Boolean,attribute:"show-done-button"})],k.prototype,"showDoneButton");H([z({type:Boolean,attribute:"show-bleed-margin"})],k.prototype,"showBleedMargin");H([z({type:Boolean,attribute:"enable-animations"})],k.prototype,"enableAnimations");H([z({type:Boolean})],k.prototype,"keyboard");H([z({type:Boolean,attribute:"pinch-zoom"})],k.prototype,"pinchZoom");H([z({type:Boolean,attribute:"wheel-zoom"})],k.prototype,"wheelZoom");H([z({type:Boolean,attribute:"dim-toolbar-on-drag"})],k.prototype,"dimToolbarOnDrag");H([z({attribute:"available-shapes"})],k.prototype,"availableShapes");H([z({attribute:"initial-crop"})],k.prototype,"initialCrop");H([z({attribute:!1})],k.prototype,"icons");H([Ot()],k.prototype,"loading");H([Ot()],k.prototype,"errorMessage");H([Ot()],k.prototype,"isInteracting");H([Wt("cloudimage-crop-canvas")],k.prototype,"canvasHost");H([Wt("cloudimage-crop-toolbar")],k.prototype,"toolbarHost");H([Wt(".ci-crop-container")],k.prototype,"containerEl");const Zr=["src","variant","cropShape","theme","minScale","maxScale","minCropSize","borderRadius","handleSize","handleColor","overlayColor","showGrid","showBleedMargin","bleedMarginSize","bleedMarginColor","enableAnimations","animationSpeed","keyboard","pinchZoom","wheelZoom","outputMode","cloudimageToken","cloudimageDomain","cloudimageBgColor"];function lt(t){if(!t)return NaN;const e=parseFloat(t);return Number.isFinite(e)?/^-?\d*\.?\d+(?:px)?$/.test(t.trim())?e:NaN:NaN}function jr(t){try{return JSON.parse(t)}catch{return null}}const oo=Object.freeze(Object.defineProperty({__proto__:null,CloudimageCropElement:k,DEFAULT_CONFIG:ue,TOOLBAR_RESERVE_PX:Oe,buildCloudimageUrl:Tr,buildCloudimageUrlFromDescriptor:At,buildTransformMatrix:xr,calibrateServerFraming:Re,canvasToImage:Mr,createCropController:ke,getAspectRatio:ft,imageToCanvas:vr,mergeConfig:qt,parseRatio:Vt,resolveServerCrop:Bt},Symbol.toStringTag,{value:"Module"}));export{qr as B,Pe as D,k as H,He as T,Fr as Y,E as a,Jr as e,Vt as f,oo as i,le as l,eo as o,ft as w};
