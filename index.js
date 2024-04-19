// TODO:
// - Properly sort alphabet in parseAlphabet()
// - Delta button to toggle MOD alphabet length
// - IoC calculation and find better place for messages IoC
// - Base conversion in BaselineWidget

const ELEMENT_MAIN = document.querySelector(".main");

const EXAMPLE_MESSAGES = [
    [
        50, 66, 5, 48, 62, 13, 75, 29, 24, 61, 42, 70, 66, 62, 32, 14, 81, 8,
        15, 78, 2, 29, 13, 49, 1, 80, 82, 40, 63, 81, 21, 19, 0, 40, 51, 65, 26,
        14, 21, 70, 47, 44, 48, 42, 19, 48, 13, 47, 19, 49, 72, 31, 5, 24, 3,
        43, 59, 67, 33, 49, 41, 60, 21, 26, 30, 5, 25, 20, 71, 11, 74, 56, 4,
        74, 19, 71, 4, 51, 41, 43, 80, 72, 54, 63, 79, 81, 15, 16, 44, 31, 30,
        12, 33, 57, 28, 13, 64, 43, 48,
    ],
    [
        80, 66, 5, 48, 62, 13, 75, 29, 24, 61, 42, 70, 66, 62, 32, 14, 81, 8,
        15, 78, 2, 29, 13, 49, 1, 29, 11, 30, 52, 81, 21, 19, 0, 25, 26, 54, 20,
        14, 21, 70, 47, 44, 48, 42, 19, 48, 13, 47, 19, 49, 44, 26, 59, 77, 64,
        43, 79, 28, 72, 64, 1, 30, 73, 23, 67, 6, 33, 25, 64, 81, 68, 46, 17,
        36, 13, 17, 21, 68, 13, 9, 46, 67, 57, 34, 62, 82, 15, 10, 73, 62, 2,
        11, 65, 72, 37, 44, 10, 43, 68, 62, 9, 34, 18,
    ],
    [
        36, 66, 5, 48, 62, 13, 75, 29, 24, 61, 42, 70, 66, 62, 32, 14, 81, 8,
        15, 78, 2, 29, 13, 49, 1, 69, 76, 52, 9, 48, 66, 80, 22, 64, 57, 40, 49,
        78, 3, 16, 56, 19, 47, 40, 80, 6, 13, 64, 29, 49, 64, 63, 6, 49, 31, 13,
        16, 10, 45, 24, 26, 77, 10, 60, 81, 61, 34, 54, 70, 21, 15, 4, 66, 77,
        42, 37, 30, 22, 0, 11, 41, 72, 57, 20, 23, 57, 65, 41, 23, 18, 72, 42,
        5, 3, 26, 78, 8, 5, 54, 45, 77, 25, 64, 61, 16, 44, 54, 51, 20, 63, 25,
        11, 26, 45, 53, 60, 38, 34,
    ],
    [
        76, 66, 5, 49, 75, 54, 69, 46, 32, 1, 42, 60, 26, 48, 50, 80, 32, 24,
        55, 61, 47, 12, 21, 12, 49, 54, 34, 25, 36, 15, 56, 55, 20, 9, 8, 62,
        13, 82, 9, 44, 29, 60, 53, 82, 42, 80, 5, 43, 71, 3, 80, 77, 47, 78, 34,
        25, 62, 18, 10, 49, 62, 64, 52, 81, 11, 66, 62, 13, 47, 17, 52, 70, 26,
        23, 32, 31, 64, 23, 35, 32, 50, 6, 1, 25, 8, 37, 47, 43, 26, 76, 65, 68,
        80, 17, 7, 45, 63, 14, 53, 63, 60, 16,
    ],
    [
        63, 66, 5, 49, 75, 54, 2, 60, 29, 40, 78, 47, 60, 75, 67, 71, 60, 2, 65,
        7, 47, 14, 45, 74, 59, 41, 80, 13, 60, 13, 81, 22, 35, 50, 40, 39, 2,
        59, 48, 31, 76, 2, 80, 75, 1, 56, 67, 11, 21, 8, 40, 65, 45, 75, 55, 39,
        60, 42, 13, 3, 22, 57, 2, 6, 58, 9, 70, 1, 58, 56, 63, 68, 25, 79, 7,
        20, 19, 64, 2, 66, 73, 30, 71, 16, 12, 30, 65, 37, 20, 13, 22, 63, 18,
        46, 64, 59, 41, 81, 82, 22, 78, 36, 47, 17, 4, 6, 17, 5, 36, 79, 63, 1,
        64, 69, 15, 43, 4, 58, 56, 31, 14, 64, 58, 18, 44, 78, 69, 1, 0, 46, 20,
        71, 73, 25, 35, 8, 24,
    ],
    [
        34, 66, 5, 49, 75, 54, 23, 74, 11, 13, 28, 26, 19, 48, 67, 57, 37, 60,
        34, 28, 74, 10, 17, 32, 11, 18, 19, 43, 19, 81, 42, 4, 62, 9, 46, 49,
        32, 51, 76, 58, 4, 43, 47, 17, 67, 79, 21, 32, 44, 16, 30, 37, 26, 28,
        41, 68, 57, 34, 51, 10, 69, 70, 8, 6, 46, 43, 18, 39, 47, 43, 15, 13,
        33, 30, 35, 62, 37, 0, 37, 5, 38, 55, 37, 13, 40, 25, 9, 21, 11, 64, 5,
        79, 42, 68, 11, 71, 11, 48, 3, 67, 61, 40, 22, 14, 35, 50, 61, 39, 11,
        2, 66, 49, 51, 53, 17, 73, 36, 75, 74, 54, 24, 30, 54, 70,
    ],
    [
        27, 66, 5, 49, 75, 54, 2, 60, 29, 40, 2, 55, 9, 15, 59, 18, 68, 3, 36,
        5, 47, 77, 44, 38, 1, 18, 28, 76, 4, 34, 60, 63, 58, 80, 17, 54, 79, 75,
        48, 54, 55, 19, 62, 64, 14, 47, 51, 70, 75, 5, 11, 47, 45, 58, 68, 69,
        79, 25, 38, 45, 73, 47, 68, 50, 34, 45, 78, 26, 79, 57, 4, 56, 22, 60,
        18, 75, 43, 60, 59, 67, 63, 42, 49, 33, 40, 65, 79, 77, 7, 3, 26, 62,
        31, 78, 26, 57, 69, 40, 4, 23, 26, 13, 67, 42, 38, 72, 11, 39, 65, 60,
        25, 6, 80, 66, 68, 77, 59, 78, 19,
    ],
    [
        77, 66, 5, 49, 75, 54, 2, 60, 29, 40, 2, 55, 9, 15, 59, 18, 68, 3, 36,
        5, 47, 60, 21, 80, 1, 72, 55, 16, 82, 35, 57, 19, 1, 66, 18, 27, 39, 17,
        74, 81, 39, 14, 78, 0, 25, 65, 43, 66, 64, 38, 81, 23, 24, 50, 57, 30,
        71, 75, 26, 68, 54, 57, 56, 50, 71, 73, 14, 21, 8, 32, 26, 63, 5, 37,
        19, 43, 66, 47, 53, 34, 66, 23, 73, 31, 54, 38, 77, 67, 11, 63, 79, 6,
        22, 21, 51, 69, 74, 21, 5, 17, 67, 37, 29, 21, 60, 14, 82, 44, 30, 4,
        20, 42, 35, 1, 31, 54, 46, 20, 40, 30,
    ],
    [
        33, 66, 5, 49, 75, 54, 2, 60, 29, 40, 2, 55, 9, 15, 59, 18, 68, 3, 36,
        5, 47, 33, 21, 59, 44, 18, 28, 76, 59, 34, 60, 63, 79, 27, 12, 54, 5,
        49, 48, 54, 55, 52, 62, 72, 69, 10, 57, 22, 58, 48, 67, 53, 7, 34, 32,
        30, 31, 19, 26, 8, 34, 46, 7, 30, 71, 55, 34, 75, 54, 9, 6, 60, 5, 23,
        25, 45, 42, 80, 25, 12, 22, 76, 20, 51, 62, 21, 40, 9, 41, 10, 44, 73,
        8, 33, 70, 73, 6, 31, 21, 72, 5, 40, 61, 51, 42, 66, 64, 74, 61, 25, 63,
        42, 24, 41,
    ],
];

const HIGHLIGHT_COLOUR_COUNT = 15;
let HIGHLIGHT_COLOURS = [];
for (let i = 0; i < HIGHLIGHT_COLOUR_COUNT; i++) {
    const pct = (i / HIGHLIGHT_COLOUR_COUNT) % 1;
    HIGHLIGHT_COLOURS.push(`hsl(${360 * pct}, 75%, 75%)`);
}

// ------------------------ Crypto ------------------------

// Messages: char[][]
function parseMessages(text, delim = ",") {
    if (text == "") return [];
    let lines = text.split("\n");
    lines = lines.filter((line) => line != "");
    lines = lines.map((line) => line.split(delim));
    return lines;
}

// Messages: char[][]
function convertMessages(messages, convertOption) {
    let converted = [];

    if (convertOption == "Unique") {
        var uniqueID = 0;
        var uniqueMap = {};
    }

    // Convert messages based on convertOption
    for (let msg = 0; msg < messages.length; msg++) {
        converted.push([]);
        for (let col = 0; col < messages[msg].length; col++) {
            const val = messages[msg][col];
            if (convertOption == "Int") {
                converted[msg].push(parseInt(val));
            } else if (convertOption == "Unique") {
                if (uniqueMap[val] == null) uniqueMap[val] = uniqueID++;
                converted[msg].push(uniqueMap[val]);
            } else if (convertOption == "ToAscii") {
                converted[msg].push(String.fromCharCode(parseInt(val) + 32));
            } else if (convertOption == "FromAscii") {
                converted[msg].push(val.charCodeAt(0) - 32);
            } else {
                converted[msg].push(val);
            }
        }
    }

    return converted;
}

// Alphabet: Set<char>
function parseAlphabet(messages) {
    let alphabet = new Set();
    for (let msg = 0; msg < messages.length; msg++) {
        for (let col = 0; col < messages[msg].length; col++) {
            alphabet.add(messages[msg][col]);
        }
    }
    alphabet = Array.from(alphabet);

    // If all elements are numbers sort
    if (alphabet.every((char) => !isNaN(char))) {
        alphabet.sort((a, b) => a - b);
    }

    return alphabet;
}

// Shared: int[][]
function calculateAlignments(messages) {
    const maxLength = Math.max(...messages.map((line) => line.length));
    let shared = [];
    for (let i = 0; i < messages.length; i++) shared.push([]);

    // For each column in the messages
    for (let col = 0; col < maxLength; col++) {
        let found = {};
        let assignedIDs = {};
        let nextID = 1;

        // For each message that has this column
        for (let msg = 0; msg < messages.length; msg++) {
            if (col >= messages[msg].length) continue;
            val = messages[msg][col];

            // 0 if unique, next ID otherwise
            if (found[val] == null) {
                found[val] = msg;
                shared[msg].push(0);
            } else {
                if (assignedIDs[val] == null) {
                    const id = nextID++;
                    assignedIDs[val] = id;
                    shared[found[val]][col] = id;
                }
                shared[msg].push(assignedIDs[val]);
            }
        }
    }

    return shared;
}

// Gaps: int[][]
function calculateGaps(messages, gapLimit, includeEnd = false) {
    let gaps = [];

    // For each message
    for (let msg = 0; msg < messages.length; msg++) {
        gaps.push([]);
        found = {};

        // For each column in the message
        for (let col = 0; col < messages[msg].length; col++) {
            val = messages[msg][col];
            gaps[msg].push([]);

            // 0 by default, on gap set start
            if (found[val] != null) {
                const diff = col - found[val];
                if (diff <= gapLimit) {
                    gaps[msg][found[val]].push(diff);
                    if (includeEnd) gaps[msg][col].push(diff);
                }
            }

            found[val] = col;
        }
    }

    return gaps;
}

// Frequencies: dict<char, int>
function calculateFrequencies(messages) {
    let freqs = {};
    for (let msg = 0; msg < messages.length; msg++) {
        for (let col = 0; col < messages[msg].length; col++) {
            const val = messages[msg][col];
            if (freqs[val] == null) freqs[val] = 0;
            freqs[val]++;
        }
    }
    return freqs;
}

// Deltas: int[][]
function calculateDeltas(messages, modSize = null) {
    let deltas = [];
    for (let msg = 0; msg < messages.length; msg++) {
        deltas.push([]);
        for (let col = 1; col < messages[msg].length; col++) {
            let delta = messages[msg][col] - messages[msg][col - 1];
            if (modSize != null) delta = (delta + modSize) % modSize;
            deltas[msg].push(delta);
        }
    }
    return deltas;
}

function calculateIoC(messages, alphabetSize) {
    let freqs = calculateFrequencies(messages);

    let total = 0;
    let N = 0;
    for (let char in freqs) {
        n = freqs[char];
        total += n * (n - 1);
        N += n;
    }

    return total / ((N * (N - 1)) / alphabetSize);
}

// ------------------------ Utility ------------------------

function createElement(html) {
    const element = document.createElement("div");
    element.innerHTML = html.trim();
    return element.firstChild;
}

class ListenableEvent {
    constructor() {
        this.listeners = [];
    }

    subscribe(listener) {
        this.listeners.push(listener);
    }

    fire(...args) {
        this.listeners.forEach((listener) => listener(...args));
    }
}

class MessagesContent {
    static HTML = `
        <div class="messages use-gaps"></div>
    `;

    constructor(highlightMode = "Categoric") {
        // Assert highlightMode
        if (highlightMode != "Categoric" && highlightMode != "Numeric") {
            throw new Error("Invalid highlight mode");
        }

        // Setup content variables
        this.messages = [];
        this.highlight = null;
        this.highlightMode = highlightMode;
        this.useSpacing = true;
        this.element = createElement(MessagesContent.HTML);
    }

    setMessages(messages, highlight = null) {
        // Find fixed width based on maximum character count
        let maxWidth = 0;
        for (let msg = 0; msg < messages.length; msg++) {
            for (let col = 0; col < messages[msg].length; col++) {
                maxWidth = Math.max(
                    maxWidth,
                    messages[msg][col].toString().length
                );
            }
        }

        // Set max width of span with this.element style
        this.element.style.setProperty(
            "--max-width",
            `${maxWidth * 1.4 * 0.85}rem`
        );

        // Create div for each row, span for each cell
        this.messages = messages;
        this.cells = [];
        this.element.innerHTML = "";
        for (let msg = 0; msg < messages.length; msg++) {
            const row = createElement(`<div class="message"></div>`);
            this.cells.push([]);
            for (let col = 0; col < messages[msg].length; col++) {
                const cell = createElement(
                    `<span>${messages[msg][col]}</span>`
                );
                row.appendChild(cell);
                this.cells[msg].push(cell);
            }
            this.element.appendChild(row);
        }

        // Highlight letters
        this.setHighlight(highlight);
    }

    setHighlight(highlight) {
        this.highlight = highlight;
        if (highlight == null) return;

        // Highlight every span
        for (let msg = 0; msg < this.messages.length; msg++) {
            for (let col = 0; col < this.messages[msg].length; col++) {
                if (this.highlightMode == "Categoric") {
                    // Categoric: Pick highlight from colour list
                    const colA =
                        HIGHLIGHT_COLOURS[
                            highlight[msg][col][0] % HIGHLIGHT_COLOUR_COUNT
                        ];
                    if (highlight[msg][col].length == 1) {
                        this.cells[msg][col].style.backgroundColor = colA;
                    } else if (highlight[msg][col].length == 2) {
                        // Gradient between 2 colours
                        const colB =
                            HIGHLIGHT_COLOURS[
                                highlight[msg][col][1] % HIGHLIGHT_COLOUR_COUNT
                            ];
                        this.cells[msg][
                            col
                        ].style.backgroundImage = `linear-gradient(to right, ${colA}, ${colB})`;
                    }
                    this.cells[msg][col].title = highlight[msg][col];
                } else if (this.highlightMode == "Numeric") {
                    // Numeric: Set highlight as colour
                    this.cells[msg][col].style.backgroundColor =
                        highlight[msg][col];
                }
            }
        }
    }

    toggleSpacing() {
        this.element.classList.toggle("use-gaps");
        this.useSpacing = !this.useSpacing;
    }
}

class Button {
    static HTML = `<img class="widget-button">`;

    constructor(iconPath, callback) {
        this.element = createElement(Button.HTML);
        this.element.src = iconPath;

        // Setup event and listener
        this.clickEvent = new ListenableEvent();
        this.element.addEventListener("click", (e) => {
            e.stopPropagation();
            this.clickEvent.fire(e);
        });

        // Subscribe callback if provided
        if (callback != null) this.clickEvent.subscribe(callback);
    }
}

class Dropdown {
    static HTML = `
        <div class="widget-dropdown">
            <img class="widget-dropdown-icon-current"><img class="widget-dropdown-icon-select" src="assets/icon-dropdown.png">
            <div class="widget-dropdown-options"></div>
        </div> 
    `;

    constructor(options, initial, callback) {
        this.element = createElement(Dropdown.HTML);

        // Setup variables
        this.options = options;
        this.elementIconCurrent = this.element.querySelector(
            ".widget-dropdown-icon-current"
        );
        this.elementIconSelect = this.element.querySelector(
            ".widget-dropdown-icon-select"
        );
        this.elementOptions = this.element.querySelector(
            ".widget-dropdown-options"
        );

        // Hide dropdown
        this.elementOptions.style.display = "none";

        // Setup all options
        for (let option in options) {
            const optionElement = createElement(`<div>`);
            const imgElement = createElement(`<img>`);
            optionElement.appendChild(imgElement);
            imgElement.src = options[option];
            this.elementOptions.appendChild(optionElement);

            // Add event listener
            optionElement.addEventListener("click", (e) => {
                e.stopPropagation();
                this.selectOption(option);
                this.elementOptions.style.display = "none";
            });
        }

        // Setup event and listener
        this.selectEvent = new ListenableEvent();

        // Subscribe callback if provided
        if (callback != null) this.selectEvent.subscribe(callback);

        // Listener on dropdown to open
        this.element.addEventListener("click", (e) => {
            e.stopPropagation();
            this.elementOptions.style.display =
                this.elementOptions.style.display == "none" ? "flex" : "none";
        });

        // Select initial
        this.selectOption(initial);
    }

    selectOption(option) {
        this.selected = option;
        this.elementIconCurrent.src = this.options[option];
        this.selectEvent.fire(option);
    }
}

// ------------------------ Widgets ------------------------

class WidgetContainer {
    static HTML = `
        <div class="widget-container">
            <div class="widget-header">
                <div class="widget-title"></div>
                <div class="widget-extra"></div>
            </div>
            <div class="widget-content"></div>
        </div>
    `;

    constructor(parent, title = "") {
        this.isClosed = false;

        // Setup container
        this.element = createElement(WidgetContainer.HTML);
        this.elementHeader = this.element.querySelector(".widget-header");
        this.elementTitle = this.element.querySelector(".widget-title");
        this.elementExtra = this.element.querySelector(".widget-extra");
        this.elementContent = this.element.querySelector(".widget-content");
        if (parent != null) parent.appendChild(this.element);

        // Add title close listener
        this.elementHeader.addEventListener("click", () => this.toggleClosed());

        // Set title
        this.setTitle(title);
    }

    addExtra(extra) {
        this.elementExtra.appendChild(extra);
    }

    setTitle(title) {
        this.elementTitle.textContent = title;
    }

    addContent(content) {
        this.elementContent.appendChild(content);
    }

    toggleClosed() {
        this.isClosed = !this.isClosed;
        this.element.classList.toggle("closed");
        this.elementContent.style.display = this.isClosed ? "none" : "block";
    }
}

class InputWidget {
    static HTML = `
        <div class="user-input-wrapper">
            <img class="user-input-icon" src="assets/icon-input.png">
            <div class="user-input" contentEditable="true">
        </div>
    `;

    constructor(parent, title = "Input") {
        this.messages = [];
        this.delim = "";

        // Setup container and put input inside
        this.container = new WidgetContainer(parent, title);
        this.element = createElement(InputWidget.HTML);
        this.elementInput = this.element.querySelector(".user-input");
        this.container.addContent(this.element);

        // Setup onInput event and listeners
        this.outputEvent = new ListenableEvent();
        this.elementInput.addEventListener("input", (e) => {
            this.reparseMessages();
        });

        // Setup delim dropdown
        this.delimDropdown = new Dropdown(
            {
                comma: "assets/icon-comma.png",
                dot: "assets/icon-dot.png",
                letter: "assets/icon-a.png",
            },
            "comma",
            (delimOption) => this.setDelim(delimOption)
        );
        this.container.addExtra(this.delimDropdown.element);
    }

    setContent(input, delimOption) {
        this.elementInput.innerHTML = "";
        input.forEach((line) => {
            this.elementInput.innerHTML += `<div>${line}</div> `;
        });
        this.setDelim(delimOption);
    }

    setDelim(delimOption) {
        if (delimOption == "letter") this.delim = "";
        else if (delimOption == "comma") this.delim = ",";
        else if (delimOption == "dot") this.delim = ".";
        this.reparseMessages();
    }

    reparseMessages() {
        this.messages = parseMessages(this.elementInput.innerText, this.delim);
        this.outputEvent.fire(this.messages);
    }
}

class BaselineWidget {
    static HTML = `
        <div class="baseline-container">
            <div class="baseline-select-container">
                <p>Convert Mode</p>
                <div class="baseline-select"></div>
            </div>
            <div class="baseline-output"></div>
            <hr>
            <div class="baseline-alphabet-container">
                <img src="assets/icon-alphabet.png">
                <div class="baseline-alphabet"></div>
            </div>
        </div>
    `;

    constructor(parent, inputEvent) {
        this.convertOption = "None";

        // Setup container and put input inside
        this.container = new WidgetContainer(parent, "Converted Ciphertext");
        this.element = createElement(BaselineWidget.HTML);
        this.elementSelect = this.element.querySelector(".baseline-select");
        this.elementSelectDropdown = new Dropdown(
            {
                None: "assets/icon-identity.png",
                Int: "assets/icon-123.png",
                Unique: "assets/icon-abacus.png",
                ToAscii: "assets/icon-to-ascii.png",
                FromAscii: "assets/icon-from-ascii.png",
            },
            "None",
            (convertOption) => this.setConvertMode(convertOption)
        );
        this.elementSelect.appendChild(this.elementSelectDropdown.element);
        this.messagesContent = new MessagesContent();
        this.elementOutput = this.element.querySelector(".baseline-output");
        this.elementOutput.appendChild(this.messagesContent.element);
        this.elementAlphabet = this.element.querySelector(".baseline-alphabet");
        this.container.addContent(this.element);

        // Setup toggle gaps button
        this.toggleSpacingButton = new Button("assets/icon-shrink.png", () => {
            this.messagesContent.toggleSpacing();
            this.toggleSpacingButton.element.src = this.messagesContent
                .useSpacing
                ? "assets/icon-shrink.png"
                : "assets/icon-expand.png";
        });
        this.container.addExtra(this.toggleSpacingButton.element);

        // Setup output event
        this.outputEvent = new ListenableEvent();

        // Setup text event listener
        inputEvent.subscribe((messages) => {
            this.inputMessages = messages;
            this.processMessages();
            this.messagesContent.setMessages(this.outputMessages);
        });
    }

    setConvertMode(convertOption) {
        this.convertOption = convertOption;
        if (this.inputMessages != null) {
            this.processMessages();
            this.messagesContent.setMessages(this.outputMessages);
        }
    }

    processMessages() {
        // Convert input to output messages
        this.outputMessages = convertMessages(
            this.inputMessages,
            this.convertOption
        );

        // Parse alphabet and add spans to element
        this.alphabet = parseAlphabet(this.outputMessages);
        this.elementAlphabet.innerHTML = "";
        this.alphabet.forEach((char) => {
            const span = createElement(`<span>${char}</span>`);
            this.elementAlphabet.appendChild(span);
        });

        // Find fixed width based on maximum character count
        let maxWidth = 0;
        for (let l = 0; l < this.alphabet.length; l++) {
            maxWidth = Math.max(maxWidth, this.alphabet[l].toString().length);
        }

        // Set max width of span with this.element style
        this.elementAlphabet.style.setProperty(
            "--max-width",
            `${maxWidth * 1.4 * 0.85}rem`
        );

        this.outputEvent.fire(this.outputMessages, this.alphabet);
    }
}

class StatsWidget {
    static HTML = `
        <div class="stats-container">
        </div>
    `;

    constructor(parent, inputEvent) {
        this.container = new WidgetContainer(parent, "Statistics");
        this.element = createElement(StatsWidget.HTML);
        this.container.addContent(this.element);

        // Setup text event listener
        inputEvent.subscribe((messages, alphabet) => {
            this.messages = messages;
            this.alphabet = alphabet;
            this.recalculateStats();
        });
    }

    recalculateStats() {
        // Caclualte stats
        this.calculatedStats = {};
        this.calculatedStats["Alphabet Size"] = this.alphabet.length;
        let totalChars = 0;
        for (let msg = 0; msg < this.messages.length; msg++) {
            totalChars += this.messages[msg].length;
        }
        this.calculatedStats["Total Characters"] = totalChars;
        this.calculatedStats["Message Count"] = this.messages.length;

        // Calculate IoC for all + each message
        this.calculatedStats["IoC"] = calculateIoC(
            this.messages,
            this.alphabet.length
        );
        for (let msg = 0; msg < this.messages.length; msg++) {
            this.calculatedStats[`IoC ${msg}`] = calculateIoC(
                [this.messages[msg]],
                this.alphabet.length
            );
        }

        // Turn stats into elements
        this.element.innerHTML = "";
        for (let stat in this.calculatedStats) {
            let val = this.calculatedStats[stat];
            val = Math.round(val * 10000) / 10000;
            const pair = createElement(`<div class="stats-pair"></div>`);
            const label = createElement(
                `<div class="stats-label">${stat}</div>`
            );
            const value = createElement(
                `<div class="stats-value">${val}</div>`
            );
            pair.appendChild(label);
            pair.appendChild(value);
            this.element.appendChild(pair);
        }
    }
}

class VisAlignmentWidget {
    constructor(parent, inputEvent) {
        // Setup container and put input inside
        this.container = new WidgetContainer(parent, "Alignments");
        this.messagesContent = new MessagesContent();
        this.container.addContent(this.messagesContent.element);

        // Setup toggle gaps button
        this.toggleSpacingButton = new Button("assets/icon-shrink.png", () => {
            this.messagesContent.toggleSpacing();
            this.toggleSpacingButton.element.src = this.messagesContent
                .useSpacing
                ? "assets/icon-shrink.png"
                : "assets/icon-expand.png";
        });
        this.container.addExtra(this.toggleSpacingButton.element);

        // Setup text event listener
        inputEvent.subscribe((messages) => {
            this.messages = messages;
            this.messagesAlignments = calculateAlignments(messages);
            this.messagesContent.setMessages(
                this.messages,
                this.messagesAlignments
            );
        });
    }
}

class VisGapsWidget {
    constructor(parent, inputEvent, gapLimit = 15) {
        this.showGaps = false;

        // Setup container and put input inside
        this.container = new WidgetContainer(parent, "Gap Distances");
        this.messagesContent = new MessagesContent();
        this.container.addContent(this.messagesContent.element);
        this.gapLimit = gapLimit;
        this.includeEnd = false;

        // Setup toggle spacing button
        this.toggleSpacingButton = new Button("assets/icon-shrink.png", () => {
            this.messagesContent.toggleSpacing();
            this.toggleSpacingButton.element.src = this.messagesContent
                .useSpacing
                ? "assets/icon-shrink.png"
                : "assets/icon-expand.png";
        });
        this.container.addExtra(this.toggleSpacingButton.element);

        // Setup toggle show gaps button
        this.toggleShowGapsButton = new Button("assets/icon-ruler.png", () => {
            this.showGaps = !this.showGaps;
            this.toggleShowGapsButton.element.src = this.showGaps
                ? "assets/icon-eye.png"
                : "assets/icon-ruler.png";
            this.messagesContent.setMessages(
                this.showGaps ? this.messageGapValues : this.messages,
                this.messagesGaps
            );
        });
        this.container.addExtra(this.toggleShowGapsButton.element);

        // Setup toggle include end button
        this.toggleIncludeEndButton = new Button(
            "assets/icon-paperclip-on.png",
            () => {
                this.includeEnd = !this.includeEnd;
                this.toggleIncludeEndButton.element.src = this.includeEnd
                    ? "assets/icon-dot.png"
                    : "assets/icon-paperclip-on.png";
                this.recalculateGaps();
            }
        );
        this.container.addExtra(this.toggleIncludeEndButton.element);

        // Setup text event listener
        inputEvent.subscribe((messages) => {
            this.messages = messages;
            this.recalculateGaps();
        });
    }

    recalculateGaps() {
        this.messagesGaps = calculateGaps(
            this.messages,
            this.gapLimit,
            this.includeEnd
        );

        this.messageGapValues = [];
        for (let msg = 0; msg < this.messagesGaps.length; msg++) {
            this.messageGapValues.push([]);
            for (let col = 0; col < this.messagesGaps[msg].length; col++) {
                this.messageGapValues[msg].push(
                    this.messagesGaps[msg][col].length == 0
                        ? 0
                        : this.messagesGaps[msg][col][0]
                );
            }
        }

        this.messagesContent.setMessages(
            this.showGaps ? this.messageGapValues : this.messages,
            this.messagesGaps
        );
    }
}

class VisFrequencyWidget {
    static HTML = `
        <div class='chart-container'>
            <canvas id="freq-chart"></canvas>
        </div>
    `;

    constructor(parent, inputEvent) {
        // Setup container and put input inside
        this.container = new WidgetContainer(parent, "Letter Frequencies");
        this.element = createElement(VisFrequencyWidget.HTML);
        this.elementChart = this.element.querySelector("#freq-chart");
        this.container.addContent(this.element);

        // Setup text event listener
        inputEvent.subscribe((messages) => {
            this.messages = messages;
            this.messagesFreq = calculateFrequencies(messages);
            this.updateChart();
        });
    }

    updateChart() {
        const ctx = this.elementChart.getContext("2d");
        const keys = Object.keys(this.messagesFreq);
        const values = keys.map((key) => this.messagesFreq[key]);
        const max = Math.max(...values);
        const colours = keys.map((key) => {
            const pct = this.messagesFreq[key] / max;
            return `hsl(214, 40%, ${80 - 60 * pct}%)`;
        });
        if (this.chart != null) this.chart.destroy();
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
    }
}

class VisDeltasWidget {
    constructor(parent, inputEvent) {
        this.mod = false;
        this.modSize = 0;

        // Setup container and put input inside
        this.container = new WidgetContainer(parent, "Deltas");
        this.messagesContent = new MessagesContent("Numeric");
        this.container.addContent(this.messagesContent.element);

        // Setup toggle gaps button
        this.toggleSpacingButton = new Button("assets/icon-shrink.png", () => {
            this.messagesContent.toggleSpacing();
            this.toggleSpacingButton.element.src = this.messagesContent
                .useSpacing
                ? "assets/icon-shrink.png"
                : "assets/icon-expand.png";
        });
        this.container.addExtra(this.toggleSpacingButton.element);

        // Setup toggle mod button
        this.toggleModButton = new Button("assets/icon-pct.png", () => {
            this.mod = !this.mod;
            this.toggleModButton.element.src = this.mod
                ? "assets/icon-dot.png"
                : "assets/icon-pct.png";
            this.recalculateDeltas();
        });
        this.container.addExtra(this.toggleModButton.element);

        // Setup text event listener
        inputEvent.subscribe((messages, alphabet) => {
            this.messages = messages;
            this.modSize = alphabet.length;
            this.recalculateDeltas();
        });
    }

    recalculateDeltas() {
        this.messagesDeltas = calculateDeltas(
            this.messages,
            this.mod ? this.modSize : null
        );

        // Calculate min and max delta
        let min = Infinity;
        let max = -Infinity;
        for (let msg = 0; msg < this.messagesDeltas.length; msg++) {
            const l = this.messagesDeltas[msg].length;
            for (let col = 0; col < l; col++) {
                min = Math.min(min, this.messagesDeltas[msg][col]);
                max = Math.max(max, this.messagesDeltas[msg][col]);
            }
        }

        // Calculate highlight values
        this.messagesDeltasHighlight = [];
        for (let msg = 0; msg < this.messagesDeltas.length; msg++) {
            this.messagesDeltasHighlight.push([]);
            const l = this.messagesDeltas[msg].length;
            for (let col = 0; col < l; col++) {
                const val = this.messagesDeltas[msg][col];

                if (val < 0) {
                    const pct = val / min;
                    this.messagesDeltasHighlight[msg].push(
                        `hsl(0, 40%, ${90 - 50 * pct}%)`
                    );
                } else {
                    const pct = val / max;
                    this.messagesDeltasHighlight[msg].push(
                        `hsl(214, 40%, ${90 - 50 * pct}%)`
                    );
                }
            }
        }

        this.messagesContent.setMessages(
            this.messagesDeltas,
            this.messagesDeltasHighlight
        );
    }
}

// ------------------------ Driver ------------------------

(() => {
    // Initialize user input
    const userInput = new InputWidget(ELEMENT_MAIN, "Input Ciphertext");

    // Create a baseline visualisation listening on the user input
    const visBaseline = new BaselineWidget(ELEMENT_MAIN, userInput.outputEvent);

    // Create a stats widget listening on the user input
    const statsWidget = new StatsWidget(ELEMENT_MAIN, visBaseline.outputEvent);

    // Create a shared section visualisation listening on the user input
    const visShared = new VisAlignmentWidget(
        ELEMENT_MAIN,
        visBaseline.outputEvent
    );

    // Create a gap distance visualisation listening on the user input
    const visGaps = new VisGapsWidget(ELEMENT_MAIN, visBaseline.outputEvent);

    // Create a frequency visualisation listening on the user input
    const visFreq = new VisFrequencyWidget(
        ELEMENT_MAIN,
        visBaseline.outputEvent
    );

    // Create a delta visualisation listening on the user input
    const visDeltas = new VisDeltasWidget(
        ELEMENT_MAIN,
        visBaseline.outputEvent
    );

    // Set initial value
    userInput.setContent(EXAMPLE_MESSAGES, ",");
})();
