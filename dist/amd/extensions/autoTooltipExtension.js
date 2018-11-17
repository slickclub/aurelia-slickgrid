var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "../services/shared.service", "../models/index", "./extensionUtility"], function (require, exports, aurelia_framework_1, shared_service_1, index_1, extensionUtility_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AutoTooltipExtension = /** @class */ (function () {
        function AutoTooltipExtension(extensionUtility, sharedService) {
            this.extensionUtility = extensionUtility;
            this.sharedService = sharedService;
        }
        AutoTooltipExtension.prototype.dispose = function () {
            if (this._extension && this._extension.destroy) {
                this._extension.destroy();
            }
        };
        AutoTooltipExtension.prototype.register = function () {
            if (this.sharedService && this.sharedService.grid && this.sharedService.gridOptions) {
                // dynamically import the SlickGrid plugin with requireJS
                this.extensionUtility.loadExtensionDynamically(index_1.ExtensionName.autoTooltip);
                this._extension = new Slick.AutoTooltips(this.sharedService.gridOptions.autoTooltipOptions || {});
                this.sharedService.grid.registerPlugin(this._extension);
                return this._extension;
            }
            return null;
        };
        AutoTooltipExtension = __decorate([
            aurelia_framework_1.singleton(true),
            aurelia_framework_1.inject(extensionUtility_1.ExtensionUtility, shared_service_1.SharedService)
        ], AutoTooltipExtension);
        return AutoTooltipExtension;
    }());
    exports.AutoTooltipExtension = AutoTooltipExtension;
});
//# sourceMappingURL=autoTooltipExtension.js.map