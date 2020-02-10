var url = 'http://localhost:3000'
var $loginPage = $('#loginPage')
var $registerPage = $('#registerPage')
var $listComicPage = $('#listComicPage')
var $logoutButton = $('#logoutButton')
var $updateComicPage = $('#updateComicPage')

$registerPage.hide()
// $loginPage.hide()
$logoutButton.hide()
Comic.list()

$(document).ready(() => {
    
    $(document).on('click', )
    $(document).on('click', '#loginSubmit', User.login)


})



