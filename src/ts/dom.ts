/*
 * Copyright (C) 2016, bitmovin GmbH, All Rights Reserved
 *
 * Authors: Mario Guggenberger <mario.guggenberger@bitmovin.com>
 *
 * This source code and its use and distribution, is subject to the terms
 * and conditions of the applicable license agreement.
 */

export interface Offset {
    left: number;
    top: number;
}

/**
 * Simple DOM manipulation and DOM element event handling modeled after jQuery (as replacement for jQuery).
 */
export class DOM2 {

    private document: Document;
    private elements: HTMLElement[];

    constructor(tagName: string, attributes: { [name: string]: string });
    constructor(selector: string);
    constructor(element: HTMLElement);
    constructor(document: Document);
    constructor(something: string | HTMLElement | Document, attributes?: { [name: string]: string }) {
        this.document = document; // Set the global document to the local document field

        if(something instanceof HTMLElement) {
            var element = something;
            this.elements = [element];
        }
        else if(something instanceof Document) {
            // When a document is passed in, we do not do anything with it, but by setting this.elements to null
            // we give the event handling method a means to detect if the events should be registered on the document
            // instead of elements.
            this.elements = null;
        }
        else if(attributes) {
            let tagName = something;
            let element = document.createElement(tagName);

            for (let attributeName in attributes) {
                let attributeValue = attributes[attributeName];
                element.setAttribute(attributeName, attributeValue);
            }

            this.elements = [element];
        }
        else {
            let selector = something;
            let elements = document.querySelectorAll(selector);

            // Convert NodeList to Array
            // https://toddmotto.com/a-comprehensive-dive-into-nodelists-arrays-converting-nodelists-and-understanding-the-dom/
            this.elements = [].slice.call(elements);
        }
    }

    /**
     * A shortcut method for iterating all elements. Shorts this.elements.forEach(...) to this.forEach(...).
     * @param handler the handler to execute an operation on an element
     */
    private forEach(handler: (element: HTMLElement) => void): void {
        this.elements.forEach(function(element) {
            handler(element);
        });
    }

    html(): string;
    html(content: string): DOM2;
    html(content?: string): string | DOM2 {
        if(arguments.length > 0) {
            if(content == undefined) {
                content = null;
            }

            this.forEach(function (element) {
                element.innerHTML = content;
            });

            return this;
        }
        else {
            return this.elements[0].innerHTML;
        }
    }

    empty(): DOM2 {
        this.forEach(function (element) {
            element.innerHTML = '';
        });
        return this;
    }

    val(): string {
        let element = this.elements[0];

        if (element instanceof HTMLSelectElement || element instanceof HTMLInputElement) {
            return element.value;
        }
        else {
            // TODO add support for missing form elements
            throw new Error(`val() not supported for ${typeof element}`);
        }
    }

    attr(attribute: string, value: string): DOM2 {
        this.forEach(function (element) {
            element.setAttribute(attribute, value);
        });
        return this;
    }

    data(dataAttribute: string): string | null;
    data(dataAttribute: string, value: string): DOM2;
    data(dataAttribute: string, value?: string): string | null | DOM2 {
        // TODO port to dataset: https://www.w3.org/TR/html5/dom.html#dom-dataset
        if(value) {
            this.forEach(function (element) {
                element.setAttribute("data-" + dataAttribute, value);
            });
            return this;
        }
        else {
            return this.elements[0].getAttribute("data-" + dataAttribute);
        }
    }

    append(...childElements: DOM2[]): DOM2 {
        this.forEach(function (element) {
            childElements.forEach(function (childElement) {
                childElement.elements.forEach(function (_, index) {
                    element.appendChild(childElement.elements[index]);
                });
            });
        });
        return this;
    }

    offset(): Offset {
        let element = this.elements[0];
        let rect = element.getBoundingClientRect();

        return {
            top: rect.top + document.body.scrollTop,
            left: rect.left + document.body.scrollLeft
        };
    }

    width(): number {
        // TODO check if this is the same as jQuery's width() (probably not)
        return this.elements[0].offsetWidth;
    }

    height(): number {
        // TODO check if this is the same as jQuery's height() (probably not)
        return this.elements[0].offsetHeight;
    }

    // TODO define handler signature
    // TODO support multiple eventNames (array or string)
    on(eventName: string, eventHandler: EventListenerOrEventListenerObject): DOM2 {
        if(this.elements == null) {
            this.document.addEventListener(eventName, eventHandler);
        }
        else {
            this.forEach(function (element) {
                element.addEventListener(eventName, eventHandler);
            });
        }

        return this;
    }

    // TODO define handler signature
    // TODO support multiple eventNames (array or string)
    off(eventName: string, eventHandler: EventListenerOrEventListenerObject): DOM2 {
        if(this.elements == null) {
            this.document.removeEventListener(eventName, eventHandler);
        }
        else {
            this.forEach(function (element) {
                element.removeEventListener(eventName, eventHandler);
            });
        }

        return this;
    }

    addClass(className: string): DOM2 {
        this.forEach(function (element) {
            if (element.classList) {
                element.classList.add(className);
            }
            else {
                element.className += ' ' + className;
            }
        });

        return this;
    }

    removeClass(className: string): DOM2 {
        this.forEach(function (element) {
            if (element.classList) {
                element.classList.remove(className);
            }
            else {
                element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        });

        return this;
    }

    hasClass(className: string): boolean {
        let element = this.elements[0];

        if (element.classList) {
            return element.classList.contains(className);
        }
        else {
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
        }
    }

    css(ruleName: string): string | null;
    css(ruleName: string, value: string): DOM2;
    css(ruleValueCollection: {[ruleName: string]: string}): DOM2;
    css(ruleNameOrCollection: string | {[ruleName: string]: string}, value?: string): string | null | DOM2 {
        if(typeof ruleNameOrCollection === "string") {
            let ruleName = ruleNameOrCollection;

            if(value) {
                this.forEach(function (element) {
                    // <any> cast to resolve TS7015: http://stackoverflow.com/a/36627114/370252
                   element.style[<any>ruleName] = value;
                });
                return this;
            }
            else {
                return getComputedStyle(this.elements[0])[<any>ruleName];

            }
        }
        else {
            let ruleValueCollection = ruleNameOrCollection;

            this.forEach(function (element) {
                // http://stackoverflow.com/a/34490573/370252
                Object.assign(element.style, ruleValueCollection);
            });

            return this;
        }
    }
}
