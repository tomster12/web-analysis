const ELEMENT_MAIN = document.querySelector(".main");

const EXAMPLE_MESSAGES = [
    [
        53, 81, 6, 39, 17, 63, 53, 66, 45, 22, 45, 53, 38, 67, 16, 38, 19, 74,
        43, 61, 78, 51, 46, 64, 50, 30, 28, 41, 28, 44, 28, 79, 7, 41, 65, 27,
        44, 60, 41, 32, 27, 18, 71, 72, 13, 7, 62, 0, 56, 64, 60, 82, 40, 42,
        21, 75, 44, 21, 35, 28, 58, 25, 71, 18, 28, 36, 25, 34, 36, 70, 21, 35,
        30, 41, 17, 58, 28, 42, 58, 65, 17, 44, 58, 40, 17, 31, 72, 71, 6, 3,
        39, 6, 22, 63, 76, 17, 55, 6, 45, 10, 48, 68, 57, 49, 74, 56, 74, 43,
        60, 82, 44, 60, 54, 51, 74, 78, 4, 15, 44, 72, 34, 6, 39, 11, 39, 17,
        55, 2, 48, 67,
    ],
    [
        12, 81, 6, 39, 17, 63, 53, 66, 45, 22, 45, 53, 38, 67, 16, 38, 19, 74,
        43, 61, 78, 51, 46, 64, 50, 30, 28, 44, 15, 4, 30, 79, 7, 41, 65, 39,
        65, 27, 65, 32, 27, 18, 71, 72, 13, 7, 62, 0, 56, 64, 60, 82, 40, 42,
        21, 43, 59, 15, 61, 43, 56, 78, 30, 78, 59, 57, 74, 51, 5, 68, 9, 38,
        52, 9, 12, 26, 52, 9, 68, 19, 56, 14, 10, 33, 2, 11, 71, 34, 27, 26, 65,
        34, 36, 70, 60, 15, 62, 44, 72, 40, 36, 31, 34, 52, 67, 16, 19, 23, 38,
        69, 11, 39, 27, 18, 65, 36, 81, 11, 24, 67, 22, 26, 71, 65, 58,
    ],
    [
        52, 81, 6, 39, 17, 63, 53, 66, 45, 22, 45, 53, 38, 67, 16, 38, 19, 74,
        43, 61, 78, 51, 46, 64, 50, 30, 28, 44, 70, 36, 17, 32, 71, 39, 63, 55,
        17, 76, 41, 76, 73, 6, 11, 63, 17, 58, 25, 63, 6, 73, 24, 22, 3, 20, 68,
        19, 9, 2, 73, 67, 45, 22, 67, 55, 38, 16, 52, 81, 27, 11, 53, 24, 67,
        11, 71, 55, 20, 33, 14, 37, 51, 37, 64, 62, 40, 44, 72, 28, 46, 58, 54,
        30, 58, 41, 60, 0, 80, 42, 61, 15, 7, 79, 41, 72, 39, 76, 22, 12, 31, 6,
        22, 6, 66, 3, 63, 71, 13, 36, 81, 11, 69, 10, 67, 16, 45,
    ],
    [
        77, 81, 6, 20, 10, 19, 37, 10, 57, 0, 78, 49, 48, 2, 33, 10, 16, 29, 48,
        74, 19, 10, 57, 9, 2, 52, 11, 71, 32, 41, 13, 32, 25, 11, 34, 25, 36,
        75, 15, 60, 28, 40, 44, 36, 72, 17, 44, 15, 42, 54, 82, 41, 39, 31, 26,
        81, 77, 63, 2, 45, 68, 48, 23, 1, 49, 33, 2, 22, 38, 68, 49, 57, 35, 43,
        74, 80, 8, 1, 57, 74, 48, 9, 12, 2, 77, 3, 63, 24, 25, 11, 24, 67, 52,
        3, 22, 24, 73, 76, 25, 44, 76, 63, 73, 39, 31, 32, 25, 58, 18, 21, 18,
        27, 71, 72, 32, 71, 11,
    ],
    [
        6, 81, 6, 20, 10, 19, 37, 10, 57, 0, 37, 10, 20, 12, 20, 12, 22, 6, 34,
        76, 41, 75, 30, 70, 15, 40, 15, 62, 35, 28, 58, 46, 7, 50, 60, 21, 44,
        27, 44, 75, 65, 79, 75, 40, 21, 54, 75, 46, 79, 17, 36, 79, 75, 79, 44,
        79, 76, 34, 27, 70, 65, 36, 71, 22, 2, 11, 32, 36, 27, 34, 77, 6, 45,
        48, 68, 67, 16, 1, 9, 8, 59, 61, 42, 56, 37, 29, 0, 78, 21, 70, 40, 17,
        70, 41, 30, 82, 0, 64, 56, 51, 0, 15, 44, 72, 79, 82, 43, 30, 75, 64, 4,
        54, 51, 4, 23, 1, 23, 56, 64, 21, 15, 60, 0,
    ],
    [
        22, 81, 6, 20, 10, 19, 37, 10, 57, 0, 37, 5, 10, 29, 45, 6, 34, 22, 3,
        53, 81, 76, 41, 27, 7, 82, 46, 43, 51, 15, 28, 79, 60, 62, 44, 60, 41,
        7, 21, 28, 44, 70, 30, 70, 25, 32, 58, 28, 36, 34, 55, 53, 67, 24, 11,
        81, 52, 34, 76, 55, 67, 1, 20, 77, 24, 71, 65, 27, 41, 13, 27, 17, 58,
        32, 25, 26, 65, 70, 30, 78, 35, 74, 23, 74, 43, 0, 51, 74, 47, 8, 1, 68,
        67, 3, 20, 73, 34, 73, 38, 33, 68, 56, 78, 56, 57, 4, 23, 14, 20, 14,
        56, 0, 80, 29, 47, 80, 51, 23, 10, 16,
    ],
    [
        3, 81, 6, 20, 10, 19, 37, 10, 57, 0, 37, 10, 20, 38, 22, 45, 9, 69, 14,
        20, 38, 69, 63, 27, 34, 63, 31, 17, 27, 17, 55, 81, 39, 71, 39, 13, 79,
        32, 13, 25, 18, 72, 40, 36, 31, 72, 75, 15, 35, 64, 56, 23, 10, 45, 12,
        38, 68, 23, 49, 61, 19, 10, 69, 10, 14, 67, 12, 53, 77, 2, 38, 1, 9, 37,
        33, 48, 37, 8, 48, 49, 51, 35, 5, 56, 33, 16, 23, 48, 5, 23, 10, 57, 1,
        49, 19, 16, 14, 48, 49, 33, 9, 45, 3, 63, 53, 45,
    ],
    [
        73, 81, 6, 20, 10, 19, 37, 10, 57, 0, 37, 10, 20, 38, 22, 45, 9, 69, 14,
        20, 38, 69, 63, 6, 67, 9, 47, 0, 64, 35, 4, 5, 19, 61, 23, 10, 29, 14,
        19, 38, 19, 23, 47, 1, 12, 53, 24, 17, 41, 27, 65, 70, 30, 40, 50, 51,
        80, 64, 51, 64, 4, 5, 51, 23, 4, 62, 60, 4, 15, 61, 5, 14, 66, 2, 19,
        38, 45, 73, 63, 12, 45, 1, 9, 2, 6, 3, 2, 69, 3, 22, 24, 73, 76, 17, 79,
        32, 34, 55, 17, 81, 17, 13, 41, 34, 63, 25, 26, 65, 70, 30, 44, 62, 59,
        23, 61,
    ],
    [
        55, 81, 6, 20, 10, 19, 37, 10, 57, 0, 37, 10, 20, 38, 22, 45, 9, 69, 14,
        20, 38, 69, 63, 24, 6, 67, 33, 2, 12, 55, 73, 12, 2, 11, 81, 25, 70, 76,
        24, 34, 39, 73, 2, 48, 2, 52, 16, 22, 11, 32, 63, 71, 76, 26, 27, 58,
        25, 63, 6, 45, 52, 67, 69, 14, 23, 61, 49, 64, 60, 82, 60, 7, 82, 28,
        35, 51, 47, 57, 80, 14, 37, 14, 19, 33, 8, 47, 1, 12, 1, 2, 53, 22, 16,
        33, 66, 38, 45, 10, 53, 24, 67, 33, 69, 9, 68, 16, 57, 33, 56, 61,
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

// Shared: int[][]
function calculateShared(messages) {
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
function calculateGaps(messages, gapLimit) {
    let gaps = [];

    // For each message
    for (let msg = 0; msg < messages.length; msg++) {
        gaps.push([]);
        found = {};

        // For each column in the message
        for (let col = 0; col < messages[msg].length; col++) {
            val = messages[msg][col];

            // 0 by default, on gap set start
            if (found[val] == null) {
                found[val] = col;
                gaps[msg].push(0);
            } else {
                const diff = col - found[val];
                if (diff <= gapLimit) gaps[msg][found[val]] = diff;
                found[val] = col;
                gaps[msg].push(0);
            }
        }
    }

    return gaps;
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

// ------------------------ Widgets ------------------------

class WidgetContainer {
    static HTML = `
        <div class="widget-container">
            <div class="widget-header">
                <div class="widget-title"></div>
                <div class="widget-buttons"></div>
            </div>
            <div class="widget-content"></div>
        </div>
    `;

    constructor(parent, title = "") {
        // Setup container
        this.element = createElement(WidgetContainer.HTML);
        this.elementTitle = this.element.querySelector(".widget-title");
        this.elementButtons = this.element.querySelector(".widget-buttons");
        this.elementContent = this.element.querySelector(".widget-content");
        if (parent != null) parent.appendChild(this.element);

        // Set title
        this.setTitle(title);
    }

    addButton(callback, iconPath) {
        const button = createElement(`<img src="${iconPath}">`);
        button.addEventListener("click", callback);
        this.elementButtons.appendChild(button);
        return button;
    }

    setTitle(title) {
        this.elementTitle.textContent = title;
    }

    addContent(content) {
        this.elementContent.appendChild(content);
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
        this.toggleButton = this.container.addButton(
            () => this.toggleDelim(),
            "assets/icon-a1.png"
        );

        // Setup onInput event and listeners
        this.outputEvent = new ListenableEvent();
        this.elementInput.addEventListener("input", (evt) => {
            this.messages = parseMessages(evt.target.innerText, this.delim);
            this.outputEvent.fire(this.messages);
        });
    }

    setContent(input, delim) {
        // Set delim and button icon
        this.delim = delim;
        this.toggleButton.src =
            this.delim == "," ? "assets/icon-comma.png" : "assets/icon-a1.png";

        // Update text content
        this.elementInput.innerHTML = "";
        input.forEach((line) => {
            this.elementInput.innerHTML += `<div>${line}</div> `;
        });

        // Manually trigger input event
        this.messages = parseMessages(this.elementInput.innerText, this.delim);
        this.outputEvent.fire(this.messages);
    }

    toggleDelim() {
        // Toggle delim and button icon
        this.delim = this.delim == "," ? "" : ",";
        this.toggleButton.src =
            this.delim == "," ? "assets/icon-comma.png" : "assets/icon-a1.png";

        // Manually trigger input event
        this.messages = parseMessages(this.elementInput.innerText, this.delim);
        this.outputEvent.fire(this.messages);
    }
}

class MessagesContent {
    static HTML = `
        <div class="messages use-gaps"></div>
    `;

    constructor() {
        this.hasGaps = true;
        this.element = createElement(MessagesContent.HTML);
    }

    setMessages(messages, highlight = null) {
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
        for (let msg = 0; msg < this.messages.length; msg++) {
            for (let col = 0; col < this.messages[msg].length; col++) {
                if (highlight[msg][col] > 0) {
                    this.cells[msg][col].style.backgroundColor =
                        HIGHLIGHT_COLOURS[
                            highlight[msg][col] % HIGHLIGHT_COLOUR_COUNT
                        ];
                }
                this.cells[msg][col].title = highlight[msg][col];
            }
        }
    }

    toggleGaps() {
        this.element.classList.toggle("use-gaps");
        this.hasGaps = !this.hasGaps;
    }
}

class VisSharedWidget {
    constructor(parent, textEvent) {
        // Setup container and put input inside
        this.container = new WidgetContainer(parent, "Shared Sections");
        this.messagesContent = new MessagesContent();
        this.container.addContent(this.messagesContent.element);

        // Setup toggle gaps button
        this.toggleGapsButton = this.container.addButton(() => {
            this.messagesContent.toggleGaps();
            this.toggleGapsButton.src = this.messagesContent.hasGaps
                ? "assets/icon-shrink.png"
                : "assets/icon-expand.png";
        }, "assets/icon-shrink.png");

        // Setup text event listener
        textEvent.subscribe((messages) => {
            this.messages = messages;
            this.messagesShared = calculateShared(messages);
            this.messagesContent.setMessages(
                this.messages,
                this.messagesShared
            );
        });
    }
}

class VisGapsWidget {
    constructor(parent, textEvent, gapLimit = 15) {
        this.showGaps = false;

        // Setup container and put input inside
        this.container = new WidgetContainer(parent, "Gap Distances");
        this.messagesContent = new MessagesContent();
        this.container.addContent(this.messagesContent.element);
        this.gapLimit = gapLimit;

        // Setup toggle gaps button
        this.toggleGapsButton = this.container.addButton(() => {
            this.messagesContent.toggleGaps();
            this.toggleGapsButton.src = this.messagesContent.hasGaps
                ? "assets/icon-shrink.png"
                : "assets/icon-expand.png";
        }, "assets/icon-shrink.png");

        // Setup toggle show gaps button
        this.toggleShowGapsButton = this.container.addButton(() => {
            this.showGaps = !this.showGaps;
            this.toggleShowGapsButton.src = this.showGaps
                ? "assets/icon-eye.png"
                : "assets/icon-ruler.png";

            // Update message content
            if (this.showGaps) {
                this.messagesContent.setMessages(
                    this.messagesGaps,
                    this.messagesGaps
                );
            } else {
                this.messagesContent.setMessages(
                    this.messages,
                    this.messagesGaps
                );
            }
        }, "assets/icon-ruler.png");

        // Setup text event listener
        textEvent.subscribe((messages) => {
            this.messages = messages;
            this.messagesGaps = calculateGaps(messages, this.gapLimit);

            // Update message content
            if (this.showGaps) {
                this.messagesContent.setMessages(
                    this.messagesGaps,
                    this.messagesGaps
                );
            } else {
                this.messagesContent.setMessages(
                    this.messages,
                    this.messagesGaps
                );
            }
        });
    }
}

// ------------------------ Driver ------------------------

(() => {
    // Initialize user input
    const userInput = new InputWidget(ELEMENT_MAIN, "Input Ciphertext");

    // Create a shared section visualisation listening on the user input
    const visShared = new VisSharedWidget(ELEMENT_MAIN, userInput.outputEvent);

    // Create a gap distance visualisation listening on the user input
    const visGaps = new VisGapsWidget(ELEMENT_MAIN, userInput.outputEvent);

    // Set initial value
    // userInput.setContent([
    //     "hellowsrln",
    //     "hellongain",
    //     "heldasgdsd",
    //     "sdsdodssdd",
    // ], "");
    userInput.setContent(EXAMPLE_MESSAGES, ",");
})();
