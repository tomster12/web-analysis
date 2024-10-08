// ------------------------ Types ------------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ------------------------ Constants ------------------------
var ELEMENT_WIDGET_FEED = document.querySelector(".widget-feed");
var EXAMPLE_MESSAGES = [
    [
        50, 66, 5, 48, 62, 13, 75, 29, 24, 61, 42, 70, 66, 62, 32, 14, 81, 8, 15, 78, 2, 29, 13, 49, 1, 80, 82, 40, 63, 81, 21, 19, 0, 40, 51, 65, 26, 14, 21,
        70, 47, 44, 48, 42, 19, 48, 13, 47, 19, 49, 72, 31, 5, 24, 3, 43, 59, 67, 33, 49, 41, 60, 21, 26, 30, 5, 25, 20, 71, 11, 74, 56, 4, 74, 19, 71, 4, 51,
        41, 43, 80, 72, 54, 63, 79, 81, 15, 16, 44, 31, 30, 12, 33, 57, 28, 13, 64, 43, 48,
    ],
    [
        80, 66, 5, 48, 62, 13, 75, 29, 24, 61, 42, 70, 66, 62, 32, 14, 81, 8, 15, 78, 2, 29, 13, 49, 1, 29, 11, 30, 52, 81, 21, 19, 0, 25, 26, 54, 20, 14, 21,
        70, 47, 44, 48, 42, 19, 48, 13, 47, 19, 49, 44, 26, 59, 77, 64, 43, 79, 28, 72, 64, 1, 30, 73, 23, 67, 6, 33, 25, 64, 81, 68, 46, 17, 36, 13, 17, 21,
        68, 13, 9, 46, 67, 57, 34, 62, 82, 15, 10, 73, 62, 2, 11, 65, 72, 37, 44, 10, 43, 68, 62, 9, 34, 18,
    ],
    [
        36, 66, 5, 48, 62, 13, 75, 29, 24, 61, 42, 70, 66, 62, 32, 14, 81, 8, 15, 78, 2, 29, 13, 49, 1, 69, 76, 52, 9, 48, 66, 80, 22, 64, 57, 40, 49, 78, 3,
        16, 56, 19, 47, 40, 80, 6, 13, 64, 29, 49, 64, 63, 6, 49, 31, 13, 16, 10, 45, 24, 26, 77, 10, 60, 81, 61, 34, 54, 70, 21, 15, 4, 66, 77, 42, 37, 30, 22,
        0, 11, 41, 72, 57, 20, 23, 57, 65, 41, 23, 18, 72, 42, 5, 3, 26, 78, 8, 5, 54, 45, 77, 25, 64, 61, 16, 44, 54, 51, 20, 63, 25, 11, 26, 45, 53, 60, 38,
        34,
    ],
    [
        76, 66, 5, 49, 75, 54, 69, 46, 32, 1, 42, 60, 26, 48, 50, 80, 32, 24, 55, 61, 47, 12, 21, 12, 49, 54, 34, 25, 36, 15, 56, 55, 20, 9, 8, 62, 13, 82, 9,
        44, 29, 60, 53, 82, 42, 80, 5, 43, 71, 3, 80, 77, 47, 78, 34, 25, 62, 18, 10, 49, 62, 64, 52, 81, 11, 66, 62, 13, 47, 17, 52, 70, 26, 23, 32, 31, 64,
        23, 35, 32, 50, 6, 1, 25, 8, 37, 47, 43, 26, 76, 65, 68, 80, 17, 7, 45, 63, 14, 53, 63, 60, 16,
    ],
    [
        63, 66, 5, 49, 75, 54, 2, 60, 29, 40, 78, 47, 60, 75, 67, 71, 60, 2, 65, 7, 47, 14, 45, 74, 59, 41, 80, 13, 60, 13, 81, 22, 35, 50, 40, 39, 2, 59, 48,
        31, 76, 2, 80, 75, 1, 56, 67, 11, 21, 8, 40, 65, 45, 75, 55, 39, 60, 42, 13, 3, 22, 57, 2, 6, 58, 9, 70, 1, 58, 56, 63, 68, 25, 79, 7, 20, 19, 64, 2,
        66, 73, 30, 71, 16, 12, 30, 65, 37, 20, 13, 22, 63, 18, 46, 64, 59, 41, 81, 82, 22, 78, 36, 47, 17, 4, 6, 17, 5, 36, 79, 63, 1, 64, 69, 15, 43, 4, 58,
        56, 31, 14, 64, 58, 18, 44, 78, 69, 1, 0, 46, 20, 71, 73, 25, 35, 8, 24,
    ],
    [
        34, 66, 5, 49, 75, 54, 23, 74, 11, 13, 28, 26, 19, 48, 67, 57, 37, 60, 34, 28, 74, 10, 17, 32, 11, 18, 19, 43, 19, 81, 42, 4, 62, 9, 46, 49, 32, 51, 76,
        58, 4, 43, 47, 17, 67, 79, 21, 32, 44, 16, 30, 37, 26, 28, 41, 68, 57, 34, 51, 10, 69, 70, 8, 6, 46, 43, 18, 39, 47, 43, 15, 13, 33, 30, 35, 62, 37, 0,
        37, 5, 38, 55, 37, 13, 40, 25, 9, 21, 11, 64, 5, 79, 42, 68, 11, 71, 11, 48, 3, 67, 61, 40, 22, 14, 35, 50, 61, 39, 11, 2, 66, 49, 51, 53, 17, 73, 36,
        75, 74, 54, 24, 30, 54, 70,
    ],
    [
        27, 66, 5, 49, 75, 54, 2, 60, 29, 40, 2, 55, 9, 15, 59, 18, 68, 3, 36, 5, 47, 77, 44, 38, 1, 18, 28, 76, 4, 34, 60, 63, 58, 80, 17, 54, 79, 75, 48, 54,
        55, 19, 62, 64, 14, 47, 51, 70, 75, 5, 11, 47, 45, 58, 68, 69, 79, 25, 38, 45, 73, 47, 68, 50, 34, 45, 78, 26, 79, 57, 4, 56, 22, 60, 18, 75, 43, 60,
        59, 67, 63, 42, 49, 33, 40, 65, 79, 77, 7, 3, 26, 62, 31, 78, 26, 57, 69, 40, 4, 23, 26, 13, 67, 42, 38, 72, 11, 39, 65, 60, 25, 6, 80, 66, 68, 77, 59,
        78, 19,
    ],
    [
        77, 66, 5, 49, 75, 54, 2, 60, 29, 40, 2, 55, 9, 15, 59, 18, 68, 3, 36, 5, 47, 60, 21, 80, 1, 72, 55, 16, 82, 35, 57, 19, 1, 66, 18, 27, 39, 17, 74, 81,
        39, 14, 78, 0, 25, 65, 43, 66, 64, 38, 81, 23, 24, 50, 57, 30, 71, 75, 26, 68, 54, 57, 56, 50, 71, 73, 14, 21, 8, 32, 26, 63, 5, 37, 19, 43, 66, 47, 53,
        34, 66, 23, 73, 31, 54, 38, 77, 67, 11, 63, 79, 6, 22, 21, 51, 69, 74, 21, 5, 17, 67, 37, 29, 21, 60, 14, 82, 44, 30, 4, 20, 42, 35, 1, 31, 54, 46, 20,
        40, 30,
    ],
    [
        33, 66, 5, 49, 75, 54, 2, 60, 29, 40, 2, 55, 9, 15, 59, 18, 68, 3, 36, 5, 47, 33, 21, 59, 44, 18, 28, 76, 59, 34, 60, 63, 79, 27, 12, 54, 5, 49, 48, 54,
        55, 52, 62, 72, 69, 10, 57, 22, 58, 48, 67, 53, 7, 34, 32, 30, 31, 19, 26, 8, 34, 46, 7, 30, 71, 55, 34, 75, 54, 9, 6, 60, 5, 23, 25, 45, 42, 80, 25,
        12, 22, 76, 20, 51, 62, 21, 40, 9, 41, 10, 44, 73, 8, 33, 70, 73, 6, 31, 21, 72, 5, 40, 61, 51, 42, 66, 64, 74, 61, 25, 63, 42, 24, 41,
    ],
];
var HIGHLIGHTS = [];
var HIGHLIGHT_COUNT = 15;
var HIGHLIGHT_COLOUR_SPIRALS = 4;
var HIGHLIGHT_COLOUR_GAP = 360 / HIGHLIGHT_COLOUR_SPIRALS;
for (var i = 0; i < HIGHLIGHT_COUNT; i++) {
    var base = (i % HIGHLIGHT_COLOUR_SPIRALS) * HIGHLIGHT_COLOUR_GAP;
    var hue = (base + (i / HIGHLIGHT_COUNT) * HIGHLIGHT_COLOUR_GAP) % 360;
    HIGHLIGHTS.push("hsl(".concat(hue, ", 75%, 75%)"));
}
var WIDGET_MANAGER;
// ------------------------ Crypto ------------------------
function parseMessages(text, delimType) {
    if (text == "")
        return [];
    var lines = text.split("\n");
    lines = lines.filter(function (line) { return line != ""; });
    var delim = delimType == "comma" ? "," : delimType == "dot" ? "." : delimType == "letter" ? "" : " ";
    return lines.map(function (line) { return line.split(delim); });
}
function convertMessages(messages, convertOption) {
    // Potentially unused variables
    var uniqueID = 0;
    var uniqueMap = {};
    // Convert messages based on convertOption
    var output = [];
    for (var msg = 0; msg < messages.length; msg++) {
        if (convertOption == "Int") {
            output.push(messages[msg].map(function (val) { return parseInt(val); }));
        }
        else if (convertOption == "Unique") {
            output.push(messages[msg].map(function (val) {
                if (uniqueMap[val] == null)
                    uniqueMap[val] = uniqueID++;
                return uniqueMap[val];
            }));
        }
        else if (convertOption == "ToAscii") {
            output.push(messages[msg].map(function (val) { return String.fromCharCode(parseInt(val) + 32); }));
        }
        else if (convertOption == "FromAscii") {
            output.push(messages[msg].map(function (val) { return (val.charCodeAt(0) - 32).toString(); }));
        }
        else {
            output.push(messages[msg]);
        }
    }
    return output;
}
function parseAlphabet(messages) {
    if (messages == null)
        return [];
    if (messages.length == 0)
        return [];
    // Get all unique characters
    var messagesStr = messages;
    var alphSet = new Set();
    for (var msg = 0; msg < messagesStr.length; msg++) {
        for (var col = 0; col < messagesStr[msg].length; col++) {
            alphSet.add(messagesStr[msg][col]);
        }
    }
    // Either sort numbers or characters
    var isNum = messages.some(function (msg) { return msg.some(function (val) { return !isNaN(parseInt(val)); }); });
    if (isNum) {
        return Array.from(alphSet).sort(function (a, b) { return parseInt(a) - parseInt(b); });
    }
    else {
        return Array.from(alphSet).sort();
    }
}
function calculateAlignments(messages) {
    var maxLength = Math.max.apply(Math, messages.map(function (line) { return line.length; }));
    var shared = [];
    for (var i = 0; i < messages.length; i++)
        shared.push([]);
    // For each column in the messages
    for (var col = 0; col < maxLength; col++) {
        var found = {};
        var assignedIDs = {};
        var nextID = 1;
        // For each message that has this column
        for (var msg = 0; msg < messages.length; msg++) {
            if (col >= messages[msg].length)
                continue;
            var val = messages[msg][col];
            // 0 if unique, next ID otherwise
            if (found[val] == null) {
                found[val] = msg;
                shared[msg].push(0);
            }
            else {
                if (assignedIDs[val] == null) {
                    var id = nextID++;
                    assignedIDs[val] = id;
                    shared[found[val]][col] = id;
                }
                shared[msg].push(assignedIDs[val]);
            }
        }
    }
    return shared;
}
function calculateGaps(messages, gapLimit, includeEnd) {
    var gaps = [];
    for (var msg = 0; msg < messages.length; msg++) {
        gaps.push([]);
        var found = {};
        for (var col = 0; col < messages[msg].length; col++) {
            var val = messages[msg][col];
            gaps[msg].push([]);
            // 0 by default, on gap set start
            if (found[val] != null) {
                var diff = col - found[val];
                if (diff <= gapLimit) {
                    gaps[msg][found[val]].push(diff);
                    if (includeEnd)
                        gaps[msg][col].push(-diff);
                }
            }
            found[val] = col;
        }
    }
    return gaps;
}
function calculateFrequencies(messages) {
    var freqs = {};
    for (var msg = 0; msg < messages.length; msg++) {
        for (var col = 0; col < messages[msg].length; col++) {
            var val = messages[msg][col];
            if (freqs[val] == null)
                freqs[val] = 0;
            freqs[val]++;
        }
    }
    return freqs;
}
function calculateDeltas(messages, modSize) {
    var deltas = [];
    for (var msg = 0; msg < messages.length; msg++) {
        deltas.push([]);
        for (var col = 1; col < messages[msg].length; col++) {
            var delta = messages[msg][col] - messages[msg][col - 1];
            if (modSize != null)
                delta = (delta + modSize) % modSize;
            deltas[msg].push(delta);
        }
    }
    return deltas;
}
function calculateIoC(messages, alphabetSize) {
    var freqs = calculateFrequencies(messages);
    var total = 0;
    var N = 0;
    for (var char in freqs) {
        var n = freqs[char];
        total += n * (n - 1);
        N += n;
    }
    return total / ((N * (N - 1)) / alphabetSize);
}
// ------------------------ Utility ------------------------
function createElement(html) {
    var element = document.createElement("div");
    element.innerHTML = html.trim();
    return element.firstChild;
}
var ListenableEvent = /** @class */ (function () {
    function ListenableEvent() {
        this.listeners = new Map();
    }
    ListenableEvent.prototype.listen = function (listener, callback) {
        this.listeners.set(listener, callback);
    };
    ListenableEvent.prototype.unlisten = function (listener) {
        this.listeners.delete(listener);
    };
    ListenableEvent.prototype.fire = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.listeners.forEach(function (callback) { return callback.apply(void 0, args); });
    };
    return ListenableEvent;
}());
var MessagesView = /** @class */ (function () {
    function MessagesView(highlightMode) {
        if (highlightMode === void 0) { highlightMode = "Categoric"; }
        this.scrollWrapper = new ScrollableDiv();
        this.element = this.scrollWrapper.element;
        this.elementContent = createElement(MessagesView.HTML);
        this.messages = [];
        this.highlightMode = highlightMode;
        this.usingLetterGaps = false;
        this.scrollWrapper.addContent(this.elementContent);
    }
    MessagesView.prototype.setMessages = function (messages, highlight) {
        var _this = this;
        if (highlight === void 0) { highlight = null; }
        this.messages = messages;
        this.elementContent.innerHTML = "";
        this.cells = [];
        // Find max length of any letter in any message
        var maxLetterLength = 0;
        for (var msg = 0; msg < messages.length; msg++) {
            for (var col = 0; col < messages[msg].length; col++) {
                var letter = messages[msg][col].toString();
                maxLetterLength = Math.max(maxLetterLength, letter.length);
            }
        }
        // Set max width of letter spans
        this.elementContent.style.setProperty("--adjusted-span-width", "".concat(0.8 + maxLetterLength * 0.6, "rem"));
        // Create index row
        var row = createElement("<div class=\"indices\"></div>");
        var maxLength = Math.max.apply(Math, messages.map(function (line) { return line.length; }));
        for (var col = 0; col < maxLength; col++) {
            var letter = col.toString();
            var cell = createElement("<span>".concat(letter, "</span>"));
            if (letter.length > maxLetterLength) {
                cell.style.fontSize = "".concat(1 - (letter.length - maxLetterLength) * 0.15, "rem");
                cell.style.lineHeight = "".concat(1.8 - (letter.length - maxLetterLength) * 0.05, "rem");
            }
            row.appendChild(cell);
        }
        this.elementContent.appendChild(row);
        var _loop_1 = function (msg) {
            var row_1 = createElement("<div class=\"message\"></div>");
            this_1.cells.push([]);
            var _loop_2 = function (col) {
                var letter = messages[msg][col].toString();
                var cell = createElement("<span>".concat(letter, "</span>"));
                cell.addEventListener("mouseenter", function () { return _this.hoverLetter(messages[msg][col]); });
                cell.addEventListener("mouseleave", function () { return _this.unhoverLetter(messages[msg][col]); });
                row_1.appendChild(cell);
                this_1.cells[msg].push(cell);
            };
            for (var col = 0; col < messages[msg].length; col++) {
                _loop_2(col);
            }
            this_1.elementContent.appendChild(row_1);
        };
        var this_1 = this;
        // Create div for each row, span for each cell
        for (var msg = 0; msg < messages.length; msg++) {
            _loop_1(msg);
        }
        // Highlight letters
        this.setHighlight(highlight);
        // Update scroller
        this.scrollWrapper.updateThumbToContent();
    };
    MessagesView.prototype.setHighlight = function (highlight) {
        this.highlight = highlight;
        if (highlight == null)
            return;
        // Highlight every span based on highlight data and mode
        for (var msg = 0; msg < this.messages.length; msg++) {
            for (var col = 0; col < this.messages[msg].length; col++) {
                // Categoric: Pick from global colour array
                if (this.highlightMode == "Categoric") {
                    var letterHighlight = highlight[msg][col];
                    if (!Array.isArray(letterHighlight)) {
                        // Categoric: Single value colour
                        letterHighlight = letterHighlight;
                        this.cells[msg][col].title = letterHighlight.toString();
                        if (letterHighlight > 0) {
                            var colA = HIGHLIGHTS[Math.abs(letterHighlight - 1) % HIGHLIGHT_COUNT];
                            this.cells[msg][col].style.backgroundColor = colA;
                        }
                    }
                    else {
                        // Categoric: Gradient between two colours
                        letterHighlight = letterHighlight;
                        if (letterHighlight.length == 1) {
                            var colA = HIGHLIGHTS[Math.abs(letterHighlight[0]) % HIGHLIGHT_COUNT];
                            this.cells[msg][col].style.backgroundColor = colA;
                        }
                        else if (letterHighlight.length == 2) {
                            var colA = HIGHLIGHTS[Math.abs(letterHighlight[0]) % HIGHLIGHT_COUNT];
                            var colB = HIGHLIGHTS[Math.abs(letterHighlight[1]) % HIGHLIGHT_COUNT];
                            var style = "linear-gradient(to right, ".concat(colA, ", ").concat(colB, ")");
                            this.cells[msg][col].style.backgroundImage = style;
                        }
                    }
                }
                else {
                    // Numeric: Set highlight as colour
                    var letterHighlight = highlight[msg][col];
                    this.cells[msg][col].style.backgroundColor = letterHighlight;
                }
            }
        }
    };
    MessagesView.prototype.hoverLetter = function (val) {
        // Highlight all cells with the same value
        this.elementContent.classList.add("cell-hovered");
        for (var msg = 0; msg < this.messages.length; msg++) {
            for (var col = 0; col < this.messages[msg].length; col++) {
                if (this.messages[msg][col] == val) {
                    this.cells[msg][col].classList.add("hovered");
                }
            }
        }
    };
    MessagesView.prototype.unhoverLetter = function (val) {
        // Remove highlight from all cells with the same value
        this.elementContent.classList.remove("cell-hovered");
        for (var msg = 0; msg < this.messages.length; msg++) {
            for (var col = 0; col < this.messages[msg].length; col++) {
                if (this.messages[msg][col] == val) {
                    this.cells[msg][col].classList.remove("hovered");
                }
            }
        }
    };
    MessagesView.prototype.setLetterGapsActive = function (isActive) {
        this.usingLetterGaps = isActive;
        this.elementContent.classList.toggle("use-gaps", this.usingLetterGaps);
    };
    MessagesView.HTML = "<div class=\"messages\"></div>";
    return MessagesView;
}());
var ToggleButton = /** @class */ (function () {
    function ToggleButton(initialValue, offIconPath, onIconPath, glowWhenToggled) {
        if (glowWhenToggled === void 0) { glowWhenToggled = true; }
        var _this = this;
        this.clickEvent = new ListenableEvent();
        this.isToggled = initialValue;
        this.glowWhenToggled = glowWhenToggled;
        this.onIconPath = onIconPath;
        this.offIconPath = offIconPath;
        // Setup elements
        this.element = createElement(ToggleButton.HTML);
        this.elementImage = this.element.querySelector("img");
        this.elementImage.src = initialValue ? onIconPath : offIconPath;
        // Setup event and listener
        this.element.addEventListener("click", function (e) {
            e.stopPropagation();
            _this.setToggled(!_this.isToggled);
        });
    }
    ToggleButton.prototype.setToggled = function (toggled) {
        this.isToggled = toggled;
        if (this.glowWhenToggled)
            this.element.classList.toggle("glow", this.isToggled);
        this.elementImage.src = this.isToggled ? this.onIconPath : this.offIconPath;
        this.clickEvent.fire(this.isToggled);
    };
    ToggleButton.HTML = "\n        <div class=\"toggle-button\">\n            <img />\n        </div>";
    return ToggleButton;
}());
var Dropdown = /** @class */ (function () {
    function Dropdown(options, initial, mode) {
        if (mode === void 0) { mode = "icon"; }
        var _this = this;
        this.mode = mode;
        this.isOpen = false;
        this.selectEvent = new ListenableEvent();
        // Setup elements
        this.element = createElement(Dropdown.HTML);
        this.elementMain = this.element.querySelector(".dropdown-main");
        this.elementCurrent = this.element.querySelector(".dropdown-current");
        this.elementIconSelect = this.element.querySelector(".dropdown-icon-select");
        this.elementOptions = this.element.querySelector(".dropdown-options");
        this.elementOptions.style.display = "none";
        if (this.mode == "icon") {
            this.elementCurrentIcon = createElement("<img>");
            this.elementCurrent.appendChild(this.elementCurrentIcon);
        }
        // Setup events
        this.elementMain.addEventListener("click", function (e) {
            e.stopPropagation();
            _this.setOpen(!_this.isOpen);
        });
        window.addEventListener("click", function () {
            _this.setOpen(false);
        });
        // Setup options
        this.setOptions(options);
        this.selectOption(initial);
    }
    Dropdown.prototype.setOptions = function (options) {
        var _this = this;
        this.options = options;
        this.elementOptions.innerHTML = "";
        // If no options update class
        var noOptions = Object.keys(this.options).length == 0;
        this.element.classList.toggle("no-options", noOptions);
        this.elementIconSelect.src = noOptions ? "assets/icon-cross.png" : "assets/icon-dropdown.png";
        var _loop_3 = function (option) {
            var optionElement = createElement("<div>");
            this_2.elementOptions.appendChild(optionElement);
            // Mode based content
            if (this_2.mode == "icon") {
                var imgElement = createElement("<img>");
                imgElement.src = this_2.options[option];
                optionElement.appendChild(imgElement);
            }
            else {
                optionElement.innerText = this_2.options[option];
            }
            // Add event listener
            optionElement.addEventListener("click", function (e) {
                e.stopPropagation();
                _this.selectOption(option);
            });
        };
        var this_2 = this;
        // Create option elements
        for (var option in this.options) {
            _loop_3(option);
        }
    };
    Dropdown.prototype.selectOption = function (option) {
        // If option is null deselect options
        if (option == null) {
            this.selected = "";
            this.elementCurrent.innerText = "None";
            this.setOpen(false);
            return;
        }
        // Set selected option and update icon
        this.selected = option;
        if (this.mode == "icon") {
            this.elementCurrentIcon.src = this.options[option];
        }
        else {
            this.elementCurrent.innerText = this.options[option];
        }
        this.selectEvent.fire(option);
        this.setOpen(false);
    };
    Dropdown.prototype.setOpen = function (open) {
        if (open == this.isOpen)
            return;
        if (open && Object.keys(this.options).length == 0)
            return;
        this.elementOptions.style.display = open ? "flex" : "none";
        this.element.classList.toggle("open", open);
        this.isOpen = open;
    };
    Dropdown.HTML = "\n    <div class=\"dropdown\">\n        <div class=\"dropdown-main\">\n            <div class=\"dropdown-current\"></div>\n            <img class=\"dropdown-icon-select\" src=\"assets/icon-dropdown.png\">\n        </div>\n        <div class=\"dropdown-options\"></div>\n    </div>";
    return Dropdown;
}());
var ScrollableDiv = /** @class */ (function () {
    function ScrollableDiv(className) {
        if (className === void 0) { className = ""; }
        var _this = this;
        // Setup elements
        this.element = createElement(ScrollableDiv.HTML);
        this.elementContent = this.element.querySelector(".scrollable-content");
        this.elementBar = this.element.querySelector(".scrollable-bar");
        this.elementThumb = this.element.querySelector(".scrollable-thumb");
        // Add class if provided
        if (className != "")
            this.element.classList.add(className);
        // Setup event listeners
        this.elementContent.addEventListener("scroll", function () { return _this.updateThumbToContent(); });
        this.elementContent.addEventListener("input", function () { return _this.updateThumbToContent(); });
        this.elementContent.addEventListener("wheel", function (e) {
            e.preventDefault();
            _this.elementContent.scrollLeft += e.deltaY;
        });
        window.addEventListener("resize", function () { return _this.updateThumbToContent(); });
        window.addEventListener("load", function () { return _this.updateThumbToContent(); });
        this.elementThumb.addEventListener("mousedown", function (e) {
            e.preventDefault();
            _this.elementThumb.classList.add("dragging");
            var startMouseX = e.clientX;
            var startThumbScroll = _this.elementThumb.offsetLeft;
            var onMouseMove = function (e) {
                var deltaMouseX = e.clientX - startMouseX;
                var scrollLeftPct = (startThumbScroll + deltaMouseX) / (_this.elementBar.clientWidth - _this.elementThumb.clientWidth);
                _this.elementContent.scrollLeft = scrollLeftPct * (_this.elementContent.scrollWidth - _this.elementContent.clientWidth);
            };
            var onMouseUp = function () {
                _this.elementThumb.classList.remove("dragging");
                window.removeEventListener("mousemove", onMouseMove);
                window.removeEventListener("mouseup", onMouseUp);
            };
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", onMouseUp);
        });
    }
    ScrollableDiv.prototype.updateThumbToContent = function () {
        var clientSizeX = this.elementContent.clientWidth;
        var clientScrollableX = this.elementContent.scrollWidth;
        var clientScrollX = this.elementContent.scrollLeft;
        if (clientSizeX >= clientScrollableX) {
            this.elementThumb.style.display = "none";
            return;
        }
        this.elementThumb.style.display = "block";
        this.elementThumb.style.width = "".concat((clientSizeX / clientScrollableX) * 100, "%");
        this.elementThumb.style.left = "".concat((clientScrollX / clientScrollableX) * 100, "%");
    };
    ScrollableDiv.prototype.addContent = function (content) {
        this.elementContent.appendChild(content);
    };
    ScrollableDiv.HTML = "\n    <div class=\"scrollable-div\">\n        <div class=\"scrollable-content\"></div>\n        <div class=\"scrollable-bar\">\n            <div class=\"scrollable-thumb\"</div>\n        </div>\n    </div>";
    return ScrollableDiv;
}());
// ------------------------ Widgets ------------------------
var WidgetManager = /** @class */ (function () {
    function WidgetManager() {
        this.nextID = 0;
        this.widgets = {};
        this.onAddWidgetEvent = new ListenableEvent();
        this.onRemoveWidgetEvent = new ListenableEvent();
    }
    WidgetManager.prototype.getNextID = function () {
        return this.nextID++;
    };
    WidgetManager.prototype.registerWidget = function (widget) {
        this.widgets[widget.id] = widget;
        this.onAddWidgetEvent.fire(widget);
    };
    WidgetManager.prototype.removeWidget = function (id) {
        delete this.widgets[id];
        this.onRemoveWidgetEvent.fire(id);
    };
    WidgetManager.prototype.getAvailableSources = function (widget) {
        if (widget.getSourceType() == "None")
            return {};
        var sources = {};
        for (var id in this.widgets) {
            if (id != widget.id.toString()) {
                if (this.widgets[id].getOutputType() == "None")
                    continue;
                if (this.widgets[id].getOutputType() == widget.getSourceType()) {
                    sources[id] = this.widgets[id];
                }
            }
        }
        return sources;
    };
    return WidgetManager;
}());
var WidgetFrame = /** @class */ (function () {
    function WidgetFrame(parent, widget, title) {
        if (parent === void 0) { parent = null; }
        if (title === void 0) { title = ""; }
        var _this = this;
        this.widget = widget;
        this.id = widget.id;
        this.isClosed = false;
        this.isFooterClosed = true;
        // Setup container
        this.element = createElement(WidgetFrame.HTML);
        this.elementHeader = this.element.querySelector(".widget-header");
        this.elementTitle = this.element.querySelector(".widget-title");
        this.elementButtonBar = this.element.querySelector(".widget-button-bar");
        this.elementContent = this.element.querySelector(".widget-content");
        this.elementFooter = this.element.querySelector(".widget-footer");
        this.elementFooterSourceDropdown = this.element.querySelector(".widget-footer-dropdown");
        this.elementFooterInputType = this.element.querySelector(".widget-footer-input-type");
        this.elementFooterOutputType = this.element.querySelector(".widget-footer-output-type");
        this.footerButton = new ToggleButton(false, "assets/icon-connection.png", "assets/icon-connection.png");
        this.footerButton.clickEvent.listen(this, function (toggled) {
            _this.setFooterClosed(!toggled);
        });
        this.sourceDropdown = new Dropdown({}, null, "text");
        this.sourceDropdown.selectEvent.listen(this, function (source) {
            widget.setSourceWidget(WIDGET_MANAGER.widgets[source]);
        });
        // Connect elements
        if (parent != null)
            parent.appendChild(this.element);
        this.elementFooterSourceDropdown.appendChild(this.sourceDropdown.element);
        this.elementHeader.appendChild(this.footerButton.element);
        // Add title close listener
        this.elementHeader.addEventListener("click", function () { return _this.setClosed(!_this.isClosed); });
        // Listen to new widgets
        WIDGET_MANAGER.onAddWidgetEvent.listen(this, function (widget) { return _this.updateAvailableSources(); });
        // Set element values
        this.setTitle(title);
        this.footerButton.setToggled(false);
        this.elementFooterInputType.innerText = this.widget.getSourceType();
        this.elementFooterOutputType.innerText = this.widget.getOutputType();
        this.updateAvailableSources();
    }
    WidgetFrame.prototype.updateAvailableSources = function () {
        var availableSources = WIDGET_MANAGER.getAvailableSources(this.widget);
        var sourceNames = {};
        for (var id in availableSources) {
            sourceNames[id] = availableSources[id].getTitle();
        }
        this.sourceDropdown.setOptions(sourceNames);
    };
    WidgetFrame.prototype.setTitle = function (title) {
        this.elementTitle.innerHTML = "<span class=\"widget-id\">".concat(this.id, "</span> ").concat(title);
    };
    WidgetFrame.prototype.addHeaderExtra = function (extra) {
        this.elementButtonBar.appendChild(extra);
    };
    WidgetFrame.prototype.addContent = function (content) {
        this.elementContent.appendChild(content);
    };
    WidgetFrame.prototype.setClosed = function (isClosed) {
        this.isClosed = isClosed;
        this.element.classList.toggle("closed", this.isClosed);
    };
    WidgetFrame.prototype.setFooterClosed = function (isClosed) {
        this.isFooterClosed = isClosed;
        this.element.classList.toggle("footer-closed", this.isFooterClosed);
    };
    WidgetFrame.HTML = "\n    <div class=\"widget-container footer-closed\">\n        <div class=\"widget-header\">\n            <div class=\"widget-title\"></div>\n            <div class=\"widget-button-bar\"></div>\n        </div>\n        <div class=\"widget-content\"></div>\n        <div class=\"widget-footer\">\n            <div class=\"widget-footer-dropdown\"></div>\n            <p class=\"widget-footer-input-type\">Message[]</p>\n            <img src=\"assets/icon-arrow.png\">\n            <p class=\"widget-footer-output-type\">Message[]</p>\n        </div>\n    </div>";
    return WidgetFrame;
}());
var Widget = /** @class */ (function () {
    function Widget(title) {
        this.id = WIDGET_MANAGER.getNextID();
        this.container = new WidgetFrame(ELEMENT_WIDGET_FEED, this, title);
        WIDGET_MANAGER.registerWidget(this);
    }
    Widget.prototype.getTitle = function () {
        return this.container.elementTitle.innerText;
    };
    Widget.prototype.trySetSourceWidget = function (widget) {
        this.container.sourceDropdown.selectOption(widget.id.toString());
    };
    return Widget;
}());
var InputWidget = /** @class */ (function (_super) {
    __extends(InputWidget, _super);
    function InputWidget() {
        var _this = _super.call(this, "Input") || this;
        _this.delimType = "comma";
        _this.convertOption = "None";
        _this.rawMessages = "";
        _this.outputMessages = [];
        _this.alphabet = [];
        // Setup elements
        _this.element = createElement(InputWidget.HTML);
        _this.elementInputFieldContainer = _this.element.querySelector(".input-field-container");
        _this.elementInputScrollable = new ScrollableDiv("input-field-scrollable");
        _this.elementInput = createElement("<div class=\"input-field\" contentEditable=\"true\"></div>");
        _this.elementOptionsDelimeter = _this.element.querySelector(".input-options-delimeter");
        _this.elementOptionsConvert = _this.element.querySelector(".input-options-convert");
        _this.elementParsedContainer = _this.element.querySelector(".input-parsed-container");
        _this.parsedMessageView = new MessagesView();
        _this.elementAlphabetContainer = _this.element.querySelector(".input-alphabet-container");
        _this.elementAlphabetScrollable = new ScrollableDiv("input-alphabet-scrollable");
        _this.elementAlphabet = createElement("<div class=\"input-alphabet\"></div>");
        _this.delimeterDropdown = new Dropdown({
            comma: "assets/icon-comma.png",
            dot: "assets/icon-dot.png",
            letter: "assets/icon-a.png",
            space: "assets/icon-space.png",
        }, "comma", "icon");
        _this.delimeterDropdown.selectEvent.listen(_this, function (delimType) {
            _this.delimType = delimType;
            _this.processMessages();
        });
        _this.convertDropdown = new Dropdown({
            None: "assets/icon-identity.png",
            Int: "assets/icon-123.png",
            Unique: "assets/icon-abacus.png",
            ToAscii: "assets/icon-to-ascii.png",
            FromAscii: "assets/icon-from-ascii.png",
        }, "None", "icon");
        _this.convertDropdown.selectEvent.listen(_this, function (convertOption) {
            _this.convertOption = convertOption;
            _this.processMessages();
        });
        _this.toggleSpacingButton = new ToggleButton(true, "assets/icon-expand.png", "assets/icon-expand.png");
        _this.toggleSpacingButton.clickEvent.listen(_this, function (toggled) {
            _this.parsedMessageView.setLetterGapsActive(toggled);
            _this.elementAlphabet.classList.toggle("use-gaps", toggled);
        });
        // Add all elements to each other
        _this.elementInputFieldContainer.appendChild(_this.elementInputScrollable.element);
        _this.elementInputScrollable.addContent(_this.elementInput);
        _this.elementAlphabetContainer.appendChild(_this.elementAlphabetScrollable.element);
        _this.elementAlphabetScrollable.addContent(_this.elementAlphabet);
        _this.elementParsedContainer.appendChild(_this.parsedMessageView.element);
        _this.elementOptionsDelimeter.appendChild(_this.delimeterDropdown.element);
        _this.elementOptionsConvert.appendChild(_this.convertDropdown.element);
        _this.container.addHeaderExtra(_this.toggleSpacingButton.element);
        _this.container.addContent(_this.element);
        // Setup input and output events
        _this.outputEvent = new ListenableEvent();
        _this.elementInput.addEventListener("input", function (e) {
            _this.rawMessages = _this.elementInput.innerText;
            _this.processMessages();
        });
        _this.toggleSpacingButton.setToggled(true);
        return _this;
    }
    InputWidget.prototype.processMessages = function () {
        var _this = this;
        if (this.rawMessages == null)
            return;
        // Parse, convert, get alphabet
        var parsedMessages = parseMessages(this.rawMessages, this.delimType);
        this.outputMessages = convertMessages(parsedMessages, this.convertOption);
        this.alphabet = parseAlphabet(this.outputMessages);
        // Set alphabet elements
        var maxWidth = 0;
        this.elementAlphabet.innerHTML = "";
        this.alphabet.forEach(function (l) {
            _this.elementAlphabet.appendChild(createElement("<span>".concat(l, "</span>")));
            maxWidth = Math.max(maxWidth, l.length);
        });
        this.elementAlphabet.style.setProperty("--max-width", "".concat(maxWidth * 0.85, "rem"));
        // Set parsed messages and fire event
        this.parsedMessageView.setMessages(this.outputMessages);
        this.outputEvent.fire(this.outputMessages);
        // Update alphabet scroller
        this.elementAlphabetScrollable.updateThumbToContent();
    };
    InputWidget.prototype.setContent = function (input) {
        var _this = this;
        this.elementInput.innerHTML = "";
        input.forEach(function (line) {
            _this.elementInput.innerHTML += "<div>".concat(line.join(","), "</div> ");
        });
        this.rawMessages = this.elementInput.innerText;
        this.processMessages();
    };
    InputWidget.prototype.setSourceWidget = function (widget) {
        throw new Error("Cannot set source widget for input widget");
    };
    InputWidget.prototype.getSourceType = function () {
        return "None";
    };
    InputWidget.prototype.getOutputEvent = function () {
        return this.outputEvent;
    };
    InputWidget.prototype.getOutputType = function () {
        return "Message[]";
    };
    InputWidget.prototype.getOutput = function () {
        return this.outputMessages;
    };
    InputWidget.HTML = "\n    <div class=\"input-container\">\n        <div class=\"input-field-container\">\n            <img src=\"assets/icon-input.png\">\n        </div>\n\n        <div class=\"input-options-container\">\n            <p>Delimeter</p>\n            <div class=\"input-options-delimeter\"></div>\n            <p>Convert Mode</p>\n            <div class=\"input-options-convert\"></div>\n        </div>\n\n        <div class=\"input-parsed-container\"></div>\n\n        <div class=\"input-alphabet-container\">\n            <img src=\"assets/icon-alphabet.png\">\n        </div>\n    </div>";
    return InputWidget;
}(Widget));
var StatsWidget = /** @class */ (function (_super) {
    __extends(StatsWidget, _super);
    function StatsWidget() {
        var _this = _super.call(this, "Statistics") || this;
        // Setup elements and add to container
        _this.element = createElement(StatsWidget.HTML);
        _this.container.addContent(_this.element);
        return _this;
    }
    StatsWidget.prototype.recalculateStats = function () {
        // Calculate stats
        this.calculatedStats = {};
        this.calculatedStats["Alphabet Size"] = this.alphabet.length;
        var chars = 0;
        for (var msg = 0; msg < this.messages.length; msg++)
            chars += this.messages[msg].length;
        this.calculatedStats["Message Count"] = this.messages.length;
        this.calculatedStats["Total Chars"] = chars;
        // Calculate IoC for all + each message
        this.calculatedStats["Total IoC"] = calculateIoC(this.messages, this.alphabet.length);
        for (var msg = 0; msg < this.messages.length; msg++) {
            this.calculatedStats["Msg ".concat(msg, ": Chars")] = this.messages[msg].length;
        }
        for (var msg = 0; msg < this.messages.length; msg++) {
            this.calculatedStats["Msg ".concat(msg, ": IoC")] = calculateIoC([this.messages[msg]], this.alphabet.length);
        }
        // Turn stats into elements
        this.element.innerHTML = "";
        for (var stat in this.calculatedStats) {
            var val = this.calculatedStats[stat];
            val = Math.round(val * 10000) / 10000;
            var pair = createElement("<div class=\"stats-pair\"></div>");
            var label = createElement("<div class=\"stats-label\">".concat(stat, "</div>"));
            var value = createElement("<div class=\"stats-value\">".concat(val, "</div>"));
            pair.appendChild(label);
            pair.appendChild(value);
            this.element.appendChild(pair);
        }
    };
    StatsWidget.prototype.setSourceWidget = function (widget) {
        if (widget.getOutputType() != this.getSourceType()) {
            throw new Error("Cannot set source widget of different type: ".concat(widget.getOutputType(), " != ").concat(this.getSourceType()));
        }
        if (this.sourceWidget != null) {
            this.sourceWidget.getOutputEvent().unlisten(this);
        }
        widget.getOutputEvent().listen(this, this.onSourceOutput.bind(this));
        this.sourceWidget = widget;
        this.onSourceOutput(widget.getOutput());
    };
    StatsWidget.prototype.onSourceOutput = function (messages) {
        this.messages = messages;
        this.alphabet = parseAlphabet(messages);
        this.recalculateStats();
    };
    StatsWidget.prototype.getSourceType = function () {
        return "Message[]";
    };
    StatsWidget.prototype.getOutputEvent = function () {
        throw new Error("Method not implemented.");
    };
    StatsWidget.prototype.getOutputType = function () {
        return "None";
    };
    StatsWidget.prototype.getOutput = function () {
        throw new Error("Method not implemented.");
    };
    StatsWidget.HTML = "\n        <div class=\"stats-container\">\n        </div>\n    ";
    return StatsWidget;
}(Widget));
var AlignmentWidget = /** @class */ (function (_super) {
    __extends(AlignmentWidget, _super);
    function AlignmentWidget() {
        var _this = _super.call(this, "Alignments") || this;
        // Setup elements
        _this.messageView = new MessagesView();
        _this.toggleSpacingButton = new ToggleButton(false, "assets/icon-expand.png", "assets/icon-expand.png");
        _this.toggleSpacingButton.clickEvent.listen(_this, function (toggled) {
            _this.messageView.setLetterGapsActive(toggled);
        });
        // Add elements to each other
        _this.container.addContent(_this.messageView.element);
        _this.container.addHeaderExtra(_this.toggleSpacingButton.element);
        return _this;
    }
    AlignmentWidget.prototype.setSourceWidget = function (widget) {
        if (widget.getOutputType() != this.getSourceType()) {
            throw new Error("Cannot set source widget of different type: ".concat(widget.getOutputType(), " != ").concat(this.getSourceType()));
        }
        if (this.sourceWidget != null) {
            this.sourceWidget.getOutputEvent().unlisten(this);
        }
        widget.getOutputEvent().listen(this, this.onSourceOutput.bind(this));
        this.sourceWidget = widget;
        this.onSourceOutput(widget.getOutput());
    };
    AlignmentWidget.prototype.onSourceOutput = function (messages) {
        this.messages = messages;
        this.messagesAlignments = calculateAlignments(messages);
        this.messageView.setMessages(this.messages, this.messagesAlignments);
    };
    AlignmentWidget.prototype.getSourceType = function () {
        return "Message[]";
    };
    AlignmentWidget.prototype.getOutputEvent = function () {
        throw new Error("Method not implemented.");
    };
    AlignmentWidget.prototype.getOutputType = function () {
        return "None";
    };
    AlignmentWidget.prototype.getOutput = function () {
        throw new Error("Method not implemented.");
    };
    return AlignmentWidget;
}(Widget));
var GapsWidget = /** @class */ (function (_super) {
    __extends(GapsWidget, _super);
    function GapsWidget(gapLimit) {
        if (gapLimit === void 0) { gapLimit = 15; }
        var _this = _super.call(this, "Gap Distances (< " + gapLimit + ")") || this;
        _this.gapLimit = gapLimit;
        _this.showGaps = false;
        _this.includeEnd = false;
        // Setup elements
        _this.messageView = new MessagesView();
        _this.toggleSpacingButton = new ToggleButton(false, "assets/icon-expand.png", "assets/icon-expand.png");
        _this.toggleSpacingButton.clickEvent.listen(_this, function (toggled) {
            _this.messageView.setLetterGapsActive(toggled);
        });
        _this.toggleShowGapsButton = new ToggleButton(false, "assets/icon-ruler.png", "assets/icon-ruler.png");
        _this.toggleShowGapsButton.clickEvent.listen(_this, function (toggled) {
            _this.showGaps = toggled;
            _this.messageView.setMessages(_this.showGaps ? _this.messagesGapsValues : _this.messages, _this.messagesGaps);
        });
        _this.toggleIncludeEndButton = new ToggleButton(false, "assets/icon-paperclip-on.png", "assets/icon-paperclip-on.png");
        _this.toggleIncludeEndButton.clickEvent.listen(_this, function (toggled) {
            _this.includeEnd = toggled;
            _this.recalculateGaps();
        });
        // Add elements to each other
        _this.container.addContent(_this.messageView.element);
        _this.container.addHeaderExtra(_this.toggleSpacingButton.element);
        _this.container.addHeaderExtra(_this.toggleShowGapsButton.element);
        _this.container.addHeaderExtra(_this.toggleIncludeEndButton.element);
        return _this;
    }
    GapsWidget.prototype.recalculateGaps = function () {
        this.messagesGaps = calculateGaps(this.messages, this.gapLimit, this.includeEnd);
        // Calculate gap messages for display
        this.messagesGapsValues = [];
        for (var msg = 0; msg < this.messagesGaps.length; msg++) {
            this.messagesGapsValues.push([]);
            for (var col = 0; col < this.messagesGaps[msg].length; col++) {
                this.messagesGapsValues[msg].push(this.messagesGaps[msg][col].length == 0 ? 0 : Math.abs(this.messagesGaps[msg][col][this.messagesGaps[msg][col].length - 1]));
            }
        }
        // Set messages based on show gaps
        this.messageView.setMessages(this.showGaps ? this.messagesGapsValues : this.messages, this.messagesGaps);
    };
    GapsWidget.prototype.setSourceWidget = function (widget) {
        if (widget.getOutputType() != this.getSourceType()) {
            throw new Error("Cannot set source widget of different type: ".concat(widget.getOutputType(), " != ").concat(this.getSourceType()));
        }
        if (this.sourceWidget != null) {
            this.sourceWidget.getOutputEvent().unlisten(this);
        }
        widget.getOutputEvent().listen(this, this.onSourceOutput.bind(this));
        this.sourceWidget = widget;
        this.onSourceOutput(widget.getOutput());
    };
    GapsWidget.prototype.onSourceOutput = function (messages) {
        this.messages = messages;
        this.recalculateGaps();
    };
    GapsWidget.prototype.getSourceType = function () {
        return "Message[]";
    };
    GapsWidget.prototype.getOutputEvent = function () {
        throw new Error("Method not implemented.");
    };
    GapsWidget.prototype.getOutputType = function () {
        return "None";
    };
    GapsWidget.prototype.getOutput = function () {
        throw new Error("Method not implemented.");
    };
    return GapsWidget;
}(Widget));
var FrequencyWidget = /** @class */ (function (_super) {
    __extends(FrequencyWidget, _super);
    function FrequencyWidget(title) {
        if (title === void 0) { title = "Letter Frequencies"; }
        var _this = _super.call(this, title) || this;
        _this.sorted = false;
        // Setup elements
        _this.element = createElement(FrequencyWidget.HTML);
        _this.elementChart = _this.element.querySelector("#freq-chart");
        _this.toggleSortedButton = new ToggleButton(false, "assets/icon-sorted.png", "assets/icon-sorted.png");
        _this.toggleSortedButton.clickEvent.listen(_this, function (toggled) {
            _this.sorted = toggled;
            _this.updateChart();
        });
        // Add elements to each other
        _this.container.addContent(_this.element);
        _this.container.addHeaderExtra(_this.toggleSortedButton.element);
        return _this;
    }
    FrequencyWidget.prototype.updateChart = function () {
        var _this = this;
        var ctx = this.elementChart.getContext("2d");
        var keys = Object.keys(this.messagesFreq);
        if (this.sorted)
            keys.sort(function (a, b) { return _this.messagesFreq[b] - _this.messagesFreq[a]; });
        var values = keys.map(function (key) { return _this.messagesFreq[key]; });
        var max = Math.max.apply(Math, values);
        var colours = keys.map(function (key) {
            var pct = _this.messagesFreq[key] / max;
            return "hsl(214, 40%, ".concat(80 - 60 * pct, "%)");
        });
        if (this.chart != null)
            this.chart.destroy();
        this.chart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: keys,
                datasets: [
                    {
                        data: values,
                        backgroundColor: colours,
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                scales: {
                    yAxes: [{ ticks: { beginAtZero: true } }],
                },
                maintainAspectRatio: false,
            },
        });
    };
    FrequencyWidget.prototype.setSourceWidget = function (widget) {
        if (widget.getOutputType() != this.getSourceType()) {
            throw new Error("Cannot set source widget of different type: ".concat(widget.getOutputType(), " != ").concat(this.getSourceType()));
        }
        if (this.sourceWidget != null) {
            this.sourceWidget.getOutputEvent().unlisten(this);
        }
        widget.getOutputEvent().listen(this, this.onSourceOutput.bind(this));
        this.sourceWidget = widget;
        this.onSourceOutput(widget.getOutput());
    };
    FrequencyWidget.prototype.onSourceOutput = function (messages) {
        this.messages = messages;
        this.messagesFreq = calculateFrequencies(messages);
        this.updateChart();
    };
    FrequencyWidget.prototype.getSourceType = function () {
        return "Message[]";
    };
    FrequencyWidget.prototype.getOutputEvent = function () {
        throw new Error("Method not implemented.");
    };
    FrequencyWidget.prototype.getOutputType = function () {
        return "None";
    };
    FrequencyWidget.prototype.getOutput = function () {
        throw new Error("Method not implemented.");
    };
    FrequencyWidget.HTML = "\n    <div class='chart-container'>\n        <canvas id=\"freq-chart\"></canvas>\n    </div>";
    return FrequencyWidget;
}(Widget));
var DeltasWidget = /** @class */ (function (_super) {
    __extends(DeltasWidget, _super);
    function DeltasWidget() {
        var _this = _super.call(this, "Deltas") || this;
        _this.mod = false;
        _this.modSize = 0;
        // Setup elements
        _this.messageView = new MessagesView("Colour");
        _this.toggleSpacingButton = new ToggleButton(false, "assets/icon-expand.png", "assets/icon-expand.png");
        _this.toggleSpacingButton.clickEvent.listen(_this, function (toggled) {
            _this.messageView.setLetterGapsActive(toggled);
        });
        _this.toggleModButton = new ToggleButton(false, "assets/icon-pct.png", "assets/icon-pct.png");
        _this.toggleModButton.clickEvent.listen(_this, function (toggled) {
            _this.mod = toggled;
            _this.recalculateDeltas();
        });
        // Add elements to container after setup
        _this.container.addContent(_this.messageView.element);
        _this.container.addHeaderExtra(_this.toggleSpacingButton.element);
        _this.container.addHeaderExtra(_this.toggleModButton.element);
        // Setup output event
        _this.outputEvent = new ListenableEvent();
        return _this;
    }
    DeltasWidget.prototype.recalculateDeltas = function () {
        this.messagesDeltas = calculateDeltas(this.messages, this.mod ? this.modSize : null);
        // Calculate min and max delta
        var min = Infinity;
        var max = -Infinity;
        for (var msg = 0; msg < this.messagesDeltas.length; msg++) {
            var l = this.messagesDeltas[msg].length;
            for (var col = 0; col < l; col++) {
                min = Math.min(min, this.messagesDeltas[msg][col]);
                max = Math.max(max, this.messagesDeltas[msg][col]);
            }
        }
        // Calculate highlight values
        var messagesDeltasHighlight = [];
        for (var msg = 0; msg < this.messagesDeltas.length; msg++) {
            messagesDeltasHighlight.push([]);
            for (var col = 0; col < this.messagesDeltas[msg].length; col++) {
                var val = this.messagesDeltas[msg][col];
                if (val < 0) {
                    var pct = val / min;
                    messagesDeltasHighlight[msg].push("hsl(0, 40%, ".concat(90 - 50 * pct, "%)"));
                }
                else {
                    var pct = val / max;
                    messagesDeltasHighlight[msg].push("hsl(214, 40%, ".concat(90 - 50 * pct, "%)"));
                }
            }
        }
        // Set messages based on show gaps
        this.messageView.setMessages(this.messagesDeltas, messagesDeltasHighlight);
        // Fire output event
        this.outputEvent.fire(this.messagesDeltas);
    };
    DeltasWidget.prototype.setSourceWidget = function (widget) {
        if (widget.getOutputType() != this.getSourceType()) {
            throw new Error("Cannot set source widget of different type: ".concat(widget.getOutputType(), " != ").concat(this.getSourceType()));
        }
        if (this.sourceWidget != null) {
            this.sourceWidget.getOutputEvent().unlisten(this);
        }
        widget.getOutputEvent().listen(this, this.onSourceOutput.bind(this));
        this.sourceWidget = widget;
        this.onSourceOutput(widget.getOutput());
    };
    DeltasWidget.prototype.onSourceOutput = function (messages) {
        this.messages = messages;
        var alphabet = parseAlphabet(messages);
        this.modSize = alphabet.length;
        this.recalculateDeltas();
    };
    DeltasWidget.prototype.getSourceType = function () {
        return "Message[]";
    };
    DeltasWidget.prototype.getOutputEvent = function () {
        return this.outputEvent;
    };
    DeltasWidget.prototype.getOutputType = function () {
        return "Message[]";
    };
    DeltasWidget.prototype.getOutput = function () {
        return this.messagesDeltas;
    };
    return DeltasWidget;
}(Widget));
// ------------------------ Driver ------------------------
(function () {
    WIDGET_MANAGER = new WidgetManager();
    // Initialize user input
    var widgetInput = new InputWidget();
    var widgetStats = new StatsWidget();
    var widgetShared = new AlignmentWidget();
    var widgetGaps = new GapsWidget();
    var widgetFreq = new FrequencyWidget();
    var widgetDeltas = new DeltasWidget();
    var widgetDeltasFreq = new FrequencyWidget("Delta Frequencies");
    // Hook up all widgets
    widgetStats.trySetSourceWidget(widgetInput);
    widgetShared.trySetSourceWidget(widgetInput);
    widgetGaps.trySetSourceWidget(widgetInput);
    widgetFreq.trySetSourceWidget(widgetInput);
    widgetDeltas.trySetSourceWidget(widgetInput);
    widgetDeltasFreq.trySetSourceWidget(widgetDeltas);
    // Set initial value
    widgetInput.setContent(EXAMPLE_MESSAGES);
})();
