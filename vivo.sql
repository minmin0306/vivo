SET NAMES UTF8;
DROP DATABASE IF EXISTS vivo;
CREATE DATABASE vivo CHARSET=UTF8;
USE vivo;

CREATE TABLE vivo_user(
  uid   INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25) NOT NULL DEFAULT '',
  upwd  VARCHAR(32) NOT NULL DEFAULT ''
);
INSERT INTO vivo_user VALUES(null,'vivo_blue','123456');
INSERT INTO vivo_user VALUES(null,'naicha','123456');

CREATE TABLE vivo_product(
   pid   INT PRIMARY KEY AUTO_INCREMENT,
   pic   VARCHAR(100) NOT NULL DEFAULT '',
   pname VARCHAR(50) NOT NULL DEFAULT ''
);
INSERT INTO vivo_product VALUES
(null,'images/phone_list_01.png','X9'),
(null,'images/phone_list_02.png','Y53'),
(null,'images/phone_list_03.png','XPlay6'),
(null,'images/phone_list_04.png','X9i'),
(null,'images/phone_list_05.png','Y75'),
(null,'images/phone_list_06.png','Y95'),
(null,'images/phone_list_07.png','X7'),
(null,'images/phone_list_08.png','X7Plus'),
(null,'images/phone_list_01.png','Y66'),
(null,'images/phone_list_04.png','X6plus'),
(null,'images/phone_list_02.png','x6p'),
(null,'images/phone_list_07.png','Y53'),
(null,'images/phone_list_05.png','Y95'),
(null,'images/phone_list_03.png','Y66'),
(null,'images/phone_list_08.png','X7'),
(null,'images/phone_list_06.png','Xplay6'),
(null,'images/phone_list_01.png','X9'),
(null,'images/phone_list_02.png','Y53'),
(null,'images/phone_list_03.png','XPlay6'),
(null,'images/phone_list_04.png','X9i'),
(null,'images/phone_list_05.png','Y75'),
(null,'images/phone_list_06.png','Y95'),
(null,'images/phone_list_07.png','X7'),
(null,'images/phone_list_08.png','X7Plus'),
(null,'images/phone_list_01.png','Y66'),
(null,'images/phone_list_04.png','X6plus'),
(null,'images/phone_list_02.png','x6p'),
(null,'images/phone_list_07.png','Y53'),
(null,'images/phone_list_05.png','Y95'),
(null,'images/phone_list_03.png','Y66'),
(null,'images/phone_list_08.png','X7'),
(null,'images/phone_list_06.png','Xplay6'),
(null,'images/phone_list_01.png','X9'),
(null,'images/phone_list_02.png','Y53'),
(null,'images/phone_list_03.png','XPlay6'),
(null,'images/phone_list_04.png','X9i'),
(null,'images/phone_list_05.png','Y75'),
(null,'images/phone_list_06.png','Y95'),
(null,'images/phone_list_07.png','X7'),
(null,'images/phone_list_08.png','X7Plus'),
(null,'images/phone_list_01.png','Y66'),
(null,'images/phone_list_04.png','X6plus'),
(null,'images/phone_list_02.png','x6p'),
(null,'images/phone_list_07.png','Y53'),
(null,'images/phone_list_05.png','Y95'),
(null,'images/phone_list_03.png','Y66'),
(null,'images/phone_list_08.png','X7'),
(null,'images/phone_list_06.png','Xplay6');