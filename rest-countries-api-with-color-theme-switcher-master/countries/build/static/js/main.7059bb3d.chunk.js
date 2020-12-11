(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{34:function(e,c,t){},35:function(e,c,t){},36:function(e,c,t){},54:function(e,c,t){},55:function(e,c,t){},64:function(e,c,t){},65:function(e,c,t){},66:function(e,c,t){"use strict";t.r(c);var n=t(0),s=t(1),a=t(27),i=t.n(a),r=(t(34),t(8)),o=t(10),l=t(2),j=(t(35),t(36),function(e){return Object(n.jsxs)("div",{className:e.isDarkmode?"countryCard dark":"countryCard",id:"countryCard",children:[Object(n.jsx)("img",{className:"countryCard__img",src:e.country.flag}),Object(n.jsxs)("div",{className:"countryCard__div",children:[Object(n.jsxs)("h2",{className:"countryCard__h2",children:[" ",e.country.name]}),Object(n.jsxs)("div",{className:"info",children:[Object(n.jsx)("div",{className:"info__div",children:"Population:"})," ",Object(n.jsx)("div",{className:" info__div info__div--props",children:e.country.population})]}),Object(n.jsxs)("div",{className:"info",children:[Object(n.jsx)("div",{className:"info__div",children:"Region:"})," ",Object(n.jsxs)("div",{className:"info__div--props",children:[" ",e.country.region]})]}),Object(n.jsxs)("div",{className:"info",children:[Object(n.jsx)("div",{className:"info__div",children:"Capital:"}),Object(n.jsxs)("div",{className:"info__div--props",children:[" ",e.country.capital]})]})]})]})}),d=t(9),u=t(13),b=t(14),h=t.n(b),O=(t(54),function(e){var c=Object(s.useState)({country:"",region:"Filter by Region"}),t=Object(o.a)(c,2),a=t[0],i=t[1],l=Object(s.useState)([]),j=Object(o.a)(l,2),d=j[0],b=j[1],O=(e.filteredCountries,e.setFilteredCountries);Object(s.useEffect)((function(){h.a.get("https://restcountries.eu/rest/v2/all").then((function(e){O(e.data),b(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(s.useEffect)((function(){O(d.filter((function(e){return!("Filter by Region"!==a.region&&!e.region.includes(a.region))&&!(""!==a.country&&!e.name.includes(a.country))})))}),[a]);return Object(n.jsxs)("div",{className:"searchbar",children:[Object(n.jsx)("input",{placeholder:"Search for a country...",className:e.isDarkmode?"searchbar__input dark":"searchbar__input",type:"text",name:"country",onChange:function(e){i(Object(r.a)(Object(r.a)({},a),{},Object(u.a)({},e.target.name,e.target.value)))}}),Object(n.jsx)("div",{className:"select",children:Object(n.jsxs)("select",{className:e.isDarkmode?"select__select dark":"select__select",name:"region",onChange:function(e){i(Object(r.a)(Object(r.a)({},a),{},Object(u.a)({},e.target.name,e.target.value)))},children:[Object(n.jsx)("option",{value:"Filter by Region",children:"Filter by Region"}),Object(n.jsx)("option",{value:"Africa",children:"Africa"}),Object(n.jsx)("option",{value:"America",children:"America"}),Object(n.jsx)("option",{value:"Asia",children:"Asia"}),Object(n.jsx)("option",{value:"Europe",children:"Europe"}),Object(n.jsx)("option",{value:"Oceania",children:"Oceania"})]})})]})}),_=(t(55),function(e){var c=Object(s.useState)([]),t=Object(o.a)(c,2),a=t[0],i=t[1];return Object(n.jsxs)("div",{className:"countriesList",children:[Object(n.jsx)(O,{isDarkmode:e.isDarkmode,setFilteredCountries:i,filteredCountries:a}),Object(n.jsx)("div",{className:"countriesList__div",children:function(c){if(c)return c.map((function(c){return Object(n.jsx)(d.b,{className:"linkToCountry",to:"/countries/".concat(c.alpha3Code),children:Object(n.jsx)(j,{country:c,isDarkmode:e.isDarkmode},c.alpha3Code)})}));console.log("no countries")}(a)})]})});t(64);var m=function(e){return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:e.isDarkmode?"header dark":"header",id:"header",children:[Object(n.jsx)("h1",{children:Object(n.jsx)(d.b,{className:"header__Link",to:"/",children:"Where in the world?"})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"far fa-moon"}),Object(n.jsx)("button",{id:"theme-toggle",onClick:function(){!function(e){document.getElementById("theme-toggle"),e.isDarkmode?e.setIsDarkmode(!1):e.setIsDarkmode(!0)}(e)},children:"Dark Mode"})]})]})})},p=(t(65),function(e){var c=Object(s.useState)(null),t=Object(o.a)(c,2),a=t[0],i=t[1];return Object(s.useEffect)((function(){console.log("props",e);var c=e.match.params.alpha3Code;h.a.get("https://restcountries.eu/rest/v2/alpha/".concat(c)).then((function(e){i(e.data)})).catch((function(e){console.log(e)}))}),[e.match.params.alpha3Code]),Object(n.jsx)("div",{children:function(c){if(c&&c.flag&&c.name&&c.population&&c.region&&c.capital)return Object(n.jsxs)("div",{className:"country_page",children:[Object(n.jsxs)("button",{className:e.isDarkmode?"country_page__button dark":"country_page__button",onClick:function(){e.history.goBack()},children:[Object(n.jsx)("i",{className:"country_page__icon fas fa-arrow-left"}),"Back"]}),Object(n.jsxs)("div",{className:"country_page__container",children:[Object(n.jsx)("img",{className:"country_page__img",src:c.flag,alt:c.name}),Object(n.jsxs)("div",{className:"country_page__div",children:[Object(n.jsxs)("h2",{className:"country_page__h2",children:[" ",c.name]}),Object(n.jsxs)("div",{className:"country_info",children:[Object(n.jsxs)("div",{className:"country_info__div1",children:[Object(n.jsxs)("p",{className:"country_info__p",children:[Object(n.jsx)("b",{children:"Native Name:"})," ",c.nativeName]}),Object(n.jsxs)("p",{className:"country_info__p",children:[Object(n.jsx)("b",{children:"Population:"})," ",c.population]}),Object(n.jsxs)("p",{className:"country_info__p",children:[" ",Object(n.jsx)("b",{children:"Region:"})," ",c.region]}),Object(n.jsxs)("p",{className:"country_info__p",children:[Object(n.jsx)("b",{children:"Sub Region:"})," ",c.subregion]}),Object(n.jsxs)("p",{className:"country_info__p",children:[Object(n.jsx)("b",{children:"Capital:"})," ",c.capital]})]}),Object(n.jsxs)("div",{className:"country_info__div2",children:[Object(n.jsxs)("p",{className:"country_info__p",children:[Object(n.jsx)("b",{children:"Top Level Domain:"})," ",c.topLevelDomain]}),Object(n.jsxs)("p",{className:"country_info__p",children:[Object(n.jsx)("b",{children:"Currencies:"})," ",c.currencies.map((function(e){return c.currencies.length>1?Object(n.jsxs)("div",{children:[e.name,", "]}):Object(n.jsxs)("div",{children:[" ",e.name]})}))]}),Object(n.jsxs)("p",{className:"country_info__p",children:[Object(n.jsx)("b",{children:"Languages:"})," ",c.languages.map((function(e){return c.languages.length>1?Object(n.jsxs)("div",{children:[e.name,","]}):Object(n.jsx)("div",{children:e.name})}))]})]})]}),Object(n.jsx)("p",{className:"country_info__p country_info__border",children:Object(n.jsx)("b",{children:"Border Countries:"})}),Object(n.jsx)("div",{className:"country_info__border_container",children:c.borders.map((function(c){return Object(n.jsx)(d.b,{className:e.isDarkmode?"country_info__Link dark":"country_info__Link",to:"/countries/".concat(c),children:c})}))})]})]})]})}(a)})});var f=function(){var e=Object(s.useState)(!1),c=Object(o.a)(e,2),t=c[0],a=c[1];return Object(n.jsxs)("div",{className:t?"App dark":"App",children:[Object(n.jsx)(m,{isDarkmode:t,setIsDarkmode:a}),Object(n.jsx)(l.a,{exact:!0,path:"/",render:function(e){return Object(n.jsx)(_,Object(r.a)(Object(r.a)({},e),{},{isDarkmode:t}))}}),Object(n.jsx)(l.a,{path:"/countries/:alpha3Code",render:function(e){return Object(n.jsx)(p,Object(r.a)(Object(r.a)({},e),{},{isDarkmode:t}))}})]})};i.a.render(Object(n.jsx)(d.a,{children:Object(n.jsx)(f,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.7059bb3d.chunk.js.map