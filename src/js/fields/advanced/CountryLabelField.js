(function($) {

    var Alpaca = $.alpaca;

    Alpaca.Fields.CountryLabelField = Alpaca.Fields.SelectField.extend(
    /**
     * @lends Alpaca.Fields.CountryLabelField.prototype
     */
    {
        /**
         * @see Alpaca.Field#getFieldType
         */
        getFieldType: function() {
            return "countrylabel";
        },

        /**
         * @see Alpaca.Fields.Field#setup
         */
        setup: function()
        {
            // defaults
            if (Alpaca.isUndefined(this.options.capitalize))
            {
                this.options.capitalize = false;
            }

            this.schema["enum"] = [];
            this.options.optionLabels = [];

            var countriesMap = this.getMessage("countries");
            if (countriesMap)
            {
                for (var countryKey in countriesMap)
                {
                    var label = countriesMap[countryKey];
                    if (this.options.capitalize)
                    {
                        label = label.toUpperCase();
                    }

                    this.schema["enum"].push(label);
                    this.options.optionLabels.push(label);
                }
            }

            this.base();
        }

        /* builder_helpers */
        ,

        /**
         * @see Alpaca.Fields.TextField#getTitle
         */
        getTitle: function() {
            return "Country Field";
        },

        /**
         * @see Alpaca.Fields.TextField#getDescription
         */
        getDescription: function() {
            return "Provides a dropdown selector of countries.  The names of the countries are read from the I18N bundle for the current locale.";
        },

        /**
         * @private
         * @see Alpaca.Fields.TextField#getSchemaOfOptions
         */
        getSchemaOfOptions: function() {

            return Alpaca.merge(this.base(), {
                "properties": {
                    "capitalize": {
                        "title": "Capitalize",
                        "description": "Whether the values should be capitalized",
                        "type": "boolean",
                        "default": false,
                        "readonly": true
                    }
                }
            });

        },

        /**
         * @private
         * @see Alpaca.Fields.TextField#getOptionsForOptions
         */
        getOptionsForOptions: function() {
            return Alpaca.merge(this.base(), {
                "fields": {
                    "capitalize": {
                        "type": "checkbox"
                    }
                }
            });
        }

        /* end_builder_helpers */
    });

    Alpaca.registerFieldClass("countrylabel", Alpaca.Fields.CountryLabelField);
    Alpaca.registerDefaultFormatFieldMapping("countrylabel", "countrylabel");

})(jQuery);
