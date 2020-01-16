/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 */

package com.microsoft.azure.management.sqlvirtualmachine.v2017_03_01_preview;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Additional SQL Server feature settings.
 */
public class AdditionalFeaturesServerConfigurations {
    /**
     * Enable or disable R services (SQL 2016 onwards).
     */
    @JsonProperty(value = "isRServicesEnabled")
    private Boolean isRServicesEnabled;

    /**
     * Get enable or disable R services (SQL 2016 onwards).
     *
     * @return the isRServicesEnabled value
     */
    public Boolean isRServicesEnabled() {
        return this.isRServicesEnabled;
    }

    /**
     * Set enable or disable R services (SQL 2016 onwards).
     *
     * @param isRServicesEnabled the isRServicesEnabled value to set
     * @return the AdditionalFeaturesServerConfigurations object itself.
     */
    public AdditionalFeaturesServerConfigurations withIsRServicesEnabled(Boolean isRServicesEnabled) {
        this.isRServicesEnabled = isRServicesEnabled;
        return this;
    }

}