(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{221:function(t,e,o){var content=o(225);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("3c821348",content,!0,{sourceMap:!1})},224:function(t,e,o){"use strict";var r=o(221);o.n(r).a},225:function(t,e,o){(e=o(53)(!1)).push([t.i,".map-wrapper[data-v-151714fc]{height:100vh}#map[data-v-151714fc]{width:100%;height:100%}",""]),t.exports=e},226:function(t,e,o){"use strict";o.r(e);o(52);var r=o(19),n={components:{Mapbox:o(222).a},props:{geoData:Object},methods:{onLoad:function(map){map.addSource("aides",{type:"geojson",data:this.geoData,cluster:!0,clusterMaxZoom:14,clusterRadius:50,clusterProperties:{sum:["+",["/",["get","montant_total"],1e6]]}}),map.addLayer({id:"clusters",type:"circle",source:"aides",filter:["has","point_count"],paint:{"circle-color":"#51bbd6","circle-radius":40}}),map.addLayer({id:"cluster-count",type:"symbol",source:"aides",layout:{"text-field":["number-format",["get","sum"],{"min-fraction-digits":0,"max-fraction-digits":0}],"text-font":["DIN Offc Pro Medium","Arial Unicode MS Bold"],"text-size":12}}),map.resize()}}},l=(o(224),o(45)),c=Object(l.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"map-wrapper"},[e("mapbox",{attrs:{"access-token":"pk.eyJ1IjoiZXRpZW5uZWJ1cmRldCIsImEiOiJjazlyZzM3MnUwdHV5M2RueDFnbmlmYmdkIn0.Uu3BD8bRWbyRzP1G5FdeJw","map-options":{style:"mapbox://styles/mapbox/light-v10",center:[5.3487286616,46.0997682644],zoom:5}},on:{"map-load":this.onLoad}})],1)}),[],!1,null,"151714fc",null).exports,m=(o(39),o(44),{props:{rawData:Array},data:function(){return{options:{chart:{type:"bar",toolbar:{show:!1}},legend:{show:!1},xaxis:{categories:Array.from(this.rawData,(function(t){return t.libelle_section})),label:{show:!1}},plotOptions:{bar:{horizontal:!0,distributed:!0,columnWidth:"80%",barHeight:"80%"}},theme:{mode:"light",palette:"palette1"}},series:[{name:"cumul-aides",data:Array.from(this.rawData,(function(t){return(t.sum_montant/1e6).toFixed(2)}))}]}}}),d=Object(l.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"p-3"},[e("apexchart",{attrs:{width:"100%",height:"390px",options:this.options,series:this.series}})],1)}),[],!1,null,null,null).exports,h=(o(9),{props:{title:String,kpi:Number}}),f=Object(l.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("p",[this._v(this._s(this.title))]),this._v(" "),e("h5",[e("strong",[this._v(this._s(this.kpi.toLocaleString("fr-FR")))])])])}),[],!1,null,null,null).exports,_="https://eburdet.opendatasoft.com/api/v2/catalog/datasets/no-name/",v={components:{Map:c,Graph:d,KpiCard:f},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$axios,"exports/geojson",e.next=4,o.$get(_+"exports/geojson");case 4:return r=e.sent,"aggregates?select=sum(montant_total) as sum_montant&group_by=libelle_section&sort=-sum_montant&limit=10",e.next=8,o.$get(_+"aggregates?select=sum(montant_total) as sum_montant&group_by=libelle_section&sort=-sum_montant&limit=10");case 8:return n=e.sent,"aggregates?select=sum(nombre_aides) as count, sum(montant_total) as total",e.next=12,o.$get(_+"aggregates?select=sum(nombre_aides) as count, sum(montant_total) as total");case 12:return l=e.sent,e.abrupt("return",{geoData:r,sectorData:n,totals:l});case 14:case"end":return e.stop()}}),e)})))()}},x=Object(l.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{attrs:{fluid:""}},[o("b-row",[o("b-col",{attrs:{lg:"4"}},[o("h3",{staticClass:"text-center"},[t._v("Totales aides versées en France (M€)")]),t._v(" "),o("div",{staticClass:"d-flex justify-content-around border-bottom border-grey py-4"},[o("KpiCard",{attrs:{kpi:t.totals.aggregations[0].total,title:"montant (€)"}}),t._v(" "),o("KpiCard",{attrs:{kpi:t.totals.aggregations[0].count,title:"nombre d'aides"}})],1),t._v(" "),o("h5",{staticClass:"text-center mt-4"},[t._v("Top 10 des aides par secteur")]),t._v(" "),o("Graph",{staticClass:"border-bottom border-grey",attrs:{"raw-data":t.sectorData.aggregations}}),t._v(" "),o("h4",{staticClass:"text-center mt-4"},[o("strong",[t._v("Informations")])]),t._v(" "),o("p",[t._v(" 🎻🎵Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])],1),t._v(" "),o("b-col",{attrs:{lg:"8"}},[o("Map",{attrs:{"geo-data":t.geoData}})],1)],1)],1)}),[],!1,null,null,null);e.default=x.exports}}]);