const Header = (function () {
    const model = {

        // Define your navigation links array based on the provided format
        navigationLinks: [
            { label: 'Home', href: '#hero', classList: 'nav-link scrollto active' },
            { label: 'About', href: '#about', classList: 'nav-link scrollto' },
            { label: 'Services', href: '#services', classList: 'nav-link scrollto' },
            { label: 'Portfolio', href: '#portfolio', classList: 'nav-link scrollto' },
            { label: 'Team', href: '#team', classList: 'nav-link scrollto' },
            {
                label: 'Drop Down',
                href: '#',
                classList: 'nav-link scrollto',
                dropdown: true,
                sublinks: [
                    { label: 'Drop Down 1', href: '#' },
                    {
                        label: 'Deep Drop Down',
                        href: '#',
                        classList: 'nav-link scrollto',
                        dropdown: true,
                        sublinks: [
                            { label: 'Deep Drop Down 1', href: '#' },
                            { label: 'Deep Drop Down 2', href: '#' },
                            { label: 'Deep Drop Down 3', href: '#' },
                            { label: 'Deep Drop Down 4', href: '#' },
                            { label: 'Deep Drop Down 5', href: '#' },
                        ],
                    },
                    { label: 'Drop Down 2', href: '#' },
                    { label: 'Drop Down 3', href: '#' },
                    { label: 'Drop Down 4', href: '#' },
                ],
            },
            { label: 'Contact', href: '#contact', classList: 'nav-link scrollto' },
            { label: 'Get Started', href: '#about', classList: 'getstarted scrollto' },
        ],

    };
    const view = {


    }

    const controller = {
        buildNav: function (strPageName) {
            const navFragment = document.createDocumentFragment();
            // Loop through the navigationLinks array to create the navigation nodes
            model.navigationLinks.forEach((link) => {
                const listItem = document.createElement('li');
                const anchor = document.createElement('a');
                anchor.textContent = link.label;
                anchor.href = link.href;
                anchor.classList.add(link.classList);

                // Add "active" class to the Home link if it matches the current page
                if (pageName === 'Home' && link.label === 'Home') {
                    anchor.classList.add('active');
                } 

                listItem.appendChild(anchor);

                // Check if it's a dropdown menu
                if (link.dropdown) {
                    const dropdown = document.createElement('ul');
                    link.sublinks.forEach((sublink) => {
                        const subItem = document.createElement('li');
                        const subAnchor = document.createElement('a');
                        subAnchor.textContent = sublink.label;
                        subAnchor.href = sublink.href;
                        subItem.appendChild(subAnchor);
                        dropdown.appendChild(subItem);
                    });
                    listItem.appendChild(dropdown);
                }
                navFragment.appendChild(listItem);
            });

            // Create and return the document fragment
            return navFragment;
        },
    }
})();

export { Header }