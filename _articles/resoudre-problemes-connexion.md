---
title: Résoudre les problèmes de connexion
featured: true
menu:
  docs:
    weight: 1
    parent: item_rbKx4yd
    identifier: item_y24snUm
---
**Salut la compagnie !**

Si vous ne parvenez pas à vous connecter à Slack, obtenez plus d’informations sur les problèmes de connexion et sur leur résolution.

{% include message.html type="tip" content="
Si vous êtes administrateur informatique ou administrateur réseau, apprenez à gérer les problèmes de connexion sur votre réseau."
%}

## Problèmes fréquents

| Problème | Message d’erreur |
| --- | --- |
| Échec de connectivité | Slack ne peut pas se connecter. |
| Problème de chargement | Slack n’a pas pu se charger. |
| Erreur du serveur | Désolé ! Une erreur s’est produite, et nous en recherchons la cause. |
| Problème de WebSocket | Dernière mise à jour il y a moins d’une minute… (l’erreur s’affichera dans une bannière grise) |
| Parcourir les erreurs | Vous verrez un message d’erreur dans le navigateur que vous utilisez pour accéder à Slack. |

## Échec de connectivité

### Le problème

Lorsque l’application Slack pour ordinateur ne parvient pas à se connecter, les paramètres de votre réseau ou de vos dispositifs de sécurité (comme un proxy, un pare-feu, un antivirus ou un VPN) peuvent en être à l’origine.

:<img src="{% link assets/connectivity.png %}" width="70%">

### Étapes de résolution des problèmes

#### Étape 1 : vider le cache et redémarrer Slack

Cliquez sur **Redémarrer Slack** en dessous du message d’erreur.

#### Étape 2 : collecter et nous envoyer les journaux réseau

Si le problème persiste, collectez et envoyez-nous les journaux réseau sur l’application Slack pour ordinateur afin que nous puissions examiner la situation plus en profondeur. Pour collecter les journaux réseau, cliquez sur le bouton **Télécharger les journaux** en dessous du message d’erreur ou suivez les étapes ci-dessous.

{% include instructions.html

1="Ouvrez l’application Slack pour ordinateur, puis cliquez sur **Aide** dans la barre de menu supérieure de votre ordinateur. (Si vous utilisez Windows 10, cliquez sur **l’icône à trois lignes** ☰ en haut à gauche de l’application Slack.)"
2="Sélectionnez **Résolution des problèmes**, puis cliquez sur **Redémarrer et collecter les journaux réseau**. L’application redémarrera. Une fois qu’elle aura redémarré, le message **Your log is in progress** (« Votre journal est en cours. ») s’affichera dans une nouvelle fenêtre."
3="Utilisez Slack comme vous le faites d’habitude. Lorsque le problème survient, retournez à la fenêtre pop-up et cliquez sur **Stop Logging** (« Arrêter la connexion »)."
4="Trouvez le fichier zip dans le dossier Téléchargements de votre ordinateur."
5="Envoyez-nous un message avec le fichier en pièce jointe."
%}

## Problème de chargement

### Le problème

Slack ne parvient pas à se charger sur l’application pour ordinateur ou dans un navigateur. Ce problème peut être dû à des interférences causées par des extensions du navigateur ou un dispositif de sécurité. Le problème peut également venir de Slack.

<img src="{% link assets/LOAD_FAIL.png %}" width="90%">

### Étapes de résolution des problèmes

#### Étape 1 : vider votre cache

{% include options.html

1="Ordinateur:

1. Ouvrez l’application Slack pour ordinateur, puis cliquez sur Aide dans la barre de menu supérieure de votre ordinateur. (Si vous utilisez Windows 10, cliquez sur l’icône à trois lignes ☰ en haut à gauche de l’application Slack.)
2. Sélectionnez Résolution des problèmes.
3. Cliquez sur Effacer le cache et redémarrer.
   "

2="Navigateur:

1. Videz le cache de votre navigateur web. Ces étapes peuvent varier en fonction du navigateur utilisé.
2. Ouvrez Slack dans une fenêtre de navigation privée. Si vous parvenez à vous connecter à Slack, le problème peut être dû à une extension du navigateur. Désactivez toutes les extensions du navigateur pour voir si cela permet à Slack de se charger dans une fenêtre normale du navigateur.
   "

3="Mac:

1. Ceci
2. Cela
3. Puis encore ça"
   %}

<!--
{% include instructions.html
1="Ouvrez l’application Slack pour ordinateur, puis cliquez sur Aide dans la barre de menu supérieure de votre ordinateur. (Si vous utilisez Windows 10, cliquez sur l’icône à trois lignes ☰ en haut à gauche de l’application Slack.)"
2="Sélectionnez Résolution des problèmes."
3="Cliquez sur Effacer le cache et redémarrer."
%}

{% include instructions.html
4="Videz le cache de votre navigateur web. Ces étapes peuvent varier en fonction du navigateur utilisé."
5="Ouvrez Slack dans une fenêtre de navigation privée. Si vous parvenez à vous connecter à Slack, le problème peut être dû à une extension du navigateur. Désactivez toutes les extensions du navigateur pour voir si cela permet à Slack de se charger dans une fenêtre normale du navigateur."
%} -->

#### Étape 2 : exécuter le test de connexion Slack

{% include instructions.html
1="Accédez à slack.com/help/test pour vérifier votre connexion à Slack."
2="En cas d’erreur, contactez un administrateur réseau."
%}

#### Étape 3 : collecter et nous envoyer les journaux réseau

Si le problème persiste, collectez et envoyez-nous les journaux réseau afin que nous puissions examiner la situation plus en profondeur. Vous pouvez collecter les journaux réseau via l’application pour ordinateur ou via Google Chrome, suivant ce que vous utilisiez lorsque le problème est apparu. Si le problème apparaît à la fois sur l’application pour ordinateur et sur le navigateur, procédez comme suit sur l’application pour ordinateur.

Application de bureau Google Chrome

{% include instructions.html
1="Ouvrez l’application Slack pour ordinateur, puis cliquez sur Aide dans la barre de menu supérieure de votre ordinateur. (Si vous utilisez Windows 10, cliquez sur l’icône à trois lignes ☰ en haut à gauche de l’application Slack.)"
2="Sélectionnez Résolution des problèmes, puis cliquez sur Redémarrer et collecter les journaux réseau. L’application redémarrera. Une fois qu’elle aura redémarré, le message Your log is in progress (« Votre journal est en cours. ») s’affichera dans une nouvelle fenêtre."
3="Utilisez Slack comme vous le faites d’habitude. Lorsque le problème survient, retournez à la fenêtre pop-up et cliquez sur Stop Logging (« Arrêter la connexion »)."
4="Trouvez le fichier zip dans le dossier Téléchargements de votre ordinateur."
5="Envoyez-nous un message avec le fichier en pièce jointe."
%}

• Ouvrez Google Chrome et accédez au lien suivant : chrome://net-export/.
• Cliquez sur Start Logging to Disk (« Démarrer la connexion au disque »).
• Enregistrez le fichier sous le nom slackNetlog.
• Dans un autre onglet Chrome, ouvrez votre espace de travail Slack.
• Utilisez Slack comme vous le faites d’habitude. Lorsque le problème survient, retournez à l’onglet chrome://net-export/ et cliquez sur Stop Logging (« Arrêter la connexion »).
• Trouvez le fichier slackNetlog dans le dossier Téléchargements de votre ordinateur.
•
Envoyez-nous un message avec le fichier en pièce jointe.

{% include message.html type="note" content="
Si vous n’utilisez pas Chrome comme navigateur, envoyez-nous un message et nous vous aiderons à résoudre le problème.
" %}

## Erreur du serveur

### Le problème

Il se peut qu’une erreur du serveur Slack empêche la connexion et le chargement de l’application pour ordinateur ou du navigateur.

Étapes de résolution des problèmes
Étape 1 : recharger Slack

• Ouvrez Slack dans l’application pour ordinateur ou dans un navigateur.
• Utilisez ⌘R (Mac) ou CtrlR (Windows/Linux).

Étape 2 : nous contacter
Si le problème persiste, consultez le site Slack Status (État du système de Slack) pour savoir si nous travaillons actuellement à la résolution de problèmes spécifiques. Si tel n’est pas le cas, contactez-nous et nous vous aiderons à résoudre vos problèmes.
 
Problème de WebSocket
Le problème 
Si Slack ne parvient pas à maintenir de connexions WebSocket sur l’application pour ordinateur ou sur un navigateur, vous ne recevrez pas les nouveaux messages qui vous sont envoyés via vos canaux ou par messages directs.

Étapes de résolution des problèmes
Étape 1 : Contactez votre administrateur réseau
Contactez votre administrateur réseau pour vous assurer qu’il prend en charge les connexions WebSocket. Demandez-lui également d’examiner les tentatives de connexion aux domaines suivants :

• wss-primary.slack.com
• wss-backup.slack.com
• wss-mobile.slack.com
Étape 2 : collecter et nous envoyer les journaux réseau
Si le problème persiste, collectez et envoyez-nous les journaux réseau afin que nous puissions examiner la situation plus en profondeur. Vous pouvez collecter les journaux réseau via l’application pour ordinateur ou via Google Chrome, suivant ce que vous utilisiez lorsque le problème est apparu. Si le problème apparaît à la fois sur l’application pour ordinateur et sur le navigateur, procédez comme suit sur l’application pour ordinateur.
Application de bureauGoogle Chrome

• Ouvrez l’application Slack pour ordinateur, puis cliquez sur Aide dans la barre de menu supérieure de votre ordinateur. (Si vous utilisez Windows 10, cliquez sur l’icône à trois lignes ☰ en haut à gauche de l’application Slack.)
• Sélectionnez Résolution des problèmes, puis cliquez sur Redémarrer et collecter les journaux réseau. L’application redémarrera. Une fois qu’elle aura redémarré, le message Your log is in progress (« Votre journal est en cours. ») s’affichera dans une nouvelle fenêtre.
• Utilisez Slack comme vous le faites d’habitude. Lorsque le problème survient, retournez à la fenêtre pop-up et cliquez sur Stop Logging (« Arrêter la connexion »).
• Trouvez le fichier zip dans le dossier Téléchargements de votre ordinateur.
•
Envoyez-nous un message avec le fichier en pièce jointe.

• Ouvrez Google Chrome et accédez au lien suivant : chrome://net-export/.
• Cliquez sur Start Logging to Disk (« Démarrer la connexion au disque »).
• Enregistrez le fichier sous le nom slackNetlog.
• Dans un autre onglet Chrome, ouvrez votre espace de travail Slack.
• Utilisez Slack comme vous le faites d’habitude. Lorsque le problème survient, retournez à l’onglet chrome://net-export/ et cliquez sur Stop Logging (« Arrêter la connexion »).
• Trouvez le fichier slackNetlog dans le dossier Téléchargements de votre ordinateur.
•
Envoyez-nous un message avec le fichier en pièce jointe.

Remarque : Si vous n’utilisez pas Chrome comme navigateur, envoyez-nous un message et nous vous aiderons à résoudre le problème.
 
Parcourir les erreurs
Le problème 
Vous voyez un message d’erreur dans le navigateur que vous utilisez pour accéder à Slack. Voici un exemple sur Google Chrome :

Étapes de résolution des problèmes

• Le cas échéant, suivez les mesures de résolution des problèmes indiquées dans le message d’erreur de votre navigateur.
• Assurez-vous que le navigateur que vous utilisez est pris en charge et à jour. Pour plus d’informations, consultez les configurations minimales requises pour utiliser Slack.
• Videz le cache de votre navigateur web (cette étape peut varier suivant le navigateur que vous utilisez).
• Ouvrez Slack dans une fenêtre de navigation privée pour voir si vous parvenez à vous connecter à Slack. Si vous parvenez à vous connecter dans une fenêtre en navigation privée, le problème vient peut-être d’une extension du navigateur. Désactivez toutes les extensions du navigateur pour voir si cela permet à Slack de se charger dans une fenêtre normale du navigateur.
• Contactez votre administrateur réseau.
•
Contactez-nous si vous avez encore besoin d’aide.
Parfait !Merci beaucoup pour votre feedback !Si vous désirez qu’un des membres de notre équipe d’assistance vous réponde, veuillez contacter feedback@slack.com.Bien compris !Si vous désirez qu’un des membres de notre équipe d’assistance vous réponde, veuillez contacter feedback@slack.com.Cet article vous a-t-il été utile ?Oui, merci !Pas vraimentDésolés ! Qu’est-ce qui vous a déplu dans cet article ?Cet article n'a pas répondu pas à mes interrogations ou ne m’a pas permis de solutionner mon problèmeJ’ai trouvé cet article confus et difficile à comprendreJe n’apprécie pas la façon dont est conçue cette fonctionnalitéAutre0/600Envoyer les commentaires de l’articleSi vous désirez qu’un des membres de notre équipe d’assistance vous réponde, veuillez contacter feedback@slack.com.Oups ! Nous rencontrons quelques difficultés. Veuillez réessayer plus tard.