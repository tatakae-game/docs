$env:GIT_SSH = (Get-Command ssh | Select-Object -expand source)

git clone "git@github.com:tatakae-game/docs.git" --recurse-submodules
git clone "git@github.com:tatakae-game/tatakae-api.git" --recurse-submodules
git clone "git@github.com:tatakae-game/tatakae-client.git" --recurse-submodules
git clone "git@github.com:tatakae-game/tatakae-admin.git" --recurse-submodules
git clone "git@github.com:tatakae-game/san.git" --recurse-submodules

Invoke-WebRequest "https://raw.githubusercontent.com/tatakae-game/docs/master/scripts/pull_all.ps1" -OutFile pull_all.ps1
Invoke-WebRequest "https://raw.githubusercontent.com/tatakae-game/docs/master/configurations/docker-compose.yml" -OutFile docker-compose.yml
