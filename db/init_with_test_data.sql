# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: localhost (MySQL 5.7.21)
# Database: SimpleServer
# Generation Time: 2018-04-16 00:15:29 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table posts
# ------------------------------------------------------------

DROP TABLE IF EXISTS `posts`;

CREATE TABLE `posts` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `creation` date NOT NULL,
  `title` varchar(255) NOT NULL DEFAULT '',
  `url` varchar(255) NOT NULL DEFAULT '',
  `abstract` longtext NOT NULL,
  `content` longtext NOT NULL,
  `author` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `author_rel` (`author`),
  CONSTRAINT `author_rel` FOREIGN KEY (`author`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;

INSERT INTO `posts` (`id`, `creation`, `title`, `url`, `abstract`, `content`, `author`)
VALUES
	(1,'1900-03-01','Look mum, this is my very first blog post!','my-very-first-blog-post','This is the first blog post that has ever been written. Legends tell that even the Atztecs have read it. It is in fact so ancient that some scientists even think that it has been the actual cause for the big bang!','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris enim lorem, consectetur sed ultrices in, vehicula eget risus. Nunc imperdiet egestas ullamcorper. Sed placerat sagittis augue vel porta. Aenean et egestas magna, fermentum semper turpis. Vivamus orci sapien, condimentum non ultricies volutpat, congue non nulla. Fusce mattis nunc eget suscipit volutpat. Etiam semper lectus ante, eu tincidunt sem eleifend at. Vivamus justo nisl, volutpat nec placerat sed, hendrerit non magna. Cras suscipit pharetra velit, ac aliquam lacus placerat sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum interdum congue. Nunc sodales ullamcorper neque ut pellentesque. Quisque eros ex, luctus sollicitudin dui a, sagittis elementum eros. Nam auctor lorem quis justo molestie, ac accumsan ligula sagittis. Vivamus ac nisl risus. Morbi quis auctor sapien, vel consequat erat.\n\nPhasellus nec neque odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque vel consequat magna. Curabitur rutrum pellentesque iaculis. Maecenas ac tempus tellus, sit amet ultricies sem. Mauris tempor porta massa, eu eleifend ante elementum id. Morbi laoreet sed dui nec tristique.\n\nIn elementum sollicitudin mi, nec pellentesque massa aliquet et. Suspendisse vitae accumsan risus, imperdiet fermentum erat. Vestibulum eget augue quis neque tempus iaculis fermentum ac nibh. Praesent dolor magna, porta sed pharetra vel, porta eget nunc. Curabitur id arcu sagittis, bibendum ante at, iaculis odio. Integer a lacinia sapien, id rutrum nisl. Proin pulvinar non velit quis bibendum. Pellentesque tincidunt sollicitudin dignissim. Mauris lobortis pretium dolor, non sagittis purus tincidunt sit amet. Aenean dapibus condimentum orci sed tempor. Proin metus mi, sagittis vitae fermentum vitae, feugiat vel est.\n\nAliquam venenatis quam est, in tristique ipsum ullamcorper in. Phasellus fermentum odio a dolor interdum venenatis. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin tempor eget sapien et interdum. Ut pulvinar posuere volutpat. Vestibulum et vestibulum magna, ac egestas lacus. Donec a velit ligula. Praesent in tellus eget nisi scelerisque volutpat at ut elit. Vestibulum in lacus id magna ornare sagittis. Praesent augue erat, ornare ac mi ac, auctor finibus ligula. Etiam et sem egestas, ornare ligula in, maximus urna. Fusce ultrices ornare est sed faucibus.\n\nProin malesuada condimentum neque at posuere. Mauris elit eros, venenatis at tellus quis, venenatis fringilla turpis. Mauris est nibh, sollicitudin non felis sit amet, molestie aliquam eros. Pellentesque sagittis pretium tortor, quis fermentum odio porttitor id. Praesent at vehicula lorem. Donec mollis pulvinar est at laoreet. Donec nec vestibulum purus. Nam ultricies eros vitae mollis commodo. Sed molestie metus quis est tempor, ac commodo enim maximus. Suspendisse non hendrerit felis. Sed consequat mauris mi, in tristique quam aliquet at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',1),
	(2,'1968-03-01','The internet is freaking amazing!','the-internet-is-amazing','This post deals with my excitement for this thing called world wide web.','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris enim lorem, consectetur sed ultrices in, vehicula eget risus. Nunc imperdiet egestas ullamcorper. Sed placerat sagittis augue vel porta. Aenean et egestas magna, fermentum semper turpis. Vivamus orci sapien, condimentum non ultricies volutpat, congue non nulla. Fusce mattis nunc eget suscipit volutpat. Etiam semper lectus ante, eu tincidunt sem eleifend at. Vivamus justo nisl, volutpat nec placerat sed, hendrerit non magna. Cras suscipit pharetra velit, ac aliquam lacus placerat sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum interdum congue. Nunc sodales ullamcorper neque ut pellentesque. Quisque eros ex, luctus sollicitudin dui a, sagittis elementum eros. Nam auctor lorem quis justo molestie, ac accumsan ligula sagittis. Vivamus ac nisl risus. Morbi quis auctor sapien, vel consequat erat.\n\nPhasellus nec neque odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque vel consequat magna. Curabitur rutrum pellentesque iaculis. Maecenas ac tempus tellus, sit amet ultricies sem. Mauris tempor porta massa, eu eleifend ante elementum id. Morbi laoreet sed dui nec tristique.',1),
	(3,'1990-11-11','Obvious trolls are obvious','obvious-trolls-are-obvious','Trolls are the cancer of the internet. Why you should avoid them as often as possible.','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris enim lorem, consectetur sed ultrices in, vehicula eget risus. Nunc imperdiet egestas ullamcorper. Sed placerat sagittis augue vel porta. Aenean et egestas magna, fermentum semper turpis. Vivamus orci sapien, condimentum non ultricies volutpat, congue non nulla. Fusce mattis nunc eget suscipit volutpat. Etiam semper lectus ante, eu tincidunt sem eleifend at. Vivamus justo nisl, volutpat nec placerat sed, hendrerit non magna. Cras suscipit pharetra velit, ac aliquam lacus placerat sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum interdum congue. Nunc sodales ullamcorper neque ut pellentesque. Quisque eros ex, luctus sollicitudin dui a, sagittis elementum eros. Nam auctor lorem quis justo molestie, ac accumsan ligula sagittis. Vivamus ac nisl risus. Morbi quis auctor sapien, vel consequat erat.\n\nPhasellus nec neque odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque vel consequat magna. Curabitur rutrum pellentesque iaculis. Maecenas ac tempus tellus, sit amet ultricies sem. Mauris tempor porta massa, eu eleifend ante elementum id. Morbi laoreet sed dui nec tristique.\n\nIn elementum sollicitudin mi, nec pellentesque massa aliquet et. Suspendisse vitae accumsan risus, imperdiet fermentum erat. Vestibulum eget augue quis neque tempus iaculis fermentum ac nibh. Praesent dolor magna, porta sed pharetra vel, porta eget nunc. Curabitur id arcu sagittis, bibendum ante at, iaculis odio. Integer a lacinia sapien, id rutrum nisl. Proin pulvinar non velit quis bibendum. Pellentesque tincidunt sollicitudin dignissim. Mauris lobortis pretium dolor, non sagittis purus tincidunt sit amet. Aenean dapibus condimentum orci sed tempor. Proin metus mi, sagittis vitae fermentum vitae, feugiat vel est.\n\nAliquam venenatis quam est, in tristique ipsum ullamcorper in. Phasellus fermentum odio a dolor interdum venenatis. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin tempor eget sapien et interdum. Ut pulvinar posuere volutpat. Vestibulum et vestibulum magna, ac egestas lacus. Donec a velit ligula. Praesent in tellus eget nisi scelerisque volutpat at ut elit. Vestibulum in lacus id magna ornare sagittis. Praesent augue erat, ornare ac mi ac, auctor finibus ligula. Etiam et sem egestas, ornare ligula in, maximus urna. Fusce ultrices ornare est sed faucibus.',2),
	(4,'1999-12-31','Hahaha, I am the mean guy and I\'m taking over this lame blog!','mean-guy-is-taking-over','Enough of these boring blog posts! I\'m finally here and things will change from now on! Oh, and if you are reading this: \"Hi, mum!\".','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris enim lorem, consectetur sed ultrices in, vehicula eget risus. Nunc imperdiet egestas ullamcorper. Sed placerat sagittis augue vel porta. Aenean et egestas magna, fermentum semper turpis. Vivamus orci sapien, condimentum non ultricies volutpat, congue non nulla. Fusce mattis nunc eget suscipit volutpat. Etiam semper lectus ante, eu tincidunt sem eleifend at. Vivamus justo nisl, volutpat nec placerat sed, hendrerit non magna. Cras suscipit pharetra velit, ac aliquam lacus placerat sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum interdum congue. Nunc sodales ullamcorper neque ut pellentesque. Quisque eros ex, luctus sollicitudin dui a, sagittis elementum eros. Nam auctor lorem quis justo molestie, ac accumsan ligula sagittis. Vivamus ac nisl risus. Morbi quis auctor sapien, vel consequat erat.',3),
	(5,'2000-01-01','OMG! Did the mean guy really hack this blog? I\'m so sorry, folks. No more mean stuff, I promise!','no-more-mean-stuff','In this post I talk about my insecurities and paranoia that have evolved after the blog had been hacked by an imagined entity.','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris enim lorem, consectetur sed ultrices in, vehicula eget risus. Nunc imperdiet egestas ullamcorper. Sed placerat sagittis augue vel porta. Aenean et egestas magna, fermentum semper turpis. Vivamus orci sapien, condimentum non ultricies volutpat, congue non nulla. Fusce mattis nunc eget suscipit volutpat. Etiam semper lectus ante, eu tincidunt sem eleifend at. Vivamus justo nisl, volutpat nec placerat sed, hendrerit non magna. Cras suscipit pharetra velit, ac aliquam lacus placerat sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum interdum congue. Nunc sodales ullamcorper neque ut pellentesque. Quisque eros ex, luctus sollicitudin dui a, sagittis elementum eros. Nam auctor lorem quis justo molestie, ac accumsan ligula sagittis. Vivamus ac nisl risus. Morbi quis auctor sapien, vel consequat erat.\n\nPhasellus nec neque odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque vel consequat magna. Curabitur rutrum pellentesque iaculis. Maecenas ac tempus tellus, sit amet ultricies sem. Mauris tempor porta massa, eu eleifend ante elementum id. Morbi laoreet sed dui nec tristique.\n\nIn elementum sollicitudin mi, nec pellentesque massa aliquet et. Suspendisse vitae accumsan risus, imperdiet fermentum erat. Vestibulum eget augue quis neque tempus iaculis fermentum ac nibh. Praesent dolor magna, porta sed pharetra vel, porta eget nunc. Curabitur id arcu sagittis, bibendum ante at, iaculis odio. Integer a lacinia sapien, id rutrum nisl. Proin pulvinar non velit quis bibendum. Pellentesque tincidunt sollicitudin dignissim. Mauris lobortis pretium dolor, non sagittis purus tincidunt sit amet. Aenean dapibus condimentum orci sed tempor. Proin metus mi, sagittis vitae fermentum vitae, feugiat vel est.\n\nAliquam venenatis quam est, in tristique ipsum ullamcorper in. Phasellus fermentum odio a dolor interdum venenatis. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin tempor eget sapien et interdum. Ut pulvinar posuere volutpat. Vestibulum et vestibulum magna, ac egestas lacus. Donec a velit ligula. Praesent in tellus eget nisi scelerisque volutpat at ut elit. Vestibulum in lacus id magna ornare sagittis. Praesent augue erat, ornare ac mi ac, auctor finibus ligula. Etiam et sem egestas, ornare ligula in, maximus urna. Fusce ultrices ornare est sed faucibus.\n\nProin malesuada condimentum neque at posuere. Mauris elit eros, venenatis at tellus quis, venenatis fringilla turpis. Mauris est nibh, sollicitudin non felis sit amet, molestie aliquam eros. Pellentesque sagittis pretium tortor, quis fermentum odio porttitor id. Praesent at vehicula lorem. Donec mollis pulvinar est at laoreet. Donec nec vestibulum purus. Nam ultricies eros vitae mollis commodo. Sed molestie metus quis est tempor, ac commodo enim maximus. Suspendisse non hendrerit felis. Sed consequat mauris mi, in tristique quam aliquet at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',1),
	(6,'2018-04-01','Blogs have always been overrated!','blogs-are-overrated','This post criticizes edgy teens that still feel obliged to write edgy blog posts.','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris enim lorem, consectetur sed ultrices in, vehicula eget risus. Nunc imperdiet egestas ullamcorper. Sed placerat sagittis augue vel porta. Aenean et egestas magna, fermentum semper turpis. Vivamus orci sapien, condimentum non ultricies volutpat, congue non nulla. Fusce mattis nunc eget suscipit volutpat. Etiam semper lectus ante, eu tincidunt sem eleifend at. Vivamus justo nisl, volutpat nec placerat sed, hendrerit non magna. Cras suscipit pharetra velit, ac aliquam lacus placerat sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum interdum congue. Nunc sodales ullamcorper neque ut pellentesque. Quisque eros ex, luctus sollicitudin dui a, sagittis elementum eros. Nam auctor lorem quis justo molestie, ac accumsan ligula sagittis. Vivamus ac nisl risus. Morbi quis auctor sapien, vel consequat erat.\n\nPhasellus nec neque odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque vel consequat magna. Curabitur rutrum pellentesque iaculis. Maecenas ac tempus tellus, sit amet ultricies sem. Mauris tempor porta massa, eu eleifend ante elementum id. Morbi laoreet sed dui nec tristique.\n\nIn elementum sollicitudin mi, nec pellentesque massa aliquet et. Suspendisse vitae accumsan risus, imperdiet fermentum erat. Vestibulum eget augue quis neque tempus iaculis fermentum ac nibh. Praesent dolor magna, porta sed pharetra vel, porta eget nunc. Curabitur id arcu sagittis, bibendum ante at, iaculis odio. Integer a lacinia sapien, id rutrum nisl. Proin pulvinar non velit quis bibendum. Pellentesque tincidunt sollicitudin dignissim. Mauris lobortis pretium dolor, non sagittis purus tincidunt sit amet. Aenean dapibus condimentum orci sed tempor. Proin metus mi, sagittis vitae fermentum vitae, feugiat vel est.',2);

/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL DEFAULT '',
  `last_name` varchar(255) NOT NULL DEFAULT '',
  `description` varchar(1000) NOT NULL DEFAULT '',
  `profile_picture` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `first_name`, `last_name`, `description`, `profile_picture`)
VALUES
	(1,'First1','Last1','He is the first user. Some say he is even older than the universe. Even before the big bang, he had been the first user. ','user1.jpg'),
	(2,'First2','Last2','As he came after the first user, he is a tiny bit less cool. But nonetheless, he is a nice guy one enjoys talking to. ','user2.jpg'),
	(3,'First3','Last3','The third user is a really bad guy. He is so mean that he steals the lunch from school children because he loves seeing them crying. Nobody wants to hang out with this weird gentleman.','user3.jpg');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
