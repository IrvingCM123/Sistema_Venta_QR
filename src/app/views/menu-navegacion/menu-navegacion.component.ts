import { Component, OnInit, AfterViewInit } from "@angular/core";
declare var $: any;
import * as jQuery from 'jquery';


@Component({
  selector: "app-menu-navegacion",
  templateUrl: "./menu-navegacion.component.html",
  styleUrls: ["./menu-navegacion.component.scss"],
})
export class MenuNavegacionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const test = () => {
        console.log("Hoa")
      const tabsNewAnim = $("#navbarSupportedContent");
      const selectorNewAnim = $("#navbarSupportedContent").find("li").length;
      const activeItemNewAnim = tabsNewAnim.find(".active");
      const activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
      const activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
      const itemPosNewAnimTop = activeItemNewAnim.position();
      const itemPosNewAnimLeft = activeItemNewAnim.position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
      $("#navbarSupportedContent").on("click", "li", (e: Event) => {
        $("#navbarSupportedContent ul li").removeClass("active");
        $(e.target).addClass("active");
        const activeWidthNewAnimHeight = $(e.target).innerHeight();
        const activeWidthNewAnimWidth = $(e.target).innerWidth();
        const itemPosNewAnimTop = $(e.target).position();
        const itemPosNewAnimLeft = $(e.target).position();
        $(".hori-selector").css({
          top: itemPosNewAnimTop.top + "px",
          left: itemPosNewAnimLeft.left + "px",
          height: activeWidthNewAnimHeight + "px",
          width: activeWidthNewAnimWidth + "px",
        });
      });
    };

    $(document).ready(() => {
      setTimeout(() => {
        test();
      });
    });

    $(window).on("resize", () => {
      setTimeout(() => {
        test();
      }, 500);
    });

    $(".navbar-toggler").click(() => {
      $(".navbar-collapse").slideToggle(300);
      setTimeout(() => {
        test();
      });
    });

    jQuery(document).ready(($: any) => {
      let path = window.location.pathname.split("/").pop();
      if (path == "") {
        path = "index.html";
      }
      const target = $(
        '#navbarSupportedContent ul li a[href="' + path + '"]'
      );
      target.parent().addClass("active");
    });
  }
}
