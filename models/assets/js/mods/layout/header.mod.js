/**
 * Header module for managing website navigation.
 */
import {Utility} from "../util.mod.mjs";
const Header = (function () {
    const model = {
        section: {
                id: "",
                classList: "",
        },
        strContactNumber: "559-400-5295",
        strContactEmail: "cmcintosh.js@gmail.com",
        navigationLinks: [
            // Define your navigation links based on the provided format
            { label: 'Home', href: 'views/index.php', classList: 'nav-link scrollto active' },
            { label: 'Resume', href: 'views/index.php', classList: 'nav-link scrollto' },
            { label: 'Services', href: 'views/index.php', classList: 'nav-link scrollto' },
            { label: 'Portfolio', href: 'views/index.php', classList: 'nav-link scrollto' },
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
        frag: null,
    };

    const view = {
        // View functions can be added here if needed
        startSection: () =>{
            //gather utilities into objUtil
            let objUtil = Utility.controller;

            //create section tag and append to body
            let objSection = objUtil.cre8WClass("section", "topbar", "d-flex align-items-center");
            $("body").append(objSection);
                //create div to hold section data, and append to section
                let objSectionDiv = objUtil.cre8WClass("div", "divSection", "container d-flex justify-content-center justify-content-md-between");
                $("#topbar").append(objSectionDiv);
                    //create div to hold contact info
                    let objContactDiv = objUtil.cre8WClass("div", "divSection_Contact", "contact-info d-flex align-items-center");
                    $("#divSection").append(objContactDiv);    
                        //create email icon with contact link and append to the contact div
                        let iEmailIcon = objUtil.cre8WClass("i", "", "bi bi-envelope-fill");
                        $("#divSection_Contact").append(iEmailIcon); 
                        $("#divSection_Contact").append($("<a href='mailto:contact@example.com'>info@example.com</a>"))
                        let iPhoneIcon = objUtil.cre8WClass("i", "", "bi bi-phone-fill phone-icon");
                        $("#divSection_Contact").append(iPhoneIcon); 
                        $("#divSection_Contact").append("1-559-400-5295");
                    let objSocialDiv = objUtil.cre8WClass("div", "divSection_Social", "social-links d-none d-md-block");
                    $("#divSection").append(objSocialDiv);
                        $("#divSection_Social").append('<a href="#" class="twitter"><i class="bi bi-twitter"></i></a>');
                        $("#divSection_Social").append('<a href="#" class="facebook"><i class="bi bi-facebook"></i></a>');
                        $("#divSection_Social").append('<a href="#" class="instagram"><i class="bi bi-instagram"></i></a>');
                        $("#divSection_Social").append('<a href="#" class="linkedin"><i class="bi bi-linkedin"></i></i></a>');
        },
        startHeader: function(){

        },
    };

    const controller = {
        util: {
            cre8WClass: function(strName, strList){
                return $("<" + strName + ">").addClass()
            },
        },
        /**
         * Build the navigation menu based on the provided navigationLinks array.
         * @param {string} pageName - The name of the current page.
         * @returns {DocumentFragment} - The document fragment containing the navigation menu.
         */
        buildNav: function (pageName) {
            const navFragment = document.createDocumentFragment();
            // Loop through the navigationLinks array to create the navigation nodes
            model.navigationLinks.forEach((link) => {
                const listItem = document.createElement('li');
                const anchor = document.createElement('a');
                if (link.hasOwnProperty('label')) {
                    anchor.textContent = link.label;
                }
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
            model.frag = navFragment;
        },
    };




    function init (strTitle){
        view.startSection();
          //controllor.buildNav(objConfig.title) 
    }
    // Public API
    return {
      init : init
        // Initialization function or any other public functions can be added here if needed
    };
})();

export { Header }