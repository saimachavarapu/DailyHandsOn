<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<a href="/home">Add Medicine</a>|
<a href='/medicines'>View Medicines</a>|
<a href='/expirymedicines'>Expired Medicines</a>
<form method="post">
<pre>
MedicineName     :<input type="text" name="medicineName" pattern="^[A-Za-z]+$" title="Use only letters" required />
Description      :<input type="text" name="description" required/>
Company          :<input type="text" name="company" required/>
MfgDate          :<input type="date" name="mfg" required/>
ExpiryDate       :<input type="date" name="expiryDate" required/>
Price            :<input type="number" name="price" required/>
Quantity         :<input type="number" name="stock" required/>
<input type="submit" name="submit" value="submit" />

</pre>
</form>
</body>
</html>