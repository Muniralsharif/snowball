(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(e,t,a){e.exports=a(63)},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},57:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(28),r=a.n(l),o=(a(37),a(38),a(29)),i=a(6),s=(a(39),function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"vertical"},c.a.createElement("h1",{className:"vertical__tiltle"},"Fight climate change together, every single day."),c.a.createElement("div",{className:"vertical__contents"},c.a.createElement("div",{className:"vertical__contents__circles"},c.a.createElement("div",{className:"vertical__contents__circles__circle vertical__contents__circles__numberCircle1"},"1"),c.a.createElement("span",{className:"vertical__contents__circles__span"},"Learn what you can do")),c.a.createElement("div",{className:"vertical__contents__circles"},c.a.createElement("div",{className:"vertical__contents__circles__circle vertical__contents__circles__numberCircle2"},"2"),c.a.createElement("span",{className:"vertical__contents__circles__span"},"See what others are doing")),c.a.createElement("div",{className:"vertical__contents__circles"},c.a.createElement("div",{className:"vertical__contents__circles__circle vertical__contents__circles__numberCircle3"},"3"),c.a.createElement("span",{className:"vertical__contents__circles__span"},"Commit to a better future"))),c.a.createElement("div",{className:"vertical__contents"},c.a.createElement("h3",null,"The Vision"),c.a.createElement("p",null,"A global network of people, fighting climate change together, through our everyday actions.")),c.a.createElement("div",{className:"vertical__contents"},c.a.createElement("h3",null,"How do we get there?"),c.a.createElement("p",null,"By showing people what they can do, giving them the tools to do it and allowing them to commit to a better future. When we act together, small changes have a big impact.")),c.a.createElement("div",{className:"vertical__contents"},c.a.createElement("h3",null,"What\u2019s the goal?"),c.a.createElement("p",null,"If we bring people together, the power lies with the people in the fight against climate change. We want to create a movement to release that inner power!"))),c.a.createElement("div",{className:"start"},c.a.createElement("button",{type:"submit",onClick:function(){alert("this should go to next page ")},className:"start__letsgo"},"Let\u2019s go!")))}),m=a(9),_=a(10),d=a(13),p=a(11),u=a(14),h=a(12),g=a.n(h),v=(a(57),function(e){var t=e.element,a=e.history;return c.a.createElement("div",{className:"pledge-div"},c.a.createElement("img",{onClick:function(){a.push("/dashboard/action-category/pledge/".concat(t.title),{data:t})},alt:t.title,className:"pledge-div__img",src:t.img}),c.a.createElement("p",{className:"pledge-div__title"},t.title),c.a.createElement("p",{className:"pledge-div__description"},t.description),c.a.createElement("span",{className:"pledge-div__already"},"PLEDGES ALREADY "),c.a.createElement("span",{className:"pledge-div__number"},t.number_of_enrollement))}),E=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={pledge_info:[],loading:!0},a}return Object(u.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("/api/action-category/".concat(1)).then((function(t){var a=t.data;e.setState({loading:!1,pledge_info:a})})).catch()}},{key:"render",value:function(){var e=this,t=this.state,a=t.pledge_info;t.loading;return c.a.createElement(c.a.Fragment,null,a.length?a.map((function(t,a){return c.a.createElement(v,Object.assign({},e.props,{element:t,key:a}))})):c.a.createElement("h1",null,"Loading..."))}}]),t}(c.a.Component),f=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location.state.data.pledge_id;g.a.get("/dashboard/action-category/pledge/".concat(e)).then((function(t){console.log("im here in did mount",e),console.log("rererer",t);var a=t.data;console.log("pledge_info",a)})).catch((function(e){console.log("555",e)}))}},{key:"render",value:function(){var e=this.props.location.state.data;return c.a.createElement("div",null,console.log("this.props.location.data",e))}}]),t}(c.a.Component),b=function(){return c.a.createElement(o.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{exact:!0,path:"/",component:s}),c.a.createElement(i.a,{exact:!0,path:"/dashboard/action-category/:category_id",component:E}),c.a.createElement(i.a,{exact:!0,path:"/dashboard/action-category/pledge/:action_name",component:f})))};r.a.render(c.a.createElement(b,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.d5cc3f80.chunk.js.map