$env:GIT_SSH = (Get-Command ssh | Select-Object -expand source)

git clone "git@github.com:tatakae-game/tatakae-api.git" --recurse-submodules
git clone "git@github.com:tatakae-game/tatakae-client.git" --recurse-submodules
git clone "git@github.com:tatakae-game/tatakae-admin.git" --recurse-submodules
git clone "git@github.com:tatakae-game/san.git" --recurse-submodules

Invoke-WebRequest "https://github.com/tatakae-game/docs/blob/master/scripts/pull_all.ps1" -OutFile pull_all.ps1
