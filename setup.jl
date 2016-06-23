f = open(ENV["HOME"] * "/sandbox/org-wal.sh/events/juliacon2016.org")
lines = readlines(f)
close(f)

counter = 1
for line in lines
    m = match(r"^\*\* ", line)

    if m !== nothing
        dirname =lowercase(replace(strip("$line", ['*',':',',','.']), " ", "_"))
        println("$dirname")
    end
    counter += 1
end
