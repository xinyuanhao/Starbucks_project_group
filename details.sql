SET NAMES UTF8;

USE starbucks;
CREATE TABLE starbucks_details(
    did INT PRIMARY KEY AUTO_INCREMENT,
    dclass VARCHAR(64) NOT NULL,
    dtitle VARCHAR(64) NOT NULL,
    ddetails VARCHAR(1000),
    dic VARCHAR(1000) NOT NULL,
    drice DECIMAL(10,2) NOT NULL,
    dhref VARCHAR(1000) NOT NULL,
    d_recommended SMALLINT
);
INSERT INTO starbucks_details VALUES(1,'星巴克玩味冰调™','蓝莓星空','热情果趣风味爆珠<br>低糖&低卡,不含咖啡因<br>茶瓦纳™蓝莓欢欣路芭茶<br>','./img/product/product_list/1yinliao/yijitu/1-1.jpg',27.00,'menus_drink_details.html?pid=1',1);
INSERT INTO starbucks_details VALUES(2,'星巴克玩味冰调™','橘香茉吉托','灵感源自莫吉托<br>新鲜薄荷叶<br>茶瓦纳™橘香茉意花草茶<br>不含咖啡因<br>含少量酒精成分<br>孕妇与儿童不建议饮用<br>','./img/product/product_list/1yinliao/yijitu/1-2.jpg',27.00,'menus_drink_details.html?pid=2',2);
INSERT INTO starbucks_details VALUES(3,'星巴克玩味冰调™','酸柠浮冷萃','灵感源自鸡尾酒威士忌酸<br>枫糖威士忌风味冷萃咖啡<br>意大利进口路萨朵樱桃<br>','./img/product/product_list/1yinliao/yijitu/1-3.jpg',28.00,'menus_drink_details.html?pid=3',3);
INSERT INTO starbucks_details VALUES(4,'星巴克玩味冰调™','醋意桃桃','大块黄桃+爽弹果冻<br>桃汁混搭桃醋风味<br>茶瓦纳™禅韵乌龙茶<br>','./img/product/product_list/1yinliao/yijitu/1-4.jpg',28.00,'menus_drink_details.html?pid=4',4);
INSERT INTO starbucks_details VALUES(5,'星巴克玩味冰调™','石榴仲夏梦','石榴遇上罗望子<br>紫色源自黑果枸杞<br>茶瓦纳™蓝莓欢欣路芭茶<br>不含咖啡因<br>','./img/product/product_list/1yinliao/yijitu/1-5.jpg',27.50,'menus_drink_details.html?pid=5',5);
INSERT INTO starbucks_details VALUES(6,'星巴克玩味冰调™','气炫冰山美式','灵感源自金汤力<br>沁爽拧香揉合意式浓缩<br>低糖&低卡<br>含少量酒精成分<br>孕妇与儿童不建议饮用<br>','./img/product/product_list/1yinliao/yijitu/1-6.jpg',29.00,'menus_drink_details.html?pid=6',6);
INSERT INTO starbucks_details VALUES(7,'星巴克玩味冰调™','璃光石榴冷萃','石榴遇上罗望子<br>沁甘顺滑冷萃咖啡<br>','./img/product/product_list/1yinliao/yijitu/1-7.jpg',29.00,'menus_drink_details.html?pid=7',7);
INSERT INTO starbucks_details VALUES(8,'星巴克玩味冰调™','橙柚派对','西柚+橙+柠檬三重果肉<br>富含维生素C<br>茶瓦纳™橘香茉意花草茶<br>','./img/product/product_list/1yinliao/yijitu/1-8.jpg',30.00,'menus_drink_details.html?pid=8',8);