(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{456:function(t,s,a){"use strict";a.r(s);var e=a(2),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),s("p",[t._v("本文章主要是说明GitHub和Gitee多账号共存的问题")]),t._v(" "),s("h2",{attrs:{id:"全部相同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全部相同"}},[t._v("#")]),t._v(" 全部相同")]),t._v(" "),s("p",[t._v("用户名、邮箱都相同的情况下，可以公用一个id_rsa证书，证书的名称、存储的位置均为默认时，可以公用同一个证书。只需要把id_rsa.pub的内容分别填如GitHub和Gitee中即可。------\x3e已经过证实可以正常使用"),s("br"),t._v("\n两个系统A/B，通过sftp下载A中的证书，再通过sftp上传到B中，可以迁移证书。------\x3e已经过证实可以正常使用")]),t._v(" "),s("h2",{attrs:{id:"部分相同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部分相同"}},[t._v("#")]),t._v(" 部分相同")]),t._v(" "),s("h3",{attrs:{id:"邮箱不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#邮箱不同"}},[t._v("#")]),t._v(" 邮箱不同")]),t._v(" "),s("p",[t._v("证书根据不同邮箱生成的，所以理论上必须生成不同的证书。")]),t._v(" "),s("h3",{attrs:{id:"用户名不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户名不同"}},[t._v("#")]),t._v(" 用户名不同")]),t._v(" "),s("p",[t._v("在不同项目下配置项目级的user.name应该时可以使用。------\x3e推测，待验证")]),t._v(" "),s("h3",{attrs:{id:"不同证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不同证书"}},[t._v("#")]),t._v(" 不同证书")]),t._v(" "),s("p",[t._v("待验证不同的情况"),s("br"),t._v("\n-证书名字不是默认的"),s("br"),t._v("\n-证书存储位置不是默认的"),s("br"),t._v("\n证书存储位置默认，存储的名字不是默认的，在不更改其他配置下，无法正常使用。------\x3e已经过证实无法正常使用"),s("br"),t._v("\n证书存储位置不是默认，存储名字是默认的，在不更改其他配置下，无法正常使用。------\x3e已经过证实无法正常使用")]),t._v(" "),s("p",[t._v("解决办法：在~/.ssh/下创建config文件，指定证书名称\\存储位置均可达到效果")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# GitHub\nHost github.com\n    HostName github.com\n    User <USER>\n    IdentityFile ~/.ssh/Github/id_rsa_github\n\t\n# Gitee\nhost gitee.com\n\tHostname gitee.com\n\tUser <USER>\n\tIdentityFile ~/.ssh/Gitee/id_rsa_gitee\n")])])]),s("p",[s("strong",[s("strong",[t._v("特别注意")])]),s("br"),t._v("\nid_rsa文件的权限要改为：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("chmod 700 ./id_rsa\n")])])]),s("p",[t._v("否则会提示证书没有授权")])])}),[],!1,null,null,null);s.default=r.exports}}]);