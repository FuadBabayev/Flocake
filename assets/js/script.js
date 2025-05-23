$(function () {
    "use strict";

    // Preloader
    $(".main-preloader").fadeOut(500);
    // Preloader



    // Responsive Others Dropdown
    $("body").on("click", "main .nav.nav-tabs .dropdown .dropdown-menu", function (e) {
        if (e.target.closest('main .nav.nav-tabs .dropdown .dropdown-menu .dropdown_categories ul li.has_dropdown')) {
            e.stopPropagation();
        }
    });
    $("body").on("click", "main .nav.nav-tabs .dropdown .dropdown-menu .dropdown_categories ul li.has_dropdown", function () {
        $("main .nav.nav-tabs .dropdown .dropdown-menu .dropdown_categories ul li.has_dropdown").each(function () {
            $(this).removeClass('active')
        })
        !$(this).hasClass("active") ? $(this).addClass('active') : $(this).removeClass('active');
    });
    // Responsive Others Dropdown



    // Print
    function openPrintWindow(target = null) {
        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();
        if (day < 10) day = "0" + day;
        if (month < 10) month = "0" + month;
        let now = `${day}.${month}.${year}`;
        let clock = new Date().toLocaleTimeString();

        const newWindow = window.open('', '_blank', target);
        newWindow.document.write(`
                    <!DOCTYPE html>
                    <html class="no-js" lang="en">
                            
                    <head>
                        <meta charset="utf-8">
                        <meta http-equiv="x-ua-compatible" content="ie=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                        <meta name="author" content="Goweb Creative Agency">
                        <title>General Invoice</title>
                        <link rel="stylesheet" href="assets/css/printer.css">
                    </head>
                            
                    <body>
                        <div class="cs-container">
                            <div class="cs-invoice cs-style1">
                                <div class="cs-invoice_in" id="download_section">
                                    <div class="cs-invoice_head cs-type1 cs-mb25">
                                        <div class="cs-invoice_left">
                                            <p class="cs-invoice_number cs-primary_color cs-mb5 cs-f16"><b class="cs-primary_color">Invoice No:</b> #SM75692</p>
                                            <p class="cs-invoice_date cs-primary_color cs-m0"><b class="cs-primary_color">Date: </b>${now} &nbsp; ${clock}</p>
                                        </div>
                                        <div class="cs-invoice_right cs-text_right"><div class="cs-logo cs-mb5"><img src="assets/images/logo/OffPOS.png" alt="Logo"></div></div>
                                    </div>
                                    <div class="cs-invoice_head cs-mb10">
                                        <div class="cs-invoice_left">
                                            <b class="cs-primary_color">Invoice To:</b>
                                            <p>Jennifer Richards <br> 365 Bloor Street East, Toronto, <br>Ontario, M4W 3L4, <br> Canada </p>
                                        </div>
                                        <div class="cs-invoice_right cs-text_right">
                                            <b class="cs-primary_color">Pay To:</b>
                                            <p>Biman Airlines <br> 237 Roanoke Road, North York, <br> Ontario, Canada <br> demo@email.com</p>
                                        </div>
                                    </div>
                                    <div class="cs-table cs-style1">
                                        <div class="cs-round_border">
                                            <div class="cs-table_responsive">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th class="cs-width_3 cs-semi_bold cs-primary_color cs-focus_bg">Item</th>
                                                            <th class="cs-width_4 cs-semi_bold cs-primary_color cs-focus_bg">Description</th>
                                                            <th class="cs-width_2 cs-semi_bold cs-primary_color cs-focus_bg">Qty</th>
                                                            <th class="cs-width_1 cs-semi_bold cs-primary_color cs-focus_bg">Price</th>
                                                            <th class="cs-width_2 cs-semi_bold cs-primary_color cs-focus_bg cs-text_right">Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td class="cs-width_3">App Development</td>
                                                            <td class="cs-width_4">Mobile & Ios Application Development</td>
                                                            <td class="cs-width_2">2</td>
                                                            <td class="cs-width_1">$460</td>
                                                            <td class="cs-width_2 cs-text_right">$920</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="cs-width_3">Ui/UX Design</td>
                                                            <td class="cs-width_4">Mobile & Ios Mobile App Design, Product Design</td>
                                                            <td class="cs-width_2">1</td>
                                                            <td class="cs-width_1">$220</td>
                                                            <td class="cs-width_2 cs-text_right">$220</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="cs-width_3">Web Design</td>
                                                            <td class="cs-width_4">Web Design & Development</td>
                                                            <td class="cs-width_2">2</td>
                                                            <td class="cs-width_1">$120</td>
                                                            <td class="cs-width_2 cs-text_right">#240</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="cs-width_3">App Development</td>
                                                            <td class="cs-width_4">Mobile & Ios Application Development</td>
                                                            <td class="cs-width_2">2</td>
                                                            <td class="cs-width_1">$460</td>
                                                            <td class="cs-width_2 cs-text_right">$920</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="cs-width_3">Ui/UX Design</td>
                                                            <td class="cs-width_4">Mobile & Ios Mobile App Design, Product Design</td>
                                                            <td class="cs-width_2">1</td>
                                                            <td class="cs-width_1">$220</td>
                                                            <td class="cs-width_2 cs-text_right">$220</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="cs-width_3">Web Design</td>
                                                            <td class="cs-width_4">Web Design & Development</td>
                                                            <td class="cs-width_2">2</td>
                                                            <td class="cs-width_1">$120</td>
                                                            <td class="cs-width_2 cs-text_right">#240</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="cs-invoice_footer">
                                            <div class="cs-left_footer cs-mobile_hide"></div>
                                            <div class="cs-right_footer">
                                                <table>
                                                    <tbody>
                                                        <tr class="cs-border_none">
                                                            <td class="cs-width_3 cs-border_top_0 cs-bold cs-f16 cs-primary_color">Total Amount</td>
                                                            <td class="cs-width_3 cs-border_top_0 cs-bold cs-f16 cs-primary_color cs-text_right">$1160</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cs-note">
                                        <div class="cs-note_left"><img src="assets/images/svg/script.svg" alt=""></div>
                                        <div class="cs-note_right">
                                            <p class="cs-mb0"><b class="cs-primary_color cs-bold">Note:</b></p>
                                            <p class="cs-m0">Here we can write a additional notes for the client to get a better understanding of this invoice.</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="javascript:window.print()" class="printer_button">
                                    <div class="icon"><img src="assets/images/svg/printer.svg" alt=""></div>
                                    <div class="text">Print</div>
                                </a>
                            </div>
                        </div>
                    </body>
                    </html>`);
        newWindow.document.close();
    }
    $("body").on("click", ".print_button", function () {
        if ($(window).width() < 575.98) openPrintWindow('width=320,height=400');
        else openPrintWindow('width=500,height=600');
    });
    $("body").on("click", ".customer_panel_button", function () {
        openPrintWindow();
    });
    // Print



    // ! IMPORTANT Change Visibility of Screen According to Responsive
    const changeTab = function () {
        if ($(window).width() < 991.98) {
            $('#cart_section').addClass('tab-pane fade');
            $('#product_section').addClass('tab-pane fade');
            if (!$(".tab-content section").hasClass("active")) {
                $('#cart_section').addClass('show active');
                $(".nav.nav-tabs a[href='#cart_section']").addClass("active").attr("aria-selected", "true")
            }
        } else {
            $('#cart_section').removeClass('tab-pane fade show active');
            $('#product_section').removeClass('tab-pane fade show active');
            $(".nav.nav-tabs .nav-link").removeClass("active").attr("aria-selected", "false")
        }
    };
    changeTab();
    $(window).resize(changeTab);
    // ! IMPORTANT Change Visibility of Screen According to Responsive



    // Tippy (Scale.css, Tippy.css, Popper.js, Tippy.js)
    tippy("[data-tippy-content]:not(main #main_part section .cart_footer .customer_total_description .customer_total_description_item .icon)", {
        // content: 'I\'m a Tippy tooltip!',
        arrow: true,                                         // true, false
        placement: 'bottom',                                 // top, right, bottom, left, top-start, right-start, bottom-start, left-start, top-end, right-end, bottom-end, left-end
        animation: 'fade',                                   // fade, scale, 
        followCursor: false
    });

    tippy("main #main_part section .cart_footer .customer_total_description .customer_total_description_item .icon[data-tippy-content]", {
        arrow: true,
        placement: 'top',
        animation: 'fade',
        followCursor: false
    });

    function refreshTime() {
        let refreshRate = 1000;
        setTimeout(displayTime, refreshRate);
    }
    function displayTime() {
        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();
        if (day < 10) day = "0" + day;
        if (month < 10) month = "0" + month;
        let clock = new Date().toLocaleTimeString();
        let now = `${day}-${month}-${year}`;
        tippy(".currentTime", {
            content: `<div class="text-center"><span>${now}</span><br><span>${clock}</span></div>`,
            allowHTML: true,
            animation: "scale",
            placement: 'bottom',
        });
        refreshTime();
    }
    displayTime();
    // Tippy (Scale.css, Tippy.css, Popper.js, Tippy.js)



    // Calculator
    $(document).on('click', '#calculator_button', function (e) {
        if ($('#calculator_main').css('display') == 'none') {
            $("#cal_open_status").val(1);
        } else {
            $('#calculator_main').css('display', 'none');
            $("#cal_open_status").val(2);
        }
    });
    function set_calculator_position() {
        $('.overlayForCalculator').css('display', 'block');
        $('#calculator_main').css('display', 'block');
        if ($(window).width() > 992) {
            let calculator_button_top = $("#calculator_button").offset().top;
            let calculator_button_left = $("#calculator_button").offset().left;
            let calculator_button_height = $("#calculator_button").height();
            let calculator_button_width = $("#calculator_button").width();
            let calculator_width = $("#calculator_main").width();
            let left_for_calculator = calculator_button_left + calculator_button_width + calculator_button_width - calculator_width;
            let total_top_for_calculator = calculator_button_top + calculator_button_height + 5;
            $("#calculator_main").css("top", calculator_button_top + 40).css("left", calculator_button_left - 100);
        } else {
            $("#calculator_main").css({
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            });
        }
    }
    $(document).on('click', '.calculator_button', function () {
        set_calculator_position();
    });
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.calculator_button').length && !$(event.target).closest('#calculator_main').length) {
            $('.overlayForCalculator').css('display', 'none');
            $('#calculator_main').css('display', 'none');
        }
    });
    $(document).on("click", ".overlayForCalculator", function (e) {
        $("#calculator_main").fadeOut(333);
        $(".overlayForCalculator").fadeOut(111);
        $(".main_left").removeClass("active");
        if ($("#show_running_order").attr("data-isActive") === "false") {
            $("#show_running_order").attr("data-isActive", "true");
        } else {
            $("#show_running_order").attr("data-isActive", "false");
        }
    });
    $(document).keydown(function (event) {
        if (event.key === "Escape" && !($('#calculator_main').css('display') == 'none')) {
            $('#calculator_main').css('display', 'none');
            $('.overlayForCalculator').css('display', 'none');
        }
    })
    // Calculator



    //  Full Screen
    function toggleFullscreen(elem) {
        elem = elem || document.documentElement;
        if (
            !document.fullscreenElement &&
            !document.mozFullScreenElement &&
            !document.webkitFullscreenElement &&
            !document.msFullscreenElement
        ) {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }
    function makeFullScreen(el) {
        toggleFullscreen();
        $(el).attr("data-tippy-content", "");
        if ($(el).find("i").hasClass("fa-expand-arrows-alt")) {
            $(el)
                .find("i")
                .removeClass("fa-expand-arrows-alt")
                .addClass("fa-times");
            $(el).attr("data-tippy-content", fullscreen_2);
        } else {
            $(el)
                .find("i")
                .removeClass("fa-times")
                .addClass("fa-expand-arrows-alt");
            $(el).attr("data-tippy-content", fullscreen_1);
        }
        tippy(".fullscreen", {
            // animation: "scale",
        });
    }
    $(document).on("click", ".fullscreen", function (e) {
        makeFullScreen(this);
    });
    //  Full Screen



    // Open Draft Sales Modal
    $("body").on("click", "#openDraftSalesModal .modal_body_left .body .draftList", function () {
        let data = [
            {
                id: 1,
                item: "null(null)",
                price: "350.00",
                qty: "1",
                discount: "0.00",
                total: "350.00",
            },
            {
                id: 2,
                item: "ACI Pure Flour(Atta)(453)",
                price: "130.00",
                qty: "3",
                discount: "0.00",
                total: "390.00",
            },
            {
                id: 3,
                item: "Asus 4G-AC68U (AC1900 4G LTE Router)(233)",
                imei: "IMEI: 360728091234570",
                price: "35066.00",
                qty: "1",
                discount: "0.00",
                total: "35066.00",
            },
            {
                id: 4,
                item: "null(null)",
                price: "350.00",
                qty: "1",
                discount: "0.00",
                total: "350.00",
            },
            {
                id: 5,
                item: "ACI Pure Flour(Atta)(453)",
                price: "130.00",
                qty: "3",
                discount: "0.00",
                total: "390.00",
            },
            {
                id: 6,
                item: "Asus 4G-AC68U (AC1900 4G LTE Router)(233)",
                imei: "IMEI: 360728091234570",
                price: "35066.00",
                qty: "1",
                discount: "0.00",
                total: "35066.00",
            }
        ];
        let total = {
            subTotal: "125532.00",
            totalItem: "7 (16)",
            tax: "5007.28",
            charge: "0.00",
            discount: "0.00 (0.00)",
        };
        let totalPayable = "130539.00";

        let customerName = $(this).find(".customer").text().replace(/\(.*?\)/g, "");
        let newData = "";
        $(data).each(function () {
            newData += `
                <div class="draftItemList">
                    <div class="item">${this.item} ${this.imei ? `<span>${this.imei}</span>` : ''}</div>
                    <div class="price">${this.price}</div>
                    <div class="qty">${this.qty}</div>
                    <div class="discount">${this.discount}</div>
                    <div class="total">${this.total}</div>
            </div>`;
        });
        let newTotal = `
            <div class="customer_total_description_item">Sub Total: <span>${total.subTotal}</span></div>
            <div class="customer_total_description_item">Total Item: <span>${total.totalItem}</span></div>
            <div class="customer_total_description_item">Tax: <span>${total.tax}</span></div>
            <div class="customer_total_description_item">Charge: <span>${total.charge}</span></div>
            <div class="customer_total_description_item">Discount: <span>${total.discount}</span></div>`;
        $("#openDraftSalesModal .modal_body_right .customer_name span").text(customerName);
        $("#openDraftSalesModal .modal_body_right .customer_details .customer_details_body").html(newData);
        $("#openDraftSalesModal .modal_body_right .customer_total_description").html(newTotal);
        $("#openDraftSalesModal .modal_body_right .header.second span").html(totalPayable);
    });
    // Open Draft Sales Modal


    // Recent Sales Modal
    $("body").on("click", "#recentSalesModal .modal_body_left .body .draftList", function () {
        let data = [
            {
                id: 1,
                item: "A-Cal D Tablet 500 mg+200 IU (15Pcs Pot)(10001)",
                imei: "Medicine: 2025-10-14",
                price: "7.00",
                qty: "1",
                discount: "0.00",
                total: "7.00",
            },
            {
                id: 2,
                item: "A-B1 Tablet 100 mg(10005)",
                imei: "Medicine: 2025-05-13",
                price: "0.86",
                qty: "3",
                discount: "0.00",
                total: "2.58",
            },
            {
                id: 3,
                item: "null(null)",
                price: "350.00",
                qty: "1",
                discount: "0.00",
                total: "350.00",
            },
            {
                id: 4,
                item: "A-Cal D Tablet 500 mg+200 IU (15Pcs Pot)(10001)",
                imei: "Medicine: 2025-10-14",
                price: "7.00",
                qty: "1",
                discount: "0.00",
                total: "7.00",
            },
            {
                id: 5,
                item: "A-B1 Tablet 100 mg(10005)",
                imei: "Medicine: 2025-05-13",
                price: "0.86",
                qty: "3",
                discount: "0.00",
                total: "2.58",
            },
            {
                id: 6,
                item: "null(null)",
                price: "350.00",
                qty: "1",
                discount: "0.00",
                total: "350.00",
            }
        ];
        let total = {
            subTotal: "359.86",
            totalItem: "7 (16)",
            tax: "278.28",
            charge: "0.00",
            discount: "0.00 (0.00)",
        };
        let amount = {
            paid: "12.00",
            due: "7.00",
        }
        let totalPayable = "359.00";

        let customerInvoice = $(this).find(".number").text();
        let customerDate = $(this).find(".dateTime").text();
        let customerName = $(this).find(".customer").text().replace(/\(.*?\)/g, "");
        let newCustomerName = ` 
            <div class="customer_name_item">Invoice No: <span>${customerInvoice}</span></div>
            <div class="customer_name_item">Date Time: <span>${customerDate}</span></div>
            <div class="customer_name_item">Customer: <span>${customerName}</span></div>`;

        let newData = "";
        $(data).each(function () {
            newData += `
                <div class="draftItemList">
                    <div class="item">${this.item} ${this.imei ? `<span>${this.imei}</span>` : ''}</div>
                    <div class="price">${this.price}</div>
                    <div class="qty">${this.qty}</div>
                    <div class="discount">${this.discount}</div>
                    <div class="total">${this.total}</div>
            </div>`;
        });
        let newTotal = `
            <div class="customer_total_description_item">Sub Total: <span>${total.subTotal}</span></div>
            <div class="customer_total_description_item">Total Item: <span>${total.totalItem}</span></div>
            <div class="customer_total_description_item">Tax: <span>${total.tax}</span></div>
            <div class="customer_total_description_item">Charge: <span>${total.charge}</span></div>
            <div class="customer_total_description_item">Discount: <span>${total.discount}</span></div>`;
        let newAmount = `
            <div class="paid_amount">Paid Amount: <span>${amount.paid}</span></div>
            <div class="due_amount">Due Amount: <span>${amount.due}</span></div>`;


        $("#recentSalesModal .modal_body_right .body .customer_name").html(newCustomerName);
        $("#recentSalesModal .modal_body_right .customer_details .customer_details_body").html(newData);
        $("#recentSalesModal .modal_body_right .customer_total_description").html(newTotal);
        $("#recentSalesModal .modal_body_right .header.second span").html(totalPayable);
        $("#recentSalesModal .modal_body_right .amount").html(newAmount);
    });
    // Recent Sales Modal


    // Add To Cart Modal
    const addItem = function () {
        let addedItem = `
            <div class="draftItemList">
                <div class="item">
                    <div class="edit" data-bs-target="#addToCartModal" data-bs-toggle="modal"><img src="assets/images/svg/crayon.svg" alt=""></div>
                    <div class="picture"><img src="assets/images/cart/sneaker.png" alt=""></div>
                    <div class="text">
                        <p>Apple 16GB DDR4 3200MHz SO-DIMM(277)</p>
                        <span>Serial: DFUYRTDDKMJDF</span>
                    </div>
                </div>
                <div class="price">23324.00</div>
                <div class="qty">
                    <div class="input">
                        <div class="minus"><img src="assets/images/svg/minus.svg"></div>
                        <input type="number" value="1" min="1" max="999">
                        <div class="plus"><img src="assets/images/svg/plus.svg"></div>
                    </div>
                </div>
                <div class="discount"><input type="number" value="0"></div>
                <div class="total">
                    <div class="text">23324.00</div>
                    <div class="icon"><img src="assets/images/svg/trash.svg"></div>
                </div>
            </div>`;

        let total = {
            subTotal: "58644.07",
            totalItem: "7 (39)",
            tax: "5359.28",
            charge: "3.50",
            discount: "8.40 (8.40)",
            rounding: "0.35",
            totalPayable: "64523.00"
        };
        $("main section#cart_section .cart_body .customer_details_body").prepend(addedItem);
        $("main section#cart_section .cart_footer .customer_total_description .customer_total_description_item:nth-child(2) span").text(total.subTotal);
        $("main section#cart_section .cart_footer .customer_total_description .customer_total_description_item:nth-child(3) span").text(total.totalItem);
        $("main section#cart_section .cart_footer .customer_total_description .customer_total_description_item:nth-child(4) span").text(total.tax);
        $("main section#cart_section .cart_footer .customer_total_description .customer_total_description_item:nth-child(5) span").text(total.charge);
        $("main section#cart_section .cart_footer .customer_total_description .customer_total_description_item:nth-child(6) span").text(total.discount);
        $("main section#cart_section .cart_footer .customer_total_description .customer_total_description_item:nth-child(8) span").text(total.rounding);
        $("main section#cart_section .cart_footer .total_payable span").text(total.totalPayable);
    }
    $("body").on("click", "#addToCartModal .modal_footer button.blue", addItem);
    // Add To Cart Modal


    // SweetAlerts2
    let swalTrigger = function (title, text) {
        Swal.fire({
            title,
            text,
            showConfirmButton: true,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Yes",
            denyButtonText: "Cancel",
            cancelButtonText: "Cancel",
            allowEscapeKey: true,
            didOpen: function () {
                $(document).on("keydown.escClose", function (event) {
                    if (event.key === "Escape") {
                        Swal.close();
                        $(document).off("keydown.escClose");
                    }
                });
            },
            didClose: function () {
                $(document).off("keydown.escClose");
            }
        });
    }
    $("body").on("click", "#openDraftSalesModal .modal_body_right .footer button.deleteOneDraft", function () {
        swalTrigger("Alert!", "Are you sure to delete this hold?");
    });
    $("body").on("click", "#openDraftSalesModal .modal_body_right .footer button.editOneDraft", function () {
        swalTrigger("Alert!", "Are you sure? Previous cart data will be empty!");
    });
    $("body").on("click", "#openDraftSalesModal .modal_body_left .footer button.deleteAllDrafts", function () {
        swalTrigger("Alert!", "Are you sure to delete all hold sales?");
    });
    $("body").on("click", "#registerModal .modal_footer .close_register_button", function () {
        swalTrigger("Alert!", "Are you sure to close register?");
    });
    $("body").on("click", "#recentSalesModal .modal_body_right .footer button.deleteOneSale", function () {
        swalTrigger("Alert!", "Are you sure to delete this sale?");
    });
    $("body").on("click", "main #main_part section .cart_footer .cart_footer_buttons button.cancel", function () {
        swalTrigger("Alert!", "Total Items in cart 7");
    });
    // SweetAlerts2



    // Bootstrap Datepicker
    let present = new Date();
    $("#recentSalesModal .modal_body .modal_body_top .datepicker").datepicker({
        autoclose: true,
        format: "dd-mm-yyyy",
        todayHighlight: true,
    }).datepicker("update", present);
    $("main #main_part section .cart_footer .customer_total_description .customer_total_description_item .icon .datepicker").datepicker({
        autoclose: true,
        format: "dd-mm-yyyy",
        todayHighlight: true,
    });
    $("#addCustomerModal .modal_body .form-group input.datepickerBirth").each(function () {
        $(this).datepicker({
            autoclose: true,
            format: "dd-mm-yyyy",
        });
    });
    $("#editCustomerModal .modal_body .form-group input.datepickerBirth").each(function () {
        $(this).datepicker({
            autoclose: true,
            format: "dd-mm-yyyy",
        });
    });
    // Bootstrap Datepicker


    // More Payment Method
    let innerPaymentMethodCount = 0;
    $("body").on("click", "#morePaymentModal .modal-content .modal_body .more_payment_methods .button", function () {

        innerPaymentMethodCount++;
        let parentElement = $(this).closest(".more_payment_methods");
        let newContent = `
                <div class="added_content">
                    <div class="horizontal_line"></div>
                    <div class="close_more_payment_methods"><div class="remove_pic"><img src="assets/images/svg/cancelRed.svg"></div></div>
                    <div class="form-group">
                        <label for="receivedMoreAmount${innerPaymentMethodCount}">Received Amount</label>
                        <input type="number" value="7275.00" autocomplete="off" id="receivedMoreAmount${innerPaymentMethodCount}">
                    </div>
                    <div class="form-group">
                        <label for="pendingMoreAmount${innerPaymentMethodCount}">Pending Amount</label>
                        <input type="number" value="7275.00" autocomplete="off" id="pendingMoreAmount${innerPaymentMethodCount}"
                            class="pendingAmount">
                    </div>
                    <div class="form-group">
                        <label>Payment Type</label>
                        <select class="select${innerPaymentMethodCount}">
                            <option value="">Cash</option>
                            <option value="">Bank Card</option>
                            <option value="">Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="important">Payment Status</label>
                        <select class="select${innerPaymentMethodCount}">
                            <option value="">Paid</option>
                            <option value="">Unpaid</option>
                            <option value="">Nisyə (yarımçıq ödəniş)</option>
                        </select>
                    </div>
                    <div class="more_payment_methods">
                        <div class="button">Ödənişi hissələrə böl</div>
                        <div class="context">
                            <div class="icon"><img src="assets/images/svg/infoCircle.svg" alt=""></div>
                            <div class="text">Ödənişin bir qismini nağd, bir qismini kartla, başqa qismini başqa <br> ödəniş metodu ilə qəbul edirsinizsə, bu seçilməlidir.</div>
                        </div>
                    </div>
                </div>
                `;

        let lastContent = `
            <div class="added_content">
                <div class="horizontal_line"></div>
                <div class="close_more_payment_methods"><div class="remove_pic"><img src="assets/images/svg/cancelRed.svg"></div></div>
                    <div class="form-group">
                        <label for="receivedMoreAmount${innerPaymentMethodCount}">Received Amount</label>
                        <input type="number" value="7275.00" autocomplete="off" id="receivedMoreAmount${innerPaymentMethodCount}">
                    </div>
                    <div class="form-group">
                        <label for="pendingMoreAmount${innerPaymentMethodCount}">Pending Amount</label>
                        <input type="number" value="7275.00" autocomplete="off" id="pendingMoreAmount${innerPaymentMethodCount}"
                            class="pendingAmount">
                    </div>
                    <div class="form-group">
                        <label>Payment Type</label>
                        <select class="select${innerPaymentMethodCount}">
                            <option value="">Cash</option>
                            <option value="">Bank Card</option>
                            <option value="">Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="important">Payment Status</label>
                        <select class="select${innerPaymentMethodCount}">
                            <option value="">Paid</option>
                            <option value="">Unpaid</option>
                            <option value="">Nisyə (yarımçıq ödəniş)</option>
                        </select>
                    </div>
                </div>`;

        if (innerPaymentMethodCount < 3) {
            $(parentElement).replaceWith(newContent);
            $("#morePaymentModal .modal_body .form-group select").each(function () {
                $(this).select2({
                    dropdownParent: $('#morePaymentModal')
                });
            });
        }
        if (innerPaymentMethodCount == 3) {
            $(parentElement).replaceWith(lastContent);
            $("#morePaymentModal .modal_body .form-group select").each(function () {
                $(this).select2({
                    dropdownParent: $('#morePaymentModal')
                });
            });
        }
        else return;

    });
    $("body").on("click", "#morePaymentModal .modal-content .modal_body .close_more_payment_methods .remove_pic", function(){
        $(this).closest(".added_content").remove();
    });
    // More Payment Method



    // Select2
    $("header .header_wrapper_right .switchary_wrap .select2").select2();
    $("section#cart_section .cart_header select").each(function () {
        $(this).select2({
            dropdownParent: $('section#cart_section .cart_header')
        });
    });
    $("#addCustomerModal .modal_body .form-group select").each(function () {
        $(this).select2({
            dropdownParent: $('#addCustomerModal')
        });
    });
    $("#editCustomerModal .modal_body .form-group select").each(function () {
        $(this).select2({
            dropdownParent: $('#editCustomerModal')
        });
    });
    $("#deliveryPartnerModal .modal_body .form-group select").each(function () {
        $(this).select2({
            dropdownParent: $('#deliveryPartnerModal')
        });
    });
    $("#chargeModal .modal_body .form-group select").each(function () {
        $(this).select2({
            dropdownParent: $('#chargeModal')
        });
    });
    $("#addToCartModal .modal_body .form-group select").each(function () {
        $(this).select2({
            dropdownParent: $('#addToCartModal')
        });
    });
    $("#paymentModal .modal_body .form-group select").each(function () {
        $(this).select2({
            dropdownParent: $('#paymentModal')
        });
    });
    $("#morePaymentModal .modal_body .form-group select").each(function () {
        $(this).select2({
            dropdownParent: $('#morePaymentModal')
        });
    });


    $("#recentSalesModal .modal_body_top .form-group .recentSalesSelect").select2({
        dropdownParent: $('#recentSalesModal')
    });
    $(document).on('keyup', '.select2-search__field', function () {
        // * This ensures keyup event is only processed within id="recentSalesSelect"
        if ($(this).closest('#recentSalesModal').length || $(this).closest('section#cart_section .cart_header').length) {
            setTimeout(() => {
                $('.select2-results__message').text('').html(`
                <button class="select2_addNewCustomer" type="button">
                    <iconify-icon icon="solar:add-circle-broken"></iconify-icon> 
                    <div class="text">Add as new customer</div>
                </button>`);
            }, 700);
        }
    });
    // Select2



    // Second Modal and Overlay Activator
    $("body").on("click", ".select2_addNewCustomer", function () {
        let secondModal = new bootstrap.Modal($('#addCustomerModal')[0]);
        if (!$("#customOverlay").length) $("body").append('<div id="customOverlay"></div>');
        $("#customOverlay").fadeIn();
        secondModal.show();
    });
    $('#addCustomerModal').on('hidden.bs.modal', function () {
        $("#customOverlay").fadeOut(function () {
            $(this).remove();
        });
    });
    // Second Modal and Overlay Activator



    // While Clikcing Discount Input Select Value
    $("body").on("click", "main #main_part section .cart_body .customer_details .draftItemList .discount input", function () {
        this.select();
    });
    $("body").on("click", "#chargeModal .modal_body .form-group input#chargeAmount", function () {
        this.select();
    });
    $("body").on("click", "#holdModal .modal_body .form-group input#holdNumber", function () {
        this.select();
    });
    // While Clikcing Discount Input Select Value



    // Removing Added Items 
    let audioRemove = $("#removeSound")[0];
    $('body').on("click", "main #main_part section .cart_body .customer_details .customer_details_body .total .icon", function () {
        let addedItem = $(this).closest(".draftItemList");
        if (!audioRemove.paused) {
            audioRemove.pause();
            audioRemove.currentTime = 0;
        }
        audioRemove.play();
        setTimeout(function () {
            addedItem.remove();
        }, 100);
    })
    // Removing Added Items



    // Added Items Quantity
    let audioClick = $("#clickSound")[0];
    let calculateQuantity = function (element) {
        let input = $(element).siblings("input[type='number']");
        let inputVal = parseInt($(input).val());
        let maxValue = parseInt($(input).attr("max"));
        let minValue = parseInt($(input).attr("min"));
        if (!audioClick.paused) {
            audioClick.pause();
            audioClick.currentTime = 0;
        }
        audioClick.play();
        if (inputVal < maxValue && $(element).attr("class") == "plus") {
            inputVal += 1;
            $(input).val(inputVal);
        }
        else if (inputVal > minValue && $(element).attr("class") == "minus") {
            inputVal -= 1;
            $(input).val(inputVal);
        } else {
            return;
        }
    }
    $("body").on("click", "main #main_part section .cart_body .customer_details .customer_details_body .qty .input .plus", function () {
        calculateQuantity(this);
    });
    $("body").on("click", "main #main_part section .cart_body .customer_details .customer_details_body .qty .input .minus", function () {
        calculateQuantity(this);
    });
    $("body").on("click", "#addToCartModal .modal_body .form-group .input .plus", function () {
        calculateQuantity(this);
    });
    $("body").on("click", "#addToCartModal .modal_body .form-group .input .minus", function () {
        calculateQuantity(this);
    });
    // Added Items Quantity   



    // Categories Swiper
    let categorySwiper = new Swiper(".myCategorySwiper", {
        direction: "horizontal",
        freeMode: true,
        slidesPerView: "auto",
        mousewheel: true,
        keyboard: {
            enabled: true,
        }
    });

    $("body").on("click", "main #main_part section .product_body .category_wrapper .category_carousel .category_carousel_left .all_categories", function () {
        $("main #main_part section .product_body .category_wrapper .category_carousel .category_carousel_right .swiper-slide .category_link").each(function () {
            $(this).removeClass("active");
        })
        $(this).addClass("active");
    });

    $("body").on("click", "main #main_part section .product_body .category_wrapper .category_carousel .category_carousel_right .swiper-slide .category_link", function () {
        $("main #main_part section .product_body .category_wrapper .category_carousel .category_carousel_right .swiper-slide .category_link").each(function () {
            $(this).removeClass("active");
        })
        $("main #main_part section .product_body .category_wrapper .category_carousel .category_carousel_left .all_categories").removeClass("active");
        $(this).addClass("active");
    });
    // Categories Swiper




    // QR Code Scanner
    let htmlscanner, lastResult, countResults = 0;
    function onScanSuccess(decodeText, decodeResult) {
        if (decodeText !== lastResult) {
            ++countResults;
            lastResult = decodeText;
            alert("Your Barcode is: " + decodeText, decodeResult);
            $("SelectedElement").html(`Your scan ${countResults} : ${decodeText}`);
        }
    }

    $("body").on("click", "main #main_part section .product_header .form-group .barcode", function () {
        if (!htmlscanner) {
            htmlscanner = new Html5QrcodeScanner("barcodeReader", { fps: 10, qrbox: 250 });
            htmlscanner.render(onScanSuccess);
        }
    });
    $("body").on("click", "#barcodeScannerModal .modal-content .modal_footer button, #barcodeScannerModal .modal-content .modalCloseButton", function () {
        if (htmlscanner) {
            htmlscanner.clear();
            htmlscanner = null;
        }
    });
    // QR Code Scanner


    // Open Second Offcanvas
    $("body").on("click", ".filter_offcanvas .openSecondOffcanvas", function(){
        let heading = $(this).find(".text").text();
        $(".filter_offcanvas2").offcanvas("show");
        $(".filter_offcanvas2").find(".header .text").text(heading);
    });
    // Open Second Offcanvas


    // Keyboard Shorcut
    $(document).keydown(function (event) {
        if (!$("body").hasClass("modal-open") && $(".overlayForCalculator").attr("style") == "display: none;") {
            // Alt + F                      Fullscreen Mode
            if (event.altKey && event.key.toLowerCase() === 'f') {
                event.preventDefault();  // Prevents the default action of typing 'F'
                makeFullScreen($(".fullscreen"));
            }

            // Alt + O                      Open Promo Modal
            if (event.altKey && event.key.toLowerCase() === 'o') {
                if (!$('#promoModal').hasClass('show')) {
                    var myModal = new bootstrap.Modal($('#promoModal')[0]);
                    myModal.show();
                }
            }

            // Alt + C                      Add Customer
            if (event.altKey && event.key.toLowerCase() === 'c') {
                if (!$('#addCustomerModal').hasClass('show')) {
                    var myModal = new bootstrap.Modal($('#addCustomerModal')[0]);
                    myModal.show();
                }
            }

            // Alt + X                      Edit Customer
            if (event.altKey && event.key.toLowerCase() === 'x') {
                if (!$('#editCustomerModal').hasClass('show')) {
                    var myModal = new bootstrap.Modal($('#editCustomerModal')[0]);
                    myModal.show();
                }
            }

            // Alt + D                      Draft Sale
            if (event.altKey && event.key.toLowerCase() === 'd') {
                event.preventDefault();     // Prevents the default action of typing Browser
                if (!$('#openDraftSalesModal').hasClass('show')) {
                    var myModal = new bootstrap.Modal($('#openDraftSalesModal')[0]);
                    myModal.show();
                }
            }

            // Alt + T                      Recent Sale
            if (event.altKey && event.key.toLowerCase() === 't') {
                if (!$('#recentSalesModal').hasClass('show')) {
                    var myModal = new bootstrap.Modal($('#recentSalesModal')[0]);
                    myModal.show();
                }
            }

            // Alt + R                      View Register
            if (event.altKey && event.key.toLowerCase() === 'r') {
                if (!$('#registerModal').hasClass('show')) {
                    var myModal = new bootstrap.Modal($('#registerModal')[0]);
                    myModal.show();
                }
            }

            // Alt + E                      Open Calculator
            if (event.altKey && event.key.toLowerCase() === 'e') {
                event.preventDefault();      // Prevents the default action of typing Browser
                if ($('#calculator_main').css('display') == 'none') {
                    $('#calculator_main').css('display', 'flex');
                    set_calculator_position();
                }
            }

            // Alt + K                      Open Shortcut
            if (event.altKey && event.key.toLowerCase() === 'k') {
                if (!$('#keyboardShortcutModal').hasClass('show')) {
                    var myModal = new bootstrap.Modal($('#keyboardShortcutModal')[0]);
                    myModal.show();
                }
            }

            // Shift + P                    Payment or Place Order
            if (event.shiftKey && event.key.toLowerCase() === 'p') {
                if (!$('#paymentModal').hasClass('show')) {
                    var myModal = new bootstrap.Modal($('#paymentModal')[0]);
                    myModal.show();
                }
            }

            // Shift + M                    More Payment or Place Order
            if (event.shiftKey && event.key.toLowerCase() === 'm') {
                if (!$('#morePaymentModal').hasClass('show')) {
                    var myModal = new bootstrap.Modal($('#morePaymentModal')[0]);
                    myModal.show();
                }
            }

            // Shift + C                    Cancel or clear cart data
            if (event.shiftKey && event.key.toLowerCase() === 'c') {
                swalTrigger("Alert!", "Total Items in cart 7");
            }

            // Shift + A                    Item add to cart
            if (event.shiftKey && event.key.toLowerCase() === 'a') {
                if ($("#addToCartModal").hasClass("show")) addItem();
            }

            // Shift + F                   Focus Search Box
            if (event.shiftKey && event.key.toLowerCase() === 'f') {
                event.preventDefault();  // Prevents the default action of typing 'F'
                $("main #main_part section .product_header .form-group input").focus();
            }

            // Shift + B                   Activate Barcode Box
            if (event.shiftKey && event.key.toLowerCase() === 'b') {
                if (!$('#barcodeScannerModal').hasClass('show')) {
                    var myModal = new bootstrap.Modal($('#barcodeScannerModal')[0]);
                    myModal.show();
                    if (!htmlscanner) {
                        htmlscanner = new Html5QrcodeScanner("barcodeReader", { fps: 10, qrbox: 250 });
                        htmlscanner.render(onScanSuccess);
                    }
                }
            }

            // Shift + N                   Open Note Modal
            if (event.shiftKey && event.key.toLowerCase() === 'n') {
                if (!$('#noteModal').hasClass('show')) {
                    var myModal = new bootstrap.Modal($('#noteModal')[0]);
                    myModal.show();
                }
            }

            // Shift + K                   Invoice Date (Calendar)
            if (event.shiftKey && event.key.toLowerCase() === 'k') {
                $("main #main_part section .cart_footer .customer_total_description .customer_total_description_item .icon .datepicker").datepicker('show');
            }

            // Shift + S                   Sale Coupon Discount
            if (event.shiftKey && event.key.toLowerCase() === 's') {
                if (!$('#couponDiscountModal').hasClass('show')) {
                    var myModal = new bootstrap.Modal($('#couponDiscountModal')[0]);
                    myModal.show();
                }
            }

            // Shift + T                   Tax Table
            if (event.shiftKey && event.key.toLowerCase() === 't') {
                if (!$('#taxModal').hasClass('show')) {
                    var myModal = new bootstrap.Modal($('#taxModal')[0]);
                    myModal.show();
                }
            }

            // Shift + G                   Charge Modal
            if (event.shiftKey && event.key.toLowerCase() === 'g') {
                if (!$('#chargeModal').hasClass('show')) {
                    var myModal = new bootstrap.Modal($('#chargeModal')[0]);
                    myModal.show();
                }
            }

            // Shift + D                   Discount Modal
            if (event.shiftKey && event.key.toLowerCase() === 'd') {
                if (!$('#discountModal').hasClass('show')) {
                    var myModal = new bootstrap.Modal($('#discountModal')[0]);
                    myModal.show();
                }
            }

            // Shift + X                   Delivery Partner
            if (event.shiftKey && event.key.toLowerCase() === 'x') {
                if (!$('#deliveryPartnerModal').hasClass('show')) {
                    var myModal = new bootstrap.Modal($('#deliveryPartnerModal')[0]);
                    myModal.show();
                }
            }

            // Shift + h                   Hold Added Items
            if (event.shiftKey && event.key.toLowerCase() === 'h') {
                if (!$('#holdModal').hasClass('show')) {
                    var myModal = new bootstrap.Modal($('#holdModal')[0]);
                    myModal.show();
                }
            }
        }
    });
    // Keyboard Shorcut
});