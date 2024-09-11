nmcli connection delete eth0
for i in $(ls -l /sys/class/net/ | egrep -v 'virtual|total' | awk '{print $NF}' | awk -F/ '{print $NF}' | egrep -v '0');
do 
	nmcli device connect $i;
	nmcli connection up $i;
done