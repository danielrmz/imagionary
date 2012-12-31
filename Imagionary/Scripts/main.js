$(function () {
    var gameStarted = false;
    var dictionary = {
        "cosa": ["uno"],
        "musica": ["dos"],
        "serie": ["tres"],
        "pelicula": ["cuatro"]
    };

    var maxTeams = 2;
    var currentTeam = 1;
    var currentDeck = null;
    var currentTimer = null;
    var timerLength = 2; // minutes

    function isDeckEmpty() {
        var isEmpty = true;
        $.each(currentDeck, function (idx, list) {
            if (isEmpty == false) { return; }
            if (list.length > 0) { isEmpty = false; }
        });
        return isEmpty;
    }

    function startTimer() {
        var $container = $(".timer");
        $container.data("time-left", (timerLength * 60) - 1);
        var minutes = Math.floor(timerLength);
        var seconds = (timerLength - 2) % 60;
        $(".timer").html(("00" + minutes).slice((minutes + "").length) + ":" + ("00" + seconds).slice((seconds + "").length));

        currentTimer = setInterval(function () {
            var left = $container.data("time-left");
            $container.data("time-left", left - 1);

            var minutes = Math.floor(left / 60);
            var seconds = left % 60;

            $(".timer").html(("00" + minutes).slice((minutes + "").length) + ":" + ("00" + seconds).slice((seconds + "").length));

            if (left == 0) {
                stopTimer();
                return;
            }
        }, 1000);
    }

    function stopTimer() {
        if (currentTimer != null) {
            clearInterval(currentTimer);
            currentTimer = null;
        }
    }

    function copyDeck() {
        var newDeck = {};

        $.each(dictionary, function (idx, value) {
            newDeck[idx] = $.extend([], value);
        });

        return newDeck;
    }

    function getFromCategory(category) {
        var cat = currentDeck[category] || [];

        if (cat.length == 0) {
            return -1;
        }

        var idx = Math.floor((Math.random() * cat.length));

        var found = cat[idx];
        // Remove found value
        var newList = [];
        for (var i = 0; i < cat.length; i++) {
            if (cat[i] == found) { continue; }
            else { newList.push(cat[i]); }
        }

        if (newList.length == 0) {
            $("." + category).addClass("empty");
        }

        currentDeck[category] = newList;

        return found;
    }


    function nextTeam() {
        var $team = $(".team" + currentTeam);
        var lastTeam = currentTeam;

        $team.removeClass("turn");
        if (currentTeam == maxTeams) {
            currentTeam = 1;
        } else {
            currentTeam++;
        }
        $(".team" + currentTeam).addClass("turn");
        stopTimer();

        $(".options li").show();
        $(".options li").removeClass("disabled").removeClass("selected");
        $(".result").text("");
        $(".answer").hide();
        $(".timer").text("00:00");

        if (isDeckEmpty()) {
            var $teams = $(".team"); 
            var max = null;
            var equals = true;
            var last = null;
            $.each($teams, function (idx, team) {
                var score = $(team).find(".score").data("score");
                var maxScore = max != null ? $(max).find(".score").data("score") : 0;
                
                if (last != null && $(last).find(".score").data("score") != score) {
                    equals = false;
                }

                if (score > maxScore) {
                    max = team;
                }

                last = team;
            });

            if (equals == false) {
                $(".result").text("Equipo " + $(max).find("input").val() + " GANO!");
            } else {
                $(".result").text("EMPATE");
            }
            
        }
    }

    $(".start").on("click", function () {
        gameStarted = true;
        currentDeck = copyDeck();

        $(".container").show();
        $(".team" + currentTeam).addClass("turn");
        $(".start").hide();
        $(".timer").show();
    });

    $(".restart").on("click", function () {
        gameStarted = false;
        currentDeck = copyDeck();
        $(".options li").show();
        $(".options li").removeClass("disabled").removeClass("selected");
        $(".timer").hide();
        $(".turn").removeClass("turn");
        $(".start").show();
        $(".container").hide();
        $(".score").html("0");
        $(".result").text("");
        $(".answer").hide();
        $(".empty").removeClass("empty");
        $(".score").data("score", 0);

        stopTimer();
    });

    $(".options a").click(function () {
        var selected = $(this).parent()[0].className;
        if ($(this).parent().hasClass("selected")) { return false; }
        $(".options li").addClass("disabled");
        $(".options li." + selected).removeClass("disabled")
            .addClass("selected");
        $(".answer").show();

        var thing = getFromCategory(selected);
        if (thing == -1) {
            $("." + selected).hide();
        } else {
            $(".result").text(thing);
            startTimer();
        }

    });


    $(".si").on("click", function () {
        var $team = $(".team" + currentTeam);
        var $score = $team.find(".score");
        var score = $score.data("score") || 0;
        score = score + 1;
        $score.data("score", score);
        $score.text(score);
        nextTeam();
    });

    $(".no").on("click", function () { nextTeam(); });
});