## HTML
#### script标签
浏览器引擎分为
	1. 渲染引擎：负责取得网页的HTML CSS等绘制render tree，将结果输出到显示器上面。浏览器内核对不同语法解释不相同，需要考虑兼容性
	2. JS引擎，解析和执行JavaScript来实现网页的动态效果。

JS引擎和渲染引擎是互斥的，当JS脚本在执行的过程中，浏览器将控制权交给JS引擎，等到JS执行完毕再还给渲染引擎，不论JS是如何加载的，在执行阶段都会阻塞UI的渲染。内联JS随着HTML一起下载，执行时候会阻塞，外部JS脚本整个加载过程和执行过程都是阻塞渲染的。JS脚本不仅能访问DOM元素，还可以访问DOM样式，如果将要执行脚本时，浏览器尚未完成CSSOM的下载以及构建，浏览器会延迟脚本执行和DOM构建 ，直至CSSOM的下载和构建完成，CSSOM的构建会阻塞HTML渲染，也会阻塞JS的执行所以在HTML中建议将script标签写到body之下
##### defer async
```html
<script src="sample.js" defer></script>
<script src="sample.js" async></script>
```
defer/async与HTML并行下载，下载的过程不会阻塞 DOM 的构建，但是执行是会的，不同的是 defer 是在 DomContentLoaded 之前执行（相当于脚本写到body之后），async 是加载完之后立刻执行。
#### HTML语义化：
就是用合理、正确的标签来展示内容，比如h1~h6定义标题。
##### 优点：
	易于用户阅读，样式丢失的时候能让页面呈现清晰的结构。
	有利于SEO，搜索引擎根据标签来确定上下文和各个关键字的权重
	方便其他设备解析，如盲人阅读器根据语义渲染网页
	有利于开发和维护，语义化更具可读性，代码更好维护，与CSS3关系更和谐。
##### section article div区别
	section的作用是对页面进行分块处理，两个相邻的section有一定的关系，article相对来说是一个独立的整体，例如页面里的一篇文章。article 比 section 更具有独立性、完整性。可通过该段内容脱离了所在的语境，是否完整、独立来判断。用作样式处理或者js逻辑一类的最好使用div，本身没有什么语义，只是用来布局。
#### H5存储
在H5之前，客户端存储大多用cookie，H5引入了 localStorage 和 sessionStorage 增加了web存储的功能
##### 区别
###### localStorage
	可长期保存数据，
###### sessionStorage
	保存一个窗口的数据，假如窗口关闭，数据会被清理
###### 两者有相同的api
	localStorage.setItem(key，value)--存储;
	localStorage.getItem(key)--获取;
	localStorage.removeItem(key)--移除;
	localStorage.clear()--清理;
	sessionStorage.setItem(key，value);
	sessionStorage.getItem(key);
	sessionStorage.removeItem(key);
	sessionStorage.clear();
###### 优缺点和与cookie对比
	两者存储数据大小为5m左右，较cookie的大（cookie只能存4k左右，而且数量限制为20个），不直接参与服务端通信；api较清晰，操作较cookie简单，storage只是将数据保存在本地，http请求头一般会带上cookie的keyValue；
	但其保存的数据都是字符串，如果value想存对象等其他数据类型，则需要这些数据类型转换成字符串
	本人在项目开发中用过localStorage，api较为简洁实用，但是想存储除字符串以外的其他数据类型，建议最好做一层封装，而不是直接用JSON.stringify()去直接转换，因为这个api会有一些隐患和缺点，比如对循环引用的对象就会报错，不能处理function undefined等字段。
## CSS

#### BEM
##### 背景
css的样式应用是全局性的，没有作用域可言。
BEM的核心思想是，

	由于项目开发中，每个组件都是唯一无二的，其名字也是独一无二的，组件内部元素的名字都加上组件名，并用元素的名字作为选择器，自然组件内的样式就不会与组件外的样式冲突了。
##### 概念
这是通过组件名的唯一性来保证选择器的唯一性，从而保证样式不会污染到组件外。


BEM的意思就是块（block）、元素（element）、修饰符（modifier）,是由Yandex团队提出的一种前端命名方法论。这种命名让开发者维护起来更容易。BEM命名约定更加严格，而且包含更多的信息，它们用于一个团队开发一个耗时的大项目。

命名约定的模式如下：

	.block {}
	.block__element{}
	.block--modifier {}
在选择器中，由一下三种符号表示扩展关系：

	中划线：仅作为连字符使用，表示某个块或者某个子元素的多单词之间的连接符号
	双下划线：用来连接块和块的子元素；
	单下划线：单下划线用来描述一个块或者块的子元素的一种状态

如果我们用的是BEM，要覆盖样式很简单：找到要覆盖样式的元素，得知它的类名，在媒体查询中，用它的类名作为选择器，写下覆盖样式，样式就覆盖成功了，不需要担心前面样式的权重过大。

#### CSS modules

本人在个人开发里，比较喜欢按照BEM规范写CSS，或者利用CSS module，由于CSS的规则都是全局的，任何一个组件的样式对整个页面都有效果，产生局部作用域的方法就是使用一个独一无二的class名字，不会与其他选择器重名
```javascript
    rules: [
        {
            test: /\.css$/
            use:
            [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[path][name]_[local]_[hash:base64:5]'
                    }
                }
            ]
        }
    ]
```
    css-loader默认是 base64 算法，可以通过 localIdentName 定义类名
    CSS Modules 允许使用:global(.className)的语法，声明一个全局规则。凡是这样声明的class，都不会被编译成哈希字符串.
    CSS Modules 可以通过composes继承组合css规则
