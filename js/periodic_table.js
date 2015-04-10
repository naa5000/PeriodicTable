function flashCard(myForm) {
	var AN = document.getElementById("AtomicNumber").value;
	PT[AN - 1].toString();  
	return false; 
}

function Element(AN, name, AS, AM) {
	this.AN = AN; 
	this.name = name; 
	this.AS = AS;
	this.AM = AM; 

	this.toString = function() {
		var string = this.name + '<br><br>' +
					 this.AN + '<br><br>' +
					 this.AM + '<br><br>' +
					 this.AS; 
		document.getElementById('output').innerHTML = string; 
	}
}

function getElement(num){
	elements[num].toString();
}
	
var elements = [
	new Element(1,	'Hydrogen',		'H',	1.0079),
	new Element(2,	'Helium',		'He',	4.0026),
	new Element(3,	'Lithium',		'Li',	6.941),
	new Element(4,	'Beryllium',	'Be',	9.0122),
	new Element(5,	'Boron',		'B',	10.811),
	new Element(6,	'Carbon',		'C',	12.0107),
	new Element(7,	'Nitrogen',		'N',	14.0067),
	new Element(8,	'Oxygen',		'O',	15.9994),
	new Element(9,	'Fluorine',		'F',	18.9984),
	new Element(10,	'Neon',			'Ne',	20.1797),
	new Element(11,	'Sodium',		'Na',	22.9897),
	new Element(12,	'Magnesium',	'Mg',	24.305),
	new Element(13,	'Aluminum',		'Al',	26.9815),
	new Element(14,	'Silicon',		'Si',	28.0855),
	new Element(15,	'Phosphorus',	'P',	30.9738),
	new Element(16,	'Sulfur',		'S',	32.065),
	new Element(17,	'Chlorine',		'Cl',	35.453),
	new Element(19,	'Potassium',	'K',	39.0983),
	new Element(18,	'Argon',		'Ar',	39.948),
	new Element(20,	'Calcium',		'Ca',	40.078),
	new Element(21,	'Scandium',		'Sc',	44.9559),
	new Element(22,	'Titanium',		'Ti',	47.867),
	new Element(23,	'Vanadium',		'V',	50.9415),
	new Element(24,	'Chromium',		'Cr',	51.9961),
	new Element(25,	'Manganese',	'Mn',	54.938),
	new Element(26,	'Iron',			'Fe',	55.845),
	new Element(28,	'Nickel',		'Ni',	58.6934),
	new Element(27,	'Cobalt',		'Co',	58.9332),
	new Element(29,	'Copper',		'Cu',	63.546),
	new Element(30,	'Zinc',			'Zn',	65.39),
	new Element(31,	'Gallium',		'Ga',	69.723),
	new Element(32,	'Germanium',	'Ge',	72.64),
	new Element(33,	'Arsenic',		'As',	74.9216),
	new Element(34,	'Selenium',		'Se',	78.96),
	new Element(35,	'Bromine',		'Br',	79.904),
	new Element(36,	'Krypton',		'Kr',	83.8),
	new Element(37,	'Rubidium',		'Rb',	85.4678),
	new Element(38,	'Strontium',	'Sr',	87.62),
	new Element(39,	'Yttrium',		'Y',	88.9059),
	new Element(40,	'Zirconium',	'Zr',	91.224),
	new Element(41,	'Niobium',		'Nb',	92.9064),
	new Element(42,	'Molybdenum',	'Mo',	95.94),
	new Element(43,	'Technetium',	'Tc',	98),
	new Element(44,	'Ruthenium',	'Ru',	101.07),
	new Element(45,	'Rhodium',		'Rh',	102.9055),
	new Element(46,	'Palladium',	'Pd',	106.42),
	new Element(47,	'Silver',		'Ag',	107.8682),
	new Element(48,	'Cadmium',		'Cd',	112.411),
	new Element(49,	'Indium',		'In',	114.818),
	new Element(50,	'Tin',			'Sn',	118.71),
	new Element(51,	'Antimony',		'Sb',	121.76),
	new Element(53,	'Iodine',		'I',	126.9045),
	new Element(52,	'Tellurium',	'Te',	127.6),
	new Element(54,	'Xenon',		'Xe',	131.293),
	new Element(55,	'Cesium',		'Cs',	132.9055),
	new Element(56,	'Barium',		'Ba',	137.327),
	new Element(57,	'Lanthanum',	'La',	138.9055),
	new Element(58,	'Cerium',		'Ce',	140.116),
	new Element(59,	'Praseodymium',	'Pr',	140.9077),
	new Element(60,	'Neodymium',	'Nd',	144.24),
	new Element(61,	'Promethium',	'Pm',	145),
	new Element(62,	'Samarium',		'Sm',	150.36),
	new Element(63,	'Europium',		'Eu',	151.964),
	new Element(64,	'Gadolinium',	'Gd',	157.25),
	new Element(65,	'Terbium',		'Tb',	158.9253),
	new Element(66,	'Dysprosium',	'Dy',	162.5),
	new Element(67,	'Holmium',		'Ho',	164.9303),
	new Element(68,	'Erbium',		'Er',	167.259),
	new Element(69,	'Thulium',		'Tm',	168.9342),
	new Element(70,	'Ytterbium',	'Yb',	173.04),
	new Element(71,	'Lutetium',		'Lu',	174.967),
	new Element(72,	'Hafnium',		'Hf',	178.49),
	new Element(73,	'Tantalum',		'Ta',	180.9479),
	new Element(74,	'Tungsten',		'W',	183.84),
	new Element(75,	'Rhenium',		'Re',	186.207),
	new Element(76,	'Osmium',		'Os',	190.23),
	new Element(77,	'Iridium',		'Ir',	192.217),
	new Element(78,	'Platinum',		'Pt',	195.078),
	new Element(79,	'Gold',			'Au',	196.9665),
	new Element(80,	'Mercury',		'Hg',	200.59),
	new Element(81,	'Thallium',		'Tl',	204.3833),
	new Element(82,	'Lead',			'Pb',	207.2),
	new Element(83,	'Bismuth',		'Bi',	208.9804),
	new Element(84,	'Polonium',		'Po',	209),
	new Element(85,	'Astatine',		'At',	210),
	new Element(86,	'Radon',		'Rn',	222),
	new Element(87,	'Francium',		'Fr',	223),
	new Element(88,	'Radium',		'Ra',	226),
	new Element(89,	'Actinium',		'Ac',	227),
	new Element(91,	'Protactinium',	'Pa',	231.0359),
	new Element(90,	'Thorium',		'Th',	232.0381),
	new Element(93,	'Neptunium',	'Np',	237),
	new Element(92,	'Uranium',		'U',	238.0289),
	new Element(95,	'Americium',	'Am',	243),
	new Element(94,	'Plutonium',	'Pu',	244),
	new Element(96,	'Curium',		'Cm',	247),
	new Element(97,	'Berkelium',	'Bk',	247),
	new Element(98,	'Californium',	'Cf',	251),
	new Element(99,	'Einsteinium',	'Es',	252),
	new Element(100,'Fermium',		'Fm',	257),
	new Element(101,'Mendelevium',	'Md',	258),
	new Element(102,'Nobelium',		'No',	259),
	new Element(104,'Rutherfordium','Rf',	261),
	new Element(103,'Lawrencium',	'Lr',	262),
	new Element(105,'Dubnium',		'Db',	262),
	new Element(107,'Bohrium',		'Bh',	264),
	new Element(106,'Seaborgium',	'Sg',	266),
	new Element(109,'Meitnerium',	'Mt',	268),
	new Element(111,'Roentgenium',	'Rg',	272),
	new Element(108,'Hassium',		'Hs',	277)
]; 
