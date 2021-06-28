<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ page isELIgnored="false" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<body>
<h4><a href="/expirymedicines">List Of Expired Medicines</a></h4>
<h4><a href="/home">Add Medicine</a></h4>
<h4><a href="/medicines">List Of Medicines</a></h4>
<table border="1">
<caption><h1>${heading}</h1></caption>
<thead>
<tr>
 <th>Medicine Name</th>
  <th>Manufacturing Date</th>
 <th>Expiry Date</th>
 <th>Medicine description</th>
 <th>Medicine price</th>
 <th>Medicine company</th>
 <th>Quantity</th>
 </tr>
 </thead>
 <tbody>
<c:forEach items="${medicines}" var="Medicine">
<tr>
<td>${Medicine.medicineName}</td>
<td>${Medicine.mfg}</td>
<td> ${Medicine.expiryDate}</td>
<td>${Medicine.description}</td>
<td>${Medicine.price}</td>
<td>${Medicine.company}</td>
<td>${Medicine.stock}</td>
</tr>
 </c:forEach>
 </tbody>
 </table>
</body>
</html>