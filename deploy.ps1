param(
    [string]$Message = "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
)

$ErrorActionPreference = 'Stop'

Set-Location $PSScriptRoot

Write-Host "Checking repository..." -ForegroundColor Cyan
if (-not (Test-Path ".git")) {
    throw "This folder is not a git repository."
}

$branch = (git rev-parse --abbrev-ref HEAD).Trim()
if ($branch -ne "main") {
    throw "You are on branch '$branch'. Switch to 'main' before deploying."
}

Write-Host "Building site..." -ForegroundColor Cyan
npm run build

Write-Host "Staging changes..." -ForegroundColor Cyan
git add -A

# If there are no staged changes, nothing to deploy.
git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
    Write-Host "No changes detected. Nothing to deploy." -ForegroundColor Yellow
    exit 0
}

Write-Host "Committing..." -ForegroundColor Cyan
git commit -m $Message

Write-Host "Pushing to origin/main..." -ForegroundColor Cyan
git push origin main

Write-Host "Deploy triggered. GitHub Actions will publish to Azure Static Web Apps." -ForegroundColor Green
