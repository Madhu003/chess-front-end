(function() {
    'use strict';

    angular.module('my-app', [])
        .filter('unsafe', function($sce) {
            return function(val) {
                return $sce.trustAsHtml(val);
            };
        })
        .controller('my-controller', ['ChessIcons',
            function(ChessIcons) {
                var $ctrl = this;
                $ctrl.name = "Madhu";
                console.log(this, ChessIcons);
                $ctrl.grid = [];

                for (var i = 0; i < 8; i++) {
                    let row = [];
                    for (var j = 0; j < 8; j++) {
                        row.push({ x: i, y: j});
                    }
                    $ctrl.grid.push(row);
                }

                $ctrl.grid.forEach(row => {
                	row.forEach(cell => {
                		if(cell.x == 0 || cell.x == 7){
                			cell.value = ChessIcons.icons[cell.x == 0 ? 'black' : 'white'][ChessIcons.sequenceOfFirstRow[cell.y]];	
                		}

                		if(cell.x == 1 || cell.x == 6){
                			cell.value = ChessIcons.icons[(cell.x == 1 ? 'black' : 'white')].pawn;		
                		}		
                	});
                });

                $ctrl.clickEvent = function(cell){
                	var id = "x-" + cell.x + "-y-" + cell.y;
                	console.log(id);
                	cell.isActive = cell.isActive ? 0 : 1;
                	console.log(document.getElementById(id));
                }
            }
        ]);
})();