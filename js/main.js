//Animate Smooth Scroll
$('#view-art').on('click', function () {
    const images = $('#images').position().top;

    $('html, body').animate({
        scrollTop: images
    }, 900
    );
});


$('#view-design').on('click', function () {
    const designs = $('#designs').position().top;

    $('html, body').animate({
        scrollTop: designs
    }, 900
    );
});

