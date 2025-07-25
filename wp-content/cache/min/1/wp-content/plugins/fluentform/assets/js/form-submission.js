( () => {
    function e(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            r.push.apply(r, n)
        }
        return r
    }
    function t(t) {
        for (var n = 1; n < arguments.length; n++) {
            var a = null != arguments[n] ? arguments[n] : {};
            n % 2 ? e(Object(a), !0).forEach((function(e) {
                r(t, e, a[e])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : e(Object(a)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
            }
            ))
        }
        return t
    }
    function r(e, t, r) {
        var a;
        return a = function(e, t) {
            if ("object" != n(e) || !e)
                return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
                var a = r.call(e, t || "default");
                if ("object" != n(a))
                    return a;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(t, "string"),
        (t = "symbol" == n(a) ? a : String(a))in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    }
    function n(e) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        n(e)
    }
    jQuery(document).ready((function() {
        window.fluentFormrecaptchaSuccessCallback = function(e) {
            if (window.innerWidth < 768 && /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
                var t = jQuery(".g-recaptcha").filter((function(t, r) {
                    return grecaptcha.getResponse(t) == e
                }
                ));
                t.length && jQuery("html, body").animate({
                    scrollTop: t.first().offset().top - jQuery(window).height() / 2
                }, 0)
            }
        }
        ,
        window.ffValidationError = function() {
            var e = function() {};
            return (e.prototype = Object.create(Error.prototype)).constructor = e,
            e
        }(),
        window.ff_helper = {
            numericVal: function(e) {
                if (e.hasClass("ff_numeric")) {
                    var t = JSON.parse(e.attr("data-formatter"));
                    return currency(e.val(), t).value
                }
                return e.val() || 0
            },
            formatCurrency: function(e, t) {
                if (e.hasClass("ff_numeric")) {
                    var r = JSON.parse(e.attr("data-formatter"));
                    return currency(t, r).format()
                }
                return t
            }
        },
        function(e, r) {
            e || (e = {}),
            e.stepAnimationDuration = parseInt(e.stepAnimationDuration);
            var a = {};
            window.fluentFormApp = function(t) {
                var i = t.attr("data-form_instance");
                i = i ? i.replace(/[^a-zA-Z0-9_-]/g, "") : "";
                var f = window["fluent_form_" + i]
                  , s = f && "object" === n(f) ? f : null;
                if (!s)
                    return console.log("No Fluent form JS vars found!"),
                    !1;
                if (a[i])
                    return a[i];
                var c, l, u, d, h, p, m, g, v, _, w, y, b, k, C, S, j, x, T, O, A, Q, F, P, N = s.form_id_selector, I = "." + i;
                return c = o,
                l = {},
                u = function() {
                    return r("body").find("form" + I)
                }
                ,
                h = function(e, r) {
                    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                      , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "next";
                    t.trigger("update_slider", {
                        goBackToStep: e,
                        animDuration: r,
                        isScrollTop: n,
                        actionType: a
                    })
                }
                ,
                p = function(e) {
                    try {
                        var t = e.find(":input").filter((function(e, t) {
                            return !r(t).closest(".has-conditions").hasClass("ff_excluded")
                        }
                        ));
                        k(t);
                        var n = t.serializeArray()
                          , a = n.map((function(e) {
                            return e.name
                        }
                        ));
                        t = t.filter((function() {
                            return !r(this).closest(".ff-el-input--content").find("table").length
                        }
                        ));
                        var i = {};
                        t.each((function() {
                            var t = r(this).attr("name");
                            a.includes(t) || (r(this).is(":checkbox") || r(this).is(":radio")) && (i[t] || e.find('input[name="' + t + '"]:checked').length || (n.push({
                                name: t,
                                value: ""
                            }),
                            i[t] = !0))
                        }
                        ));
                        var o = {
                            data: r.param(r.map(n, (function(e) {
                                return {
                                    name: e.name,
                                    value: e.value
                                }
                            }
                            ))),
                            action: "fluentform_submit",
                            form_id: e.data("form_id")
                        };
                        if (r.each(e.find("[type=file]"), (function(e, t) {
                            var n = {}
                              , a = t.name + "[]";
                            n[a] = [],
                            r(t).closest("div").find(".ff-uploaded-list").find(".ff-upload-preview[data-src]").each((function(e, t) {
                                n[a][e] = r(this).data("src")
                            }
                            )),
                            r.each(n, (function(e, t) {
                                if (t.length) {
                                    var n = {};
                                    n[e] = t,
                                    o.data += "&" + r.param(n)
                                }
                            }
                            ))
                        }
                        )),
                        e.find(".ff_uploading").length) {
                            var f = r("<div/>", {
                                class: "error text-danger"
                            })
                              , s = r("<span/>", {
                                class: "error-clear",
                                html: "&times;",
                                click: function(e) {
                                    return r(I + "_errors").html("")
                                }
                            })
                              , c = r("<span/>", {
                                class: "error-text",
                                text: "File upload in progress. Please wait..."
                            });
                            return r(I + "_errors").html(f.append(c, s)).show()
                        }
                        if (e.find(".ff-el-recaptcha.g-recaptcha").length) {
                            var u = e.find(".ff-el-recaptcha.g-recaptcha").data("g-recaptcha_widget_id");
                            void 0 !== u && (o.data += "&" + r.param({
                                "g-recaptcha-response": grecaptcha.getResponse(u)
                            }))
                        }
                        if (e.find(".ff-el-hcaptcha.h-captcha").length) {
                            var d = e.find(".ff-el-hcaptcha.h-captcha").data("h-captcha_widget_id");
                            void 0 !== d && (o.data += "&" + r.param({
                                "h-captcha-response": hcaptcha.getResponse(d)
                            }))
                        }
                        if (e.find(".ff-el-turnstile.cf-turnstile").length) {
                            var h = e.find(".ff-el-turnstile.cf-turnstile").data("cf-turnstile_widget_id");
                            void 0 !== h && (o.data += "&" + r.param({
                                "cf-turnstile-response": turnstile.getResponse(h)
                            }))
                        }
                        r(I + "_success").remove(),
                        r(I + "_errors").html(""),
                        e.find(".error").html(""),
                        e.parent().find(".ff-errors-in-stack").hide(),
                        function(e, t) {
                            var r = []
                              , n = l;
                            return e.hasClass("ff_has_v3_recptcha") && (n.ff_v3_recptcha = function(e, t) {
                                var r = jQuery.Deferred()
                                  , n = e.data("recptcha_key");
                                return grecaptcha.execute(n, {
                                    action: "submit"
                                }).then((function(e) {
                                    t.data += "&" + jQuery.param({
                                        "g-recaptcha-response": e
                                    }),
                                    r.resolve()
                                }
                                )),
                                r.promise()
                            }
                            ),
                            jQuery.each(n, (function(n, a) {
                                r.push(a(e, t))
                            }
                            )),
                            jQuery.when.apply(jQuery, r)
                        }(e, o).then((function() {
                            g(e),
                            m(e, o)
                        }
                        ))
                    } catch (e) {
                        if (!(e instanceof ffValidationError))
                            throw e;
                        C(e.messages),
                        y(350)
                    }
                }
                ,
                m = function(t, n) {
                    var a, i, o = (a = "t=" + Date.now(),
                    i = e.ajaxUrl,
                    i += (i.split("?")[1] ? "&" : "?") + a);
                    if (!this.isSending) {
                        var f, c = this;
                        this.isSending = !0,
                        r.post(o, n).then((function(n) {
                            if (!n || !n.data || !n.data.result)
                                return t.trigger("fluentform_submission_failed", {
                                    form: t,
                                    response: n
                                }),
                                void C(n);
                            if (f = n,
                            n.data.append_data && F(n.data.append_data),
                            n.data.nextAction)
                                t.trigger("fluentform_next_action_" + n.data.nextAction, {
                                    form: t,
                                    response: n
                                });
                            else {
                                if (t.triggerHandler("fluentform_submission_success", {
                                    form: t,
                                    config: s,
                                    response: n
                                }),
                                jQuery(document.body).trigger("fluentform_submission_success", {
                                    form: t,
                                    config: s,
                                    response: n
                                }),
                                "redirectUrl"in n.data.result)
                                    return n.data.result.message && (r("<div/>", {
                                        id: N + "_success",
                                        class: "ff-message-success",
                                        role: "status",
                                        "aria-live": "polite"
                                    }).html(n.data.result.message).insertAfter(t).focus(),
                                    t.find(".ff-el-is-error").removeClass("ff-el-is-error")),
                                    void (location.href = n.data.result.redirectUrl);
                                var a = N + "_success"
                                  , i = "#" + a;
                                r(i).length && r(i).slideUp("fast"),
                                r("<div/>", {
                                    id: a,
                                    class: "ff-message-success",
                                    role: "status",
                                    "aria-live": "polite"
                                }).html(n.data.result.message).insertAfter(t).focus(),
                                t.find(".ff-el-is-error").removeClass("ff-el-is-error"),
                                "hide_form" == n.data.result.action ? (t.hide().addClass("ff_force_hide"),
                                t[0].reset()) : (jQuery(document.body).trigger("fluentform_reset", [t, s]),
                                t[0].reset());
                                var o = r(i);
                                o.length && !b(o[0]) && r("html, body").animate({
                                    scrollTop: o.offset().top - (r("#wpadminbar") ? 32 : 0) - 20
                                }, e.stepAnimationDuration)
                            }
                        }
                        )).fail((function(r) {
                            if (t.trigger("fluentform_submission_failed", {
                                form: t,
                                response: r
                            }),
                            r && r.responseJSON && r.responseJSON && r.responseJSON.errors) {
                                if (f = r,
                                r.responseJSON.append_data && F(r.responseJSON.append_data),
                                C(r.responseJSON.errors),
                                y(350),
                                t.find(".fluentform-step").length) {
                                    var n = t.find(".error").not(":empty:first").closest(".fluentform-step");
                                    if (n.length) {
                                        var a = n.index();
                                        h(a, e.stepAnimationDuration, !1)
                                    }
                                }
                                v(t)
                            } else
                                C(r.responseText)
                        }
                        )).always((function(e) {
                            var r;
                            if (c.isSending = !1,
                            null === (r = f) || void 0 === r || null === (r = r.data) || void 0 === r || null === (r = r.result) || void 0 === r || !r.hasOwnProperty("redirectUrl")) {
                                if (v(t),
                                window.grecaptcha) {
                                    var n = t.find(".ff-el-recaptcha.g-recaptcha").data("g-recaptcha_widget_id");
                                    void 0 !== n && grecaptcha.reset(n)
                                }
                                if (window.hcaptcha) {
                                    var a = t.find(".ff-el-hcaptcha.h-captcha").data("h-captcha_widget_id");
                                    void 0 !== a && hcaptcha.reset(a)
                                }
                                if (window.turnstile) {
                                    var i = t.find(".ff-el-turnstile.cf-turnstile").data("cf-turnstile_widget_id");
                                    void 0 !== i && turnstile.reset(i)
                                }
                            }
                        }
                        ))
                    }
                }
                ,
                _ = function() {
                    "yes" != t.attr("data-ff_reinit") && (r(document).on("submit", I, (function(e) {
                        e.preventDefault(),
                        window.ff_sumitting_form || (window.ff_sumitting_form = !0,
                        setTimeout((function() {
                            window.ff_sumitting_form = !1
                        }
                        ), 1500),
                        p(r(this)))
                    }
                    )),
                    r(document).on("reset", I, (function(n) {
                        !function(n) {
                            r(".ff-step-body", t).length && h(0, e.stepAnimationDuration, !1),
                            n.find(".ff-el-repeat .ff-t-cell").each((function() {
                                r(this).find("input").not(":first").remove()
                            }
                            )),
                            n.find(".ff-el-repeat .ff-el-repeat-buttons-list").find(".ff-el-repeat-buttons").not(":first").remove();
                            var a = n.find("input[type=checkbox],input[type=radio]");
                            a.length && a.each((function(e, t) {
                                (t = r(t)).prop("defaultChecked") ? t.closest(".ff-el-form-check").addClass("ff_item_selected") : t.closest(".ff-el-form-check.ff_item_selected").removeClass("ff_item_selected")
                            }
                            )),
                            n.find("input[type=file]").closest("div").find(".ff-uploaded-list").html("").end().closest("div").find(".ff-upload-progress").addClass("ff-hidden").find(".ff-el-progress-bar").css("width", "0%");
                            var i = n.find('input[type="range"]');
                            i.length && i.each((function(e, t) {
                                (t = r(t)).val(t.data("calc_value")).change()
                            }
                            )),
                            r.each(s.conditionals, (function(e, t) {
                                r.each(t.conditions, (function(e, t) {
                                    w(T(t.field))
                                }
                                ))
                            }
                            ))
                        }(r(this))
                    }
                    )))
                }
                ,
                w = function(e) {
                    var t = e.prop("type");
                    null != t && ("checkbox" == t || "radio" == t ? e.each((function(e, t) {
                        var n = r(this);
                        n.prop("checked", n.prop("defaultChecked"))
                    }
                    )) : t.startsWith("select") ? e.find("option").each((function(e, t) {
                        var n = r(this);
                        n.prop("selected", n.prop("defaultSelected"))
                    }
                    )) : e.val(e.prop("defaultValue")),
                    e.trigger("change"))
                }
                ,
                y = function(e) {
                    var n = s.settings.layout.errorMessagePlacement;
                    if (n && "stackToBottom" != n) {
                        var a = t.find(".ff-el-is-error").first();
                        a.length && !b(a[0]) && r("html, body").delay(e).animate({
                            scrollTop: a.offset().top - (r("#wpadminbar") ? 32 : 0) - 20
                        }, e)
                    }
                }
                ,
                b = function(e) {
                    if (!e)
                        return !0;
                    var t = e.getBoundingClientRect();
                    return t.top >= 0 && t.left >= 0 && t.bottom <= r(window).height() && t.right <= r(window).width()
                }
                ,
                C = function(e) {
                    if (t.parent().find(".ff-errors-in-stack").empty(),
                    e)
                        if ("string" != typeof e) {
                            var n = s.settings.layout.errorMessagePlacement;
                            if (!n || "stackToBottom" == n)
                                return S(e),
                                !1;
                            t.find(".error").empty(),
                            t.find(".ff-el-group").removeClass("ff-el-is-error"),
                            r.each(e, (function(e, t) {
                                "string" == typeof t && (t = [t]),
                                r.each(t, (function(t, r) {
                                    j(e, r)
                                }
                                ))
                            }
                            ))
                        } else
                            S({
                                error: [e]
                            })
                }
                ,
                S = function(e) {
                    var t = u()
                      , n = t.parent().find(".ff-errors-in-stack");
                    e && (r.isEmptyObject(e) || (r.each(e, (function(e, a) {
                        "string" == typeof a && (a = [a]),
                        r.each(a, (function(a, i) {
                            var o = r("<div/>", {
                                class: "error text-danger"
                            })
                              , f = r("<span/>", {
                                class: "error-clear",
                                html: "&times;"
                            })
                              , s = r("<span/>", {
                                class: "error-text",
                                "data-name": T(e).attr("name"),
                                html: i
                            });
                            o.attr("role", "alert"),
                            o.append(s, f),
                            r(document.body).trigger("fluentform_error_in_stack", {
                                form: t,
                                element: T(e),
                                message: s
                            }),
                            n.append(o).show()
                        }
                        ));
                        var i = T(e);
                        if (i) {
                            var o = i.attr("name");
                            i.attr("aria-invalid", "true");
                            var f = r("[name='" + o + "']").first();
                            f && f.closest(".ff-el-group").addClass("ff-el-is-error")
                        }
                    }
                    )),
                    b(n[0]) || r("html, body").animate({
                        scrollTop: n.offset().top - 100
                    }, 350),
                    n.on("click", ".error-clear", (function() {
                        r(this).closest("div").remove(),
                        n.hide()
                    }
                    )).on("click", ".error-text", (function() {
                        var e = r("[name='".concat(r(this).data("name"), "']")).first();
                        r("html, body").animate({
                            scrollTop: e.offset() && e.offset().top - 100
                        }, 350, (function(t) {
                            return e.focus()
                        }
                        ))
                    }
                    ))))
                }
                ,
                j = function(e, n) {
                    var a, i;
                    (a = T(e)).length ? (a.attr("aria-invalid", "true"),
                    (i = r("<div/>", {
                        class: "error text-danger"
                    })).attr("role", "alert"),
                    a.closest(".ff-el-group").addClass("ff-el-is-error"),
                    a.closest(".ff-el-input--content").length ? (a.closest(".ff-el-input--content").find("div.error").remove(),
                    r(document.body).trigger("fluentform_error_below_element", {
                        form: t,
                        element: a,
                        message: n
                    }),
                    a.closest(".ff-el-input--content").append(i.html(n))) : (a.find("div.error").remove(),
                    a.append(i.text(n)))) : S([n])
                }
                ,
                x = function() {
                    t.find(".ff-el-group,.ff_repeater_table, .ff_repeater_container").on("change", "input,select,textarea", (function() {
                        if (!window.ff_disable_error_clear) {
                            r(this).attr("aria-invalid", "false");
                            var e = s.settings.layout.errorMessagePlacement;
                            if (e || "stackToBottom" != e) {
                                var t = r(this).closest(".ff-el-group");
                                t.hasClass("ff-el-is-error") && t.removeClass("ff-el-is-error").find(".error.text-danger").remove()
                            }
                        }
                    }
                    ))
                }
                ,
                T = function(e) {
                    var t = u()
                      , n = r("[data-name='" + e + "']", t);
                    return (n = n.length ? n : r("[name='" + e + "']", t)).length ? n : r("[name='" + e + "[]']", t)
                }
                ,
                O = function() {
                    t.find(".ff-el-recaptcha.g-recaptcha").length && window.grecaptcha && "function" == typeof window.grecaptcha.ready && window.grecaptcha.ready((function() {
                        t.find(".ff-el-recaptcha.g-recaptcha").each((function() {
                            A("g-recaptcha", r(this), grecaptcha.render)
                        }
                        ))
                    }
                    )),
                    t.find(".ff-el-turnstile.cf-turnstile").length && window.turnstile && "function" == typeof window.turnstile.ready && window.turnstile.ready((function() {
                        t.find(".ff-el-turnstile.cf-turnstile").each((function() {
                            A("cf-turnstile", r(this), turnstile.render)
                        }
                        ))
                    }
                    )),
                    t.find(".ff-el-hcaptcha.h-captcha").length && window.hcaptcha && t.find(".ff-el-hcaptcha.h-captcha").each((function() {
                        A("h-captcha", r(this), hcaptcha.render)
                    }
                    ))
                }
                ,
                A = function(e, t, r) {
                    var n = t.data("sitekey")
                      , a = t.attr("id")
                      , i = "data-".concat(e, "_widget_id");
                    try {
                        var o = t.attr(i);
                        if ("g-recaptcha" === e || "h-captcha" === e) {
                            if (o && t.find("iframe").length > 0)
                                return
                        } else if ("cf-turnstile" === e) {
                            var f = t.find('input[name="cf-turnstile-response"]');
                            if (f.length && f.val())
                                return;
                            var s = t.attr(i);
                            s && window.turnstile && turnstile.remove(s)
                        }
                        var c = a;
                        "cf-turnstile" === e && (c = "#" + a),
                        o = r(c, {
                            sitekey: n
                        }),
                        t.attr(i, o)
                    } catch (t) {
                        console.error("Error rendering ".concat(e, ":"), t)
                    }
                }
                ,
                Q = function(e, t, r) {
                    var n = "data-".concat(e, "_widget_id")
                      , a = t.attr(n);
                    if (a)
                        try {
                            return r(a),
                            !0
                        } catch (r) {
                            console.error("Error resetting ".concat(e, ":"), r),
                            t.removeAttr(n).removeData("".concat(e, "-rendered"))
                        }
                    return !1
                }
                ,
                F = function(e) {
                    jQuery.each(e, (function(e, n) {
                        if (n) {
                            var a = t.find("input[name=" + e + "]");
                            a.length ? a.attr("value", n) : r("<input>").attr({
                                type: "hidden",
                                name: e,
                                value: n
                            }).appendTo(t)
                        }
                    }
                    ))
                }
                ,
                P = {
                    initFormHandlers: function() {
                        _(),
                        d(),
                        x(),
                        t.removeClass("ff-form-loading").addClass("ff-form-loaded"),
                        t.on("show_element_error", (function(e, t) {
                            j(t.element, t.message)
                        }
                        ))
                    },
                    registerFormSubmissionHandler: _,
                    maybeInlineForm: d = function() {
                        t.hasClass("ff-form-inline") && t.find("button.ff-btn-submit").css("height", "50px")
                    }
                    ,
                    reinitExtras: function() {
                        t.find(".ff-el-recaptcha.g-recaptcha").length && window.grecaptcha && "function" == typeof window.grecaptcha.ready && window.grecaptcha.ready((function() {
                            t.find(".ff-el-recaptcha.g-recaptcha").each((function() {
                                var e = r(this);
                                Q("g-recaptcha", e, grecaptcha.reset) || A("g-recaptcha", e, grecaptcha.render)
                            }
                            ))
                        }
                        )),
                        t.find(".ff-el-turnstile.cf-turnstile").length && window.turnstile && "function" == typeof window.turnstile.ready && window.turnstile.ready((function() {
                            t.find(".ff-el-turnstile.cf-turnstile").each((function() {
                                var e = r(this);
                                Q("cf-turnstile", e, turnstile.reset) || A("cf-turnstile", e, turnstile.render)
                            }
                            ))
                        }
                        )),
                        t.find(".ff-el-hcaptcha.h-captcha").length && window.hcaptcha && t.find(".ff-el-hcaptcha.h-captcha").each((function() {
                            var e = r(this);
                            Q("h-captcha", e, hcaptcha.reset) || A("h-captcha", e, hcaptcha.render)
                        }
                        ))
                    },
                    initTriggers: function() {
                        t = u(),
                        jQuery(document.body).trigger("fluentform_init", [t, s]),
                        jQuery(document.body).trigger("fluentform_init_" + s.id, [t, s]),
                        t.trigger("fluentform_init_single", [this, s]),
                        t.find("input.ff-el-form-control").on("keypress", (function(e) {
                            return 13 !== e.which
                        }
                        )),
                        t.data("is_initialized", "yes"),
                        t.find("input.ff-read-only").each((function() {
                            r(this).attr({
                                tabindex: "-1",
                                readonly: "readonly"
                            })
                        }
                        )),
                        t.find(".ff-el-tooltip").on("mouseenter", (function(e) {
                            var n = r(this).data("content")
                              , a = r(".ff-el-pop-content");
                            a.length || (r("<div/>", {
                                class: "ff-el-pop-content"
                            }).appendTo(document.body),
                            a = r(".ff-el-pop-content")),
                            n = n.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "").replace(/<iframe[\s\S]*?>[\s\S]*?<\/iframe>/gi, "").replace(/<.*?\bon\w+=["'][^"']*["']/gi, "").replace(/javascript:/gi, ""),
                            a.html(n);
                            var i = t.innerWidth() - 20;
                            a.css("max-width", i);
                            var o = r(this).offset().left
                              , f = a.outerWidth()
                              , s = a.outerHeight()
                              , c = o - f / 2 + 10;
                            c < 15 && (c = 15),
                            a.css("top", r(this).offset().top - s - 5),
                            a.css("left", c)
                        }
                        )),
                        t.find(".ff-el-tooltip").on("mouseleave", (function() {
                            r(".ff-el-pop-content").remove()
                        }
                        )),
                        r(document).on("lity:open", (function() {
                            var e;
                            null === (e = window.turnstile) || void 0 === e || e.remove(),
                            O()
                        }
                        )),
                        t.one("focus", 'input, select, textarea, input[type="checkbox"], input[type="radio"]', (function() {
                            t.trigger("fluentform_first_interaction")
                        }
                        )),
                        t.on("fluentform_first_interaction", (function() {
                            O()
                        }
                        )),
                        t.on("ff_to_next_page ff_to_prev_page", (function(e) {
                            O()
                        }
                        )),
                        O()
                    },
                    validate: k = function(e) {
                        e.length || (e = r("form.frm-fluent-form").find(":input").not(":button").filter((function(e, t) {
                            return !r(t).closest(".has-conditions").hasClass("ff_excluded")
                        }
                        ))),
                        e.each((function(e, t) {
                            r(t).closest(".ff-el-group").removeClass("ff-el-is-error").find(".error").remove()
                        }
                        )),
                        c().validate(e, s.rules)
                    }
                    ,
                    showErrorMessages: C,
                    scrollToFirstError: y,
                    settings: s,
                    formSelector: I,
                    sendData: m,
                    addGlobalValidator: function(e, t) {
                        l[e] = t
                    },
                    config: s,
                    showFormSubmissionProgress: g = function(e) {
                        e.addClass("ff_submitting"),
                        e.find(".ff-btn-submit").addClass("disabled").addClass("ff-working").prop("disabled", !0)
                    }
                    ,
                    addFieldValidationRule: function(e, t, r) {
                        s.rules[e] || (s.rules[e] = {}),
                        s.rules[e][t] = r
                    },
                    removeFieldValidationRule: function(e, t) {
                        e in s.rules && t in s.rules[e] && delete s.rules[e][t]
                    },
                    hideFormSubmissionProgress: v = function(e) {
                        e.removeClass("ff_submitting"),
                        e.find(".ff-btn-submit").removeClass("disabled").removeClass("ff-working").attr("disabled", !1),
                        t.parent().find(".ff_msg_temp").remove()
                    }
                },
                a[i] = P,
                P
            }
            ;
            var i = {
                init: function() {
                    var e = this;
                    setTimeout((function() {
                        e.initMultiSelect()
                    }
                    ), 100),
                    this.initMask(),
                    this.initNumericFormat(),
                    this.initCheckableActive(),
                    this.maybeInitSpamTokenProtection(),
                    this.maybeHandleCleanTalkSubmitTime()
                },
                maybeInitSpamTokenProtection: function() {
                    var e = this;
                    jQuery("form.frm-fluent-form").each((function(t, r) {
                        var n = jQuery(r)
                          , a = n.find(".fluent-form-token-field");
                        if (0 !== a.length && !n.hasClass("ff_tokenizing") && !n.hasClass("ff_tokenized")) {
                            var i = function() {
                                n.hasClass("ff_tokenized") || n.hasClass("ff_tokenizing") || (n.addClass("ff_tokenizing"),
                                e.generateAndSetToken(n, a))
                            };
                            n.one("ff_to_next_page ff_to_prev_page", (function(e) {
                                i()
                            }
                            )),
                            n.on("fluentform_first_interaction", (function() {
                                i()
                            }
                            ))
                        }
                    }
                    ))
                },
                generateAndSetToken: function(t, r) {
                    var n, a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], i = t.data("form_id"), o = e.ajaxUrl + "?t=" + Date.now(), f = this;
                    jQuery.post(o, {
                        action: "fluentform_generate_protection_token",
                        form_id: i,
                        nonce: null === (n = e) || void 0 === n ? void 0 : n.token_nonce
                    }).done((function(e) {
                        e.success && e.data.token ? (r.val(e.data.token),
                        t.addClass("ff_tokenized")) : (r.val(null),
                        console.error("Token generation failed for form ID:", i))
                    }
                    )).fail((function(e, n, o) {
                        console.error("Error generating token for form ID:", i, o),
                        a && setTimeout((function() {
                            f.generateAndSetToken(t, r, !1)
                        }
                        ), 1e3)
                    }
                    )).always((function() {
                        t.removeClass("ff_tokenizing")
                    }
                    ))
                },
                maybeHandleCleanTalkSubmitTime: function() {
                    var e;
                    null !== (e = window.fluentFormVars) && void 0 !== e && e.has_cleantalk && jQuery("form.frm-fluent-form").each((function(e, t) {
                        var r = jQuery(t).find(".ff_ct_form_load_time");
                        r.length && r.val(Math.floor(Date.now() / 1e3))
                    }
                    ))
                },
                initMultiSelect: function() {
                    r.isFunction(window.Choices) && r(".ff_has_multi_select").length && r(".ff_has_multi_select").each((function(e, n) {
                        var a = t(t({}, {
                            removeItemButton: !0,
                            silent: !0,
                            shouldSort: !1,
                            searchEnabled: !0,
                            searchResultLimit: 50
                        }), window.fluentFormVars.choice_js_vars)
                          , i = r(n).attr("data-max_selected_options");
                        parseInt(i) && (a.maxItemCount = parseInt(i),
                        a.maxItemText = function(e) {
                            var t = window.fluentFormVars.choice_js_vars.maxItemText;
                            return t = t.replace("%%maxItemCount%%", e)
                        }
                        ),
                        a.callbackOnCreateTemplates = function() {
                            r(this.passedElement.element);
                            return {
                                option: function(e) {
                                    var t = Choices.defaults.templates.option.call(this, e);
                                    return e.customProperties && (t.dataset.calc_value = e.customProperties),
                                    t
                                }
                            }
                        }
                        ,
                        r(n).data("choicesjs", new Choices(n,a))
                    }
                    ))
                },
                initMask: function() {
                    if (null != jQuery.fn.mask) {
                        var e = {
                            clearIfNotMatch: window.fluentFormVars.input_mask_vars.clearIfNotMatch,
                            translation: {
                                "*": {
                                    pattern: /[0-9a-zA-Z]/
                                },
                                0: {
                                    pattern: /\d/
                                },
                                9: {
                                    pattern: /\d/,
                                    optional: !0
                                },
                                "#": {
                                    pattern: /\d/,
                                    recursive: !0
                                },
                                A: {
                                    pattern: /[a-zA-Z0-9]/
                                },
                                S: {
                                    pattern: /[a-zA-Z]/
                                }
                            }
                        };
                        jQuery("input[data-mask]").each((function(t, r) {
                            var n = (r = jQuery(r)).attr("data-mask")
                              , a = e;
                            r.attr("data-mask-reverse") && (a.reverse = !0),
                            r.attr("data-clear-if-not-match") && (a.clearIfNotMatch = !0),
                            n && r.mask(n, a)
                        }
                        ))
                    }
                },
                initCheckableActive: function() {
                    r(document).on("change", ".ff-el-form-check input[type=radio]", (function() {
                        r(this).is(":checked") && (r(this).closest(".ff-el-input--content").find(".ff-el-form-check").removeClass("ff_item_selected"),
                        r(this).closest(".ff-el-form-check").addClass("ff_item_selected"))
                    }
                    )),
                    r(document).on("change", ".ff-el-form-check input[type=checkbox]", (function() {
                        r(this).is(":checked") ? r(this).closest(".ff-el-form-check").addClass("ff_item_selected") : r(this).closest(".ff-el-form-check").removeClass("ff_item_selected")
                    }
                    ))
                },
                initNumericFormat: function() {
                    var e = r("form.frm-fluent-form .ff_numeric");
                    r.each(e, (function(e, t) {
                        var n = r(t)
                          , a = JSON.parse(n.attr("data-formatter"));
                        n.val() && n.val(window.ff_helper.formatCurrency(n, n.val())),
                        n.on("blur change", (function() {
                            var e = currency(r(this).val(), a).format();
                            r(this).val(e)
                        }
                        ))
                    }
                    ))
                }
            }
              , o = function() {
                return new function() {
                    this.errors = {},
                    this.validate = function(e, t) {
                        var n, a, i = this, o = !0;
                        e.each((function(e, f) {
                            n = r(f),
                            a = n.prop("name").replace("[]", ""),
                            "repeater_item" !== n.data("type") && "repeater_container" !== n.data("type") || (a = n.attr("data-name"),
                            t[a] = t[n.data("error_index")]),
                            t[a] && r.each(t[a], (function(e, t) {
                                e in i && (i[e](n, t) || (o = !1,
                                a in i.errors || (i.errors[a] = {}),
                                i.errors[a][e] = t.message))
                            }
                            ))
                        }
                        )),
                        !o && this.throwValidationException()
                    }
                    ,
                    this.throwValidationException = function() {
                        var e = new ffValidationError("Validation Error!");
                        throw e.messages = this.errors,
                        e
                    }
                    ,
                    this.required = function(e, t) {
                        if (!t.value)
                            return !0;
                        var n = e.prop("type");
                        if ("checkbox" == n || "radio" == n)
                            return e.parents(".ff-el-group").attr("data-name") && !t.per_row ? e.parents(".ff-el-group").find("input:checked").length : r('[name="' + e.prop("name") + '"]:checked').length;
                        if (n.startsWith("select")) {
                            var a = e.find(":selected");
                            return !(!a.length || !a.val().length)
                        }
                        return "file" == n ? e.closest("div").find(".ff-uploaded-list").find(".ff-upload-preview[data-src]").length : "false" == e.attr("is-changed") ? "" : String(r.trim(e.val())).length
                    }
                    ,
                    this.url = function(e, t) {
                        var r = e.val();
                        if (!t.value || !r.length)
                            return !0;
                        return /^(ftp|http|https):\/\/[^ "]+$/.test(r)
                    }
                    ,
                    this.email = function(e, t) {
                        var r = e.val();
                        if (!t.value || !r.length)
                            return !0;
                        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(r.toLowerCase())
                    }
                    ,
                    this.numeric = function(e, t) {
                        var n = window.ff_helper.numericVal(e);
                        return n = n.toString(),
                        !t.value || !n || r.isNumeric(n)
                    }
                    ,
                    this.min = function(e, t) {
                        if (!e.val())
                            return !0;
                        var r = window.ff_helper.numericVal(e);
                        return r = r.toString(),
                        !t.value || !r.length || (this.numeric(e, t) ? Number(r) >= Number(t.value) : void 0)
                    }
                    ,
                    this.max = function(e, t) {
                        if (!e.val())
                            return !0;
                        var r = window.ff_helper.numericVal(e);
                        return r = r.toString(),
                        !t.value || !r.length || (this.numeric(e, t) ? Number(r) <= Number(t.value) : void 0)
                    }
                    ,
                    this.digits = function(e, t) {
                        if (!e.val())
                            return !0;
                        var r = window.ff_helper.numericVal(e);
                        return r = r.toString(),
                        !t.value || !r.length || this.numeric(e, t) && r.length == t.value
                    }
                    ,
                    this.max_file_size = function() {
                        return !0
                    }
                    ,
                    this.max_file_count = function() {
                        return !0
                    }
                    ,
                    this.allowed_file_types = function() {
                        return !0
                    }
                    ,
                    this.allowed_image_types = function() {
                        return !0
                    }
                    ,
                    this.force_failed = function() {
                        return !1
                    }
                    ,
                    this.valid_phone_number = function(e, t) {
                        if (!e.val())
                            return !0;
                        if (void 0 === window.intlTelInputGlobals)
                            return !0;
                        if (e && e[0]) {
                            var r = window.intlTelInputGlobals.getInstance(e[0]);
                            if (!r)
                                return !0;
                            if (e.hasClass("ff_el_with_extended_validation"))
                                return !!r.isValidNumber() && (e.val(r.getNumber()),
                                !0);
                            var n = r.getSelectedCountryData()
                              , a = e.val();
                            return !e.attr("data-original_val") && a && n && n.dialCode && (e.val("+" + n.dialCode + a),
                            e.attr("data-original_val", a)),
                            !0
                        }
                    }
                }
            }
              , f = r("form.frm-fluent-form");
            function s(e) {
                var t = fluentFormApp(e);
                if (t)
                    t.initFormHandlers(),
                    t.initTriggers();
                else
                    var r = 0
                      , n = setInterval((function() {
                        (t = fluentFormApp(e)) && (clearInterval(n),
                        t.initFormHandlers(),
                        t.initTriggers()),
                        ++r > 10 && (clearInterval(n),
                        console.log("Form could not be loaded"))
                    }
                    ), 1e3)
            }
            r.each(f, (function(e, t) {
                s(r(t))
            }
            )),
            r(document).on("ff_reinit", (function(e, t) {
                var n = r(t)
                  , a = fluentFormApp(n);
                if (!a)
                    return !1;
                a.reinitExtras(),
                s(n),
                i.init(),
                n.attr("data-ff_reinit", "yes")
            }
            )),
            i.init()
        }(window.fluentFormVars, jQuery),
        jQuery(".fluentform").on("submit", ".ff-form-loading", (function(e) {
            e.preventDefault(),
            jQuery(this).parent().find(".ff_msg_temp").remove(),
            jQuery("<div/>", {
                class: "error text-danger ff_msg_temp"
            }).html("Javascript handler could not be loaded. Form submission has been failed. Reload the page and try again").insertAfter(jQuery(this))
        }
        ))
    }
    )),
    jQuery(document.body).on("fluentform_init", (function(e, t) {}
    ))
}
)()
