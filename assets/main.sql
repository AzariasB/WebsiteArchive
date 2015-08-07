-- phpMyAdmin SQL Dump
-- version 4.1.4
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Sam 16 Mai 2015 à 21:04
-- Version du serveur :  5.6.15-log
-- Version de PHP :  5.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `main`
--

-- --------------------------------------------------------

--
-- Structure de la table `a_propos`
--

CREATE TABLE IF NOT EXISTS `a_propos` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `pere` varchar(255) NOT NULL,
  `lien` varchar(255) DEFAULT NULL,
  `sous-titre` varchar(255) NOT NULL,
  `texte` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COMMENT='Table qui stocke tout le texte de la page ''a propos''' AUTO_INCREMENT=15 ;

--
-- Contenu de la table `a_propos`
--

INSERT INTO `a_propos` (`id`, `pere`, `lien`, `sous-titre`, `texte`) VALUES
(1, 'Azarias', NULL, 'A propos de moi', 'Je suis un étudiant en informatique qui aime apprendre toujours plus dans les domaines du développement. \nDans le cadre de ce site, je peux m''exercer en javaScript, et utiliser plusieurs frameworks connus.'),
(2, 'Azarias', NULL, 'Ma formation', 'Pour le moment, je suis en seconde année d''IUT informatique. Je m''y plais bien.\nJe pense poursuivre mes études à l''étranger ...'),
(3, 'Le site', NULL, 'Pourquoi ?', 'Dernièrement, nous avons appris à utiliser beaucoup de technologies du web.Je me suis dis qu''une bonne occasion d''apprendre est tout simplement de m''exercer.\r\nEt puis en plus d''utiliser ce que je connais déjà, j''apprends à mieux connaître les langages du web.<br/>\r\nOn a jamais finis d''en savoir plus !'),
(4, 'Le site', NULL, 'Comment ?', 'Avec un petit ordinateur sans prétentons et un bon IDE (netbeans).Le navigateur utilisé pour réaliser les tests est Google Chrome.Il peut donc y avoir des problèmes d''affichage ou de fonctionnement dans d''autres navigateurs. \nIl peut y avoir des incohérences au niveau de l''affichage sur les grands écrans.<br/>\nJ''ai fait quelques tests sur les écrans plus large que le miens, et le rendu reste correct.\n'),
(5, 'Le site', NULL, 'Quand ?', 'Créé en 2015.<br/>\nDurée de vie : indeterminée. <br/>\nMises à jours : pour le moment, à peu près toutes les semaines. Il est possible que cet intervalle change avec le temps.<br/>'),
(6, 'Le contenu', '', 'Timelpases', 'Un partie pour les timelapses Urbain. Ceux que je réalise dans la ville de Grenoble et qui concernent la ville. \r\nLes timelapses font parties des styles de vidéos que j''apprécie. \r\nA travers les timelapses, on voit le temps qui s''écoule plus vite que l''on ne pense. \r\nEt à partir de cette constatation, on se dit qu''il vaut mieux ne pas le perdre. '),
(7, 'Crédits', 'http://getbootstrap.com/', 'Bootstrap', 'Bootstrap est un framework CSS très pratique qui contient des classes prédéfinies.\nDe base, bootstrap contient aussi des petites images appelées ''glyphicon'' qui permettent de remplacer joliment du texte.<br/>\nNormalement responsive-design, même si je vais devoir ajouter beaucoup de CSS pour afficher des pages proprement sur les téléphones portables.'),
(8, 'Crédits', 'https://angularjs.org/', 'Angular.js', 'Developpé par Google (rien que ça !) Ce framework javascript est très complet. Je ne connais pas encore tout ses composants.\nCela permet de réduire la quantité de javascript et d''augmenter l''interactivité avec l''utilisateur et la lisibilité du code.'),
(9, 'Crédits', 'http://www.codeigniter.com/', 'CodeIgniter', 'Pour avoir un site sécurisé, un belle URL et une architecture MVC. Ce framework est léger et facile d''utilisation.<br/>\r\nUn autre gros avantage : une documentation bien fournie. Ce n''est pas toujours le cas de tout les frameworks. On remarquera d''ailleurs que ce sont les frameworks les plus documentés qui sont les plus connus.'),
(10, 'Crédits', 'http://jquery.com/', 'JQuery', 'Presque inévitable dès qu''on fait un peu de javascript.\r\nPlus complet qu''angular mais on doit aussi fournir plus de code pour arriver à ce que l''on désire.\r\nLe jeu d''échec (dans ''projets personnels'') à été réalisé en jQuery.\r\nDe même que pour CodeIgniter, Bootstrap et Angular.js, la documentation est bien fournie et facile à comprendre.'),
(11, 'Crédits', 'http://www.ian-devries.com/multiscreenjs/', 'MultiScreen.js', 'Un plug-in très pratique dévellopé par un webdesigner Hollandais.<br/>\nJe crois qu''il manque la compatibilité pour firefox. Ce plug-in est très facile à utiliser et le rendu est satisfaisant.'),
(12, 'Le contenu', NULL, 'Projets personnels', 'Tout les projets qui me sont venus à l''idée et que j''ai tenté de développer avec ma propre réflexion.\r\nIls sont loin d''être parfaits et j''ai beaucoup d''améliorations à faire sur tous et chacun.<br/>\r\n-Le morse : Vous apprenez à coder/décoder des lettres ou des chiffres en morse.<br/>\r\n-Le sémaphore : pareil que pour le morse, mais avec du sémaphore (en cours de développement)<br/>\r\n-La vitesse de frappe. J''ai toujours aimé me tester à la vitesse de frappe, alors pourquoi ne pas voir comment cela fonctionne et essayer de développer mon propre test ? '),
(13, 'Le contenu', NULL, 'Projets Scolaires', 'Beaucoup de projets plus ou moins grands ont été réalisés à l''IUT.<br/>\r\nLes projets qui ne concernent pas le web sont sur GitHub.\r\nAinsi, vous pouvez télécharger les fichiers nécessaires et essayer d''exécuter le projet chez vous.<br/>\r\nLes projets qui ont un rapport avec le web ont soit été ajoutés directement au site, soit vous redirigent vers le site réalisé.'),
(14, 'Le contenu', NULL, 'Autres ...', 'Tout ce qui est trop petit pour être considéré comme étant un projet, peut être des articles, des choses qui me passionnent. <br/>\r\nOn verra bien !');

-- --------------------------------------------------------

--
-- Structure de la table `morse_score`
--

CREATE TABLE IF NOT EXISTS `morse_score` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `score` int(11) NOT NULL,
  `pseudo` varchar(255) NOT NULL DEFAULT 'Anonyme',
  `Lettres` tinyint(1) NOT NULL,
  `Chiffres` tinyint(1) NOT NULL,
  `Ponctuation` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=70 ;

--
-- Contenu de la table `morse_score`
--

INSERT INTO `morse_score` (`id`, `score`, `pseudo`, `Lettres`, `Chiffres`, `Ponctuation`) VALUES
(1, 100, 'Toto', 0, 1, 1),
(2, 100, 'Toto', 0, 1, 1),
(3, 364, 'Toto', 0, 1, 1),
(4, 32, 'Toto', 0, 1, 1),
(5, 51, 'Anonyme', 0, 1, 1),
(6, 248, 'Anonyme', 1, 1, 1),
(7, 296, 'Anonyme', 0, 1, 1),
(8, 189, 'Anonyme', 0, 1, 1),
(9, 143, 'Anonyme', 0, 1, 1),
(10, 215, 'Anonyme', 0, 1, 1),
(11, 396, 'Anonyme', 1, 1, 1),
(12, 6, 'Anonyme', 0, 1, 1),
(13, 154, 'Anonyme', 0, 1, 1),
(14, 70, 'Anonyme', 1, 1, 1),
(15, 342, 'Anonyme', 0, 1, 1),
(16, 272, 'Anonyme', 1, 0, 0),
(17, 132, 'Anonyme', 0, 0, 1),
(18, 242, 'Anonyme', 1, 1, 0),
(19, 295, 'Anonyme', 0, 1, 0),
(20, 290, 'Anonyme', 0, 0, 1),
(21, 180, 'Anonyme', 0, 0, 0),
(22, 67, 'Anonyme', 1, 0, 0),
(23, 116, 'Anonyme', 0, 0, 1),
(24, 362, 'Anonyme', 1, 1, 0),
(25, 218, 'Anonyme', 1, 0, 1),
(26, 323, 'Anonyme', 0, 1, 0),
(27, 166, 'Anonyme', 1, 1, 0),
(28, 155, 'Anonyme', 1, 0, 1),
(29, 285, 'Anonyme', 0, 0, 0),
(30, 143, 'Anonyme', 0, 1, 1),
(31, 24, 'Anonyme', 1, 0, 1),
(32, 318, 'Anonyme', 0, 1, 0),
(33, 379, 'Anonyme', 0, 1, 1),
(34, 326, 'Anonyme', 0, 0, 1),
(35, 94, 'Anonyme', 1, 0, 0),
(36, 307, 'Anonyme', 0, 1, 1),
(37, 0, 'anonyme', 1, 0, 0),
(38, 0, 'anonyme', 1, 0, 0),
(39, 0, 'anonyme', 1, 0, 0),
(68, 0, 'Azarias', 1, 0, 0),
(67, 0, 'Azarias', 1, 0, 0),
(66, 375, 'Azarias', 1, 0, 0),
(65, 428, 'Azarias', 1, 0, 0),
(64, 391, 'Azarias', 1, 0, 0),
(63, 375, 'Azarias', 1, 0, 0),
(62, 499, 'Azarias', 1, 0, 0),
(61, 321, 'Azarias', 1, 0, 0),
(60, 499, 'Azarias', 1, 0, 0),
(59, 428, 'Azarias', 1, 0, 0),
(57, 219, 'Azarias', 1, 0, 0),
(58, 455, 'Azarias', 1, 0, 0),
(69, 499, 'Azarias', 1, 0, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
