<?php
header("HTTP/1.1 301 Moved Permanently");
header("Location: gallery.html");
?>
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="refresh" content="0;url=gallery.html">
  <script>window.location.replace("gallery.html");</script>
</head>
<body>
  <p>Redirecting to <a href="gallery.html">gallery.html</a>...</p>
</body>
</html>
