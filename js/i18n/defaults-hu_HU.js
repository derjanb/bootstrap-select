/*
 * Translated default messages for bootstrap-select.
 * Locale: HU (Hungarian)
 * Region: HU (Hungary)
 */
(function ($) {
  ($.fn.selectpicker.locales = $.fn.selectpicker.locales || {})['hu_HU'] = {
    noneSelectedText: 'Válasszon!',
    noneResultsText: 'Nincs találat {0}',
    countSelectedText: function (numSelected, numTotal) {
      return '{0} elem kiválasztva';
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        'Legfeljebb {n} elem választható',
        'A csoportban legfeljebb {n} elem választható'
      ];
    },
    selectAllText: 'Mind',
    deselectAllText: 'Egyik sem',
    multipleSeparator: ', '
  };
})(jQuery);
