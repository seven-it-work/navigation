import{r as R,a as V,b as c,o as a,c as p,w as s,p as _,t as q,d as l,e as d,f as y,g as A,h as u,u as h,S as x,i as C,n as L,F as U,j as N,k as $,l as E}from"./index-16229df6.js";const P={key:0},j={style:{padding:"8px"}},H={key:0},J=["href"],W={key:2},Y={key:3},Q={__name:"WorkView",setup(G){const v=[{title:"本地导航",link:"localhost:8991",description:"",tags:["导航"],guoNei:!0,account:""},{title:"打卡记录",link:"localhost:8080",description:"",tags:["打卡"],guoNei:!0,account:""},{title:"原始需求-应用管理-测试环境",link:"https://console-kwe.his-beta.huawei.com/ads/#/appDeployment?app_id=com.huawei.ipd.rawreq&duName=JDCRawReq",description:"",tags:["原始需求","应用管理","测试环境"],guoNei:!0,account:""},{title:"原始需求-配置管理-测试环境",link:"https://console-kwe.his-beta.huawei.com/webconfigcenter/#/subAppConfig/viewAllConfig?servicealias=appconfigcenter&app_id=com.huawei.ipd.rawreq",description:"",tags:["原始需求","配置管理","测试环境"],guoNei:!0,account:""},{title:"原始需求-发布流水线",link:"https://edevops.huawei.com/mine/components/10063900/pipeline/list/158156",description:"",tags:["原始需求","发布","测试环境","正式环境"],guoNei:!0,account:""},{title:"原始需求-前端资源平台",link:"http://console.his-beta.huawei.com/wcm/#/staticresource/staticresourceDeploy.html",description:"",tags:["原始需求","前端资源","测试环境"],guoNei:!0,account:""},{title:"原始需求-ALB",link:"https://console.his-beta.huawei.com/alb/#/appOverview?servicealias=alb&app_id=com.huawei.ipd.rawreq",description:"",tags:["原始需求","测试环境"],guoNei:!0,account:""},{title:"原始需求-数据库-测试环境",link:"https://console-kwe.his-beta.huawei.com/dbadvisor/#/instanceDashboard",description:"",tags:["原始需求","测试环境","数据库"],guoNei:!0,account:""},{title:"心声 征婚",link:"https://xinsheng.huawei.com/next/#/list?id=713534611705233408&cid=713570454708776960&flag=all&search=&sort=createTime&type=all&p=1",description:"",tags:["摸鱼","心声","数据库"],guoNei:!0,account:""}],k=R({searchText:"",searchedColumn:""}),F=[{title:"标题",dataIndex:"title",key:"title",customFilterDropdown:!0,onFilter:(e,t)=>e?t.title.toLowerCase().includes(e.toLowerCase())||_(t.title,{toneType:"none"}).replace(" ","").toLocaleLowerCase().includes(e.toLocaleLowerCase()):!0,onFilterDropdownOpenChange:e=>{e&&setTimeout(()=>{g.value.focus()},100)},ellipsis:!0,resizable:!0,fixed:"left",width:200},{title:"链接",dataIndex:"link",key:"link",ellipsis:!0,resizable:!0},{title:"描述",dataIndex:"description",key:"description",customFilterDropdown:!0,onFilter:(e,t)=>e?t.description.toLowerCase().includes(e.toLowerCase())||_(t.description,{toneType:"none"}).replace(" ","").toLocaleLowerCase().includes(e.toLocaleLowerCase()):!0,onFilterDropdownOpenChange:e=>{e&&setTimeout(()=>{g.value.focus()},100)},ellipsis:!0,resizable:!0},{title:"标签",dataIndex:"tags",key:"tags",filters:q,filterSearch:(e,t)=>t.value.toLocaleUpperCase().includes(e.toLocaleUpperCase())||_(t.value,{toneType:"none"}).replace(" ","").toLocaleLowerCase().includes(e.toLocaleLowerCase()),onFilter:(e,t)=>e?t.tags.includes(e):!0,ellipsis:!0,resizable:!0},{title:"访问",dataIndex:"guoNei",key:"guoNei",ellipsis:!0,resizable:!0},{title:"操作",dataIndex:"action",key:"action",ellipsis:!0,resizable:!0}],g=V(),f=(e,t,w)=>{t(),k.searchText=e[0],k.searchedColumn=w},z=e=>{e({confirm:!0}),k.searchText=""};function D(e,t){t.width=e}const I=window.innerHeight-200;return(e,t)=>{const w=c("a-input"),b=c("a-button"),T=c("a-tag"),S=c("a-switch"),B=c("a-table");return a(),p(B,{dataSource:v,columns:F,style:{background:"white"},pagination:{pageSize:100},scroll:{y:I,x:1500},onResizeColumn:D},{headerCell:s(({column:i})=>[i.key==="title"?(a(),l("span",P,d(i.title),1)):y("",!0)]),customFilterDropdown:s(({setSelectedKeys:i,selectedKeys:o,confirm:n,clearFilters:O,column:m})=>[A("div",j,[u(w,{ref_key:"searchInput",ref:g,placeholder:`输入${m.title}`,value:o[0],style:{width:"188px","margin-bottom":"8px",display:"block"},onChange:r=>i(r.target.value?[r.target.value]:[]),onPressEnter:r=>f(o,n,m.dataIndex)},null,8,["placeholder","value","onChange","onPressEnter"]),u(b,{type:"primary",size:"small",style:{width:"90px","margin-right":"8px"},onClick:r=>f(o,n,m.dataIndex)},{icon:s(()=>[u(h(x))]),default:s(()=>[C(" 查询 ")]),_:2},1032,["onClick"]),u(b,{size:"small",style:{width:"90px"},onClick:r=>z(O)},{default:s(()=>[C(" 重置 ")]),_:2},1032,["onClick"])])]),customFilterIcon:s(({filtered:i,column:o})=>[o.customFilterDropdown?(a(),p(h(x),{key:0,style:L({color:i?"#108ee9":void 0})},null,8,["style"])):(a(),p(h(U),{key:1,style:L({color:i?"#108ee9":void 0})},null,8,["style"]))]),bodyCell:s(({column:i,record:o})=>[i.key==="title"?(a(),l("a",H,d(o.title),1)):y("",!0),i.key==="link"?(a(),l("a",{key:1,href:o.link,target:"_blank"},d(o.link),9,J)):i.key==="tags"?(a(),l("span",W,[(a(!0),l(N,null,$(o.tags,n=>(a(),p(T,{key:n,color:h(E)[n]},{default:s(()=>[C(d(n),1)]),_:2},1032,["color"]))),128))])):i.key==="guoNei"?(a(),l("span",Y,[u(S,{checked:o.guoNei,"onUpdate:checked":n=>o.guoNei=n,"checked-children":"国内","un-checked-children":"国外"},null,8,["checked","onUpdate:checked"])])):i.key==="action"?(a(),l(N,{key:4},[],64)):y("",!0)]),_:1},8,["scroll"])}}};export{Q as default};
