/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.5.5-10.4.24-MariaDB : Database - database
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`database` /*!40100 DEFAULT CHARACTER SET utf32 COLLATE utf32_spanish2_ci */;

USE `database`;

/*Table structure for table `prueba` */

DROP TABLE IF EXISTS `prueba`;

CREATE TABLE `prueba` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `NombreCliente` varchar(255) COLLATE utf32_spanish2_ci DEFAULT NULL,
  `NIT` varchar(255) COLLATE utf32_spanish2_ci DEFAULT NULL,
  `NombreDelPunto` varchar(255) COLLATE utf32_spanish2_ci DEFAULT NULL,
  `NombreDelEquipo` varchar(255) COLLATE utf32_spanish2_ci DEFAULT NULL,
  `Ciudad` varchar(255) COLLATE utf32_spanish2_ci DEFAULT NULL,
  `Promotor` varchar(255) COLLATE utf32_spanish2_ci DEFAULT NULL,
  `RTC` varchar(255) COLLATE utf32_spanish2_ci DEFAULT NULL,
  `Capitan` varchar(255) COLLATE utf32_spanish2_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf32 COLLATE=utf32_spanish2_ci;

/*Data for the table `prueba` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
