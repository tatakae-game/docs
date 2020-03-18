#!/bin/bash

origin_directory=$PWD
current_directory="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

for dir in *; do
  if [ -d "${dir}" ]; then
    echo "Pulling $current_directory/$dir. "

    cd "$current_directory/$dir"
    git pull origin $(git rev-parse --abbrev-ref HEAD)

    cd $origin_directory
  fi
done
