grep -e '^\*\* ' ~/sandbox/org-wal.sh/events/juliacon2016.org | tr '[:upper:]' '[:lower:]' | sed -e 's#\*\* ##g' -e 's# #_#g' -e 's#[:,]##g'> t
while read line
do
    echo $line
    mkdir -p  $line
    if [ -f $line/README.org ]
    then
        echo
    else
        echo "- added README"
        echo $line >  $line/README.org
    fi
done < t
