jQuery(document).ready(function ($) {

    $('.lightbox_trigger').click(function (e) {

        e.preventDefault();

        var image_href = $(this).attr("href");

        $('body').on('click', '#lightbox', function () {
            $('#lightbox').hide();
        });

        if ($('#lightbox').length > 0) {

            $('#content').html('<img src="' + image_href + '" />');

            $('#lightbox').show();
        }

        else {

            var lightbox =
                '<img id="lightbox"  src="' + image_href + '" />'
                ;

            $('body').append(lightbox);
        }

    });


});