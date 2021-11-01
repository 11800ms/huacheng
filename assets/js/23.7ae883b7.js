(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{524:function(a,s,t){"use strict";t.r(s);var e=t(3),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"索引使用场景-重点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引使用场景-重点"}},[a._v("#")]),a._v(" 索引使用场景（重点）")]),a._v(" "),t("p",[a._v("where\n"),t("img",{attrs:{src:"https://11800ms.github.io/huacheng/assets/img/java/2021-mysql-01.png",alt:""}}),a._v("\n上图中，根据id查询记录，因为id字段仅建立了主键索引，因此此SQL执行可选的索引只有主键索引，如果有多个，最终会选一个较优的作为检索的依据。")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("增加一个没有建立索引的字段\nalter table innodb1 add sex "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v(".6")]),a._v("\n 按sex检索时可选的索引为"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),a._v("\nEXPLAIN SELECT "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" from innodb1 where sex"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'男'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://11800ms.github.io/huacheng/assets/img/java/2021-mysql-02.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("可以尝试在一个字段未建立索引时，根据该字段查询的效率，然后对该字段建立索引（alter table 表名 add index(字段名)），同样的SQL执行的效率，你会发现查询效率会有明显的提升（数据量越大越明显）。")])]),a._v(" "),t("h3",{attrs:{id:"order-by"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#order-by"}},[a._v("#")]),a._v(" order by")]),a._v(" "),t("ul",[t("li",[a._v("当我们使用order by将查询结果按照某个字段排序时，如果该字段没有建立索引，那么执行计划会将查询出的所有数据使用外部排序（将数据从硬盘分批读取到内存使用内部排序，最后合并排序结果），这个操作是很影响性能的，因为需要将查询涉及到的所有数据从磁盘中读到内存（如果单条数据过大或者数据量过多都会降低效率），更无论读到内存之后的排序了。")]),a._v(" "),t("li",[a._v("但是如果我们对该字段建立索引alter table 表名 add index(字段名)，那么由于索引本身是有序的，因此直接按照索引的顺序和映射关系逐条取出数据即可。而且如果分页的，那么只用取出索引表某个范围内的索引对应的数据，而不用像上述那取出所有数据进行排序再返回某个范围内的数据。（从磁盘取数据是最影响性能的）")])]),a._v(" "),t("ul",[t("li",[a._v("对join语句匹配关系（on）涉及的字段建立索引能够提高效率\n索引覆盖")]),a._v(" "),t("li",[a._v("如果要查询的字段都建立过索引，那么引擎会直接在索引表中查询而不会访问原始数据（否则只要有一个字段没有建立索引就会做全表扫描），这叫索引覆盖。因此我们需要尽可能的在select后只写必要的查询字段，以增加索引覆盖的几率。\n这里值得注意的是不要想着为每个字段建立索引，因为优先使用索引的优势就在于其体积小。")])]),a._v(" "),t("h2",{attrs:{id:"索引有哪几种类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引有哪几种类型"}},[a._v("#")]),a._v(" 索引有哪几种类型？")]),a._v(" "),t("p",[a._v("主键索引: 数据列不允许重复，不允许为NULL，一个表只能有一个主键。\n唯一索引: 数据列不允许重复，允许为NULL值，一个表允许多个列创建唯一索引。")]),a._v(" "),t("blockquote",[t("ul",[t("li",[a._v("可以通过 ALTER TABLE table_name ADD UNIQUE (column); 创建唯一索引")]),a._v(" "),t("li",[a._v("可以通过 ALTER TABLE table_name ADD UNIQUE (column1,column2); 创建唯一组合索引\n普通索引: 基本的索引类型，没有唯一性的限制，允许为NULL值")]),a._v(" "),t("li",[a._v("可以通过ALTER TABLE table_name ADD INDEX index_name (column);创建普通索引")]),a._v(" "),t("li",[a._v("可以通过ALTER TABLE table_name ADD INDEX index_name(column1, column2, column3);创建组合索引\n全文索引： 是目前搜索引擎使用的一种关键技术。")]),a._v(" "),t("li",[a._v("可以通过ALTER TABLE table_name ADD FULLTEXT (column);创建全文索引")])])]),a._v(" "),t("h2",{attrs:{id:"索引的数据结构-b树-hash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引的数据结构-b树-hash"}},[a._v("#")]),a._v(" 索引的数据结构（b树，hash）")]),a._v(" "),t("p",[a._v("索引的数据结构和具体存储引擎的实现有关，在MySQL中使用较多的索引有Hash索引，B+树索引等，而我们经常使用的InnoDB存储引擎的默认索引实现为：B+树索引。对于哈希索引来说，底层的数据结构就是哈希表，因此在绝大多数需求为单条记录查询的时候，可以选择哈希索引，查询性能最快；其余大部分场景，建议选择BTree索引。")]),a._v(" "),t("h3",{attrs:{id:"_1-b树索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-b树索引"}},[a._v("#")]),a._v(" 1）B树索引")]),a._v(" "),t("p",[a._v("mysql通过存储引擎取数据，基本上90%的人用的就是InnoDB了，按照实现方式分，InnoDB的索引类型目前只有两种：BTREE（B树）索引和HASH索引。B树索引是Mysql数据库中使用最频繁的索引类型，基本所有存储引擎都支持BTree索引。通常我们说的索引不出意外指的就是（B树）索引（实际是用B+树实现的，因为在查看表索引时，mysql一律打印BTREE，所以简称为B树索引）\n"),t("img",{attrs:{src:"https://11800ms.github.io/huacheng/assets/img/java/2021-mysql-03.png",alt:""}}),a._v("\n查询方式：")]),a._v(" "),t("ul",[t("li",[a._v("主键索引区:PI(关联保存的时数据的地址)按主键查询,")]),a._v(" "),t("li",[a._v("普通索引区:si(关联的id的地址,然后再到达上面的地址)。所以按主键查询,速度最快\nB+tree性质：")]),a._v(" "),t("li",[a._v("1.）n棵子tree的节点包含n个关键字，不用来保存数据而是保存数据的索引。")]),a._v(" "),t("li",[a._v("2.）所有的叶子结点中包含了全部关键字的信息，及指向含这些关键字记录的指针，且叶子结点本身依关键字的大小自小而大顺序链接。")]),a._v(" "),t("li",[a._v("3.）所有的非终端结点可以看成是索引部分，结点中仅含其子树中的最大（或最小）关键字。")]),a._v(" "),t("li",[a._v("4.）B+ 树中，数据对象的插入和删除仅在叶节点上进行。")]),a._v(" "),t("li",[a._v("5.）B+树有2个头指针，一个是树的根节点，一个是最小关键码的叶节点。\n2）哈希索引")]),a._v(" "),t("li",[a._v("简要说下，类似于数据结构中简单实现的HASH表（散列表）一样，当我们在mysql中用哈希索引时，主要就是通过Hash算法（常见的Hash算法有直接定址法、平方取中法、折叠法、除数取余法、随机数法），将数据库字段数据转换成定长的Hash值，与这条数据的行指针一并存入Hash表的对应位置；如果发生Hash碰撞（两个不同关键字的Hash值相同），则在对应Hash键下以链表形式存储。当然这只是简略模拟图。\n"),t("img",{attrs:{src:"https://11800ms.github.io/huacheng/assets/img/java/2021-mysql-03.png",alt:""}})])]),a._v(" "),t("h2",{attrs:{id:"索引的基本原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引的基本原理"}},[a._v("#")]),a._v(" 索引的基本原理")]),a._v(" "),t("p",[a._v("索引用来快速地寻找那些具有特定值的记录。如果没有索引，一般来说执行查询时遍历整张表。")]),a._v(" "),t("ul",[t("li",[a._v("索引的原理很简单，就是把无序的数据变成有序的查询\n"),t("ul",[t("li",[a._v("把创建了索引的列的内容进行排序")]),a._v(" "),t("li",[a._v("对排序结果生成倒排表")]),a._v(" "),t("li",[a._v("在倒排表内容上拼上数据地址链")]),a._v(" "),t("li",[a._v("在查询的时候，先拿到倒排表内容，再取出数据地址链，从而拿到具体数据")])])])]),a._v(" "),t("h2",{attrs:{id:"索引算法有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引算法有哪些"}},[a._v("#")]),a._v(" 索引算法有哪些？")]),a._v(" "),t("p",[a._v("索引算法有 BTree算法和Hash算法")]),a._v(" "),t("h3",{attrs:{id:"btree算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#btree算法"}},[a._v("#")]),a._v(" BTree算法")]),a._v(" "),t("p",[a._v("BTree是最常用的mysql数据库索引算法，也是mysql默认的算法。因为它不仅可以被用在=,>,>=,<,<=和between这些比较操作符上，而且还可以用于like操作符，只要它的查询条件是一个不以通配符开头的常量， 例如：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v(" 只要它的查询条件是一个不以通配符开头的常量\nselect "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" from user where name like "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'jack%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v(" 如果一通配符开头，或者没有使用常量，则不会使用索引，例如： \nselect "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" from user where name like "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'%jack'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h3",{attrs:{id:"hash算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hash算法"}},[a._v("#")]),a._v(" Hash算法")]),a._v(" "),t("p",[a._v("Hash Hash索引只能用于对等比较，例如=,<=>（相当于=）操作符。由于是一次定位数据，不像BTree索引需要从根节点到枝节点，最后才能访问到页节点这样多次IO访问，所以检索效率远高于BTree索引。")]),a._v(" "),t("h2",{attrs:{id:"索引设计的原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引设计的原则"}},[a._v("#")]),a._v(" 索引设计的原则？")]),a._v(" "),t("ul",[t("li",[a._v("适合索引的列是出现在where子句中的列，或者连接子句中指定的列")]),a._v(" "),t("li",[a._v("基数较小的类，索引效果较差，没有必要在此列建立索引")]),a._v(" "),t("li",[a._v("使用短索引，如果对长字符串列进行索引，应该指定一个前缀长度，这样能够节省大量索引空间")]),a._v(" "),t("li",[a._v("不要过度索引。索引需要额外的磁盘空间，并降低写操作的性能。在修改表内容的时候，索引会进行更新甚至重构，索引列越多，这个时间就会越长。所以只保持需要的索引有利于查询即可。")])]),a._v(" "),t("h2",{attrs:{id:"创建索引的原则-重中之重"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建索引的原则-重中之重"}},[a._v("#")]),a._v(" 创建索引的原则（重中之重）")]),a._v(" "),t("p",[a._v("索引虽好，但也不是无限制的使用，最好符合一下几个原则")]),a._v(" "),t("ul",[t("li",[a._v("1） 最左前缀匹配原则，组合索引非常重要的原则，mysql会一直向右匹配直到遇到范围查询(>、<、between、like)就停止匹配，比如a = 1 and b = 2 and c > 3 and d = 4 如果建立(a,b,c,d)顺序的索引，d是用不到索引的，如果建立(a,b,d,c)的索引则都可以用到，a,b,d的顺序可以任意调整。")]),a._v(" "),t("li",[a._v("2）较频繁作为查询条件的字段才去创建索引")]),a._v(" "),t("li",[a._v("3）更新频繁字段不适合创建索引")]),a._v(" "),t("li",[a._v("4）若是不能有效区分数据的列不适合做索引列(如性别，男女未知，最多也就三种，区分度实在太低)")]),a._v(" "),t("li",[a._v("5）尽量的扩展索引，不要新建索引。比如表中已经有a的索引，现在要加(a,b)的索引，那么只需要修改原来的索引即可。")]),a._v(" "),t("li",[a._v("6）定义有外键的数据列一定要建立索引。")]),a._v(" "),t("li",[a._v("7）对于那些查询中很少涉及的列，重复值比较多的列不要建立索引。")]),a._v(" "),t("li",[a._v("8）对于定义为text、image和bit的数据类型的列不要建立索引。")])]),a._v(" "),t("h2",{attrs:{id:"创建索引的三种方式-删除索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建索引的三种方式-删除索引"}},[a._v("#")]),a._v(" 创建索引的三种方式，删除索引")]),a._v(" "),t("p",[a._v("第一种方式：在执行CREATE TABLE时创建索引")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("CREATE "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TABLE")]),a._v(" user_index2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n\tid INT auto_increment "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PRIMARY")]),a._v(" KEY"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\tfirst_name VARCHAR "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\tlast_name VARCHAR "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\tid_card VARCHAR "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("18")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\tinformation text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("KEY")]),a._v(" name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("first_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" last_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FULLTEXT")]),a._v(" KEY "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("information"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("UNIQUE")]),a._v(" KEY "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("id_card"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br")])]),t("p",[a._v("第二种方式：使用ALTER TABLE命令去增加索引")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("ALTER TABLE table_name ADD "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("INDEX")]),a._v(" index_name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("column_list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("第三种方式：使用CREATE INDEX命令创建")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("CREATE INDEX index_name "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ON")]),a._v(" table_name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("column_list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("删除索引")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("alter table user_index drop "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("KEY")]),a._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nalter table user_index drop "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("KEY")]),a._v(" id_card"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nalter table user_index drop "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("KEY")]),a._v(" information"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("删除主键索引：alter table 表名 drop primary key（因为主键只有一个）。这里值得注意的是，如果主键自增长，那么不能直接执行此操作（自增长依赖于主键索引）")]),a._v(" "),t("ul",[t("li",[a._v("需要取消自增长再行删除：")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("alter table user_index\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 重新定义字段")]),a._v("\nMODIFY id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\ndrop PRIMARY KEY\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h2",{attrs:{id:"创建索引时需要注意什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建索引时需要注意什么"}},[a._v("#")]),a._v(" 创建索引时需要注意什么？")]),a._v(" "),t("ul",[t("li",[a._v("非空字段：应该指定列为NOT NULL，除非你想存储NULL。在mysql中，含有空值的列很难进行查询优化，因为它们使得索引、索引的统计信息以及比较运算更加复杂。你应该用0、一个特殊的值或者一个空串代替空值；")]),a._v(" "),t("li",[a._v("取值离散大的字段：（变量各个取值之间的差异程度）的列放到联合索引的前面，可以通过count()函数查看字段的差异值，返回值越大说明字段的唯一值越多字段的离散程度高；")]),a._v(" "),t("li",[a._v("索引字段越小越好：数据库的数据存储以页为单位一页存储的数据越多一次IO操作获取的数据越大效率越高。")])]),a._v(" "),t("h2",{attrs:{id:"使用索引查询一定能提高查询的性能吗-为什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用索引查询一定能提高查询的性能吗-为什么"}},[a._v("#")]),a._v(" 使用索引查询一定能提高查询的性能吗？为什么")]),a._v(" "),t("p",[a._v("通常，通过索引查询数据比全表扫描要快。但是我们也必须注意到它的代价。")]),a._v(" "),t("ul",[t("li",[a._v("索引需要空间来存储，也需要定期维护， 每当有记录在表中增减或索引列被修改时，索引本身也会被修改。 这意味着每条记录的INSERT，DELETE，UPDATE将为此多付出4，5 次的磁盘I/O。 因为索引需要额外的存储空间和处理，那些不必要的索引反而会使查询反应时间变慢。使用索引查询不一定能提高查询性能，索引范围查询(INDEX RANGE SCAN)适用于两种情况:")]),a._v(" "),t("li",[a._v("基于一个范围的检索，一般查询返回结果集小于表中记录数的30%")]),a._v(" "),t("li",[a._v("基于非唯一性索引的检索")])]),a._v(" "),t("h2",{attrs:{id:"百万级别或以上的数据如何删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#百万级别或以上的数据如何删除"}},[a._v("#")]),a._v(" 百万级别或以上的数据如何删除")]),a._v(" "),t("p",[a._v("关于索引：由于索引需要额外的维护成本，因为索引文件是单独存在的文件,所以当我们对数据的增加,修改,删除,都会产生额外的对索引文件的操作,这些操作需要消耗额外的IO,会降低增/改/删的执行效率。所以，在我们删除数据库百万级别数据的时候，查询MySQL官方手册得知删除数据的速度和创建的索引数量是成正比的。")]),a._v(" "),t("ul",[t("li",[a._v("所以我们想要删除百万数据的时候可以先删除索引（此时大概耗时三分多钟）")]),a._v(" "),t("li",[a._v("然后删除其中无用数据（此过程需要不到两分钟）")]),a._v(" "),t("li",[a._v("删除完成后重新创建索引(此时数据较少了)创建索引也非常快，约十分钟左右。")]),a._v(" "),t("li",[a._v("与之前的直接删除绝对是要快速很多，更别说万一删除中断,一切删除会回滚。那更是坑了。")])]),a._v(" "),t("h2",{attrs:{id:"事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[a._v("#")]),a._v(" 事务")]),a._v(" "),t("h3",{attrs:{id:"什么是数据库事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是数据库事务"}},[a._v("#")]),a._v(" 什么是数据库事务？")]),a._v(" "),t("p",[a._v("事务是一个不可分割的数据库操作序列，也是数据库并发控制的基本单位，其执行的结果必须使数据库从一种一致性状态变到另一种一致性状态。事务是逻辑上的一组操作，要么都执行，要么都不执行。")]),a._v(" "),t("ul",[t("li",[a._v("举个最简单的例子就是转账了\n"),t("ul",[t("li",[a._v("小明向小红转账1000元，正常的流程就是小明余额减少1000，小红余额增加1000。如果转账系统出现瘫痪崩溃，导致小明余额减少而小红的余额没有增加，这样就不对，事务就是保证这两个关键操作要么都成功，要么都要失败。")])])])]),a._v(" "),t("h2",{attrs:{id:"事物的四大特性-acid-介绍一下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事物的四大特性-acid-介绍一下"}},[a._v("#")]),a._v(" 事物的四大特性(ACID)介绍一下?")]),a._v(" "),t("p",[a._v("关系性数据库需要遵循ACID规则，具体内容如下：")]),a._v(" "),t("ul",[t("li",[a._v("原子性： 事务是最小的执行单位，不允许分割。事务的原子性确保动作要么全部完成，要么完全不起作用；")]),a._v(" "),t("li",[a._v("一致性： 执行事务前后，数据保持一致，多个事务对同一个数据读取的结果是相同的；")]),a._v(" "),t("li",[a._v("隔离性： 并发访问数据库时，一个用户的事务不被其他事务所干扰，各并发事务之间数据库是独立的；")]),a._v(" "),t("li",[a._v("持久性： 一个事务被提交之后。它对数据库中数据的改变是持久的，即使数据库发生故障也不应该对其有任何影响。")])]),a._v(" "),t("h2",{attrs:{id:"什么是死锁-怎么解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是死锁-怎么解决"}},[a._v("#")]),a._v(" 什么是死锁？怎么解决？")]),a._v(" "),t("p",[a._v("死锁是指两个或多个事务在同一资源上相互占用，并请求锁定对方的资源，从而导致恶性循环的现象。\n常见的解决死锁的方法")]),a._v(" "),t("ul",[t("li",[a._v("1、如果不同程序会并发存取多个表，尽量约定以相同的顺序访问表，可以大大降低死锁机会。")]),a._v(" "),t("li",[a._v("2、在同一个事务中，尽可能做到一次锁定所需要的所有资源，减少死锁产生概率；")]),a._v(" "),t("li",[a._v("3、对于非常容易产生死锁的业务部分，可以尝试使用升级锁定颗粒度，通过表级锁定来减少死锁产生的概率；")])]),a._v(" "),t("h2",{attrs:{id:"视图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#视图"}},[a._v("#")]),a._v(" 视图")]),a._v(" "),t("h3",{attrs:{id:"为什么要使用视图-什么是视图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用视图-什么是视图"}},[a._v("#")]),a._v(" 为什么要使用视图？什么是视图？")]),a._v(" "),t("p",[a._v("为了提高复杂SQL语句的复用性和表操作的安全性，MySQL数据库管理系统提供了视图特性。所谓视图，本质上是一种虚拟表，在物理上是不存在的，其内容与真实的表相似，包含一系列带有名称的列和行数据。但是，视图并不在数据库中以储存的数据值形式存在。行和列数据来自定义视图的查询所引用基本表，并且在具体引用视图时动态生成。")]),a._v(" "),t("ul",[t("li",[a._v("视图使开发者只关心感兴趣的某些特定数据和所负责的特定任务，只能看到视图中所定义的数据，而不是视图所引用表中的数据，从而提高了数据库中数据的安全性。")])]),a._v(" "),t("h3",{attrs:{id:"视图有哪些特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#视图有哪些特点"}},[a._v("#")]),a._v(" 视图有哪些特点？")]),a._v(" "),t("p",[a._v("视图的特点如下:")]),a._v(" "),t("ul",[t("li",[a._v("视图的列可以来自不同的表，是表的抽象和在逻辑意义上建立的新关系。")]),a._v(" "),t("li",[a._v("视图是由基本表(实表)产生的表(虚表)。")]),a._v(" "),t("li",[a._v("视图的建立和删除不影响基本表。")]),a._v(" "),t("li",[a._v("对视图内容的更新(添加，删除和修改)直接影响基本表。")]),a._v(" "),t("li",[a._v("当视图来自多个基本表时，不允许添加和删除数据。\n视图的操作包括创建视图，查看视图，删除视图和修改视图。")])]),a._v(" "),t("h2",{attrs:{id:"视图的使用场景有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#视图的使用场景有哪些"}},[a._v("#")]),a._v(" 视图的使用场景有哪些？")]),a._v(" "),t("p",[a._v("视图根本用途：简化sql查询，提高开发效率。如果说还有另外一个用途那就是兼容老的表结构。")]),a._v(" "),t("ul",[t("li",[a._v("下面是视图的常见使用场景：\n"),t("ul",[t("li",[a._v("重用SQL语句；")]),a._v(" "),t("li",[a._v("简化复杂的SQL操作。在编写查询后，可以方便的重用它而不必知道它的基本查询细节；")]),a._v(" "),t("li",[a._v("使用表的组成部分而不是整个表；")]),a._v(" "),t("li",[a._v("保护数据。可以给用户授予表的特定部分的访问权限而不是整个表的访问权限；")]),a._v(" "),t("li",[a._v("更改数据格式和表示。视图可返回与底层表的表示和格式不同的数据。")])])])]),a._v(" "),t("h2",{attrs:{id:"视图的优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#视图的优点"}},[a._v("#")]),a._v(" 视图的优点")]),a._v(" "),t("ul",[t("li",[a._v("查询简单化。视图能简化用户的操作")]),a._v(" "),t("li",[a._v("数据安全性。视图使用户能以多种角度看待同一数据，能够对机密数据提供安全保护")]),a._v(" "),t("li",[a._v("逻辑数据独立性。视图对重构数据库提供了一定程度的逻辑独立性")])]),a._v(" "),t("h2",{attrs:{id:"视图的缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#视图的缺点"}},[a._v("#")]),a._v(" 视图的缺点")]),a._v(" "),t("ul",[t("li",[a._v("性能。数据库必须把视图的查询转化成对基本表的查询，如果这个视图是由一个复杂的多表查询所定义，那么，即使是视图的一个简单查询，数据库也把它变成一个复杂的结合体，需要花费一定的时间。")]),a._v(" "),t("li",[a._v("修改限制。当用户试图修改视图的某些行时，数据库必须把它转化为对基本表的某些行的修改。事实上，当从视图中插入或者删除时，情况也是这样。对于简单视图来说，这是很方便的，但是，对于比较复杂的视图，可能是不可修改的")]),a._v(" "),t("li",[a._v("这些视图有如下特征：1.有UNIQUE等集合操作符的视图。2.有GROUP BY子句的视图。3.有诸如AVG\\SUM\\MAX等聚合函数的视图。 4.使用DISTINCT关键字的视图。5.连接表的视图（其中有些例外）")])]),a._v(" "),t("h2",{attrs:{id:"sql-约束有哪几种"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql-约束有哪几种"}},[a._v("#")]),a._v(" SQL 约束有哪几种？")]),a._v(" "),t("ul",[t("li",[a._v("SQL 约束有哪几种？")])]),a._v(" "),t("ul",[t("li",[a._v("NOT NULL: 用于控制字段的内容一定不能为空（NULL）。")]),a._v(" "),t("li",[a._v("UNIQUE: 控件字段内容不能重复，一个表允许有多个 Unique 约束。")]),a._v(" "),t("li",[a._v("PRIMARY KEY: 也是用于控件字段内容不能重复，但它在一个表只允许出现一个。")]),a._v(" "),t("li",[a._v("FOREIGN KEY: 用于预防破坏表之间连接的动作，也能防止非法数据插入外键列，因为它必须是它指向的那个表中的值之一。")]),a._v(" "),t("li",[a._v("CHECK: 用于控制字段的值范围。")])]),a._v(" "),t("h2",{attrs:{id:"六种关联查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六种关联查询"}},[a._v("#")]),a._v(" 六种关联查询")]),a._v(" "),t("ul",[t("li",[a._v("交叉连接（CROSS JOIN）")]),a._v(" "),t("li",[a._v("内连接（INNER JOIN）")]),a._v(" "),t("li",[a._v("外连接（LEFT JOIN/RIGHT JOIN）")]),a._v(" "),t("li",[a._v("联合查询（UNION与UNION ALL）")]),a._v(" "),t("li",[a._v("全连接（FULL JOIN）")]),a._v(" "),t("li",[a._v("交叉连接（CROSS JOIN）")])]),a._v(" "),t("h2",{attrs:{id:"sql的生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql的生命周期"}},[a._v("#")]),a._v(" SQL的生命周期？")]),a._v(" "),t("ul",[t("li",[a._v("应用服务器与数据库服务器建立一个连接")]),a._v(" "),t("li",[a._v("数据库进程拿到请求sql")]),a._v(" "),t("li",[a._v("解析并生成执行计划，执行")]),a._v(" "),t("li",[a._v("读取数据到内存并进行逻辑处理")]),a._v(" "),t("li",[a._v("通过步骤一的连接，发送结果到客户端")]),a._v(" "),t("li",[a._v("关掉连接，释放资源")])]),a._v(" "),t("h2",{attrs:{id:"mysql-分页"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-分页"}},[a._v("#")]),a._v(" mysql 分页")]),a._v(" "),t("p",[a._v("LIMIT 子句可以被用于强制 SELECT 语句返回指定的记录数。LIMIT 接受一个或两个数字参数。参数必须是一个整数常量。如果给定两个参数，第一个参数指定第一个返回记录行的偏移量，第二个参数指定返回记录行的最大数目。初始记录行的偏移量是 0(而不是 1)")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mysql> SELECT * FROM table LIMIT 5,10; // 检索记录行 6-15 \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("为了检索从某一个偏移量到记录集的结束所有的记录行，可以指定第二个参数为 -1：")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mysql> SELECT * FROM table LIMIT 95,-1; // 检索记录行 96-last. \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("如果只给定一个参数，它表示返回最大的记录行数目：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" SELECT "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" FROM table "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LIMIT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//检索前 5 个记录行 ")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"数据库优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库优化"}},[a._v("#")]),a._v(" 数据库优化")]),a._v(" "),t("h3",{attrs:{id:"为什么要优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要优化"}},[a._v("#")]),a._v(" 为什么要优化")]),a._v(" "),t("ul",[t("li",[a._v("系统的吞吐量瓶颈往往出现在数据库的访问速度上")]),a._v(" "),t("li",[a._v("随着应用程序的运行，数据库的中的数据会越来越多，处理时间会相应变慢")]),a._v(" "),t("li",[a._v("数据是存放在磁盘上的，读写速度无法和内存相比\n优化原则：减少系统瓶颈，减少资源占用，增加系统的反应速度。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);