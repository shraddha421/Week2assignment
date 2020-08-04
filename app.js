(function()
{
    'use strict'
    angular.module('week2assign',[])
    .service('sharedProperties', function () {
        var  boughtlist=[];

        return {
            getProperty: function () {
                return boughtlist;
            },
            setProperty: function(itemname,itemquant) {
                var item={
                name:itemname,
                quantity:itemquant
                }
                boughtlist.push(item)
            }
        };
    })

    
    .controller('ToBuy',function($scope,sharedProperties){
        $scope.buylist=[
            {
                name:"cookies",
                quantity:10
            },
            {
                name:"cheese packs",
                quantity:5
            },
            {
                name:"carrots",
                quantity:10
            },
            {
                name:"papaya",
                quantity:6
            },
            {
                name:"apples",
                quantity:10
            }
        ]
       
        $scope.Buy=function(itemname,quant,ind)
        {
                   
           sharedProperties.setProperty(itemname,quant)
           $scope.buylist.splice(ind,1)
           console.log("printing buylist",$scope.buylist)
           
                
            
          
        }
    })
    
    .controller('Bought',function($scope,sharedProperties)
    {  $scope.boughtlist=sharedProperties.getProperty()
        console.log("printing boughtlist",$scope.boughtlist)
       var Bought1=this;
      



    });


})();