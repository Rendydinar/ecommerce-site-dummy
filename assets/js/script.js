const openMenu = () => {
	document.getElementById('side-menu').style.display = 'block';
	document.getElementById('menu-btn').style.display = 'none';
	document.getElementById('close-btn').style.display = 'block';
}

const closeMenu = () => {
	document.getElementById('side-menu').style.display = 'none';
	document.getElementById('menu-btn').style.display = 'block';
	document.getElementById('close-btn').style.display = 'none';
}  