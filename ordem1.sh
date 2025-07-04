#!/bin/bash

for ((i=97; i<=122; i++)); do
    letra=$(printf "\\$(printf '%03o' "$i")")
        echo "Palavras com primeira letra menor que '$letra':"
            awk -v letra="$letra" 'tolower(substr($1,1,1)) < letra { print $0 }' palavras.txt
                echo ""
                done
                
