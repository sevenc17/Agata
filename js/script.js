

const collNameList = ["Right Line", "Nature Line", "Storm Line", 
"Valley Line", "Mountain Line", "Desert Line", "Woods Line", 
"Beach Line", "Gold Line", "Silver Line", "Bronce Line", 
"Lion Line", "Bronce Line", "Arch Line", "Point Line"];

function forList(){
	const featuredColl = document.querySelectorAll('.home__featuredcoll');
	const before = document.querySelectorAll('.before');
	try {
		for (let num = 0; num != featuredColl.length + 1; num++){
			if (featuredColl[num].getAttribute('value')){
				let valueColl = featuredColl[num].getAttribute('value')
				before[num].innerHTML = `Coll. № ${valueColl}`;
			} else {
				return 1;
			}
		}	
	}
	catch(err){
		console.log(1)
	}
}

forList();

function afterInnerContent() {
	const after = document.querySelectorAll('.after');
	const featuredColl = document.querySelectorAll('.home__featuredcoll');
	try {
		for (let num = 0; num <= featuredColl.length; num++){
			let valueColl = featuredColl[num].getAttribute('value');
			let valueCollNameList = collNameList[valueColl - 1];
			after[num].innerHTML = `${valueCollNameList}`
		}
	}
	catch(err){
		console.log(1)
	}
}

afterInnerContent();