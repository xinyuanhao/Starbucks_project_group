SET NAMES UTF8;

USE starbucks;
CREATE TABLE starbucks_cart(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    cdid INT NOT NULL,
    cuid INT NOT NULL,
    cprice VARCHAR(64) NOT NULL,
    ctitle VARCHAR(64) NOT NULL,
    ccount INT NOT NULL,
    cpic VARCHAR(1000) NOT NULL
);
