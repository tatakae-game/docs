$env:GIT_SSH = (Get-Command ssh | Select-Object -expand source)

$files = Get-ChildItem *

foreach ($file in $files) {
  Set-Location "$file"

  git pull

  Set-Location ..
}
