// ------------------------ Types ------------------------

type StringMessage = string[];
type NumberMessage = number[];
type Message = StringMessage | NumberMessage;
type DelimType = "comma" | "dot" | "letter" | "space";
type ConvertOption = "None" | "Int" | "Unique" | "ToAscii" | "FromAscii";
type HighlightMode = "Categoric" | "Colour";
type HighlightData = number[][] | number[][][] | string[][] | null;

// ------------------------ Constants ------------------------

const ELEMENT_MAIN = document.querySelector(".main") as HTMLElement;

const EXAMPLE_MESSAGES = [
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

let HIGHLIGHTS: string[] = [];
const HIGHLIGHT_COUNT = 15;
const HIGHLIGHT_COLOUR_SPIRALS = 4;
const HIGHLIGHT_COLOUR_GAP = 360 / HIGHLIGHT_COLOUR_SPIRALS;

for (let i = 0; i < HIGHLIGHT_COUNT; i++) {
    let base = (i % HIGHLIGHT_COLOUR_SPIRALS) * HIGHLIGHT_COLOUR_GAP;
    let hue = (base + (i / HIGHLIGHT_COUNT) * HIGHLIGHT_COLOUR_GAP) % 360;
    HIGHLIGHTS.push(`hsl(${hue}, 75%, 75%)`);
}

// ------------------------ Crypto ------------------------

function parseMessages(text: string, delimType: DelimType): StringMessage[] {
    if (text == "") return [];
    let lines = text.split("\n");
    lines = lines.filter((line) => line != "");
    let delim = delimType == "comma" ? "," : delimType == "dot" ? "." : delimType == "letter" ? "" : " ";
    return lines.map((line) => line.split(delim));
}

function convertMessages(messages: StringMessage[], convertOption: ConvertOption): Message[] {
    // Potentially unused variables
    var uniqueID = 0;
    var uniqueMap: { [key: string]: number } = {};

    // Convert messages based on convertOption
    let output: Message[] = [];
    for (let msg = 0; msg < messages.length; msg++) {
        if (convertOption == "Int") {
            output.push(messages[msg].map((val) => parseInt(val)));
        } else if (convertOption == "Unique") {
            output.push(
                messages[msg].map((val) => {
                    if (uniqueMap[val] == null) uniqueMap[val] = uniqueID++;
                    return uniqueMap[val];
                })
            );
        } else if (convertOption == "ToAscii") {
            output.push(messages[msg].map((val) => String.fromCharCode(parseInt(val) + 32)));
        } else if (convertOption == "FromAscii") {
            output.push(messages[msg].map((val) => (val.charCodeAt(0) - 32).toString()));
        } else {
            output.push(messages[msg]);
        }
    }
    return output;
}

function parseAlphabet(messages: Message[]): string[] {
    // Get all unique characters
    let messagesStr: StringMessage[] = messages as StringMessage[];
    let alphSet: Set<string> = new Set();
    for (let msg = 0; msg < messagesStr.length; msg++) {
        for (let col = 0; col < messagesStr[msg].length; col++) {
            alphSet.add(messagesStr[msg][col]);
        }
    }

    // Either sort numbers or characters
    let isNum = messages.some((msg) => msg.some((val) => !isNaN(parseInt(val))));
    if (isNum) {
        return Array.from(alphSet).sort((a, b) => parseInt(a) - parseInt(b));
    } else {
        return Array.from(alphSet).sort();
    }
}

function calculateAlignments(messages: Message[]): NumberMessage[] {
    const maxLength = Math.max(...messages.map((line) => line.length));
    let shared: NumberMessage[] = [];
    for (let i = 0; i < messages.length; i++) shared.push([]);

    // For each column in the messages
    for (let col = 0; col < maxLength; col++) {
        let found = {};
        let assignedIDs = {};
        let nextID = 1;

        // For each message that has this column
        for (let msg = 0; msg < messages.length; msg++) {
            if (col >= messages[msg].length) continue;
            let val = messages[msg][col];

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

function calculateGaps(messages: Message[], gapLimit: number, includeEnd: boolean): number[][][] {
    let gaps: number[][][] = [];
    for (let msg = 0; msg < messages.length; msg++) {
        gaps.push([]);
        let found = {};
        for (let col = 0; col < messages[msg].length; col++) {
            let val = messages[msg][col];
            gaps[msg].push([]);

            // 0 by default, on gap set start
            if (found[val] != null) {
                const diff = col - found[val];
                if (diff <= gapLimit) {
                    gaps[msg][found[val]].push(diff);
                    if (includeEnd) gaps[msg][col].push(-diff);
                }
            }

            found[val] = col;
        }
    }

    return gaps;
}

function calculateFrequencies(messages: Message[]): { [key: string]: number } {
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

function calculateDeltas(messages: NumberMessage[], modSize: number | null): NumberMessage[] {
    let deltas: NumberMessage[] = [];
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

function calculateIoC(messages: Message[], alphabetSize: number): number {
    let freqs = calculateFrequencies(messages);
    let total = 0;
    let N = 0;
    for (let char in freqs) {
        const n = freqs[char];
        total += n * (n - 1);
        N += n;
    }
    return total / ((N * (N - 1)) / alphabetSize);
}

// ------------------------ Utility ------------------------

function createElement(html: string): HTMLElement {
    const element = document.createElement("div");
    element.innerHTML = html.trim();
    return element.firstChild as HTMLElement;
}

class ListenableEvent {
    listeners: Function[];

    constructor() {
        this.listeners = [];
    }

    subscribe(listener: Function) {
        this.listeners.push(listener);
    }

    fire(...args: any[]) {
        this.listeners.forEach((listener) => listener(...args));
    }
}

interface ElementProxy {
    element: HTMLElement;
}

class MessagesView implements ElementProxy {
    static HTML = `<div class="messages"></div>`;

    element: HTMLElement;
    messages: Message[];
    highlight: HighlightData;
    highlightMode: HighlightMode;
    useSpacing: boolean;
    cells: HTMLElement[][];

    constructor(highlightMode: HighlightMode = "Categoric") {
        this.element = createElement(MessagesView.HTML);
        this.messages = [];
        this.highlightMode = highlightMode;
        this.useSpacing = false;
    }

    setMessages(messages: Message[], highlight: HighlightData = null) {
        this.messages = messages;
        this.element.innerHTML = "";
        this.cells = [];

        // Find fixed width based on maximum character count
        let maxWidth = 0;
        for (let msg = 0; msg < messages.length; msg++) {
            for (let col = 0; col < messages[msg].length; col++) {
                maxWidth = Math.max(maxWidth, messages[msg][col].toString().length);
            }
        }

        // Set max width of spans with base element variable
        this.element.style.setProperty("--max-width", `${maxWidth * 1.4 * 0.85}rem`);

        // Create index row
        const row = createElement(`<div class="indices"></div>`);
        let maxLength = Math.max(...messages.map((line) => line.length));
        for (let col = 0; col < maxLength; col++) {
            const cell = createElement(`<span>${col}</span>`);
            row.appendChild(cell);
        }
        this.element.appendChild(row);

        // Create div for each row, span for each cell
        for (let msg = 0; msg < messages.length; msg++) {
            const row = createElement(`<div class="message"></div>`);
            this.cells.push([]);
            for (let col = 0; col < messages[msg].length; col++) {
                const cell = createElement(`<span>${messages[msg][col]}</span>`);
                cell.addEventListener("mouseenter", () => this.hoverLetter(messages[msg][col]));
                cell.addEventListener("mouseleave", () => this.unhoverLetter(messages[msg][col]));
                row.appendChild(cell);
                this.cells[msg].push(cell);
            }
            this.element.appendChild(row);
        }

        // Highlight letters
        this.setHighlight(highlight);
    }

    setHighlight(highlight: HighlightData) {
        this.highlight = highlight;
        if (highlight == null) return;

        // Highlight every span based on highlight data and mode
        for (let msg = 0; msg < this.messages.length; msg++) {
            for (let col = 0; col < this.messages[msg].length; col++) {
                // Categoric: Pick from global colour array
                if (this.highlightMode == "Categoric") {
                    let letterHighlight = highlight[msg][col];

                    if (!Array.isArray(letterHighlight)) {
                        // Categoric: Single value colour
                        letterHighlight = letterHighlight as number;
                        this.cells[msg][col].title = letterHighlight.toString();
                        if (letterHighlight > 0) {
                            const colA = HIGHLIGHTS[Math.abs(letterHighlight - 1) % HIGHLIGHT_COUNT];
                            this.cells[msg][col].style.backgroundColor = colA;
                        }
                    } else {
                        // Categoric: Gradient between two colours
                        letterHighlight = letterHighlight as number[];
                        if (letterHighlight.length == 1) {
                            const colA = HIGHLIGHTS[Math.abs(letterHighlight[0]) % HIGHLIGHT_COUNT];
                            this.cells[msg][col].style.backgroundColor = colA;
                        } else if (letterHighlight.length == 2) {
                            const colA = HIGHLIGHTS[Math.abs(letterHighlight[0]) % HIGHLIGHT_COUNT];
                            const colB = HIGHLIGHTS[Math.abs(letterHighlight[1]) % HIGHLIGHT_COUNT];
                            const style = `linear-gradient(to right, ${colA}, ${colB})`;
                            this.cells[msg][col].style.backgroundImage = style;
                        }
                    }
                } else {
                    // Numeric: Set highlight as colour
                    let letterHighlight = highlight[msg][col] as string;
                    this.cells[msg][col].style.backgroundColor = letterHighlight;
                }
            }
        }
    }

    hoverLetter(val: string | number) {
        // Highlight all cells with the same value
        this.element.classList.add("cell-hovered");
        for (let msg = 0; msg < this.messages.length; msg++) {
            for (let col = 0; col < this.messages[msg].length; col++) {
                if (this.messages[msg][col] == val) {
                    this.cells[msg][col].classList.add("hovered");
                }
            }
        }
    }

    unhoverLetter(val: string | number) {
        // Remove highlight from all cells with the same value
        this.element.classList.remove("cell-hovered");
        for (let msg = 0; msg < this.messages.length; msg++) {
            for (let col = 0; col < this.messages[msg].length; col++) {
                if (this.messages[msg][col] == val) {
                    this.cells[msg][col].classList.remove("hovered");
                }
            }
        }
    }

    toggleSpacing() {
        // Toggle spacing and update class
        this.element.classList.toggle("use-gaps");
        this.useSpacing = !this.useSpacing;
    }
}

class ToggleButton implements ElementProxy {
    static HTML = `<img class="widget-button">`;

    element: HTMLImageElement;
    clickEvent: ListenableEvent;
    toggled: boolean;

    constructor(initial: boolean, offIconPath: string, onIconPath, callback: Function) {
        this.element = createElement(ToggleButton.HTML) as HTMLImageElement;
        this.element.src = initial ? onIconPath : offIconPath;

        // Setup event and listener
        this.clickEvent = new ListenableEvent();
        this.toggled = initial;
        this.element.addEventListener("click", (e) => {
            e.stopPropagation();
            this.toggled = !this.toggled;
            this.element.classList.toggle("toggled");
            this.element.src = this.toggled ? onIconPath : offIconPath;
            this.clickEvent.fire(e, this.toggled);
        });

        // Subscribe callback if provided
        if (callback != null) this.clickEvent.subscribe(callback);
    }

    setIcon(iconPath: string) {
        this.element.src = iconPath;
    }
}

class Dropdown implements ElementProxy {
    static HTML = `
    <div class="dropdown">
        <img class="dropdown-icon-current"><img class="dropdown-icon-select" src="assets/icon-dropdown.png">
        <div class="dropdown-options"></div>
    </div>`;

    element: HTMLElement;
    elementIconCurrent: HTMLImageElement;
    elementIconSelect: HTMLImageElement;
    elementOptions: HTMLElement;
    options: { [key: string]: string };
    selectEvent: ListenableEvent;
    selected: string;

    constructor(options: { [key: string]: string }, initial: string, callback: Function) {
        // Setup elements
        this.element = createElement(Dropdown.HTML);
        this.elementIconCurrent = this.element.querySelector(".dropdown-icon-current") as HTMLImageElement;
        this.elementIconSelect = this.element.querySelector(".dropdown-icon-select") as HTMLImageElement;
        this.elementOptions = this.element.querySelector(".dropdown-options") as HTMLElement;
        this.elementOptions.style.display = "none";

        this.options = options;
        for (let option in this.options) {
            // Create option element
            let optionElement = createElement(`<div>`);
            let imgElement = createElement(`<img>`) as HTMLImageElement;
            imgElement.src = this.options[option];
            optionElement.appendChild(imgElement);
            this.elementOptions.appendChild(optionElement);

            // Add event listener
            optionElement.addEventListener("click", (e) => {
                e.stopPropagation();
                this.selectOption(option);
                this.elementOptions.style.display = "none";
            });
        }

        // Toggle dropdown visibility on click
        this.element.addEventListener("click", (e) => {
            e.stopPropagation();
            this.elementOptions.style.display = this.elementOptions.style.display == "none" ? "flex" : "none";
        });

        // Setup select event and select initial
        this.selectEvent = new ListenableEvent();
        if (callback != null) this.selectEvent.subscribe(callback);
        this.selectOption(initial);
    }

    selectOption(option: string) {
        // Set selected option and update icon
        this.selected = option;
        this.elementIconCurrent.src = this.options[option];
        this.selectEvent.fire(option);
    }
}

// ------------------------ Widgets ------------------------

interface Widget {}

class WidgetContainer implements ElementProxy {
    static HTML = `
    <div class="widget-container">
        <div class="widget-header">
            <div class="widget-title"></div>
            <div class="widget-extra"></div>
        </div>
        <div class="widget-content"></div>
    </div>`;

    element: HTMLElement;
    elementHeader: HTMLElement;
    elementTitle: HTMLElement;
    elementExtra: HTMLElement;
    elementContent: HTMLElement;
    isClosed: boolean;

    constructor(parent: HTMLElement | null = null, title: string = "") {
        // Setup container
        this.element = createElement(WidgetContainer.HTML);
        this.elementHeader = this.element.querySelector(".widget-header") as HTMLElement;
        this.elementTitle = this.element.querySelector(".widget-title") as HTMLElement;
        this.elementExtra = this.element.querySelector(".widget-extra") as HTMLElement;
        this.elementContent = this.element.querySelector(".widget-content") as HTMLElement;
        if (parent != null) parent.appendChild(this.element);

        // Add title close listener
        this.isClosed = false;
        this.elementHeader.addEventListener("click", () => this.toggleClosed());

        // Set title
        this.setTitle(title);
    }

    setTitle(title: string) {
        this.elementTitle.textContent = title;
    }

    addHeaderExtra(extra: HTMLElement) {
        this.elementExtra.appendChild(extra);
    }

    addContent(content: HTMLElement) {
        this.elementContent.appendChild(content);
    }

    toggleClosed() {
        this.isClosed = !this.isClosed;
        this.element.classList.toggle("closed");
        this.elementContent.style.display = this.isClosed ? "none" : "block";
    }
}

class InputWidget implements Widget {
    static HTML = `
    <div class="input-container">
        <div class="input-field-container">
            <img class="input-field-icon" src="assets/icon-input.png">
            <div class="input-field" contentEditable="true"></div>
        </div>

        <div class="input-options-container">
            <p>Delimeter</p>
            <div class="input-options-delimeter"></div>
            <p>Convert Mode</p>
            <div class="input-options-convert"></div>
        </div>

        <div class="input-parsed"></div>

        <div class="input-alphabet-container">
            <img src="assets/icon-alphabet.png">
            <div class="input-alphabet use-gaps"></div>
        </div>
    </div>`;

    container: WidgetContainer;
    messageView: MessagesView;
    element: HTMLElement;
    elementInput: HTMLElement;
    elementOptionsDelimeter: HTMLElement;
    elementOptionsConvert: HTMLElement;
    elementParsed: HTMLElement;
    elementAlphabet: HTMLElement;
    delimeterDropdown: Dropdown;
    convertDropdown: Dropdown;
    toggleSpacingButton: ToggleButton;
    delimType: DelimType;
    convertOption: ConvertOption;
    rawMessages: string | null;
    outputMessages: Message[];
    alphabet: string[];
    outputEvent: ListenableEvent;

    constructor(parent: HTMLElement) {
        // Setup main elements
        this.container = new WidgetContainer(parent, "Input Ciphertext");
        this.messageView = new MessagesView();
        this.element = createElement(InputWidget.HTML);
        this.elementInput = this.element.querySelector(".input-field") as HTMLElement;
        this.elementOptionsDelimeter = this.element.querySelector(".input-options-delimeter") as HTMLElement;
        this.elementOptionsConvert = this.element.querySelector(".input-options-convert") as HTMLElement;
        this.elementParsed = this.element.querySelector(".input-parsed") as HTMLElement;
        this.elementAlphabet = this.element.querySelector(".input-alphabet") as HTMLElement;
        this.elementParsed.appendChild(this.messageView.element);

        // Setup dropdown proxies
        this.delimType = "comma";
        this.delimeterDropdown = new Dropdown(
            {
                comma: "assets/icon-comma.png",
                dot: "assets/icon-dot.png",
                letter: "assets/icon-a.png",
                space: "assets/icon-space.png",
            },
            "comma",
            (delimType) => {
                this.delimType = delimType;
                this.processMessages();
            }
        );
        this.convertOption = "None";
        this.convertDropdown = new Dropdown(
            {
                None: "assets/icon-identity.png",
                Int: "assets/icon-123.png",
                Unique: "assets/icon-abacus.png",
                ToAscii: "assets/icon-to-ascii.png",
                FromAscii: "assets/icon-from-ascii.png",
            },
            "None",
            (convertOption) => {
                this.convertOption = convertOption;
                this.processMessages();
            }
        );

        // Setup toggle spacing button
        this.toggleSpacingButton = new ToggleButton(true, "assets/icon-expand.png", "assets/icon-shrink.png", () => {
            this.messageView.toggleSpacing();
            this.elementAlphabet.classList.toggle("use-gaps");
        });

        // Add elements to container
        this.elementOptionsDelimeter.appendChild(this.delimeterDropdown.element);
        this.elementOptionsConvert.appendChild(this.convertDropdown.element);
        this.container.addHeaderExtra(this.toggleSpacingButton.element);
        this.container.addContent(this.element);

        // Setup input and output events
        this.outputEvent = new ListenableEvent();
        this.elementInput.addEventListener("input", (e) => {
            this.rawMessages = this.elementInput.innerText;
            this.processMessages();
        });
    }

    processMessages() {
        if (this.rawMessages == null) return;

        // Parse, convert, get alphabet
        let parsedMessages = parseMessages(this.rawMessages, this.delimType);
        this.outputMessages = convertMessages(parsedMessages, this.convertOption);
        this.alphabet = parseAlphabet(this.outputMessages);

        // Set alphabet elements
        let maxWidth = 0;
        this.elementAlphabet.innerHTML = "";
        this.alphabet.forEach((l) => {
            this.elementAlphabet.appendChild(createElement(`<span>${l}</span>`));
            maxWidth = Math.max(maxWidth, l.length);
        });
        this.elementAlphabet.style.setProperty("--max-width", `${maxWidth * 1.4 * 0.85}rem`);

        // Set parsed messages and fire event
        this.messageView.setMessages(this.outputMessages);
        this.outputEvent.fire(this.outputMessages, this.alphabet);
    }

    setContent(input: number[][]) {
        // By default set input as comma separated integers
        this.elementInput.innerHTML = "";
        input.forEach((line) => {
            this.elementInput.innerHTML += `<div>${line.join(",")}</div> `;
        });
        this.rawMessages = this.elementInput.innerText;
        this.processMessages();
    }
}

class StatsWidget implements Widget {
    static HTML = `
        <div class="stats-container">
        </div>
    `;

    container: WidgetContainer;
    element: HTMLElement;
    messages: Message[];
    alphabet: string[];
    calculatedStats: { [key: string]: number };

    constructor(parent: HTMLElement, inputEvent: ListenableEvent) {
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
        // Calculate stats
        this.calculatedStats = {};
        this.calculatedStats["Alphabet Size"] = this.alphabet.length;
        let chars = 0;
        for (let msg = 0; msg < this.messages.length; msg++) chars += this.messages[msg].length;
        this.calculatedStats["Message Count"] = this.messages.length;
        this.calculatedStats["Total Chars"] = chars;

        // Calculate IoC for all + each message
        this.calculatedStats["Total IoC"] = calculateIoC(this.messages, this.alphabet.length);
        for (let msg = 0; msg < this.messages.length; msg++) {
            this.calculatedStats[`Msg ${msg}: Chars`] = this.messages[msg].length;
        }
        for (let msg = 0; msg < this.messages.length; msg++) {
            this.calculatedStats[`Msg ${msg}: IoC`] = calculateIoC([this.messages[msg]], this.alphabet.length);
        }

        // Turn stats into elements
        this.element.innerHTML = "";
        for (let stat in this.calculatedStats) {
            let val = this.calculatedStats[stat];
            val = Math.round(val * 10000) / 10000;
            const pair = createElement(`<div class="stats-pair"></div>`);
            const label = createElement(`<div class="stats-label">${stat}</div>`);
            const value = createElement(`<div class="stats-value">${val}</div>`);
            pair.appendChild(label);
            pair.appendChild(value);
            this.element.appendChild(pair);
        }
    }
}

class AlignmentWidget implements Widget {
    container: WidgetContainer;
    messageView: MessagesView;
    toggleSpacingButton: ToggleButton;
    messages: Message[];
    messagesAlignments: NumberMessage[];

    constructor(parent: HTMLElement, inputEvent: ListenableEvent) {
        // Setup container and put input inside
        this.container = new WidgetContainer(parent, "Alignments");
        this.messageView = new MessagesView();
        this.container.addContent(this.messageView.element);

        // Setup toggle gaps button
        this.toggleSpacingButton = new ToggleButton(true, "assets/icon-expand.png", "assets/icon-shrink.png", () => {
            this.messageView.toggleSpacing();
        });
        this.container.addHeaderExtra(this.toggleSpacingButton.element);

        // Setup text event listener
        inputEvent.subscribe((messages) => {
            this.messages = messages;
            this.messagesAlignments = calculateAlignments(messages);
            this.messageView.setMessages(this.messages, this.messagesAlignments);
        });
    }
}

class GapsWidget implements Widget {
    container: WidgetContainer;
    messageView: MessagesView;
    toggleSpacingButton: ToggleButton;
    toggleShowGapsButton: ToggleButton;
    toggleIncludeEndButton: ToggleButton;
    gapLimit: number;
    includeEnd: boolean;
    showGaps: boolean;
    messages: Message[];
    messagesGaps: number[][][];
    messagesGapsValues: NumberMessage[];

    constructor(parent: HTMLElement, inputEvent: ListenableEvent, gapLimit: number = 15) {
        // Setup container and put input inside
        this.container = new WidgetContainer(parent, "Gap Distances (< " + gapLimit + ")");
        this.messageView = new MessagesView();
        this.container.addContent(this.messageView.element);
        this.gapLimit = gapLimit;
        this.showGaps = false;
        this.includeEnd = false;

        // Setup toggle spacing button
        this.toggleSpacingButton = new ToggleButton(true, "assets/icon-expand.png", "assets/icon-shrink.png", () => {
            this.messageView.toggleSpacing();
        });

        // Setup toggle show gaps button
        this.toggleShowGapsButton = new ToggleButton(false, "assets/icon-ruler.png", "assets/icon-eye.png", () => {
            this.showGaps = !this.showGaps;
            this.messageView.setMessages(this.showGaps ? this.messagesGapsValues : this.messages, this.messagesGaps);
        });

        // Setup toggle include end button
        this.toggleIncludeEndButton = new ToggleButton(false, "assets/icon-paperclip-on.png", "assets/icon-dot.png", () => {
            this.includeEnd = !this.includeEnd;
            this.recalculateGaps();
        });

        // Add elements to container after setup
        this.container.addHeaderExtra(this.toggleSpacingButton.element);
        this.container.addHeaderExtra(this.toggleShowGapsButton.element);
        this.container.addHeaderExtra(this.toggleIncludeEndButton.element);

        // Setup text event listener
        inputEvent.subscribe((messages) => {
            this.messages = messages;
            this.recalculateGaps();
        });
    }

    recalculateGaps() {
        this.messagesGaps = calculateGaps(this.messages, this.gapLimit, this.includeEnd);

        // Calculate gap messages for display
        this.messagesGapsValues = [];
        for (let msg = 0; msg < this.messagesGaps.length; msg++) {
            this.messagesGapsValues.push([]);
            for (let col = 0; col < this.messagesGaps[msg].length; col++) {
                this.messagesGapsValues[msg].push(
                    this.messagesGaps[msg][col].length == 0 ? 0 : Math.abs(this.messagesGaps[msg][col][this.messagesGaps[msg][col].length - 1])
                );
            }
        }

        // Set messages based on show gaps
        this.messageView.setMessages(this.showGaps ? this.messagesGapsValues : this.messages, this.messagesGaps);
    }
}

class FrequencyWidget implements Widget {
    static HTML = `
    <div class='chart-container'>
        <canvas id="freq-chart"></canvas>
    </div>`;

    container: WidgetContainer;
    element: HTMLElement;
    elementChart: HTMLCanvasElement;
    sorted: boolean;
    messages: Message[];
    messagesFreq: { [key: string]: number };
    chart: Chart;

    constructor(parent: HTMLElement, inputEvent: ListenableEvent, sorted: boolean = false, title = "Letter Frequencies") {
        // Setup container and put input inside
        this.container = new WidgetContainer(parent, title + (sorted ? " (Sorted)" : ""));
        this.element = createElement(FrequencyWidget.HTML);
        this.elementChart = this.element.querySelector("#freq-chart") as HTMLCanvasElement;
        this.container.addContent(this.element);
        this.sorted = sorted;

        // Setup text event listener
        inputEvent.subscribe((messages) => {
            this.messages = messages;
            this.messagesFreq = calculateFrequencies(messages);
            this.updateChart();
        });
    }

    updateChart() {
        const ctx = this.elementChart.getContext("2d") as CanvasRenderingContext2D;
        const keys = Object.keys(this.messagesFreq);
        if (this.sorted) keys.sort((a, b) => this.messagesFreq[b] - this.messagesFreq[a]);
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

class DeltasWidget implements Widget {
    container: WidgetContainer;
    messageView: MessagesView;
    toggleSpacingButton: ToggleButton;
    toggleModButton: ToggleButton;
    mod: boolean;
    modSize: number;
    messages: NumberMessage[];
    messagesDeltas: NumberMessage[];
    outputEvent: ListenableEvent;

    constructor(parent: HTMLElement, inputEvent: ListenableEvent) {
        this.mod = false;
        this.modSize = 0;

        // Setup container and put input inside
        this.container = new WidgetContainer(parent, "Deltas");
        this.messageView = new MessagesView("Colour");
        this.container.addContent(this.messageView.element);

        // Setup toggle gaps button
        this.toggleSpacingButton = new ToggleButton(true, "assets/icon-expand.png", "assets/icon-shrink.png", () => {
            this.messageView.toggleSpacing();
        });

        // Setup toggle mod button
        this.toggleModButton = new ToggleButton(false, "assets/icon-pct.png", "assets/icon-dot.png", () => {
            this.mod = !this.mod;
            this.recalculateDeltas();
        });

        // Add elements to container after setup
        this.container.addHeaderExtra(this.toggleSpacingButton.element);
        this.container.addHeaderExtra(this.toggleModButton.element);

        // Setup text event listener
        inputEvent.subscribe((messages, alphabet) => {
            this.messages = messages;
            this.modSize = alphabet.length;
            this.recalculateDeltas();
        });

        // Setup output event
        this.outputEvent = new ListenableEvent();
    }

    recalculateDeltas() {
        this.messagesDeltas = calculateDeltas(this.messages, this.mod ? this.modSize : null);

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
        let messagesDeltasHighlight: string[][] = [];
        for (let msg = 0; msg < this.messagesDeltas.length; msg++) {
            messagesDeltasHighlight.push([]);
            for (let col = 0; col < this.messagesDeltas[msg].length; col++) {
                const val = this.messagesDeltas[msg][col];
                if (val < 0) {
                    const pct = val / min;
                    messagesDeltasHighlight[msg].push(`hsl(0, 40%, ${90 - 50 * pct}%)`);
                } else {
                    const pct = val / max;
                    messagesDeltasHighlight[msg].push(`hsl(214, 40%, ${90 - 50 * pct}%)`);
                }
            }
        }

        // Set messages based on show gaps
        this.messageView.setMessages(this.messagesDeltas, messagesDeltasHighlight);

        // Fire output event
        this.outputEvent.fire(this.messagesDeltas);
    }
}

// ------------------------ Driver ------------------------

(() => {
    // Initialize user input
    const widgetInput = new InputWidget(ELEMENT_MAIN);
    const widgetStats = new StatsWidget(ELEMENT_MAIN, widgetInput.outputEvent);
    const widgetShared = new AlignmentWidget(ELEMENT_MAIN, widgetInput.outputEvent);
    const widgetGaps = new GapsWidget(ELEMENT_MAIN, widgetInput.outputEvent);
    const widgetFreq = new FrequencyWidget(ELEMENT_MAIN, widgetInput.outputEvent);
    const widgetFreqSorted = new FrequencyWidget(ELEMENT_MAIN, widgetInput.outputEvent, true);
    const widgetDeltas = new DeltasWidget(ELEMENT_MAIN, widgetInput.outputEvent);
    const widgetDeltasFreq = new FrequencyWidget(ELEMENT_MAIN, widgetDeltas.outputEvent, false, "Delta Frequencies");

    // Set initial value
    widgetInput.setContent(EXAMPLE_MESSAGES);
})();
