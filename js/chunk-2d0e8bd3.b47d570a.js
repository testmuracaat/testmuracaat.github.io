(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e8bd3"],{"8b0c":function(t,a,r){"use strict";r.r(a);var i=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"container"},[t._m(0),r("div",{staticClass:"table-wrapper"},[r("table",{staticClass:"table-users"},[t._m(1),t._l(t.AraclarDizi,(function(a){return r("tr",{key:a.key},[r("td",[t._v(t._s(a.arac_ismi))]),r("td",[t._v(t._s(a.arac_durumu))]),r("td",[r("router-link",{staticClass:"btn btn-edit",attrs:{to:{name:"aracedit",params:{id:a.key}}}},[r("i",{staticClass:"material-icons"},[t._v("create")])])],1)])}))],2),r("router-link",{attrs:{to:"/aracadd"}},[r("button",{staticClass:"btn btn-add"},[t._v("Araç Ekle")])])],1)])},e=[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("header",[r("h3",[t._v("Araçlar")])])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("tr",[r("th",{staticStyle:{width:"40%"}},[t._v("Araç İsmi")]),r("th",{staticStyle:{width:"40%"}},[t._v("Araç Durumu")]),r("th",{staticStyle:{width:"20%"}},[t._v("İşlem")])])}],c=(r("4160"),r("159b"),r("88b8")),n={data:function(){return{AraclarDizi:[]}},created:function(){var t=this;c["a"].collection("araclar").onSnapshot((function(a){t.AraclarDizi=[],a.forEach((function(a){t.AraclarDizi.push({key:a.id,arac_ismi:a.data().arac_ismi,arac_durumu:a.data().arac_durumu})}))}))}},s=n,l=r("2877"),u=Object(l["a"])(s,i,e,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0e8bd3.b47d570a.js.map