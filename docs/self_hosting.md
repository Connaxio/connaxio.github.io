# Self-hosting
Self-hosting can be understood as "running your own cloud". In a nutshell, you replace all these services for which you pay a monthly subscription with your own. You can either rent a Virtual Private Server (VPS), a computer that runs "in the cloud", for a unique monthly fee, or you run services on your own hardware, in which case it is up to you to guarantee data safety and service availability.

## Choosing an Operating System
Once the hardware (real or virtual) is chosen, the Operating System (OS) is what will enable our services. Those not familiar with Linux might choose Windows Server. Otherwise, the "default" starter OS is Debian, as it has a wide community and is very stable (more than Fedora or Ubuntu). 

I run [Proxmox Virtual Environment](https://www.proxmox.com/en/proxmox-virtual-environment/overview), which is debian-based and provides a neat web interface to manage multiple Virtual Machines or containers.

## Running services
I use a Debian container (a form of optimized OS) to run services with [docker compose](https://docs.docker.com/compose/), which allows me to use simple configuration files to create and run independent services in separate environments. This eliminates compatibility issues, if for example two services require different versions of the same dependency. It also means I never have to care about satisfying dependencies; docker packages do that for me.

### Nginx Proxy Manager
[Nginx Proxy Manager](https://nginxproxymanager.com/) is a simple web interface that allows me to manage a reverse proxy. That allows me to have multiple URLs pointing to the same IP address and port, and the reverse proxy then redirects the connection to the right service depending on the requested URL. It also manages SSL certificates for me to ensure secure, encrypted connections. For example, I can then access nextcloud.connaxio.com and jellyfish.connaxio.com instead of 23.44.123.3:11234 and 23.44.123.3:8090

### Cloudflare DDNS
[Cloudflare-DDNS](https://github.com/oznu/docker-cloudflare-ddns) is a Dynamic DNS service, which means it keeps my URLs pointing to the right IP address. This is an absolute must to be able to access my services reliably from everywhere, since my home IP address could change at any time. There are other options for this, sudh as [DuckDNS](https://www.duckdns.org/), which is also free.

### Wireguard
[Wireguard](https://github.com/linuxserver/docker-wireguard) is Virtual Private Network (VPN) protocol that allows me to create an encrypted tunnel from my phone or computer to my server, and then access my home network or the internet as if I was at home. I use it to browser the web on public networks, which are not always safely configured, and to access some services I don't want to be accessible from the broader internet. Nginx Proxy Manager's admin UI, for example, is not exposed to the internet and requires the VPN connection to be accessed from outside the server's home network.

### Portainer
[Portainer](https://www.portainer.io/) is a docker container management interface. I run it as a [docker container](https://docs.portainer.io/advanced/db-encryption#new-installations-edit-the-compose-file), which I find a bit funny. It gives me a quick overview of that services (containers) are running. This is also kept behind the VPN.

### Homepage
[Homepage](https://gethomepage.dev) provides a neat little dashboard for the server. It gives me a way to quickly look at the state of the server and its services. My own homepage is accessible at [homepage.connaxio.com](https://homepage.connaxio.com/).

### Nextcloud
[Nextcloud AIO](https://nextcloud.com) is an office and productivity suite that replaces Microsoft 365. Storage and synchronisation, web document editing with Collabora / Libre Office, and video conference and calls are included. There are also cool plugins for just about anything, from CRM to drawing diagrams. It can also act as a mail client, calendar, contact book, notepad and tasks dashboard. Nextcloud is possibly the most used self-hosted service.

### Jellyfin
[Jellyfin](https://jellyfin.org/) is a media streaming service for Movies, TV Shows, Books, Photos, Music... You get the idea. It is similar to PLEX, though I enjoy having my books easily accessible along with other media in a single service. By having my media files set up as an external storage in Nextcloud, I can access them with Jellyfin and stream them to any device with their desktop and phone applications. That way, I get both a backup with Nextcloud and a nice streaming and download interface with Jellyfin. Some like to use [Servarr](https://wiki.servarr.com/) to easily add files to their libraries, though I won't elaborate on that one.

### Servarr
[Servarr](https://wiki.servarr.com/) can be used with [a BitTorrent client](https://github.com/linuxserver/docker-qbittorrent) to provide a download-on-request feature for Jellyfin from Torrenting and Usenet sources. New content is automatically added to the Jellyfin library according to predefined sorting and naming rules, so your library stays organized as new content is added.

### Calibre 
[Calibre](https://calibre-ebook.com/) is an unparalleled eBook library management tool, and the [docker container](https://github.com/linuxserver/docker-calibre) provides a web interface that I can access from another computer. It can act as a middleman between [Readarr](https://wiki.servarr.com/en/readarr) and Jellyfin. Calibre helps me manage my eBooks' metadata efficiently, and makes my eBooks available in a uniform way. It is definitely not meant for browsing and reading books, though; that's what Jellyfin is for.

### Vaultwarden
An alternative to Bitwarden, [Vaultwarden](https://github.com/dani-garcia/vaultwarden) is an unofficial, lightweight Bitwarden server implementation. With this service, you no longer need to trust or pay Bitwarden to host your password vault.


### Others
Other services all follow the same methodology: find a docker compose example file, adjust it a little bit, add a URL to you DNS and Nginx Proxy Manager settings, and start the service. Using Docker means never having to deal with environment conflicts, so you can run as many services as the server can handle, which cna be quite a lot!



## Additional Virtual Machines
### Home Assistant Operating System
HAOS is an open source [home automation server](https://www.home-assistant.io/) that integrates with thousands of devices from many, many brands. Instead of having a different app for each brand of device, I just use their integrations in Home Assistant and add them to a unified dashboard. It even has voice command integrations, and running the server locally instead of in the cloud gives me better control over my privacy, as well as better reliability. I don't need Google or the Internet to work for my lights to turn on and off.

I usually use [Node-RED](https://nodered.org/) to create more complex automation rules. It has a nice and intuitive drag-and-drop interface that allows me to easily link different services together. For example, I can tell it to turn on a fan via a smart plug if the CO<sub>2</sub> level provided by another sensor rises too high, or tell it to water the garden for 12 minutes every morning, 30 minutes after sunrise, unless the [soil moisture level](/guides/iot_irrigation_with_espoir/) is already high enough.

Running Home Assistant in a separate VM from all the other services grants me easy access to Home Assistant add-ons and supervisors. That's actually the main reason why I run Proxmox VE as my main OS instead of just running Debian directly on the hardware.


## Storage sharing, redundancy, and backup
Proxmox VE makes the creation of ZFS storage very easy. ZFS which is an enterprise-grade file system that includes data protection features out-of-the-box. I use it to run a simple mirror-architecture, where all data is duplicated. If one drive fails, I just need to pop in a new one and the data will be copied there.

A script periodically runs a rsync command to copy the drive's content to a separate drive. I don't use a versioning system for that, since Nextcloud already provides a versioning system for my files and I just assume that if the backup runs properly, then that means the underlying drives are also functional.


## Resources
The best way to get started, and get help, is definitely on Reddit's [r/selfhosted](https://www.reddit.com/r/selfhosted/). The [welcome post](https://www.reddit.com/r/selfhosted/comments/bsp01i/welcome_to_rselfhosted_please_read_this_first/) provides many resources for help and inspiration.
