/**
 * Created by Utilisateur on 19/07/2016.
 */
app.factory('MenuFactory', function() {
   var menu = [
       {    
           id:0,
           title:'Prologue',
           name: 'Home'
       },
       {    
           id:1,
           title:'Chapitre 1',
           name: 'about'

       },
       {    
           id:2,
           title:'Chapitre 2',
           name: 'Team'

       },
       {    
           id:3,
           title:'Chapitre 3'
       }
   ];
    
    return menu;
});