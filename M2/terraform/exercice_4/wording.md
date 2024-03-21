<p>Utilisez Terraform pour déployer une machine virtuelle (VM) sur Microsoft Azure en suivant les spécifications suivantes :</p><ol><li>Créez une ressource de groupe de ressources (Resource Group) avec le nom "$[votre_nom}-rg" dans la région "West Europe".</li><li>Déployez une machine virtuelle (VM) nommée "$[votre_nom}-vm" dans le groupe de ressources créé, avec les spécifications suivantes :<ul><li>Système d'exploitation : Ubuntu Server 20.04 LTS</li><li>Taille de la machine virtuelle : Standard_B1s</li><li>Nom d'utilisateur : "ubuntu"</li><li>Utilisez une clé publique SSH pour permettre l'accès à la machine virtuelle (la clé publique SSH est fournie dans un fichier séparé).</li><li>Taggez la machine virtuelle avec une étiquette (tag) "Projet" avec la valeur "Démo".</li></ul></li></ol>