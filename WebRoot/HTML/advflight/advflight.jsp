<%@ page pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>排期</title>
		<link rel="stylesheet" type="text/css" href="../../ExtJS/resources/css/ext-all.css"/>
		<script type="text/javascript" src="../../ExtJS/adapter/ext/ext-base.js"></script>
		<script type="text/javascript" src="../../ExtJS/ext-all.js"></script>
		<script type="text/javascript" src="../../ExtJS/MonthPickerPlugin.js"></script>
		
		<script type="text/javascript" src="../../ExtJS/examples/ux/ColumnHeaderGroup.js"></script>
		<link rel="stylesheet" type="text/css" href="../../ExtJS/examples/ux/css/ColumnHeaderGroup.css" />
		<link rel="stylesheet" type="text/css" href="../../ExtJS/examples/grid/grid-examples.css" />
    	<link rel="stylesheet" type="text/css" href="../css/button.css" />
    	<script type="text/javascript" src="AdvflightRelationPanel.js"></script>
		<script type="text/javascript" src="advflight.js"></script>
		
	</head>
	<body>
		<input type="hidden" id="projectId" name="projectId" value="${param.projectId}">
		<input type="hidden" id="priority" name="priority" value="${param.priority}">
		<input type="hidden" id="canUpdatePriority" name="priority" value="${param.canUpdatePriority}">
		<div id="north-div"></div>
		<div id="bookPackage_grid"></div>
		<div id="site_grid"></div>
		<div id="prod_grid"></div>
		<div id="adbar_grid"></div>
		<div id="ContentFormWin"></div>	
		
		<div id="area_prinvice_grid"></div>
		<div id="area_city_grid"></div>
		<div id="area_op_panel"></div>
		<div id="area_result_grid"></div>
		
		<div id="point_grid"></div>
	</body>
</html>