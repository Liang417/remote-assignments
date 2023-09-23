-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: assignment
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `assignment`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `assignment` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `assignment`;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `author_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `author_id` (`author_id`),
  CONSTRAINT `article_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (12,'title_1','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt metus nec dui ultricies posuere. Donec eu felis sed quam dapibus finibus aliquet ac diam. Morbi semper malesuada rhoncus. Nam enim tortor, finibus ac ex et, tincidunt rutrum lorem. Nullam pretium sed diam a eleifend. Fusce tempus dapibus justo ac placerat. Duis nec sagittis enim. Etiam a viverra arcu. Aliquam erat volutpat. Curabitur lorem lectus, tincidunt a auctor a, placerat quis mi.',45),(13,'title_2','Cras aliquam id arcu eu imperdiet. Donec pellentesque nisi in eros molestie luctus. Nullam eu velit a felis dapibus tempor ut a ex. Quisque cursus nunc risus. Pellentesque vel tempus felis. Proin eros enim, consequat ut leo nec, ullamcorper viverra nisi. Suspendisse potenti. Integer non tortor luctus, finibus libero non, gravida turpis. Nullam accumsan sagittis lectus ac dictum. Aliquam erat volutpat.',46),(14,'title_3','Duis id sem sodales, mattis risus nec, tempor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate arcu sed erat commodo suscipit.',47),(15,'title_4','Mauris luctus ac tortor a faucibus. Donec dapibus massa sem, eu faucibus erat tristique at. Praesent feugiat suscipit sodales. Donec semper leo eget tellus cursus, sit amet condimentum risus pellentesque. Pellentesque libero lectus, mollis id maximus quis, luctus id enim. Cras sed rhoncus arcu.',45),(16,'title_5','Suspendisse purus urna, laoreet et lectus in, molestie tempor sapien. Quisque ullamcorper mi ornare ligula consectetur, nec fermentum enim elementum.',48),(17,'title_6','Duis dignissim mi ligula, id efficitur sapien cursus eget. Maecenas quis consequat lacus, eu sagittis nunc.',48),(18,'title_7','Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras volutpat, nisi vel aliquet convallis, enim arcu sollicitudin risus, quis laoreet ipsum felis vitae augue.',46),(19,'title_8','Nam pulvinar nisl ante, a dapibus elit semper quis. Morbi pretium rhoncus tellus, vitae aliquam nunc luctus id. Mauris egestas nisi ut tellus dapibus aliquam.',49),(20,'title_9','Donec rhoncus eleifend mauris id consectetur.',46),(21,'title_10','Sed ultrices sollicitudin vehicula. Nullam in erat congue, porta dui aliquam, tristique orci. Integer fermentum viverra augue eu semper.',45),(22,'title_11','Sed eget nulla iaculis, fermentum nisi vel, dictum purus. Nunc lacinia, odio lobortis aliquam rhoncus, arcu ipsum luctus velit, in suscipit nibh nunc et diam.',49),(23,'title_12','Donec tincidunt metus nec dui ultricies posuere.',45),(24,'title_13','Nullam accumsan sagittis lectus ac dictum.',46),(25,'title_14','Lorem ipsum dolor sit amet, consectetur adipiscing elit.',47),(26,'title_15','Proin vulputate arcu sed erat commodo suscipit.',45),(27,'title_16','Nullam porta mauris at mauris fermentum lobortis. Mauris gravida arcu tempor neque cursus mattis.',48),(28,'title_17','Nunc tempor tortor eu sapien imperdiet, id mattis dolor varius. Nam fermentum accumsan ligula, sed ultrices nisl euismod eu. Duis elementum,',48),(29,'title_18','nulla et facilisis lacinia, elit metus gravida sem, ut rhoncus mauris urna sed erat. Praesent ornare, massa non auctor gravida, felis metus consectetur libero,',46),(30,'title_19','nec congue purus massa dignissim libero. Duis bibendum molestie porttitor. Nam sit amet blandit orci, nec tincidunt ante. Praesent eget mattis augue.',49),(31,'title_20','Lorem Ipsum is simply dummy text of the printing and typesetting industry.',46),(32,'title_21','Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',45),(33,'title_22','when an unknown printer took a galley of type and scrambled it to make a type specimen book.',49),(34,'title_23',' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',45),(35,'title_24',' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',46),(36,'title_25','Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',47),(37,'title_26','Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.',45),(38,'title_27','There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',46),(39,'title_28','If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',48),(40,'title_29','All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,',46),(41,'title_30','Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',49),(42,'title_31','The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',46),(43,'title_32','f you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated - click here to donate using PayPal. Thank you for your support.',45),(44,'title_33','\"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire,',49);
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (45,'test_1@gmail.com','$2b$10$ud1FBMq.w9gpy6Hja75j.e7cPjDsohsNplXbwlTpqKRQNYE3JiRqC','test_1'),(46,'test_2@gmail.com','$2b$10$QUJWKIwA6B0fPjMf/lhuU.AZ1LFe/l22cJEJuWlEx1RgDEJTOgjf.','test_2'),(47,'test_3@gmail.com','$2b$10$rkIo8LCdQ4bz1bENVP3MYutdWEUgTGxNpR.7THO9BnUfhdg8kZS..','test_3'),(48,'test_4@gmail.com','$2b$10$3eYJ1z62na28YrLm8.eso.olZFeL/pqF69ueeCMNUVYxMycSDa31e','test_4'),(49,'test_5@gmail.com','$2b$10$WY5AFwFPCt2JXfIhjY4YuOOTZ7jFSDeTXyfmHzA7TOuABhvxiORRq','test_5');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-23  6:51:51
