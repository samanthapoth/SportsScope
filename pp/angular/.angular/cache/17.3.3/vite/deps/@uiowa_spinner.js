import {
  CommonModule
} from "./chunk-DGV72MND.js";
import {
  Attribute,
  ChangeDetectionStrategy,
  Component,
  NgModule,
  setClassMetadata,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinjectAttribute,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵstyleProp
} from "./chunk-4RVK6YC4.js";
import "./chunk-UKEHM6V6.js";
import "./chunk-V2DXGMIT.js";
import "./chunk-ZDOIMVJD.js";

// node_modules/@uiowa/spinner/fesm2020/uiowa-spinner.mjs
var _c0 = ["*"];
var ActionSpinnerComponent = class {
  constructor(size) {
    this.size = size;
    if (!this.size || isNaN(this.size) || this.size < 0) {
      this.size = 1;
    }
  }
};
ActionSpinnerComponent.ɵfac = function ActionSpinnerComponent_Factory(t) {
  return new (t || ActionSpinnerComponent)(ɵɵinjectAttribute("size"));
};
ActionSpinnerComponent.ɵcmp = ɵɵdefineComponent({
  type: ActionSpinnerComponent,
  selectors: [["action-spinner"]],
  decls: 13,
  vars: 4,
  consts: [[1, "fading-circle-spinner"], [1, "circle1", "circle"], [1, "circle2", "circle"], [1, "circle3", "circle"], [1, "circle4", "circle"], [1, "circle5", "circle"], [1, "circle6", "circle"], [1, "circle7", "circle"], [1, "circle8", "circle"], [1, "circle9", "circle"], [1, "circle10", "circle"], [1, "circle11", "circle"], [1, "circle12", "circle"]],
  template: function ActionSpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵelement(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "div", 12);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵstyleProp("width", ctx.size, "rem")("height", ctx.size, "rem");
    }
  },
  styles: ['.fading-circle-spinner[_ngcontent-%COMP%]{position:relative;display:inline-block}.fading-circle-spinner[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.fading-circle-spinner[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:before{display:block;margin:0 auto;width:15%;height:15%;border-radius:100%;background-color:currentColor;content:"";animation:_ngcontent-%COMP%_sk-circleFadeDelay 1.2s infinite ease-in-out both}.fading-circle-spinner[_ngcontent-%COMP%]   .circle2[_ngcontent-%COMP%]{transform:rotate(30deg)}.fading-circle-spinner[_ngcontent-%COMP%]   .circle3[_ngcontent-%COMP%]{transform:rotate(60deg)}.fading-circle-spinner[_ngcontent-%COMP%]   .circle4[_ngcontent-%COMP%]{transform:rotate(90deg)}.fading-circle-spinner[_ngcontent-%COMP%]   .circle5[_ngcontent-%COMP%]{transform:rotate(120deg)}.fading-circle-spinner[_ngcontent-%COMP%]   .circle6[_ngcontent-%COMP%]{transform:rotate(150deg)}.fading-circle-spinner[_ngcontent-%COMP%]   .circle7[_ngcontent-%COMP%]{transform:rotate(180deg)}.fading-circle-spinner[_ngcontent-%COMP%]   .circle8[_ngcontent-%COMP%]{transform:rotate(210deg)}.fading-circle-spinner[_ngcontent-%COMP%]   .circle9[_ngcontent-%COMP%]{transform:rotate(240deg)}.fading-circle-spinner[_ngcontent-%COMP%]   .circle10[_ngcontent-%COMP%]{transform:rotate(270deg)}.fading-circle-spinner[_ngcontent-%COMP%]   .circle11[_ngcontent-%COMP%]{transform:rotate(300deg)}.fading-circle-spinner[_ngcontent-%COMP%]   .circle12[_ngcontent-%COMP%]{transform:rotate(330deg)}.fading-circle-spinner[_ngcontent-%COMP%]   .circle2[_ngcontent-%COMP%]:before{animation-delay:-1.1s}.fading-circle-spinner[_ngcontent-%COMP%]   .circle3[_ngcontent-%COMP%]:before{animation-delay:-1s}.fading-circle-spinner[_ngcontent-%COMP%]   .circle4[_ngcontent-%COMP%]:before{animation-delay:-.9s}.fading-circle-spinner[_ngcontent-%COMP%]   .circle5[_ngcontent-%COMP%]:before{animation-delay:-.8s}.fading-circle-spinner[_ngcontent-%COMP%]   .circle6[_ngcontent-%COMP%]:before{animation-delay:-.7s}.fading-circle-spinner[_ngcontent-%COMP%]   .circle7[_ngcontent-%COMP%]:before{animation-delay:-.6s}.fading-circle-spinner[_ngcontent-%COMP%]   .circle8[_ngcontent-%COMP%]:before{animation-delay:-.5s}.fading-circle-spinner[_ngcontent-%COMP%]   .circle9[_ngcontent-%COMP%]:before{animation-delay:-.4s}.fading-circle-spinner[_ngcontent-%COMP%]   .circle10[_ngcontent-%COMP%]:before{animation-delay:-.3s}.fading-circle-spinner[_ngcontent-%COMP%]   .circle11[_ngcontent-%COMP%]:before{animation-delay:-.2s}.fading-circle-spinner[_ngcontent-%COMP%]   .circle12[_ngcontent-%COMP%]:before{animation-delay:-.1s}@keyframes _ngcontent-%COMP%_sk-circleFadeDelay{0%,39%,to{opacity:0}40%{opacity:1}}'],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSpinnerComponent, [{
    type: Component,
    args: [{
      selector: "action-spinner",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div\r\n  class="fading-circle-spinner"\r\n  [style.width.rem]="size"\r\n  [style.height.rem]="size"\r\n>\r\n  <div class="circle1 circle"></div>\r\n  <div class="circle2 circle"></div>\r\n  <div class="circle3 circle"></div>\r\n  <div class="circle4 circle"></div>\r\n  <div class="circle5 circle"></div>\r\n  <div class="circle6 circle"></div>\r\n  <div class="circle7 circle"></div>\r\n  <div class="circle8 circle"></div>\r\n  <div class="circle9 circle"></div>\r\n  <div class="circle10 circle"></div>\r\n  <div class="circle11 circle"></div>\r\n  <div class="circle12 circle"></div>\r\n</div>\r\n',
      styles: ['.fading-circle-spinner{position:relative;display:inline-block}.fading-circle-spinner .circle{position:absolute;top:0;left:0;width:100%;height:100%}.fading-circle-spinner .circle:before{display:block;margin:0 auto;width:15%;height:15%;border-radius:100%;background-color:currentColor;content:"";animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}.fading-circle-spinner .circle2{transform:rotate(30deg)}.fading-circle-spinner .circle3{transform:rotate(60deg)}.fading-circle-spinner .circle4{transform:rotate(90deg)}.fading-circle-spinner .circle5{transform:rotate(120deg)}.fading-circle-spinner .circle6{transform:rotate(150deg)}.fading-circle-spinner .circle7{transform:rotate(180deg)}.fading-circle-spinner .circle8{transform:rotate(210deg)}.fading-circle-spinner .circle9{transform:rotate(240deg)}.fading-circle-spinner .circle10{transform:rotate(270deg)}.fading-circle-spinner .circle11{transform:rotate(300deg)}.fading-circle-spinner .circle12{transform:rotate(330deg)}.fading-circle-spinner .circle2:before{animation-delay:-1.1s}.fading-circle-spinner .circle3:before{animation-delay:-1s}.fading-circle-spinner .circle4:before{animation-delay:-.9s}.fading-circle-spinner .circle5:before{animation-delay:-.8s}.fading-circle-spinner .circle6:before{animation-delay:-.7s}.fading-circle-spinner .circle7:before{animation-delay:-.6s}.fading-circle-spinner .circle8:before{animation-delay:-.5s}.fading-circle-spinner .circle9:before{animation-delay:-.4s}.fading-circle-spinner .circle10:before{animation-delay:-.3s}.fading-circle-spinner .circle11:before{animation-delay:-.2s}.fading-circle-spinner .circle12:before{animation-delay:-.1s}@keyframes sk-circleFadeDelay{0%,39%,to{opacity:0}40%{opacity:1}}\n']
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Attribute,
        args: ["size"]
      }]
    }];
  }, null);
})();
var LoadingBarComponent = class {
  constructor(size) {
    this.size = size;
    if (!this.size || isNaN(this.size) || this.size < 0) {
      this.size = 1;
    }
  }
};
LoadingBarComponent.ɵfac = function LoadingBarComponent_Factory(t) {
  return new (t || LoadingBarComponent)(ɵɵinjectAttribute("size"));
};
LoadingBarComponent.ɵcmp = ɵɵdefineComponent({
  type: LoadingBarComponent,
  selectors: [["loading-bar"]],
  ngContentSelectors: _c0,
  decls: 5,
  vars: 12,
  consts: [[1, "loading-bars"], [1, "loading-bars-block", "block-1"], [1, "loading-bars-block", "block-2"], [1, "loading-bars-block", "block-3"]],
  template: function LoadingBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
      ɵɵelementStart(1, "span", 0);
      ɵɵelement(2, "span", 1)(3, "span", 2)(4, "span", 3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵstyleProp("height", ctx.size, "rem")("width", ctx.size / 4, "rem");
      ɵɵadvance();
      ɵɵstyleProp("height", ctx.size, "rem")("width", ctx.size / 4, "rem");
      ɵɵadvance();
      ɵɵstyleProp("height", ctx.size, "rem")("width", ctx.size / 4, "rem");
    }
  },
  styles: [".loading-bars[_ngcontent-%COMP%]{display:inline-block;height:100%;vertical-align:middle;position:relative;margin:auto}.loading-bars-block[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #000000;float:left;margin-left:1px;opacity:.1;animation-name:_ngcontent-%COMP%_bounceG;-o-animation-name:bounceG;-ms-animation-name:bounceG;-webkit-animation-name:_ngcontent-%COMP%_bounceG;-moz-animation-name:bounceG;animation-duration:1.5s;-o-animation-duration:1.5s;-ms-animation-duration:1.5s;-webkit-animation-duration:1.5s;-moz-animation-duration:1.5s;animation-iteration-count:infinite;-o-animation-iteration-count:infinite;-ms-animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;animation-direction:normal;-o-animation-direction:normal;-ms-animation-direction:normal;-webkit-animation-direction:normal;-moz-animation-direction:normal;transform:scale(.7);-o-transform:scale(.7);-ms-transform:scale(.7);-webkit-transform:scale(.7);-moz-transform:scale(.7)}.block-1[_ngcontent-%COMP%]{display:inline-block;animation-delay:.45s;-o-animation-delay:.45s;-ms-animation-delay:.45s;-webkit-animation-delay:.45s;-moz-animation-delay:.45s}.block-2[_ngcontent-%COMP%]{display:inline-block;animation-delay:.6s;-o-animation-delay:.6s;-ms-animation-delay:.6s;-webkit-animation-delay:.6s;-moz-animation-delay:.6s}.block-3[_ngcontent-%COMP%]{display:inline-block;animation-delay:.75s;-o-animation-delay:.75s;-ms-animation-delay:.75s;-webkit-animation-delay:.75s;-moz-animation-delay:.75s}@keyframes _ngcontent-%COMP%_bounceG{0%{transform:scale(1.2);opacity:1}to{transform:scale(.7);opacity:.1}}"],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingBarComponent, [{
    type: Component,
    args: [{
      selector: "loading-bar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>\r\n<span class="loading-bars">\r\n  <span\r\n    class="loading-bars-block block-1"\r\n    [style.height.rem]="size"\r\n    [style.width.rem]="size / 4"\r\n  ></span>\r\n  <span\r\n    class="loading-bars-block block-2"\r\n    [style.height.rem]="size"\r\n    [style.width.rem]="size / 4"\r\n  ></span>\r\n  <span\r\n    class="loading-bars-block block-3"\r\n    [style.height.rem]="size"\r\n    [style.width.rem]="size / 4"\r\n  ></span>\r\n</span>\r\n',
      styles: [".loading-bars{display:inline-block;height:100%;vertical-align:middle;position:relative;margin:auto}.loading-bars-block{background-color:#fff;border:1px solid #000000;float:left;margin-left:1px;opacity:.1;animation-name:bounceG;-o-animation-name:bounceG;-ms-animation-name:bounceG;-webkit-animation-name:bounceG;-moz-animation-name:bounceG;animation-duration:1.5s;-o-animation-duration:1.5s;-ms-animation-duration:1.5s;-webkit-animation-duration:1.5s;-moz-animation-duration:1.5s;animation-iteration-count:infinite;-o-animation-iteration-count:infinite;-ms-animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;animation-direction:normal;-o-animation-direction:normal;-ms-animation-direction:normal;-webkit-animation-direction:normal;-moz-animation-direction:normal;transform:scale(.7);-o-transform:scale(.7);-ms-transform:scale(.7);-webkit-transform:scale(.7);-moz-transform:scale(.7)}.block-1{display:inline-block;animation-delay:.45s;-o-animation-delay:.45s;-ms-animation-delay:.45s;-webkit-animation-delay:.45s;-moz-animation-delay:.45s}.block-2{display:inline-block;animation-delay:.6s;-o-animation-delay:.6s;-ms-animation-delay:.6s;-webkit-animation-delay:.6s;-moz-animation-delay:.6s}.block-3{display:inline-block;animation-delay:.75s;-o-animation-delay:.75s;-ms-animation-delay:.75s;-webkit-animation-delay:.75s;-moz-animation-delay:.75s}@keyframes bounceG{0%{transform:scale(1.2);opacity:1}to{transform:scale(.7);opacity:.1}}\n"]
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Attribute,
        args: ["size"]
      }]
    }];
  }, null);
})();
var UiowaRingComponent = class {
  constructor(size) {
    this.size = size;
    if (!this.size || isNaN(this.size) || this.size < 0) {
      this.size = 4;
    }
  }
};
UiowaRingComponent.ɵfac = function UiowaRingComponent_Factory(t) {
  return new (t || UiowaRingComponent)(ɵɵinjectAttribute("size"));
};
UiowaRingComponent.ɵcmp = ɵɵdefineComponent({
  type: UiowaRingComponent,
  selectors: [["uiowa-ring"]],
  decls: 1,
  vars: 6,
  consts: [[1, "ring"]],
  template: function UiowaRingComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", 0);
    }
    if (rf & 2) {
      ɵɵstyleProp("height", ctx.size, "rem")("width", ctx.size, "rem")("border-width", ctx.size / 4, "rem");
    }
  },
  styles: [".ring[_ngcontent-%COMP%]{border-radius:50%;border-color:#000000 #ffcd00;border-style:solid;animation:_ngcontent-%COMP%_spin 2s linear infinite}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UiowaRingComponent, [{
    type: Component,
    args: [{
      selector: "uiowa-ring",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div\r\n  class="ring"\r\n  [style.height.rem]="size"\r\n  [style.width.rem]="size"\r\n  [style.border-width.rem]="size / 4"\r\n></div>\r\n',
      styles: [".ring{border-radius:50%;border-color:#000000 #ffcd00;border-style:solid;animation:spin 2s linear infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"]
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Attribute,
        args: ["size"]
      }]
    }];
  }, null);
})();
var LoadingPlaceholderComponent = class {
  constructor() {
  }
  ngOnInit() {
  }
};
LoadingPlaceholderComponent.ɵfac = function LoadingPlaceholderComponent_Factory(t) {
  return new (t || LoadingPlaceholderComponent)();
};
LoadingPlaceholderComponent.ɵcmp = ɵɵdefineComponent({
  type: LoadingPlaceholderComponent,
  selectors: [["loading-placeholder"]],
  decls: 1,
  vars: 0,
  consts: [[1, "placeholder-item"]],
  template: function LoadingPlaceholderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", 0);
    }
  },
  styles: ['.placeholder-item[_ngcontent-%COMP%]{box-shadow:0 4px 10px #21212126;position:relative;overflow:hidden;height:100%}.placeholder-item[_ngcontent-%COMP%]:before{content:"";display:block;position:absolute;left:-200px;top:0;height:100%;width:200px;background:linear-gradient(to right,transparent 0%,#e8e8e8 50%,transparent 100%);animation:_ngcontent-%COMP%_load 1s cubic-bezier(.4,0,.2,1) infinite}@keyframes _ngcontent-%COMP%_load{0%{left:-200px}to{left:100%}}'],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingPlaceholderComponent, [{
    type: Component,
    args: [{
      selector: "loading-placeholder",
      template: `<div class="placeholder-item"></div>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: ['.placeholder-item{box-shadow:0 4px 10px #21212126;position:relative;overflow:hidden;height:100%}.placeholder-item:before{content:"";display:block;position:absolute;left:-200px;top:0;height:100%;width:200px;background:linear-gradient(to right,transparent 0%,#e8e8e8 50%,transparent 100%);animation:load 1s cubic-bezier(.4,0,.2,1) infinite}@keyframes load{0%{left:-200px}to{left:100%}}\n']
    }]
  }], function() {
    return [];
  }, null);
})();
var SpinnerModule = class {
};
SpinnerModule.ɵfac = function SpinnerModule_Factory(t) {
  return new (t || SpinnerModule)();
};
SpinnerModule.ɵmod = ɵɵdefineNgModule({
  type: SpinnerModule,
  declarations: [ActionSpinnerComponent, LoadingBarComponent, UiowaRingComponent, LoadingPlaceholderComponent],
  imports: [CommonModule],
  exports: [ActionSpinnerComponent, LoadingBarComponent, UiowaRingComponent, LoadingPlaceholderComponent]
});
SpinnerModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpinnerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [ActionSpinnerComponent, LoadingBarComponent, UiowaRingComponent, LoadingPlaceholderComponent],
      exports: [ActionSpinnerComponent, LoadingBarComponent, UiowaRingComponent, LoadingPlaceholderComponent]
    }]
  }], null, null);
})();
export {
  ActionSpinnerComponent,
  LoadingBarComponent,
  LoadingPlaceholderComponent,
  SpinnerModule,
  UiowaRingComponent
};
//# sourceMappingURL=@uiowa_spinner.js.map
