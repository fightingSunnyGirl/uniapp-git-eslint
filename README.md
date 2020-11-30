### 开发工具 vscode
插件安装：
eslint插件 
prettier code formatter插件
uni app devtools插件
stylelint 插件

### eslint vscode 配置 settings.json：
// 每次保存时将代码按eslint格式进行保存
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
  "source.fixAll.stylelint": true,
},
"editor.rulers": [

],
"editor.tokenColorCustomizations": null,
// 编辑器是否开启校验
"eslint.codeAction.showDocumentation": {
  "enable": true
},
"editor.accessibilitySupport": "off",
"eslint.autoFixOnSave": true,
"notebook.kernelProviderAssociations": [

],

### 全局安装 eslint包
sudo npm install eslint -g

### git提交eslint强校验校验 不通过无法提交


### .eslintrc.js
用于配置js脚本校验规则

### .stylelintrc.json
用于配置style校验规则

### HbuilderX插件 HbuilderX编辑器主要用于打包 和 调试，开发请用指定编辑器=>vscode
sass 预编译

### 项目启动
1.npm install
2.HbuilderX=>运行=>到相关平台
3.开发期间启动指定编译页面 pages.json
 "condition": { //编译模式配置，仅开发期间生效  
	        "current": 0, //当前激活的编译模式（list 的索引项）  
	        "list": [{  
	            "name": "会员充值", //模式名称  
	            "pathName": "pages/user/member/index", //启动页面，必选  
	             "query": "id=1" //启动参数, QueryString 格式  
	        }]  
	    }
### 项目打包
HbuilderX 版本要求（目前版本2.9.8 ,后续版本要求再议）

### 目录结构
utils 文件夹用于存放一些公共js方法；
components 文件夹用于存放 公共组件；
pages 文件夹用于存放页面 每一个独立的页面为一个文件夹，需包含 .js .scss .vue三个文件（说明性文档或者js操作较少，可酌情缩减皆放到 .vue文件统一处理）；
servers 文件夹用于存放网络请求相关封装方法；
static 文件夹用于存放静态资源文件 例如图片、媒体资源等。

### 注意！！！
1.文件名称以及项目内js名称以小驼峰命名 例如 nameDefinition ，杜绝拼音式简写或全拼；
2.统一数据获取规范为 async/await；
3.项目开发ui或者需求文档，如有疑义或者功能不全之处，需记录下来，统一汇总。

### 其他说明
1.开发目标：以uni小程序为开发目标，优先使用以uni.XXX相关接口，若平台提供uni.XXX接口无法满足开发需求，条件编译使用 plus.XXX 调用原生方法 或 h5相关特有属性 例如：window、document等；






