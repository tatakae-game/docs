#!/bin/bash

origin_directory=$PWD
current_directory="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

for dir in *; do
  if [ -d "${dir}" ]; then
    printf "Pulling $current_directory/$dir. "

    cd "$current_directory/$dir"
    git pull

    cd $origin_directory
  fi
done
