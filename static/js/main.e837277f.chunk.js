(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(t,e,n){t.exports=n.p+"static/media/current_floor_button.047235ed.svg"},,,,,,,,function(t,e,n){t.exports=n.p+"static/media/closed_cage.a5c7428c.svg"},function(t,e,n){t.exports=n.p+"static/media/b0.0cfbf597.svg"},function(t,e,n){t.exports=n.p+"static/media/b1.9477a1aa.svg"},function(t,e,n){t.exports=n.p+"static/media/b2.f24fdf25.svg"},function(t,e,n){t.exports=n.p+"static/media/b3.41db1cc0.svg"},function(t,e,n){t.exports=n.p+"static/media/b4.706df9c4.svg"},function(t,e,n){t.exports=n.p+"static/media/b5.1b8dbff6.svg"},function(t,e,n){t.exports=n.p+"static/media/open_cage.160db443.svg"},,,,function(t,e,n){t.exports=n.p+"static/media/upButton.36ee2498.svg"},function(t,e,n){t.exports=n.p+"static/media/downButton.02afb3da.svg"},function(t,e,n){t.exports=n(36)},,,,,function(t,e,n){},,,,function(t,e,n){},,,function(t,e,n){t.exports=n.p+"static/media/open_ elevator_img.54a0bb59.jpg"},function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(20),s=n.n(o),r=(n(28),n(3)),l=n(4),p=n(6),c=n(5),u=n(7),m=(n(29),n(30),n(32),n(1)),h=n.n(m),d=n(8),f=n(9),D=n(2),v=n.n(D),C=n(11),w=n.n(C),g=n(12),y=n.n(g),b=n(13),x=n.n(b),N=n(14),E=n.n(N),F=n(15),k=n.n(F),O=n(16),T=n.n(O),P={width:"100%"},j=function(t){function e(t){return Object(r.a)(this,e),Object(p.a)(this,Object(c.a)(e).call(this,t))}return Object(u.a)(e,t),Object(l.a)(e,[{key:"setCurrentLocation",value:function(t){for(var e=0;e<6;e++)e===t?this.refs["highlighted"+t].style.opacity=.5:this.refs["highlighted"+e].style.opacity=0}},{key:"render",value:function(){return i.a.createElement("header",{style:P},i.a.createElement("img",{src:w.a,className:"Floor-Button"}),i.a.createElement("img",{id:0,ref:"highlighted0",src:v.a,className:"Highlighted-Floor-Button"}),i.a.createElement("img",{src:y.a,className:"Floor-Button"}),i.a.createElement("img",{id:1,ref:"highlighted1",src:v.a,className:"Highlighted-Floor-Button"}),i.a.createElement("img",{src:x.a,className:"Floor-Button"}),i.a.createElement("img",{id:2,ref:"highlighted2",src:v.a,className:"Highlighted-Floor-Button"}),i.a.createElement("img",{src:E.a,className:"Floor-Button"}),i.a.createElement("img",{id:3,ref:"highlighted3",src:v.a,className:"Highlighted-Floor-Button"}),i.a.createElement("img",{src:k.a,className:"Floor-Button"}),i.a.createElement("img",{id:4,ref:"highlighted4",src:v.a,className:"Highlighted-Floor-Button"}),i.a.createElement("img",{src:T.a,className:"Floor-Button"}),i.a.createElement("img",{id:5,ref:"highlighted5",src:v.a,className:"Highlighted-Floor-Button"}))}},{key:"componentDidMount",value:function(){this.setCurrentLocation(this.props.locationData.elevatorPosition)}},{key:"componentDidUpdate",value:function(){this.setCurrentLocation(this.props.locationData.elevatorPosition)}}]),e}(a.Component),I=n(17),U=n.n(I),S=n(10),B=n.n(S),M={},A=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(p.a)(this,Object(c.a)(e).call(this,t))).wasPendingCall=!1,n}return Object(u.a)(e,t),Object(l.a)(e,[{key:"openElevatorDoor",value:function(t){var e=this;return new Promise(function(n){setTimeout(function(){n(e.refs["fl"+t].src=U.a)},1e3)})}},{key:"closeElevatorDoor",value:function(t){var e=this;return new Promise(function(n){setTimeout(function(){n(e.refs["fl"+t].src=B.a)},1e3)})}},{key:"update",value:function(t){var e=this;return new Promise(function(n){setTimeout(function(){n(e.props.updateFromAnimation(e.props.animationData.elevatorPosition,e.props.animationData.callsToCollectUp,e.props.animationData.callsToCollectDown,e.props.animationData.pendingCalls,e.props.animationData.servedFloors,e.props.animationData.callsFromCommandsUp,e.props.animationData.callsFromCommandsDown,e.props.animationData.intServedFloors))},t)})}},{key:"removeCall",value:function(t){this.props.animationData.callsToCollectUp.includes(t)&&this.props.animationData.callsToCollectUp.splice(this.props.animationData.callsToCollectUp.indexOf(t),1),this.props.animationData.callsToCollectDown.includes(t)&&this.props.animationData.callsToCollectDown.splice(this.props.animationData.callsToCollectDown.indexOf(t),1),this.props.animationData.pendingCalls.includes(t)&&(this.props.animationData.pendingCalls.splice(this.props.animationData.pendingCalls.indexOf(t),1),this.wasPendingCall=!0),this.props.animationData.callsFromCommandsUp.includes(t)&&this.props.animationData.callsFromCommandsUp.splice(this.props.animationData.callsFromCommandsUp.indexOf(t),1),this.props.animationData.callsFromCommandsDown.includes(t)&&this.props.animationData.callsFromCommandsDown.splice(this.props.animationData.callsFromCommandsDown.indexOf(t),1)}},{key:"checkCalls",value:function(t,e){return"up"===t?Math.min.apply(Math,Object(f.a)(e)):Math.max.apply(Math,Object(f.a)(e))}},{key:"selectFloor",value:function(t){var e=this;this.wasPendingCall=!1;var n=null;"up"===t?(this.props.animationData.callsToCollectUp.length>0?n=this.checkCalls(t,this.props.animationData.callsToCollectUp):this.props.animationData.pendingCalls.length>0&&this.props.animationData.pendingCalls.some(function(t){return t>=e.props.animationData.elevatorPosition})?n=this.checkCalls(t,this.props.animationData.pendingCalls.filter(function(t){return t>=e.props.animationData.elevatorPosition})):this.props.animationData.callsToCollectDown.length>0&&this.props.animationData.callsToCollectDown.some(function(t){return t>=e.props.animationData.elevatorPosition})&&(n=this.checkCalls(t,this.props.animationData.callsToCollectDown.filter(function(t){return t>=e.props.animationData.elevatorPosition}))),this.props.animationData.pendingCalls.length>0&&this.props.animationData.pendingCalls.some(function(t){return t<=n&&t>=e.props.animationData.elevatorPosition})&&(n=Math.min.apply(Math,Object(f.a)(this.props.animationData.pendingCalls.filter(function(t){return t<=n&&t>=e.props.animationData.elevatorPosition}))))):(this.props.animationData.callsToCollectDown.length>0?n=this.checkCalls(t,this.props.animationData.callsToCollectDown):this.props.animationData.pendingCalls.length>0&&this.props.animationData.pendingCalls.some(function(t){return t<=e.props.animationData.elevatorPosition})?n=this.checkCalls(t,this.props.animationData.pendingCalls.filter(function(t){return t<=e.props.animationData.elevatorPosition})):this.props.animationData.callsToCollectUp.length>0&&this.props.animationData.callsToCollectUp.some(function(t){return t<=e.props.animationData.elevatorPosition})&&(n=this.checkCalls(t,this.props.animationData.callsToCollectUp.filter(function(t){return t<=e.props.animationData.elevatorPosition}))),this.props.animationData.pendingCalls.length>0&&this.props.animationData.pendingCalls.some(function(t){return t>=n&&t<=e.props.animationData.elevatorPosition})&&(n=Math.max.apply(Math,Object(f.a)(this.props.animationData.pendingCalls.filter(function(t){return t>=n&&t<=e.props.animationData.elevatorPosition}))))),[0,1,2,3,4,5].includes(n)?(this.removeCall(n),this.decideMove(t,n)):this.props.updateDirection()}},{key:"decideMove",value:function(t,e){e===this.props.animationData.elevatorPosition?(this.props.animationData.servedFloors[e]=1,this.wasPendingCall&&(this.props.animationData.intServedFloors[e]=1),this.props.updateFromAnimation(e,this.props.animationData.callsToCollectUp,this.props.animationData.callsToCollectDown,this.props.animationData.pendingCalls,this.props.animationData.servedFloors,this.props.animationData.callsFromCommandsUp,this.props.animationData.callsFromCommandsDown,this.props.animationData.intServedFloors)):"up"===t?this.moveUp(e):"down"===t&&this.moveDown(e)}},{key:"moveUp",value:function(){var t=Object(d.a)(h.a.mark(function t(e){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.closeElevatorDoor(this.props.animationData.elevatorPosition);case 2:return this.props.animationData.elevatorPosition=e,this.props.animationData.servedFloors[e]=1,this.wasPendingCall&&(this.props.animationData.intServedFloors[e]=1),t.next=7,Promise.all([this.openElevatorDoor(e),this.update(1e3)]);case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"moveDown",value:function(){var t=Object(d.a)(h.a.mark(function t(e){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.closeElevatorDoor(this.props.animationData.elevatorPosition);case 2:return this.props.animationData.elevatorPosition=e,this.props.animationData.servedFloors[e]=1,this.wasPendingCall&&(this.props.animationData.intServedFloors[e]=1),t.next=7,Promise.all([this.openElevatorDoor(e),this.update(1e3)]);case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){return i.a.createElement("header",{style:M},i.a.createElement("img",{id:"0",ref:"fl0",src:B.a,className:"Elevator-img"}),i.a.createElement("img",{id:"1",ref:"fl1",src:B.a,className:"Elevator-img"}),i.a.createElement("img",{id:"2",ref:"fl2",src:B.a,className:"Elevator-img"}),i.a.createElement("img",{id:"3",ref:"fl3",src:B.a,className:"Elevator-img"}),i.a.createElement("img",{id:"4",ref:"fl4",src:B.a,className:"Elevator-img"}),i.a.createElement("img",{id:"5",ref:"fl5",src:B.a,className:"Elevator-img"}))}},{key:"componentDidMount",value:function(){this.refs["fl"+this.props.animationData.elevatorPosition].src=U.a}},{key:"componentDidUpdate",value:function(){(this.props.animationData.pendingCalls.length>0||this.props.animationData.callsToCollectUp.length>0||this.props.animationData.callsToCollectDown.length>0)&&(console.log("dir "+this.props.animationData.elevatorDirection),this.selectFloor(this.props.animationData.elevatorDirection)),this.props.fetchNewInputs&&this.props.updateFromAnimation(this.props.animationData.elevatorPosition,this.props.animationData.callsToCollectUp,this.props.animationData.callsToCollectDown,this.props.animationData.pendingCalls,this.props.animationData.servedFloors,this.props.animationData.callsFromCommandsUp,this.props.animationData.callsFromCommandsDown,this.props.animationData.intServedFloors)}}]),e}(a.Component),H=n(21),q=n.n(H),_=n(22),L=n.n(_),G={padding:"10px"},J={position:"relative"},z=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(p.a)(this,Object(c.a)(e).call(this,t))).handleClick=function(t){"up"===t.target.attributes.options.value?n.refs.up.style.opacity=.5:n.refs.down.style.opacity=.5,n.props.update(t.target.attributes.options.value,n.props.id)},n}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("header",{style:G},i.a.createElement("div",{style:J},i.a.createElement("img",{ref:"baseUp",src:q.a,className:"Up-Button"}),i.a.createElement("img",{ref:"up",src:v.a,className:"Highlighted-Up-Button",options:"up",onClick:function(e){t.handleClick(e)}})),i.a.createElement("div",{style:J},i.a.createElement("img",{ref:"baseDown",src:L.a,className:"Down-Button"}),i.a.createElement("img",{ref:"down",src:v.a,className:"Highlighted-Down-Button",options:"down",onClick:function(e){t.handleClick(e)}})))}},{key:"componentDidMount",value:function(){switch(this.props.id){case 0:this.refs.baseDown.remove(),this.refs.down.remove();break;case 5:this.refs.baseUp.remove(),this.refs.up.remove()}this.props.upDownData.callsToCollectUp.includes(this.props.id)&&(this.refs.up.style.opacity=.5),this.props.upDownData.callsToCollectDown.includes(this.props.id)&&(this.refs.down.style.opacity=.5)}},{key:"componentDidUpdate",value:function(){if(this.props.upDownData.servedFloors[this.props.id]){switch(this.props.id){case 0:this.refs.up.style.opacity=0;break;case 5:this.refs.down.style.opacity=0;break;default:this.refs.up.style.opacity=0,this.refs.down.style.opacity=0}this.props.upDownData.servedFloors[this.props.id]=0,this.props.updateSwitchButton(this.props.upDownData.servedFloors)}}}]),e}(a.Component),R={display:"flex",alignItems:"center",justifyContent:"center"},W=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(p.a)(this,Object(c.a)(e).call(this,t))).inputCommandsUp=[],n.inputCommandsDown=[],n.isTimer=!0,n.time=5e3,n}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("header",null,i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row",style:R},i.a.createElement(z,{id:0,upDownData:this.props.commandsData,updateSwitchButton:function(e){t.props.updateSwitchFromCommands(e)},update:function(){var e=Object(d.a)(h.a.mark(function e(n,a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("up"===n?t.inputCommandsUp.indexOf(a)<0&&t.inputCommandsUp.push(Number(a)):t.inputCommandsDown.indexOf(a)<0&&t.inputCommandsDown.push(Number(a)),!t.isTimer||!t.props.startTimer){e.next=6;break}return alert("Define your query within the next "+t.time/1e3+" sec. After that time, you will see the result"),t.isTimer=!1,e.next=6,t.collectNewInputs();case 6:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}),i.a.createElement(z,{id:1,upDownData:this.props.commandsData,updateSwitchButton:function(e){t.props.updateSwitchFromCommands(e)},update:function(){var e=Object(d.a)(h.a.mark(function e(n,a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("up"===n?t.inputCommandsUp.indexOf(a)<0&&t.inputCommandsUp.push(Number(a)):t.inputCommandsDown.indexOf(a)<0&&t.inputCommandsDown.push(Number(a)),!t.isTimer||!t.props.startTimer){e.next=6;break}return alert("Define your query within the next "+t.time/1e3+" sec. After that time, you will see the result"),t.isTimer=!1,e.next=6,t.collectNewInputs();case 6:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}),i.a.createElement(z,{id:2,upDownData:this.props.commandsData,updateSwitchButton:function(e){t.props.updateSwitchFromCommands(e)},update:function(){var e=Object(d.a)(h.a.mark(function e(n,a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("up"===n?t.inputCommandsUp.indexOf(a)<0&&t.inputCommandsUp.push(Number(a)):t.inputCommandsDown.indexOf(a)<0&&t.inputCommandsDown.push(Number(a)),!t.isTimer||!t.props.startTimer){e.next=6;break}return alert("Define your query within the next "+t.time/1e3+" sec. After that time, you will see the result"),t.isTimer=!1,e.next=6,t.collectNewInputs();case 6:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}),i.a.createElement(z,{id:3,upDownData:this.props.commandsData,updateSwitchButton:function(e){t.props.updateSwitchFromCommands(e)},update:function(){var e=Object(d.a)(h.a.mark(function e(n,a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("up"===n?t.inputCommandsUp.indexOf(a)<0&&t.inputCommandsUp.push(Number(a)):t.inputCommandsDown.indexOf(a)<0&&t.inputCommandsDown.push(Number(a)),!t.isTimer||!t.props.startTimer){e.next=6;break}return alert("Define your query within the next "+t.time/1e3+" sec. After that time, you will see the result"),t.isTimer=!1,e.next=6,t.collectNewInputs();case 6:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}),i.a.createElement(z,{id:4,upDownData:this.props.commandsData,updateSwitchButton:function(e){t.props.updateSwitchFromCommands(e)},update:function(){var e=Object(d.a)(h.a.mark(function e(n,a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("up"===n?t.inputCommandsUp.indexOf(a)<0&&t.inputCommandsUp.push(Number(a)):t.inputCommandsDown.indexOf(a)<0&&t.inputCommandsDown.push(Number(a)),!t.isTimer||!t.props.startTimer){e.next=6;break}return alert("Define your query within the next "+t.time/1e3+" sec. After that time, you will see the result"),t.isTimer=!1,e.next=6,t.collectNewInputs();case 6:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}),i.a.createElement(z,{id:5,upDownData:this.props.commandsData,updateSwitchButton:function(e){t.props.updateSwitchFromCommands(e)},update:function(){var e=Object(d.a)(h.a.mark(function e(n,a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("up"===n?t.inputCommandsUp.indexOf(a)<0&&t.inputCommandsUp.push(Number(a)):t.inputCommandsDown.indexOf(a)<0&&t.inputCommandsDown.push(Number(a)),!t.isTimer||!t.props.startTimer){e.next=6;break}return alert("Define your query within the next "+t.time/1e3+" sec. After that time, you will see the result"),t.isTimer=!1,e.next=6,t.collectNewInputs();case 6:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}))))}},{key:"update",value:function(){this.props.updateFromCommands(this.inputCommandsUp,this.inputCommandsDown),this.inputCommandsUp=[],this.inputCommandsDown=[],this.isTimer=!0}},{key:"collectNewInputs",value:function(){var t=this;return new Promise(function(e){setTimeout(function(){e(t.update())},t.time)})}}]),e}(a.Component),K=(n(35),function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(p.a)(this,Object(c.a)(e).call(this,t))).newInputsUp=[],n.newInputsDown=[],n.startCollectTimer=!0,n.commandCanSendNewInputs=!1,n.animationCanImportNewInputs=!1,n.receivedNewInputs=!1,n.state={commandPushed:0,elevatorMoved:0,directionChanged:0,stillSomeCallsToResolve:0,propsChanged:0,receivedInputs:!1},n}return Object(u.a)(e,t),Object(l.a)(e,[{key:"compare",value:function(t,e){var n,a=this;if(t&&e)return t.forEach(function(t,i){return e.forEach(function(e){n=t.length>1&&e.length?a.compare(t,e):t===e})}),n}},{key:"mergeCalls",value:function(t,e){var n=Object(f.a)(new Set([].concat(Object(f.a)(t),Object(f.a)(e))));return console.log("merge"),n}},{key:"setMainDirection",value:function(){var t=this;"up"!==this.props.externData.elevatorDirection||this.props.externData.pendingCalls.some(function(e){return e>t.props.externData.elevatorPosition})||this.props.externData.callsToCollectUp.some(function(e){return e>t.props.externData.elevatorPosition})||this.props.externData.callsToCollectDown.some(function(e){return e>t.props.externData.elevatorPosition})?"down"!==this.props.externData.elevatorDirection||this.props.externData.pendingCalls.some(function(e){return e<t.props.externData.elevatorPosition})||this.props.externData.callsToCollectUp.some(function(e){return e<t.props.externData.elevatorPosition})||this.props.externData.callsToCollectDown.some(function(e){return e<t.props.externData.elevatorPosition})?(5===this.props.externData.elevatorPosition&&(this.props.externData.elevatorDirection="down"),0===this.props.externData.elevatorPosition&&(this.props.externData.elevatorDirection="up"),console.log("set dir "+this.props.externData.elevatorDirection)):this.props.externData.elevatorDirection="up":this.props.externData.elevatorDirection="down"}},{key:"render",value:function(){var t=this;return i.a.createElement("header",{className:"App-body"},i.a.createElement(j,{className:"Extern-Component",locationData:this.props.externData}),i.a.createElement(A,{className:"Extern-Component",animationData:this.props.externData,fetchNewInputs:this.animationCanImportNewInputs,updateDirection:function(){t.setMainDirection(),t.setState({directionChanged:!t.state.directionChanged})},updateFromAnimation:function(){var e=Object(d.a)(h.a.mark(function e(n,a,i,o,s,r,l,p){var c,u;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.props.externData.elevatorPosition=n,console.log(t.props.externData.callsFromCommandsDown),t.animationCanImportNewInputs){for(c=0;c<t.newInputsUp.length;c++)s[t.newInputsUp[c]]&&t.newInputsUp.splice(c,1);for(u=0;u<t.newInputsDown.length;u++)s[t.newInputsDown[u]]&&t.newInputsDown.splice(u,1);t.animationCanImportNewInputs=!1,t.receivedNewInputs=!0,t.props.externData.callsFromCommandsUp=t.mergeCalls(r,t.newInputsUp),t.props.externData.callsFromCommandsDown=t.mergeCalls(l,t.newInputsDown)}t.props.externData.callsToCollectUp=t.mergeCalls(a,t.props.externData.callsFromCommandsUp),t.props.externData.callsToCollectDown=t.mergeCalls(i,t.props.externData.callsFromCommandsDown),t.props.externData.pendingCalls=t.mergeCalls(o,t.props.externData.pendingCalls),t.setMainDirection(),t.props.updateInternServedFloors(p,s);case 8:case"end":return e.stop()}},e,this)}));return function(t,n,a,i,o,s,r,l){return e.apply(this,arguments)}}()}),i.a.createElement(W,{className:"Extern-Component",commandsData:this.props.externData,updateSwitchFromCommands:function(e){t.props.externData.servedFloors=e},startTimer:this.startCollectTimer,setTimer:function(e){t.startCollectTimer=e},updateFromCommands:function(){var e=Object(d.a)(h.a.mark(function e(n,a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.newInputsUp=n,t.newInputsDown=a,console.log(t.newInputsUp),console.log(t.newInputsDown),t.startCollectTimer=!1,t.commandCanSendNewInputs=!0,alert("Start resolution of your combination :)"),t.setState({receivedInputs:!t.state.receivedInputs});case 8:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}))}},{key:"componentDidMount",value:function(){var t=Object(d.a)(h.a.mark(function t(){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.setMainDirection(),this.setState({directionChanged:!this.state.directionChanged});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"updateFromNewInputs",value:function(){this.animationCanImportNewInputs=!0,this.props.readyToGetPendingCalls(!0)}},{key:"getNewInputs",value:function(){var t=this;return new Promise(function(e){setTimeout(function(){e(t.updateFromNewInputs())},15e3)})}},{key:"componentDidUpdate",value:function(){var t=Object(d.a)(h.a.mark(function t(e,n,a){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.receivedNewInputs&&(this.receivedNewInputs=!1,this.startCollectTimer=!0),this.commandCanSendNewInputs&&(this.commandCanSendNewInputs=!1,this.updateFromNewInputs());case 2:case"end":return t.stop()}},t,this)}));return function(e,n,a){return t.apply(this,arguments)}}()}]),e}(a.Component)),Q={position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},V={position:"relative",minWidth:"30%",backgroundColor:"#4F5766"},X=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(p.a)(this,Object(c.a)(e).call(this,t))).handleClick=function(t){n.refs["highlighted"+t.target.id].style.opacity=.5,n.props.update(t.target.id)},n}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("header",null,i.a.createElement("div",{className:"container-fluid",style:V},i.a.createElement("div",{className:"row",style:Q},i.a.createElement("img",{src:k.a,className:"Panel-Button"}),i.a.createElement("img",{id:4,ref:"highlighted4",src:v.a,className:"Highlighted-Panel-Button",onClick:function(e){t.handleClick(e)}}),i.a.createElement("img",{src:T.a,className:"Panel-Button"}),i.a.createElement("img",{id:5,ref:"highlighted5",src:v.a,className:"Highlighted-Panel-Button",onClick:function(e){t.handleClick(e)}})),i.a.createElement("div",{className:"row",style:Q},i.a.createElement("img",{src:x.a,className:"Panel-Button"}),i.a.createElement("img",{id:2,ref:"highlighted2",src:v.a,className:"Highlighted-Panel-Button",onClick:function(e){t.handleClick(e)}}),i.a.createElement("img",{src:E.a,className:"Panel-Button"}),i.a.createElement("img",{id:3,ref:"highlighted3",src:v.a,className:"Highlighted-Panel-Button",onClick:function(e){t.handleClick(e)}})),i.a.createElement("div",{className:"row",style:Q},i.a.createElement("img",{src:w.a,className:"Panel-Button"}),i.a.createElement("img",{id:0,ref:"highlighted0",src:v.a,className:"Highlighted-Panel-Button",onClick:function(e){t.handleClick(e)}}),i.a.createElement("img",{src:y.a,className:"Panel-Button"}),i.a.createElement("img",{id:1,ref:"highlighted1",src:v.a,className:"Highlighted-Panel-Button",onClick:function(e){t.handleClick(e)}}))))}},{key:"componentDidUpdate",value:function(t,e,n){for(var a=0;a<6;a++)this.props.intServed[a]&&(this.refs["highlighted"+a].style.opacity=0,this.props.intServed[a]=0);this.props.updateSwitchButton(this.props.intServed)}}]),e}(a.Component),Y=function(t){function e(t){return Object(r.a)(this,e),Object(p.a)(this,Object(c.a)(e).call(this,t))}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("header",{className:"App-body"},i.a.createElement("div",{className:"myParagraph"}," Start the simulation by calling the elevator from the extern, at any floor. Specify any combination of calls and enjoy the resulting motion..."),i.a.createElement(X,{internPanelData:this.props.internData,update:function(e){t.props.updatePendingCalls(e)},updateSwitchButton:function(e){t.props.updateSwitchFromIntern(e)},intServed:this.props.internServed}))}}]),e}(a.Component),Z=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(p.a)(this,Object(c.a)(e).call(this,t))).internInputCalls=[],n.internServedFloorsForIntern={0:null,1:null,2:null,3:null,4:null,5:null},n.internServedFloorsForAnimation={0:null,1:null,2:null,3:null,4:null,5:null},n.state={elevatorPosition:0,elevatorDirection:"up",pendingCalls:[],callsToCollectUp:[],callsToCollectDown:[],callsFromCommandsUp:[],callsFromCommandsDown:[],servedFloors:{0:null,1:null,2:null,3:null,4:null,5:null},intServedFloors:{0:null,1:null,2:null,3:null,4:null,5:null}},n}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},"Elevator Simulation"),i.a.createElement("div",{className:"App-body"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row row-eq-height"},i.a.createElement("div",{className:"col-sm-7"},i.a.createElement(K,{externData:this.state,readyToGetPendingCalls:function(e){e&&t.setState({pendingCalls:t.internInputCalls})},updateInternServedFloors:function(e,n){t.internServedFloorsForIntern=e,t.setState({servedFloors:n,internServedFloors:t.internServedFloorsForAnimation})}})),i.a.createElement("div",{className:"col-sm-5"},i.a.createElement(Y,{internData:this.state,updatePendingCalls:function(e){t.internInputCalls.indexOf(Number(e))<0&&t.internInputCalls.push(Number(e))},updateSwitchFromIntern:function(e){t.internServedFloorsForAnimation=e},internServed:this.internServedFloorsForIntern}))))),i.a.createElement("span",{className:"App-footer"},"Created by Francesca Monzeglio within a Discrete Event Systems Project"))}}]),e}(a.Component);s.a.render(i.a.createElement(Z,null),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.e837277f.chunk.js.map