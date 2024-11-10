

// Custom hook to toggle a class
function useToggleClass() {
    const bodyClass = document.querySelector('body');
    const toggleMenu = () => {
        bodyClass.classList.add('toggle')
    }
    const closeMenu = () => {
        bodyClass.classList.remove('toggle')
    }

    return [toggleMenu, closeMenu];
}

export default useToggleClass;
