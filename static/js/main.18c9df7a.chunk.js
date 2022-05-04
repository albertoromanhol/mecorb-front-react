(this["webpackJsonpmecorb-front-react"]=this["webpackJsonpmecorb-front-react"]||[]).push([[0],{164:function(e,t,n){},196:function(e,t,n){"use strict";n.r(t);var i,a=n(1),r=n.n(a),c=n(54),s=n.n(c),o=n(94),l=(n(164),n(268)),j=n(256),d=n(139),u=Object(d.a)({palette:{mode:"dark",primary:{main:"#5e35b1"},secondary:{main:"#00acc1"},common:{black:"#0E0E0E",white:"#FFFFFF"},grey:{50:"#FAFAFA",200:"#E6E6E6",500:"#B6B6B6",700:"#6E6E6E",900:"#424242"},background:{default:"#121212"}},typography:{fontFamily:"Roboto",h1:{fontFamily:"Roboto",fontWeight:700,fontSize:"6rem",lineHeight:"7rem",letterSpacing:"0rem"},h2:{fontFamily:"Roboto",fontWeight:700,fontSize:"3.75rem",lineHeight:"4.5rem",letterSpacing:"0rem"},h3:{fontFamily:"Roboto",fontWeight:700,fontSize:"3rem",lineHeight:"3.5rem",letterSpacing:"0rem"},h4:{fontFamily:"Roboto",fontWeight:700,fontSize:"2.125rem",lineHeight:"2.25rem",letterSpacing:"0rem"},h5:{fontFamily:"Roboto",fontWeight:700,fontSize:"1.5rem",lineHeight:"1.5rem",letterSpacing:"0rem"},h6:{fontFamily:"Roboto",fontWeight:700,fontSize:"1.25rem",lineHeight:"1.5rem",letterSpacing:"0rem"},subtitle1:{fontFamily:"Roboto",fontWeight:600,fontSize:"1rem",lineHeight:"1.5rem",letterSpacing:"0.02rem"},subtitle2:{fontFamily:"Roboto",fontWeight:400,fontSize:"0.875rem",lineHeight:"1.5rem",letterSpacing:"0.02rem"},body1:{fontFamily:"Roboto",fontWeight:400,fontSize:"1rem",lineHeight:"1.5rem",letterSpacing:"0.02rem"},body2:{fontFamily:"Roboto",fontWeight:400,fontSize:"0.875rem",lineHeight:"1.25rem",letterSpacing:"0.02rem"},button:{fontFamily:"Roboto",fontWeight:600,fontSize:"1rem",lineHeight:"1rem",letterSpacing:"0.08rem"},caption:{fontFamily:"Roboto",fontWeight:400,fontSize:"0.75rem",lineHeight:"1rem",letterSpacing:"0.025rem"},overline:{fontFamily:"Roboto",fontWeight:700,fontSize:"0.625rem",lineHeight:"1rem",letterSpacing:"0.1rem"}}}),b=n(22),m=n(141),h=n(21),x=n(8);!function(e){e[e.NONE=0]="NONE",e[e.ABOUT=1]="ABOUT",e[e.INITAL=2]="INITAL",e[e.WELCOME=3]="WELCOME",e[e.SOLAR_SYSTEM=4]="SOLAR_SYSTEM",e[e.MANOUVERS=5]="MANOUVERS",e[e.HOHMANN=6]="HOHMANN",e[e.BI_ELLIPTIC=7]="BI_ELLIPTIC",e[e.SIMULATION_RESULT=8]="SIMULATION_RESULT"}(i||(i={}));var O=n(264),f=n(263),g=n(276),p=n(277),v=n(0),y={open:!1,severity:"success",message:""};function S(){var e=r.a.useState(y),t=Object(x.a)(e,2),n=t[0],i=t[1];r.a.useEffect((function(){n.onClose||i(Object(b.a)(Object(b.a)({},n),{},{onClose:function(){i({message:n.message,severity:n.severity,open:!1,onClose:function(){}})}}))}),[n]);return{alertProps:n,setAlertProps:i,showError:function(e,t){var n=function(e){var t={message:"",status:null,errorList:[]},n=function(e){return Array.isArray(e)?e.reduce((function(e,t){return"string"==typeof t?e+t+"<br/>":e+t.message+"<br/>"}),""):""};return e.status?(t.status=e.status,404==e.status?t.message="Erro 404, rota n\xe3o encontrada":e.data&&(e.data.errors?(t.message=n(e.data.errors),t.errorList=e.data.errors):e.data.notifications&&(t.message=n(e.data.notifications),t.errorList=e.data.notifications))):e.data&&e.data.errors&&(t.message=n(e.data.errors),t.errorList=e.data.errors),t}(e),a=n.message.split(/\r?\n/);i({message:t+a[0],severity:"error",open:!0})},showSuccess:function(e){i({message:e,severity:"success",open:!0})},showWarning:function(e){i({message:e,severity:"warning",open:!0})}}}function L(e){var t=e.open,n=e.onClose,i=e.severity,a=e.message;return Object(v.jsx)(O.a,{open:t,onClose:n,autoHideDuration:6e3,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:Object(v.jsx)(f.a,{variant:"outlined",style:{maxWidth:"350px",border:"1px solid"},elevation:6,onClose:n,severity:i,icon:Object(v.jsx)(g.a,{className:"material-icons-round",style:{fontSize:"46px"},children:function(){switch(i){case"error":return"close";case"success":return"done";case"warning":return"warning";default:return""}}()}),children:Object(v.jsx)(p.a,{variant:"caption",children:"string"==typeof a?a.split("<br/>").map((function(e){if(e)return Object(v.jsxs)(v.Fragment,{children:[" ",e," ",Object(v.jsx)("br",{})," "]})})):a})})})}var I={pageLocation:i.INITAL,setPageLocation:function(){},openLoadingDialog:!1,setOpenLoadingDialog:function(){},simulationResult:null,setSimulationResult:function(){},isManouver:!1,setIsManouver:function(){},alertProps:y,showError:function(){},showSuccess:function(){},showWarning:function(){}},A=r.a.createContext(I);function w(e){var t=e.pageLocation,n=e.pageLocationList,i=e.children,a=r.a.useContext(A);return Object(v.jsxs)(v.Fragment,{children:[!!t&&a.pageLocation===t&&i,!!n&&n.includes(a.pageLocation)&&i]})}var C=n(269),E=n(270);function T(){var e=r.a.useContext(A);return Object(v.jsxs)(C.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:2,style:{minHeight:"100vh"},children:[Object(v.jsx)(C.a,{item:!0,xs:12,children:Object(v.jsx)("code",{children:"Desenvolvimento de um Simulador de Din\xe2mica Orbital Para Fins Educacionais"})}),Object(v.jsx)(C.a,{item:!0,xs:12}),Object(v.jsx)(C.a,{item:!0,xs:12,children:Object(v.jsx)("code",{children:"Aluno: Alberto Romanhol Moreira"})}),Object(v.jsx)(C.a,{item:!0,xs:12,children:Object(v.jsx)("code",{children:"Orientadora: Maria Cec\xedlia Pereira de Paula"})}),Object(v.jsx)(C.a,{item:!0,xs:12}),Object(v.jsx)(C.a,{item:!0,xs:12,children:Object(v.jsx)("code",{children:"Universidade Federal de Minas Gerais"})}),Object(v.jsx)(C.a,{item:!0,xs:12}),Object(v.jsx)(C.a,{item:!0,xs:12}),Object(v.jsx)(C.a,{item:!0,xs:12,children:Object(v.jsx)(E.a,{fullWidth:!0,variant:"outlined",color:"primary",size:"large",style:{textTransform:"lowercase",height:"10vh"},onClick:function(){e.setPageLocation(i.INITAL)},children:Object(v.jsx)("code",{children:"tela inicial"})})})]})}function R(){var e=r.a.useContext(A),t=function(t){var n=t.label,i=t.pageLocation,a=t.disabled,r=void 0!==a&&a;return Object(v.jsx)(C.a,{item:!0,xs:6,children:Object(v.jsx)(E.a,{disabled:r,fullWidth:!0,variant:"outlined",color:"primary",size:"large",style:{height:"15vh"},onClick:function(){e.setPageLocation(i)},children:Object(v.jsx)("code",{children:n})})})},n=function(){return Object(v.jsxs)(C.a,{item:!0,xs:12,container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:3,children:[Object(v.jsx)(C.a,{item:!0,xs:12,children:Object(v.jsx)(p.a,{variant:"h4",children:Object(v.jsx)("code",{children:"Simulador de din\xe2mica orbital"})})}),Object(v.jsx)(C.a,{item:!0,xs:12,style:{width:"60%",textAlign:"center"},children:Object(v.jsx)(p.a,{variant:"body1",children:Object(v.jsxs)("code",{children:["Ol\xe1! Este simulador foi desenvolvido com o intuito de utilizar a Lei da Gravita\xe7\xe3o Universal para simular o movimento de corpos celestes. Podem ser realizadas, tanto simula\xe7\xf5es do Sistema Solar (com os planetas desejados), ou bem como, a simula\xe7\xf5es de manobras orbitais (em breve). ",Object(v.jsx)("br",{})," Vamos nessa?"]})})})]})};return Object(v.jsxs)(C.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:5,style:{minHeight:"100vh"},children:[Object(v.jsx)(n,{}),Object(v.jsx)(C.a,{item:!0,xs:12,children:Object(v.jsx)(p.a,{variant:"h5",children:Object(v.jsx)("code",{children:"Por qual simula\xe7\xe3o deseja iniciar?"})})}),Object(v.jsx)(C.a,{item:!0,xs:12,children:Object(v.jsxs)(C.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:3,children:[Object(v.jsx)(t,{label:"sistema solar",pageLocation:i.SOLAR_SYSTEM}),Object(v.jsx)(t,{label:"manobras orbitais",pageLocation:i.MANOUVERS})]})})]})}var M=n(281),N=n(15),P=n(261),z=n(271),H=n(260),F=n(262),k=n(130),U=n.n(k),W=n(131),D=n.n(W);function B(e){var t=e.planets,n=e.planetsSelected,i=e.setPlanetsSelected,c=Object(v.jsx)(U.a,{fontSize:"small"}),s=Object(v.jsx)(D.a,{fontSize:"small"});r.a.useEffect((function(){t.length>0&&o()}),[t]);var o=function(){var e=Object(N.a)(n);if(-1===e.findIndex((function(e){return"Sun"===e.name}))){var a=t.find((function(e){return"Sun"===e.name}));a&&e.push(a),i(e)}};return Object(v.jsx)(C.a,{item:!0,xs:12,style:{width:"100%"},children:Object(v.jsx)(F.a,{multiple:!0,fullWidth:!0,disableCloseOnSelect:!0,options:t,value:n,onChange:function(e,n){var a=t.find((function(e){return"Sun"===e.name}));i([].concat(a?[a]:[],Object(N.a)(n.filter((function(e){return"Sun"!==e.name})))))},getOptionLabel:function(e){return e.namePTBR},renderOption:function(e,t,n){var i=n.selected;return Object(v.jsxs)("li",Object(b.a)(Object(b.a)({},e),{},{children:[Object(v.jsx)(P.a,{icon:c,checkedIcon:s,style:{marginRight:8},checked:i,disabled:"Sun"===t.name}),t.namePTBR]}))},renderTags:function(e,t){return e.map((function(e,n){return Object(a.createElement)(z.a,Object(b.a)(Object(b.a)({},t({index:n})),{},{key:"".concat(e.name,"-").concat(n),label:e.namePTBR,disabled:"Sun"===e.name}))}))},noOptionsText:"Nenhum corpo celeste encontrado!",renderInput:function(e){return Object(v.jsx)(H.a,Object(b.a)(Object(b.a)({},e),{},{label:"Corpos Celestes"}))}})})}var _=n(56),V=n.n(_),Y=function(e){return{create:function(t){return V.a.post("/".concat(e),t)},update:function(t){return V.a.put("/".concat(e,"/").concat(t.id),t)},getAll:function(){return V.a.get("/".concat(e))},get:function(t){return V.a.get("/".concat(e,"/").concat(t))},remove:function(t){return V.a.delete("/".concat(e,"/").concat(t))}}},q=function(){return Y("planets")};function G(){return Object(v.jsxs)(C.a,{item:!0,xs:12,container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:3,children:[Object(v.jsx)(C.a,{item:!0,xs:12,children:Object(v.jsx)(p.a,{variant:"h4",children:Object(v.jsx)("code",{children:"Simulador do sistema solar"})})}),Object(v.jsx)(C.a,{item:!0,xs:12,style:{width:"60%",textAlign:"center"},children:Object(v.jsx)(p.a,{variant:"body1",children:Object(v.jsx)("code",{children:"Selecione quais planetas deseja simular, sendo o corpo de ref\xearencia o sol. Tamb\xe9m \xe9 poss\xedvel configurar a data de in\xedcio da simula\xe7\xe3o e por quanto tempo ser\xe1 realizado a simula\xe7\xe3o."})})})]})}var X=n(133),J=n(258),Z=n(257),K=n(140);function Q(e){var t=e.label,n=e.dateTime,i=e.setDateTime;return Object(v.jsx)(X.a,{dateAdapter:Z.a,locale:K.a,children:Object(v.jsx)(J.a,{label:t,value:n,onChange:function(e){i(e)},disableFuture:!0,renderInput:function(e){return Object(v.jsx)(H.a,Object(b.a)({fullWidth:!0},e))}})})}function $(e){var t=e.dateValue,n=e.setDateValue;return Object(v.jsx)(C.a,{item:!0,xs:12,md:4,style:{width:"100%"},children:Object(v.jsx)(Q,{label:"Data de In\xedcio",dateTime:t,setDateTime:n})})}function ee(e){var t=e.label,n=e.simulationNumber,i=e.setSimulationNumber;return Object(v.jsx)(H.a,{label:t,type:"number",InputLabelProps:{shrink:!0},fullWidth:!0,value:n,onChange:function(e){i(Number(e.target.value))},variant:"outlined"})}var te=function(){return Y("simulations")};function ne(){var e=r.a.useContext(A),t=r.a.useState(!1),n=Object(x.a)(t,2),a=n[0],c=n[1],s=r.a.useState([]),o=Object(x.a)(s,2),l=o[0],j=o[1],d=r.a.useState([]),u=Object(x.a)(d,2),b=u[0],m=u[1],h=r.a.useState(new Date),O=Object(x.a)(h,2),f=O[0],g=O[1],p=r.a.useState(365),y=Object(x.a)(p,2),S=y[0],L=y[1],I=r.a.useState(1e4),w=Object(x.a)(I,2),T=w[0],R=w[1];r.a.useEffect((function(){0===l.length&&N()}),[]);var N=function(){c(!0),q().getAll().then((function(e){e.data&&j(e.data)})).catch((function(t){e.setPageLocation(i.INITAL),e.showError(t,"N\xe3o foi poss\xedvel carregar os planetas")})).finally((function(){c(!1)}))},P=function(){var t={planets:b,initialDate:f,simulationDays:S,simulationSteps:T};e.setOpenLoadingDialog(!0),te().create(t).then((function(t){e.setSimulationResult(t.data),e.setPageLocation(i.SIMULATION_RESULT)})).catch((function(t){e.showError(t,"N\xe3o foi poss\xedvel realizar simula\xe7\xe3o")})).finally((function(){e.setOpenLoadingDialog(!1)}))},z=function(){return Object(v.jsx)(C.a,{item:!0,xs:12,children:Object(v.jsx)(E.a,{fullWidth:!0,size:"large",variant:"outlined",color:"primary",onClick:P,style:{height:"7vh"},children:"SIMULAR"})})};return Object(v.jsxs)(C.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:5,style:{minHeight:"100vh"},children:[Object(v.jsx)(G,{}),a&&Object(v.jsx)(C.a,{item:!0,xs:12,style:{width:"50%"},children:Object(v.jsx)(M.a,{color:"primary"})}),!a&&Object(v.jsx)(C.a,{item:!0,xs:12,style:{width:"50%"},children:Object(v.jsxs)(C.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:2,children:[Object(v.jsx)(B,{planets:l,planetsSelected:b,setPlanetsSelected:m}),Object(v.jsx)($,{dateValue:f,setDateValue:g}),Object(v.jsx)(C.a,{item:!0,xs:12,md:4,style:{width:"100%"},children:Object(v.jsx)(ee,{label:"Dias de Simula\xe7\xe3o",simulationNumber:S,setSimulationNumber:L})}),Object(v.jsx)(C.a,{item:!0,xs:12,md:4,style:{width:"100%"},children:Object(v.jsx)(ee,{label:"Itera\xe7\xf5es",simulationNumber:T,setSimulationNumber:R})}),Object(v.jsx)(z,{})]})})]})}var ie=n(135),ae=n.n(ie),re=n(274),ce=n(282);function se(e){var t=e.tridimensionalPlot,n=e.setTridimensionalPlot;return Object(v.jsx)(re.a,{style:{padding:u.spacing(3),width:"100%",marginRight:u.spacing(3)},children:Object(v.jsxs)(C.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:1,children:[Object(v.jsx)(C.a,{item:!0,xs:12,children:Object(v.jsx)(p.a,{children:Object(v.jsx)("code",{children:"Configura\xe7\xf5es"})})}),Object(v.jsx)(C.a,{item:!0,xs:12,style:{width:"100%"},children:Object(v.jsx)(ce.a,{})}),Object(v.jsx)(C.a,{item:!0,xs:12,children:Object(v.jsx)(p.a,{variant:"subtitle2",children:Object(v.jsx)("code",{children:"Tipo de gr\xe1fico"})})}),Object(v.jsx)(C.a,{item:!0,xs:12,children:Object(v.jsxs)(C.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:2,children:[Object(v.jsx)(C.a,{item:!0,xs:6,children:Object(v.jsx)(E.a,{variant:t?"contained":"outlined",color:"primary",onClick:function(){return n(!0)},style:{minWidth:"36px"},children:Object(v.jsx)(p.a,{children:Object(v.jsx)("code",{children:"3D"})})})}),Object(v.jsx)(C.a,{item:!0,xs:6,children:Object(v.jsx)(E.a,{variant:t?"outlined":"contained",color:"primary",onClick:function(){return n(!1)},style:{minWidth:"36px"},children:Object(v.jsx)(p.a,{children:Object(v.jsx)("code",{children:"2D"})})})})]})}),Object(v.jsx)(C.a,{item:!0,xs:12,style:{width:"100%"},children:Object(v.jsx)(ce.a,{})}),Object(v.jsx)(C.a,{item:!0,xs:12,children:Object(v.jsx)(E.a,{variant:"outlined",color:"primary",disabled:!0,onClick:function(){return n(!0)},children:Object(v.jsx)(p.a,{variant:"overline",children:Object(v.jsx)("code",{children:"EXPORTAR CSV"})})})})]})})}function oe(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function le(e){var t=e.planets,n=e.isManouver,i=function(){var e=Object(a.useState)(oe()),t=Object(x.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){function e(){i(oe())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}(),c=i.height,s=i.width,o=r.a.useState([]),l=Object(x.a)(o,2),j=l[0],d=l[1],u=r.a.useState(!1),b=Object(x.a)(u,2),m=b[0],h=b[1],O=r.a.useState(0),f=Object(x.a)(O,2),g=f[0],p=f[1];r.a.useEffect((function(){y()}),[t,m]);var y=function(){S();var e=t.map((function(e){return L(e)}));if(!m){for(var i=n?6378:696340,a=[],r=[],c=0;c<=360;c++){var s=i*Math.sin(Math.PI*c/180),o=i*Math.cos(Math.PI*c/180);a.push(s),r.push(o)}var l={x:a,y:r,mode:"lines",name:n?"Terra":"Sol",fill:"toself"};e[0]=l}d(e)},S=function(){var e=t.reduce((function(e,t){return t.id>e?t.id:e}),0),n=t.findIndex((function(t){return t.id===e}));if(n&&n>0){var i=t[n].trajectory.x.reduce((function(e,t){return t>e?t:e}),0),a=t[n].trajectory.y.reduce((function(e,t){return t>e?t:e}),0),r=Math.abs(Math.max(i,a)),c=t[n].trajectory.x.reduce((function(e,t){return t<e?t:e}),i),s=t[n].trajectory.y.reduce((function(e,t){return t<e?t:e}),a),o=Math.abs(Math.min(c,s));p(1.1*Math.max(r,o))}},L=function(e){var t={x:e.trajectory.x,y:e.trajectory.y,name:e.namePTBR,mode:"lines"};return e.namePTBR.includes("Transfer\xeancia")&&(t.line={dash:"dot"}),m&&(t.z=e.trajectory.z,t.type="scatter3d"),t},I=4===t.length?"Manobra de Hohmann":"Manobra biel\xedptica";return Object(v.jsxs)(C.a,{item:!0,xs:12,container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:2,style:{width:"100%"},children:[!n&&Object(v.jsx)(C.a,{item:!0,xs:12,sm:2,children:Object(v.jsx)(se,{tridimensionalPlot:m,setTridimensionalPlot:h})}),Object(v.jsx)(C.a,{item:!0,xs:12,sm:10,children:Object(v.jsx)(ae.a,{data:j,layout:{title:n?I:"Sistema Solar",autosize:!1,width:n?.6*s:.7*s,height:n?.7*c:.8*c,hovermode:"closest",dragmode:"pan",scene:{aspectmode:"manual",aspectratio:{x:2,y:2,z:.1},camera:{center:{x:0,y:0,z:-.3}},xaxis:{title:"X [km]",range:[-g,g]},yaxis:{title:"Y [km]",range:[-g,g]},zaxis:{nticks:1,title:"Z [km]"}},xaxis:{scaleratio:1,title:{text:"X [km]"}},yaxis:{scaleratio:1,scaleanchor:"x",title:{text:"Y [km]"}}},style:{margin:"auto",display:"flex",flexDirection:"column",alignItems:"center"},config:{displaylogo:!1}})})]})}function je(e){var t=e.deltaV;return Object(v.jsxs)(C.a,{item:!0,xs:6,container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:2,children:[Object(v.jsx)(C.a,{item:!0,xs:12,children:Object(v.jsx)(p.a,{variant:"h5",children:Object(v.jsx)("code",{children:"Velocidades de manobra"})})}),Object(v.jsx)(C.a,{item:!0,xs:12,style:{width:"60%",textAlign:"center"},children:Object.keys(t).map((function(e,n){return Object(v.jsx)(p.a,{variant:"body1",children:Object(v.jsx)("code",{children:"".concat(e,": ").concat(t[e].toFixed(3)," km/s")})},"".concat(e,"-").concat(n))}))})]})}function de(){var e,t,n,i=r.a.useContext(A),a=i.simulationResult&&(null===(e=i.simulationResult)||void 0===e?void 0:e.planets.length)>0;return console.log(i.simulationResult),Object(v.jsx)(C.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:4,style:{margin:u.spacing(1),width:"100%",minHeight:"95vh"},children:a?i.simulationResult&&(null===(t=i.simulationResult)||void 0===t?void 0:t.planets.length)>0&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(C.a,{item:!0,xs:12,children:Object(v.jsx)(le,{planets:null===(n=i.simulationResult)||void 0===n?void 0:n.planets,isManouver:i.isManouver})}),i.isManouver&&i.simulationResult.deltaV&&Object(v.jsx)(je,{deltaV:i.simulationResult.deltaV})]}):Object(v.jsx)(p.a,{variant:"h5",color:"textPrimary",children:"Nenhum resultado encontrado."})})}var ue=n(272),be=n(275),me=n.p+"static/media/SolarSystem.4a6c8bba.svg",he=n(136),xe=n.n(he);function Oe(e){var t=e.setOpened,n=r.a.useContext(A);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(C.a,{item:!0,xs:12,style:{textAlign:"end",margin:u.spacing(1)},children:Object(v.jsx)(be.a,{style:{borderRadius:"16px"},onClick:function(){return t(!1)},children:Object(v.jsx)(xe.a,{})})}),Object(v.jsx)(C.a,{item:!0,xs:12,style:{textAlign:"center",marginBottom:u.spacing(2)},children:Object(v.jsx)(be.a,{style:{borderRadius:"16px"},onClick:function(){return n.setPageLocation(i.INITAL)},children:Object(v.jsx)("img",{height:"44px",src:me,alt:"Solar System"})})})]})}var fe=n(279);function ge(e){var t=e.children;return Object(v.jsx)(fe.a,{component:"nav","aria-labelledby":"nested-list-subheader",style:{width:"100%",maxWidth:360,padding:0},children:t})}var pe=n(266);function ve(e){var t=e.menuTitle,n=e.pageLocation,i=e.childPages,a=e.disabled,c=void 0!==a&&a,s=r.a.useContext(A),o=r.a.useState(""),l=Object(x.a)(o,2),j=l[0],d=l[1];r.a.useEffect((function(){b()}),[s.pageLocation]);var b=function(e){s.pageLocation===n||i&&i.includes(s.pageLocation)?d(u.palette.primary.main):d(e||"")};return Object(v.jsx)("div",{style:{backgroundColor:j},onClick:function(){s.setPageLocation(n)},onMouseOver:function(){b(u.palette.primary.light)},onMouseLeave:function(){b()},children:Object(v.jsx)(pe.a,{button:!0,disabled:c,style:{height:u.spacing(6)},children:Object(v.jsx)(C.a,{container:!0,direction:"row",justifyItems:"flex-start",alignItems:"center",children:Object(v.jsx)(C.a,{item:!0,xs:12,children:Object(v.jsx)(p.a,{variant:"subtitle1",style:{verticalAlign:"middle"},children:t})})})})})}function ye(){return Object(v.jsx)(C.a,{container:!0,direction:"column",alignItems:"center",style:{maxHeight:"45vh",overflowY:"auto"},children:Object(v.jsx)(ge,{children:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(ve,{pageLocation:i.SOLAR_SYSTEM,menuTitle:"Sistema Solar"}),Object(v.jsx)(ve,{pageLocation:i.MANOUVERS,childPages:[i.HOHMANN,i.BI_ELLIPTIC],menuTitle:"Manobras"})]})})})}function Se(){return Object(v.jsx)(C.a,{container:!0,direction:"column",justifyItems:"center",alignItems:"center",children:Object(v.jsx)(ge,{children:Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(ve,{pageLocation:i.ABOUT,menuTitle:"Sobre"})})})})}function Le(e){var t=e.opened,n=e.setOpened;return Object(v.jsx)(ue.a,{anchor:"left",variant:"persistent",PaperProps:{elevation:3},open:t,children:Object(v.jsxs)(C.a,{container:!0,direction:"column",justifyContent:"space-between",alignItems:"stretch",style:{height:"100vh",overflow:"hidden",width:u.spacing(25)},children:[Object(v.jsxs)(C.a,{item:!0,children:[Object(v.jsx)(Oe,{setOpened:n}),Object(v.jsx)(ye,{}),Object(v.jsx)(ce.a,{})]}),Object(v.jsx)(C.a,{item:!0,children:Object(v.jsx)(Se,{})})]})})}var Ie=n(137),Ae=n.n(Ie),we=n(280),Ce=n(283);function Ee(e){var t=e.open;return Object(v.jsx)(we.a,{"aria-labelledby":"loading-dialog-title",open:t,PaperProps:{style:{backgroundColor:"transparent",background:"transparent",boxShadow:"none"}},children:Object(v.jsx)(Ce.a,{size:"124px",style:{margin:u.spacing(4),textAlign:"center",color:u.palette.primary.light}})})}function Te(){return Object(v.jsxs)(C.a,{item:!0,xs:12,container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:2,children:[Object(v.jsx)(C.a,{item:!0,xs:12,children:Object(v.jsx)(p.a,{variant:"h4",children:Object(v.jsx)("code",{children:"Manobra de Biel\xedptica"})})}),Object(v.jsx)(C.a,{item:!0,xs:12,style:{width:"60%",textAlign:"center"},children:Object(v.jsx)(p.a,{variant:"body1",children:Object(v.jsx)("code",{children:"Defina a orbita inicial e final para manobra em torno da Terra, bem como o raio do apogeu da primeira el\xedpse de transfer\xeancia"})})})]})}var Re=function(){return Y("manouvers/hohmann")},Me=function(){return Y("manouvers/bi-elliptic")};function Ne(e){var t=e.excentricity,n=e.setExcentricity,i=e.majorSemiAxis,a=e.setMajorSemiAxis;return Object(v.jsxs)(C.a,{item:!0,xs:12,container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:2,children:[Object(v.jsx)(C.a,{item:!0,xs:12,md:6,style:{width:"100%"},children:Object(v.jsx)(ee,{label:"Excentricidade",simulationNumber:t,setSimulationNumber:n})}),Object(v.jsx)(C.a,{item:!0,xs:12,md:6,style:{width:"100%"},children:Object(v.jsx)(ee,{label:"Semi-eixo maior [km]",simulationNumber:i,setSimulationNumber:a})})]})}function Pe(e){var t=e.orbit,n=e.setOrbit,i=e.label;return Object(v.jsxs)(C.a,{item:!0,xs:12,container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:2,children:[Object(v.jsx)(C.a,{item:!0,xs:12,children:Object(v.jsx)(p.a,{variant:"h6",children:Object(v.jsx)("code",{children:i})})}),Object(v.jsx)(Ne,{excentricity:t.excentricity,setExcentricity:function(e){return n(Object(b.a)(Object(b.a)({},t),{},{excentricity:e}))},majorSemiAxis:t.majorSemiAxis,setMajorSemiAxis:function(e){return n(Object(b.a)(Object(b.a)({},t),{},{majorSemiAxis:e}))}})]})}function ze(){var e=r.a.useContext(A),t=r.a.useState({excentricity:0,majorSemiAxis:7e3}),n=Object(x.a)(t,2),a=n[0],c=n[1],s=r.a.useState({excentricity:0,majorSemiAxis:105e3}),o=Object(x.a)(s,2),l=o[0],j=o[1],d=r.a.useState(21e4),u=Object(x.a)(d,2),b=u[0],m=u[1],h=function(){var t={initialOrbit:a,finalOrbit:l,firstBiEllipseApogge:b};e.setOpenLoadingDialog(!0),Me().create(t).then((function(t){e.setSimulationResult(t.data),e.setIsManouver(!0),e.setPageLocation(i.SIMULATION_RESULT)})).catch((function(t){e.showError(t,"N\xe3o foi poss\xedvel realizar simula\xe7\xe3o")})).finally((function(){e.setOpenLoadingDialog(!1)}))},O=function(){return Object(v.jsxs)(C.a,{item:!0,xs:12,children:[Object(v.jsx)(E.a,{fullWidth:!0,size:"large",variant:"outlined",color:"primary",onClick:h,style:{height:"7vh"},children:"SIMULAR"}),Object(v.jsx)(p.a,{variant:"overline",style:{textAlign:"center"},children:Object(v.jsx)("code",{children:"*TODO: Visualizar \xf3rbita antes de simular"})})]})};return Object(v.jsxs)(C.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:5,style:{minHeight:"100vh"},children:[Object(v.jsx)(Te,{}),Object(v.jsx)(C.a,{item:!0,xs:12,style:{width:"50%"},children:Object(v.jsxs)(C.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:3,children:[Object(v.jsx)(Pe,{orbit:a,setOrbit:c,label:"Orbita Inicial"}),Object(v.jsx)(Pe,{orbit:l,setOrbit:j,label:"Orbita Final"}),Object(v.jsx)(C.a,{item:!0,xs:12,style:{width:"100%"},children:Object(v.jsx)(ee,{label:"Apogeu da primeira el\xedpse de transfer\xeancia",simulationNumber:b,setSimulationNumber:m})}),Object(v.jsx)(O,{})]})})]})}function He(){return Object(v.jsxs)(C.a,{item:!0,xs:12,container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:2,children:[Object(v.jsx)(C.a,{item:!0,xs:12,children:Object(v.jsx)(p.a,{variant:"h4",children:Object(v.jsx)("code",{children:"Manobra de Hohmann"})})}),Object(v.jsx)(C.a,{item:!0,xs:12,style:{width:"60%",textAlign:"center"},children:Object(v.jsx)(p.a,{variant:"body1",children:Object(v.jsx)("code",{children:"Defina a orbita inicial e final para manobra em torno da Terra."})})})]})}function Fe(){var e=r.a.useContext(A),t=r.a.useState({excentricity:.02279,majorSemiAxis:7018}),n=Object(x.a)(t,2),a=n[0],c=n[1],s=r.a.useState({excentricity:0,majorSemiAxis:22378}),o=Object(x.a)(s,2),l=o[0],j=o[1],d=function(){var t={initialOrbit:a,finalOrbit:l,firstBiEllipseApogge:0};e.setOpenLoadingDialog(!0),Re().create(t).then((function(t){e.setSimulationResult(t.data),e.setIsManouver(!0),e.setPageLocation(i.SIMULATION_RESULT)})).catch((function(t){e.showError(t,"N\xe3o foi poss\xedvel realizar simula\xe7\xe3o")})).finally((function(){e.setOpenLoadingDialog(!1)}))},u=function(){return Object(v.jsxs)(C.a,{item:!0,xs:12,children:[Object(v.jsx)(E.a,{fullWidth:!0,size:"large",variant:"outlined",color:"primary",onClick:d,style:{height:"7vh"},children:"SIMULAR"}),Object(v.jsx)(p.a,{variant:"overline",style:{textAlign:"center"},children:Object(v.jsx)("code",{children:"*TODO: Visualizar \xf3rbita antes de simular"})})]})};return Object(v.jsxs)(C.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:5,style:{minHeight:"100vh"},children:[Object(v.jsx)(He,{}),Object(v.jsx)(C.a,{item:!0,xs:12,style:{width:"50%"},children:Object(v.jsxs)(C.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:3,children:[Object(v.jsx)(Pe,{orbit:a,setOrbit:c,label:"Orbita Inicial"}),Object(v.jsx)(Pe,{orbit:l,setOrbit:j,label:"Orbita Final"}),Object(v.jsx)(u,{})]})})]})}function ke(){var e=a.useContext(A),t=e.pageLocation===i.HOHMANN,n=e.pageLocation===i.BI_ELLIPTIC,r=function(){return Object(v.jsxs)(C.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:5,style:{minHeight:"100vh"},children:[Object(v.jsx)(C.a,{item:!0,xs:12,children:Object(v.jsx)("code",{children:"Selecione a manobra que deseja realizar :)"})}),Object(v.jsx)(C.a,{item:!0,xs:12,style:{width:"25%"},children:Object(v.jsx)(E.a,{fullWidth:!0,variant:"outlined",color:"primary",size:"large",style:{height:"15vh"},onClick:function(){return e.setPageLocation(i.HOHMANN)},children:Object(v.jsx)("code",{children:"Hohmann"})})}),Object(v.jsx)(C.a,{item:!0,xs:12,style:{width:"25%"},children:Object(v.jsx)(E.a,{fullWidth:!0,variant:"outlined",color:"primary",size:"large",style:{height:"15vh"},onClick:function(){return e.setPageLocation(i.BI_ELLIPTIC)},children:Object(v.jsx)("code",{children:"Bi-Elliptic"})})})]})};return Object(v.jsxs)(v.Fragment,{children:[!t&&!n&&Object(v.jsx)(r,{}),t&&Object(v.jsx)(Fe,{}),n&&Object(v.jsx)(ze,{})]})}function Ue(){var e=r.a.useState(!0),t=Object(x.a)(e,2),n=t[0],a=t[1],c=r.a.useState(!1),s=Object(x.a)(c,2),o=s[0],l=s[1],j=r.a.useState(i.INITAL),d=Object(x.a)(j,2),b=d[0],m=d[1],h=r.a.useState(null),O=Object(x.a)(h,2),f=O[0],g=O[1],p=r.a.useState(!1),y=Object(x.a)(p,2),I=y[0],C=y[1],E=S(),M=E.alertProps,N=E.showError,P=E.showSuccess,z=E.showWarning;return r.a.useEffect((function(){n&&b!==i.SIMULATION_RESULT?C(!1):(n&&b===i.SIMULATION_RESULT||!n&&b!==i.SIMULATION_RESULT)&&a(b!==i.SIMULATION_RESULT)}),[b]),Object(v.jsx)("div",{style:{flexGrow:1,overflow:"hidden"},children:Object(v.jsxs)(A.Provider,{value:{pageLocation:b,setPageLocation:m,simulationResult:f,setSimulationResult:g,isManouver:I,setIsManouver:C,openLoadingDialog:o,setOpenLoadingDialog:l,alertProps:M,showError:N,showSuccess:P,showWarning:z},children:[!n&&Object(v.jsx)(be.a,{color:"inherit","aria-label":"open drawer",edge:"end",style:{margin:u.spacing(1),position:"fixed"},onClick:function(){a(!0)},children:Object(v.jsx)(Ae.a,{})}),Object(v.jsx)(Le,{opened:n,setOpened:a}),Object(v.jsxs)("div",{style:{marginLeft:n?u.spacing(25):0},children:[Object(v.jsx)(w,{pageLocation:i.INITAL,children:Object(v.jsx)(R,{})}),Object(v.jsx)(w,{pageLocation:i.SOLAR_SYSTEM,children:Object(v.jsx)(ne,{})}),Object(v.jsx)(w,{pageLocationList:[i.MANOUVERS,i.HOHMANN,i.BI_ELLIPTIC],children:Object(v.jsx)(ke,{})}),Object(v.jsx)(w,{pageLocation:i.SIMULATION_RESULT,children:Object(v.jsx)(de,{})}),Object(v.jsx)(w,{pageLocation:i.ABOUT,children:Object(v.jsx)(T,{})})]}),Object(v.jsx)(Ee,{open:o}),Object(v.jsx)(L,{message:M.message,onClose:M.onClose,open:M.open,severity:M.severity})]})})}var We=["children"];function De(){function e(e){var t=e.children,n=Object(m.a)(e,We);return Object(v.jsx)(h.a,Object(b.a)(Object(b.a)({},n),{},{render:function(){return t}}))}return Object(v.jsx)(o.a,{children:Object(v.jsxs)(h.c,{children:[Object(v.jsx)(e,{exact:!0,path:"/",children:Object(v.jsx)(Ue,{})}),Object(v.jsx)(e,{path:"*",children:Object(v.jsx)(Ue,{})})]})})}function Be(){return null}function _e(){return Object(v.jsxs)(l.a,{theme:u,children:[Object(v.jsx)(j.a,{}),Object(v.jsx)(Be,{}),Object(v.jsx)(De,{})]})}V.a.defaults.baseURL="https://tcc-mecorb-api.azurewebsites.net/",s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(o.a,{children:Object(v.jsx)(_e,{})})}),document.getElementById("root"))}},[[196,1,2]]]);
//# sourceMappingURL=main.18c9df7a.chunk.js.map