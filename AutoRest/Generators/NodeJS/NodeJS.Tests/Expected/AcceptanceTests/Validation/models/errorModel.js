/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

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
function ErrorModel() {
}

/**
 * Defines the metadata of ErrorModel
 *
 * @returns {object} metadata of ErrorModel
 *
 */
ErrorModel.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Error',
    type: {
      name: 'Composite',
      className: 'ErrorModel',
      modelProperties: {
        code: {
          required: false,
          serializedName: 'code',
          type: {
            name: 'Number'
          }
        },
        message: {
          required: false,
          serializedName: 'message',
          type: {
            name: 'String'
          }
        },
        fields: {
          required: false,
          serializedName: 'fields',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ErrorModel;
