// Separated to it's own module, imported for backward compatability
import { HamburgerMenu, Menu, NavigationMenu, NotificationCenter, Toolbar, Iconbar } from "presentation-navigation";
import { DialogView, ConfirmationDialogView, AlertDialogView, Notification, Splash } from "presentation-dialogs";

import Article from "./article/article.js";
import Card from "./card/card.js";
import Footer from "./footer/footer.js";
import Header from "./header/header.js";
import Manager from "./manager/manager.js";

module.exports.Article = Article;
module.exports.Card = Card;
module.exports.DialogView = DialogView;
module.exports.ConfirmationDialogView = ConfirmationDialogView;
module.exports.AlertDialogView = AlertDialogView;
module.exports.Footer = Footer;
module.exports.Header = Header;
module.exports.Manager = Manager;
module.exports.HamburgerMenu = HamburgerMenu;
module.exports.Menu = Menu;
module.exports.NavigationMenu = NavigationMenu;
module.exports.NotificationCenter = NotificationCenter;
module.exports.Notification = Notification;
module.exports.Splash = Splash;
module.exports.Toolbar = Toolbar;
module.exports.Iconbar = Iconbar;
