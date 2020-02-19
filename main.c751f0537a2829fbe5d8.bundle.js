(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(module,__webpack_exports__,__webpack_require__){"use strict";var HintStatus,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(332),_material_ui_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(331),_material_ui_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(333),__assign=(__webpack_require__(731),function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)}),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};!function(HintStatus){HintStatus[HintStatus.None=0]="None",HintStatus[HintStatus.All=1]="All",HintStatus[HintStatus.Each=2]="Each"}(HintStatus||(HintStatus={}));__webpack_exports__.a=function HintComponent(_a){var onChange=_a.onChange,props=__rest(_a,["onChange"]),initState={status:HintStatus.None,value:""};props.value&&(initState.value=props.value),props.status&&(initState.status=props.status);var _b=react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(initState),state=_b[0],setState=_b[1];return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"hint-component"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.a,{container:!0,justify:"space-between",item:!0,xs:12},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"hint-type"},"Hint Type* ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"question-mark"},"?")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{control:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_1__.a,{checked:state.status===HintStatus.All,onChange:function allChecked(){setState(__assign(__assign({},state),{status:HintStatus.All})),onChange(__assign(__assign({},state),{status:HintStatus.All}))},value:"allAnswers"}),label:"All Answers"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{control:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_1__.a,{checked:state.status===HintStatus.Each,onChange:function eachChecked(){setState(__assign(__assign({},state),{status:HintStatus.Each})),onChange(__assign(__assign({},state),{status:HintStatus.Each}))},value:"eachAnswer"}),label:"Each Answer"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.a,{container:!0,justify:"space-between",item:!0,xs:12},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{className:"hint-input-text",value:state.value,onChange:function onHintChanged(event){setState(__assign(__assign({},state),{value:event.target.value})),onChange(__assign(__assign({},state),{value:event.target.value}))},placeholder:"Enter Hint..."})))}},323:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);__webpack_require__(737);__webpack_exports__.a=function EquationComponent(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Equation Component")}},324:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.a=function ImageComponent(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Image Component")}},325:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);__webpack_require__(740);__webpack_exports__.a=function QuoteComponent(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Quote Component")}},326:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.a=function SoundComponent(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sound Component")}},327:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(328),_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_1__),_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(329),_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__),editorConfiguration=(__webpack_require__(743),{toolbar:["bold"]});__webpack_exports__.a=function TextComponent(_a){var index=_a.index,data=_a.data,updateComponent=(_a.cleanComponent,_a.updateComponent);return data.value||(data.value=""),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"question-build-text-editor"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_1___default.a,{editor:_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default.a,data:data.value,config:editorConfiguration,onChange:function onChange(event,editor){data.value=editor.getData(),updateComponent(data,index)}}))}},335:function(module,exports,__webpack_require__){__webpack_require__(336),__webpack_require__(482),module.exports=__webpack_require__(483)},400:function(module,exports){},483:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20),req=__webpack_require__(729);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){req.keys().forEach(req)}),module)}.call(this,__webpack_require__(61)(module))},729:function(module,exports,__webpack_require__){var map={"./build/base-components/Hint/Hint.stories.tsx":730,"./build/investigationBuildPage/buildQuestions/components/Equation/Equation.stories.tsx":736,"./build/investigationBuildPage/buildQuestions/components/Image/Image.stories.tsx":738,"./build/investigationBuildPage/buildQuestions/components/Quote/Quote.stories.tsx":739,"./build/investigationBuildPage/buildQuestions/components/Sound/Sound.stories.tsx":741,"./build/investigationBuildPage/buildQuestions/components/Text/Text.stories.tsx":742};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=729},730:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),_Hint__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(135);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("QuestionHintComponent",module).add("HintWithoutValues",(function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Hint__WEBPACK_IMPORTED_MODULE_2__.a,{onChange:function onChange(){}})})).add("HintWithText",(function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Hint__WEBPACK_IMPORTED_MODULE_2__.a,{value:"Some text",onChange:function onChange(){}})})).add("HintWithAllAnswers",(function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Hint__WEBPACK_IMPORTED_MODULE_2__.a,{status:1,onChange:function onChange(){}})}))}.call(this,__webpack_require__(61)(module))},731:function(module,exports,__webpack_require__){},736:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),_Equation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(323);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("QuestionComponent",module).add("Equation",(function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Equation__WEBPACK_IMPORTED_MODULE_2__.a,null)}))}.call(this,__webpack_require__(61)(module))},737:function(module,exports,__webpack_require__){},738:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),_Image__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(324);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("QuestionComponent",module).add("Image",(function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Image__WEBPACK_IMPORTED_MODULE_2__.a,null)}))}.call(this,__webpack_require__(61)(module))},739:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),_Quote__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(325);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("QuestionComponent",module).add("Quote",(function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Quote__WEBPACK_IMPORTED_MODULE_2__.a,null)}))}.call(this,__webpack_require__(61)(module))},740:function(module,exports,__webpack_require__){},741:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),_Sound__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(326);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("QuestionComponent",module).add("Sound",(function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Sound__WEBPACK_IMPORTED_MODULE_2__.a,null)}))}.call(this,__webpack_require__(61)(module))},742:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),_Text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(327),data={value:"<p>Story book Text component</p>"};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("QuestionComponent",module).add("Text",(function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Text__WEBPACK_IMPORTED_MODULE_2__.a,{index:1,data:data,cleanComponent:function cleanComponent(){},updateComponent:function updateComponent(){}})}))}.call(this,__webpack_require__(61)(module))},743:function(module,exports,__webpack_require__){}},[[335,1,2]]]);
//# sourceMappingURL=main.c751f0537a2829fbe5d8.bundle.js.map