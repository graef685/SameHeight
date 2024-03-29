(function($) {
    $.fn.syncHeight = function() {
        var selector  = this;
        var maxHeight = -1;

        selector.each(function() {
            maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
        });

        selector.each(function() {
            $(this).height(maxHeight);
        });
    };
}(jQuery));
