// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8uBhv":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "0b7c8afcb31310b1";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4aleK":[function(require,module,exports) {
var _contador = require("./components/contador/contador");
var _router = require("./router");
var _index = require("./components/boton/index");
window.addEventListener("load", ()=>{
    _router.router(location.pathname);
});

},{"./router":"b2iia","./components/contador/contador":"2KzZN","./components/boton/index":"g4sMT"}],"b2iia":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "router", ()=>router
);
parcelHelpers.export(exports, "goto", ()=>goto
);
var _game = require("./pages/game/game");
var _welcome = require("./pages/welcome/welcome");
var _rules = require("./pages/rules/rules");
function router(ruta) {
    const route = [
        {
            route: /\/welcome/,
            page: ` <home-el></home-el> `
        },
        {
            route: /\/rules/,
            page: `<rules-el></rules-el> `
        },
        {
            route: /\/game/,
            page: `<game-el></game-el>`
        }, 
    ];
    for (const r of route)if (r.route.test(ruta)) {
        const el = r.page;
        const contenedor = document.querySelector(".container");
        if (contenedor.firstChild) contenedor.firstChild.remove();
        contenedor.innerHTML = el;
    }
}
function goto(path) {
    history.pushState({
    }, "", path);
    router(path);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","./pages/game/game":"gTQkq","./pages/welcome/welcome":"7XTfo","./pages/rules/rules":"lxZWu"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gTQkq":[function(require,module,exports) {
var _state = require("../../state");
const papel = require("url:../../img/papel.png");
const piedra = require("url:../../img/piedra.png");
const tijera = require("url:../../img/tijera.png");
class GamePage extends HTMLElement {
    constructor(){
        super();
        this.opcionesDelBot = [
            papel,
            piedra,
            tijera
        ];
        this.shadow = this.attachShadow({
            mode: "open"
        });
        var random = Math.floor(Math.random() * this.opcionesDelBot.length);
        this.jugadaDelBot = this.opcionesDelBot[random];
        var direccion = this.jugadaDelBot.split("/");
        this.alt = direccion[3].split(".")[0];
    }
    connectedCallback() {
        this.render();
        _state.state.subscribe(()=>{
            _state.state.getState();
        });
        const style = document.createElement("style");
        style.innerHTML = `\n        .container{\n            height: 100vh;\n        }\n        .bot{\n            display:none\n        }\n     \n       .opcion{\n          \n           width:103px;\n           height: 235px;\n           margin: 70px 5px 0 5px;\n          \n       }\n       #elegido{\n        margin-bottom:80px;\n        position: absolute;\n        bottom:0;\n       }\n       #noElegido{\n           display:none;\n       }\n       #botElegido{\n           display: inherit;\n           transform: rotate(180deg);\n          \n           position : absolute;\n           top:0;\n           left: 0;\n           right: 0;\n           margin-top:80px;\n           height: 235px;\n       }\n       #reloj{\n           display:none;\n       }\n        \n        `;
        this.shadow.appendChild(style);
    }
    render() {
        //aca va el custom el de las jugadas se pueden definir por custom-el
        //o por atributos
        this.shadow.innerHTML = `\n        <div class= "container">\n        <contador-el class="reloj"></contador-el>\n        <img class= "bot"  src="${this.jugadaDelBot} " alt="${this.alt}">\n        <img class= "opcion"  src="${papel} " alt="papel">\n        <img class = "opcion" src="${piedra} " alt="piedra">\n        <img class="opcion" src="${tijera} " alt="tijera">\n     \n        </div>\n       \n      `;
        var manos = this.shadow.querySelectorAll(".opcion");
        const botOpcion = this.shadow.querySelector(".bot");
        const reloj = this.shadow.querySelector(".reloj");
        //itera los elementos img
        manos.forEach((item)=>{
            item.addEventListener("click", function(e) {
                const miOpcion = this.getAttribute("alt");
                const elegido = e.target;
                const computerMove = botOpcion.getAttribute("alt");
                //muestra las opciones elegidas
                elegido.id = "elegido";
                botOpcion.id = "botElegido";
                reloj.id = "reloj";
                //le paso los valores de la jugada al currentGame
                const lastState = _state.state.getState();
                _state.state.setState({
                    ...lastState,
                    currentGame: {
                        myPlay: miOpcion,
                        computerPlay: computerMove
                    },
                    history: [
                        {
                            jugador: miOpcion,
                            bot: computerMove
                        }
                    ]
                });
                // le paso los valores de la jugada al history
                const game = {
                    myPlay: miOpcion,
                    computerPlay: computerMove
                };
                _state.state.pushToHistory(game);
                _state.state.whoWins(miOpcion, computerMove);
                //console.log(lastState)
                //pone display none a los no elegidos
                manos.forEach((item2)=>{
                    if (item2.id != "elegido") item2.id = "noElegido";
                });
            });
        });
    }
}
customElements.define("game-el", GamePage);

},{"url:../../img/papel.png":"fTpqS","url:../../img/piedra.png":"j1GzX","url:../../img/tijera.png":"9JARl","../../state":"28XHA"}],"fTpqS":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "papel.bf73f8ac.png";

},{"./helpers/bundle-url":"8YnfL"}],"8YnfL":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"j1GzX":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "piedra.82766faa.png";

},{"./helpers/bundle-url":"8YnfL"}],"9JARl":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "tijera.dd5cc795.png";

},{"./helpers/bundle-url":"8YnfL"}],"28XHA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
const state = {
    data: {
        currentGame: {
            myPlay: "",
            computerPlay: ""
        },
        history: [
            {
                jugador: "",
                bot: ""
            }
        ]
    },
    listener: [],
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = newState;
        for (const cb of this.listener)cb(newState);
    },
    history () {
        return this.data.history;
    },
    pushToHistory (play) {
        const currentState = this.getState();
        currentState.history.push({
            jugador: play.myPlay,
            bot: play.computerPlay
        });
        console.log(currentState);
    },
    whoWins (myPlay, computerPlay) {
        const ganeConTijeras = myPlay == "tijera" && computerPlay == "papel";
        const ganeConPiedra = myPlay == "piedra" && computerPlay == "tijera";
        const ganeConPapel = myPlay == "papel" && computerPlay == "piedra";
        const empateConPapel = myPlay == "papel" && computerPlay == "papel";
        const empateConPiedra = myPlay == "piedra" && computerPlay == "piedra";
        const empateContijera = myPlay == "tijera" && computerPlay == "tijera";
        const gane = [
            ganeConPapel,
            ganeConPiedra,
            ganeConTijeras
        ];
        const empate = [
            empateConPapel,
            empateConPiedra,
            empateContijera
        ];
        if (gane.includes(true)) console.log("ganaste");
        else if (empate.includes(true)) console.log("empataste");
        else console.log("perdiste");
    },
    setMove (move) {
        const currentState = this.getState();
        currentState.currentGame.myPlay;
    },
    subscribe (callback) {
        return this.listener.push(callback);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"7XTfo":[function(require,module,exports) {
var _router = require("../../router");
const papel = require("url:../../img/papel.png");
const piedra = require("url:../../img/piedra.png");
const tijera = require("url:../../img/tijera.png");
class WelcomePage extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.render();
        const style = document.createElement("style");
        style.innerHTML = `\n     \n        .titulo{\n            margin:115px auto 74px auto;\n            width:284px;\n            height:204px;\n            font-size:80px;\n            color: #009048;\n            font-weight:700;\n            line-height:70px;\n        }\n       \n        .manos{\n            display:flex;\n            justify-content: space-evenly;\n            \n        }\n        \n        `;
        this.shadow.appendChild(style);
    }
    render() {
        //aca va el custom el de las jugadas se pueden definir por custom-el
        //o por atributos
        this.shadow.innerHTML = `\n       <h1 class= "titulo">Piedra Papel ó Tijera</h1>\n       \n       <btn-el href="/rules" class= "boton" >Empezar</btn-el>\n       <div class = "manos">\n        <img src="${papel} " alt="papel">\n       <img src="${piedra} " alt="piedra">\n       <img src="${tijera} " alt="tijera">\n       </div>\n      `;
        const boton = this.shadow.querySelector(".boton");
        boton.addEventListener("click", function(e) {
            const ruta = this.getAttribute("href");
            _router.goto(ruta);
        });
    }
}
customElements.define("home-el", WelcomePage);

},{"url:../../img/papel.png":"fTpqS","url:../../img/piedra.png":"j1GzX","url:../../img/tijera.png":"9JARl","../../router":"b2iia"}],"lxZWu":[function(require,module,exports) {
var _router = require("../../router");
const papel = require("url:../../img/papel.png");
const piedra = require("url:../../img/piedra.png");
const tijera = require("url:../../img/tijera.png");
class RulesPage extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.render();
        const style = document.createElement("style");
        style.innerHTML = `\n     \n        .p{\n            margin:115px auto 45px auto;\n            width:317px;\n            height:240px;\n            font-size:40px;\n            color: #009048;\n            font-weight:600;\n            line-height:40px;\n            text-align:center;\n        }\n     \n        .manos{\n            display:flex;\n            justify-content: space-evenly;\n            \n        }\n        \n        `;
        this.shadow.appendChild(style);
    }
    render() {
        //aca va el custom el de las jugadas se pueden definir por custom-el
        //o por atributos
        this.shadow.innerHTML = `\n       <p class = "p">\n       Presioná jugar\n       y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.\n       </p>\n       <btn-el href="/game" class= "boton">¡Jugar!</btn-el>\n       <div class = "manos">\n        <img src="${papel} " alt="papel">\n       <img src="${piedra} " alt="piedra">\n       <img src="${tijera} " alt="tijera">\n       </div>\n      `;
        const boton = this.shadow.querySelector(".boton");
        boton.addEventListener("click", function(e) {
            const ruta = this.getAttribute("href");
            _router.goto(ruta);
        });
    }
}
customElements.define("rules-el", RulesPage);

},{"url:../../img/papel.png":"fTpqS","url:../../img/piedra.png":"j1GzX","url:../../img/tijera.png":"9JARl","../../router":"b2iia"}],"2KzZN":[function(require,module,exports) {
class Contador extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.contador = 3;
    }
    connectedCallback() {
        this.render();
        const style = document.createElement("style");
        style.innerHTML = `\n     \n        .contador{\n            display: flex;\n            justify-content:center;\n            align-items:center;\n            height: 243px;\n            width: 243px;\n            font-size: 72px;\n            font-weight:700;\n            border: 23px solid #000;\n            border-radius: 150px;\n            margin:125px auto 0 auto;\n        }\n        \n        `;
        this.shadow.appendChild(style);
    }
    render() {
        //aca va el custom el de las jugadas se pueden definir por custom-el
        //o por atributos
        this.shadow.innerHTML = `\n       <div class = "contador"></div>\n\n      `;
        var tiempo = this.shadow.querySelector(".contador");
        var numero = 3;
        var algo = setInterval(cuentaRegresiva, 1000);
        function cuentaRegresiva(number) {
            numero--;
            if (numero == 0) clearInterval(algo);
            tiempo.innerHTML = `${numero}`;
        }
    }
}
customElements.define("contador-el", Contador);

},{}],"g4sMT":[function(require,module,exports) {
class Boton extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.render();
        const style = document.createElement("style");
        style.innerHTML = `\n     \n        .boton{\n            display: block;\n            margin:0 auto 86px auto;\n            width:322px;\n            border: 10px solid #001997;\n            height:87px;\n            background: #006CFC;\n            border-radius:10px;\n            font-size:45px;\n            line-height:50px;\n            color: #D8FCFC;\n        }\n        \n        `;
        this.shadow.appendChild(style);
    }
    render() {
        const texto = this.textContent;
        this.shadow.innerHTML = `\n        <button class="boton">${texto}</button>\n\n      `;
    }
}
customElements.define("btn-el", Boton);

},{}]},["8uBhv","4aleK"], "4aleK", "parcelRequireca0a")

//# sourceMappingURL=index.b31310b1.js.map
