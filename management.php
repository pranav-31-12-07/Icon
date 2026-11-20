<?php
header("HTTP/1.1 301 Moved Permanently");
header("Location: management.html");
?>
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="refresh" content="0;url=management.html">
  <script>window.location.replace("management.html");</script>
</head>
<body>
  <p>Redirecting to <a href="management.html">management.html</a>...</p>
</body>
</html>
