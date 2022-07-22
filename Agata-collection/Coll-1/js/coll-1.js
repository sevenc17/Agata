

const collNameList = ["Right Line", "Nature Line", "Storm Line", 
"Valley Line", "Mountain Line", "Desert Line", "Woods Line", 
"Beach Line", "Gold Line", "Silver Line", "Bronce Line", 
"Lion Line", "Bronce Line", "Arch Line", "Point Line"];

const valueColl = document.querySelector('.collection').getAttribute('value');


document.querySelector('.collection1__tabs-item1 h2').innerHTML = `${collNameList[valueColl - 1]}`;
document.querySelector('.next__collection a').innerHTML = `Collection N°${Number(valueColl) + 1}`;
document.querySelector('.collection-number').innerHTML = `Coll. N°${valueColl}`;

const listCollectionTabs = [] = document.querySelectorAll('.collection1__tabs-item');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');


const tabList = document.querySelector('.collection1__tabs-nav');
const tabs = document.querySelectorAll('.tab');


previous.addEventListener('click', function(event){
	j = 0;
	for (let i of listCollectionTabs){
		if (i.classList.contains('active')){
			j = i.getAttribute('value');
		}
	}
	if (j > 1){
		for (let n of listCollectionTabs){
			n.classList.remove('active')
		}
		listCollectionTabs[j - 2].classList.add('active');
		for (let o of tabs){
			o.classList.remove('tab__active')
		}
		tabs[j - 2].classList.add('tab__active')
	}
});

next.addEventListener('click', function(event){
	j = 0;
	for (let i of listCollectionTabs){
		if (i.classList.contains('active')){
			j = i.getAttribute('value');
		}
	}
	if (j >= 1 & j < 4){
		for (let n of listCollectionTabs){
			n.classList.remove('active')
		}
		listCollectionTabs[j].classList.add('active');
		for (let o of tabs){
			o.classList.remove('tab__active')
		}
		tabs[j].classList.add('tab__active')
	}
});


tabList.addEventListener('click', function(event){
	if (event.target.closest(".tab")){
		for (let i of tabs){
			i.classList.remove('tab__active');
		}
		event.target.classList.add('tab__active');
		for (let j of listCollectionTabs){
			j.classList.remove('active');
		}
		listCollectionTabs[event.target.getAttribute('value') - 1].classList.add('active');
	}
});
