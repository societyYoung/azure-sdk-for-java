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
 * Initializes a new instance of the SampleResourceGroup class.
 * @constructor
 * @member {string} [name] resource group name 'testgroup101'
 * 
 * @member {string} [location] resource group location 'West US'
 * 
 */
function SampleResourceGroup() {
}

/**
 * Defines the metadata of SampleResourceGroup
 *
 * @returns {object} metadata of SampleResourceGroup
 *
 */
SampleResourceGroup.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'SampleResourceGroup',
    type: {
      name: 'Composite',
      className: 'SampleResourceGroup',
      modelProperties: {
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        location: {
          required: false,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = SampleResourceGroup;
