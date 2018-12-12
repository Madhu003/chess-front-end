(function() {
    'use strict';

    angular.module('my-app')
        .service('ChessIcons', function() {
            var service = this;

            service.icons = {};
            service.icons.white = {};
            service.icons.black = {};

            service.icons.white.king = "&#9812;";
            service.icons.black.king = "&#9818;";

            service.icons.white.queen = "&#9813;";
            service.icons.black.queen = "&#9819;";

            service.icons.white.rock = "&#9814;";
            service.icons.black.rock = "&#9820;";

			service.icons.white.bishop = "&#9815;";
            service.icons.black.bishop = "&#9821;";					            

			service.icons.white.knight = "&#9816;";
            service.icons.black.knight = "&#9822;";

			service.icons.white.pawn = "&#9817;";
            service.icons.black.pawn = "&#9823;";	

            service.sequenceOfFirstRow = ['rock', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rock'];            	            

        });
})();