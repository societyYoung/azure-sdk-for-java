/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */


/**
 * @class
 * Initializes a new instance of the Product class.
 * @constructor
 * The product documentation.
 * @member {array} [displayNames] Non required array of unique items from 0 to
 * 6 elements.
 * 
 * @member {number} [capacity] Non required int betwen 0 and 100 exclusive.
 * 
 * @member {string} [image] Image URL representing the product.
 * 
 */
export interface Product {
    displayNames?: string[];
    capacity?: number;
    image?: string;
}

/**
 * @class
 * Initializes a new instance of the ErrorModel class.
 * @constructor
 * @member {number} [code]
 * 
 * @member {string} [message]
 * 
 * @member {string} [fields]
 * 
 */
export interface ErrorModel {
    code?: number;
    message?: string;
    fields?: string;
}
