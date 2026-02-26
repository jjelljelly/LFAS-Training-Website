module.exports = [
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>chainPropTypes
]);
function chainPropTypes(propType1, propType2) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return function validate(...args) {
        return propType1(...args) || propType2(...args);
    };
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint no-restricted-syntax: 0, prefer-template: 0, guard-for-in: 0
   ---
   These rules are preventing the performance optimizations below.
 */ /**
 * Compose classes from multiple sources.
 *
 * @example
 * ```tsx
 * const slots = {
 *  root: ['root', 'primary'],
 *  label: ['label'],
 * };
 *
 * const getUtilityClass = (slot) => `MuiButton-${slot}`;
 *
 * const classes = {
 *   root: 'my-root-class',
 * };
 *
 * const output = composeClasses(slots, getUtilityClass, classes);
 * // {
 * //   root: 'MuiButton-root MuiButton-primary my-root-class',
 * //   label: 'MuiButton-label',
 * // }
 * ```
 *
 * @param slots a list of classes for each possible slot
 * @param getUtilityClass a function to resolve the class based on the slot name
 * @param classes the input classes from props
 * @returns the resolved classes for all slots
 */ __turbopack_context__.s([
    "default",
    ()=>composeClasses
]);
function composeClasses(slots, getUtilityClass, classes = undefined) {
    const output = {};
    for(const slotName in slots){
        const slot = slots[slotName];
        let buffer = '';
        let start = true;
        for(let i = 0; i < slot.length; i += 1){
            const value = slot[i];
            if (value) {
                buffer += (start === true ? '' : ' ') + getUtilityClass(value);
                start = false;
                if (classes && classes[value]) {
                    buffer += ' ' + classes[value];
                }
            }
        }
        output[slotName] = buffer;
    }
    return output;
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/getDisplayName/getDisplayName.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getDisplayName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/node_modules/react-is/index.js [app-ssr] (ecmascript)");
;
function getFunctionComponentName(Component, fallback = '') {
    return Component.displayName || Component.name || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
    const functionName = getFunctionComponentName(innerType);
    return outerType.displayName || (functionName !== '' ? `${wrapperName}(${functionName})` : wrapperName);
}
function getDisplayName(Component) {
    if (Component == null) {
        return undefined;
    }
    if (typeof Component === 'string') {
        return Component;
    }
    if (typeof Component === 'function') {
        return getFunctionComponentName(Component, 'Component');
    }
    // TypeScript can't have components as objects but they exist in the form of `memo` or `Suspense`
    if (typeof Component === 'object') {
        switch(Component.$$typeof){
            case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ForwardRef"]:
                return getWrappedName(Component, Component.render, 'ForwardRef');
            case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Memo"]:
                return getWrappedName(Component, Component.type, 'memo');
            default:
                return undefined;
        }
    }
    return undefined;
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/integerPropType/integerPropType.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getTypeByValue",
    ()=>getTypeByValue
]);
function getTypeByValue(value) {
    const valueType = typeof value;
    switch(valueType){
        case 'number':
            if (Number.isNaN(value)) {
                return 'NaN';
            }
            if (!Number.isFinite(value)) {
                return 'Infinity';
            }
            if (value !== Math.floor(value)) {
                return 'float';
            }
            return 'number';
        case 'object':
            if (value === null) {
                return 'null';
            }
            return value.constructor.name;
        default:
            return valueType;
    }
}
function requiredInteger(props, propName, componentName, location) {
    const propValue = props[propName];
    if (propValue == null || !Number.isInteger(propValue)) {
        const propType = getTypeByValue(propValue);
        return new RangeError(`Invalid ${location} \`${propName}\` of type \`${propType}\` supplied to \`${componentName}\`, expected \`integer\`.`);
    }
    return null;
}
function validator(props, propName, componentName, location) {
    const propValue = props[propName];
    if (propValue === undefined) {
        return null;
    }
    return requiredInteger(props, propName, componentName, location);
}
function validatorNoop() {
    return null;
}
validator.isRequired = requiredInteger;
validatorNoop.isRequired = validatorNoop;
const integerPropType = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : validator;
const __TURBOPACK__default__export__ = integerPropType;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>generateUtilityClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-ssr] (ecmascript)");
;
function generateUtilityClasses(componentName, slots, globalStatePrefix = 'Mui') {
    const result = {};
    slots.forEach((slot)=>{
        result[slot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(componentName, slot, globalStatePrefix);
    });
    return result;
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/refType/refType.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
;
const refType = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object
]);
const __TURBOPACK__default__export__ = refType;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/elementTypeAcceptingRef/elementTypeAcceptingRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js [app-ssr] (ecmascript)");
;
;
;
function isClassComponent(elementType) {
    // elementType.prototype?.isReactComponent
    const { prototype = {} } = elementType;
    return Boolean(prototype.isReactComponent);
}
function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
    const propValue = props[propName];
    const safePropName = propFullName || propName;
    if ("TURBOPACK compile-time truthy", 1) {
        return null;
    }
    //TURBOPACK unreachable
    ;
    let warningHint;
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].elementType, elementTypeAcceptingRef);
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/isFocusVisible/isFocusVisible.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns a boolean indicating if the event's target has :focus-visible
 */ __turbopack_context__.s([
    "default",
    ()=>isFocusVisible
]);
function isFocusVisible(element) {
    try {
        return element.matches(':focus-visible');
    } catch (error) {
        // Do not warn on jsdom tests, otherwise all tests that rely on focus have to be skipped
        // Tests that rely on `:focus-visible` will still have to be skipped in jsdom
        if (("TURBOPACK compile-time value", "development") !== 'production' && !window.navigator.userAgent.includes('jsdom')) {
            console.warn([
                'MUI: The `:focus-visible` pseudo class is not supported in this browser.',
                'Some components rely on this feature to work properly.'
            ].join('\n'));
        }
    }
    return false;
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/useForkRef/useForkRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useForkRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useForkRef(...refs) {
    const cleanupRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](undefined);
    const refEffect = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((instance)=>{
        const cleanups = refs.map((ref)=>{
            if (ref == null) {
                return null;
            }
            if (typeof ref === 'function') {
                const refCallback = ref;
                const refCleanup = refCallback(instance);
                return typeof refCleanup === 'function' ? refCleanup : ()=>{
                    refCallback(null);
                };
            }
            ref.current = instance;
            return ()=>{
                ref.current = null;
            };
        });
        return ()=>{
            cleanups.forEach((refCleanup)=>refCleanup?.());
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, refs);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (refs.every((ref)=>ref == null)) {
            return null;
        }
        return (value)=>{
            if (cleanupRef.current) {
                cleanupRef.current();
                cleanupRef.current = undefined;
            }
            if (value != null) {
                cleanupRef.current = refEffect(value);
            }
        };
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- intentionally ignoring that the dependency array must be an array literal
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, refs);
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js [app-ssr] (ecmascript)");
'use client';
;
;
/**
 * Inspired by https://github.com/facebook/react/issues/14099#issuecomment-440013892
 * See RFC in https://github.com/reactjs/rfcs/pull/220
 */ function useEventCallback(fn) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](fn);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>{
        ref.current = fn;
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]((...args)=>// @ts-expect-error hide `this`
        (0, ref.current)(...args)).current;
}
const __TURBOPACK__default__export__ = useEventCallback;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useLazyRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const UNINITIALIZED = {};
function useLazyRef(init, initArg) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](UNINITIALIZED);
    if (ref.current === UNINITIALIZED) {
        ref.current = init(initArg);
    }
    return ref;
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/useOnMount/useOnMount.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useOnMount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const EMPTY = [];
function useOnMount(fn) {
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- no need to put `fn` in the dependency array
    /* eslint-disable react-hooks/exhaustive-deps */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](fn, EMPTY);
/* eslint-enable react-hooks/exhaustive-deps */ }
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/useTimeout/useTimeout.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Timeout",
    ()=>Timeout,
    "default",
    ()=>useTimeout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useLazyRef$2f$useLazyRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useOnMount$2f$useOnMount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/useOnMount/useOnMount.js [app-ssr] (ecmascript)");
'use client';
;
;
class Timeout {
    static create() {
        return new Timeout();
    }
    currentId = null;
    /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */ start(delay, fn) {
        this.clear();
        this.currentId = setTimeout(()=>{
            this.currentId = null;
            fn();
        }, delay);
    }
    clear = ()=>{
        if (this.currentId !== null) {
            clearTimeout(this.currentId);
            this.currentId = null;
        }
    };
    disposeEffect = ()=>{
        return this.clear;
    };
}
function useTimeout() {
    const timeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useLazyRef$2f$useLazyRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(Timeout.create).current;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useOnMount$2f$useOnMount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(timeout.disposeEffect);
    return timeout;
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js [app-ssr] (ecmascript) <export default as unstable_ClassNameGenerator>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_ClassNameGenerator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ClassNameGenerator$2f$ClassNameGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ClassNameGenerator$2f$ClassNameGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js [app-ssr] (ecmascript)");
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/isHostComponent/isHostComponent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */ function isHostComponent(element) {
    return typeof element === 'string';
}
const __TURBOPACK__default__export__ = isHostComponent;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/appendOwnerState/appendOwnerState.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$isHostComponent$2f$isHostComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/isHostComponent/isHostComponent.js [app-ssr] (ecmascript)");
;
/**
 * Type of the ownerState based on the type of an element it applies to.
 * This resolves to the provided OwnerState for React components and `undefined` for host components.
 * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
 */ /**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node or undefined, `ownerState` is not applied.
 * @param otherProps Props of the element.
 * @param ownerState
 */ function appendOwnerState(elementType, otherProps, ownerState) {
    if (elementType === undefined || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$isHostComponent$2f$isHostComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(elementType)) {
        return otherProps;
    }
    return {
        ...otherProps,
        ownerState: {
            ...otherProps.ownerState,
            ...ownerState
        }
    };
}
const __TURBOPACK__default__export__ = appendOwnerState;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/resolveComponentProps/resolveComponentProps.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**
 * If `componentProps` is a function, calls it with the provided `ownerState`.
 * Otherwise, just returns `componentProps`.
 */ function resolveComponentProps(componentProps, ownerState, slotState) {
    if (typeof componentProps === 'function') {
        return componentProps(ownerState, slotState);
    }
    return componentProps;
}
const __TURBOPACK__default__export__ = resolveComponentProps;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**
 * Extracts event handlers from a given object.
 * A prop is considered an event handler if it is a function and its name starts with `on`.
 *
 * @param object An object to extract event handlers from.
 * @param excludeKeys An array of keys to exclude from the returned object.
 */ function extractEventHandlers(object, excludeKeys = []) {
    if (object === undefined) {
        return {};
    }
    const result = {};
    Object.keys(object).filter((prop)=>prop.match(/^on[A-Z]/) && typeof object[prop] === 'function' && !excludeKeys.includes(prop)).forEach((prop)=>{
        result[prop] = object[prop];
    });
    return result;
}
const __TURBOPACK__default__export__ = extractEventHandlers;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/omitEventHandlers/omitEventHandlers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**
 * Removes event handlers from the given object.
 * A field is considered an event handler if it is a function with a name beginning with `on`.
 *
 * @param object Object to remove event handlers from.
 * @returns Object with event handlers removed.
 */ function omitEventHandlers(object) {
    if (object === undefined) {
        return {};
    }
    const result = {};
    Object.keys(object).filter((prop)=>!(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function')).forEach((prop)=>{
        result[prop] = object[prop];
    });
    return result;
}
const __TURBOPACK__default__export__ = omitEventHandlers;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/mergeSlotProps/mergeSlotProps.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$extractEventHandlers$2f$extractEventHandlers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$omitEventHandlers$2f$omitEventHandlers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/omitEventHandlers/omitEventHandlers.js [app-ssr] (ecmascript)");
;
;
;
/**
 * Merges the slot component internal props (usually coming from a hook)
 * with the externally provided ones.
 *
 * The merge order is (the latter overrides the former):
 * 1. The internal props (specified as a getter function to work with get*Props hook result)
 * 2. Additional props (specified internally on a Base UI component)
 * 3. External props specified on the owner component. These should only be used on a root slot.
 * 4. External props specified in the `slotProps.*` prop.
 * 5. The `className` prop - combined from all the above.
 * @param parameters
 * @returns
 */ function mergeSlotProps(parameters) {
    const { getSlotProps, additionalProps, externalSlotProps, externalForwardedProps, className } = parameters;
    if (!getSlotProps) {
        // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
        // so we can simply merge all the props without having to worry about extracting event handlers.
        const joinedClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
        const mergedStyle = {
            ...additionalProps?.style,
            ...externalForwardedProps?.style,
            ...externalSlotProps?.style
        };
        const props = {
            ...additionalProps,
            ...externalForwardedProps,
            ...externalSlotProps
        };
        if (joinedClasses.length > 0) {
            props.className = joinedClasses;
        }
        if (Object.keys(mergedStyle).length > 0) {
            props.style = mergedStyle;
        }
        return {
            props,
            internalRef: undefined
        };
    }
    // In this case, getSlotProps is responsible for calling the external event handlers.
    // We don't need to include them in the merged props because of this.
    const eventHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$extractEventHandlers$2f$extractEventHandlers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        ...externalForwardedProps,
        ...externalSlotProps
    });
    const componentsPropsWithoutEventHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$omitEventHandlers$2f$omitEventHandlers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(externalSlotProps);
    const otherPropsWithoutEventHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$omitEventHandlers$2f$omitEventHandlers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(externalForwardedProps);
    const internalSlotProps = getSlotProps(eventHandlers);
    // The order of classes is important here.
    // Emotion (that we use in libraries consuming Base UI) depends on this order
    // to properly override style. It requires the most important classes to be last
    // (see https://github.com/mui/material-ui/pull/33205) for the related discussion.
    const joinedClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(internalSlotProps?.className, additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
    const mergedStyle = {
        ...internalSlotProps?.style,
        ...additionalProps?.style,
        ...externalForwardedProps?.style,
        ...externalSlotProps?.style
    };
    const props = {
        ...internalSlotProps,
        ...additionalProps,
        ...otherPropsWithoutEventHandlers,
        ...componentsPropsWithoutEventHandlers
    };
    if (joinedClasses.length > 0) {
        props.className = joinedClasses;
    }
    if (Object.keys(mergedStyle).length > 0) {
        props.style = mergedStyle;
    }
    return {
        props,
        internalRef: internalSlotProps.ref
    };
}
const __TURBOPACK__default__export__ = mergeSlotProps;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/debounce/debounce.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
__turbopack_context__.s([
    "default",
    ()=>debounce
]);
function debounce(func, wait = 166) {
    let timeout;
    function debounced(...args) {
        const later = ()=>{
            // @ts-ignore
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    }
    debounced.clear = ()=>{
        clearTimeout(timeout);
    };
    return debounced;
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ownerDocument
]);
function ownerDocument(node) {
    return node && node.ownerDocument || document;
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ownerWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ownerDocument$2f$ownerDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js [app-ssr] (ecmascript)");
;
function ownerWindow(node) {
    const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ownerDocument$2f$ownerDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node);
    return doc.defaultView || window;
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/isMuiElement/isMuiElement.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isMuiElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function isMuiElement(element, muiNames) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](element) && muiNames.indexOf(// For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    element.type.muiName ?? element.type?._payload?.value?.muiName) !== -1;
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/getReactElementRef/getReactElementRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getReactElementRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function getReactElementRef(element) {
    // 'ref' is passed as prop in React 19, whereas 'ref' is directly attached to children in older versions
    if (parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"], 10) >= 19) {
        return element?.props?.ref || null;
    }
    // @ts-expect-error element.ref is not included in the ReactElement type
    // https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/70189
    return element?.ref || null;
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/HTMLElementType/HTMLElementType.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HTMLElementType
]);
function HTMLElementType(props, propName, componentName, location, propFullName) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const propValue = props[propName];
    const safePropName = propFullName || propName;
    if (propValue == null) {
        return null;
    }
    if (propValue && propValue.nodeType !== 1) {
        return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an HTMLElement.`);
    }
    return null;
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useForkRef$2f$useForkRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/useForkRef/useForkRef.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$appendOwnerState$2f$appendOwnerState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/appendOwnerState/appendOwnerState.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$mergeSlotProps$2f$mergeSlotProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/mergeSlotProps/mergeSlotProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$resolveComponentProps$2f$resolveComponentProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/resolveComponentProps/resolveComponentProps.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
/**
 * @ignore - do not document.
 * Builds the props to be passed into the slot of an unstyled component.
 * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
 * If the slot component is not a host component, it also merges in the `ownerState`.
 *
 * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
 */ function useSlotProps(parameters) {
    const { elementType, externalSlotProps, ownerState, skipResolvingSlotProps = false, ...other } = parameters;
    const resolvedComponentsProps = skipResolvingSlotProps ? {} : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$resolveComponentProps$2f$resolveComponentProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(externalSlotProps, ownerState);
    const { props: mergedProps, internalRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$mergeSlotProps$2f$mergeSlotProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        ...other,
        externalSlotProps: resolvedComponentsProps
    });
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useForkRef$2f$useForkRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(internalRef, resolvedComponentsProps?.ref, parameters.additionalProps?.ref);
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$appendOwnerState$2f$appendOwnerState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(elementType, {
        ...mergedProps,
        ref
    }, ownerState);
    return props;
}
const __TURBOPACK__default__export__ = useSlotProps;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/getActiveElement/getActiveElement.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Gets the actual active element, traversing through shadow roots if necessary.
 *
 * When an element inside a shadow root has focus, `document.activeElement` returns
 * the shadow host element. This function recursively traverses shadow roots to find
 * the actual focused element.
 *
 * @param root - The document or shadow root to start the search from.
 * @returns The actual focused element, or null if no element has focus.
 *
 * @example
 * // In a shadow DOM context
 * const activeElement = getActiveElement(document);
 * // Returns the actual focused element inside the shadow root
 *
 * @example
 * // Starting from a specific document
 * const activeElement = getActiveElement(ownerDocument(element));
 */ __turbopack_context__.s([
    "default",
    ()=>activeElement
]);
function activeElement(doc) {
    let element = doc.activeElement;
    while(element?.shadowRoot?.activeElement != null){
        element = element.shadowRoot.activeElement;
    }
    return element;
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/getScrollbarSize/getScrollbarSize.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/488fd8afc535ca3a6ad4dc581f5e89217b6a36ac/js/src/util/scrollbar.js#L14-L18
__turbopack_context__.s([
    "default",
    ()=>getScrollbarSize
]);
function getScrollbarSize(win = window) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    const documentWidth = win.document.documentElement.clientWidth;
    return win.innerWidth - documentWidth;
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/elementAcceptingRef/elementAcceptingRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js [app-ssr] (ecmascript)");
;
;
function isClassComponent(elementType) {
    // elementType.prototype?.isReactComponent
    const { prototype = {} } = elementType;
    return Boolean(prototype.isReactComponent);
}
function acceptingRef(props, propName, componentName, location, propFullName) {
    const element = props[propName];
    const safePropName = propFullName || propName;
    if ("TURBOPACK compile-time truthy", 1) {
        return null;
    }
    //TURBOPACK unreachable
    ;
    let warningHint;
    const elementType = undefined;
}
const elementAcceptingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].element, acceptingRef);
elementAcceptingRef.isRequired = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].element.isRequired, acceptingRef);
const __TURBOPACK__default__export__ = elementAcceptingRef;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/setRef/setRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * TODO v5: consider making it private
 *
 * passes {value} to {ref}
 *
 * WARNING: Be sure to only call this inside a callback that is passed as a ref.
 * Otherwise, make sure to cleanup the previous {ref} if it changes. See
 * https://github.com/mui/material-ui/issues/13539
 *
 * Useful if you want to expose the ref of an inner component to the public API
 * while still using it inside the component.
 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
 */ __turbopack_context__.s([
    "default",
    ()=>setRef
]);
function setRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref) {
        ref.current = value;
    }
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/createChainedFunction/createChainedFunction.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Safe chained function.
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 */ __turbopack_context__.s([
    "default",
    ()=>createChainedFunction
]);
function createChainedFunction(...funcs) {
    return funcs.reduce((acc, func)=>{
        if (func == null) {
            return acc;
        }
        return function chainedFunction(...args) {
            acc.apply(this, args);
            func.apply(this, args);
        };
    }, ()=>{});
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/useControlled/useControlled.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useControlled
]);
// TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- process.env never changes, dependency arrays are intentionally ignored
/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useControlled(props) {
    const { controlled, default: defaultProp, name, state = 'value' } = props;
    // isControlled is ignored in the hook dependency lists as it should never change.
    const { current: isControlled } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](controlled !== undefined);
    const [valueState, setValue] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](defaultProp);
    const value = isControlled ? controlled : valueState;
    if ("TURBOPACK compile-time truthy", 1) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
            if (isControlled !== (controlled !== undefined)) {
                console.error([
                    `MUI: A component is changing the ${isControlled ? '' : 'un'}controlled ${state} state of ${name} to be ${isControlled ? 'un' : ''}controlled.`,
                    'Elements should not switch from uncontrolled to controlled (or vice versa).',
                    `Decide between using a controlled or uncontrolled ${name} ` + 'element for the lifetime of the component.',
                    "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.",
                    'More info: https://fb.me/react-controlled-components'
                ].join('\n'));
            }
        }, [
            state,
            name,
            controlled
        ]);
        const { current: defaultValue } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](defaultProp);
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
            if (!isControlled && JSON.stringify(defaultProp) !== JSON.stringify(defaultValue)) {
                console.error([
                    `MUI: A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. ` + `To suppress this warning opt to use a controlled ${name}.`
                ].join('\n'));
            }
        }, [
            JSON.stringify(defaultProp)
        ]);
    }
    const setValueIfUncontrolled = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((newValue)=>{
        if (!isControlled) {
            setValue(newValue);
        }
    }, []);
    // TODO: provide overloads for the useControlled function to account for the case where either
    // controlled or default is not undefined.
    // In that case the return type should be [T, React.Dispatch<React.SetStateAction<T>>]
    // otherwise it should be [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>]
    return [
        value,
        setValueIfUncontrolled
    ];
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/preprocessStyles.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>preprocessStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/styled-engine/esm/index.js [app-ssr] (ecmascript) <locals>");
;
function preprocessStyles(input) {
    const { variants, ...style } = input;
    const result = {
        variants,
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_serializeStyles"])(style),
        isProcessed: true
    };
    // Not supported on styled-components
    if (result.style === style) {
        return result;
    }
    if (variants) {
        variants.forEach((variant)=>{
            if (typeof variant.style !== 'function') {
                variant.style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_serializeStyles"])(variant.style);
            }
        });
    }
    return result;
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/createStyled/createStyled.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createStyled,
    "shouldForwardProp",
    ()=>shouldForwardProp,
    "systemDefaultTheme",
    ()=>systemDefaultTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/styled-engine/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/deepmerge/deepmerge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/capitalize/capitalize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$getDisplayName$2f$getDisplayName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/getDisplayName/getDisplayName.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/createTheme/createTheme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$preprocessStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/preprocessStyles.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const systemDefaultTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
function shouldForwardProp(prop) {
    return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
function shallowLayer(serialized, layerName) {
    if (layerName && serialized && typeof serialized === 'object' && serialized.styles && !serialized.styles.startsWith('@layer') // only add the layer if it is not already there.
    ) {
        serialized.styles = `@layer ${layerName}{${String(serialized.styles)}}`;
    }
    return serialized;
}
function defaultOverridesResolver(slot) {
    if (!slot) {
        return null;
    }
    return (_props, styles)=>styles[slot];
}
function attachTheme(props, themeId, defaultTheme) {
    props.theme = isObjectEmpty(props.theme) ? defaultTheme : props.theme[themeId] || props.theme;
}
function processStyle(props, style, layerName) {
    /*
   * Style types:
   *  - null/undefined
   *  - string
   *  - CSS style object: { [cssKey]: [cssValue], variants }
   *  - Processed style object: { style, variants, isProcessed: true }
   *  - Array of any of the above
   */ const resolvedStyle = typeof style === 'function' ? style(props) : style;
    if (Array.isArray(resolvedStyle)) {
        return resolvedStyle.flatMap((subStyle)=>processStyle(props, subStyle, layerName));
    }
    if (Array.isArray(resolvedStyle?.variants)) {
        let rootStyle;
        if (resolvedStyle.isProcessed) {
            rootStyle = layerName ? shallowLayer(resolvedStyle.style, layerName) : resolvedStyle.style;
        } else {
            const { variants, ...otherStyles } = resolvedStyle;
            rootStyle = layerName ? shallowLayer((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_serializeStyles"])(otherStyles), layerName) : otherStyles;
        }
        return processStyleVariants(props, resolvedStyle.variants, [
            rootStyle
        ], layerName);
    }
    if (resolvedStyle?.isProcessed) {
        return layerName ? shallowLayer((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_serializeStyles"])(resolvedStyle.style), layerName) : resolvedStyle.style;
    }
    return layerName ? shallowLayer((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_serializeStyles"])(resolvedStyle), layerName) : resolvedStyle;
}
function processStyleVariants(props, variants, results = [], layerName = undefined) {
    let mergedState; // We might not need it, initialized lazily
    variantLoop: for(let i = 0; i < variants.length; i += 1){
        const variant = variants[i];
        if (typeof variant.props === 'function') {
            mergedState ??= {
                ...props,
                ...props.ownerState,
                ownerState: props.ownerState
            };
            if (!variant.props(mergedState)) {
                continue;
            }
        } else {
            for(const key in variant.props){
                if (props[key] !== variant.props[key] && props.ownerState?.[key] !== variant.props[key]) {
                    continue variantLoop;
                }
            }
        }
        if (typeof variant.style === 'function') {
            mergedState ??= {
                ...props,
                ...props.ownerState,
                ownerState: props.ownerState
            };
            results.push(layerName ? shallowLayer((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_serializeStyles"])(variant.style(mergedState)), layerName) : variant.style(mergedState));
        } else {
            results.push(layerName ? shallowLayer((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_serializeStyles"])(variant.style), layerName) : variant.style);
        }
    }
    return results;
}
function createStyled(input = {}) {
    const { themeId, defaultTheme = systemDefaultTheme, rootShouldForwardProp = shouldForwardProp, slotShouldForwardProp = shouldForwardProp } = input;
    function styleAttachTheme(props) {
        attachTheme(props, themeId, defaultTheme);
    }
    const styled = (tag, inputOptions = {})=>{
        // If `tag` is already a styled component, filter out the `sx` style function
        // to prevent unnecessary styles generated by the composite components.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_mutateStyles"])(tag, (styles)=>styles.filter((style)=>style !== __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]));
        const { name: componentName, slot: componentSlot, skipVariantsResolver: inputSkipVariantsResolver, skipSx: inputSkipSx, // TODO v6: remove `lowercaseFirstLetter()` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot)), ...options } = inputOptions;
        const layerName = componentName && componentName.startsWith('Mui') || !!componentSlot ? 'components' : 'custom';
        // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.
        const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver : // TODO v6: remove `Root` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        componentSlot && componentSlot !== 'Root' && componentSlot !== 'root' || false;
        const skipSx = inputSkipSx || false;
        let shouldForwardPropOption = shouldForwardProp;
        // TODO v6: remove `Root` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        if (componentSlot === 'Root' || componentSlot === 'root') {
            shouldForwardPropOption = rootShouldForwardProp;
        } else if (componentSlot) {
            // any other slot specified
            shouldForwardPropOption = slotShouldForwardProp;
        } else if (isStringTag(tag)) {
            // for string (html) tag, preserve the behavior in emotion & styled-components.
            shouldForwardPropOption = undefined;
        }
        const defaultStyledResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(tag, {
            shouldForwardProp: shouldForwardPropOption,
            label: generateStyledLabel(componentName, componentSlot),
            ...options
        });
        const transformStyle = (style)=>{
            // - On the server Emotion doesn't use React.forwardRef for creating components, so the created
            //   component stays as a function. This condition makes sure that we do not interpolate functions
            //   which are basically components used as a selectors.
            // - `style` could be a styled component from a babel plugin for component selectors, This condition
            //   makes sure that we do not interpolate them.
            if (style.__emotion_real === style) {
                return style;
            }
            if (typeof style === 'function') {
                return function styleFunctionProcessor(props) {
                    return processStyle(props, style, props.theme.modularCssLayers ? layerName : undefined);
                };
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPlainObject"])(style)) {
                const serialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$preprocessStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(style);
                return function styleObjectProcessor(props) {
                    if (!serialized.variants) {
                        return props.theme.modularCssLayers ? shallowLayer(serialized.style, layerName) : serialized.style;
                    }
                    return processStyle(props, serialized, props.theme.modularCssLayers ? layerName : undefined);
                };
            }
            return style;
        };
        const muiStyledResolver = (...expressionsInput)=>{
            const expressionsHead = [];
            const expressionsBody = expressionsInput.map(transformStyle);
            const expressionsTail = [];
            // Preprocess `props` to set the scoped theme value.
            // This must run before any other expression.
            expressionsHead.push(styleAttachTheme);
            if (componentName && overridesResolver) {
                expressionsTail.push(function styleThemeOverrides(props) {
                    const theme = props.theme;
                    const styleOverrides = theme.components?.[componentName]?.styleOverrides;
                    if (!styleOverrides) {
                        return null;
                    }
                    const resolvedStyleOverrides = {};
                    // TODO: v7 remove iteration and use `resolveStyleArg(styleOverrides[slot])` directly
                    // eslint-disable-next-line guard-for-in
                    for(const slotKey in styleOverrides){
                        resolvedStyleOverrides[slotKey] = processStyle(props, styleOverrides[slotKey], props.theme.modularCssLayers ? 'theme' : undefined);
                    }
                    return overridesResolver(props, resolvedStyleOverrides);
                });
            }
            if (componentName && !skipVariantsResolver) {
                expressionsTail.push(function styleThemeVariants(props) {
                    const theme = props.theme;
                    const themeVariants = theme?.components?.[componentName]?.variants;
                    if (!themeVariants) {
                        return null;
                    }
                    return processStyleVariants(props, themeVariants, [], props.theme.modularCssLayers ? 'theme' : undefined);
                });
            }
            if (!skipSx) {
                expressionsTail.push(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
            }
            // This function can be called as a tagged template, so the first argument would contain
            // CSS `string[]` values.
            if (Array.isArray(expressionsBody[0])) {
                const inputStrings = expressionsBody.shift();
                // We need to add placeholders in the tagged template for the custom functions we have
                // possibly added (attachTheme, overrides, variants, and sx).
                const placeholdersHead = new Array(expressionsHead.length).fill('');
                const placeholdersTail = new Array(expressionsTail.length).fill('');
                let outputStrings;
                // prettier-ignore
                {
                    outputStrings = [
                        ...placeholdersHead,
                        ...inputStrings,
                        ...placeholdersTail
                    ];
                    outputStrings.raw = [
                        ...placeholdersHead,
                        ...inputStrings.raw,
                        ...placeholdersTail
                    ];
                }
                // The only case where we put something before `attachTheme`
                expressionsHead.unshift(outputStrings);
            }
            const expressions = [
                ...expressionsHead,
                ...expressionsBody,
                ...expressionsTail
            ];
            const Component = defaultStyledResolver(...expressions);
            if (tag.muiName) {
                Component.muiName = tag.muiName;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                Component.displayName = generateDisplayName(componentName, componentSlot, tag);
            }
            return Component;
        };
        if (defaultStyledResolver.withConfig) {
            muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
        }
        return muiStyledResolver;
    };
    return styled;
}
function generateDisplayName(componentName, componentSlot, tag) {
    if (componentName) {
        return `${componentName}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(componentSlot || '')}`;
    }
    return `Styled(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$getDisplayName$2f$getDisplayName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(tag)})`;
}
function generateStyledLabel(componentName, componentSlot) {
    let label;
    if ("TURBOPACK compile-time truthy", 1) {
        if (componentName) {
            // TODO v6: remove `lowercaseFirstLetter()` in the next major release
            // For more details: https://github.com/mui/material-ui/pull/37908
            label = `${componentName}-${lowercaseFirstLetter(componentSlot || 'Root')}`;
        }
    }
    return label;
}
function isObjectEmpty(object) {
    // eslint-disable-next-line
    for(const _ in object){
        return false;
    }
    return true;
}
// https://github.com/emotion-js/emotion/blob/26ded6109fcd8ca9875cc2ce4564fee678a3f3c5/packages/styled/src/utils.js#L40
function isStringTag(tag) {
    return typeof tag === 'string' && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96;
}
function lowercaseFirstLetter(string) {
    if (!string) {
        return string;
    }
    return string.charAt(0).toLowerCase() + string.slice(1);
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/useTheme/useTheme.js [app-ssr] (ecmascript) <export default as useTheme>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTheme",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useTheme$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useTheme$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/useTheme/useTheme.js [app-ssr] (ecmascript)");
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/memoTheme.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>unstable_memoTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$preprocessStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/preprocessStyles.js [app-ssr] (ecmascript)");
;
/* eslint-disable @typescript-eslint/naming-convention */ // We need to pass an argument as `{ theme }` for PigmentCSS, but we don't want to
// allocate more objects.
const arg = {
    theme: undefined
};
function unstable_memoTheme(styleFn) {
    let lastValue;
    let lastTheme;
    return function styleMemoized(props) {
        let value = lastValue;
        if (value === undefined || props.theme !== lastTheme) {
            arg.theme = props.theme;
            value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$preprocessStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(styleFn(arg));
            lastValue = value;
            lastTheme = props.theme;
        }
        return value;
    };
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/memoTheme.js [app-ssr] (ecmascript) <export default as unstable_memoTheme>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_memoTheme",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$memoTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$memoTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/memoTheme.js [app-ssr] (ecmascript)");
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>extendSxProp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/deepmerge/deepmerge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$defaultSxConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js [app-ssr] (ecmascript)");
;
;
const splitProps = (props)=>{
    const result = {
        systemProps: {},
        otherProps: {}
    };
    const config = props?.theme?.unstable_sxConfig ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$defaultSxConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
    Object.keys(props).forEach((prop)=>{
        if (config[prop]) {
            result.systemProps[prop] = props[prop];
        } else {
            result.otherProps[prop] = props[prop];
        }
    });
    return result;
};
function extendSxProp(props) {
    const { sx: inSx, ...other } = props;
    const { systemProps, otherProps } = splitProps(other);
    let finalSx;
    if (Array.isArray(inSx)) {
        finalSx = [
            systemProps,
            ...inSx
        ];
    } else if (typeof inSx === 'function') {
        finalSx = (...args)=>{
            const result = inSx(...args);
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPlainObject"])(result)) {
                return systemProps;
            }
            return {
                ...systemProps,
                ...result
            };
        };
    } else {
        finalSx = {
            ...systemProps,
            ...inSx
        };
    }
    return {
        ...otherProps,
        sx: finalSx
    };
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js [app-ssr] (ecmascript) <export default as extendSxProp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extendSxProp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$extendSxProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$extendSxProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js [app-ssr] (ecmascript)");
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/GlobalStyles/GlobalStyles.js [app-ssr] (ecmascript) <export default as GlobalStyles>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlobalStyles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$GlobalStyles$2f$GlobalStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$GlobalStyles$2f$GlobalStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/GlobalStyles/GlobalStyles.js [app-ssr] (ecmascript)");
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/createBox/createBox.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/styled-engine/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$extendSxProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__extendSxProp$3e$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js [app-ssr] (ecmascript) <export default as extendSxProp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useTheme$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/useTheme/useTheme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function createBox(options = {}) {
    const { themeId, defaultTheme, defaultClassName = 'MuiBox-root', generateClassName } = options;
    const BoxRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])('div', {
        shouldForwardProp: (prop)=>prop !== 'theme' && prop !== 'sx' && prop !== 'as'
    })(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    const Box = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function Box(inProps, ref) {
        const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useTheme$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(defaultTheme);
        const { className, component = 'div', ...other } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$extendSxProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__extendSxProp$3e$__["extendSxProp"])(inProps);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(BoxRoot, {
            as: component,
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
            theme: themeId ? theme[themeId] || theme : theme,
            ...other
        });
    });
    return Box;
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/createBox/createBox.js [app-ssr] (ecmascript) <export default as createBox>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createBox$2f$createBox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createBox$2f$createBox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/createBox/createBox.js [app-ssr] (ecmascript)");
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/styled/styled.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createStyled$2f$createStyled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/createStyled/createStyled.js [app-ssr] (ecmascript)");
;
const styled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createStyled$2f$createStyled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
const __TURBOPACK__default__export__ = styled;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/useThemeProps/getThemeProps.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getThemeProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$resolveProps$2f$resolveProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/resolveProps/resolveProps.js [app-ssr] (ecmascript)");
;
function getThemeProps(params) {
    const { theme, name, props } = params;
    if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
        return props;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$resolveProps$2f$resolveProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(theme.components[name].defaultProps, props);
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/useThemeProps/useThemeProps.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useThemeProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useThemeProps$2f$getThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/useThemeProps/getThemeProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useTheme$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/useTheme/useTheme.js [app-ssr] (ecmascript)");
'use client';
;
;
function useThemeProps({ props, name, defaultTheme, themeId }) {
    let theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useTheme$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(defaultTheme);
    if (themeId) {
        theme = theme[themeId] || theme;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useThemeProps$2f$getThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        theme,
        name,
        props
    });
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/Stack/createStack.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createStack,
    "style",
    ()=>style
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/deepmerge/deepmerge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styled$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/styled/styled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useThemeProps$2f$useThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/useThemeProps/useThemeProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$extendSxProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__extendSxProp$3e$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js [app-ssr] (ecmascript) <export default as extendSxProp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/createTheme/createTheme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$breakpoints$2f$breakpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/breakpoints/breakpoints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2f$spacing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/spacing/spacing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
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
const defaultTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
// widening Theme to any so that the consumer can own the theme structure.
const defaultCreateStyledComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styled$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('div', {
    name: 'MuiStack',
    slot: 'Root'
});
function useThemePropsDefault(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useThemeProps$2f$useThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        props,
        name: 'MuiStack',
        defaultTheme
    });
}
/**
 * Return an array with the separator React element interspersed between
 * each React node of the input children.
 *
 * > joinChildren([1,2,3], 0)
 * [1,0,2,0,3]
 */ function joinChildren(children, separator) {
    const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].toArray(children).filter(Boolean);
    return childrenArray.reduce((output, child, index)=>{
        output.push(child);
        if (index < childrenArray.length - 1) {
            output.push(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](separator, {
                key: `separator-${index}`
            }));
        }
        return output;
    }, []);
}
const getSideFromDirection = (direction)=>{
    return ({
        row: 'Left',
        'row-reverse': 'Right',
        column: 'Top',
        'column-reverse': 'Bottom'
    })[direction];
};
const style = ({ ownerState, theme })=>{
    let styles = {
        display: 'flex',
        flexDirection: 'column',
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$breakpoints$2f$breakpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleBreakpoints"])({
            theme
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$breakpoints$2f$breakpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveBreakpointValues"])({
            values: ownerState.direction,
            breakpoints: theme.breakpoints.values
        }), (propValue)=>({
                flexDirection: propValue
            }))
    };
    if (ownerState.spacing) {
        const transformer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2f$spacing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUnarySpacing"])(theme);
        const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint)=>{
            if (typeof ownerState.spacing === 'object' && ownerState.spacing[breakpoint] != null || typeof ownerState.direction === 'object' && ownerState.direction[breakpoint] != null) {
                acc[breakpoint] = true;
            }
            return acc;
        }, {});
        const directionValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$breakpoints$2f$breakpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveBreakpointValues"])({
            values: ownerState.direction,
            base
        });
        const spacingValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$breakpoints$2f$breakpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveBreakpointValues"])({
            values: ownerState.spacing,
            base
        });
        if (typeof directionValues === 'object') {
            Object.keys(directionValues).forEach((breakpoint, index, breakpoints)=>{
                const directionValue = directionValues[breakpoint];
                if (!directionValue) {
                    const previousDirectionValue = index > 0 ? directionValues[breakpoints[index - 1]] : 'column';
                    directionValues[breakpoint] = previousDirectionValue;
                }
            });
        }
        const styleFromPropValue = (propValue, breakpoint)=>{
            if (ownerState.useFlexGap) {
                return {
                    gap: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2f$spacing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getValue"])(transformer, propValue)
                };
            }
            return {
                // The useFlexGap={false} implement relies on each child to give up control of the margin.
                // We need to reset the margin to avoid double spacing.
                '& > :not(style):not(style)': {
                    margin: 0
                },
                '& > :not(style) ~ :not(style)': {
                    [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$spacing$2f$spacing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getValue"])(transformer, propValue)
                }
            };
        };
        styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(styles, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$breakpoints$2f$breakpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleBreakpoints"])({
            theme
        }, spacingValues, styleFromPropValue));
    }
    styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$breakpoints$2f$breakpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeBreakpointsInOrder"])(theme.breakpoints, styles);
    return styles;
};
function createStack(options = {}) {
    const { // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent, useThemeProps = useThemePropsDefault, componentName = 'MuiStack' } = options;
    const useUtilityClasses = ()=>{
        const slots = {
            root: [
                'root'
            ]
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(slots, (slot)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(componentName, slot), {});
    };
    const StackRoot = createStyledComponent(style);
    const Stack = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function Grid(inProps, ref) {
        const themeProps = useThemeProps(inProps);
        const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$extendSxProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__extendSxProp$3e$__["extendSxProp"])(themeProps); // `color` type conflicts with html color attribute.
        const { component = 'div', direction = 'column', spacing = 0, divider, children, className, useFlexGap = false, ...other } = props;
        const ownerState = {
            direction,
            spacing,
            useFlexGap
        };
        const classes = useUtilityClasses();
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(StackRoot, {
            as: component,
            ownerState: ownerState,
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
            ...other,
            children: divider ? joinChildren(children, divider) : children
        });
    });
    ("TURBOPACK compile-time truthy", 1) ? Stack.propTypes = {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].node,
        direction: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOf([
                'column-reverse',
                'column',
                'row-reverse',
                'row'
            ]),
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOf([
                'column-reverse',
                'column',
                'row-reverse',
                'row'
            ])),
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object
        ]),
        divider: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].node,
        spacing: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string
            ])),
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string
        ]),
        sx: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool
            ])),
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object
        ])
    } : "TURBOPACK unreachable";
    return Stack;
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/Stack/createStack.js [app-ssr] (ecmascript) <export default as createStack>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStack",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$Stack$2f$createStack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$Stack$2f$createStack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/system/esm/Stack/createStack.js [app-ssr] (ecmascript)");
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_objectWithoutPropertiesLoose
]);
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_assertThisInitialized
]);
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_setPrototypeOf
]);
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_inheritsLoose
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [app-ssr] (ecmascript)");
;
function _inheritsLoose(t, o) {
    t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(t, o);
}
;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/react-transition-group/esm/TransitionGroupContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createContext(null);
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/react-transition-group/esm/utils/ChildMapping.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getChildMapping",
    ()=>getChildMapping,
    "getInitialChildMapping",
    ()=>getInitialChildMapping,
    "getNextChildMapping",
    ()=>getNextChildMapping,
    "mergeChildMappings",
    ()=>mergeChildMappings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function getChildMapping(children, mapFn) {
    var mapper = function mapper(child) {
        return mapFn && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(child) ? mapFn(child) : child;
    };
    var result = Object.create(null);
    if (children) __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].map(children, function(c) {
        return c;
    }).forEach(function(child) {
        // run the map function here instead so that the key is the computed one
        result[child.key] = mapper(child);
    });
    return result;
}
function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};
    function getValueForKey(key) {
        return key in next ? next[key] : prev[key];
    } // For each key of `next`, the list of keys to insert before that key in
    // the combined list
    var nextKeysPending = Object.create(null);
    var pendingKeys = [];
    for(var prevKey in prev){
        if (prevKey in next) {
            if (pendingKeys.length) {
                nextKeysPending[prevKey] = pendingKeys;
                pendingKeys = [];
            }
        } else {
            pendingKeys.push(prevKey);
        }
    }
    var i;
    var childMapping = {};
    for(var nextKey in next){
        if (nextKeysPending[nextKey]) {
            for(i = 0; i < nextKeysPending[nextKey].length; i++){
                var pendingNextKey = nextKeysPending[nextKey][i];
                childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
            }
        }
        childMapping[nextKey] = getValueForKey(nextKey);
    } // Finally, add the keys which didn't appear before any key in `next`
    for(i = 0; i < pendingKeys.length; i++){
        childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }
    return childMapping;
}
function getProp(child, prop, props) {
    return props[prop] != null ? props[prop] : child.props[prop];
}
function getInitialChildMapping(props, onExited) {
    return getChildMapping(props.children, function(child) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
            onExited: onExited.bind(null, child),
            in: true,
            appear: getProp(child, 'appear', props),
            enter: getProp(child, 'enter', props),
            exit: getProp(child, 'exit', props)
        });
    });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
    var nextChildMapping = getChildMapping(nextProps.children);
    var children = mergeChildMappings(prevChildMapping, nextChildMapping);
    Object.keys(children).forEach(function(key) {
        var child = children[key];
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(child)) return;
        var hasPrev = key in prevChildMapping;
        var hasNext = key in nextChildMapping;
        var prevChild = prevChildMapping[key];
        var isLeaving = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(prevChild) && !prevChild.props.in; // item is new (entering)
        if (hasNext && (!hasPrev || isLeaving)) {
            // console.log('entering', key)
            children[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
                onExited: onExited.bind(null, child),
                in: true,
                exit: getProp(child, 'exit', nextProps),
                enter: getProp(child, 'enter', nextProps)
            });
        } else if (!hasNext && hasPrev && !isLeaving) {
            // item is old (exiting)
            // console.log('leaving', key)
            children[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
                in: false
            });
        } else if (hasNext && hasPrev && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(prevChild)) {
            // item hasn't changed transition states
            // copy over the last transition props;
            // console.log('unchanged', key)
            children[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
                onExited: onExited.bind(null, child),
                in: prevChild.props.in,
                exit: getProp(child, 'exit', nextProps),
                enter: getProp(child, 'enter', nextProps)
            });
        }
    });
    return children;
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/react-transition-group/esm/TransitionGroup.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/react-transition-group/esm/TransitionGroupContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$ChildMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/react-transition-group/esm/utils/ChildMapping.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
var values = Object.values || function(obj) {
    return Object.keys(obj).map(function(k) {
        return obj[k];
    });
};
var defaultProps = {
    component: 'div',
    childFactory: function childFactory(child) {
        return child;
    }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */ var TransitionGroup = /*#__PURE__*/ function(_React$Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(TransitionGroup, _React$Component);
    function TransitionGroup(props, context) {
        var _this;
        _this = _React$Component.call(this, props, context) || this;
        var handleExited = _this.handleExited.bind((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this)); // Initial children should all be entering, dependent on appear
        _this.state = {
            contextValue: {
                isMounting: true
            },
            handleExited: handleExited,
            firstRender: true
        };
        return _this;
    }
    var _proto = TransitionGroup.prototype;
    _proto.componentDidMount = function componentDidMount() {
        this.mounted = true;
        this.setState({
            contextValue: {
                isMounting: false
            }
        });
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
        this.mounted = false;
    };
    TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
        var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
        return {
            children: firstRender ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$ChildMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInitialChildMapping"])(nextProps, handleExited) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$ChildMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNextChildMapping"])(nextProps, prevChildMapping, handleExited),
            firstRender: false
        };
    } // node is `undefined` when user provided `nodeRef` prop
    ;
    _proto.handleExited = function handleExited(child, node) {
        var currentChildMapping = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$ChildMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChildMapping"])(this.props.children);
        if (child.key in currentChildMapping) return;
        if (child.props.onExited) {
            child.props.onExited(node);
        }
        if (this.mounted) {
            this.setState(function(state) {
                var children = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, state.children);
                delete children[child.key];
                return {
                    children: children
                };
            });
        }
    };
    _proto.render = function render() {
        var _this$props = this.props, Component = _this$props.component, childFactory = _this$props.childFactory, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this$props, [
            "component",
            "childFactory"
        ]);
        var contextValue = this.state.contextValue;
        var children = values(this.state.children).map(childFactory);
        delete props.appear;
        delete props.enter;
        delete props.exit;
        if (Component === null) {
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Provider, {
                value: contextValue
            }, children);
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Provider, {
            value: contextValue
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Component, props, children));
    };
    return TransitionGroup;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Component);
TransitionGroup.propTypes = ("TURBOPACK compile-time truthy", 1) ? {
    /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].any,
    /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */ appear: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */ enter: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */ exit: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */ childFactory: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func
} : "TURBOPACK unreachable";
TransitionGroup.defaultProps = defaultProps;
const __TURBOPACK__default__export__ = TransitionGroup;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/react-transition-group/esm/TransitionGroup.js [app-ssr] (ecmascript) <export default as TransitionGroup>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransitionGroup",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/react-transition-group/esm/TransitionGroup.js [app-ssr] (ecmascript)");
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/react-transition-group/esm/config.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    disabled: false
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/react-transition-group/esm/utils/PropTypes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "classNamesShape",
    ()=>classNamesShape,
    "timeoutsShape",
    ()=>timeoutsShape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
;
var timeoutsShape = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].shape({
        enter: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
        exit: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
        appear: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number
    }).isRequired
]) : "TURBOPACK unreachable";
var classNamesShape = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].shape({
        enter: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        exit: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        active: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].shape({
        enter: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        enterDone: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        enterActive: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        exit: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        exitDone: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        exitActive: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string
    })
]) : "TURBOPACK unreachable";
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/react-transition-group/esm/utils/reflow.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "forceReflow",
    ()=>forceReflow
]);
var forceReflow = function forceReflow(node) {
    return node.scrollTop;
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/react-transition-group/esm/Transition.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ENTERED",
    ()=>ENTERED,
    "ENTERING",
    ()=>ENTERING,
    "EXITED",
    ()=>EXITED,
    "EXITING",
    ()=>EXITING,
    "UNMOUNTED",
    ()=>UNMOUNTED,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/react-transition-group/esm/config.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$PropTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/react-transition-group/esm/utils/PropTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/react-transition-group/esm/TransitionGroupContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$reflow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/react-transition-group/esm/utils/reflow.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */ var Transition = /*#__PURE__*/ function(_React$Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(Transition, _React$Component);
    function Transition(props, context) {
        var _this;
        _this = _React$Component.call(this, props, context) || this;
        var parentGroup = context; // In the context of a TransitionGroup all enters are really appears
        var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
        var initialStatus;
        _this.appearStatus = null;
        if (props.in) {
            if (appear) {
                initialStatus = EXITED;
                _this.appearStatus = ENTERING;
            } else {
                initialStatus = ENTERED;
            }
        } else {
            if (props.unmountOnExit || props.mountOnEnter) {
                initialStatus = UNMOUNTED;
            } else {
                initialStatus = EXITED;
            }
        }
        _this.state = {
            status: initialStatus
        };
        _this.nextCallback = null;
        return _this;
    }
    Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
        var nextIn = _ref.in;
        if (nextIn && prevState.status === UNMOUNTED) {
            return {
                status: EXITED
            };
        }
        return null;
    } // getSnapshotBeforeUpdate(prevProps) {
    ;
    var _proto = Transition.prototype;
    _proto.componentDidMount = function componentDidMount() {
        this.updateStatus(true, this.appearStatus);
    };
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        var nextStatus = null;
        if (prevProps !== this.props) {
            var status = this.state.status;
            if (this.props.in) {
                if (status !== ENTERING && status !== ENTERED) {
                    nextStatus = ENTERING;
                }
            } else {
                if (status === ENTERING || status === ENTERED) {
                    nextStatus = EXITING;
                }
            }
        }
        this.updateStatus(false, nextStatus);
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
        this.cancelNextCallback();
    };
    _proto.getTimeouts = function getTimeouts() {
        var timeout = this.props.timeout;
        var exit, enter, appear;
        exit = enter = appear = timeout;
        if (timeout != null && typeof timeout !== 'number') {
            exit = timeout.exit;
            enter = timeout.enter; // TODO: remove fallback for next major
            appear = timeout.appear !== undefined ? timeout.appear : enter;
        }
        return {
            exit: exit,
            enter: enter,
            appear: appear
        };
    };
    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
        if (mounting === void 0) {
            mounting = false;
        }
        if (nextStatus !== null) {
            // nextStatus will always be ENTERING or EXITING.
            this.cancelNextCallback();
            if (nextStatus === ENTERING) {
                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var node = this.props.nodeRef ? this.props.nodeRef.current : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
                    // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
                    // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.
                    if (node) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$reflow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forceReflow"])(node);
                }
                this.performEnter(mounting);
            } else {
                this.performExit();
            }
        } else if (this.props.unmountOnExit && this.state.status === EXITED) {
            this.setState({
                status: UNMOUNTED
            });
        }
    };
    _proto.performEnter = function performEnter(mounting) {
        var _this2 = this;
        var enter = this.props.enter;
        var appearing = this.context ? this.context.isMounting : mounting;
        var _ref2 = this.props.nodeRef ? [
            appearing
        ] : [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].findDOMNode(this),
            appearing
        ], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
        var timeouts = this.getTimeouts();
        var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
        // if we are mounting and running this it means appear _must_ be set
        if (!mounting && !enter || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disabled) {
            this.safeSetState({
                status: ENTERED
            }, function() {
                _this2.props.onEntered(maybeNode);
            });
            return;
        }
        this.props.onEnter(maybeNode, maybeAppearing);
        this.safeSetState({
            status: ENTERING
        }, function() {
            _this2.props.onEntering(maybeNode, maybeAppearing);
            _this2.onTransitionEnd(enterTimeout, function() {
                _this2.safeSetState({
                    status: ENTERED
                }, function() {
                    _this2.props.onEntered(maybeNode, maybeAppearing);
                });
            });
        });
    };
    _proto.performExit = function performExit() {
        var _this3 = this;
        var exit = this.props.exit;
        var timeouts = this.getTimeouts();
        var maybeNode = this.props.nodeRef ? undefined : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].findDOMNode(this); // no exit animation skip right to EXITED
        if (!exit || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disabled) {
            this.safeSetState({
                status: EXITED
            }, function() {
                _this3.props.onExited(maybeNode);
            });
            return;
        }
        this.props.onExit(maybeNode);
        this.safeSetState({
            status: EXITING
        }, function() {
            _this3.props.onExiting(maybeNode);
            _this3.onTransitionEnd(timeouts.exit, function() {
                _this3.safeSetState({
                    status: EXITED
                }, function() {
                    _this3.props.onExited(maybeNode);
                });
            });
        });
    };
    _proto.cancelNextCallback = function cancelNextCallback() {
        if (this.nextCallback !== null) {
            this.nextCallback.cancel();
            this.nextCallback = null;
        }
    };
    _proto.safeSetState = function safeSetState(nextState, callback) {
        // This shouldn't be necessary, but there are weird race conditions with
        // setState callbacks and unmounting in testing, so always make sure that
        // we can cancel any pending setState callbacks after we unmount.
        callback = this.setNextCallback(callback);
        this.setState(nextState, callback);
    };
    _proto.setNextCallback = function setNextCallback(callback) {
        var _this4 = this;
        var active = true;
        this.nextCallback = function(event) {
            if (active) {
                active = false;
                _this4.nextCallback = null;
                callback(event);
            }
        };
        this.nextCallback.cancel = function() {
            active = false;
        };
        return this.nextCallback;
    };
    _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
        this.setNextCallback(handler);
        var node = this.props.nodeRef ? this.props.nodeRef.current : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].findDOMNode(this);
        var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
        if (!node || doesNotHaveTimeoutOrListener) {
            setTimeout(this.nextCallback, 0);
            return;
        }
        if (this.props.addEndListener) {
            var _ref3 = this.props.nodeRef ? [
                this.nextCallback
            ] : [
                node,
                this.nextCallback
            ], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
            this.props.addEndListener(maybeNode, maybeNextCallback);
        }
        if (timeout != null) {
            setTimeout(this.nextCallback, timeout);
        }
    };
    _proto.render = function render() {
        var status = this.state.status;
        if (status === UNMOUNTED) {
            return null;
        }
        var _this$props = this.props, children = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this$props, [
            "children",
            "in",
            "mountOnEnter",
            "unmountOnExit",
            "appear",
            "enter",
            "exit",
            "timeout",
            "addEndListener",
            "onEnter",
            "onEntering",
            "onEntered",
            "onExit",
            "onExiting",
            "onExited",
            "nodeRef"
        ]);
        return(/*#__PURE__*/ // allows for nested Transitions
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Provider, {
            value: null
        }, typeof children === 'function' ? children(status, childProps) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Children.only(children), childProps)));
    };
    return Transition;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Component);
Transition.contextType = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
Transition.propTypes = ("TURBOPACK compile-time truthy", 1) ? {
    /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */ nodeRef: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].shape({
        current: typeof Element === 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].any : function(propValue, key, componentName, location, propFullName, secret) {
            var value = propValue[key];
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
        }
    }),
    /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func.isRequired,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].element.isRequired
    ]).isRequired,
    /**
   * Show the component; triggers the enter or exit states
   */ in: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */ mountOnEnter: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */ unmountOnExit: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */ appear: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Enable or disable enter transitions.
   */ enter: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Enable or disable exit transitions.
   */ exit: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */ timeout: function timeout(props) {
        var pt = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$PropTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeoutsShape"];
        if (!props.addEndListener) pt = pt.isRequired;
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        return pt.apply(void 0, [
            props
        ].concat(args));
    },
    /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */ addEndListener: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */ onEnter: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */ onEntering: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */ onEntered: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */ onExit: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */ onExiting: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */ onExited: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func
} : "TURBOPACK unreachable"; // Name the function so it is clearer in the documentation
function noop() {}
Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop,
    onEntering: noop,
    onEntered: noop,
    onExit: noop,
    onExiting: noop,
    onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
const __TURBOPACK__default__export__ = Transition;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/react-transition-group/esm/Transition.js [app-ssr] (ecmascript) <export default as Transition>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Transition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/react-transition-group/esm/Transition.js [app-ssr] (ecmascript)");
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/delayed-stream/lib/delayed_stream.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Stream;
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
module.exports = DelayedStream;
function DelayedStream() {
    this.source = null;
    this.dataSize = 0;
    this.maxDataSize = 1024 * 1024;
    this.pauseStream = true;
    this._maxDataSizeExceeded = false;
    this._released = false;
    this._bufferedEvents = [];
}
util.inherits(DelayedStream, Stream);
DelayedStream.create = function(source, options) {
    var delayedStream = new this();
    options = options || {};
    for(var option in options){
        delayedStream[option] = options[option];
    }
    delayedStream.source = source;
    var realEmit = source.emit;
    source.emit = function() {
        delayedStream._handleEmit(arguments);
        return realEmit.apply(source, arguments);
    };
    source.on('error', function() {});
    if (delayedStream.pauseStream) {
        source.pause();
    }
    return delayedStream;
};
Object.defineProperty(DelayedStream.prototype, 'readable', {
    configurable: true,
    enumerable: true,
    get: function() {
        return this.source.readable;
    }
});
DelayedStream.prototype.setEncoding = function() {
    return this.source.setEncoding.apply(this.source, arguments);
};
DelayedStream.prototype.resume = function() {
    if (!this._released) {
        this.release();
    }
    this.source.resume();
};
DelayedStream.prototype.pause = function() {
    this.source.pause();
};
DelayedStream.prototype.release = function() {
    this._released = true;
    this._bufferedEvents.forEach((function(args) {
        this.emit.apply(this, args);
    }).bind(this));
    this._bufferedEvents = [];
};
DelayedStream.prototype.pipe = function() {
    var r = Stream.prototype.pipe.apply(this, arguments);
    this.resume();
    return r;
};
DelayedStream.prototype._handleEmit = function(args) {
    if (this._released) {
        this.emit.apply(this, args);
        return;
    }
    if (args[0] === 'data') {
        this.dataSize += args[1].length;
        this._checkIfMaxDataSizeExceeded();
    }
    this._bufferedEvents.push(args);
};
DelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {
    if (this._maxDataSizeExceeded) {
        return;
    }
    if (this.dataSize <= this.maxDataSize) {
        return;
    }
    this._maxDataSizeExceeded = true;
    var message = 'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
    this.emit('error', new Error(message));
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/combined-stream/lib/combined_stream.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Stream;
var DelayedStream = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/delayed-stream/lib/delayed_stream.js [app-ssr] (ecmascript)");
module.exports = CombinedStream;
function CombinedStream() {
    this.writable = false;
    this.readable = true;
    this.dataSize = 0;
    this.maxDataSize = 2 * 1024 * 1024;
    this.pauseStreams = true;
    this._released = false;
    this._streams = [];
    this._currentStream = null;
    this._insideLoop = false;
    this._pendingNext = false;
}
util.inherits(CombinedStream, Stream);
CombinedStream.create = function(options) {
    var combinedStream = new this();
    options = options || {};
    for(var option in options){
        combinedStream[option] = options[option];
    }
    return combinedStream;
};
CombinedStream.isStreamLike = function(stream) {
    return typeof stream !== 'function' && typeof stream !== 'string' && typeof stream !== 'boolean' && typeof stream !== 'number' && !Buffer.isBuffer(stream);
};
CombinedStream.prototype.append = function(stream) {
    var isStreamLike = CombinedStream.isStreamLike(stream);
    if (isStreamLike) {
        if (!(stream instanceof DelayedStream)) {
            var newStream = DelayedStream.create(stream, {
                maxDataSize: Infinity,
                pauseStream: this.pauseStreams
            });
            stream.on('data', this._checkDataSize.bind(this));
            stream = newStream;
        }
        this._handleErrors(stream);
        if (this.pauseStreams) {
            stream.pause();
        }
    }
    this._streams.push(stream);
    return this;
};
CombinedStream.prototype.pipe = function(dest, options) {
    Stream.prototype.pipe.call(this, dest, options);
    this.resume();
    return dest;
};
CombinedStream.prototype._getNext = function() {
    this._currentStream = null;
    if (this._insideLoop) {
        this._pendingNext = true;
        return; // defer call
    }
    this._insideLoop = true;
    try {
        do {
            this._pendingNext = false;
            this._realGetNext();
        }while (this._pendingNext)
    } finally{
        this._insideLoop = false;
    }
};
CombinedStream.prototype._realGetNext = function() {
    var stream = this._streams.shift();
    if (typeof stream == 'undefined') {
        this.end();
        return;
    }
    if (typeof stream !== 'function') {
        this._pipeNext(stream);
        return;
    }
    var getStream = stream;
    getStream((function(stream) {
        var isStreamLike = CombinedStream.isStreamLike(stream);
        if (isStreamLike) {
            stream.on('data', this._checkDataSize.bind(this));
            this._handleErrors(stream);
        }
        this._pipeNext(stream);
    }).bind(this));
};
CombinedStream.prototype._pipeNext = function(stream) {
    this._currentStream = stream;
    var isStreamLike = CombinedStream.isStreamLike(stream);
    if (isStreamLike) {
        stream.on('end', this._getNext.bind(this));
        stream.pipe(this, {
            end: false
        });
        return;
    }
    var value = stream;
    this.write(value);
    this._getNext();
};
CombinedStream.prototype._handleErrors = function(stream) {
    var self = this;
    stream.on('error', function(err) {
        self._emitError(err);
    });
};
CombinedStream.prototype.write = function(data) {
    this.emit('data', data);
};
CombinedStream.prototype.pause = function() {
    if (!this.pauseStreams) {
        return;
    }
    if (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == 'function') this._currentStream.pause();
    this.emit('pause');
};
CombinedStream.prototype.resume = function() {
    if (!this._released) {
        this._released = true;
        this.writable = true;
        this._getNext();
    }
    if (this.pauseStreams && this._currentStream && typeof this._currentStream.resume == 'function') this._currentStream.resume();
    this.emit('resume');
};
CombinedStream.prototype.end = function() {
    this._reset();
    this.emit('end');
};
CombinedStream.prototype.destroy = function() {
    this._reset();
    this.emit('close');
};
CombinedStream.prototype._reset = function() {
    this.writable = false;
    this._streams = [];
    this._currentStream = null;
};
CombinedStream.prototype._checkDataSize = function() {
    this._updateDataSize();
    if (this.dataSize <= this.maxDataSize) {
        return;
    }
    var message = 'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
    this._emitError(new Error(message));
};
CombinedStream.prototype._updateDataSize = function() {
    this.dataSize = 0;
    var self = this;
    this._streams.forEach(function(stream) {
        if (!stream.dataSize) {
            return;
        }
        self.dataSize += stream.dataSize;
    });
    if (this._currentStream && this._currentStream.dataSize) {
        this.dataSize += this._currentStream.dataSize;
    }
};
CombinedStream.prototype._emitError = function(err) {
    this._reset();
    this.emit('error', err);
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/mime-types/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ /**
 * Module dependencies.
 * @private
 */ var db = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/mime-db/index.js [app-ssr] (ecmascript)");
var extname = __turbopack_context__.r("[externals]/path [external] (path, cjs)").extname;
/**
 * Module variables.
 * @private
 */ var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;
var TEXT_TYPE_REGEXP = /^text\//i;
/**
 * Module exports.
 * @public
 */ exports.charset = charset;
exports.charsets = {
    lookup: charset
};
exports.contentType = contentType;
exports.extension = extension;
exports.extensions = Object.create(null);
exports.lookup = lookup;
exports.types = Object.create(null);
// Populate the extensions/types maps
populateMaps(exports.extensions, exports.types);
/**
 * Get the default charset for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */ function charset(type) {
    if (!type || typeof type !== 'string') {
        return false;
    }
    // TODO: use media-typer
    var match = EXTRACT_TYPE_REGEXP.exec(type);
    var mime = match && db[match[1].toLowerCase()];
    if (mime && mime.charset) {
        return mime.charset;
    }
    // default text/* to utf-8
    if (match && TEXT_TYPE_REGEXP.test(match[1])) {
        return 'UTF-8';
    }
    return false;
}
/**
 * Create a full Content-Type header given a MIME type or extension.
 *
 * @param {string} str
 * @return {boolean|string}
 */ function contentType(str) {
    // TODO: should this even be in this module?
    if (!str || typeof str !== 'string') {
        return false;
    }
    var mime = str.indexOf('/') === -1 ? exports.lookup(str) : str;
    if (!mime) {
        return false;
    }
    // TODO: use content-type or other module
    if (mime.indexOf('charset') === -1) {
        var charset = exports.charset(mime);
        if (charset) mime += '; charset=' + charset.toLowerCase();
    }
    return mime;
}
/**
 * Get the default extension for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */ function extension(type) {
    if (!type || typeof type !== 'string') {
        return false;
    }
    // TODO: use media-typer
    var match = EXTRACT_TYPE_REGEXP.exec(type);
    // get extensions
    var exts = match && exports.extensions[match[1].toLowerCase()];
    if (!exts || !exts.length) {
        return false;
    }
    return exts[0];
}
/**
 * Lookup the MIME type for a file path/extension.
 *
 * @param {string} path
 * @return {boolean|string}
 */ function lookup(path) {
    if (!path || typeof path !== 'string') {
        return false;
    }
    // get the extension ("ext" or ".ext" or full path)
    var extension = extname('x.' + path).toLowerCase().substr(1);
    if (!extension) {
        return false;
    }
    return exports.types[extension] || false;
}
/**
 * Populate the extensions and types maps.
 * @private
 */ function populateMaps(extensions, types) {
    // source preference (least -> most)
    var preference = [
        'nginx',
        'apache',
        undefined,
        'iana'
    ];
    Object.keys(db).forEach(function forEachMimeType(type) {
        var mime = db[type];
        var exts = mime.extensions;
        if (!exts || !exts.length) {
            return;
        }
        // mime -> extensions
        extensions[type] = exts;
        // extension -> mime
        for(var i = 0; i < exts.length; i++){
            var extension = exts[i];
            if (types[extension]) {
                var from = preference.indexOf(db[types[extension]].source);
                var to = preference.indexOf(mime.source);
                if (types[extension] !== 'application/octet-stream' && (from > to || from === to && types[extension].substr(0, 12) === 'application/')) {
                    continue;
                }
            }
            // set the extension -> mime
            types[extension] = type;
        }
    });
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/asynckit/lib/defer.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = defer;
/**
 * Runs provided function on next iteration of the event loop
 *
 * @param {function} fn - function to run
 */ function defer(fn) {
    var nextTick = typeof setImmediate == 'function' ? setImmediate : typeof process == 'object' && typeof process.nextTick == 'function' ? process.nextTick : null;
    if (nextTick) {
        nextTick(fn);
    } else {
        setTimeout(fn, 0);
    }
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/asynckit/lib/async.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var defer = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/asynckit/lib/defer.js [app-ssr] (ecmascript)");
// API
module.exports = async;
/**
 * Runs provided callback asynchronously
 * even if callback itself is not
 *
 * @param   {function} callback - callback to invoke
 * @returns {function} - augmented callback
 */ function async(callback) {
    var isAsync = false;
    // check if async happened
    defer(function() {
        isAsync = true;
    });
    return function async_callback(err, result) {
        if (isAsync) {
            callback(err, result);
        } else {
            defer(function nextTick_callback() {
                callback(err, result);
            });
        }
    };
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/asynckit/lib/abort.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// API
module.exports = abort;
/**
 * Aborts leftover active jobs
 *
 * @param {object} state - current state object
 */ function abort(state) {
    Object.keys(state.jobs).forEach(clean.bind(state));
    // reset leftover jobs
    state.jobs = {};
}
/**
 * Cleans up leftover job by invoking abort function for the provided job id
 *
 * @this  state
 * @param {string|number} key - job id to abort
 */ function clean(key) {
    if (typeof this.jobs[key] == 'function') {
        this.jobs[key]();
    }
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/asynckit/lib/iterate.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var async = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/asynckit/lib/async.js [app-ssr] (ecmascript)"), abort = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/asynckit/lib/abort.js [app-ssr] (ecmascript)");
// API
module.exports = iterate;
/**
 * Iterates over each job object
 *
 * @param {array|object} list - array or object (named list) to iterate over
 * @param {function} iterator - iterator to run
 * @param {object} state - current job status
 * @param {function} callback - invoked when all elements processed
 */ function iterate(list, iterator, state, callback) {
    // store current index
    var key = state['keyedList'] ? state['keyedList'][state.index] : state.index;
    state.jobs[key] = runJob(iterator, key, list[key], function(error, output) {
        // don't repeat yourself
        // skip secondary callbacks
        if (!(key in state.jobs)) {
            return;
        }
        // clean up jobs
        delete state.jobs[key];
        if (error) {
            // don't process rest of the results
            // stop still active jobs
            // and reset the list
            abort(state);
        } else {
            state.results[key] = output;
        }
        // return salvaged results
        callback(error, state.results);
    });
}
/**
 * Runs iterator over provided job element
 *
 * @param   {function} iterator - iterator to invoke
 * @param   {string|number} key - key/index of the element in the list of jobs
 * @param   {mixed} item - job description
 * @param   {function} callback - invoked after iterator is done with the job
 * @returns {function|mixed} - job abort function or something else
 */ function runJob(iterator, key, item, callback) {
    var aborter;
    // allow shortcut if iterator expects only two arguments
    if (iterator.length == 2) {
        aborter = iterator(item, async(callback));
    } else {
        aborter = iterator(item, key, async(callback));
    }
    return aborter;
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/asynckit/lib/state.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// API
module.exports = state;
/**
 * Creates initial state object
 * for iteration over list
 *
 * @param   {array|object} list - list to iterate over
 * @param   {function|null} sortMethod - function to use for keys sort,
 *                                     or `null` to keep them as is
 * @returns {object} - initial state object
 */ function state(list, sortMethod) {
    var isNamedList = !Array.isArray(list), initState = {
        index: 0,
        keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
        jobs: {},
        results: isNamedList ? {} : [],
        size: isNamedList ? Object.keys(list).length : list.length
    };
    if (sortMethod) {
        // sort array keys based on it's values
        // sort object's keys just on own merit
        initState.keyedList.sort(isNamedList ? sortMethod : function(a, b) {
            return sortMethod(list[a], list[b]);
        });
    }
    return initState;
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/asynckit/lib/terminator.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var abort = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/asynckit/lib/abort.js [app-ssr] (ecmascript)"), async = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/asynckit/lib/async.js [app-ssr] (ecmascript)");
// API
module.exports = terminator;
/**
 * Terminates jobs in the attached state context
 *
 * @this  AsyncKitState#
 * @param {function} callback - final callback to invoke after termination
 */ function terminator(callback) {
    if (!Object.keys(this.jobs).length) {
        return;
    }
    // fast forward iteration index
    this.index = this.size;
    // abort jobs
    abort(this);
    // send back results we have so far
    async(callback)(null, this.results);
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/asynckit/parallel.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var iterate = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/asynckit/lib/iterate.js [app-ssr] (ecmascript)"), initState = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/asynckit/lib/state.js [app-ssr] (ecmascript)"), terminator = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/asynckit/lib/terminator.js [app-ssr] (ecmascript)");
// Public API
module.exports = parallel;
/**
 * Runs iterator over provided array elements in parallel
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */ function parallel(list, iterator, callback) {
    var state = initState(list);
    while(state.index < (state['keyedList'] || list).length){
        iterate(list, iterator, state, function(error, result) {
            if (error) {
                callback(error, result);
                return;
            }
            // looks like it's the last one
            if (Object.keys(state.jobs).length === 0) {
                callback(null, state.results);
                return;
            }
        });
        state.index++;
    }
    return terminator.bind(state, callback);
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/asynckit/serialOrdered.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var iterate = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/asynckit/lib/iterate.js [app-ssr] (ecmascript)"), initState = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/asynckit/lib/state.js [app-ssr] (ecmascript)"), terminator = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/asynckit/lib/terminator.js [app-ssr] (ecmascript)");
// Public API
module.exports = serialOrdered;
// sorting helpers
module.exports.ascending = ascending;
module.exports.descending = descending;
/**
 * Runs iterator over provided sorted array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} sortMethod - custom sort function
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */ function serialOrdered(list, iterator, sortMethod, callback) {
    var state = initState(list, sortMethod);
    iterate(list, iterator, state, function iteratorHandler(error, result) {
        if (error) {
            callback(error, result);
            return;
        }
        state.index++;
        // are we there yet?
        if (state.index < (state['keyedList'] || list).length) {
            iterate(list, iterator, state, iteratorHandler);
            return;
        }
        // done here
        callback(null, state.results);
    });
    return terminator.bind(state, callback);
}
/*
 * -- Sort methods
 */ /**
 * sort helper to sort array elements in ascending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */ function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}
/**
 * sort helper to sort array elements in descending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */ function descending(a, b) {
    return -1 * ascending(a, b);
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/asynckit/serial.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var serialOrdered = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/asynckit/serialOrdered.js [app-ssr] (ecmascript)");
// Public API
module.exports = serial;
/**
 * Runs iterator over provided array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */ function serial(list, iterator, callback) {
    return serialOrdered(list, iterator, null, callback);
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/asynckit/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    parallel: __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/asynckit/parallel.js [app-ssr] (ecmascript)"),
    serial: __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/asynckit/serial.js [app-ssr] (ecmascript)"),
    serialOrdered: __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/asynckit/serialOrdered.js [app-ssr] (ecmascript)")
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/es-object-atoms/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ module.exports = Object;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ module.exports = Error;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/eval.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./eval')} */ module.exports = EvalError;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/range.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./range')} */ module.exports = RangeError;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/ref.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./ref')} */ module.exports = ReferenceError;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/syntax.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./syntax')} */ module.exports = SyntaxError;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/type.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./type')} */ module.exports = TypeError;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/uri.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./uri')} */ module.exports = URIError;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/abs.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./abs')} */ module.exports = Math.abs;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/floor.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./floor')} */ module.exports = Math.floor;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/max.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./max')} */ module.exports = Math.max;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/min.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./min')} */ module.exports = Math.min;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/pow.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./pow')} */ module.exports = Math.pow;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/round.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./round')} */ module.exports = Math.round;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/isNaN.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./isNaN')} */ module.exports = Number.isNaN || function isNaN(a) {
    return a !== a;
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/sign.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $isNaN = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/isNaN.js [app-ssr] (ecmascript)");
/** @type {import('./sign')} */ module.exports = function sign(number) {
    if ($isNaN(number) || number === 0) {
        return number;
    }
    return number < 0 ? -1 : +1;
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/gopd/gOPD.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./gOPD')} */ module.exports = Object.getOwnPropertyDescriptor;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/gopd/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ var $gOPD = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/gopd/gOPD.js [app-ssr] (ecmascript)");
if ($gOPD) {
    try {
        $gOPD([], 'length');
    } catch (e) {
        // IE 8 has a broken gOPD
        $gOPD = null;
    }
}
module.exports = $gOPD;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/es-define-property/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ var $defineProperty = Object.defineProperty || false;
if ($defineProperty) {
    try {
        $defineProperty({}, 'a', {
            value: 1
        });
    } catch (e) {
        // IE 8 has a broken defineProperty
        $defineProperty = false;
    }
}
module.exports = $defineProperty;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/has-symbols/shams.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./shams')} */ /* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
        return false;
    }
    if (typeof Symbol.iterator === 'symbol') {
        return true;
    }
    /** @type {{ [k in symbol]?: unknown }} */ var obj = {};
    var sym = Symbol('test');
    var symObj = Object(sym);
    if (typeof sym === 'string') {
        return false;
    }
    if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
        return false;
    }
    if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
        return false;
    }
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(var _ in obj){
        return false;
    } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
        return false;
    }
    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
        return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === 'function') {
        // eslint-disable-next-line no-extra-parens
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
        }
    }
    return true;
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/has-symbols/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/has-symbols/shams.js [app-ssr] (ecmascript)");
/** @type {import('.')} */ module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== 'function') {
        return false;
    }
    if (typeof Symbol !== 'function') {
        return false;
    }
    if (typeof origSymbol('foo') !== 'symbol') {
        return false;
    }
    if (typeof Symbol('bar') !== 'symbol') {
        return false;
    }
    return hasSymbolSham();
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/get-proto/Reflect.getPrototypeOf.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./Reflect.getPrototypeOf')} */ module.exports = typeof Reflect !== 'undefined' && Reflect.getPrototypeOf || null;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/get-proto/Object.getPrototypeOf.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $Object = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-object-atoms/index.js [app-ssr] (ecmascript)");
/** @type {import('./Object.getPrototypeOf')} */ module.exports = $Object.getPrototypeOf || null;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/get-proto/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var reflectGetProto = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/get-proto/Reflect.getPrototypeOf.js [app-ssr] (ecmascript)");
var originalGetProto = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/get-proto/Object.getPrototypeOf.js [app-ssr] (ecmascript)");
var getDunderProto = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/dunder-proto/get.js [app-ssr] (ecmascript)");
/** @type {import('.')} */ module.exports = reflectGetProto ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return reflectGetProto(O);
} : originalGetProto ? function getProto(O) {
    if (!O || typeof O !== 'object' && typeof O !== 'function') {
        throw new TypeError('getProto: not an object');
    }
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return originalGetProto(O);
} : getDunderProto ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return getDunderProto(O);
} : null;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/function-bind/implementation.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = '[object Function]';
var concatty = function concatty(a, b) {
    var arr = [];
    for(var i = 0; i < a.length; i += 1){
        arr[i] = a[i];
    }
    for(var j = 0; j < b.length; j += 1){
        arr[j + a.length] = b[j];
    }
    return arr;
};
var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for(var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1){
        arr[j] = arrLike[i];
    }
    return arr;
};
var joiny = function(arr, joiner) {
    var str = '';
    for(var i = 0; i < arr.length; i += 1){
        str += arr[i];
        if (i + 1 < arr.length) {
            str += joiner;
        }
    }
    return str;
};
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, concatty(args, arguments));
            if (Object(result) === result) {
                return result;
            }
            return this;
        }
        return target.apply(that, concatty(args, arguments));
    };
    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++){
        boundArgs[i] = '$' + i;
    }
    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/function-bind/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var implementation = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/function-bind/implementation.js [app-ssr] (ecmascript)");
module.exports = Function.prototype.bind || implementation;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/call-bind-apply-helpers/functionCall.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./functionCall')} */ module.exports = Function.prototype.call;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/call-bind-apply-helpers/functionApply.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./functionApply')} */ module.exports = Function.prototype.apply;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/call-bind-apply-helpers/reflectApply.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./reflectApply')} */ module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/call-bind-apply-helpers/actualApply.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/function-bind/index.js [app-ssr] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/call-bind-apply-helpers/functionApply.js [app-ssr] (ecmascript)");
var $call = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/call-bind-apply-helpers/functionCall.js [app-ssr] (ecmascript)");
var $reflectApply = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/call-bind-apply-helpers/reflectApply.js [app-ssr] (ecmascript)");
/** @type {import('./actualApply')} */ module.exports = $reflectApply || bind.call($call, $apply);
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/call-bind-apply-helpers/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/function-bind/index.js [app-ssr] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/type.js [app-ssr] (ecmascript)");
var $call = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/call-bind-apply-helpers/functionCall.js [app-ssr] (ecmascript)");
var $actualApply = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/call-bind-apply-helpers/actualApply.js [app-ssr] (ecmascript)");
/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */ module.exports = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== 'function') {
        throw new $TypeError('a function is required');
    }
    return $actualApply(bind, $call, args);
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/dunder-proto/get.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var callBind = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/call-bind-apply-helpers/index.js [app-ssr] (ecmascript)");
var gOPD = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/gopd/index.js [app-ssr] (ecmascript)");
var hasProtoAccessor;
try {
    // eslint-disable-next-line no-extra-parens, no-proto
    hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ [].__proto__ === Array.prototype;
} catch (e) {
    if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
        throw e;
    }
}
// eslint-disable-next-line no-extra-parens
var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, '__proto__');
var $Object = Object;
var $getPrototypeOf = $Object.getPrototypeOf;
/** @type {import('./get')} */ module.exports = desc && typeof desc.get === 'function' ? callBind([
    desc.get
]) : typeof $getPrototypeOf === 'function' ? /** @type {import('./get')} */ function getDunder(value) {
    // eslint-disable-next-line eqeqeq
    return $getPrototypeOf(value == null ? value : $Object(value));
} : false;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/hasown/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/function-bind/index.js [app-ssr] (ecmascript)");
/** @type {import('.')} */ module.exports = bind.call(call, $hasOwn);
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/get-intrinsic/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var undefined1;
var $Object = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-object-atoms/index.js [app-ssr] (ecmascript)");
var $Error = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/index.js [app-ssr] (ecmascript)");
var $EvalError = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/eval.js [app-ssr] (ecmascript)");
var $RangeError = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/range.js [app-ssr] (ecmascript)");
var $ReferenceError = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/ref.js [app-ssr] (ecmascript)");
var $SyntaxError = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/syntax.js [app-ssr] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/type.js [app-ssr] (ecmascript)");
var $URIError = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/uri.js [app-ssr] (ecmascript)");
var abs = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/abs.js [app-ssr] (ecmascript)");
var floor = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/floor.js [app-ssr] (ecmascript)");
var max = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/max.js [app-ssr] (ecmascript)");
var min = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/min.js [app-ssr] (ecmascript)");
var pow = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/pow.js [app-ssr] (ecmascript)");
var round = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/round.js [app-ssr] (ecmascript)");
var sign = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/sign.js [app-ssr] (ecmascript)");
var $Function = Function;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {}
};
var $gOPD = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/gopd/index.js [app-ssr] (ecmascript)");
var $defineProperty = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-define-property/index.js [app-ssr] (ecmascript)");
var throwTypeError = function() {
    throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $gOPD(arguments, 'callee').get;
        } catch (gOPDthrows) {
            return throwTypeError;
        }
    }
}() : throwTypeError;
var hasSymbols = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/has-symbols/index.js [app-ssr] (ecmascript)")();
var getProto = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/get-proto/index.js [app-ssr] (ecmascript)");
var $ObjectGPO = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/get-proto/Object.getPrototypeOf.js [app-ssr] (ecmascript)");
var $ReflectGPO = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/get-proto/Reflect.getPrototypeOf.js [app-ssr] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/call-bind-apply-helpers/functionApply.js [app-ssr] (ecmascript)");
var $call = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/call-bind-apply-helpers/functionCall.js [app-ssr] (ecmascript)");
var needsEval = {};
var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);
var INTRINSICS = {
    __proto__: null,
    '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
    '%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
    '%AsyncFromSyncIteratorPrototype%': undefined,
    '%AsyncFunction%': needsEval,
    '%AsyncGenerator%': needsEval,
    '%AsyncGeneratorFunction%': needsEval,
    '%AsyncIteratorPrototype%': needsEval,
    '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
    '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
    '%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
    '%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': $Error,
    '%eval%': eval,
    '%EvalError%': $EvalError,
    '%Float16Array%': typeof Float16Array === 'undefined' ? undefined : Float16Array,
    '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
    '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
    '%Function%': $Function,
    '%GeneratorFunction%': needsEval,
    '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
    '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
    '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
    '%JSON%': typeof JSON === 'object' ? JSON : undefined,
    '%Map%': typeof Map === 'undefined' ? undefined : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': $Object,
    '%Object.getOwnPropertyDescriptor%': $gOPD,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
    '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
    '%RangeError%': $RangeError,
    '%ReferenceError%': $ReferenceError,
    '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set === 'undefined' ? undefined : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
    '%Symbol%': hasSymbols ? Symbol : undefined,
    '%SyntaxError%': $SyntaxError,
    '%ThrowTypeError%': ThrowTypeError,
    '%TypedArray%': TypedArray,
    '%TypeError%': $TypeError,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
    '%URIError%': $URIError,
    '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
    '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
    '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
    '%Function.prototype.call%': $call,
    '%Function.prototype.apply%': $apply,
    '%Object.defineProperty%': $defineProperty,
    '%Object.getPrototypeOf%': $ObjectGPO,
    '%Math.abs%': abs,
    '%Math.floor%': floor,
    '%Math.max%': max,
    '%Math.min%': min,
    '%Math.pow%': pow,
    '%Math.round%': round,
    '%Math.sign%': sign,
    '%Reflect.getPrototypeOf%': $ReflectGPO
};
if (getProto) {
    try {
        null.error; // eslint-disable-line no-unused-expressions
    } catch (e) {
        // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
        var errorProto = getProto(getProto(e));
        INTRINSICS['%Error.prototype%'] = errorProto;
    }
}
var doEval = function doEval(name) {
    var value;
    if (name === '%AsyncFunction%') {
        value = getEvalledConstructor('async function () {}');
    } else if (name === '%GeneratorFunction%') {
        value = getEvalledConstructor('function* () {}');
    } else if (name === '%AsyncGeneratorFunction%') {
        value = getEvalledConstructor('async function* () {}');
    } else if (name === '%AsyncGenerator%') {
        var fn = doEval('%AsyncGeneratorFunction%');
        if (fn) {
            value = fn.prototype;
        }
    } else if (name === '%AsyncIteratorPrototype%') {
        var gen = doEval('%AsyncGenerator%');
        if (gen && getProto) {
            value = getProto(gen.prototype);
        }
    }
    INTRINSICS[name] = value;
    return value;
};
var LEGACY_ALIASES = {
    __proto__: null,
    '%ArrayBufferPrototype%': [
        'ArrayBuffer',
        'prototype'
    ],
    '%ArrayPrototype%': [
        'Array',
        'prototype'
    ],
    '%ArrayProto_entries%': [
        'Array',
        'prototype',
        'entries'
    ],
    '%ArrayProto_forEach%': [
        'Array',
        'prototype',
        'forEach'
    ],
    '%ArrayProto_keys%': [
        'Array',
        'prototype',
        'keys'
    ],
    '%ArrayProto_values%': [
        'Array',
        'prototype',
        'values'
    ],
    '%AsyncFunctionPrototype%': [
        'AsyncFunction',
        'prototype'
    ],
    '%AsyncGenerator%': [
        'AsyncGeneratorFunction',
        'prototype'
    ],
    '%AsyncGeneratorPrototype%': [
        'AsyncGeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%BooleanPrototype%': [
        'Boolean',
        'prototype'
    ],
    '%DataViewPrototype%': [
        'DataView',
        'prototype'
    ],
    '%DatePrototype%': [
        'Date',
        'prototype'
    ],
    '%ErrorPrototype%': [
        'Error',
        'prototype'
    ],
    '%EvalErrorPrototype%': [
        'EvalError',
        'prototype'
    ],
    '%Float32ArrayPrototype%': [
        'Float32Array',
        'prototype'
    ],
    '%Float64ArrayPrototype%': [
        'Float64Array',
        'prototype'
    ],
    '%FunctionPrototype%': [
        'Function',
        'prototype'
    ],
    '%Generator%': [
        'GeneratorFunction',
        'prototype'
    ],
    '%GeneratorPrototype%': [
        'GeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%Int8ArrayPrototype%': [
        'Int8Array',
        'prototype'
    ],
    '%Int16ArrayPrototype%': [
        'Int16Array',
        'prototype'
    ],
    '%Int32ArrayPrototype%': [
        'Int32Array',
        'prototype'
    ],
    '%JSONParse%': [
        'JSON',
        'parse'
    ],
    '%JSONStringify%': [
        'JSON',
        'stringify'
    ],
    '%MapPrototype%': [
        'Map',
        'prototype'
    ],
    '%NumberPrototype%': [
        'Number',
        'prototype'
    ],
    '%ObjectPrototype%': [
        'Object',
        'prototype'
    ],
    '%ObjProto_toString%': [
        'Object',
        'prototype',
        'toString'
    ],
    '%ObjProto_valueOf%': [
        'Object',
        'prototype',
        'valueOf'
    ],
    '%PromisePrototype%': [
        'Promise',
        'prototype'
    ],
    '%PromiseProto_then%': [
        'Promise',
        'prototype',
        'then'
    ],
    '%Promise_all%': [
        'Promise',
        'all'
    ],
    '%Promise_reject%': [
        'Promise',
        'reject'
    ],
    '%Promise_resolve%': [
        'Promise',
        'resolve'
    ],
    '%RangeErrorPrototype%': [
        'RangeError',
        'prototype'
    ],
    '%ReferenceErrorPrototype%': [
        'ReferenceError',
        'prototype'
    ],
    '%RegExpPrototype%': [
        'RegExp',
        'prototype'
    ],
    '%SetPrototype%': [
        'Set',
        'prototype'
    ],
    '%SharedArrayBufferPrototype%': [
        'SharedArrayBuffer',
        'prototype'
    ],
    '%StringPrototype%': [
        'String',
        'prototype'
    ],
    '%SymbolPrototype%': [
        'Symbol',
        'prototype'
    ],
    '%SyntaxErrorPrototype%': [
        'SyntaxError',
        'prototype'
    ],
    '%TypedArrayPrototype%': [
        'TypedArray',
        'prototype'
    ],
    '%TypeErrorPrototype%': [
        'TypeError',
        'prototype'
    ],
    '%Uint8ArrayPrototype%': [
        'Uint8Array',
        'prototype'
    ],
    '%Uint8ClampedArrayPrototype%': [
        'Uint8ClampedArray',
        'prototype'
    ],
    '%Uint16ArrayPrototype%': [
        'Uint16Array',
        'prototype'
    ],
    '%Uint32ArrayPrototype%': [
        'Uint32Array',
        'prototype'
    ],
    '%URIErrorPrototype%': [
        'URIError',
        'prototype'
    ],
    '%WeakMapPrototype%': [
        'WeakMap',
        'prototype'
    ],
    '%WeakSetPrototype%': [
        'WeakSet',
        'prototype'
    ]
};
var bind = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/function-bind/index.js [app-ssr] (ecmascript)");
var hasOwn = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/hasown/index.js [app-ssr] (ecmascript)");
var $concat = bind.call($call, Array.prototype.concat);
var $spliceApply = bind.call($apply, Array.prototype.splice);
var $replace = bind.call($call, String.prototype.replace);
var $strSlice = bind.call($call, String.prototype.slice);
var $exec = bind.call($call, RegExp.prototype.exec);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === '%' && last !== '%') {
        throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
    } else if (last === '%' && first !== '%') {
        throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
    }
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
    });
    return result;
};
/* end adaptation */ var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = '%' + alias[0] + '%';
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
            value = doEval(intrinsicName);
        }
        if (typeof value === 'undefined' && !allowMissing) {
            throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
        }
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) {
        throw new $TypeError('intrinsic name must be a non-empty string');
    }
    if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
        throw new $TypeError('"allowMissing" argument must be a boolean');
    }
    if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
    }
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
    var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) {
            throw new $SyntaxError('property names with quotes must have matching quotes');
        }
        if (part === 'constructor' || !isOwn) {
            skipFurtherCaching = true;
        }
        intrinsicBaseName += '.' + part;
        intrinsicRealName = '%' + intrinsicBaseName + '%';
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
            value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) {
                    throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
                }
                return void undefined;
            }
            if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
                    value = desc.get;
                } else {
                    value = value[part];
                }
            } else {
                isOwn = hasOwn(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) {
                INTRINSICS[intrinsicRealName] = value;
            }
        }
    }
    return value;
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/has-tostringtag/shams.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var hasSymbols = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/has-symbols/shams.js [app-ssr] (ecmascript)");
/** @type {import('.')} */ module.exports = function hasToStringTagShams() {
    return hasSymbols() && !!Symbol.toStringTag;
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/es-set-tostringtag/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/get-intrinsic/index.js [app-ssr] (ecmascript)");
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var hasToStringTag = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/has-tostringtag/shams.js [app-ssr] (ecmascript)")();
var hasOwn = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/hasown/index.js [app-ssr] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/type.js [app-ssr] (ecmascript)");
var toStringTag = hasToStringTag ? Symbol.toStringTag : null;
/** @type {import('.')} */ module.exports = function setToStringTag(object, value) {
    var overrideIfSet = arguments.length > 2 && !!arguments[2] && arguments[2].force;
    var nonConfigurable = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
    if (typeof overrideIfSet !== 'undefined' && typeof overrideIfSet !== 'boolean' || typeof nonConfigurable !== 'undefined' && typeof nonConfigurable !== 'boolean') {
        throw new $TypeError('if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans');
    }
    if (toStringTag && (overrideIfSet || !hasOwn(object, toStringTag))) {
        if ($defineProperty) {
            $defineProperty(object, toStringTag, {
                configurable: !nonConfigurable,
                enumerable: false,
                value: value,
                writable: false
            });
        } else {
            object[toStringTag] = value; // eslint-disable-line no-param-reassign
        }
    }
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/form-data/lib/populate.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// populates missing values
module.exports = function(dst, src) {
    Object.keys(src).forEach(function(prop) {
        dst[prop] = dst[prop] || src[prop]; // eslint-disable-line no-param-reassign
    });
    return dst;
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/form-data/lib/form_data.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var CombinedStream = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/combined-stream/lib/combined_stream.js [app-ssr] (ecmascript)");
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
var http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
var https = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
var parseUrl = __turbopack_context__.r("[externals]/url [external] (url, cjs)").parse;
var fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Stream;
var crypto = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
var mime = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/mime-types/index.js [app-ssr] (ecmascript)");
var asynckit = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/asynckit/index.js [app-ssr] (ecmascript)");
var setToStringTag = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-set-tostringtag/index.js [app-ssr] (ecmascript)");
var hasOwn = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/hasown/index.js [app-ssr] (ecmascript)");
var populate = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/form-data/lib/populate.js [app-ssr] (ecmascript)");
/**
 * Create readable "multipart/form-data" streams.
 * Can be used to submit forms
 * and file uploads to other web applications.
 *
 * @constructor
 * @param {object} options - Properties to be added/overriden for FormData and CombinedStream
 */ function FormData(options) {
    if (!(this instanceof FormData)) {
        return new FormData(options);
    }
    this._overheadLength = 0;
    this._valueLength = 0;
    this._valuesToMeasure = [];
    CombinedStream.call(this);
    options = options || {}; // eslint-disable-line no-param-reassign
    for(var option in options){
        this[option] = options[option];
    }
}
// make it a Stream
util.inherits(FormData, CombinedStream);
FormData.LINE_BREAK = '\r\n';
FormData.DEFAULT_CONTENT_TYPE = 'application/octet-stream';
FormData.prototype.append = function(field, value, options) {
    options = options || {}; // eslint-disable-line no-param-reassign
    // allow filename as single option
    if (typeof options === 'string') {
        options = {
            filename: options
        }; // eslint-disable-line no-param-reassign
    }
    var append = CombinedStream.prototype.append.bind(this);
    // all that streamy business can't handle numbers
    if (typeof value === 'number' || value == null) {
        value = String(value); // eslint-disable-line no-param-reassign
    }
    // https://github.com/felixge/node-form-data/issues/38
    if (Array.isArray(value)) {
        /*
     * Please convert your array into string
     * the way web server expects it
     */ this._error(new Error('Arrays are not supported.'));
        return;
    }
    var header = this._multiPartHeader(field, value, options);
    var footer = this._multiPartFooter();
    append(header);
    append(value);
    append(footer);
    // pass along options.knownLength
    this._trackLength(header, value, options);
};
FormData.prototype._trackLength = function(header, value, options) {
    var valueLength = 0;
    /*
   * used w/ getLengthSync(), when length is known.
   * e.g. for streaming directly from a remote server,
   * w/ a known file a size, and not wanting to wait for
   * incoming file to finish to get its size.
   */ if (options.knownLength != null) {
        valueLength += Number(options.knownLength);
    } else if (Buffer.isBuffer(value)) {
        valueLength = value.length;
    } else if (typeof value === 'string') {
        valueLength = Buffer.byteLength(value);
    }
    this._valueLength += valueLength;
    // @check why add CRLF? does this account for custom/multiple CRLFs?
    this._overheadLength += Buffer.byteLength(header) + FormData.LINE_BREAK.length;
    // empty or either doesn't have path or not an http response or not a stream
    if (!value || !value.path && !(value.readable && hasOwn(value, 'httpVersion')) && !(value instanceof Stream)) {
        return;
    }
    // no need to bother with the length
    if (!options.knownLength) {
        this._valuesToMeasure.push(value);
    }
};
FormData.prototype._lengthRetriever = function(value, callback) {
    if (hasOwn(value, 'fd')) {
        // take read range into a account
        // `end` = Infinity –> read file till the end
        //
        // TODO: Looks like there is bug in Node fs.createReadStream
        // it doesn't respect `end` options without `start` options
        // Fix it when node fixes it.
        // https://github.com/joyent/node/issues/7819
        if (value.end != undefined && value.end != Infinity && value.start != undefined) {
            // when end specified
            // no need to calculate range
            // inclusive, starts with 0
            callback(null, value.end + 1 - (value.start ? value.start : 0)); // eslint-disable-line callback-return
        // not that fast snoopy
        } else {
            // still need to fetch file size from fs
            fs.stat(value.path, function(err, stat) {
                if (err) {
                    callback(err);
                    return;
                }
                // update final size based on the range options
                var fileSize = stat.size - (value.start ? value.start : 0);
                callback(null, fileSize);
            });
        }
    // or http response
    } else if (hasOwn(value, 'httpVersion')) {
        callback(null, Number(value.headers['content-length'])); // eslint-disable-line callback-return
    // or request stream http://github.com/mikeal/request
    } else if (hasOwn(value, 'httpModule')) {
        // wait till response come back
        value.on('response', function(response) {
            value.pause();
            callback(null, Number(response.headers['content-length']));
        });
        value.resume();
    // something else
    } else {
        callback('Unknown stream'); // eslint-disable-line callback-return
    }
};
FormData.prototype._multiPartHeader = function(field, value, options) {
    /*
   * custom header specified (as string)?
   * it becomes responsible for boundary
   * (e.g. to handle extra CRLFs on .NET servers)
   */ if (typeof options.header === 'string') {
        return options.header;
    }
    var contentDisposition = this._getContentDisposition(value, options);
    var contentType = this._getContentType(value, options);
    var contents = '';
    var headers = {
        // add custom disposition as third element or keep it two elements if not
        'Content-Disposition': [
            'form-data',
            'name="' + field + '"'
        ].concat(contentDisposition || []),
        // if no content type. allow it to be empty array
        'Content-Type': [].concat(contentType || [])
    };
    // allow custom headers.
    if (typeof options.header === 'object') {
        populate(headers, options.header);
    }
    var header;
    for(var prop in headers){
        if (hasOwn(headers, prop)) {
            header = headers[prop];
            // skip nullish headers.
            if (header == null) {
                continue; // eslint-disable-line no-restricted-syntax, no-continue
            }
            // convert all headers to arrays.
            if (!Array.isArray(header)) {
                header = [
                    header
                ];
            }
            // add non-empty headers.
            if (header.length) {
                contents += prop + ': ' + header.join('; ') + FormData.LINE_BREAK;
            }
        }
    }
    return '--' + this.getBoundary() + FormData.LINE_BREAK + contents + FormData.LINE_BREAK;
};
FormData.prototype._getContentDisposition = function(value, options) {
    var filename;
    if (typeof options.filepath === 'string') {
        // custom filepath for relative paths
        filename = path.normalize(options.filepath).replace(/\\/g, '/');
    } else if (options.filename || value && (value.name || value.path)) {
        /*
     * custom filename take precedence
     * formidable and the browser add a name property
     * fs- and request- streams have path property
     */ filename = path.basename(options.filename || value && (value.name || value.path));
    } else if (value && value.readable && hasOwn(value, 'httpVersion')) {
        // or try http response
        filename = path.basename(value.client._httpMessage.path || '');
    }
    if (filename) {
        return 'filename="' + filename + '"';
    }
};
FormData.prototype._getContentType = function(value, options) {
    // use custom content-type above all
    var contentType = options.contentType;
    // or try `name` from formidable, browser
    if (!contentType && value && value.name) {
        contentType = mime.lookup(value.name);
    }
    // or try `path` from fs-, request- streams
    if (!contentType && value && value.path) {
        contentType = mime.lookup(value.path);
    }
    // or if it's http-reponse
    if (!contentType && value && value.readable && hasOwn(value, 'httpVersion')) {
        contentType = value.headers['content-type'];
    }
    // or guess it from the filepath or filename
    if (!contentType && (options.filepath || options.filename)) {
        contentType = mime.lookup(options.filepath || options.filename);
    }
    // fallback to the default content type if `value` is not simple value
    if (!contentType && value && typeof value === 'object') {
        contentType = FormData.DEFAULT_CONTENT_TYPE;
    }
    return contentType;
};
FormData.prototype._multiPartFooter = function() {
    return (function(next) {
        var footer = FormData.LINE_BREAK;
        var lastPart = this._streams.length === 0;
        if (lastPart) {
            footer += this._lastBoundary();
        }
        next(footer);
    }).bind(this);
};
FormData.prototype._lastBoundary = function() {
    return '--' + this.getBoundary() + '--' + FormData.LINE_BREAK;
};
FormData.prototype.getHeaders = function(userHeaders) {
    var header;
    var formHeaders = {
        'content-type': 'multipart/form-data; boundary=' + this.getBoundary()
    };
    for(header in userHeaders){
        if (hasOwn(userHeaders, header)) {
            formHeaders[header.toLowerCase()] = userHeaders[header];
        }
    }
    return formHeaders;
};
FormData.prototype.setBoundary = function(boundary) {
    if (typeof boundary !== 'string') {
        throw new TypeError('FormData boundary must be a string');
    }
    this._boundary = boundary;
};
FormData.prototype.getBoundary = function() {
    if (!this._boundary) {
        this._generateBoundary();
    }
    return this._boundary;
};
FormData.prototype.getBuffer = function() {
    var dataBuffer = new Buffer.alloc(0); // eslint-disable-line new-cap
    var boundary = this.getBoundary();
    // Create the form content. Add Line breaks to the end of data.
    for(var i = 0, len = this._streams.length; i < len; i++){
        if (typeof this._streams[i] !== 'function') {
            // Add content to the buffer.
            if (Buffer.isBuffer(this._streams[i])) {
                dataBuffer = Buffer.concat([
                    dataBuffer,
                    this._streams[i]
                ]);
            } else {
                dataBuffer = Buffer.concat([
                    dataBuffer,
                    Buffer.from(this._streams[i])
                ]);
            }
            // Add break after content.
            if (typeof this._streams[i] !== 'string' || this._streams[i].substring(2, boundary.length + 2) !== boundary) {
                dataBuffer = Buffer.concat([
                    dataBuffer,
                    Buffer.from(FormData.LINE_BREAK)
                ]);
            }
        }
    }
    // Add the footer and return the Buffer object.
    return Buffer.concat([
        dataBuffer,
        Buffer.from(this._lastBoundary())
    ]);
};
FormData.prototype._generateBoundary = function() {
    // This generates a 50 character boundary similar to those used by Firefox.
    // They are optimized for boyer-moore parsing.
    this._boundary = '--------------------------' + crypto.randomBytes(12).toString('hex');
};
// Note: getLengthSync DOESN'T calculate streams length
// As workaround one can calculate file size manually and add it as knownLength option
FormData.prototype.getLengthSync = function() {
    var knownLength = this._overheadLength + this._valueLength;
    // Don't get confused, there are 3 "internal" streams for each keyval pair so it basically checks if there is any value added to the form
    if (this._streams.length) {
        knownLength += this._lastBoundary().length;
    }
    // https://github.com/form-data/form-data/issues/40
    if (!this.hasKnownLength()) {
        /*
     * Some async length retrievers are present
     * therefore synchronous length calculation is false.
     * Please use getLength(callback) to get proper length
     */ this._error(new Error('Cannot calculate proper length in synchronous way.'));
    }
    return knownLength;
};
// Public API to check if length of added values is known
// https://github.com/form-data/form-data/issues/196
// https://github.com/form-data/form-data/issues/262
FormData.prototype.hasKnownLength = function() {
    var hasKnownLength = true;
    if (this._valuesToMeasure.length) {
        hasKnownLength = false;
    }
    return hasKnownLength;
};
FormData.prototype.getLength = function(cb) {
    var knownLength = this._overheadLength + this._valueLength;
    if (this._streams.length) {
        knownLength += this._lastBoundary().length;
    }
    if (!this._valuesToMeasure.length) {
        process.nextTick(cb.bind(this, null, knownLength));
        return;
    }
    asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function(err, values) {
        if (err) {
            cb(err);
            return;
        }
        values.forEach(function(length) {
            knownLength += length;
        });
        cb(null, knownLength);
    });
};
FormData.prototype.submit = function(params, cb) {
    var request;
    var options;
    var defaults = {
        method: 'post'
    };
    // parse provided url if it's string or treat it as options object
    if (typeof params === 'string') {
        params = parseUrl(params); // eslint-disable-line no-param-reassign
        /* eslint sort-keys: 0 */ options = populate({
            port: params.port,
            path: params.pathname,
            host: params.hostname,
            protocol: params.protocol
        }, defaults);
    } else {
        options = populate(params, defaults);
        // if no port provided use default one
        if (!options.port) {
            options.port = options.protocol === 'https:' ? 443 : 80;
        }
    }
    // put that good code in getHeaders to some use
    options.headers = this.getHeaders(params.headers);
    // https if specified, fallback to http in any other case
    if (options.protocol === 'https:') {
        request = https.request(options);
    } else {
        request = http.request(options);
    }
    // get content length and fire away
    this.getLength((function(err, length) {
        if (err && err !== 'Unknown stream') {
            this._error(err);
            return;
        }
        // add content length
        if (length) {
            request.setHeader('Content-Length', length);
        }
        this.pipe(request);
        if (cb) {
            var onResponse;
            var callback = function(error, responce) {
                request.removeListener('error', callback);
                request.removeListener('response', onResponse);
                return cb.call(this, error, responce);
            };
            onResponse = callback.bind(this, null);
            request.on('error', callback);
            request.on('response', onResponse);
        }
    }).bind(this));
    return request;
};
FormData.prototype._error = function(err) {
    if (!this.error) {
        this.error = err;
        this.pause();
        this.emit('error', err);
    }
};
FormData.prototype.toString = function() {
    return '[object FormData]';
};
setToStringTag(FormData.prototype, 'FormData');
// Public API
module.exports = FormData;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/proxy-from-env/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var parseUrl = __turbopack_context__.r("[externals]/url [external] (url, cjs)").parse;
var DEFAULT_PORTS = {
    ftp: 21,
    gopher: 70,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
};
var stringEndsWith = String.prototype.endsWith || function(s) {
    return s.length <= this.length && this.indexOf(s, this.length - s.length) !== -1;
};
/**
 * @param {string|object} url - The URL, or the result from url.parse.
 * @return {string} The URL of the proxy that should handle the request to the
 *  given URL. If no proxy is set, this will be an empty string.
 */ function getProxyForUrl(url) {
    var parsedUrl = typeof url === 'string' ? parseUrl(url) : url || {};
    var proto = parsedUrl.protocol;
    var hostname = parsedUrl.host;
    var port = parsedUrl.port;
    if (typeof hostname !== 'string' || !hostname || typeof proto !== 'string') {
        return ''; // Don't proxy URLs without a valid scheme or host.
    }
    proto = proto.split(':', 1)[0];
    // Stripping ports in this way instead of using parsedUrl.hostname to make
    // sure that the brackets around IPv6 addresses are kept.
    hostname = hostname.replace(/:\d*$/, '');
    port = parseInt(port) || DEFAULT_PORTS[proto] || 0;
    if (!shouldProxy(hostname, port)) {
        return ''; // Don't proxy URLs that match NO_PROXY.
    }
    var proxy = getEnv('npm_config_' + proto + '_proxy') || getEnv(proto + '_proxy') || getEnv('npm_config_proxy') || getEnv('all_proxy');
    if (proxy && proxy.indexOf('://') === -1) {
        // Missing scheme in proxy, default to the requested URL's scheme.
        proxy = proto + '://' + proxy;
    }
    return proxy;
}
/**
 * Determines whether a given URL should be proxied.
 *
 * @param {string} hostname - The host name of the URL.
 * @param {number} port - The effective port of the URL.
 * @returns {boolean} Whether the given URL should be proxied.
 * @private
 */ function shouldProxy(hostname, port) {
    var NO_PROXY = (getEnv('npm_config_no_proxy') || getEnv('no_proxy')).toLowerCase();
    if (!NO_PROXY) {
        return true; // Always proxy if NO_PROXY is not set.
    }
    if (NO_PROXY === '*') {
        return false; // Never proxy if wildcard is set.
    }
    return NO_PROXY.split(/[,\s]/).every(function(proxy) {
        if (!proxy) {
            return true; // Skip zero-length hosts.
        }
        var parsedProxy = proxy.match(/^(.+):(\d+)$/);
        var parsedProxyHostname = parsedProxy ? parsedProxy[1] : proxy;
        var parsedProxyPort = parsedProxy ? parseInt(parsedProxy[2]) : 0;
        if (parsedProxyPort && parsedProxyPort !== port) {
            return true; // Skip if ports don't match.
        }
        if (!/^[.*]/.test(parsedProxyHostname)) {
            // No wildcards, so stop proxying if there is an exact match.
            return hostname !== parsedProxyHostname;
        }
        if (parsedProxyHostname.charAt(0) === '*') {
            // Remove leading wildcard.
            parsedProxyHostname = parsedProxyHostname.slice(1);
        }
        // Stop proxying if the hostname ends with the no_proxy host.
        return !stringEndsWith.call(hostname, parsedProxyHostname);
    });
}
/**
 * Get the value for an environment variable.
 *
 * @param {string} key - The name of the environment variable.
 * @return {string} The value of the environment variable.
 * @private
 */ function getEnv(key) {
    return process.env[key.toLowerCase()] || process.env[key.toUpperCase()] || '';
}
exports.getProxyForUrl = getProxyForUrl;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/ms/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) {
        return parse(val);
    } else if (type === 'number' && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
    }
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/debug/src/common.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/ms/index.js [app-ssr] (ecmascript)");
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {};
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) {
                return;
            }
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== 'string') {
                // Anything else let's inspect with %O
                args.unshift('%O');
            }
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === '%%') {
                    return '%';
                }
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === 'function') {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, 'enabled', {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) {
                    return enableOverride;
                }
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === 'function') {
            createDebug.init(debug);
        }
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === 'string' ? namespaces : '').trim().replace(/\s+/g, ',').split(',').filter(Boolean);
        for (const ns of split){
            if (ns[0] === '-') {
                createDebug.skips.push(ns.slice(1));
            } else {
                createDebug.names.push(ns);
            }
        }
    }
    /**
	 * Checks if the given string matches a namespace template, honoring
	 * asterisks as wildcards.
	 *
	 * @param {String} search
	 * @param {String} template
	 * @return {Boolean}
	 */ function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while(searchIndex < search.length){
            if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === '*')) {
                // Match character or proceed with wildcard
                if (template[templateIndex] === '*') {
                    starIndex = templateIndex;
                    matchIndex = searchIndex;
                    templateIndex++; // Skip the '*'
                } else {
                    searchIndex++;
                    templateIndex++;
                }
            } else if (starIndex !== -1) {
                // Backtrack to the last '*' and try to match more characters
                templateIndex = starIndex + 1;
                matchIndex++;
                searchIndex = matchIndex;
            } else {
                return false; // No match
            }
        }
        // Handle trailing '*' in template
        while(templateIndex < template.length && template[templateIndex] === '*'){
            templateIndex++;
        }
        return templateIndex === template.length;
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names,
            ...createDebug.skips.map((namespace)=>'-' + namespace)
        ].join(',');
        createDebug.enable('');
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        for (const skip of createDebug.skips){
            if (matchesTemplate(name, skip)) {
                return false;
            }
        }
        for (const ns of createDebug.names){
            if (matchesTemplate(name, ns)) {
                return true;
            }
        }
        return false;
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) {
            return val.stack || val.message;
        }
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/debug/src/node.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Module dependencies.
 */ const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
/**
 * This is the Node.js implementation of `debug()`.
 */ exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(()=>{}, 'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
/**
 * Colors.
 */ exports.colors = [
    6,
    2,
    3,
    4,
    5,
    1
];
try {
    // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
    // eslint-disable-next-line import/no-extraneous-dependencies
    const supportsColor = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/supports-color/index.js [app-ssr] (ecmascript)");
    if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
            20,
            21,
            26,
            27,
            32,
            33,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            56,
            57,
            62,
            63,
            68,
            69,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            92,
            93,
            98,
            99,
            112,
            113,
            128,
            129,
            134,
            135,
            148,
            149,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            178,
            179,
            184,
            185,
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            209,
            214,
            215,
            220,
            221
        ];
    }
} catch (error) {
// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}
/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */ exports.inspectOpts = Object.keys(process.env).filter((key)=>{
    return /^debug_/i.test(key);
}).reduce((obj, key)=>{
    // Camel-case
    const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k)=>{
        return k.toUpperCase();
    });
    // Coerce string value into JS value
    let val = process.env[key];
    if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
    } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
    } else if (val === 'null') {
        val = null;
    } else {
        val = Number(val);
    }
    obj[prop] = val;
    return obj;
}, {});
/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */ function useColors() {
    return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
}
/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    const { namespace: name, useColors } = this;
    if (useColors) {
        const c = this.color;
        const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
        const prefix = `  ${colorCode};1m${name} \u001B[0m`;
        args[0] = prefix + args[0].split('\n').join('\n' + prefix);
        args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
    } else {
        args[0] = getDate() + name + ' ' + args[0];
    }
}
function getDate() {
    if (exports.inspectOpts.hideDate) {
        return '';
    }
    return new Date().toISOString() + ' ';
}
/**
 * Invokes `util.formatWithOptions()` with the specified arguments and writes to stderr.
 */ function log(...args) {
    return process.stderr.write(util.formatWithOptions(exports.inspectOpts, ...args) + '\n');
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    if (namespaces) {
        process.env.DEBUG = namespaces;
    } else {
        // If you set a process.env field to null or undefined, it gets cast to the
        // string 'null' or 'undefined'. Just delete instead.
        delete process.env.DEBUG;
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    return process.env.DEBUG;
}
/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */ function init(debug) {
    debug.inspectOpts = {};
    const keys = Object.keys(exports.inspectOpts);
    for(let i = 0; i < keys.length; i++){
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    }
}
module.exports = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/debug/src/common.js [app-ssr] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %o to `util.inspect()`, all on a single line.
 */ formatters.o = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts).split('\n').map((str)=>str.trim()).join(' ');
};
/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */ formatters.O = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts);
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/debug/src/browser.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33'
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
    }
    let m;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    // eslint-disable-next-line no-return-assign
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== 'undefined' && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) {
        return;
    }
    const c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === '%%') {
            return;
        }
        index++;
        if (match === '%c') {
            // We only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
        }
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) {
            exports.storage.setItem('debug', namespaces);
        } else {
            exports.storage.removeItem('debug');
        }
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem('debug') || exports.storage.getItem('DEBUG');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== 'undefined' && 'env' in process) {
        r = process.env.DEBUG;
    }
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/debug/src/common.js [app-ssr] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
    }
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/debug/src/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */ if (typeof process === 'undefined' || process.type === 'renderer' || ("TURBOPACK compile-time value", false) === true || process.__nwjs) {
    module.exports = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/debug/src/browser.js [app-ssr] (ecmascript)");
} else {
    module.exports = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/debug/src/node.js [app-ssr] (ecmascript)");
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/has-flag/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = (flag, argv = process.argv)=>{
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf('--');
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/supports-color/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const hasFlag = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/has-flag/index.js [app-ssr] (ecmascript)");
const { env } = process;
let forceColor;
if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false') || hasFlag('color=never')) {
    forceColor = 0;
} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
    forceColor = 1;
}
if ('FORCE_COLOR' in env) {
    if (env.FORCE_COLOR === 'true') {
        forceColor = 1;
    } else if (env.FORCE_COLOR === 'false') {
        forceColor = 0;
    } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
    }
}
function translateLevel(level) {
    if (level === 0) {
        return false;
    }
    return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}
function supportsColor(haveStream, streamIsTTY) {
    if (forceColor === 0) {
        return 0;
    }
    if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
        return 3;
    }
    if (hasFlag('color=256')) {
        return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) {
        return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === 'dumb') {
        return min;
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if ('CI' in env) {
        if ([
            'TRAVIS',
            'CIRCLECI',
            'APPVEYOR',
            'GITLAB_CI',
            'GITHUB_ACTIONS',
            'BUILDKITE'
        ].some((sign)=>sign in env) || env.CI_NAME === 'codeship') {
            return 1;
        }
        return min;
    }
    if ('TEAMCITY_VERSION' in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env.COLORTERM === 'truecolor') {
        return 3;
    }
    if ('TERM_PROGRAM' in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
        switch(env.TERM_PROGRAM){
            case 'iTerm.app':
                return version >= 3 ? 3 : 2;
            case 'Apple_Terminal':
                return 2;
        }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
    }
    if ('COLORTERM' in env) {
        return 1;
    }
    return min;
}
function getSupportLevel(stream) {
    const level = supportsColor(stream, stream && stream.isTTY);
    return translateLevel(level);
}
module.exports = {
    supportsColor: getSupportLevel,
    stdout: translateLevel(supportsColor(true, tty.isatty(1))),
    stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/follow-redirects/debug.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var debug;
module.exports = function() {
    if (!debug) {
        try {
            /* eslint global-require: off */ debug = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/debug/src/index.js [app-ssr] (ecmascript)")("follow-redirects");
        } catch (error) {}
        if (typeof debug !== "function") {
            debug = function() {};
        }
    }
    debug.apply(null, arguments);
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/follow-redirects/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var url = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
var URL = url.URL;
var http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
var https = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
var Writable = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Writable;
var assert = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)");
var debug = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/follow-redirects/debug.js [app-ssr] (ecmascript)");
// Preventive platform detection
// istanbul ignore next
(function detectUnsupportedEnvironment() {
    var looksLikeNode = typeof process !== "undefined";
    var looksLikeBrowser = ("TURBOPACK compile-time value", "undefined") !== "undefined" && typeof document !== "undefined";
    var looksLikeV8 = isFunction(Error.captureStackTrace);
    if (!looksLikeNode && (looksLikeBrowser || !looksLikeV8)) {
        console.warn("The follow-redirects package should be excluded from browser builds.");
    }
})();
// Whether to use the native URL object or the legacy url module
var useNativeURL = false;
try {
    assert(new URL(""));
} catch (error) {
    useNativeURL = error.code === "ERR_INVALID_URL";
}
// URL fields to preserve in copy operations
var preservedUrlFields = [
    "auth",
    "host",
    "hostname",
    "href",
    "path",
    "pathname",
    "port",
    "protocol",
    "query",
    "search",
    "hash"
];
// Create handlers that pass events from native requests
var events = [
    "abort",
    "aborted",
    "connect",
    "error",
    "socket",
    "timeout"
];
var eventHandlers = Object.create(null);
events.forEach(function(event) {
    eventHandlers[event] = function(arg1, arg2, arg3) {
        this._redirectable.emit(event, arg1, arg2, arg3);
    };
});
// Error types with codes
var InvalidUrlError = createErrorType("ERR_INVALID_URL", "Invalid URL", TypeError);
var RedirectionError = createErrorType("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed");
var TooManyRedirectsError = createErrorType("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded", RedirectionError);
var MaxBodyLengthExceededError = createErrorType("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit");
var WriteAfterEndError = createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
// istanbul ignore next
var destroy = Writable.prototype.destroy || noop;
// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
    // Initialize the request
    Writable.call(this);
    this._sanitizeOptions(options);
    this._options = options;
    this._ended = false;
    this._ending = false;
    this._redirectCount = 0;
    this._redirects = [];
    this._requestBodyLength = 0;
    this._requestBodyBuffers = [];
    // Attach a callback if passed
    if (responseCallback) {
        this.on("response", responseCallback);
    }
    // React to responses of native requests
    var self = this;
    this._onNativeResponse = function(response) {
        try {
            self._processResponse(response);
        } catch (cause) {
            self.emit("error", cause instanceof RedirectionError ? cause : new RedirectionError({
                cause: cause
            }));
        }
    };
    // Perform the first request
    this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);
RedirectableRequest.prototype.abort = function() {
    destroyRequest(this._currentRequest);
    this._currentRequest.abort();
    this.emit("abort");
};
RedirectableRequest.prototype.destroy = function(error) {
    destroyRequest(this._currentRequest, error);
    destroy.call(this, error);
    return this;
};
// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function(data, encoding, callback) {
    // Writing is not allowed if end has been called
    if (this._ending) {
        throw new WriteAfterEndError();
    }
    // Validate input and shift parameters if necessary
    if (!isString(data) && !isBuffer(data)) {
        throw new TypeError("data should be a string, Buffer or Uint8Array");
    }
    if (isFunction(encoding)) {
        callback = encoding;
        encoding = null;
    }
    // Ignore empty buffers, since writing them doesn't invoke the callback
    // https://github.com/nodejs/node/issues/22066
    if (data.length === 0) {
        if (callback) {
            callback();
        }
        return;
    }
    // Only write when we don't exceed the maximum body length
    if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
        this._requestBodyLength += data.length;
        this._requestBodyBuffers.push({
            data: data,
            encoding: encoding
        });
        this._currentRequest.write(data, encoding, callback);
    } else {
        this.emit("error", new MaxBodyLengthExceededError());
        this.abort();
    }
};
// Ends the current native request
RedirectableRequest.prototype.end = function(data, encoding, callback) {
    // Shift parameters if necessary
    if (isFunction(data)) {
        callback = data;
        data = encoding = null;
    } else if (isFunction(encoding)) {
        callback = encoding;
        encoding = null;
    }
    // Write data if needed and end
    if (!data) {
        this._ended = this._ending = true;
        this._currentRequest.end(null, null, callback);
    } else {
        var self = this;
        var currentRequest = this._currentRequest;
        this.write(data, encoding, function() {
            self._ended = true;
            currentRequest.end(null, null, callback);
        });
        this._ending = true;
    }
};
// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function(name, value) {
    this._options.headers[name] = value;
    this._currentRequest.setHeader(name, value);
};
// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function(name) {
    delete this._options.headers[name];
    this._currentRequest.removeHeader(name);
};
// Global timeout for all underlying requests
RedirectableRequest.prototype.setTimeout = function(msecs, callback) {
    var self = this;
    // Destroys the socket on timeout
    function destroyOnTimeout(socket) {
        socket.setTimeout(msecs);
        socket.removeListener("timeout", socket.destroy);
        socket.addListener("timeout", socket.destroy);
    }
    // Sets up a timer to trigger a timeout event
    function startTimer(socket) {
        if (self._timeout) {
            clearTimeout(self._timeout);
        }
        self._timeout = setTimeout(function() {
            self.emit("timeout");
            clearTimer();
        }, msecs);
        destroyOnTimeout(socket);
    }
    // Stops a timeout from triggering
    function clearTimer() {
        // Clear the timeout
        if (self._timeout) {
            clearTimeout(self._timeout);
            self._timeout = null;
        }
        // Clean up all attached listeners
        self.removeListener("abort", clearTimer);
        self.removeListener("error", clearTimer);
        self.removeListener("response", clearTimer);
        self.removeListener("close", clearTimer);
        if (callback) {
            self.removeListener("timeout", callback);
        }
        if (!self.socket) {
            self._currentRequest.removeListener("socket", startTimer);
        }
    }
    // Attach callback if passed
    if (callback) {
        this.on("timeout", callback);
    }
    // Start the timer if or when the socket is opened
    if (this.socket) {
        startTimer(this.socket);
    } else {
        this._currentRequest.once("socket", startTimer);
    }
    // Clean up on events
    this.on("socket", destroyOnTimeout);
    this.on("abort", clearTimer);
    this.on("error", clearTimer);
    this.on("response", clearTimer);
    this.on("close", clearTimer);
    return this;
};
// Proxy all other public ClientRequest methods
[
    "flushHeaders",
    "getHeader",
    "setNoDelay",
    "setSocketKeepAlive"
].forEach(function(method) {
    RedirectableRequest.prototype[method] = function(a, b) {
        return this._currentRequest[method](a, b);
    };
});
// Proxy all public ClientRequest properties
[
    "aborted",
    "connection",
    "socket"
].forEach(function(property) {
    Object.defineProperty(RedirectableRequest.prototype, property, {
        get: function() {
            return this._currentRequest[property];
        }
    });
});
RedirectableRequest.prototype._sanitizeOptions = function(options) {
    // Ensure headers are always present
    if (!options.headers) {
        options.headers = {};
    }
    // Since http.request treats host as an alias of hostname,
    // but the url module interprets host as hostname plus port,
    // eliminate the host property to avoid confusion.
    if (options.host) {
        // Use hostname if set, because it has precedence
        if (!options.hostname) {
            options.hostname = options.host;
        }
        delete options.host;
    }
    // Complete the URL object when necessary
    if (!options.pathname && options.path) {
        var searchPos = options.path.indexOf("?");
        if (searchPos < 0) {
            options.pathname = options.path;
        } else {
            options.pathname = options.path.substring(0, searchPos);
            options.search = options.path.substring(searchPos);
        }
    }
};
// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function() {
    // Load the native protocol
    var protocol = this._options.protocol;
    var nativeProtocol = this._options.nativeProtocols[protocol];
    if (!nativeProtocol) {
        throw new TypeError("Unsupported protocol " + protocol);
    }
    // If specified, use the agent corresponding to the protocol
    // (HTTP and HTTPS use different types of agents)
    if (this._options.agents) {
        var scheme = protocol.slice(0, -1);
        this._options.agent = this._options.agents[scheme];
    }
    // Create the native request and set up its event handlers
    var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
    request._redirectable = this;
    for (var event of events){
        request.on(event, eventHandlers[event]);
    }
    // RFC7230§5.3.1: When making a request directly to an origin server, […]
    // a client MUST send only the absolute path […] as the request-target.
    this._currentUrl = /^\//.test(this._options.path) ? url.format(this._options) : // When making a request to a proxy, […]
    // a client MUST send the target URI in absolute-form […].
    this._options.path;
    // End a redirected request
    // (The first request must be ended explicitly with RedirectableRequest#end)
    if (this._isRedirect) {
        // Write the request entity and end
        var i = 0;
        var self = this;
        var buffers = this._requestBodyBuffers;
        (function writeNext(error) {
            // Only write if this request has not been redirected yet
            // istanbul ignore else
            if (request === self._currentRequest) {
                // Report any write errors
                // istanbul ignore if
                if (error) {
                    self.emit("error", error);
                } else if (i < buffers.length) {
                    var buffer = buffers[i++];
                    // istanbul ignore else
                    if (!request.finished) {
                        request.write(buffer.data, buffer.encoding, writeNext);
                    }
                } else if (self._ended) {
                    request.end();
                }
            }
        })();
    }
};
// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function(response) {
    // Store the redirected response
    var statusCode = response.statusCode;
    if (this._options.trackRedirects) {
        this._redirects.push({
            url: this._currentUrl,
            headers: response.headers,
            statusCode: statusCode
        });
    }
    // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
    // that further action needs to be taken by the user agent in order to
    // fulfill the request. If a Location header field is provided,
    // the user agent MAY automatically redirect its request to the URI
    // referenced by the Location field value,
    // even if the specific status code is not understood.
    // If the response is not a redirect; return it as-is
    var location = response.headers.location;
    if (!location || this._options.followRedirects === false || statusCode < 300 || statusCode >= 400) {
        response.responseUrl = this._currentUrl;
        response.redirects = this._redirects;
        this.emit("response", response);
        // Clean up
        this._requestBodyBuffers = [];
        return;
    }
    // The response is a redirect, so abort the current request
    destroyRequest(this._currentRequest);
    // Discard the remainder of the response to avoid waiting for data
    response.destroy();
    // RFC7231§6.4: A client SHOULD detect and intervene
    // in cyclical redirections (i.e., "infinite" redirection loops).
    if (++this._redirectCount > this._options.maxRedirects) {
        throw new TooManyRedirectsError();
    }
    // Store the request headers if applicable
    var requestHeaders;
    var beforeRedirect = this._options.beforeRedirect;
    if (beforeRedirect) {
        requestHeaders = Object.assign({
            // The Host header was set by nativeProtocol.request
            Host: response.req.getHeader("host")
        }, this._options.headers);
    }
    // RFC7231§6.4: Automatic redirection needs to done with
    // care for methods not known to be safe, […]
    // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
    // the request method from POST to GET for the subsequent request.
    var method = this._options.method;
    if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" || // RFC7231§6.4.4: The 303 (See Other) status code indicates that
    // the server is redirecting the user agent to a different resource […]
    // A user agent can perform a retrieval request targeting that URI
    // (a GET or HEAD request if using HTTP) […]
    statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
        this._options.method = "GET";
        // Drop a possible entity and headers related to it
        this._requestBodyBuffers = [];
        removeMatchingHeaders(/^content-/i, this._options.headers);
    }
    // Drop the Host header, as the redirect might lead to a different host
    var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);
    // If the redirect is relative, carry over the host of the last request
    var currentUrlParts = parseUrl(this._currentUrl);
    var currentHost = currentHostHeader || currentUrlParts.host;
    var currentUrl = /^\w+:/.test(location) ? this._currentUrl : url.format(Object.assign(currentUrlParts, {
        host: currentHost
    }));
    // Create the redirected request
    var redirectUrl = resolveUrl(location, currentUrl);
    debug("redirecting to", redirectUrl.href);
    this._isRedirect = true;
    spreadUrlObject(redirectUrl, this._options);
    // Drop confidential headers when redirecting to a less secure protocol
    // or to a different domain that is not a superdomain
    if (redirectUrl.protocol !== currentUrlParts.protocol && redirectUrl.protocol !== "https:" || redirectUrl.host !== currentHost && !isSubdomain(redirectUrl.host, currentHost)) {
        removeMatchingHeaders(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers);
    }
    // Evaluate the beforeRedirect callback
    if (isFunction(beforeRedirect)) {
        var responseDetails = {
            headers: response.headers,
            statusCode: statusCode
        };
        var requestDetails = {
            url: currentUrl,
            method: method,
            headers: requestHeaders
        };
        beforeRedirect(this._options, responseDetails, requestDetails);
        this._sanitizeOptions(this._options);
    }
    // Perform the redirected request
    this._performRequest();
};
// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
    // Default settings
    var exports = {
        maxRedirects: 21,
        maxBodyLength: 10 * 1024 * 1024
    };
    // Wrap each protocol
    var nativeProtocols = {};
    Object.keys(protocols).forEach(function(scheme) {
        var protocol = scheme + ":";
        var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
        var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);
        // Executes a request, following redirects
        function request(input, options, callback) {
            // Parse parameters, ensuring that input is an object
            if (isURL(input)) {
                input = spreadUrlObject(input);
            } else if (isString(input)) {
                input = spreadUrlObject(parseUrl(input));
            } else {
                callback = options;
                options = validateUrl(input);
                input = {
                    protocol: protocol
                };
            }
            if (isFunction(options)) {
                callback = options;
                options = null;
            }
            // Set defaults
            options = Object.assign({
                maxRedirects: exports.maxRedirects,
                maxBodyLength: exports.maxBodyLength
            }, input, options);
            options.nativeProtocols = nativeProtocols;
            if (!isString(options.host) && !isString(options.hostname)) {
                options.hostname = "::1";
            }
            assert.equal(options.protocol, protocol, "protocol mismatch");
            debug("options", options);
            return new RedirectableRequest(options, callback);
        }
        // Executes a GET request, following redirects
        function get(input, options, callback) {
            var wrappedRequest = wrappedProtocol.request(input, options, callback);
            wrappedRequest.end();
            return wrappedRequest;
        }
        // Expose the properties on the wrapped protocol
        Object.defineProperties(wrappedProtocol, {
            request: {
                value: request,
                configurable: true,
                enumerable: true,
                writable: true
            },
            get: {
                value: get,
                configurable: true,
                enumerable: true,
                writable: true
            }
        });
    });
    return exports;
}
function noop() {}
function parseUrl(input) {
    var parsed;
    // istanbul ignore else
    if (useNativeURL) {
        parsed = new URL(input);
    } else {
        // Ensure the URL is valid and absolute
        parsed = validateUrl(url.parse(input));
        if (!isString(parsed.protocol)) {
            throw new InvalidUrlError({
                input
            });
        }
    }
    return parsed;
}
function resolveUrl(relative, base) {
    // istanbul ignore next
    return useNativeURL ? new URL(relative, base) : parseUrl(url.resolve(base, relative));
}
function validateUrl(input) {
    if (/^\[/.test(input.hostname) && !/^\[[:0-9a-f]+\]$/i.test(input.hostname)) {
        throw new InvalidUrlError({
            input: input.href || input
        });
    }
    if (/^\[/.test(input.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(input.host)) {
        throw new InvalidUrlError({
            input: input.href || input
        });
    }
    return input;
}
function spreadUrlObject(urlObject, target) {
    var spread = target || {};
    for (var key of preservedUrlFields){
        spread[key] = urlObject[key];
    }
    // Fix IPv6 hostname
    if (spread.hostname.startsWith("[")) {
        spread.hostname = spread.hostname.slice(1, -1);
    }
    // Ensure port is a number
    if (spread.port !== "") {
        spread.port = Number(spread.port);
    }
    // Concatenate path
    spread.path = spread.search ? spread.pathname + spread.search : spread.pathname;
    return spread;
}
function removeMatchingHeaders(regex, headers) {
    var lastValue;
    for(var header in headers){
        if (regex.test(header)) {
            lastValue = headers[header];
            delete headers[header];
        }
    }
    return lastValue === null || typeof lastValue === "undefined" ? undefined : String(lastValue).trim();
}
function createErrorType(code, message, baseClass) {
    // Create constructor
    function CustomError(properties) {
        // istanbul ignore else
        if (isFunction(Error.captureStackTrace)) {
            Error.captureStackTrace(this, this.constructor);
        }
        Object.assign(this, properties || {});
        this.code = code;
        this.message = this.cause ? message + ": " + this.cause.message : message;
    }
    // Attach constructor and set default properties
    CustomError.prototype = new (baseClass || Error)();
    Object.defineProperties(CustomError.prototype, {
        constructor: {
            value: CustomError,
            enumerable: false
        },
        name: {
            value: "Error [" + code + "]",
            enumerable: false
        }
    });
    return CustomError;
}
function destroyRequest(request, error) {
    for (var event of events){
        request.removeListener(event, eventHandlers[event]);
    }
    request.on("error", noop);
    request.destroy(error);
}
function isSubdomain(subdomain, domain) {
    assert(isString(subdomain) && isString(domain));
    var dot = subdomain.length - domain.length - 1;
    return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
}
function isString(value) {
    return typeof value === "string" || value instanceof String;
}
function isFunction(value) {
    return typeof value === "function";
}
function isBuffer(value) {
    return typeof value === "object" && "length" in value;
}
function isURL(value) {
    return URL && value instanceof URL;
}
// Exports
module.exports = wrap({
    http: http,
    https: https
});
module.exports.wrap = wrap;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/fast-copy/dist/fast-copy.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>copy
]);
var toStringFunction = Function.prototype.toString;
var create = Object.create, defineProperty = Object.defineProperty, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, getOwnPropertyNames = Object.getOwnPropertyNames, getOwnPropertySymbols = Object.getOwnPropertySymbols, getPrototypeOf$1 = Object.getPrototypeOf;
var _a = Object.prototype, hasOwnProperty = _a.hasOwnProperty, propertyIsEnumerable = _a.propertyIsEnumerable;
var SYMBOL_PROPERTIES = typeof getOwnPropertySymbols === 'function';
var WEAK_MAP = typeof WeakMap === 'function';
/**
 * @function createCache
 *
 * @description
 * get a new cache object to prevent circular references
 *
 * @returns the new cache object
 */ var createCache = function() {
    if (WEAK_MAP) {
        return function() {
            return new WeakMap();
        };
    }
    var Cache = function() {
        function Cache() {
            this._keys = [];
            this._values = [];
        }
        Cache.prototype.has = function(key) {
            return !!~this._keys.indexOf(key);
        };
        Cache.prototype.get = function(key) {
            return this._values[this._keys.indexOf(key)];
        };
        Cache.prototype.set = function(key, value) {
            this._keys.push(key);
            this._values.push(value);
        };
        return Cache;
    }();
    return function() {
        return new Cache();
    };
}();
/**
 * @function getCleanClone
 *
 * @description
 * get an empty version of the object with the same prototype it has
 *
 * @param object the object to build a clean clone from
 * @param realm the realm the object resides in
 * @returns the empty cloned object
 */ var getCleanClone = function(object, realm) {
    var prototype = object.__proto__ || getPrototypeOf$1(object);
    if (!prototype) {
        return create(null);
    }
    var Constructor = prototype.constructor;
    if (Constructor === realm.Object) {
        return prototype === realm.Object.prototype ? {} : create(prototype);
    }
    if (~toStringFunction.call(Constructor).indexOf('[native code]')) {
        try {
            return new Constructor();
        } catch (_a) {}
    }
    return create(prototype);
};
/**
 * @function getObjectCloneLoose
 *
 * @description
 * get a copy of the object based on loose rules, meaning all enumerable keys
 * and symbols are copied, but property descriptors are not considered
 *
 * @param object the object to clone
 * @param realm the realm the object resides in
 * @param handleCopy the function that handles copying the object
 * @returns the copied object
 */ var getObjectCloneLoose = function(object, realm, handleCopy, cache) {
    var clone = getCleanClone(object, realm);
    // set in the cache immediately to be able to reuse the object recursively
    cache.set(object, clone);
    for(var key in object){
        if (hasOwnProperty.call(object, key)) {
            clone[key] = handleCopy(object[key], cache);
        }
    }
    if (SYMBOL_PROPERTIES) {
        var symbols = getOwnPropertySymbols(object);
        for(var index = 0, length_1 = symbols.length, symbol = void 0; index < length_1; ++index){
            symbol = symbols[index];
            if (propertyIsEnumerable.call(object, symbol)) {
                clone[symbol] = handleCopy(object[symbol], cache);
            }
        }
    }
    return clone;
};
/**
 * @function getObjectCloneStrict
 *
 * @description
 * get a copy of the object based on strict rules, meaning all keys and symbols
 * are copied based on the original property descriptors
 *
 * @param object the object to clone
 * @param realm the realm the object resides in
 * @param handleCopy the function that handles copying the object
 * @returns the copied object
 */ var getObjectCloneStrict = function(object, realm, handleCopy, cache) {
    var clone = getCleanClone(object, realm);
    // set in the cache immediately to be able to reuse the object recursively
    cache.set(object, clone);
    var properties = SYMBOL_PROPERTIES ? getOwnPropertyNames(object).concat(getOwnPropertySymbols(object)) : getOwnPropertyNames(object);
    for(var index = 0, length_2 = properties.length, property = void 0, descriptor = void 0; index < length_2; ++index){
        property = properties[index];
        if (property !== 'callee' && property !== 'caller') {
            descriptor = getOwnPropertyDescriptor(object, property);
            if (descriptor) {
                // Only clone the value if actually a value, not a getter / setter.
                if (!descriptor.get && !descriptor.set) {
                    descriptor.value = handleCopy(object[property], cache);
                }
                try {
                    defineProperty(clone, property, descriptor);
                } catch (error) {
                    // Tee above can fail on node in edge cases, so fall back to the loose assignment.
                    clone[property] = descriptor.value;
                }
            } else {
                // In extra edge cases where the property descriptor cannot be retrived, fall back to
                // the loose assignment.
                clone[property] = handleCopy(object[property], cache);
            }
        }
    }
    return clone;
};
/**
 * @function getRegExpFlags
 *
 * @description
 * get the flags to apply to the copied regexp
 *
 * @param regExp the regexp to get the flags of
 * @returns the flags for the regexp
 */ var getRegExpFlags = function(regExp) {
    var flags = '';
    if (regExp.global) {
        flags += 'g';
    }
    if (regExp.ignoreCase) {
        flags += 'i';
    }
    if (regExp.multiline) {
        flags += 'm';
    }
    if (regExp.unicode) {
        flags += 'u';
    }
    if (regExp.sticky) {
        flags += 'y';
    }
    return flags;
};
// utils
var isArray = Array.isArray;
var getPrototypeOf = Object.getPrototypeOf;
var GLOBAL_THIS = function() {
    if (typeof globalThis !== 'undefined') {
        return globalThis;
    }
    if (typeof self !== 'undefined') {
        return self;
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if ("TURBOPACK compile-time truthy", 1) {
        return /*TURBOPACK member replacement*/ __turbopack_context__.g;
    }
    //TURBOPACK unreachable
    ;
}();
/**
 * @function copy
 *
 * @description
 * copy an value deeply as much as possible
 *
 * If `strict` is applied, then all properties (including non-enumerable ones)
 * are copied with their original property descriptors on both objects and arrays.
 *
 * The value is compared to the global constructors in the `realm` provided,
 * and the native constructor is always used to ensure that extensions of native
 * objects (allows in ES2015+) are maintained.
 *
 * @param value the value to copy
 * @param [options] the options for copying with
 * @param [options.isStrict] should the copy be strict
 * @param [options.realm] the realm (this) value the value is copied from
 * @returns the copied value
 */ function copy(value, options) {
    // manually coalesced instead of default parameters for performance
    var isStrict = !!(options && options.isStrict);
    var realm = options && options.realm || GLOBAL_THIS;
    var getObjectClone = isStrict ? getObjectCloneStrict : getObjectCloneLoose;
    /**
     * @function handleCopy
     *
     * @description
     * copy the value recursively based on its type
     *
     * @param value the value to copy
     * @returns the copied value
     */ var handleCopy = function(value, cache) {
        if (!value || typeof value !== 'object') {
            return value;
        }
        if (cache.has(value)) {
            return cache.get(value);
        }
        var prototype = value.__proto__ || getPrototypeOf(value);
        var Constructor = prototype && prototype.constructor;
        // plain objects
        if (!Constructor || Constructor === realm.Object) {
            return getObjectClone(value, realm, handleCopy, cache);
        }
        var clone;
        // arrays
        if (isArray(value)) {
            // if strict, include non-standard properties
            if (isStrict) {
                return getObjectCloneStrict(value, realm, handleCopy, cache);
            }
            clone = new Constructor();
            cache.set(value, clone);
            for(var index = 0, length_1 = value.length; index < length_1; ++index){
                clone[index] = handleCopy(value[index], cache);
            }
            return clone;
        }
        // dates
        if (value instanceof realm.Date) {
            return new Constructor(value.getTime());
        }
        // regexps
        if (value instanceof realm.RegExp) {
            clone = new Constructor(value.source, value.flags || getRegExpFlags(value));
            clone.lastIndex = value.lastIndex;
            return clone;
        }
        // maps
        if (realm.Map && value instanceof realm.Map) {
            clone = new Constructor();
            cache.set(value, clone);
            value.forEach(function(value, key) {
                clone.set(key, handleCopy(value, cache));
            });
            return clone;
        }
        // sets
        if (realm.Set && value instanceof realm.Set) {
            clone = new Constructor();
            cache.set(value, clone);
            value.forEach(function(value) {
                clone.add(handleCopy(value, cache));
            });
            return clone;
        }
        // blobs
        if (realm.Blob && value instanceof realm.Blob) {
            return value.slice(0, value.size, value.type);
        }
        // buffers (node-only)
        if (realm.Buffer && realm.Buffer.isBuffer(value)) {
            clone = realm.Buffer.allocUnsafe ? realm.Buffer.allocUnsafe(value.length) : new Constructor(value.length);
            cache.set(value, clone);
            value.copy(clone);
            return clone;
        }
        // arraybuffers / dataviews
        if (realm.ArrayBuffer) {
            // dataviews
            if (realm.ArrayBuffer.isView(value)) {
                clone = new Constructor(value.buffer.slice(0));
                cache.set(value, clone);
                return clone;
            }
            // arraybuffers
            if (value instanceof realm.ArrayBuffer) {
                clone = value.slice(0);
                cache.set(value, clone);
                return clone;
            }
        }
        // if the value cannot / should not be cloned, don't
        if (// promise-like
        typeof value.then === 'function' || // errors
        value instanceof Error || realm.WeakMap && value instanceof realm.WeakMap || realm.WeakSet && value instanceof realm.WeakSet) {
            return value;
        }
        // assume anything left is a custom constructor
        return getObjectClone(value, realm, handleCopy, cache);
    };
    return handleCopy(value, createCache());
}
// Adding reference to allow usage in CommonJS libraries compiled using TSC, which
// expects there to be a default property on the exported value. See
// [#37](https://github.com/planttheidea/fast-copy/issues/37) for details.
copy.default = copy;
/**
 * @function strictCopy
 *
 * @description
 * copy the value with `strict` option pre-applied
 *
 * @param value the value to copy
 * @param [options] the options for copying with
 * @param [options.realm] the realm (this) value the value is copied from
 * @returns the copied value
 */ copy.strict = function strictCopy(value, options) {
    return copy(value, {
        isStrict: true,
        realm: options ? options.realm : void 0
    });
};
;
 //# sourceMappingURL=fast-copy.esm.js.map
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful-resolve-response/node_modules/fast-copy/dist/esm/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "copyStrict",
    ()=>copyStrict,
    "createCopier",
    ()=>createCopier,
    "createStrictCopier",
    ()=>createStrictCopier,
    "default",
    ()=>index
]);
var toStringFunction = Function.prototype.toString;
var create = Object.create;
var toStringObject = Object.prototype.toString;
/**
 * @classdesc Fallback cache for when WeakMap is not natively supported
 */ var LegacyCache = function() {
    function LegacyCache() {
        this._keys = [];
        this._values = [];
    }
    LegacyCache.prototype.has = function(key) {
        return !!~this._keys.indexOf(key);
    };
    LegacyCache.prototype.get = function(key) {
        return this._values[this._keys.indexOf(key)];
    };
    LegacyCache.prototype.set = function(key, value) {
        this._keys.push(key);
        this._values.push(value);
    };
    return LegacyCache;
}();
function createCacheLegacy() {
    return new LegacyCache();
}
function createCacheModern() {
    return new WeakMap();
}
/**
 * Get a new cache object to prevent circular references.
 */ var createCache = typeof WeakMap !== 'undefined' ? createCacheModern : createCacheLegacy;
/**
 * Get an empty version of the object with the same prototype it has.
 */ function getCleanClone(prototype) {
    if (!prototype) {
        return create(null);
    }
    var Constructor = prototype.constructor;
    if (Constructor === Object) {
        return prototype === Object.prototype ? {} : create(prototype);
    }
    if (Constructor && ~toStringFunction.call(Constructor).indexOf('[native code]')) {
        try {
            return new Constructor();
        } catch (_a) {}
    }
    return create(prototype);
}
function getRegExpFlagsLegacy(regExp) {
    var flags = '';
    if (regExp.global) {
        flags += 'g';
    }
    if (regExp.ignoreCase) {
        flags += 'i';
    }
    if (regExp.multiline) {
        flags += 'm';
    }
    if (regExp.unicode) {
        flags += 'u';
    }
    if (regExp.sticky) {
        flags += 'y';
    }
    return flags;
}
function getRegExpFlagsModern(regExp) {
    return regExp.flags;
}
/**
 * Get the flags to apply to the copied regexp.
 */ var getRegExpFlags = /test/g.flags === 'g' ? getRegExpFlagsModern : getRegExpFlagsLegacy;
function getTagLegacy(value) {
    var type = toStringObject.call(value);
    return type.substring(8, type.length - 1);
}
function getTagModern(value) {
    return value[Symbol.toStringTag] || getTagLegacy(value);
}
/**
 * Get the tag of the value passed, so that the correct copier can be used.
 */ var getTag = typeof Symbol !== 'undefined' ? getTagModern : getTagLegacy;
var defineProperty = Object.defineProperty, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, getOwnPropertyNames = Object.getOwnPropertyNames, getOwnPropertySymbols = Object.getOwnPropertySymbols;
var _a = Object.prototype, hasOwnProperty = _a.hasOwnProperty, propertyIsEnumerable = _a.propertyIsEnumerable;
var SUPPORTS_SYMBOL = typeof getOwnPropertySymbols === 'function';
function getStrictPropertiesModern(object) {
    return getOwnPropertyNames(object).concat(getOwnPropertySymbols(object));
}
/**
 * Get the properites used when copying objects strictly. This includes both keys and symbols.
 */ var getStrictProperties = SUPPORTS_SYMBOL ? getStrictPropertiesModern : getOwnPropertyNames;
/**
 * Striclty copy all properties contained on the object.
 */ function copyOwnPropertiesStrict(value, clone, state) {
    var properties = getStrictProperties(value);
    for(var index = 0, length_1 = properties.length, property = void 0, descriptor = void 0; index < length_1; ++index){
        property = properties[index];
        if (property === 'callee' || property === 'caller') {
            continue;
        }
        descriptor = getOwnPropertyDescriptor(value, property);
        if (!descriptor) {
            // In extra edge cases where the property descriptor cannot be retrived, fall back to
            // the loose assignment.
            clone[property] = state.copier(value[property], state);
            continue;
        }
        // Only clone the value if actually a value, not a getter / setter.
        if (!descriptor.get && !descriptor.set) {
            descriptor.value = state.copier(descriptor.value, state);
        }
        try {
            defineProperty(clone, property, descriptor);
        } catch (error) {
            // Tee above can fail on node in edge cases, so fall back to the loose assignment.
            clone[property] = descriptor.value;
        }
    }
    return clone;
}
/**
 * Deeply copy the indexed values in the array.
 */ function copyArrayLoose(array, state) {
    var clone = new state.Constructor();
    // set in the cache immediately to be able to reuse the object recursively
    state.cache.set(array, clone);
    for(var index = 0, length_2 = array.length; index < length_2; ++index){
        clone[index] = state.copier(array[index], state);
    }
    return clone;
}
/**
 * Deeply copy the indexed values in the array, as well as any custom properties.
 */ function copyArrayStrict(array, state) {
    var clone = new state.Constructor();
    // set in the cache immediately to be able to reuse the object recursively
    state.cache.set(array, clone);
    return copyOwnPropertiesStrict(array, clone, state);
}
/**
 * Copy the contents of the ArrayBuffer.
 */ function copyArrayBuffer(arrayBuffer, _state) {
    return arrayBuffer.slice(0);
}
/**
 * Create a new Blob with the contents of the original.
 */ function copyBlob(blob, _state) {
    return blob.slice(0, blob.size, blob.type);
}
/**
 * Create a new DataView with the contents of the original.
 */ function copyDataView(dataView, state) {
    return new state.Constructor(copyArrayBuffer(dataView.buffer));
}
/**
 * Create a new Date based on the time of the original.
 */ function copyDate(date, state) {
    return new state.Constructor(date.getTime());
}
/**
 * Deeply copy the keys and values of the original.
 */ function copyMapLoose(map, state) {
    var clone = new state.Constructor();
    // set in the cache immediately to be able to reuse the object recursively
    state.cache.set(map, clone);
    map.forEach(function(value, key) {
        clone.set(key, state.copier(value, state));
    });
    return clone;
}
/**
 * Deeply copy the keys and values of the original, as well as any custom properties.
 */ function copyMapStrict(map, state) {
    return copyOwnPropertiesStrict(map, copyMapLoose(map, state), state);
}
function copyObjectLooseLegacy(object, state) {
    var clone = getCleanClone(state.prototype);
    // set in the cache immediately to be able to reuse the object recursively
    state.cache.set(object, clone);
    for(var key in object){
        if (hasOwnProperty.call(object, key)) {
            clone[key] = state.copier(object[key], state);
        }
    }
    return clone;
}
function copyObjectLooseModern(object, state) {
    var clone = getCleanClone(state.prototype);
    // set in the cache immediately to be able to reuse the object recursively
    state.cache.set(object, clone);
    for(var key in object){
        if (hasOwnProperty.call(object, key)) {
            clone[key] = state.copier(object[key], state);
        }
    }
    var symbols = getOwnPropertySymbols(object);
    for(var index = 0, length_3 = symbols.length, symbol = void 0; index < length_3; ++index){
        symbol = symbols[index];
        if (propertyIsEnumerable.call(object, symbol)) {
            clone[symbol] = state.copier(object[symbol], state);
        }
    }
    return clone;
}
/**
 * Deeply copy the properties (keys and symbols) and values of the original.
 */ var copyObjectLoose = SUPPORTS_SYMBOL ? copyObjectLooseModern : copyObjectLooseLegacy;
/**
 * Deeply copy the properties (keys and symbols) and values of the original, as well
 * as any hidden or non-enumerable properties.
 */ function copyObjectStrict(object, state) {
    var clone = getCleanClone(state.prototype);
    // set in the cache immediately to be able to reuse the object recursively
    state.cache.set(object, clone);
    return copyOwnPropertiesStrict(object, clone, state);
}
/**
 * Create a new primitive wrapper from the value of the original.
 */ function copyPrimitiveWrapper(primitiveObject, state) {
    return new state.Constructor(primitiveObject.valueOf());
}
/**
 * Create a new RegExp based on the value and flags of the original.
 */ function copyRegExp(regExp, state) {
    var clone = new state.Constructor(regExp.source, getRegExpFlags(regExp));
    clone.lastIndex = regExp.lastIndex;
    return clone;
}
/**
 * Return the original value (an identity function).
 *
 * @note
 * THis is used for objects that cannot be copied, such as WeakMap.
 */ function copySelf(value, _state) {
    return value;
}
/**
 * Deeply copy the values of the original.
 */ function copySetLoose(set, state) {
    var clone = new state.Constructor();
    // set in the cache immediately to be able to reuse the object recursively
    state.cache.set(set, clone);
    set.forEach(function(value) {
        clone.add(state.copier(value, state));
    });
    return clone;
}
/**
 * Deeply copy the values of the original, as well as any custom properties.
 */ function copySetStrict(set, state) {
    return copyOwnPropertiesStrict(set, copySetLoose(set, state), state);
}
var isArray = Array.isArray;
var assign = Object.assign;
var getPrototypeOf = Object.getPrototypeOf || function(obj) {
    return obj.__proto__;
};
var DEFAULT_LOOSE_OPTIONS = {
    array: copyArrayLoose,
    arrayBuffer: copyArrayBuffer,
    blob: copyBlob,
    dataView: copyDataView,
    date: copyDate,
    error: copySelf,
    map: copyMapLoose,
    object: copyObjectLoose,
    regExp: copyRegExp,
    set: copySetLoose
};
var DEFAULT_STRICT_OPTIONS = assign({}, DEFAULT_LOOSE_OPTIONS, {
    array: copyArrayStrict,
    map: copyMapStrict,
    object: copyObjectStrict,
    set: copySetStrict
});
/**
 * Get the copiers used for each specific object tag.
 */ function getTagSpecificCopiers(options) {
    return {
        Arguments: options.object,
        Array: options.array,
        ArrayBuffer: options.arrayBuffer,
        Blob: options.blob,
        Boolean: copyPrimitiveWrapper,
        DataView: options.dataView,
        Date: options.date,
        Error: options.error,
        Float32Array: options.arrayBuffer,
        Float64Array: options.arrayBuffer,
        Int8Array: options.arrayBuffer,
        Int16Array: options.arrayBuffer,
        Int32Array: options.arrayBuffer,
        Map: options.map,
        Number: copyPrimitiveWrapper,
        Object: options.object,
        Promise: copySelf,
        RegExp: options.regExp,
        Set: options.set,
        String: copyPrimitiveWrapper,
        WeakMap: copySelf,
        WeakSet: copySelf,
        Uint8Array: options.arrayBuffer,
        Uint8ClampedArray: options.arrayBuffer,
        Uint16Array: options.arrayBuffer,
        Uint32Array: options.arrayBuffer,
        Uint64Array: options.arrayBuffer
    };
}
/**
 * Create a custom copier based on the object-specific copy methods passed.
 */ function createCopier(options) {
    var normalizedOptions = assign({}, DEFAULT_LOOSE_OPTIONS, options);
    var tagSpecificCopiers = getTagSpecificCopiers(normalizedOptions);
    var array = tagSpecificCopiers.Array, object = tagSpecificCopiers.Object;
    function copier(value, state) {
        state.prototype = state.Constructor = undefined;
        if (!value || typeof value !== 'object') {
            return value;
        }
        if (state.cache.has(value)) {
            return state.cache.get(value);
        }
        state.prototype = getPrototypeOf(value);
        state.Constructor = state.prototype && state.prototype.constructor;
        // plain objects
        if (!state.Constructor || state.Constructor === Object) {
            return object(value, state);
        }
        // arrays
        if (isArray(value)) {
            return array(value, state);
        }
        var tagSpecificCopier = tagSpecificCopiers[getTag(value)];
        if (tagSpecificCopier) {
            return tagSpecificCopier(value, state);
        }
        return typeof value.then === 'function' ? value : object(value, state);
    }
    return function copy(value) {
        return copier(value, {
            Constructor: undefined,
            cache: createCache(),
            copier: copier,
            prototype: undefined
        });
    };
}
/**
 * Create a custom copier based on the object-specific copy methods passed, defaulting to the
 * same internals as `copyStrict`.
 */ function createStrictCopier(options) {
    return createCopier(assign({}, DEFAULT_STRICT_OPTIONS, options));
}
/**
 * Copy an value deeply as much as possible, where strict recreation of object properties
 * are maintained. All properties (including non-enumerable ones) are copied with their
 * original property descriptors on both objects and arrays.
 */ var copyStrict = createStrictCopier({});
/**
 * Copy an value deeply as much as possible.
 */ var index = createCopier({});
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/object-inspect/util.inspect.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[externals]/util [external] (util, cjs)").inspect;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/object-inspect/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol') ? Symbol.toStringTag : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;
var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype // eslint-disable-line no-proto
 ? function(O) {
    return O.__proto__; // eslint-disable-line no-proto
} : null);
function addNumericSeparator(num, str) {
    if (num === Infinity || num === -Infinity || num !== num || num && num > -1000 && num < 1000 || $test.call(/e/, str)) {
        return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === 'number') {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return $replace.call(str, sepRegex, '$&_');
}
var utilInspect = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/object-inspect/util.inspect.js [app-ssr] (ecmascript)");
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
var quotes = {
    __proto__: null,
    'double': '"',
    single: "'"
};
var quoteREs = {
    __proto__: null,
    'double': /(["\\])/g,
    single: /(['\\])/g
};
module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};
    if (has(opts, 'quoteStyle') && !has(quotes, opts.quoteStyle)) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number' ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    }
    if (has(opts, 'indent') && opts.indent !== null && opts.indent !== '\t' && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;
    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }
    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === 'bigint') {
        var bigIntStr = String(obj) + 'n';
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }
    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') {
        depth = 0;
    }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }
    var indent = getIndent(opts, depth);
    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }
    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }
    if (typeof obj === 'function' && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for(var i = 0; i < attrs.length; i++){
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) {
            s += '...';
        }
        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) {
            return '[]';
        }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + $join.call(xs, ', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {
            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
        }
        if (parts.length === 0) {
            return '[' + String(obj) + ']';
        }
        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {
            return utilInspect(obj, {
                depth: maxDepth - depth
            });
        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
            mapForEach.call(obj, function(value, key) {
                mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
            });
        }
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
            setForEach.call(obj, function(value) {
                setParts.push(inspect(value, obj));
            });
        }
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    // note: in IE 8, sometimes `global !== window` but both are the prototypes of each other
    /* eslint-env browser */ if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (typeof globalThis !== 'undefined' && obj === globalThis || ("TURBOPACK compile-time value", "object") !== 'undefined' && obj === /*TURBOPACK member replacement*/ __turbopack_context__.g) {
        return '{ [object globalThis] }';
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
        if (ys.length === 0) {
            return tag + '{}';
        }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + $join.call(ys, ', ') + ' }';
    }
    return String(obj);
};
function wrapQuotes(s, defaultStyle, opts) {
    var style = opts.quoteStyle || defaultStyle;
    var quoteChar = quotes[style];
    return quoteChar + s + quoteChar;
}
function quote(s) {
    return $replace.call(String(s), /"/g, '&quot;');
}
function canTrustToString(obj) {
    return !toStringTag || !(typeof obj === 'object' && (toStringTag in obj || typeof obj[toStringTag] !== 'undefined'));
}
function isArray(obj) {
    return toStr(obj) === '[object Array]' && canTrustToString(obj);
}
function isDate(obj) {
    return toStr(obj) === '[object Date]' && canTrustToString(obj);
}
function isRegExp(obj) {
    return toStr(obj) === '[object RegExp]' && canTrustToString(obj);
}
function isError(obj) {
    return toStr(obj) === '[object Error]' && canTrustToString(obj);
}
function isString(obj) {
    return toStr(obj) === '[object String]' && canTrustToString(obj);
}
function isNumber(obj) {
    return toStr(obj) === '[object Number]' && canTrustToString(obj);
}
function isBoolean(obj) {
    return toStr(obj) === '[object Boolean]' && canTrustToString(obj);
}
// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}
function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}
var hasOwn = Object.prototype.hasOwnProperty || function(key) {
    return key in this;
};
function has(obj, key) {
    return hasOwn.call(obj, key);
}
function toStr(obj) {
    return objectToString.call(obj);
}
function nameOf(f) {
    if (f.name) {
        return f.name;
    }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) {
        return m[1];
    }
    return null;
}
function indexOf(xs, x) {
    if (xs.indexOf) {
        return xs.indexOf(x);
    }
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) {
            return i;
        }
    }
    return -1;
}
function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}
function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isElement(x) {
    if (!x || typeof x !== 'object') {
        return false;
    }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}
function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    var quoteRE = quoteREs[opts.quoteStyle || 'single'];
    quoteRE.lastIndex = 0;
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, quoteRE, '\\$1'), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}
function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) {
        return '\\' + x;
    }
    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
}
function markBoxed(str) {
    return 'Object(' + str + ')';
}
function weakCollectionOf(type) {
    return type + ' { ? }';
}
function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}
function singleLineValues(xs) {
    for(var i = 0; i < xs.length; i++){
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}
function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), ' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}
function indentedJoin(xs, indent) {
    if (xs.length === 0) {
        return '';
    }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
}
function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for(var i = 0; i < obj.length; i++){
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for(var k = 0; k < syms.length; k++){
            symMap['$' + syms[k]] = syms[k];
        }
    }
    for(var key in obj){
        if (!has(obj, key)) {
            continue;
        } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) {
            continue;
        } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for(var j = 0; j < syms.length; j++){
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/side-channel-list/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var inspect = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/object-inspect/index.js [app-ssr] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/type.js [app-ssr] (ecmascript)");
/*
* This function traverses the list returning the node corresponding to the given key.
*
* That node is also moved to the head of the list, so that if it's accessed again we don't need to traverse the whole list.
* By doing so, all the recently used nodes can be accessed relatively quickly.
*/ /** @type {import('./list.d.ts').listGetNode} */ // eslint-disable-next-line consistent-return
var listGetNode = function(list, key, isDelete) {
    /** @type {typeof list | NonNullable<(typeof list)['next']>} */ var prev = list;
    /** @type {(typeof list)['next']} */ var curr;
    // eslint-disable-next-line eqeqeq
    for(; (curr = prev.next) != null; prev = curr){
        if (curr.key === key) {
            prev.next = curr.next;
            if (!isDelete) {
                // eslint-disable-next-line no-extra-parens
                curr.next = list.next;
                list.next = curr; // eslint-disable-line no-param-reassign
            }
            return curr;
        }
    }
};
/** @type {import('./list.d.ts').listGet} */ var listGet = function(objects, key) {
    if (!objects) {
        return void undefined;
    }
    var node = listGetNode(objects, key);
    return node && node.value;
};
/** @type {import('./list.d.ts').listSet} */ var listSet = function(objects, key, value) {
    var node = listGetNode(objects, key);
    if (node) {
        node.value = value;
    } else {
        // Prepend the new node to the beginning of the list
        objects.next = {
            key: key,
            next: objects.next,
            value: value
        };
    }
};
/** @type {import('./list.d.ts').listHas} */ var listHas = function(objects, key) {
    if (!objects) {
        return false;
    }
    return !!listGetNode(objects, key);
};
/** @type {import('./list.d.ts').listDelete} */ // eslint-disable-next-line consistent-return
var listDelete = function(objects, key) {
    if (objects) {
        return listGetNode(objects, key, true);
    }
};
/** @type {import('.')} */ module.exports = function getSideChannelList() {
    /** @typedef {ReturnType<typeof getSideChannelList>} Channel */ /** @typedef {Parameters<Channel['get']>[0]} K */ /** @typedef {Parameters<Channel['set']>[1]} V */ /** @type {import('./list.d.ts').RootNode<V, K> | undefined} */ var $o;
    /** @type {Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) {
                throw new $TypeError('Side channel does not contain ' + inspect(key));
            }
        },
        'delete': function(key) {
            var root = $o && $o.next;
            var deletedNode = listDelete($o, key);
            if (deletedNode && root && root === deletedNode) {
                $o = void undefined;
            }
            return !!deletedNode;
        },
        get: function(key) {
            return listGet($o, key);
        },
        has: function(key) {
            return listHas($o, key);
        },
        set: function(key, value) {
            if (!$o) {
                // Initialize the linked list as an empty node, so that we don't have to special-case handling of the first node: we can always refer to it as (previous node).next, instead of something like (list).head
                $o = {
                    next: void undefined
                };
            }
            // eslint-disable-next-line no-extra-parens
            listSet($o, key, value);
        }
    };
    // @ts-expect-error TODO: figure out why this is erroring
    return channel;
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/call-bound/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/get-intrinsic/index.js [app-ssr] (ecmascript)");
var callBindBasic = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/call-bind-apply-helpers/index.js [app-ssr] (ecmascript)");
/** @type {(thisArg: string, searchString: string, position?: number) => number} */ var $indexOf = callBindBasic([
    GetIntrinsic('%String.prototype.indexOf%')
]);
/** @type {import('.')} */ module.exports = function callBoundIntrinsic(name, allowMissing) {
    /* eslint no-extra-parens: 0 */ var intrinsic = GetIntrinsic(name, !!allowMissing);
    if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
        return callBindBasic([
            intrinsic
        ]);
    }
    return intrinsic;
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/side-channel-map/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/get-intrinsic/index.js [app-ssr] (ecmascript)");
var callBound = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/call-bound/index.js [app-ssr] (ecmascript)");
var inspect = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/object-inspect/index.js [app-ssr] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/type.js [app-ssr] (ecmascript)");
var $Map = GetIntrinsic('%Map%', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K) => V} */ var $mapGet = callBound('Map.prototype.get', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K, value: V) => void} */ var $mapSet = callBound('Map.prototype.set', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K) => boolean} */ var $mapHas = callBound('Map.prototype.has', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K) => boolean} */ var $mapDelete = callBound('Map.prototype.delete', true);
/** @type {<K, V>(thisArg: Map<K, V>) => number} */ var $mapSize = callBound('Map.prototype.size', true);
/** @type {import('.')} */ module.exports = !!$Map && /** @type {Exclude<import('.'), false>} */ function getSideChannelMap() {
    /** @typedef {ReturnType<typeof getSideChannelMap>} Channel */ /** @typedef {Parameters<Channel['get']>[0]} K */ /** @typedef {Parameters<Channel['set']>[1]} V */ /** @type {Map<K, V> | undefined} */ var $m;
    /** @type {Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) {
                throw new $TypeError('Side channel does not contain ' + inspect(key));
            }
        },
        'delete': function(key) {
            if ($m) {
                var result = $mapDelete($m, key);
                if ($mapSize($m) === 0) {
                    $m = void undefined;
                }
                return result;
            }
            return false;
        },
        get: function(key) {
            if ($m) {
                return $mapGet($m, key);
            }
        },
        has: function(key) {
            if ($m) {
                return $mapHas($m, key);
            }
            return false;
        },
        set: function(key, value) {
            if (!$m) {
                // @ts-expect-error TS can't handle narrowing a variable inside a closure
                $m = new $Map();
            }
            $mapSet($m, key, value);
        }
    };
    // @ts-expect-error TODO: figure out why TS is erroring here
    return channel;
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/side-channel-weakmap/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/get-intrinsic/index.js [app-ssr] (ecmascript)");
var callBound = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/call-bound/index.js [app-ssr] (ecmascript)");
var inspect = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/object-inspect/index.js [app-ssr] (ecmascript)");
var getSideChannelMap = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/side-channel-map/index.js [app-ssr] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/type.js [app-ssr] (ecmascript)");
var $WeakMap = GetIntrinsic('%WeakMap%', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => V} */ var $weakMapGet = callBound('WeakMap.prototype.get', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K, value: V) => void} */ var $weakMapSet = callBound('WeakMap.prototype.set', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean} */ var $weakMapHas = callBound('WeakMap.prototype.has', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean} */ var $weakMapDelete = callBound('WeakMap.prototype.delete', true);
/** @type {import('.')} */ module.exports = $WeakMap ? /** @type {Exclude<import('.'), false>} */ function getSideChannelWeakMap() {
    /** @typedef {ReturnType<typeof getSideChannelWeakMap>} Channel */ /** @typedef {Parameters<Channel['get']>[0]} K */ /** @typedef {Parameters<Channel['set']>[1]} V */ /** @type {WeakMap<K & object, V> | undefined} */ var $wm;
    /** @type {Channel | undefined} */ var $m;
    /** @type {Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) {
                throw new $TypeError('Side channel does not contain ' + inspect(key));
            }
        },
        'delete': function(key) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if ($wm) {
                    return $weakMapDelete($wm, key);
                }
            } else if (getSideChannelMap) {
                if ($m) {
                    return $m['delete'](key);
                }
            }
            return false;
        },
        get: function(key) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if ($wm) {
                    return $weakMapGet($wm, key);
                }
            }
            return $m && $m.get(key);
        },
        has: function(key) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if ($wm) {
                    return $weakMapHas($wm, key);
                }
            }
            return !!$m && $m.has(key);
        },
        set: function(key, value) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if (!$wm) {
                    $wm = new $WeakMap();
                }
                $weakMapSet($wm, key, value);
            } else if (getSideChannelMap) {
                if (!$m) {
                    $m = getSideChannelMap();
                }
                // eslint-disable-next-line no-extra-parens
                /** @type {NonNullable<typeof $m>} */ $m.set(key, value);
            }
        }
    };
    // @ts-expect-error TODO: figure out why this is erroring
    return channel;
} : getSideChannelMap;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/side-channel/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $TypeError = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/type.js [app-ssr] (ecmascript)");
var inspect = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/object-inspect/index.js [app-ssr] (ecmascript)");
var getSideChannelList = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/side-channel-list/index.js [app-ssr] (ecmascript)");
var getSideChannelMap = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/side-channel-map/index.js [app-ssr] (ecmascript)");
var getSideChannelWeakMap = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/side-channel-weakmap/index.js [app-ssr] (ecmascript)");
var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;
/** @type {import('.')} */ module.exports = function getSideChannel() {
    /** @typedef {ReturnType<typeof getSideChannel>} Channel */ /** @type {Channel | undefined} */ var $channelData;
    /** @type {Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) {
                throw new $TypeError('Side channel does not contain ' + inspect(key));
            }
        },
        'delete': function(key) {
            return !!$channelData && $channelData['delete'](key);
        },
        get: function(key) {
            return $channelData && $channelData.get(key);
        },
        has: function(key) {
            return !!$channelData && $channelData.has(key);
        },
        set: function(key, value) {
            if (!$channelData) {
                $channelData = makeChannel();
            }
            $channelData.set(key, value);
        }
    };
    // @ts-expect-error TODO: figure out why this is erroring
    return channel;
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/qs/lib/formats.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};
module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function(value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function(value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/qs/lib/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var formats = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/qs/lib/formats.js [app-ssr] (ecmascript)");
var getSideChannel = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/side-channel/index.js [app-ssr] (ecmascript)");
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
// Track objects created from arrayLimit overflow using side-channel
// Stores the current max numeric index for O(1) lookup
var overflowChannel = getSideChannel();
var markOverflow = function markOverflow(obj, maxIndex) {
    overflowChannel.set(obj, maxIndex);
    return obj;
};
var isOverflow = function isOverflow(obj) {
    return overflowChannel.has(obj);
};
var getMaxIndex = function getMaxIndex(obj) {
    return overflowChannel.get(obj);
};
var setMaxIndex = function setMaxIndex(obj, maxIndex) {
    overflowChannel.set(obj, maxIndex);
};
var hexTable = function() {
    var array = [];
    for(var i = 0; i < 256; ++i){
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }
    return array;
}();
var compactQueue = function compactQueue(queue) {
    while(queue.length > 1){
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
            var compacted = [];
            for(var j = 0; j < obj.length; ++j){
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }
            item.obj[item.prop] = compacted;
        }
    }
};
var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? {
        __proto__: null
    } : {};
    for(var i = 0; i < source.length; ++i){
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }
    return obj;
};
var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */ if (!source) {
        return target;
    }
    if (typeof source !== 'object' && typeof source !== 'function') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if (isOverflow(target)) {
                // Add at next numeric index for overflow objects
                var newIndex = getMaxIndex(target) + 1;
                target[newIndex] = source;
                setMaxIndex(target, newIndex);
            } else if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [
                target,
                source
            ];
        }
        return target;
    }
    if (!target || typeof target !== 'object') {
        if (isOverflow(source)) {
            // Create new object with target at 0, source values shifted by 1
            var sourceKeys = Object.keys(source);
            var result = options && options.plainObjects ? {
                __proto__: null,
                0: target
            } : {
                0: target
            };
            for(var m = 0; m < sourceKeys.length; m++){
                var oldKey = parseInt(sourceKeys[m], 10);
                result[oldKey + 1] = source[sourceKeys[m]];
            }
            return markOverflow(result, getMaxIndex(source) + 1);
        }
        return [
            target
        ].concat(source);
    }
    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }
    if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }
    return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};
var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};
var decode = function(str, defaultDecoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};
var limit = 1024;
/* eslint operator-linebreak: [2, "before"] */ var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }
    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }
    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }
    var out = '';
    for(var j = 0; j < string.length; j += limit){
        var segment = string.length >= limit ? string.slice(j, j + limit) : string;
        var arr = [];
        for(var i = 0; i < segment.length; ++i){
            var c = segment.charCodeAt(i);
            if (c === 0x2D // -
             || c === 0x2E // .
             || c === 0x5F // _
             || c === 0x7E // ~
             || c >= 0x30 && c <= 0x39 || c >= 0x41 && c <= 0x5A || c >= 0x61 && c <= 0x7A || format === formats.RFC1738 && (c === 0x28 || c === 0x29) // ( )
            ) {
                arr[arr.length] = segment.charAt(i);
                continue;
            }
            if (c < 0x80) {
                arr[arr.length] = hexTable[c];
                continue;
            }
            if (c < 0x800) {
                arr[arr.length] = hexTable[0xC0 | c >> 6] + hexTable[0x80 | c & 0x3F];
                continue;
            }
            if (c < 0xD800 || c >= 0xE000) {
                arr[arr.length] = hexTable[0xE0 | c >> 12] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
                continue;
            }
            i += 1;
            c = 0x10000 + ((c & 0x3FF) << 10 | segment.charCodeAt(i) & 0x3FF);
            arr[arr.length] = hexTable[0xF0 | c >> 18] + hexTable[0x80 | c >> 12 & 0x3F] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
        }
        out += arr.join('');
    }
    return out;
};
var compact = function compact(value) {
    var queue = [
        {
            obj: {
                o: value
            },
            prop: 'o'
        }
    ];
    var refs = [];
    for(var i = 0; i < queue.length; ++i){
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for(var j = 0; j < keys.length; ++j){
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({
                    obj: obj,
                    prop: key
                });
                refs.push(val);
            }
        }
    }
    compactQueue(queue);
    return value;
};
var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};
var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }
    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
var combine = function combine(a, b, arrayLimit, plainObjects) {
    // If 'a' is already an overflow object, add to it
    if (isOverflow(a)) {
        var newIndex = getMaxIndex(a) + 1;
        a[newIndex] = b;
        setMaxIndex(a, newIndex);
        return a;
    }
    var result = [].concat(a, b);
    if (result.length > arrayLimit) {
        return markOverflow(arrayToObject(result, {
            plainObjects: plainObjects
        }), result.length - 1);
    }
    return result;
};
var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for(var i = 0; i < val.length; i += 1){
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};
module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isOverflow: isOverflow,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/qs/lib/stringify.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var getSideChannel = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/side-channel/index.js [app-ssr] (ecmascript)");
var utils = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/qs/lib/utils.js [app-ssr] (ecmascript)");
var formats = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/qs/lib/formats.js [app-ssr] (ecmascript)");
var has = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};
var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function(arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [
        valueOrArray
    ]);
};
var toISO = Date.prototype.toISOString;
var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    allowEmptyArrays: false,
    arrayFormat: 'indices',
    charset: 'utf-8',
    charsetSentinel: false,
    commaRoundTrip: false,
    delimiter: '&',
    encode: true,
    encodeDotInKeys: false,
    encoder: utils.encode,
    encodeValuesOnly: false,
    filter: void undefined,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};
var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean' || typeof v === 'symbol' || typeof v === 'bigint';
};
var sentinel = {};
var stringify = function stringify(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
    var obj = object;
    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag){
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== 'undefined') {
            if (pos === step) {
                throw new RangeError('Cyclic object value');
            } else {
                findFlag = true; // Break while
            }
        }
        if (typeof tmpSc.get(sentinel) === 'undefined') {
            step = 0;
        }
    }
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function(value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }
    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }
        obj = '';
    }
    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            return [
                formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))
            ];
        }
        return [
            formatter(prefix) + '=' + formatter(String(obj))
        ];
    }
    var values = [];
    if (typeof obj === 'undefined') {
        return values;
    }
    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        if (encodeValuesOnly && encoder) {
            obj = utils.maybeMap(obj, encoder);
        }
        objKeys = [
            {
                value: obj.length > 0 ? obj.join(',') || null : void undefined
            }
        ];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }
    var encodedPrefix = encodeDotInKeys ? String(prefix).replace(/\./g, '%2E') : String(prefix);
    var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encodedPrefix + '[]' : encodedPrefix;
    if (allowEmptyArrays && isArray(obj) && obj.length === 0) {
        return adjustedPrefix + '[]';
    }
    for(var j = 0; j < objKeys.length; ++j){
        var key = objKeys[j];
        var value = typeof key === 'object' && key && typeof key.value !== 'undefined' ? key.value : obj[key];
        if (skipNulls && value === null) {
            continue;
        }
        var encodedKey = allowDots && encodeDotInKeys ? String(key).replace(/\./g, '%2E') : String(key);
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? '.' + encodedKey : '[' + encodedKey + ']');
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(value, keyPrefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, generateArrayPrefix === 'comma' && encodeValuesOnly && isArray(obj) ? null : encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, valueSideChannel));
    }
    return values;
};
var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }
    if (typeof opts.allowEmptyArrays !== 'undefined' && typeof opts.allowEmptyArrays !== 'boolean') {
        throw new TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
    }
    if (typeof opts.encodeDotInKeys !== 'undefined' && typeof opts.encodeDotInKeys !== 'boolean') {
        throw new TypeError('`encodeDotInKeys` option can only be `true` or `false`, when provided');
    }
    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }
    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];
    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }
    var arrayFormat;
    if (opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if ('indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = defaults.arrayFormat;
    }
    if ('commaRoundTrip' in opts && typeof opts.commaRoundTrip !== 'boolean') {
        throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
    }
    var allowDots = typeof opts.allowDots === 'undefined' ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === 'boolean' ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        arrayFormat: arrayFormat,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        commaRoundTrip: !!opts.commaRoundTrip,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encodeDotInKeys: typeof opts.encodeDotInKeys === 'boolean' ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};
module.exports = function(object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);
    var objKeys;
    var filter;
    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }
    var keys = [];
    if (typeof obj !== 'object' || obj === null) {
        return '';
    }
    var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
    var commaRoundTrip = generateArrayPrefix === 'comma' && options.commaRoundTrip;
    if (!objKeys) {
        objKeys = Object.keys(obj);
    }
    if (options.sort) {
        objKeys.sort(options.sort);
    }
    var sideChannel = getSideChannel();
    for(var i = 0; i < objKeys.length; ++i){
        var key = objKeys[i];
        var value = obj[key];
        if (options.skipNulls && value === null) {
            continue;
        }
        pushToArray(keys, stringify(value, key, generateArrayPrefix, commaRoundTrip, options.allowEmptyArrays, options.strictNullHandling, options.skipNulls, options.encodeDotInKeys, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset, sideChannel));
    }
    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';
    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }
    return joined.length > 0 ? prefix + joined : '';
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/qs/lib/parse.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/qs/lib/utils.js [app-ssr] (ecmascript)");
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var defaults = {
    allowDots: false,
    allowEmptyArrays: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decodeDotInKeys: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    duplicates: 'combine',
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictDepth: false,
    strictNullHandling: false,
    throwOnLimitExceeded: false
};
var interpretNumericEntities = function(str) {
    return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};
var parseArrayValue = function(val, options, currentArrayLength) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }
    if (options.throwOnLimitExceeded && currentArrayLength >= options.arrayLimit) {
        throw new RangeError('Array limit exceeded. Only ' + options.arrayLimit + ' element' + (options.arrayLimit === 1 ? '' : 's') + ' allowed in an array.');
    }
    return val;
};
// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')
// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')
var parseValues = function parseQueryStringValues(str, options) {
    var obj = {
        __proto__: null
    };
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    cleanStr = cleanStr.replace(/%5B/gi, '[').replace(/%5D/gi, ']');
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, options.throwOnLimitExceeded ? limit + 1 : limit);
    if (options.throwOnLimitExceeded && parts.length > limit) {
        throw new RangeError('Parameter limit exceeded. Only ' + limit + ' parameter' + (limit === 1 ? '' : 's') + ' allowed.');
    }
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;
    var charset = options.charset;
    if (options.charsetSentinel) {
        for(i = 0; i < parts.length; ++i){
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }
    for(i = 0; i < parts.length; ++i){
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];
        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;
        var key;
        var val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            if (key !== null) {
                val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options, isArray(obj[key]) ? obj[key].length : 0), function(encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                });
            }
        }
        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(String(val));
        }
        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [
                val
            ] : val;
        }
        if (key !== null) {
            var existing = has.call(obj, key);
            if (existing && options.duplicates === 'combine') {
                obj[key] = utils.combine(obj[key], val, options.arrayLimit, options.plainObjects);
            } else if (!existing || options.duplicates === 'last') {
                obj[key] = val;
            }
        }
    }
    return obj;
};
var parseObject = function(chain, val, options, valuesParsed) {
    var currentArrayLength = 0;
    if (chain.length > 0 && chain[chain.length - 1] === '[]') {
        var parentKey = chain.slice(0, -1).join('');
        currentArrayLength = Array.isArray(val) && val[parentKey] ? val[parentKey].length : 0;
    }
    var leaf = valuesParsed ? val : parseArrayValue(val, options, currentArrayLength);
    for(var i = chain.length - 1; i >= 0; --i){
        var obj;
        var root = chain[i];
        if (root === '[]' && options.parseArrays) {
            if (utils.isOverflow(leaf)) {
                // leaf is already an overflow object, preserve it
                obj = leaf;
            } else {
                obj = options.allowEmptyArrays && (leaf === '' || options.strictNullHandling && leaf === null) ? [] : utils.combine([], leaf, options.arrayLimit, options.plainObjects);
            }
        } else {
            obj = options.plainObjects ? {
                __proto__: null
            } : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, '.') : cleanRoot;
            var index = parseInt(decodedRoot, 10);
            if (!options.parseArrays && decodedRoot === '') {
                obj = {
                    0: leaf
                };
            } else if (!isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
                obj = [];
                obj[index] = leaf;
            } else if (decodedRoot !== '__proto__') {
                obj[decodedRoot] = leaf;
            }
        }
        leaf = obj;
    }
    return leaf;
};
var splitKeyIntoSegments = function splitKeyIntoSegments(givenKey, options) {
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;
    if (options.depth <= 0) {
        if (!options.plainObjects && has.call(Object.prototype, key)) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        return [
            key
        ];
    }
    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;
    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;
    var keys = [];
    if (parent) {
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(parent);
    }
    var i = 0;
    while((segment = child.exec(key)) !== null && i < options.depth){
        i += 1;
        var segmentContent = segment[1].slice(1, -1);
        if (!options.plainObjects && has.call(Object.prototype, segmentContent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }
    if (segment) {
        if (options.strictDepth === true) {
            throw new RangeError('Input depth exceeded depth option of ' + options.depth + ' and strictDepth is true');
        }
        keys.push('[' + key.slice(segment.index) + ']');
    }
    return keys;
};
var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }
    var keys = splitKeyIntoSegments(givenKey, options);
    if (!keys) {
        return;
    }
    return parseObject(keys, val, options, valuesParsed);
};
var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }
    if (typeof opts.allowEmptyArrays !== 'undefined' && typeof opts.allowEmptyArrays !== 'boolean') {
        throw new TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
    }
    if (typeof opts.decodeDotInKeys !== 'undefined' && typeof opts.decodeDotInKeys !== 'boolean') {
        throw new TypeError('`decodeDotInKeys` option can only be `true` or `false`, when provided');
    }
    if (opts.decoder !== null && typeof opts.decoder !== 'undefined' && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    if (typeof opts.throwOnLimitExceeded !== 'undefined' && typeof opts.throwOnLimitExceeded !== 'boolean') {
        throw new TypeError('`throwOnLimitExceeded` option must be a boolean');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;
    var duplicates = typeof opts.duplicates === 'undefined' ? defaults.duplicates : opts.duplicates;
    if (duplicates !== 'combine' && duplicates !== 'first' && duplicates !== 'last') {
        throw new TypeError('The duplicates option must be either combine, first, or last');
    }
    var allowDots = typeof opts.allowDots === 'undefined' ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
    return {
        allowDots: allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === 'boolean' ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decodeDotInKeys: typeof opts.decodeDotInKeys === 'boolean' ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === 'number' || opts.depth === false ? +opts.depth : defaults.depth,
        duplicates: duplicates,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictDepth: typeof opts.strictDepth === 'boolean' ? !!opts.strictDepth : defaults.strictDepth,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling,
        throwOnLimitExceeded: typeof opts.throwOnLimitExceeded === 'boolean' ? opts.throwOnLimitExceeded : false
    };
};
module.exports = function(str, opts) {
    var options = normalizeParseOptions(opts);
    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? {
            __proto__: null
        } : {};
    }
    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? {
        __proto__: null
    } : {};
    // Iterate over the keys and setup the new object
    var keys = Object.keys(tempObj);
    for(var i = 0; i < keys.length; ++i){
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }
    if (options.allowSparse === true) {
        return obj;
    }
    return utils.compact(obj);
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/qs/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var stringify = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/qs/lib/stringify.js [app-ssr] (ecmascript)");
var parse = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/qs/lib/parse.js [app-ssr] (ecmascript)");
var formats = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/qs/lib/formats.js [app-ssr] (ecmascript)");
module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/lodash.isstring/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * lodash 4.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */ /** `Object#toString` result references. */ var stringTag = '[object String]';
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */ function isString(value) {
    return typeof value == 'string' || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
}
module.exports = isString;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/p-throttle/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

class AbortError extends Error {
    constructor(){
        super('Throttled function aborted');
        this.name = 'AbortError';
    }
}
const pThrottle = ({ limit, interval, strict })=>{
    if (!Number.isFinite(limit)) {
        throw new TypeError('Expected `limit` to be a finite number');
    }
    if (!Number.isFinite(interval)) {
        throw new TypeError('Expected `interval` to be a finite number');
    }
    const queue = new Map();
    let currentTick = 0;
    let activeCount = 0;
    function windowedDelay() {
        const now = Date.now();
        if (now - currentTick > interval) {
            activeCount = 1;
            currentTick = now;
            return 0;
        }
        if (activeCount < limit) {
            activeCount++;
        } else {
            currentTick += interval;
            activeCount = 1;
        }
        return currentTick - now;
    }
    const strictTicks = [];
    function strictDelay() {
        const now = Date.now();
        if (strictTicks.length < limit) {
            strictTicks.push(now);
            return 0;
        }
        const earliestTime = strictTicks.shift() + interval;
        if (now >= earliestTime) {
            strictTicks.push(now);
            return 0;
        }
        strictTicks.push(earliestTime);
        return earliestTime - now;
    }
    const getDelay = strict ? strictDelay : windowedDelay;
    return (function_)=>{
        const throttled = function(...args) {
            if (!throttled.isEnabled) {
                return (async ()=>function_.apply(this, args))();
            }
            let timeout;
            return new Promise((resolve, reject)=>{
                const execute = ()=>{
                    resolve(function_.apply(this, args));
                    queue.delete(timeout);
                };
                timeout = setTimeout(execute, getDelay());
                queue.set(timeout, reject);
            });
        };
        throttled.abort = ()=>{
            for (const timeout of queue.keys()){
                clearTimeout(timeout);
                queue.get(timeout)(new AbortError());
            }
            queue.clear();
            strictTicks.splice(0, strictTicks.length);
        };
        throttled.isEnabled = true;
        return throttled;
    };
};
module.exports = pThrottle;
module.exports.AbortError = AbortError;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/lodash.isplainobject/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** `Object#toString` result references. */ var objectTag = '[object Object]';
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */ function isHostObject(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;
    if (value != null && typeof value.toString != 'function') {
        try {
            result = !!(value + '');
        } catch (e) {}
    }
    return result;
}
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */ var objectCtorString = funcToString.call(Object);
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/** Built-in value references. */ var getPrototype = overArg(Object.getPrototypeOf, Object);
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */ function isPlainObject(value) {
    if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
        return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
        return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
module.exports = isPlainObject;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful-sdk-core/dist/index.es-modules.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createHttpClient",
    ()=>createHttpClient,
    "createRequestConfig",
    ()=>createRequestConfig,
    "enforceObjPath",
    ()=>enforceObjPath,
    "errorHandler",
    ()=>errorHandler,
    "freezeSys",
    ()=>freezeSys,
    "getUserAgentHeader",
    ()=>getUserAgentHeader,
    "toPlainObject",
    ()=>toPlainObject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/fast-copy/dist/fast-copy.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/qs/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$lodash$2e$isstring$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/lodash.isstring/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$p$2d$throttle$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/p-throttle/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$lodash$2e$isplainobject$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/lodash.isplainobject/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for(var e = 0, n = Array(a); e < a; e++)n[e] = r[e];
    return n;
}
function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
        var i = n[a](c), u = i.value;
    } catch (n) {
        return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
    return function() {
        var t = this, e = arguments;
        return new Promise(function(r, o) {
            var a = n.apply(t, e);
            function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
            }
            function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
            }
            _next(void 0);
        });
    };
}
function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
        if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
            t && (r = t);
            var n = 0, F = function() {};
            return {
                s: F,
                n: function() {
                    return n >= r.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: r[n++]
                    };
                },
                e: function(r) {
                    throw r;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o, a = !0, u = !1;
    return {
        s: function() {
            t = t.call(r);
        },
        n: function() {
            var r = t.next();
            return a = r.done, r;
        },
        e: function(r) {
            u = !0, o = r;
        },
        f: function() {
            try {
                a || null == t.return || t.return();
            } finally{
                if (u) throw o;
            }
        }
    };
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && _setPrototypeOf(t, e);
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _regeneratorRuntime() {
    _regeneratorRuntime = function() {
        return e;
    };
    var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t, e, r) {
        t[e] = r.value;
    }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
        return Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), t[e];
    }
    try {
        define({}, "");
    } catch (t) {
        define = function(t, e, r) {
            return t[e] = r;
        };
    }
    function wrap(t, e, r, n) {
        var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []);
        return o(a, "_invoke", {
            value: makeInvokeMethod(t, r, c)
        }), a;
    }
    function tryCatch(t, e, r) {
        try {
            return {
                type: "normal",
                arg: t.call(e, r)
            };
        } catch (t) {
            return {
                type: "throw",
                arg: t
            };
        }
    }
    e.wrap = wrap;
    var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function() {
        return this;
    });
    var d = Object.getPrototypeOf, v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(e) {
            define(t, e, function(t) {
                return this._invoke(e, t);
            });
        });
    }
    function AsyncIterator(t, e) {
        function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ("throw" !== c.type) {
                var u = c.arg, h = u.value;
                return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function(t) {
                    invoke("next", t, i, a);
                }, function(t) {
                    invoke("throw", t, i, a);
                }) : e.resolve(h).then(function(t) {
                    u.value = t, i(u);
                }, function(t) {
                    return invoke("throw", t, i, a);
                });
            }
            a(c.arg);
        }
        var r;
        o(this, "_invoke", {
            value: function(t, n) {
                function callInvokeWithMethodAndArg() {
                    return new e(function(e, r) {
                        invoke(t, n, e, r);
                    });
                }
                return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
        });
    }
    function makeInvokeMethod(e, r, n) {
        var o = h;
        return function(i, a) {
            if (o === f) throw Error("Generator is already running");
            if (o === s) {
                if ("throw" === i) throw a;
                return {
                    value: t,
                    done: !0
                };
            }
            for(n.method = i, n.arg = a;;){
                var c = n.delegate;
                if (c) {
                    var u = maybeInvokeDelegate(c, n);
                    if (u) {
                        if (u === y) continue;
                        return u;
                    }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                    if (o === h) throw o = s, n.arg;
                    n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                    if (o = n.done ? s : l, p.arg === y) continue;
                    return {
                        value: p.arg,
                        done: n.done
                    };
                }
                "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
            }
        };
    }
    function maybeInvokeDelegate(e, r) {
        var n = r.method, o = e.iterator[n];
        if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
        var i = tryCatch(o, e.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
        var a = i.arg;
        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
        var e = {
            tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
        if (e || "" === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
                var o = -1, i = function next() {
                    for(; ++o < e.length;)if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
                    return next.value = t, next.done = !0, next;
                };
                return i.next = i;
            }
        }
        throw new TypeError(typeof e + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function(t) {
        return {
            __await: t
        };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function() {
        return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function(t, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new AsyncIterator(wrap(t, r, n, o), i);
        return e.isGeneratorFunction(r) ? a : a.next().then(function(t) {
            return t.done ? t.value : a.next();
        });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function() {
        return this;
    }), define(g, "toString", function() {
        return "[object Generator]";
    }), e.keys = function(t) {
        var e = Object(t), r = [];
        for(var n in e)r.push(n);
        return r.reverse(), function next() {
            for(; r.length;){
                var t = r.pop();
                if (t in e) return next.value = t, next.done = !1, next;
            }
            return next.done = !0, next;
        };
    }, e.values = values, Context.prototype = {
        constructor: Context,
        reset: function(e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for(var r in this)"t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
        },
        dispatchException: function(e) {
            if (this.done) throw e;
            var r = this;
            function handle(n, o) {
                return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
            }
            for(var o = this.tryEntries.length - 1; o >= 0; --o){
                var i = this.tryEntries[o], a = i.completion;
                if ("root" === i.tryLoc) return handle("end");
                if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc");
                    if (c && u) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                        if (!u) throw Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                }
            }
        },
        abrupt: function(t, e) {
            for(var r = this.tryEntries.length - 1; r >= 0; --r){
                var o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break;
                }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
        },
        complete: function(t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
        },
        finish: function(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
            }
        },
        catch: function(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                        var o = n.arg;
                        resetTryEntry(r);
                    }
                    return o;
                }
            }
            throw Error("illegal catch attempt");
        },
        delegateYield: function(e, r, n) {
            return this.delegate = {
                iterator: values(e),
                resultName: r,
                nextLoc: n
            }, "next" === this.method && (this.arg = t), y;
        }
    }, e;
}
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = ({}).toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
}
function _wrapRegExp() {
    _wrapRegExp = function(e, r) {
        return new BabelRegExp(e, void 0, r);
    };
    var e = RegExp.prototype, r = new WeakMap();
    function BabelRegExp(e, t, p) {
        var o = RegExp(e, t);
        return r.set(o, p || r.get(e)), _setPrototypeOf(o, BabelRegExp.prototype);
    }
    function buildGroups(e, t) {
        var p = r.get(t);
        return Object.keys(p).reduce(function(r, t) {
            var o = p[t];
            if ("number" == typeof o) r[t] = e[o];
            else {
                for(var i = 0; void 0 === e[o[i]] && i + 1 < o.length;)i++;
                r[t] = e[o[i]];
            }
            return r;
        }, Object.create(null));
    }
    return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function(r) {
        var t = e.exec.call(this, r);
        if (t) {
            t.groups = buildGroups(t, this);
            var p = t.indices;
            p && (p.groups = buildGroups(p, this));
        }
        return t;
    }, BabelRegExp.prototype[Symbol.replace] = function(t, p) {
        if ("string" == typeof p) {
            var o = r.get(this);
            return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)>/g, function(e, r) {
                var t = o[r];
                return "$" + (Array.isArray(t) ? t.join("$") : t);
            }));
        }
        if ("function" == typeof p) {
            var i = this;
            return e[Symbol.replace].call(this, t, function() {
                var e = arguments;
                return "object" != typeof e[e.length - 1] && (e = [].slice.call(e)).push(buildGroups(e, i)), p.apply(this, e);
            });
        }
        return e[Symbol.replace].call(this, t, p);
    }, _wrapRegExp.apply(this, arguments);
}
function asyncToken(instance, getToken) {
    instance.interceptors.request.use(function(config) {
        return getToken().then(function(accessToken) {
            config.headers.set('Authorization', "Bearer ".concat(accessToken));
            return config;
        });
    });
}
function isNode() {
    /**
   * Polyfills of 'process' might set process.browser === true
   *
   * See:
   * https://github.com/webpack/node-libs-browser/blob/master/mock/process.js#L8
   * https://github.com/defunctzombie/node-process/blob/master/browser.js#L156
   **/ return typeof process !== 'undefined' && !("TURBOPACK compile-time value", false);
}
function isReactNative() {
    return ("TURBOPACK compile-time value", "undefined") !== 'undefined' && 'navigator' in window && 'product' in window.navigator && window.navigator.product === 'ReactNative';
}
function getNodeVersion() {
    return process.versions && process.versions.node ? "v".concat(process.versions.node) : process.version;
}
function getWindow() {
    return window;
}
function noop() {
    return undefined;
}
var delay = function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
};
var defaultWait = function defaultWait(attempts) {
    return Math.pow(Math.SQRT2, attempts);
};
function rateLimit(instance) {
    var maxRetry = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
    var _instance$defaults = instance.defaults, _instance$defaults$re = _instance$defaults.responseLogger, responseLogger = _instance$defaults$re === void 0 ? noop : _instance$defaults$re, _instance$defaults$re2 = _instance$defaults.requestLogger, requestLogger = _instance$defaults$re2 === void 0 ? noop : _instance$defaults$re2;
    instance.interceptors.request.use(function(config) {
        requestLogger(config);
        return config;
    }, function(error) {
        requestLogger(error);
        return Promise.reject(error);
    });
    instance.interceptors.response.use(function(response) {
        // we don't need to do anything here
        responseLogger(response);
        return response;
    }, /*#__PURE__*/ function() {
        var _ref = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee(error) {
            var response, config, doneAttempts, retryErrorType, wait;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
                while(1)switch(_context.prev = _context.next){
                    case 0:
                        response = error.response;
                        config = error.config;
                        responseLogger(error);
                        // Do not retry if it is disabled or no request config exists (not an axios error)
                        if (!(!config || !instance.defaults.retryOnError)) {
                            _context.next = 5;
                            break;
                        }
                        return _context.abrupt("return", Promise.reject(error));
                    case 5:
                        // Retried already for max attempts
                        doneAttempts = config.attempts || 1;
                        if (!(doneAttempts > maxRetry)) {
                            _context.next = 9;
                            break;
                        }
                        error.attempts = config.attempts;
                        return _context.abrupt("return", Promise.reject(error));
                    case 9:
                        retryErrorType = null;
                        wait = defaultWait(doneAttempts); // Errors without response did not receive anything from the server
                        if (!response) {
                            retryErrorType = 'Connection';
                        } else if (response.status >= 500 && response.status < 600) {
                            // 5** errors are server related
                            retryErrorType = "Server ".concat(response.status);
                        } else if (response.status === 429) {
                            // 429 errors are exceeded rate limit exceptions
                            retryErrorType = 'Rate limit';
                            // all headers are lowercased by axios https://github.com/mzabriskie/axios/issues/413
                            if (response.headers && error.response.headers['x-contentful-ratelimit-reset']) {
                                wait = response.headers['x-contentful-ratelimit-reset'];
                            }
                        }
                        if (!retryErrorType) {
                            _context.next = 19;
                            break;
                        }
                        // convert to ms and add jitter
                        wait = Math.floor(wait * 1000 + Math.random() * 200 + 500);
                        instance.defaults.logHandler('warning', "".concat(retryErrorType, " error occurred. Waiting for ").concat(wait, " ms before retrying..."));
                        // increase attempts counter
                        config.attempts = doneAttempts + 1;
                        /* Somehow between the interceptor and retrying the request the httpAgent/httpsAgent gets transformed from an Agent-like object
             to a regular object, causing failures on retries after rate limits. Removing these properties here fixes the error, but retry
             requests still use the original http/httpsAgent property */ delete config.httpAgent;
                        delete config.httpsAgent;
                        return _context.abrupt("return", delay(wait).then(function() {
                            return instance(config);
                        }));
                    case 19:
                        return _context.abrupt("return", Promise.reject(error));
                    case 20:
                    case "end":
                        return _context.stop();
                }
            }, _callee);
        }));
        return function(_x) {
            return _ref.apply(this, arguments);
        };
    }());
}
var PERCENTAGE_REGEX = /*#__PURE__*/ _wrapRegExp(/(\d+)(%)/, {
    value: 1
});
function calculateLimit(type) {
    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;
    var limit = max;
    if (PERCENTAGE_REGEX.test(type)) {
        var _type$match;
        var groups = (_type$match = type.match(PERCENTAGE_REGEX)) === null || _type$match === void 0 ? void 0 : _type$match.groups;
        if (groups && groups.value) {
            var percentage = parseInt(groups.value) / 100;
            limit = Math.round(max * percentage);
        }
    }
    return Math.min(30, Math.max(1, limit));
}
function createThrottle(limit, logger) {
    logger('info', "Throttle request to ".concat(limit, "/s"));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$p$2d$throttle$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        limit: limit,
        interval: 1000,
        strict: false
    });
}
var rateLimitThrottle = function(axiosInstance) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
    var _axiosInstance$defaul = axiosInstance.defaults.logHandler, logHandler = _axiosInstance$defaul === void 0 ? noop : _axiosInstance$defaul;
    var limit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$lodash$2e$isstring$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(type) ? calculateLimit(type) : calculateLimit('auto', type);
    var throttle = createThrottle(limit, logHandler);
    var isCalculated = false;
    var requestInterceptorId = axiosInstance.interceptors.request.use(function(config) {
        return throttle(function() {
            return config;
        })();
    }, function(error) {
        return Promise.reject(error);
    });
    var responseInterceptorId = axiosInstance.interceptors.response.use(function(response) {
        if (!isCalculated && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$lodash$2e$isstring$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(type) && (type === 'auto' || PERCENTAGE_REGEX.test(type)) && response.headers && response.headers['x-contentful-ratelimit-second-limit']) {
            var rawLimit = parseInt(response.headers['x-contentful-ratelimit-second-limit']);
            var nextLimit = calculateLimit(type, rawLimit);
            if (nextLimit !== limit) {
                if (requestInterceptorId) {
                    axiosInstance.interceptors.request.eject(requestInterceptorId);
                }
                limit = nextLimit;
                throttle = createThrottle(nextLimit, logHandler);
                requestInterceptorId = axiosInstance.interceptors.request.use(function(config) {
                    return throttle(function() {
                        return config;
                    })();
                }, function(error) {
                    return Promise.reject(error);
                });
            }
            isCalculated = true;
        }
        return response;
    }, function(error) {
        return Promise.reject(error);
    });
    return function() {
        axiosInstance.interceptors.request.eject(requestInterceptorId);
        axiosInstance.interceptors.response.eject(responseInterceptorId);
    };
};
// Matches 'sub.host:port' or 'host:port' and extracts hostname and port
// Also enforces toplevel domain specified, no spaces and no protocol
var HOST_REGEX = /^(?!\w+:\/\/)([^\s:]+\.?[^\s:]+)(?::(\d+))?(?!:)$/;
/**
 * Create pre-configured axios instance
 * @private
 * @param {AxiosStatic} axios - Axios library
 * @param {CreateHttpClientParams} options - Initialization parameters for the HTTP client
 * @return {AxiosInstance} Initialized axios instance
 */ function createHttpClient(axios, options) {
    var defaultConfig = {
        insecure: false,
        retryOnError: true,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        logHandler: function logHandler(level, data) {
            if (level === 'error' && data) {
                var title = [
                    data.name,
                    data.message
                ].filter(function(a) {
                    return a;
                }).join(' - ');
                console.error("[error] ".concat(title));
                console.error(data);
                return;
            }
            console.log("[".concat(level, "] ").concat(data));
        },
        // Passed to axios
        headers: {},
        httpAgent: false,
        httpsAgent: false,
        timeout: 30000,
        throttle: 0,
        basePath: '',
        adapter: undefined,
        maxContentLength: 1073741824,
        // 1GB
        maxBodyLength: 1073741824 // 1GB
    };
    var config = _objectSpread2(_objectSpread2({}, defaultConfig), options);
    if (!config.accessToken) {
        var missingAccessTokenError = new TypeError('Expected parameter accessToken');
        config.logHandler('error', missingAccessTokenError);
        throw missingAccessTokenError;
    }
    // Construct axios baseURL option
    var protocol = config.insecure ? 'http' : 'https';
    var space = config.space ? "".concat(config.space, "/") : '';
    var hostname = config.defaultHostname;
    var port = config.insecure ? 80 : 443;
    if (config.host && HOST_REGEX.test(config.host)) {
        var parsed = config.host.split(':');
        if (parsed.length === 2) {
            var _parsed = _slicedToArray(parsed, 2);
            hostname = _parsed[0];
            port = _parsed[1];
        } else {
            hostname = parsed[0];
        }
    }
    // Ensure that basePath does start but not end with a slash
    if (config.basePath) {
        config.basePath = "/".concat(config.basePath.split('/').filter(Boolean).join('/'));
    }
    var baseURL = options.baseURL || "".concat(protocol, "://").concat(hostname, ":").concat(port).concat(config.basePath, "/spaces/").concat(space);
    if (!config.headers.Authorization && typeof config.accessToken !== 'function') {
        config.headers.Authorization = 'Bearer ' + config.accessToken;
    }
    var axiosOptions = {
        // Axios
        baseURL: baseURL,
        headers: config.headers,
        httpAgent: config.httpAgent,
        httpsAgent: config.httpsAgent,
        proxy: config.proxy,
        timeout: config.timeout,
        adapter: config.adapter,
        maxContentLength: config.maxContentLength,
        maxBodyLength: config.maxBodyLength,
        paramsSerializer: {
            serialize: function serialize(params) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stringify(params);
            }
        },
        // Contentful
        logHandler: config.logHandler,
        responseLogger: config.responseLogger,
        requestLogger: config.requestLogger,
        retryOnError: config.retryOnError
    };
    var instance = axios.create(axiosOptions);
    instance.httpClientParams = options;
    /**
   * Creates a new axios instance with the same default base parameters as the
   * current one, and with any overrides passed to the newParams object
   * This is useful as the SDKs use dependency injection to get the axios library
   * and the version of the library comes from different places depending
   * on whether it's a browser build or a node.js build.
   * @private
   * @param {CreateHttpClientParams} newParams - Initialization parameters for the HTTP client
   * @return {AxiosInstance} Initialized axios instance
   */ instance.cloneWithNewParams = function(newParams) {
        return createHttpClient(axios, _objectSpread2(_objectSpread2({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(options)), newParams));
    };
    /**
   * Apply interceptors.
   * Please note that the order of interceptors is important
   */ if (config.onBeforeRequest) {
        instance.interceptors.request.use(config.onBeforeRequest);
    }
    if (typeof config.accessToken === 'function') {
        asyncToken(instance, config.accessToken);
    }
    if (config.throttle) {
        rateLimitThrottle(instance, config.throttle);
    }
    rateLimit(instance, config.retryLimit);
    if (config.onError) {
        instance.interceptors.response.use(function(response) {
            return response;
        }, config.onError);
    }
    return instance;
}
/* eslint-disable @typescript-eslint/no-explicit-any */ /**
 * Creates request parameters configuration by parsing an existing query object
 * @private
 * @param {Object} query
 * @return {Object} Config object with `params` property, ready to be used in axios
 */ function createRequestConfig(_ref) {
    var query = _ref.query;
    var config = {};
    delete query.resolveLinks;
    config.params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(query);
    return config;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function enforceObjPath(obj, path) {
    if (!(path in obj)) {
        var err = new Error();
        err.name = 'PropertyMissing';
        err.message = "Required property ".concat(path, " missing from:\n\n").concat(JSON.stringify(obj), "\n\n");
        throw err;
    }
    return true;
}
// copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
function deepFreeze(object) {
    var propNames = Object.getOwnPropertyNames(object);
    var _iterator = _createForOfIteratorHelper(propNames), _step;
    try {
        for(_iterator.s(); !(_step = _iterator.n()).done;){
            var name = _step.value;
            var value = object[name];
            if (value && _typeof(value) === 'object') {
                deepFreeze(value);
            }
        }
    } catch (err) {
        _iterator.e(err);
    } finally{
        _iterator.f();
    }
    return Object.freeze(object);
}
function freezeSys(obj) {
    deepFreeze(obj.sys || {});
    return obj;
}
function getBrowserOS() {
    var win = getWindow();
    if (!win) {
        return null;
    }
    var userAgent = win.navigator.userAgent;
    // TODO: platform is deprecated.
    var platform = win.navigator.platform;
    var macosPlatforms = [
        'Macintosh',
        'MacIntel',
        'MacPPC',
        'Mac68K'
    ];
    var windowsPlatforms = [
        'Win32',
        'Win64',
        'Windows',
        'WinCE'
    ];
    var iosPlatforms = [
        'iPhone',
        'iPad',
        'iPod'
    ];
    if (macosPlatforms.indexOf(platform) !== -1) {
        return 'macOS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        return 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        return 'Windows';
    } else if (/Android/.test(userAgent)) {
        return 'Android';
    } else if (/Linux/.test(platform)) {
        return 'Linux';
    }
    return null;
}
function getNodeOS() {
    var platform = process.platform || 'linux';
    var version = process.version || '0.0.0';
    var platformMap = {
        android: 'Android',
        aix: 'Linux',
        darwin: 'macOS',
        freebsd: 'Linux',
        linux: 'Linux',
        openbsd: 'Linux',
        sunos: 'Linux',
        win32: 'Windows'
    };
    if (platform in platformMap) {
        return "".concat(platformMap[platform] || 'Linux', "/").concat(version);
    }
    return null;
}
function getUserAgentHeader(sdk, application, integration, feature) {
    var headerParts = [];
    if (application) {
        headerParts.push("app ".concat(application));
    }
    if (integration) {
        headerParts.push("integration ".concat(integration));
    }
    if (feature) {
        headerParts.push('feature ' + feature);
    }
    headerParts.push("sdk ".concat(sdk));
    var platform = null;
    try {
        if (isReactNative()) //TURBOPACK unreachable
        ;
        else if (isNode()) {
            platform = getNodeOS();
            headerParts.push("platform node.js/".concat(getNodeVersion()));
        } else {
            platform = getBrowserOS();
            headerParts.push('platform browser');
        }
    } catch (e) {
        platform = null;
    }
    if (platform) {
        headerParts.push("os ".concat(platform));
    }
    return "".concat(headerParts.filter(function(item) {
        return item !== '';
    }).join('; '), ";");
}
/**
 * Mixes in a method to return just a plain object with no additional methods
 * @private
 * @param data - Any plain JSON response returned from the API
 * @return Enhanced object with toPlainObject method
 */ function toPlainObject(data) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return Object.defineProperty(data, 'toPlainObject', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function value() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this);
        }
    });
}
/**
 * Handles errors received from the server. Parses the error into a more useful
 * format, places it in an exception and throws it.
 * See https://www.contentful.com/developers/docs/references/errors/
 * for more details on the data received on the errorResponse.data property
 * and the expected error codes.
 * @private
 */ function errorHandler(errorResponse) {
    var config = errorResponse.config, response = errorResponse.response;
    var errorName;
    // Obscure the Management token
    if (config && config.headers && config.headers['Authorization']) {
        var token = "...".concat(config.headers['Authorization'].toString().substr(-5));
        config.headers['Authorization'] = "Bearer ".concat(token);
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$lodash$2e$isplainobject$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(response) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$lodash$2e$isplainobject$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(config)) {
        throw errorResponse;
    }
    var data = response === null || response === void 0 ? void 0 : response.data;
    var errorData = {
        status: response === null || response === void 0 ? void 0 : response.status,
        statusText: response === null || response === void 0 ? void 0 : response.statusText,
        message: '',
        details: {}
    };
    if (config && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$lodash$2e$isplainobject$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(config)) {
        errorData.request = {
            url: config.url,
            headers: config.headers,
            method: config.method,
            payloadData: config.data
        };
    }
    if (data && _typeof(data) === 'object') {
        var _data$sys;
        if ('requestId' in data) {
            errorData.requestId = data.requestId || 'UNKNOWN';
        }
        if ('message' in data) {
            errorData.message = data.message || '';
        }
        if ('details' in data) {
            errorData.details = data.details || {};
        }
        errorName = (_data$sys = data.sys) === null || _data$sys === void 0 ? void 0 : _data$sys.id;
    }
    var error = new Error();
    error.name = errorName && errorName !== 'Unknown' ? errorName : "".concat(response === null || response === void 0 ? void 0 : response.status, " ").concat(response === null || response === void 0 ? void 0 : response.statusText);
    try {
        error.message = JSON.stringify(errorData, null, '  ');
    } catch (_unused) {
        var _errorData$message;
        error.message = (_errorData$message = errorData === null || errorData === void 0 ? void 0 : errorData.message) !== null && _errorData$message !== void 0 ? _errorData$message : '';
    }
    throw error;
}
;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/space.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrapSpace",
    ()=>wrapSpace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful-sdk-core/dist/index.es-modules.js [app-ssr] (ecmascript)");
;
function wrapSpace(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["freezeSys"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPlainObject"])(data));
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/mixins/stringify-safe.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>mixinStringifySafe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$json$2d$stringify$2d$safe$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/json-stringify-safe/stringify.js [app-ssr] (ecmascript)");
;
function mixinStringifySafe(data) {
    return Object.defineProperty(data, 'stringifySafe', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function() {
            let serializer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            let indent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$json$2d$stringify$2d$safe$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this, serializer, indent, (key, value)=>{
                return {
                    sys: {
                        type: 'Link',
                        linkType: 'Entry',
                        id: value.sys.id,
                        circular: true
                    }
                };
            });
        }
    });
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/entry.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrapEntry",
    ()=>wrapEntry,
    "wrapEntryCollection",
    ()=>wrapEntryCollection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/fast-copy/dist/fast-copy.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful-sdk-core/dist/index.es-modules.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$mixins$2f$stringify$2d$safe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/mixins/stringify-safe.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$resolve$2d$response$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful-resolve-response/dist/esm/index.js [app-ssr] (ecmascript)");
;
;
;
;
function wrapEntry(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["freezeSys"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPlainObject"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(data)));
}
function wrapEntryCollection(data, _ref) {
    let { resolveLinks, removeUnresolved } = _ref;
    const wrappedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$mixins$2f$stringify$2d$safe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPlainObject"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(data)));
    if (resolveLinks) {
        wrappedData.items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$resolve$2d$response$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(wrappedData, {
            removeUnresolved,
            itemEntryPoints: [
                'fields'
            ]
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["freezeSys"])(wrappedData);
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/asset.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrapAsset",
    ()=>wrapAsset,
    "wrapAssetCollection",
    ()=>wrapAssetCollection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/fast-copy/dist/fast-copy.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful-sdk-core/dist/index.es-modules.js [app-ssr] (ecmascript)");
;
;
function wrapAsset(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["freezeSys"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPlainObject"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(data)));
}
function wrapAssetCollection(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["freezeSys"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPlainObject"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(data)));
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/asset-key.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrapAssetKey",
    ()=>wrapAssetKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/fast-copy/dist/fast-copy.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful-sdk-core/dist/index.es-modules.js [app-ssr] (ecmascript)");
;
;
function wrapAssetKey(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["freezeSys"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPlainObject"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(data)));
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/content-type.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrapContentType",
    ()=>wrapContentType,
    "wrapContentTypeCollection",
    ()=>wrapContentTypeCollection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/fast-copy/dist/fast-copy.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful-sdk-core/dist/index.es-modules.js [app-ssr] (ecmascript)");
;
;
function wrapContentType(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["freezeSys"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPlainObject"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(data)));
}
function wrapContentTypeCollection(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["freezeSys"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPlainObject"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(data)));
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/locale.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrapLocale",
    ()=>wrapLocale,
    "wrapLocaleCollection",
    ()=>wrapLocaleCollection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/fast-copy/dist/fast-copy.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful-sdk-core/dist/index.es-modules.js [app-ssr] (ecmascript)");
;
;
function wrapLocale(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["freezeSys"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPlainObject"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(data)));
}
function wrapLocaleCollection(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["freezeSys"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPlainObject"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(data)));
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/tag.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrapTag",
    ()=>wrapTag,
    "wrapTagCollection",
    ()=>wrapTagCollection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/fast-copy/dist/fast-copy.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful-sdk-core/dist/index.es-modules.js [app-ssr] (ecmascript)");
;
;
function wrapTag(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["freezeSys"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPlainObject"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(data)));
}
function wrapTagCollection(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["freezeSys"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPlainObject"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(data)));
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$space$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/space.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$entry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/entry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$asset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/asset.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$asset$2d$key$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/asset-key.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$content$2d$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/content-type.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$locale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/locale.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/tag.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const __TURBOPACK__default__export__ = {
    space: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$space$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__,
    entry: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$entry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__,
    asset: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$asset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__,
    assetKey: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$asset$2d$key$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__,
    contentType: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$content$2d$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__,
    locale: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$locale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__,
    tag: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/paged-sync.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>pagedSync
]);
/**
 * See <a href="https://www.contentful.com/developers/docs/concepts/sync/">Synchronization</a> for more information.
 * @namespace Sync
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful-sdk-core/dist/index.es-modules.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$resolve$2d$response$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful-resolve-response/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$mixins$2f$stringify$2d$safe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/mixins/stringify-safe.js [app-ssr] (ecmascript)");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
;
;
;
async function pagedSync(http, query) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (!query || !query.initial && !query.nextSyncToken && !query.nextPageToken) {
        throw new Error('Please provide one of `initial`, `nextSyncToken` or `nextPageToken` parameters for syncing');
    }
    if (query && query.content_type && !query.type) {
        query.type = 'Entry';
    } else if (query && query.content_type && query.type && query.type !== 'Entry') {
        throw new Error('When using the `content_type` filter your `type` parameter cannot be different from `Entry`.');
    }
    const defaultOptions = {
        resolveLinks: true,
        removeUnresolved: false,
        paginate: true
    };
    const { resolveLinks, removeUnresolved, paginate } = _objectSpread(_objectSpread({}, defaultOptions), options);
    const syncOptions = {
        paginate
    };
    const response = await getSyncPage(http, [], query, syncOptions);
    // clones response.items used in includes because we don't want these to be mutated
    if (resolveLinks) {
        response.items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$resolve$2d$response$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(response, {
            removeUnresolved,
            itemEntryPoints: [
                'fields'
            ]
        });
    }
    // maps response items again after getters are attached
    const mappedResponseItems = mapResponseItems(response.items);
    if (response.nextSyncToken) {
        mappedResponseItems.nextSyncToken = response.nextSyncToken;
    }
    if (response.nextPageToken) {
        mappedResponseItems.nextPageToken = response.nextPageToken;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["freezeSys"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$mixins$2f$stringify$2d$safe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPlainObject"])(mappedResponseItems)));
}
/**
 * @private
 * @param {Array<Entities.Entry|Entities.Array|Sync.DeletedEntry|Sync.DeletedAsset>} items
 * @return {Object} Entities mapped to an object for each entity type
 */ function mapResponseItems(items) {
    const reducer = (type)=>{
        return (accumulated, item)=>{
            if (item.sys.type === type) {
                accumulated.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPlainObject"])(item));
            }
            return accumulated;
        };
    };
    return {
        entries: items.reduce(reducer('Entry'), []),
        assets: items.reduce(reducer('Asset'), []),
        deletedEntries: items.reduce(reducer('DeletedEntry'), []),
        deletedAssets: items.reduce(reducer('DeletedAsset'), [])
    };
}
/**
 * If the response contains a nextPageUrl, extracts the sync token to get the
 * next page and calls itself again with that token.
 * Otherwise, if the response contains a nextSyncUrl, extracts the sync token
 * and returns it.
 * On each call of this function, any retrieved items are collected in the
 * supplied items array, which gets returned in the end
 * @private
 * @param {Object} http
 * @param {Array<Entities.Entry|Entities.Array|Sync.DeletedEntry|Sync.DeletedAsset>} items
 * @param {Object} query
 * @param {Object} options - Sync page options object
 * @param {boolean} [options.paginate = true] - If further sync pages should automatically be crawled
 * @return {Promise<{items: Array, nextSyncToken: string}>}
 */ async function getSyncPage(http, items, query, _ref) {
    let { paginate } = _ref;
    if (query.nextSyncToken) {
        query.sync_token = query.nextSyncToken;
        delete query.nextSyncToken;
    }
    if (query.nextPageToken) {
        query.sync_token = query.nextPageToken;
        delete query.nextPageToken;
    }
    if (query.sync_token) {
        delete query.initial;
        delete query.type;
        delete query.content_type;
        delete query.limit;
    }
    const response = await http.get('sync', (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRequestConfig"])({
        query: query
    }));
    const data = response.data || {};
    items = items.concat(data.items || []);
    if (data.nextPageUrl) {
        if (paginate) {
            delete query.initial;
            query.sync_token = getToken(data.nextPageUrl);
            return getSyncPage(http, items, query, {
                paginate
            });
        }
        return {
            items: items,
            nextPageToken: getToken(data.nextPageUrl)
        };
    } else if (data.nextSyncUrl) {
        return {
            items: items,
            nextSyncToken: getToken(data.nextSyncUrl)
        };
    } else {
        return {
            items: []
        };
    }
}
/**
 * Extracts token out of an url
 * @private
 */ function getToken(url) {
    const urlParts = url.split('?');
    return urlParts.length > 0 ? urlParts[1].replace('sync_token=', '') : '';
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/utils/normalize-select.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>normalizeSelect
]);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function normalizeSelect(query) {
    if (!query.select) {
        return query;
    }
    // The selection of fields for the query is limited
    // Get the different parts that are listed for selection
    const allSelects = Array.isArray(query.select) ? query.select : query.select.split(',').map((q)=>q.trim());
    // Move the parts into a set for easy access and deduplication
    const selectedSet = new Set(allSelects);
    // If we already select all of `sys` we can just return
    // since we're anyway fetching everything that is needed
    if (selectedSet.has('sys')) {
        return query;
    }
    // We don't select `sys` so we need to ensure the minimum set
    selectedSet.add('sys.id');
    selectedSet.add('sys.type');
    // Reassign the normalized sys properties
    return _objectSpread(_objectSpread({}, query), {}, {
        select: [
            ...selectedSet
        ].join(',')
    });
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/utils/validate-timestamp.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ValidationError",
    ()=>ValidationError,
    "default",
    ()=>validateTimestamp
]);
class ValidationError extends Error {
    constructor(name, message){
        super(`Invalid "${name}" provided, ` + message);
        this.name = 'ValidationError';
    }
}
function validateTimestamp(name, timestamp, options) {
    options = options || {};
    if (typeof timestamp !== 'number') {
        throw new ValidationError(name, `only numeric values are allowed for timestamps, provided type was "${typeof timestamp}"`);
    }
    if (options.maximum && timestamp > options.maximum) {
        throw new ValidationError(name, `value (${timestamp}) cannot be further in the future than expected maximum (${options.maximum})`);
    }
    if (options.now && timestamp < options.now) {
        throw new ValidationError(name, `value (${timestamp}) cannot be in the past, current time was ${options.now}`);
    }
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/create-contentful-api.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createContentfulApi
]);
/**
 * Contentful Delivery API Client. Contains methods which allow access to the
 * different kinds of entities present in Contentful (Entries, Assets, etc).
 * @namespace ContentfulClientAPI
 * @see Entities
 */ /**
 * The different kinds of top level entities you can find in Contentful
 * @namespace Entities
 */ /**
 * System metadata. See <a href="https://www.contentful.com/developers/docs/references/content-delivery-api/#/introduction/common-resource-attributes">Common Resource Attributes</a> for more details.
 * @memberof Entities
 * @typedef Sys
 * @prop {string} type
 * @prop {string} id
 * @prop {Entities.Link} space
 * @prop {string} createdAt
 * @prop {string} updatedAt
 * @prop {number} revision
 */ /**
 * Link to another entity. See <a href="https://www.contentful.com/developers/docs/concepts/links/">Links</a> for more details.
 * @memberof Entities
 * @typedef Link
 * @prop {string} type - type of this entity. Always link.
 * @prop {string} id
 * @prop {string} linkType - type of this link. If defined, either Entry or Asset
 */ /**
 * Link to another entity in a different space.
 * @memberof Entities
 * @typedef ResourceLink
 * @prop {string} type - type of this entity. Always ResourceLink.
 * @prop {string} urn
 * @prop {string} linkType - type of this link. Always Contentful:Entry
 */ /**
 * @memberof ContentfulClientAPI
 * @typedef {Object} ClientAPI
 * @prop {function} getSpace
 * @prop {function} getContentType
 * @prop {function} getTag
 * @prop {function} getTags
 * @prop {function} getContentTypes
 * @prop {function} getEntry
 * @prop {function} getEntries
 * @prop {function} getAsset
 * @prop {function} getAssets
 * @prop {function} createAssetKey
 * @prop {function} parseEntries
 * @prop {function} sync
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful-sdk-core/dist/index.es-modules.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$paged$2d$sync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/paged-sync.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/utils/normalize-select.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$utils$2f$validate$2d$timestamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/utils/validate-timestamp.js [app-ssr] (ecmascript)");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
;
;
;
;
;
const ASSET_KEY_MAX_LIFETIME = 48 * 60 * 60;
function createContentfulApi(_ref) {
    let { http, getGlobalOptions } = _ref;
    const { wrapSpace } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].space;
    const { wrapContentType, wrapContentTypeCollection } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].contentType;
    const { wrapEntry, wrapEntryCollection } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].entry;
    const { wrapAsset, wrapAssetCollection } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].asset;
    const { wrapTag, wrapTagCollection } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].tag;
    const { wrapAssetKey } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].assetKey;
    const { wrapLocaleCollection } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].locale;
    const notFoundError = (id)=>{
        const error = new Error('The resource could not be found.');
        error.sys = {
            type: 'Error',
            id: 'NotFound'
        };
        error.details = {
            type: 'Entry',
            id: id,
            environment: getGlobalOptions().environment,
            space: getGlobalOptions().space
        };
        return error;
    };
    /**
   * Gets the Space which the client is currently configured to use
   * @memberof ContentfulClientAPI
   * @return {Promise<Entities.Space>} Promise for a Space
   * @example
   * const contentful = require('contentful')
   *
   * const client = contentful.createClient({
   *   space: '<space_id>',
   *   accessToken: '<content_delivery_api_key>'
   * })
   * // returns the space object with the above <space-id>
   * const space = await client.getSpace()
   * console.log(space)
   */ async function getSpace() {
        switchToSpace(http);
        try {
            const response = await http.get('/');
            return wrapSpace(response.data);
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorHandler"])(error);
        }
    }
    /**
   * Gets a Content Type
   * @memberof ContentfulClientAPI
   * @param  {string} id
   * @return {Promise<Entities.ContentType>} Promise for a Content Type
   * @example
   * const contentful = require('contentful')
   *
   * const client = contentful.createClient({
   *   space: '<space_id>',
   *   accessToken: '<content_delivery_api_key>'
   * })
   *
   * const contentType = await client.getContentType('<content_type_id>')
   * console.log(contentType)
   */ async function getContentType(id) {
        switchToEnvironment(http);
        try {
            const response = await http.get(`content_types/${id}`);
            return wrapContentType(response.data);
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorHandler"])(error);
        }
    }
    /**
   * Gets a collection of Content Types
   * @memberof ContentfulClientAPI
   * @param  {Object=} query - Object with search parameters. Check the <a href="https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/#retrieving-entries-with-search-parameters">JS SDK tutorial</a> and the <a href="https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters">REST API reference</a> for more details.
   * @return {Promise<Entities.ContentTypeCollection>} Promise for a collection of Content Types
   * @example
   * const contentful = require('contentful')
   *
   * const client = contentful.createClient({
   *   space: '<space_id>',
   *   accessToken: '<content_delivery_api_key>'
   * })
   *
   * const response = await client.getContentTypes()
   * console.log(response.items)
   */ async function getContentTypes() {
        let query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        switchToEnvironment(http);
        try {
            const response = await http.get('content_types', (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRequestConfig"])({
                query: query
            }));
            return wrapContentTypeCollection(response.data);
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorHandler"])(error);
        }
    }
    /**
   * Gets an Entry
   * @memberof ContentfulClientAPI
   * @param  {string} id
   * @param  {Object=} query - Object with search parameters. In this method it's only useful for `locale`.
   * @return {Promise<Entities.Entry>} Promise for an Entry
   * @example
   * const contentful = require('contentful')
   *
   * const client = contentful.createClient({
   *   space: '<space_id>',
   *   accessToken: '<content_delivery_api_key>'
   * })
   *
   * const entry = await client.getEntry('<entry_id>')
   * console.log(entry)
   */ async function getEntry(id) {
        let query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (!id) {
            throw notFoundError(id);
        }
        try {
            const response = await this.getEntries(_objectSpread({
                'sys.id': id
            }, query));
            if (response.items.length > 0) {
                return wrapEntry(response.items[0]);
            } else {
                throw notFoundError(id);
            }
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorHandler"])(error);
        }
    }
    /**
   * Gets a collection of Entries
   * @memberof ContentfulClientAPI
   * @param  {Object=} query - Object with search parameters. Check the <a href="https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/#retrieving-entries-with-search-parameters">JS SDK tutorial</a> and the <a href="https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters">REST API reference</a> for more details.
   * @return {Promise<Entities.EntryCollection>} Promise for a collection of Entries
   * @example
   * const contentful = require('contentful')
   *
   * const client = contentful.createClient({
   *   space: '<space_id>',
   *   accessToken: '<content_delivery_api_key>'
   * })
   *
   * const response = await client.getEntries()
   * console.log(response.items)
   */ async function getEntries() {
        let query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        switchToEnvironment(http);
        const { resolveLinks, removeUnresolved } = getGlobalOptions(query);
        query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(query);
        try {
            const response = await http.get('entries', (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRequestConfig"])({
                query: query
            }));
            return wrapEntryCollection(response.data, {
                resolveLinks,
                removeUnresolved
            });
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorHandler"])(error);
        }
    }
    /**
   * Gets an Asset
   * @memberof ContentfulClientAPI
   * @param  {string} id
   * @param  {Object=} query - Object with search parameters. In this method it's only useful for `locale`.
   * @return {Promise<Entities.Asset>} Promise for an Asset
   * @example
   * const contentful = require('contentful')
   *
   * const client = contentful.createClient({
   *   space: '<space_id>',
   *   accessToken: '<content_delivery_api_key>'
   * })
   *
   * const asset = await client.getAsset('<asset_id>')
   * console.log(asset)
   */ async function getAsset(id) {
        let query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        switchToEnvironment(http);
        query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(query);
        try {
            const response = await http.get(`assets/${id}`, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRequestConfig"])({
                query: query
            }));
            return wrapAsset(response.data);
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorHandler"])(error);
        }
    }
    /**
   * Gets a collection of Assets
   * @memberof ContentfulClientAPI
   * @param  {Object=} query - Object with search parameters. Check the <a href="https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/#retrieving-entries-with-search-parameters">JS SDK tutorial</a> and the <a href="https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters">REST API reference</a> for more details.
   * @return {Promise<Entities.AssetCollection>} Promise for a collection of Assets
   * @example
   * const contentful = require('contentful')
   *
   * const client = contentful.createClient({
   *   space: '<space_id>',
   *   accessToken: '<content_delivery_api_key>'
   * })
   *
   * const response = await client.getAssets()
   * console.log(response.items)
   */ async function getAssets() {
        let query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        switchToEnvironment(http);
        query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(query);
        try {
            const response = await http.get('assets', (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRequestConfig"])({
                query: query
            }));
            return wrapAssetCollection(response.data);
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorHandler"])(error);
        }
    }
    /**
   * Gets a Tag
   * @memberof ContentfulClientAPI
   * @param  {string} id
   * @return {Promise<Entities.Tag>} Promise for a Tag
   * @example
   * const contentful = require('contentful')
   *
   * const client = contentful.createClient({
   *   space: '<space_id>',
   *   accessToken: '<content_delivery_api_key>'
   * })
   *
   * const tag = await client.getTag('<asset_id>')
   * console.log(tag)
   */ async function getTag(id) {
        switchToEnvironment(http);
        try {
            const response = await http.get(`tags/${id}`);
            return wrapTag(response.data);
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorHandler"])(error);
        }
    }
    /**
   * Gets a collection of Tags
   * @memberof ContentfulClientAPI
   * @param  {Object=} query - Object with search parameters.
   * @return {Promise<Entities.TagCollection>} Promise for a collection of Tags
   * @example
   * const contentful = require('contentful')
   *
   * const client = contentful.createClient({
   *   space: '<space_id>',
   *   accessToken: '<content_delivery_api_key>'
   * })
   *
   * const response = await client.getTags()
   * console.log(response.items)
   */ async function getTags() {
        let query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        switchToEnvironment(http);
        query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(query);
        try {
            const response = await http.get('tags', (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRequestConfig"])({
                query: query
            }));
            return wrapTagCollection(response.data);
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorHandler"])(error);
        }
    }
    /**
   * Creates an asset key for signing asset URLs (Embargoed Assets)
   * @memberof ContentfulClientAPI
   * @param {number} expiresAt - UNIX timestamp in the future, maximum of 48h from now
   * @return {Promise<Entities.AssetKey>} Promise for an AssetKey
   * @example
   * const contentful = require('contentful')
   *
   * const client = contentful.createClient({
   *   space: '<space_id>',
   *   accessToken: '<content_delivery_api_key>'
   * })
   *
   * const assetKey = await client.getAssetKey(<UNIX timestamp>)
   * console.log(assetKey)
   */ async function createAssetKey(expiresAt) {
        switchToEnvironment(http);
        try {
            const now = Math.floor(Date.now() / 1000);
            const currentMaxLifetime = now + ASSET_KEY_MAX_LIFETIME;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$utils$2f$validate$2d$timestamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('expiresAt', expiresAt, {
                maximum: currentMaxLifetime,
                now
            });
            const params = {
                expiresAt
            };
            const response = await http.post('asset_keys', params);
            return wrapAssetKey(response.data);
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorHandler"])(error);
        }
    }
    /**
   * Gets a collection of Locale
   * @memberof ContentfulClientAPI
   * @param  {Object=} query - Object with search parameters. Check the <a href="https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/#retrieving-entries-with-search-parameters">JS SDK tutorial</a> and the <a href="https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters">REST API reference</a> for more details.
   * @return {Promise<Entities.LocaleCollection>} Promise for a collection of Locale
   * @example
   * const contentful = require('contentful')
   *
   * const client = contentful.createClient({
   *   space: '<space_id>',
   *   accessToken: '<content_delivery_api_key>'
   * })
   *
   * const response = await client.getLocales()
   * console.log(response.items)
   */ async function getLocales() {
        let query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        switchToEnvironment(http);
        try {
            const response = await http.get('locales', (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRequestConfig"])({
                query: query
            }));
            return wrapLocaleCollection(response.data);
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorHandler"])(error);
        }
    }
    /**
   * Synchronizes either all the content or only new content since last sync
   * See <a href="https://www.contentful.com/developers/docs/concepts/sync/">Synchronization</a> for more information.
   * <strong> Important note: </strong> The the sync api endpoint does not support include or link resolution.
   * However contentful.js is doing link resolution client side if you only make an initial sync.
   * For the delta sync (using nextSyncToken) it is not possible since the sdk wont have access to all the data to make such an operation.
   * @memberof ContentfulClientAPI
   * @param  {Object} query - Query object for the sync call. One of initial or nextSyncToken always needs to be specified, but not both.
   * @param  {boolean?} query.initial - Indicates if this is the first sync. Use it if you don't have a sync token.
   * @param  {string?} query.nextSyncToken - The token you got the last time you used this method. Ensures you only get changed content.
   * @param  {string=} query.type - Filter by this type (all (default), Entry, Asset, Deletion, DeletedAsset or DeletedEntry)
   * @param  {string=} query.content_type - Filter by this content type id
   * @param  {boolean=} query.resolveLinks - When true, links to other Entries or Assets are resolved. Default: true.
   * @param  {Object} options
   * @param  {boolean=} [options.paginate = true] - Set to false to disable pagination
   * @return {Promise<Sync.SyncCollection>} Promise for the collection resulting of a sync operation
   * @example
   * const contentful = require('contentful')
   *
   * const client = contentful.createClient({
   *   space: '<space_id>',
   *   accessToken: '<content_delivery_api_key>'
   * })
   *
   * const response = await client.sync({
   *   initial: true
   * })
   * console.log({
   *   entries: response.entries,
   *   assets: response.assets,
   *   nextSyncToken: response.nextSyncToken
   * })
   */ async function sync() {
        let query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            paginate: true
        };
        const { resolveLinks, removeUnresolved } = getGlobalOptions(query);
        switchToEnvironment(http);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$paged$2d$sync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(http, query, _objectSpread({
            resolveLinks,
            removeUnresolved
        }, options));
    }
    /**
  * Parse raw json data into collection of entry objects.Links will be resolved also
  * @memberof ContentfulClientAPI
  * @param {Object} raw json data
  * @example
  * let data = {items: [
  *    {
  *    sys: {type: 'Entry', locale: 'en-US'},
  *    fields: {
  *      animal: {sys: {type: 'Link', linkType: 'Animal', id: 'oink'}},
  *      anotheranimal: {sys: {type: 'Link', linkType: 'Animal', id: 'middle-parrot'}}
  *    }
  *  }
  * ],
  * includes: {
  *  Animal: [
  *    {
  *      sys: {type: 'Animal', id: 'oink', locale: 'en-US'},
  *      fields: {
  *        name: 'Pig',
  *        friend: {sys: {type: 'Link', linkType: 'Animal', id: 'groundhog'}}
  *      }
  *    }
  *   ]
  *  }
  * }
  * console.log( data.items[0].fields.foo ); // undefined
  * let parsedData = client.parseEntries(data);
  * console.log( parsedData.items[0].fields.foo ); // foo
  */ function parseEntries(data) {
        const { resolveLinks, removeUnresolved } = getGlobalOptions({});
        return wrapEntryCollection(data, {
            resolveLinks,
            removeUnresolved
        });
    }
    /*
   * Switches BaseURL to use /environments path
   * */ function switchToEnvironment(http) {
        http.defaults.baseURL = getGlobalOptions().environmentBaseUrl;
    }
    /*
   * Switches BaseURL to use /spaces path
   * */ function switchToSpace(http) {
        http.defaults.baseURL = getGlobalOptions().spaceBaseUrl;
    }
    return {
        getSpace,
        getContentType,
        getContentTypes,
        getEntry,
        getEntries,
        getAsset,
        getAssets,
        getTag,
        getTags,
        createAssetKey,
        getLocales,
        parseEntries,
        sync
    };
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/create-global-options.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Link resolution can be set globally, or it can be turned off for the methods
 * which make use of it. The local setting always overrides the global setting.
 * @private
 * @param {boolean} globalSetting - Global library setting for link resolution
 * @returns {function} Link resolver method preconfigured with global setting
 */ __turbopack_context__.s([
    "default",
    ()=>createGlobalOptions
]);
function createGlobalOptions(globalSettings) {
    /**
   * Link resolver method
   * @param {Object} query - regular query object used for collection endpoints
   */ return function getGlobalOptions(query) {
        return Object.assign({}, globalSettings, query);
    };
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/contentful.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
/**
 * Contentful Delivery API SDK. Allows you to create instances of a client
 * with access to the Contentful Content Delivery API.
 * @namespace contentful
 * @see ContentfulClientAPI
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful-sdk-core/dist/index.es-modules.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$create$2d$contentful$2d$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/create-contentful-api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$create$2d$global$2d$options$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/create-global-options.js [app-ssr] (ecmascript)");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
;
;
;
;
function createClient(params) {
    if (!params.accessToken) {
        throw new TypeError('Expected parameter accessToken');
    }
    if (!params.space) {
        throw new TypeError('Expected parameter space');
    }
    const defaultConfig = {
        resolveLinks: true,
        removeUnresolved: false,
        defaultHostname: 'cdn.contentful.com',
        environment: 'master'
    };
    const config = _objectSpread(_objectSpread({}, defaultConfig), params);
    const userAgentHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserAgentHeader"])(`contentful.js/${"9.3.7"}`, config.application, config.integration);
    config.headers = _objectSpread(_objectSpread({}, config.headers), {}, {
        'Content-Type': 'application/vnd.contentful.delivery.v1+json',
        'X-Contentful-User-Agent': userAgentHeader
    });
    const http = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHttpClient"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], config);
    const getGlobalOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$create$2d$global$2d$options$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        resolveLinks: config.resolveLinks,
        environment: config.environment,
        removeUnresolved: config.removeUnresolved,
        spaceBaseUrl: http.defaults.baseURL,
        environmentBaseUrl: `${http.defaults.baseURL}environments/${config.environment}`
    });
    // Append environment to baseURL
    http.defaults.baseURL = getGlobalOptions().environmentBaseUrl;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$create$2d$contentful$2d$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        http,
        getGlobalOptions
    });
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/json-stringify-safe/stringify.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

exports = module.exports = stringify;
exports.getSerialize = serializer;
function stringify(obj, replacer, spaces, cycleReplacer) {
    return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces);
}
function serializer(replacer, cycleReplacer) {
    var stack = [], keys = [];
    if (cycleReplacer == null) cycleReplacer = function(key, value) {
        if (stack[0] === value) return "[Circular ~]";
        return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
    };
    return function(key, value) {
        if (stack.length > 0) {
            var thisPos = stack.indexOf(this);
            ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
            ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
            if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value);
        } else stack.push(value);
        return replacer == null ? value : replacer.call(this, key, value);
    };
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful-resolve-response/dist/esm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$resolve$2d$response$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful-resolve-response/node_modules/fast-copy/dist/esm/index.mjs [app-ssr] (ecmascript)");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var _slicedToArray = function() {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i["return"]) _i["return"]();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    return function(arr, i) {
        if (Array.isArray(arr)) {
            return arr;
        } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
        } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
    };
}();
function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    } else {
        return Array.from(arr);
    }
}
;
var UNRESOLVED_LINK = {}; // unique object to avoid polyfill bloat using Symbol()
/**
 * isLink Function
 * Checks if the object has sys.type "Link"
 * @param object
 */ var isLink = function isLink(object) {
    return object && object.sys && object.sys.type === 'Link';
};
/**
 * isResourceLink Function
 * Checks if the object has sys.type "ResourceLink"
 * @param object
 */ var isResourceLink = function isResourceLink(object) {
    return object && object.sys && object.sys.type === 'ResourceLink';
};
/**
 * Creates a key with spaceId and a key without for entityMap
 *
 * @param {*} sys
 * @param {String} sys.type
 * @param {String} sys.id
 * @param {*} sys.space
 * @param {*} sys.space.sys
 * @param {String} sys.space.id
 * @return {string[]}
 */ var makeEntityMapKeys = function makeEntityMapKeys(sys) {
    if (sys.space && sys.environment) {
        return [
            sys.type + '!' + sys.id,
            sys.space.sys.id + '!' + sys.environment.sys.id + '!' + sys.type + '!' + sys.id
        ];
    }
    return [
        sys.type + '!' + sys.id
    ];
};
/**
 * Looks up in entityMap
 *
 * @param entityMap
 * @param {*} linkData
 * @param {String} linkData.type
 * @param {String} linkData.linkType
 * @param {String} linkData.id
 * @param {String} linkData.urn
 * @return {String}
 */ var lookupInEntityMap = function lookupInEntityMap(entityMap, linkData) {
    var entryId = linkData.entryId, linkType = linkData.linkType, spaceId = linkData.spaceId, environmentId = linkData.environmentId;
    if (spaceId && environmentId) {
        return entityMap.get(spaceId + '!' + environmentId + '!' + linkType + '!' + entryId);
    }
    return entityMap.get(linkType + '!' + entryId);
};
var getIdsFromUrn = function getIdsFromUrn(urn) {
    var regExp = /.*:spaces\/([^/]+)(?:\/environments\/([^/]+))?\/entries\/([^/]+)$/;
    if (!regExp.test(urn)) {
        return undefined;
    }
    // eslint-disable-next-line no-unused-vars
    var _urn$match = urn.match(regExp), _urn$match2 = _slicedToArray(_urn$match, 4), _ = _urn$match2[0], spaceId = _urn$match2[1], _urn$match2$ = _urn$match2[2], environmentId = _urn$match2$ === undefined ? 'master' : _urn$match2$, entryId = _urn$match2[3];
    return {
        spaceId: spaceId,
        environmentId: environmentId,
        entryId: entryId
    };
};
/**
 * getResolvedLink Function
 *
 * @param entityMap
 * @param link
 * @return {undefined}
 */ var getResolvedLink = function getResolvedLink(entityMap, link) {
    var _link$sys = link.sys, type = _link$sys.type, linkType = _link$sys.linkType;
    if (type === 'ResourceLink') {
        if (!linkType.startsWith('Contentful:')) {
            return link;
        }
        var urn = link.sys.urn;
        var _getIdsFromUrn = getIdsFromUrn(urn), spaceId = _getIdsFromUrn.spaceId, environmentId = _getIdsFromUrn.environmentId, _entryId = _getIdsFromUrn.entryId;
        var extractedLinkType = linkType.split(':')[1];
        return lookupInEntityMap(entityMap, {
            linkType: extractedLinkType,
            entryId: _entryId,
            spaceId: spaceId,
            environmentId: environmentId
        }) || UNRESOLVED_LINK;
    }
    var entryId = link.sys.id;
    return lookupInEntityMap(entityMap, {
        linkType: linkType,
        entryId: entryId
    }) || UNRESOLVED_LINK;
};
/**
 * cleanUpLinks Function
 * - Removes unresolvable links from Arrays and Objects
 *
 * @param {Object[]|Object} input
 */ var cleanUpLinks = function cleanUpLinks(input) {
    if (Array.isArray(input)) {
        return input.filter(function(val) {
            return val !== UNRESOLVED_LINK;
        });
    }
    for(var key in input){
        if (input[key] === UNRESOLVED_LINK) {
            delete input[key];
        }
    }
    return input;
};
/**
 * walkMutate Function
 * @param input
 * @param predicate
 * @param mutator
 * @param removeUnresolved
 * @return {*}
 */ var walkMutate = function walkMutate(input, predicate, mutator, removeUnresolved) {
    if (predicate(input)) {
        return mutator(input);
    }
    if (input && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object') {
        for(var key in input){
            // eslint-disable-next-line no-prototype-builtins
            if (input.hasOwnProperty(key)) {
                input[key] = walkMutate(input[key], predicate, mutator, removeUnresolved);
            }
        }
        if (removeUnresolved) {
            input = cleanUpLinks(input);
        }
    }
    return input;
};
var normalizeLink = function normalizeLink(entityMap, link, removeUnresolved) {
    var resolvedLink = getResolvedLink(entityMap, link);
    if (resolvedLink === UNRESOLVED_LINK) {
        return removeUnresolved ? resolvedLink : link;
    }
    return resolvedLink;
};
var makeEntryObject = function makeEntryObject(item, itemEntryPoints) {
    if (!Array.isArray(itemEntryPoints)) {
        return item;
    }
    var entryPoints = Object.keys(item).filter(function(ownKey) {
        return itemEntryPoints.indexOf(ownKey) !== -1;
    });
    return entryPoints.reduce(function(entryObj, entryPoint) {
        entryObj[entryPoint] = item[entryPoint];
        return entryObj;
    }, {});
};
/**
 * resolveResponse Function
 * Resolves contentful response to normalized form.
 * @param {Object} response Contentful response
 * @param {{removeUnresolved: Boolean, itemEntryPoints: Array<String>}|{}} options
 * @param {Boolean} options.removeUnresolved - Remove unresolved links default:false
 * @param {Array<String>} options.itemEntryPoints - Resolve links only in those item properties
 * @return {Object}
 */ var resolveResponse = function resolveResponse(response, options) {
    options = options || {};
    if (!response.items) {
        return [];
    }
    var responseClone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$resolve$2d$response$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(response);
    var allIncludes = Object.keys(responseClone.includes || {}).reduce(function(all, type) {
        return [].concat(_toConsumableArray(all), _toConsumableArray(response.includes[type]));
    }, []);
    var allEntries = [].concat(_toConsumableArray(responseClone.items), _toConsumableArray(allIncludes)).filter(function(entity) {
        return Boolean(entity.sys);
    });
    var entityMap = new Map(allEntries.reduce(function(acc, entity) {
        var entries = makeEntityMapKeys(entity.sys).map(function(key) {
            return [
                key,
                entity
            ];
        });
        acc.push.apply(acc, _toConsumableArray(entries));
        return acc;
    }, []));
    allEntries.forEach(function(item) {
        var entryObject = makeEntryObject(item, options.itemEntryPoints);
        Object.assign(item, walkMutate(entryObject, function(x) {
            return isLink(x) || isResourceLink(x);
        }, function(link) {
            return normalizeLink(entityMap, link, options.removeUnresolved);
        }, options.removeUnresolved));
    });
    return responseClone.items;
};
const __TURBOPACK__default__export__ = resolveResponse;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/material/node_modules/react-is/cjs/react-is.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "production" !== ("TURBOPACK compile-time value", "development") && function() {
    function typeOf(object) {
        if ("object" === typeof object && null !== object) {
            var $$typeof = object.$$typeof;
            switch($$typeof){
                case REACT_ELEMENT_TYPE:
                    switch(object = object.type, object){
                        case REACT_FRAGMENT_TYPE:
                        case REACT_PROFILER_TYPE:
                        case REACT_STRICT_MODE_TYPE:
                        case REACT_SUSPENSE_TYPE:
                        case REACT_SUSPENSE_LIST_TYPE:
                        case REACT_VIEW_TRANSITION_TYPE:
                            return object;
                        default:
                            switch(object = object && object.$$typeof, object){
                                case REACT_CONTEXT_TYPE:
                                case REACT_FORWARD_REF_TYPE:
                                case REACT_LAZY_TYPE:
                                case REACT_MEMO_TYPE:
                                    return object;
                                case REACT_CONSUMER_TYPE:
                                    return object;
                                default:
                                    return $$typeof;
                            }
                    }
                case REACT_PORTAL_TYPE:
                    return $$typeof;
            }
        }
    }
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
    exports.ContextConsumer = REACT_CONSUMER_TYPE;
    exports.ContextProvider = REACT_CONTEXT_TYPE;
    exports.Element = REACT_ELEMENT_TYPE;
    exports.ForwardRef = REACT_FORWARD_REF_TYPE;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Lazy = REACT_LAZY_TYPE;
    exports.Memo = REACT_MEMO_TYPE;
    exports.Portal = REACT_PORTAL_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
    exports.isContextConsumer = function(object) {
        return typeOf(object) === REACT_CONSUMER_TYPE;
    };
    exports.isContextProvider = function(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
    };
    exports.isElement = function(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    };
    exports.isForwardRef = function(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
    };
    exports.isFragment = function(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
    };
    exports.isLazy = function(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
    };
    exports.isMemo = function(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
    };
    exports.isPortal = function(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
    };
    exports.isProfiler = function(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
    };
    exports.isStrictMode = function(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
    };
    exports.isSuspense = function(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
    };
    exports.isSuspenseList = function(object) {
        return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
    };
    exports.isValidElementType = function(type) {
        return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) ? !0 : !1;
    };
    exports.typeOf = typeOf;
}();
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/material/node_modules/react-is/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/material/node_modules/react-is/cjs/react-is.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/@mui/icons-material/esm/Search.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/@mui/material/esm/utils/createSvgIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
}), 'Search');
}),
];

//# sourceMappingURL=25d00_2deb54e2._.js.map