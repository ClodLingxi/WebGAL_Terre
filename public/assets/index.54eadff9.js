import{f as le,r,a as A,j as n,b as e,G as re,A as Q,L as ue,F as X,N as me,E as he,P as ge,D as pe,V as fe,c as M,d as j,e as U,g as R,R as Se,U as _e,h as ve,i as V,C as Y,k as Z,S as ee,l as Ne,m as xe,n as Ce,o as te,p as L,q as ne,s as Ee,t as Be,u as se,v as we,w as Fe}from"./vendor.3f6af7d1.js";const Ae=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))g(d);new MutationObserver(d=>{for(const o of d)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&g(h)}).observe(document,{childList:!0,subtree:!0});function l(d){const o={};return d.integrity&&(o.integrity=d.integrity),d.referrerpolicy&&(o.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?o.credentials="include":d.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function g(d){if(d.ep)return;d.ep=!0;const o=l(d);fetch(d.href,o)}};Ae();const ke="_nav_11k4b_2",De="_title_11k4b_12",Ie="_subTitle_11k4b_20",be="_main_11k4b_29",Pe="_gameList_11k4b_33",ye="_singleGameEntryButton_11k4b_39",Le="_buttonIcon_11k4b_54",Te="_addIcon_11k4b_58",Ge="_createPanel_11k4b_65",Oe="_createPanelTitle_11k4b_75",ze="_createPanelInput_11k4b_81",$e="_createButton_11k4b_87";var k={nav:ke,title:De,subTitle:Ie,main:be,gameList:Pe,singleGameEntryButton:ye,buttonIcon:Le,addIcon:Te,createPanel:Ge,createPanelTitle:Oe,createPanelInput:ze,createButton:$e};const c=new le;c.set("updateEditor",!0);const ie={editorTag:"\u6E38\u620F\u914D\u7F6E",domain:"",gameList:[],currentEditGame:"",currentGameConfig:{},currentDir:"",currentDirContent:[],currentEditScene:"",currentOpendSceneEdit:[],currentSceneSentenceList:[]},s=JSON.parse(JSON.stringify(ie)),Me=()=>{const[t,i]=r.exports.useState(!0),[l,g]=r.exports.useState(!1);r.exports.useEffect(()=>{c.set("refManagement",t),c.connect("refManagement",()=>{i(c.get("refManagement"))},"refManagementFunc"),d()},[]);const d=()=>{A.get(s.domain+"/api/manageGame/gameList").then(f=>{s.gameList=f.data,c.set("refManagement",!c.get("refManagement"))}).catch(f=>{console.log(f)})};let o=[];for(const f of s.gameList){const p=n("div",{className:k.singleGameEntryButton,onClick:()=>{for(const _ in s)s[_]=ie[_];s.currentEditGame=f,c.set("isManagement",!1)},children:[e(re,{theme:"outline",size:"24",fill:"#333",className:k.buttonIcon}),f]},f);o.push(p)}const h=f=>{const p=`${s.domain}/api/manageGame/createGame/${f}`;A.get(p).then(_=>{g(!1),d()})};return n("div",{children:[e("header",{children:e("nav",{children:e("div",{className:k.nav,children:e("div",{className:k.title,children:"WebGAL ORIGINE"})})})}),n("main",{className:k.main,children:[n("div",{className:k.subTitle,children:["\u6E38\u620F\u5217\u8868",n("span",{onClick:()=>g(!l),className:k.addIcon,children:[e(Q,{theme:"outline",size:"18",fill:"#8E354A"})," \u65B0\u5EFA\u6E38\u620F"]}),l&&n("div",{className:k.createPanel,children:[e("div",{className:k.createPanelTitle,children:"\u521B\u5EFA\u6E38\u620F"}),n("div",{children:["\u6E38\u620F\u540D\u79F0\uFF1A",e("input",{id:"createInput",className:k.createPanelInput})]}),e("div",{style:{textAlign:"center"},children:e("div",{onClick:()=>h(document.getElementById("createInput").value),className:k.createButton,children:"\u521B\u5EFA"})})]})]}),e("div",{className:k.gameList,children:o})]})]})},je="_nav_1x6hc_1",Ue="_title_1x6hc_11",Re="_titleIcon_1x6hc_19";var q={nav:je,title:Ue,titleIcon:Re};const Ve=()=>n("div",{className:q.nav,children:[e(ue,{theme:"filled",size:"30",fill:"#333",className:q.titleIcon,onClick:()=>{c.set("isManagement",!0)}}),e("div",{className:q.title,children:"WebGAL ORIGINE"})]}),qe="_aside_m7wa8_1",Je="_option_m7wa8_9",We="_optionMarker_m7wa8_18",Ke="_optionMarkerOff_m7wa8_26",He="_chooseItem_m7wa8_34",Qe="_chooseTitle_m7wa8_45",Xe="_chooseDescription_m7wa8_50",Ye="_tagButton_m7wa8_55",Ze="_tagButtonOn_m7wa8_63",et="_sideBarContent_m7wa8_71";var b={aside:qe,option:Je,optionMarker:We,optionMarkerOff:Ke,chooseItem:He,chooseTitle:Qe,chooseDescription:Xe,tagButton:Ye,tagButtonOn:Ze,sideBarContent:et};const tt="_title_154pd_1",nt="_previewGameButton_154pd_9",st="_gameNameInput_154pd_19";var T={title:tt,previewGameButton:nt,gameNameInput:st};const it="_choosed_jpcmf_1",ct="_chooseBox_jpcmf_7",at="_chooseIcon_jpcmf_11",ot="_fileList_jpcmf_26",dt="_singleFile_jpcmf_38",lt="_fileIcon_jpcmf_49";var P={choosed:it,chooseBox:ct,chooseIcon:at,fileList:ot,singleFile:dt,fileIcon:lt};const D=t=>{const[i,l]=r.exports.useState(!1),[g,d]=r.exports.useState(t.dir),[o,h]=r.exports.useState([]),[f,p]=r.exports.useState(""),_=u=>{const E={dir:`/${s.currentEditGame}/game/${u}`};A.post(`${s.domain}/api/editGame/getAssets/`,E).then(C=>{h(C.data)}).catch(C=>{console.log(C)})},N=u=>{let m=u.split("/");u="";let E=0;for(const C of m)C!==t.dir&&(E!==0&&(u=u+"/"),E++,u=u+C);return u},S=u=>{let m=g+"/"+u;m=N(m),t.set(m),t.hasOwnProperty("setShow")&&t.setShow(m)};r.exports.useEffect(()=>{_(g)},[]);let v=[];for(const u of o){let m=!0,E=!0;u.match(/\.json/)&&(E=!1),u.match(/\./)&&(m=!1);let C=e("div",{children:""});m?C=n("div",{className:P.singleFile,onClick:()=>{const w=g+"/"+u;d(w),_(w)},children:[e(X,{theme:"outline",size:"18",fill:"#333",className:P.fileIcon}),u]},u):C=n("div",{className:P.singleFile,onClick:()=>{p(N(g+"/"+u)),S(u),l(!i)},children:[e(me,{theme:"outline",size:"18",fill:"#333",className:P.fileIcon}),u]},u),E&&v.push(C)}return n("div",{children:[e("div",{className:P.chooseBox,children:n("div",{className:P.chooseIcon,onClick:()=>{i===!1&&(d(t.dir),p(""),_(t.dir)),l(!i)},children:[e(he,{theme:"outline",size:"16",fill:"#333"})," \u9009\u62E9\u6587\u4EF6"]})}),e("div",{style:{position:"relative"},children:i&&e("div",{className:P.fileList,children:v})})]})},rt=()=>{r.exports.useState(!1);const[t,i]=r.exports.useState(""),[l,g]=r.exports.useState(""),[d,o]=r.exports.useState(""),h=()=>{A.get(`${s.domain}/Games/${s.currentEditGame}/game/gameConfig.json`).then(S=>{let v=S.data;s.currentGameConfig=S.data,document.getElementById("gameNameInput").value=v.Game_name,i(v.Title_bgm),g(v.Title_img),o(v.Loading_img)})},f=()=>{s.currentGameConfig.Game_name=document.getElementById("gameNameInput").value,N()},p=(S,v)=>{s.currentGameConfig[S]=v,N()},_=S=>v=>{p(S,v)},N=()=>{let S={currentEditGame:s.currentEditGame,config:s.currentGameConfig};A.post(`${s.domain}/api/manageGame/config`,S).then(v=>{})};return r.exports.useEffect(()=>{h()},[]),n("div",{children:[e("div",{children:e("a",{style:{color:"black",textDecoration:"none"},href:`${s.domain}/Games/${s.currentEditGame}`,target:"_blank",children:n("div",{className:T.previewGameButton,children:[e(ge,{theme:"outline",size:"28",fill:"#FFF",style:{padding:"0 5px 0 0",transform:"translate(0,5px)"}}),"\u9884\u89C8\u6E38\u620F"]})})}),n("div",{children:[e("div",{className:T.title,children:"\u6E38\u620F\u540D\u79F0"}),e("div",{children:e("input",{onBlur:f,id:"gameNameInput",className:T.gameNameInput})})]}),n("div",{children:[e("div",{className:T.title,children:"\u6807\u9898\u80CC\u666F\u97F3\u4E50"}),n("div",{children:[t,e(D,{setShow:i,id:"bgmPicker",dir:"bgm",set:_("Title_bgm")})]})]}),n("div",{children:[e("div",{className:T.title,children:"\u6807\u9898\u80CC\u666F"}),n("div",{children:[l,e(D,{setShow:g,id:"bgPicker",dir:"background",set:_("Title_img")})]})]}),n("div",{children:[e("div",{className:T.title,children:"\u52A0\u8F7D\u56FE"}),n("div",{children:[d,e(D,{setShow:o,id:"loadImgPicker",dir:"background",set:_("Loading_img")})]})]})]})},ut="_dirButtonContainer_1ccdm_2",mt="_icon_small_1ccdm_7",ht="_controlPanel_1ccdm_14",gt="_upload_1ccdm_18",pt="_dirButton_1ccdm_2",ft="_fileElement_1ccdm_34",St="_title_1ccdm_46",_t="_currentDirShow_1ccdm_56",vt="_panelButton_1ccdm_63",Nt="_uploadTitle_1ccdm_71",xt="_uploadButton_1ccdm_79";var B={dirButtonContainer:ut,icon_small:mt,controlPanel:ht,upload:gt,dirButton:pt,fileElement:ft,title:St,currentDirShow:_t,panelButton:vt,uploadTitle:Nt,uploadButton:xt};const ce={background:"\u80CC\u666F",bgm:"\u97F3\u4E50",figure:"\u7ACB\u7ED8",video:"\u89C6\u9891",vocal:"\u8BED\u97F3"},ae=t=>{let i=e(X,{theme:"outline",size:"22",fill:"#333"});switch(t.icon){case"background":i=e(R,{theme:"outline",size:"22",fill:"#333"});break;case"bgm":i=e(U,{theme:"outline",size:"22",fill:"#333"});break;case"figure":i=e(j,{theme:"outline",size:"22",fill:"#333"});break;case"video":i=e(M,{theme:"outline",size:"22",fill:"#333"});break;case"vocal":i=e(fe,{theme:"outline",size:"22",fill:"#333"});break;case"file":i=e(pe,{theme:"outline",size:"22",fill:"#333"})}return i},Ct=()=>{const[t,i]=r.exports.useState(!0),[l,g]=r.exports.useState(!1),[d,o]=r.exports.useState(!1);r.exports.useEffect(()=>{c.set("refAssetsManagement",t),c.connect("refAssetsManagement",()=>{i(c.get("refAssetsManagement"))},"refAssetsManagement"),h()},[]);const h=()=>{const m=s.currentEditGame,E=s.currentDir,C={dir:`/${m}/game/${E}`};A.post(`${s.domain}/api/editGame/getAssets/`,C).then(w=>{s.currentDirContent=w.data,c.set("refAssetsManagement",!c.get("refAssetsManagement"))}).catch(w=>{console.log(w)})},f=()=>{if(s.currentDir==="")return;let m=s.currentDir.split("/");m.pop(),s.currentDir=m.reduce((E,C)=>""+E+"/"+C),h()},p=m=>{s.currentDir=s.currentDir+`/${m}`,h()},_=()=>{const m=s.currentEditGame,E=s.currentDir,C=`/${m}/game/${E}`;let w=new FormData;w.append("dir",C);const $=document.getElementById("uploadFile").files[0];let G=document.getElementById("uploadFile").value;w.append("file",$,G),A.post(`${s.domain}/api/editGame/addAsset/`,w,{headers:{"Content-Type":"multipart/form-data"}}).then(H=>{g(!1),h()}).catch(H=>{console.log(H)})},N=()=>{const m=s.currentEditGame,E=s.currentDir,C=`/${m}/game/${E}`,w=document.getElementById("addDirInput").value,$={current:C,Name:w};A.post(`${s.domain}/api/editGame/mkdir/`,$).then(G=>{o(!1),h()}).catch(G=>{console.log(G)})},S=()=>{g(!l)},v=()=>{o(!d)},u=[];for(const m of s.currentDirContent){let E="",C=!0;if(m.match(/\./))s.currentDir===""&&(C=!1),E=n("div",{className:B.fileElement,children:[e("span",{className:B.icon_small,children:e(ae,{icon:"file"})}),m]},m);else{let w=m;s.currentDir===""&&ce.hasOwnProperty(m)&&(w=ce[m]),E=n("div",{className:B.dirButton,onClick:()=>p(m),children:[e("span",{className:B.icon_small,children:e(ae,{icon:m})}),w]},m),m==="scene"&&s.currentDir===""&&(C=!1)}C&&u.push(E)}return n("div",{children:[e("div",{className:B.title,children:"\u7D20\u6750\u7BA1\u7406"}),s.currentDir!==""&&e("div",{className:B.currentDirShow,children:s.currentDir}),s.currentDir!==""&&n("div",{className:B.controlPanel,children:[e("div",{children:e(Se,{theme:"outline",size:"24",fill:"#333",onClick:f,className:B.panelButton})}),n("div",{children:[e(_e,{theme:"outline",size:"24",fill:"#333",onClick:S,className:B.panelButton}),l&&n("div",{className:B.upload,children:[e("div",{className:B.uploadTitle,children:"\u4E0A\u4F20\u6587\u4EF6"}),e("input",{id:"uploadFile",type:"file"}),e("div",{className:B.uploadButton,onClick:_,children:"\u4E0A\u4F20"})]})]}),n("div",{children:[e(ve,{theme:"outline",size:"24",fill:"#333",onClick:v,className:B.panelButton}),d&&n("div",{className:B.upload,children:[e("div",{className:B.uploadTitle,children:"\u65B0\u5EFA\u6587\u4EF6\u5939"}),e("input",{id:"addDirInput"}),e("div",{className:B.uploadButton,onClick:N,children:"\u65B0\u5EFA"})]})]})]}),e("div",{}),e("div",{className:B.dirButtonContainer,children:u})]})},Et="_main_1dzb8_1",Bt="_addInput_1dzb8_12",wt="_title_1dzb8_20",Ft="_addButton_1dzb8_26";var O={main:Et,addInput:Bt,title:wt,addButton:Ft};const At=t=>{const i=()=>{const l={gameName:s.currentEditGame,sceneName:document.getElementById("addSceneName").value};A.post(`${s.domain}/api/editGame/addNewScene/`,l).then(g=>{t.added()}).catch(g=>{console.log(g)})};return n("div",{className:O.main,children:[n("div",{className:O.title,children:["\u573A\u666F\u540D\u79F0\uFF1A",e("input",{className:O.addInput,id:"addSceneName"})]}),e("div",{className:O.addButton,onClick:i,children:"\u65B0\u5EFA\u573A\u666F"})]})},kt="_titleText_11hyv_1",Dt="_scene_11hyv_11",It="_newSceneButton_11hyv_22",bt="_sceneList_11hyv_30";var z={titleText:kt,scene:Dt,newSceneButton:It,sceneList:bt};const Pt=()=>{const[t,i]=r.exports.useState([]),[l,g]=r.exports.useState(!1),d=()=>{const N={dir:`/${s.currentEditGame}/game/scene`};A.post(`${s.domain}/api/editGame/getAssets/`,N).then(S=>{i(S.data)}).catch(S=>{console.log(S)})},o=()=>{d(),g(!l)};r.exports.useEffect(()=>{d()},[]);const h=p=>{s.currentOpendSceneEdit.includes(p)||s.currentOpendSceneEdit.push(p),s.currentEditScene=p,c.set("updateEditor",!c.get("updateEditor"))},f=[];for(const p of t){let _=!1,N=p.split(".");N[N.length-1]==="json"&&(_=!0);const S=n("div",{className:z.scene,onClick:()=>h(p),children:[e(V,{theme:"outline",size:"16",fill:"#333",style:{padding:"0 5px 0 0"}}),p]},p);_&&f.push(S)}return n("div",{children:[e("div",{className:z.titleText,children:"\u573A\u666F\u7BA1\u7406"}),n("div",{className:z.newSceneButton,onClick:()=>{g(!l)},children:[e(Q,{theme:"outline",size:"18",fill:"#333",style:{padding:"0 5px 0 0",transform:"translate(0,2px)"}}),"\u65B0\u5EFA\u573A\u666F"]}),e("div",{children:l&&e(At,{added:o})}),e("div",{className:z.sceneList,children:f})]})},yt=()=>{const t=["\u6E38\u620F\u914D\u7F6E","\u7D20\u6750\u7BA1\u7406","\u573A\u666F\u7BA1\u7406"],[i,l]=r.exports.useState(!1);r.exports.useEffect(()=>{c.set("refSideBar",i),c.connect("refSideBar",()=>{l(c.get("refSideBar"))},"refSideBarFunc")},[]);const g=[];for(const o of t){let h;o===s.editorTag?h=e("div",{className:b.optionMarker}):h=e("div",{className:b.optionMarkerOff});const f=n("div",{className:o===s.editorTag?b.tagButtonOn:b.tagButton,onClick:()=>{s.editorTag=o,c.set("refSideBar",!c.get("refSideBar"))},children:[e("div",{children:o}),h]},o);g.push(f)}let d;switch(s.editorTag){case"\u6E38\u620F\u914D\u7F6E":d=e(rt,{});break;case"\u7D20\u6750\u7BA1\u7406":d=e(Ct,{});break;case"\u573A\u666F\u7BA1\u7406":d=e(Pt,{});break}return n("aside",{className:b.aside,children:[e("div",{className:b.option,children:g}),e("div",{className:b.sideBarContent,children:d})]})},Lt="_main_19sml_1";var Tt={main:Lt};const Gt="_main_lvf75_1",Ot="_tag_lvf75_7",zt="_tagOpened_lvf75_17",$t="_tagList_lvf75_24",Mt="_tagIcon_lvf75_28";var I={main:Gt,tag:Ot,tagOpened:zt,tagList:$t,tagIcon:Mt};const jt="_topButtonList_vuptl_1",Ut="_topButton_vuptl_1",Rt="_addSentencePanel_vuptl_16",Vt="_addSentenceButton_vuptl_25",qt="_sentenceList_vuptl_35",Jt="_sentence_vuptl_35",Wt="_sentenceIn_vuptl_1",Kt="_lineNumber_vuptl_47",Ht="_sentenceMain_vuptl_53";var x={topButtonList:jt,topButton:Ut,addSentencePanel:Rt,addSentenceButton:Vt,sentenceList:qt,sentence:Jt,sentenceIn:Wt,lineNumber:Kt,sentenceMain:Ht};const Qt=t=>{let i;switch(t){case"dialog":i={type:t,speaker:"",content:"",vocal:"",ignoreSpeaker:!1};break;case"bg":i={type:t,bg:"",noBg:!1,next:!1};break;case"bgm":i={type:t,bgm:"",noBgm:!1};break;case"changeScene":i={type:t,newScene:""};break;case"video":i={type:t,video:""};break;case"changeP":i={type:t,newP:"",next:!1,noP:!1,pos:""};break;case"choose":i={type:t,chooseItem:[{text:"\u5728\u6B64\u586B\u5165\u5206\u652F\u7684\u540D\u79F0",scene:""},{text:"\u5728\u6B64\u586B\u5165\u5206\u652F\u7684\u540D\u79F0",scene:""}]};break}return i},Xt="_sentence_1klle_1",Yt="_dialog_input_1klle_10",Zt="_singleOption_1klle_18",en="_optionTitle_1klle_26",tn="_optionContent_1klle_34",nn="_isolate_1klle_38",sn="_sentenceButtonList_1klle_43",cn="_sentenceButton_1klle_43",an="_sentenceIndexShow_1klle_61",on="_topContainer_1klle_69";var a={sentence:Xt,dialog_input:Yt,singleOption:Zt,optionTitle:en,optionContent:tn,isolate:nn,sentenceButtonList:sn,sentenceButton:cn,sentenceIndexShow:an,topContainer:on};const dn=t=>{s.currentSceneSentenceList.splice(t,1),c.set("writeScene",!c.get("writeScene"))},oe=(t,i)=>{if(!(t===0&&i===-1||t===s.currentSceneSentenceList.length-1&&i===1)){{const l=s.currentSceneSentenceList[t];s.currentSceneSentenceList.splice(t,1),s.currentSceneSentenceList.splice(t+i,0,l)}c.set("writeScene",!c.get("writeScene"))}},de=t=>n("div",{className:x.addSentencePanel,children:[n("div",{className:x.addSentenceButton,onClick:()=>{F("dialog",t.index)},children:[e(Y,{theme:"outline",size:"18",fill:"#333",style:{padding:"0 5px 0 0"}}),"\u6DFB\u52A0\u5BF9\u8BDD"]}),n("div",{className:x.addSentenceButton,onClick:()=>{F("changeP",t.index)},children:[e(j,{theme:"outline",size:"18",fill:"#333",style:{padding:"0 5px 0 0"}}),"\u5207\u6362\u7ACB\u7ED8"]}),n("div",{className:x.addSentenceButton,onClick:()=>{F("bg",t.index)},children:[e(R,{theme:"outline",size:"18",fill:"#333",style:{padding:"0 5px 0 0"}}),"\u5207\u6362\u80CC\u666F"]}),n("div",{className:x.addSentenceButton,onClick:()=>{F("changeScene",t.index)},children:[e(Z,{theme:"outline",size:"18",fill:"#333",style:{padding:"0 5px 0 0"}}),"\u573A\u666F\u8DF3\u8F6C"]}),n("div",{className:x.addSentenceButton,onClick:()=>{F("choose",t.index)},children:[e(ee,{theme:"outline",size:"18",fill:"#333",style:{padding:"0 5px 0 0"}}),"\u5206\u652F\u9009\u62E9"]}),n("div",{className:x.addSentenceButton,onClick:()=>{F("bgm",t.index)},children:[e(U,{theme:"outline",size:"18",fill:"#333",style:{padding:"0 5px 0 0"}}),"\u80CC\u666F\u97F3\u4E50"]}),n("div",{className:x.addSentenceButton,onClick:()=>{F("video",t.index)},children:[e(M,{theme:"outline",size:"18",fill:"#333",style:{padding:"0 5px 0 0"}}),"\u63D2\u5165\u89C6\u9891"]})]}),y=t=>n("div",{className:a.sentenceButtonList,children:[n("div",{className:a.sentenceButton,onClick:()=>{dn(t.index)},children:[e(Ne,{theme:"outline",size:"14",fill:"#333",style:{padding:"0 5px 0 0"}}),"\u5220\u9664\u672C\u53E5"]}),n("div",{onClick:()=>{oe(t.index,-1)},className:a.sentenceButton,children:[e(xe,{theme:"outline",size:"14",fill:"#333",style:{padding:"0 5px 0 0"}}),"\u4E0A\u79FB\u672C\u53E5"]}),n("div",{onClick:()=>{oe(t.index,1)},className:a.sentenceButton,children:[e(Ce,{theme:"outline",size:"14",fill:"#333",style:{padding:"0 5px 0 0"}}),"\u4E0B\u79FB\u672C\u53E5"]}),n("div",{onClick:()=>{t.data.setShowAddPre(!t.data.showAddPre)},className:a.sentenceButton,children:[e(te,{theme:"outline",size:"14",fill:"#333",style:{padding:"0 5px 0 0"}}),"\u5728\u672C\u53E5\u524D\u63D2\u5165\u53E5\u5B50",t.data.showAddPre&&e(de,{index:t.data.indexPre})]}),n("div",{onClick:()=>{t.data.setShowAddAfter(!t.data.showAddAfter)},className:a.sentenceButton,children:[e(te,{theme:"outline",size:"14",fill:"#333",style:{padding:"0 5px 0 0"}}),"\u5728\u672C\u53E5\u540E\u63D2\u5165\u53E5\u5B50",t.data.showAddAfter&&e(de,{index:t.data.indexAfter})]})]}),ln=t=>{const[i,l]=r.exports.useState(!1),[g,d]=r.exports.useState(!1),o=t.index,h=t.index+1,f={showAddPre:i,setShowAddPre:l,showAddAfter:g,setShowAddAfter:d,indexPre:o,indexAfter:h};r.exports.useEffect(()=>{document.getElementById("speakerInput"+t.index).value=t.data.speaker,document.getElementById("contentInput"+t.index).value=t.data.content});const p=()=>{s.currentSceneSentenceList[t.index].speaker=document.getElementById("speakerInput"+t.index).value,s.currentSceneSentenceList[t.index].content=document.getElementById("contentInput"+t.index).value,c.set("writeScene",!c.get("writeScene"))},_=u=>{s.currentSceneSentenceList[t.index].ignoreSpeaker=u,c.set("writeScene",!c.get("writeScene"))},[N,S]=r.exports.useState(t.data.vocal),v=()=>u=>{s.currentSceneSentenceList[t.index].vocal=u,c.set("writeScene",!c.get("writeScene"))};return n("div",{className:a.sentence,children:[n("div",{className:a.topContainer,children:[e("div",{className:a.sentenceIndexShow,children:"\u57FA\u672C\u5BF9\u8BDD"}),e(y,{index:t.index,data:f})]}),n("main",{children:[n("div",{className:a.singleOption,children:["\u89D2\u8272\uFF1A",e("input",{className:a.dialog_input,onBlur:p,id:"speakerInput"+t.index}),e("span",{style:{padding:"0 0 0 5px"},children:"\u63D0\u793A\uFF1A\u7559\u7A7A\u53EF\u4EE5\u7EE7\u627F\u4E0A\u4E00\u6761\u5BF9\u8BDD\u7684\u89D2\u8272\u540D"})]}),n("div",{className:a.singleOption,children:["\u5BF9\u8BDD\uFF1A",e("input",{className:a.dialog_input,onBlur:p,id:"contentInput"+t.index})]}),n("div",{className:a.singleOption,children:[e("span",{className:a.optionTitle,children:"\u65C1\u767D\u6A21\u5F0F"}),n("span",{className:a.optionContent,children:[e(L,{size:"small",id:"dialog_pbms",checked:t.data.ignoreSpeaker,onChange:_}),"\uFF08\u5C06\u4E0D\u4F1A\u663E\u793A\u89D2\u8272\u540D\uFF09"]}),e("div",{className:a.optionTitle,children:"\u914D\u97F3\u6587\u4EF6"}),e(D,{setShow:S,id:"vocalPicker",dir:"vocal",set:v()}),e("span",{className:a.optionContent,children:N})]})]})]},t.index+"dialog")},rn=t=>{const[i,l]=r.exports.useState(!1),[g,d]=r.exports.useState(!1),o=t.index,h=t.index+1,f={showAddPre:i,setShowAddPre:l,showAddAfter:g,setShowAddAfter:d,indexPre:o,indexAfter:h};r.exports.useEffect(()=>{});const p=u=>{s.currentSceneSentenceList[t.index].noBg=u,c.set("writeScene",!c.get("writeScene"))},_=u=>{s.currentSceneSentenceList[t.index].next=u,c.set("writeScene",!c.get("writeScene"))},[N,S]=r.exports.useState(t.data.bg),v=()=>u=>{s.currentSceneSentenceList[t.index].bg=u,c.set("writeScene",!c.get("writeScene"))};return n("div",{className:a.sentence,children:[n("div",{className:a.topContainer,children:[e("div",{className:a.sentenceIndexShow,children:"\u66F4\u6539\u80CC\u666F"}),e(y,{index:t.index,data:f})]}),n("main",{children:[n("div",{className:a.singleOption,children:[e("span",{className:a.optionTitle,children:"\u5173\u95ED\u80CC\u666F"}),n("span",{className:a.optionContent,children:[e(L,{size:"small",checked:t.data.noBg,id:"bg_none"+t.index,onChange:p}),"\uFF08\u5C06\u5173\u95ED\u80CC\u666F\uFF09"]}),e("span",{className:a.optionTitle,children:"\u66F4\u6539\u80CC\u666F\u540E\u7EE7\u7EED\u4E0B\u4E00\u53E5"}),e("span",{className:a.optionContent,children:e(L,{size:"small",id:"bg_next"+t.index,checked:t.data.next,onChange:_})})]}),n("div",{className:a.singleOption,children:[e("span",{className:a.optionTitle,children:"\u80CC\u666F\u6587\u4EF6"}),e(D,{setShow:S,id:"bgPicker",dir:"background",set:v()}),e("span",{className:a.optionContent,children:N})]})]})]},t.index+"bg")},un=t=>{const[i,l]=r.exports.useState(!1),[g,d]=r.exports.useState(!1),o=t.index,h=t.index+1,f={showAddPre:i,setShowAddPre:l,showAddAfter:g,setShowAddAfter:d,indexPre:o,indexAfter:h};r.exports.useEffect(()=>{});const p=v=>{s.currentSceneSentenceList[t.index].noBgm=v,c.set("writeScene",!c.get("writeScene"))},[_,N]=r.exports.useState(t.data.bgm),S=()=>v=>{s.currentSceneSentenceList[t.index].bgm=v,c.set("writeScene",!c.get("writeScene"))};return n("div",{className:a.sentence,children:[n("div",{className:a.topContainer,children:[e("div",{className:a.sentenceIndexShow,children:"\u66F4\u6539\u97F3\u4E50"}),e(y,{index:t.index,data:f})]}),n("main",{children:[n("div",{className:a.singleOption,children:[e("span",{className:a.optionTitle,children:"\u5173\u95ED\u80CC\u666F\u97F3\u4E50"}),n("span",{className:a.optionContent,children:[e(L,{size:"small",id:"bgm_none"+t.index,checked:t.data.noBgm,onChange:p}),"\uFF08\u5C06\u5173\u95ED\u80CC\u666F\u97F3\u4E50\uFF09"]})]}),n("div",{className:a.singleOption,children:[e("span",{className:a.optionTitle,children:"\u80CC\u666F\u97F3\u4E50\u6587\u4EF6"}),e(D,{setShow:N,id:"bgmPicker",dir:"bgm",set:S()}),e("span",{className:a.optionContent,children:_})]})]})]},t.index+"bgm")},mn=t=>{const[i,l]=r.exports.useState(!1),[g,d]=r.exports.useState(!1),o=t.index,h=t.index+1,f={showAddPre:i,setShowAddPre:l,showAddAfter:g,setShowAddAfter:d,indexPre:o,indexAfter:h};r.exports.useEffect(()=>{});const[p,_]=r.exports.useState(t.data.newScene),N=()=>S=>{s.currentSceneSentenceList[t.index].newScene=S,c.set("writeScene",!c.get("writeScene"))};return n("div",{className:a.sentence,children:[n("div",{className:a.topContainer,children:[e("div",{className:a.sentenceIndexShow,children:"\u5207\u6362\u573A\u666F"}),e(y,{index:t.index,data:f})]}),e("main",{children:n("div",{className:a.singleOption,children:[e("span",{className:a.optionTitle,children:"\u65B0\u573A\u666F"}),e(D,{setShow:_,id:"scenePicker",dir:"scene",set:N()}),e("span",{className:a.optionContent,children:p})]})})]},t.index+"scene")},hn=t=>{const[i,l]=r.exports.useState(!1),[g,d]=r.exports.useState(!1),o=t.index,h=t.index+1,f={showAddPre:i,setShowAddPre:l,showAddAfter:g,setShowAddAfter:d,indexPre:o,indexAfter:h};r.exports.useEffect(()=>{});const[p,_]=r.exports.useState(t.data.video),N=()=>S=>{s.currentSceneSentenceList[t.index].video=S,c.set("writeScene",!c.get("writeScene"))};return n("div",{className:a.sentence,children:[n("div",{className:a.topContainer,children:[e("div",{className:a.sentenceIndexShow,children:"\u64AD\u653E\u89C6\u9891"}),e(y,{index:t.index,data:f})]}),e("main",{children:n("div",{className:a.singleOption,children:[e("span",{className:a.optionTitle,children:"\u89C6\u9891\u6587\u4EF6"}),e(D,{setShow:_,id:"videoPicker",dir:"video",set:N()}),e("span",{className:a.optionContent,children:p})]})})]},t.index+"scene")},{Option:J}=ne,gn=t=>{const[i,l]=r.exports.useState(!1),[g,d]=r.exports.useState(!1),o=t.index,h=t.index+1,f={showAddPre:i,setShowAddPre:l,showAddAfter:g,setShowAddAfter:d,indexPre:o,indexAfter:h};r.exports.useEffect(()=>{});const p=m=>{s.currentSceneSentenceList[t.index].noP=m,c.set("writeScene",!c.get("writeScene"))},_=m=>{s.currentSceneSentenceList[t.index].next=m,c.set("writeScene",!c.get("writeScene"))},[N,S]=r.exports.useState(t.data.newP),v=()=>m=>{s.currentSceneSentenceList[t.index].newP=m,c.set("writeScene",!c.get("writeScene"))},u=m=>{s.currentSceneSentenceList[t.index].pos=m,c.set("writeScene",!c.get("writeScene"))};return n("div",{className:a.sentence,children:[n("div",{className:a.topContainer,children:[e("div",{className:a.sentenceIndexShow,children:"\u5207\u6362\u7ACB\u7ED8"}),e(y,{index:t.index,data:f})]}),n("main",{children:[n("div",{className:a.singleOption,children:[e("span",{className:a.optionTitle,children:"\u5173\u95ED\u7ACB\u7ED8"}),e("span",{className:a.optionContent,children:e(L,{size:"small",id:"p_none",checked:t.data.noP,onChange:p})}),e("span",{className:a.optionContent,children:"\uFF08\u5C06\u5173\u95ED\u7ACB\u7ED8\uFF09"}),e("span",{className:a.optionTitle,children:"\u7ACB\u7ED8\u4F4D\u7F6E"}),n(ne,{size:"small",defaultValue:t.data.pos,style:{width:120},onChange:u,children:[e(J,{value:"left",children:"\u5DE6"}),e(J,{value:"",children:"\u4E2D"}),e(J,{value:"right",children:"\u53F3"})]}),e("span",{className:a.optionContent,children:"\uFF08\u6539\u53D8\u7ACB\u7ED8\u7684\u4F4D\u7F6E\uFF09"}),e("span",{className:a.optionTitle,children:"\u5207\u6362\u540E\u6267\u884C\u4E0B\u4E00\u6761\u8BED\u53E5"}),e("span",{className:a.optionContent,children:e(L,{size:"small",id:"p_none",checked:t.data.next,onChange:_})})]}),n("div",{className:a.singleOption,children:[e("span",{className:a.optionTitle,children:"\u7ACB\u7ED8\u6587\u4EF6"}),e(D,{setShow:S,id:"pPicker",dir:"figure",set:v()}),e("span",{className:a.optionContent,children:N})]})]})]},t.index+"dialog")},pn=t=>{const[i,l]=r.exports.useState(!1),[g,d]=r.exports.useState(!1),o=t.index,h=t.index+1,f={showAddPre:i,setShowAddPre:l,showAddAfter:g,setShowAddAfter:d,indexPre:o,indexAfter:h};r.exports.useEffect(()=>{for(let u=0;u<t.data.chooseItem.length;u++)document.getElementById("chooseInput"+t.index+"itemIndex"+u).value=t.data.chooseItem[u].text});const p=()=>{s.currentSceneSentenceList[t.index].chooseItem.push({text:"\u5728\u6B64\u586B\u5165\u5206\u652F\u7684\u540D\u79F0",scene:""}),c.set("writeScene",!c.get("writeScene"))},_=u=>{const m=parseInt(u.split("Index")[1]);console.log(m),s.currentSceneSentenceList[t.index].chooseItem[m].text=document.getElementById(u).value,c.set("writeScene",!c.get("writeScene"))},N=u=>m=>{s.currentSceneSentenceList[t.index].chooseItem[u].scene=m,c.set("writeScene",!c.get("writeScene"))};let S=[],v=0;for(const u of t.data.chooseItem){const m="chooseInput"+t.index+"itemIndex"+v;let E=n("div",{className:a.singleOption,children:[e("span",{className:a.optionTitle,children:"\u5206\u652F\u540D\u79F0"}),e("input",{className:a.dialog_input,style:{width:"200px"},onBlur:()=>{_(m)},id:m}),e("span",{className:a.optionContent,children:e(Ee,{theme:"outline",size:"24",fill:"#333"})}),e("span",{className:a.optionTitle,children:"\u8DF3\u8F6C\u7684\u573A\u666F"}),e(D,{id:"scenePicker",dir:"scene",set:N(v)}),e("span",{className:a.optionContent,children:u.scene})]},v);S.push(E),v++}return n("div",{className:a.sentence,children:[n("div",{className:a.topContainer,children:[e("div",{className:a.sentenceIndexShow,children:"\u5206\u652F\u9009\u62E9"}),e(y,{index:t.index,data:f})]}),n("main",{children:[e("div",{style:{display:"flex",padding:"5px 0 0 0"},children:n("div",{onClick:p,className:a.sentenceButton,children:[e(Be,{theme:"outline",size:"16",fill:"#333",style:{padding:"0 5px 0 0"}}),"\u6DFB\u52A0\u5206\u652F"]})}),S]})]},t.index+"choose")},fn=(t,i)=>{let l;switch(t.type){case"dialog":l=e(ln,{data:t,index:i},i);break;case"bg":l=e(rn,{data:t,index:i},i);break;case"bgm":l=e(un,{data:t,index:i},i);break;case"changeScene":l=e(mn,{data:t,index:i},i);break;case"video":l=e(hn,{data:t,index:i},i);break;case"changeP":l=e(gn,{data:t,index:i},i);break;case"choose":l=e(pn,{data:t,index:i},i);break}return l};const Sn=t=>{const[i,l]=r.exports.useState(!0),[g,d]=r.exports.useState(!1);r.exports.useEffect(()=>{c.set("updateScene",i),c.connect("updateScene",()=>{l(c.get("updateScene"))},"updateSceneFunc"),c.set("refScene",!0),c.connect("refScene",()=>{W()},"refSceneFunc"),c.get("writeScene")===void 0&&c.set("writeScene",!0),c.connect("writeScene",()=>{K()},"writeSceneFunc"),W()},[]);let o=[];const h=JSON.parse(JSON.stringify(s.currentSceneSentenceList));for(let p=0;p<h.length;p++){const _=h[p],N=fn(_,p),S=n("div",{className:x.sentence,children:[e("div",{className:x.lineNumber,children:p+1}),e("div",{className:x.sentenceMain,children:N})]});o.push(S)}const f=n("div",{className:x.addSentencePanel,children:[n("div",{className:x.addSentenceButton,onClick:()=>{F("dialog"),d(!1)},children:[e(Y,{theme:"outline",size:"18",fill:"#333",style:{padding:"0 5px 0 0"}}),"\u6DFB\u52A0\u5BF9\u8BDD"]}),n("div",{className:x.addSentenceButton,onClick:()=>{F("changeP"),d(!1)},children:[e(j,{theme:"outline",size:"18",fill:"#333",style:{padding:"0 5px 0 0"}}),"\u5207\u6362\u7ACB\u7ED8"]}),n("div",{className:x.addSentenceButton,onClick:()=>{F("bg"),d(!1)},children:[e(R,{theme:"outline",size:"18",fill:"#333",style:{padding:"0 5px 0 0"}}),"\u5207\u6362\u80CC\u666F"]}),n("div",{className:x.addSentenceButton,onClick:()=>{F("changeScene"),d(!1)},children:[e(Z,{theme:"outline",size:"18",fill:"#333",style:{padding:"0 5px 0 0"}}),"\u573A\u666F\u8DF3\u8F6C"]}),n("div",{className:x.addSentenceButton,onClick:()=>{F("choose"),d(!1)},children:[e(ee,{theme:"outline",size:"18",fill:"#333",style:{padding:"0 5px 0 0"}}),"\u5206\u652F\u9009\u62E9"]}),n("div",{className:x.addSentenceButton,onClick:()=>{F("bgm"),d(!1)},children:[e(U,{theme:"outline",size:"18",fill:"#333",style:{padding:"0 5px 0 0"}}),"\u80CC\u666F\u97F3\u4E50"]}),n("div",{className:x.addSentenceButton,onClick:()=>{F("video"),d(!1)},children:[e(M,{theme:"outline",size:"18",fill:"#333",style:{padding:"0 5px 0 0"}}),"\u63D2\u5165\u89C6\u9891"]})]});return n("div",{children:[n("div",{className:x.topButtonList,children:[e("div",{className:x.topButton,onClick:K,children:"\u4FDD\u5B58\u573A\u666F"}),e("div",{className:x.topButton,onClick:()=>{d(!g)},children:"\u6DFB\u52A0\u8BED\u53E5"}),e("div",{children:g&&f})]}),e("div",{className:x.sentenceList,children:o})]})};function W(){let t=s.currentEditScene;if(t==="")return;const i=`${s.domain}/Games/${s.currentEditGame}/game/scene/${t}`;A.get(i).then(l=>{s.currentSceneSentenceList=l.data,c.set("updateScene",!c.get("updateScene"))}).catch(l=>console.log(l))}function F(t,i){const l=Qt(t);i!==void 0?s.currentSceneSentenceList.splice(i,0,l):s.currentSceneSentenceList.push(l),K()}function K(){const t=`${s.domain}/api/editGame/editScene/`,i={gameName:s.currentEditGame,sceneName:s.currentEditScene,sceneData:s.currentSceneSentenceList};A.post(t,i).then(l=>{W()}).catch(l=>console.log(l))}const _n=()=>{const[t,i]=r.exports.useState(!1);r.exports.useEffect(()=>{c.set("updateEditor",t),c.connect("updateEditor",()=>{i(c.get("updateEditor")),c.set("refScene",!c.get("refScene"))},"updateEditorFunc")},[]);const l=o=>{s.currentEditScene=o,c.set("updateEditor",!c.get("updateEditor")),c.set("refScene",!c.get("refScene"))},g=o=>{const h=s.currentOpendSceneEdit.indexOf(o);s.currentOpendSceneEdit.splice(h,1);const f=s.currentOpendSceneEdit.length===0;o===s.currentEditScene&&(f?s.currentEditScene="":s.currentOpendSceneEdit.length<=h?s.currentEditScene=s.currentOpendSceneEdit[s.currentOpendSceneEdit.length-1]:s.currentEditScene=s.currentOpendSceneEdit[h]),c.set("updateEditor",!c.get("updateEditor"))},d=[];for(const o of s.currentOpendSceneEdit){let h;o===s.currentEditScene?h=n("div",{className:I.tagOpened,children:[e(V,{theme:"outline",size:"20",fill:"#333",className:I.tagIcon}),o,e(se,{theme:"outline",size:"20",fill:"#333",className:I.tagIcon,onClick:()=>{g(o)}})]},o):h=n("div",{className:I.tag,onClick:()=>{l(o)},children:[e(V,{theme:"outline",size:"20",fill:"#333",className:I.tagIcon}),o,e(se,{theme:"outline",size:"20",fill:"#333",className:I.tagIcon,onClick:f=>{f.preventDefault(),f.stopPropagation(),g(o)}})]},o),d.push(h)}return n("div",{className:I.main,children:[e("div",{className:I.tagList,children:d}),e("div",{children:s.currentEditScene!==""&&e(Sn,{sceneName:s.currentEditScene})})]})},vn=()=>{const[t,i]=r.exports.useState(!0);return r.exports.useEffect(()=>{c.set("updateEditor",!0),c.connect("updateEditor",()=>{i(c.get("updateEditor"))},"ForceUpdateEditor")},[]),n("div",{children:[e(Ve,{}),n("main",{className:Tt.main,children:[e(yt,{}),e(_n,{})]})]})};function Nn(){const[t,i]=r.exports.useState(!0);return r.exports.useEffect(()=>{c.set("isManageMent",!0),c.connect("isManagement",()=>{i(c.get("isManagement"))},"setIsManagementFunc")},[]),n("div",{className:"App",children:[t&&e(Me,{}),!t&&e(vn,{})]})}we.render(e(Fe.StrictMode,{children:e(Nn,{})}),document.getElementById("root"));