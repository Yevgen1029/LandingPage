<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ include file="/WEB-INF/views/template/header.jsp" %>

<div class="container-wrapper">
    <div class="container">
        <div id="login-box">
            <h2>Register User</h2>
            <p class="lead">Please input your information bellow:</p>

            <spring:url value="register/success" var="registerForm"/>
            <form:form action="${registerForm}" method="post" modelAttribute="user">

                <div class="form-group">
                    <label for="name">Name: </label>
                    <form:errors path="name" cssStyle="color: red"/>
                    <form:input path="name" id="name" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="password"><Password></Password>Password:</label>
                    <form:errors path="password" cssStyle="color: red"/>
                    <form:password path="password" id="password" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <form:input path="email" id="email" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="login-box">Login:</label>
                    <form:input path="login" id="login" class="form-control"/>
                </div>
                <input type="submit" value="Submit" class="btn btn-default">
                <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
            </form:form>
        </div>
    </div>
</div>

<%@ include file="/WEB-INF/views/template/footer.jsp" %>