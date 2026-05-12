$path = "c:\Users\User\Desktop\PrioraOS website Draft 2\src\pages\LocumStation.tsx"
$t = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
$r = [char]0xFFFD
$tm = [char]0x2122
$pound = [char]0x00A3
$middot = [char]0x00B7
$emdash = [char]0x2014
$t = $t.Replace("EFE$r", "EFE$tm")
$t = $t.Replace("ECE$r", "ECE$tm")
$t = $t.Replace("EquityMark$r", "EquityMark$tm")
$t = $t.Replace("Live $r UK", "Live $middot UK")
$t = $t.Replace("v3.0 $r Crown", "v3.0 $emdash Crown")
$t = $t.Replace("${r}99", "${pound}99")
$t = $t.Replace("Station $r locumstation", "Station $emdash locumstation")
[System.IO.File]::WriteAllText($path, $t, (New-Object System.Text.UTF8Encoding $false))
Write-Host "Fixed. Remaining FFFD count: $(([regex]::Matches($t, [char]0xFFFD)).Count)"
