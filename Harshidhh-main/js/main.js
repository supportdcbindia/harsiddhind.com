!(function (
    e
) {
    "use strict";
    e(
        document
    ).on(
        "ready",
        function () {
            jQuery(
                window
            ).on(
                "scroll",
                function () {
                    e(
                        this
                    ).scrollTop() >
                    200
                        ? e(
                              "#header .header-inner"
                          ).addClass(
                              "sticky"
                          )
                        : e(
                              "#header .header-inner"
                          ).removeClass(
                              "sticky"
                          );
                }
            ),
                jQuery(
                    window
                ).on(
                    "scroll",
                    function () {
                        e(
                            this
                        ).scrollTop() >
                        100
                            ? e(
                                  ".header"
                              ).addClass(
                                  "sticky"
                              )
                            : e(
                                  ".header"
                              ).removeClass(
                                  "sticky"
                              );
                    }
                ),
                e(
                    ".pro-features .get-pro"
                ).on(
                    "click",
                    function () {
                        e(
                            ".pro-features"
                        ).toggleClass(
                            "active"
                        );
                    }
                ),
                e(
                    ".search a"
                ).on(
                    "click",
                    function () {
                        e(
                            ".search-top"
                        ).toggleClass(
                            "active"
                        );
                    }
                ),
                e(
                    ".menu"
                ).slicknav(
                    {
                        prependTo:
                            ".mobile-nav",
                        duration: 300,
                        closeOnClick:
                            !0,
                    }
                ),
                e(
                    ".hero-slider"
                ).owlCarousel(
                    {
                        loop: !0,
                        autoplay:
                            !0,
                        smartSpeed: 500,
                        autoplayTimeout: 3500,
                        singleItem:
                            !0,
                        autoplayHoverPause:
                            !0,
                        items: 1,
                        nav: !0,
                        navText:
                            [
                                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                                '<i class="fa fa-angle-right" aria-hidden="true"></i>',
                            ],
                        dots: !1,
                    }
                ),
                e(
                    ".testimonial-slider"
                ).owlCarousel(
                    {
                        items: 3,
                        autoplay:
                            !0,
                        autoplayTimeout: 4500,
                        smartSpeed: 300,
                        autoplayHoverPause:
                            !0,
                        loop: !0,
                        merge: !0,
                        nav: !1,
                        dots: !0,
                        responsive:
                            {
                                1: {
                                    items: 1,
                                },
                                300: {
                                    items: 1,
                                },
                                480: {
                                    items: 1,
                                },
                                768: {
                                    items: 2,
                                },
                                1170: {
                                    items: 3,
                                },
                            },
                    }
                ),
                e(
                    ".portfolio-slider"
                ).owlCarousel(
                    {
                        autoplay:
                            !0,
                        autoplayTimeout: 4e3,
                        margin: 15,
                        smartSpeed: 300,
                        autoplayHoverPause:
                            !0,
                        loop: !0,
                        nav: !0,
                        dots: !1,
                        responsive:
                            {
                                300: {
                                    items: 1,
                                },
                                480: {
                                    items: 2,
                                },
                                768: {
                                    items: 2,
                                },
                                1170: {
                                    items: 4,
                                },
                            },
                    }
                ),
                e(
                    ".counter"
                ).counterUp(
                    {
                        delay: 20,
                        time: 2e3,
                    }
                ),
                e(
                    ".clients-slider"
                ).owlCarousel(
                    {
                        items: 5,
                        autoplay:
                            !0,
                        autoplayTimeout: 3500,
                        margin: 15,
                        smartSpeed: 400,
                        autoplayHoverPause:
                            !0,
                        loop: !0,
                        nav: !1,
                        dots: !1,
                        responsive:
                            {
                                300: {
                                    items: 1,
                                },
                                480: {
                                    items: 2,
                                },
                                768: {
                                    items: 2,
                                },
                                1170: {
                                    items: 5,
                                },
                            },
                    }
                ),
                e(
                    ".pf-details-slider"
                ).owlCarousel(
                    {
                        items: 1,
                        autoplay:
                            !1,
                        autoplayTimeout: 5e3,
                        smartSpeed: 400,
                        autoplayHoverPause:
                            !0,
                        loop: !0,
                        merge: !0,
                        nav: !0,
                        dots: !1,
                        navText:
                            [
                                '<i class="icofont-rounded-left"></i>',
                                '<i class="icofont-rounded-right"></i>',
                            ],
                    }
                ),
                e(
                    ".accordion > li:eq(0) a"
                )
                    .addClass(
                        "active"
                    )
                    .next()
                    .slideDown(),
                e(
                    ".accordion a"
                ).on(
                    "click",
                    function (
                        a
                    ) {
                        var t =
                            e(
                                this
                            )
                                .closest(
                                    "li"
                                )
                                .find(
                                    "p"
                                );
                        e(
                            this
                        )
                            .closest(
                                ".accordion"
                            )
                            .find(
                                "p"
                            )
                            .not(
                                t
                            )
                            .slideUp(
                                300
                            ),
                            e(
                                this
                            ).hasClass(
                                "active"
                            )
                                ? e(
                                      this
                                  ).removeClass(
                                      "active"
                                  )
                                : (e(
                                      this
                                  )
                                      .closest(
                                          ".accordion"
                                      )
                                      .find(
                                          "a.active"
                                      )
                                      .removeClass(
                                          "active"
                                      ),
                                  e(
                                      this
                                  ).addClass(
                                      "active"
                                  )),
                            t
                                .stop(
                                    !1,
                                    !0
                                )
                                .slideToggle(
                                    300
                                ),
                            a.preventDefault();
                    }
                ),
                e(
                    "select"
                ).niceSelect(),
                e(
                    function () {
                        e(
                            "#datepicker"
                        ).datepicker();
                    }
                ),
                e(
                    'input[type="checkbox"]'
                ).change(
                    function () {
                        e(
                            this
                        ).is(
                            ":checked"
                        )
                            ? e(
                                  this
                              )
                                  .parent(
                                      "label"
                                  )
                                  .addClass(
                                      "checked"
                                  )
                            : e(
                                  this
                              )
                                  .parent(
                                      "label"
                                  )
                                  .removeClass(
                                      "checked"
                                  );
                    }
                ),
                e(
                    ".right-bar .bar"
                ).on(
                    "click",
                    function () {
                        e(
                            ".sidebar-menu"
                        ).addClass(
                            "active"
                        );
                    }
                ),
                e(
                    ".sidebar-menu .cross"
                ).on(
                    "click",
                    function () {
                        e(
                            ".sidebar-menu"
                        ).removeClass(
                            "active"
                        );
                    }
                ),
                e(
                    ".video-popup"
                ).magnificPopup(
                    {
                        type: "video",
                    }
                ),
                e(
                    window
                ).width() >
                    767 &&
                    new WOW().init(),
                e.scrollUp(
                    {
                        scrollText:
                            '<span><i class="fa fa-angle-up"></i></span>',
                        easingType:
                            "easeInOutExpo",
                        scrollSpeed: 900,
                        animation:
                            "fade",
                    }
                ),
                e(
                    ".scroll"
                ).on(
                    "click",
                    function (
                        a
                    ) {
                        var t =
                            e(
                                this
                            );
                        e(
                            "html, body"
                        )
                            .stop()
                            .animate(
                                {
                                    scrollTop:
                                        e(
                                            t.attr(
                                                "href"
                                            )
                                        ).offset()
                                            .top -
                                        100,
                                },
                                1e3
                            ),
                            a.preventDefault();
                    }
                ),
                e.stellar(
                    {
                        horizontalOffset: 0,
                        verticalOffset: 0,
                    }
                ),
                new GMaps(
                    {
                        el: "#map",
                        lat: 23.011245,
                        lng: 90.88478,
                        scrollwheel:
                            !1,
                    }
                ).addMarker(
                    {
                        lat: 23.011245,
                        lng: 90.88478,
                        title: "Marker with InfoWindow",
                        infoWindow:
                            {
                                content:
                                    "<p>welcome to Medipro</p>",
                            },
                    }
                );
        }
    ),
        e(
            window
        ).on(
            "load",
            function () {
                e(
                    ".preloader"
                ).addClass(
                    "preloader-deactivate"
                );
            }
        );
})(
    jQuery
);
