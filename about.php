<?php
header("HTTP/1.1 301 Moved Permanently");
header("Location: about.html");
?>
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="refresh" content="0;url=about.html">
  <script>window.location.replace("about.html");</script>
</head>
<body>
  <p>Redirecting to <a href="about.html">about.html</a>...</p>
</body>
</html>
