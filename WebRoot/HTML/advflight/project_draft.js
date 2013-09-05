Ext.onReady(function() {
	
	Ext.QuickTips.init();
	Ext.form.Field.prototype.msgTarget='side';
	
	// 客户列表
	var consumerCombStore = new Ext.data.Store({
		proxy: new Ext.data.HttpProxy({url: '/myads/HTML/advflight/ProjectAction_getConsumerList.action'}),
		reader: new Ext.data.ArrayReader({}, [
			{name: 'value'},{name: 'text'}
		]),
		listeners:{  
			load : function(store, records, options ){  
				var data = {'value':'','text':''};
				var rs = [new Ext.data.Record(data)];  
				store.insert(0,rs);
			}  
		}
	});
	consumerCombStore.load();
	
	// 广告主列表
	var advertiserCombStore = new Ext.data.Store({
		proxy: new Ext.data.HttpProxy({url: '/myads/HTML/advflight/ProjectAction_getAdvertiserList.action'}),
		reader: new Ext.data.ArrayReader({}, [
			{name: 'value'},{name: 'text'}
		]),
		listeners:{  
			load : function(store, records, options ){  
				var data = {'value':'','text':''};
				var rs = [new Ext.data.Record(data)];  
				store.insert(0,rs);
			}  
		}
	});
	advertiserCombStore.load();
	
	// 广告主产品线
	var productLineCombStore = new Ext.data.Store({
		proxy: new Ext.data.HttpProxy({url: '/myads/HTML/sysfun/ProductLineAction_getProductLineById.action'}),
		reader: new Ext.data.ArrayReader({}, [
			{name: 'value'},{name: 'text'}
		])
	});
	
	// 产品
	var productCombStore = new Ext.data.Store({
		proxy: new Ext.data.HttpProxy({url: '/myads/HTML/sysfun/ProductAction_getProductByLineId.action'}),
		reader: new Ext.data.ArrayReader({}, [
			{name: 'value'},{name: 'text'}
		])
	});
	
	// 销售大区
	var areaCombStore = new Ext.data.Store({
		proxy: new Ext.data.HttpProxy({url: '/myads/HTML/sysfun/AreaAction_getAreaList.action'}),
		reader: new Ext.data.ArrayReader({}, [
			{name: 'value'},{name: 'text'}
		])
	});
	areaCombStore.load();
	
	// 渠道销售
	var ditchCombStore = new Ext.data.Store({
		proxy: new Ext.data.HttpProxy({url: '/myads/HTML/sysfun/RoleAction_getUserInfoList.action'}),
		reader: new Ext.data.ArrayReader({}, [
			{name: 'value'},{name: 'text'}
		]),
		listeners:{  
			load : function(store, records, options ){  
				var data = {'value':'','text':''};
				var rs = [new Ext.data.Record(data)];  
				store.insert(0,rs);
			}  
		}
	});
	ditchCombStore.load({params: {roleName : encodeURI('渠道销售')}});
	
	// 直客销售
	var saleCombStore = new Ext.data.Store({
		proxy: new Ext.data.HttpProxy({url: '/myads/HTML/sysfun/RoleAction_getUserInfoList.action'}),
		reader: new Ext.data.ArrayReader({}, [
			{name: 'value'},{name: 'text'}
		]),
		listeners:{  
			load : function(store, records, options ){  
				var data = {'value':'','text':''};
				var rs = [new Ext.data.Record(data)];  
				store.insert(0,rs);
			}  
		}
	});
	saleCombStore.load({params: {roleName : encodeURI('直客销售')}});
	
	// 执行单类型
	var projectTypeStore = new Ext.data.Store({
		proxy: new Ext.data.HttpProxy({url: '/myads/HTML/basic/OptionsAction_getBaseDataNamesByType.action?dataType=usetype'}),
		reader: new Ext.data.ArrayReader({}, [
			{name: 'value'},{name: 'text'}
		]),
		listeners:{  
			load : function(store, records, options ){  
				var data = {'value':'','text':''};
				var rs = [new Ext.data.Record(data)];  
				store.insert(0,rs);
			}  
		}
	});
	projectTypeStore.load();
	
	var kpiGroup = {
		 xtype: 'fieldset',
		 title: 'KPI',
		 layout: 'form',
		 items: [
			 {
			 	layout:'column',
			 	items:[
			 		{
						columnWidth: .5, layout: 'form',
						items: [{
							xtype : 'textfield',
							name : 'impression',
							fieldLabel : '曝光',
							anchor : '90%',
							regex : /^\d*$/,
							regexText : "只能输入数字!"
						}]
					},
					{
						columnWidth: .5, layout: 'form',
						items: [{
							xtype : 'numberfield',
							name : 'click',
							fieldLabel : '点击率',
							anchor : '90%',
							allowDecimals : true,
							decimalPrecision : 2,
							nanText :'请输入有效的小数',
							allowNegative : false
						}]
					}
			 	]
			 },
			 {
			 	layout:'column',
			 	items:[
			 		{
						columnWidth: 1, layout: 'form',
						items: [{
							xtype : 'textfield',
							name : 'note',
							fieldLabel : '备注',
							anchor : '99%'
						}]
					}
			 	]
			 }
		 ]
	};
	
	var edit_form = new Ext.form.FormPanel({
		labelAlign: 'right',
		region: 'center',
		labelWidth: 80,
		frame: true,
		items: [
			{
				items: [
					{	
						columnWidth: .01, layout: 'form',
			        	items: [
			        	        { xtype: 'hidden', name: 'id', hidden:true, hiddenLabel:true},
			        	        { xtype: 'hidden', name: 'consumerName', hidden:true, hiddenLabel:true},
			        	        { xtype: 'hidden', name: 'advertiserName', hidden:true, hiddenLabel:true},
			        	        { xtype: 'hidden', name: 'productLineName', hidden:true, hiddenLabel:true},
			        	        { xtype: 'hidden', name: 'productName', hidden:true, hiddenLabel:true},
			        	        { xtype: 'hidden', name: 'ditchName', hidden:true, hiddenLabel:true},
			        	        { xtype: 'hidden', name: 'saleName', hidden:true, hiddenLabel:true}
			        	] 
			        }
				]
			},
			{
				layout: 'column',
				items: [
					{
						columnWidth: 1, layout: 'form',
						items: [{
							xtype : 'textfield',
							name : 'contractNum',
							fieldLabel : '合同号',
							regex : /^\d*$/,
							regexText : "只能输入数字!",
							anchor : '95%'
						}]
					}
				]
			},
			{
				layout: 'column',
				items: [
					{
						columnWidth: .33, layout: 'form',
						items: [
							new Ext.form.ComboBox({
		        	       		fieldLabel: '执行单类型<font color="red">*</font>',
								hiddenName: 'type',
								mode: 'local',
								triggerAction: 'all', 
								valueField: 'value',
								editable : false,
								allowBlank:false,
								blankText: '此项不能为空!',
								displayField: 'text',
								anchor : '90%',
								tpl:'<tpl for=".">' +  
									    '<div class="x-combo-list-item" >' +  
									            '{text}&nbsp;' +  
									    '</div>'+  
								    '</tpl>',
								store: projectTypeStore
		        	       })
						]
					},
					{
						columnWidth: .34, layout: 'form',
						items: [
							{
								xtype : 'textfield',
								name : 'name',
								fieldLabel : '项目名称<font color="red">*</font>',
								allowBlank:false,
								blankText: '此项不能为空!',
								anchor : '90%'
							}
						]
					},
					{
						columnWidth: .33, layout: 'form',
						items: [
							new Ext.form.ComboBox({
		        	       		fieldLabel: '客户<font color="red">*</font>',
		        	       		editable : false,
								allowBlank:false,
								blankText: '此项不能为空!',
								hiddenName: 'consumerId',
								mode: 'local',
								triggerAction: 'all', 
								valueField: 'value',
								displayField: 'text',
								anchor : '90%',
								store: consumerCombStore,
								tpl:'<tpl for=".">' +  
									    '<div class="x-combo-list-item" >' +  
									            '{text}&nbsp;' +  
									    '</div>'+  
								    '</tpl>',
								listeners : {
									select : function(postemCombo, record, index) {
										var consumerName = record.data.text;
										edit_form.getForm().findField("consumerName").setValue(consumerName);
									}
								}
		        	       })
						]
					}
				]
			},
			{
				layout: 'column',
				items: [
					{
						columnWidth: .33, layout: 'form',
						items: [
							new Ext.form.ComboBox({
		        	       		fieldLabel: '广告主名称<font color="red">*</font>',
								hiddenName: 'advertiserId',
								editable : false,
								allowBlank:false,
								blankText: '此项不能为空!',
								mode: 'local',
								triggerAction: 'all', 
								valueField: 'value',
								displayField: 'text',
								anchor : '90%',
								tpl:'<tpl for=".">' +  
									    '<div class="x-combo-list-item" >' +  
									            '{text}&nbsp;' +  
									    '</div>'+  
								    '</tpl>',
								store: advertiserCombStore,
								listeners : {
					                select : function(ComboBox, record, index) {
					                	edit_form.getForm().findField("productLineId").clearValue();
					                	var id = record.data.value;
					                	productLineCombStore.load({params: {id : id}});
					                	
					                	var advertiserName = record.data.text;
										edit_form.getForm().findField("advertiserName").setValue(advertiserName);
					                }
					            }
		        	       })
						]
					},
					{
						columnWidth: .34, layout: 'form',
						items: [
							new Ext.form.ComboBox({
		        	       		fieldLabel: '产品线<font color="red">*</font>',
		        	       		editable : false,
								allowBlank:false,
								blankText: '此项不能为空!',
								hiddenName: 'productLineId',
								mode: 'local',
								triggerAction: 'all', 
								valueField: 'value',
								displayField: 'text',
								anchor : '90%',
								store: productLineCombStore,
								listeners : {
					                select : function(ComboBox, record, index) {
					                	edit_form.getForm().findField("productId").clearValue();
					                	var id = record.data.value;
					                	productCombStore.load({params: {id : id}});
					                	
					                	var productLineName = record.data.text;
										edit_form.getForm().findField("productLineName").setValue(productLineName);
					                }
					            }
		        	       })
						]
					},
					{
						columnWidth: .33, layout: 'form',
						items: [
							new Ext.form.ComboBox({
		        	       		fieldLabel: '产品<font color="red">*</font>',
		        	       		editable : false,
								allowBlank:false,
								blankText: '此项不能为空!',
								hiddenName: 'productId',
								mode: 'local',
								triggerAction: 'all', 
								valueField: 'value',
								displayField: 'text',
								anchor : '90%',
								store: productCombStore,
								listeners : {
								select : function(postemCombo, record, index) {
									var productName = record.data.text;
									edit_form.getForm().findField("productName").setValue(productName);
								}
							}
		        	       })
						]
					}
				]
			},
			{
				layout: 'column',
				items: [
					{
						columnWidth: .33, layout: 'form',
						items: [
							new Ext.form.ComboBox({
		        	       		fieldLabel: '销售大区<font color="red">*</font>',
								hiddenName: 'area',
								mode: 'local',
								triggerAction: 'all', 
								valueField: 'value',
								displayField: 'text',
								anchor : '90%',
								editable : false,
								allowBlank:false,
								blankText: '此项不能为空!',
								store: areaCombStore
		        	       })
						]
					},
					{
						columnWidth: .34, layout: 'form',
						items: [
							new Ext.form.ComboBox({
		        	       		fieldLabel: '渠道销售',
								hiddenName: 'ditchId',
								id : 'dId',
								mode: 'local',
								triggerAction: 'all', 
								valueField: 'value',
								displayField: 'text',
								anchor : '90%',
								editable : false,
								store: ditchCombStore,
								tpl:'<tpl for=".">' +  
									    '<div class="x-combo-list-item" >' +  
									            '{text}&nbsp;' +  
									    '</div>'+  
								    '</tpl>',
								listeners : {
									select : function(postemCombo, record, index) {
										var ditchName = record.data.text;
										edit_form.getForm().findField("ditchName").setValue(ditchName);
									}
								}
		        	       })
						]
					},
					{
						columnWidth: .33, layout: 'form',
						items: [
							new Ext.form.ComboBox({
		        	       		fieldLabel: '直客销售',
		        	       		editable : false,
								hiddenName: 'saleId',
								id : 'sId',
								mode: 'local',
								triggerAction: 'all', 
								valueField: 'value',
								displayField: 'text',
								anchor : '90%',
								store: saleCombStore,
								tpl:'<tpl for=".">' +  
									    '<div class="x-combo-list-item" >' +  
									            '{text}&nbsp;' +  
									    '</div>'+  
								    '</tpl>',
								listeners : {
									select : function(postemCombo, record, index) {
										var saleName = record.data.text;
										edit_form.getForm().findField("saleName").setValue(saleName);
									}
								}
		        	       })
						]
					}
				]
			},
			{
				layout: 'column',
				items: [
					{
						columnWidth: .33, layout: 'form',
						items: [
							{
								xtype : 'numberfield',
								name : 'sum',
								fieldLabel : '金额<font color="red">*</font>',
								allowBlank:false,
								blankText: '此项不能为空!',
								anchor : '90%'
							}
						]
					},
					{
						columnWidth: .34, layout: 'form',
						items: [
							{
								xtype : 'numberfield',
								name : 'discount',
								fieldLabel : '折扣',
								anchor : '90%'
							}
						]
					}
				]
			},
			{
				layout: 'column',
				items: [
					{
						columnWidth: .33, layout: 'form',
						items: [
							{
								xtype : 'numberfield',
								name : 'sendRate',
								fieldLabel : '配送比例',
								anchor : '90%'
							}
						]
					}
				]
			},
			{
				layout: 'column',
				items: [
					{
						columnWidth: .33, layout: 'form',
						items: [
							new Ext.form.DateField({
										id:'dt1',
										fieldLabel: '开始日期<font color="red">*</font>',
										name: 'startTime',
										editable : false,
										allowBlank:false,
										format:'Y-m-d',
										value : new Date(),
										anchor : '90%',
										listeners : {
											beforerender : function() {
												Ext.getCmp('dt1').setMinValue(Ext.getCmp('dt1').getValue());
											},
											select : function() {
												Ext.getCmp('dt2').setMinValue(Ext.getCmp('dt1').getValue());
											}
										}
									})
						]
					},
					{
						columnWidth: .33, layout: 'form',
						items: [
							new Ext.form.DateField({
										id:'dt2',
										fieldLabel: '结束日期<font color="red">*</font>',
										minValue: '2010-12-12',
										editable : false,
										name: 'endTime',
										allowBlank:false,
										format:'Y-m-d',
										anchor : '90%'
									})
						]
					}
				]
			},
			{
				layout: 'column',
				items: [
					{
						columnWidth: 1, layout: 'form',
						items: [
							{
								xtype : 'textfield',
								name : 'explains',
								fieldLabel : '广告形式需求',
								anchor : '60%'
							}
						]
					}
				]
			},
			{
				layout: 'column',
				items: [
					{
						columnWidth: 1, layout: 'form',items:[kpiGroup]
					}
				]
			}
		],
		buttons: [
			{
				text: '保存',
				handler: function() {
					var ditchId = Ext.get('dId').dom.value;
					var saleId = Ext.get('sId').dom.value;
					
					if (ditchId == "" && saleId == "") {
						Ext.MessageBox.alert('提示', '渠道销售和直客销售请至少选择一项!');
					} else {
						edit_form.form.doAction('submit', {
							url: '/myads/HTML/advflight/ProjectAction_save.action',
							method: 'post',
							params: '',
							success: function(form, action) {
								Ext.MessageBox.alert('结果', '保存成功！');
								form.reset();
								grid.getStore().reload();
								edit_win.hide();
							}
						});
					}
				}
			},
			{
				text: '重置',
				handler: function() {
					edit_form.form.reset();
				}
			}
		]
	});
	
	var edit_win = new Ext.Window({
		title: '执行单',
        applyTo:'edit_win_div',
        width:720,
    	height:420,
        closeAction:'hide',
        plain: true,
        layout: 'border',
        items: [edit_form]
    });
	
	var searchForm = new Ext.FormPanel({
		frame: true,
		region: 'north',
		labelAlign: 'right',
		items: [
			{xtype : 'hidden',name : 'type',hidden : true,hiddenLabel : true},
			{
				layout: 'column',
				items: [
					{
						columnWidth: .25, layout: 'form',
							items: [
								new Ext.form.ComboBox({
			        	       		fieldLabel: '执行单类型',
									hiddenName: 'type',
									mode: 'local',
									editable : false,
									triggerAction: 'all', 
									valueField: 'value',
									displayField: 'text',
									anchor : '99%',
									tpl:'<tpl for=".">' +  
										    '<div class="x-combo-list-item" >' +  
										            '{text}&nbsp;' +  
										    '</div>'+  
									    '</tpl>',
									store: projectTypeStore
			        	       })
							]
					},
					{
						columnWidth: .25, layout: 'form',
						items: [
							{
								xtype : 'textfield',
								name : 'name',
								fieldLabel : '项目名称',
								anchor : '99%'
							}
						]
					},
					{
						columnWidth: .25, layout: 'form',
						items: [
							new Ext.form.ComboBox({
		        	       		fieldLabel: '广告主名称',
								hiddenName: 'advertiserId',
								mode: 'local',
								editable : false,
								triggerAction: 'all', 
								valueField: 'value',
								displayField: 'text',
								anchor : '99%',
								tpl:'<tpl for=".">' +  
									    '<div class="x-combo-list-item" >' +  
									            '{text}&nbsp;' +  
									    '</div>'+  
								    '</tpl>',
								store: advertiserCombStore
		        	       })
						]
					},
					{
						columnWidth: .25, layout: 'form',
						items: [
							new Ext.form.ComboBox({
		        	       		fieldLabel: '客户',
								hiddenName: 'consumerId',
								mode: 'local',
								editable : false,
								triggerAction: 'all', 
								valueField: 'value',
								displayField: 'text',
								anchor : '99%',
								tpl:'<tpl for=".">' +  
									    '<div class="x-combo-list-item" >' +  
									            '{text}&nbsp;' +  
									    '</div>'+  
								    '</tpl>',
								store: consumerCombStore
		        	       })
						]
					}
				]
			},
			{
				layout: 'column',
				items: [
					{
						columnWidth: .25, layout: 'form',
						items: [
							new Ext.form.ComboBox({
		        	       		fieldLabel: '渠道销售',
								hiddenName: 'ditchId',
								mode: 'local',
								editable : false,
								triggerAction: 'all', 
								valueField: 'value',
								displayField: 'text',
								anchor : '99%',
								tpl:'<tpl for=".">' +  
									    '<div class="x-combo-list-item" >' +  
									            '{text}&nbsp;' +  
									    '</div>'+  
								    '</tpl>',
								store: ditchCombStore
		        	       })
						]
					},
					{
						columnWidth: .25, layout: 'form',
						items: [
							new Ext.form.ComboBox({
		        	       		fieldLabel: '直客销售',
								hiddenName: 'saleId',
								mode: 'local',
								editable : false,
								triggerAction: 'all', 
								valueField: 'value',
								displayField: 'text',
								anchor : '99%',
								tpl:'<tpl for=".">' +  
									    '<div class="x-combo-list-item" >' +  
									            '{text}&nbsp;' +  
									    '</div>'+  
								    '</tpl>',
								store: saleCombStore
		        	       })
						]
					},
					{
						columnWidth: .25, layout: 'form',
						items: [{
							xtype : 'textfield',
							name : 'contractNum',
							fieldLabel : '合同号',
							anchor : '99%'
						}]
					}
				]
			}
		],
		buttons: [
			{
				text : '查询',
				width : 70,
				handler : function() {
					var fv = searchForm.getForm().getValues();
					ds.baseParams = fv;
					ds.load({params : {start : 0,limit : 20}});
					edit_win.hide();
				}
			},
			{
				text: '重置',
				width : 70,
				handler: function() {
					searchForm.form.reset();
				}
			},
			{
				text: '新建执行单',
				handler: function() {
					edit_form.form.reset();
					edit_win.show();
				}
			}
		]
	});
	searchForm.render('north-div');
	
	//判断状态
	function rendStauts(value){
		if(value==-1){
			return "<span style='color:RED'>已删除</span>";
		}else if(value==0){
			return "草稿项目单";
		}else if(value==2){
			return "客户待确认项目单";
		}else if(value==4){
			return "退回项目单";
		}else if(value==5){
			return "未通过项目单";
		}else if(value==1){
			return "待一审项目单";
		}else if(value==3){
			return "待二审项目单";
		}else if(value==7){
			return "执行中项目单";
		}
	}
	
	//判断执行单类型
	function rendType(value){
		if(value==1){
			return "售卖";
		}else if(value==2){
			return "配送";
		}else if(value==3){
			return "补量";
		}else if(value==4){
			return "测试";
		}else if(value==5){
			return "推广";
		}else if(value==6){
			return "软性";
		}else if(value==7){
			return "电商";
		}else if(value==8){
			return "置换";
		}else if(value==9){
			return "游戏";
		}else if(value==10){
			return "内部使用";
		}
	}
	
	var cm = new Ext.grid.ColumnModel([
		{header:'ID', dataIndex:'id', sortable:true},
		{header:'项目名称', dataIndex:'name', sortable:true},
		{header:'开始时间', dataIndex:'startTime', sortable:true},
		{header:'结束时间', dataIndex:'endTime', sortable:true},
	    {header:'执行单类型', dataIndex:'type', sortable:true, renderer:rendType},
	    {header:'广告主', dataIndex:'advertiserName', sortable:true},
	    {header:'直客销售', dataIndex:'saleName', sortable:true},
	    {header:'渠道销售', dataIndex:'ditchName', sortable:true},
	    {header:'创建人', dataIndex:'creator', sortable:true},
	    {header:'创建时间', dataIndex:'createTime', sortable:true},
	    {header:'操作', dataIndex:'op', renderer: renderOp,width:140, align:'left'}
	]);
	
	function renderOp(value, cellmeta, record, rowIndex, columnIndex, stor) {
		var id = record.data.id;
		var name = record.data.name; 
		var delStr = '<a href="#" onclick=\"del_breif(\''+id+'\', \'' + name + '\');\">删除</a>';
		var updateStr = '<a href="#" onclick=\"update_breif(\''+id+'\');\">编辑</a>';
		var advflight = '<a href="/myads/HTML/book/book.jsp?projectId='+id+'">排期</a>';
		var pointPreview = '<a href="#" onclick=\"showPointPreview(\''+id+'\');\">预览</a>';
		
		// 结束时间
		var endTimeStr = '' + record.data.endTime;
		endTimeStr = endTimeStr.replace(/-/g, "/");
		var endTimeTmp = new Date(endTimeStr);
		
		// 现在时间
		var nowTime = new Date();
		var _temps1 = Ext.util.Format.date(nowTime, "Y/m/d");
		var nowDate = new Date(_temps1);
		
		var del = '';
		if(Date.parse(endTimeTmp)-Date.parse(nowDate) >= 0) {
			del = '&nbsp;&nbsp;&nbsp;&nbsp;' + delStr;
		}
		
		return advflight + '&nbsp;&nbsp;&nbsp;&nbsp;' + pointPreview + '&nbsp;&nbsp;&nbsp;&nbsp;' + updateStr + del;
	}
	
	window.showPointPreview = function(projectId) {
		window.open('advflight_point_preview.jsp?projectId=' + projectId);
	}
	
	window.del_breif = function(id, name) {
		Ext.MessageBox.confirm('提示', '确定删除  ' + name + ' ？', function(btn) {
			if(btn == 'yes') {
				Ext.Ajax.request({
					method: 'post',
					url: '/myads/HTML/advflight/ProjectAction_delete.action',
				   	success:function(resp){
				    	var obj=Ext.util.JSON.decode(resp.responseText);
				      	if(obj.result == 'success') {
				      		grid.getStore().reload();
				      		Ext.MessageBox.alert('提示', '删除成功！');
				      	} else if (obj.result == 'exist') {
				      		Ext.MessageBox.alert('提示', '删除失败,该执行单下存在有历史排期或有正在执行的排期!');
				      	} else {
				      	}
				    },
				   	params: {projectId: id}
				});
			}
			else {
			}
		});
	}
	
	window.update_breif = function(id) {
		edit_form.load({
			url: '/myads/HTML/advflight/ProjectAction_getProjectDetail.action',
			params: {id: id},
			success:function(form,action){
				productLineCombStore.addListener('load', function() {
					var value = edit_form.getForm().findField("productLineId").getValue();
				   	edit_form.getForm().findField("productLineId").setValue(value);
				   	advertiserCombStore.removeListener('load');
				});
				productLineCombStore.load({params: {id : action.result.data.advertiserId}});
				
				productCombStore.addListener('load', function() {
					var productId = edit_form.getForm().findField("productId").getValue();
				   	edit_form.getForm().findField("productId").setValue(productId);
				   	productCombStore.removeListener('load');
				});
				productCombStore.load({params: {id : action.result.data.productLineId}});
			}
		});
		edit_win.show();
	}
	
	var ds = new Ext.data.Store({
		proxy: new Ext.data.HttpProxy({url: '/myads/HTML/advflight/ProjectAction_showAll.action?p=0'}),
		remoteSort: false,
		reader: new Ext.data.JsonReader(
			{
				totalProperty: 'total',
				idProperty:'id',
				root: 'invdata'
			},
			[
				{name: 'id'},
				{name: 'name'},
				{name: 'startTime'},
				{name: 'endTime'},
				{name: 'type'},
				{name: 'advertiserName'},
				{name: 'saleName'},
				{name: 'ditchName'},
				{name: 'creator'},
				{name: 'createTime'}
			]
		)
	});

	ds.load({params: {start:0, limit:50}});
	
	var grid = new Ext.grid.GridPanel({
		el: 'grid',
		region: 'center',
		ds: ds,
		cm: cm,
	    viewConfig: {
	    	forceFit: true
	    },
	    bbar: new Ext.PagingToolbar({
		    pageSize: 50,
		    store: ds,
			displayInfo: true,
			displayMsg: '显示第{0}条到{1}条记录,一共{2}条',
			emptyMsg: '没有记录'
	    })
	});
	
	new Ext.Viewport({
		layout: 'border',
		items:[
		       searchForm,grid
		]
	});
});
