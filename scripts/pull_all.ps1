$env:GIT_SSH = (Get-Command ssh | Select-Object -expand source)

$files = Get-ChildItem * -Directory

foreach ($file in $files) {
  If (-NOT  ($file -eq '.git')) {
    Push-Location "$file"

    git pull origin $(git rev-parse --abbrev-ref HEAD)
  
    Pop-Location
  }
}
