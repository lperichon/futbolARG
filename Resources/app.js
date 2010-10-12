// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Resultados de la última fecha',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Última Fecha',
    window:win1
});

// create table view data object
var data = [
  {title:'1	Godoy Cruz - Gimnasia La Plata 0', hasChild:false},
  {title:'3 Estudiantes La Plata - Arsenal de Sarandí	0', hasChild:false},
  {title:'0 Tigre - Chacarita 2', hasChild:false},
  {title:'1 Vélez Sarsfield - Colón de Santa Fe 1', hasChild:false},
  {title:'3	Racing Club - Rosario Central	0', hasChild:false},
  {title:'0	Atlético Tucumán - San Lorenzo	1', hasChild:false},
  {title:'0	River Plate - Banfield	1', hasChild:false},
  {title:'0	Newell s Old Boys - Independiente	0', hasChild:false},
  {title:'3	Lanús - Huracán	2', hasChild:false},
  {title:'2	Argentinos Juniors - Boca Juniors	2', hasChild:false}
  ]

// create table view
var tableview = Titanium.UI.createTableView({
  backgroundColor: '#000',
	data:data
});  
  
// add table view to the window
win1.add(tableview);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tabla de posiciones',
    backgroundColor:'#000'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Posiciones',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'Esta es LA tabla de posiciones',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
