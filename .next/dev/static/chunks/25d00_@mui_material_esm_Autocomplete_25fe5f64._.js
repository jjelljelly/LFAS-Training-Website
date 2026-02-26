(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/material/esm/Autocomplete/autocompleteClasses.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getAutocompleteUtilityClass",
    ()=>getAutocompleteUtilityClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-client] (ecmascript)");
;
;
function getAutocompleteUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiAutocomplete', slot);
}
const autocompleteClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiAutocomplete', [
    'root',
    'expanded',
    'fullWidth',
    'focused',
    'focusVisible',
    'tag',
    'tagSizeSmall',
    'tagSizeMedium',
    'hasPopupIcon',
    'hasClearIcon',
    'inputRoot',
    'input',
    'inputFocused',
    'endAdornment',
    'clearIndicator',
    'popupIndicator',
    'popupIndicatorOpen',
    'popper',
    'popperDisablePortal',
    'paper',
    'listbox',
    'loading',
    'noOptions',
    'option',
    'groupLabel',
    'groupUl'
]);
const __TURBOPACK__default__export__ = autocompleteClasses;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/material/esm/Autocomplete/Autocomplete.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$integerPropType$2f$integerPropType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/integerPropType/integerPropType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useAutocomplete$2f$useAutocomplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/material/esm/useAutocomplete/useAutocomplete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Popper$2f$Popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/material/esm/Popper/Popper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListSubheader$2f$ListSubheader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/material/esm/ListSubheader/ListSubheader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/material/esm/Paper/Paper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/material/esm/Chip/Chip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Input$2f$inputClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/material/esm/Input/inputClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputBase$2f$inputBaseClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/material/esm/InputBase/inputBaseClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$OutlinedInput$2f$outlinedInputClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/material/esm/OutlinedInput/outlinedInputClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FilledInput$2f$filledInputClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/material/esm/FilledInput/filledInputClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$internal$2f$svg$2d$icons$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/material/esm/internal/svg-icons/Close.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$internal$2f$svg$2d$icons$2f$ArrowDropDown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/material/esm/internal/svg-icons/ArrowDropDown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/material/esm/utils/memoTheme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/material/esm/Autocomplete/autocompleteClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/material/esm/utils/capitalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$useSlot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/material/esm/utils/useSlot.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
var _ClearIcon, _ArrowDropDownIcon;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const useUtilityClasses = (ownerState)=>{
    const { classes, disablePortal, expanded, focused, fullWidth, hasClearIcon, hasPopupIcon, inputFocused, popupOpen, size } = ownerState;
    const slots = {
        root: [
            'root',
            expanded && 'expanded',
            focused && 'focused',
            fullWidth && 'fullWidth',
            hasClearIcon && 'hasClearIcon',
            hasPopupIcon && 'hasPopupIcon'
        ],
        inputRoot: [
            'inputRoot'
        ],
        input: [
            'input',
            inputFocused && 'inputFocused'
        ],
        tag: [
            'tag',
            `tagSize${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(size)}`
        ],
        endAdornment: [
            'endAdornment'
        ],
        clearIndicator: [
            'clearIndicator'
        ],
        popupIndicator: [
            'popupIndicator',
            popupOpen && 'popupIndicatorOpen'
        ],
        popper: [
            'popper',
            disablePortal && 'popperDisablePortal'
        ],
        paper: [
            'paper'
        ],
        listbox: [
            'listbox'
        ],
        loading: [
            'loading'
        ],
        noOptions: [
            'noOptions'
        ],
        option: [
            'option'
        ],
        groupLabel: [
            'groupLabel'
        ],
        groupUl: [
            'groupUl'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAutocompleteUtilityClass"], classes);
};
const AutocompleteRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: 'MuiAutocomplete',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        const { fullWidth, hasClearIcon, hasPopupIcon, inputFocused, size } = ownerState;
        return [
            {
                [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tag}`]: styles.tag
            },
            {
                [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tag}`]: styles[`tagSize${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(size)}`]
            },
            {
                [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].inputRoot}`]: styles.inputRoot
            },
            {
                [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input}`]: styles.input
            },
            {
                [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input}`]: inputFocused && styles.inputFocused
            },
            styles.root,
            fullWidth && styles.fullWidth,
            hasPopupIcon && styles.hasPopupIcon,
            hasClearIcon && styles.hasClearIcon
        ];
    }
})({
    [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].focused} .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].clearIndicator}`]: {
        visibility: 'visible'
    },
    /* Avoid double tap issue on iOS */ '@media (pointer: fine)': {
        [`&:hover .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].clearIndicator}`]: {
            visibility: 'visible'
        }
    },
    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tag}`]: {
        margin: 3,
        maxWidth: 'calc(100% - 6px)'
    },
    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].inputRoot}`]: {
        [`.${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasPopupIcon}&, .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasClearIcon}&`]: {
            paddingRight: 26 + 4
        },
        [`.${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasPopupIcon}.${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasClearIcon}&`]: {
            paddingRight: 52 + 4
        },
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input}`]: {
            width: 0,
            minWidth: 30
        }
    },
    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Input$2f$inputClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].root}`]: {
        paddingBottom: 1,
        '& .MuiInput-input': {
            padding: '4px 4px 4px 0px'
        }
    },
    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Input$2f$inputClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].root}.${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputBase$2f$inputBaseClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sizeSmall}`]: {
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Input$2f$inputClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input}`]: {
            padding: '2px 4px 3px 0'
        }
    },
    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$OutlinedInput$2f$outlinedInputClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].root}`]: {
        padding: 9,
        [`.${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasPopupIcon}&, .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasClearIcon}&`]: {
            paddingRight: 26 + 4 + 9
        },
        [`.${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasPopupIcon}.${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasClearIcon}&`]: {
            paddingRight: 52 + 4 + 9
        },
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input}`]: {
            padding: '7.5px 4px 7.5px 5px'
        },
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].endAdornment}`]: {
            right: 9
        }
    },
    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$OutlinedInput$2f$outlinedInputClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].root}.${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputBase$2f$inputBaseClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sizeSmall}`]: {
        // Don't specify paddingRight, as it overrides the default value set when there is only
        // one of the popup or clear icon as the specificity is equal so the latter one wins
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 6,
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input}`]: {
            padding: '2.5px 4px 2.5px 8px'
        }
    },
    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FilledInput$2f$filledInputClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].root}`]: {
        paddingTop: 19,
        paddingLeft: 8,
        [`.${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasPopupIcon}&, .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasClearIcon}&`]: {
            paddingRight: 26 + 4 + 9
        },
        [`.${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasPopupIcon}.${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasClearIcon}&`]: {
            paddingRight: 52 + 4 + 9
        },
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FilledInput$2f$filledInputClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input}`]: {
            padding: '7px 4px'
        },
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].endAdornment}`]: {
            right: 9
        }
    },
    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FilledInput$2f$filledInputClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].root}.${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputBase$2f$inputBaseClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sizeSmall}`]: {
        paddingBottom: 1,
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FilledInput$2f$filledInputClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input}`]: {
            padding: '2.5px 4px'
        }
    },
    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputBase$2f$inputBaseClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hiddenLabel}`]: {
        paddingTop: 8
    },
    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FilledInput$2f$filledInputClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].root}.${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputBase$2f$inputBaseClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hiddenLabel}`]: {
        paddingTop: 0,
        paddingBottom: 0,
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input}`]: {
            paddingTop: 16,
            paddingBottom: 17
        }
    },
    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FilledInput$2f$filledInputClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].root}.${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputBase$2f$inputBaseClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hiddenLabel}.${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputBase$2f$inputBaseClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sizeSmall}`]: {
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input}`]: {
            paddingTop: 8,
            paddingBottom: 9
        }
    },
    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input}`]: {
        flexGrow: 1,
        textOverflow: 'ellipsis',
        opacity: 0
    },
    variants: [
        {
            props: {
                fullWidth: true
            },
            style: {
                width: '100%'
            }
        },
        {
            props: {
                size: 'small'
            },
            style: {
                [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tag}`]: {
                    margin: 2,
                    maxWidth: 'calc(100% - 4px)'
                }
            }
        },
        {
            props: {
                inputFocused: true
            },
            style: {
                [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input}`]: {
                    opacity: 1
                }
            }
        },
        {
            props: {
                multiple: true
            },
            style: {
                [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].inputRoot}`]: {
                    flexWrap: 'wrap'
                }
            }
        }
    ]
});
const AutocompleteEndAdornment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: 'MuiAutocomplete',
    slot: 'EndAdornment'
})({
    // We use a position absolute to support wrapping tags.
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translate(0, -50%)'
});
const AutocompleteClearIndicator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    name: 'MuiAutocomplete',
    slot: 'ClearIndicator'
})({
    marginRight: -2,
    padding: 4,
    visibility: 'hidden'
});
const AutocompletePopupIndicator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    name: 'MuiAutocomplete',
    slot: 'PopupIndicator',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.popupIndicator,
            ownerState.popupOpen && styles.popupIndicatorOpen
        ];
    }
})({
    padding: 2,
    marginRight: -2,
    variants: [
        {
            props: {
                popupOpen: true
            },
            style: {
                transform: 'rotate(180deg)'
            }
        }
    ]
});
const AutocompletePopper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Popper$2f$Popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    name: 'MuiAutocomplete',
    slot: 'Popper',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            {
                [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].option}`]: styles.option
            },
            styles.popper,
            ownerState.disablePortal && styles.popperDisablePortal
        ];
    }
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(({ theme })=>({
        zIndex: (theme.vars || theme).zIndex.modal,
        variants: [
            {
                props: {
                    disablePortal: true
                },
                style: {
                    position: 'absolute'
                }
            }
        ]
    })));
const AutocompletePaper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    name: 'MuiAutocomplete',
    slot: 'Paper'
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(({ theme })=>({
        ...theme.typography.body1,
        overflow: 'auto'
    })));
const AutocompleteLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: 'MuiAutocomplete',
    slot: 'Loading'
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(({ theme })=>({
        color: (theme.vars || theme).palette.text.secondary,
        padding: '14px 16px'
    })));
const AutocompleteNoOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: 'MuiAutocomplete',
    slot: 'NoOptions'
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(({ theme })=>({
        color: (theme.vars || theme).palette.text.secondary,
        padding: '14px 16px'
    })));
const AutocompleteListbox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('ul', {
    name: 'MuiAutocomplete',
    slot: 'Listbox'
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(({ theme })=>({
        listStyle: 'none',
        margin: 0,
        padding: '8px 0',
        maxHeight: '40vh',
        overflow: 'auto',
        position: 'relative',
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].option}`]: {
            minHeight: 48,
            display: 'flex',
            overflow: 'hidden',
            justifyContent: 'flex-start',
            alignItems: 'center',
            cursor: 'pointer',
            paddingTop: 6,
            boxSizing: 'border-box',
            outline: '0',
            WebkitTapHighlightColor: 'transparent',
            paddingBottom: 6,
            paddingLeft: 16,
            paddingRight: 16,
            [theme.breakpoints.up('sm')]: {
                minHeight: 'auto'
            },
            [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].focused}`]: {
                backgroundColor: (theme.vars || theme).palette.action.hover,
                // Reset on touch devices, it doesn't add specificity
                '@media (hover: none)': {
                    backgroundColor: 'transparent'
                }
            },
            '&[aria-disabled="true"]': {
                opacity: (theme.vars || theme).palette.action.disabledOpacity,
                pointerEvents: 'none'
            },
            [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].focusVisible}`]: {
                backgroundColor: (theme.vars || theme).palette.action.focus
            },
            '&[aria-selected="true"]': {
                backgroundColor: theme.alpha((theme.vars || theme).palette.primary.main, (theme.vars || theme).palette.action.selectedOpacity),
                [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].focused}`]: {
                    backgroundColor: theme.alpha((theme.vars || theme).palette.primary.main, `${(theme.vars || theme).palette.action.selectedOpacity} + ${(theme.vars || theme).palette.action.hoverOpacity}`),
                    // Reset on touch devices, it doesn't add specificity
                    '@media (hover: none)': {
                        backgroundColor: (theme.vars || theme).palette.action.selected
                    }
                },
                [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].focusVisible}`]: {
                    backgroundColor: theme.alpha((theme.vars || theme).palette.primary.main, `${(theme.vars || theme).palette.action.selectedOpacity} + ${(theme.vars || theme).palette.action.focusOpacity}`)
                }
            }
        }
    })));
const AutocompleteGroupLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListSubheader$2f$ListSubheader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    name: 'MuiAutocomplete',
    slot: 'GroupLabel'
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(({ theme })=>({
        backgroundColor: (theme.vars || theme).palette.background.paper,
        top: -8
    })));
const AutocompleteGroupUl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('ul', {
    name: 'MuiAutocomplete',
    slot: 'GroupUl'
})({
    padding: 0,
    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$autocompleteClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].option}`]: {
        paddingLeft: 24
    }
});
;
const Autocomplete = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Autocomplete(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultProps"])({
        props: inProps,
        name: 'MuiAutocomplete'
    });
    /* eslint-disable @typescript-eslint/no-unused-vars */ const { autoComplete = false, autoHighlight = false, autoSelect = false, blurOnSelect = false, ChipProps: ChipPropsProp, className, clearIcon = _ClearIcon || (_ClearIcon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$internal$2f$svg$2d$icons$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        fontSize: "small"
    })), clearOnBlur = !props.freeSolo, clearOnEscape = false, clearText = 'Clear', closeText = 'Close', componentsProps, defaultValue = props.multiple ? [] : null, disableClearable = false, disableCloseOnSelect = false, disabled = false, disabledItemsFocusable = false, disableListWrap = false, disablePortal = false, filterOptions, filterSelectedOptions = false, forcePopupIcon = 'auto', freeSolo = false, fullWidth = false, getLimitTagsText = (more)=>`+${more}`, getOptionDisabled, getOptionKey, getOptionLabel: getOptionLabelProp, isOptionEqualToValue, groupBy, handleHomeEndKeys = !props.freeSolo, id: idProp, includeInputInList = false, inputValue: inputValueProp, limitTags = -1, ListboxComponent: ListboxComponentProp, ListboxProps: ListboxPropsProp, loading = false, loadingText = 'Loading…', multiple = false, noOptionsText = 'No options', onChange, onClose, onHighlightChange, onInputChange, onOpen, open, openOnFocus = false, openText = 'Open', options, PaperComponent: PaperComponentProp, PopperComponent: PopperComponentProp, popupIcon = _ArrowDropDownIcon || (_ArrowDropDownIcon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$internal$2f$svg$2d$icons$2f$ArrowDropDown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {})), readOnly = false, renderGroup: renderGroupProp, renderInput, renderOption: renderOptionProp, renderTags, renderValue, selectOnFocus = !props.freeSolo, size = 'medium', slots = {}, slotProps = {}, value: valueProp, ...other } = props;
    /* eslint-enable @typescript-eslint/no-unused-vars */ const { getRootProps, getInputProps, getInputLabelProps, getPopupIndicatorProps, getClearProps, getItemProps, getListboxProps, getOptionProps, value, dirty, expanded, id, popupOpen, focused, focusedItem, anchorEl, setAnchorEl, inputValue, groupedOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useAutocomplete$2f$useAutocomplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ...props,
        componentName: 'Autocomplete'
    });
    const hasClearIcon = !disableClearable && !disabled && dirty && !readOnly;
    const hasPopupIcon = (!freeSolo || forcePopupIcon === true) && forcePopupIcon !== false;
    const { onMouseDown: handleInputMouseDown } = getInputProps();
    const { ref: listboxRef, ...otherListboxProps } = getListboxProps();
    const defaultGetOptionLabel = (option)=>option.label ?? option;
    const getOptionLabel = getOptionLabelProp || defaultGetOptionLabel;
    // If you modify this, make sure to keep the `AutocompleteOwnerState` type in sync.
    const ownerState = {
        ...props,
        disablePortal,
        expanded,
        focused,
        fullWidth,
        getOptionLabel,
        hasClearIcon,
        hasPopupIcon,
        inputFocused: focusedItem === -1,
        popupOpen,
        size
    };
    const classes = useUtilityClasses(ownerState);
    const externalForwardedProps = {
        slots: {
            paper: PaperComponentProp,
            popper: PopperComponentProp,
            ...slots
        },
        slotProps: {
            chip: ChipPropsProp,
            listbox: ListboxPropsProp,
            ...componentsProps,
            ...slotProps
        }
    };
    const [ListboxSlot, listboxProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$useSlot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('listbox', {
        elementType: AutocompleteListbox,
        externalForwardedProps,
        ownerState,
        className: classes.listbox,
        additionalProps: otherListboxProps,
        ref: listboxRef
    });
    const [PaperSlot, paperProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$useSlot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('paper', {
        elementType: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        externalForwardedProps,
        ownerState,
        className: classes.paper
    });
    const [PopperSlot, popperProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$useSlot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('popper', {
        elementType: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Popper$2f$Popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        externalForwardedProps,
        ownerState,
        className: classes.popper,
        additionalProps: {
            disablePortal,
            style: {
                width: anchorEl ? anchorEl.clientWidth : null
            },
            role: 'presentation',
            anchorEl,
            open: popupOpen
        }
    });
    let startAdornment;
    const getCustomizedItemProps = (params)=>({
            className: classes.tag,
            disabled,
            ...getItemProps(params)
        });
    if (multiple) {
        if (value.length > 0) {
            if (renderTags) {
                startAdornment = renderTags(value, getCustomizedItemProps, ownerState);
            } else if (renderValue) {
                startAdornment = renderValue(value, getCustomizedItemProps, ownerState);
            } else {
                startAdornment = value.map((option, index)=>{
                    const { key, ...customItemProps } = getCustomizedItemProps({
                        index
                    });
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: getOptionLabel(option),
                        size: size,
                        ...customItemProps,
                        ...externalForwardedProps.slotProps.chip
                    }, key);
                });
            }
        }
    } else if (renderValue && value != null) {
        startAdornment = renderValue(value, getCustomizedItemProps, ownerState);
    }
    if (limitTags > -1 && Array.isArray(startAdornment)) {
        const more = startAdornment.length - limitTags;
        if (!focused && more > 0) {
            startAdornment = startAdornment.splice(0, limitTags);
            startAdornment.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: classes.tag,
                children: getLimitTagsText(more)
            }, startAdornment.length));
        }
    }
    const defaultRenderGroup = (params)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("li", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AutocompleteGroupLabel, {
                    className: classes.groupLabel,
                    ownerState: ownerState,
                    component: "div",
                    children: params.group
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AutocompleteGroupUl, {
                    className: classes.groupUl,
                    ownerState: ownerState,
                    children: params.children
                })
            ]
        }, params.key);
    const renderGroup = renderGroupProp || defaultRenderGroup;
    const defaultRenderOption = (props2, option)=>{
        // Need to clearly apply key because of https://github.com/vercel/next.js/issues/55642
        const { key, ...otherProps } = props2;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("li", {
            ...otherProps,
            children: getOptionLabel(option)
        }, key);
    };
    const renderOption = renderOptionProp || defaultRenderOption;
    const renderListOption = (option, index)=>{
        const optionProps = getOptionProps({
            option,
            index
        });
        return renderOption({
            ...optionProps,
            className: classes.option
        }, option, {
            selected: optionProps['aria-selected'],
            index,
            inputValue
        }, ownerState);
    };
    const clearIndicatorSlotProps = externalForwardedProps.slotProps.clearIndicator;
    const popupIndicatorSlotProps = externalForwardedProps.slotProps.popupIndicator;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AutocompleteRoot, {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
                ownerState: ownerState,
                ...getRootProps(other),
                children: renderInput({
                    id,
                    disabled,
                    fullWidth: true,
                    size: size === 'small' ? 'small' : undefined,
                    InputLabelProps: getInputLabelProps(),
                    InputProps: {
                        ref: setAnchorEl,
                        className: classes.inputRoot,
                        startAdornment,
                        onMouseDown: (event)=>{
                            if (event.target === event.currentTarget) {
                                handleInputMouseDown(event);
                            }
                        },
                        ...(hasClearIcon || hasPopupIcon) && {
                            endAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(AutocompleteEndAdornment, {
                                className: classes.endAdornment,
                                ownerState: ownerState,
                                children: [
                                    hasClearIcon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AutocompleteClearIndicator, {
                                        ...getClearProps(),
                                        "aria-label": clearText,
                                        title: clearText,
                                        ownerState: ownerState,
                                        ...clearIndicatorSlotProps,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.clearIndicator, clearIndicatorSlotProps?.className),
                                        children: clearIcon
                                    }) : null,
                                    hasPopupIcon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AutocompletePopupIndicator, {
                                        ...getPopupIndicatorProps(),
                                        disabled: disabled,
                                        "aria-label": popupOpen ? closeText : openText,
                                        title: popupOpen ? closeText : openText,
                                        ownerState: ownerState,
                                        ...popupIndicatorSlotProps,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.popupIndicator, popupIndicatorSlotProps?.className),
                                        children: popupIcon
                                    }) : null
                                ]
                            })
                        }
                    },
                    inputProps: {
                        className: classes.input,
                        disabled,
                        readOnly,
                        ...getInputProps()
                    }
                })
            }),
            anchorEl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AutocompletePopper, {
                as: PopperSlot,
                ...popperProps,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(AutocompletePaper, {
                    as: PaperSlot,
                    ...paperProps,
                    children: [
                        loading && groupedOptions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AutocompleteLoading, {
                            className: classes.loading,
                            ownerState: ownerState,
                            children: loadingText
                        }) : null,
                        groupedOptions.length === 0 && !freeSolo && !loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AutocompleteNoOptions, {
                            className: classes.noOptions,
                            ownerState: ownerState,
                            role: "presentation",
                            onMouseDown: (event)=>{
                                // Prevent input blur when interacting with the "no options" content
                                event.preventDefault();
                            },
                            children: noOptionsText
                        }) : null,
                        groupedOptions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ListboxSlot, {
                            as: ListboxComponentProp,
                            ...listboxProps,
                            children: groupedOptions.map((option, index)=>{
                                if (groupBy) {
                                    return renderGroup({
                                        key: option.key,
                                        group: option.group,
                                        children: option.options.map((option2, index2)=>renderListOption(option2, option.index + index2))
                                    });
                                }
                                return renderListOption(option, index);
                            })
                        }) : null
                    ]
                })
            }) : null
        ]
    });
});
("TURBOPACK compile-time truthy", 1) ? Autocomplete.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * If `true`, the portion of the selected suggestion that the user hasn't typed,
   * known as the completion string, appears inline after the input cursor in the textbox.
   * The inline completion string is visually highlighted and has a selected state.
   * @default false
   */ autoComplete: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the first option is automatically highlighted.
   * @default false
   */ autoHighlight: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the selected option becomes the value of the input
   * when the Autocomplete loses focus unless the user chooses
   * a different option or changes the character string in the input.
   *
   * When using the `freeSolo` mode, the typed value will be the input value
   * if the Autocomplete loses focus without highlighting an option.
   * @default false
   */ autoSelect: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Control if the input should be blurred when an option is selected:
   *
   * - `false` the input is not blurred.
   * - `true` the input is always blurred.
   * - `touch` the input is blurred after a touch event.
   * - `mouse` the input is blurred after a mouse event.
   * @default false
   */ blurOnSelect: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'mouse',
            'touch'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
    ]),
    /**
   * Props applied to the [`Chip`](https://mui.com/material-ui/api/chip/) element.
   * @deprecated Use `slotProps.chip` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */ ChipProps: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The icon to display in place of the default clear icon.
   * @default <ClearIcon fontSize="small" />
   */ clearIcon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * If `true`, the input's text is cleared on blur if no value is selected.
   *
   * Set it to `true` if you want to help the user enter a new value.
   * Set it to `false` if you want to help the user resume their search.
   * @default !props.freeSolo
   */ clearOnBlur: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, clear all values when the user presses escape and the popup is closed.
   * @default false
   */ clearOnEscape: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Override the default text for the *clear* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Clear'
   */ clearText: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * Override the default text for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Close'
   */ closeText: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The props used for each slot inside.
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */ componentsProps: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
        clearIndicator: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
        paper: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
        popper: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
        popupIndicator: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    }),
    /**
   * The default value. Use when the component is not controlled.
   * @default props.multiple ? [] : null
   */ defaultValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].any, (props)=>{
        if (props.multiple && props.defaultValue !== undefined && !Array.isArray(props.defaultValue)) {
            return new Error([
                'MUI: The Autocomplete expects the `defaultValue` prop to be an array when `multiple={true}` or undefined.',
                `However, ${props.defaultValue} was provided.`
            ].join('\n'));
        }
        return null;
    }),
    /**
   * If `true`, the input can't be cleared.
   * @default false
   */ disableClearable: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the popup won't close when a value is selected.
   * @default false
   */ disableCloseOnSelect: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the component is disabled.
   * @default false
   */ disabled: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */ disabledItemsFocusable: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the list box in the popup will not wrap focus.
   * @default false
   */ disableListWrap: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the `Popper` content will be under the DOM hierarchy of the parent component.
   * @default false
   */ disablePortal: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * A function that determines the filtered options to be rendered on search.
   *
   * @default createFilterOptions()
   * @param {Value[]} options The options to render.
   * @param {object} state The state of the component.
   * @returns {Value[]}
   */ filterOptions: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * If `true`, hide the selected options from the list box.
   * @default false
   */ filterSelectedOptions: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Force the visibility display of the popup icon.
   * @default 'auto'
   */ forcePopupIcon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'auto'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
    ]),
    /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   * @default false
   */ freeSolo: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */ fullWidth: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The label to display when the tags are truncated (`limitTags`).
   *
   * @param {number} more The number of truncated tags.
   * @returns {ReactNode}
   * @default (more) => `+${more}`
   */ getLimitTagsText: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Used to determine the disabled state for a given option.
   *
   * @param {Value} option The option to test.
   * @template Value The option shape. Will be the same shape as an item of the options.
   * @returns {boolean}
   */ getOptionDisabled: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Used to determine the key for a given option.
   * This can be useful when the labels of options are not unique (since labels are used as keys by default).
   *
   * @param {Value} option The option to get the key for.
   * @returns {string | number}
   */ getOptionKey: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if `renderOption` is not provided).
   *
   * If used in free solo mode, it must accept both the type of the options and a string.
   *
   * @param {Value} option
   * @returns {string}
   * @default (option) => option.label ?? option
   */ getOptionLabel: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {Value} option The Autocomplete option.
   * @returns {string}
   */ groupBy: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * If `true`, the component handles the "Home" and "End" keys when the popup is open.
   * It should move focus to the first option and last option, respectively.
   * @default !props.freeSolo
   */ handleHomeEndKeys: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide an id it will fall back to a randomly generated one.
   */ id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * If `true`, the highlight can move to the input.
   * @default false
   */ includeInputInList: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The input value.
   */ inputValue: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * Used to determine if the option represents the given value.
   * Uses strict equality by default.
   * ⚠️ Both arguments need to be handled, an option can only match with one value.
   *
   * @param {Value} option The option to test.
   * @param {Value} value The value to test against.
   * @returns {boolean}
   */ isOptionEqualToValue: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * The maximum number of tags that will be visible when not focused.
   * Set `-1` to disable the limit.
   * @default -1
   */ limitTags: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$integerPropType$2f$integerPropType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    /**
   * The component used to render the listbox.
   * @default 'ul'
   * @deprecated Use `slotProps.listbox.component` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */ ListboxComponent: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * Props applied to the Listbox element.
   * @deprecated Use `slotProps.listbox` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */ ListboxProps: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * If `true`, the component is in a loading state.
   * This shows the `loadingText` in place of suggestions (only if there are no suggestions to show, for example `options` are empty).
   * @default false
   */ loading: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Text to display when in a loading state.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Loading…'
   */ loadingText: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */ multiple: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Text to display when there are no options.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'No options'
   */ noOptionsText: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value|Value[]} value The new value of the component.
   * @param {string} reason One of "createOption", "selectOption", "removeOption", "blur" or "clear".
   * @param {string} [details]
   */ onChange: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"selectOption"`, `"removeOption"`, `"blur"`.
   */ onClose: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired when the highlight option changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value} option The highlighted option.
   * @param {string} reason Can be: `"keyboard"`, `"mouse"`, `"touch"`.
   */ onHighlightChange: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired when the input value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`, `"blur"`, `"selectOption"`, `"removeOption"`
   */ onInputChange: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onKeyDown: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */ onOpen: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * If `true`, the component is shown.
   */ open: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the popup will open on input focus.
   * @default false
   */ openOnFocus: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Override the default text for the *open popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Open'
   */ openText: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * A list of options that will be shown in the Autocomplete.
   */ options: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].array.isRequired,
    /**
   * The component used to render the body of the popup.
   * @default Paper
   * @deprecated Use `slots.paper` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */ PaperComponent: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * The component used to position the popup.
   * @default Popper
   * @deprecated Use `slots.popper` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */ PopperComponent: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * The icon to display in place of the default popup icon.
   * @default <ArrowDropDownIcon />
   */ popupIcon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.
   * @default false
   */ readOnly: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Render the group.
   *
   * @param {AutocompleteRenderGroupParams} params The group to render.
   * @returns {ReactNode}
   */ renderGroup: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Render the input.
   *
   * **Note:** The `renderInput` prop must return a `TextField` component or a compatible custom component
   * that correctly forwards `InputProps.ref` and spreads `inputProps`. This ensures proper integration
   * with the Autocomplete's internal logic (e.g., focus management and keyboard navigation).
   *
   * Avoid using components like `DatePicker` or `Select` directly, as they may not forward the required props,
   * leading to runtime errors or unexpected behavior.
   *
   * @param {object} params
   * @returns {ReactNode}
   */ renderInput: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func.isRequired,
    /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {object} props The props to apply on the li element.
   * @param {Value} option The option to render.
   * @param {object} state The state of each option.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */ renderOption: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Render the selected value when doing multiple selections.
   *
   * @deprecated Use `renderValue` prop instead
   *
   * @param {Value[]} value The `value` provided to the component.
   * @param {function} getTagProps A tag props getter.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */ renderTags: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Renders the selected value(s) as rich content in the input for both single and multiple selections.
   *
   * @param {AutocompleteRenderValue<Value, Multiple, FreeSolo>} value The `value` provided to the component.
   * @param {function} getItemProps The value item props.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */ renderValue: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * If `true`, the input's text is selected on focus.
   * It helps the user clear the selected value.
   * @default !props.freeSolo
   */ selectOnFocus: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The size of the component.
   * @default 'medium'
   */ size: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'small',
            'medium'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * The props used for each slot inside.
   * @default {}
   */ slotProps: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .shape({
        chip: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
        ]),
        clearIndicator: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
        ]),
        listbox: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
        ]),
        paper: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
        ]),
        popper: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
        ]),
        popupIndicator: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
        ])
    }),
    /**
   * The components used for each slot inside.
   * @default {}
   */ slots: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
        listbox: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
        paper: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
        popper: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType
    }),
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * The value of the autocomplete.
   *
   * The value must have reference equality with the option in order to be selected.
   * You can customize the equality behavior with the `isOptionEqualToValue` prop.
   */ value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].any, (props)=>{
        if (props.multiple && props.value !== undefined && !Array.isArray(props.value)) {
            return new Error([
                'MUI: The Autocomplete expects the `value` prop to be an array when `multiple={true}` or undefined.',
                `However, ${props.value} was provided.`
            ].join('\n'));
        }
        return null;
    })
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = Autocomplete;
}),
]);

//# sourceMappingURL=25d00_%40mui_material_esm_Autocomplete_25fe5f64._.js.map