(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{458:function(a,t,s){"use strict";s.r(t);var e=s(2),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"系统源更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统源更新"}},[a._v("#")]),a._v(" 系统源更新")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo apt update\n")])])]),t("h2",{attrs:{id:"安装git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装git"}},[a._v("#")]),a._v(" 安装Git")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo apt install git -y\n")])])]),t("h2",{attrs:{id:"配置github证书"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置github证书"}},[a._v("#")]),a._v(" 配置GitHub证书")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('ssh-keygen -t rsa -C "xxx@xxx.com"\n')])])]),t("p",[a._v("邮箱为当时注册GitHub账号时的邮箱，")]),a._v(" "),t("h2",{attrs:{id:"复制证书到github网站"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制证书到github网站"}},[a._v("#")]),a._v(" 复制证书到Github网站")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cat ~/.ssh/id_rsa.pub\n")])])]),t("p",[a._v("将显示的内容复制到"),t("code",[a._v("GitHub账号")]),a._v(" -> "),t("code",[a._v("Settings")]),a._v(" -> "),t("code",[a._v("SSH and GPG keys")]),a._v(" -> "),t("code",[a._v("New SSH Key")]),a._v(" 中")]),a._v(" "),t("h2",{attrs:{id:"配置用户名和邮箱"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置用户名和邮箱"}},[a._v("#")]),a._v(" 配置用户名和邮箱")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('git config user.name "USERNAME"\n')])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('git config user.email "EMAIL"\n')])])]),t("h2",{attrs:{id:"测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[a._v("#")]),a._v(" 测试")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ssh -T git@github.com\n")])])]),t("p",[a._v("显示"),t("code",[a._v("You've successfully authenticated")]),a._v("信息，表明设置成功！")])])}),[],!1,null,null,null);t.default=r.exports}}]);