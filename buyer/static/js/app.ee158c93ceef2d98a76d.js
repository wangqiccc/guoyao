webpackJsonp([1],{0:function(t,e){},"1BXq":function(t,e){},"5Ucq":function(t,e){},"6N/Z":function(t,e){},"7Otq":function(t,e,a){t.exports=a.p+"./static/img/logo.17e5f41.png"},Ffw4:function(t,e){},L6NK:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},o,!1,function(t){a("L6NK")},null,null).exports,s=a("/ocq"),i={name:"Main",props:["active"],data:function(){return{isLogin:!1,ruleForm:{user:"",password:""},rules:{user:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{submitForm:function(){var t=this;this.$refs.myform.validate(function(e){if(!e)return console.log("error submit!!"),!1;t.$http.post("https://www.easy-mock.com/mock/5bed02249e6bbf680f549457/buyer/login",t.ruleForm).then(function(e){"200"===e.body.data.code?(t.$message({type:"success",message:"登录成功"}),t.isLogin=!0,sessionStorage.setItem("login","yes"),t.getData()):"10001"===e.body.data.code?t.$message({type:"error",message:"用户名错误"}):"10002"===e.body.data.code?t.$message({type:"error",message:"密码错误"}):t.$message({type:"error",message:"未知错误"})})})},logout:function(){sessionStorage.removeItem("login"),this.$message({type:"success",message:"退出成功"}),this.$router.push("/"),this.isLogin=!1}},mounted:function(){sessionStorage.getItem("login")&&(this.isLogin=!0)}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isLogin?n("div",{staticClass:"main"},[n("div",{attrs:{id:"topbar"}},[n("div",{attrs:{id:"container"}},[t._m(0),t._v(" "),n("span",{staticClass:"logout",on:{click:t.logout}},[t._v("退出")])])]),t._v(" "),n("div",{attrs:{id:"logobar"}},[n("img",{attrs:{src:a("7Otq"),alt:""}}),t._v(" "),n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.active,mode:"horizontal","active-text-color":"#44aeff",router:!0}},[n("el-menu-item",{attrs:{index:"1",route:{path:"/license"}}},[t._v("证照管理")]),t._v(" "),n("el-menu-item",{attrs:{index:"2",route:{path:"/company"}}},[t._v("供应商管理")]),t._v(" "),n("el-menu-item",{attrs:{index:"3",route:{path:"/agent"}}},[t._v("代理人管理")]),t._v(" "),n("el-menu-item",{attrs:{index:"4",route:{path:"/goods"}}},[t._v("货品比价")]),t._v(" "),n("el-menu-item",{attrs:{index:"5",disabled:""}},[t._v("财务结算")])],1)],1),t._v(" "),t._t("default")],2):n("div",{staticClass:"login"},[n("div",{attrs:{id:"logo"}}),t._v(" "),n("div",{attrs:{id:"loginbox"}},[n("el-form",{ref:"myform",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,"status-icon":"",rules:t.rules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"用户名",prop:"user"}},[n("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:t.ruleForm.user,callback:function(e){t.$set(t.ruleForm,"user",e)},expression:"ruleForm.user"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"密码",prop:"password"}},[n("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.ruleForm.password,callback:function(e){t.$set(t.ruleForm,"password",e)},expression:"ruleForm.password"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm()}}},[t._v("登录")])],1)],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"el-icon-info"}),this._v("  采购员 张三")])}]};var c=a("VU/8")(i,l,!1,function(t){a("bVNx")},"data-v-7822fb78",null).exports,m={data:function(){return{form:{id:"",name:""},tableData:[],total:0,currentPage:1}},methods:{handleCurrentChange:function(t){var e=this;this.$http.get("https://www.easy-mock.com/mock/5bed02249e6bbf680f549457/buyer/license?p="+t).then(function(t){e.tableData=t.body.data.data,e.total=t.body.data.total})},search:function(){var t=this;this.$http.get("https://www.easy-mock.com/mock/5bed02249e6bbf680f549457/buyer/license?id="+this.form.id+"&name="+this.form.name).then(function(e){t.$message({type:"success",message:"查询成功"}),t.tableData=e.body.data.data,t.total=e.body.data.total})}},components:{Basic:c},mounted:function(){var t=this;this.$http.get("https://www.easy-mock.com/mock/5bed02249e6bbf680f549457/buyer/license").then(function(e){t.tableData=e.body.data.data,t.total=e.body.data.total})}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"container"}},[a("Basic",{attrs:{active:"1"}},[a("div",{attrs:{id:"searchbar"}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.form}},[a("el-form-item",{attrs:{label:"供应商ID"}},[a("el-input",{attrs:{placeholder:"供应商ID"},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"供应商姓名"}},[a("el-input",{attrs:{placeholder:"供应商姓名"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")])],1)],1)],1),t._v(" "),a("div",{attrs:{id:"tablebar"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{fixed:"",prop:"companyid",label:"供应商id",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"",prop:"companyname",label:"供应商名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"companylicense",label:"供应商证照 将过期/已过期/总数",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"goodslicense",label:"药品证照 将过期/已过期/总数",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"success",size:"medium"}},[a("a",{attrs:{href:"#/licensedetail/"+e.row.companyid}},[t._v("查看")])])]}}])})],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"30px"}},[a("el-col",{staticStyle:{display:"flex","justify-content":"center"},attrs:{span:24}},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":10,layout:"prev, pager, next, jumper",total:t.total},on:{"size-change":function(t){},"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1)],1)],1)])],1)},staticRenderFns:[]};var u=a("VU/8")(m,d,!1,function(t){a("6N/Z")},"data-v-91f2ac76",null).exports,p={data:function(){return{clicense:[],mlicense:[]}},methods:{handleCurrentChange:function(t){var e=this;this.$http.get("https://www.easy-mock.com/mock/5bed02249e6bbf680f549457/buyer/license?p="+t).then(function(t){e.tableData=t.body.data.data,e.total=t.body.data.total})},search:function(){var t=this;this.$http.get("https://www.easy-mock.com/mock/5bed02249e6bbf680f549457/buyer/license?id="+this.form.id+"&name="+this.form.name).then(function(e){t.$message({type:"success",message:"查询成功"}),t.tableData=e.body.data.data,t.total=e.body.data.total})}},components:{Basic:c},mounted:function(){var t=this;this.$http.get("https://www.easy-mock.com/mock/5bed02249e6bbf680f549457/buyer/companylicense").then(function(e){t.clicense=e.body.data.clicense,t.mlicense=e.body.data.mlicense})}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"container"}},[a("Basic",{attrs:{active:"1"}},[a("div",{staticClass:"license"},[a("h3",[t._v("供应商证照")]),t._v(" "),a("div",{staticClass:"licensebox"},t._l(t.clicense,function(e){return a("div",{staticClass:"license-item"},[a("img",{attrs:{src:e.src,alt:""}}),t._v(" "),a("p",[t._v("证照名称 "+t._s(e.name))]),t._v(" "),a("p",[t._v("证照状态 "),2==e.status?a("span",[t._v("已过期")]):t._e(),1==e.status?a("span",[t._v("即将过期")]):t._e(),0==e.status?a("span",[t._v("正常")]):t._e()])])})),t._v(" "),t._l(t.mlicense,function(e){return a("div",[a("h3",[t._v("药品证照")]),t._v(" "),a("div",{staticClass:"licensebox"},t._l(e,function(e){return a("div",{staticClass:"license-item"},[a("img",{attrs:{src:e.src,alt:""}}),t._v(" "),a("p",[t._v("证照名称 "+t._s(e.name))]),t._v(" "),a("p",[t._v("证照状态 "),2==e.status?a("span",[t._v("已过期")]):t._e(),1==e.status?a("span",[t._v("即将过期")]):t._e(),0==e.status?a("span",[t._v("正常")]):t._e()])])}))])})],2)])],1)},staticRenderFns:[]};var b=a("VU/8")(p,f,!1,function(t){a("bItw")},"data-v-0149ad9b",null).exports,h={data:function(){return{form:{id:"",name:""},tableData:[],total:0,currentPage:1}},components:{Basic:c},methods:{handleCurrentChange:function(t){var e=this;this.$http.get("https://www.easy-mock.com/mock/5bed02249e6bbf680f549457/buyer/company?p="+t).then(function(t){e.tableData=t.body.data.data,e.total=t.body.data.total})},search:function(){var t=this;this.$http.get("https://www.easy-mock.com/mock/5bed02249e6bbf680f549457/buyer/company?id="+this.form.id+"&name="+this.form.name).then(function(e){t.$message({type:"success",message:"查询成功"}),t.tableData=e.body.data.data,t.total=e.body.data.total})}},mounted:function(){var t=this;this.$http.get("https://www.easy-mock.com/mock/5bed02249e6bbf680f549457/buyer/company").then(function(e){t.tableData=e.body.data.data,t.total=e.body.data.total})}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"container"}},[a("Basic",{attrs:{active:"2"}},[a("div",{attrs:{id:"searchbar"}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.form}},[a("el-form-item",{attrs:{label:"供应商ID"}},[a("el-input",{attrs:{placeholder:"供应商ID"},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"供应商姓名"}},[a("el-input",{attrs:{placeholder:"供应商姓名"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")])],1)],1)],1),t._v(" "),a("div",{attrs:{id:"tablebar"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{fixed:"",prop:"companyid",label:"供应商id",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"",prop:"companyname",label:"供应商名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"联系方式",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"goodsnum",label:"绑定药品数量",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"success",size:"medium"}},[a("a",{attrs:{href:"#/bindgoods?cid="+e.row.companyid}},[t._v("操作")])])]}}])})],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"30px"}},[a("el-col",{staticStyle:{display:"flex","justify-content":"center"},attrs:{span:24}},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":10,layout:"prev, pager, next, jumper",total:t.total},on:{"size-change":function(t){},"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1)],1)],1)])],1)},staticRenderFns:[]};var g=a("VU/8")(h,v,!1,function(t){a("Ffw4")},"data-v-63c20504",null).exports,y={data:function(){return{form:{id:"",name:""},tableData:[],total:0,currentPage:1}},components:{Basic:c},methods:{handleCurrentChange:function(t){var e=this;this.$http.get("https://www.easy-mock.com/mock/5bed02249e6bbf680f549457/buyer/agent?p="+t).then(function(t){e.tableData=t.body.data.data,e.total=t.body.data.total})},search:function(){var t=this;this.$http.get("https://www.easy-mock.com/mock/5bed02249e6bbf680f549457/buyer/agent?id="+this.form.id+"&name="+this.form.name).then(function(e){t.$message({type:"success",message:"查询成功"}),t.tableData=e.body.data.data,t.total=e.body.data.total})}},mounted:function(){var t=this;this.$http.get("https://www.easy-mock.com/mock/5bed02249e6bbf680f549457/buyer/agent").then(function(e){t.tableData=e.body.data.data,t.total=e.body.data.total})}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"container"}},[a("Basic",{attrs:{active:"3"}},[a("div",{attrs:{id:"searchbar"}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.form}},[a("el-form-item",{attrs:{label:"代理人ID"}},[a("el-input",{attrs:{placeholder:"代理人ID"},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"代理人姓名"}},[a("el-input",{attrs:{placeholder:"代理人姓名"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")])],1)],1)],1),t._v(" "),a("div",{attrs:{id:"tablebar"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{fixed:"",prop:"agentid",label:"代理人id",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"",prop:"agentname",label:"代理人姓名",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"联系方式",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"goodsnum",label:"绑定药品数量",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"success",size:"medium"}},[a("a",{attrs:{href:"#/bindgoods?aid="+e.row.agentid}},[t._v("操作")])])]}}])})],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"30px"}},[a("el-col",{staticStyle:{display:"flex","justify-content":"center"},attrs:{span:24}},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":10,layout:"prev, pager, next, jumper",total:t.total},on:{"size-change":function(t){},"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1)],1)],1)])],1)},staticRenderFns:[]};var w=a("VU/8")(y,_,!1,function(t){a("Nbv3")},"data-v-37e32b6c",null).exports,k={data:function(){return{form:{id:"",name:"",type:""},tableData:[],total:0,currentPage:1}},components:{Basic:c},methods:{handleCurrentChange:function(t){var e=this;this.$http.get("https://www.easy-mock.com/mock/5bed02249e6bbf680f549457/buyer/goods?p="+t).then(function(t){e.tableData=t.body.data.data,e.total=t.body.data.total})},search:function(){var t=this;this.$http.get("https://www.easy-mock.com/mock/5bed02249e6bbf680f549457/buyer/goods?id="+this.form.id+"&name="+this.form.name+"&t="+this.form.type).then(function(e){t.$message({type:"success",message:"查询成功"}),t.tableData=e.body.data.data,t.total=e.body.data.total})}},mounted:function(){var t=this;this.$http.get("https://www.easy-mock.com/mock/5bed02249e6bbf680f549457/buyer/goods").then(function(e){t.tableData=e.body.data.data,t.total=e.body.data.total})}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"container"}},[a("Basic",{attrs:{active:"4"}},[a("div",{attrs:{id:"searchbar"}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.form}},[a("el-form-item",{attrs:{label:"药品ID"}},[a("el-input",{attrs:{placeholder:"药品ID"},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"药品名称"}},[a("el-input",{attrs:{placeholder:"药品名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"药品类型"}},[a("el-input",{attrs:{placeholder:"药品类型"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")])],1)],1)],1),t._v(" "),a("div",{attrs:{id:"tablebar"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{fixed:"",prop:"goodsid",label:"药品ID",align:"center",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{fixed:"",prop:"goodsname",label:"药品名称",align:"center",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"goodstype",label:"规格",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"price",label:"单价",align:"center",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"goodsunit",label:"包装单位",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"种类",align:"center",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"medicentype",label:"剂型",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"scope",label:"适用范围",align:"center"}})],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"30px"}},[a("el-col",{staticStyle:{display:"flex","justify-content":"center"},attrs:{span:24}},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":10,layout:"prev, pager, next, jumper",total:t.total},on:{"size-change":function(t){},"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1)],1)],1)])],1)},staticRenderFns:[]};var $=a("VU/8")(k,x,!1,function(t){a("UMyJ")},"data-v-470d4e78",null).exports,D={data:function(){return{form:{id:"",name:"",type:""},tableData:[],total:0,active:"",currentPage:1,cid:0,aid:0}},components:{Basic:c},methods:{handleCurrentChange:function(t){var e=this;this.$http.get("https://www.easy-mock.com/mock/5bed02249e6bbf680f549457/buyer/goods?p="+t).then(function(t){e.tableData=t.body.data.data,e.total=t.body.data.total})},search:function(){var t=this;this.$http.get("https://www.easy-mock.com/mock/5bed02249e6bbf680f549457/buyer/goods?id="+this.form.id+"&name="+this.form.name+"&t="+this.form.type).then(function(e){t.$message({type:"success",message:"查询成功"}),t.tableData=e.body.data.data,t.total=e.body.data.total})},binding:function(t){var e=this;this.$confirm("确定要绑定该药品吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$http.put("https://www.easy-mock.com/mock/5bed02249e6bbf680f549457/buyer/bindgoods?gid="+t+"&cid="+e.cid+"&aid="+e.aid).then(function(t){200==t.body.data.code&&(e.$message({message:"绑定成功",type:"success"}),e.getData())})}).catch(function(){e.$message({type:"info",message:"已取消"})})},unbinding:function(t){var e=this;this.$confirm("确定要解绑该药品吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$http.put("https://www.easy-mock.com/mock/5bed02249e6bbf680f549457/buyer/unbindgoods?gid="+t+"&cid="+e.cid+"&aid="+e.aid).then(function(t){200==t.body.data.code&&(e.$message({message:"解除绑定成功",type:"success"}),e.getData())})}).catch(function(){e.$message({type:"info",message:"已取消"})})},getData:function(){var t=this;this.$http.get("https://www.easy-mock.com/mock/5bed02249e6bbf680f549457/buyer/goods").then(function(e){t.tableData=e.body.data.data,t.total=e.body.data.total})}},mounted:function(){this.getData(),this.cid=this.$route.query.cid,this.cid&&(this.active="2"),this.aid=this.$route.query.aid,this.aid&&(this.active="3")}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"container"}},[a("Basic",{attrs:{active:t.active}},[a("div",{attrs:{id:"searchbar"}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.form}},[a("el-form-item",{attrs:{label:"药品ID"}},[a("el-input",{attrs:{placeholder:"药品ID"},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"药品名称"}},[a("el-input",{attrs:{placeholder:"药品名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"药品类型"}},[a("el-input",{attrs:{placeholder:"药品类型"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")])],1)],1)],1),t._v(" "),a("div",{attrs:{id:"tablebar"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{fixed:"",prop:"goodsid",label:"药品ID",align:"center",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{fixed:"",prop:"goodsname",label:"药品名称",align:"center",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"goodstype",label:"规格",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"price",label:"单价",align:"center",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"goodsunit",label:"包装单位",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"种类",align:"center",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"medicentype",label:"剂型",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"scope",label:"适用范围",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.status?a("el-button",{on:{click:function(a){t.binding(e.row.goodsid)}}},[t._v("绑定")]):a("el-button",{on:{click:function(a){t.unbinding(e.row.goodsid)}}},[t._v("解除绑定")])]}}])})],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"30px"}},[a("el-col",{staticStyle:{display:"flex","justify-content":"center"},attrs:{span:24}},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":10,layout:"prev, pager, next, jumper",total:t.total},on:{"size-change":function(t){},"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1)],1)],1)])],1)},staticRenderFns:[]};var S=a("VU/8")(D,C,!1,function(t){a("1BXq")},"data-v-598d9e5e",null).exports,F={data:function(){return{a:{name:"",phone:""},rules:{name:[{required:!0,message:"请填写名称",trigger:"blur"}],phone:[{required:!0,message:"请填写联系方式",trigger:"blur"}]},m:[{name:"",price:"",type:"",goodstype:"",medientype:"",scope:""}]}},methods:{add:function(){this.m.push({name:"",price:"",type:"",goodstype:"",medientype:"",scope:""})},del:function(t){this.$message({message:"删除成功",type:"success"}),this.m.splice(t,1)},submit:function(){var t=this;this.$refs.myform.validate(function(e){if(!e)return!1;var a={a:t.a,m:t.m};t.$http.post("https://www.easy-mock.com/mock/5bed02249e6bbf680f549457/buyer/addgoods",a).then(function(e){200==e.body.data.code&&t.$message({type:"success",message:"申请已发出"})})})}},mounted:function(){var t=this.$refs.type;window.onscroll=function(){var e=document.documentElement.scrollTop;t.style.cssText=e>348?"position:fixed;top:0;":""}}},P={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"container"}},[a("div",{attrs:{id:"top"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",{attrs:{id:"content"}},[a("h3",[t._v("个人信息")]),t._v(" "),a("el-form",{ref:"myform",staticStyle:{"margin-bottom":"50px"},attrs:{inline:!0,rules:t.rules,model:t.a}},[a("el-form-item",{attrs:{label:"代理人姓名",prop:"name"}},[a("el-input",{model:{value:t.a.name,callback:function(e){t.$set(t.a,"name",e)},expression:"a.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"代理人联系方式",prop:"phone"}},[a("el-input",{model:{value:t.a.phone,callback:function(e){t.$set(t.a,"phone",e)},expression:"a.phone"}})],1)],1),t._v(" "),a("h3",{ref:"type",staticClass:"type"},[t._v("药品种类\n                "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:t.add}},[t._v("添加药品")])],1),t._v(" "),t._l(t.m,function(e,n){return a("el-row",{key:n},[a("el-col",[a("h4",[t._v("药品"+t._s(n+1)+"\n                        "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"danger"},on:{click:function(e){t.del(n)}}},[t._v("移除药品")])],1),t._v(" "),a("el-form",{attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"药品名称"}},[a("el-input",{model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"item.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"药品单价"}},[a("el-input",{model:{value:e.price,callback:function(a){t.$set(e,"price",a)},expression:"item.price"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"药品剂型"}},[a("el-input",{model:{value:e.type,callback:function(a){t.$set(e,"type",a)},expression:"item.type"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"药品类型"}},[a("el-input",{model:{value:e.goodstype,callback:function(a){t.$set(e,"goodstype",a)},expression:"item.goodstype"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"药品规格"}},[a("el-input",{model:{value:e.medicentype,callback:function(a){t.$set(e,"medicentype",a)},expression:"item.medicentype"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"适用范围"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.scope,callback:function(a){t.$set(e,"scope",a)},expression:"item.scope"}})],1)],1)],1)],1)}),t._v(" "),a("el-row",[a("el-col",{attrs:{span:10,offsset:4}},[a("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")])],1)],1)],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"inner"}},[e("img",{attrs:{src:a("7Otq"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"title"}},[e("h1",[this._v("欢迎入驻")]),this._v(" "),e("h2",[this._v("国药集团山西有限公司代理团队")])])}]};var B=a("VU/8")(F,P,!1,function(t){a("5Ucq")},null,null).exports;n.default.use(s.a);var I=new s.a({routes:[{path:"/",component:u},{path:"/license",component:u},{path:"/company",component:g},{path:"/agent",component:w},{path:"/goods",component:$},{path:"/bindgoods",component:S},{path:"/licensedetail/:id",component:b},{path:"/join",component:B}]}),q=a("zL8q"),z=a.n(q),E=a("8+8L");a("tvR6");n.default.config.productionTip=!1,n.default.use(z.a),n.default.use(E.a),new n.default({el:"#app",router:I,components:{App:r},template:"<App/>"})},Nbv3:function(t,e){},UMyJ:function(t,e){},bItw:function(t,e){},bVNx:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ee158c93ceef2d98a76d.js.map