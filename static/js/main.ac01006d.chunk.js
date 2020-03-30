(this["webpackJsonpcovid19-today"]=this["webpackJsonpcovid19-today"]||[]).push([[0],[,,,,,,,function(e,t,n){},,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(8),o=n.n(l),c=n(1),s=n(2),i=n(3),u=n(4),m=n(5),h=(n(14),n(7),function(e){return r.a.createElement("div",{className:"header container"},r.a.createElement("h1",{className:"header__title"},e.title),r.a.createElement("h2",{className:"header__subtitle"},e.subtitle),r.a.createElement("br",null),r.a.createElement("p",null,"API provided by ",r.a.createElement("a",{href:"https://twitter.com/ksredelinghuys"},"Kyle Rdelinghuys")),r.a.createElement("p",null,"Data from ",r.a.createElement("a",{href:"https://github.com/CSSEGISandData/COVID-19"},"Johns Hopkins CSSE")),r.a.createElement("p",null,"Built by ",r.a.createElement("a",{href:"https://twitter.com/breellz"},"Bassit Owolabi")))}),d=(n(15),n(16),n(17),function(e){return r.a.createElement("div",null,r.a.createElement("form",{className:"container search",onSubmit:e.handleSubmit},r.a.createElement("input",{className:"search_input",type:"text",name:"option"}),r.a.createElement("button",{className:"button"},"Search")))}),f=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"handleDisplay",value:function(){for(var e=0;e<this.props.cases.length;e++)if(this.props.cases[e].Country===this.props.country){var t=this.props.cases[e];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h3",{className:"container"},"Your Country: ",this.props.country)),r.a.createElement("div",null,r.a.createElement("ol",null,r.a.createElement("p",{className:" container cases_body "},r.a.createElement("li",{className:"cases_text",key:t.Country},"Country:  ",t.Country,r.a.createElement("br",null),"New Confirmed :  ",t.NewConfirmed,r.a.createElement("br",null),"New Deaths:   ",t.NewDeaths,r.a.createElement("br",null),"New Recovered:   ",t.NewRecovered,r.a.createElement("br",null),"Total Confirmed:  ",t.TotalConfirmed,r.a.createElement("br",null),"Total Deaths:  ",t.TotalDeaths,r.a.createElement("br",null),"Total Recovered:  ",t.TotalRecovered)))),r.a.createElement("h3",{className:"container"},"Other Countries:"))}}},{key:"render",value:function(){return r.a.createElement("div",null,this.handleDisplay())}}]),n}(r.a.Component),E=(n(18),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleSubmit=a.handleSubmit.bind(Object(i.a)(a)),a.state={cases:[],country:void 0,loading:!1},a}return Object(s.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=e.target.elements.option.value;this.setState((function(e){return{cases:e.cases.filter((function(e){return e.Country.toLowerCase().includes(t.toLowerCase())}))}}))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://extreme-ip-lookup.com/json").then((function(e){return e.json()})).then((function(t){return e.setState((function(){return{country:t.country}}))})).catch((function(e){return console.log(e)})),this.setState((function(){return{loading:!0}})),fetch("https://api.covid19api.com/summary").then((function(e){return e.json()})).then((function(t){return e.setState((function(){return{cases:t.Countries,loading:!1}}))}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(h,{title:"COVID-19 TODAY",subtitle:"Helping data get where it's needed"}),r.a.createElement(d,{handleSubmit:this.handleSubmit}),r.a.createElement(f,{country:this.state.country,cases:this.state.cases})),r.a.createElement("div",null,r.a.createElement("ol",null,this.state.loading?r.a.createElement("div",{className:" container loader"}):this.state.cases.map((function(e){return r.a.createElement("p",{className:" container cases_body "},r.a.createElement("li",{className:"cases_text",key:e.Country},"Country:  ",e.Country,r.a.createElement("br",null),"New Confirmed :  ",e.NewConfirmed,r.a.createElement("br",null),"New Deaths:   ",e.NewDeaths,r.a.createElement("br",null),"New Recovered:   ",e.NewRecovered,r.a.createElement("br",null),"Total Confirmed:  ",e.TotalConfirmed,r.a.createElement("br",null),"Total Deaths:  ",e.TotalDeaths,r.a.createElement("br",null),"Total Recovered:  ",e.TotalRecovered))})))))}}]),n}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.ac01006d.chunk.js.map