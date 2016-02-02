<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Form Response</title>
</head>

<body>
<?php if(isset($_POST['submit-button'])) { ?>

<h1>Hi, <?php echo $_POST['name-first']; ?></h1>

<p> Dear <?php echo $_POST['name-first']; ?> <?php echo $_POST['name-last']; ?>,</p>

<p>Your username is: <? echo $_POST['user-name']; ?></p>

<p>Your gender is: <? echo $_POST['gender']; ?></p>

<p>You live in: <?php echo $_POST['states']; ?></p>

<?php } ?>

</body>
</html>