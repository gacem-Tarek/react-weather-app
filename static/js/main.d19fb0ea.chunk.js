(this.webpackJsonpbds_weather_app=this.webpackJsonpbds_weather_app||[]).push([[0],{16:function(t,e){t.exports={key:"fb728f680fda159b681bab8e48746f81",base:"https://api.openweathermap.org/data/2.5/",GoogleMapsAPI:"AIzaSyDmMlQ6O6EKpDFWREgk40WXNM4h1uCSEpM"}},163:function(t,e,a){},184:function(t,e,a){},385:function(t,e,a){},386:function(t,e,a){"use strict";a.r(e);var n=a(1),i=a.n(n),c=a(62),s=a.n(c),r=(a(163),a(164),a(165),a(155)),o=a(36),l=a.n(o),h=a(88),d=a(32),p=a(33),j=a(35),u=a(34),m=a(16),b=a.n(m),g=a(156),x=a.n(g),O=(a(184),a(0)),f=function(t){Object(j.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).weekDay=function(t){return new Date(1e3*t).toLocaleString("en-us",{weekday:"long"})},t}return Object(p.a)(a,[{key:"render",value:function(){var t=this;return Object(O.jsx)(n.Fragment,{children:Object(O.jsx)("div",{className:"wrapper",children:this.props.forcastList.slice(1,7).map((function(e){return Object(O.jsx)("div",{className:"day",children:Object(O.jsxs)("div",{className:"forcasting",children:[Object(O.jsx)("h2",{className:"date",children:t.weekDay(e.dt)}),Object(O.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),alt:"weather status icon"}),Object(O.jsx)("h2",{className:"main",children:e.weather[0].main}),Object(O.jsxs)("h3",{className:"tempM",children:[Object(O.jsxs)("span",{children:[Math.round(e.temp.min),"\xb0"]})," \xa0"," ",Object(O.jsxs)("span",{children:[" ",Math.round(e.temp.max),"\xb0"]})]})]})})}))})})}}]),a}(n.Component),y=a(24),v=a(90),w=a.n(v);w.a.setApiKey(m.GoogleMapsAPI),w.a.enableDebug();var M=function(t){Object(j.a)(a,t);var e=Object(u.a)(a);function a(){return Object(d.a)(this,a),e.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var t=this,e=Object(y.withScriptjs)(Object(y.withGoogleMap)((function(e){return Object(O.jsxs)(y.GoogleMap,{google:t.props.google,defaultZoom:t.props.zoom,defaultCenter:t.props.center,children:[Object(O.jsx)(y.InfoWindow,{onClose:t.onInfoWindowClose,position:{lat:t.props.center.lat+.3,lng:t.props.center.lng},children:Object(O.jsx)("div",{children:Object(O.jsx)("span",{style:{padding:0,margin:0},children:t.props.city})})}),Object(O.jsx)(y.Marker,{google:t.props.google,onDragEnd:t.onMarkerDragEnd,draggable:!0,name:"current place",position:t.props.center}),Object(O.jsx)(y.Marker,{})]})})));return void 0!==this.props.center.lat?Object(O.jsx)("div",{children:Object(O.jsx)(e,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=".concat(m.GoogleMapsAPI,"&libraries=places"),loadingElement:Object(O.jsx)("div",{style:{height:"100%",width:"100%",float:"right"}}),containerElement:Object(O.jsx)("div",{style:{boxShadow:"1px 1px 5px 1px ",marginTop:"25px",marginLeft:" 50px",marginRight:"50px",height:this.props.height,width:this.props.width,float:"right"}}),mapElement:Object(O.jsx)("div",{style:{height:"100%",width:"100%",float:"right"}})})}):Object(O.jsx)("div",{style:{height:this.props.height}})}}]),a}(n.Component),k=a.p+"static/media/WeatherIcons.c90d089e.gif",N=function(t){Object(j.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={lat:void 0,lon:void 0,temperatureC:void 0,temperatureF:void 0,city:void 0,cityName:"",country:void 0,humidity:void 0,description:void 0,visibility:void 0,icon:void 0,sunrise:void 0,sunset:void 0,forcastList:void 0},t.getPosition=function(t){return new Promise((function(e,a){navigator.geolocation.getCurrentPosition(e,a,t)}))},t.getWeather=function(){var e=Object(h.a)(l.a.mark((function e(a,n){var i,c,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b.a.base,"weather?lat=").concat(a,"&lon=").concat(n,"&units=metric&APPID=").concat(b.a.key));case 2:return i=e.sent,e.next=5,i.json();case 5:return c=e.sent,e.next=8,fetch("".concat(b.a.base,"onecall?lat=").concat(a,"&lon=").concat(n,"&units=metric&exclude=hourly,minutely,alerts&APPID=").concat(b.a.key));case 8:return s=e.sent,e.next=11,s.json();case 11:r=e.sent,t.setState({lat:a,lon:n,city:c.name,forcastList:r.daily,icon:c.weather[0].icon,temperatureC:Math.round(c.main.temp),temperatureF:Math.round(1.8*c.main.temp+32),humidity:c.main.humidity,visibility:c.visibility,temp_min:Math.round(c.main.temp_min),temp_max:Math.round(c.main.temp_max),main:c.weather[0].main,description:c.weather[0].description,country:c.sys.country});case 13:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),t.search=function(){var e=Object(h.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(b.a.base,"weather?q=").concat(a,"&units=metric&APPID=").concat(b.a.key)).then((function(e){t.getWeather(e.data.coord.lat,e.data.coord.lon),t.setState({cityName:""})})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.onChange=function(e){t.setState(Object(r.a)({},e.target.name,e.target.value)),console.log(e.target.value)},t}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var t=this;navigator.geolocation?this.getPosition().then((function(e){t.getWeather(e.coords.latitude,e.coords.longitude)})).catch((function(e){t.getWeather(28.67,77.22),alert("You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather.")})):alert("Geolocation not available")}},{key:"render",value:function(){var t=this,e=this.state,a=e.cityName;e.mapCall;return this.state.temperatureC?Object(O.jsxs)(i.a.Fragment,{children:[Object(O.jsxs)("div",{className:"forecast",children:[Object(O.jsxs)("div",{className:"Myblock",style:{width:"50%",alignItem:"center"},children:[Object(O.jsx)("div",{className:"search-box",children:Object(O.jsxs)("div",{className:"input-group mt-1 mb-1 py-0",style:{alignItem:"center",justifyContent:"center"},children:[Object(O.jsx)("div",{className:"form-outline  ",children:Object(O.jsx)("input",{type:"search",id:"form1",name:"cityName",onChange:this.onChange,value:a,className:"form-control",placeholder:"Search a City"})}),Object(O.jsx)("button",{type:"button",onClick:function(){return t.search(a)},className:"btn btn-primary",children:Object(O.jsx)("i",{className:"fa fa-search"})})]})}),Object(O.jsxs)("div",{className:"title",children:[Object(O.jsxs)("h2",{children:[this.state.city," "]}),Object(O.jsxs)("h3",{children:[" , ",this.state.country]})]}),Object(O.jsx)("div",{className:"forecast-icon",children:Object(O.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(this.state.icon,".png"),alt:"weather status icon"})}),Object(O.jsxs)("div",{className:"temperature",children:[Object(O.jsxs)("p",{id:"temp",children:[Math.round(this.state.temperatureC),"\xb0c"]}),Object(O.jsxs)("p",{children:[Object(O.jsxs)("span",{children:["min : ",Math.round(this.state.temp_min),"\xb0"]})," ",Object(O.jsxs)("span",{children:["max: ",Math.round(this.state.temp_max),"\xb0"]}),"\xa0",Object(O.jsxs)("span",{children:["humididty : ",Math.round(this.state.humidity),"\xb0"]})," ",Object(O.jsxs)("span",{children:["min : ",Math.round(this.state.visibility),"\xb0"]})]})]}),Object(O.jsx)("div",{className:"today-weather",children:Object(O.jsx)("h3",{children:this.state.description})}),Object(O.jsx)("div",{style:{margin:"100px"}})]}),Object(O.jsx)(M,{google:this.props.google,center:{lat:this.state.lat,lng:this.state.lon},city:this.state.city,height:"340px",width:"300px",zoom:8})]}),Object(O.jsx)(f,{all:this.state,forcastList:this.state.forcastList})]}):Object(O.jsxs)(i.a.Fragment,{children:[Object(O.jsx)("img",{src:k,style:{width:"50%",WebkitUserDrag:"none"}}),Object(O.jsx)("h3",{style:{color:"black",fontSize:"22px",fontWeight:"600"},children:"Detecting your location"}),Object(O.jsxs)("h3",{style:{color:"black",marginTop:"10px"},children:["Your current location wil be displayed on the App ",Object(O.jsx)("br",{})," & used for calculating Real time weather."]})]})}}]),a}(i.a.Component);a(385);var C=function(){return Object(O.jsx)(i.a.Fragment,{children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)(N,{})})})};s.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root"))}},[[386,1,2]]]);
//# sourceMappingURL=main.d19fb0ea.chunk.js.map