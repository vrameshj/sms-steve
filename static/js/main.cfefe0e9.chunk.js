(this["webpackJsonptwilio-test"]=this["webpackJsonptwilio-test"]||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(4),l=a.n(s),o=(a(3),a(16),a(5)),c=a.n(o),i=a(6),d=a(7),m=a(9),u=a(8),h=a(1),b=a(10),p=(a(18),{send_sms:function(e){return window.fetch("https://sms-22448-steve.herokuapp.com/web-sms",{method:"POST",mode:"cors",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return 200===e.status?e.json():null})).then((function(e){if(!e||e.error)throw console.log("API Error: ",{data:e}),Error("API Error");return e}))}}),g=function(e,t){var a=!0;return Object.values(t).forEach((function(e){return e.length>0&&(a=!1)})),Object.values(e).forEach((function(e){return 0===e.length&&(a=!1)})),a},f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){e.preventDefault();var t=e.target,n=t.name,r=t.value,s=a.state.errors,l=a.state.inputs;switch(n){case"sender_name":s.sender_name=r.length<2?"Name must contain at least two characters.":"",l.sender_name=r;break;case"sender_number":s.sender_number=r.length<11||r.length>12?"Enter phone number with 11 digits, incl. int`l code and start with +":"",l.sender_number=r;break;case"sender_message":s.sender_message=r.length>120?"Messages need to be <120 characters because this app is old school.":"",l.sender_message=r}a.setState({errors:s,inputs:l}),g(a.state.inputs,a.state.errors)?(console.log("Valid Form"),a.setState({valid:!0,disabled:!1,btnColor:"blue"})):(console.log("Invalid form"),a.setState({valid:!1,disabled:!0,btnColor:"lightblue"}))},a.state={btnColor:"lightblue",disabled:!0,succeeded:!1,failed:!1,valid:!1,error:null,errors:{sender_name:"",sender_number:"",sender_message:""},inputs:{sender_name:"",sender_number:"",sender_message:""}},a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"handleSubmit",value:function(e){var t=this;return c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:e.preventDefault(),p.send_sms({name:this.state.sender_name,number:this.state.sender_number,message:this.state.sender_message}).then((function(e){e.error?(t.setState({error:"Sending failed: ".concat(e.error.message),disabled:!1,proessing:!1}),console.log("[error",e.error)):(t.setState({succeeded:!0,error:""}),console.log("Success!"))})).catch((function(e){t.setState({error:e.message,failed:!0,processing:!1}),console.log(e)}));case 2:case"end":return a.stop()}}),null,this)}},{key:"renderSuccess",value:function(){return r.a.createElement("div",{className:"sr-field-success message"},r.a.createElement("h3",null,"Message sent!"),r.a.createElement("p",null,"Refresh to send another."))}},{key:"renderForm",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"full-container vertical-center"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h2",null,"Just like using your phone..."),r.a.createElement("h3",null,"...except a web app..."),r.a.createElement("h4",null,"...and also dumber."),r.a.createElement("h5",null,"Enter your details and message below, then hit send to SMS Steve."),r.a.createElement("div",{className:"sr-combo-inputs",style:{base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},r.a.createElement("div",{className:"sr-combo-inputs-row"},r.a.createElement("input",{type:"text",name:"sender_name",placeholder:"Name - This will tell Steve who's texting.",className:"sr-input",autoComplete:"cardholder",onChange:this.handleChange}),e.sender_name.length<2&&r.a.createElement("span",{style:{color:"red"}},e.sender_name),r.a.createElement("input",{type:"text",name:"sender_number",placeholder:"Enter phone number with int'l code.",className:"sr-input",autoComplete:"cardholder",onChange:this.handleChange}),12!==e.sender_number.length&&r.a.createElement("span",{style:{color:"red"}},e.sender_number),r.a.createElement("textarea",{type:"text",name:"sender_message",placeholder:"Your message. 120 character max.",className:"sr-input",autoComplete:"cardholder",onChange:this.handleChange}),e.sender_message.length>120&&r.a.createElement("span",{style:{color:"red"}},e.sender_message),r.a.createElement("div",{className:"pad-bottom",style:{color:"red",padding:5}},this.state.failed?"Sending message failed. Try again.":null)),!this.state.succeeded&&r.a.createElement("button",{className:"btn",disabled:this.state.disabled,style:{backgroundColor:this.state.btnColor,border:this.state.btnColor}},this.state.failed?"Try again.":"Send"))))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.succeeded&&this.renderSuccess(),!this.state.succeeded&&this.renderForm())}}]),t}(n.Component),v=function(e){return r.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)};var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,r.a.createElement(v,{symbol:"\u260e\ufe0f"})," SMS",r.a.createElement("a",{href:"http://www.stevehind.me",className:""}," Steve "),r.a.createElement(v,{symbol:"\u260e\ufe0f"}))),r.a.createElement("div",{className:"App-body"},r.a.createElement(f,null)),r.a.createElement("footer",{className:"App-footer"},r.a.createElement("p",null,"\xa9Steve Hind, 2020.")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},3:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.cfefe0e9.chunk.js.map