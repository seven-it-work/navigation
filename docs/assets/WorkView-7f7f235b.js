import{r as O,a as R,b as r,o as a,c as p,w as n,p as _,t as q,d as l,e as d,f as y,g as A,h as u,u as h,S as x,i as f,n as N,F as U,j as v,k as $,l as E}from"./index-6bae4781.js";const j={key:0},P={style:{padding:"8px"}},H={key:0},J=["href"],M={key:2},W={key:3},Q={__name:"WorkView",setup(Y){const L=[{title:"本地导航",link:"localhost:8991",description:"",tags:["导航"],guoNei:!0,account:""},{title:"打卡记录",link:"localhost:8080",description:"",tags:["打卡"],guoNei:!0,account:""},{title:"原始需求-应用管理-测试环境",link:"https://console-kwe.his-beta.huawei.com/ads/#/appDeployment?app_id=com.huawei.ipd.rawreq&duName=JDCRawReq",description:"",tags:["原始需求","应用管理","测试环境"],guoNei:!0,account:""},{title:"原始需求-配置管理-测试环境",link:"https://console-kwe.his-beta.huawei.com/webconfigcenter/#/subAppConfig/viewAllConfig?servicealias=appconfigcenter&app_id=com.huawei.ipd.rawreq",description:"",tags:["原始需求","配置管理","测试环境"],guoNei:!0,account:""},{title:"原始需求-发布流水线",link:"https://edevops.huawei.com/mine/components/10063900/pipeline/list/158156",description:"",tags:["原始需求","发布","测试环境","正式环境"],guoNei:!0,account:""},{title:"原始需求-前端资源平台",link:"http://console.his-beta.huawei.com/wcm/#/staticresource/staticresourceDeploy.html",description:"",tags:["原始需求","前端资源","测试环境"],guoNei:!0,account:""},{title:"原始需求-ALB",link:"https://console.his-beta.huawei.com/alb/#/appOverview?servicealias=alb&app_id=com.huawei.ipd.rawreq",description:"",tags:["原始需求","测试环境"],guoNei:!0,account:""},{title:"原始需求-数据库-测试环境",link:"https://console-kwe.his-beta.huawei.com/dbadvisor/#/instanceDashboard",description:"",tags:["原始需求","测试环境","数据库"],guoNei:!0,account:""},{title:"心声 征婚",link:"https://xinsheng.huawei.com/next/#/list?id=713534611705233408&cid=713570454708776960&flag=all&search=&sort=createTime&type=all&p=1",description:"",tags:["摸鱼","心声","数据库"],guoNei:!0,account:""},{title:"漏洞eshow看板",link:"https://eshow.ipd.huawei.com/ipdgo/static/eshow/plugins/plug_000000006387/index.html#/openSourceView/opensourceManage",description:"",tags:["漏洞","生产"],guoNei:!0,account:""},{title:"漏洞eshow看板",link:"https://portal.edevops.huawei.com/cloudroc/portal/service/8103145104797794312/hole",description:"",tags:["漏洞","生产"],guoNei:!0,account:""},{title:"依赖版本查询（开源中心仓查询）",link:"https://portal.edevops.huawei.com/opensource-website/project/gd05252cf9b50467d978719ff6a3d50d3/opensource-center",description:"",tags:["漏洞","开源查询"],guoNei:!0,account:""},{title:"eShow看板",link:"https://eshow.edevops.huawei.com/paas/function/opensource",description:"",tags:["漏洞","生产"],guoNei:!0,account:""}],g=O({searchText:"",searchedColumn:""}),F=[{title:"标题",dataIndex:"title",key:"title",customFilterDropdown:!0,onFilter:(e,t)=>e?t.title.toLowerCase().includes(e.toLowerCase())||_(t.title,{toneType:"none"}).replace(" ","").toLocaleLowerCase().includes(e.toLocaleLowerCase()):!0,onFilterDropdownOpenChange:e=>{e&&setTimeout(()=>{w.value.focus()},100)},ellipsis:!0,resizable:!0,fixed:"left",width:200},{title:"链接",dataIndex:"link",key:"link",ellipsis:!0,resizable:!0},{title:"描述",dataIndex:"description",key:"description",customFilterDropdown:!0,onFilter:(e,t)=>e?t.description.toLowerCase().includes(e.toLowerCase())||_(t.description,{toneType:"none"}).replace(" ","").toLocaleLowerCase().includes(e.toLocaleLowerCase()):!0,onFilterDropdownOpenChange:e=>{e&&setTimeout(()=>{w.value.focus()},100)},ellipsis:!0,resizable:!0},{title:"标签",dataIndex:"tags",key:"tags",filters:q,filterSearch:(e,t)=>t.value.toLocaleUpperCase().includes(e.toLocaleUpperCase())||_(t.value,{toneType:"none"}).replace(" ","").toLocaleLowerCase().includes(e.toLocaleLowerCase()),onFilter:(e,t)=>e?t.tags.includes(e):!0,ellipsis:!0,resizable:!0},{title:"访问",dataIndex:"guoNei",key:"guoNei",ellipsis:!0,resizable:!0},{title:"操作",dataIndex:"action",key:"action",ellipsis:!0,resizable:!0}],w=R(),C=(e,t,k)=>{t(),g.searchText=e[0],g.searchedColumn=k},z=e=>{e({confirm:!0}),g.searchText=""};function D(e,t){t.width=e}const I=window.innerHeight-200;return(e,t)=>{const k=r("a-input"),b=r("a-button"),S=r("a-tag"),T=r("a-switch"),V=r("a-table");return a(),p(V,{dataSource:L,columns:F,style:{background:"white"},pagination:{pageSize:100},scroll:{y:I,x:1500},onResizeColumn:D},{headerCell:n(({column:o})=>[o.key==="title"?(a(),l("span",j,d(o.title),1)):y("",!0)]),customFilterDropdown:n(({setSelectedKeys:o,selectedKeys:i,confirm:s,clearFilters:B,column:m})=>[A("div",P,[u(k,{ref_key:"searchInput",ref:w,placeholder:`输入${m.title}`,value:i[0],style:{width:"188px","margin-bottom":"8px",display:"block"},onChange:c=>o(c.target.value?[c.target.value]:[]),onPressEnter:c=>C(i,s,m.dataIndex)},null,8,["placeholder","value","onChange","onPressEnter"]),u(b,{type:"primary",size:"small",style:{width:"90px","margin-right":"8px"},onClick:c=>C(i,s,m.dataIndex)},{icon:n(()=>[u(h(x))]),default:n(()=>[f(" 查询 ")]),_:2},1032,["onClick"]),u(b,{size:"small",style:{width:"90px"},onClick:c=>z(B)},{default:n(()=>[f(" 重置 ")]),_:2},1032,["onClick"])])]),customFilterIcon:n(({filtered:o,column:i})=>[i.customFilterDropdown?(a(),p(h(x),{key:0,style:N({color:o?"#108ee9":void 0})},null,8,["style"])):(a(),p(h(U),{key:1,style:N({color:o?"#108ee9":void 0})},null,8,["style"]))]),bodyCell:n(({column:o,record:i})=>[o.key==="title"?(a(),l("a",H,d(i.title),1)):y("",!0),o.key==="link"?(a(),l("a",{key:1,href:i.link,target:"_blank"},d(i.link),9,J)):o.key==="tags"?(a(),l("span",M,[(a(!0),l(v,null,$(i.tags,s=>(a(),p(S,{key:s,color:h(E)[s]},{default:n(()=>[f(d(s),1)]),_:2},1032,["color"]))),128))])):o.key==="guoNei"?(a(),l("span",W,[u(T,{checked:i.guoNei,"onUpdate:checked":s=>i.guoNei=s,"checked-children":"国内","un-checked-children":"国外"},null,8,["checked","onUpdate:checked"])])):o.key==="action"?(a(),l(v,{key:4},[],64)):y("",!0)]),_:1},8,["scroll"])}}};export{Q as default};