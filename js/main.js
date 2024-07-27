const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");
const footerYear = document.querySelector(".footer__year");

// menu hamburgerowe
const handleNav = () => {
	navBtn.classList.toggle("is--active");

	navMobile.classList.toggle("nav-mobile--active");
};
navBtn.addEventListener("click", handleNav);

// rok w footer
const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();
