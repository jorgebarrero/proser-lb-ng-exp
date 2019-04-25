#!/bin/bash
while true ;
do
	wget -O /var/www/html/preports/mw_TR/public/data/realtime.json https://10.30.4.50/asterisk_show_queue_clean.php --no-check-certificate & sleep 5;
done
