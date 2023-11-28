docker run -d --name server1 -p 1011:22 --platform linux/x86_64 rastasheep/ubuntu-sshd
docker run -d --name server2 -p 1012:22 --platform linux/x86_64 rastasheep/ubuntu-sshd
docker run -d --name server3 -p 1013:22 --platform linux/x86_64 rastasheep/ubuntu-sshd
docker run -d --name server4 -p 1014:22 --platform linux/x86_64 rastasheep/ubuntu-sshd
docker run -d --name server5 -p 1015:22 --platform linux/x86_64 rastasheep/ubuntu-sshd