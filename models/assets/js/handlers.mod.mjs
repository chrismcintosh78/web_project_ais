const Handlers = (function(){
    //  header      - fixedHeader, scrollTo
    //  navbarLinks - navbarLinksActive
    //  bk2TopButton- 
    const model = {
        header: $('#header'),
        navbarlinks: $('#navbar .scrollto'),
        bk2TopButton: $('.back-to-top'),
    };
    const view = {
        navbarlinksActive:() => {
            let position = window.scrollY + 200
            model.navbarlinks.forEach(navbarlink => {
              if (!navbarlink.hash) return
              let section = select(navbarlink.hash)
              if (!section) return
              if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active')
              } else {
                navbarlink.classList.remove('active')
              }
            })
        },
        scrollto: (el) => {
            let header = $('#header');
            let offset = header.outerHeight();
            if (!header.hasClass('header-scrolled')) {
              offset -= 16;
            }
          
            let elementPos = $(el).offset().top;
            window.scrollTo({
              top: elementPos - offset,
              behavior: 'smooth',
            });
        },
        stickyHeader: function(){
            let objHeader = model.header;
            //model.header is the refference to the header tag object
            let headerOffset = $('#header').offsetTop
            let nextElement = $('#header').next();
            const sticky = () => {
              console.log($('#header'));
                if ((headerOffset - window.scrollY) <= 0) {
                    $('#header').addClass('fixed-top')
                    nextElement.addClass('scrolled-offset')
                } else {
                  $('#header').removeClass('fixed-top')
                  nextElement.removeClass('scrolled-offset')
                }
            }
            return sticky;
        },
       toggleBacktotop: function() {
            if (window.scrollY > 100) {
              $('.back-to-top').addClass('active')
            } else {
              $('.back-to-top').removeClass('active')
            }
        },
        mblNavToggle: function (e) {
            $('#navbar').classList.toggle('navbar-mobile')
            this.classList.toggle('bi-list')
            this.classList.toggle('bi-x')
        },
        mblActv8Dropdown: function(e){

        }
    };
    const controller = {
        register: function(obj, event, el, handler){
            $(obj).on(event, el,  handler);
        },
        
    };
    function init(){
        controller.register(window, "load", () => {
            if (window.location.hash) {
              if (select(window.location.hash)) {
                scrollto(window.location.hash)
              }
            }
          })
        controller.register(document, 'click', '.mobile-nav-toggle', view.mblNavToggle);
        controller.register(document,'click', '.navbar .dropdown > a',view.mblActv8Dropdown)
        if($('#header')){
          controller.register(window, "load", view.stickyHeader());
          controller.register(document, "scroll", view.stickyHeader());
        }
        if($('.back-to-top')){
          controller.register(window, "load", view.toggleBacktotop);
          controller.register(document, "scroll", view.toggleBacktotop);
        }
        controller.register(window, "load", view.navbarlinksActive);
        controller.register(document, "scroll", view.navbarlinksActive);
    };
    return{init:init}
})();
export {Handlers}