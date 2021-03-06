"use strict";
angular.module("slingApp", ["ngAnimate", "ngCookies", "ngResource", "ngSanitize", "ngTouch", "picardy.fontawesome", "ui.bootstrap", "ui.router", "ui.utils", "angular-loading-bar", "angular-momentjs", "FBAngular", "lazyModel", "toastr", "angularBootstrapNavTree", "oc.lazyLoad", "ui.select", "ui.tree", "textAngular", "colorpicker.module", "angularFileUpload", "ngImgCrop", "datatables", "datatables.bootstrap", "datatables.colreorder", "datatables.colvis", "datatables.tabletools", "datatables.scroller", "datatables.columnfilter", "ui.grid", "ui.grid.resizeColumns", "ui.grid.edit", "ui.grid.moveColumns", "ngTable", "smart-table", "angular-flot", "angular-rickshaw", "easypiechart", "uiGmapgoogle-maps", "ui.calendar", "ngTagsInput", "pascalprecht.translate"]).run(["$rootScope", "$state", "$stateParams", function(a, b, c) {
    a.$state = b, a.$stateParams = c, a.$on("$stateChangeSuccess", function(b, c) {
        b.targetScope.$watch("$viewContentLoaded", function() {
            angular.element("html, body, #content").animate({
                scrollTop: 0
            }, 200), setTimeout(function() {
                angular.element("#wrap").css("visibility", "visible"), angular.element(".dropdown").hasClass("open") || angular.element(".dropdown").find(">ul").slideUp()
            }, 200)
        }), a.containerClass = c.containerClass
    })
}]).config(["uiSelectConfig", function(a) {
    a.theme = "bootstrap"
}]).config(["$translateProvider", function(a) {
    a.useStaticFilesLoader({
        prefix: "languages/",
        suffix: ".json"
    }), a.useLocalStorage(), a.preferredLanguage("en")
}]).config(["$stateProvider", "$urlRouterProvider", function(a, b) {
    b.otherwise("/app/overview"), a.state("app", {
        "abstract": !0,
        url: "/app",
        templateUrl: "views/tmpl/app.html"
    }).state("app.dashboard", {
        url: "/dashboard",
        controller: "DashboardCtrl",
		containerClass: 'sidebar-sm-forced sidebar-sm',
        templateUrl: "views/tmpl/dashboard.html",
        resolve: {
            plugins: ["$ocLazyLoad", function(a) {
                return a.load(["scripts/vendor/datatables/datatables.bootstrap.min.css", "scripts/vendor/datatables/datatables.bootstrap.min.css"])
            }]
        }
	}).state("app.overview", {
        url: "/overview",
        controller: "OverviewCtrl",
		containerClass: 'sidebar-sm-forced sidebar-sm',
        templateUrl: "views/tmpl/overview.html",
        resolve: {
            plugins: ["$ocLazyLoad", function(a) {
                return a.load(["scripts/vendor/datatables/datatables.bootstrap.min.css", "scripts/vendor/datatables/datatables.bootstrap.min.css"])
            }]
        }
	}).state("app.send", {
        url: "/send",
        controller: "SendCtrl",
		containerClass: 'sidebar-sm-forced sidebar-sm',
        templateUrl: "views/tmpl/send.html",
        resolve: {
            plugins: ["$ocLazyLoad", function(a) {
                return a.load(["scripts/vendor/datatables/datatables.bootstrap.min.css", "scripts/vendor/datatables/datatables.bootstrap.min.css"])
            }]
        }
    }).state("app.receive", {
        url: "/receive",
        controller: "ReceiveCtrl",
		containerClass: 'sidebar-sm-forced sidebar-sm',
        templateUrl: "views/tmpl/receive.html",
        resolve: {
            plugins: ["$ocLazyLoad", function(a) {
                return a.load(["scripts/vendor/datatables/datatables.bootstrap.min.css", "scripts/vendor/datatables/datatables.bootstrap.min.css"])
            }]
        }
	}).state("app.transactions", {
        url: "/transactions",
        controller: "TransactionsCtrl",
		containerClass: 'sidebar-sm-forced sidebar-sm',
        templateUrl: "views/tmpl/transactions.html",
        resolve: {
            plugins: ["$ocLazyLoad", function(a) {
                return a.load(["scripts/vendor/datatables/datatables.bootstrap.min.css", "scripts/vendor/datatables/datatables.bootstrap.min.css"])
            }]
        }
	}).state("app.addressbook", {
        url: "/addressbook",
        controller: "AddressBookCtrl",
		containerClass: 'sidebar-sm-forced sidebar-sm',
        templateUrl: "views/tmpl/addressbook.html",
        resolve: {
            plugins: ["$ocLazyLoad", function(a) {
                return a.load(["scripts/vendor/datatables/datatables.bootstrap.min.css", "scripts/vendor/datatables/datatables.bootstrap.min.css"])
            }]
        }
	}).state("app.market", {
        url: "/market",
        controller: "MarketCtrl",
		containerClass: 'sidebar-sm-forced sidebar-sm',
        templateUrl: "views/tmpl/market.html",
        resolve: {
            plugins: ["$ocLazyLoad", function(a) {
                return a.load(["styles/adobe.megamenu/pygment.css", "styles/adobe.megamenu/megamenu.css"])
            }]
        }
	}).state("app.chat", {
        url: "/chat",
        controller: "ChatCtrl",
		containerClass: 'sidebar-sm-forced sidebar-sm',
        templateUrl: "views/tmpl/chat.html",
        resolve: {
            plugins: ["$ocLazyLoad", function(a) {
                return a.load(["scripts/vendor/datatables/datatables.bootstrap.min.css", "scripts/vendor/datatables/datatables.bootstrap.min.css"])
            }]
        }
	}).state("app.masternodes", {
        url: "/masternodes",
        controller: "MasterNodeCtrl",
		containerClass: 'sidebar-sm-forced sidebar-sm',
        templateUrl: "views/tmpl/masternodes.html",
        resolve: {
            plugins: ["$ocLazyLoad", function(a) {
                return a.load(["scripts/vendor/datatables/datatables.bootstrap.min.css", "scripts/vendor/datatables/datatables.bootstrap.min.css"])
            }]
        }
	}).state("app.blocks", {
        url: "/blocks",
        controller: "BlocksCtrl",
		containerClass: 'sidebar-sm-forced sidebar-sm',
        templateUrl: "views/tmpl/blocks.html",
        resolve: {
            plugins: ["$ocLazyLoad", function(a) {
                return a.load(["scripts/vendor/datatables/datatables.bootstrap.min.css", "scripts/vendor/datatables/datatables.bootstrap.min.css"])
            }]
        }
    }).state("app.help", {
        url: "/help",
        controller: "HelpCtrl",
        templateUrl: "views/tmpl/help.html"
    })
}]), angular.module("slingApp").controller("MainCtrl", ["$scope", "$http", "$translate", function(a, b, c) {
    a.main = {
        title: "Sling",
        settings: {
            navbarHeaderColor: "scheme-default",
            sidebarColor: "scheme-default",
            brandingColor: "scheme-default",
            activeColor: "default-scheme-color",
            headerFixed: !0,
            asideFixed: !0,
            rightbarShow: !1
        }
    }, a.ajaxFaker = function() {
        a.data = [];
        var c = "https://bittrex.com/api/v1.1/public/getmarketsummary?market=btc-sling";
        b.jsonp(c).success(function(b) {
            a.data = b, angular.element(".tile.refreshing").removeClass("refreshing")
        })
    }, a.changeLanguage = function(b) {
        c.use(b), a.currentLanguage = b
    }, a.currentLanguage = c.proposedLanguage() || c.use()
}]), angular.module("slingApp").directive("navCollapse", function() {
    return {
        restrict: "A",
        link: function(a, b) {
            var c = b.find("ul").parent("li"),
                d = c.children("a"),
                e = b.children("li").not(c),
                f = e.children("a"),
                g = angular.element("#sling"),
                h = angular.element("#sidebar"),
                i = angular.element("#controls");
            c.addClass("dropdown");
            var j = c.find("ul >.dropdown");
            j.addClass("submenu"), d.append('<i class="fa fa-plus"></i>'), d.on("click", function(a) {
                if (g.hasClass("sidebar-sm") || g.hasClass("sidebar-xs") || g.hasClass("hz-menu")) return !1;
                var b = angular.element(this),
                    d = b.parent("li"),
                    e = angular.element(".submenu.open");
                d.hasClass("submenu") || c.not(d).removeClass("open").find("ul").slideUp(), e.not(b.parents(".submenu")).removeClass("open").find("ul").slideUp(), d.toggleClass("open").find(">ul").stop().slideToggle(), a.preventDefault()
            }), c.on("mouseenter", function() {
                h.addClass("dropdown-open"), i.addClass("dropdown-open")
            }), c.on("mouseleave", function() {
                h.removeClass("dropdown-open"), i.removeClass("dropdown-open")
            }), f.on("click", function() {
                c.removeClass("open").find("ul").slideUp()
            });
            var k = angular.element(".dropdown>ul>.active").parent();
            k.css("display", "block")
        }
    }
}), angular.module("slingApp").directive("slimscroll", function() {
    return {
        restrict: "A",
        link: function(a, b, c) {
            var d = {},
                e = function() {
                    c.slimscroll ? d = a.$eval(c.slimscroll) : c.slimscrollOption && (d = a.$eval(c.slimscrollOption)), b.slimscroll({
                        destroy: !0
                    }), b.slimscroll(d)
                };
            e();
            var f = angular.element(".sidebar-collapse"),
                g = angular.element(window),
                h = angular.element("#sidebar"),
                i = function() {
                    e(), angular.element("#sidebar .slimScrollBar").is(":visible") ? h.removeClass("scroll-inactive") : h.addClass("scroll-inactive")
                };
            f.on("click", function() {
                i()
            }), g.resize(function() {
                i()
            }), c.slimscroll && !d.noWatch && a.$watchCollection(c.slimscroll, e), c.slimscrollWatch && a.$watchCollection(c.slimscrollWatch, e), c.slimssrollListenTo && a.on(c.slimscrollListenTo, e)
        }
    }
}), angular.module("slingApp").controller("SparklineCtrl", ["$scope", function(a) {
    a.navChart1 = {
        data: [5, 8, 3, 4, 6, 2, 1, 9, 7],
        options: {
            type: "bar",
            barColor: "#92424e",
            barWidth: "6px",
            height: "36px"
        }
    }, a.navChart2 = {
        data: [2, 4, 5, 3, 8, 9, 7, 3, 5],
        options: {
            type: "bar",
            barColor: "#397193",
            barWidth: "6px",
            height: "36px"
        }
    }
}]), angular.module("slingApp").directive("sparkline", [function() {
    return {
        restrict: "A",
        scope: {
            data: "=",
            options: "="
        },
        link: function(a, b) {
            var c, d = a.data,
                e = a.options,
                f = function() {
                    return b.sparkline(d, e)
                };
            return angular.element(window).resize(function() {
                clearTimeout(c), c = setTimeout(f, 200)
            }), f()
        }
    }
}]), angular.module("slingApp").controller("DashboardCtrl", ["$scope", "$http", function(a, b) {
    a.page = {
        title: "Dashboard",
        subtitle: "Place subtitle here..."
    }, a.getUsers = function() {
        a.data = [];
        var c = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&delay=3&callback=JSON_CALLBACK";
        b.jsonp(c).success(function(b) {
            a.data = b
        })
    }, a.getUsers()
}]).controller("StatisticsChartCtrl", ["$scope", function(a) {
    a.dataset = [{
        data: [
            [1, 15],
            [2, 40],
            [3, 35],
            [4, 39],
            [5, 42],
            [6, 50],
            [7, 46],
            [8, 49],
            [9, 59],
            [10, 60],
            [11, 58],
            [12, 74]
        ],
        label: "Unique Visits",
        points: {
            show: !0,
            radius: 4
        },
        splines: {
            show: !0,
            tension: .45,
            lineWidth: 4,
            fill: 0
        }
    }, {
        data: [
            [1, 50],
            [2, 80],
            [3, 90],
            [4, 85],
            [5, 99],
            [6, 125],
            [7, 114],
            [8, 96],
            [9, 130],
            [10, 145],
            [11, 139],
            [12, 160]
        ],
        label: "Page Views",
        bars: {
            show: !0,
            barWidth: .6,
            lineWidth: 0,
            fillColor: {
                colors: [{
                    opacity: .3
                }, {
                    opacity: .8
                }]
            }
        }
    }], a.options = {
        colors: ["#e05d6f", "#61c8b8"],
        series: {
            shadowSize: 0
        },
        legend: {
            backgroundOpacity: 0,
            margin: -7,
            position: "ne",
            noColumns: 2
        },
        xaxis: {
            tickLength: 0,
            font: {
                color: "#fff"
            },
            position: "bottom",
            ticks: [
                [1, "JAN"],
                [2, "FEB"],
                [3, "MAR"],
                [4, "APR"],
                [5, "MAY"],
                [6, "JUN"],
                [7, "JUL"],
                [8, "AUG"],
                [9, "SEP"],
                [10, "OCT"],
                [11, "NOV"],
                [12, "DEC"]
            ]
        },
        yaxis: {
            tickLength: 0,
            font: {
                color: "#fff"
            }
        },
        grid: {
            borderWidth: {
                top: 0,
                right: 0,
                bottom: 1,
                left: 1
            },
            borderColor: "rgba(255,255,255,.3)",
            margin: 0,
            minBorderMargin: 0,
            labelMargin: 20,
            hoverable: !0,
            clickable: !0,
            mouseActiveRadius: 6
        },
        tooltip: !0,
        tooltipOpts: {
            content: "%s: %y",
            defaultTheme: !1,
            shifts: {
                x: 0,
                y: 20
            }
        }
    }
}]).controller("ActualStatisticsCtrl", ["$scope", function(a) {
    a.easypiechart = {
        percent: 100,
        options: {
            animate: {
                duration: 3e3,
                enabled: !0
            },
            barColor: "#418bca",
            scaleColor: !1,
            lineCap: "round",
            size: 140,
            lineWidth: 4
        }
    }, a.easypiechart2 = {
        percent: 75,
        options: {
            animate: {
                duration: 3e3,
                enabled: !0
            },
            barColor: "#e05d6f",
            scaleColor: !1,
            lineCap: "round",
            size: 140,
            lineWidth: 4
        }
    }, a.easypiechart3 = {
        percent: 46,
        options: {
            animate: {
                duration: 3e3,
                enabled: !0
            },
            barColor: "#16a085",
            scaleColor: !1,
            lineCap: "round",
            size: 140,
            lineWidth: 4
        }
    }
}]).controller("BrowseUsageCtrl", ["$scope", function(a) {
    a.donutData = [{
        label: "Chrome",
        value: 25,
        color: "#00a3d8"
    }, {
        label: "Safari",
        value: 20,
        color: "#2fbbe8"
    }, {
        label: "Firefox",
        value: 15,
        color: "#72cae7"
    }, {
        label: "Opera",
        value: 5,
        color: "#d9544f"
    }, {
        label: "Internet Explorer",
        value: 10,
        color: "#ffc100"
    }, {
        label: "Other",
        value: 25,
        color: "#1693A5"
    }], a.oneAtATime = !0, a.status = {
        isFirstOpen: !0,
        tab1: {
            open: !0
        },
        tab2: {
            open: !1
        },
        tab3: {
            open: !1
        }
    }
}]).controller("RealtimeLoadCtrl", ["$scope", "$interval", function(a, b) {
    a.options1 = {
        renderer: "area",
        height: 133
    };
    for (var c = [
            [],
            []
        ], d = new Rickshaw.Fixtures.RandomData(50), e = 0; 50 > e; e++) d.addData(c);
    var f = 800;
    b(function() {
        d.removeData(c), d.addData(c)
    }, f), a.series1 = [{
        name: "Series 1",
        color: "steelblue",
        data: c[0]
    }, {
        name: "Series 2",
        color: "lightblue",
        data: c[1]
    }], a.features1 = {
        hover: {
            xFormatter: function(a) {
                return new Date(1e3 * a).toUTCString()
            },
            yFormatter: function(a) {
                return Math.floor(a) + "%"
            }
        }
    }
}]).controller("ProjectProgressCtrl", ["$scope", "DTOptionsBuilder", "DTColumnDefBuilder", function(a, b, c) {
    a.projects = [{
        title: "Graphic layout for client",
        priority: {
            value: 1,
            title: "High Priority"
        },
        status: 42,
        chart: {
            data: [1, 3, 2, 3, 5, 6, 8, 5, 9, 8],
            color: "#cd97eb"
        }
    }, {
        title: "Make website responsive",
        priority: {
            value: 3,
            title: "Low Priority"
        },
        status: 89,
        chart: {
            data: [2, 5, 3, 4, 6, 5, 1, 8, 9, 10],
            color: "#a2d200"
        }
    }, {
        title: "Clean html/css/js code",
        priority: {
            value: 1,
            title: "High Priority"
        },
        status: 23,
        chart: {
            data: [5, 6, 8, 2, 1, 6, 8, 4, 3, 5],
            color: "#ffc100"
        }
    }, {
        title: "Database optimization",
        priority: {
            value: 2,
            title: "Normal Priority"
        },
        status: 56,
        chart: {
            data: [2, 9, 8, 7, 5, 9, 2, 3, 4, 2],
            color: "#16a085"
        }
    }, {
        title: "Database migration",
        priority: {
            value: 3,
            title: "Low Priority"
        },
        status: 48,
        chart: {
            data: [3, 5, 6, 2, 8, 9, 5, 4, 3, 2],
            color: "#1693A5"
        }
    }, {
        title: "Email server backup",
        priority: {
            value: 2,
            title: "Normal Priority"
        },
        status: 10,
        chart: {
            data: [7, 8, 6, 4, 3, 5, 8, 9, 10, 7],
            color: "#3f4e62"
        }
    }], a.dtOptions = b.newOptions().withBootstrap(), a.dtColumnDefs = [c.newColumnDef(0), c.newColumnDef(1), c.newColumnDef(2), c.newColumnDef(3), c.newColumnDef(4).notSortable()]
}]), angular.module("slingApp").directive("collapseSidebar", ["$rootScope", function() {
    return {
        restrict: "A",
        link: function(a, b) {
            var c = angular.element("#sling"),
                d = angular.element(window),
                e = d.width(),
                f = function() {
                    angular.element("#sidebar").find(".ink").remove()
                },
                g = function() {
                    e = d.width(), 992 > e ? c.addClass("sidebar-sm") : c.removeClass("sidebar-sm sidebar-xs"), 768 > e ? c.removeClass("sidebar-sm").addClass("sidebar-xs") : e > 992 ? c.removeClass("sidebar-sm sidebar-xs") : c.removeClass("sidebar-xs").addClass("sidebar-sm"), c.hasClass("sidebar-sm-forced") && c.addClass("sidebar-sm"), c.hasClass("sidebar-xs-forced") && c.addClass("sidebar-xs")
                };
            g(), d.resize(function() {
                if (e !== d.width()) {
                    var a;
                    clearTimeout(a), a = setTimeout(g, 300), f()
                }
            }), b.on("click", function(a) {
                c.hasClass("sidebar-sm") ? c.removeClass("sidebar-sm").addClass("sidebar-xs") : c.hasClass("sidebar-xs") ? c.removeClass("sidebar-xs") : c.addClass("sidebar-sm"), c.removeClass("sidebar-sm-forced sidebar-xs-forced"), c.parent().removeClass("sidebar-sm sidebar-xs"), f(), a.preventDefault()
            })
        }
    }
}]), angular.module("slingApp").directive("ripple", function() {
    return {
        restrict: "A",
        link: function(a, b) {
            var c, d, e, f, g;
            angular.element(b).find(">li>a").click(function(a) {
                c = angular.element(this).parent(), 0 === c.find(".ink").length && c.prepend('<span class="ink"></span>'), d = c.find(".ink"), d.removeClass("animate"), d.height() || d.width() || (e = Math.max(c.outerWidth(), c.outerHeight()), d.css({
                    height: e,
                    width: e
                })), f = a.pageX - c.offset().left - d.width() / 2, g = a.pageY - c.offset().top - d.height() / 2, d.css({
                    top: g + "px",
                    left: f + "px"
                }).addClass("animate"), setTimeout(function() {
                    angular.element(".ink").remove()
                }, 600)
            })
        }
    }
}), angular.module("slingApp").controller("NavCtrl", ["$scope", function(a) {
    a.oneAtATime = !1, a.status = {
        isFirstOpen: !0,
        isSecondOpen: !0,
        isThirdOpen: !0
    }
}]), angular.module("slingApp").directive("pageLoader", ["$timeout", function(a) {
    return {
        restrict: "AE",
        template: '<div class="dot1"></div><div class="dot2"></div>',
        link: function(b, c) {
            c.addClass("hide"), b.$on("$stateChangeStart", function() {
                c.toggleClass("hide animate")
            }), b.$on("$stateChangeSuccess", function(b) {
                b.targetScope.$watch("$viewContentLoaded", function() {
                    a(function() {
                        c.toggleClass("hide animate")
                    }, 600)
                })
            })
        }
    }
}]), angular.module("slingApp").controller("DaterangepickerCtrl", ["$scope", "$moment", function(a, b) {
    a.startDate = b().subtract(1, "days").format("MMMM D, YYYY"), a.endDate = b().add(31, "days").format("MMMM D, YYYY"), a.rangeOptions = {
        ranges: {
            Today: [b(), b()],
            Yesterday: [b().subtract(1, "days"), b().subtract(1, "days")],
            "Last 7 Days": [b().subtract(6, "days"), b()],
            "Last 30 Days": [b().subtract(29, "days"), b()],
            "This Month": [b().startOf("month"), b().endOf("month")],
            "Last Month": [b().subtract(1, "month").startOf("month"), b().subtract(1, "month").endOf("month")]
        },
        opens: "left",
        startDate: b().subtract(29, "days"),
        endDate: b(),
        parentEl: "#content"
    }
}]), angular.module("slingApp").directive("daterangepicker", function() {
    return {
        restrict: "A",
        scope: {
            options: "=daterangepicker",
            start: "=dateBegin",
            end: "=dateEnd"
        },
        link: function(a, b) {
            b.daterangepicker(a.options, function(b, c) {
                a.start = b.format("MMMM D, YYYY"), a.end = c.format("MMMM D, YYYY"), a.$apply()
            })
        }
    }
}), angular.module("slingApp").controller("BoxedlayoutCtrl", ["$scope", function(a) {
    a.page = {
        title: "Boxed Layout",
        subtitle: "Place subtitle here..."
    }
}]), angular.module("slingApp").controller("FullwidthlayoutCtrl", ["$scope", function(a) {
    a.page = {
        title: "Full-width Layout",
        subtitle: "Place subtitle here..."
    }
}]), angular.module("slingApp").controller("SidebarsmlayoutCtrl", ["$scope", function(a) {
    a.page = {
        title: "Small Sidebar Layout",
        subtitle: "Place subtitle here..."
    }
}]), angular.module("slingApp").controller("SidebarxslayoutCtrl", ["$scope", function(a) {
    a.page = {
        title: "Extra-small Sidebar Layout",
        subtitle: "Place subtitle here..."
    }
}]), angular.module("slingApp").controller("HzmenuCtrl", ["$scope", function(a) {
    a.page = {
        title: "Horizontal menu Layout",
        subtitle: "Place subtitle here..."
    }
}]), angular.module("slingApp").controller("OverviewCtrl", ["$scope", function(a) {
    a.page = {
        title: "Overview",
        subtitle: "Funds and Market"
    }
}]), 
    angular.module("slingApp").controller("MarketCtrl", ["$scope", function(a) {
    a.page = {
        title: "Market",
        subtitle: "Buying and selling"
    }
}]), angular.module("slingApp").controller("SendCtrl", ["$scope", function(a) {
    a.page = {
        title: "Send",
        subtitle: "Funds"
    }
}]), angular.module("slingApp").controller("ReceiveCtrl", ["$scope", function(a) {
    a.page = {
        title: "Receive",
        subtitle: "Funds"
    }
}]), angular.module("slingApp").controller("TransactionsCtrl", ["$scope", function(a) {
    a.page = {
        title: "Transactions",
        subtitle: "Funds"
    }
}]), angular.module("slingApp").controller("AddressBookCtrl", ["$scope", function(a) {
    a.page = {
        title: "Address Book",
        subtitle: "Funds"
    }
}]), angular.module("slingApp").controller("MarketBookCtrl", ["$scope", function(a) {
    a.page = {
        title: "Market",
        subtitle: "Buy & Sell"
    }
}]), angular.module("slingApp").controller("ChatBookCtrl", ["$scope", function(a) {
    a.page = {
        title: "Chat",
        subtitle: "Messages"
    }	
}]), angular.module("slingApp").controller("MasterNodeCtrl", ["$scope", function(a) {
    a.page = {
        title: "Master Nodes",
        subtitle: "Setup"
    }	
}]), angular.module("slingApp").controller("BlocksNodeCtrl", ["$scope", function(a) {
    a.page = {
        title: "Block Explorer",
        subtitle: "View"
    }	
}]), angular.module("slingApp").directive("tileControlClose", function() {
    return {
        restrict: "A",
        link: function(a, b) {
            var c = b.parents(".tile");
            b.on("click", function() {
                c.addClass("closed").fadeOut()
            })
        }
    }
}), angular.module("slingApp").directive("tileControlToggle", function() {
    return {
        restrict: "A",
        link: function(a, b) {
            var c = b.parents(".tile");
            b.on("click", function() {
                c.toggleClass("collapsed"), c.children().not(".tile-header").slideToggle(150)
            })
        }
    }
}), angular.module("slingApp").directive("tileControlRefresh", function() {
    return {
        restrict: "A",
        link: function(a, b) {
            var c = b.parents(".tile"),
                d = b.parents(".dropdown");
            b.on("click", function() {
                c.addClass("refreshing"), d.trigger("click")
            })
        }
    }
}), angular.module("slingApp").directive("tileControlFullscreen", function() {
    return {
        restrict: "A",
        link: function(a, b) {
            var c = b.parents(".dropdown");
            b.on("click", function() {
                c.trigger("click")
            })
        }
    }
}), angular.module("slingApp").directive("prettyprint", function() {
    return {
        restrict: "C",
        link: function(a, b) {
            b.html(prettyPrintOne(b.html(), "", !0))
        }
    }
}), angular.module("slingApp").controller("ListsCtrl", ["$scope", function(a) {
    a.page = {
        title: "Lists",
        subtitle: "Place subtitle here..."
    }, a.list = [{
        id: 1,
        title: "Item 1",
        items: []
    }, {
        id: 2,
        title: "Item 2",
        items: [{
            id: 21,
            title: "Item 2.1",
            items: [{
                id: 211,
                title: "Item 2.1.1",
                items: []
            }, {
                id: 212,
                title: "Item 2.1.2",
                items: []
            }]
        }, {
            id: 22,
            title: "Item 2.2",
            items: [{
                id: 221,
                title: "Item 2.2.1",
                items: []
            }, {
                id: 222,
                title: "Item 2.2.2",
                items: []
            }]
        }]
    }, {
        id: 3,
        title: "Item 3",
        items: []
    }, {
        id: 4,
        title: "Item 4",
        items: [{
            id: 41,
            title: "Item 4.1",
            items: []
        }]
    }, {
        id: 5,
        title: "Item 5",
        items: []
    }, {
        id: 6,
        title: "Item 6",
        items: []
    }, {
        id: 7,
        title: "Item 7",
        items: []
    }], a.list2 = [{
        id: 1,
        title: "Item 1",
        items: []
    }, {
        id: 2,
        title: "Item 2",
        items: [{
            id: 21,
            title: "Item 2.1",
            items: [{
                id: 211,
                title: "Item 2.1.1",
                items: []
            }, {
                id: 212,
                title: "Item 2.1.2",
                items: []
            }]
        }, {
            id: 22,
            title: "Item 2.2",
            items: [{
                id: 221,
                title: "Item 2.2.1",
                items: []
            }, {
                id: 222,
                title: "Item 2.2.2",
                items: []
            }]
        }]
    }, {
        id: 3,
        title: "Item 3",
        items: []
    }, {
        id: 4,
        title: "Item 4",
        items: [{
            id: 41,
            title: "Item 4.1",
            items: []
        }]
    }, {
        id: 5,
        title: "Item 5",
        items: []
    }, {
        id: 6,
        title: "Item 6",
        items: []
    }, {
        id: 7,
        title: "Item 7",
        items: []
    }], a.cancelEditingItem = function(a) {
        a.editing = !1
    }, a.selectedItem = {}, a.options = {}, a.remove = function(a) {
        a.remove()
    }, a.toggle = function(a) {
        a.toggle()
    }, a.newSubItem = function(a) {
        var b;
        b = a.$modelValue, b.items.push({
            id: 10 * b.id + b.items.length,
            title: b.title + "." + (b.items.length + 1),
            items: []
        })
    };
    var b = function(a) {
        var b = angular.element(a.target).parents(".tile").find(".angular-ui-tree");
        return b.scope()
    };
    a.collapseAll = function(a) {
        var c = b(a);
        c.collapseAll()
    }, a.expandAll = function(a) {
        var c = b(a);
        c.expandAll()
    }
}]), angular.module("lazyModel", []).directive("lazyModel", ["$compile", "$timeout", function(a, b) {
    return {
        restrict: "A",
        priority: 500,
        terminal: !0,
        require: ["lazyModel", "^form", "?^lazySubmit"],
        scope: !0,
        controller: ["$scope", "$element", "$attrs", "$parse", function(a, b, c, d) {
            if ("" === c.lazyModel) throw "`lazy-model` should have a value.";
            var e = d(c.lazyModel),
                f = e.assign;
            this.accept = function() {
                f(a.$parent, a.buffer)
            }, this.reset = function() {
                a.buffer = e(a.$parent)
            }, a.$watch(c.lazyModel, angular.bind(this, function() {
                this.reset()
            }))
        }],
        compile: function(c) {
            c.attr("ng-model", "buffer"), c.removeAttr("lazy-model");
            var d = a(c);
            return {
                pre: function(a) {
                    d(a)
                },
                post: function(a, c, d, e) {
                    var f = e[0],
                        g = e[1],
                        h = e[2],
                        i = h || g;
                    if (void 0 === i.$lazyControls) {
                        i.$lazyControls = [];
                        for (var j = c.parent();
                            "FORM" !== j[0].tagName;) j = j.parent();
                        j.bind("submit", function() {
                            b(function() {
                                if (g.$valid) {
                                    for (var a = 0; a < i.$lazyControls.length; a++) i.$lazyControls[a].accept();
                                    h && h.finalSubmit()
                                }
                            })
                        }), j.bind("reset", function(a) {
                            a.preventDefault(), b(function() {
                                for (var a = 0; a < i.$lazyControls.length; a++) i.$lazyControls[a].reset()
                            })
                        })
                    }
                    i.$lazyControls.push(f), a.$on("$destroy", function() {
                        for (var a = i.$lazyControls.length; a--;) i.$lazyControls[a] === f && i.$lazyControls.splice(a, 1)
                    })
                }
            }
        }
    }
}]).directive("lazySubmit", function() {
    return {
        restrict: "A",
        require: ["lazySubmit", "form"],
        controller: ["$element", "$attrs", "$scope", "$parse", function(a, b, c, d) {
            var e = b.lazySubmit ? d(b.lazySubmit) : angular.noop;
            this.finalSubmit = function() {
                e(c)
            }
        }]
    }
}), angular.module("slingApp").controller("ButtonsIconsCtrl", ["$scope", function(a) {
    a.page = {
        title: "Buttons & Icons",
        subtitle: "Place subtitle here..."
    }
}]), angular.module("slingApp").directive("activateButton", function() {
    return {
        restrict: "A",
        link: function(a, b, c) {
            var d = "btn-activated",
                e = c.activateButton,
                f = function() {
                    b.addClass(d), setTimeout(function() {
                        b.removeClass(d)
                    }, 1e3)
                };
            b.on("click", function() {
                b.hasClass(d) || "success" !== e ? b.hasClass(d) || "error" !== e ? b.hasClass(d) || f() : (b.addClass("btn-activated-error"), setTimeout(function() {
                    b.removeClass("btn-activated-error")
                }, 1e3)) : (b.addClass("btn-activated-success"), setTimeout(function() {
                    b.removeClass("btn-activated-success")
                }, 1e3))
            })
        }
    }
}), angular.module("slingApp").controller("NavsCtrl", ["$scope", function(a) {
    a.page = {
        title: "Navigation & Accordions",
        subtitle: "Place subtitle here..."
    }
}]).controller("AccordionDemoCtrl", ["$scope", function(a) {
    a.oneAtATime = !0, a.groups = [{
        title: "Dynamic Group Header - 1",
        content: "Dynamic Group Body - 1"
    }, {
        title: "Dynamic Group Header - 2",
        content: "Dynamic Group Body - 2"
    }], a.items = ["Item 1", "Item 2", "Item 3"], a.addItem = function() {
        var b = a.items.length + 1;
        a.items.push("Item " + b)
    }, a.status = {
        isFirstOpen: !0,
        isFirstDisabled: !1
    }
}]).controller("TabsDemoCtrl", ["$scope", function(a) {
    a.tabs = [{
        title: "Dynamic Title 1",
        content: "Dynamic content 1"
    }, {
        title: "Dynamic Title 2",
        content: "Dynamic content 2",
        disabled: !0
    }], a.alertMe = function() {
        setTimeout(function() {})
    }
}]).controller("PillsDemoCtrl", ["$scope", function(a) {
    a.pills = [{
        title: "Dynamic Title 1",
        content: "Dynamic content 1"
    }, {
        title: "Dynamic Title 2",
        content: "Dynamic content 2",
        disabled: !0
    }], a.alertMe = function() {
        setTimeout(function() {})
    }
}]), angular.module("slingApp").controller("ModalsCtrl", ["$scope", function(a) {
    a.page = {
        title: "Modals",
        subtitle: "Place subtitle here..."
    }
}]).controller("ModalDemoCtrl", ["$scope", "$modal", "$log", function(a, b, c) {
    a.items = ["item1", "item2", "item3"], a.open = function(d) {
        var e = b.open({
            templateUrl: "myModalContent.html",
            controller: "ModalInstanceCtrl",
            size: d,
            resolve: {
                items: function() {
                    return a.items
                }
            }
        });
        e.result.then(function(b) {
            a.selected = b
        }, function() {
            c.info("Modal dismissed at: " + new Date)
        })
    }
}]).controller("ModalInstanceCtrl", ["$scope", "$modalInstance", "items", function(a, b, c) {
    a.items = c, a.selected = {
        item: a.items[0]
    }, a.ok = function() {
        b.close(a.selected.item)
    }, a.cancel = function() {
        b.dismiss("cancel")
    }
}]).controller("SplashDemoCtrl", ["$scope", "$modal", "$log", function(a, b, c) {
    a.items = ["item1", "item2", "item3"], a.openSplash = function(d, e) {
        var f = angular.element(d.target).data("options"),
            g = b.open({
                templateUrl: "mySplashContent.html",
                controller: "ModalInstanceCtrl",
                size: e,
                backdropClass: "splash " + f,
                windowClass: "splash " + f,
                resolve: {
                    items: function() {
                        return a.items
                    }
                }
            });
        g.result.then(function(b) {
            a.selected = b
        }, function() {
            c.info("Modal dismissed at: " + new Date)
        })
    }
}]), angular.module("slingApp").controller("TilesCtrl", ["$scope", function(a) {
    a.page = {
        title: "Tiles",
        subtitle: "Place subtitle here..."
    }
}]), angular.module("slingApp").controller("PortletsCtrl", ["$scope", function(a) {
    a.page = {
        title: "Portlets",
        subtitle: "Place subtitle here..."
    }
}]), angular.module("slingApp").controller("GridCtrl", ["$scope", function(a) {
    a.page = {
        title: "Grid",
        subtitle: "Place subtitle here..."
    }
}]), angular.module("slingApp").controller("AlertsCtrl", ["$scope", function(a) {
    a.page = {
        title: "Alerts & Notifications",
        subtitle: "Place subtitle here..."
    }
}]).controller("AlertDemoCtrl", ["$scope", "$location", "$anchorScroll", "$timeout", function(a, b, c, d) {
    a.alerts = [], a.alertOptions = {
        colors: [{
            name: "primary"
        }, {
            name: "success"
        }, {
            name: "warning"
        }, {
            name: "danger"
        }, {
            name: "info"
        }, {
            name: "default"
        }, {
            name: "cyan"
        }, {
            name: "amethyst"
        }, {
            name: "green"
        }, {
            name: "orange"
        }, {
            name: "red"
        }, {
            name: "greensea"
        }, {
            name: "dutch"
        }, {
            name: "hotpink"
        }, {
            name: "drank"
        }, {
            name: "blue"
        }, {
            name: "lightred"
        }, {
            name: "slategray"
        }, {
            name: "darkgray"
        }],
        durations: [{
            name: "never close",
            value: 99980001
        }, {
            name: "1 second",
            value: 1e3
        }, {
            name: "5 seconds",
            value: 5e3
        }, {
            name: "10 seconds",
            value: 1e4
        }],
        icons: [{
            name: "none",
            value: ""
        }, {
            name: "warning",
            value: "fa-warning"
        }, {
            name: "check",
            value: "fa-check"
        }, {
            name: "user",
            value: "fa-user"
        }],
        msg: "Place alert text here..."
    }, a.alertType = a.alertOptions.colors[2], a.alertDuration = a.alertOptions.durations[0], a.alertIcon = a.alertOptions.icons[0], a.alertCloseable = !0, a.alertCloseAll = !0, a.alertFocus = !0, a.showAlert = function() {
        var e = {
            msg: a.alertOptions.msg,
            type: a.alertType.name,
            timeout: a.alertDuration.value,
            icon: a.alertIcon.value,
            closeable: a.alertCloseable,
            closeall: a.alertCloseAll,
            focus: a.alertFocus
        };
        e.closeall && (a.alerts = []), a.alerts.push(e), e.focus && (b.hash("alertsPlaceholder"), c()), d(function() {
            a.alerts.splice(a.alerts.indexOf(e), 1)
        }, a.alerts[a.alerts.indexOf(e)].timeout)
    }, a.closeAlert = function(b) {
        a.alerts.splice(b, 1)
    }
}]).controller("ToasterDemoCtrl", ["$scope", "toastr", "toastrConfig", function(a, b, c) {
    var d = [];
    a.toast = {
        colors: [{
            name: "primary"
        }, {
            name: "success"
        }, {
            name: "warning"
        }, {
            name: "danger"
        }, {
            name: "info"
        }, {
            name: "default"
        }, {
            name: "cyan"
        }, {
            name: "amethyst"
        }, {
            name: "green"
        }, {
            name: "orange"
        }, {
            name: "red"
        }, {
            name: "greensea"
        }, {
            name: "dutch"
        }, {
            name: "hotpink"
        }, {
            name: "drank"
        }, {
            name: "blue"
        }, {
            name: "lightred"
        }, {
            name: "slategray"
        }, {
            name: "darkgray"
        }],
        icons: [{
            name: "none",
            value: ""
        }, {
            name: "warning",
            value: "fa-warning"
        }, {
            name: "check",
            value: "fa-check"
        }, {
            name: "user",
            value: "fa-user"
        }],
        msg: "Gnome & Growl type non-blocking notifications",
        title: "This is toaster notification"
    }, a.options = {
        position: "toast-top-right",
        type: "success",
        iconClass: a.toast.colors[1],
        iconType: a.toast.icons[2],
        timeout: "5000",
        extendedTimeout: "1000",
        html: !1,
        closeButton: !1,
        tapToDismiss: !0,
        closeHtml: '<i class="fa fa-times"></i>'
    }, a.$watchCollection("options", function(a) {
        c.allowHtml = a.html, c.extendedTimeOut = parseInt(a.extendedTimeout, 10), c.positionClass = a.position, c.timeOut = parseInt(a.timeout, 10), c.closeButton = a.closeButton, c.tapToDismiss = a.tapToDismiss, c.closeHtml = a.closeHtml, c.iconType = a.iconType
    }), a.clearLastToast = function() {
        var a = d.pop();
        b.clear(a)
    }, a.clearToasts = function() {
        b.clear()
    }, a.openToast = function() {
        var c = b[a.options.type](a.toast.msg, a.toast.title, {
            iconClass: "bg-" + a.options.iconClass.name,
            iconType: a.options.iconType.value
        });
        d.push(c)
    }
}]), angular.module("slingApp").run(["$templateCache", function(a) {
    a.put("templates/toastr/toastr.html", '<div class="{{toastClass}} {{toastType}}" ng-click="tapToast()">\n  <i class="fa {{iconType}}"></i>\n  <div ng-switch on="allowHtml">\n    <div ng-switch-default ng-if="title" class="{{titleClass}}">{{title}}</div>\n    <div ng-switch-default class="{{messageClass}}">{{message}}</div>\n    <div ng-switch-when="true" ng-if="title" class="{{titleClass}}" ng-bind-html="title"></div>\n    <div ng-switch-when="true" class="{{messageClass}}" ng-bind-html="message"></div>\n  </div>\n</div>')
}]).constant("toastrConfig", {
    allowHtml: !1,
    closeButton: !1,
    closeHtml: "<button>&times;</button>",
    containerId: "toast-container",
    extendedTimeOut: 1e3,
    iconClasses: {
        error: "toast-error",
        info: "toast-info",
        success: "toast-success",
        warning: "toast-warning"
    },
    messageClass: "toast-message",
    positionClass: "toast-top-right",
    tapToDismiss: !0,
    timeOut: 5e3,
    titleClass: "toast-title",
    toastClass: "toast"
}).factory("toastr", ["$animate", "$compile", "$document", "$rootScope", "$sce", "toastrConfig", "$q", function(a, b, c, d, e, f, g) {
    function h(a) {
        if (a) m(a.toastId);
        else
            for (var b = 0; b < t.length; b++) m(t[b].toastId)
    }

    function i(a, b, c) {
        var d = o().iconClasses.error;
        return n(d, a, b, c)
    }

    function j(a, b, c) {
        var d = o().iconClasses.info;
        return n(d, a, b, c)
    }

    function k(a, b, c) {
        var d = o().iconClasses.success;
        return n(d, a, b, c)
    }

    function l(a, b, c) {
        var d = o().iconClasses.warning;
        return n(d, a, b, c)
    }

    function m(b) {
        function c(a) {
            for (var b = 0; b < t.length; b++)
                if (t[b].toastId === a) return t[b]
        }

        function d() {
            return !t.length
        }
        var e = c(b);
        e && a.leave(e.el).then(function() {
            e.scope.options.onHidden && e.scope.options.onHidden(), e.scope.$destroy();
            var a = t.indexOf(e);
            t.splice(a, 1);
            var b = f.maxOpened;
            b && t.length >= b && t[b - 1].open.resolve(), d() && (r.remove(), r = null, u = g.defer())
        })
    }

    function n(a, b, c, d) {
        return "object" == typeof c && (d = c, c = null), q({
            iconClass: a,
            message: b,
            optionsOverride: d,
            title: c
        })
    }

    function o() {
        return angular.extend({}, f)
    }

    function p(b) {
        if (r) return u.promise;
        r = angular.element("<div></div>"), r.attr("id", b.containerId), r.addClass(b.positionClass), r.css({
            "pointer-events": "auto"
        });
        var d = c.find("body").eq(0);
        return a.enter(r, d).then(function() {
            u.resolve()
        }), u.promise
    }

    function q(c) {
        function f(a, b, c) {
            c.allowHtml ? (a.scope.allowHtml = !0, a.scope.title = e.trustAsHtml(b.title), a.scope.message = e.trustAsHtml(b.message)) : (a.scope.title = b.title, a.scope.message = b.message), a.scope.toastType = a.iconClass, a.scope.toastId = a.toastId, a.scope.options = {
                extendedTimeOut: c.extendedTimeOut,
                messageClass: c.messageClass,
                onHidden: c.onHidden,
                onShown: c.onShown,
                tapToDismiss: c.tapToDismiss,
                timeOut: c.timeOut,
                titleClass: c.titleClass,
                toastClass: c.toastClass,
                iconType: c.iconType
            }, c.closeButton && (a.scope.options.closeHtml = c.closeHtml)
        }

        function h() {
            var a = {
                toastId: s++,
                scope: d.$new(),
                open: g.defer()
            };
            return a.iconClass = c.iconClass, c.optionsOverride && (k = angular.extend(k, c.optionsOverride), a.iconClass = c.optionsOverride.iconClass || a.iconClass), f(a, c, k), a.el = i(a.scope), a
        }

        function i(a) {
            var c = angular.element("<div toast></div>");
            return b(c)(a)
        }

        function j() {
            return k.maxOpened && t.length <= k.maxOpened || !k.maxOpened
        }
        var k = o(),
            l = h();
        return t.push(l), j() && l.open.resolve(), l.open.promise.then(function() {
            p(k).then(function() {
                k.newestOnTop ? a.enter(l.el, r).then(function() {
                    l.scope.init()
                }) : a.enter(l.el, r, r[0].lastChild).then(function() {
                    l.scope.init()
                })
            })
        }), l
    }
    var r, s = 0,
        t = [],
        u = g.defer(),
        v = {
            clear: h,
            error: i,
            info: j,
            remove: m,
            success: k,
            warning: l
        };
    return v
}]).directive("toast", function() {
    return {
        link: function(a) {
            a.iconType = a.options.iconType
        }
    }
}), angular.module("slingApp").controller("GeneralCtrl", ["$scope", function(a) {
    a.page = {
        title: "General Elements",
        subtitle: "Place subtitle here..."
    }
}]).controller("ProgressDemoCtrl", ["$scope", function(a) {
    a.max = 200, a.random = function() {
        var b, c = Math.floor(100 * Math.random() + 1);
        b = 25 > c ? "success" : 50 > c ? "info" : 75 > c ? "warning" : "danger", a.showWarning = "danger" === b || "warning" === b, a.dynamic = c, a.type = b
    }, a.random(), a.randomStacked = function() {
        a.stacked = [];
        for (var b = ["success", "info", "warning", "danger"], c = 0, d = Math.floor(4 * Math.random() + 1); d > c; c++) {
            var e = Math.floor(4 * Math.random());
            a.stacked.push({
                value: Math.floor(30 * Math.random() + 1),
                type: b[e]
            })
        }
    }, a.randomStacked()
}]).controller("RatingDemoCtrl", ["$scope", function(a) {
    a.rate = 7, a.max = 10, a.isReadonly = !1, a.hoveringOver = function(b) {
        a.overStar = b, a.percent = 100 * (b / a.max)
    }
}]).controller("ButtonsCtrl", ["$scope", function(a) {
    a.singleModel = 1, a.radioModel = "Middle", a.checkModel = {
        left: !1,
        middle: !0,
        right: !1
    }
}]).controller("CarouselDemoCtrl", ["$scope", function(a) {
    a.myInterval = 5e3;
    var b = a.slides = [];
    a.addSlide = function() {
        var a = 801 + b.length;
        b.push({
            image: "http://placekitten.com/" + a + "/400",
            text: ["More", "Extra", "Lots of", "Surplus"][b.length % 4] + " " + ["Cats", "Kittys", "Felines", "Cutes"][b.length % 4]
        })
    };
    for (var c = 0; 4 > c; c++) a.addSlide()
}]).controller("TooltipDemoCtrl", ["$scope", function(a) {
    a.dynamicTooltip = "Hello, World!", a.dynamicTooltipText = "dynamic", a.htmlTooltip = "I've been made <b>bold</b>!"
}]).controller("TypeaheadCtrl", ["$scope", "$http", function(a, b) {
    a.selected = void 0, a.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"], a.getLocation = function(a) {
        return b.get("http://maps.googleapis.com/maps/api/geocode/json", {
            params: {
                address: a,
                sensor: !1
            }
        }).then(function(a) {
            return a.data.results.map(function(a) {
                return a.formatted_address
            })
        })
    }, a.statesWithFlags = [{
        name: "Alabama",
        flag: "5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png"
    }, {
        name: "Alaska",
        flag: "e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png"
    }, {
        name: "Arizona",
        flag: "9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png"
    }, {
        name: "Arkansas",
        flag: "9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png"
    }, {
        name: "California",
        flag: "0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png"
    }, {
        name: "Colorado",
        flag: "4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png"
    }, {
        name: "Connecticut",
        flag: "9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png"
    }, {
        name: "Delaware",
        flag: "c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png"
    }, {
        name: "Florida",
        flag: "f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png"
    }, {
        name: "Georgia",
        flag: "5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png"
    }, {
        name: "Hawaii",
        flag: "e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png"
    }, {
        name: "Idaho",
        flag: "a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png"
    }, {
        name: "Illinois",
        flag: "0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png"
    }, {
        name: "Indiana",
        flag: "a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png"
    }, {
        name: "Iowa",
        flag: "a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png"
    }, {
        name: "Kansas",
        flag: "d/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png"
    }, {
        name: "Kentucky",
        flag: "8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png"
    }, {
        name: "Louisiana",
        flag: "e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png"
    }, {
        name: "Maine",
        flag: "3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png"
    }, {
        name: "Maryland",
        flag: "a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png"
    }, {
        name: "Massachusetts",
        flag: "f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png"
    }, {
        name: "Michigan",
        flag: "b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png"
    }, {
        name: "Minnesota",
        flag: "b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png"
    }, {
        name: "Mississippi",
        flag: "4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png"
    }, {
        name: "Missouri",
        flag: "5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png"
    }, {
        name: "Montana",
        flag: "c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png"
    }, {
        name: "Nebraska",
        flag: "4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png"
    }, {
        name: "Nevada",
        flag: "f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png"
    }, {
        name: "New Hampshire",
        flag: "2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png"
    }, {
        name: "New Jersey",
        flag: "9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png"
    }, {
        name: "New Mexico",
        flag: "c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png"
    }, {
        name: "New York",
        flag: "1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png"
    }, {
        name: "North Carolina",
        flag: "b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png"
    }, {
        name: "North Dakota",
        flag: "e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png"
    }, {
        name: "Ohio",
        flag: "4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png"
    }, {
        name: "Oklahoma",
        flag: "6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png"
    }, {
        name: "Oregon",
        flag: "b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png"
    }, {
        name: "Pennsylvania",
        flag: "f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png"
    }, {
        name: "Rhode Island",
        flag: "f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png"
    }, {
        name: "South Carolina",
        flag: "6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png"
    }, {
        name: "South Dakota",
        flag: "1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png"
    }, {
        name: "Tennessee",
        flag: "9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png"
    }, {
        name: "Texas",
        flag: "f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png"
    }, {
        name: "Utah",
        flag: "f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png"
    }, {
        name: "Vermont",
        flag: "4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png"
    }, {
        name: "Virginia",
        flag: "4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png"
    }, {
        name: "Washington",
        flag: "5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png"
    }, {
        name: "West Virginia",
        flag: "2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png"
    }, {
        name: "Wisconsin",
        flag: "2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png"
    }, {
        name: "Wyoming",
        flag: "b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png"
    }]
}]).controller("DropdownCtrl", ["$scope", function(a) {
    a.items = ["The first choice!", "And another choice for you.", "but wait! A third!"], a.status = {
        isopen: !1
    }, a.toggled = function(a) {
        console.log("Dropdown is now: ", a)
    }, a.toggleDropdown = function(b) {
        b.preventDefault(), b.stopPropagation(), a.status.isopen = !a.status.isopen
    }
}]).controller("DatepickerDemoCtrl", ["$scope", function(a) {
    a.today = function() {
        a.dt = new Date
    }, a.today(), a.clear = function() {
        a.dt = null
    }, a.disabled = function(a, b) {
        return "day" === b && (0 === a.getDay() || 6 === a.getDay())
    }, a.toggleMin = function() {
        a.minDate = a.minDate ? null : new Date
    }, a.toggleMin(), a.open = function(b) {
        b.preventDefault(), b.stopPropagation(), a.opened = !0
    }, a.dateOptions = {
        formatYear: "yy",
        startingDay: 1,
        "class": "datepicker"
    }, a.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "dd.MM.yyyy", "shortDate"], a.format = a.formats[0]
}]).controller("TimepickerDemoCtrl", ["$scope", function(a) {
    a.mytime = new Date, a.hstep = 1, a.mstep = 15, a.options = {
        hstep: [1, 2, 3],
        mstep: [1, 5, 10, 15, 25, 30]
    }, a.ismeridian = !0, a.toggleMode = function() {
        a.ismeridian = !a.ismeridian
    }, a.update = function() {
        var b = new Date;
        b.setHours(14), b.setMinutes(0), a.mytime = b
    }, a.changed = function() {
        console.log("Time changed to: " + a.mytime)
    }, a.clear = function() {
        a.mytime = null
    }
}]).controller("PaginationDemoCtrl", ["$scope", function(a) {
    a.totalItems = 64, a.currentPage = 4, a.setPage = function(b) {
        a.currentPage = b
    }, a.pageChanged = function() {
        console.log("Page changed to: " + a.currentPage)
    }, a.maxSize = 5, a.bigTotalItems = 175, a.bigCurrentPage = 1
}]).controller("PopoverDemoCtrl", ["$scope", function(a) {
    a.dynamicPopover = "Hello, World!", a.dynamicPopoverTitle = "Title"
}]), angular.module("slingApp").directive("setNgAnimate", ["$animate", function(a) {
    return {
        link: function(b, c, d) {
            b.$watch(function() {
                return b.$eval(d.setNgAnimate, b)
            }, function(b) {
                console.log("Directive animation Enabled: " + b), a.enabled(!!b, c)
            })
        }
    }
}]), angular.module("slingApp").controller("AbnTestController", ["$scope", "$timeout", function(a, b) {
    var c, d, e, f;
    return a.my_tree_handler = function(b) {
        var c;
        return a.output = "You selected: " + b.label, (null != (c = b.data) ? c.description : void 0) ? a.output += "(" + b.data.description + ")" : void 0
    }, c = function(b) {
        return a.output = "APPLE! : " + b.label
    }, e = [{
        label: "Animal",
        children: [{
            label: "Dog",
            data: {
                description: "man's best friend"
            }
        }, {
            label: "Cat",
            data: {
                description: "Felis catus"
            }
        }, {
            label: "Hippopotamus",
            data: {
                description: "hungry, hungry"
            }
        }, {
            label: "Chicken",
            children: ["White Leghorn", "Rhode Island Red", "Jersey Giant"]
        }]
    }, {
        label: "Vegetable",
        data: {
            definition: "A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.",
            data_can_contain_anything: !0
        },
        onSelect: function(b) {
            return a.output = "Vegetable: " + b.data.definition
        },
        children: [{
            label: "Oranges"
        }, {
            label: "Apples",
            children: [{
                label: "Granny Smith",
                onSelect: c
            }, {
                label: "Red Delicous",
                onSelect: c
            }, {
                label: "Fuji",
                onSelect: c
            }]
        }]
    }, {
        label: "Mineral",
        children: [{
            label: "Rock",
            children: ["Igneous", "Sedimentary", "Metamorphic"]
        }, {
            label: "Metal",
            children: ["Aluminum", "Steel", "Copper"]
        }, {
            label: "Plastic",
            children: [{
                label: "Thermoplastic",
                children: ["polyethylene", "polypropylene", "polystyrene", " polyvinyl chloride"]
            }, {
                label: "Thermosetting Polymer",
                children: ["polyester", "polyurethane", "vulcanized rubber", "bakelite", "urea-formaldehyde"]
            }]
        }]
    }], f = [{
        label: "North America",
        children: [{
            label: "Canada",
            children: ["Toronto", "Vancouver"]
        }, {
            label: "USA",
            children: ["New York", "Los Angeles"]
        }, {
            label: "Mexico",
            children: ["Mexico City", "Guadalajara"]
        }]
    }, {
        label: "South America",
        children: [{
            label: "Venezuela",
            children: ["Caracas", "Maracaibo"]
        }, {
            label: "Brazil",
            children: ["Sao Paulo", "Rio de Janeiro"]
        }, {
            label: "Argentina",
            children: ["Buenos Aires", "Cordoba"]
        }]
    }], a.my_data = e, a.try_changing_the_tree_data = function() {
        return a.my_data = a.my_data === e ? f : e
    }, a.my_tree = d = {}, a.try_async_load = function() {
        return a.my_data = [], a.doing_async = !0, b(function() {
            return a.my_data = Math.random() < .5 ? e : f, a.doing_async = !1, d.expand_all()
        }, 1e3)
    }, a.try_adding_a_branch = function() {
        var a;
        return a = d.get_selected_branch(), d.add_branch(a, {
            label: "New Branch",
            data: {
                something: 42,
                "else": 43
            }
        })
    }
}]).controller("TreeCtrl", ["$scope", function(a) {
    a.page = {
        title: "Tree",
        subtitle: "Place subtitle here..."
    }
}]), angular.module("slingApp").controller("FormsCommonCtrl", ["$scope", function(a) {
    a.page = {
        title: "Common Elements",
        subtitle: "Place subtitle here..."
    }, a.val = 36;
    var b = function(b) {
        a.$apply(function() {
            a.val = b
        })
    };
    angular.element("#slider").on("slideStop", function(a) {
        b(a.value)
    }), a.clear = function(b) {
        a.number.selected = void 0, b.preventDefault(), b.stopPropagation()
    }, a.number = {}, a.numbers = ["One", "Two", "Three", "Four"], a.country = {}, a.countries = [{
        name: "Afghanistan",
        code: "AF"
    }, {
        name: "Åland Islands",
        code: "AX"
    }, {
        name: "Albania",
        code: "AL"
    }, {
        name: "Algeria",
        code: "DZ"
    }, {
        name: "American Samoa",
        code: "AS"
    }, {
        name: "Andorra",
        code: "AD"
    }, {
        name: "Angola",
        code: "AO"
    }, {
        name: "Anguilla",
        code: "AI"
    }, {
        name: "Antarctica",
        code: "AQ"
    }, {
        name: "Antigua and Barbuda",
        code: "AG"
    }, {
        name: "Argentina",
        code: "AR"
    }, {
        name: "Armenia",
        code: "AM"
    }, {
        name: "Aruba",
        code: "AW"
    }, {
        name: "Australia",
        code: "AU"
    }, {
        name: "Austria",
        code: "AT"
    }, {
        name: "Azerbaijan",
        code: "AZ"
    }, {
        name: "Bahamas",
        code: "BS"
    }, {
        name: "Bahrain",
        code: "BH"
    }, {
        name: "Bangladesh",
        code: "BD"
    }, {
        name: "Barbados",
        code: "BB"
    }, {
        name: "Belarus",
        code: "BY"
    }, {
        name: "Belgium",
        code: "BE"
    }, {
        name: "Belize",
        code: "BZ"
    }, {
        name: "Benin",
        code: "BJ"
    }, {
        name: "Bermuda",
        code: "BM"
    }, {
        name: "Bhutan",
        code: "BT"
    }, {
        name: "Bolivia",
        code: "BO"
    }, {
        name: "Bosnia and Herzegovina",
        code: "BA"
    }, {
        name: "Botswana",
        code: "BW"
    }, {
        name: "Bouvet Island",
        code: "BV"
    }, {
        name: "Brazil",
        code: "BR"
    }, {
        name: "British Indian Ocean Territory",
        code: "IO"
    }, {
        name: "Brunei Darussalam",
        code: "BN"
    }, {
        name: "Bulgaria",
        code: "BG"
    }, {
        name: "Burkina Faso",
        code: "BF"
    }, {
        name: "Burundi",
        code: "BI"
    }, {
        name: "Cambodia",
        code: "KH"
    }, {
        name: "Cameroon",
        code: "CM"
    }, {
        name: "Canada",
        code: "CA"
    }, {
        name: "Cape Verde",
        code: "CV"
    }, {
        name: "Cayman Islands",
        code: "KY"
    }, {
        name: "Central African Republic",
        code: "CF"
    }, {
        name: "Chad",
        code: "TD"
    }, {
        name: "Chile",
        code: "CL"
    }, {
        name: "China",
        code: "CN"
    }, {
        name: "Christmas Island",
        code: "CX"
    }, {
        name: "Cocos (Keeling) Islands",
        code: "CC"
    }, {
        name: "Colombia",
        code: "CO"
    }, {
        name: "Comoros",
        code: "KM"
    }, {
        name: "Congo",
        code: "CG"
    }, {
        name: "Congo, The Democratic Republic of the",
        code: "CD"
    }, {
        name: "Cook Islands",
        code: "CK"
    }, {
        name: "Costa Rica",
        code: "CR"
    }, {
        name: "Cote D'Ivoire",
        code: "CI"
    }, {
        name: "Croatia",
        code: "HR"
    }, {
        name: "Cuba",
        code: "CU"
    }, {
        name: "Cyprus",
        code: "CY"
    }, {
        name: "Czech Republic",
        code: "CZ"
    }, {
        name: "Denmark",
        code: "DK"
    }, {
        name: "Djibouti",
        code: "DJ"
    }, {
        name: "Dominica",
        code: "DM"
    }, {
        name: "Dominican Republic",
        code: "DO"
    }, {
        name: "Ecuador",
        code: "EC"
    }, {
        name: "Egypt",
        code: "EG"
    }, {
        name: "El Salvador",
        code: "SV"
    }, {
        name: "Equatorial Guinea",
        code: "GQ"
    }, {
        name: "Eritrea",
        code: "ER"
    }, {
        name: "Estonia",
        code: "EE"
    }, {
        name: "Ethiopia",
        code: "ET"
    }, {
        name: "Falkland Islands (Malvinas)",
        code: "FK"
    }, {
        name: "Faroe Islands",
        code: "FO"
    }, {
        name: "Fiji",
        code: "FJ"
    }, {
        name: "Finland",
        code: "FI"
    }, {
        name: "France",
        code: "FR"
    }, {
        name: "French Guiana",
        code: "GF"
    }, {
        name: "French Polynesia",
        code: "PF"
    }, {
        name: "French Southern Territories",
        code: "TF"
    }, {
        name: "Gabon",
        code: "GA"
    }, {
        name: "Gambia",
        code: "GM"
    }, {
        name: "Georgia",
        code: "GE"
    }, {
        name: "Germany",
        code: "DE"
    }, {
        name: "Ghana",
        code: "GH"
    }, {
        name: "Gibraltar",
        code: "GI"
    }, {
        name: "Greece",
        code: "GR"
    }, {
        name: "Greenland",
        code: "GL"
    }, {
        name: "Grenada",
        code: "GD"
    }, {
        name: "Guadeloupe",
        code: "GP"
    }, {
        name: "Guam",
        code: "GU"
    }, {
        name: "Guatemala",
        code: "GT"
    }, {
        name: "Guernsey",
        code: "GG"
    }, {
        name: "Guinea",
        code: "GN"
    }, {
        name: "Guinea-Bissau",
        code: "GW"
    }, {
        name: "Guyana",
        code: "GY"
    }, {
        name: "Haiti",
        code: "HT"
    }, {
        name: "Heard Island and Mcdonald Islands",
        code: "HM"
    }, {
        name: "Holy See (Vatican City State)",
        code: "VA"
    }, {
        name: "Honduras",
        code: "HN"
    }, {
        name: "Hong Kong",
        code: "HK"
    }, {
        name: "Hungary",
        code: "HU"
    }, {
        name: "Iceland",
        code: "IS"
    }, {
        name: "India",
        code: "IN"
    }, {
        name: "Indonesia",
        code: "ID"
    }, {
        name: "Iran, Islamic Republic Of",
        code: "IR"
    }, {
        name: "Iraq",
        code: "IQ"
    }, {
        name: "Ireland",
        code: "IE"
    }, {
        name: "Isle of Man",
        code: "IM"
    }, {
        name: "Israel",
        code: "IL"
    }, {
        name: "Italy",
        code: "IT"
    }, {
        name: "Jamaica",
        code: "JM"
    }, {
        name: "Japan",
        code: "JP"
    }, {
        name: "Jersey",
        code: "JE"
    }, {
        name: "Jordan",
        code: "JO"
    }, {
        name: "Kazakhstan",
        code: "KZ"
    }, {
        name: "Kenya",
        code: "KE"
    }, {
        name: "Kiribati",
        code: "KI"
    }, {
        name: "Korea, Democratic People's Republic of",
        code: "KP"
    }, {
        name: "Korea, Republic of",
        code: "KR"
    }, {
        name: "Kuwait",
        code: "KW"
    }, {
        name: "Kyrgyzstan",
        code: "KG"
    }, {
        name: "Lao People's Democratic Republic",
        code: "LA"
    }, {
        name: "Latvia",
        code: "LV"
    }, {
        name: "Lebanon",
        code: "LB"
    }, {
        name: "Lesotho",
        code: "LS"
    }, {
        name: "Liberia",
        code: "LR"
    }, {
        name: "Libyan Arab Jamahiriya",
        code: "LY"
    }, {
        name: "Liechtenstein",
        code: "LI"
    }, {
        name: "Lithuania",
        code: "LT"
    }, {
        name: "Luxembourg",
        code: "LU"
    }, {
        name: "Macao",
        code: "MO"
    }, {
        name: "Macedonia, The Former Yugoslav Republic of",
        code: "MK"
    }, {
        name: "Madagascar",
        code: "MG"
    }, {
        name: "Malawi",
        code: "MW"
    }, {
        name: "Malaysia",
        code: "MY"
    }, {
        name: "Maldives",
        code: "MV"
    }, {
        name: "Mali",
        code: "ML"
    }, {
        name: "Malta",
        code: "MT"
    }, {
        name: "Marshall Islands",
        code: "MH"
    }, {
        name: "Martinique",
        code: "MQ"
    }, {
        name: "Mauritania",
        code: "MR"
    }, {
        name: "Mauritius",
        code: "MU"
    }, {
        name: "Mayotte",
        code: "YT"
    }, {
        name: "Mexico",
        code: "MX"
    }, {
        name: "Micronesia, Federated States of",
        code: "FM"
    }, {
        name: "Moldova, Republic of",
        code: "MD"
    }, {
        name: "Monaco",
        code: "MC"
    }, {
        name: "Mongolia",
        code: "MN"
    }, {
        name: "Montserrat",
        code: "MS"
    }, {
        name: "Morocco",
        code: "MA"
    }, {
        name: "Mozambique",
        code: "MZ"
    }, {
        name: "Myanmar",
        code: "MM"
    }, {
        name: "Namibia",
        code: "NA"
    }, {
        name: "Nauru",
        code: "NR"
    }, {
        name: "Nepal",
        code: "NP"
    }, {
        name: "Netherlands",
        code: "NL"
    }, {
        name: "Netherlands Antilles",
        code: "AN"
    }, {
        name: "New Caledonia",
        code: "NC"
    }, {
        name: "New Zealand",
        code: "NZ"
    }, {
        name: "Nicaragua",
        code: "NI"
    }, {
        name: "Niger",
        code: "NE"
    }, {
        name: "Nigeria",
        code: "NG"
    }, {
        name: "Niue",
        code: "NU"
    }, {
        name: "Norfolk Island",
        code: "NF"
    }, {
        name: "Northern Mariana Islands",
        code: "MP"
    }, {
        name: "Norway",
        code: "NO"
    }, {
        name: "Oman",
        code: "OM"
    }, {
        name: "Pakistan",
        code: "PK"
    }, {
        name: "Palau",
        code: "PW"
    }, {
        name: "Palestinian Territory, Occupied",
        code: "PS"
    }, {
        name: "Panama",
        code: "PA"
    }, {
        name: "Papua New Guinea",
        code: "PG"
    }, {
        name: "Paraguay",
        code: "PY"
    }, {
        name: "Peru",
        code: "PE"
    }, {
        name: "Philippines",
        code: "PH"
    }, {
        name: "Pitcairn",
        code: "PN"
    }, {
        name: "Poland",
        code: "PL"
    }, {
        name: "Portugal",
        code: "PT"
    }, {
        name: "Puerto Rico",
        code: "PR"
    }, {
        name: "Qatar",
        code: "QA"
    }, {
        name: "Reunion",
        code: "RE"
    }, {
        name: "Romania",
        code: "RO"
    }, {
        name: "Russian Federation",
        code: "RU"
    }, {
        name: "Rwanda",
        code: "RW"
    }, {
        name: "Saint Helena",
        code: "SH"
    }, {
        name: "Saint Kitts and Nevis",
        code: "KN"
    }, {
        name: "Saint Lucia",
        code: "LC"
    }, {
        name: "Saint Pierre and Miquelon",
        code: "PM"
    }, {
        name: "Saint Vincent and the Grenadines",
        code: "VC"
    }, {
        name: "Samoa",
        code: "WS"
    }, {
        name: "San Marino",
        code: "SM"
    }, {
        name: "Sao Tome and Principe",
        code: "ST"
    }, {
        name: "Saudi Arabia",
        code: "SA"
    }, {
        name: "Senegal",
        code: "SN"
    }, {
        name: "Serbia and Montenegro",
        code: "CS"
    }, {
        name: "Seychelles",
        code: "SC"
    }, {
        name: "Sierra Leone",
        code: "SL"
    }, {
        name: "Singapore",
        code: "SG"
    }, {
        name: "Slovakia",
        code: "SK"
    }, {
        name: "Slovenia",
        code: "SI"
    }, {
        name: "Solomon Islands",
        code: "SB"
    }, {
        name: "Somalia",
        code: "SO"
    }, {
        name: "South Africa",
        code: "ZA"
    }, {
        name: "South Georgia and the South Sandwich Islands",
        code: "GS"
    }, {
        name: "Spain",
        code: "ES"
    }, {
        name: "Sri Lanka",
        code: "LK"
    }, {
        name: "Sudan",
        code: "SD"
    }, {
        name: "Suriname",
        code: "SR"
    }, {
        name: "Svalbard and Jan Mayen",
        code: "SJ"
    }, {
        name: "Swaziland",
        code: "SZ"
    }, {
        name: "Sweden",
        code: "SE"
    }, {
        name: "Switzerland",
        code: "CH"
    }, {
        name: "Syrian Arab Republic",
        code: "SY"
    }, {
        name: "Taiwan, Province of China",
        code: "TW"
    }, {
        name: "Tajikistan",
        code: "TJ"
    }, {
        name: "Tanzania, United Republic of",
        code: "TZ"
    }, {
        name: "Thailand",
        code: "TH"
    }, {
        name: "Timor-Leste",
        code: "TL"
    }, {
        name: "Togo",
        code: "TG"
    }, {
        name: "Tokelau",
        code: "TK"
    }, {
        name: "Tonga",
        code: "TO"
    }, {
        name: "Trinidad and Tobago",
        code: "TT"
    }, {
        name: "Tunisia",
        code: "TN"
    }, {
        name: "Turkey",
        code: "TR"
    }, {
        name: "Turkmenistan",
        code: "TM"
    }, {
        name: "Turks and Caicos Islands",
        code: "TC"
    }, {
        name: "Tuvalu",
        code: "TV"
    }, {
        name: "Uganda",
        code: "UG"
    }, {
        name: "Ukraine",
        code: "UA"
    }, {
        name: "United Arab Emirates",
        code: "AE"
    }, {
        name: "United Kingdom",
        code: "GB"
    }, {
        name: "United States",
        code: "US"
    }, {
        name: "United States Minor Outlying Islands",
        code: "UM"
    }, {
        name: "Uruguay",
        code: "UY"
    }, {
        name: "Uzbekistan",
        code: "UZ"
    }, {
        name: "Vanuatu",
        code: "VU"
    }, {
        name: "Venezuela",
        code: "VE"
    }, {
        name: "Vietnam",
        code: "VN"
    }, {
        name: "Virgin Islands, British",
        code: "VG"
    }, {
        name: "Virgin Islands, U.S.",
        code: "VI"
    }, {
        name: "Wallis and Futuna",
        code: "WF"
    }, {
        name: "Western Sahara",
        code: "EH"
    }, {
        name: "Yemen",
        code: "YE"
    }, {
        name: "Zambia",
        code: "ZM"
    }, {
        name: "Zimbabwe",
        code: "ZW"
    }], a.availableColors = ["Red", "Green", "Blue", "Yellow", "Magenta", "Maroon", "Umbra", "Turquoise"], a.multipleDemo = {}, a.multipleDemo.colors = ["Blue", "Red"], a.htmlVariable = '<h2>Try me!</h2><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p><p><b>Features:</b></p><ol><li>Automatic Seamless Two-Way-Binding</li><li class="text-red">Super Easy <b>Theming</b> Options</li><li>Simple Editor Instance Creation</li><li>Safely Parses Html for Custom Toolbar Icons</li><li>Doesn&apos;t Use an iFrame</li><li>Works with Firefox, Chrome, and IE8+</li></ol><p><b>Code at GitHub:</b> <a href="https://github.com/fraywing/textAngular">Here</a> </p>'
}]).controller("tagsInputCtrl", ["$scope", "$http", function(a, b) {
    a.movies = ["The Dark Knight", "Heat", "Inception", "The Dark Knight Rises", "Kill Bill: Vol. 1", "Terminator 2: Judgment Day", "The Matrix", "Minority Report", "The Bourne Ultimatum"], a.loadMovies = function() {
        return b.get("scripts/jsons/movies.json")
    }
}]), angular.module("slingApp").controller("FormsValidateCtrl", ["$scope", function(a) {
    a.page = {
        title: "Validation Elements",
        subtitle: "Place subtitle here..."
    }, a.submitForm = function(a) {
        console.log("validate form"), console.log(a ? "our form is amazing" : "form is invalid")
    }, a.notBlackListed = function(a) {
        var b = ["bad@domain.com", "verybad@domain.com"];
        return -1 === b.indexOf(a)
    }
}]), angular.module("slingApp").directive("onBlurValidation", function() {
    return {
        restrict: "A",
        require: "?ngModel",
        link: function(a, b, c, d) {
            d && (b.on("focus", function() {
                b.addClass("has-focus"), a.$apply(function() {
                    d.hasFocus = !0
                })
            }), b.on("blur", function() {
                b.removeClass("has-focus"), b.addClass("has-visited"), a.$apply(function() {
                    d.hasFocus = !1, d.hasVisited = !0
                })
            }), b.closest("form").on("submit", function() {
                b.addClass("has-visited"), a.$apply(function() {
                    d.hasFocus = !1, d.hasVisited = !0
                })
            }))
        }
    }
}), angular.module("slingApp").directive("submit", function() {
    return {
        restrict: "A",
        link: function(a, b, c) {
            var d;
            return d = a[c.name], b.bind("submit", function() {
                return angular.forEach(d, function(a, b) {
                    return "string" == typeof b && !b.match("^[$]") && a.$pristine ? a.$setViewValue(a.$value) : void 0
                }), d.$valid ? a.$apply(c.submit) : void 0
            })
        }
    }
}), angular.module("slingApp").controller("FormWizardCtrl", ["$scope", function(a) {
    a.page = {
        title: "Form Wizard",
        subtitle: "Place subtitle here..."
    }
}]), angular.module("slingApp").controller("FormUploadCtrl", ["$scope", "FileUploader", function(a, b) {
    var c = a.uploader = new b({});
    c.filters.push({
        name: "customFilter",
        fn: function() {
            return this.queue.length < 10
        }
    }), c.filters.push({
        name: "imageFilter",
        fn: function(a) {
            var b = "|" + a.type.slice(a.type.lastIndexOf("/") + 1) + "|";
            return -1 !== "|jpg|png|jpeg|bmp|gif|".indexOf(b)
        }
    }), c.onWhenAddingFileFailed = function(a, b, c) {
        console.info("onWhenAddingFileFailed", a, b, c)
    }, c.onAfterAddingFile = function(a) {
        console.info("onAfterAddingFile", a)
    }, c.onAfterAddingAll = function(a) {
        console.info("onAfterAddingAll", a)
    }, c.onBeforeUploadItem = function(a) {
        console.info("onBeforeUploadItem", a)
    }, c.onProgressItem = function(a, b) {
        console.info("onProgressItem", a, b)
    }, c.onProgressAll = function(a) {
        console.info("onProgressAll", a)
    }, c.onSuccessItem = function(a, b, c, d) {
        console.info("onSuccessItem", a, b, c, d)
    }, c.onErrorItem = function(a, b, c, d) {
        console.info("onErrorItem", a, b, c, d)
    }, c.onCancelItem = function(a, b, c, d) {
        console.info("onCancelItem", a, b, c, d)
    }, c.onCompleteItem = function(a, b, c, d) {
        console.info("onCompleteItem", a, b, c, d)
    }, c.onCompleteAll = function() {
        console.info("onCompleteAll")
    }, console.info("uploader", c)
}]), angular.module("slingApp").controller("FormImgCropCtrl", ["$scope", function(a) {
    a.myImage = "", a.myCroppedImage = "", a.cropType = "circle";
    var b = function(b) {
        var c = b.currentTarget.files[0],
            d = new FileReader;
        d.onload = function(b) {
            a.$apply(function(a) {
                a.myImage = b.target.result
            })
        }, d.readAsDataURL(c)
    };
    angular.element(document.querySelector("#fileInput")).on("change", b)
}]), angular.module("slingApp").controller("TablesBootstrapCtrl", ["$scope", function(a) {
    a.page = {
        title: "Bootstrap Tables",
        subtitle: "Place subtitle here..."
    }, a.users = [{
        name: "Mark",
        lastname: "Otto",
        username: "@mdo",
        checked: !0,
        selected: !1
    }, {
        name: "Jacob",
        lastname: "Thornton",
        username: "@fat",
        checked: !1,
        selected: !1
    }, {
        name: "Mary",
        lastname: "the Bird",
        username: "@twitter",
        checked: !0,
        selected: !1
    }, {
        name: "Marv",
        lastname: "Bond",
        username: "@marvo",
        checked: !1,
        selected: !1
    }, {
        name: "Larry",
        lastname: "Cardl",
        username: "@lurie",
        checked: !1,
        selected: !1
    }, {
        name: "Jennifer",
        lastname: "Minelly",
        username: "@jen",
        checked: !0,
        selected: !1
    }, {
        name: "Sly",
        lastname: "Stall",
        username: "@sly",
        checked: !0,
        selected: !1
    }, {
        name: "Arnold",
        lastname: "Percy",
        username: "@arnie",
        checked: !0,
        selected: !1
    }, {
        name: "Jack",
        lastname: "Black",
        username: "@blacko",
        checked: !1,
        selected: !1
    }], a.selectedAll = !1, a.selectAll = function() {
        a.selectedAll = a.selectedAll ? !1 : !0, angular.forEach(a.users, function(b) {
            b.selected = a.selectedAll
        })
    }
}]), angular.module("slingApp").directive("checkToggler", function() {
    return {
        restrict: "E",
        link: function(a, b) {
            b.on("click", function() {
                b.hasClass("checked") ? b.removeClass("checked") : b.addClass("checked")
            })
        }
    }
}), angular.module("slingApp").controller("TablesDatatablesCtrl", ["$scope", function(a) {
    a.page = {
        title: "DataTables",
        subtitle: "Place subtitle here..."
    }
}]).controller("BasicDatatableCtrl", ["$scope", "DTOptionsBuilder", "DTColumnBuilder", "$resource", function(a, b, c, d) {
    function e(b, c) {
        return angular.element("td", b).unbind("click"), angular.element("td", b).bind("click", function() {
            a.$apply(function() {
                g.someClickHandler(c)
            }), angular.element(".row_selected").removeClass("row_selected"), angular.element(b).addClass("row_selected")
        }), b
    }

    function f(a) {
        g.message = a.id + " - " + a.firstName
    }
    var g = this;
    g.message = "", g.dtOptions = b.fromFnPromise(function() {
        return d("http://www.filltext.com/?rows=300&id={index}&firstName={firstName}&lastName={lastName}&pretty=true").query().$promise
    }).withPaginationType("full_numbers").withBootstrap().withColReorder().withColReorderCallback(function() {
        console.log("Columns order has been changed with: " + this.fnOrder())
    }).withOption("rowCallback", e), g.dtColumns = [c.newColumn("id").withTitle("ID"), c.newColumn("firstName").withTitle("First name"), c.newColumn("lastName").withTitle("Last name")], g.someClickHandler = f
}]).controller("ChangeDatatableCtrl", ["$scope", "$resource", "DTOptionsBuilder", "DTColumnDefBuilder", function(a, b, c, d) {
    function e(a) {
        return {
            id: a,
            firstName: "Foo" + a,
            lastName: "Bar" + a
        }
    }

    function f() {
        i.persons.push(angular.copy(i.person2Add)), i.person2Add = e(i.person2Add.id + 1)
    }

    function g(a) {
        i.persons.splice(a, 1, angular.copy(i.person2Add)), i.person2Add = e(i.person2Add.id + 1)
    }

    function h(a) {
        i.persons.splice(a, 1)
    }
    var i = this;
    i.persons = b("http://www.filltext.com/?rows=16&id={index}&firstName={firstName}&lastName={lastName}&pretty=true").query(), i.dtOptions = c.newOptions().withPaginationType("full_numbers").withBootstrap(), i.dtColumnDefs = [d.newColumnDef(0), d.newColumnDef(1), d.newColumnDef(2), d.newColumnDef(3).notSortable()], i.person2Add = e(1), i.addPerson = f, i.modifyPerson = g, i.removePerson = h
}]).controller("ResponsiveDatatableCtrl", ["$scope", "DTOptionsBuilder", "DTColumnBuilder", function(a, b, c) {
    var d = this;
    d.dtOptions = b.fromSource("http://www.filltext.com/?rows=300&id={index}&firstName={firstName}&lastName={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true").withPaginationType("full_numbers").withBootstrap().withOption("responsive", !0), d.dtColumns = [c.newColumn("id").withTitle("ID"), c.newColumn("firstName").withTitle("First name"), c.newColumn("lastName").withTitle("Last name"), c.newColumn("tel").withTitle("Phone").withClass("none"), c.newColumn("address").withTitle("Street Address").withClass("none"), c.newColumn("city").withTitle("City").withClass("none"), c.newColumn("state").withTitle("State").withClass("none"), c.newColumn("zip").withTitle("Zip").withClass("none")]
}]).controller("AdvancedDatatableCtrl", ["$scope", "DTOptionsBuilder", "DTColumnBuilder", function(a, b, c) {
    function d(a, b) {
        console.log("The column", a, " has changed its status to", b)
    }
    var e = this;
    e.dtOptions = b.fromSource("http://www.filltext.com/?rows=300&id={index}&firstName={firstName}&lastName={lastName}&pretty=true").withBootstrap().withColVis().withColVisStateChange(d).withColVisOption("aiExclude", [2]).withTableTools("scripts/vendor/datatables/TableTools/swf/copy_csv_xls_pdf.swf").withTableToolsButtons(["copy", "print", {
        sExtends: "collection",
        sButtonText: "Save",
        aButtons: ["csv", "xls", "pdf"]
    }]), e.dtColumns = [c.newColumn("id").withTitle("ID"), c.newColumn("firstName").withTitle("First name"), c.newColumn("lastName").withTitle("Last name")]
}]), angular.module("slingApp").controller("TablesUiGridCtrl", ["$scope", function(a) {
    a.page = {
        title: "UI Grid",
        subtitle: "Place subtitle here..."
    }
}]).controller("BasicUiGridCtrl", ["$scope", "$resource", function(a, b) {
    a.myData = b("http://www.filltext.com/?rows=300&firstName={firstName}&lastName={lastName}&company={business}&employed={bool}&pretty=true").query(), a.gridOptions = {
        data: "myData"
    }
}]).controller("FilterUiGridCtrl", ["$scope", "$resource", "uiGridConstants", function(a, b, c) {
    a.myData = b('http://www.filltext.com/?rows=300&name={firstName}~{lastName}&gender=["male","female"]&company={business}&email={email}&phone={phone}&age={numberRange|18,80}}&pretty=true').query(), a.gridOptions = {
        data: "myData",
        enableFiltering: !0,
        columnDefs: [{
            field: "name"
        }, {
            field: "gender",
            filter: {
                term: "male"
            }
        }, {
            field: "company",
            enableFiltering: !1
        }, {
            field: "email",
            filter: {
                condition: c.filter.ENDS_WITH,
                placeholder: "ends with"
            }
        }, {
            field: "phone",
            filter: {
                condition: function(a, b) {
                    var c = (b + "").replace(/[^\d]/g, "");
                    return c.indexOf(a) >= 0
                }
            }
        }, {
            field: "age",
            filters: [{
                condition: c.filter.GREATER_THAN,
                placeholder: "greater than"
            }, {
                condition: c.filter.LESS_THAN,
                placeholder: "less than"
            }]
        }]
    }
}]).controller("FooterUiGridCtrl", ["$scope", "$resource", "uiGridConstants", function(a, b, c) {
    a.myData = b("http://www.filltext.com/?rows=300&name={firstName}~{lastName}&street={numberLength}&age={numberRange|18,80}&ageMin={numberRange|18,80}&ageMax={numberRange|18,80}&customCellTemplate={numberRange|18,80}&pretty=true").query(), a.gridOptions = {
        showFooter: !0,
        enableFiltering: !0,
        columnDefs: [{
            field: "ageMin",
            width: 60,
            displayName: "Status"
        }, {
            field: "street",
            width: 90,
            displayName: "Date"
        }, {
            field: "customCellTemplate",
            width: 100,
            displayName: "Type"
        }, {
            name: "Label",
            field: "name",
            width: 130,
            displayName: "Label"
        }, {
            name: "Amount",
            field: "age",
            width: 130,
            displayName: "Amount"
        }],
        data: "myData"
    }
}]).controller("ResizeUiGridCtrl", ["$scope", "$resource", function(a, b) {
    a.myData = b('http://www.filltext.com/?rows=300&label={firstName}~{lastName}&gender=["male","female"]&amount={business}&pretty=true').query(), a.gridOptions = {
        enableSorting: !0,
        columnDefs: [{
            field: "Status",
            width: "8%",
            enableColumnResizing: !1
        }, {
            field: "Date",
            width: "12%"
        }, {
            field: "Type",
            width: "20%"
        },
        {
            field: "Label",
            width: "40%"
        },
        {
            field: "Amount",
            width: "20%",
            editableCellTemplate: "ui-grid/dropdownEditor",
            editDropdownValueLabel: "gender",
            editDropdownOptionsArray: [{
                id: 1,
                gender: "male"
            }, {
                id: 2,
                gender: "female"
            }]
        }
    ],
        data: "myData"
    }
}]).controller("EditUiGridCtrl", ["$scope", "$resource", function(a, b) {
    a.myData = b("http://www.filltext.com/?rows=300&id={index}&name={firstName}~{lastName}&age={numberRange|18,80}&gender=[1,2]&registered={date}&isActive={bool}&pretty=true").query(), a.gridOptions = {
        columnDefs: [{
            name: "id",
            enableCellEdit: !1,
            width: "10%"
        }, {
            name: "name",
            displayName: "Name (editable)",
            width: "20%"
        }, {
            name: "age",
            displayName: "Age",
            type: "number",
            width: "10%"
        }, {
            name: "gender",
            displayName: "Gender",
            cellFilter: "mapGender",
            width: "20%",
            editableCellTemplate: "ui-grid/dropdownEditor",
            editDropdownValueLabel: "gender",
            editDropdownOptionsArray: [{
                id: 1,
                gender: "male"
            }, {
                id: 2,
                gender: "female"
            }]
        }, {
            name: "registered",
            displayName: "Registered",
            type: "date",
            cellFilter: 'date:"yyyy-MM-dd"',
            width: "20%"
        }, {
            name: "isActive",
            displayName: "Active",
            type: "boolean",
            width: "10%"
        }],
        data: "myData"
    }, a.msg = {}, a.gridOptions.onRegisterApi = function(b) {
        a.gridApi = b, b.edit.on.afterCellEdit(a, function(b, c, d, e) {
            a.msg.lastCellEdited = "edited row id:" + b.id + " Column:" + c.name + " newValue:" + d + " oldValue:" + e, a.$apply()
        })
    }
}]).filter("mapGender", function() {
    var a = {
        1: "male",
        2: "female"
    };
    return function(b) {
        return b ? a[b] : ""
    }
}).controller("ReorderUiGridCtrl", ["$scope", "$resource", function(a, b) {
    a.myData = b('http://www.filltext.com/?rows=300&name={firstName}~{lastName}&gender=["male","female"]&company={business}&pretty=true').query(), a.gridOptions = {
        data: "myData"
    }
}]), angular.module("slingApp").controller("TablesNgTableCtrl", ["$scope", function(a) {
    a.page = {
        title: "ngTable",
        subtitle: "Place subtitle here..."
    }
}]).controller("TableSortCtrl", ["$scope", "$filter", "ngTableParams", function(a, b, c) {
    var d = [{
        name: "Moroni",
        age: 50
    }, {
        name: "Tiancum",
        age: 43
    }, {
        name: "Jacob",
        age: 27
    }, {
        name: "Nephi",
        age: 29
    }, {
        name: "Enos",
        age: 34
    }, {
        name: "Tiancum",
        age: 43
    }, {
        name: "Jacob",
        age: 27
    }, {
        name: "Nephi",
        age: 29
    }, {
        name: "Enos",
        age: 34
    }, {
        name: "Tiancum",
        age: 43
    }, {
        name: "Jacob",
        age: 27
    }, {
        name: "Nephi",
        age: 29
    }, {
        name: "Enos",
        age: 34
    }, {
        name: "Tiancum",
        age: 43
    }, {
        name: "Jacob",
        age: 27
    }, {
        name: "Nephi",
        age: 29
    }, {
        name: "Enos",
        age: 34
    }];
    a.tableParams = new c({
        page: 1,
        count: 10,
        sorting: {
            name: "asc"
        }
    }, {
        total: d.length,
        getData: function(a, c) {
            var e = c.sorting() ? b("orderBy")(d, c.orderBy()) : d;
            a.resolve(e.slice((c.page() - 1) * c.count(), c.page() * c.count()))
        }
    })
}]).controller("TableFilterCtrl", ["$scope", "$filter", "ngTableParams", function(a, b, c) {
    var d = [{
        name: "Moroni",
        age: 50
    }, {
        name: "Tiancum",
        age: 43
    }, {
        name: "Jacob",
        age: 27
    }, {
        name: "Nephi",
        age: 29
    }, {
        name: "Enos",
        age: 34
    }, {
        name: "Tiancum",
        age: 43
    }, {
        name: "Jacob",
        age: 27
    }, {
        name: "Nephi",
        age: 29
    }, {
        name: "Enos",
        age: 34
    }, {
        name: "Tiancum",
        age: 43
    }, {
        name: "Jacob",
        age: 27
    }, {
        name: "Nephi",
        age: 29
    }, {
        name: "Enos",
        age: 34
    }, {
        name: "Tiancum",
        age: 43
    }, {
        name: "Jacob",
        age: 27
    }, {
        name: "Nephi",
        age: 29
    }, {
        name: "Enos",
        age: 34
    }];
    a.tableParams = new c({
        page: 1,
        count: 10,
        filter: {
            name: "M"
        },
        sorting: {
            name: "asc"
        }
    }, {
        total: d.length,
        getData: function(a, c) {
            var e = c.filter() ? b("filter")(d, c.filter()) : d,
                f = c.sorting() ? b("orderBy")(e, c.orderBy()) : d;
            c.total(f.length), a.resolve(f.slice((c.page() - 1) * c.count(), c.page() * c.count()))
        }
    })
}]).controller("TableEditCtrl", ["$scope", "$filter", "$q", "ngTableParams", function(a, b, c, d) {
    var e = [{
        id: 1,
        name: "Moroni",
        age: 50,
        money: -10
    }, {
        id: 2,
        name: "Tiancum",
        age: 43,
        money: 120
    }, {
        id: 3,
        name: "Jacob",
        age: 27,
        money: 5.5
    }, {
        id: 4,
        name: "Nephi",
        age: 29,
        money: -54
    }, {
        id: 5,
        name: "Enos",
        age: 34,
        money: 110
    }, {
        id: 6,
        name: "Tiancum",
        age: 43,
        money: 1e3
    }, {
        id: 7,
        name: "Jacob",
        age: 27,
        money: -201
    }, {
        id: 8,
        name: "Nephi",
        age: 29,
        money: 100
    }, {
        id: 9,
        name: "Enos",
        age: 34,
        money: -52.5
    }, {
        id: 10,
        name: "Tiancum",
        age: 43,
        money: 52.1
    }, {
        id: 11,
        name: "Jacob",
        age: 27,
        money: 110
    }, {
        id: 12,
        name: "Nephi",
        age: 29,
        money: -55
    }, {
        id: 13,
        name: "Enos",
        age: 34,
        money: 551
    }, {
        id: 14,
        name: "Tiancum",
        age: 43,
        money: -1410
    }, {
        id: 15,
        name: "Jacob",
        age: 27,
        money: 410
    }, {
        id: 16,
        name: "Nephi",
        age: 29,
        money: 100
    }, {
        id: 17,
        name: "Enos",
        age: 34,
        money: -100
    }];
    a.tableParams = new d({
        page: 1,
        count: 10,
        sorting: {
            name: "asc"
        }
    }, {
        total: e.length,
        getData: function(c, d) {
            var f = d.sorting() ? b("orderBy")(e, d.orderBy()) : e;
            c.resolve(a.users = f.slice((d.page() - 1) * d.count(), d.page() * d.count()))
        }
    });
    var f = Array.prototype.indexOf ? function(a, b) {
        return b.indexOf(a)
    } : function(a, b) {
        for (var c = b.length; c--;)
            if (b[c] === a) return c;
        return -1
    };
    a.names = function() {
        var a = c.defer(),
            b = [],
            d = [];
        return angular.forEach(e, function(a) {
            -1 === f(a.name, b) && (b.push(a.name), d.push({
                id: a.name,
                title: a.name
            }))
        }), a.resolve(d), a
    }, a.checkboxes = {
        checked: !1,
        items: {}
    }, a.$watch("checkboxes.checked", function(b) {
        angular.forEach(a.users, function(c) {
            angular.isDefined(c.id) && (a.checkboxes.items[c.id] = b)
        })
    }), a.$watch("checkboxes.items", function() {
        if (a.users) {
            var b = 0,
                c = 0,
                d = a.users.length;
            angular.forEach(a.users, function(d) {
                b += a.checkboxes.items[d.id] || 0, c += !a.checkboxes.items[d.id] || 0
            }), (0 === c || 0 === b) && (a.checkboxes.checked = b === d), angular.element(document.getElementById("select_all")).prop("indeterminate", 0 !== b && 0 !== c)
        }
    }, !0)
}]).controller("TableColumnsCtrl", ["$scope", "$filter", "ngTableParams", function(a, b, c) {
    var d = [{
        name: "Moroni",
        age: 50
    }, {
        name: "Tiancum",
        age: 43
    }, {
        name: "Jacob",
        age: 27
    }, {
        name: "Nephi",
        age: 29
    }, {
        name: "Enos",
        age: 34
    }, {
        name: "Tiancum",
        age: 43
    }, {
        name: "Jacob",
        age: 27
    }, {
        name: "Nephi",
        age: 29
    }, {
        name: "Enos",
        age: 34
    }, {
        name: "Tiancum",
        age: 43
    }, {
        name: "Jacob",
        age: 27
    }, {
        name: "Nephi",
        age: 29
    }, {
        name: "Enos",
        age: 34
    }, {
        name: "Tiancum",
        age: 43
    }, {
        name: "Jacob",
        age: 27
    }, {
        name: "Nephi",
        age: 29
    }, {
        name: "Enos",
        age: 34
    }];
    a.columns = [{
        title: "Name",
        field: "name",
        visible: !0,
        filter: {
            name: "text"
        }
    }, {
        title: "Age",
        field: "age",
        visible: !0
    }], a.tableParams = new c({
        page: 1,
        count: 10,
        filter: {
            name: "M"
        }
    }, {
        total: d.length,
        getData: function(a, c) {
            var e = c.sorting() ? b("orderBy")(d, c.orderBy()) : d;
            a.resolve(e.slice((c.page() - 1) * c.count(), c.page() * c.count()))
        }
    })
}]).controller("TableGroupCtrl", ["$scope", "$filter", "ngTableParams", "$timeout", function(a, b, c, d) {
    a.rows = [{
        name: "Moroni",
        age: 50,
        role: "Administrator",
        date: "00/00/01"
    }, {
        name: "Tiancum",
        age: 43,
        role: "Administrator",
        date: "00/00/01"
    }, {
        name: "Jacob",
        age: 27,
        role: "Administrator",
        date: "00/00/01"
    }, {
        name: "Nephi",
        age: 29,
        role: "Moderator",
        date: "00/00/01"
    }, {
        name: "Enos",
        age: 34,
        role: "User",
        date: "00/00/01"
    }, {
        name: "Tiancum",
        age: 43,
        role: "User",
        date: "00/00/01"
    }, {
        name: "Jacob",
        age: 27,
        role: "User",
        date: "00/00/01"
    }, {
        name: "Nephi",
        age: 29,
        role: "Moderator",
        date: "00/00/01"
    }, {
        name: "Enos",
        age: 34,
        role: "User",
        date: "00/00/01"
    }, {
        name: "Tiancum",
        age: 43,
        role: "Moderator",
        date: "00/00/01"
    }, {
        name: "Jacob",
        age: 27,
        role: "User",
        date: "00/00/01"
    }, {
        name: "Nephi",
        age: 29,
        role: "User",
        date: "00/00/01"
    }, {
        name: "Enos",
        age: 34,
        role: "Moderator",
        date: "00/00/01"
    }, {
        name: "Tiancum",
        age: 43,
        role: "User",
        date: "00/00/01"
    }, {
        name: "Jacob",
        age: 27,
        role: "User",
        date: "00/00/01"
    }, {
        name: "Nephi",
        age: 29,
        role: "User",
        date: "00/00/01"
    }, {
        name: "Enos",
        age: 34,
        role: "User",
        date: "00/00/01"
    }, {
        name: "Micah",
        age: 29,
        role: "Moderator",
        date: "00/00/01"
    }, {
        name: "Viviane",
        age: 34,
        role: "Moderator",
        date: "00/00/01"
    }, {
        name: "Marconi",
        age: 43,
        role: "User",
        date: "00/00/01"
    }, {
        name: "Leonan",
        age: 27,
        role: "Administrator",
        date: "00/00/02"
    }, {
        name: "Arnaldo",
        age: 29,
        role: "User",
        date: "00/00/02"
    }, {
        name: "Zuleide",
        age: 34,
        role: "Moderator",
        date: "00/00/02"
    }], a.groupby = "role", a.tableParams = new c({
        page: 1,
        count: 100
    }, {
        groupBy: a.groupby,
        total: function() {
            return a.rows.length
        },
        getData: function(c, d) {
            var e = d.sorting() ? b("orderBy")(a.rows, a.tableParams.orderBy()) : a.rows;
            c.resolve(e.slice((d.page() - 1) * d.count(), d.page() * d.count()))
        }
    }), d(function() {
        a.$watch("groupby", function(b) {
            a.tableParams.settings().groupBy = b, console.log("Scope Value", a.groupby), console.log("Watch value", this.last), console.log("new table", a.tableParams), a.tableParams.reload()
        })
    }, 0)
}]).controller("TableRowCtrl", ["$scope", "$filter", "ngTableParams", function(a, b, c) {
    var d = [{
        name: "Moroni",
        age: 50
    }, {
        name: "Tiancum",
        age: 43
    }, {
        name: "Jacob",
        age: 27
    }, {
        name: "Nephi",
        age: 29
    }, {
        name: "Enos",
        age: 34
    }, {
        name: "Tiancum",
        age: 43
    }, {
        name: "Jacob",
        age: 27
    }, {
        name: "Nephi",
        age: 29
    }, {
        name: "Enos",
        age: 34
    }, {
        name: "Tiancum",
        age: 43
    }, {
        name: "Jacob",
        age: 27
    }, {
        name: "Nephi",
        age: 29
    }, {
        name: "Enos",
        age: 34
    }, {
        name: "Tiancum",
        age: 43
    }, {
        name: "Jacob",
        age: 27
    }, {
        name: "Nephi",
        age: 29
    }, {
        name: "Enos",
        age: 34
    }];
    a.data = d, a.tableParams = new c({
        page: 1,
        count: 10,
        filter: {},
        sorting: {}
    }, {
        total: d.length,
        getData: function(a, c) {
            var e = c.filter() ? b("filter")(d, c.filter()) : d,
                f = c.sorting() ? b("orderBy")(e, c.orderBy()) : d;
            c.total(f.length), a.resolve(f.slice((c.page() - 1) * c.count(), c.page() * c.count()))
        }
    }), a.changeSelection = function() {}
}]), angular.module("slingApp").controller("TablesSmartTableCtrl", ["$scope", function(a) {
    a.page = {
        title: "Smart Table",
        subtitle: "Place subtitle here..."
    }
}]).controller("BasicTableCtrl", ["$scope", "$filter", function(a) {
    function b(a) {
        var b = c[Math.floor(3 * Math.random())],
            f = d[Math.floor(3 * Math.random())],
            g = e[Math.floor(3 * Math.random())],
            h = Math.floor(2e3 * Math.random());
        return {
            id: a,
            firstName: b,
            lastName: f,
            birthDate: new Date(g),
            balance: h
        }
    }
    var c = ["Laurent", "Blandine", "Olivier", "Max"],
        d = ["Renard", "Faivre", "Frere", "Eponge"],
        e = ["1987-05-21", "1987-04-25", "1955-08-27", "1966-06-06"],
        f = 1;
    for (a.rowCollection = [], f; 5 > f; f++) a.rowCollection.push(b(f));
    a.displayedCollection = [].concat(a.rowCollection), a.addRandomItem = function() {
        a.rowCollection.push(b(f)), f++
    }, a.removeItem = function(b) {
        var c = a.rowCollection.indexOf(b); - 1 !== c && a.rowCollection.splice(c, 1)
    }, a.predicates = ["firstName", "lastName", "birthDate", "balance", "email"], a.selectedPredicate = a.predicates[0]
}]).controller("RowTableCtrl", ["$scope", "$filter", function(a) {
    function b() {
        var a = c[Math.floor(4 * Math.random())],
            b = d[Math.floor(4 * Math.random())],
            e = Math.floor(100 * Math.random()),
            f = a + b + "@whatever.com",
            g = 3e3 * Math.random();
        return {
            firstName: a,
            lastName: b,
            age: e,
            email: f,
            balance: g
        }
    }
    var c = ["Pierre", "Pol", "Jacques", "Robert", "Elisa"],
        d = ["Dupont", "Germain", "Delcourt", "bjip", "Menez"];
    a.itemsByPage = 10, a.rowCollection = [];
    for (var e = 0; 200 > e; e++) a.rowCollection.push(b())
}]).controller("PipeTableCtrl", ["$scope", "$timeout", function(a, b) {
    function c() {
        var a = e[Math.floor(4 * Math.random())],
            b = f[Math.floor(4 * Math.random())],
            c = Math.floor(100 * Math.random()),
            d = a + b + "@whatever.com",
            g = 3e3 * Math.random();
        return {
            firstName: a,
            lastName: b,
            age: c,
            email: d,
            balance: g
        }
    }

    function d() {
        a.rowCollection = [];
        for (var b = 0; 20 > b; b++) a.rowCollection.push(c())
    }
    var e = ["Pierre", "Pol", "Jacques", "Robert", "Elisa"],
        f = ["Dupont", "Germain", "Delcourt", "bjip", "Menez"];
    a.isLoading = !1, a.rowCollection = [], a.callServer = function() {
        a.isLoading = !0, b(function() {
            d(), a.isLoading = !1
        }, 2e3)
    }, d()
}]), angular.module("slingApp").controller("TablesFootableCtrl", ["$scope", function(a) {
    a.page = {
        title: "FooTable",
        subtitle: "Place subtitle here..."
    }, a.users = [{
        name: "Mark",
        lastname: "Otto",
        username: "@mdo",
        phone: "59411994",
        email: "otto@mail.com"
    }, {
        name: "Jacob",
        lastname: "Thornton",
        username: "@fat",
        phone: "55499126",
        email: "jacob@mail.com"
    }, {
        name: "Mary",
        lastname: "the Bird",
        username: "@twitter",
        phone: "3159694",
        email: "mary@mail.com"
    }, {
        name: "Marv",
        lastname: "Bond",
        username: "@marvo",
        phone: "98456152",
        email: "marv@mail.com"
    }, {
        name: "Larry",
        lastname: "Cardl",
        username: "@lurie",
        phone: "69851195",
        email: "larry@mail.com"
    }, {
        name: "Jennifer",
        lastname: "Minelly",
        username: "@jen",
        phone: "396784",
        email: "jenny@mail.com"
    }, {
        name: "Sly",
        lastname: "Stall",
        username: "@sly",
        phone: "9564842",
        email: "sly@mail.com"
    }, {
        name: "Arnold",
        lastname: "Percy",
        username: "@arnie",
        phone: "1236978",
        email: "arnie@mail.com"
    }, {
        name: "Jack",
        lastname: "Black",
        username: "@blacko",
        phone: "63248895",
        email: "blacko@mail.com"
    }]
}]), angular.module("slingApp").controller("ChartsCtrl", ["$scope", function(a) {
    a.page = {
        title: "Charts & Graphs",
        subtitle: "Place subtitle here..."
    }, a.basicData = [{
        year: "2009",
        a: 15,
        b: 5
    }, {
        year: "2010",
        a: 20,
        b: 10
    }, {
        year: "2011",
        a: 35,
        b: 25
    }, {
        year: "2012",
        a: 40,
        b: 30
    }], a.donutData = [{
        label: "Download Sales",
        value: 12
    }, {
        label: "In-Store Sales",
        value: 30
    }, {
        label: "Mail-Order Sales",
        value: 20
    }], a.areaData = [{
        year: "2009",
        a: 10,
        b: 3
    }, {
        year: "2010",
        a: 14,
        b: 5
    }, {
        year: "2011",
        a: 8,
        b: 2
    }, {
        year: "2012",
        a: 20,
        b: 15
    }]
}]).controller("LineChartCtrl", ["$scope", function(a) {
    a.dataset = [{
        data: [
            [1, 5.3],
            [2, 5.9],
            [3, 7.2],
            [4, 8],
            [5, 7],
            [6, 6.5],
            [7, 6.2],
            [8, 6.7],
            [9, 7.2],
            [10, 7],
            [11, 6.8],
            [12, 7]
        ],
        label: "Sales",
        points: {
            show: !0,
            radius: 6
        },
        splines: {
            show: !0,
            tension: .45,
            lineWidth: 5,
            fill: 0
        }
    }, {
        data: [
            [1, 6.6],
            [2, 7.4],
            [3, 8.6],
            [4, 9.4],
            [5, 8.3],
            [6, 7.9],
            [7, 7.2],
            [8, 7.7],
            [9, 8.9],
            [10, 8.4],
            [11, 8],
            [12, 8.3]
        ],
        label: "Orders",
        points: {
            show: !0,
            radius: 6
        },
        splines: {
            show: !0,
            tension: .45,
            lineWidth: 5,
            fill: 0
        }
    }], a.options = {
        colors: ["#a2d200", "#cd97eb"],
        series: {
            shadowSize: 0
        },
        xaxis: {
            font: {
                color: "#ccc"
            },
            position: "bottom",
            ticks: [
                [1, "Jan"],
                [2, "Feb"],
                [3, "Mar"],
                [4, "Apr"],
                [5, "May"],
                [6, "Jun"],
                [7, "Jul"],
                [8, "Aug"],
                [9, "Sep"],
                [10, "Oct"],
                [11, "Nov"],
                [12, "Dec"]
            ]
        },
        yaxis: {
            font: {
                color: "#ccc"
            }
        },
        grid: {
            hoverable: !0,
            clickable: !0,
            borderWidth: 0,
            color: "#ccc"
        },
        tooltip: !0,
        tooltipOpts: {
            content: "%s: %y.4",
            defaultTheme: !1,
            shifts: {
                x: 0,
                y: 20
            }
        }
    }
}]).controller("BarChartCtrl", ["$scope", function(a) {
    a.data2 = [];
    for (var b = 0; 20 > b; ++b) a.data2.push([b, Math.sin(b + .1)]);
    a.dataset = [{
        data: a.data2,
        label: "Satisfaction",
        color: "#e05d6f"
    }], a.options = {
        series: {
            shadowSize: 0
        },
        bars: {
            show: !0,
            barWidth: .6,
            lineWidth: 0,
            fillColor: {
                colors: [{
                    opacity: .8
                }, {
                    opacity: .8
                }]
            }
        },
        xaxis: {
            font: {
                color: "#ccc"
            }
        },
        yaxis: {
            font: {
                color: "#ccc"
            },
            min: -2,
            max: 2
        },
        grid: {
            hoverable: !0,
            clickable: !0,
            borderWidth: 0,
            color: "#ccc"
        },
        tooltip: !0
    }
}]).controller("OrderedChartCtrl", ["$scope", function(a) {
    a.dataset = [{
        data: [
            [10, 50],
            [20, 80],
            [30, 60],
            [40, 40]
        ],
        label: "A"
    }, {
        data: [
            [10, 30],
            [20, 50],
            [30, 70],
            [40, 50]
        ],
        label: "B"
    }, {
        data: [
            [10, 40],
            [20, 60],
            [30, 90],
            [40, 60]
        ],
        label: "C"
    }], a.options = {
        series: {
            shadowSize: 0
        },
        bars: {
            show: !0,
            fill: !0,
            lineWidth: 0,
            fillColor: {
                colors: [{
                    opacity: .6
                }, {
                    opacity: .8
                }]
            },
            order: 1,
            colors: ["#428bca", "#d9534f", "#A40778"]
        },
        xaxis: {
            font: {
                color: "#ccc"
            }
        },
        yaxis: {
            font: {
                color: "#ccc"
            }
        },
        grid: {
            hoverable: !0,
            clickable: !0,
            borderWidth: 0,
            color: "#ccc"
        },
        tooltip: !0
    }
}]).controller("StackedChartCtrl", ["$scope", function(a) {
    a.dataset = [{
        data: [
            [10, 50],
            [20, 80],
            [30, 60],
            [40, 40]
        ],
        label: "A"
    }, {
        data: [
            [10, 30],
            [20, 50],
            [30, 70],
            [40, 50]
        ],
        label: "B"
    }, {
        data: [
            [10, 40],
            [20, 60],
            [30, 90],
            [40, 60]
        ],
        label: "C"
    }], a.options = {
        series: {
            shadowSize: 0,
            stack: !0
        },
        bars: {
            show: !0,
            fill: !0,
            lineWidth: 0,
            fillColor: {
                colors: [{
                    opacity: .6
                }, {
                    opacity: .8
                }]
            },
            colors: ["#428bca", "#d9534f", "#A40778"]
        },
        xaxis: {
            font: {
                color: "#ccc"
            }
        },
        yaxis: {
            font: {
                color: "#ccc"
            }
        },
        grid: {
            hoverable: !0,
            clickable: !0,
            borderWidth: 0,
            color: "#ccc"
        },
        tooltip: !0
    }
}]).controller("CombinedChartCtrl", ["$scope", function(a) {
    a.dataset = [{
        data: [
            [0, 8],
            [1, 15],
            [2, 16],
            [3, 14],
            [4, 16],
            [5, 18],
            [6, 17],
            [7, 15],
            [8, 12],
            [9, 13]
        ],
        label: "Unique Visits",
        points: {
            show: !0,
            radius: 3
        },
        splines: {
            show: !0,
            tension: .45,
            lineWidth: 4,
            fill: 0
        }
    }, {
        data: [
            [0, 5],
            [1, 9],
            [2, 10],
            [3, 8],
            [4, 9],
            [5, 12],
            [6, 14],
            [7, 13],
            [8, 10],
            [9, 12]
        ],
        label: "Page Views",
        bars: {
            show: !0,
            barWidth: .4,
            lineWidth: 0,
            fillColor: {
                colors: [{
                    opacity: .6
                }, {
                    opacity: .8
                }]
            }
        }
    }], a.options = {
        colors: ["#16a085", "#FF0066"],
        series: {
            shadowSize: 0
        },
        xaxis: {
            font: {
                color: "#ccc"
            }
        },
        yaxis: {
            font: {
                color: "#ccc"
            }
        },
        grid: {
            hoverable: !0,
            clickable: !0,
            borderWidth: 0,
            color: "#ccc"
        },
        tooltip: !0,
        tooltipOpts: {
            content: "%s of %x.1 is %y.4",
            defaultTheme: !1,
            shifts: {
                x: 0,
                y: 20
            }
        }
    }
}]).controller("PieChartCtrl", ["$scope", function(a) {
    a.dataset = [{
        label: "Chrome",
        data: 30
    }, {
        label: "Firefox",
        data: 15
    }, {
        label: "Safari",
        data: 15
    }, {
        label: "IE",
        data: 10
    }, {
        label: "Opera",
        data: 5
    }, {
        label: "Other",
        data: 10
    }], a.options = {
        series: {
            pie: {
                show: !0,
                innerRadius: 0,
                stroke: {
                    width: 0
                },
                label: {
                    show: !0,
                    threshold: .05
                }
            }
        },
        colors: ["#428bca", "#5cb85c", "#f0ad4e", "#d9534f", "#5bc0de", "#616f77"],
        grid: {
            hoverable: !0,
            clickable: !0,
            borderWidth: 0,
            color: "#ccc"
        },
        tooltip: !0,
        tooltipOpts: {
            content: "%s: %p.0%"
        }
    }
}]).controller("DonutChartCtrl", ["$scope", function(a) {
    a.dataset = [{
        label: "Chrome",
        data: 30
    }, {
        label: "Firefox",
        data: 15
    }, {
        label: "Safari",
        data: 15
    }, {
        label: "IE",
        data: 10
    }, {
        label: "Opera",
        data: 5
    }, {
        label: "Other",
        data: 10
    }], a.options = {
        series: {
            pie: {
                show: !0,
                innerRadius: .5,
                stroke: {
                    width: 0
                },
                label: {
                    show: !0,
                    threshold: .05
                }
            }
        },
        colors: ["#428bca", "#5cb85c", "#f0ad4e", "#d9534f", "#5bc0de", "#616f77"],
        grid: {
            hoverable: !0,
            clickable: !0,
            borderWidth: 0,
            color: "#ccc"
        },
        tooltip: !0,
        tooltipOpts: {
            content: "%s: %p.0%"
        }
    }
}]).controller("RealtimeChartCtrl", ["$scope", "$interval", function(a, b) {
    function c() {
        for (d.length > 0 && (d = d.slice(1)); d.length < e;) {
            var a = d.length > 0 ? d[d.length - 1] : 50,
                b = a + 10 * Math.random() - 5;
            0 > b ? b = 0 : b > 100 && (b = 100), d.push(b)
        }
        for (var c = [], f = 0; f < d.length; ++f) c.push([f, d[f]]);
        return c
    }
    var d = [],
        e = 300,
        f = 300;
    b(function() {
        a.dataset = [{
            data: c()
        }], c()
    }, f), a.dataset = [{
        data: c()
    }], a.options = {
        colors: ["#a2d200"],
        series: {
            shadowSize: 0,
            lines: {
                show: !0,
                fill: .1
            }
        },
        xaxis: {
            font: {
                color: "#ccc"
            },
            tickFormatter: function() {
                return ""
            }
        },
        yaxis: {
            font: {
                color: "#ccc"
            },
            min: 0,
            max: 110
        },
        grid: {
            hoverable: !0,
            clickable: !0,
            borderWidth: 0,
            color: "#ccc"
        },
        tooltip: !0,
        tooltipOpts: {
            content: "%y%",
            defaultTheme: !1,
            shifts: {
                x: 0,
                y: 20
            }
        }
    }
}]).controller("RickshawChartCtrl", ["$scope", function(a) {
    a.renderers = [{
        id: "area",
        name: "Area"
    }, {
        id: "line",
        name: "Line"
    }, {
        id: "bar",
        name: "Bar"
    }, {
        id: "scatterplot",
        name: "Scatterplot"
    }], a.palettes = ["spectrum14", "spectrum2000", "spectrum2001", "colorwheel", "cool", "classic9", "munin"], a.rendererChanged = function(b) {
        a["options" + b] = {
            renderer: a["renderer" + b].id
        }
    }, a.paletteChanged = function(b) {
        a["features" + b] = {
            palette: a["palette" + b]
        }
    }, a.changeSeriesData = function(b) {
        for (var c = [], d = 0; 3 > d; d++) {
            for (var e = {
                    name: "Series " + (d + 1),
                    data: []
                }, f = 0; 10 > f; f++) e.data.push({
                x: f,
                y: 20 * Math.random()
            });
            c.push(e), a["series" + b][d] = e
        }
    }, a.options1 = {
        renderer: "area"
    }, a.series1 = [{
        name: "Series 1",
        color: "steelblue",
        data: [{
            x: 0,
            y: 23
        }, {
            x: 1,
            y: 15
        }, {
            x: 2,
            y: 79
        }, {
            x: 3,
            y: 31
        }, {
            x: 4,
            y: 60
        }]
    }, {
        name: "Series 2",
        color: "lightblue",
        data: [{
            x: 0,
            y: 30
        }, {
            x: 1,
            y: 20
        }, {
            x: 2,
            y: 64
        }, {
            x: 3,
            y: 50
        }, {
            x: 4,
            y: 15
        }]
    }], a.options2 = {
        renderer: "line"
    }, a.features2 = {
        hover: {
            xFormatter: function(a) {
                return "t=" + a
            },
            yFormatter: function(a) {
                return "$" + a
            }
        }
    }, a.series2 = [{
        name: "Series 1",
        color: "steelblue",
        data: [{
            x: 0,
            y: 23
        }, {
            x: 1,
            y: 15
        }, {
            x: 2,
            y: 79
        }, {
            x: 3,
            y: 31
        }, {
            x: 4,
            y: 60
        }]
    }, {
        name: "Series 2",
        color: "lightblue",
        data: [{
            x: 0,
            y: 30
        }, {
            x: 1,
            y: 20
        }, {
            x: 2,
            y: 64
        }, {
            x: 3,
            y: 50
        }, {
            x: 4,
            y: 15
        }]
    }], a.options3 = {
        renderer: "bar"
    }, a.features3 = {
        palette: "colorwheel"
    }, a.series3 = [{
        name: "Series 1",
        data: [{
            x: 0,
            y: 23
        }, {
            x: 1,
            y: 15
        }, {
            x: 2,
            y: 79
        }, {
            x: 3,
            y: 31
        }, {
            x: 4,
            y: 60
        }]
    }, {
        name: "Series 2",
        data: [{
            x: 0,
            y: 30
        }, {
            x: 1,
            y: 20
        }, {
            x: 2,
            y: 64
        }, {
            x: 3,
            y: 50
        }, {
            x: 4,
            y: 15
        }]
    }], a.options4 = {
        renderer: "bar"
    }, a.features4 = {
        palette: "colorwheel",
        xAxis: {}
    }, a.series4 = [{
        name: "Series 1",
        data: [{
            x: 0,
            y: 230
        }, {
            x: 1,
            y: 1500
        }, {
            x: 2,
            y: 790
        }, {
            x: 3,
            y: 310
        }, {
            x: 4,
            y: 600
        }]
    }, {
        name: "Series 2",
        data: [{
            x: 0,
            y: 300
        }, {
            x: 1,
            y: 2e3
        }, {
            x: 2,
            y: 640
        }, {
            x: 3,
            y: 500
        }, {
            x: 4,
            y: 150
        }]
    }], a.options5 = {
        renderer: "bar"
    }, a.features5 = {
        palette: "colorwheel",
        yAxis: {
            tickFormat: "formatKMBT"
        }
    }, a.series5 = [{
        name: "Series 1",
        data: [{
            x: 0,
            y: 230
        }, {
            x: 1,
            y: 1500
        }, {
            x: 2,
            y: 790
        }, {
            x: 3,
            y: 310
        }, {
            x: 4,
            y: 600
        }]
    }, {
        name: "Series 2",
        data: [{
            x: 0,
            y: 300
        }, {
            x: 1,
            y: 2e3
        }, {
            x: 2,
            y: 640
        }, {
            x: 3,
            y: 500
        }, {
            x: 4,
            y: 150
        }]
    }], a.options6 = {
        renderer: "line"
    }, a.features6 = {
        palette: "colorwheel",
        legend: {
            toggle: !0,
            highlight: !0
        }
    }, a.series6 = [{
        name: "Series 1",
        data: [{
            x: 0,
            y: 230
        }, {
            x: 1,
            y: 1500
        }, {
            x: 2,
            y: 790
        }, {
            x: 3,
            y: 310
        }, {
            x: 4,
            y: 600
        }]
    }, {
        name: "Series 2",
        data: [{
            x: 0,
            y: 300
        }, {
            x: 1,
            y: 2e3
        }, {
            x: 2,
            y: 640
        }, {
            x: 3,
            y: 500
        }, {
            x: 4,
            y: 150
        }]
    }], a.series0 = [], a.renderer0 = a.renderers[0], a.palette0 = a.palettes[0], a.rendererChanged(0), a.paletteChanged(0), a.changeSeriesData(0)
}]).controller("RickshawRealtimeChartCtrl", ["$scope", "$interval", function(a, b) {
    a.options1 = {
        renderer: "area"
    };
    for (var c = [
            [],
            []
        ], d = new Rickshaw.Fixtures.RandomData(50), e = 0; 50 > e; e++) d.addData(c);
    var f = 800;
    b(function() {
        d.removeData(c), d.addData(c)
    }, f), a.series1 = [{
        name: "Series 1",
        color: "steelblue",
        data: c[0]
    }, {
        name: "Series 2",
        color: "lightblue",
        data: c[1]
    }], a.features1 = {
        hover: {
            xFormatter: function(a) {
                return new Date(1e3 * a).toUTCString()
            },
            yFormatter: function(a) {
                return Math.floor(a) + "%"
            }
        }
    }
}]).controller("SparklineChartCtrl", ["$scope", function(a) {
    a.lineChart = {
        data: [15, 16, 18, 17, 16, 18, 25, 26, 23],
        options: {
            type: "line",
            width: "100%",
            height: "250px",
            fillColor: "rgba(34, 190, 239, .3)",
            lineColor: "rgba(34, 190, 239, .5)",
            lineWidth: 2,
            spotRadius: 5,
            valueSpots: [5, 6, 8, 7, 6, 8, 5, 4, 7],
            minSpotColor: "#eaf9fe",
            maxSpotColor: "#00a3d8",
            highlightSpotColor: "#00a3d8",
            highlightLineColor: "#bec6ca",
            normalRangeMin: 0
        }
    }, a.barChart = {
        data: [5, 6, 7, 2, 1, -4, -2, 4, 6, 8],
        options: {
            width: "100%",
            type: "bar",
            height: "250px",
            barWidth: "30px",
            barSpacing: 10,
            barColor: "#16a085",
            negBarColor: "#FF0066"
        }
    }, a.pieChart = {
        data: [5, 10, 20, 15],
        options: {
            type: "pie",
            width: "auto",
            height: "250px",
            sliceColors: ["#22beef", "#a2d200", "#ffc100", "#ff4a43"]
        }
    }
}]).controller("EasypiechartCtrl", ["$scope", function(a) {
    a.easypiechart = {
        percent: 65,
        options: {
            animate: {
                duration: 3e3,
                enabled: !0
            },
            barColor: "#1693A5",
            lineCap: "round",
            size: 180,
            lineWidth: 5
        }
    }, a.easypiechart2 = {
        percent: 30,
        options: {
            animate: {
                duration: 3e3,
                enabled: !0
            },
            barColor: "#A40778",
            scaleColor: !1,
            lineCap: "round",
            size: 180,
            lineWidth: 5
        }
    }, a.easypiechart3 = {
        percent: 78,
        options: {
            animate: {
                duration: 3e3,
                enabled: !0
            },
            barColor: "#e05d6f",
            lineCap: "butt",
            size: 220,
            lineWidth: 10
        }
    }, a.easypiechart4 = {
        percent: 60,
        options: {
            animate: {
                duration: 3e3,
                enabled: !0
            },
            barColor: "#5cb85c",
            lineCap: "round",
            scaleColor: !1,
            size: 220,
            lineWidth: 10
        }
    }
}]).controller("GaugeChartCtrl", ["$scope", function(a) {
    a.gaugeChart1 = {
        data: {
            maxValue: 3e3,
            animationSpeed: 40,
            val: 658
        },
        options: {
            lines: 12,
            angle: .15,
            lineWidth: .44,
            pointer: {
                length: 1,
                strokeWidth: .035,
                color: "#000000"
            },
            limitMax: "false",
            colorStart: "#6FADCF",
            colorStop: "#8FC0DA",
            strokeColor: "#f2f2f2",
            generateGradient: !0,
            percentColors: [
                [0, "#1693A5"],
                [1, "#1693A5"]
            ]
        }
    }, a.gaugeChart2 = {
        data: {
            maxValue: 3e3,
            animationSpeed: 40,
            val: 1258
        },
        options: {
            lines: 12,
            angle: .1,
            lineWidth: .4,
            pointer: {
                length: .9,
                strokeWidth: .035,
                color: "#000000"
            },
            limitMax: "false",
            colorStart: "#6FADCF",
            colorStop: "#8FC0DA",
            strokeColor: "#f2f2f2",
            generateGradient: !0,
            percentColors: [
                [0, "#FF0066"],
                [1, "#FF0066"]
            ]
        }
    }, a.gaugeChart3 = {
        data: {
            maxValue: 3e3,
            animationSpeed: 40,
            val: 1485
        },
        options: {
            lines: 12,
            angle: .05,
            lineWidth: .34,
            pointer: {
                length: .8,
                strokeWidth: .035,
                color: "#000000"
            },
            limitMax: "false",
            colorStart: "#6FADCF",
            colorStop: "#8FC0DA",
            strokeColor: "#f2f2f2",
            generateGradient: !0,
            percentColors: [
                [0, "#428bca"],
                [1, "#428bca"]
            ]
        }
    }, a.gaugeChart4 = {
        data: {
            maxValue: 3e3,
            animationSpeed: 40,
            val: 2514
        },
        options: {
            lines: 12,
            angle: 0,
            lineWidth: .3,
            pointer: {
                length: .7,
                strokeWidth: .035,
                color: "#000000"
            },
            limitMax: "false",
            colorStart: "#6FADCF",
            colorStop: "#8FC0DA",
            strokeColor: "#f2f2f2",
            generateGradient: !0,
            percentColors: [
                [0, "#f0ad4e"],
                [1, "#f0ad4e"]
            ]
        }
    }
}]), angular.module("slingApp").directive("morrisLineChart", function() {
    return {
        restrict: "A",
        scope: {
            lineData: "=",
            lineXkey: "@",
            lineYkeys: "@",
            lineLabels: "@",
            lineColors: "@"
        },
        link: function(a, b) {
            var c, d;
            c = void 0 === a.lineColors || "" === a.lineColors ? null : JSON.parse(a.lineColors), a.$watch("lineData", function() {
                a.lineData && (d ? d.setData(a.lineData) : d = new Morris.Line({
                    element: b,
                    data: a.lineData,
                    xkey: a.lineXkey,
                    ykeys: JSON.parse(a.lineYkeys),
                    labels: JSON.parse(a.lineLabels),
                    lineColors: c || ["#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
                    resize: !0
                }))
            })
        }
    }
}).directive("morrisAreaChart", function() {
    return {
        restrict: "A",
        scope: {
            lineData: "=",
            lineXkey: "@",
            lineYkeys: "@",
            lineLabels: "@",
            lineColors: "@",
            lineWidth: "@",
            fillOpacity: "@",
            showGrid: "@"
        },
        link: function(a, b) {
            var c, d;
            c = void 0 === a.lineColors || "" === a.lineColors ? null : JSON.parse(a.lineColors), a.$watch("lineData", function() {
                a.lineData && (d ? d.setData(a.lineData) : d = new Morris.Area({
                    element: b,
                    data: a.lineData,
                    xkey: a.lineXkey,
                    ykeys: JSON.parse(a.lineYkeys),
                    labels: JSON.parse(a.lineLabels),
                    lineColors: c || ["#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
                    lineWidth: a.lineWidth || "0",
                    fillOpacity: a.fillOpacity || "0.8",
                    grid: a.showGrid || !1,
                    resize: !0
                }))
            })
        }
    }
}).directive("morrisBarChart", function() {
    return {
        restrict: "A",
        scope: {
            barData: "=",
            barXkey: "@",
            barYkeys: "@",
            barLabels: "@",
            barColors: "@"
        },
        link: function(a, b) {
            var c, d;
            c = void 0 === a.barColors || "" === a.barColors ? null : JSON.parse(a.barColors), a.$watch("barData", function() {
                a.barData && (d ? d.setData(a.barData) : d = new Morris.Bar({
                    element: b,
                    data: a.barData,
                    xkey: a.barXkey,
                    ykeys: JSON.parse(a.barYkeys),
                    labels: JSON.parse(a.barLabels),
                    barColors: c || ["#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
                    xLabelMargin: 2,
                    resize: !0
                }))
            })
        }
    }
}).directive("morrisDonutChart", function() {
    return {
        restrict: "A",
        scope: {
            donutData: "=",
            donutColors: "@"
        },
        link: function(a, b) {
            var c, d;
            c = void 0 === a.donutColors || "" === a.donutColors ? null : JSON.parse(a.donutColors), a.$watch("donutData", function() {
                a.donutData && (d ? d.setData(a.donutData) : d = new Morris.Donut({
                    element: b,
                    data: a.donutData,
                    colors: c || ["#0B62A4", "#3980B5", "#679DC6", "#95BBD7", "#B0CCE1", "#095791", "#095085", "#083E67", "#052C48", "#042135"],
                    resize: !0
                }))
            })
        }
    }
}), angular.module("slingApp").directive("gaugeChart", [function() {
    return {
        restrict: "A",
        scope: {
            data: "=",
            options: "="
        },
        link: function(a, b) {
            var c = a.data,
                d = a.options,
                e = new Gauge(b[0]).setOptions(d);
            e.maxValue = c.maxValue, e.animationSpeed = c.animationSpeed, e.set(c.val)
        }
    }
}]), angular.module("slingApp").directive("wrapOwlcarousel", function() {
    return {
        restrict: "E",
        link: function(a, b) {
            var c = a.$eval(angular.element(b).attr("data-options"));
            angular.element(b).owlCarousel(c)
        }
    }
}), angular.module("slingApp").directive("todoFocus", ["$timeout", function(a) {
    return {
        restrict: "A",
        link: function(b, c, d) {
            b.$watch(d.todoFocus, function(b) {
                b && a(function() {
                    c[0].focus()
                }, 0, !1)
            })
        }
    }
}]), angular.module("slingApp").directive("todoEscape", function() {
    var a = 27;
    return {
        restrict: "A",
        link: function(b, c, d) {
            c.bind("keydown", function(c) {
                c.keyCode === a && b.$apply(d.todoEscape)
            })
        }
    }
}), angular.module("slingApp").directive("clock", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            radius: "@",
            zone: "@?",
            lightFill: "@?",
            darkFill: "@?"
        },
        template: '<div class=\'bloc-clock\' ng-style=\'divStyle()\'>\n  <svg xmlns="http://www.w3.org/2000/svg"\n   style="padding: 10px 0"\n    width="100%"\n       height="100%"\n       viewBox="0 0 200 200">\n    <g class=\'face\' style=\'stroke: black; stroke-width: 0px;\'>\n      <g>\n        <circle style="stroke: rgba(255,255,255,.5); fill: rgba(255,255,255,0); stroke-width: 6px;"\n                cx="100"\n                cy="100"\n                r="100"/>\n        <line x1="100"\n              x2="100"\n              y1="10"\n              y2="0"\n              />\n        <line x1="150"\n              x2="145"\n              y1="13"\n              y2="22"\n              />\n        <line x1="150"\n              x2="145"\n              y1="13"\n              y2="22"\n              />\n        <line x1="187"\n              x2="178"\n              y1="50"\n              y2="55"\n              />\n        <line x1="190"\n              x2="200"\n              y1="100"\n              y2="100"\n              />\n        <line x1="187"\n              x2="178"\n              y1="150"\n              y2="145"\n              />\n        <line x1="150"\n              x2="145"\n              y1="187"\n              y2="178"\n              />\n        <line x1="100"\n              x2="100"\n              y1="190"\n              y2="200"\n              />\n        <line x1="50"\n              x2="55"\n              y1="187"\n              y2="178"\n              />\n        <line x1="13"\n              x2="22"\n              y1="150"\n              y2="145"\n              />\n        <line x1="0"\n              x2="10"\n              y1="100"\n              y2="100"\n              />\n        <line x1="13"\n              x2="22"\n              y1="50"\n              y2="55"\n              />\n        <line x1="50"\n              x2="55"\n              y1="13"\n              y2="22"\n              />\n      </g>\n      <g>\n          <line x1="100"\n                y1="100"\n                x2="100"\n                y2="45"\n                style="stroke-width: 6px"\n                class="hourhand"/>\n          <line x1="100"\n                y1="100"\n                x2="100"\n                y2="15"\n                style="stroke-width: 6px"\n                class="minutehand" />\n          <line x1="100"\n                y1="100"\n                x2="100"\n                y2="5"\n                style="stroke-width: 3px; stroke: rgba(255,255,255,.5)"\n                class="secondhand"/>\n      <circle cx="100"\n cy="100"\n r="8"\n fill="white"\n />\n   </g>\n    </g>\n  </svg>\n</div>',
        link: function(a, b) {
            var c, d, e, f;
            a.divStyle = function() {
                return {
                    width: a.w(),
                    height: a.w(),
                    margin: "0 auto"
                }
            }, a.w = function() {
                return 2 * a.radius
            }, e = function(a, b, c, e) {
                var f;
                return e = e || b, f = c || 1, e + b * f * Math.cos(d(a))
            }, f = function(a, b, c, e) {
                var f;
                return e = e || b, f = c || 1, e + b * f * Math.sin(d(a))
            }, d = function(a) {
                var b;
                return b = Math.PI / 2, a * Math.PI / 180 - b
            }, c = function() {
                var c, d, g, h, i, j, k, l, m, n, o;
                h = .95, g = .85, d = .55, o = a.zone ? moment.tz(new Date, a.zone) : moment(), m = 100, c = b.find("circle"), l = Number(o.format("H")), i = l >= 18 || 6 > l, n = "rgba(255,255,255,1)", b.find("line").not(".secondhand").css("stroke", n), j = function(a, b, c, d) {
                    var g, h, i;
                    g = d * b, h = e(g, m, c, m), i = f(g, m, c, m), a.attr("x1", m), a.attr("y1", m), a.attr("x2", h), a.attr("y2", i)
                }, k = o.hour() + o.minute() / 60, j(angular.element(b).find(".secondhand"), o.second(), h, 6), j(angular.element(b).find(".minutehand"), o.minute(), g, 6), j(angular.element(b).find(".hourhand"), k, d, 30)
            }, c(), setInterval(c, 1e3)
        }
    }
}), angular.module("slingApp").controller("WidgetsCtrl", ["$scope", function(a) {
    a.page = {
        title: "Widgets",
        subtitle: "Place subtitle here..."
    }
}]).controller("TodoWidgetCtrl", ["$scope", function(a) {
    a.todos = [{
        text: "Release update",
        completed: !1
    }, {
        text: "Make a backup",
        completed: !1
    }, {
        text: "Send e-mail to Ici",
        completed: !0
    }, {
        text: "Buy tickets",
        completed: !1
    }, {
        text: "Resolve issues",
        completed: !1
    }, {
        text: "Compile new version",
        completed: !1
    }];
    var b = a.todos;
    a.addTodo = function() {
        a.todos.push({
            text: a.todo,
            completed: !1
        }), a.todo = ""
    }, a.removeTodo = function(a) {
        b.splice(b.indexOf(a), 1)
    }, a.editTodo = function(b) {
        a.editedTodo = b, a.originalTodo = angular.extend({}, b)
    }, a.doneEditing = function(b) {
        a.editedTodo = null, b.text = b.text.trim(), b.text || a.removeTodo(b)
    }, a.revertEditing = function(c) {
        b[b.indexOf(c)] = a.originalTodo, a.doneEditing(a.originalTodo)
    }
}]).controller("CalendarWidgetCtrl", ["$scope", function(a) {
    a.today = function() {
        a.dt = new Date
    }, a.today(), a.clear = function() {
        a.dt = null
    }, a.disabled = function(a, b) {
        return "day" === b && (0 === a.getDay() || 6 === a.getDay())
    }, a.toggleMin = function() {
        a.minDate = a.minDate ? null : new Date
    }, a.toggleMin(), a.open = function(b) {
        b.preventDefault(), b.stopPropagation(), a.opened = !0
    }, a.dateOptions = {
        formatYear: "yy",
        startingDay: 1,
        "class": "datepicker"
    }, a.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "dd.MM.yyyy", "shortDate"], a.format = a.formats[0]
}]).controller("MessageWidgetCtrl", ["$scope", function(a) {
    a.availableRecipients = ["RLake@nec.gov", "RBastian@lacus.io", "VMonroe@orci.ly", "YMckenzie@mattis.gov", "VMcmyne@molestie.org", "BKliban@aliquam.gov", "HHellems@tincidunt.org", "KAngell@sollicitudin.ly"], a.recipients = {}, a.recipients.emails = ["RLake@nec.gov", "VMonroe@orci.ly"], a.messageContent = '<h2>Try me!</h2><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p><p><b>Code at GitHub:</b> <a href="https://github.com/fraywing/textAngular">Here</a> </p>'
}]).controller("AppointmentsWidgetCtrl", ["$scope", function(a) {
    a.date = new Date
}]), angular.module("slingApp").directive("activeToggle", function() {
    return {
        restrict: "A",
        link: function(a, b, c) {
            b.on("click", function() {
                var a = angular.element(c.target) || Array(b);
                b.hasClass("active") ? (b.removeClass("active"), a.removeClass("show")) : (b.addClass("active"), a.addClass("show"))
            })
        }
    }
}), angular.module("slingApp").directive("vectorMap", function() {
    return {
        restrict: "AE",
        scope: {
            options: "="
        },
        link: function(a, b) {
            var c = a.options;
            b.vectorMap(c)
        }
    }
}), angular.module("slingApp").controller("VectorMapCtrl", ["$scope", function(a) {
    a.page = {
        title: "Vector Maps",
        subtitle: "Place subtitle here..."
    };
    var b = {
        af: "16.63",
        al: "11.58",
        dz: "158.97",
        ao: "85.81",
        ag: "1.1",
        ar: "351.02",
        am: "8.83",
        au: "1219.72",
        at: "366.26",
        az: "52.17",
        bs: "7.54",
        bh: "21.73",
        bd: "105.4",
        bb: "3.96",
        by: "52.89",
        be: "461.33",
        bz: "1.43",
        bj: "6.49",
        bt: "1.4",
        bo: "19.18",
        ba: "16.2",
        bw: "12.5",
        br: "2023.53",
        bn: "11.96",
        bg: "44.84",
        bf: "8.67",
        bi: "1.47",
        kh: "11.36",
        cm: "21.88",
        ca: "1563.66",
        cv: "1.57",
        cf: "2.11",
        td: "7.59",
        cl: "199.18",
        cn: "5745.13",
        co: "283.11",
        km: "0.56",
        cd: "12.6",
        cg: "11.88",
        cr: "35.02",
        ci: "22.38",
        hr: "59.92",
        cy: "22.75",
        cz: "195.23",
        dk: "304.56",
        dj: "1.14",
        dm: "0.38",
        "do": "50.87",
        ec: "61.49",
        eg: "216.83",
        sv: "21.8",
        gq: "14.55",
        er: "2.25",
        ee: "19.22",
        et: "30.94",
        fj: "3.15",
        fi: "231.98",
        fr: "2555.44",
        ga: "12.56",
        gm: "1.04",
        ge: "11.23",
        de: "3305.9",
        gh: "18.06",
        gr: "305.01",
        gd: "0.65",
        gt: "40.77",
        gn: "4.34",
        gw: "0.83",
        gy: "2.2",
        ht: "6.5",
        hn: "15.34",
        hk: "226.49",
        hu: "132.28",
        is: "12.77",
        "in": "1430.02",
        id: "695.06",
        ir: "337.9",
        iq: "84.14",
        ie: "204.14",
        il: "201.25",
        it: "2036.69",
        jm: "13.74",
        jp: "5390.9",
        jo: "27.13",
        kz: "129.76",
        ke: "32.42",
        ki: "0.15",
        kr: "986.26",
        undefined: "5.73",
        kw: "117.32",
        kg: "4.44",
        la: "6.34",
        lv: "23.39",
        lb: "39.15",
        ls: "1.8",
        lr: "0.98",
        ly: "77.91",
        lt: "35.73",
        lu: "52.43",
        mk: "9.58",
        mg: "8.33",
        mw: "5.04",
        my: "218.95",
        mv: "1.43",
        ml: "9.08",
        mt: "7.8",
        mr: "3.49",
        mu: "9.43",
        mx: "1004.04",
        md: "5.36",
        mn: "5.81",
        me: "3.88",
        ma: "91.7",
        mz: "10.21",
        mm: "35.65",
        na: "11.45",
        np: "15.11",
        nl: "770.31",
        nz: "138",
        ni: "6.38",
        ne: "5.6",
        ng: "206.66",
        no: "413.51",
        om: "53.78",
        pk: "174.79",
        pa: "27.2",
        pg: "8.81",
        py: "17.17",
        pe: "153.55",
        ph: "189.06",
        pl: "438.88",
        pt: "223.7",
        qa: "126.52",
        ro: "158.39",
        ru: "1476.91",
        rw: "5.69",
        ws: "0.55",
        st: "0.19",
        sa: "434.44",
        sn: "12.66",
        rs: "38.92",
        sc: "0.92",
        sl: "1.9",
        sg: "217.38",
        sk: "86.26",
        si: "46.44",
        sb: "0.67",
        za: "354.41",
        es: "1374.78",
        lk: "48.24",
        kn: "0.56",
        lc: "1",
        vc: "0.58",
        sd: "65.93",
        sr: "3.3",
        sz: "3.17",
        se: "444.59",
        ch: "522.44",
        sy: "59.63",
        tw: "426.98",
        tj: "5.58",
        tz: "22.43",
        th: "312.61",
        tl: "0.62",
        tg: "3.07",
        to: "0.3",
        tt: "21.2",
        tn: "43.86",
        tr: "729.05",
        tm: 0,
        ug: "17.12",
        ua: "136.56",
        ae: "239.65",
        gb: "2258.57",
        us: "14624.18",
        uy: "40.71",
        uz: "37.72",
        vu: "0.72",
        ve: "285.21",
        vn: "101.99",
        ye: "30.02",
        zm: "15.69",
        zw: "5.57"
    };
    a.worldMap = {
        map: "world_en",
        backgroundColor: null,
        borderColor: "#fff",
        borderOpacity: .25,
        borderWidth: .5,
        color: "#e7eaeb",
        enableZoom: !0,
        hoverColor: "#16a085",
        normalizeFunction: "polynomial",
        scaleColors: ["#C8EEFF", "#006491"],
        selectedColor: "#666",
        values: b
    }, a.UsaMap = {
        map: "usa_en",
        backgroundColor: null,
        borderColor: "#222",
        borderOpacity: .25,
        borderWidth: 1,
        color: "#e7eaeb",
        hoverColor: "#16a085",
        selectedColor: "#666666",
        enableZoom: !0,
        showTooltip: !0,
        selectedRegion: "MO"
    }, a.EuropeMap = {
        map: "europe_en",
        backgroundColor: null,
        borderColor: "#222",
        borderOpacity: .25,
        borderWidth: 1,
        color: "#e7eaeb",
        hoverColor: "#16a085",
        selectedColor: "#666666",
        enableZoom: !0,
        showTooltip: !0
    }, a.GermanyMap = {
        map: "germany_en",
        backgroundColor: null,
        borderColor: "#222",
        borderOpacity: .25,
        borderWidth: 1,
        color: "#e7eaeb",
        hoverColor: "#16a085",
        selectedColor: "#666666",
        enableZoom: !0,
        showTooltip: !0
    }
}]), angular.module("slingApp").controller("GoogleMapCtrl", ["$scope", "$ocLazyLoad", function(a) {
    a.page = {
        title: "Google Maps",
        subtitle: "Place subtitle here..."
    }
}]).controller("Map1Ctrl", ["$scope", function(a) {
    a.map = {
        center: {
            latitude: 51.219053,
            longitude: 4.404418
        },
        zoom: 14
    }, a.options = {
        scrollwheel: !1
    }
}]).controller("Map2Ctrl", ["$scope", function(a) {
    a.map = {
        center: {
            latitude: 40.1451,
            longitude: -99.668
        },
        zoom: 4,
        bounds: {}
    }, a.options = {
        scrollwheel: !1
    }, a.drawingManagerOptions = {
        drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: !0,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [google.maps.drawing.OverlayType.MARKER, google.maps.drawing.OverlayType.CIRCLE, google.maps.drawing.OverlayType.POLYGON, google.maps.drawing.OverlayType.POLYLINE, google.maps.drawing.OverlayType.RECTANGLE]
        },
        circleOptions: {
            fillColor: "#ffff00",
            fillOpacity: 1,
            strokeWeight: 5,
            clickable: !1,
            editable: !0,
            zIndex: 1
        }
    }, a.markersAndCircleFlag = !0, a.drawingManagerControl = {}, a.$watch("markersAndCircleFlag", function() {
        if (a.drawingManagerControl.getDrawingManager) {
            var b = angular.copy(a.drawingManagerOptions);
            a.markersAndCircleFlag || (b.drawingControlOptions.drawingModes.shift(), b.drawingControlOptions.drawingModes.shift()), a.drawingManagerControl.getDrawingManager().setOptions(b)
        }
    })
}]).controller("Map3Ctrl", ["$scope", function(a) {
    a.map = {
        center: {
            latitude: 51.219053,
            longitude: 4.404418
        },
        zoom: 4
    }, a.options = {
        scrollwheel: !1
    }, a.showWeather = !0
}]).controller("Map4Ctrl", ["$scope", "$log", function(a) {
    a.map = {
        center: {
            latitude: 40.1451,
            longitude: -99.668
        },
        zoom: 4
    }, a.options = {
        scrollwheel: !1
    }, a.marker = {
        coords: {
            latitude: 40.1451,
            longitude: -99.668
        },
        show: !1,
        id: 0
    }, a.windowOptions = {
        visible: !1
    }, a.onClick = function() {
        a.windowOptions.visible = !a.windowOptions.visible
    }, a.closeClick = function() {
        a.windowOptions.visible = !1
    }, a.title = "Window Title!"
}]), angular.module("slingApp").controller("CalendarCtrl", ["$scope", "$compile", "uiCalendarConfig", function(a) {
    var b = new Date,
        c = b.getDate(),
        d = b.getMonth(),
        e = b.getFullYear();
    a.eventSource = {
        url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
        className: "gcal-event",
        currentTimezone: "America/Chicago"
    }, a.events = [{
        title: "All Day Event",
        start: new Date(e, d, 1),
        className: ["b-l b-2x b-greensea"]
    }, {
        title: "Long Event",
        start: new Date(e, d, c - 5),
        end: new Date(e, d, c - 2),
        className: ["bg-dutch"]
    }, {
        id: 999,
        title: "Repeating Event",
        start: new Date(e, d, c - 3, 16, 0),
        allDay: !1,
        className: ["b-l b-2x b-primary"]
    }, {
        id: 999,
        title: "Repeating Event",
        start: new Date(e, d, c + 4, 16, 0),
        allDay: !1,
        className: ["b-l b-2x b-primary"]
    }, {
        title: "Birthday Party",
        start: new Date(e, d, c + 1, 19, 0),
        end: new Date(e, d, c + 1, 22, 30),
        allDay: !1,
        className: ["b-l b-2x b-default"]
    }, {
        title: "Click for Google",
        start: new Date(e, d, 28),
        end: new Date(e, d, 29),
        url: "http://google.com/",
        className: ["b-l b-2x b-hotpink"]
    }, {
        title: "Make cupcakes",
        start: new Date(e, d, 2),
        className: ["b-l b-2x b-info"],
        location: "Bratislava",
        info: "The best in whole world."
    }, {
        title: "Call wife",
        start: new Date(e, d, 6),
        end: new Date(e, d, 7),
        className: ["b-l b-2x b-red"],
        location: "Piestany",
        info: "And say her hello."
    }], a.precision = 400, a.lastClickTime = 0, a.doubleClick = function(b) {
        var c = (new Date).getTime();
        c - a.lastClickTime <= a.precision && a.events.push({
            title: "New Event",
            start: b,
            className: ["b-l b-2x b-info"]
        }), a.lastClickTime = c
    }, a.alertOnDrop = function(b, c) {
        a.alertMessage = "Event Droped to make dayDelta " + c
    }, a.alertOnResize = function(b, c) {
        a.alertMessage = "Event Resized to make dayDelta " + c
    }, a.overlay = angular.element(".fc-overlay"), a.alertOnMouseOver = function(b, c) {
        a.event = b, a.overlay.removeClass("left right");
        var d = angular.element(c.target).closest(".fc-event"),
            e = d.closest(".calendar"),
            f = d.offset().left - e.offset().left,
            g = e.width() - (d.offset().left - e.offset().left + d.width());
        g > a.overlay.width() ? a.overlay.addClass("left") : f > a.overlay.width() && a.overlay.addClass("right"), 0 === d.find(".fc-overlay").length && d.append(a.overlay)
    }, a.uiConfig = {
        calendar: {
            height: 450,
            editable: !0,
            header: {
                left: "prev",
                center: "title",
                right: "next"
            },
            dayClick: a.doubleClick,
            eventDrop: a.alertOnDrop,
            eventResize: a.alertOnResize,
            eventMouseover: a.alertOnMouseOver
        }
    }, a.addEvent = function() {
        a.events.push({
            title: "New Event",
            start: new Date(e, d, c),
            className: ["b-l b-2x b-info"]
        })
    }, a.remove = function(b) {
        a.events.splice(b, 1)
    }, a.changeView = function(a) {
        angular.element(".calendar").fullCalendar("changeView", a)
    }, a.today = function() {
        angular.element(".calendar").fullCalendar("today")
    }, a.eventSources = [a.events]
}]), angular.module("slingApp").controller("MailInboxCtrl", ["$scope", "$resource", function(a, b) {
    a.mails = b("scripts/jsons/mails.json").query(), a.selectedAll = !1, a.selectAll = function() {
        a.selectedAll = a.selectedAll ? !1 : !0, angular.forEach(a.mails, function(b) {
            b.selected = a.selectedAll
        })
    }
}]), angular.module("slingApp").controller("MailComposeCtrl", ["$scope", function(a) {
    a.availableRecipients = ["RLake@nec.gov", "RBastian@lacus.io", "VMonroe@orci.ly", "YMckenzie@mattis.gov", "VMcmyne@molestie.org", "BKliban@aliquam.gov", "HHellems@tincidunt.org", "KAngell@sollicitudin.ly"]
}]), angular.module("slingApp").controller("MailSingleCtrl", ["$scope", function(a) {
    a.awesomeThings = ["HTML5 Boilerplate", "AngularJS", "Karma"]
}]), angular.module("slingApp").controller("MailCtrl", ["$scope", function() {}]), angular.module("slingApp").controller("LoginCtrl", ["$scope", "$state", function(a, b) {
    a.login = function() {
        b.go("app.overview")
    }
}]), angular.module("slingApp").controller("SignupCtrl", ["$scope", function(a) {
    a.awesomeThings = ["HTML5 Boilerplate", "AngularJS", "Karma"]
}]), angular.module("slingApp").controller("ForgotPasswordCtrl", ["$scope", function(a) {
    a.awesomeThings = ["HTML5 Boilerplate", "AngularJS", "Karma"]
}]), angular.module("slingApp").controller("GalleryCtrl", ["$scope", function(a) {
    a.page = {
        title: "Gallery",
        subtitle: "Place subtitle here..."
    }, a.images = [{
        src: "http://lorempixel.com/800/600/cats/1",
        title: "Sed ut perspiciatis unde",
        category: "cats",
        selected: !1
    }, {
        src: "http://lorempixel.com/800/600/cats/2",
        title: "Quis autem vel eum iure",
        category: "cats",
        selected: !1
    }, {
        src: "http://lorempixel.com/800/600/cats/3",
        title: "Temporibus autem quibusdam",
        category: "cats",
        selected: !1
    }, {
        src: "http://lorempixel.com/800/600/cats/4",
        title: "Neque porro quisquam est",
        category: "cats",
        selected: !1
    }, {
        src: "http://lorempixel.com/800/600/cats/5",
        title: "Et harum quidem rerum",
        category: "cats",
        selected: !1
    }, {
        src: "http://lorempixel.com/800/600/animals/6",
        title: "Nemo enim ipsam voluptatem",
        category: "animals",
        selected: !1
    }, {
        src: "http://lorempixel.com/800/600/animals/7",
        title: "At vero eos et accusamus",
        category: "animals",
        selected: !1
    }, {
        src: "http://lorempixel.com/800/600/animals/8",
        title: "Itaque earum rerum hic tenetur",
        category: "animals",
        selected: !1
    }, {
        src: "http://lorempixel.com/800/600/animals/9",
        title: "Ut enim ad minima veniam",
        category: "animals",
        selected: !1
    }, {
        src: "http://lorempixel.com/800/600/animals/10",
        title: "Temporibus autem quibusdam",
        category: "animals",
        selected: !1
    }, {
        src: "http://lorempixel.com/800/600/city/1",
        title: "Neque porro quisquam est",
        category: "cities",
        selected: !1
    }, {
        src: "http://lorempixel.com/800/600/city/2",
        title: "Nam libero tempore",
        category: "cities",
        selected: !1
    }, {
        src: "http://lorempixel.com/800/600/city/3",
        title: "Neque porro quisquam est",
        category: "cities",
        selected: !1
    }, {
        src: "http://lorempixel.com/800/600/city/4",
        title: "Nam libero tempore",
        category: "cities",
        selected: !1
    }, {
        src: "http://lorempixel.com/800/600/city/5",
        title: "Neque porro quisquam est",
        category: "cities",
        selected: !1
    }, {
        src: "http://lorempixel.com/800/600/city/6",
        title: "Nam libero tempore",
        category: "cities",
        selected: !1
    }], a.selectedAll = !1, a.isSelected = !1, a.selectAll = function() {
        a.selectedAll ? (a.selectedAll = !1, a.isSelected = !1) : (a.selectedAll = !0, a.isSelected = !0), angular.forEach(a.images, function(b) {
            b.selected = a.selectedAll
        })
    }, a.selectImage = function(b) {
        var c = 0;
        a.images[b].selected ? a.images[b].selected = !1 : (a.images[b].selected = !0, a.isSelected = !0), angular.forEach(a.images, function(a) {
            a.selected && c++
        }), 0 === c && (a.isSelected = !1)
    }
}]), angular.module("slingApp").controller("TimelineCtrl", ["$scope", function(a) {
    a.page = {
        title: "Timeline",
        subtitle: "Place subtitle here..."
    }
}]), angular.module("slingApp").controller("ChatCtrl", ["$scope", "$resource", function(a, b) {
    a.inbox = b("scripts/jsons/chats.json").query(), a.archive = function(b) {
        a.inbox.splice(b, 1)
    }
}]), angular.module("slingApp").controller("SearchResultsCtrl", ["$scope", function(a) {
    a.page = {
        title: "Search Results",
        subtitle: "Place subtitle here..."
    }
}]), angular.module("slingApp").controller("ProfileCtrl", ["$scope", function(a) {
    a.page = {
        title: "Profile Page",
        subtitle: "Place subtitle here..."
    }
}]), angular.module("slingApp").controller("HelpCtrl", ["$scope", function(a) {
    a.page = {
        title: "Documentation",
        subtitle: "Place subtitle here..."
    }
}]), angular.module("slingApp").directive("anchorScroll", ["$location", "$anchorScroll", function(a, b) {
    return {
        restrict: "AC",
        link: function(c, d, e) {
            d.on("click", function() {
                a.hash(e.anchorScroll), b()
            })
        }
    }
}]), angular.module("slingApp").controller("OrdersCtrl", ["$scope", function(a) {
    a.page = {
        title: "Orders",
        subtitle: "Place subtitle here..."
    }
}]).controller("OrdersTableCtrl", ["$scope", "DTOptionsBuilder", "DTColumnDefBuilder", "DTColumnBuilder", "$resource", function(a, b, c, d, e) {
    var f = this;
    f.orders = [], f.dtOptions = b.newOptions().withBootstrap().withOption("order", [
        [1, "asc"]
    ]).withDOM('<"row"<"col-md-8 col-sm-12"<"inline-controls"l>><"col-md-4 col-sm-12"<"pull-right"f>>>t<"row"<"col-md-4 col-sm-12"<"inline-controls"l>><"col-md-4 col-sm-12"<"inline-controls text-center"i>><"col-md-4 col-sm-12"p>>').withLanguage({
        sLengthMenu: "View _MENU_ records",
        sInfo: "Found _TOTAL_ records",
        oPaginate: {
            sPage: "Page",
            sPageOf: "of"
        }
    }).withPaginationType("input").withColumnFilter(), f.dtColumnDefs = [c.newColumnDef(0).notSortable(), c.newColumnDef(8).notSortable()], f.selectedAll = !1, f.selectAll = function() {
        a.selectedAll = a.selectedAll ? !1 : !0, angular.forEach(f.orders, function(b) {
            b.selected = a.selectedAll
        })
    }, e('http://www.filltext.com/?rows=300&id={index}&date={date|01-01-2012,01-01-2015}&placedby={firstName}~{lastName}&status=["pending","closed","sent","cancelled"]&quantity={number|20}&total={numberLength|3}}&shipto={streetAddress}~{city}&selected=false&pretty=true').query().$promise.then(function(a) {
        f.orders = a
    })
}]), angular.module("slingApp").controller("ProductsCtrl", ["$scope", function(a) {
    a.page = {
        title: "Products",
        subtitle: "Place subtitle here..."
    }
}]).controller("ProductsTableCtrl", ["$scope", "DTOptionsBuilder", "DTColumnDefBuilder", "DTColumnBuilder", "$resource", function(a, b, c, d, e) {
    var f = this;
    f.products = [], f.dtOptions = b.newOptions().withBootstrap().withOption("order", [
        [1, "asc"]
    ]).withDOM('<"row"<"col-md-8 col-sm-12"<"inline-controls"l>><"col-md-4 col-sm-12"<"pull-right"f>>>t<"row"<"col-md-4 col-sm-12"<"inline-controls"l>><"col-md-4 col-sm-12"<"inline-controls text-center"i>><"col-md-4 col-sm-12"p>>').withLanguage({
        sLengthMenu: "View _MENU_ records",
        sInfo: "Found _TOTAL_ records",
        oPaginate: {
            sPage: "Page",
            sPageOf: "of"
        }
    }).withPaginationType("input").withColumnFilter(), f.dtColumnDefs = [c.newColumnDef(0).notSortable(), c.newColumnDef(7).notSortable()], f.selectedAll = !1, f.selectAll = function() {
        a.selectedAll = a.selectedAll ? !1 : !0, angular.forEach(f.products, function(b) {
            b.selected = a.selectedAll
        })
    }, e('http://www.filltext.com/?rows=300&id={index}&name={lorem|2}&category=["Food","Drinks","Accesories","Electro","Kitchen","Bathroom"]&price={numberLength|3}}&date={date|01-01-2012,01-01-2015}&status=["published","not published","deleted"]&pretty=true').query().$promise.then(function(a) {
        f.products = a
    })
}]), angular.module("slingApp").controller("InvoicesCtrl", ["$scope", function(a) {
    a.page = {
        title: "Invoices",
        subtitle: "Place subtitle here..."
    }
}]).controller("InvoicesTableCtrl", ["$scope", "DTOptionsBuilder", "DTColumnDefBuilder", "DTColumnBuilder", "$resource", function(a, b, c, d, e) {
    var f = this;
    f.invoices = [], f.dtOptions = b.newOptions().withBootstrap().withOption("order", [
        [1, "asc"]
    ]).withDOM('<"row"<"col-md-8 col-sm-12"<"inline-controls"l>><"col-md-4 col-sm-12"<"pull-right"f>>>t<"row"<"col-md-4 col-sm-12"<"inline-controls"l>><"col-md-4 col-sm-12"<"inline-controls text-center"i>><"col-md-4 col-sm-12"p>>').withLanguage({
        sLengthMenu: "View _MENU_ records",
        sInfo: "Found _TOTAL_ records",
        oPaginate: {
            sPage: "Page",
            sPageOf: "of"
        }
    }).withPaginationType("input").withColumnFilter(), f.dtColumnDefs = [c.newColumnDef(0).notSortable(), c.newColumnDef(6).notSortable()], f.selectedAll = !1, f.selectAll = function() {
        a.selectedAll = a.selectedAll ? !1 : !0, angular.forEach(f.invoices, function(b) {
            b.selected = a.selectedAll
        })
    }, e('http://www.filltext.com/?rows=300&id={index}&date={date|01-01-2012,01-01-2015}&invoicefor={firstName}~{lastName}&status=["paid","unpaid","sent","cancelled"]&total={numberLength|3}}&selected=false&pretty=true').query().$promise.then(function(a) {
        f.invoices = a
    })
}]), angular.module("slingApp").controller("SingleOrderCtrl", ["$scope", function(a) {
    a.page = {
        title: "Single Order",
        subtitle: "Place subtitle here..."
    }
}]), angular.module("slingApp").controller("SingleProductCtrl", ["$scope", function(a) {
    a.page = {
        title: "Single Product",
        subtitle: "Place subtitle here..."
    }
}]), angular.module("slingApp").controller("SingleInvoiceCtrl", ["$scope", function(a) {
    a.page = {
        title: "Single Invoice",
        subtitle: "Place subtitle here..."
    }
}]), angular.module("slingApp").controller("OffcanvaslayoutCtrl", ["$scope", function(a) {
    a.page = {
        title: "Off-canvas sidebar",
        subtitle: "On small devices"
    }
}]), angular.module("slingApp").directive("offcanvasSidebar", function() {
    return {
        restrict: "A",
        link: function(a, b) {
            {
                var c = angular.element("#sling"),
                    d = angular.element(window);
                d.width()
            }
            b.on("click", function(a) {
                c.hasClass("offcanvas-opened") ? c.removeClass("offcanvas-opened") : c.addClass("offcanvas-opened"), a.preventDefault()
            })
        }
    }
}), angular.module("slingApp").directive("submitValidate", function() {
    return {
        require: "form",
        restrict: "A",
        link: function(a, b, c) {
            var d = angular.element(b);
            d.on("submit", function() {
                d.find(".ng-pristine").removeClass("ng-pristine").addClass("ng-dirty");
                var b = a[c.name];
                angular.forEach(b, function(a, b) {
                    "$" !== b[0] && (a.$pristine = !1, a.$dirty = !0)
                }, this), b.$setDirty(), a.$apply()
            })
        }
    }
}), angular.module("slingApp").directive("nativeTab", function() {
    return {
        restrict: "A",
        link: function(a, b) {
            var c = angular.element(b);
            c.on("click", function(a) {
                a.preventDefault(), c.tab("show")
            })
        }
    }
}), angular.module("slingApp").controller("LeafletMapCtrl", ["$scope", function(a) {
    a.page = {
        title: "Leaflet Maps",
        subtitle: "Place subtitle here..."
    }
}]).controller("leafletMap1", ["$scope", function() {}]).controller("leafletMap2", ["$scope", function(a) {
    angular.extend(a, {
        autodiscover: {
            autoDiscover: !0
        }
    })
}]).controller("leafletMap3", ["$scope", "leafletData", function(a, b) {
    L.Icon.Default.imagePath = "styles/images", angular.extend(a, {
        london: {
            lat: 51.505,
            lng: -.09,
            zoom: 4
        },
        controls: {
            draw: {}
        },
        layers: {
            baselayers: {
                mapbox_light: {
                    name: "Mapbox Light",
                    url: "http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}",
                    type: "xyz",
                    layerOptions: {
                        apikey: "pk.eyJ1IjoiYnVmYW51dm9scyIsImEiOiJLSURpX0pnIn0.2_9NrLz1U9bpwMQBhVk97Q",
                        mapid: "bufanuvols.lia22g09"
                    },
                    layerParams: {
                        showOnSelector: !1
                    }
                }
            },
            overlays: {
                draw: {
                    name: "draw",
                    type: "group",
                    visible: !0,
                    layerParams: {
                        showOnSelector: !1
                    }
                }
            }
        }
    }), b.getMap("map3").then(function(a) {
        b.getLayers("map3").then(function(b) {
            var c = b.overlays.draw;
            a.on("draw:created", function(a) {
                var b = a.layer;
                c.addLayer(b), console.log(JSON.stringify(b.toGeoJSON()))
            })
        })
    })
}]).controller("leafletMap4", ["$scope", function(a) {
    angular.extend(a, {
        berlin: {
            lat: 52.52,
            lng: 13.4,
            zoom: 14
        },
        markers: {
            m1: {
                lat: 52.52,
                lng: 13.4
            }
        },
        layers: {
            baselayers: {
                googleTerrain: {
                    name: "Google Terrain",
                    layerType: "TERRAIN",
                    type: "google"
                },
                googleHybrid: {
                    name: "Google Hybrid",
                    layerType: "HYBRID",
                    type: "google"
                },
                googleRoadmap: {
                    name: "Google Streets",
                    layerType: "ROADMAP",
                    type: "google"
                }
            }
        }
    })
}]).controller("leafletMap5", ["$scope", "$http", function(a, b) {
    b.get("scripts/jsons/heat-points.json").success(function(b) {
        a.layers.overlays = {
            heat: {
                name: "Heat Map",
                type: "heat",
                data: b,
                layerOptions: {
                    radius: 20,
                    blur: 10
                },
                visible: !0
            }
        }
    }), angular.extend(a, {
        center: {
            lat: 37.774546,
            lng: -122.433523,
            zoom: 12
        },
        layers: {
            baselayers: {
                mapbox_light: {
                    name: "Mapbox Light",
                    url: "http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}",
                    type: "xyz",
                    layerOptions: {
                        apikey: "pk.eyJ1IjoiYnVmYW51dm9scyIsImEiOiJLSURpX0pnIn0.2_9NrLz1U9bpwMQBhVk97Q",
                        mapid: "bufanuvols.lia22g09"
                    }
                }
            }
        }
    })
}]);