/* 
 * Make Time: 2024-03-23 20:32:34 
 * Kefu Type: 新版本客服 
 * 本客服系统由张家界鼎尖网络科技有限公司开发，已申请计算机软件著作权。
 * 受《国家计算机软件著作权法》保护，禁止任何形式的抄袭盗用，否则我们将依法追究相关法律责任。
 * 合作电话：0744-8383800 微信：18074477180 网址：www.zjjdj.com  法律顾问：代可律师
 * 功能列表：
 * 1、客服智能随机展示，一个页面可设置多个客服，访客访问会随机展现一个；
 * 2、客服展现智能锁定：访客访问，展示A客服后，不管刷新，还是分享链接给微信好友，都是显示A客服；
 * 3、手机，电脑，小程序，快速控制客服上下线；
 * 4、客服24小时自动排班上下线；
 * 5、客服可指定手机端和电脑端分开展现；
 * 6、客服信息加密，防止客服资料泄露，加密内容如下：
 */
var $_STORAGENAME = '1598443921';
var $_KFDEBUG = '0';
var $_KFLOCK = '1';
var $_KFINFO = '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';