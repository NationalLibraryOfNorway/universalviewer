
// not included in lib.d.ts
declare function escape(s: string): any;
declare function unescape(s: string): any;

// string utils
interface String {
    format(template: string, ...args: any[]): string;
    startsWith(text: string): boolean;
    ltrim(): string;
    rtrim(): string;
    fulltrim(): string;
    toFileName(): string;
}

// array utils
interface Array{
    clone(): Array;
    last(): any;
}

interface JQuery {
    // plugins
    ellipsisFill(text: string): any;
    swapClass(removeClass: string, addClass: string): void;
    actualHeight(height: number);
    actualWidth(width: number);
    toggleExpandText(chars: string);
    
    // jsviews
    link: any;
    render: any;
}

interface JQueryStatic {
    // pubsub
    publish(event: string, eventObj?: any[]);
    subscribe(event: string, handler: Function);
    
    // jsviews
    observable: any;
    templates: any;
    views: any;
    view: any;
}

// libs
declare var easyXDM: any;
declare var OpenSeadragon: any;

// app
interface Window{
    app: any;
}