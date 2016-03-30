// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define({"widgets/NearMe/setting/nls/strings":{units:{miles:{displayText:"\u82f1\u91cc",acronym:"mi"},kilometers:{displayText:"\u5343\u7c73",acronym:"km"},feet:{displayText:"\u82f1\u5c3a",acronym:"ft"},meters:{displayText:"\u7c73",acronym:"m"}},searchSetting:{searchSettingTabTitle:"\u641c\u7d22\u8bbe\u7f6e",defaultBufferDistanceLabel:"\u8bbe\u7f6e\u9ed8\u8ba4\u7f13\u51b2\u8ddd\u79bb\u503c",maxBufferDistanceLabel:"\u8bbe\u7f6e\u6700\u5927\u7f13\u51b2\u8ddd\u79bb\u503c\u4ee5\u67e5\u627e\u8981\u7d20",
bufferDistanceUnitLabel:"\u7f13\u51b2\u8ddd\u79bb\u5355\u4f4d",defaultBufferHintLabel:"\u63d0\u793a: \u7528\u4e8e\u8bbe\u7f6e\u9ed8\u8ba4\u7f13\u51b2\u503c",maxBufferHintLabel:"\u63d0\u793a: \u7528\u4e8e\u8bbe\u7f6e\u6700\u5927\u7f13\u51b2\u503c",bufferUnitLabel:"\u63d0\u793a: \u4e3a\u521b\u5efa\u7f13\u51b2\u5b9a\u4e49\u5355\u4f4d",selectGraphicLocationSymbol:"\u5730\u5740\u6216\u4f4d\u7f6e\u7b26\u53f7",graphicLocationSymbolHintText:"\u63d0\u793a: \u6240\u641c\u7d22\u5730\u5740\u6216\u6240\u5355\u51fb\u4f4d\u7f6e\u7684\u7b26\u53f7",
fontColorLabel:"\u9009\u62e9\u641c\u7d22\u7ed3\u679c\u7684\u5b57\u4f53\u989c\u8272",fontColorHintText:"\u63d0\u793a: \u641c\u7d22\u7ed3\u679c\u7684\u5b57\u4f53\u989c\u8272"},layerSelector:{selectLayerLabel:"\u9009\u62e9\u641c\u7d22\u56fe\u5c42",layerSelectionHint:"\u63d0\u793a: \u4f7f\u7528\u8bbe\u7f6e\u6309\u94ae\u9009\u62e9\u56fe\u5c42",addLayerButton:"\u8bbe\u7f6e",okButton:"\u786e\u5b9a",cancelButton:"\u53d6\u6d88"},routeSetting:{routeSettingTabTitle:"\u65b9\u5411\u8bbe\u7f6e",routeServiceUrl:"\u8def\u5f84\u670d\u52a1",
travelModeServiceUrl:"\u51fa\u884c\u6a21\u5f0f\u670d\u52a1",buttonSet:"\u8bbe\u7f6e",routeServiceUrlHintText:"\u63d0\u793a: \u5355\u51fb\u201c\u8bbe\u7f6e\u201d\u4ee5\u6d4f\u89c8\u548c\u9009\u62e9\u8def\u5f84\u670d\u52a1",directionLengthUnit:"\u65b9\u5411\u957f\u5ea6\u5355\u4f4d",unitsForRouteHintText:"\u63d0\u793a: \u7528\u4e8e\u663e\u793a\u8def\u5f84\u5355\u4f4d",selectRouteSymbol:"\u9009\u62e9\u7528\u4e8e\u663e\u793a\u8def\u5f84\u7684\u7b26\u53f7",routeSymbolHintText:"\u63d0\u793a: \u7528\u4e8e\u663e\u793a\u8def\u5f84\u7684\u7ebf\u7b26\u53f7",
travelModeServiceUrlHintText:"\u63d0\u793a: \u5355\u51fb\u201c\u8bbe\u7f6e\u201d\u4ee5\u6d4f\u89c8\u548c\u9009\u62e9\u51fa\u884c\u6a21\u5f0f\u670d\u52a1",invalidTravelmodeServiceUrl:"\u8bf7\u6307\u5b9a\u6709\u6548\u7684\u51fa\u884c\u6a21\u5f0f\u670d\u52a1 ",routingDisabledMsg:"\u8981\u542f\u7528\u65b9\u5411\uff0c\u8bf7\u786e\u4fdd\u5df2\u5728 ArcGIS Online \u9879\u76ee\u4e2d\u542f\u7528\u8def\u5f84\u3002"},networkServiceChooser:{arcgislabel:"\u4ece ArcGIS Online \u6dfb\u52a0",serviceURLabel:"\u6dfb\u52a0\u670d\u52a1 URL",
routeURL:"\u8def\u5f84 URL",validateRouteURL:"\u9a8c\u8bc1",exampleText:"\u793a\u4f8b",hintRouteURL1:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/",hintRouteURL2:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",okButton:"\u786e\u5b9a",cancelButton:"\u53d6\u6d88",nextButton:"\u524d\u8fdb",backButton:"\u4e0a\u4e00\u6b65",invalidRouteServiceURL:"\u8bf7\u6307\u5b9a\u6709\u6548\u7684\u8def\u5f84\u670d\u52a1\u3002"},errorStrings:{bufferErrorString:"\u8bf7\u8f93\u5165\u6709\u6548\u7684\u6570\u503c\u3002",
selectLayerErrorString:"\u8bf7\u9009\u62e9\u8981\u641c\u7d22\u7684\u56fe\u5c42\u3002",invalidDefaultValue:"\u9ed8\u8ba4\u7f13\u51b2\u8ddd\u79bb\u4e0d\u80fd\u4e3a\u7a7a\u3002\u8bf7\u6307\u5b9a\u7f13\u51b2\u8ddd\u79bb",invalidMaximumValue:"\u6700\u5927\u7f13\u51b2\u8ddd\u79bb\u4e0d\u80fd\u4e3a\u7a7a\u3002\u8bf7\u6307\u5b9a\u7f13\u51b2\u8ddd\u79bb",defaultValueLessThanMax:"\u8bf7\u5728\u6700\u5927\u9650\u5236\u8303\u56f4\u5185\u6307\u5b9a\u9ed8\u8ba4\u7f13\u51b2\u8ddd\u79bb",defaultBufferValueGreaterThanZero:"\u8bf7\u6307\u5b9a\u5927\u4e8e 0 \u7684\u9ed8\u8ba4\u7f13\u51b2\u8ddd\u79bb",
maximumBufferValueGreaterThanZero:"\u8bf7\u6307\u5b9a\u5927\u4e8e 0 \u7684\u6700\u5927\u7f13\u51b2\u8ddd\u79bb"},symbolPickerPreviewText:"\u9884\u89c8:",_localized:{}}});