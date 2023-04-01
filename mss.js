$(document).ready(function () {
    //Search Bar Show/Hide
    $('#searchBar').hide();

    $('#searchBtn').click(function () {
        $('#searchBar').fadeToggle();
        $('section').toggleClass('blur');
        $('#accountBtn').fadeToggle();
    });

    //Account Center Show/Hide
    $('#accountChild').hide();

    $('#accountBtn').click(function () {
        $('#accountChild').fadeToggle();
    });

    //When User Scroll
    $(window).scroll(function () {

        //Bact To Top Button
        $('#bttBtn').css('animation', 'btt_animation 1s ease-in-out forwards');
    });

    //Bact To Top Button
    $("#bttBtn").click(function () {
        $("html, body").scrollTop(0, 500);
    });

    //Movie Genres
    var movieGenres = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Film-Noir', 'History', 'Horror', 'Music', 'Musical', 'Mystery', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Superhero', 'Thriller', 'War', 'Western', 'Biography', 'Disaster', 'Epic', 'Erotic', 'Exploitation', 'Mockumentary', 'Surrealism'];

    movieGenres.forEach(element => {
        $('#movieGenres').append(`<a href="#!" class="btn btn-secondary text-light rounded-5 my-3 mx-1 fw-bold genresBtn">${element}</a>`);

        $('#latestMovieGenres').append(`<div class="form-check mt-3">
                                <input type="radio" name="genres" id="${element}" class="form-check-input">
                                <label class=" text-light form-check-label" for="${element}">${element}</label>
                            </div>`);

        $('#latestMovieGenres2').append(`<div class="form-check m-3">
                                <input type="radio" name="genres" id="${element}2" class="form-check-input">
                                <label class=" text-light form-check-label" for="${element}2">${element}</label>
                            </div>`);
    });

    $('#movieGenres').append(`<a href="#!" class="btn btn-warning rounded-5 my-3 mx-1 fw-bold" id="cancelGenreBtn">cancel all</a>`);

    $('#latestMovieGenres').append(`<button class="btn form-control btn-outline-light mt-5 fw-bold"
                                type="submit">Filter</button>`);

    $('#latestMovieGenres2').append(`<button class="btn form-control btn-outline-light my-5 fw-bold"
                                type="submit">Filter</button>`);

    var selectedGenre = '';

    $('.genresBtn').click(function () {
        if (selectedGenre.includes($(this).html() + ',')) {
            $(this).removeClass('btn-danger');
            $(this).removeClass('text-light');
            $(this).addClass('btn-secondary');
            selectedGenre = selectedGenre.replace($(this).html() + ',', '');
        }
        else {
            $(this).removeClass('btn-outline-secondary');
            $(this).removeClass('text-secondary');
            $(this).addClass('btn-danger');
            selectedGenre += $(this).html() + ',';
        }
    });

    $('#cancelGenreBtn').click(function () {
        $('.genresBtn').removeClass('btn-danger');
        $('.genresBtn').addClass('btn-secondary');
    });

    //Choose Server Button
    $('.serverBtn').click(function () {
        $('.serverBtn').removeClass('btn-light');
        $('.serverBtn').removeClass('px-5');
        $(this).addClass('btn-light');
        $(this).addClass('px-5');
    });

    //Password SHow/Hide
    $('#pswShowHide').click(function () {
        $('#eye').toggleClass('fa-eye');
        $('#eye').toggleClass('fa-eye-slash');
        if ($('#eye').hasClass('fa-eye')) {
            $('#password').prop('type', 'password')
            $('#passwordConfirm').prop('type', 'password')
            $('#eyeLabel').html('show password');
        }
        else {
            $('#password').prop('type', 'text')
            $('#passwordConfirm').prop('type', 'text')
            $('#eyeLabel').html('hide password');
        }
    });

});