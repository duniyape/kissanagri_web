Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead("$PWD\farmer.docx")
$entry = $zip.Entries | Where-Object { $_.FullName -eq 'word/document.xml' }
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$xml = $reader.ReadToEnd()
$reader.Close()
$zip.Dispose()

$doc = [xml]$xml
$ns = New-Object System.Xml.XmlNamespaceManager($doc.NameTable)
$ns.AddNamespace('w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')
$paras = $doc.SelectNodes('//w:p', $ns)
foreach ($p in $paras) {
    $runs = $p.SelectNodes('.//w:t', $ns)
    $line = ($runs | ForEach-Object { $_.InnerText }) -join ''
    if ($line.Trim()) { Write-Output $line.Trim() }
}
