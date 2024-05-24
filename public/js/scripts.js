function toggleDropdown() {
    const dropdown = document.getElementById('mega-menu-dropdown');


    // Check if dropdown is hidden
    if (dropdown.classList.contains('hidden')) {
        //dropdown.classList.remove('hidden');
        dropdown.classList.add('grid');
    } else {
        dropdown.classList.add('hidden');
        dropdown.classList.remove('grid');
    }
}

toggleDropdown();