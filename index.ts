// ------------------------ Types ------------------------

type StringMessage = string[];
type NumberMessage = number[];
type Message = StringMessage | NumberMessage;
type DelimType = "comma" | "dot" | "letter" | "space";
type ConvertOption = "None" | "Int" | "Unique" | "ToAscii" | "FromAscii";
type HighlightMode = "Categoric" | "Colour";
type HighlightData = number[][] | number[][][] | string[][] | null;

// ------------------------ Constants ------------------------

const ELEMENT_WIDGET_FEED = document.querySelector(".widget-feed") as HTMLElement;

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

let WIDGET_MANAGER: WidgetManager;

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
    if (messages == null) return [];
    if (messages.length == 0) return [];

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
    listeners: Map<object, Function>;

    constructor() {
        this.listeners = new Map();
    }

    listen(listener: object, callback: Function) {
        this.listeners.set(listener, callback);
    }

    unlisten(listener: object) {
        this.listeners.delete(listener);
    }

    fire(...args: any[]) {
        this.listeners.forEach((callback) => callback(...args));
    }
}

class MessagesView {
    static HTML = `<div class="messages"></div>`;

    scrollWrapper: ScrollableDiv;
    element: HTMLElement;
    elementContent: HTMLElement;
    messages: Message[];
    highlight: HighlightData;
    highlightMode: HighlightMode;
    usingLetterGaps: boolean;
    cells: HTMLElement[][];

    constructor(highlightMode: HighlightMode = "Categoric") {
        this.scrollWrapper = new ScrollableDiv();
        this.element = this.scrollWrapper.element;
        this.elementContent = createElement(MessagesView.HTML);
        this.messages = [];
        this.highlightMode = highlightMode;
        this.usingLetterGaps = false;
        this.scrollWrapper.addContent(this.elementContent);
    }

    setMessages(messages: Message[], highlight: HighlightData = null) {
        this.messages = messages;
        this.elementContent.innerHTML = "";
        this.cells = [];

        // Find max length of any letter in any message
        let maxLetterLength = 0;
        for (let msg = 0; msg < messages.length; msg++) {
            for (let col = 0; col < messages[msg].length; col++) {
                let letter = messages[msg][col].toString();
                maxLetterLength = Math.max(maxLetterLength, letter.length);
            }
        }

        // Set max width of letter spans
        this.elementContent.style.setProperty("--adjusted-span-width", `${0.8 + maxLetterLength * 0.6}rem`);

        // Create index row
        const row = createElement(`<div class="indices"></div>`);
        let maxLength = Math.max(...messages.map((line) => line.length));
        for (let col = 0; col < maxLength; col++) {
            let letter = col.toString();
            const cell = createElement(`<span>${letter}</span>`);
            if (letter.length > maxLetterLength) {
                cell.style.fontSize = `${1 - (letter.length - maxLetterLength) * 0.15}rem`;
                cell.style.lineHeight = `${1.8 - (letter.length - maxLetterLength) * 0.05}rem`;
            }
            row.appendChild(cell);
        }
        this.elementContent.appendChild(row);

        // Create div for each row, span for each cell
        for (let msg = 0; msg < messages.length; msg++) {
            const row = createElement(`<div class="message"></div>`);
            this.cells.push([]);
            for (let col = 0; col < messages[msg].length; col++) {
                let letter = messages[msg][col].toString();
                const cell = createElement(`<span>${letter}</span>`);
                cell.addEventListener("mouseenter", () => this.hoverLetter(messages[msg][col]));
                cell.addEventListener("mouseleave", () => this.unhoverLetter(messages[msg][col]));
                row.appendChild(cell);
                this.cells[msg].push(cell);
            }
            this.elementContent.appendChild(row);
        }

        // Highlight letters
        this.setHighlight(highlight);

        // Update scroller
        this.scrollWrapper.updateThumbToContent();
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
        this.elementContent.classList.add("cell-hovered");
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
        this.elementContent.classList.remove("cell-hovered");
        for (let msg = 0; msg < this.messages.length; msg++) {
            for (let col = 0; col < this.messages[msg].length; col++) {
                if (this.messages[msg][col] == val) {
                    this.cells[msg][col].classList.remove("hovered");
                }
            }
        }
    }

    setLetterGapsActive(isActive: boolean) {
        this.usingLetterGaps = isActive;
        this.elementContent.classList.toggle("use-gaps", this.usingLetterGaps);
    }
}

class ToggleButton {
    static HTML = `
        <div class="toggle-button">
            <img />
        </div>`;

    glowWhenToggled: boolean;
    onIconPath: string;
    offIconPath: string;
    element: HTMLElement;
    elementImage: HTMLImageElement;
    clickEvent: ListenableEvent;
    isToggled: boolean;

    constructor(initialValue: boolean, offIconPath: string, onIconPath: string, glowWhenToggled: boolean = true) {
        this.clickEvent = new ListenableEvent();
        this.isToggled = initialValue;
        this.glowWhenToggled = glowWhenToggled;
        this.onIconPath = onIconPath;
        this.offIconPath = offIconPath;

        // Setup elements
        this.element = createElement(ToggleButton.HTML);
        this.elementImage = this.element.querySelector("img") as HTMLImageElement;
        this.elementImage.src = initialValue ? onIconPath : offIconPath;

        // Setup event and listener
        this.element.addEventListener("click", (e) => {
            e.stopPropagation();
            this.setToggled(!this.isToggled);
        });
    }

    setToggled(toggled: boolean) {
        this.isToggled = toggled;
        if (this.glowWhenToggled) this.element.classList.toggle("glow", this.isToggled);
        this.elementImage.src = this.isToggled ? this.onIconPath : this.offIconPath;
        this.clickEvent.fire(this.isToggled);
    }
}

class Dropdown {
    static HTML = `
    <div class="dropdown">
        <div class="dropdown-main">
            <div class="dropdown-current"></div>
            <img class="dropdown-icon-select" src="assets/icon-dropdown.png">
        </div>
        <div class="dropdown-options"></div>
    </div>`;

    mode: "icon" | "text";
    options: { [key: string]: string };
    isOpen: boolean;
    selectEvent: ListenableEvent;
    selected: string;

    element: HTMLElement;
    elementMain: HTMLElement;
    elementCurrent: HTMLElement;
    elementCurrentIcon: HTMLImageElement;
    elementIconSelect: HTMLImageElement;
    elementOptions: HTMLElement;

    constructor(options: { [key: string]: string }, initial: string | null, mode: "icon" | "text" = "icon") {
        this.mode = mode;
        this.isOpen = false;
        this.selectEvent = new ListenableEvent();

        // Setup elements
        this.element = createElement(Dropdown.HTML);
        this.elementMain = this.element.querySelector(".dropdown-main") as HTMLElement;
        this.elementCurrent = this.element.querySelector(".dropdown-current") as HTMLElement;
        this.elementIconSelect = this.element.querySelector(".dropdown-icon-select") as HTMLImageElement;
        this.elementOptions = this.element.querySelector(".dropdown-options") as HTMLElement;
        this.elementOptions.style.display = "none";

        if (this.mode == "icon") {
            this.elementCurrentIcon = createElement(`<img>`) as HTMLImageElement;
            this.elementCurrent.appendChild(this.elementCurrentIcon);
        }

        // Setup events
        this.elementMain.addEventListener("click", (e) => {
            e.stopPropagation();
            this.setOpen(!this.isOpen);
        });

        window.addEventListener("click", () => {
            this.setOpen(false);
        });

        // Setup options
        this.setOptions(options);
        this.selectOption(initial);
    }

    setOptions(options: { [key: string]: string }) {
        this.options = options;
        this.elementOptions.innerHTML = "";

        // If no options update class
        let noOptions = Object.keys(this.options).length == 0;
        this.element.classList.toggle("no-options", noOptions);
        this.elementIconSelect.src = noOptions ? "assets/icon-cross.png" : "assets/icon-dropdown.png";

        // Create option elements
        for (let option in this.options) {
            let optionElement = createElement(`<div>`);
            this.elementOptions.appendChild(optionElement);

            // Mode based content
            if (this.mode == "icon") {
                let imgElement = createElement(`<img>`) as HTMLImageElement;
                imgElement.src = this.options[option];
                optionElement.appendChild(imgElement);
            } else {
                optionElement.innerText = this.options[option];
            }

            // Add event listener
            optionElement.addEventListener("click", (e) => {
                e.stopPropagation();
                this.selectOption(option);
            });
        }
    }

    selectOption(option: string | null) {
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
        } else {
            this.elementCurrent.innerText = this.options[option];
        }

        this.selectEvent.fire(option);
        this.setOpen(false);
    }

    setOpen(open: boolean) {
        if (open == this.isOpen) return;
        if (open && Object.keys(this.options).length == 0) return;

        this.elementOptions.style.display = open ? "flex" : "none";
        this.element.classList.toggle("open", open);
        this.isOpen = open;
    }
}

class ScrollableDiv {
    static HTML = `
    <div class="scrollable-div">
        <div class="scrollable-content"></div>
        <div class="scrollable-bar">
            <div class="scrollable-thumb"</div>
        </div>
    </div>`;

    element: HTMLElement;
    elementContent: HTMLElement;
    elementBar: HTMLElement;
    elementThumb: HTMLElement;

    constructor(className: string = "") {
        // Setup elements
        this.element = createElement(ScrollableDiv.HTML);
        this.elementContent = this.element.querySelector(".scrollable-content") as HTMLElement;
        this.elementBar = this.element.querySelector(".scrollable-bar") as HTMLElement;
        this.elementThumb = this.element.querySelector(".scrollable-thumb") as HTMLElement;

        // Add class if provided
        if (className != "") this.element.classList.add(className);

        // Setup event listeners
        this.elementContent.addEventListener("scroll", () => this.updateThumbToContent());
        this.elementContent.addEventListener("input", () => this.updateThumbToContent());
        this.elementContent.addEventListener("wheel", (e) => {
            e.preventDefault();
            this.elementContent.scrollLeft += e.deltaY;
        });
        window.addEventListener("resize", () => this.updateThumbToContent());
        window.addEventListener("load", () => this.updateThumbToContent());

        this.elementThumb.addEventListener("mousedown", (e) => {
            e.preventDefault();
            this.elementThumb.classList.add("dragging");
            const startMouseX = e.clientX;
            const startThumbScroll = this.elementThumb.offsetLeft;

            const onMouseMove = (e) => {
                const deltaMouseX = e.clientX - startMouseX;
                const scrollLeftPct = (startThumbScroll + deltaMouseX) / (this.elementBar.clientWidth - this.elementThumb.clientWidth);
                this.elementContent.scrollLeft = scrollLeftPct * (this.elementContent.scrollWidth - this.elementContent.clientWidth);
            };

            const onMouseUp = () => {
                this.elementThumb.classList.remove("dragging");
                window.removeEventListener("mousemove", onMouseMove);
                window.removeEventListener("mouseup", onMouseUp);
            };

            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", onMouseUp);
        });
    }

    updateThumbToContent() {
        const clientSizeX = this.elementContent.clientWidth;
        const clientScrollableX = this.elementContent.scrollWidth;
        const clientScrollX = this.elementContent.scrollLeft;

        if (clientSizeX >= clientScrollableX) {
            this.elementThumb.style.display = "none";
            return;
        }

        this.elementThumb.style.display = "block";

        this.elementThumb.style.width = `${(clientSizeX / clientScrollableX) * 100}%`;
        this.elementThumb.style.left = `${(clientScrollX / clientScrollableX) * 100}%`;
    }

    addContent(content: HTMLElement) {
        this.elementContent.appendChild(content);
    }
}

// ------------------------ Widgets ------------------------

class WidgetManager {
    nextID: number;
    widgets: { [key: string]: Widget };
    onAddWidgetEvent: ListenableEvent;
    onRemoveWidgetEvent: ListenableEvent;

    constructor() {
        this.nextID = 0;
        this.widgets = {};
        this.onAddWidgetEvent = new ListenableEvent();
        this.onRemoveWidgetEvent = new ListenableEvent();
    }

    getNextID(): number {
        return this.nextID++;
    }

    registerWidget(widget: Widget): void {
        this.widgets[widget.id] = widget;
        this.onAddWidgetEvent.fire(widget);
    }

    removeWidget(id: number) {
        delete this.widgets[id];
        this.onRemoveWidgetEvent.fire(id);
    }

    getAvailableSources(widget: Widget): { [key: string]: Widget } {
        if (widget.getSourceType() == "None") return {};
        let sources = {};
        for (let id in this.widgets) {
            if (id != widget.id.toString()) {
                if (this.widgets[id].getOutputType() == "None") continue;
                if (this.widgets[id].getOutputType() == widget.getSourceType()) {
                    sources[id] = this.widgets[id];
                }
            }
        }
        return sources;
    }
}

class WidgetFrame {
    static HTML = `
    <div class="widget-container footer-closed">
        <div class="widget-header">
            <div class="widget-title"></div>
            <div class="widget-button-bar"></div>
        </div>
        <div class="widget-content"></div>
        <div class="widget-footer">
            <div class="widget-footer-dropdown"></div>
            <p class="widget-footer-input-type">Message[]</p>
            <img src="assets/icon-arrow.png">
            <p class="widget-footer-output-type">Message[]</p>
        </div>
    </div>`;

    widget: Widget;
    id: number;
    isClosed: boolean;
    isFooterClosed: boolean;
    element: HTMLElement;
    elementHeader: HTMLElement;
    elementTitle: HTMLElement;
    elementButtonBar: HTMLElement;
    elementContent: HTMLElement;
    elementFooter: HTMLElement;
    elementFooterSourceDropdown: HTMLElement;
    elementFooterInputType: HTMLElement;
    elementFooterOutputType: HTMLElement;
    footerButton: ToggleButton;
    sourceDropdown: Dropdown;

    constructor(parent: HTMLElement | null = null, widget: Widget, title: string = "") {
        this.widget = widget;
        this.id = widget.id;
        this.isClosed = false;
        this.isFooterClosed = true;

        // Setup container
        this.element = createElement(WidgetFrame.HTML);
        this.elementHeader = this.element.querySelector(".widget-header") as HTMLElement;
        this.elementTitle = this.element.querySelector(".widget-title") as HTMLElement;
        this.elementButtonBar = this.element.querySelector(".widget-button-bar") as HTMLElement;
        this.elementContent = this.element.querySelector(".widget-content") as HTMLElement;
        this.elementFooter = this.element.querySelector(".widget-footer") as HTMLElement;
        this.elementFooterSourceDropdown = this.element.querySelector(".widget-footer-dropdown") as HTMLElement;
        this.elementFooterInputType = this.element.querySelector(".widget-footer-input-type") as HTMLElement;
        this.elementFooterOutputType = this.element.querySelector(".widget-footer-output-type") as HTMLElement;
        this.footerButton = new ToggleButton(false, "assets/icon-connection.png", "assets/icon-connection.png");
        this.footerButton.clickEvent.listen(this, (toggled) => {
            this.setFooterClosed(!toggled);
        });
        this.sourceDropdown = new Dropdown({}, null, "text");
        this.sourceDropdown.selectEvent.listen(this, (source) => {
            widget.setSourceWidget(WIDGET_MANAGER.widgets[source]);
        });

        // Connect elements
        if (parent != null) parent.appendChild(this.element);
        this.elementFooterSourceDropdown.appendChild(this.sourceDropdown.element);
        this.elementHeader.appendChild(this.footerButton.element);

        // Add title close listener
        this.elementHeader.addEventListener("click", () => this.setClosed(!this.isClosed));

        // Listen to new widgets
        WIDGET_MANAGER.onAddWidgetEvent.listen(this, (widget) => this.updateAvailableSources());

        // Set element values
        this.setTitle(title);
        this.footerButton.setToggled(true);
        this.elementFooterInputType.innerText = this.widget.getSourceType();
        this.elementFooterOutputType.innerText = this.widget.getOutputType();
        this.updateAvailableSources();
    }

    updateAvailableSources() {
        const availableSources = WIDGET_MANAGER.getAvailableSources(this.widget);
        let sourceNames = {};
        for (let id in availableSources) {
            sourceNames[id] = availableSources[id].getTitle();
        }
        this.sourceDropdown.setOptions(sourceNames);
    }

    setTitle(title: string) {
        this.elementTitle.innerHTML = `<span class="widget-id">${this.id}</span> ${title}`;
    }

    addHeaderExtra(extra: HTMLElement) {
        this.elementButtonBar.appendChild(extra);
    }

    addContent(content: HTMLElement) {
        this.elementContent.appendChild(content);
    }

    setClosed(isClosed: boolean) {
        this.isClosed = isClosed;
        this.element.classList.toggle("closed", this.isClosed);
    }

    setFooterClosed(isClosed: boolean) {
        this.isFooterClosed = isClosed;
        this.element.classList.toggle("footer-closed", this.isFooterClosed);
    }
}

abstract class Widget {
    id: number;
    container: WidgetFrame;
    sourceWidget: Widget;

    constructor(title: string) {
        this.id = WIDGET_MANAGER.getNextID();
        this.container = new WidgetFrame(ELEMENT_WIDGET_FEED, this, title);
        WIDGET_MANAGER.registerWidget(this);
    }

    getTitle(): string {
        return this.container.elementTitle.innerText;
    }

    trySetSourceWidget(widget: Widget) {
        this.container.sourceDropdown.selectOption(widget.id.toString());
    }

    abstract setSourceWidget(widget: Widget): void;
    abstract getSourceType(): string;
    abstract getOutputEvent(): ListenableEvent;
    abstract getOutputType(): string;
    abstract getOutput(): any;
}

class InputWidget extends Widget {
    static HTML = `
    <div class="input-container">
        <div class="input-field-container">
            <img src="assets/icon-input.png">
        </div>

        <div class="input-options-container">
            <p>Delimeter</p>
            <div class="input-options-delimeter"></div>
            <p>Convert Mode</p>
            <div class="input-options-convert"></div>
        </div>

        <div class="input-parsed-container"></div>

        <div class="input-alphabet-container">
            <img src="assets/icon-alphabet.png">
        </div>
    </div>`;

    element: HTMLElement;
    elementInputFieldContainer: HTMLElement;
    elementInputScrollable: ScrollableDiv;
    elementInput: HTMLElement;
    elementOptionsDelimeter: HTMLElement;
    elementOptionsConvert: HTMLElement;
    elementParsedContainer: HTMLElement;
    elementAlphabetContainer: HTMLElement;
    elementAlphabetScrollable: ScrollableDiv;
    elementAlphabet: HTMLElement;
    parsedMessageView: MessagesView;
    delimeterDropdown: Dropdown;
    convertDropdown: Dropdown;
    toggleSpacingButton: ToggleButton;
    delimType: DelimType;
    convertOption: ConvertOption;
    rawMessages: string | null;
    outputMessages: Message[];
    alphabet: string[];
    outputEvent: ListenableEvent;

    constructor() {
        super("Input");
        this.delimType = "comma";
        this.convertOption = "None";
        this.rawMessages = "";
        this.outputMessages = [];
        this.alphabet = [];

        // Setup elements
        this.element = createElement(InputWidget.HTML);
        this.elementInputFieldContainer = this.element.querySelector(".input-field-container") as HTMLElement;
        this.elementInputScrollable = new ScrollableDiv("input-field-scrollable");
        this.elementInput = createElement(`<div class="input-field" contentEditable="true"></div>`);
        this.elementOptionsDelimeter = this.element.querySelector(".input-options-delimeter") as HTMLElement;
        this.elementOptionsConvert = this.element.querySelector(".input-options-convert") as HTMLElement;
        this.elementParsedContainer = this.element.querySelector(".input-parsed-container") as HTMLElement;
        this.parsedMessageView = new MessagesView();
        this.elementAlphabetContainer = this.element.querySelector(".input-alphabet-container") as HTMLElement;
        this.elementAlphabetScrollable = new ScrollableDiv("input-alphabet-scrollable");
        this.elementAlphabet = createElement(`<div class="input-alphabet"></div>`);
        this.delimeterDropdown = new Dropdown(
            {
                comma: "assets/icon-comma.png",
                dot: "assets/icon-dot.png",
                letter: "assets/icon-a.png",
                space: "assets/icon-space.png",
            },
            "comma",
            "icon"
        );
        this.delimeterDropdown.selectEvent.listen(this, (delimType) => {
            this.delimType = delimType;
            this.processMessages();
        });
        this.convertDropdown = new Dropdown(
            {
                None: "assets/icon-identity.png",
                Int: "assets/icon-123.png",
                Unique: "assets/icon-abacus.png",
                ToAscii: "assets/icon-to-ascii.png",
                FromAscii: "assets/icon-from-ascii.png",
            },
            "None",
            "icon"
        );
        this.convertDropdown.selectEvent.listen(this, (convertOption) => {
            this.convertOption = convertOption;
            this.processMessages();
        });
        this.toggleSpacingButton = new ToggleButton(true, "assets/icon-expand.png", "assets/icon-expand.png");
        this.toggleSpacingButton.clickEvent.listen(this, (toggled) => {
            this.parsedMessageView.setLetterGapsActive(toggled);
            this.elementAlphabet.classList.toggle("use-gaps", toggled);
        });

        // Add all elements to each other
        this.elementInputFieldContainer.appendChild(this.elementInputScrollable.element);
        this.elementInputScrollable.addContent(this.elementInput);
        this.elementAlphabetContainer.appendChild(this.elementAlphabetScrollable.element);
        this.elementAlphabetScrollable.addContent(this.elementAlphabet);
        this.elementParsedContainer.appendChild(this.parsedMessageView.element);
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

        this.toggleSpacingButton.setToggled(true);
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
        this.elementAlphabet.style.setProperty("--max-width", `${maxWidth * 0.85}rem`);

        // Set parsed messages and fire event
        this.parsedMessageView.setMessages(this.outputMessages);
        this.outputEvent.fire(this.outputMessages);

        // Update alphabet scroller
        this.elementAlphabetScrollable.updateThumbToContent();
    }

    setContent(input: number[][]) {
        this.elementInput.innerHTML = "";
        input.forEach((line) => {
            this.elementInput.innerHTML += `<div>${line.join(",")}</div> `;
        });
        this.rawMessages = this.elementInput.innerText;
        this.processMessages();
    }

    setSourceWidget(widget: Widget): void {
        throw new Error("Cannot set source widget for input widget");
    }

    getSourceType(): string {
        return "None";
    }

    getOutputEvent(): ListenableEvent {
        return this.outputEvent;
    }

    getOutputType(): string {
        return "Message[]";
    }

    getOutput(): Message[] {
        return this.outputMessages;
    }
}

class StatsWidget extends Widget {
    static HTML = `
        <div class="stats-container">
        </div>
    `;

    element: HTMLElement;
    messages: Message[];
    alphabet: string[];
    calculatedStats: { [key: string]: number };
    sourceWidget: Widget;

    constructor() {
        super("Statistics");

        // Setup elements and add to container
        this.element = createElement(StatsWidget.HTML);
        this.container.addContent(this.element);
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

    setSourceWidget(widget: Widget): void {
        if (widget.getOutputType() != this.getSourceType()) {
            throw new Error(`Cannot set source widget of different type: ${widget.getOutputType()} != ${this.getSourceType()}`);
        }

        if (this.sourceWidget != null) {
            this.sourceWidget.getOutputEvent().unlisten(this);
        }

        widget.getOutputEvent().listen(this, this.onSourceOutput.bind(this));
        this.sourceWidget = widget;
        this.onSourceOutput(widget.getOutput());
    }

    onSourceOutput(messages: Message[]) {
        this.messages = messages;
        this.alphabet = parseAlphabet(messages);
        this.recalculateStats();
    }

    getSourceType(): string {
        return "Message[]";
    }

    getOutputEvent(): ListenableEvent {
        throw new Error("Method not implemented.");
    }

    getOutputType(): string {
        return "None";
    }

    getOutput(): any {
        throw new Error("Method not implemented.");
    }
}

class AlignmentWidget extends Widget {
    messageView: MessagesView;
    toggleSpacingButton: ToggleButton;
    messages: Message[];
    messagesAlignments: NumberMessage[];
    sourceWidget: Widget;

    constructor() {
        super("Alignments");

        // Setup elements
        this.messageView = new MessagesView();
        this.toggleSpacingButton = new ToggleButton(false, "assets/icon-expand.png", "assets/icon-expand.png");
        this.toggleSpacingButton.clickEvent.listen(this, (toggled) => {
            this.messageView.setLetterGapsActive(toggled);
        });

        // Add elements to each other
        this.container.addContent(this.messageView.element);
        this.container.addHeaderExtra(this.toggleSpacingButton.element);
    }

    setSourceWidget(widget: Widget): void {
        if (widget.getOutputType() != this.getSourceType()) {
            throw new Error(`Cannot set source widget of different type: ${widget.getOutputType()} != ${this.getSourceType()}`);
        }

        if (this.sourceWidget != null) {
            this.sourceWidget.getOutputEvent().unlisten(this);
        }

        widget.getOutputEvent().listen(this, this.onSourceOutput.bind(this));
        this.sourceWidget = widget;
        this.onSourceOutput(widget.getOutput());
    }

    onSourceOutput(messages: Message[]) {
        this.messages = messages;
        this.messagesAlignments = calculateAlignments(messages);
        this.messageView.setMessages(this.messages, this.messagesAlignments);
    }

    getSourceType(): string {
        return "Message[]";
    }

    getOutputEvent(): ListenableEvent {
        throw new Error("Method not implemented.");
    }

    getOutputType(): string {
        return "None";
    }

    getOutput(): any {
        throw new Error("Method not implemented.");
    }
}

class GapsWidget extends Widget {
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
    sourceWidget: Widget;

    constructor(gapLimit: number = 15) {
        super("Gap Distances (< " + gapLimit + ")");
        this.gapLimit = gapLimit;
        this.showGaps = false;
        this.includeEnd = false;

        // Setup elements
        this.messageView = new MessagesView();
        this.toggleSpacingButton = new ToggleButton(false, "assets/icon-expand.png", "assets/icon-expand.png");
        this.toggleSpacingButton.clickEvent.listen(this, (toggled) => {
            this.messageView.setLetterGapsActive(toggled);
        });
        this.toggleShowGapsButton = new ToggleButton(false, "assets/icon-ruler.png", "assets/icon-ruler.png");
        this.toggleShowGapsButton.clickEvent.listen(this, (toggled) => {
            this.showGaps = toggled;
            this.messageView.setMessages(this.showGaps ? this.messagesGapsValues : this.messages, this.messagesGaps);
        });
        this.toggleIncludeEndButton = new ToggleButton(false, "assets/icon-paperclip-on.png", "assets/icon-paperclip-on.png");
        this.toggleIncludeEndButton.clickEvent.listen(this, (toggled) => {
            this.includeEnd = toggled;
            this.recalculateGaps();
        });

        // Add elements to each other
        this.container.addContent(this.messageView.element);
        this.container.addHeaderExtra(this.toggleSpacingButton.element);
        this.container.addHeaderExtra(this.toggleShowGapsButton.element);
        this.container.addHeaderExtra(this.toggleIncludeEndButton.element);
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

    setSourceWidget(widget: Widget): void {
        if (widget.getOutputType() != this.getSourceType()) {
            throw new Error(`Cannot set source widget of different type: ${widget.getOutputType()} != ${this.getSourceType()}`);
        }

        if (this.sourceWidget != null) {
            this.sourceWidget.getOutputEvent().unlisten(this);
        }

        widget.getOutputEvent().listen(this, this.onSourceOutput.bind(this));
        this.sourceWidget = widget;
        this.onSourceOutput(widget.getOutput());
    }

    onSourceOutput(messages: Message[]) {
        this.messages = messages;
        this.recalculateGaps();
    }

    getSourceType(): string {
        return "Message[]";
    }

    getOutputEvent(): ListenableEvent {
        throw new Error("Method not implemented.");
    }

    getOutputType(): string {
        return "None";
    }

    getOutput(): any {
        throw new Error("Method not implemented.");
    }
}

class FrequencyWidget extends Widget {
    static HTML = `
    <div class='chart-container'>
        <canvas id="freq-chart"></canvas>
    </div>`;

    element: HTMLElement;
    elementChart: HTMLCanvasElement;
    toggleSortedButton: ToggleButton;
    sorted: boolean;
    messages: Message[];
    messagesFreq: { [key: string]: number };
    chart: Chart;
    sourceWidget: Widget;

    constructor(title = "Letter Frequencies") {
        super(title);
        this.sorted = false;

        // Setup elements
        this.element = createElement(FrequencyWidget.HTML);
        this.elementChart = this.element.querySelector("#freq-chart") as HTMLCanvasElement;
        this.toggleSortedButton = new ToggleButton(false, "assets/icon-sorted.png", "assets/icon-sorted.png");
        this.toggleSortedButton.clickEvent.listen(this, (toggled) => {
            this.sorted = toggled;
            this.updateChart();
        });

        // Add elements to each other
        this.container.addContent(this.element);
        this.container.addHeaderExtra(this.toggleSortedButton.element);
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

    setSourceWidget(widget: Widget): void {
        if (widget.getOutputType() != this.getSourceType()) {
            throw new Error(`Cannot set source widget of different type: ${widget.getOutputType()} != ${this.getSourceType()}`);
        }

        if (this.sourceWidget != null) {
            this.sourceWidget.getOutputEvent().unlisten(this);
        }

        widget.getOutputEvent().listen(this, this.onSourceOutput.bind(this));
        this.sourceWidget = widget;
        this.onSourceOutput(widget.getOutput());
    }

    onSourceOutput(messages: Message[]) {
        this.messages = messages;
        this.messagesFreq = calculateFrequencies(messages);
        this.updateChart();
    }

    getSourceType(): string {
        return "Message[]";
    }

    getOutputEvent(): ListenableEvent {
        throw new Error("Method not implemented.");
    }

    getOutputType(): string {
        return "None";
    }

    getOutput(): any {
        throw new Error("Method not implemented.");
    }
}

class DeltasWidget extends Widget {
    messageView: MessagesView;
    toggleSpacingButton: ToggleButton;
    toggleModButton: ToggleButton;
    mod: boolean;
    modSize: number;
    messages: NumberMessage[];
    messagesDeltas: NumberMessage[];
    outputEvent: ListenableEvent;
    sourceWidget: Widget;

    constructor() {
        super("Deltas");
        this.mod = false;
        this.modSize = 0;

        // Setup elements
        this.messageView = new MessagesView("Colour");
        this.toggleSpacingButton = new ToggleButton(false, "assets/icon-expand.png", "assets/icon-expand.png");
        this.toggleSpacingButton.clickEvent.listen(this, (toggled) => {
            this.messageView.setLetterGapsActive(toggled);
        });
        this.toggleModButton = new ToggleButton(false, "assets/icon-pct.png", "assets/icon-pct.png");
        this.toggleModButton.clickEvent.listen(this, (toggled) => {
            this.mod = toggled;
            this.recalculateDeltas();
        });

        // Add elements to container after setup
        this.container.addContent(this.messageView.element);
        this.container.addHeaderExtra(this.toggleSpacingButton.element);
        this.container.addHeaderExtra(this.toggleModButton.element);

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

    setSourceWidget(widget: Widget): void {
        if (widget.getOutputType() != this.getSourceType()) {
            throw new Error(`Cannot set source widget of different type: ${widget.getOutputType()} != ${this.getSourceType()}`);
        }

        if (this.sourceWidget != null) {
            this.sourceWidget.getOutputEvent().unlisten(this);
        }

        widget.getOutputEvent().listen(this, this.onSourceOutput.bind(this));
        this.sourceWidget = widget;
        this.onSourceOutput(widget.getOutput());
    }

    onSourceOutput(messages: Message[]) {
        this.messages = messages as NumberMessage[];
        const alphabet = parseAlphabet(messages);
        this.modSize = alphabet.length;
        this.recalculateDeltas();
    }

    getSourceType(): string {
        return "Message[]";
    }

    getOutputEvent(): ListenableEvent {
        return this.outputEvent;
    }

    getOutputType(): string {
        return "Message[]";
    }

    getOutput(): Message[] {
        return this.messagesDeltas;
    }
}

// ------------------------ Driver ------------------------

(() => {
    WIDGET_MANAGER = new WidgetManager();

    // Initialize user input
    const widgetInput = new InputWidget();
    const widgetStats = new StatsWidget();
    const widgetShared = new AlignmentWidget();
    const widgetGaps = new GapsWidget();
    const widgetFreq = new FrequencyWidget();
    const widgetDeltas = new DeltasWidget();
    const widgetDeltasFreq = new FrequencyWidget("Delta Frequencies");

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
