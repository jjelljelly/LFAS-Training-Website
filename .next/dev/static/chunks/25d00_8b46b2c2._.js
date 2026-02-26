(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/bind.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>bind
]);
'use strict';
function bind(fn, thisArg) {
    return function wrap() {
        return fn.apply(thisArg, arguments);
    };
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/bind.js [app-client] (ecmascript)");
'use strict';
;
// utils is a library of generic helper functions non-specific to axios
const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const { iterator, toStringTag } = Symbol;
const kindOf = ((cache)=>(thing)=>{
        const str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    })(Object.create(null));
const kindOfTest = (type)=>{
    type = type.toLowerCase();
    return (thing)=>kindOf(thing) === type;
};
const typeOfTest = (type)=>(thing)=>typeof thing === type;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */ const { isArray } = Array;
/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */ const isUndefined = typeOfTest('undefined');
/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ const isArrayBuffer = kindOfTest('ArrayBuffer');
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(val);
    } else {
        result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */ const isString = typeOfTest('string');
/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ const isFunction = typeOfTest('function');
/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */ const isNumber = typeOfTest('number');
/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */ const isObject = (thing)=>thing !== null && typeof thing === 'object';
/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */ const isBoolean = (thing)=>thing === true || thing === false;
/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */ const isPlainObject = (val)=>{
    if (kindOf(val) !== 'object') {
        return false;
    }
    const prototype = getPrototypeOf(val);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(toStringTag in val) && !(iterator in val);
};
/**
 * Determine if a value is an empty object (safely handles Buffers)
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an empty object, otherwise false
 */ const isEmptyObject = (val)=>{
    // Early return for non-objects or Buffers to prevent RangeError
    if (!isObject(val) || isBuffer(val)) {
        return false;
    }
    try {
        return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
    } catch (e) {
        // Fallback for any other objects that might cause RangeError with Object.keys()
        return false;
    }
};
/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */ const isDate = kindOfTest('Date');
/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFile = kindOfTest('File');
/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */ const isBlob = kindOfTest('Blob');
/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFileList = kindOfTest('FileList');
/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */ const isStream = (val)=>isObject(val) && isFunction(val.pipe);
/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */ const isFormData = (thing)=>{
    let kind;
    return thing && (typeof FormData === 'function' && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === 'formdata' || kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]'));
};
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ const isURLSearchParams = kindOfTest('URLSearchParams');
const [isReadableStream, isRequest, isResponse, isHeaders] = [
    'ReadableStream',
    'Request',
    'Response',
    'Headers'
].map(kindOfTest);
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */ const trim = (str)=>str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array<unknown>} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Object} [options]
 * @param {Boolean} [options.allOwnKeys = false]
 * @returns {any}
 */ function forEach(obj, fn, { allOwnKeys = false } = {}) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
        return;
    }
    let i;
    let l;
    // Force an array if not already something iterable
    if (typeof obj !== 'object') {
        /*eslint no-param-reassign:0*/ obj = [
            obj
        ];
    }
    if (isArray(obj)) {
        // Iterate over array values
        for(i = 0, l = obj.length; i < l; i++){
            fn.call(null, obj[i], i, obj);
        }
    } else {
        // Buffer check
        if (isBuffer(obj)) {
            return;
        }
        // Iterate over object keys
        const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
        const len = keys.length;
        let key;
        for(i = 0; i < len; i++){
            key = keys[i];
            fn.call(null, obj[key], key, obj);
        }
    }
}
function findKey(obj, key) {
    if (isBuffer(obj)) {
        return null;
    }
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while(i-- > 0){
        _key = keys[i];
        if (key === _key.toLowerCase()) {
            return _key;
        }
    }
    return null;
}
const _global = (()=>{
    /*eslint no-undef:0*/ if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== 'undefined' ? window : /*TURBOPACK member replacement*/ __turbopack_context__.g;
})();
const isContextDefined = (context)=>!isUndefined(context) && context !== _global;
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * const result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */ function merge() {
    const { caseless, skipUndefined } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key)=>{
        const targetKey = caseless && findKey(result, key) || key;
        if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
            result[targetKey] = merge(result[targetKey], val);
        } else if (isPlainObject(val)) {
            result[targetKey] = merge({}, val);
        } else if (isArray(val)) {
            result[targetKey] = val.slice();
        } else if (!skipUndefined || !isUndefined(val)) {
            result[targetKey] = val;
        }
    };
    for(let i = 0, l = arguments.length; i < l; i++){
        arguments[i] && forEach(arguments[i], assignValue);
    }
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Object} [options]
 * @param {Boolean} [options.allOwnKeys]
 * @returns {Object} The resulting value of object a
 */ const extend = (a, b, thisArg, { allOwnKeys } = {})=>{
    forEach(b, (val, key)=>{
        if (thisArg && isFunction(val)) {
            Object.defineProperty(a, key, {
                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(val, thisArg),
                writable: true,
                enumerable: true,
                configurable: true
            });
        } else {
            Object.defineProperty(a, key, {
                value: val,
                writable: true,
                enumerable: true,
                configurable: true
            });
        }
    }, {
        allOwnKeys
    });
    return a;
};
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */ const stripBOM = (content)=>{
    if (content.charCodeAt(0) === 0xFEFF) {
        content = content.slice(1);
    }
    return content;
};
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */ const inherits = (constructor, superConstructor, props, descriptors)=>{
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    Object.defineProperty(constructor.prototype, 'constructor', {
        value: constructor,
        writable: true,
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(constructor, 'super', {
        value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
};
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */ const toFlatObject = (sourceObj, destObj, filter, propFilter)=>{
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (sourceObj == null) return destObj;
    do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while(i-- > 0){
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
            }
        }
        sourceObj = filter !== false && getPrototypeOf(sourceObj);
    }while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype)
    return destObj;
};
/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */ const endsWith = (str, searchString, position)=>{
    str = String(str);
    if (position === undefined || position > str.length) {
        position = str.length;
    }
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
};
/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */ const toArray = (thing)=>{
    if (!thing) return null;
    if (isArray(thing)) return thing;
    let i = thing.length;
    if (!isNumber(i)) return null;
    const arr = new Array(i);
    while(i-- > 0){
        arr[i] = thing[i];
    }
    return arr;
};
/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */ // eslint-disable-next-line func-names
const isTypedArray = ((TypedArray)=>{
    // eslint-disable-next-line func-names
    return (thing)=>{
        return TypedArray && thing instanceof TypedArray;
    };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));
/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */ const forEachEntry = (obj, fn)=>{
    const generator = obj && obj[iterator];
    const _iterator = generator.call(obj);
    let result;
    while((result = _iterator.next()) && !result.done){
        const pair = result.value;
        fn.call(obj, pair[0], pair[1]);
    }
};
/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */ const matchAll = (regExp, str)=>{
    let matches;
    const arr = [];
    while((matches = regExp.exec(str)) !== null){
        arr.push(matches);
    }
    return arr;
};
/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */ const isHTMLForm = kindOfTest('HTMLFormElement');
const toCamelCase = (str)=>{
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
    });
};
/* Creating a function that will check if an object has a property. */ const hasOwnProperty = (({ hasOwnProperty })=>(obj, prop)=>hasOwnProperty.call(obj, prop))(Object.prototype);
/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */ const isRegExp = kindOfTest('RegExp');
const reduceDescriptors = (obj, reducer)=>{
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors, (descriptor, name)=>{
        let ret;
        if ((ret = reducer(descriptor, name, obj)) !== false) {
            reducedDescriptors[name] = ret || descriptor;
        }
    });
    Object.defineProperties(obj, reducedDescriptors);
};
/**
 * Makes all methods read-only
 * @param {Object} obj
 */ const freezeMethods = (obj)=>{
    reduceDescriptors(obj, (descriptor, name)=>{
        // skip restricted props in strict mode
        if (isFunction(obj) && [
            'arguments',
            'caller',
            'callee'
        ].indexOf(name) !== -1) {
            return false;
        }
        const value = obj[name];
        if (!isFunction(value)) return;
        descriptor.enumerable = false;
        if ('writable' in descriptor) {
            descriptor.writable = false;
            return;
        }
        if (!descriptor.set) {
            descriptor.set = ()=>{
                throw Error('Can not rewrite read-only method \'' + name + '\'');
            };
        }
    });
};
const toObjectSet = (arrayOrString, delimiter)=>{
    const obj = {};
    const define = (arr)=>{
        arr.forEach((value)=>{
            obj[value] = true;
        });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
};
const noop = ()=>{};
const toFiniteNumber = (value, defaultValue)=>{
    return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */ function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[toStringTag] === 'FormData' && thing[iterator]);
}
const toJSONObject = (obj)=>{
    const stack = new Array(10);
    const visit = (source, i)=>{
        if (isObject(source)) {
            if (stack.indexOf(source) >= 0) {
                return;
            }
            //Buffer check
            if (isBuffer(source)) {
                return source;
            }
            if (!('toJSON' in source)) {
                stack[i] = source;
                const target = isArray(source) ? [] : {};
                forEach(source, (value, key)=>{
                    const reducedValue = visit(value, i + 1);
                    !isUndefined(reducedValue) && (target[key] = reducedValue);
                });
                stack[i] = undefined;
                return target;
            }
        }
        return source;
    };
    return visit(obj, 0);
};
const isAsyncFn = kindOfTest('AsyncFunction');
const isThenable = (thing)=>thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34
const _setImmediate = ((setImmediateSupported, postMessageSupported)=>{
    if (setImmediateSupported) {
        return setImmediate;
    }
    return postMessageSupported ? ((token, callbacks)=>{
        _global.addEventListener("message", ({ source, data })=>{
            if (source === _global && data === token) {
                callbacks.length && callbacks.shift()();
            }
        }, false);
        return (cb)=>{
            callbacks.push(cb);
            _global.postMessage(token, "*");
        };
    })(`axios@${Math.random()}`, []) : (cb)=>setTimeout(cb);
})(typeof setImmediate === 'function', isFunction(_global.postMessage));
const asap = typeof queueMicrotask !== 'undefined' ? queueMicrotask.bind(_global) : typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick || _setImmediate;
// *********************
const isIterable = (thing)=>thing != null && isFunction(thing[iterator]);
const __TURBOPACK__default__export__ = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isEmptyObject,
    isReadableStream,
    isRequest,
    isResponse,
    isHeaders,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable,
    setImmediate: _setImmediate,
    asap,
    isIterable
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function() {
    var e = {
        675: function(e, r) {
            "use strict";
            r.byteLength = byteLength;
            r.toByteArray = toByteArray;
            r.fromByteArray = fromByteArray;
            var t = [];
            var f = [];
            var n = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
            var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for(var o = 0, u = i.length; o < u; ++o){
                t[o] = i[o];
                f[i.charCodeAt(o)] = o;
            }
            f["-".charCodeAt(0)] = 62;
            f["_".charCodeAt(0)] = 63;
            function getLens(e) {
                var r = e.length;
                if (r % 4 > 0) {
                    throw new Error("Invalid string. Length must be a multiple of 4");
                }
                var t = e.indexOf("=");
                if (t === -1) t = r;
                var f = t === r ? 0 : 4 - t % 4;
                return [
                    t,
                    f
                ];
            }
            function byteLength(e) {
                var r = getLens(e);
                var t = r[0];
                var f = r[1];
                return (t + f) * 3 / 4 - f;
            }
            function _byteLength(e, r, t) {
                return (r + t) * 3 / 4 - t;
            }
            function toByteArray(e) {
                var r;
                var t = getLens(e);
                var i = t[0];
                var o = t[1];
                var u = new n(_byteLength(e, i, o));
                var a = 0;
                var s = o > 0 ? i - 4 : i;
                var h;
                for(h = 0; h < s; h += 4){
                    r = f[e.charCodeAt(h)] << 18 | f[e.charCodeAt(h + 1)] << 12 | f[e.charCodeAt(h + 2)] << 6 | f[e.charCodeAt(h + 3)];
                    u[a++] = r >> 16 & 255;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                if (o === 2) {
                    r = f[e.charCodeAt(h)] << 2 | f[e.charCodeAt(h + 1)] >> 4;
                    u[a++] = r & 255;
                }
                if (o === 1) {
                    r = f[e.charCodeAt(h)] << 10 | f[e.charCodeAt(h + 1)] << 4 | f[e.charCodeAt(h + 2)] >> 2;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                return u;
            }
            function tripletToBase64(e) {
                return t[e >> 18 & 63] + t[e >> 12 & 63] + t[e >> 6 & 63] + t[e & 63];
            }
            function encodeChunk(e, r, t) {
                var f;
                var n = [];
                for(var i = r; i < t; i += 3){
                    f = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255);
                    n.push(tripletToBase64(f));
                }
                return n.join("");
            }
            function fromByteArray(e) {
                var r;
                var f = e.length;
                var n = f % 3;
                var i = [];
                var o = 16383;
                for(var u = 0, a = f - n; u < a; u += o){
                    i.push(encodeChunk(e, u, u + o > a ? a : u + o));
                }
                if (n === 1) {
                    r = e[f - 1];
                    i.push(t[r >> 2] + t[r << 4 & 63] + "==");
                } else if (n === 2) {
                    r = (e[f - 2] << 8) + e[f - 1];
                    i.push(t[r >> 10] + t[r >> 4 & 63] + t[r << 2 & 63] + "=");
                }
                return i.join("");
            }
        },
        72: function(e, r, t) {
            "use strict";
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var f = t(675);
            var n = t(783);
            var i = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
            r.Buffer = Buffer;
            r.SlowBuffer = SlowBuffer;
            r.INSPECT_MAX_BYTES = 50;
            var o = 2147483647;
            r.kMaxLength = o;
            Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
            if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
                console.error("This browser lacks typed array (Uint8Array) support which is required by " + "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
            }
            function typedArraySupport() {
                try {
                    var e = new Uint8Array(1);
                    var r = {
                        foo: function() {
                            return 42;
                        }
                    };
                    Object.setPrototypeOf(r, Uint8Array.prototype);
                    Object.setPrototypeOf(e, r);
                    return e.foo() === 42;
                } catch (e) {
                    return false;
                }
            }
            Object.defineProperty(Buffer.prototype, "parent", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.buffer;
                }
            });
            Object.defineProperty(Buffer.prototype, "offset", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.byteOffset;
                }
            });
            function createBuffer(e) {
                if (e > o) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
                var r = new Uint8Array(e);
                Object.setPrototypeOf(r, Buffer.prototype);
                return r;
            }
            function Buffer(e, r, t) {
                if (typeof e === "number") {
                    if (typeof r === "string") {
                        throw new TypeError('The "string" argument must be of type string. Received type number');
                    }
                    return allocUnsafe(e);
                }
                return from(e, r, t);
            }
            Buffer.poolSize = 8192;
            function from(e, r, t) {
                if (typeof e === "string") {
                    return fromString(e, r);
                }
                if (ArrayBuffer.isView(e)) {
                    return fromArrayLike(e);
                }
                if (e == null) {
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
                }
                if (isInstance(e, ArrayBuffer) || e && isInstance(e.buffer, ArrayBuffer)) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof SharedArrayBuffer !== "undefined" && (isInstance(e, SharedArrayBuffer) || e && isInstance(e.buffer, SharedArrayBuffer))) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof e === "number") {
                    throw new TypeError('The "value" argument must not be of type number. Received type number');
                }
                var f = e.valueOf && e.valueOf();
                if (f != null && f !== e) {
                    return Buffer.from(f, r, t);
                }
                var n = fromObject(e);
                if (n) return n;
                if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] === "function") {
                    return Buffer.from(e[Symbol.toPrimitive]("string"), r, t);
                }
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
            }
            Buffer.from = function(e, r, t) {
                return from(e, r, t);
            };
            Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
            Object.setPrototypeOf(Buffer, Uint8Array);
            function assertSize(e) {
                if (typeof e !== "number") {
                    throw new TypeError('"size" argument must be of type number');
                } else if (e < 0) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
            }
            function alloc(e, r, t) {
                assertSize(e);
                if (e <= 0) {
                    return createBuffer(e);
                }
                if (r !== undefined) {
                    return typeof t === "string" ? createBuffer(e).fill(r, t) : createBuffer(e).fill(r);
                }
                return createBuffer(e);
            }
            Buffer.alloc = function(e, r, t) {
                return alloc(e, r, t);
            };
            function allocUnsafe(e) {
                assertSize(e);
                return createBuffer(e < 0 ? 0 : checked(e) | 0);
            }
            Buffer.allocUnsafe = function(e) {
                return allocUnsafe(e);
            };
            Buffer.allocUnsafeSlow = function(e) {
                return allocUnsafe(e);
            };
            function fromString(e, r) {
                if (typeof r !== "string" || r === "") {
                    r = "utf8";
                }
                if (!Buffer.isEncoding(r)) {
                    throw new TypeError("Unknown encoding: " + r);
                }
                var t = byteLength(e, r) | 0;
                var f = createBuffer(t);
                var n = f.write(e, r);
                if (n !== t) {
                    f = f.slice(0, n);
                }
                return f;
            }
            function fromArrayLike(e) {
                var r = e.length < 0 ? 0 : checked(e.length) | 0;
                var t = createBuffer(r);
                for(var f = 0; f < r; f += 1){
                    t[f] = e[f] & 255;
                }
                return t;
            }
            function fromArrayBuffer(e, r, t) {
                if (r < 0 || e.byteLength < r) {
                    throw new RangeError('"offset" is outside of buffer bounds');
                }
                if (e.byteLength < r + (t || 0)) {
                    throw new RangeError('"length" is outside of buffer bounds');
                }
                var f;
                if (r === undefined && t === undefined) {
                    f = new Uint8Array(e);
                } else if (t === undefined) {
                    f = new Uint8Array(e, r);
                } else {
                    f = new Uint8Array(e, r, t);
                }
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            }
            function fromObject(e) {
                if (Buffer.isBuffer(e)) {
                    var r = checked(e.length) | 0;
                    var t = createBuffer(r);
                    if (t.length === 0) {
                        return t;
                    }
                    e.copy(t, 0, 0, r);
                    return t;
                }
                if (e.length !== undefined) {
                    if (typeof e.length !== "number" || numberIsNaN(e.length)) {
                        return createBuffer(0);
                    }
                    return fromArrayLike(e);
                }
                if (e.type === "Buffer" && Array.isArray(e.data)) {
                    return fromArrayLike(e.data);
                }
            }
            function checked(e) {
                if (e >= o) {
                    throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + o.toString(16) + " bytes");
                }
                return e | 0;
            }
            function SlowBuffer(e) {
                if (+e != e) {
                    e = 0;
                }
                return Buffer.alloc(+e);
            }
            Buffer.isBuffer = function isBuffer(e) {
                return e != null && e._isBuffer === true && e !== Buffer.prototype;
            };
            Buffer.compare = function compare(e, r) {
                if (isInstance(e, Uint8Array)) e = Buffer.from(e, e.offset, e.byteLength);
                if (isInstance(r, Uint8Array)) r = Buffer.from(r, r.offset, r.byteLength);
                if (!Buffer.isBuffer(e) || !Buffer.isBuffer(r)) {
                    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                }
                if (e === r) return 0;
                var t = e.length;
                var f = r.length;
                for(var n = 0, i = Math.min(t, f); n < i; ++n){
                    if (e[n] !== r[n]) {
                        t = e[n];
                        f = r[n];
                        break;
                    }
                }
                if (t < f) return -1;
                if (f < t) return 1;
                return 0;
            };
            Buffer.isEncoding = function isEncoding(e) {
                switch(String(e).toLowerCase()){
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return true;
                    default:
                        return false;
                }
            };
            Buffer.concat = function concat(e, r) {
                if (!Array.isArray(e)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                }
                if (e.length === 0) {
                    return Buffer.alloc(0);
                }
                var t;
                if (r === undefined) {
                    r = 0;
                    for(t = 0; t < e.length; ++t){
                        r += e[t].length;
                    }
                }
                var f = Buffer.allocUnsafe(r);
                var n = 0;
                for(t = 0; t < e.length; ++t){
                    var i = e[t];
                    if (isInstance(i, Uint8Array)) {
                        i = Buffer.from(i);
                    }
                    if (!Buffer.isBuffer(i)) {
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    }
                    i.copy(f, n);
                    n += i.length;
                }
                return f;
            };
            function byteLength(e, r) {
                if (Buffer.isBuffer(e)) {
                    return e.length;
                }
                if (ArrayBuffer.isView(e) || isInstance(e, ArrayBuffer)) {
                    return e.byteLength;
                }
                if (typeof e !== "string") {
                    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + "Received type " + typeof e);
                }
                var t = e.length;
                var f = arguments.length > 2 && arguments[2] === true;
                if (!f && t === 0) return 0;
                var n = false;
                for(;;){
                    switch(r){
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return t;
                        case "utf8":
                        case "utf-8":
                            return utf8ToBytes(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return t * 2;
                        case "hex":
                            return t >>> 1;
                        case "base64":
                            return base64ToBytes(e).length;
                        default:
                            if (n) {
                                return f ? -1 : utf8ToBytes(e).length;
                            }
                            r = ("" + r).toLowerCase();
                            n = true;
                    }
                }
            }
            Buffer.byteLength = byteLength;
            function slowToString(e, r, t) {
                var f = false;
                if (r === undefined || r < 0) {
                    r = 0;
                }
                if (r > this.length) {
                    return "";
                }
                if (t === undefined || t > this.length) {
                    t = this.length;
                }
                if (t <= 0) {
                    return "";
                }
                t >>>= 0;
                r >>>= 0;
                if (t <= r) {
                    return "";
                }
                if (!e) e = "utf8";
                while(true){
                    switch(e){
                        case "hex":
                            return hexSlice(this, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Slice(this, r, t);
                        case "ascii":
                            return asciiSlice(this, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Slice(this, r, t);
                        case "base64":
                            return base64Slice(this, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return utf16leSlice(this, r, t);
                        default:
                            if (f) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase();
                            f = true;
                    }
                }
            }
            Buffer.prototype._isBuffer = true;
            function swap(e, r, t) {
                var f = e[r];
                e[r] = e[t];
                e[t] = f;
            }
            Buffer.prototype.swap16 = function swap16() {
                var e = this.length;
                if (e % 2 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                }
                for(var r = 0; r < e; r += 2){
                    swap(this, r, r + 1);
                }
                return this;
            };
            Buffer.prototype.swap32 = function swap32() {
                var e = this.length;
                if (e % 4 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                }
                for(var r = 0; r < e; r += 4){
                    swap(this, r, r + 3);
                    swap(this, r + 1, r + 2);
                }
                return this;
            };
            Buffer.prototype.swap64 = function swap64() {
                var e = this.length;
                if (e % 8 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                }
                for(var r = 0; r < e; r += 8){
                    swap(this, r, r + 7);
                    swap(this, r + 1, r + 6);
                    swap(this, r + 2, r + 5);
                    swap(this, r + 3, r + 4);
                }
                return this;
            };
            Buffer.prototype.toString = function toString() {
                var e = this.length;
                if (e === 0) return "";
                if (arguments.length === 0) return utf8Slice(this, 0, e);
                return slowToString.apply(this, arguments);
            };
            Buffer.prototype.toLocaleString = Buffer.prototype.toString;
            Buffer.prototype.equals = function equals(e) {
                if (!Buffer.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (this === e) return true;
                return Buffer.compare(this, e) === 0;
            };
            Buffer.prototype.inspect = function inspect() {
                var e = "";
                var t = r.INSPECT_MAX_BYTES;
                e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim();
                if (this.length > t) e += " ... ";
                return "<Buffer " + e + ">";
            };
            if (i) {
                Buffer.prototype[i] = Buffer.prototype.inspect;
            }
            Buffer.prototype.compare = function compare(e, r, t, f, n) {
                if (isInstance(e, Uint8Array)) {
                    e = Buffer.from(e, e.offset, e.byteLength);
                }
                if (!Buffer.isBuffer(e)) {
                    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + "Received type " + typeof e);
                }
                if (r === undefined) {
                    r = 0;
                }
                if (t === undefined) {
                    t = e ? e.length : 0;
                }
                if (f === undefined) {
                    f = 0;
                }
                if (n === undefined) {
                    n = this.length;
                }
                if (r < 0 || t > e.length || f < 0 || n > this.length) {
                    throw new RangeError("out of range index");
                }
                if (f >= n && r >= t) {
                    return 0;
                }
                if (f >= n) {
                    return -1;
                }
                if (r >= t) {
                    return 1;
                }
                r >>>= 0;
                t >>>= 0;
                f >>>= 0;
                n >>>= 0;
                if (this === e) return 0;
                var i = n - f;
                var o = t - r;
                var u = Math.min(i, o);
                var a = this.slice(f, n);
                var s = e.slice(r, t);
                for(var h = 0; h < u; ++h){
                    if (a[h] !== s[h]) {
                        i = a[h];
                        o = s[h];
                        break;
                    }
                }
                if (i < o) return -1;
                if (o < i) return 1;
                return 0;
            };
            function bidirectionalIndexOf(e, r, t, f, n) {
                if (e.length === 0) return -1;
                if (typeof t === "string") {
                    f = t;
                    t = 0;
                } else if (t > 2147483647) {
                    t = 2147483647;
                } else if (t < -2147483648) {
                    t = -2147483648;
                }
                t = +t;
                if (numberIsNaN(t)) {
                    t = n ? 0 : e.length - 1;
                }
                if (t < 0) t = e.length + t;
                if (t >= e.length) {
                    if (n) return -1;
                    else t = e.length - 1;
                } else if (t < 0) {
                    if (n) t = 0;
                    else return -1;
                }
                if (typeof r === "string") {
                    r = Buffer.from(r, f);
                }
                if (Buffer.isBuffer(r)) {
                    if (r.length === 0) {
                        return -1;
                    }
                    return arrayIndexOf(e, r, t, f, n);
                } else if (typeof r === "number") {
                    r = r & 255;
                    if (typeof Uint8Array.prototype.indexOf === "function") {
                        if (n) {
                            return Uint8Array.prototype.indexOf.call(e, r, t);
                        } else {
                            return Uint8Array.prototype.lastIndexOf.call(e, r, t);
                        }
                    }
                    return arrayIndexOf(e, [
                        r
                    ], t, f, n);
                }
                throw new TypeError("val must be string, number or Buffer");
            }
            function arrayIndexOf(e, r, t, f, n) {
                var i = 1;
                var o = e.length;
                var u = r.length;
                if (f !== undefined) {
                    f = String(f).toLowerCase();
                    if (f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le") {
                        if (e.length < 2 || r.length < 2) {
                            return -1;
                        }
                        i = 2;
                        o /= 2;
                        u /= 2;
                        t /= 2;
                    }
                }
                function read(e, r) {
                    if (i === 1) {
                        return e[r];
                    } else {
                        return e.readUInt16BE(r * i);
                    }
                }
                var a;
                if (n) {
                    var s = -1;
                    for(a = t; a < o; a++){
                        if (read(e, a) === read(r, s === -1 ? 0 : a - s)) {
                            if (s === -1) s = a;
                            if (a - s + 1 === u) return s * i;
                        } else {
                            if (s !== -1) a -= a - s;
                            s = -1;
                        }
                    }
                } else {
                    if (t + u > o) t = o - u;
                    for(a = t; a >= 0; a--){
                        var h = true;
                        for(var c = 0; c < u; c++){
                            if (read(e, a + c) !== read(r, c)) {
                                h = false;
                                break;
                            }
                        }
                        if (h) return a;
                    }
                }
                return -1;
            }
            Buffer.prototype.includes = function includes(e, r, t) {
                return this.indexOf(e, r, t) !== -1;
            };
            Buffer.prototype.indexOf = function indexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, true);
            };
            Buffer.prototype.lastIndexOf = function lastIndexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, false);
            };
            function hexWrite(e, r, t, f) {
                t = Number(t) || 0;
                var n = e.length - t;
                if (!f) {
                    f = n;
                } else {
                    f = Number(f);
                    if (f > n) {
                        f = n;
                    }
                }
                var i = r.length;
                if (f > i / 2) {
                    f = i / 2;
                }
                for(var o = 0; o < f; ++o){
                    var u = parseInt(r.substr(o * 2, 2), 16);
                    if (numberIsNaN(u)) return o;
                    e[t + o] = u;
                }
                return o;
            }
            function utf8Write(e, r, t, f) {
                return blitBuffer(utf8ToBytes(r, e.length - t), e, t, f);
            }
            function asciiWrite(e, r, t, f) {
                return blitBuffer(asciiToBytes(r), e, t, f);
            }
            function latin1Write(e, r, t, f) {
                return asciiWrite(e, r, t, f);
            }
            function base64Write(e, r, t, f) {
                return blitBuffer(base64ToBytes(r), e, t, f);
            }
            function ucs2Write(e, r, t, f) {
                return blitBuffer(utf16leToBytes(r, e.length - t), e, t, f);
            }
            Buffer.prototype.write = function write(e, r, t, f) {
                if (r === undefined) {
                    f = "utf8";
                    t = this.length;
                    r = 0;
                } else if (t === undefined && typeof r === "string") {
                    f = r;
                    t = this.length;
                    r = 0;
                } else if (isFinite(r)) {
                    r = r >>> 0;
                    if (isFinite(t)) {
                        t = t >>> 0;
                        if (f === undefined) f = "utf8";
                    } else {
                        f = t;
                        t = undefined;
                    }
                } else {
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                }
                var n = this.length - r;
                if (t === undefined || t > n) t = n;
                if (e.length > 0 && (t < 0 || r < 0) || r > this.length) {
                    throw new RangeError("Attempt to write outside buffer bounds");
                }
                if (!f) f = "utf8";
                var i = false;
                for(;;){
                    switch(f){
                        case "hex":
                            return hexWrite(this, e, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Write(this, e, r, t);
                        case "ascii":
                            return asciiWrite(this, e, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Write(this, e, r, t);
                        case "base64":
                            return base64Write(this, e, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return ucs2Write(this, e, r, t);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + f);
                            f = ("" + f).toLowerCase();
                            i = true;
                    }
                }
            };
            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function base64Slice(e, r, t) {
                if (r === 0 && t === e.length) {
                    return f.fromByteArray(e);
                } else {
                    return f.fromByteArray(e.slice(r, t));
                }
            }
            function utf8Slice(e, r, t) {
                t = Math.min(e.length, t);
                var f = [];
                var n = r;
                while(n < t){
                    var i = e[n];
                    var o = null;
                    var u = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
                    if (n + u <= t) {
                        var a, s, h, c;
                        switch(u){
                            case 1:
                                if (i < 128) {
                                    o = i;
                                }
                                break;
                            case 2:
                                a = e[n + 1];
                                if ((a & 192) === 128) {
                                    c = (i & 31) << 6 | a & 63;
                                    if (c > 127) {
                                        o = c;
                                    }
                                }
                                break;
                            case 3:
                                a = e[n + 1];
                                s = e[n + 2];
                                if ((a & 192) === 128 && (s & 192) === 128) {
                                    c = (i & 15) << 12 | (a & 63) << 6 | s & 63;
                                    if (c > 2047 && (c < 55296 || c > 57343)) {
                                        o = c;
                                    }
                                }
                                break;
                            case 4:
                                a = e[n + 1];
                                s = e[n + 2];
                                h = e[n + 3];
                                if ((a & 192) === 128 && (s & 192) === 128 && (h & 192) === 128) {
                                    c = (i & 15) << 18 | (a & 63) << 12 | (s & 63) << 6 | h & 63;
                                    if (c > 65535 && c < 1114112) {
                                        o = c;
                                    }
                                }
                        }
                    }
                    if (o === null) {
                        o = 65533;
                        u = 1;
                    } else if (o > 65535) {
                        o -= 65536;
                        f.push(o >>> 10 & 1023 | 55296);
                        o = 56320 | o & 1023;
                    }
                    f.push(o);
                    n += u;
                }
                return decodeCodePointsArray(f);
            }
            var u = 4096;
            function decodeCodePointsArray(e) {
                var r = e.length;
                if (r <= u) {
                    return String.fromCharCode.apply(String, e);
                }
                var t = "";
                var f = 0;
                while(f < r){
                    t += String.fromCharCode.apply(String, e.slice(f, f += u));
                }
                return t;
            }
            function asciiSlice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n] & 127);
                }
                return f;
            }
            function latin1Slice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n]);
                }
                return f;
            }
            function hexSlice(e, r, t) {
                var f = e.length;
                if (!r || r < 0) r = 0;
                if (!t || t < 0 || t > f) t = f;
                var n = "";
                for(var i = r; i < t; ++i){
                    n += s[e[i]];
                }
                return n;
            }
            function utf16leSlice(e, r, t) {
                var f = e.slice(r, t);
                var n = "";
                for(var i = 0; i < f.length; i += 2){
                    n += String.fromCharCode(f[i] + f[i + 1] * 256);
                }
                return n;
            }
            Buffer.prototype.slice = function slice(e, r) {
                var t = this.length;
                e = ~~e;
                r = r === undefined ? t : ~~r;
                if (e < 0) {
                    e += t;
                    if (e < 0) e = 0;
                } else if (e > t) {
                    e = t;
                }
                if (r < 0) {
                    r += t;
                    if (r < 0) r = 0;
                } else if (r > t) {
                    r = t;
                }
                if (r < e) r = e;
                var f = this.subarray(e, r);
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            };
            function checkOffset(e, r, t) {
                if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + r > t) throw new RangeError("Trying to access beyond buffer length");
            }
            Buffer.prototype.readUIntLE = function readUIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                return f;
            };
            Buffer.prototype.readUIntBE = function readUIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) {
                    checkOffset(e, r, this.length);
                }
                var f = this[e + --r];
                var n = 1;
                while(r > 0 && (n *= 256)){
                    f += this[e + --r] * n;
                }
                return f;
            };
            Buffer.prototype.readUInt8 = function readUInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                return this[e];
            };
            Buffer.prototype.readUInt16LE = function readUInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] | this[e + 1] << 8;
            };
            Buffer.prototype.readUInt16BE = function readUInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] << 8 | this[e + 1];
            };
            Buffer.prototype.readUInt32LE = function readUInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
            };
            Buffer.prototype.readUInt32BE = function readUInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
            };
            Buffer.prototype.readIntLE = function readIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                n *= 128;
                if (f >= n) f -= Math.pow(2, 8 * r);
                return f;
            };
            Buffer.prototype.readIntBE = function readIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = r;
                var n = 1;
                var i = this[e + --f];
                while(f > 0 && (n *= 256)){
                    i += this[e + --f] * n;
                }
                n *= 128;
                if (i >= n) i -= Math.pow(2, 8 * r);
                return i;
            };
            Buffer.prototype.readInt8 = function readInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                if (!(this[e] & 128)) return this[e];
                return (255 - this[e] + 1) * -1;
            };
            Buffer.prototype.readInt16LE = function readInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e] | this[e + 1] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt16BE = function readInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e + 1] | this[e] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt32LE = function readInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
            };
            Buffer.prototype.readInt32BE = function readInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
            };
            Buffer.prototype.readFloatLE = function readFloatLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, true, 23, 4);
            };
            Buffer.prototype.readFloatBE = function readFloatBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, false, 23, 4);
            };
            Buffer.prototype.readDoubleLE = function readDoubleLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, true, 52, 8);
            };
            Buffer.prototype.readDoubleBE = function readDoubleBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, false, 52, 8);
            };
            function checkInt(e, r, t, f, n, i) {
                if (!Buffer.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (r > n || r < i) throw new RangeError('"value" argument is out of bounds');
                if (t + f > e.length) throw new RangeError("Index out of range");
            }
            Buffer.prototype.writeUIntLE = function writeUIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = 1;
                var o = 0;
                this[r] = e & 255;
                while(++o < t && (i *= 256)){
                    this[r + o] = e / i & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUIntBE = function writeUIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = t - 1;
                var o = 1;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    this[r + i] = e / o & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUInt8 = function writeUInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 255, 0);
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeUInt16LE = function writeUInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeUInt16BE = function writeUInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeUInt32LE = function writeUInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r + 3] = e >>> 24;
                this[r + 2] = e >>> 16;
                this[r + 1] = e >>> 8;
                this[r] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeUInt32BE = function writeUInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeIntLE = function writeIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = 0;
                var o = 1;
                var u = 0;
                this[r] = e & 255;
                while(++i < t && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i - 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeIntBE = function writeIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = t - 1;
                var o = 1;
                var u = 0;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i + 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeInt8 = function writeInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 127, -128);
                if (e < 0) e = 255 + e + 1;
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeInt16LE = function writeInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeInt16BE = function writeInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeInt32LE = function writeInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                this[r + 2] = e >>> 16;
                this[r + 3] = e >>> 24;
                return r + 4;
            };
            Buffer.prototype.writeInt32BE = function writeInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                if (e < 0) e = 4294967295 + e + 1;
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            function checkIEEE754(e, r, t, f, n, i) {
                if (t + f > e.length) throw new RangeError("Index out of range");
                if (t < 0) throw new RangeError("Index out of range");
            }
            function writeFloat(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 4, 34028234663852886e22, -34028234663852886e22);
                }
                n.write(e, r, t, f, 23, 4);
                return t + 4;
            }
            Buffer.prototype.writeFloatLE = function writeFloatLE(e, r, t) {
                return writeFloat(this, e, r, true, t);
            };
            Buffer.prototype.writeFloatBE = function writeFloatBE(e, r, t) {
                return writeFloat(this, e, r, false, t);
            };
            function writeDouble(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 8, 17976931348623157e292, -17976931348623157e292);
                }
                n.write(e, r, t, f, 52, 8);
                return t + 8;
            }
            Buffer.prototype.writeDoubleLE = function writeDoubleLE(e, r, t) {
                return writeDouble(this, e, r, true, t);
            };
            Buffer.prototype.writeDoubleBE = function writeDoubleBE(e, r, t) {
                return writeDouble(this, e, r, false, t);
            };
            Buffer.prototype.copy = function copy(e, r, t, f) {
                if (!Buffer.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (!t) t = 0;
                if (!f && f !== 0) f = this.length;
                if (r >= e.length) r = e.length;
                if (!r) r = 0;
                if (f > 0 && f < t) f = t;
                if (f === t) return 0;
                if (e.length === 0 || this.length === 0) return 0;
                if (r < 0) {
                    throw new RangeError("targetStart out of bounds");
                }
                if (t < 0 || t >= this.length) throw new RangeError("Index out of range");
                if (f < 0) throw new RangeError("sourceEnd out of bounds");
                if (f > this.length) f = this.length;
                if (e.length - r < f - t) {
                    f = e.length - r + t;
                }
                var n = f - t;
                if (this === e && typeof Uint8Array.prototype.copyWithin === "function") {
                    this.copyWithin(r, t, f);
                } else if (this === e && t < r && r < f) {
                    for(var i = n - 1; i >= 0; --i){
                        e[i + r] = this[i + t];
                    }
                } else {
                    Uint8Array.prototype.set.call(e, this.subarray(t, f), r);
                }
                return n;
            };
            Buffer.prototype.fill = function fill(e, r, t, f) {
                if (typeof e === "string") {
                    if (typeof r === "string") {
                        f = r;
                        r = 0;
                        t = this.length;
                    } else if (typeof t === "string") {
                        f = t;
                        t = this.length;
                    }
                    if (f !== undefined && typeof f !== "string") {
                        throw new TypeError("encoding must be a string");
                    }
                    if (typeof f === "string" && !Buffer.isEncoding(f)) {
                        throw new TypeError("Unknown encoding: " + f);
                    }
                    if (e.length === 1) {
                        var n = e.charCodeAt(0);
                        if (f === "utf8" && n < 128 || f === "latin1") {
                            e = n;
                        }
                    }
                } else if (typeof e === "number") {
                    e = e & 255;
                } else if (typeof e === "boolean") {
                    e = Number(e);
                }
                if (r < 0 || this.length < r || this.length < t) {
                    throw new RangeError("Out of range index");
                }
                if (t <= r) {
                    return this;
                }
                r = r >>> 0;
                t = t === undefined ? this.length : t >>> 0;
                if (!e) e = 0;
                var i;
                if (typeof e === "number") {
                    for(i = r; i < t; ++i){
                        this[i] = e;
                    }
                } else {
                    var o = Buffer.isBuffer(e) ? e : Buffer.from(e, f);
                    var u = o.length;
                    if (u === 0) {
                        throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    }
                    for(i = 0; i < t - r; ++i){
                        this[i + r] = o[i % u];
                    }
                }
                return this;
            };
            var a = /[^+/0-9A-Za-z-_]/g;
            function base64clean(e) {
                e = e.split("=")[0];
                e = e.trim().replace(a, "");
                if (e.length < 2) return "";
                while(e.length % 4 !== 0){
                    e = e + "=";
                }
                return e;
            }
            function utf8ToBytes(e, r) {
                r = r || Infinity;
                var t;
                var f = e.length;
                var n = null;
                var i = [];
                for(var o = 0; o < f; ++o){
                    t = e.charCodeAt(o);
                    if (t > 55295 && t < 57344) {
                        if (!n) {
                            if (t > 56319) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            } else if (o + 1 === f) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            }
                            n = t;
                            continue;
                        }
                        if (t < 56320) {
                            if ((r -= 3) > -1) i.push(239, 191, 189);
                            n = t;
                            continue;
                        }
                        t = (n - 55296 << 10 | t - 56320) + 65536;
                    } else if (n) {
                        if ((r -= 3) > -1) i.push(239, 191, 189);
                    }
                    n = null;
                    if (t < 128) {
                        if ((r -= 1) < 0) break;
                        i.push(t);
                    } else if (t < 2048) {
                        if ((r -= 2) < 0) break;
                        i.push(t >> 6 | 192, t & 63 | 128);
                    } else if (t < 65536) {
                        if ((r -= 3) < 0) break;
                        i.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
                    } else if (t < 1114112) {
                        if ((r -= 4) < 0) break;
                        i.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
                    } else {
                        throw new Error("Invalid code point");
                    }
                }
                return i;
            }
            function asciiToBytes(e) {
                var r = [];
                for(var t = 0; t < e.length; ++t){
                    r.push(e.charCodeAt(t) & 255);
                }
                return r;
            }
            function utf16leToBytes(e, r) {
                var t, f, n;
                var i = [];
                for(var o = 0; o < e.length; ++o){
                    if ((r -= 2) < 0) break;
                    t = e.charCodeAt(o);
                    f = t >> 8;
                    n = t % 256;
                    i.push(n);
                    i.push(f);
                }
                return i;
            }
            function base64ToBytes(e) {
                return f.toByteArray(base64clean(e));
            }
            function blitBuffer(e, r, t, f) {
                for(var n = 0; n < f; ++n){
                    if (n + t >= r.length || n >= e.length) break;
                    r[n + t] = e[n];
                }
                return n;
            }
            function isInstance(e, r) {
                return e instanceof r || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === r.name;
            }
            function numberIsNaN(e) {
                return e !== e;
            }
            var s = function() {
                var e = "0123456789abcdef";
                var r = new Array(256);
                for(var t = 0; t < 16; ++t){
                    var f = t * 16;
                    for(var n = 0; n < 16; ++n){
                        r[f + n] = e[t] + e[n];
                    }
                }
                return r;
            }();
        },
        783: function(e, r) {
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ r.read = function(e, r, t, f, n) {
                var i, o;
                var u = n * 8 - f - 1;
                var a = (1 << u) - 1;
                var s = a >> 1;
                var h = -7;
                var c = t ? n - 1 : 0;
                var l = t ? -1 : 1;
                var p = e[r + c];
                c += l;
                i = p & (1 << -h) - 1;
                p >>= -h;
                h += u;
                for(; h > 0; i = i * 256 + e[r + c], c += l, h -= 8){}
                o = i & (1 << -h) - 1;
                i >>= -h;
                h += f;
                for(; h > 0; o = o * 256 + e[r + c], c += l, h -= 8){}
                if (i === 0) {
                    i = 1 - s;
                } else if (i === a) {
                    return o ? NaN : (p ? -1 : 1) * Infinity;
                } else {
                    o = o + Math.pow(2, f);
                    i = i - s;
                }
                return (p ? -1 : 1) * o * Math.pow(2, i - f);
            };
            r.write = function(e, r, t, f, n, i) {
                var o, u, a;
                var s = i * 8 - n - 1;
                var h = (1 << s) - 1;
                var c = h >> 1;
                var l = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                var p = f ? 0 : i - 1;
                var y = f ? 1 : -1;
                var g = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
                r = Math.abs(r);
                if (isNaN(r) || r === Infinity) {
                    u = isNaN(r) ? 1 : 0;
                    o = h;
                } else {
                    o = Math.floor(Math.log(r) / Math.LN2);
                    if (r * (a = Math.pow(2, -o)) < 1) {
                        o--;
                        a *= 2;
                    }
                    if (o + c >= 1) {
                        r += l / a;
                    } else {
                        r += l * Math.pow(2, 1 - c);
                    }
                    if (r * a >= 2) {
                        o++;
                        a /= 2;
                    }
                    if (o + c >= h) {
                        u = 0;
                        o = h;
                    } else if (o + c >= 1) {
                        u = (r * a - 1) * Math.pow(2, n);
                        o = o + c;
                    } else {
                        u = r * Math.pow(2, c - 1) * Math.pow(2, n);
                        o = 0;
                    }
                }
                for(; n >= 8; e[t + p] = u & 255, p += y, u /= 256, n -= 8){}
                o = o << n | u;
                s += n;
                for(; s > 0; e[t + p] = o & 255, p += y, o /= 256, s -= 8){}
                e[t + p - y] |= g * 128;
            };
        }
    };
    var r = {};
    function __nccwpck_require__(t) {
        var f = r[t];
        if (f !== undefined) {
            return f.exports;
        }
        var n = r[t] = {
            exports: {}
        };
        var i = true;
        try {
            e[t](n, n.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[t];
        }
        return n.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Documents/React apps/lfas-training-next/node_modules/next/dist/compiled/buffer") + "/";
    var t = __nccwpck_require__(72);
    module.exports = t;
})();
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
'use strict';
;
class AxiosError extends Error {
    static from(error, code, config, request, response, customProps) {
        const axiosError = new AxiosError(error.message, code || error.code, config, request, response);
        axiosError.cause = error;
        axiosError.name = error.name;
        customProps && Object.assign(axiosError, customProps);
        return axiosError;
    }
    /**
     * Create an Error with the specified message, config, error code, request and response.
     *
     * @param {string} message The error message.
     * @param {string} [code] The error code (for example, 'ECONNABORTED').
     * @param {Object} [config] The config.
     * @param {Object} [request] The request.
     * @param {Object} [response] The response.
     *
     * @returns {Error} The created error.
     */ constructor(message, code, config, request, response){
        super(message);
        this.name = 'AxiosError';
        this.isAxiosError = true;
        code && (this.code = code);
        config && (this.config = config);
        request && (this.request = request);
        if (response) {
            this.response = response;
            this.status = response.status;
        }
    }
    toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toJSONObject(this.config),
            code: this.code,
            status: this.status
        };
    }
}
// This can be changed to static properties as soon as the parser options in .eslint.cjs are updated.
AxiosError.ERR_BAD_OPTION_VALUE = 'ERR_BAD_OPTION_VALUE';
AxiosError.ERR_BAD_OPTION = 'ERR_BAD_OPTION';
AxiosError.ECONNABORTED = 'ECONNABORTED';
AxiosError.ETIMEDOUT = 'ETIMEDOUT';
AxiosError.ERR_NETWORK = 'ERR_NETWORK';
AxiosError.ERR_FR_TOO_MANY_REDIRECTS = 'ERR_FR_TOO_MANY_REDIRECTS';
AxiosError.ERR_DEPRECATED = 'ERR_DEPRECATED';
AxiosError.ERR_BAD_RESPONSE = 'ERR_BAD_RESPONSE';
AxiosError.ERR_BAD_REQUEST = 'ERR_BAD_REQUEST';
AxiosError.ERR_CANCELED = 'ERR_CANCELED';
AxiosError.ERR_NOT_SUPPORT = 'ERR_NOT_SUPPORT';
AxiosError.ERR_INVALID_URL = 'ERR_INVALID_URL';
const __TURBOPACK__default__export__ = AxiosError;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/null.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// eslint-disable-next-line strict
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = null;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/toFormData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$null$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/null.js [app-client] (ecmascript)");
'use strict';
;
;
;
/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */ function isVisitable(thing) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isPlainObject(thing) || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(thing);
}
/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */ function removeBrackets(key) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].endsWith(key, '[]') ? key.slice(0, -2) : key;
}
/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */ function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
        // eslint-disable-next-line no-param-reassign
        token = removeBrackets(token);
        return !dots && i ? '[' + token + ']' : token;
    }).join(dots ? '.' : '');
}
/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */ function isFlatArray(arr) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(arr) && !arr.some(isVisitable);
}
const predicates = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toFlatObject(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
});
/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/ /**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */ function toFormData(obj, formData, options) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isObject(obj)) {
        throw new TypeError('target must be an object');
    }
    // eslint-disable-next-line no-param-reassign
    formData = formData || new (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$null$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] || FormData)();
    // eslint-disable-next-line no-param-reassign
    options = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toFlatObject(options, {
        metaTokens: true,
        dots: false,
        indexes: false
    }, false, function defined(option, source) {
        // eslint-disable-next-line no-eq-null,eqeqeq
        return !__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    // eslint-disable-next-line no-use-before-define
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
    const useBlob = _Blob && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isSpecCompliantForm(formData);
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(visitor)) {
        throw new TypeError('visitor must be a function');
    }
    function convertValue(value) {
        if (value === null) return '';
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isDate(value)) {
            return value.toISOString();
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBoolean(value)) {
            return value.toString();
        }
        if (!useBlob && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBlob(value)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('Blob is not supported. Use a Buffer instead.');
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArrayBuffer(value) || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isTypedArray(value)) {
            return useBlob && typeof Blob === 'function' ? new Blob([
                value
            ]) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(value);
        }
        return value;
    }
    /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */ function defaultVisitor(value, key, path) {
        let arr = value;
        if (value && !path && typeof value === 'object') {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].endsWith(key, '{}')) {
                // eslint-disable-next-line no-param-reassign
                key = metaTokens ? key : key.slice(0, -2);
                // eslint-disable-next-line no-param-reassign
                value = JSON.stringify(value);
            } else if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(value) && isFlatArray(value) || (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFileList(value) || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].endsWith(key, '[]')) && (arr = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toArray(value))) {
                // eslint-disable-next-line no-param-reassign
                key = removeBrackets(key);
                arr.forEach(function each(el, index) {
                    !(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(el) || el === null) && formData.append(// eslint-disable-next-line no-nested-ternary
                    indexes === true ? renderKey([
                        key
                    ], index, dots) : indexes === null ? key : key + '[]', convertValue(el));
                });
                return false;
            }
        }
        if (isVisitable(value)) {
            return true;
        }
        formData.append(renderKey(path, key, dots), convertValue(value));
        return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
        defaultVisitor,
        convertValue,
        isVisitable
    });
    function build(value, path) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(value)) return;
        if (stack.indexOf(value) !== -1) {
            throw Error('Circular reference detected in ' + path.join('.'));
        }
        stack.push(value);
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach(value, function each(el, key) {
            const result = !(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(el) || el === null) && visitor.call(formData, el, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(key) ? key.trim() : key, path, exposedHelpers);
            if (result === true) {
                build(el, path ? path.concat(key) : [
                    key
                ]);
            }
        });
        stack.pop();
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isObject(obj)) {
        throw new TypeError('data must be an object');
    }
    build(obj);
    return formData;
}
const __TURBOPACK__default__export__ = toFormData;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/AxiosURLSearchParams.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/toFormData.js [app-client] (ecmascript)");
'use strict';
;
/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */ function encode(str) {
    const charMap = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+',
        '%00': '\x00'
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
        return charMap[match];
    });
}
/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */ function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
    this._pairs.push([
        name,
        value
    ]);
};
prototype.toString = function toString(encoder) {
    const _encode = encoder ? function(value) {
        return encoder.call(this, value, encode);
    } : encode;
    return this._pairs.map(function each(pair) {
        return _encode(pair[0]) + '=' + _encode(pair[1]);
    }, '').join('&');
};
const __TURBOPACK__default__export__ = AxiosURLSearchParams;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/buildURL.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>buildURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$AxiosURLSearchParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/AxiosURLSearchParams.js [app-client] (ecmascript)");
'use strict';
;
;
/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */ function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+');
}
function buildURL(url, params, options) {
    if (!params) {
        return url;
    }
    const _encode = options && options.encode || encode;
    const _options = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(options) ? {
        serialize: options
    } : options;
    const serializeFn = _options && _options.serialize;
    let serializedParams;
    if (serializeFn) {
        serializedParams = serializeFn(params, _options);
    } else {
        serializedParams = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isURLSearchParams(params) ? params.toString() : new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$AxiosURLSearchParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](params, _options).toString(_encode);
    }
    if (serializedParams) {
        const hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/InterceptorManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
'use strict';
;
class InterceptorManager {
    constructor(){
        this.handlers = [];
    }
    /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */ use(fulfilled, rejected, options) {
        this.handlers.push({
            fulfilled,
            rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
    }
    /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */ eject(id) {
        if (this.handlers[id]) {
            this.handlers[id] = null;
        }
    }
    /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */ clear() {
        if (this.handlers) {
            this.handlers = [];
        }
    }
    /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */ forEach(fn) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) {
                fn(h);
            }
        });
    }
}
const __TURBOPACK__default__export__ = InterceptorManager;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/defaults/transitional.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
'use strict';
const __TURBOPACK__default__export__ = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/platform/browser/classes/URLSearchParams.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$AxiosURLSearchParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/AxiosURLSearchParams.js [app-client] (ecmascript)");
'use strict';
;
const __TURBOPACK__default__export__ = typeof URLSearchParams !== 'undefined' ? URLSearchParams : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$AxiosURLSearchParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/platform/browser/classes/FormData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
'use strict';
const __TURBOPACK__default__export__ = typeof FormData !== 'undefined' ? FormData : null;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/platform/browser/classes/Blob.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
'use strict';
const __TURBOPACK__default__export__ = typeof Blob !== 'undefined' ? Blob : null;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/platform/browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$classes$2f$URLSearchParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/platform/browser/classes/URLSearchParams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$classes$2f$FormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/platform/browser/classes/FormData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$classes$2f$Blob$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/platform/browser/classes/Blob.js [app-client] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = {
    isBrowser: true,
    classes: {
        URLSearchParams: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$classes$2f$URLSearchParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        FormData: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$classes$2f$FormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        Blob: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$classes$2f$Blob$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    protocols: [
        'http',
        'https',
        'file',
        'blob',
        'url',
        'data'
    ]
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/platform/common/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasBrowserEnv",
    ()=>hasBrowserEnv,
    "hasStandardBrowserEnv",
    ()=>hasStandardBrowserEnv,
    "hasStandardBrowserWebWorkerEnv",
    ()=>hasStandardBrowserWebWorkerEnv,
    "navigator",
    ()=>_navigator,
    "origin",
    ()=>origin
]);
const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';
const _navigator = typeof navigator === 'object' && navigator || undefined;
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */ const hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || [
    'ReactNative',
    'NativeScript',
    'NS'
].indexOf(_navigator.product) < 0);
/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */ const hasStandardBrowserWebWorkerEnv = (()=>{
    return typeof WorkerGlobalScope !== 'undefined' && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === 'function';
})();
const origin = hasBrowserEnv && window.location.href || 'http://localhost';
;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/platform/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/platform/browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/platform/common/utils.js [app-client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/toURLEncodedForm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toURLEncodedForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/toFormData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/platform/index.js [app-client] (ecmascript)");
'use strict';
;
;
;
function toURLEncodedForm(data, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].classes.URLSearchParams(), {
        visitor: function(value, key, path, helpers) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isNode && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBuffer(value)) {
                this.append(key, value.toString('base64'));
                return false;
            }
            return helpers.defaultVisitor.apply(this, arguments);
        },
        ...options
    });
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/formDataToJSON.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
'use strict';
;
/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */ function parsePropPath(name) {
    // foo[x][y][z]
    // foo.x.y.z
    // foo-x-y-z
    // foo x y z
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].matchAll(/\w+|\[(\w*)]/g, name).map((match)=>{
        return match[0] === '[]' ? '' : match[1] || match[0];
    });
}
/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */ function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for(i = 0; i < len; i++){
        key = keys[i];
        obj[key] = arr[key];
    }
    return obj;
}
/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */ function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
        let name = path[index++];
        if (name === '__proto__') return true;
        const isNumericKey = Number.isFinite(+name);
        const isLast = index >= path.length;
        name = !name && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(target) ? target.length : name;
        if (isLast) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasOwnProp(target, name)) {
                target[name] = [
                    target[name],
                    value
                ];
            } else {
                target[name] = value;
            }
            return !isNumericKey;
        }
        if (!target[name] || !__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isObject(target[name])) {
            target[name] = [];
        }
        const result = buildPath(path, value, target[name], index);
        if (result && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(target[name])) {
            target[name] = arrayToObject(target[name]);
        }
        return !isNumericKey;
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFormData(formData) && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(formData.entries)) {
        const obj = {};
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEachEntry(formData, (name, value)=>{
            buildPath(parsePropPath(name), value, obj, 0);
        });
        return obj;
    }
    return null;
}
const __TURBOPACK__default__export__ = formDataToJSON;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/defaults/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$transitional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/defaults/transitional.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/toFormData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toURLEncodedForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/toURLEncodedForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/platform/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$formDataToJSON$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/formDataToJSON.js [app-client] (ecmascript)");
'use strict';
;
;
;
;
;
;
;
/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */ function stringifySafely(rawValue, parser, encoder) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(rawValue)) {
        try {
            (parser || JSON.parse)(rawValue);
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].trim(rawValue);
        } catch (e) {
            if (e.name !== 'SyntaxError') {
                throw e;
            }
        }
    }
    return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
    transitional: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$transitional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    adapter: [
        'xhr',
        'http',
        'fetch'
    ],
    transformRequest: [
        function transformRequest(data, headers) {
            const contentType = headers.getContentType() || '';
            const hasJSONContentType = contentType.indexOf('application/json') > -1;
            const isObjectPayload = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isObject(data);
            if (isObjectPayload && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isHTMLForm(data)) {
                data = new FormData(data);
            }
            const isFormData = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFormData(data);
            if (isFormData) {
                return hasJSONContentType ? JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$formDataToJSON$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data)) : data;
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArrayBuffer(data) || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBuffer(data) || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isStream(data) || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFile(data) || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBlob(data) || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isReadableStream(data)) {
                return data;
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArrayBufferView(data)) {
                return data.buffer;
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isURLSearchParams(data)) {
                headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
                return data.toString();
            }
            let isFileList;
            if (isObjectPayload) {
                if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toURLEncodedForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data, this.formSerializer).toString();
                }
                if ((isFileList = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
                    const _FormData = this.env && this.env.FormData;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(isFileList ? {
                        'files[]': data
                    } : data, _FormData && new _FormData(), this.formSerializer);
                }
            }
            if (isObjectPayload || hasJSONContentType) {
                headers.setContentType('application/json', false);
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            const transitional = this.transitional || defaults.transitional;
            const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            const JSONRequested = this.responseType === 'json';
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isResponse(data) || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isReadableStream(data)) {
                return data;
            }
            if (data && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
                const silentJSONParsing = transitional && transitional.silentJSONParsing;
                const strictJSONParsing = !silentJSONParsing && JSONRequested;
                try {
                    return JSON.parse(data, this.parseReviver);
                } catch (e) {
                    if (strictJSONParsing) {
                        if (e.name === 'SyntaxError') {
                            throw __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(e, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_BAD_RESPONSE, this, null, this.response);
                        }
                        throw e;
                    }
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].classes.FormData,
        Blob: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].classes.Blob
    },
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': undefined
        }
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach([
    'delete',
    'get',
    'head',
    'post',
    'put',
    'patch'
], (method)=>{
    defaults.headers[method] = {};
});
const __TURBOPACK__default__export__ = defaults;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/parseHeaders.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
'use strict';
;
// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent'
]);
const __TURBOPACK__default__export__ = (rawHeaders)=>{
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
        i = line.indexOf(':');
        key = line.substring(0, i).trim().toLowerCase();
        val = line.substring(i + 1).trim();
        if (!key || parsed[key] && ignoreDuplicateOf[key]) {
            return;
        }
        if (key === 'set-cookie') {
            if (parsed[key]) {
                parsed[key].push(val);
            } else {
                parsed[key] = [
                    val
                ];
            }
        } else {
            parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
        }
    });
    return parsed;
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/AxiosHeaders.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$parseHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/parseHeaders.js [app-client] (ecmascript)");
'use strict';
;
;
const $internals = Symbol('internals');
function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
    if (value === false || value == null) {
        return value;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
    const tokens = Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while(match = tokensRE.exec(str)){
        tokens[match[1]] = match[2];
    }
    return tokens;
}
const isValidHeaderName = (str)=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(filter)) {
        return filter.call(this, value, header);
    }
    if (isHeaderNameFilter) {
        value = header;
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(value)) return;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(filter)) {
        return value.indexOf(filter) !== -1;
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isRegExp(filter)) {
        return filter.test(value);
    }
}
function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str)=>{
        return char.toUpperCase() + str;
    });
}
function buildAccessors(obj, header) {
    const accessorName = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toCamelCase(' ' + header);
    [
        'get',
        'set',
        'has'
    ].forEach((methodName)=>{
        Object.defineProperty(obj, methodName + accessorName, {
            value: function(arg1, arg2, arg3) {
                return this[methodName].call(this, header, arg1, arg2, arg3);
            },
            configurable: true
        });
    });
}
class AxiosHeaders {
    constructor(headers){
        headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
        const self = this;
        function setHeader(_value, _header, _rewrite) {
            const lHeader = normalizeHeader(_header);
            if (!lHeader) {
                throw new Error('header name must be a non-empty string');
            }
            const key = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findKey(self, lHeader);
            if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) {
                self[key || _header] = normalizeValue(_value);
            }
        }
        const setHeaders = (headers, _rewrite)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach(headers, (_value, _header)=>setHeader(_value, _header, _rewrite));
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isPlainObject(header) || header instanceof this.constructor) {
            setHeaders(header, valueOrRewrite);
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
            setHeaders((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$parseHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(header), valueOrRewrite);
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isObject(header) && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isIterable(header)) {
            let obj = {}, dest, key;
            for (const entry of header){
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(entry)) {
                    throw TypeError('Object iterator must return a key-value pair');
                }
                obj[key = entry[0]] = (dest = obj[key]) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(dest) ? [
                    ...dest,
                    entry[1]
                ] : [
                    dest,
                    entry[1]
                ] : entry[1];
            }
            setHeaders(obj, valueOrRewrite);
        } else {
            header != null && setHeader(valueOrRewrite, header, rewrite);
        }
        return this;
    }
    get(header, parser) {
        header = normalizeHeader(header);
        if (header) {
            const key = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findKey(this, header);
            if (key) {
                const value = this[key];
                if (!parser) {
                    return value;
                }
                if (parser === true) {
                    return parseTokens(value);
                }
                if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(parser)) {
                    return parser.call(this, value, key);
                }
                if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isRegExp(parser)) {
                    return parser.exec(value);
                }
                throw new TypeError('parser must be boolean|regexp|function');
            }
        }
    }
    has(header, matcher) {
        header = normalizeHeader(header);
        if (header) {
            const key = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findKey(this, header);
            return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
        }
        return false;
    }
    delete(header, matcher) {
        const self = this;
        let deleted = false;
        function deleteHeader(_header) {
            _header = normalizeHeader(_header);
            if (_header) {
                const key = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findKey(self, _header);
                if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
                    delete self[key];
                    deleted = true;
                }
            }
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(header)) {
            header.forEach(deleteHeader);
        } else {
            deleteHeader(header);
        }
        return deleted;
    }
    clear(matcher) {
        const keys = Object.keys(this);
        let i = keys.length;
        let deleted = false;
        while(i--){
            const key = keys[i];
            if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
                delete this[key];
                deleted = true;
            }
        }
        return deleted;
    }
    normalize(format) {
        const self = this;
        const headers = {};
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach(this, (value, header)=>{
            const key = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findKey(headers, header);
            if (key) {
                self[key] = normalizeValue(value);
                delete self[header];
                return;
            }
            const normalized = format ? formatHeader(header) : String(header).trim();
            if (normalized !== header) {
                delete self[header];
            }
            self[normalized] = normalizeValue(value);
            headers[normalized] = true;
        });
        return this;
    }
    concat(...targets) {
        return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
        const obj = Object.create(null);
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach(this, (value, header)=>{
            value != null && value !== false && (obj[header] = asStrings && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(value) ? value.join(', ') : value);
        });
        return obj;
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([header, value])=>header + ': ' + value).join('\n');
    }
    getSetCookie() {
        return this.get("set-cookie") || [];
    }
    get [Symbol.toStringTag]() {
        return 'AxiosHeaders';
    }
    static from(thing) {
        return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
        const computed = new this(first);
        targets.forEach((target)=>computed.set(target));
        return computed;
    }
    static accessor(header) {
        const internals = this[$internals] = this[$internals] = {
            accessors: {}
        };
        const accessors = internals.accessors;
        const prototype = this.prototype;
        function defineAccessor(_header) {
            const lHeader = normalizeHeader(_header);
            if (!accessors[lHeader]) {
                buildAccessors(prototype, _header);
                accessors[lHeader] = true;
            }
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
        return this;
    }
}
AxiosHeaders.accessor([
    'Content-Type',
    'Content-Length',
    'Accept',
    'Accept-Encoding',
    'User-Agent',
    'Authorization'
]);
// reserved names hotfix
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].reduceDescriptors(AxiosHeaders.prototype, ({ value }, key)=>{
    let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
    return {
        get: ()=>value,
        set (headerValue) {
            this[mapped] = headerValue;
        }
    };
});
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].freezeMethods(AxiosHeaders);
const __TURBOPACK__default__export__ = AxiosHeaders;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/transformData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>transformData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/defaults/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/AxiosHeaders.js [app-client] (ecmascript)");
'use strict';
;
;
;
function transformData(fns, response) {
    const config = this || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    const context = response || config;
    const headers = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(context.headers);
    let data = context.data;
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach(fns, function transform(fn) {
        data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
    });
    headers.normalize();
    return data;
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/cancel/isCancel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isCancel
]);
'use strict';
function isCancel(value) {
    return !!(value && value.__CANCEL__);
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/cancel/CanceledError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
'use strict';
;
class CanceledError extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */ constructor(message, config, request){
        super(message == null ? 'canceled' : message, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_CANCELED, config, request);
        this.name = 'CanceledError';
        this.__CANCEL__ = true;
    }
}
const __TURBOPACK__default__export__ = CanceledError;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/settle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>settle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
'use strict';
;
function settle(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
    } else {
        reject(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('Request failed with status code ' + response.status, [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_BAD_REQUEST,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_BAD_RESPONSE
        ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
    }
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/parseProtocol.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>parseProtocol
]);
'use strict';
function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || '';
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/speedometer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
'use strict';
/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */ function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== undefined ? min : 1000;
    return function push(chunkLength) {
        const now = Date.now();
        const startedAt = timestamps[tail];
        if (!firstSampleTS) {
            firstSampleTS = now;
        }
        bytes[head] = chunkLength;
        timestamps[head] = now;
        let i = tail;
        let bytesCount = 0;
        while(i !== head){
            bytesCount += bytes[i++];
            i = i % samplesCount;
        }
        head = (head + 1) % samplesCount;
        if (head === tail) {
            tail = (tail + 1) % samplesCount;
        }
        if (now - firstSampleTS < min) {
            return;
        }
        const passed = startedAt && now - startedAt;
        return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
    };
}
const __TURBOPACK__default__export__ = speedometer;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/throttle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */ function throttle(fn, freq) {
    let timestamp = 0;
    let threshold = 1000 / freq;
    let lastArgs;
    let timer;
    const invoke = (args, now = Date.now())=>{
        timestamp = now;
        lastArgs = null;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        fn(...args);
    };
    const throttled = (...args)=>{
        const now = Date.now();
        const passed = now - timestamp;
        if (passed >= threshold) {
            invoke(args, now);
        } else {
            lastArgs = args;
            if (!timer) {
                timer = setTimeout(()=>{
                    timer = null;
                    invoke(lastArgs);
                }, threshold - passed);
            }
        }
    };
    const flush = ()=>lastArgs && invoke(lastArgs);
    return [
        throttled,
        flush
    ];
}
const __TURBOPACK__default__export__ = throttle;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/progressEventReducer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "asyncDecorator",
    ()=>asyncDecorator,
    "progressEventDecorator",
    ()=>progressEventDecorator,
    "progressEventReducer",
    ()=>progressEventReducer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$speedometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/speedometer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/throttle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
;
;
;
const progressEventReducer = (listener, isDownloadStream, freq = 3)=>{
    let bytesNotified = 0;
    const _speedometer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$speedometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(50, 250);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((e)=>{
        const loaded = e.loaded;
        const total = e.lengthComputable ? e.total : undefined;
        const progressBytes = loaded - bytesNotified;
        const rate = _speedometer(progressBytes);
        const inRange = loaded <= total;
        bytesNotified = loaded;
        const data = {
            loaded,
            total,
            progress: total ? loaded / total : undefined,
            bytes: progressBytes,
            rate: rate ? rate : undefined,
            estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
            event: e,
            lengthComputable: total != null,
            [isDownloadStream ? 'download' : 'upload']: true
        };
        listener(data);
    }, freq);
};
const progressEventDecorator = (total, throttled)=>{
    const lengthComputable = total != null;
    return [
        (loaded)=>throttled[0]({
                lengthComputable,
                total,
                loaded
            }),
        throttled[1]
    ];
};
const asyncDecorator = (fn)=>(...args)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].asap(()=>fn(...args));
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/isURLSameOrigin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/platform/index.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasStandardBrowserEnv ? ((origin, isMSIE)=>(url)=>{
        url = new URL(url, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].origin);
        return origin.protocol === url.protocol && origin.host === url.host && (isMSIE || origin.port === url.port);
    })(new URL(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].origin), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].navigator && /(msie|trident)/i.test(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].navigator.userAgent)) : ()=>true;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/cookies.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/platform/index.js [app-client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasStandardBrowserEnv ? // Standard browser envs support document.cookie
{
    write (name, value, expires, path, domain, secure, sameSite) {
        if (typeof document === 'undefined') return;
        const cookie = [
            `${name}=${encodeURIComponent(value)}`
        ];
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isNumber(expires)) {
            cookie.push(`expires=${new Date(expires).toUTCString()}`);
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(path)) {
            cookie.push(`path=${path}`);
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(domain)) {
            cookie.push(`domain=${domain}`);
        }
        if (secure === true) {
            cookie.push('secure');
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(sameSite)) {
            cookie.push(`SameSite=${sameSite}`);
        }
        document.cookie = cookie.join('; ');
    },
    read (name) {
        if (typeof document === 'undefined') return null;
        const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
        return match ? decodeURIComponent(match[1]) : null;
    },
    remove (name) {
        this.write(name, '', Date.now() - 86400000, '/');
    }
} : // Non-standard browser env (web workers, react-native) lack needed support.
{
    write () {},
    read () {
        return null;
    },
    remove () {}
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/isAbsoluteURL.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isAbsoluteURL
]);
'use strict';
function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/combineURLs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>combineURLs
]);
'use strict';
function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/buildFullPath.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>buildFullPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$isAbsoluteURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/isAbsoluteURL.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$combineURLs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/combineURLs.js [app-client] (ecmascript)");
'use strict';
;
;
function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
    let isRelativeUrl = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$isAbsoluteURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(requestedURL);
    if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$combineURLs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(baseURL, requestedURL);
    }
    return requestedURL;
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/mergeConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>mergeConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/AxiosHeaders.js [app-client] (ecmascript)");
'use strict';
;
;
const headersToObject = (thing)=>thing instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] ? {
        ...thing
    } : thing;
function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, prop, caseless) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isPlainObject(target) && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isPlainObject(source)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].merge.call({
                caseless
            }, target, source);
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isPlainObject(source)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].merge({}, source);
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(source)) {
            return source.slice();
        }
        return source;
    }
    function mergeDeepProperties(a, b, prop, caseless) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(b)) {
            return getMergedValue(a, b, prop, caseless);
        } else if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(a)) {
            return getMergedValue(undefined, a, prop, caseless);
        }
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(a, b) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(b)) {
            return getMergedValue(undefined, b);
        }
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(a, b) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(b)) {
            return getMergedValue(undefined, b);
        } else if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(a)) {
            return getMergedValue(undefined, a);
        }
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(a, b, prop) {
        if (prop in config2) {
            return getMergedValue(a, b);
        } else if (prop in config1) {
            return getMergedValue(undefined, a);
        }
    }
    const mergeMap = {
        url: valueFromConfig2,
        method: valueFromConfig2,
        data: valueFromConfig2,
        baseURL: defaultToConfig2,
        transformRequest: defaultToConfig2,
        transformResponse: defaultToConfig2,
        paramsSerializer: defaultToConfig2,
        timeout: defaultToConfig2,
        timeoutMessage: defaultToConfig2,
        withCredentials: defaultToConfig2,
        withXSRFToken: defaultToConfig2,
        adapter: defaultToConfig2,
        responseType: defaultToConfig2,
        xsrfCookieName: defaultToConfig2,
        xsrfHeaderName: defaultToConfig2,
        onUploadProgress: defaultToConfig2,
        onDownloadProgress: defaultToConfig2,
        decompress: defaultToConfig2,
        maxContentLength: defaultToConfig2,
        maxBodyLength: defaultToConfig2,
        beforeRedirect: defaultToConfig2,
        transport: defaultToConfig2,
        httpAgent: defaultToConfig2,
        httpsAgent: defaultToConfig2,
        cancelToken: defaultToConfig2,
        socketPath: defaultToConfig2,
        responseEncoding: defaultToConfig2,
        validateStatus: mergeDirectKeys,
        headers: (a, b, prop)=>mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach(Object.keys({
        ...config1,
        ...config2
    }), function computeConfigValue(prop) {
        const merge = mergeMap[prop] || mergeDeepProperties;
        const configValue = merge(config1[prop], config2[prop], prop);
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/resolveConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/platform/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$isURLSameOrigin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/isURLSameOrigin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/cookies.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$buildFullPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/buildFullPath.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/mergeConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/AxiosHeaders.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$buildURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/buildURL.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const __TURBOPACK__default__export__ = (config)=>{
    const newConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, config);
    let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
    newConfig.headers = headers = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(headers);
    newConfig.url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$buildURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$buildFullPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls), config.params, config.paramsSerializer);
    // HTTP basic authentication
    if (auth) {
        headers.set('Authorization', 'Basic ' + btoa((auth.username || '') + ':' + (auth.password ? unescape(encodeURIComponent(auth.password)) : '')));
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFormData(data)) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasStandardBrowserEnv || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasStandardBrowserWebWorkerEnv) {
            headers.setContentType(undefined); // browser handles it
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(data.getHeaders)) {
            // Node.js FormData (like form-data package)
            const formHeaders = data.getHeaders();
            // Only set safe headers to avoid overwriting security headers
            const allowedHeaders = [
                'content-type',
                'content-length'
            ];
            Object.entries(formHeaders).forEach(([key, val])=>{
                if (allowedHeaders.includes(key.toLowerCase())) {
                    headers.set(key, val);
                }
            });
        }
    }
    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasStandardBrowserEnv) {
        withXSRFToken && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
        if (withXSRFToken || withXSRFToken !== false && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$isURLSameOrigin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(newConfig.url)) {
            // Add xsrf header
            const xsrfValue = xsrfHeaderName && xsrfCookieName && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].read(xsrfCookieName);
            if (xsrfValue) {
                headers.set(xsrfHeaderName, xsrfValue);
            }
        }
    }
    return newConfig;
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/adapters/xhr.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$settle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/settle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$transitional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/defaults/transitional.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/cancel/CanceledError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$parseProtocol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/parseProtocol.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/platform/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/AxiosHeaders.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/progressEventReducer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$resolveConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/resolveConfig.js [app-client] (ecmascript)");
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
const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
const __TURBOPACK__default__export__ = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$resolveConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(config);
        let requestData = _config.data;
        const requestHeaders = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(_config.headers).normalize();
        let { responseType, onUploadProgress, onDownloadProgress } = _config;
        let onCanceled;
        let uploadThrottled, downloadThrottled;
        let flushUpload, flushDownload;
        function done() {
            flushUpload && flushUpload(); // flush events
            flushDownload && flushDownload(); // flush events
            _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
            _config.signal && _config.signal.removeEventListener('abort', onCanceled);
        }
        let request = new XMLHttpRequest();
        request.open(_config.method.toUpperCase(), _config.url, true);
        // Set the request timeout in MS
        request.timeout = _config.timeout;
        function onloadend() {
            if (!request) {
                return;
            }
            // Prepare the response
            const responseHeaders = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
            const responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
            const response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config,
                request
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$settle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ('onloadend' in request) {
            // Use onloadend if available
            request.onloadend = onloadend;
        } else {
            // Listen for ready state to emulate onloadend
            request.onreadystatechange = function handleLoad() {
                if (!request || request.readyState !== 4) {
                    return;
                }
                // The request errored out and we didn't get a response, this will be
                // handled by onerror instead
                // With one exception: request that using file: protocol, most browsers
                // will return status as 0 even though it's a successful request
                if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                    return;
                }
                // readystate handler is calling before onerror or ontimeout handlers,
                // so we should call onloadend on the next 'tick'
                setTimeout(onloadend);
            };
        }
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) {
                return;
            }
            reject(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('Request aborted', __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError(event) {
            // Browsers deliver a ProgressEvent in XHR onerror
            // (message may be empty; when present, surface it)
            // See https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/error_event
            const msg = event && event.message ? event.message : 'Network Error';
            const err = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](msg, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_NETWORK, config, request);
            // attach the underlying event for consumers who want details
            err.event = event || null;
            reject(err);
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
            const transitional = _config.transitional || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$transitional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
            if (_config.timeoutErrorMessage) {
                timeoutErrorMessage = _config.timeoutErrorMessage;
            }
            reject(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](timeoutErrorMessage, transitional.clarifyTimeoutError ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ETIMEDOUT : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Remove Content-Type if data is undefined
        requestData === undefined && requestHeaders.setContentType(null);
        // Add headers to the request
        if ('setRequestHeader' in request) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
                request.setRequestHeader(key, val);
            });
        }
        // Add withCredentials to request if needed
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(_config.withCredentials)) {
            request.withCredentials = !!_config.withCredentials;
        }
        // Add responseType to request if needed
        if (responseType && responseType !== 'json') {
            request.responseType = _config.responseType;
        }
        // Handle progress if needed
        if (onDownloadProgress) {
            [downloadThrottled, flushDownload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressEventReducer"])(onDownloadProgress, true);
            request.addEventListener('progress', downloadThrottled);
        }
        // Not all browsers support upload events
        if (onUploadProgress && request.upload) {
            [uploadThrottled, flushUpload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressEventReducer"])(onUploadProgress);
            request.upload.addEventListener('progress', uploadThrottled);
            request.upload.addEventListener('loadend', flushUpload);
        }
        if (_config.cancelToken || _config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = (cancel)=>{
                if (!request) {
                    return;
                }
                reject(!cancel || cancel.type ? new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](null, config, request) : cancel);
                request.abort();
                request = null;
            };
            _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
            if (_config.signal) {
                _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
            }
        }
        const protocol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$parseProtocol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_config.url);
        if (protocol && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].protocols.indexOf(protocol) === -1) {
            reject(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('Unsupported protocol ' + protocol + ':', __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_BAD_REQUEST, config));
            return;
        }
        // Send the request
        request.send(requestData || null);
    });
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/composeSignals.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/cancel/CanceledError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
;
;
;
const composeSignals = (signals, timeout)=>{
    const { length } = signals = signals ? signals.filter(Boolean) : [];
    if (timeout || length) {
        let controller = new AbortController();
        let aborted;
        const onabort = function(reason) {
            if (!aborted) {
                aborted = true;
                unsubscribe();
                const err = reason instanceof Error ? reason : this.reason;
                controller.abort(err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] ? err : new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](err instanceof Error ? err.message : err));
            }
        };
        let timer = timeout && setTimeout(()=>{
            timer = null;
            onabort(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](`timeout of ${timeout}ms exceeded`, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ETIMEDOUT));
        }, timeout);
        const unsubscribe = ()=>{
            if (signals) {
                timer && clearTimeout(timer);
                timer = null;
                signals.forEach((signal)=>{
                    signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener('abort', onabort);
                });
                signals = null;
            }
        };
        signals.forEach((signal)=>signal.addEventListener('abort', onabort));
        const { signal } = controller;
        signal.unsubscribe = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].asap(unsubscribe);
        return signal;
    }
};
const __TURBOPACK__default__export__ = composeSignals;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/trackStream.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readBytes",
    ()=>readBytes,
    "streamChunk",
    ()=>streamChunk,
    "trackStream",
    ()=>trackStream
]);
const streamChunk = function*(chunk, chunkSize) {
    let len = chunk.byteLength;
    if (!chunkSize || len < chunkSize) {
        yield chunk;
        return;
    }
    let pos = 0;
    let end;
    while(pos < len){
        end = pos + chunkSize;
        yield chunk.slice(pos, end);
        pos = end;
    }
};
const readBytes = async function*(iterable, chunkSize) {
    for await (const chunk of readStream(iterable)){
        yield* streamChunk(chunk, chunkSize);
    }
};
const readStream = async function*(stream) {
    if (stream[Symbol.asyncIterator]) {
        yield* stream;
        return;
    }
    const reader = stream.getReader();
    try {
        for(;;){
            const { done, value } = await reader.read();
            if (done) {
                break;
            }
            yield value;
        }
    } finally{
        await reader.cancel();
    }
};
const trackStream = (stream, chunkSize, onProgress, onFinish)=>{
    const iterator = readBytes(stream, chunkSize);
    let bytes = 0;
    let done;
    let _onFinish = (e)=>{
        if (!done) {
            done = true;
            onFinish && onFinish(e);
        }
    };
    return new ReadableStream({
        async pull (controller) {
            try {
                const { done, value } = await iterator.next();
                if (done) {
                    _onFinish();
                    controller.close();
                    return;
                }
                let len = value.byteLength;
                if (onProgress) {
                    let loadedBytes = bytes += len;
                    onProgress(loadedBytes);
                }
                controller.enqueue(new Uint8Array(value));
            } catch (err) {
                _onFinish(err);
                throw err;
            }
        },
        cancel (reason) {
            _onFinish(reason);
            return iterator.return();
        }
    }, {
        highWaterMark: 2
    });
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/adapters/fetch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getFetch",
    ()=>getFetch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/platform/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$composeSignals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/composeSignals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$trackStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/trackStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/AxiosHeaders.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/progressEventReducer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$resolveConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/resolveConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$settle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/settle.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const DEFAULT_CHUNK_SIZE = 64 * 1024;
const { isFunction } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const globalFetchAPI = (({ Request, Response })=>({
        Request,
        Response
    }))(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].global);
const { ReadableStream, TextEncoder } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].global;
const test = (fn, ...args)=>{
    try {
        return !!fn(...args);
    } catch (e) {
        return false;
    }
};
const factory = (env)=>{
    env = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].merge.call({
        skipUndefined: true
    }, globalFetchAPI, env);
    const { fetch: envFetch, Request, Response } = env;
    const isFetchSupported = envFetch ? isFunction(envFetch) : typeof fetch === 'function';
    const isRequestSupported = isFunction(Request);
    const isResponseSupported = isFunction(Response);
    if (!isFetchSupported) {
        return false;
    }
    const isReadableStreamSupported = isFetchSupported && isFunction(ReadableStream);
    const encodeText = isFetchSupported && (typeof TextEncoder === 'function' ? ((encoder)=>(str)=>encoder.encode(str))(new TextEncoder()) : async (str)=>new Uint8Array(await new Request(str).arrayBuffer()));
    const supportsRequestStream = isRequestSupported && isReadableStreamSupported && test(()=>{
        let duplexAccessed = false;
        const hasContentType = new Request(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].origin, {
            body: new ReadableStream(),
            method: 'POST',
            get duplex () {
                duplexAccessed = true;
                return 'half';
            }
        }).headers.has('Content-Type');
        return duplexAccessed && !hasContentType;
    });
    const supportsResponseStream = isResponseSupported && isReadableStreamSupported && test(()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isReadableStream(new Response('').body));
    const resolvers = {
        stream: supportsResponseStream && ((res)=>res.body)
    };
    isFetchSupported && (()=>{
        [
            'text',
            'arrayBuffer',
            'blob',
            'formData',
            'stream'
        ].forEach((type)=>{
            !resolvers[type] && (resolvers[type] = (res, config)=>{
                let method = res && res[type];
                if (method) {
                    return method.call(res);
                }
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](`Response type '${type}' is not supported`, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_NOT_SUPPORT, config);
            });
        });
    })();
    const getBodyLength = async (body)=>{
        if (body == null) {
            return 0;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBlob(body)) {
            return body.size;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isSpecCompliantForm(body)) {
            const _request = new Request(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].origin, {
                method: 'POST',
                body
            });
            return (await _request.arrayBuffer()).byteLength;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArrayBufferView(body) || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArrayBuffer(body)) {
            return body.byteLength;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isURLSearchParams(body)) {
            body = body + '';
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(body)) {
            return (await encodeText(body)).byteLength;
        }
    };
    const resolveBodyLength = async (headers, body)=>{
        const length = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toFiniteNumber(headers.getContentLength());
        return length == null ? getBodyLength(body) : length;
    };
    return async (config)=>{
        let { url, method, data, signal, cancelToken, timeout, onDownloadProgress, onUploadProgress, responseType, headers, withCredentials = 'same-origin', fetchOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$resolveConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(config);
        let _fetch = envFetch || fetch;
        responseType = responseType ? (responseType + '').toLowerCase() : 'text';
        let composedSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$composeSignals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            signal,
            cancelToken && cancelToken.toAbortSignal()
        ], timeout);
        let request = null;
        const unsubscribe = composedSignal && composedSignal.unsubscribe && (()=>{
            composedSignal.unsubscribe();
        });
        let requestContentLength;
        try {
            if (onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head' && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
                let _request = new Request(url, {
                    method: 'POST',
                    body: data,
                    duplex: "half"
                });
                let contentTypeHeader;
                if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
                    headers.setContentType(contentTypeHeader);
                }
                if (_request.body) {
                    const [onProgress, flush] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressEventDecorator"])(requestContentLength, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressEventReducer"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asyncDecorator"])(onUploadProgress)));
                    data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$trackStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackStream"])(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
                }
            }
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(withCredentials)) {
                withCredentials = withCredentials ? 'include' : 'omit';
            }
            // Cloudflare Workers throws when credentials are defined
            // see https://github.com/cloudflare/workerd/issues/902
            const isCredentialsSupported = isRequestSupported && "credentials" in Request.prototype;
            const resolvedOptions = {
                ...fetchOptions,
                signal: composedSignal,
                method: method.toUpperCase(),
                headers: headers.normalize().toJSON(),
                body: data,
                duplex: "half",
                credentials: isCredentialsSupported ? withCredentials : undefined
            };
            request = isRequestSupported && new Request(url, resolvedOptions);
            let response = await (isRequestSupported ? _fetch(request, fetchOptions) : _fetch(url, resolvedOptions));
            const isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');
            if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
                const options = {};
                [
                    'status',
                    'statusText',
                    'headers'
                ].forEach((prop)=>{
                    options[prop] = response[prop];
                });
                const responseContentLength = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toFiniteNumber(response.headers.get('content-length'));
                const [onProgress, flush] = onDownloadProgress && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressEventDecorator"])(responseContentLength, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressEventReducer"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asyncDecorator"])(onDownloadProgress), true)) || [];
                response = new Response((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$trackStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackStream"])(response.body, DEFAULT_CHUNK_SIZE, onProgress, ()=>{
                    flush && flush();
                    unsubscribe && unsubscribe();
                }), options);
            }
            responseType = responseType || 'text';
            let responseData = await resolvers[__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findKey(resolvers, responseType) || 'text'](response, config);
            !isStreamResponse && unsubscribe && unsubscribe();
            return await new Promise((resolve, reject)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$settle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(resolve, reject, {
                    data: responseData,
                    headers: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(response.headers),
                    status: response.status,
                    statusText: response.statusText,
                    config,
                    request
                });
            });
        } catch (err) {
            unsubscribe && unsubscribe();
            if (err && err.name === 'TypeError' && /Load failed|fetch/i.test(err.message)) {
                throw Object.assign(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('Network Error', __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_NETWORK, config, request), {
                    cause: err.cause || err
                });
            }
            throw __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(err, err && err.code, config, request);
        }
    };
};
const seedCache = new Map();
const getFetch = (config)=>{
    let env = config && config.env || {};
    const { fetch: fetch1, Request, Response } = env;
    const seeds = [
        Request,
        Response,
        fetch1
    ];
    let len = seeds.length, i = len, seed, target, map = seedCache;
    while(i--){
        seed = seeds[i];
        target = map.get(seed);
        target === undefined && map.set(seed, target = i ? new Map() : factory(env));
        map = target;
    }
    return target;
};
const adapter = getFetch();
const __TURBOPACK__default__export__ = adapter;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/adapters/adapters.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$null$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/null.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$xhr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/adapters/xhr.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/adapters/fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
;
;
;
;
;
/**
 * Known adapters mapping.
 * Provides environment-specific adapters for Axios:
 * - `http` for Node.js
 * - `xhr` for browsers
 * - `fetch` for fetch API-based requests
 * 
 * @type {Object<string, Function|Object>}
 */ const knownAdapters = {
    http: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$null$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    xhr: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$xhr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    fetch: {
        get: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFetch"]
    }
};
// Assign adapter names for easier debugging and identification
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach(knownAdapters, (fn, value)=>{
    if (fn) {
        try {
            Object.defineProperty(fn, 'name', {
                value
            });
        } catch (e) {
        // eslint-disable-next-line no-empty
        }
        Object.defineProperty(fn, 'adapterName', {
            value
        });
    }
});
/**
 * Render a rejection reason string for unknown or unsupported adapters
 * 
 * @param {string} reason
 * @returns {string}
 */ const renderReason = (reason)=>`- ${reason}`;
/**
 * Check if the adapter is resolved (function, null, or false)
 * 
 * @param {Function|null|false} adapter
 * @returns {boolean}
 */ const isResolvedHandle = (adapter)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(adapter) || adapter === null || adapter === false;
/**
 * Get the first suitable adapter from the provided list.
 * Tries each adapter in order until a supported one is found.
 * Throws an AxiosError if no adapter is suitable.
 * 
 * @param {Array<string|Function>|string|Function} adapters - Adapter(s) by name or function.
 * @param {Object} config - Axios request configuration
 * @throws {AxiosError} If no suitable adapter is available
 * @returns {Function} The resolved adapter function
 */ function getAdapter(adapters, config) {
    adapters = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(adapters) ? adapters : [
        adapters
    ];
    const { length } = adapters;
    let nameOrAdapter;
    let adapter;
    const rejectedReasons = {};
    for(let i = 0; i < length; i++){
        nameOrAdapter = adapters[i];
        let id;
        adapter = nameOrAdapter;
        if (!isResolvedHandle(nameOrAdapter)) {
            adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
            if (adapter === undefined) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](`Unknown adapter '${id}'`);
            }
        }
        if (adapter && (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(adapter) || (adapter = adapter.get(config)))) {
            break;
        }
        rejectedReasons[id || '#' + i] = adapter;
    }
    if (!adapter) {
        const reasons = Object.entries(rejectedReasons).map(([id, state])=>`adapter ${id} ` + (state === false ? 'is not supported by the environment' : 'is not available in the build'));
        let s = length ? reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0]) : 'as no adapter specified';
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](`There is no suitable adapter to dispatch the request ` + s, 'ERR_NOT_SUPPORT');
    }
    return adapter;
}
const __TURBOPACK__default__export__ = {
    /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */ getAdapter,
    /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */ adapters: knownAdapters
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/dispatchRequest.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>dispatchRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$transformData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/transformData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$isCancel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/cancel/isCancel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/defaults/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/cancel/CanceledError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/AxiosHeaders.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$adapters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/adapters/adapters.js [app-client] (ecmascript)");
'use strict';
;
;
;
;
;
;
/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](null, config);
    }
}
function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(config.headers);
    // Transform request data
    config.data = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$transformData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].call(config, config.transformRequest);
    if ([
        'post',
        'put',
        'patch'
    ].indexOf(config.method) !== -1) {
        config.headers.setContentType('application/x-www-form-urlencoded', false);
    }
    const adapter = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$adapters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getAdapter(config.adapter || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].adapter, config);
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$transformData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].call(config, config.transformResponse, response);
        response.headers = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(response.headers);
        return response;
    }, function onAdapterRejection(reason) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$isCancel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) {
                reason.response.data = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$transformData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].call(config, config.transformResponse, reason.response);
                reason.response.headers = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(reason.response.headers);
            }
        }
        return Promise.reject(reason);
    });
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/env/data.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VERSION",
    ()=>VERSION
]);
const VERSION = "1.13.3";
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/validator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$env$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/env/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
'use strict';
;
;
const validators = {};
// eslint-disable-next-line func-names
[
    'object',
    'boolean',
    'number',
    'function',
    'string',
    'symbol'
].forEach((type, i)=>{
    validators[type] = function validator(thing) {
        return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
    };
});
const deprecatedWarnings = {};
/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return '[Axios v' + __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$env$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERSION"] + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
    }
    // eslint-disable-next-line func-names
    return (value, opt, opts)=>{
        if (validator === false) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_DEPRECATED);
        }
        if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
validators.spelling = function spelling(correctSpelling) {
    return (value, opt)=>{
        // eslint-disable-next-line no-console
        console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
        return true;
    };
};
/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */ function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== 'object') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('options must be an object', __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_BAD_OPTION_VALUE);
    }
    const keys = Object.keys(options);
    let i = keys.length;
    while(i-- > 0){
        const opt = keys[i];
        const validator = schema[opt];
        if (validator) {
            const value = options[opt];
            const result = value === undefined || validator(value, opt, options);
            if (result !== true) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('option ' + opt + ' must be ' + result, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_BAD_OPTION_VALUE);
            }
            continue;
        }
        if (allowUnknown !== true) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('Unknown option ' + opt, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_BAD_OPTION);
        }
    }
}
const __TURBOPACK__default__export__ = {
    assertOptions,
    validators
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/Axios.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$buildURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/buildURL.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$InterceptorManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/InterceptorManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$dispatchRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/dispatchRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/mergeConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$buildFullPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/buildFullPath.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/validator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/AxiosHeaders.js [app-client] (ecmascript)");
'use strict';
;
;
;
;
;
;
;
;
const validators = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */ class Axios {
    constructor(instanceConfig){
        this.defaults = instanceConfig || {};
        this.interceptors = {
            request: new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$InterceptorManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](),
            response: new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$InterceptorManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]()
        };
    }
    /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */ async request(configOrUrl, config) {
        try {
            return await this._request(configOrUrl, config);
        } catch (err) {
            if (err instanceof Error) {
                let dummy = {};
                Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
                // slice off the Error: ... line
                const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
                try {
                    if (!err.stack) {
                        err.stack = stack;
                    // match without the 2 top stack lines
                    } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
                        err.stack += '\n' + stack;
                    }
                } catch (e) {
                // ignore the case where "stack" is an un-writable property
                }
            }
            throw err;
        }
    }
    _request(configOrUrl, config) {
        /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof configOrUrl === 'string') {
            config = config || {};
            config.url = configOrUrl;
        } else {
            config = configOrUrl || {};
        }
        config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this.defaults, config);
        const { transitional, paramsSerializer, headers } = config;
        if (transitional !== undefined) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].assertOptions(transitional, {
                silentJSONParsing: validators.transitional(validators.boolean),
                forcedJSONParsing: validators.transitional(validators.boolean),
                clarifyTimeoutError: validators.transitional(validators.boolean)
            }, false);
        }
        if (paramsSerializer != null) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(paramsSerializer)) {
                config.paramsSerializer = {
                    serialize: paramsSerializer
                };
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].assertOptions(paramsSerializer, {
                    encode: validators.function,
                    serialize: validators.function
                }, true);
            }
        }
        // Set config.allowAbsoluteUrls
        if (config.allowAbsoluteUrls !== undefined) {
        // do nothing
        } else if (this.defaults.allowAbsoluteUrls !== undefined) {
            config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
        } else {
            config.allowAbsoluteUrls = true;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].assertOptions(config, {
            baseUrl: validators.spelling('baseURL'),
            withXsrfToken: validators.spelling('withXSRFToken')
        }, true);
        // Set config.method
        config.method = (config.method || this.defaults.method || 'get').toLowerCase();
        // Flatten headers
        let contextHeaders = headers && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].merge(headers.common, headers[config.method]);
        headers && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach([
            'delete',
            'get',
            'head',
            'post',
            'put',
            'patch',
            'common'
        ], (method)=>{
            delete headers[method];
        });
        config.headers = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].concat(contextHeaders, headers);
        // filter out skipped interceptors
        const requestInterceptorChain = [];
        let synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
                return;
            }
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        const responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        let promise;
        let i = 0;
        let len;
        if (!synchronousRequestInterceptors) {
            const chain = [
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$dispatchRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bind(this),
                undefined
            ];
            chain.unshift(...requestInterceptorChain);
            chain.push(...responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            let prevResult = config;
            while(i < len){
                promise = promise.then(chain[i++]).then((result)=>{
                    prevResult = result !== undefined ? result : prevResult;
                }).catch(chain[i++]).then(()=>prevResult);
            }
            return promise;
        }
        len = requestInterceptorChain.length;
        let newConfig = config;
        while(i < len){
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
                newConfig = onFulfilled(newConfig);
            } catch (error) {
                onRejected.call(this, error);
                break;
            }
        }
        try {
            promise = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$dispatchRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].call(this, newConfig);
        } catch (error) {
            return Promise.reject(error);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while(i < len){
            promise = promise.then(responseInterceptorChain[i++]).catch(responseInterceptorChain[i++]);
        }
        return promise;
    }
    getUri(config) {
        config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this.defaults, config);
        const fullPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$buildFullPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(config.baseURL, config.url, config.allowAbsoluteUrls);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$buildURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(fullPath, config.params, config.paramsSerializer);
    }
}
// Provide aliases for supported request methods
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach([
    'delete',
    'get',
    'head',
    'options'
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(config || {}, {
            method,
            url,
            data: (config || {}).data
        }));
    };
});
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach([
    'post',
    'put',
    'patch'
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
            return this.request((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(config || {}, {
                method,
                headers: isForm ? {
                    'Content-Type': 'multipart/form-data'
                } : {},
                url,
                data
            }));
        };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});
const __TURBOPACK__default__export__ = Axios;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/cancel/CancelToken.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/cancel/CanceledError.js [app-client] (ecmascript)");
'use strict';
;
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */ class CancelToken {
    constructor(executor){
        if (typeof executor !== 'function') {
            throw new TypeError('executor must be a function.');
        }
        let resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
        });
        const token = this;
        // eslint-disable-next-line func-names
        this.promise.then((cancel)=>{
            if (!token._listeners) return;
            let i = token._listeners.length;
            while(i-- > 0){
                token._listeners[i](cancel);
            }
            token._listeners = null;
        });
        // eslint-disable-next-line func-names
        this.promise.then = (onfulfilled)=>{
            let _resolve;
            // eslint-disable-next-line func-names
            const promise = new Promise((resolve)=>{
                token.subscribe(resolve);
                _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
                token.unsubscribe(_resolve);
            };
            return promise;
        };
        executor(function cancel(message, config, request) {
            if (token.reason) {
                // Cancellation has already been requested
                return;
            }
            token.reason = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](message, config, request);
            resolvePromise(token.reason);
        });
    }
    /**
   * Throws a `CanceledError` if cancellation has been requested.
   */ throwIfRequested() {
        if (this.reason) {
            throw this.reason;
        }
    }
    /**
   * Subscribe to the cancel signal
   */ subscribe(listener) {
        if (this.reason) {
            listener(this.reason);
            return;
        }
        if (this._listeners) {
            this._listeners.push(listener);
        } else {
            this._listeners = [
                listener
            ];
        }
    }
    /**
   * Unsubscribe from the cancel signal
   */ unsubscribe(listener) {
        if (!this._listeners) {
            return;
        }
        const index = this._listeners.indexOf(listener);
        if (index !== -1) {
            this._listeners.splice(index, 1);
        }
    }
    toAbortSignal() {
        const controller = new AbortController();
        const abort = (err)=>{
            controller.abort(err);
        };
        this.subscribe(abort);
        controller.signal.unsubscribe = ()=>this.unsubscribe(abort);
        return controller.signal;
    }
    /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */ static source() {
        let cancel;
        const token = new CancelToken(function executor(c) {
            cancel = c;
        });
        return {
            token,
            cancel
        };
    }
}
const __TURBOPACK__default__export__ = CancelToken;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/spread.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>spread
]);
'use strict';
function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/isAxiosError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isAxiosError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
'use strict';
;
function isAxiosError(payload) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isObject(payload) && payload.isAxiosError === true;
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/HttpStatusCode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
};
Object.entries(HttpStatusCode).forEach(([key, value])=>{
    HttpStatusCode[value] = key;
});
const __TURBOPACK__default__export__ = HttpStatusCode;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/axios.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/bind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$Axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/Axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/mergeConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/defaults/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$formDataToJSON$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/formDataToJSON.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/cancel/CanceledError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CancelToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/cancel/CancelToken.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$isCancel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/cancel/isCancel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$env$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/env/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/toFormData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$isAxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/isAxiosError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/core/AxiosHeaders.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$adapters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/adapters/adapters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$HttpStatusCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/helpers/HttpStatusCode.js [app-client] (ecmascript)");
'use strict';
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
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    const context = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$Axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](defaultConfig);
    const instance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$Axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].prototype.request, context);
    // Copy axios.prototype to instance
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].extend(instance, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$Axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].prototype, context, {
        allOwnKeys: true
    });
    // Copy context to instance
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].extend(instance, context, null, {
        allOwnKeys: true
    });
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return createInstance((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
const axios = createInstance(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
// Expose Axios class to allow class inheritance
axios.Axios = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$Axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
// Expose Cancel & CancelToken
axios.CanceledError = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
axios.CancelToken = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CancelToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
axios.isCancel = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$isCancel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
axios.VERSION = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$env$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERSION"];
axios.toFormData = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
// Expose AxiosError class
axios.AxiosError = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
// Expose isAxiosError
axios.isAxiosError = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$isAxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
// Expose mergeConfig
axios.mergeConfig = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
axios.AxiosHeaders = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
axios.formToJSON = (thing)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$formDataToJSON$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$adapters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getAdapter;
axios.HttpStatusCode = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$HttpStatusCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
axios.default = axios;
const __TURBOPACK__default__export__ = axios;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/fast-copy/dist/fast-copy.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function(global, factory) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = factory() : "TURBOPACK unreachable";
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    'use strict';
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
        if (typeof window !== 'undefined') {
            return window;
        }
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
    return copy;
}); //# sourceMappingURL=fast-copy.js.map
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/type.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./type')} */ module.exports = TypeError;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/object-inspect/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
var utilInspect = {};
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
    /* eslint-env browser */ if (typeof window !== 'undefined' && obj === window) {
        return '{ [object Window] }';
    }
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
"[project]/Documents/React apps/lfas-training-next/node_modules/side-channel-list/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var inspect = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/object-inspect/index.js [app-client] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/type.js [app-client] (ecmascript)");
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
"[project]/Documents/React apps/lfas-training-next/node_modules/es-object-atoms/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ module.exports = Object;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ module.exports = Error;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/eval.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./eval')} */ module.exports = EvalError;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/range.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./range')} */ module.exports = RangeError;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./ref')} */ module.exports = ReferenceError;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/syntax.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./syntax')} */ module.exports = SyntaxError;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/uri.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./uri')} */ module.exports = URIError;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/abs.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./abs')} */ module.exports = Math.abs;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/floor.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./floor')} */ module.exports = Math.floor;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/max.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./max')} */ module.exports = Math.max;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./min')} */ module.exports = Math.min;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/pow.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./pow')} */ module.exports = Math.pow;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/round.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./round')} */ module.exports = Math.round;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/isNaN.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./isNaN')} */ module.exports = Number.isNaN || function isNaN(a) {
    return a !== a;
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/sign.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $isNaN = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/isNaN.js [app-client] (ecmascript)");
/** @type {import('./sign')} */ module.exports = function sign(number) {
    if ($isNaN(number) || number === 0) {
        return number;
    }
    return number < 0 ? -1 : +1;
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/gopd/gOPD.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./gOPD')} */ module.exports = Object.getOwnPropertyDescriptor;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/gopd/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ var $gOPD = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/gopd/gOPD.js [app-client] (ecmascript)");
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
"[project]/Documents/React apps/lfas-training-next/node_modules/es-define-property/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/Documents/React apps/lfas-training-next/node_modules/has-symbols/shams.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/Documents/React apps/lfas-training-next/node_modules/has-symbols/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/has-symbols/shams.js [app-client] (ecmascript)");
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
"[project]/Documents/React apps/lfas-training-next/node_modules/get-proto/Reflect.getPrototypeOf.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./Reflect.getPrototypeOf')} */ module.exports = typeof Reflect !== 'undefined' && Reflect.getPrototypeOf || null;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/get-proto/Object.getPrototypeOf.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $Object = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-object-atoms/index.js [app-client] (ecmascript)");
/** @type {import('./Object.getPrototypeOf')} */ module.exports = $Object.getPrototypeOf || null;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/function-bind/implementation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/Documents/React apps/lfas-training-next/node_modules/function-bind/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var implementation = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/function-bind/implementation.js [app-client] (ecmascript)");
module.exports = Function.prototype.bind || implementation;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/call-bind-apply-helpers/functionCall.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./functionCall')} */ module.exports = Function.prototype.call;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/call-bind-apply-helpers/functionApply.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./functionApply')} */ module.exports = Function.prototype.apply;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/call-bind-apply-helpers/reflectApply.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./reflectApply')} */ module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/call-bind-apply-helpers/actualApply.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/function-bind/index.js [app-client] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/call-bind-apply-helpers/functionApply.js [app-client] (ecmascript)");
var $call = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/call-bind-apply-helpers/functionCall.js [app-client] (ecmascript)");
var $reflectApply = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/call-bind-apply-helpers/reflectApply.js [app-client] (ecmascript)");
/** @type {import('./actualApply')} */ module.exports = $reflectApply || bind.call($call, $apply);
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/call-bind-apply-helpers/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/function-bind/index.js [app-client] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/type.js [app-client] (ecmascript)");
var $call = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/call-bind-apply-helpers/functionCall.js [app-client] (ecmascript)");
var $actualApply = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/call-bind-apply-helpers/actualApply.js [app-client] (ecmascript)");
/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */ module.exports = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== 'function') {
        throw new $TypeError('a function is required');
    }
    return $actualApply(bind, $call, args);
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/dunder-proto/get.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var callBind = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/call-bind-apply-helpers/index.js [app-client] (ecmascript)");
var gOPD = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/gopd/index.js [app-client] (ecmascript)");
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
"[project]/Documents/React apps/lfas-training-next/node_modules/get-proto/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var reflectGetProto = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/get-proto/Reflect.getPrototypeOf.js [app-client] (ecmascript)");
var originalGetProto = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/get-proto/Object.getPrototypeOf.js [app-client] (ecmascript)");
var getDunderProto = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/dunder-proto/get.js [app-client] (ecmascript)");
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
"[project]/Documents/React apps/lfas-training-next/node_modules/hasown/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/function-bind/index.js [app-client] (ecmascript)");
/** @type {import('.')} */ module.exports = bind.call(call, $hasOwn);
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/get-intrinsic/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var undefined1;
var $Object = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-object-atoms/index.js [app-client] (ecmascript)");
var $Error = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/index.js [app-client] (ecmascript)");
var $EvalError = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/eval.js [app-client] (ecmascript)");
var $RangeError = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/range.js [app-client] (ecmascript)");
var $ReferenceError = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/ref.js [app-client] (ecmascript)");
var $SyntaxError = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/syntax.js [app-client] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/type.js [app-client] (ecmascript)");
var $URIError = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/uri.js [app-client] (ecmascript)");
var abs = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/abs.js [app-client] (ecmascript)");
var floor = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/floor.js [app-client] (ecmascript)");
var max = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/max.js [app-client] (ecmascript)");
var min = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/min.js [app-client] (ecmascript)");
var pow = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/pow.js [app-client] (ecmascript)");
var round = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/round.js [app-client] (ecmascript)");
var sign = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/math-intrinsics/sign.js [app-client] (ecmascript)");
var $Function = Function;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {}
};
var $gOPD = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/gopd/index.js [app-client] (ecmascript)");
var $defineProperty = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-define-property/index.js [app-client] (ecmascript)");
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
var hasSymbols = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/has-symbols/index.js [app-client] (ecmascript)")();
var getProto = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/get-proto/index.js [app-client] (ecmascript)");
var $ObjectGPO = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/get-proto/Object.getPrototypeOf.js [app-client] (ecmascript)");
var $ReflectGPO = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/get-proto/Reflect.getPrototypeOf.js [app-client] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/call-bind-apply-helpers/functionApply.js [app-client] (ecmascript)");
var $call = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/call-bind-apply-helpers/functionCall.js [app-client] (ecmascript)");
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
var bind = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/function-bind/index.js [app-client] (ecmascript)");
var hasOwn = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/hasown/index.js [app-client] (ecmascript)");
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
"[project]/Documents/React apps/lfas-training-next/node_modules/call-bound/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/get-intrinsic/index.js [app-client] (ecmascript)");
var callBindBasic = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/call-bind-apply-helpers/index.js [app-client] (ecmascript)");
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
"[project]/Documents/React apps/lfas-training-next/node_modules/side-channel-map/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/get-intrinsic/index.js [app-client] (ecmascript)");
var callBound = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/call-bound/index.js [app-client] (ecmascript)");
var inspect = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/object-inspect/index.js [app-client] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/type.js [app-client] (ecmascript)");
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
"[project]/Documents/React apps/lfas-training-next/node_modules/side-channel-weakmap/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/get-intrinsic/index.js [app-client] (ecmascript)");
var callBound = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/call-bound/index.js [app-client] (ecmascript)");
var inspect = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/object-inspect/index.js [app-client] (ecmascript)");
var getSideChannelMap = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/side-channel-map/index.js [app-client] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/type.js [app-client] (ecmascript)");
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
"[project]/Documents/React apps/lfas-training-next/node_modules/side-channel/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $TypeError = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/es-errors/type.js [app-client] (ecmascript)");
var inspect = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/object-inspect/index.js [app-client] (ecmascript)");
var getSideChannelList = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/side-channel-list/index.js [app-client] (ecmascript)");
var getSideChannelMap = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/side-channel-map/index.js [app-client] (ecmascript)");
var getSideChannelWeakMap = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/side-channel-weakmap/index.js [app-client] (ecmascript)");
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
"[project]/Documents/React apps/lfas-training-next/node_modules/qs/lib/formats.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/Documents/React apps/lfas-training-next/node_modules/qs/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var formats = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/qs/lib/formats.js [app-client] (ecmascript)");
var getSideChannel = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/side-channel/index.js [app-client] (ecmascript)");
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
"[project]/Documents/React apps/lfas-training-next/node_modules/qs/lib/stringify.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var getSideChannel = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/side-channel/index.js [app-client] (ecmascript)");
var utils = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/qs/lib/utils.js [app-client] (ecmascript)");
var formats = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/qs/lib/formats.js [app-client] (ecmascript)");
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
"[project]/Documents/React apps/lfas-training-next/node_modules/qs/lib/parse.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/qs/lib/utils.js [app-client] (ecmascript)");
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
"[project]/Documents/React apps/lfas-training-next/node_modules/qs/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var stringify = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/qs/lib/stringify.js [app-client] (ecmascript)");
var parse = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/qs/lib/parse.js [app-client] (ecmascript)");
var formats = __turbopack_context__.r("[project]/Documents/React apps/lfas-training-next/node_modules/qs/lib/formats.js [app-client] (ecmascript)");
module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/lodash.isstring/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/Documents/React apps/lfas-training-next/node_modules/p-throttle/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/Documents/React apps/lfas-training-next/node_modules/lodash.isplainobject/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful-sdk-core/dist/index.es-modules.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/fast-copy/dist/fast-copy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/qs/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$lodash$2e$isstring$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/lodash.isstring/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$p$2d$throttle$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/p-throttle/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$lodash$2e$isplainobject$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/lodash.isplainobject/index.js [app-client] (ecmascript)");
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
    instance.interceptors.request.use({
        "asyncToken.use": function(config) {
            return getToken().then({
                "asyncToken.use": function(accessToken) {
                    config.headers.set('Authorization', "Bearer ".concat(accessToken));
                    return config;
                }
            }["asyncToken.use"]);
        }
    }["asyncToken.use"]);
}
function isNode() {
    /**
   * Polyfills of 'process' might set process.browser === true
   *
   * See:
   * https://github.com/webpack/node-libs-browser/blob/master/mock/process.js#L8
   * https://github.com/defunctzombie/node-process/blob/master/browser.js#L156
   **/ return typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && !("TURBOPACK compile-time value", true);
}
function isReactNative() {
    return typeof window !== 'undefined' && 'navigator' in window && 'product' in window.navigator && window.navigator.product === 'ReactNative';
}
function getNodeVersion() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions.node ? "v".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions.node) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].version;
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
    instance.interceptors.request.use({
        "rateLimit.use": function(config) {
            requestLogger(config);
            return config;
        }
    }["rateLimit.use"], {
        "rateLimit.use": function(error) {
            requestLogger(error);
            return Promise.reject(error);
        }
    }["rateLimit.use"]);
    instance.interceptors.response.use({
        "rateLimit.use": function(response) {
            // we don't need to do anything here
            responseLogger(response);
            return response;
        }
    }["rateLimit.use"], /*#__PURE__*/ ({
        "rateLimit.use": function() {
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
                            return _context.abrupt("return", delay(wait).then({
                                "rateLimit.use._ref._callee._callee$": function() {
                                    return instance(config);
                                }
                            }["rateLimit.use._ref._callee._callee$"]));
                        case 19:
                            return _context.abrupt("return", Promise.reject(error));
                        case 20:
                        case "end":
                            return _context.stop();
                    }
                }, _callee);
            }));
            return ({
                "rateLimit.use": function(_x) {
                    return _ref.apply(this, arguments);
                }
            })["rateLimit.use"];
        }
    })["rateLimit.use"]());
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$p$2d$throttle$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        limit: limit,
        interval: 1000,
        strict: false
    });
}
var rateLimitThrottle = function(axiosInstance) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
    var _axiosInstance$defaul = axiosInstance.defaults.logHandler, logHandler = _axiosInstance$defaul === void 0 ? noop : _axiosInstance$defaul;
    var limit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$lodash$2e$isstring$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(type) ? calculateLimit(type) : calculateLimit('auto', type);
    var throttle = createThrottle(limit, logHandler);
    var isCalculated = false;
    var requestInterceptorId = axiosInstance.interceptors.request.use({
        "use[requestInterceptorId]": function(config) {
            return throttle({
                "use[requestInterceptorId]": function() {
                    return config;
                }
            }["use[requestInterceptorId]"])();
        }
    }["use[requestInterceptorId]"], {
        "use[requestInterceptorId]": function(error) {
            return Promise.reject(error);
        }
    }["use[requestInterceptorId]"]);
    var responseInterceptorId = axiosInstance.interceptors.response.use({
        "use[responseInterceptorId]": function(response) {
            if (!isCalculated && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$lodash$2e$isstring$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(type) && (type === 'auto' || PERCENTAGE_REGEX.test(type)) && response.headers && response.headers['x-contentful-ratelimit-second-limit']) {
                var rawLimit = parseInt(response.headers['x-contentful-ratelimit-second-limit']);
                var nextLimit = calculateLimit(type, rawLimit);
                if (nextLimit !== limit) {
                    if (requestInterceptorId) {
                        axiosInstance.interceptors.request.eject(requestInterceptorId);
                    }
                    limit = nextLimit;
                    throttle = createThrottle(nextLimit, logHandler);
                    requestInterceptorId = axiosInstance.interceptors.request.use({
                        "use[responseInterceptorId]": function(config) {
                            return throttle({
                                "use[responseInterceptorId]": function() {
                                    return config;
                                }
                            }["use[responseInterceptorId]"])();
                        }
                    }["use[responseInterceptorId]"], {
                        "use[responseInterceptorId]": function(error) {
                            return Promise.reject(error);
                        }
                    }["use[responseInterceptorId]"]);
                }
                isCalculated = true;
            }
            return response;
        }
    }["use[responseInterceptorId]"], {
        "use[responseInterceptorId]": function(error) {
            return Promise.reject(error);
        }
    }["use[responseInterceptorId]"]);
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
                return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stringify(params);
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
        return createHttpClient(axios, _objectSpread2(_objectSpread2({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(options)), newParams));
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
        instance.interceptors.response.use({
            "createHttpClient.use": function(response) {
                return response;
            }
        }["createHttpClient.use"], config.onError);
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
    config.params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(query);
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
    var platform = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].platform || 'linux';
    var version = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].version || '0.0.0';
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
        if (isReactNative()) {
            platform = getBrowserOS();
            headerParts.push('platform ReactNative');
        } else if (isNode()) //TURBOPACK unreachable
        ;
        else {
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
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this);
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
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$lodash$2e$isplainobject$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(response) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$lodash$2e$isplainobject$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(config)) {
        throw errorResponse;
    }
    var data = response === null || response === void 0 ? void 0 : response.data;
    var errorData = {
        status: response === null || response === void 0 ? void 0 : response.status,
        statusText: response === null || response === void 0 ? void 0 : response.statusText,
        message: '',
        details: {}
    };
    if (config && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$lodash$2e$isplainobject$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(config)) {
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
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/space.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrapSpace",
    ()=>wrapSpace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful-sdk-core/dist/index.es-modules.js [app-client] (ecmascript)");
;
function wrapSpace(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["freezeSys"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPlainObject"])(data));
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/json-stringify-safe/stringify.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/mixins/stringify-safe.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>mixinStringifySafe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$json$2d$stringify$2d$safe$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/json-stringify-safe/stringify.js [app-client] (ecmascript)");
;
function mixinStringifySafe(data) {
    return Object.defineProperty(data, 'stringifySafe', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function() {
            let serializer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            let indent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$json$2d$stringify$2d$safe$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, serializer, indent, (key, value)=>{
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
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful-resolve-response/node_modules/fast-copy/dist/esm/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful-resolve-response/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$resolve$2d$response$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful-resolve-response/node_modules/fast-copy/dist/esm/index.mjs [app-client] (ecmascript)");
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
    var responseClone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$resolve$2d$response$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(response);
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
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/entry.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrapEntry",
    ()=>wrapEntry,
    "wrapEntryCollection",
    ()=>wrapEntryCollection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/fast-copy/dist/fast-copy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful-sdk-core/dist/index.es-modules.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$mixins$2f$stringify$2d$safe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/mixins/stringify-safe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$resolve$2d$response$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful-resolve-response/dist/esm/index.js [app-client] (ecmascript)");
;
;
;
;
function wrapEntry(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["freezeSys"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPlainObject"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data)));
}
function wrapEntryCollection(data, _ref) {
    let { resolveLinks, removeUnresolved } = _ref;
    const wrappedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$mixins$2f$stringify$2d$safe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPlainObject"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data)));
    if (resolveLinks) {
        wrappedData.items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$resolve$2d$response$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(wrappedData, {
            removeUnresolved,
            itemEntryPoints: [
                'fields'
            ]
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["freezeSys"])(wrappedData);
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/asset.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrapAsset",
    ()=>wrapAsset,
    "wrapAssetCollection",
    ()=>wrapAssetCollection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/fast-copy/dist/fast-copy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful-sdk-core/dist/index.es-modules.js [app-client] (ecmascript)");
;
;
function wrapAsset(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["freezeSys"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPlainObject"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data)));
}
function wrapAssetCollection(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["freezeSys"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPlainObject"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data)));
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/asset-key.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrapAssetKey",
    ()=>wrapAssetKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/fast-copy/dist/fast-copy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful-sdk-core/dist/index.es-modules.js [app-client] (ecmascript)");
;
;
function wrapAssetKey(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["freezeSys"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPlainObject"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data)));
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/content-type.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrapContentType",
    ()=>wrapContentType,
    "wrapContentTypeCollection",
    ()=>wrapContentTypeCollection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/fast-copy/dist/fast-copy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful-sdk-core/dist/index.es-modules.js [app-client] (ecmascript)");
;
;
function wrapContentType(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["freezeSys"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPlainObject"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data)));
}
function wrapContentTypeCollection(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["freezeSys"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPlainObject"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data)));
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/locale.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrapLocale",
    ()=>wrapLocale,
    "wrapLocaleCollection",
    ()=>wrapLocaleCollection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/fast-copy/dist/fast-copy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful-sdk-core/dist/index.es-modules.js [app-client] (ecmascript)");
;
;
function wrapLocale(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["freezeSys"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPlainObject"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data)));
}
function wrapLocaleCollection(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["freezeSys"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPlainObject"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data)));
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/tag.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrapTag",
    ()=>wrapTag,
    "wrapTagCollection",
    ()=>wrapTagCollection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/fast-copy/dist/fast-copy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful-sdk-core/dist/index.es-modules.js [app-client] (ecmascript)");
;
;
function wrapTag(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["freezeSys"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPlainObject"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data)));
}
function wrapTagCollection(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["freezeSys"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPlainObject"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$fast$2d$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data)));
}
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$space$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/space.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$entry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/entry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$asset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/asset.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$asset$2d$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/asset-key.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$content$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/content-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$locale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/locale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/tag.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const __TURBOPACK__default__export__ = {
    space: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$space$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    entry: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$entry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    asset: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$asset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    assetKey: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$asset$2d$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    contentType: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$content$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    locale: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$locale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    tag: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
};
}),
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/paged-sync.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>pagedSync
]);
/**
 * See <a href="https://www.contentful.com/developers/docs/concepts/sync/">Synchronization</a> for more information.
 * @namespace Sync
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful-sdk-core/dist/index.es-modules.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$resolve$2d$response$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful-resolve-response/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$mixins$2f$stringify$2d$safe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/mixins/stringify-safe.js [app-client] (ecmascript)");
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
        response.items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$resolve$2d$response$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(response, {
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["freezeSys"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$mixins$2f$stringify$2d$safe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPlainObject"])(mappedResponseItems)));
}
/**
 * @private
 * @param {Array<Entities.Entry|Entities.Array|Sync.DeletedEntry|Sync.DeletedAsset>} items
 * @return {Object} Entities mapped to an object for each entity type
 */ function mapResponseItems(items) {
    const reducer = (type)=>{
        return (accumulated, item)=>{
            if (item.sys.type === type) {
                accumulated.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPlainObject"])(item));
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
    const response = await http.get('sync', (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRequestConfig"])({
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
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/utils/normalize-select.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/utils/validate-timestamp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/create-contentful-api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful-sdk-core/dist/index.es-modules.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/entities/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$paged$2d$sync$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/paged-sync.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/utils/normalize-select.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$utils$2f$validate$2d$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/utils/validate-timestamp.js [app-client] (ecmascript)");
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
    const { wrapSpace } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].space;
    const { wrapContentType, wrapContentTypeCollection } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].contentType;
    const { wrapEntry, wrapEntryCollection } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].entry;
    const { wrapAsset, wrapAssetCollection } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].asset;
    const { wrapTag, wrapTagCollection } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tag;
    const { wrapAssetKey } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].assetKey;
    const { wrapLocaleCollection } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$entities$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].locale;
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorHandler"])(error);
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorHandler"])(error);
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
            const response = await http.get('content_types', (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRequestConfig"])({
                query: query
            }));
            return wrapContentTypeCollection(response.data);
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorHandler"])(error);
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorHandler"])(error);
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
        query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(query);
        try {
            const response = await http.get('entries', (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRequestConfig"])({
                query: query
            }));
            return wrapEntryCollection(response.data, {
                resolveLinks,
                removeUnresolved
            });
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorHandler"])(error);
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
        query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(query);
        try {
            const response = await http.get(`assets/${id}`, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRequestConfig"])({
                query: query
            }));
            return wrapAsset(response.data);
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorHandler"])(error);
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
        query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(query);
        try {
            const response = await http.get('assets', (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRequestConfig"])({
                query: query
            }));
            return wrapAssetCollection(response.data);
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorHandler"])(error);
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorHandler"])(error);
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
        query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(query);
        try {
            const response = await http.get('tags', (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRequestConfig"])({
                query: query
            }));
            return wrapTagCollection(response.data);
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorHandler"])(error);
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$utils$2f$validate$2d$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('expiresAt', expiresAt, {
                maximum: currentMaxLifetime,
                now
            });
            const params = {
                expiresAt
            };
            const response = await http.post('asset_keys', params);
            return wrapAssetKey(response.data);
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorHandler"])(error);
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
            const response = await http.get('locales', (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRequestConfig"])({
                query: query
            }));
            return wrapLocaleCollection(response.data);
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorHandler"])(error);
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$paged$2d$sync$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(http, query, _objectSpread({
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
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/create-global-options.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/contentful.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful-sdk-core/dist/index.es-modules.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$create$2d$contentful$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/create-contentful-api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$create$2d$global$2d$options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/React apps/lfas-training-next/node_modules/contentful/dist/es-modules/create-global-options.js [app-client] (ecmascript)");
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
    const userAgentHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserAgentHeader"])(`contentful.js/${"9.3.7"}`, config.application, config.integration);
    config.headers = _objectSpread(_objectSpread({}, config.headers), {}, {
        'Content-Type': 'application/vnd.contentful.delivery.v1+json',
        'X-Contentful-User-Agent': userAgentHeader
    });
    const http = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$es$2d$modules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHttpClient"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], config);
    const getGlobalOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$create$2d$global$2d$options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        resolveLinks: config.resolveLinks,
        environment: config.environment,
        removeUnresolved: config.removeUnresolved,
        spaceBaseUrl: http.defaults.baseURL,
        environmentBaseUrl: `${http.defaults.baseURL}environments/${config.environment}`
    });
    // Append environment to baseURL
    http.defaults.baseURL = getGlobalOptions().environmentBaseUrl;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$React__apps$2f$lfas$2d$training$2d$next$2f$node_modules$2f$contentful$2f$dist$2f$es$2d$modules$2f$create$2d$contentful$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        http,
        getGlobalOptions
    });
}
}),
]);

//# sourceMappingURL=25d00_8b46b2c2._.js.map